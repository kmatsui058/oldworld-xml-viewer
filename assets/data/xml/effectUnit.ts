
    const data: XmlEffectUnit.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "zIconName": {
          
        },
        "iStrengthModifier": {
          
        },
        "iDefenseModifier": {
          
        },
        "iCriticalChance": {
          
        },
        "iVisionExtra": {
          
        },
        "iMovementExtra": {
          
        },
        "iFatigueExtra": {
          
        },
        "iRangeExtra": {
          
        },
        "iRiverAttackModifier": {
          
        },
        "iSettlementAttackModifier": {
          
        },
        "iUrbanAttackModifier": {
          
        },
        "iDamagedModifier": {
          
        },
        "iBarbarianModifier": {
          
        },
        "iAdjacentEffectDefenseModifier": {
          
        },
        "iHealExtra": {
          
        },
        "iHealAlways": {
          
        },
        "bRout": {
          
        },
        "bIgnoresDistance": {
          
        },
        "bLaunchOffensive": {
          
        },
        "aiTerrainModifier": {
          
        },
        "aiHeightModifier": {
          
        },
        "aiVegetationModifier": {
          
        },
        "aiUnitTraitModifier": {
          
        },
        "aiUnitTraitModifierAttack": {
          
        },
        "aiUnitTraitModifierDefense": {
          
        },
        "aiUnitTraitModifierMelee": {
          
        },
        "abHideVegetation": {
          
        },
        "abUnitTraitValid": {
          
        }
      },
      {
        "zType": "EFFECTUNIT_COMBAT1",
        "Name": "TEXT_EFFECTUNIT_COMBAT1",
        "zIconName": "EFFECTUNIT_COMBAT1",
        "iStrengthModifier": "5"
      },
      {
        "zType": "EFFECTUNIT_COMBAT2",
        "Name": "TEXT_EFFECTUNIT_COMBAT2",
        "zIconName": "EFFECTUNIT_COMBAT2",
        "iStrengthModifier": "10"
      },
      {
        "zType": "EFFECTUNIT_COMBAT3",
        "Name": "TEXT_EFFECTUNIT_COMBAT3",
        "zIconName": "EFFECTUNIT_COMBAT3",
        "iStrengthModifier": "15"
      },
      {
        "zType": "EFFECTUNIT_GUARD1",
        "Name": "TEXT_EFFECTUNIT_GUARD1",
        "zIconName": "EFFECTUNIT_GUARD1",
        "iDefenseModifier": "10",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_GUARD2",
        "Name": "TEXT_EFFECTUNIT_GUARD2",
        "zIconName": "EFFECTUNIT_GUARD2",
        "iDefenseModifier": "15",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_GUARD3",
        "Name": "TEXT_EFFECTUNIT_GUARD3",
        "zIconName": "EFFECTUNIT_GUARD3",
        "iDefenseModifier": "20",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_FOCUS1",
        "Name": "TEXT_EFFECTUNIT_FOCUS1",
        "zIconName": "EFFECTUNIT_FOCUS1",
        "iCriticalChance": "10"
      },
      {
        "zType": "EFFECTUNIT_FOCUS2",
        "Name": "TEXT_EFFECTUNIT_FOCUS2",
        "zIconName": "EFFECTUNIT_FOCUS2",
        "iCriticalChance": "15"
      },
      {
        "zType": "EFFECTUNIT_FOCUS3",
        "Name": "TEXT_EFFECTUNIT_FOCUS3",
        "zIconName": "EFFECTUNIT_FOCUS3",
        "iCriticalChance": "20"
      },
      {
        "zType": "EFFECTUNIT_HERO",
        "Name": "TEXT_EFFECTUNIT_HERO",
        "zIconName": "EFFECTUNIT_HERO",
        "iStrengthModifier": "10",
        "iCriticalChance": "10",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_MOUNTED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_TRACKER",
        "Name": "TEXT_EFFECTUNIT_TRACKER",
        "zIconName": "EFFECTUNIT_TRACKER",
        "iVisionExtra": "2",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_MOUNTED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_SWIFT",
        "Name": "TEXT_EFFECTUNIT_SWIFT",
        "zIconName": "EFFECTUNIT_SWIFT",
        "iMovementExtra": "1",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_MOUNTED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_HARDY",
        "Name": "TEXT_EFFECTUNIT_HARDY",
        "zIconName": "EFFECTUNIT_HARDY",
        "iFatigueExtra": "2",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_EAGLE_EYE",
        "Name": "TEXT_EFFECTUNIT_EAGLE_EYE",
        "zIconName": "EFFECTUNIT_EAGLE_EYE",
        "bIgnoresDistance": "1",
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_MARKSMAN",
        "Name": "TEXT_EFFECTUNIT_MARKSMAN",
        "zIconName": "EFFECTUNIT_MARKSMAN",
        "iRangeExtra": "1",
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_ENGINEER",
        "Name": "TEXT_EFFECTUNIT_ENGINEER",
        "zIconName": "EFFECTUNIT_ENGINEER",
        "iRiverAttackModifier": "50",
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_BESIEGER",
        "Name": "TEXT_EFFECTUNIT_BESIEGER",
        "zIconName": "EFFECTUNIT_BESIEGER",
        "iUrbanAttackModifier": "25",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SIEGE",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_GARRISON",
        "Name": "TEXT_EFFECTUNIT_GARRISON",
        "zIconName": "EFFECTUNIT_GARRISON",
        "aiTerrainModifier": {
          "Pair": {
            "zIndex": "TERRAIN_URBAN",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SIEGE",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_BLOODTHIRSTY",
        "Name": "TEXT_EFFECTUNIT_BLOODTHIRSTY",
        "zIconName": "EFFECTUNIT_BLOODTHIRSTY",
        "iDamagedModifier": "10"
      },
      {
        "zType": "EFFECTUNIT_STEADFAST",
        "Name": "TEXT_EFFECTUNIT_STEADFAST",
        "zIconName": "EFFECTUNIT_STEADFAST",
        "iBarbarianModifier": "25",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_HERBALIST",
        "Name": "TEXT_EFFECTUNIT_HERBALIST",
        "zIconName": "EFFECTUNIT_HERBALIST",
        "iHealExtra": "2"
      },
      {
        "zType": "EFFECTUNIT_HEALER",
        "Name": "TEXT_EFFECTUNIT_HEALER",
        "zIconName": "EFFECTUNIT_HEALER",
        "iHealAlways": "1"
      },
      {
        "zType": "EFFECTUNIT_NOMAD",
        "Name": "TEXT_EFFECTUNIT_NOMAD",
        "zIconName": "EFFECTUNIT_NOMAD",
        "aiTerrainModifier": {
          "Pair": {
            "zIndex": "TERRAIN_SAND",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_MOUNTED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_COLD",
        "Name": "TEXT_EFFECTUNIT_COLD",
        "zIconName": "EFFECTUNIT_COLD",
        "aiTerrainModifier": {
          "Pair": {
            "zIndex": "TERRAIN_TUNDRA",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_MOUNTED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_HIGHLANDER",
        "Name": "TEXT_EFFECTUNIT_HIGHLANDER",
        "zIconName": "EFFECTUNIT_HIGHLANDER",
        "aiHeightModifier": {
          "Pair": {
            "zIndex": "HEIGHT_HILL",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_RANGER",
        "Name": "TEXT_EFFECTUNIT_RANGER",
        "zIconName": "EFFECTUNIT_RANGER",
        "aiVegetationModifier": {
          "Pair": {
            "zIndex": "VEGETATION_TREES",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_BRAVE",
        "Name": "TEXT_EFFECTUNIT_BRAVE",
        "zIconName": "EFFECTUNIT_BRAVE",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_MELEE",
            "iValue": "10"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_SHIELDBEARER",
        "Name": "TEXT_EFFECTUNIT_SHIELDBEARER",
        "zIconName": "EFFECTUNIT_SHIELDBEARER",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "10"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_FIERCE",
        "Name": "TEXT_EFFECTUNIT_FIERCE",
        "zIconName": "EFFECTUNIT_FIERCE",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "10"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_HORSEBANE",
        "Name": "TEXT_EFFECTUNIT_HORSEBANE",
        "zIconName": "EFFECTUNIT_HORSEBANE",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_AGGRESSOR",
        "Name": "TEXT_EFFECTUNIT_AGGRESSOR",
        "zIconName": "EFFECTUNIT_AGGRESSOR",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_SIEGE",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_ROUT",
        "Name": "TEXT_EFFECTUNIT_ROUT",
        "zIconName": "EFFECTUNIT_ROUT",
        "bRout": "1"
      },
      {
        "zType": "EFFECTUNIT_STEALTH",
        "Name": "TEXT_EFFECTUNIT_STEALTH",
        "zIconName": "EFFECTUNIT_STEALTH",
        "abHideVegetation": {
          "Pair": {
            "zIndex": "VEGETATION_TREES",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_ASSAULT",
        "Name": "TEXT_EFFECTUNIT_ASSAULT",
        "zIconName": "EFFECTUNIT_ASSAULT",
        "iSettlementAttackModifier": "200"
      },
      {
        "zType": "EFFECTUNIT_FORMATION",
        "Name": "TEXT_EFFECTUNIT_FORMATION",
        "zIconName": "EFFECTUNIT_FORMATION",
        "iAdjacentEffectDefenseModifier": "20"
      },
      {
        "zType": "EFFECTUNIT_VALOR",
        "Name": "TEXT_EFFECTUNIT_VALOR",
        "zIconName": "EFFECTUNIT_VALOR",
        "iStrengthModifier": "20"
      },
      {
        "zType": "EFFECTUNIT_INGENUITY",
        "Name": "TEXT_EFFECTUNIT_INGENUITY",
        "zIconName": "EFFECTUNIT_INGENUITY",
        "iStrengthModifier": "20"
      },
      {
        "zType": "EFFECTUNIT_SADDLEBORN",
        "Name": "TEXT_EFFECTUNIT_SADDLEBORN",
        "zIconName": "EFFECTUNIT_SADDLEBORN",
        "iStrengthModifier": "20"
      },
      {
        "zType": "EFFECTUNIT_SNIPING",
        "Name": "TEXT_EFFECTUNIT_SNIPING",
        "zIconName": "EFFECTUNIT_SNIPING",
        "iStrengthModifier": "20"
      },
      {
        "zType": "EFFECTUNIT_TIMIDITY",
        "Name": "TEXT_EFFECTUNIT_TIMIDITY",
        "zIconName": "EFFECTUNIT_TIMIDITY",
        "iStrengthModifier": "-20"
      },
      {
        "zType": "EFFECTUNIT_OPINIONFAMILY_FURIOUS",
        "Name": "TEXT_EFFECTUNIT_OPINIONFAMILY_FURIOUS",
        "zIconName": "EFFECTUNIT_FURIOUS",
        "iStrengthModifier": "-30"
      },
      {
        "zType": "EFFECTUNIT_OPINIONFAMILY_ANGRY",
        "Name": "TEXT_EFFECTUNIT_OPINIONFAMILY_ANGRY",
        "zIconName": "EFFECTUNIT_ANGRY",
        "iStrengthModifier": "-20"
      },
      {
        "zType": "EFFECTUNIT_OPINIONFAMILY_UPSET",
        "Name": "TEXT_EFFECTUNIT_OPINIONFAMILY_UPSET",
        "zIconName": "EFFECTUNIT_UPSET",
        "iStrengthModifier": "-10"
      },
      {
        "zType": "EFFECTUNIT_OPINIONFAMILY_PLEASED",
        "Name": "TEXT_EFFECTUNIT_OPINIONFAMILY_PLEASED",
        "zIconName": "EFFECTUNIT_PLEASED",
        "iStrengthModifier": "10"
      },
      {
        "zType": "EFFECTUNIT_OPINIONFAMILY_FRIENDLY",
        "Name": "TEXT_EFFECTUNIT_OPINIONFAMILY_FRIENDLY",
        "zIconName": "EFFECTUNIT_FRIENDLY",
        "iStrengthModifier": "20"
      },
      {
        "zType": "EFFECTUNIT_TRAIT_HERO_ARCHETYPE_LEADER",
        "Name": "TEXT_EFFECTUNIT_TRAIT_HERO_ARCHETYPE_LEADER",
        "zIconName": "EFFECTUNIT_HERO",
        "bLaunchOffensive": "1"
      },
      {
        "zType": "EFFECTUNIT_TRAIT_TACTICIAN_ARCHETYPE",
        "Name": "TEXT_EFFECTUNIT_TRAIT_TACTICIAN_ARCHETYPE",
        "zIconName": "EFFECTUNIT_TACTICIAN",
        "iCriticalChance": "10"
      },
      {
        "zType": "EFFECTUNIT_TRAIT_CRIPPLED",
        "Name": "TEXT_EFFECTUNIT_TRAIT_CRIPPLED",
        "zIconName": "EFFECTUNIT_CRIPPLED",
        "iFatigueExtra": "-1"
      },
      {
        "zType": "EFFECTUNIT_SWORD_OF_THE_GODS",
        "Name": "TEXT_EFFECTUNIT_SWORD_OF_THE_GODS",
        "zIconName": "EFFECTUNIT_BRAVE",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "50"
          }
        },
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_MELEE",
            "bValue": "1"
          }
        }
      }
    ]
  }
}
    export default data
    