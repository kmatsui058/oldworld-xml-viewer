
    const data: XmlScenario.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "SubTitle": {
          
        },
        "zIcon": {
          
        },
        "bPublic": {
          
        },
        "zMapFile": {
          
        },
        "bAllowMap": {
          
        },
        "zMapScript": {
          
        },
        "zModName": {
          
        },
        "azAchievements": {
          
        },
        "bContinue": {
          
        },
        "Prereq": {
          
        },
        "Nation": {
          
        },
        "Difficulty": {
          
        },
        "TurnScale": {
          
        },
        "abOpponents": {
          
        },
        "OpponentLevel": {
          
        },
        "DevelopmentLevel": {
          
        },
        "abTribes": {
          
        },
        "TribeLevel": {
          
        },
        "abOptionEnabled": {
          
        },
        "abOptionValid": {
          
        },
        "azParametersInvalid": {
          
        }
      },
      {
        "zType": "SCENARIO_LEARNTOPLAY_1",
        "Name": "TEXT_SCENARIO_LEARNTOPLAY_1",
        "SubTitle": "TEXT_SCENARIO_LEARNTOPLAY_1_SUB",
        "zIcon": "CarthageThumbnail",
        "zMapFile": "Learn To Play One",
        "zModName": "LearnToPlay1",
        "Nation": "NATION_GREECE",
        "Difficulty": "DIFFICULTY_ABLE",
        "TurnScale": "TURNSCALE_YEAR",
        "TribeLevel": "TRIBELEVEL_NORMAL"
      },
      {
        "zType": "SCENARIO_BARBARIAN",
        "Name": "TEXT_SCENARIO_BARBARIAN",
        "SubTitle": "TEXT_SCENARIO_BARBARIAN_SUB",
        "zIcon": "BarbarianThumbnail",
        "bPublic": "1",
        "bAllowMap": "0",
        "zModName": "Barbarian",
        "Difficulty": "DIFFICULTY_GOOD",
        "TribeLevel": "TRIBELEVEL_NORMAL",
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
        "Name": "TEXT_SCENARIO_CARTHAGE_1",
        "SubTitle": "TEXT_SCENARIO_CARTHAGE_1_SUB",
        "zIcon": "CarthageThumbnail",
        "bPublic": "1",
        "zMapFile": "Carthage Campaign Game One",
        "zModName": "Carthage1",
        "azAchievements": {
          "zValue": "ACHIEVEMENT_CARTHAGE_1"
        },
        "Nation": "NATION_CARTHAGE",
        "Difficulty": "DIFFICULTY_STRONG",
        "TurnScale": "TURNSCALE_YEAR",
        "TribeLevel": "TRIBELEVEL_NORMAL",
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
        "Name": "TEXT_SCENARIO_CARTHAGE_2",
        "SubTitle": "TEXT_SCENARIO_CARTHAGE_2_SUB",
        "zIcon": "CarthageThumbnail",
        "bPublic": "1",
        "zMapFile": "Carthage Campaign Game Two",
        "zModName": "Carthage2",
        "azAchievements": {
          "zValue": "ACHIEVEMENT_CARTHAGE_2"
        },
        "bContinue": "1",
        "Prereq": "SCENARIO_CARTHAGE_1",
        "Nation": "NATION_CARTHAGE",
        "Difficulty": "DIFFICULTY_STRONG",
        "TurnScale": "TURNSCALE_YEAR",
        "TribeLevel": "TRIBELEVEL_NORMAL",
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
        "Name": "TEXT_SCENARIO_CARTHAGE_3",
        "SubTitle": "TEXT_SCENARIO_CARTHAGE_3_SUB",
        "zIcon": "CarthageThumbnail",
        "bPublic": "1",
        "zMapFile": "Carthage Campaign Game Three",
        "zModName": "Carthage3",
        "azAchievements": {
          "zValue": "ACHIEVEMENT_CARTHAGE_3"
        },
        "bContinue": "1",
        "Prereq": "SCENARIO_CARTHAGE_2",
        "Nation": "NATION_CARTHAGE",
        "Difficulty": "DIFFICULTY_STRONG",
        "TurnScale": "TURNSCALE_SEMESTER",
        "TribeLevel": "TRIBELEVEL_NORMAL",
        "azParametersInvalid": {
          "zValue": [
            "TurnScale",
            "SuccessionGender",
            "SuccessionOrder"
          ]
        }
      },
      {
        "zType": "SCENARIO_CARTHAGE_4",
        "Name": "TEXT_SCENARIO_CARTHAGE_4",
        "SubTitle": "TEXT_SCENARIO_CARTHAGE_4_SUB",
        "zIcon": "CarthageThumbnail",
        "bPublic": "1",
        "zMapFile": "Carthage Campaign Game Four",
        "zModName": "Carthage4",
        "azAchievements": {
          "zValue": [
            "ACHIEVEMENT_CARTHAGE_4",
            "ACHIEVEMENT_CARTHAGE_CAMPAIGN"
          ]
        },
        "bContinue": "1",
        "Prereq": "SCENARIO_CARTHAGE_3",
        "Nation": "NATION_CARTHAGE",
        "Difficulty": "DIFFICULTY_STRONG",
        "TurnScale": "TURNSCALE_SEASON",
        "TribeLevel": "TRIBELEVEL_NORMAL",
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
    