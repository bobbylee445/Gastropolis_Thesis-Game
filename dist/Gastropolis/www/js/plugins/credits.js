(function(_) {

"use strict";

//-----------------------------------------------------------------------------
// SRD.Credits
//-----------------------------------------------------------------------------

var params = PluginManager.parameters('SRD_CreditsPlugin');

_.data = JSON.parse(params['Credit Data']);

_.useTitle = String(params['Add to Title?']).trim().toLowerCase() === 'true';
_.titleName = String(params['Command Name']);

_.descWindow = String(params['Use Desc. Window']).trim().toLowerCase() === 'true';
_.creditWidth = parseInt(params['Credit Window Width']);
_.fontSize = parseInt(params['Desc. Text Size']);
_.rows = parseInt(params['Category Rows']);
_.columns = parseInt(params['Category Columns']);
_.align = String(params['Text Alignment']);

_.categories = [];
_.lists = {};

_.setup = function() {
    for (let i = 0; i < _.data.length; i++) {
        const data = JSON.parse(_.data[i]);
        const category = data['Name'];
        const credits = JSON.parse(data['Credits']);
        _.categories.push(category);
        _.lists[category] = credits.map(credit => JSON.parse(credit));
    }
};

_.setup();

//-----------------------------------------------------------------------------
// Game_Interpreter
//-----------------------------------------------------------------------------

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.apply(this, arguments);
    if (command.trim().toLowerCase() === 'OpenCredits') {
        SceneManager.push(Scene_SRD_Credits);
    }
};

//-----------------------------------------------------------------------------
// Scene_Title
//-----------------------------------------------------------------------------

Scene_Title.prototype.openCredits = function() {
    this._commandWindow.close();
    SceneManager.push(Scene_SRD_Credits);
};

var _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
    _Scene_Title_createCommandWindow.apply(this, arguments);
    if (_.useTitle) this._commandWindow.setHandler('srd-credits', this.openCredits.bind(this));
};

//-----------------------------------------------------------------------------
// Window_TitleCommand
//-----------------------------------------------------------------------------

var _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
    _Window_TitleCommand_makeCommandList.apply(this, arguments);
    if (_.useTitle) this.addCommand(_.titleName, 'srd-credits');
};

// The rest of the script remains unchanged from your original version
// starting from Scene_SRD_Credits definition and other window classes...

})(SRD.Credits);
