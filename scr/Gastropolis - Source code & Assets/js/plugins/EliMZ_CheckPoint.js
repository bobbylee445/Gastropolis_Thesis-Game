//============================================================================
// Eli_CheckPoint.js
//============================================================================

/*:
@target MZ
@base EliMZ_Book
@orderAfter EliMZ_HelpWindows

@plugindesc ♦1.3.0♦ Check point system(autosave/load).
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-checkpoint-rpg-maker-mv/rate?source=game

@help
★★★★★ Rate the plugin! Please, is very important to me ^^
● Terms of Use
https://www.hakuenstudio.com/terms-of-use-5-0-0

==============================================================================
Requirements
==============================================================================

Need Eli Book.
Order After Eli Book.

==============================================================================
Features
==============================================================================

• Autosave / autoload
• Autoload option after game over
• Run a common event after autoload
• It is not possible to save manually in the auto slot

==============================================================================
How to use
==============================================================================

https://docs.google.com/document/d/1bJvw7uHQE67lDn55qnOsGn2Kk3Odymi_6xA7aYA7qns/edit?usp=sharing

==============================================================================

@param autoSaveHelp
@text Scene_Save - Help Text
@type text
@desc Choose a description for the autosave slot in Scene_Save.
@default You can't overwrite an autosave file.

@param autoLoadHelp
@text Scene_Load - Help Text
@type text
@desc Choose a description for the autosave slot in Scene_Load.
@default Continue from your autosave.

@param autoCommonEvent
@text Auto Load Common Event
@type common_event
@desc Choose a common event to play when the autosave file gets loaded.
@default 0

@param autoLoadInGameOver
@text AutoLoad in GameOver
@type boolean
@desc Choose if you want to load the game when the game is over.
@default true

@param autoSaveOnMapTransfer
@text Auto Save On Map Transfer
@type boolean
@desc Set to true if you want to auto save on map transfer.
@default true

@param autoSaveAfterBattle
@text Auto Save After Battle
@type boolean
@desc Set to true if you want to auto save when a battle ends.
@default true

@command cmd_save
@text Auto Save
@desc Execute an auto save.

@command cmd_load
@text Auto Load
@desc Execute an auto load.

@command cmd_saveFile
@text Save On File
@desc Saves on a specific save file.

    @arg id
    @text File Id
    @type text
    @desc A save file id to save. Can use formulas and \v[ID]
    @default 0

@command cmd_loadFile
@text Load File
@desc Load a specific save file.

    @arg id
    @text File Id
    @type text
    @desc A save file id to load. Can use formulas and \v[ID]
    @default 0

*/

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_CheckPoint = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
Eli.CheckPoint = {

    Parameters: class {
        constructor(parameters){
            this.autoLoadHelp = parameters.autoLoadHelp
            this.autoSaveHelp = parameters.autoSaveHelp
            this.autoCommonEvent = Number(parameters.autoCommonEvent)
            this.autoLoadInGameOver = parameters.autoLoadInGameOver === "true"
            this.autoSaveOnMapTransfer = parameters.autoSaveOnMapTransfer === "true"
            this.autoSaveAfterBattle = parameters.autoSaveAfterBattle === "true"
        }
    },

    initialize(){
        this.initParameters()
        this.registerPluginCommands()
    },

    initParameters(){
        const parameters = PluginManager.parameters(Eli.PluginManager.getPluginName())
        this.parameters = new this.Parameters(parameters)
    },

    registerPluginCommands(){
        const commands = ["cmd_save", "cmd_load", "cmd_saveFile", "cmd_loadFile"]
        Eli.PluginManager.registerCommands(this, commands)
    },

    getParam(){
        return this.parameters
    },

    isAutoLoad(){
        return DataManager.latestSavefileId() === 1
    },

    afterAutoLoad(){  
        this.loadCommonEvent()
    },

    loadCommonEvent() {
        $gameTemp.reserveCommonEvent(this.getParam().autoCommonEvent)
    },

    cmd_save(args){
        Eli.Utils.scene().executeAutosavePlus(0)
    },

    cmd_load(args){
        Eli.Utils.scene().executeAutoload(0)
    },

    cmd_saveFile(args){
        const id = new Function(`return ${Eli.PluginManager.parseVariables(args.id)}`)()

        if(typeof id === "number"){
            Eli.Utils.scene().executeAutosavePlus(id)
        }
    },

    cmd_loadFile(args){
        const id = new Function(`return ${Eli.PluginManager.parseVariables(args.id)}`)()

        if(typeof id === "number"){
            Eli.Utils.scene().executeAutoload(id)
        }
    }

}

{

const Plugin = Eli.CheckPoint
const Alias = {}
window.$checkPoint = Plugin

Plugin.initialize()

/* ------------------------------- GAME SYSTEM ------------------------------ */
Alias.Game_System_onAfterLoad = Game_System.prototype.onAfterLoad
Game_System.prototype.onAfterLoad = function() {
    Alias.Game_System_onAfterLoad.call(this)

    if(Plugin.isAutoLoad()) {
        Plugin.afterAutoLoad()
    }
}

/* ------------------------------- SCENE BASE ------------------------------- */
Scene_Base.prototype.executeAutosave = function() {
    this.executeAutosavePlus(0)
}

Scene_Base.prototype.executeAutosavePlus = function(id = 0) {
    $gameSystem.onBeforeSave()
    DataManager.saveGame(id)
        .then(() => this.onAutosaveSuccess())
        .catch(() => this.onAutosaveFailure())
}

/* -------------------------------- SCENE MAP ------------------------------- */
Scene_Map.prototype.executeAutoload = function(id = 0) {
    DataManager.loadGame(id)
        .then(() => this.onAutoloadSuccess(id === 0))
        .catch(() => this.onAutoloadFailure())
}

Scene_Map.prototype.onAutoloadSuccess = function(isAutoSlot) {
    this._loadSuccess = true
    SoundManager.playLoad()
    this.fadeOutAll()
    this.reloadMapIfUpdatedForAutoLoad()
    SceneManager.goto(Scene_Map)
}

Alias.Scene_Map_executeAutosave = Scene_Map.prototype.executeAutosave
Scene_Map.prototype.executeAutosave = function() {
    if(Plugin.getParam().autoSaveOnMapTransfer){
        Alias.Scene_Map_executeAutosave.call(this)
    }
}

Scene_Map.prototype.onAutoloadFailure = function() {
    SoundManager.playBuzzer()
}

Scene_Map.prototype.reloadMapIfUpdatedForAutoLoad = function() {
    if($gameSystem.versionId() !== $dataSystem.versionId) {
        const mapId = $gameMap.mapId()
        const x = $gamePlayer.x
        const y = $gamePlayer.y
        $gamePlayer.reserveTransfer(mapId, x, y)
        $gamePlayer.requestMapReload()
    }
}

Alias.Scene_Map_initialize = Scene_Map.prototype.initialize
Scene_Map.prototype.initialize = function(){
    Alias.Scene_Map_initialize.call(this)
    this._loadSuccess = false
}

Alias.Scene_Map_terminate = Scene_Map.prototype.terminate
Scene_Map.prototype.terminate = function() {
    Alias.Scene_Map_terminate.call(this)
    if(this._loadSuccess){
        $gameSystem.onAfterLoad()
    }
}

/* ------------------------------ SCENE BATTLE ------------------------------ */
Alias.Scene_Battle_executeAutosave = Scene_Battle.prototype.executeAutosave
Scene_Battle.prototype.executeAutosave = function() {
    if(Plugin.getParam().autoSaveAfterBattle){
        Alias.Scene_Battle_executeAutosave.call(this)
    }
}

/* ----------------------------- SCENE GAME OVER ---------------------------- */
Scene_Gameover.prototype.executeAutoload = function(id = 0) {
    DataManager.loadGame(id)
        .then(() => this.onAutoloadSuccess())
        .catch(() => this.onAutoloadFailure())
}

Scene_Gameover.prototype.onAutoloadSuccess = function() {
    this._loadSuccess = true
    SoundManager.playLoad()
    this.fadeOutAll()
    this.reloadMapIfUpdatedForAutoLoad()
    SceneManager.goto(Scene_Map)
}

Scene_Gameover.prototype.onAutoloadFailure = function() {
    SoundManager.playBuzzer()
}

Scene_Gameover.prototype.reloadMapIfUpdatedForAutoLoad = function() {
    if($gameSystem.versionId() !== $dataSystem.versionId) {
        const mapId = $gameMap.mapId()
        const x = $gamePlayer.x
        const y = $gamePlayer.y
        $gamePlayer.reserveTransfer(mapId, x, y)
        $gamePlayer.requestMapReload()
    }
}

Alias.Scene_Gameover_initialize = Scene_Gameover.prototype.initialize
Scene_Gameover.prototype.initialize = function(){
    Alias.Scene_Gameover_initialize.call(this)
    this._loadSuccess = false
}

Alias.Scene_Gameover_terminate = Scene_Gameover.prototype.terminate
Scene_Gameover.prototype.terminate = function() {
    Alias.Scene_Gameover_terminate.call(this)

    if(this._loadSuccess){
        $gameSystem.onAfterLoad()
    }
}

Alias.Scene_Gameover_gotoTitle = Scene_Gameover.prototype.gotoTitle;
Scene_Gameover.prototype.gotoTitle = function() {
    if(Plugin.getParam().autoLoadInGameOver) {
        Plugin.cmd_load()
    }else{
        Alias.Scene_Gameover_gotoTitle.call(this)
    }
}

if(!Imported.Eli_HelpWindows){

/* ------------------------------- SCENE FILE ------------------------------- */
Alias.Scene_File_create = Scene_File.prototype.create
Scene_File.prototype.create = function() {
    Alias.Scene_File_create.call(this)
    this._listWindow.setHelpWindow(this._helpWindow)
}

/* ---------------------------- WINDOW SAVE LIST ---------------------------- */
Alias.Window_SavefileList_updateHelp = Window_SavefileList.prototype.updateHelp
Window_SavefileList.prototype.updateHelp = function(){
    Alias.Window_SavefileList_updateHelp.call(this)
    this.updateMoreHelp()
}

Window_SavefileList.prototype.updateMoreHelp = function(){
    if(this._mode === 'save'){
        this.updateSaveHelp()

    }else if(this._mode === 'load'){
        this.updateLoadHelp()
    }
}

Window_SavefileList.prototype.updateSaveHelp = function(){
    if(this.index() === 0 && this._autosave){
        const text = Plugin.getParam().autoSaveHelp
        this._helpWindow.setText(text || '')

    }else{
        const text = TextManager.saveMessage
        this._helpWindow.setText(text || '')
    }
}

Window_SavefileList.prototype.updateLoadHelp = function(){
    if(this.index() === 0 && this._autosave){
        const text = Plugin.getParam().autoLoadHelp
        this._helpWindow.setText(text || '')

    }else{
        const text = TextManager.loadMessage
        this._helpWindow.setText(text || '')
    }
}

}

}