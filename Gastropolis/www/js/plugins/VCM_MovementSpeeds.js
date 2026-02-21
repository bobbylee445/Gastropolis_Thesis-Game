//-----------------------------------------------------------------------------
// VCM Plugins - VCM_MovementSpeeds
//-----------------------------------------------------------------------------


/*:
@plugindesc Overrides the engine's default speed values with this plugin's parameters. This includes the speed of players, vehicles and events. Does not affect frequency.
@author VCM Plugins


@param 1 - Player Movement Speeds

@param Normal Speed
@parent 1 - Player Movement Speeds
@type number
@min 0
@max 1
@decimals 6
@desc Player's Map movement speed when not dashing.
Default: 0.0625
@default 0.0625

@param Dash Speed
@parent 1 - Player Movement Speeds
@type number
@min 0
@max 1
@decimals 6
@desc Player's Map movement speed when dashing.
Default: 0.125
@default 0.125

@param Touch Input Speed
@parent 1 - Player Movement Speeds
@type number
@min 0
@decimals 6
@desc Player's Map movement speed with touch input.
Default: 0.125
@default 0.125


@param 2 - Event Movement Speeds
@default

@param Speed 1
@parent 2 - Event Movement Speeds
@type number
@min 0
@max 1
@decimals 6
@desc Event's Map movement speed 1.
Default: 0.007812
@default 0.007812

@param Speed 2
@parent 2 - Event Movement Speeds
@type number
@min 0
@max 1
@decimals 6
@desc Event's Map movement speed 2.
Default: 0.015625
@default 0.015625

@param Speed 3
@parent 2 - Event Movement Speeds
@type number
@min 0
@max 1
@decimals 6
@desc Event's Map movement speed 3.
Default: 0.03125
@default 0.03125

@param Speed 4
@parent 2 - Event Movement Speeds
@type number
@min 0
@max 1
@decimals 6
@desc Event's Map movement speed 4.
Default: 0.0625
@default 0.0625

@param Speed 5
@parent 2 - Event Movement Speeds
@type number
@min 0
@max 1
@decimals 6
@desc Event's Map movement speed 5.
Default: 0.125
@default 0.125

@param Speed 6
@parent 2 - Event Movement Speeds
@type number
@min 0
@max 1
@decimals 6
@desc Event's Map movement speed 5.
Default: 0.25
@default 0.25


@param 3 - Vehicle Movement Speeds

@param Boat Speed
@parent 3 - Vehicle Movement Speeds
@type number
@min 0
@max 1
@decimals 6
@desc Player's Map movement speed when inside the Boat.
Default: 0.0625
@default 0.0625

@param Ship Speed
@parent 3 - Vehicle Movement Speeds
@type number
@min 0
@max 1
@decimals 6
@desc Player's Map movement speed when inside the Ship.
Default: 0.125
@default 0.125

@param Airship Speed
@parent 3 - Vehicle Movement Speeds
@type number
@min 0
@max 1
@decimals 6
@desc Player's Map movement speed when inside the Airship.
Default: 0.25
@default 0.25

@param Touch Input Boat Speed
@parent 3 - Vehicle Movement Speeds
@type number
@min 0
@decimals 6
@desc Player's Map speed with touch input inside the Boat.
Default: 0.0625
@default 0.0625

@param Touch Input Ship Speed
@parent 3 - Vehicle Movement Speeds
@type number
@min 0
@decimals 6
@desc Player's Map speed with touch input inside the Ship.
Default: 0.125
@default 0.125

@param Touch Input Airship Speed
@parent 3 - Vehicle Movement Speeds
@type number
@min 0
@decimals 6
@desc Player's Map speed with touch input inside the Airship.
Default: 0.25
@default 0.25


@help
-----------------------------------------------------------------------------
Introduction
-----------------------------------------------------------------------------

Version -> 2.01

This plugin was tested only on RPG Maker MV Version 1.6.2.
I cannot guarantee it works on lower versions.

Terms of Use:
 - Available for commercial and non-commercial use
 - You may freely edit the code
 - You are not allowed to redistribute this plugin. Instead,
 provide a link(https://vcm-plugins.itch.io/vcm-movementspeeds)
 - Do not claim this plugin as your own
 - Credit is not required. However, if you want to, credit me as 'VCM Plugins'

This plugin overrides the engine's default speed values with its parameters.
This includes the speed of players, vehicles and events. Does not affect
frequency.

This documentation contains the following subheaders:
Introduction
About Speeds
Parameters Explanation
Relevant Script Calls
Compatibility
Versions


-----------------------------------------------------------------------------
About Speeds
-----------------------------------------------------------------------------

The values of all parameters defines how much frames the respective object
take to move 1 tile. It's impossible to move more than 1 tile per frame. 
60 frames equals to 1 second. When calculating frames per tile, the number
of frames used is always rounded up.
Frames per Tile = Math.max(Math.ceil(1 / Relevant Parameter Value), 1).
Examples:
Relevant Parameter Value = 1 -> Frames per Tile = Math.max(1 / 1, 1) = 1;
Relevant Parameter Value = 3 -> Frames per Tile = Math.max(1 / 3, 1) = 1;
Relevant Parameter Value = 0.99 -> Frames per Tile = Math.ceil(1 / 0.99) = 2;
Relevant Parameter Value = 0.5 -> Frames per Tile = Math.ceil(1 / 0.5) = 2;
Relevant Parameter Value = 0.49 -> Frames per Tile = Math.ceil(1 / 0.49) = 3;
Relevant Parameter Value = 0.34 -> Frames per Tile = Math.ceil(1 / 0.34) = 3;
Relevant Parameter Value = 0.33 -> Frames per Tile = Math.ceil(1 / 0.33) = 4;
Relevant Parameter Value = 0.25 -> Frames per Tile = Math.ceil(1 / 0.25) = 4;
Relevant Parameter Value = 0.24 -> Frames per Tile = Math.ceil(1 / 0.24) = 5;
Relevant Parameter Value = 0.2 -> Frames per Tile = Math.ceil(1 / 0.2) = 5;
Relevant Parameter Value = 0.124 -> Frames per Tile = Math.ceil(1 / 0.124) = 9;
Relevant Parameter Value = 0.112 -> Frames per Tile = Math.ceil(1 / 0.112) = 9;

Also, if the relevant parameter value is 1 or higher (1 frame per tile),
events with 'Below characters' Priority and 'Event Touch' or 'Player Touch'
Trigger will not be triggered unless the player stop in the event location.


-----------------------------------------------------------------------------
Parameters Explanation
-----------------------------------------------------------------------------

Normal Speed
This parameter sets the player's speed when not dashing nor touch inputting.
The higher the value, the higher the speed. Values higher than 1 have the same
effect of 1. Values between 0.0001 and 0 were not properly tested for taking
too much time to the player walk. If the value is 0, negative or non-number,
the character will not move.

Dash Speed
This parameter sets the player's speed when dashing. The higher the value,
the higher the speed. Values higher than 1 have the same effect of 1.
Values between 0.0001 and 0 were not properly tested for taking too much time
to the player walk. If the value is 0, negative or non-number, the character
will not move.

Touch Input Speed
This parameter sets the player's speed when using touch input. The higher the
value, the higher the speed. Values higher than 1 immediately teleport the
player(provided the touched place is valid). Values between 0.0001 and 0 were
not properly tested for taking too much time to the player walk. If the value
is 0, negative or non-number, touch input movement will be disabled.

Speed 1
This parameter sets the speed 1 of events. The higher the value, the higher
the speed. Values higher than 1 have the same effect of 1. Values between
0.0001 and 0 were not properly tested for taking too much time to the event
move. If the value is 0, negative or non-number, the event will not move.
The actual value is 0.0078125, but the last digit was removed.

Speed 2
This parameter sets the speed 2 of events. The higher the value, the higher
the speed. Values higher than 1 have the same effect of 1. Values between
0.0001 and 0 were not properly tested for taking too much time to the event
move. If the value is 0, negative or non-number, the event will not move.

Speed 3
This parameter sets the speed 3 of events. The higher the value, the higher
the speed. Values higher than 1 have the same effect of 1. Values between
0.0001 and 0 were not properly tested for taking too much time to the event
move. If the value is 0, negative or non-number, the event will not move.

Speed 4
This parameter sets the speed 4 of events. The higher the value, the higher
the speed. Values higher than 1 have the same effect of 1. Values between
0.0001 and 0 were not properly tested for taking too much time to the event
move. If the value is 0, negative or non-number, the event will not move.

Speed 5
This parameter sets the speed 5 of events. The higher the value, the higher
the speed. Values higher than 1 have the same effect of 1. Values between
0.0001 and 0 were not properly tested for taking too much time to the event
move. If the value is 0, negative or non-number, the event will not move.

Speed 6
This parameter sets the speed 6 of events. The higher the value, the higher
the speed. Values higher than 1 have the same effect of 1. Values between
0.0001 and 0 were not properly tested for taking too much time to the event
move. If the value is 0, negative or non-number, the event will not move.

Boat Speed
This parameter sets the player's speed when inside the boat. The higher the
value, the higher the speed. Values higher than 1 have the same effect of 1.
Values between 0.0001 and 0 were not properly tested for taking too much time
to the boat move. If the value is 0, negative or non-number, the boat will not
move.

Ship Speed
This parameter sets the player's speed when inside the ship. The higher the
value, the higher the speed. Values higher than 1 have the same effect of 1.
Values between 0.0001 and 0 were not properly tested for taking too much time
to the ship move. If the value is 0, negative or non-number, the ship will not
move.

Airship Speed
This parameter sets the player's speed when inside the airship. The higher
the value, the higher the speed. Values higher than 1 have the same effect of
1. Values between 0.0001 and 0 were not properly tested for taking too much
time to the airship move. If the value is 0, negative or non-number, the
airship will not move.

Touch Input Boat Speed
This parameter sets the player's speed when using touch input inside the boat.
The higher the value, the higher the speed. Values higher than 1 immediately
teleport the player(provided the touched place is valid). Values between
0.0001 and 0 were not properly tested for taking too much time to the boat
move. If the value is 0, negative or non-number, touch input movement will be
disabled.

Touch Input Ship Speed
This parameter sets the player's speed when using touch input inside the ship.
The higher the value, the higher the speed. Values higher than 1 immediately
teleport the player(provided the touched place is valid). Values between
0.0001 and 0 were not properly tested for taking too much time to the ship
move. If the value is 0, negative or non-number, touch input movement will be
disabled.

Touch Input Airship Speed
This parameter sets the player's speed when using touch input inside the
airship. The higher the value, the higher the speed. Values higher than 1
immediately teleport the player(provided the touched place is valid).
Values between 0.0001 and 0 were not properly tested for taking too much time
to the airship move. If the value is 0, negative or non-number, touch input
movement will be disabled.


-----------------------------------------------------------------------------
Relevant Script Calls
-----------------------------------------------------------------------------

$gamePlayer.setMoveSpeed(x);
This script call will change the player's normal movement speed to the value
of x. If the value is 4, it will revert to the Normal Speed parameter value.
Examples:
$gamePlayer.setMoveSpeed(0.1) = 0.1;
$gamePlayer.setMoveSpeed(4) = Normal Speed parameter value;

$gameMap.event(x).setMoveSpeed(y);
This script call will change the current map's x event id movement speed to
the value of y. If the value is 1, 2, 3, 4, 5 or 6, it will revert to the
respective Speed parameter value.
Examples:
$gameMap.event(2).setMoveSpeed(0.03) = event 2's speed -> 0.03;
this.setMoveSpeed(0.5) = current event's speed -> 0.5;
$gameMap.event(23).setMoveSpeed(1) = event 23's speed -> Speed 1 parameter value;
$gameMap.event(97).setMoveSpeed(2) = event 97's speed -> Speed 2 parameter value;
$gameMap.event(9).setMoveSpeed(3) = event 9's speed -> Speed 3 parameter value;
$gameMap.event(15).setMoveSpeed(4) = event 15's speed -> Speed 4 parameter value;
$gameMap.event(46).setMoveSpeed(5) = event 46's speed -> Speed 5 parameter value;
$gameMap.event(51).setMoveSpeed(6) = event 51's speed -> Speed 6 parameter value;


-----------------------------------------------------------------------------
Compatibility
-----------------------------------------------------------------------------

Plugin Manager line-up for maximum compatibility:
VCM_HelpWindow
VCM_PreviousTurn
VCM_BattleSave
VCM_Quicksave
VCM_MovementSpeeds
VCM_StateDescription
VCM_TermDescription
VCM_BattleMainMenu
VCM_EventHighlighting
VCM_SkillBar
VCM_MirroredSpriteset
VCM_ActionPoints
VCM_ActionOrder
VCM_EnemyGauges
VCM_MultipleGauges
VCM_ElementAffinity
VCM_AutoBattle
VCM_EnemyInfo
VCM_NumberBattlers
VCM_NoBattleLog

This plugin overwrites the following functions:
Game_CharacterBase.prototype.distancePerFrame
Game_Player.prototype.distancePerFrame(from Game_CharacterBase)
Game_Player.prototype.updateNonmoving
Game_Follower.prototype.distancePerFrame(from Game_CharacterBase)
Game_Vehicle.prototype.initMoveSpeed

This means that any plugins above it in the Plugin Manager will
have these functions overwritten. It is advisable to put plugins
that share this function under this plugin, if possible
(unless you don't need that piece of code for your game).
This will not guarantee that the plugins will be compatible, however.

This plugin also uses the current code of the following function:
Game_Temp.prototype.setDestination
Game_CharacterBase.prototype.moveStraight
Game_Player.prototype.moveByInput

This means that this plugin will use any changes to those functions
made by plugins above it in the Plugin Manager, which may, or may not
be compatible.


-----------------------------------------------------------------------------
Versions
-----------------------------------------------------------------------------

Version -> 1.00
Released Plugin.

Version -> 2.00
Added Vehicle Speeds. Player will now immediately teleport when using
touch input movement if the respective speed parameter value is higher than 1.
Character and events will be static if the respective speed parameter value
is not higher than 0. Followers have the same speed as the player.
Aliased a function. Updated documentation.

Version -> 2.01
Updated documentation.
*/

"use strict";

var Imported = Imported || {};
Imported.VCM_MovementSpeeds = true;

function VCMConvert (parameters) {
	function VCMParse (string) {
		try {
			return JSON.parse(string, (key, value) => {
				try {
					return VCMParse(value);
				} catch (e) {
					return value;
				}
			});
		} catch (e) {
			return string;
		}
	};
	return VCMParse(JSON.stringify(parameters));
};

var VCM = VCM || {};
VCM.MovementSpeeds = VCM.MovementSpeeds || {};
VCM.MovementSpeeds = VCMConvert(PluginManager.parameters('VCM_MovementSpeeds')) || {};
VCM.MovementSpeedAlias = VCM.MovementSpeedAlias || {};


//-----------------------------------------------------------------------------
// Game_Temp
//
// The game object class for temporary data that is not included in save data.

VCM.MovementSpeedAlias.Game_Temp_setDestination = Game_Temp.prototype.setDestination;
Game_Temp.prototype.setDestination = function(x, y) {
	///
	if((!$gamePlayer.isInVehicle() && VCM.MovementSpeeds['Touch Input Speed'] > 0) || ($gamePlayer.isInBoat() && VCM.MovementSpeeds['Touch Input Boat Speed'] > 0)
	|| ($gamePlayer.isInShip() && VCM.MovementSpeeds['Touch Input Ship Speed'] > 0) || ($gamePlayer.isInAirship() && VCM.MovementSpeeds['Touch Input Airship Speed'] > 0)){
	///
		VCM.MovementSpeedAlias.Game_Temp_setDestination.call(this, x, y);
	///
	}
	///
};

//-----------------------------------------------------------------------------
// Game_CharacterBase
//
// The superclass of Game_Character. It handles basic information, such as
// coordinates and images, shared by all characters.

Game_CharacterBase.prototype.distancePerFrame = function() {
	///return Math.pow(2, this.realMoveSpeed()) / 256;
	///
	if(this.realMoveSpeed() === 1){
		return VCM.MovementSpeeds['Speed 1'];
	}
	else if(this.realMoveSpeed() === 2){
		return VCM.MovementSpeeds['Speed 2'];
	}
	else if(this.realMoveSpeed() === 3){
		return VCM.MovementSpeeds['Speed 3'];
	}
	else if(this.realMoveSpeed() === 4){
		return VCM.MovementSpeeds['Speed 4'];
	}
	else if(this.realMoveSpeed() === 5){
		return VCM.MovementSpeeds['Speed 5'];
	}
	else if(this.realMoveSpeed() === 6){
		return VCM.MovementSpeeds['Speed 6'];
	}
	return this.realMoveSpeed();
};

VCM.MovementSpeedAlias.Game_CharacterBase_moveStraight = Game_CharacterBase.prototype.moveStraight;
Game_CharacterBase.prototype.moveStraight = function(d) {
	///
	if(this.distancePerFrame() > 0){
	///
    VCM.MovementSpeedAlias.Game_CharacterBase_moveStraight.call(this, d);
	///
	}
	///
};

//-----------------------------------------------------------------------------
// Game_Player
//
// The game object class for the player. It contains event starting
// determinants and map scrolling functions.

Game_Player.prototype.distancePerFrame = function() {
	///return Math.pow(2, this.realMoveSpeed()) / 256;
	///
	if($gameTemp.isDestinationValid()){
		if(this.isInBoat()){
			return VCM.MovementSpeeds['Touch Input Boat Speed'];
		}
		if(this.isInShip()){
			return VCM.MovementSpeeds['Touch Input Ship Speed'];
		}
		if(this.isInAirship()){
			return VCM.MovementSpeeds['Touch Input Airship Speed'];
		}
		return VCM.MovementSpeeds['Touch Input Speed'];
	}
	else if(this.isDashing()){
		return VCM.MovementSpeeds['Dash Speed'];
	}
	else if(this.realMoveSpeed() === 4){
		return VCM.MovementSpeeds['Normal Speed'];
	}
	return this.realMoveSpeed();
	///
};

VCM.MovementSpeedAlias.Game_Player_moveByInput = Game_Player.prototype.moveByInput;
Game_Player.prototype.moveByInput = function() {
	///
	if(((!this.isInVehicle() && VCM.MovementSpeeds['Touch Input Speed'] > 1 && $gameMap.checkPassage($gameTemp._destinationX, $gameTemp._destinationY, 0x0f))
	|| (this.isInBoat() && VCM.MovementSpeeds['Touch Input Boat Speed'] > 1 && $gameMap.checkPassage($gameTemp._destinationX, $gameTemp._destinationY, 0x0200))
	|| (this.isInShip() && VCM.MovementSpeeds['Touch Input Ship Speed'] > 1 && $gameMap.checkPassage($gameTemp._destinationX, $gameTemp._destinationY, 0x0400))
	|| (this.isInAirship() && VCM.MovementSpeeds['Touch Input Airship Speed'] > 1 && $gameMap.checkPassage($gameTemp._destinationX, $gameTemp._destinationY, 0x0800)
	&& $gameMap.checkPassage($gameTemp._destinationX, $gameTemp._destinationY, 0x0f))) && !this.isCollidedWithCharacters($gameTemp._destinationX, $gameTemp._destinationY)
	&& $gameTemp.isDestinationValid() && !($gameTemp._destinationX === this._x && $gameTemp._destinationY === this._y)){
		$gamePlayer.reserveTransfer($gameMap.mapId(), $gameTemp._destinationX, $gameTemp._destinationY, 0, 2);
		$gamePlayer.performTransfer();
		return;
	}else if($gameTemp.isDestinationValid()){
        var x = $gameTemp.destinationX();
        var y = $gameTemp.destinationY();
        VCM.MovementSpeedAlias.Game_Player_moveByInput.call(this, this.findDirectionTo(x, y));
		return;
    }
	$gameTemp.clearDestination();
	///
	VCM.MovementSpeedAlias.Game_Player_moveByInput.call(this, this.getInputDirection());
};

Game_Player.prototype.updateNonmoving = function(wasMoving) {
    if (!$gameMap.isEventRunning()) {
        if (wasMoving) {
            $gameParty.onPlayerWalk();
            this.checkEventTriggerHere([1,2]);
            if ($gameMap.setupStartingEvent()) {
                return;
            }
        }
        if (this.triggerAction()) {
            return;
        }
        if (wasMoving) {
            this.updateEncounterCount();
		///} else {
        } else if(!$gameTemp.isDestinationValid() || ($gameTemp._destinationX === this._x && $gameTemp._destinationY === this._y)){
            $gameTemp.clearDestination();
        }
    }
};

//-----------------------------------------------------------------------------
// Game_Follower
//
// The game object class for a follower. A follower is an allied character,
// other than the front character, displayed in the party.

Game_Follower.prototype.distancePerFrame = function() {
	///return Math.pow(2, this.realMoveSpeed()) / 256;
	///
	if($gameTemp.isDestinationValid()){
		return VCM.MovementSpeeds['Touch Input Speed'];
	}
	else if($gamePlayer.isDashing()){
		return VCM.MovementSpeeds['Dash Speed'];
	}
	else if(this.realMoveSpeed() === 4){
		return VCM.MovementSpeeds['Normal Speed'];
	}
	return this.realMoveSpeed();
	///
};

//-----------------------------------------------------------------------------
// Game_Vehicle
//
// The game object class for a vehicle.

Game_Vehicle.prototype.initMoveSpeed = function() {
    if (this.isBoat()) {
        ///this.setMoveSpeed(4);
		///
		this.setMoveSpeed(VCM.MovementSpeeds['Boat Speed']);
		///
    } else if (this.isShip()) {
        ///this.setMoveSpeed(5);
		///
		this.setMoveSpeed(VCM.MovementSpeeds['Ship Speed']);
		///
    } else if (this.isAirship()) {
        ///this.setMoveSpeed(6);
		///
		this.setMoveSpeed(VCM.MovementSpeeds['Airship Speed']);
		///
    }
};