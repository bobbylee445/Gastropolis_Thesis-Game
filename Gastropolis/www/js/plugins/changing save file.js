/*:
 * @target MV
 * @plugindesc Save title = name of actor 1.
 * @author Caethyril
 * @url https://forums.rpgmakerweb.com/threads/167397/
 * @help Free to use and/or modify for any project, no credit required.
 */

// Patch - add new info property.
;void (function(alias) {
  DataManager.makeSavefileInfo = function() {
    var o = alias.apply(this, arguments);
    o.displayName = $gameActors.actor(1).name();
    return o;
  };
})(DataManager.makeSavefileInfo);

// Override - draw title based on new info instead.
Window_SavefileList.prototype.drawFileId = function(id, x, y) {
  var info = DataManager.loadSavefileInfo(id);
  var text = info ? info.displayName : "";
  this.drawText(text, x, y, 180);
};