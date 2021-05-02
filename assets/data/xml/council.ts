
    const data: XmlCouncil.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "zIconName": {
          
        },
        "TechPrereq": {
          
        },
        "iXP": {
          
        },
        "iOpinion": {
          
        },
        "bDisable": {
          
        },
        "EffectPlayer": {
          
        },
        "AssignMission": {
          
        },
        "aiPlayerOpinion": {
          
        },
        "aiTribeOpinion": {
          
        },
        "aiReligionOpinion": {
          
        },
        "aiFamilyOpinion": {
          
        },
        "abTraitPrereq": {
          
        },
        "aaiRatingYieldGlobal": {
          
        },
        "aaiRatingYieldCity": {
          
        }
      },
      {
        "zType": "COUNCIL_AMBASSADOR",
        "zName": "Ambassador",
        "zIconName": "COUNCIL_AMBASSADOR",
        "TechPrereq": "TECH_ARISTOCRACY",
        "iXP": "5",
        "iOpinion": "40",
        "AssignMission": "MISSION_AMBASSADOR",
        "aiPlayerOpinion": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "10"
          }
        },
        "aiTribeOpinion": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "10"
          }
        },
        "abTraitPrereq": {
          "Pair": [
            {
              "zIndex": "TRAIT_COMMANDER_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_ORATOR_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_DIPLOMAT_ARCHETYPE",
              "bValue": "1"
            }
          ]
        },
        "aaiRatingYieldGlobal": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "SubPair": {
              "zSubIndex": "YIELD_CIVICS",
              "iValue": "20"
            }
          }
        },
        "aaiRatingYieldCity": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "SubPair": {
              "zSubIndex": "YIELD_GROWTH",
              "iValue": "10"
            }
          }
        }
      },
      {
        "zType": "COUNCIL_CHANCELLOR",
        "zName": "Chancellor",
        "zIconName": "COUNCIL_CHANCELLOR",
        "TechPrereq": "TECH_SPOKED_WHEEL",
        "iXP": "5",
        "iOpinion": "40",
        "AssignMission": "MISSION_CHANCELLOR",
        "aiFamilyOpinion": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "10"
          }
        },
        "abTraitPrereq": {
          "Pair": [
            {
              "zIndex": "TRAIT_ZEALOT_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_JUDGE_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_BUILDER_ARCHETYPE",
              "bValue": "1"
            }
          ]
        },
        "aaiRatingYieldGlobal": {
          "Pair": [
            {
              "zIndex": "RATING_COURAGE",
              "SubPair": {
                "zSubIndex": "YIELD_TRAINING",
                "iValue": "30"
              }
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "SubPair": {
                "zSubIndex": "YIELD_MONEY",
                "iValue": "60"
              }
            }
          ]
        },
        "aaiRatingYieldCity": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "SubPair": {
              "zSubIndex": "YIELD_CULTURE",
              "iValue": "10"
            }
          }
        }
      },
      {
        "zType": "COUNCIL_SPYMASTER",
        "zName": "Spymaster",
        "zIconName": "COUNCIL_SPYMASTER",
        "TechPrereq": "TECH_PORTCULLIS",
        "iXP": "5",
        "iOpinion": "40",
        "EffectPlayer": "EFFECTPLAYER_COUNCIL_SPYMASTER",
        "AssignMission": "MISSION_SPYMASTER",
        "aiReligionOpinion": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "10"
          }
        },
        "abTraitPrereq": {
          "Pair": [
            {
              "zIndex": "TRAIT_TACTICIAN_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_SCHEMER_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_SCHOLAR_ARCHETYPE",
              "bValue": "1"
            }
          ]
        },
        "aaiRatingYieldGlobal": {
          "Pair": [
            {
              "zIndex": "RATING_WISDOM",
              "SubPair": {
                "zSubIndex": "YIELD_SCIENCE",
                "iValue": "10"
              }
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "5"
              }
            }
          ]
        },
        "aaiRatingYieldCity": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "SubPair": {
              "zSubIndex": "YIELD_DISCONTENT",
              "iValue": "-5"
            }
          }
        }
      }
    ]
  }
}
    export default data
    