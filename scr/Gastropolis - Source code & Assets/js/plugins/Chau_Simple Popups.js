/*:
@author Chaucer
@plugindesc | Simple Character Popups : Version - 2.2.1 | Allows you to display a popup message above a characters head.
@help
===============================================================================
 Introduction :
===============================================================================

 This plugn allows you to dispay a simple popup message above a characters, and
 battlers head, it can be displayed over events, the player, or followers, as
 well as actors, and enemies in battles.

===============================================================================
 Requirements :
===============================================================================

---------------------------------------
 None.
---------------------------------------

===============================================================================
 Instructions :
===============================================================================

---------------------------------------
 Plugin Parameters :
---------------------------------------

  Message Display Types :
  ---------------------------------------
  Info : Message Display types was added as of version 2.2.0, it gives the user
  the ability to choose what happens, when a new message is displayed on an
  event that is already displaying a message( or several messages ). The first
  option is "Push Old Messages Up", using this parameter, will push old
  messages above the new messages if the messages are overlapping eachother.
  The next parameter, is "One Message At a Time( save new requests )", this
  will allow only a single message to be displayed at a time, however, if any
  messages are requested while a message is already being displayed, the new
  messages will be saved and displayed when the current message is finished.
  The third option "One Message At a Time( ignore new requests )", will only
  show one message at a time, however unlike the previous parameter, any new
  messages will be ignored, which means you'll have to till the current message
  is finished in order for any new messages to be displayed.
  Finally, the last option "Overwrite old Messages", will cancel any currently
  displayed message, then display the newly requested message.


---------------------------------------
 plugin commands :
---------------------------------------


  plugin command :
  enable_popup_windowskin
  ---------------------------------------
  example :
  enable_popup_windowksin
  ---------------------------------------
  description :
  If windowskin for popups are disabled, this will enable them.


  plugin command :
  disable_popup_windowskin
  ---------------------------------------
  example :
  disable_popup_windowksin
  ---------------------------------------
  description :
  If windowskin for popups are enabled, this will disable them.


  plugin command :
  change_popup_se NAME VOLUME PITCH PAN
  ---------------------------------------
  example :
  change_popup_se Bell1 90 100 0
  ---------------------------------------
  description :
  Change the sound effect used when popups are displayed.The above example
  changes the sound effect to "Bell1" with a volume level of 90, a pitch of
  100, and a pan value of 0. Note that volume, pitch, and pan, are all optional
  so they are not required, if you do exclude them, they will be defaulted to
  the values used in this example. You can also prevent the sound effect from
  playing by just using "chamge_popup_se" without any extra parameters.


  plugin command :
  simple_popup player font_size "SIZE" text_color "HEX" "MESSAGE"
  ---------------------------------------
  example :
  simple_popup player font_size 20 text_color #ff0000 example text
  ---------------------------------------
  description :
  This plugin command will create a popup message above the player, the message
  will have a font size of 20, it will have a text color of #ff000( red ),
  and the message will say "example text"


  plugin command :
  simple_popup event "ID" font_size "SIZE" text_color "COLOR" "MESSAGE"
  ---------------------------------------
  example :
  simple_popup event 10 font_size 5 text_color #00ff00 this text is green!
  ---------------------------------------
  description :
  This plugin command will create a popup message above the event with the id
  of 5, the message will have a font size of 10, it will have a text color of
  #00ff0( green ), and the message will say "this text is green!"


  plugin command :
  simple_popup follower "INDEX" font_size "SIZE" text_color "HEX" "MESSAGE"
  ---------------------------------------
  example :
  simple_popup follower 1 font_size 15 text_color #0000ff I'm bored.
  ---------------------------------------
  description :
  This plugin command will create a popup message above the first follower(
  the character directly behind the player, when followers are visible. ),
  the font size of the message will be 15, and the color of the text will be
  #0000ff( blue ), the message will say "I'm bored.".


  plugin command :
  simple_popup actor "ID" font_size "SIZE" text_color "HEX" "MESSAGE"
  ---------------------------------------
  example :
  simple_popup actor 4 font_size 15 text_color #ff00ff I'm tired...
  ---------------------------------------
  description :
  This plugin command will create a popup message above the follower who has
  the actor id of 4, with a font size of 18, the text color will be purple,
  and it will say "I'm tired...".

  ---------------------------------------
  notes :
  ---------------------------------------
  The "font_size", and "text_color" are optional and can be excluded from any
  plugin command, if they are not present in a command, the font size will
  default to 28( default font size in MV ), and the text color will default to
  white. The only required parameters, are the target( player, event "ID",
  actor "ID", or follower "INDEX" ), and the message you want it to display.
  See below for examples.



  example : simple_popup player I'm the leader!
  ---------------------------------------
  the above example will make a popup message above the player's character,
  saying "I'm the leader!". The font size will be 28, and text color, white.

  example : simple_popup player font_size 12 I'm the leader!
  ---------------------------------------
  the above example will make a popup message above the player's character,
  saying "I'm the leader!", however this time the font size will be set to 12,
  but the text color will remain white.

  example : simple_popup player text_color "#00ffff" I'm the leader!
  ---------------------------------------
  the above example will make a popup message above the player's character,
  saying "I'm the leader!", the font size will be 28, however the text color,
  will be cyan.


  ---------------------------------------
    Plugin Commands : Version - 2.2.0
  ---------------------------------------

    info : All the below plugin commands are new as of version 2.2.0! Some of
    these features just extend already existing plugin commands, but some are
    also completely new.


    plugin command :
    simple_popup actor "ID" offset_y "OY" "MESSAGE"
    ---------------------------------------
    example :
    simple_popup actor "ID" offset_y 20 This popup is higher than usual!
    ---------------------------------------
    description :
    This plugin command will allow you to offset the y, or height of the popup
    message, in the example above, the message will be 20 pixels higher
    than normal! The popup will read "This popup is higher than usual!".

  ---------------------------------------
    In Battle Popups
  ---------------------------------------

  plugin command :
  simple_popup actor "ID" "MESSAGE"
  ---------------------------------------
  example :
  simple_popup actor 2 I can talk in battles now!!!
  ---------------------------------------
  description :
  When this plugin command is used in a battle, the actor
  with the ID specified( if in the party ), will display a popup! The above
  example, when used will tell the actor with the id of 2, to display a popup
  message that reads "I can talk in battles now!!!".

  plugin command :
  simple_popup enemy "INDEX" "MESSAGE"
  ---------------------------------------
  example :
  simple_popup enemy 0 Rawr!
  ---------------------------------------
  description :
  This plugin command when used in battle, will tell the enemy in the current
  troop, at the index of "INDEX", to display a popup! The above example, will
  cause the enemy at the index of 0, to show a popup that says "Rawr!". Please
  note the index refers to what order the enemy was placed into the troop in
  the database, it may take some trial and error to find the correct enemy.



===============================================================================
 Terms Of Use :
===============================================================================

  This Plugin may be used commercially, or non commercially so long as credit
 is given, either in the games credit section, or in a text file alongside
 the game. This plugin may NOT be sold, or Plagiarized. This plugin may
 be extended upon, and shared freely.


===============================================================================
 Version History :
===============================================================================

 ● Version : 1.0.0
 ● Date : 16/03/2019
   ★ Release.

 ● Version : 2.0.0
 ● Date : 16/03/2019
 ★ Added "Use Windowskin" option in parameters.
 ★ Added plugin command to change sound effect ingame.
 ★ Added plugin command to enabled/disable windowskin in game.
 ★ Can show variables in popups( same method as default messages ).
 ★ Can show variables in popups( same method as default messages ).
 ★ Can now show gold( same method as default messages ).
 ★ Can now show actor name( same method as default messages ).
 ★ Can now show party member name( same method as default messages ).
 ★ Can now change text color( same method as default messages ).
 ★ Can now draw icons( same method as default messages ).
 ✩ Fixed error when testing event from event editor.

 ● Version : 2.2.0
 ● Date : 01/04/2019
   ★ Added Message Display Options.
   ★ Added offset y value for messages.
   ★ Popups can now be called from battles.

 ● Version : 2.2.1
 ● Date : 20/04/2019
   ✩ Fixed event popup requests

===============================================================================
 Contact Me :
===============================================================================

  If you have questions, about this plugin, or commissioning me, or have
 a bug to report, please feel free to contact me by any of the below
 methods.

 rmw : https://forums.rpgmakerweb.com/index.php?members/chaucer.44456
 patreon : https://www.patreon.com/chaucer91
 ko-fi : https://http://ko-fi.com/chaucer91
 discord : chaucer#7538
 skypeId : chaucer1991
 gmail : chaucer91

  ()()
  (^.^)
 c(")(")

===============================================================================

  @param display_type
  @text Message Display Options
  @desc Handle how messages are displayed.
  @default 0
  @type select
  @option Push Old Messages Up
  @value 0
  @option One Message At a Time( save new requests )
  @value 1
  @option One Message At a Time( ignore new requests )
  @value 2
  @option Overwrite Old Message
  @value 3

  @param windowskin_enabled
  @text Use Windowskin
  @desc Should windowskins be used by default?
  @default true
  @type boolean

  @param fadeout_duration
  @text Fade out Duration
  @desc how long the popup will take to before the message fades out( in seconds ).
  @default 1
  @type number
  @decimals 2
  @min 1
  @max 10

  @param float_speed
  @text Float Speed
  @desc how fast the message floats up.
  @default 0.25
  @type number
  @decimals 2
  @min 0
  @max 1


  @param sound_effect
  @text Sound Effect
  @desc Sound effect that will be played when a popup appears.
  @default {"name":"","volume":"90","pitch":"100","pan":"0"}
  @type struct<Audio>

*/

/*~struct~Audio:

  @param name
  @text Name
  @desc The sound effect played when a popup message is displayed.
  @default
  @type file
  @dir audio/se/

  @param volume
  @text Volume
  @desc Volume of the sound effect.
  @default 90
  @type number
  @min 1
  @max 100

  @param pitch
  @text Pitch
  @desc The pitch of the sound effect.
  @default 100
  @type number
  @min 50
  @max 150

  @param pan
  @text Pan
  @desc The pan of the sound effect.
  @default 0
  @type number
  @min -100
  @max 100

*/

//============================================================================
var Imported = Imported || {};
Imported['SIMPLE CHARACTER POPUPS'] = true;
//============================================================================
var Chaucer = Chaucer || {};
Chaucer.characterPopups = {};
//============================================================================

( function ( $ ) { //IIFE

  $ = $ || {};

//Create plugin information.
//============================================================================
  var regexp, plugin;
  regexp = /Simple Character Popups : Version - \d+\.\d+\.\d+/;
   var length = $plugins.length;
  for ( var i = 0; i < length; i++ ) {
    plugin = $plugins[i].description.match( regexp );
    if ( !plugin ) continue;
    plugin = plugin[0];
    $.alias = {};
    $.name = plugin.split(":")[0].trim();
    $.version = plugin.split("-")[1].trim();
    $.params = Parse( $plugins[i].parameters );
    break;
  };

  //--------------------------------------------------------------------------
  function Parse( object )
  { // parse all data in an object
  //--------------------------------------------------------------------------
    try {
      object = JSON.parse( object );
     } catch (e) {
      object = object;
     } finally {
      if ( Array.isArray( object ) ) {
        var l = object.length;
        for ( var i = 0; i < l; i++ ) { object[i] = Parse( object[i] ); };
      } else if ( typeof object === 'object' ) {
        for ( var key in object ) { object[key] = Parse( object[key] ); };
      }
     }
     return object;
  };
//============================================================================

//-----------------------------------------------------------------------------
  $.alias.GI_p_pluginCommand = Game_Interpreter.prototype.pluginCommand;
//-----------------------------------------------------------------------------
  Game_Interpreter.prototype.pluginCommand = function ( command, args )
  { // Alias of pluginCommand
//-----------------------------------------------------------------------------
    $.alias.GI_p_pluginCommand.call( this, command, args );
    var command = command.toLowerCase();
    if ( command === 'change_popup_se' ) {
      $.params.sound_effect = {
        name: ( args[0] || '' ),
        volume: ( args[1] || 90 ).clamp( 0, 100 ),
        pitch: ( args[2] || 100 ).clamp( 50, 150 ),
        pan: ( args[3] || 0 ).clamp( -100, 100 )
      };
    } else if ( command === 'enable_popup_windowskin' ) {
      $.params.windowskin_enabled = true;
    } else if ( command === 'disable_popup_windowskin' ) {
      $.params.windowskin_enabled = false;
    } else if ( command === 'simple_popup' ) {
      var oy = 0;
      var fontSize = 28;
      var textColor = "#ffffff";
      var character = null;
      var oyIndex = args.indexOf( 'offset_y' );
      oy = oyIndex >= 0 ? args.splice( oyIndex, 2 )[1] : oy;
      var fontIndex = args.indexOf( 'font_size' );
      fontSize = fontIndex >= 0 ? args.splice( fontIndex, 2 )[1] : fontSize;
      var colorIndex = args.indexOf( 'text_color' );
      textColor = colorIndex >= 0 ? args.splice( colorIndex, 2 )[1] : textColor;
      if ( $gameParty.inBattle() ) {
        character = this.getBattlerForPopup( args );
      } else {
        character = this.getMapCharacterForPopup( args );
      }
      if ( character ) {
        character.requestPopup( args.join( ' ' ), fontSize, textColor, oy );
      }
    }
  };

//-----------------------------------------------------------------------------
Game_Interpreter.prototype.getMapCharacterForPopup = function ( args )
{ // get map character as target for popup message.
//-----------------------------------------------------------------------------
  if ( args.indexOf( 'event' ) >= 0 ) {
    var eventId = args.splice( args.indexOf( 'event' ), 2 )[1];
    return $gameMap.event( Number( eventId ) ) || null;
  } else if ( args.indexOf( 'self' ) >= 0 ) {
    args.splice( args.indexOf( 'self' ), 1 );
    return $gameMap.event( this._eventId );
  } else if ( args.indexOf( 'player' ) >= 0 ) {
    args.splice( args.indexOf( 'player' ), 1 );
    return $gamePlayer;
  } else if ( args.indexOf( 'follower' ) >= 0 ) {
    var followerIndex = args.splice( args.indexOf( 'follower' ), 2 )[1];
    var followers = $gamePlayer.followers()._data;
    return followers[Number( followerIndex ) - 1];
  } else if ( args.indexOf( 'actor' ) >= 0 ) {
    var followers = $gamePlayer.followers()._data;
    var actorIndex = args.splice( args.indexOf( 'actor' ), 2 )[1];
    var partyIndex = $gameParty._actors.indexOf( Number( actorIndex ) );
    return partyIndex === 0 ? $gamePlayer : followers[partyIndex - 1];
  }
  return null;
};

//-----------------------------------------------------------------------------
Game_Interpreter.prototype.getBattlerForPopup = function ( args )
{ // return a battler as target for popup message.
//-----------------------------------------------------------------------------
  var actorIndex = args.indexOf( 'actor' );
  if ( actorIndex >= 0 ) {
    var battlerIndex = Number( args.splice( actorIndex, 2 )[1] );
    var memberIndex = $gameParty._actors.indexOf( battlerIndex );
    return $gameParty.members()[memberIndex];
  }
  var enemyIndex = args.indexOf( 'enemy' );
  if ( enemyIndex >= 0 ) {
    var troopIndex = Number( args.splice( enemyIndex, 2 )[1] );
    return $gameTroop.members()[troopIndex]
  }
  return null;
};

//=============================================================================
// Game_Character :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.GC_p_initialize = Game_Character.prototype.initialize;
//-----------------------------------------------------------------------------
  Game_Character.prototype.initialize = function ()
  { // Alias of initialize
//-----------------------------------------------------------------------------
    $.alias.GC_p_initialize.call( this );
    this._popupRequests = [];
  };

//=============================================================================
// Game_Battler :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.GB_p_initialize = Game_Battler.prototype.initialize;
//-----------------------------------------------------------------------------
  Game_Battler.prototype.initialize = function ()
  { // Alias of initialize
//-----------------------------------------------------------------------------
    $.alias.GB_p_initialize.call( this );
    this._popupRequests = [];
  };

//=============================================================================
// Sprite_Character :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.S_C_p_initialize = Sprite_Character.prototype.initialize;
//-----------------------------------------------------------------------------
  Sprite_Character.prototype.initialize = function ( character )
  { // Alias of initialize
//-----------------------------------------------------------------------------
    $.alias.S_C_p_initialize.call( this, character  );
    this._popupSprites = [];
    this._popupContainer = new Sprite();
    this.addChild( this._popupContainer );
  };

//-----------------------------------------------------------------------------
  $.alias.S_C_p_update = Sprite_Character.prototype.update;
//-----------------------------------------------------------------------------
  Sprite_Character.prototype.update = function ()
  { // Alias of update
//-----------------------------------------------------------------------------
    $.alias.S_C_p_update.call( this );
    this.updatePopupSprites();
  };

//-----------------------------------------------------------------------------
  $.alias.SC_p_updateFrame = Sprite_Character.prototype.updateFrame;
//-----------------------------------------------------------------------------
  Sprite_Character.prototype.updateFrame = function ()
  { // Alias of updateFrame
//-----------------------------------------------------------------------------
    $.alias.SC_p_updateFrame.call( this );
    this._popupContainer.y = ( -this.height + -22 );
  };

//=============================================================================
// Sprite_Battler :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias.SB_p_initialize = Sprite_Battler.prototype.initialize;
//-----------------------------------------------------------------------------
  Sprite_Battler.prototype.initialize = function ( battler )
  { // Alias of initialize
//-----------------------------------------------------------------------------
    $.alias.SB_p_initialize.call( this, battler );
    this._popupSprites = [];
    this._popupContainer = new Sprite();
    this.addChild( this._popupContainer );
  };

//-----------------------------------------------------------------------------
  $.alias.SB_p_update = Sprite_Battler.prototype.update;
//-----------------------------------------------------------------------------
  Sprite_Battler.prototype.update = function ()
  { // Alias of update
//-----------------------------------------------------------------------------
    $.alias.SB_p_update.call( this );
    this.updatePopupSprites();
  };

//-----------------------------------------------------------------------------
  $.alias.SB_p_updateFrame = Sprite_Battler.prototype.updateFrame;
//-----------------------------------------------------------------------------
  Sprite_Battler.prototype.updateFrame = function ()
  { // Alias of updateFrame
//-----------------------------------------------------------------------------
    $.alias.SB_p_updateFrame.call( this );
    var battler = this._battler;
    var height = battler.isActor() ? this._mainSprite.height : this.height;
    this._popupContainer.y = ( -height + -22 );
    this._popupContainer.scale.x = this.scale.x;
  };

//=============================================================================
} )( Chaucer.characterPopups );
//=============================================================================

//=============================================================================
// Game_Character :
//=============================================================================

//-----------------------------------------------------------------------------
Game_Character.prototype.requestPopup = function ( text, fontSize, color, oy )
{ // request a new popup.
//-----------------------------------------------------------------------------
  var popup = {
    text: text,
    fontSize: ( fontSize || 28 ),
    textColor: ( color || "#ffffff" ),
    oy: ( oy || 0 )
  };
  this._popupRequests.push( popup );
};

//=============================================================================
// Game_Battler :
//=============================================================================

//-----------------------------------------------------------------------------
Game_Battler.prototype.requestPopup = function ( text, fontSize, color, oy )
{ // request a popup message.
//-----------------------------------------------------------------------------
  var popup = {
    text: text,
    fontSize: ( fontSize || 28 ),
    textColor: ( color || "#ffffff" ),
    oy: ( oy || 0 )
  };
  this._popupRequests.push( popup );
};

//=============================================================================
// Sprite_Character :
//=============================================================================

//-----------------------------------------------------------------------------
Sprite_Character.prototype.addPopupSprite = function ()
{ // add a popup sprite.
//-----------------------------------------------------------------------------
  var displayType = Chaucer.characterPopups.params.display_type;
  if ( displayType === 1 && this._popupSprites.length > 0 ) return;
  if ( displayType === 3 && this.checkOpenPopups() ) return;
  var audio = Chaucer.characterPopups.params.sound_effect;
  var popup = this._character._popupRequests.shift();
  if ( displayType === 2 && this._popupSprites.length > 0 ) return;
  var sprite = new Sprite_Popup( popup.text, popup.fontSize, popup.textColor );
  this._popupContainer.addChild( sprite );
  this._popupSprites.push( sprite );
  sprite.y -= ( popup.oy || 0 );
  AudioManager.playSe( audio );
  sprite.createWindowskin();
  if ( displayType === 0 ) this.locatePopups();
};

//-----------------------------------------------------------------------------
Sprite_Character.prototype.checkOpenPopups = function ()
{ // check for any open popups.
//-----------------------------------------------------------------------------
  var sprite = this. _popupSprites[0];
  if ( sprite && sprite._windowSkin ) {
    if ( !sprite._windowSkin.isClosing() ) sprite._windowSkin.close();
    if ( sprite._windowSkin.isClosed() ) {
      var params = Chaucer.characterPopups.params;
      sprite._lifeTime = Math.round( params.fadeout_duration * 60 );
      sprite.alpha = 0;
    }
  }
  return this._popupSprites.length > 0;
};

//-----------------------------------------------------------------------------
Sprite_Character.prototype.locatePopups = function ()
{ // ensure no popups are placed on top of eachother.
//-----------------------------------------------------------------------------
  var length = this._popupSprites.length;
  for (var i = 1; i < length; i++) {
    var index = ( length - 1 ) - i;
    var spriteA = this._popupSprites[index + 1];
    var spriteB = this._popupSprites[index];
    if ( spriteB.y - spriteA.y < spriteA.height ) {
      var oy = spriteA.height - ( spriteB.y - spriteA.y );
      if ( spriteA.usingWindowskin() ) oy += 18;
      if ( spriteB.usingWindowskin() ) oy += 18;
      spriteB.y -= oy + 4;
    }
  }
};

//-----------------------------------------------------------------------------
Sprite_Character.prototype.updatePopupSprites = function ()
{ // update the popup sprites.
//-----------------------------------------------------------------------------
  var requests = this._character._popupRequests
  if ( ( requests || [] ).length > 0 ) this.addPopupSprite();
  if ( this._popupSprites.length > 0 ) {
    this._popupSprites = this._popupSprites.filter( function( sprite ) {
      return sprite.parent;
    } );
  }
};

//=============================================================================
// Sprite_Battler :
//=============================================================================

//-----------------------------------------------------------------------------
Sprite_Battler.prototype.addPopupSprite = function ()
{ // ad popup sprite to the battler.
//-----------------------------------------------------------------------------
  var displayType = Chaucer.characterPopups.params.display_type;
  if ( displayType === 1 && this._popupSprites.length > 0 ) return;
  if ( displayType === 3 && this.checkOpenPopups() ) return;
  var audio = Chaucer.characterPopups.params.sound_effect;
  var popup = this._battler._popupRequests.shift();
  if ( displayType === 2 && this._popupSprites.length > 0 ) return;
  var sprite = new Sprite_Popup( popup.text, popup.fontSize, popup.textColor );
  this._popupContainer.addChild( sprite );
  this._popupSprites.push( sprite );
  sprite.y -= ( popup.oy || 0 );
  AudioManager.playSe( audio );
  sprite.createWindowskin();
  if ( displayType === 0 ) this.locatePopups();
};

//-----------------------------------------------------------------------------
Sprite_Battler.prototype.checkOpenPopups = function ()
{ // check if any popups are open/visible.
//-----------------------------------------------------------------------------
  var sprite = this. _popupSprites[0];
  if ( sprite && sprite._windowSkin ) {
    if ( !sprite._windowSkin.isClosing() ) sprite._windowSkin.close();
    if ( sprite._windowSkin.isClosed() ) {
      var params = Chaucer.characterPopups.params;
      sprite._lifeTime = Math.round( params.fadeout_duration * 60 );
      sprite.alpha = 0;
    }
  }
  return this._popupSprites.length > 0;
};

//-----------------------------------------------------------------------------
Sprite_Battler.prototype.locatePopups = function ()
{ // locate popup message.
//-----------------------------------------------------------------------------
  var length = this._popupSprites.length;
  for (var i = 1; i < length; i++) {
    var index = ( length - 1 ) - i;
    var spriteA = this._popupSprites[index + 1];
    var spriteB = this._popupSprites[index];
    if ( spriteB.y >= spriteA.y ) {
      var oy = spriteB.y + spriteB.height - spriteA.y;
      if ( spriteA.usingWindowskin() ) oy += 18;
      if ( spriteB.usingWindowskin() ) oy += 18;
      spriteB.y -= oy + 4;
    }
  }
};

//-----------------------------------------------------------------------------
Sprite_Battler.prototype.updatePopupSprites = function ()
{ // update the popupsprites.
//-----------------------------------------------------------------------------
  if ( this._battler ) {
    var requests = this._battler._popupRequests;
    if ( ( requests || [] ).length > 0 ) this.addPopupSprite();
    if ( this._popupSprites.length > 0 ) {
      this._popupSprites = this._popupSprites.filter( function( sprite ) {
        return sprite.parent;
      } );
    }
  }
};

//=============================================================================
// Sprite_Popup :
//=============================================================================

// Sprite_Popup
//=============================================================================
function Sprite_Popup () {
//=============================================================================
  this.initialize.apply( this, arguments );
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype = Object.create( Sprite_Base.prototype );
Sprite_Popup.prototype.constructor = Sprite_Popup;
//-----------------------------------------------------------------------------

Sprite_Popup.prototype.initialize = function ( text, fontSize, textColor )
{ //initialization.
  Sprite_Base.prototype.initialize.call( this );
  this.setText( text, fontSize, textColor );
  this.anchor.set( 0.5, 1 );
  this._lifeTime = 0;
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.lineHeight = function ()
{ // return the line height.
//-----------------------------------------------------------------------------
  return Window_Base.prototype.lineHeight.call( this );
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.setText = function ( text, fontSize, textColor )
{ // create a bitmap with the width of the text, and draw the text.
//-----------------------------------------------------------------------------
  var bitmap = new Bitmap();
  this._rowData = [];
  this.bitmap = bitmap;
  bitmap.fontSize = fontSize;
  bitmap.textColor = textColor;
  text = this.convertEscapeCharacters( text );
  var width = this.getTextWidth( text );
  var height = this.getTextHeight( text );
  bitmap.resize( width, height );
  this.height = bitmap.height;
  this.width = bitmap.width;
  this.drawText( text );
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.getLineLengths = function ( text )
{ // return all line lengths.
//-----------------------------------------------------------------------------
  var text  = text.split( '\x1bn' );
  var xw = 0;
  var width = 0;
  var current = 0;
  var lineLengths = [];
  var length = text.length;
  for ( var i = 0; i < length; i++ ) {
    xw = 0;
    if ( text[i].match( /\x1bI\[(\d+)\]/g ) ) {
      text[i] = text[i].replace( /\x1bI\[(\d+)\]/gi, '' );
      xw = 42;
    } else if ( text[i].match( /\x1bn\]/g ) ) {
      text[i] = text[i].replace( /\x1bn/gi, '' );
    }
    lineLengths[i] = this.bitmap.measureTextWidth( text[i] ) + xw;
  }
  return lineLengths;
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.getTextWidth = function ( text )
{ // return the width of the text.
//-----------------------------------------------------------------------------
  var maxLength = 0;
  var lineLengths = this.getLineLengths( text );
  var length = lineLengths.length;
  for ( var i = 0; i < length; i++ ) {
    if ( lineLengths[0] > maxLength ) maxLength = lineLengths[0];
  }
  return maxLength;
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.getTextHeight = function ( text )
{ // return the height of the text based on the amount of line breaks.
//-----------------------------------------------------------------------------
  var breaks = 1;
  var length = text.length;
  for ( var i = 0; i < length; i++ ) {
    if ( ( text[i] + text[i + 1] ) === '\x1bn' ) breaks++;
  }
  return breaks * this.lineHeight();
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.drawText = function ( text )
{ // draw the text.
//-----------------------------------------------------------------------------
  var lineWidths = this.getLineLengths( text );
  var length = text.length;
  var tx = ( this.bitmap.width - lineWidths[0] ) / 2;
  var ty = 0;
  for ( var i = 0; i < length; i++ ) {
    if ( ( text[i] + text[i + 1] ) === '\x1bI' ) {
      this.drawIcon( Number( text[i + 3] ), tx + 4, ty );
      tx += Window_Base._iconWidth + 8;
      i += 5;
    } else if ( ( text[i] + text[i + 1] ) === '\x1bn' ) {
      ty += this.lineHeight();
      var index = ( ty / this.lineHeight() );
      tx = ( this.bitmap.width - lineWidths[index] ) / 2;
      i++;
    } else {
      var width = this.bitmap.measureTextWidth( text[i] );
      this.bitmap.drawText( text[i], tx, ty, width, this.lineHeight() );
      tx += width;
    }
  }
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.drawIcon = function ( iconIndex, x, y )
{ // draw an icon at the location specified.
//-----------------------------------------------------------------------------
  var src = ImageManager.loadSystem( 'IconSet' );
  var pw = Window_Base._iconWidth;
  var ph = Window_Base._iconHeight;
  var sx = iconIndex % 16 * pw;
  var sy = Math.floor( iconIndex / 16 ) * ph;
  this.bitmap.blt( src, sx, sy, pw, ph, x, y );
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.convertEscapeCharacters = function ( text )
{ // process text for escape characters.
//-----------------------------------------------------------------------------
  text = text.replace( /\\/g, '\x1b' );
  text = text.replace( /\x1b\x1b/g, '\\' );
  text = text.replace( /\x1bV\[(\d+)\]/gi, function() {
      return $gameVariables.value( parseInt( arguments[1] ) );
  }.bind( this ) );
  text = text.replace( /\x1bV\[(\d+)\]/gi, function() {
      return $gameVariables.value( parseInt( arguments[1] ) );
  }.bind( this ) );
  text = text.replace( /\x1bN\[(\d+)\]/gi, function() {
      return this.actorName( parseInt( arguments[1] ) );
  }.bind( this ) );
  text = text.replace( /\x1bP\[(\d+)\]/gi, function() {
      return this.partyMemberName( parseInt(arguments[1] ) );
  }.bind( this ) );
  text = text.replace( /\x1bG/gi, TextManager.currencyUnit );
  return text;
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.actorName = function ( n )
{ // return the name of the actor at index specified.
//-----------------------------------------------------------------------------
  var actor = n >= 1 ? $gameActors.actor(n) : null;
  return actor ? actor.name() : '';
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.partyMemberName = function ( n )
{ // return the party members name at the index specified.
//-----------------------------------------------------------------------------
  var actor = n >= 1 ? $gameParty.members()[n - 1] : null;
  return actor ? actor.name() : '';
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.update = function ()
{ // update the sprite.
//-----------------------------------------------------------------------------
  Sprite_Base.prototype.update.call( this );
  var floatSpeed = Chaucer.characterPopups.params.float_speed;
  this.y = Math.round( ( this.y - floatSpeed ) * 100 ) / 100;
  this.updateAlpha();
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.updateAlpha = function ()
{ // update the sprites alpha.
//-----------------------------------------------------------------------------
  var params = Chaucer.characterPopups.params;
  var lifeSpan = Math.round( params.fadeout_duration * 60 );
  this._lifeTime++;
  if ( this._lifeTime >= lifeSpan ) {
    var fadeSpeed = 0.02;
    this.alpha = Math.max( this.alpha - fadeSpeed, 0 );
    if ( this.alpha === 0 && this.parent ) this.parent.removeChild( this );
  }
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.iswindowSkinEnabled = function ()
{ // check if windowskin enabled.
//-----------------------------------------------------------------------------
  return Chaucer.characterPopups.params.windowskin_enabled;
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.createWindowskin = function ()
{ // create the windowskin for the popup.
//-----------------------------------------------------------------------------
  if ( this.iswindowSkinEnabled() ) {
    var m = 18;
    var x = -this.width / 2 - m;
    var y = -this.height - m;
    var width = this.bitmap.width + m * 2;
    var height = this.bitmap.height + m * 2;
    this._windowSkin = new Window_Base( x, y, width, height );
    var sw = this.width;
    var sh = this.height;
    this._windowSkin.contents.blt( this.bitmap, 0, 0, sw, sh, 0, 0 );
    this.addChild( this._windowSkin );
    this.bitmap.clear();
  }
};

//-----------------------------------------------------------------------------
Sprite_Popup.prototype.usingWindowskin = function ()
{ // return true if this sprite is using a window skin.
//-----------------------------------------------------------------------------
  return !!this._windowSkin;
};
