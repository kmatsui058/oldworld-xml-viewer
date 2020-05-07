
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
        "bDefault": {
          
        },
        "bSinglePlayer": {
          
        },
        "bMultiPlayer": {
          
        },
        "abFirstUnitInvalid": {
          
        }
      },
      {
        "zType": "GAMEOPTION_AI_ONLY",
        "zName": "AI Only",
        "zHelp": "Human players follow the same rules as the AI"
      },
      {
        "zType": "GAMEOPTION_NO_TRIBES",
        "zName": "No Tribes",
        "zHelp": "Barbarian are always at War with the Player"
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
        "zName": "Locked Save",
        "zHelp": "The save file is checked against a hash to prevent modification using an outside editor."
      },
      {
        "zType": "GAMEOPTION_NO_UNDO",
        "zName": "No Undo",
        "zHelp": "Player is not allowed to undo a move after it has been made.",
        "bMultiPlayer": "0"
      },
      {
        "zType": "GAMEOPTION_NO_TUTORIAL",
        "zName": "Disable tutorial",
        "zHelp": "Player cannot turn on the tutorial for this game.",
        "bMultiPlayer": "0"
      },
      {
        "zType": "GAMEOPTION_RANDOMIZE_FAMILIES",
        "zName": "Randomize Families",
        "zHelp": "Randomize the class of each Family (Sage, Artisan, Champion, etc)."
      },
      {
        "zType": "GAMEOPTION_MP_JOIN_AS_ANY_PLAYER",
        "zName": "Join as any player",
        "zHelp": "Allow players to join a multiplayer game even if a slot has already been claimed",
        "bSinglePlayer": "0"
      }
    ]
  }
}
    export default data
    