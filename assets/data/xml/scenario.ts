
    const data: XmlScenario.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "zSubTitle": {
          
        },
        "zIcon": {
          
        },
        "zMapFile": {
          
        },
        "bAllowMap": {
          
        },
        "zMapScript": {
          
        },
        "zModName": {
          
        },
        "zAchievement": {
          
        },
        "bContinue": {
          
        },
        "Prereq": {
          
        },
        "Nation": {
          
        },
        "abOpponents": {
          
        },
        "abTribes": {
          
        },
        "abOptionEnabled": {
          
        },
        "abOptionValid": {
          
        },
        "azParametersInvalid": {
          
        }
      },
      {
        "zType": "SCENARIO_BARBARIAN",
        "zName": "The Barbarian Horde",
        "bAllowMap": "0",
        "zModName": "Barbarian",
        "abOptionValid": {
          "Pair": [
            {
              "zIndex": "GAMEOPTION_NO_CHARACTERS",
              "bValue": "1"
            },
            {
              "zIndex": "GAMEOPTION_NO_FOG_OF_WAR",
              "bValue": "1"
            },
            {
              "zIndex": "GAMEOPTION_LOCKED_SAVE",
              "bValue": "1"
            },
            {
              "zIndex": "GAMEOPTION_NO_UNDO",
              "bValue": "1"
            },
            {
              "zIndex": "GAMEOPTION_RANDOMIZE_FAMILIES",
              "bValue": "1"
            },
            {
              "zIndex": "GAMEOPTION_ONE_CITY_CHALLENGE",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "SCENARIO_CARTHAGE_1",
        "zName": "Carthage Campaign - Game One - Ox Hide",
        "zMapFile": "Carthage Campaign Game One",
        "zModName": "Carthage1",
        "zAchievement": "ACHIEVEMENT_WON_CARTHAGE_1",
        "Nation": "NATION_CARTHAGE",
        "abOptionValid": {
          "Pair": [
            {
              "zIndex": "GAMEOPTION_LOCKED_SAVE",
              "bValue": "1"
            },
            {
              "zIndex": "GAMEOPTION_NO_UNDO",
              "bValue": "1"
            }
          ]
        },
        "azParametersInvalid": {
          "zValue": [
            "TurnScale",
            "SuccessionGender",
            "SuccessionOrder"
          ]
        }
      },
      {
        "zType": "SCENARIO_CARTHAGE_2",
        "zName": "Carthage Campaign - Game Two - The Rise of Carthage",
        "zMapFile": "Carthage Campaign Game Two",
        "zModName": "Carthage2",
        "zAchievement": "ACHIEVEMENT_WON_CARTHAGE_2",
        "bContinue": "1",
        "Prereq": "SCENARIO_CARTHAGE_1",
        "Nation": "NATION_CARTHAGE",
        "abOptionValid": {
          "Pair": [
            {
              "zIndex": "GAMEOPTION_LOCKED_SAVE",
              "bValue": "1"
            },
            {
              "zIndex": "GAMEOPTION_NO_UNDO",
              "bValue": "1"
            }
          ]
        },
        "azParametersInvalid": {
          "zValue": [
            "TurnScale",
            "SuccessionGender",
            "SuccessionOrder"
          ]
        }
      },
      {
        "zType": "SCENARIO_CARTHAGE_3",
        "zName": "Carthage Campaign - Game Three - The Rise of Rome",
        "zMapFile": "Carthage Campaign Game Three",
        "zModName": "Carthage3",
        "zAchievement": "ACHIEVEMENT_WON_CARTHAGE_3",
        "bContinue": "1",
        "Prereq": "SCENARIO_CARTHAGE_2",
        "Nation": "NATION_CARTHAGE",
        "azParametersInvalid": {
          "zValue": [
            "TurnScale",
            "SuccessionGender",
            "SuccessionOrder"
          ]
        }
      }
    ]
  }
}
    export default data
    