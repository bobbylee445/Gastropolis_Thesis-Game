/*:
 * @plugindesc Custom Save File Naming Plugin
 * @author Your Name
 * @help
 * This plugin allows players to rename their save slots. 
 * Save names will be stored along with the save data.
 *
 * No plugin commands are needed.
 */

(function() {
    const DataManager_createGameObjects = DataManager.createGameObjects;
    const DataManager_makeSaveContents = DataManager.makeSaveContents;
    const DataManager_extractSaveContents = DataManager.extractSaveContents;

    // Store custom save names
    DataManager.createGameObjects = function() {
        DataManager_createGameObjects.call(this);
        if (!this._saveFileNames) {
            this._saveFileNames = {};
        }
    };

    // Include save names in save contents
    DataManager.makeSaveContents = function() {
        const contents = DataManager_makeSaveContents.call(this);
        contents.saveFileNames = this._saveFileNames;
        return contents;
    };

    // Extract save names from save contents
    DataManager.extractSaveContents = function(contents) {
        DataManager_extractSaveContents.call(this, contents);
        this._saveFileNames = contents.saveFileNames || {};
    };

    // Add a rename option to the save menu
    const Window_SavefileList_initialize = Window_SavefileList.prototype.initialize;
    Window_SavefileList.prototype.initialize = function(x, y, width, height) {
        Window_SavefileList_initialize.call(this, x, y, width, height);
        this._renameMode = false;
    };

    Window_SavefileList.prototype.processRename = function() {
        this._renameMode = true;
        this.activate();
        this.refresh();
    };

    Window_SavefileList.prototype.processOk = function() {
        if (this._renameMode) {
            this.processRenameOk();
        } else {
            Window_Selectable.prototype.processOk.call(this);
        }
    };

    Window_SavefileList.prototype.processRenameOk = function() {
        const savefileId = this.index() + 1;
        const saveName = prompt("Enter a new name for this save:", DataManager._saveFileNames[savefileId] || "");
        if (saveName !== null) {
            DataManager._saveFileNames[savefileId] = saveName;
        }
        this._renameMode = false;
        this.activate();
        this.refresh();
    };

    // Display custom save names in the save/load menu
    const Window_SavefileList_drawFileId = Window_SavefileList.prototype.drawFileId;
    Window_SavefileList.prototype.drawFileId = function(id, x, y) {
        const saveName = DataManager._saveFileNames[id];
        if (saveName) {
            this.drawText(saveName, x, y, 180);
        } else {
            Window_SavefileList_drawFileId.call(this, id, x, y);
        }
    };

    // Add a rename option to the command window
    const Window_SaveCommand_makeCommandList = Window_SaveCommand.prototype.makeCommandList;
    Window_SaveCommand.prototype.makeCommandList = function() {
        Window_SaveCommand_makeCommandList.call(this);
        this.addCommand("Rename Save", "rename");
    };

    const Scene_File_createListWindow = Scene_File.prototype.createListWindow;
    Scene_File.prototype.createListWindow = function() {
        Scene_File_createListWindow.call(this);
        this._listWindow.setHandler("rename", this.commandRename.bind(this));
    };

    Scene_File.prototype.commandRename = function() {
        this._listWindow.processRename();
    };
})();
