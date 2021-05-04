
    const data: XmlRating.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zColor": {
          
        },
        "zName": {
          
        },
        "zIconName": {
          
        },
        "zHelp": {
          
        },
        "iStrengthModifier": {
          
        },
        "iDefenseModifier": {
          
        },
        "iCriticalChance": {
          
        },
        "iUnitXP": {
          
        },
        "aiYieldCourtRate": {
          
        },
        "aiYieldGovernorModifier": {
          
        },
        "aiYieldAgentPercent": {
          
        }
      },
      {
        "zType": "RATING_WISDOM",
        "zColor": "COLOR_RATING_WISDOM",
        "zName": "Wisdom",
        "zIconName": "RATING_WISDOM",
        "zHelp": "For Leaders and Governors, Wisdom increases {YIELD_SCIENCE}.\nFor Generals, Wisdom increases the Unit's Critical Hit Chance.",
        "iCriticalChance": "1",
        "aiYieldCourtRate": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        },
        "aiYieldGovernorModifier": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "2"
          }
        },
        "aiYieldAgentPercent": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "RATING_CHARISMA",
        "zColor": "COLOR_RATING_CHARISMA",
        "zName": "Charisma",
        "zIconName": "RATING_CHARISMA",
        "zHelp": "For Leaders and Governors, Charisma increases {YIELD_CIVICS}.\nFor Generals, Charisma increases the Unit's Defense Strength.",
        "iDefenseModifier": "2",
        "aiYieldCourtRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        },
        "aiYieldGovernorModifier": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "2"
          }
        },
        "aiYieldAgentPercent": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "RATING_COURAGE",
        "zColor": "COLOR_RATING_COURAGE",
        "zName": "Courage",
        "zIconName": "RATING_COURAGE",
        "zHelp": "For Leaders and Governors, Courage increases {YIELD_TRAINING}.\nFor Generals, Courage increases the Unit's Strength.",
        "iStrengthModifier": "1",
        "aiYieldCourtRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "40"
          }
        },
        "aiYieldGovernorModifier": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "2"
          }
        },
        "aiYieldAgentPercent": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "RATING_DISCIPLINE",
        "zColor": "COLOR_RATING_DISCIPLINE",
        "zName": "Discipline",
        "zIconName": "RATING_DISCIPLINE",
        "zHelp": "For Leaders and Governors, Discipline increases {YIELD_MONEY}.\nFor Generals, Discipline increases the Unit's XP each Year.",
        "iUnitXP": "1",
        "aiYieldCourtRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "80"
          }
        },
        "aiYieldGovernorModifier": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "2"
          }
        },
        "aiYieldAgentPercent": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "10"
          }
        }
      }
    ]
  }
}
    export default data
    