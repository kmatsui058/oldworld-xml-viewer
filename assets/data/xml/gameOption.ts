
    const data: XmlGameOption.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "zHelp": {
          
        },
        "bDefaultSinglePlayer": {
          
        },
        "bDefaultMultiPlayer": {
          
        },
        "bSinglePlayer": {
          
        },
        "bMultiPlayer": {
          
        },
        "bDebug": {
          
        },
        "abFirstUnitInvalid": {
          
        }
      },
      {
        "zType": "GAMEOPTION_AI_ONLY",
        "zName": "AI Only",
        "zHelp": "Human players follow the same rules as the AI.",
        "bDebug": "1"
      },
      {
        "zType": "GAMEOPTION_NO_CHARACTERS",
        "zName": "No Characters",
        "zHelp": "Characters and Families are removed from the game.",
        "bDefaultMultiPlayer": "1"
      },
      {
        "zType": "GAMEOPTION_NO_TRIBES",
        "zName": "No Tribes",
        "zHelp": "Tribes are replaced by link(TRIBE_BARBARIANS)."
      },
      {
        "zType": "GAMEOPTION_NO_FOG_OF_WAR",
        "zName": "No Fog of War",
        "zHelp": "Map starts fully revealed and stays visible.",
        "abFirstUnitInvalid": {
          "Pair": {
            "zIndex": "UNIT_SCOUT",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "GAMEOPTION_NO_TEAM_MOVEMENT",
        "zName": "No Team Movement",
        "zHelp": "Players cannot move their Teammates' Units.",
        "bSinglePlayer": "0"
      },
      {
        "zType": "GAMEOPTION_LOCKED_SAVE",
        "zName": "Lock Save",
        "zHelp": "The save file is checked against a hash to prevent modification using an outside editor."
      },
      {
        "zType": "GAMEOPTION_NO_UNDO",
        "zName": "No Undo",
        "zHelp": "Player is not allowed to undo a move after it has been made.",
        "bMultiPlayer": "0"
      },
      {
        "zType": "GAMEOPTION_LOCK_PLAYER_OPTIONS",
        "zName": "Lock Player Options",
        "zHelp": "Cannot change gameplay player options after the game has started",
        "bMultiPlayer": "0"
      },
      {
        "zType": "GAMEOPTION_RANDOMIZE_LEADERS",
        "zName": "Randomize Leaders",
        "zHelp": "Randomize starting Leader of each Nation."
      },
      {
        "zType": "GAMEOPTION_RANDOMIZE_FAMILIES",
        "zName": "Randomize Families",
        "zHelp": "Randomize the class of each Family (Sage, Artisan, Champion, etc)."
      },
      {
        "zType": "GAMEOPTION_ROLE_PLAYING",
        "zName": "Role Playing",
        "zHelp": "No popup help when making narrative choices for events"
      },
      {
        "zType": "GAMEOPTION_PLAY_TO_WIN",
        "zName": "Play to Win",
        "zHelp": "AI nations will try to keep each other (including you) from winning"
      },
      {
        "zType": "GAMEOPTION_ONE_CITY_CHALLENGE",
        "zName": "One City Challenge",
        "zHelp": "Players are not allowed to control more than one city.",
        "abFirstUnitInvalid": {
          "Pair": {
            "zIndex": "UNIT_SETTLER",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "GAMEOPTION_MP_JOIN_AS_ANY_PLAYER",
        "zName": "Join as Any Player",
        "zHelp": "Allow players to join a multiplayer game even if a slot has already been claimed.",
        "bSinglePlayer": "0"
      },
      {
        "zType": "GAMEOPTION_ALLOW_OBSERVE",
        "zName": "Allow observe mode",
        "zHelp": "Players can join the game as observers",
        "bSinglePlayer": "0"
      }
    ]
  }
}
    export default data
    