//============================================================================
// Eli_CheckPointWindow.js
//============================================================================

/*:
@target MZ
@base EliMZ_CheckPoint
@orderAfter EliMZ_CheckPoint

@plugindesc ♦2.2.2♦ Add cool windows for Check point system(autosave/load).
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-checkpoint-window-rpg-maker-mv/rate?source=game

@help
★★★★★ Rate the plugin! Please, is very important to me ^^
● Terms of Use
https://www.hakuenstudio.com/terms-of-use-5-0-0

==============================================================================
Features
==============================================================================

• Adds an autosave and auto load window.
• Show windows using easing animations!
• Different texts for the load and save window.

==============================================================================
How to use
==============================================================================

https://docs.google.com/document/d/1w8mGmmQRrtXwB3f2eM1Xeg4k3leYfqiSMxndCDaSndI/edit?usp=sharing

==============================================================================

@param saveWin
@text Save Window
@type struct<settingsSt>
@desc Settings related to the save window.
@default {"text":"\\i[87]This is the auto save window!\nHave fun!","width":"0","lines":"2","skin":"","backgroundType":"Window","position":"{\"duration\":\"30\",\"endDelay\":\"120\",\"easing\":\"linear\",\"separator1\":\"\",\"initialAlignX\":\"right_offScreen\",\"initialOffsetX\":\"0\",\"initialAlignY\":\"center\",\"initialOffsetY\":\"0\",\"initialAlpha\":\"0\",\"separator2\":\"\",\"targetAlignX\":\"right\",\"targetOffsetX\":\"0\",\"targetAlignY\":\"center\",\"targetOffsetY\":\"0\",\"targetAlpha\":\"255\"}","opennessBehavior":"{\"widthAlign\":\"None\",\"heightAlign\":\"Centered\",\"easing\":\"linear\",\"duration\":\"8\"}"}

@param loadWin
@text Load Window
@type struct<settingsSt>
@desc Settings related to the load window.
@default {"text":"\\i[83]This is the auto load window!\nGame loaded.","width":"0","lines":"2","skin":"","backgroundType":"Faded Horizontal","position":"{\"duration\":\"30\",\"endDelay\":\"120\",\"easing\":\"linear\",\"separator1\":\"\",\"initialAlignX\":\"right_offScreen\",\"initialOffsetX\":\"0\",\"initialAlignY\":\"bottom\",\"initialOffsetY\":\"0\",\"initialAlpha\":\"0\",\"separator2\":\"\",\"targetAlignX\":\"right\",\"targetOffsetX\":\"0\",\"targetAlignY\":\"bottom\",\"targetOffsetY\":\"0\",\"targetAlpha\":\"255\"}","opennessBehavior":"{\"widthAlign\":\"None\",\"heightAlign\":\"Centered\",\"easing\":\"linear\",\"duration\":\"8\"}"}

*/

/* -------------------------------- SETTINGS -------------------------------- */
{
/*~struct~settingsSt:

@param text
@text Text
@type multiline_string
@desc The text to be shown on the window. Can use escape codes.
@default

@param width
@text Width
@type number
@desc Set a number for the width. Leave 0 for automatic.
@default 0

@param lines
@text Lines
@type number
@desc The height of the window decided by the number of lines. Leave 0 for automatic.
@default 2

@param skin
@text Window Skin
@type file
@dir img/system
@desc The window skin.
@default 

@param backgroundType
@text Background Type
@type combo
@option Window
@option Dim
@option Transparent
@option Strong
@option Light Gradient Vertical
@option Faded Horizontal
@desc The background type.
@default Window

@param position
@text Position
@type struct<positionSt>
@desc The movement animation of the window.
@default 

@param opennessBehavior
@text Open/Close Behavior
@type struct<opennessSt>
@desc How the window will open and close.
@default {"widthAlign":"None","heightAlign":"Centered","easing":"linear","duration":"8"}

*/
}

/* -------------------------------- POSITION -------------------------------- */
{
/*~struct~positionSt:

@param duration
@text Move Duration
@type text
@desc The duration for the window to move from Initial to Target Position.
@default 1

@param endDelay
@text Show count
@type number
@desc How much time in frames the window will be visible on screen before move out.
@default 120

@param easing
@text Easing
@type combo
@option linear @option --- In --- @option easeInQuad @option easeInCubic @option easeInQuart @option easeInQuint @option easeInSine @option easeInExpo @option easeInCirc @option easeInBack @option easeInBounce @option easeInElastic @option --- Out --- @option easeOutQuad @option easeOutCubic @option easeOutQuart @option easeOutQuint @option easeOutSine @option easeOutExpo @option easeOutCirc @option easeOutBack @option easeOutBounce @option easeOutElastic @option --- In / Out --- @option easeInOutQuad @option easeInOutCubic @option easeInOutQuart @option easeInOutQuint @option easeInOutSine @option easeInOutExpo @option easeInOutCirc @option easeInOutBack @option easeInOutBounce @option easeInOutElastic @option --- Out / In --- @option easeOutInQuad @option easeOutInCubic @option easeOutInQuart @option easeOutInQuint @option easeOutInSine @option easeOutInCirc @option easeOutInExpo @option easeOutInBack @option easeOutInBounce @option easeOutInElastic 
@desc Choose the easing type. Can use \v[id].
@default linear

@param separator1
@text Initial

@param initialAlignX
@text Align X
@type select
@option left
@option center
@option right
@option left_offScreen
@option right_offScreen
@desc Select left to only use offset value.
@default left
@parent separator1

@param initialOffsetX
@text Offset X
@type text
@desc The Offset X position.
@default 0
@parent separator1

@param initialAlignY
@text Align Y
@type select
@option top
@option center
@option bottom
@option top_offScreen
@option bottom_offScreen
@desc Select top to only use offset value.
@default top
@parent separator1

@param initialOffsetY
@text Offset Y
@type text
@desc The offset Y position.
@default 0
@parent separator1

@param initialAlpha
@text Alpha
@type text
@desc The alpha value. From 0 to 1.
@default 0
@parent separator1

@param separator2
@text Target

@param targetAlignX
@text Align X
@type select
@option left
@option center
@option right
@desc Select left to only use offset value.
@default left
@parent separator2

@param targetOffsetX
@text Offset X
@type text
@desc The Offset X position.
@default 0
@parent separator2

@param targetAlignY
@text Align Y
@type select
@option top
@option center
@option bottom
@desc Select top to only use offset value.
@default top
@parent separator2

@param targetOffsetY
@text Offset Y
@type text
@desc The offset Y position.
@default 0
@parent separator2

@param targetAlpha
@text Alpha
@type text
@desc The alpha value. From 0 to 1.
@default 255
@parent separator2

*/
}

/* -------------------------------- OPENNESS -------------------------------- */
{

/*~struct~opennessSt:

@param widthAlign
@text Width Direction
@type select
@option None
@option Left to Right
@option Centered
@option Right to Left
@desc The direction that the window will open/close, regardless the width.
@default None

@param heightAlign
@text Height Direction
@type select
@option None
@option Top to Bottom
@option Centered
@option Bottom to Top
@desc The direction that the window will open/close, regardless the height.
@default Centered

@param easing
@text Easing
@type combo
@option inherit @option linear @option --- In --- @option easeInQuad @option easeInCubic @option easeInQuart @option easeInQuint @option easeInSine @option easeInExpo @option easeInCirc @option easeInBack @option easeInBounce @option --- Out --- @option easeOutQuad @option easeOutCubic @option easeOutQuart @option easeOutQuint @option easeOutSine @option easeOutExpo @option easeOutCirc @option easeOutBack @option easeOutBounce @option --- In / Out --- @option easeInOutQuad @option easeInOutCubic @option easeInOutQuart @option easeInOutQuint @option easeInOutSine @option easeInOutExpo @option easeInOutCirc @option easeInOutBack @option easeInOutBounce @option --- Out / In --- @option easeOutInQuad @option easeOutInCubic @option easeOutInQuart @option easeOutInQuint @option easeOutInSine @option easeOutInCirc @option easeOutInExpo @option easeOutInBack @option easeOutInBounce
@desc Choose the easing type. Can use \v[id]. "inherit" will get the same easing that was set on the position settings.
@default linear

@param duration
@text Duration
@type text
@desc How fast the window will open/close. In frames.
@default 8

*/

}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_CheckPointWindow = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
Eli.CheckPointWindow = {

    Parameters: class {
        constructor(parameters){
            this.loadWin = this.parseWinParameters(JSON.parse(parameters.loadWin))
            this.saveWin = this.parseWinParameters(JSON.parse(parameters.saveWin))
        }

        parseWinParameters(parameters){
            return {
                text: parameters.text,
                lines: Number(parameters.lines),
                width: Number(parameters.width),
                skin: parameters.skin,
                backgroundType: this.findBackgroundType(parameters.backgroundType),
                position: this.parsePosition(JSON.parse(parameters.position)),
                opennessBehavior: this.parseOpenness(JSON.parse(parameters.opennessBehavior))
            }
        }

        parsePosition(parameters){
            return {
                initial: this.parseInitialAndTargetPosition(parameters, "initial"),
                target: this.parseInitialAndTargetPosition(parameters, "target"),
                duration: Math.max(1, Number(parameters.duration)),
                endDelay:  Math.max(1, Number(parameters.endDelay)),
                easing: parameters.easing,
            }
        }

        parseInitialAndTargetPosition(parameters, type){
            return {
                alignX: parameters[type + "AlignX"],
                offsetX: parameters[type + "OffsetX"],
                alignY: parameters[type + "AlignY"],
                offsetY: parameters[type + "OffsetY"],
                alpha: Number(parameters[type + "Alpha"]),
            }
        }

        parseOpenness(parameters){
            return {
                widthAlign: parameters.widthAlign,
                heightAlign: parameters.heightAlign,
                easing: parameters.easing,
                duration: Number(parameters.duration),
            }
        }

        findBackgroundType(type){
            const options = {
                "Window":                   0,
                "Dim":                      1,
                "Transparent":              2,
                "Strong":                   3,
                "Light Gradient Vertical":  4,
                "Faded Horizontal":         5,
            }
            return options[type]
        }
    },

    Window_CheckPoint: class extends Window_Base {

        get openness() {
            return this._openness
        }
    
        set openness(value) {
            this._openness = value.clamp(0, 255)
            this.updateHorizontalOpenness(this.getParam().opennessBehavior.widthAlign)
            this.updateVerticalOpenness(this.getParam().opennessBehavior.heightAlign)
        }

        initialize() {
            super.initialize(new Rectangle(0, 0, 100, 100))
            this.initMembers()
            this.move(...this.createWindowRect())
            this.createContents()
            this.setBackgroundType(this.getParam().backgroundType)
            this.start()
        }
    
        initMembers(){
            this.animationGroup = new Eli.AnimeGroup([], {paused: true})
        }

        createWindowRect(){
            const x = 0
            const y = 0
            const width = this.calculateWidth()
            const height = this.calculateHeight()

            return [x, y, width, height]
        }

        calculateWidth(){
            if(this.getParam().width === 0){
                const standardPadding = this.padding * 2
                const textPadding = this.getItemPadding()
                const allTexts = this.getParam().text.split("\n")
                let textWidth = 0

                for(const text of allTexts){
                    const newWidth = this.textSizeEx(text).width

                    if(newWidth >= textWidth){
                        textWidth = newWidth
                    }
                }

                const width = Math.round(standardPadding + textPadding + textWidth)

                return width
            }else{
                return this.getParam().width
            }
        }
    
        calculateHeight(){
            if(this.getParam().lines === 0){
                const text = this.getParam().text
                const lines = text.split("\n").length
        
                return this.fittingHeight(lines)
            }else{
                return this.fittingHeight(this.getParam().lines)
            }
        }

        getParam(){
            return Eli.CheckPointWindow.getParam().saveWin
        }

        start(){
            this.drawTextEx(this.getParam().text, 0, 0, this.contentsWidth())
            this.createAnime()
        }

        createAnime(){
            const param = this.getParam()
            const {easing, duration, endDelay} = param.position
            const initPos = param.position.initial
            const targetPos = param.position.target
            const [initialX, initialY] = this.createPosition(initPos, targetPos.offsetX, targetPos.offsetY)
            const [targetX, targetY] = this.createPosition(targetPos)
            const defaultData = Eli.AnimeManager.createDefaultData()

            const props = {
                openness: this.createOpennessAnimeProp(),
                x: {value: [initialX, targetX]},
                y: {value: [initialY, targetY]},
                alpha: {value: [initPos.alpha, targetPos.alpha]},
            }
    
            defaultData.duration = duration
            defaultData.easing = easing
            defaultData.direction = "alternate"
            defaultData.endDelay = endDelay

            if(this.constructor.name === "Window_LoadPoint"){
                defaultData.startDelay = 30
            }
    
            const animations = Eli.AnimeManager.createAnimations(this, props, defaultData)
            this.animationGroup.setAnimations(animations)
            this.animationGroup.onComplete = this.onAnimeGroupComplete.bind(this)
            this.animationGroup.play("normal")
        }

        onAnimeGroupComplete(){
            this.parent.removeChild(this)
        }

        createPosition(position, targetOffsetX = 0, targetOffsetY = 0){
            const {alignX, alignY, offsetX, offsetY} = position
            const realOffsetX = new Function(`return ${offsetX}`).bind(this)()
            const realOffsetY = new Function(`return ${offsetY}`).bind(this)()
            const realTargetOffsetX = new Function(`return ${targetOffsetX}`).bind(this)()
            const realTargetOffsetY = new Function(`return ${targetOffsetY}`).bind(this)()
    
            const x = {
                left: realOffsetX,
                center: (Graphics.boxWidth/2 - this.width/2) + realOffsetX,
                right: (Graphics.boxWidth - this.width) + realOffsetX,
                left_offScreen: 0 - (Math.abs(realTargetOffsetX) + this.width),
                right_offScreen: Graphics.width + this.width + Math.abs(realTargetOffsetX),
            }[alignX]
    
            const y = {
                top: realOffsetY,
                center: (Graphics.boxHeight/2 - this.height/2) + realOffsetY,
                bottom: (Graphics.boxHeight - this.height) + realOffsetY,
                top_offScreen: 0 - (Math.abs(realTargetOffsetY) + this.height),
                bottom_offScreen: Graphics.height + this.height + Math.abs(realTargetOffsetY),
            }[alignY]
            
            return [Math.round(x), Math.round(y)]
        }

        createOpennessAnimeProp(){
            const {widthAlign, heightAlign, easing, duration} = this.getParam().opennessBehavior
            const initialOpenness = (widthAlign === "None" && heightAlign === "None") ? 255 : 0
            const parsedEasing = easing === "inherit" ? this.getParam().position.easing : Eli.Utils.convertEscapeVariablesOnly(easing)

            return {
                value: [initialOpenness, 255],
                duration: duration,
                easing: parsedEasing,
            }
        }

        loadWindowskin(){
            if(this.getParam().skin){
                this.windowskin = ImageManager.loadSystem(this.getParam().skin)
            }else{
                super.loadWindowskin()
            }
        }
    
        update(){
            super.update()
            this.updateVisibility()
            this.animationGroup.update()
        }

        updateVisibility(){}
    
        playAnime(){
            this.animationGroup.play("normal")
        }
    },

    initialize(){
        this.initParameters()
    },

    initParameters(){
        const parameters = PluginManager.parameters(Eli.PluginManager.getPluginName())
        this.parameters = new this.Parameters(parameters)
    },

    getParam(){
        return this.parameters
    },

    changeAutoLoadStatus(flag){
        ConfigManager.isAutoLoading = flag
        ConfigManager.save()
    }

}

Eli.CheckPointWindow.Window_SavePoint = class Window_SavePoint extends Eli.CheckPointWindow.Window_CheckPoint {

    getParam(){ 
        return Eli.CheckPointWindow.getParam().saveWin
    }

    updateVisibility(){
        this.visible = !SceneManager._scene?._windowLayer?.children?.includes(SceneManager._scene?.loadPointWindow)
    }
}

Eli.CheckPointWindow.Window_LoadPoint = class Window_LoadPoint extends Eli.CheckPointWindow.Window_CheckPoint {

    getParam(){ 
        return Eli.CheckPointWindow.getParam().loadWin
    }

    onAnimeGroupComplete(anime){
        super.onAnimeGroupComplete(anime)
        Eli.CheckPointWindow.changeAutoLoadStatus(false)
    }
}

{

const Plugin = Eli.CheckPointWindow
const Alias = {}

Plugin.initialize()

/* ----------------------------- CONFIG MANAGER ----------------------------- */
ConfigManager.isAutoLoading = false

Alias.ConfigManager_makeData = ConfigManager.makeData
ConfigManager.makeData = function() {
    const config = Alias.ConfigManager_makeData.call(this)
    config.isAutoLoading = this.isAutoLoading
    return config
}

Alias.ConfigManager_applyData = ConfigManager.applyData
ConfigManager.applyData = function(config) {
    Alias.ConfigManager_applyData.call(this, config)
    this.isAutoLoading = this.readFlag(config, "isAutoLoading", false)
}

/* ------------------------------ DATA MANAGER ------------------------------ */
Alias.DataManager_setupNewGame = DataManager.setupNewGame
DataManager.setupNewGame = function() {
    Plugin.changeAutoLoadStatus(false)
    Alias.DataManager_setupNewGame.call(this)
}

Alias.DataManager_loadGame = DataManager.loadGame
DataManager.loadGame = function(savefileId) {
    if(savefileId > 0){
        Plugin.changeAutoLoadStatus(false)
    }
    return Alias.DataManager_loadGame.call(this, savefileId)
}

/* ------------------------------- SCENE BASE ------------------------------- */
Alias.Scene_Base_executeAutosavePlus = Scene_Base.prototype.executeAutosavePlus
Scene_Base.prototype.executeAutosavePlus = function(id = 0) {
    this.isAutoSaving = id === 0
    Alias.Scene_Base_executeAutosavePlus.call(this, id)
}

/* -------------------------------- SCENE MAP ------------------------------- */
Alias.Scene_Map_onAutoloadSuccess = Scene_Map.prototype.onAutoloadSuccess
Scene_Map.prototype.onAutoloadSuccess = function(isAutoSlot) {
    Plugin.changeAutoLoadStatus(isAutoSlot)
    Alias.Scene_Map_onAutoloadSuccess.call(this, isAutoSlot)
}

Alias.Scene_Map_start = Scene_Map.prototype.start
Scene_Map.prototype.start = function(){
    Alias.Scene_Map_start.call(this)

    if(ConfigManager.isAutoLoading){
        this.loadPointWindow = new Eli.CheckPointWindow.Window_LoadPoint()
        this.addWindow(this.loadPointWindow)
        Plugin.changeAutoLoadStatus(false)
    }
}

Alias.Scene_Map_onAutosaveSuccess = Scene_Map.prototype.onAutosaveSuccess
Scene_Map.prototype.onAutosaveSuccess = function() {
    Alias.Scene_Map_onAutosaveSuccess.call(this)

    if(this.isAutoSaving){
        this.savePointWindow = new Eli.CheckPointWindow.Window_SavePoint()
        this.addWindow(this.savePointWindow)
    }

    this.isAutoSaving = false
}

Alias.Scene_Map_onAutosaveFailure = Scene_Map.prototype.onAutosaveFailure
Scene_Map.prototype.onAutosaveFailure = function() {
    Alias.Scene_Map_onAutosaveFailure.call(this)
    this.isAutoSaving = false
}

/* ----------------------------- SCENE GAME OVER ---------------------------- */
Alias.Scene_Gameover_onAutoloadSuccess = Scene_Gameover.prototype.onAutoloadSuccess
Scene_Gameover.prototype.onAutoloadSuccess = function() {
    Plugin.changeAutoLoadStatus(true)
    Alias.Scene_Gameover_onAutoloadSuccess.call(this)
}

}