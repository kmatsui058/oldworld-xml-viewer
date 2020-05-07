
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
        "AssignMission": {
          
        },
        "aiPlayerOpinion": {
          
        },
        "aiBarbarianOpinion": {
          
        },
        "aiFamilyOpinion": {
          
        },
        "abTraitPrereq": {
          
        },
        "aaiRatingYieldRate": {
          
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
            "zIndex": "RATING_CHARISMA",
            "iValue": "10"
          }
        },
        "aiBarbarianOpinion": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "10"
          }
        },
        "abTraitPrereq": {
          "Pair": [
            {
              "zIndex": "TRAIT_ORATOR_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_SCHOLAR_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_DIPLOMAT_ARCHETYPE",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "COUNCIL_CHANCELLOR",
        "zName": "Chancellor",
        "zIconName": "COUNCIL_CHANCELLOR",
        "TechPrereq": "TECH_RAMPARTS",
        "iXP": "5",
        "iOpinion": "40",
        "AssignMission": "MISSION_CHANCELLOR",
        "abTraitPrereq": {
          "Pair": [
            {
              "zIndex": "TRAIT_COMMANDER_ARCHETYPE",
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
        "aaiRatingYieldRate": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "5"
              }
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "SubPair": {
                "zSubIndex": "YIELD_MONEY",
                "iValue": "50"
              }
            },
            {
              "zIndex": "RATING_WISDOM",
              "SubPair": {
                "zSubIndex": "YIELD_CIVICS",
                "iValue": "20"
              }
            }
          ]
        }
      },
      {
        "zType": "COUNCIL_SPYMASTER",
        "zName": "Spymaster",
        "zIconName": "COUNCIL_SPYMASTER",
        "TechPrereq": "TECH_DRAWBRIDGE",
        "iXP": "5",
        "iOpinion": "40",
        "AssignMission": "MISSION_SPYMASTER",
        "aiFamilyOpinion": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
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
              "zIndex": "TRAIT_ZEALOT_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_SCHEMER_ARCHETYPE",
              "bValue": "1"
            }
          ]
        },
        "aaiRatingYieldRate": {
          "Pair": [
            {
              "zIndex": "RATING_DISCIPLINE",
              "SubPair": {
                "zSubIndex": "YIELD_TRAINING",
                "iValue": "20"
              }
            },
            {
              "zIndex": "RATING_WISDOM",
              "SubPair": {
                "zSubIndex": "YIELD_SCIENCE",
                "iValue": "20"
              }
            }
          ]
        }
      }
    ]
  }
}
    export default data
    