#==============================================================================
#                     「Easy Continue」(ACE) ver1.0
#   Author: Nana
#   Homepage: http://heptanas.mamagoto.com/
#
#   ◇Terms of Use
#   Please credit "Nana" and link http://heptanas.mamagoto.com/ if possible.
#   Feel free to modify this script and/or distribute it.
#   Also please include the credit in the readme or somewhere it's accessible. (Not from credit roll)
#   
#   ◇Non-commercial use
#
#------------------------------------------------------------------------------
#
#   It's possible to continue from the game over screen.
#   Where it continue from loading the last saved data.
#   This allows you to resume at ease on game over.
#   （If save data does not exist, it returns to title screen）
#   
#   For customization, you can choose 2 work types.
#   Also be able to set speed for fade in/out on game over screen.
#
#==============================================================================
#   ◇Initial setting
module Nana_EasyContinue
  
  WORK_TYPE = 1     #Game over screen operation type
                    # 0 ：Continue from last save/ cancel if no save (automatic)
                    # 1 ：Continue by confirm or go to title screen with cancel
  
  FADEIN = 60      #Fade in speed （default is 120）
  
  FADEOUT = 30      #Fade out speed （default is 60）

end
#==============================================================================
#==============================================================================
# ■ Scene_Gameover
#------------------------------------------------------------------------------
# 　Class that handles the game over screen
#==============================================================================

class Scene_Gameover < Scene_Base
  #--------------------------------------------------------------------------
  # ● Frame update
  #--------------------------------------------------------------------------
  def update
    super
    case Nana_EasyContinue::WORK_TYPE
    when 0
      goto_continue if Input.trigger?(:C) || Input.trigger?(:B)
    when 1
      goto_continue if Input.trigger?(:C)
      goto_title if Input.trigger?(:B)
    end
  end
  #--------------------------------------------------------------------------
  # ● Continue transition
  #--------------------------------------------------------------------------
  def goto_continue
    if DataManager.load_game(DataManager.last_savefile_index)
      on_load_success
    else
      goto_title
    end
  end
  #--------------------------------------------------------------------------
  # ● Process for successful loading
  #--------------------------------------------------------------------------
  def on_load_success
    Sound.play_load
    fadeout_all
    $game_system.on_after_load
    SceneManager.goto(Scene_Map)
  end
  #--------------------------------------------------------------------------
  # ● Fade out speed
  #--------------------------------------------------------------------------
  def fadeout_speed
    return Nana_EasyContinue::FADEOUT
  end
  #--------------------------------------------------------------------------
  # ● Fade in speed
  #--------------------------------------------------------------------------
  def fadein_speed
    return Nana_EasyContinue::FADEIN
  end
end