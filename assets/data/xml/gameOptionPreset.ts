
    const data: XmlGameOptionPreset.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "zHelp": {
          
        },
        "TurnScale": {
          
        },
        "EventLevel": {
          
        },
        "Mortality": {
          
        },
        "Archetype": {
          
        },
        "SuccessionGender": {
          
        },
        "SuccessionOrder": {
          
        },
        "VictoriesDisabled": {
          
        },
        "Options": {
          
        }
      },
      {
        "zType": "GAME_OPTION_PRESET_NONE",
        "zName": "TEXT_GAME_OPTION_PRESET_NONE",
        "TurnScale": "TURNSCALE_YEAR",
        "EventLevel": "EVENTLEVEL_MODERATE",
        "Mortality": "MORTALITY_STANDARD",
        "Archetype": "TRAIT_PRESET_ARCHETYPE",
        "SuccessionGender": "SUCCESSIONGENDER_ABSOLUTE_COGNATIC",
        "SuccessionOrder": "SUCCESSIONORDER_PRIMOGENITURE"
      },
      {
        "zType": "GAME_OPTION_PRESET_RANDOM_EVERYTHING",
        "zName": "TEXT_GAME_OPTION_PRESET_RANDOM_EVERYTHING",
        "zHelp": "TEXT_GAME_OPTION_PRESET_RANDOM_EVERYTHING_HELP",
        "Archetype": "TRAIT_RANDOM_ARCHETYPE",
        "SuccessionGender": "SUCCESSIONGENDER_RANDOM",
        "SuccessionOrder": "SUCCESSIONORDER_RANDOM",
        "Options": {
          "zValue": "GAMEOPTION_RANDOMIZE_FAMILIES"
        }
      },
      {
        "zType": "GAME_OPTION_PRESET_ROLE_PLAYING",
        "zName": "TEXT_GAME_OPTION_PRESET_ROLE_PLAYING",
        "zHelp": "TEXT_GAME_OPTION_PRESET_ROLE_PLAYING_HELP",
        "EventLevel": "EVENTLEVEL_HIGH",
        "Mortality": "MORTALITY_REALISTIC",
        "Options": {
          "zValue": "GAMEOPTION_ROLE_PLAYING"
        }
      },
      {
        "zType": "GAME_OPTION_PRESET_LONG_LASTING_CHARACTERS",
        "zName": "TEXT_GAME_OPTION_PRESET_LONG_LASTING_CHARACTERS",
        "zHelp": "TEXT_GAME_OPTION_PRESET_LONG_LASTING_CHARACTERS_HELP",
        "TurnScale": "TURNSCALE_SEMESTER",
        "EventLevel": "EVENTLEVEL_MINIMAL",
        "Mortality": "MORTALITY_LONG"
      },
      {
        "zType": "GAME_OPTION_PRESET_ONE_CITY",
        "zName": "TEXT_GAME_OPTION_PRESET_ONE_CITY",
        "zHelp": "TEXT_GAME_OPTION_PRESET_ONE_CITY_HELP",
        "Options": {
          "zValue": "GAMEOPTION_ONE_CITY_CHALLENGE"
        }
      },
      {
        "zType": "GAME_OPTION_PRESET_CHESS_MODE",
        "zName": "TEXT_GAME_OPTION_PRESET_CHESS_MODE",
        "zHelp": "TEXT_GAME_OPTION_PRESET_CHESS_MODE_HELP",
        "Options": {
          "zValue": [
            "GAMEOPTION_NO_CHARACTERS",
            "GAMEOPTION_CRITICAL_HIT_PREVIEW",
            "GAMEOPTION_NO_FOG_OF_WAR",
            "GAMEOPTION_NO_UNDO",
            "GAMEOPTION_PLAY_TO_WIN",
            "GAMEOPTION_LOCKED_SAVE"
          ]
        }
      },
      {
        "zType": "GAME_OPTION_PRESET_PUNISHING",
        "zName": "TEXT_GAME_OPTION_PRESET_PUNISHING",
        "zHelp": "TEXT_GAME_OPTION_PRESET_PUNISHING_HELP",
        "Mortality": "MORTALITY_REALISTIC",
        "VictoriesDisabled": {
          "zValue": "VICTORY_AMBITION"
        },
        "Options": {
          "zValue": [
            "GAMEOPTION_PLAY_TO_WIN",
            "GAMEOPTION_TRIBES_ONLY"
          ]
        }
      }
    ]
  }
}
    export default data
    