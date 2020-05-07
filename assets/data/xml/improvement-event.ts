
    const data: XmlImprovementEvent.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "Class": {
          
        },
        "Asset": {
          
        },
        "AssetVariation": {
          
        },
        "zIconName": {
          
        },
        "fHillHeightOffset": {
          
        },
        "iBuildTurns": {
          
        },
        "iBuildCost": {
          
        },
        "iUpgradeTurns": {
          
        },
        "iUpgradeRand": {
          
        },
        "iPillageTurns": {
          
        },
        "iRevealChange": {
          
        },
        "iDefenseModifier": {
          
        },
        "iFreshWaterModifier": {
          
        },
        "iRiverModifier": {
          
        },
        "iVP": {
          
        },
        "iMaxCityCount": {
          
        },
        "iMaxFamilyCount": {
          
        },
        "iMaxPlayerCount": {
          
        },
        "iCitySiteUnits": {
          
        },
        "iUpgradeUnits": {
          
        },
        "iDefendUnits": {
          
        },
        "iUnitTurns": {
          
        },
        "iUnitReligionDie": {
          
        },
        "iUnitHeal": {
          
        },
        "iLegitimacy": {
          
        },
        "bBuild": {
          
        },
        "bHolyCity": {
          
        },
        "bTerritoryOnly": {
          
        },
        "bUrban": {
          
        },
        "bRequiresUrban": {
          
        },
        "bTradeNetwork": {
          
        },
        "bSpreadsBorders": {
          
        },
        "bNoAdjacentReligion": {
          
        },
        "bNoVegetation": {
          
        },
        "bFreshWaterSource": {
          
        },
        "bFreshWaterValid": {
          
        },
        "bRiverValid": {
          
        },
        "bRotateTowardsLand": {
          
        },
        "bCoastValid": {
          
        },
        "bWaterCoastValid": {
          
        },
        "bCityValid": {
          
        },
        "bHolyCityValid": {
          
        },
        "bPermanent": {
          
        },
        "bWonder": {
          
        },
        "bHeal": {
          
        },
        "bBonus": {
          
        },
        "bCitySite": {
          
        },
        "bBarbarian": {
          
        },
        "bBlockUpgrade": {
          
        },
        "bRemoveBorder": {
          
        },
        "bRemoveBonus": {
          
        },
        "NationPrereq": {
          
        },
        "ReligionPrereq": {
          
        },
        "CulturePrereq": {
          
        },
        "AdjacentImprovementClassPrereq": {
          
        },
        "ImprovementPrereq": {
          
        },
        "RaiseImprovement": {
          
        },
        "UpgradeImprovement": {
          
        },
        "BonusImprovement": {
          
        },
        "EffectCity": {
          
        },
        "EffectPlayer": {
          
        },
        "UnitDefend": {
          
        },
        "Bonus": {
          
        },
        "BonusCities": {
          
        },
        "aiYieldCost": {
          
        },
        "aiYieldOutput": {
          
        },
        "aiYieldPillage": {
          
        },
        "aiYieldFreshWaterModifier": {
          
        },
        "aiYieldRiverModifier": {
          
        },
        "aiTerrainModifier": {
          
        },
        "aiHeightModifier": {
          
        },
        "aiAdjacentHeightModifier": {
          
        },
        "aiAdjacentImprovementModifier": {
          
        },
        "aiAdjacentImprovementClassModifier": {
          
        },
        "aiUnitTraitHeal": {
          
        },
        "aiUnitTraitXP": {
          
        },
        "aiUnitDie": {
          
        },
        "aiBonusDie": {
          
        },
        "abTerrainValid": {
          
        },
        "abTerrainInvalid": {
          
        },
        "abHeightValid": {
          
        },
        "abHeightAdjacentValid": {
          
        },
        "abVegetationValid": {
          
        },
        "abNoBaseOutput": {
          
        },
        "aeResourceAsset": {
          
        },
        "aeUnitDefend": {
          
        },
        "aaiTerrainYieldModifier": {
          
        },
        "aaiHeightYieldModifier": {
          
        },
        "aaiAdjacentHeightYieldModifier": {
          
        },
        "aaiAdjacentImprovementYieldModifier": {
          
        },
        "aaiBarbarianUnitDie": {
          
        },
        "zAudioLoopWhenBuilding": {
          
        },
        "zAudioSwitchName": {
          
        }
      },
      {
        "zType": "IMPROVEMENT_LAURION_MINE",
        "Name": "TEXT_IMPROVEMENT_LAURION_MINE",
        "Class": "IMPROVEMENTCLASS_MINE",
        "Asset": "ASSET_IMPROVEMENT_MINE",
        "zIconName": "IMPROVEMENT_MINE",
        "iPillageTurns": "10",
        "bTerritoryOnly": "1",
        "bNoVegetation": "1",
        "aiYieldOutput": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "100"
          }
        },
        "aiYieldPillage": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "20"
          }
        },
        "aiAdjacentImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_MINE",
            "iValue": "20"
          }
        },
        "abTerrainValid": {
          "Pair": [
            {
              "zIndex": "TERRAIN_LUSH",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_TEMPERATE",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_ARID",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_TUNDRA",
              "bValue": "1"
            }
          ]
        },
        "abTerrainInvalid": {
          "Pair": {
            "zIndex": "TERRAIN_SAND",
            "bValue": "1"
          }
        },
        "abHeightValid": {
          "Pair": {
            "zIndex": "HEIGHT_HILL",
            "bValue": "1"
          }
        },
        "abNoBaseOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_SALT",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_GEM",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_GOLD",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_SILVER",
              "bValue": "1"
            }
          ]
        },
        "aeResourceAsset": {
          "Pair": [
            {
              "zIndex": "RESOURCE_ORE",
              "zValue": "ASSET_IMPROVEMENT_MINE_ORE"
            },
            {
              "zIndex": "RESOURCE_GOLD",
              "zValue": "ASSET_IMPROVEMENT_MINE_GOLD"
            },
            {
              "zIndex": "RESOURCE_GEM",
              "zValue": "ASSET_IMPROVEMENT_MINE_GEM"
            },
            {
              "zIndex": "RESOURCE_SILVER",
              "zValue": "ASSET_IMPROVEMENT_MINE_SILVER"
            },
            {
              "zIndex": "RESOURCE_SALT",
              "zValue": "ASSET_IMPROVEMENT_MINE_SALT"
            }
          ]
        },
        "aaiTerrainYieldModifier": {
          "Pair": {
            "zIndex": "TERRAIN_TUNDRA",
            "SubPair": {
              "zSubIndex": "YIELD_IRON",
              "iValue": "-20"
            }
          }
        },
        "aaiHeightYieldModifier": {
          "Pair": {
            "zIndex": "HEIGHT_HILL",
            "SubPair": {
              "zSubIndex": "YIELD_IRON",
              "iValue": "50"
            }
          }
        }
      },
      {
        "zType": "IMPROVEMENT_FOREST_FIRE_TOMB",
        "Name": "TEXT_IMPROVEMENT_FOREST_FIRE_TOMB",
        "Class": "IMPROVEMENTCLASS_SHRINE",
        "Asset": "ASSET_IMPROVEMENT_RUINS",
        "zIconName": "IMPROVEMENT_RUINS",
        "iPillageTurns": "10",
        "bTerritoryOnly": "1",
        "bNoVegetation": "1",
        "aiYieldOutput": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "3"
          }
        },
        "aiYieldPillage": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "50"
          }
        },
        "abTerrainValid": {
          "Pair": [
            {
              "zIndex": "TERRAIN_LUSH",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_TEMPERATE",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_ARID",
              "bValue": "1"
            }
          ]
        },
        "abTerrainInvalid": {
          "Pair": [
            {
              "zIndex": "TERRAIN_TUNDRA",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_SAND",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENT_FOREST_FIRE_MONUMENT",
        "Name": "TEXT_IMPROVEMENT_FOREST_FIRE_MONUMENT",
        "Class": "IMPROVEMENTCLASS_SHRINE",
        "Asset": "ASSET_IMPROVEMENT_RUINS",
        "zIconName": "IMPROVEMENT_RUINS",
        "iPillageTurns": "10",
        "bTerritoryOnly": "1",
        "bNoVegetation": "1",
        "aiYieldOutput": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "5"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "100"
            }
          ]
        },
        "aiYieldPillage": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "50"
          }
        },
        "abTerrainValid": {
          "Pair": [
            {
              "zIndex": "TERRAIN_LUSH",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_TEMPERATE",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_ARID",
              "bValue": "1"
            }
          ]
        },
        "abTerrainInvalid": {
          "Pair": [
            {
              "zIndex": "TERRAIN_TUNDRA",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_SAND",
              "bValue": "1"
            }
          ]
        }
      }
    ]
  }
}
    export default data
    