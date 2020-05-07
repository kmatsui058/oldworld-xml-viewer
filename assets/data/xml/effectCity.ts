
    const data: XmlEffectCity.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "Source": {
          
        },
        "EffectCityUnlock": {
          
        },
        "SourceUnlock": {
          
        },
        "SourceEffectPlayer": {
          
        },
        "SourceFamilyClass": {
          
        },
        "SourceCulture": {
          
        },
        "SourceDifficulty": {
          
        },
        "SourceImprovement": {
          
        },
        "SourceLaw": {
          
        },
        "SourceNation": {
          
        },
        "SourceOpinionFamily": {
          
        },
        "SourceOpinionReligion": {
          
        },
        "SourceProject": {
          
        },
        "SourceReligion": {
          
        },
        "SourceResource": {
          
        },
        "SourceSpecialist": {
          
        },
        "SourceTheology": {
          
        },
        "SourceTrait": {
          
        },
        "SourceUnit": {
          
        },
        "aeSourceImprovements": {
          
        },
        "aeSourceResources": {
          
        },
        "iCityHP": {
          
        },
        "iUnitXP": {
          
        },
        "iUnitLevel": {
          
        },
        "iUnitHeal": {
          
        },
        "iRangeChange": {
          
        },
        "iRandomPromotions": {
          
        },
        "iStrengthModifier": {
          
        },
        "iSpecialistCostModifier": {
          
        },
        "iSpecialistRuralTrainTimeModifier": {
          
        },
        "iSpecialistUrbanCostModifier": {
          
        },
        "iSpecialistUrbanTrainTimeModifier": {
          
        },
        "iDiscipleTrainTimeModifier": {
          
        },
        "iUrbanBuildTurnChange": {
          
        },
        "iFamilyOpinion": {
          
        },
        "iRebelProb": {
          
        },
        "bLuxury": {
          
        },
        "bNoHurry": {
          
        },
        "bHurryCivics": {
          
        },
        "bHurryTraining": {
          
        },
        "bHurryMoney": {
          
        },
        "bHurryPopulation": {
          
        },
        "bEnablesGovernor": {
          
        },
        "bAlwaysConnected": {
          
        },
        "bBuyTile": {
          
        },
        "bStateReligionImprovements": {
          
        },
        "aiYieldCultureGrowth": {
          
        },
        "aiYieldRate": {
          
        },
        "aiYieldRatePopulation": {
          
        },
        "aiYieldRateCulture": {
          
        },
        "aiYieldRateOpinion": {
          
        },
        "aiYieldRateMilitary": {
          
        },
        "aiYieldRateSpecialist": {
          
        },
        "aiYieldRateReligion": {
          
        },
        "aiYieldRateReligionWorld": {
          
        },
        "aiYieldModifier": {
          
        },
        "aiImprovementModifier": {
          
        },
        "aiImprovementRiverModifier": {
          
        },
        "aiImprovementClassModifier": {
          
        },
        "aiUnitCostModifier": {
          
        },
        "aiUnitTrainModifier": {
          
        },
        "aiUnitTraitXP": {
          
        },
        "aiUnitTraitLevel": {
          
        },
        "aiUnitTraitCostModifier": {
          
        },
        "aiUnitTraitTrainModifier": {
          
        },
        "aiImprovementClassUpgradeTurnChange": {
          
        },
        "abNoImprovementClassMax": {
          
        },
        "aeFreePromotion": {
          
        },
        "aeFreeUnitEffectCity": {
          
        },
        "aeTraitPromotion": {
          
        },
        "aaiImprovementClassYield": {
          
        },
        "aaiEffectCityYieldRate": {
          
        }
      },
      {
        "zType": "EFFECTCITY_BASE",
        "Name": "TEXT_EFFECTCITY_BASE",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "80"
            },
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "80"
            },
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "80"
            },
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_CAPITAL",
        "Name": "TEXT_EFFECTCITY_CAPITAL",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "60"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "40"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_SEAT",
        "Name": "TEXT_EFFECTCITY_FAMILY_SEAT"
      },
      {
        "zType": "EFFECTCITY_CONNECTED",
        "Name": "TEXT_EFFECTCITY_CONNECTED",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "20"
          }
        },
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_MAINTENANCE",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_DAMAGED",
        "Name": "TEXT_EFFECTCITY_DAMAGED",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "EFFECTCITY_HOLY_CITY",
        "Name": "TEXT_EFFECTCITY_HOLY_CITY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_FRESH_WATER",
        "Name": "TEXT_EFFECTCITY_FRESH_WATER",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_CITIZEN",
        "Name": "TEXT_EFFECTCITY_CITIZEN",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTCITY_POPULATION",
        "Name": "TEXT_EFFECTCITY_POPULATION",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_MAINTENANCE",
              "iValue": "40"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "-20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_LUXURY",
        "Name": "TEXT_EFFECTCITY_LUXURY",
        "aeSourceResources": {
          "zValue": [
            "RESOURCE_SALT",
            "RESOURCE_GEM",
            "RESOURCE_FUR",
            "RESOURCE_INCENSE",
            "RESOURCE_OLIVE",
            "RESOURCE_WINE",
            "RESOURCE_DYE",
            "RESOURCE_PEARL"
          ]
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_LANDOWNERS",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_LANDOWNERS",
        "SourceFamilyClass": "FAMILY_CLASS_LANDOWNERS",
        "iSpecialistRuralTrainTimeModifier": "-50",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "20"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_RESOURCE_FOOD_STAPLE",
            "SubPair": [
              {
                "zSubIndex": "YIELD_GROWTH",
                "iValue": "10"
              },
              {
                "zSubIndex": "YIELD_FOOD",
                "iValue": "40"
              }
            ]
          }
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_LANDOWNERS_SEAT",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_LANDOWNERS_SEAT",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "SourceFamilyClass": "FAMILY_CLASS_LANDOWNERS",
        "bBuyTile": "1"
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_CHAMPIONS",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_CHAMPIONS",
        "SourceFamilyClass": "FAMILY_CLASS_CHAMPIONS",
        "iStrengthModifier": "50",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        },
        "aeFreePromotion": {
          "zValue": "PROMOTION_STEADFAST"
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_CHAMPIONS_SEAT",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_CHAMPIONS_SEAT",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "SourceFamilyClass": "FAMILY_CLASS_CHAMPIONS",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_STATESMEN",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_STATESMEN",
        "SourceFamilyClass": "FAMILY_CLASS_STATESMEN",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "10"
          }
        },
        "aiYieldRateOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_STATESMEN_SEAT",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_STATESMEN_SEAT",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "EffectCityUnlock": "EFFECTCITY_FAMILY_CLASS_STATESMEN_SEAT_DECREE",
        "SourceFamilyClass": "FAMILY_CLASS_STATESMEN"
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_STATESMEN_SEAT_DECREE",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_STATESMEN_SEAT_DECREE",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "SourceFamilyClass": "FAMILY_CLASS_STATESMEN"
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_PATRONS",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_PATRONS",
        "SourceFamilyClass": "FAMILY_CLASS_PATRONS",
        "aiYieldCultureGrowth": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "100"
          }
        },
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        },
        "aiYieldRateSpecialist": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_PATRONS_SEAT",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_PATRONS_SEAT",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "SourceFamilyClass": "FAMILY_CLASS_PATRONS",
        "bHurryMoney": "1"
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_CLERICS",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_CLERICS",
        "SourceFamilyClass": "FAMILY_CLASS_CLERICS",
        "iDiscipleTrainTimeModifier": "-50",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_CLERICS_SEAT",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_CLERICS_SEAT",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "SourceFamilyClass": "FAMILY_CLASS_CLERICS",
        "aiImprovementClassModifier": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENTCLASS_MONASTERY",
              "iValue": "20"
            },
            {
              "zIndex": "IMPROVEMENTCLASS_TEMPLE",
              "iValue": "20"
            },
            {
              "zIndex": "IMPROVEMENTCLASS_CATHEDRAL",
              "iValue": "20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_SAGES",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_SAGES",
        "SourceFamilyClass": "FAMILY_CLASS_SAGES",
        "iSpecialistUrbanCostModifier": "-25",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        },
        "aiYieldRatePopulation": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_SAGES_SEAT",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_SAGES_SEAT",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "EffectCityUnlock": "EFFECTCITY_FAMILY_CLASS_SAGES_SEAT_INQUIRY",
        "SourceFamilyClass": "FAMILY_CLASS_SAGES"
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_SAGES_SEAT_INQUIRY",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_SAGES_SEAT_INQUIRY",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "SourceFamilyClass": "FAMILY_CLASS_SAGES"
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_TRADERS",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_TRADERS",
        "SourceUnlock": "EFFECTCITY_UNIT_CARAVAN",
        "SourceFamilyClass": "FAMILY_CLASS_TRADERS",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_LUXURY",
            "SubPair": {
              "zSubIndex": "YIELD_CIVICS",
              "iValue": "20"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_TRADERS_SEAT",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_TRADERS_SEAT",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "SourceFamilyClass": "FAMILY_CLASS_TRADERS",
        "aiImprovementClassUpgradeTurnChange": {
          "Pair": {
            "zIndex": "IMPROVEMENTCLASS_HAMLET",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_ARTISANS",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_ARTISANS",
        "SourceFamilyClass": "FAMILY_CLASS_ARTISANS",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "20"
          }
        },
        "aiImprovementModifier": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENT_LUMBERMILL",
              "iValue": "20"
            },
            {
              "zIndex": "IMPROVEMENT_MINE",
              "iValue": "20"
            }
          ]
        },
        "aeTraitPromotion": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_SIEGE",
              "zValue": "PROMOTION_INGENUITY"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "zValue": "PROMOTION_INGENUITY"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_ARTISANS_SEAT",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_ARTISANS_SEAT",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "SourceFamilyClass": "FAMILY_CLASS_ARTISANS",
        "iUrbanBuildTurnChange": "-1"
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_RIDERS",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_RIDERS",
        "SourceFamilyClass": "FAMILY_CLASS_RIDERS",
        "bAlwaysConnected": "1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        },
        "aeTraitPromotion": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "zValue": "PROMOTION_SADDLEBORN"
          }
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_RIDERS_SEAT",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_RIDERS_SEAT",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "SourceFamilyClass": "FAMILY_CLASS_RIDERS",
        "aeFreeUnitEffectCity": {
          "zValue": [
            "EFFECTCITY_RESOURCE_HORSE",
            "EFFECTCITY_RESOURCE_CAMEL",
            "EFFECTCITY_RESOURCE_ELEPHANT"
          ]
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_HUNTERS",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_HUNTERS",
        "SourceFamilyClass": "FAMILY_CLASS_HUNTERS",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        },
        "aiImprovementModifier": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENT_CAMP",
              "iValue": "100"
            },
            {
              "zIndex": "IMPROVEMENT_NETS",
              "iValue": "100"
            }
          ]
        },
        "aeTraitPromotion": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "zValue": "PROMOTION_SNIPING"
          }
        }
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_HUNTERS_SEAT",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_HUNTERS_SEAT",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "EffectCityUnlock": "EFFECTCITY_FAMILY_CLASS_HUNTERS_SEAT_HUNT",
        "SourceFamilyClass": "FAMILY_CLASS_HUNTERS"
      },
      {
        "zType": "EFFECTCITY_FAMILY_CLASS_HUNTERS_SEAT_HUNT",
        "Name": "TEXT_EFFECTCITY_FAMILY_CLASS_HUNTERS_SEAT_HUNT",
        "Source": "TEXT_EFFECTCITY_SEAT_SOURCE",
        "SourceFamilyClass": "FAMILY_CLASS_HUNTERS"
      },
      {
        "zType": "EFFECTCITY_CULTURE_DEVELOPING",
        "Name": "TEXT_EFFECTCITY_CULTURE_DEVELOPING",
        "SourceCulture": "CULTURE_DEVELOPING",
        "aiYieldRatePopulation": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "EFFECTCITY_CULTURE_STRONG",
        "Name": "TEXT_EFFECTCITY_CULTURE_STRONG",
        "SourceCulture": "CULTURE_STRONG",
        "aiYieldRatePopulation": {
          "Pair": [
            {
              "zIndex": "YIELD_IRON",
              "iValue": "-2"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "-1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_CULTURE_LEGENDARY",
        "Name": "TEXT_EFFECTCITY_CULTURE_LEGENDARY",
        "SourceCulture": "CULTURE_LEGENDARY",
        "aiYieldRatePopulation": {
          "Pair": [
            {
              "zIndex": "YIELD_IRON",
              "iValue": "-3"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "-2"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "-1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_ABLE",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_ABLE",
        "SourceDifficulty": "DIFFICULTY_ABLE",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_ABLE_CAPITAL",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_ABLE_CAPITAL",
        "Source": "TEXT_EFFECTCITY_CAPITAL_SOURCE",
        "SourceDifficulty": "DIFFICULTY_ABLE",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "320"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_JUST",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_JUST",
        "SourceDifficulty": "DIFFICULTY_JUST",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "70"
          }
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_JUST_CAPITAL",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_JUST_CAPITAL",
        "Source": "TEXT_EFFECTCITY_CAPITAL_SOURCE",
        "SourceDifficulty": "DIFFICULTY_JUST",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "80"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "280"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_GOOD",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_GOOD",
        "SourceDifficulty": "DIFFICULTY_GOOD",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "60"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_GOOD_CAPITAL",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_GOOD_CAPITAL",
        "Source": "TEXT_EFFECTCITY_CAPITAL_SOURCE",
        "SourceDifficulty": "DIFFICULTY_GOOD",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "60"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "240"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_STRONG",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_STRONG",
        "SourceDifficulty": "DIFFICULTY_STRONG",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_STRONG_CAPITAL",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_STRONG_CAPITAL",
        "Source": "TEXT_EFFECTCITY_CAPITAL_SOURCE",
        "SourceDifficulty": "DIFFICULTY_STRONG",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "40"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "200"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_NOBLE",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_NOBLE",
        "SourceDifficulty": "DIFFICULTY_NOBLE",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "30"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "40"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_NOBLE_CAPITAL",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_NOBLE_CAPITAL",
        "Source": "TEXT_EFFECTCITY_CAPITAL_SOURCE",
        "SourceDifficulty": "DIFFICULTY_NOBLE",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "30"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "160"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_GLORIOUS",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_GLORIOUS",
        "SourceDifficulty": "DIFFICULTY_GLORIOUS",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "40"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "30"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_GLORIOUS_CAPITAL",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_GLORIOUS_CAPITAL",
        "Source": "TEXT_EFFECTCITY_CAPITAL_SOURCE",
        "SourceDifficulty": "DIFFICULTY_GLORIOUS",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "120"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_MAGNIFICENT",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_MAGNIFICENT",
        "SourceDifficulty": "DIFFICULTY_MAGNIFICENT",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_MAGNIFICENT_CAPITAL",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_MAGNIFICENT_CAPITAL",
        "Source": "TEXT_EFFECTCITY_CAPITAL_SOURCE",
        "SourceDifficulty": "DIFFICULTY_MAGNIFICENT",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "80"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_GREAT",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_GREAT",
        "SourceDifficulty": "DIFFICULTY_GREAT",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "60"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_DIFFICULTY_GREAT_CAPITAL",
        "Name": "TEXT_EFFECTCITY_DIFFICULTY_GREAT_CAPITAL",
        "Source": "TEXT_EFFECTCITY_CAPITAL_SOURCE",
        "SourceDifficulty": "DIFFICULTY_GREAT",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_HAMLET",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_HAMLET",
        "SourceImprovement": "IMPROVEMENT_HAMLET"
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_VILLAGE",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_VILLAGE",
        "SourceImprovement": "IMPROVEMENT_VILLAGE"
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_TOWN",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_TOWN",
        "SourceImprovement": "IMPROVEMENT_TOWN"
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_BARRACKS",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_BARRACKS",
        "SourceImprovement": "IMPROVEMENT_BARRACKS",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_RANGE",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_RANGE",
        "SourceImprovement": "IMPROVEMENT_RANGE",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_GARRISON_1",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_GARRISON_1",
        "SourceImprovement": "IMPROVEMENT_GARRISON_1",
        "bEnablesGovernor": "1"
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_GARRISON_2",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_GARRISON_2",
        "SourceImprovement": "IMPROVEMENT_GARRISON_2",
        "bEnablesGovernor": "1",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_MAINTENANCE",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_GARRISON_3",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_GARRISON_3",
        "SourceImprovement": "IMPROVEMENT_GARRISON_3",
        "bEnablesGovernor": "1",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_MAINTENANCE",
              "iValue": "-20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_MARKET_1",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_MARKET_1",
        "SourceImprovement": "IMPROVEMENT_MARKET_1",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "20"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_LUXURY",
            "SubPair": {
              "zSubIndex": "YIELD_CULTURE",
              "iValue": "20"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_MARKET_2",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_MARKET_2",
        "SourceImprovement": "IMPROVEMENT_MARKET_2",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "30"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_LUXURY",
            "SubPair": {
              "zSubIndex": "YIELD_CULTURE",
              "iValue": "20"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_MARKET_3",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_MARKET_3",
        "SourceImprovement": "IMPROVEMENT_MARKET_3",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "50"
            }
          ]
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_LUXURY",
            "SubPair": {
              "zSubIndex": "YIELD_CULTURE",
              "iValue": "20"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_LIBRARY_1",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_LIBRARY_1",
        "SourceImprovement": "IMPROVEMENT_LIBRARY_1",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_LIBRARY_2",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_LIBRARY_2",
        "SourceImprovement": "IMPROVEMENT_LIBRARY_2",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_LIBRARY_3",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_LIBRARY_3",
        "SourceImprovement": "IMPROVEMENT_LIBRARY_3",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_COURTHOUSE_1",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_COURTHOUSE_1",
        "SourceImprovement": "IMPROVEMENT_COURTHOUSE_1",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_COURTHOUSE_2",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_COURTHOUSE_2",
        "SourceImprovement": "IMPROVEMENT_COURTHOUSE_2",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_COURTHOUSE_3",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_COURTHOUSE_3",
        "SourceImprovement": "IMPROVEMENT_COURTHOUSE_3",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_MAINTENANCE",
              "iValue": "-20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_SHRINE_FIRE",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_SHRINE_FIRE",
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_MINE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_SHRINE_UNDERWORLD",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_SHRINE_UNDERWORLD",
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_QUARRY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_SHRINE_HEALING",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_SHRINE_HEALING",
        "aeFreePromotion": {
          "zValue": "PROMOTION_HERBALIST"
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_SHRINE_HUNTING",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_SHRINE_HUNTING",
        "iUnitLevel": "1"
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_HOLY_SITE_ZOROASTRIANISM",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_HOLY_SITE_ZOROASTRIANISM",
        "SourceReligion": "RELIGION_ZOROASTRIANISM",
        "aiYieldRateReligionWorld": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_HOLY_SITE_JUDAISM",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_HOLY_SITE_JUDAISM",
        "SourceReligion": "RELIGION_JUDAISM",
        "aiYieldRateReligionWorld": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_HOLY_SITE_CHRISTIANITY",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_HOLY_SITE_CHRISTIANITY",
        "SourceReligion": "RELIGION_CHRISTIANITY",
        "aiYieldRateReligionWorld": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_HOLY_SITE_MANICHAEISM",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_HOLY_SITE_MANICHAEISM",
        "SourceReligion": "RELIGION_MANICHAEISM",
        "aiYieldRateReligionWorld": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_GREAT_ZIGGURAT",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_GREAT_ZIGGURAT",
        "SourceImprovement": "IMPROVEMENT_GREAT_ZIGGURAT"
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_ORACLE",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_ORACLE",
        "SourceImprovement": "IMPROVEMENT_ORACLE",
        "aiYieldRateReligion": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_HANGING_GARDENS_ALL",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_HANGING_GARDENS_ALL",
        "SourceImprovement": "IMPROVEMENT_HANGING_GARDENS",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_NECROPOLIS",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_NECROPOLIS",
        "SourceImprovement": "IMPROVEMENT_NECROPOLIS",
        "aiYieldRateSpecialist": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_NECROPOLIS_ALL",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_NECROPOLIS_ALL",
        "SourceImprovement": "IMPROVEMENT_NECROPOLIS",
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_IMPROVEMENTCLASS_TEMPLE",
            "SubPair": {
              "zSubIndex": "YIELD_CULTURE",
              "iValue": "20"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_ISHTAR_GATE",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_ISHTAR_GATE",
        "SourceImprovement": "IMPROVEMENT_ISHTAR_GATE",
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_LIGHTHOUSE",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_LIGHTHOUSE",
        "SourceImprovement": "IMPROVEMENT_LIGHTHOUSE",
        "aiYieldRatePopulation": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_LIGHTHOUSE_COAST",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_LIGHTHOUSE_COAST",
        "SourceImprovement": "IMPROVEMENT_LIGHTHOUSE",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_APADANA_STATE",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_APADANA_STATE",
        "SourceImprovement": "IMPROVEMENT_APADANA",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_ACROPOLIS",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_ACROPOLIS",
        "SourceImprovement": "IMPROVEMENT_ACROPOLIS",
        "aiYieldRateReligion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_ACROPOLIS_ALL",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_ACROPOLIS_ALL",
        "SourceImprovement": "IMPROVEMENT_ACROPOLIS",
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_PROJECT_FORUM",
            "SubPair": {
              "zSubIndex": "YIELD_ORDERS",
              "iValue": "5"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_COLOSSUS",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_COLOSSUS",
        "SourceImprovement": "IMPROVEMENT_COLOSSUS",
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_COLOSSUS_ALL",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_COLOSSUS_ALL",
        "SourceImprovement": "IMPROVEMENT_COLOSSUS",
        "aeFreePromotion": {
          "zValue": "PROMOTION_GUARD1"
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_MUSAEUM",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_MUSAEUM",
        "SourceImprovement": "IMPROVEMENT_MUSAEUM",
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_MUSAEUM_ALL",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_MUSAEUM_ALL",
        "SourceImprovement": "IMPROVEMENT_MUSAEUM",
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_SPECIALIST_ELDER",
            "SubPair": {
              "zSubIndex": "YIELD_CULTURE",
              "iValue": "40"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_CIRCUS_MAXIMUS_ALL",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_CIRCUS_MAXIMUS_ALL",
        "SourceImprovement": "IMPROVEMENT_CIRCUS_MAXIMUS",
        "aeTraitPromotion": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "zValue": "PROMOTION_SWIFT"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_MAUSOLEUM_ALL",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_MAUSOLEUM_ALL",
        "SourceImprovement": "IMPROVEMENT_MAUSOLEUM",
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_CONNECTED",
            "SubPair": {
              "zSubIndex": "YIELD_CIVICS",
              "iValue": "40"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_PANTHEON",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_PANTHEON",
        "SourceImprovement": "IMPROVEMENT_PANTHEON",
        "aiYieldRateReligion": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_PANTHEON_STATE",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_PANTHEON_STATE",
        "SourceImprovement": "IMPROVEMENT_PANTHEON",
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_HAGIA_SOPHIA_ALL",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_HAGIA_SOPHIA_ALL",
        "SourceImprovement": "IMPROVEMENT_HAGIA_SOPHIA",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENT_GRAND_BAZAAR_ALL",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENT_GRAND_BAZAAR_ALL",
        "SourceImprovement": "IMPROVEMENT_GRAND_BAZAAR",
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_LUXURY",
            "SubPair": {
              "zSubIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_THEATER",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_THEATER",
        "aeSourceImprovements": {
          "zValue": [
            "IMPROVEMENT_THEATER_1",
            "IMPROVEMENT_THEATER_2",
            "IMPROVEMENT_THEATER_3"
          ]
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_MARKET",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_MARKET",
        "aeSourceImprovements": {
          "zValue": [
            "IMPROVEMENT_MARKET_1",
            "IMPROVEMENT_MARKET_2",
            "IMPROVEMENT_MARKET_3"
          ]
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_LIBRARY",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_LIBRARY",
        "aeSourceImprovements": {
          "zValue": [
            "IMPROVEMENT_LIBRARY_1",
            "IMPROVEMENT_LIBRARY_2",
            "IMPROVEMENT_LIBRARY_3"
          ]
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_COURTHOUSE",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_COURTHOUSE",
        "aeSourceImprovements": {
          "zValue": [
            "IMPROVEMENT_COURTHOUSE_1",
            "IMPROVEMENT_COURTHOUSE_2",
            "IMPROVEMENT_COURTHOUSE_3"
          ]
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_HOLY_SITE",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_HOLY_SITE",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_MONASTERY_MYTHOLOGY",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_MONASTERY_MYTHOLOGY",
        "SourceTheology": "THEOLOGY_MYTHOLOGY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_MONASTERY_VENERATION",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_MONASTERY_VENERATION",
        "SourceTheology": "THEOLOGY_VENERATION",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_MONASTERY_LEGALISM",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_MONASTERY_LEGALISM",
        "SourceTheology": "THEOLOGY_LEGALISM",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_TEMPLE",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_TEMPLE",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_TEMPLE_REVELATION",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_TEMPLE_REVELATION",
        "SourceTheology": "THEOLOGY_REVELATION",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_TEMPLE_GNOSTICISM",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_TEMPLE_GNOSTICISM",
        "SourceTheology": "THEOLOGY_GNOSTICISM",
        "aiYieldRateSpecialist": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL_REDEMPTION",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL_REDEMPTION",
        "SourceTheology": "THEOLOGY_REDEMPTION",
        "aiImprovementModifier": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENT_FARM",
              "iValue": "10"
            },
            {
              "zIndex": "IMPROVEMENT_MINE",
              "iValue": "10"
            },
            {
              "zIndex": "IMPROVEMENT_QUARRY",
              "iValue": "10"
            },
            {
              "zIndex": "IMPROVEMENT_LUMBERMILL",
              "iValue": "10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL_DUALISM",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL_DUALISM",
        "SourceTheology": "THEOLOGY_DUALISM",
        "aiYieldRateReligion": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL_ENLIGHTENMENT",
        "Name": "TEXT_EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL_ENLIGHTENMENT",
        "SourceTheology": "THEOLOGY_ENLIGHTENMENT",
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_CENTRALIZATION_CAPITAL",
        "Name": "TEXT_EFFECTCITY_LAW_CENTRALIZATION",
        "SourceLaw": "LAW_CENTRALIZATION",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "25"
            },
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "25"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_LAW_SLAVERY",
        "Name": "TEXT_EFFECTCITY_LAW_SLAVERY",
        "SourceLaw": "LAW_SLAVERY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_FREEDOM",
        "Name": "TEXT_EFFECTCITY_LAW_FREEDOM",
        "SourceLaw": "LAW_FREEDOM",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_TYRANNY",
        "Name": "TEXT_EFFECTCITY_LAW_TYRANNY",
        "SourceLaw": "LAW_TYRANNY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "10"
          }
        },
        "aiYieldRateMilitary": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_SERFDOM",
        "Name": "TEXT_EFFECTCITY_LAW_SERFDOM",
        "SourceLaw": "LAW_SERFDOM",
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_FARM",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_MONOTHEISM_STATE",
        "Name": "TEXT_EFFECTCITY_LAW_MONOTHEISM",
        "SourceLaw": "LAW_MONOTHEISM",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_POLYTHEISM",
        "Name": "TEXT_EFFECTCITY_LAW_POLYTHEISM",
        "SourceLaw": "LAW_POLYTHEISM",
        "abNoImprovementClassMax": {
          "Pair": {
            "zIndex": "IMPROVEMENTCLASS_SHRINE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_PROFESSIONAL_ARMY",
        "Name": "TEXT_EFFECTCITY_LAW_PROFESSIONAL_ARMY",
        "SourceLaw": "LAW_PROFESSIONAL_ARMY",
        "aiUnitTraitTrainModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "-25"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_PROJECT_ARCHIVE",
            "SubPair": {
              "zSubIndex": "YIELD_TRAINING",
              "iValue": "20"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_TOLERANCE",
        "Name": "TEXT_EFFECTCITY_LAW_TOLERANCE",
        "SourceLaw": "LAW_TOLERANCE",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "-10"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_IMPROVEMENT_TOWN",
            "SubPair": {
              "zSubIndex": "YIELD_CULTURE",
              "iValue": "40"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_ORTHODOXY",
        "Name": "TEXT_EFFECTCITY_LAW_ORTHODOXY",
        "SourceLaw": "LAW_ORTHODOXY",
        "iDiscipleTrainTimeModifier": "-25"
      },
      {
        "zType": "EFFECTCITY_LAW_ORTHODOXY_STATE",
        "Name": "TEXT_EFFECTCITY_LAW_ORTHODOXY",
        "SourceLaw": "LAW_ORTHODOXY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_ELITES",
        "Name": "TEXT_EFFECTCITY_LAW_ELITES",
        "SourceLaw": "LAW_ELITES",
        "iSpecialistUrbanTrainTimeModifier": "-25",
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_SPECIALIST_ELDER",
            "SubPair": {
              "zSubIndex": "YIELD_CULTURE",
              "iValue": "40"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_PHILOSOPHY",
        "Name": "TEXT_EFFECTCITY_LAW_PHILOSOPHY",
        "SourceLaw": "LAW_PHILOSOPHY",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_ICONOGRAPHY",
        "Name": "TEXT_EFFECTCITY_LAW_ICONOGRAPHY",
        "SourceLaw": "LAW_ICONOGRAPHY",
        "aaiImprovementClassYield": {
          "Pair": {
            "zIndex": "IMPROVEMENTCLASS_TEMPLE",
            "SubPair": {
              "zSubIndex": "YIELD_GROWTH",
              "iValue": "20"
            }
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_IMPROVEMENTCLASS_HOLY_SITE",
            "SubPair": {
              "zSubIndex": "YIELD_ORDERS",
              "iValue": "50"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_CALLIGRAPHY",
        "Name": "TEXT_EFFECTCITY_LAW_CALLIGRAPHY",
        "SourceLaw": "LAW_CALLIGRAPHY",
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_IMPROVEMENTCLASS_LIBRARY",
            "SubPair": {
              "zSubIndex": "YIELD_SCIENCE",
              "iValue": "40"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_ISOLATIONISM",
        "Name": "TEXT_EFFECTCITY_LAW_ISOLATIONISM",
        "SourceLaw": "LAW_ISOLATIONISM",
        "aeFreeUnitEffectCity": {
          "zValue": [
            "EFFECTCITY_RESOURCE_HORSE",
            "EFFECTCITY_RESOURCE_CAMEL",
            "EFFECTCITY_RESOURCE_ELEPHANT"
          ]
        },
        "aeTraitPromotion": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "zValue": "PROMOTION_GARRISON"
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_TRADE_LEAGUE_COAST",
        "Name": "TEXT_EFFECTCITY_LAW_TRADE_LEAGUE",
        "SourceLaw": "LAW_TRADE_LEAGUE",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_ASCETICISM",
        "Name": "TEXT_EFFECTCITY_LAW_ASCETICISM",
        "SourceLaw": "LAW_ASCETICISM",
        "aaiImprovementClassYield": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENTCLASS_PASTURE",
              "SubPair": {
                "zSubIndex": "YIELD_GROWTH",
                "iValue": "10"
              }
            },
            {
              "zIndex": "IMPROVEMENTCLASS_GROVE",
              "SubPair": {
                "zSubIndex": "YIELD_GROWTH",
                "iValue": "10"
              }
            },
            {
              "zIndex": "IMPROVEMENTCLASS_NETS",
              "SubPair": {
                "zSubIndex": "YIELD_GROWTH",
                "iValue": "10"
              }
            }
          ]
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_HOLY_CITY",
            "SubPair": {
              "zSubIndex": "YIELD_GROWTH",
              "iValue": "20"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_HOLY_WAR_STATE",
        "Name": "TEXT_EFFECTCITY_LAW_HOLY_WAR",
        "SourceLaw": "LAW_HOLY_WAR",
        "iRandomPromotions": "1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_LAW_DIVINE_RULE",
        "Name": "TEXT_EFFECTCITY_LAW_DIVINE_RULE",
        "SourceLaw": "LAW_DIVINE_RULE",
        "bStateReligionImprovements": "1"
      },
      {
        "zType": "EFFECTCITY_LAW_SECULARISM",
        "Name": "TEXT_EFFECTCITY_LAW_SECULARISM",
        "SourceLaw": "LAW_SECULARISM",
        "iRebelProb": "-100"
      },
      {
        "zType": "EFFECTCITY_LAW_COIN_DEBASEMENT",
        "Name": "TEXT_EFFECTCITY_LAW_COIN_DEBASEMENT",
        "SourceLaw": "LAW_COIN_DEBASEMENT",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_NATION_ASSYRIA",
        "Name": "TEXT_EFFECTCITY_NATION_ASSYRIA",
        "SourceNation": "NATION_ASSYRIA",
        "aeFreePromotion": {
          "zValue": "PROMOTION_FOCUS1"
        }
      },
      {
        "zType": "EFFECTCITY_NATION_BABYLONIA",
        "Name": "TEXT_EFFECTCITY_NATION_BABYLONIA",
        "SourceNation": "NATION_BABYLONIA",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "20"
          }
        },
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "20"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_PROJECT_TREASURY",
            "SubPair": {
              "zSubIndex": "YIELD_CULTURE",
              "iValue": "20"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_NATION_CARTHAGE",
        "Name": "TEXT_EFFECTCITY_NATION_CARTHAGE",
        "SourceNation": "NATION_CARTHAGE",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_NATION_EGYPT",
        "Name": "TEXT_EFFECTCITY_NATION_EGYPT",
        "SourceNation": "NATION_EGYPT",
        "aiImprovementRiverModifier": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENT_FARM",
              "iValue": "50"
            },
            {
              "zIndex": "IMPROVEMENT_QUARRY",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_NATION_GREECE",
        "Name": "TEXT_EFFECTCITY_NATION_GREECE",
        "SourceNation": "NATION_GREECE",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "40"
          }
        },
        "aiUnitCostModifier": {
          "Pair": {
            "zIndex": "UNIT_SETTLER",
            "iValue": "-25"
          }
        }
      },
      {
        "zType": "EFFECTCITY_NATION_ROME",
        "Name": "TEXT_EFFECTCITY_NATION_ROME",
        "SourceNation": "NATION_ROME",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_NATION_PERSIA",
        "Name": "TEXT_EFFECTCITY_NATION_PERSIA",
        "SourceNation": "NATION_PERSIA",
        "aiUnitTraitCostModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "-25"
          }
        },
        "aaiImprovementClassYield": {
          "Pair": {
            "zIndex": "IMPROVEMENTCLASS_PASTURE",
            "SubPair": {
              "zSubIndex": "YIELD_ORDERS",
              "iValue": "5"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_OPINIONFAMILY_FURIOUS",
        "Name": "TEXT_EFFECTCITY_OPINIONFAMILY_FURIOUS",
        "SourceOpinionFamily": "OPINIONFAMILY_FURIOUS",
        "iRebelProb": "10",
        "bNoHurry": "1",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "-50"
            },
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "-50"
            },
            {
              "zIndex": "YIELD_MAINTENANCE",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_OPINIONFAMILY_ANGRY",
        "Name": "TEXT_EFFECTCITY_OPINIONFAMILY_ANGRY",
        "SourceOpinionFamily": "OPINIONFAMILY_ANGRY",
        "iRebelProb": "5",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "-20"
            },
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "-20"
            },
            {
              "zIndex": "YIELD_MAINTENANCE",
              "iValue": "20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_OPINIONFAMILY_UPSET",
        "Name": "TEXT_EFFECTCITY_OPINIONFAMILY_UPSET",
        "SourceOpinionFamily": "OPINIONFAMILY_UPSET",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "-10"
            },
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "-10"
            },
            {
              "zIndex": "YIELD_MAINTENANCE",
              "iValue": "10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_OPINIONFAMILY_PLEASED",
        "Name": "TEXT_EFFECTCITY_OPINIONFAMILY_PLEASED",
        "SourceOpinionFamily": "OPINIONFAMILY_PLEASED",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "10"
          }
        },
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_MAINTENANCE",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_OPINIONFAMILY_FRIENDLY",
        "Name": "TEXT_EFFECTCITY_OPINIONFAMILY_FRIENDLY",
        "SourceOpinionFamily": "OPINIONFAMILY_FRIENDLY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "20"
          }
        },
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_MAINTENANCE",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_OPINIONRELIGION_FURIOUS",
        "Name": "TEXT_EFFECTCITY_OPINIONRELIGION_FURIOUS",
        "SourceOpinionReligion": "OPINIONRELIGION_FURIOUS",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "EFFECTCITY_OPINIONRELIGION_ANGRY",
        "Name": "TEXT_EFFECTCITY_OPINIONRELIGION_ANGRY",
        "SourceOpinionReligion": "OPINIONRELIGION_ANGRY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "EFFECTCITY_OPINIONRELIGION_UPSET",
        "Name": "TEXT_EFFECTCITY_OPINIONRELIGION_UPSET",
        "SourceOpinionReligion": "OPINIONRELIGION_UPSET",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_OPINIONRELIGION_PLEASED",
        "Name": "TEXT_EFFECTCITY_OPINIONRELIGION_PLEASED",
        "SourceOpinionReligion": "OPINIONRELIGION_PLEASED",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_OPINIONRELIGION_FRIENDLY",
        "Name": "TEXT_EFFECTCITY_OPINIONRELIGION_FRIENDLY",
        "SourceOpinionReligion": "OPINIONRELIGION_FRIENDLY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_MONARCH",
        "Name": "TEXT_EFFECTCITY_PROJECT_MONARCH",
        "SourceProject": "PROJECT_MONARCH",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "40"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "40"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_GOVERNOR",
        "Name": "TEXT_EFFECTCITY_PROJECT_GOVERNOR",
        "SourceProject": "PROJECT_GOVERNOR",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "80"
            },
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "80"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_WALLS",
        "Name": "TEXT_EFFECTCITY_PROJECT_WALLS",
        "SourceProject": "PROJECT_WALLS",
        "iCityHP": "10",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_MOAT",
        "Name": "TEXT_EFFECTCITY_PROJECT_MOAT",
        "SourceProject": "PROJECT_MOAT",
        "iCityHP": "10",
        "iStrengthModifier": "25",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_TOWERS",
        "Name": "TEXT_EFFECTCITY_PROJECT_TOWERS",
        "SourceProject": "PROJECT_TOWERS",
        "iCityHP": "10",
        "iRangeChange": "1",
        "iStrengthModifier": "25",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_TREASURY",
        "Name": "TEXT_EFFECTCITY_PROJECT_TREASURY"
      },
      {
        "zType": "EFFECTCITY_PROJECT_TREASURY_1",
        "Name": "TEXT_EFFECTCITY_PROJECT_TREASURY_1",
        "SourceProject": "PROJECT_TREASURY_1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_TREASURY_2",
        "Name": "TEXT_EFFECTCITY_PROJECT_TREASURY_2",
        "SourceProject": "PROJECT_TREASURY_2",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "200"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "-5"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_TREASURY_3",
        "Name": "TEXT_EFFECTCITY_PROJECT_TREASURY_3",
        "SourceProject": "PROJECT_TREASURY_3",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "300"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "-10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_TREASURY_4",
        "Name": "TEXT_EFFECTCITY_PROJECT_TREASURY_4",
        "SourceProject": "PROJECT_TREASURY_4",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "400"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "-15"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_FORUM",
        "Name": "TEXT_EFFECTCITY_PROJECT_FORUM"
      },
      {
        "zType": "EFFECTCITY_PROJECT_FORUM_1",
        "Name": "TEXT_EFFECTCITY_PROJECT_FORUM_1",
        "SourceProject": "PROJECT_FORUM_1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_FORUM_2",
        "Name": "TEXT_EFFECTCITY_PROJECT_FORUM_2",
        "SourceProject": "PROJECT_FORUM_2",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "40"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "-5"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_FORUM_3",
        "Name": "TEXT_EFFECTCITY_PROJECT_FORUM_3",
        "SourceProject": "PROJECT_FORUM_3",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "60"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "-10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_FORUM_4",
        "Name": "TEXT_EFFECTCITY_PROJECT_FORUM_4",
        "SourceProject": "PROJECT_FORUM_4",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "80"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "-15"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_ARCHIVE",
        "Name": "TEXT_EFFECTCITY_PROJECT_ARCHIVE"
      },
      {
        "zType": "EFFECTCITY_PROJECT_ARCHIVE_1",
        "Name": "TEXT_EFFECTCITY_PROJECT_ARCHIVE_1",
        "SourceProject": "PROJECT_ARCHIVE_1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_ARCHIVE_2",
        "Name": "TEXT_EFFECTCITY_PROJECT_ARCHIVE_2",
        "SourceProject": "PROJECT_ARCHIVE_2",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "40"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "-5"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_ARCHIVE_3",
        "Name": "TEXT_EFFECTCITY_PROJECT_ARCHIVE_3",
        "SourceProject": "PROJECT_ARCHIVE_3",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "60"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "-10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_ARCHIVE_4",
        "Name": "TEXT_EFFECTCITY_PROJECT_ARCHIVE_4",
        "SourceProject": "PROJECT_ARCHIVE_4",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            },
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "80"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "-15"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_FESTIVAL",
        "Name": "TEXT_EFFECTCITY_PROJECT_FESTIVAL",
        "SourceProject": "PROJECT_FESTIVAL",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_INQUIRY",
        "Name": "TEXT_EFFECTCITY_PROJECT_INQUIRY",
        "SourceProject": "PROJECT_INQUIRY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_HUNT",
        "Name": "TEXT_EFFECTCITY_PROJECT_HUNT",
        "SourceProject": "PROJECT_HUNT",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_OLYMPICS",
        "Name": "TEXT_EFFECTCITY_PROJECT_OLYMPICS",
        "SourceProject": "PROJECT_OLYMPICS",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_CONVOY",
        "Name": "TEXT_EFFECTCITY_PROJECT_CONVOY",
        "SourceProject": "PROJECT_CONVOY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_SWORD_CULT",
        "Name": "TEXT_EFFECTCITY_PROJECT_SWORD_CULT",
        "SourceProject": "PROJECT_SWORD_CULT",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_SWORD_CULT_TITHE",
        "Name": "TEXT_EFFECTCITY_PROJECT_SWORD_CULT_TITHE",
        "SourceProject": "PROJECT_SWORD_CULT_TITHE",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_HOSTILE_GARRISON",
        "Name": "TEXT_EFFECTCITY_PROJECT_HOSTILE_GARRISON",
        "SourceProject": "PROJECT_HOSTILE_GARRISON",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_PUBLIC_MURAL",
        "Name": "TEXT_EFFECTCITY_PROJECT_PUBLIC_MURAL",
        "SourceProject": "PROJECT_PUBLIC_MURAL",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_TRIUMPH",
        "Name": "TEXT_EFFECTCITY_PROJECT_TRIUMPH",
        "SourceProject": "PROJECT_TRIUMPH",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_PURPLE_DYE",
        "Name": "TEXT_EFFECTCITY_PROJECT_PURPLE_DYE",
        "SourceProject": "PROJECT_PURPLE_DYE",
        "iFamilyOpinion": "20"
      },
      {
        "zType": "EFFECTCITY_PROJECT_PROPAGANDA",
        "Name": "TEXT_EFFECTCITY_PROJECT_PROPAGANDA",
        "SourceProject": "PROJECT_PROPAGANDA",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_CHILD_LABOR",
        "Name": "TEXT_EFFECTCITY_PROJECT_CHILD_LABOR",
        "SourceProject": "PROJECT_CHILD_LABOR",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_CORRUPTION_REFORM",
        "Name": "TEXT_EFFECTCITY_PROJECT_CORRUPTION_REFORM",
        "SourceProject": "PROJECT_CORRUPTION_REFORM",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "10"
          }
        },
        "aiYieldRateOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_ROYAL_INSCRIPTIONS",
        "Name": "TEXT_EFFECTCITY_PROJECT_ROYAL_INSCRIPTIONS",
        "SourceProject": "PROJECT_ROYAL_INSCRIPTIONS",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_IMPERIAL_NECROPOLIS",
        "Name": "TEXT_EFFECTCITY_PROJECT_IMPERIAL_NECROPOLIS",
        "SourceImprovement": "IMPROVEMENT_NECROPOLIS",
        "SourceProject": "PROJECT_IMPERIAL_NECROPOLIS",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_FORCED_DEPORTATIONS",
        "Name": "TEXT_EFFECTCITY_PROJECT_FORCED_DEPORTATIONS",
        "SourceProject": "PROJECT_FORCED_DEPORTATIONS",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_GLADIATORS",
        "Name": "TEXT_EFFECTCITY_PROJECT_GLADIATORS",
        "SourceProject": "PROJECT_GLADIATORS",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            },
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "-20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_PLAYS",
        "Name": "TEXT_EFFECTCITY_PROJECT_PLAYS",
        "SourceProject": "PROJECT_PLAYS",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_MERCHANT_TOWN",
        "Name": "TEXT_EFFECTCITY_PROJECT_MERCHANT_TOWN",
        "SourceProject": "PROJECT_MERCHANT_TOWN",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
          }
        },
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_OUTBREAK",
        "Name": "TEXT_EFFECTCITY_PROJECT_OUTBREAK",
        "SourceProject": "PROJECT_OUTBREAK",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_MIDWIFERY",
        "Name": "TEXT_EFFECTCITY_PROJECT_MIDWIFERY",
        "SourceProject": "PROJECT_MIDWIFERY",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_LUXURIOUS_DELIGHTS",
        "Name": "TEXT_EFFECTCITY_PROJECT_LUXURIOUS_DELIGHTS",
        "SourceProject": "PROJECT_LUXURIOUS_DELIGHTS",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "40"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_NEIGHBORS_FEAST_PERSIA",
        "Name": "TEXT_EFFECTCITY_PROJECT_NEIGHBORS_FEAST_PERSIA",
        "SourceProject": "PROJECT_NEIGHBORS_FEAST_PERSIA",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "-100"
            },
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_MISTHOPHORIA",
        "Name": "TEXT_EFFECTCITY_PROJECT_MISTHOPHORIA",
        "SourceProject": "PROJECT_MISTHOPHORIA",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "-10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_GRAIN_DOLE",
        "Name": "TEXT_EFFECTCITY_PROJECT_GRAIN_DOLE",
        "SourceProject": "PROJECT_GRAIN_DOLE",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "-20"
          }
        },
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_FOREIGN_FIGHTERS",
        "Name": "TEXT_EFFECTCITY_PROJECT_FOREIGN_FIGHTERS",
        "SourceProject": "PROJECT_FOREIGN_FIGHTERS",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "10"
          }
        },
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_WAR_COUNCIL",
        "Name": "TEXT_EFFECTCITY_PROJECT_WAR_COUNCIL",
        "SourceProject": "PROJECT_WAR_COUNCIL",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "-20"
            },
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "-10"
            }
          ]
        },
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_SEWER_SYSTEM",
        "Name": "TEXT_EFFECTCITY_PROJECT_SEWER_SYSTEM",
        "SourceProject": "PROJECT_SEWER_SYSTEM",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-15"
          }
        },
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            },
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_CASE_HARDENING",
        "Name": "TEXT_EFFECTCITY_PROJECT_CASE_HARDENING",
        "SourceProject": "PROJECT_CASE_HARDENING",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "5"
          }
        },
        "aeFreePromotion": {
          "zValue": "PROMOTION_HERBALIST"
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_TURPAN_WELLS",
        "Name": "TEXT_EFFECTCITY_PROJECT_TURPAN_WELLS",
        "SourceProject": "PROJECT_TURPAN_WELLS",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "20"
          }
        },
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "-2"
            },
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "15"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_NATIONAL_HOLIDAY",
        "Name": "TEXT_EFFECTCITY_PROJECT_NATIONAL_HOLIDAY",
        "SourceProject": "PROJECT_NATIONAL_HOLIDAY",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            },
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "-50"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_SCIENTIFIC_METHOD",
        "Name": "TEXT_EFFECTCITY_PROJECT_SCIENTIFIC_METHOD",
        "SourceProject": "PROJECT_SCIENTIFIC_METHOD",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "5"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_HORREUM",
        "Name": "TEXT_EFFECTCITY_PROJECT_HORREUM",
        "SourceProject": "PROJECT_HORREUM",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "-50"
            },
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "-20"
            }
          ]
        },
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_AVESTA_TREASURY",
        "Name": "TEXT_EFFECTCITY_PROJECT_AVESTA_TREASURY",
        "SourceProject": "PROJECT_AVESTA_TREASURY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "20"
          }
        },
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "5"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_DISEASED_SETTLERS",
        "Name": "TEXT_EFFECTCITY_PROJECT_DISEASED_SETTLERS",
        "SourceProject": "PROJECT_DISEASED_SETTLERS",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "10"
          }
        },
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "-25"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_TERRACE_LOVE_SHRINE",
        "Name": "TEXT_EFFECTCITY_PROJECT_TERRACE_LOVE_SHRINE",
        "SourceProject": "PROJECT_TERRACE_LOVE_SHRINE",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            },
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_TERRACE_WISDOM_SHRINE",
        "Name": "TEXT_EFFECTCITY_PROJECT_TERRACE_WISDOM_SHRINE",
        "SourceProject": "PROJECT_TERRACE_WISDOM_SHRINE",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_PROJECT_TERRACE_WAR_SHRINE",
        "Name": "TEXT_EFFECTCITY_PROJECT_TERRACE_WAR_SHRINE",
        "SourceProject": "PROJECT_TERRACE_WAR_SHRINE",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_RELIGION_JUDAISM",
        "Name": "TEXT_EFFECTCITY_RELIGION_JUDAISM",
        "SourceReligion": "RELIGION_JUDAISM",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_RELIGION_JUDAISM_STATE",
        "Name": "TEXT_EFFECTCITY_RELIGION_JUDAISM_STATE",
        "Source": "TEXT_EFFECTCITY_STATE_RELIGION_SOURCE",
        "SourceReligion": "RELIGION_JUDAISM",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_RELIGION_ZOROASTRIANISM",
        "Name": "TEXT_EFFECTCITY_RELIGION_ZOROASTRIANISM",
        "SourceReligion": "RELIGION_ZOROASTRIANISM",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_RELIGION_ZOROASTRIANISM_STATE",
        "Name": "TEXT_EFFECTCITY_RELIGION_ZOROASTRIANISM_STATE",
        "Source": "TEXT_EFFECTCITY_STATE_RELIGION_SOURCE",
        "SourceReligion": "RELIGION_ZOROASTRIANISM",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_RELIGION_CHRISTIANITY",
        "Name": "TEXT_EFFECTCITY_RELIGION_CHRISTIANITY",
        "SourceReligion": "RELIGION_CHRISTIANITY",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_RELIGION_CHRISTIANITY_STATE",
        "Name": "TEXT_EFFECTCITY_RELIGION_CHRISTIANITY_STATE",
        "Source": "TEXT_EFFECTCITY_STATE_RELIGION_SOURCE",
        "SourceReligion": "RELIGION_CHRISTIANITY",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_RELIGION_MANICHAEISM",
        "Name": "TEXT_EFFECTCITY_RELIGION_MANICHAEISM",
        "SourceReligion": "RELIGION_MANICHAEISM",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_RELIGION_MANICHAEISM_STATE",
        "Name": "TEXT_EFFECTCITY_RELIGION_MANICHAEISM_STATE",
        "Source": "TEXT_EFFECTCITY_STATE_RELIGION_SOURCE",
        "SourceReligion": "RELIGION_MANICHAEISM",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_RESOURCE_ORE",
        "Name": "TEXT_EFFECTCITY_RESOURCE_ORE",
        "SourceResource": "RESOURCE_ORE"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_SALT",
        "Name": "TEXT_EFFECTCITY_RESOURCE_SALT",
        "SourceResource": "RESOURCE_SALT",
        "bLuxury": "1"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_GEM",
        "Name": "TEXT_EFFECTCITY_RESOURCE_GEM",
        "SourceResource": "RESOURCE_GEM",
        "bLuxury": "1"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_HORSE",
        "Name": "TEXT_EFFECTCITY_RESOURCE_HORSE",
        "SourceResource": "RESOURCE_HORSE"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_CAMEL",
        "Name": "TEXT_EFFECTCITY_RESOURCE_CAMEL",
        "SourceResource": "RESOURCE_CAMEL"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_ELEPHANT",
        "Name": "TEXT_EFFECTCITY_RESOURCE_ELEPHANT",
        "SourceResource": "RESOURCE_ELEPHANT"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_FUR",
        "Name": "TEXT_EFFECTCITY_RESOURCE_FUR",
        "SourceResource": "RESOURCE_FUR",
        "bLuxury": "1"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_INCENSE",
        "Name": "TEXT_EFFECTCITY_RESOURCE_INCENSE",
        "SourceResource": "RESOURCE_INCENSE",
        "bLuxury": "1"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_WINE",
        "Name": "TEXT_EFFECTCITY_RESOURCE_WINE",
        "SourceResource": "RESOURCE_WINE",
        "bLuxury": "1"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_OLIVE",
        "Name": "TEXT_EFFECTCITY_RESOURCE_OLIVE",
        "SourceResource": "RESOURCE_OLIVE",
        "bLuxury": "1"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_DYE",
        "Name": "TEXT_EFFECTCITY_RESOURCE_DYE",
        "SourceResource": "RESOURCE_DYE",
        "bLuxury": "1"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_PEARL",
        "Name": "TEXT_EFFECTCITY_RESOURCE_PEARL",
        "SourceResource": "RESOURCE_PEARL",
        "bLuxury": "1"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_SCROLLS",
        "Name": "TEXT_EFFECTCITY_RESOURCE_SCROLLS",
        "SourceImprovement": "IMPROVEMENT_MUSAEUM"
      },
      {
        "zType": "EFFECTCITY_RESOURCE_FOOD_STAPLE",
        "Name": "TEXT_EFFECTCITY_RESOURCE_FOOD_STAPLE",
        "aeSourceResources": {
          "zValue": [
            "RESOURCE_CATTLE",
            "RESOURCE_SHEEP",
            "RESOURCE_PIG",
            "RESOURCE_GOAT",
            "RESOURCE_WHEAT",
            "RESOURCE_BARLEY",
            "RESOURCE_SORGHUM"
          ]
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_FARMER",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_FARMER",
        "SourceSpecialist": "SPECIALIST_FARMER",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_WOODCUTTER",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_WOODCUTTER",
        "SourceSpecialist": "SPECIALIST_WOODCUTTER",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_STONECUTTER",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_STONECUTTER",
        "SourceSpecialist": "SPECIALIST_STONECUTTER",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_MINER",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_MINER",
        "SourceSpecialist": "SPECIALIST_MINER",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_DOCTOR_1",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_DOCTOR_1",
        "SourceSpecialist": "SPECIALIST_DOCTOR_1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_DOCTOR_2",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_DOCTOR_2",
        "SourceSpecialist": "SPECIALIST_DOCTOR_2",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "30"
          }
        },
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_DOCTOR_3",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_DOCTOR_3",
        "SourceSpecialist": "SPECIALIST_DOCTOR_3",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "40"
          }
        },
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_ACOLYTE_1",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_ACOLYTE_1",
        "SourceSpecialist": "SPECIALIST_ACOLYTE_1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_ACOLYTE_2",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_ACOLYTE_2",
        "SourceSpecialist": "SPECIALIST_ACOLYTE_2",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "30"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "5"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_ACOLYTE_3",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_ACOLYTE_3",
        "SourceSpecialist": "SPECIALIST_ACOLYTE_3",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "40"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_MONK_1",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_MONK_1",
        "SourceSpecialist": "SPECIALIST_MONK_1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_MONK_2",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_MONK_2",
        "SourceSpecialist": "SPECIALIST_MONK_2",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "60"
          }
        },
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_MONK_3",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_MONK_3",
        "SourceSpecialist": "SPECIALIST_MONK_3",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "80"
          }
        },
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_PRIEST_1",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_PRIEST_1",
        "SourceSpecialist": "SPECIALIST_PRIEST_1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_PRIEST_2",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_PRIEST_2",
        "SourceSpecialist": "SPECIALIST_PRIEST_2",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "30"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_CITIZEN",
            "SubPair": {
              "zSubIndex": "YIELD_TRAINING",
              "iValue": "5"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_PRIEST_3",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_PRIEST_3",
        "SourceSpecialist": "SPECIALIST_PRIEST_3",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "40"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_CITIZEN",
            "SubPair": {
              "zSubIndex": "YIELD_TRAINING",
              "iValue": "10"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_BISHOP_1",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_BISHOP_1",
        "SourceSpecialist": "SPECIALIST_PRIEST_1",
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_BISHOP_2",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_BISHOP_2",
        "SourceSpecialist": "SPECIALIST_PRIEST_2",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "5"
          }
        },
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "150"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_BISHOP_3",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_BISHOP_3",
        "SourceSpecialist": "SPECIALIST_PRIEST_3",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "10"
          }
        },
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_POET_1",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_POET_1",
        "SourceSpecialist": "SPECIALIST_POET_1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_POET_2",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_POET_2",
        "SourceSpecialist": "SPECIALIST_POET_2",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "60"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_CITIZEN",
            "SubPair": {
              "zSubIndex": "YIELD_CULTURE",
              "iValue": "10"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_POET_3",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_POET_3",
        "SourceSpecialist": "SPECIALIST_POET_3",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "80"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_CITIZEN",
            "SubPair": {
              "zSubIndex": "YIELD_CULTURE",
              "iValue": "20"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_SHOPKEEPER_1",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_SHOPKEEPER_1",
        "SourceSpecialist": "SPECIALIST_SHOPKEEPER_1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_SHOPKEEPER_2",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_SHOPKEEPER_2",
        "SourceSpecialist": "SPECIALIST_SHOPKEEPER_2",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
          }
        },
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_SHOPKEEPER_3",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_SHOPKEEPER_3",
        "SourceSpecialist": "SPECIALIST_SHOPKEEPER_3",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "300"
          }
        },
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_PHILOSOPHER_1",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_PHILOSOPHER_1",
        "SourceSpecialist": "SPECIALIST_PHILOSOPHER_1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_PHILOSOPHER_2",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_PHILOSOPHER_2",
        "SourceSpecialist": "SPECIALIST_PHILOSOPHER_2",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "60"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_CITIZEN",
            "SubPair": {
              "zSubIndex": "YIELD_CIVICS",
              "iValue": "5"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_PHILOSOPHER_3",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_PHILOSOPHER_3",
        "SourceSpecialist": "SPECIALIST_PHILOSOPHER_3",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "80"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_CITIZEN",
            "SubPair": {
              "zSubIndex": "YIELD_CIVICS",
              "iValue": "10"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_SCRIBE_1",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_SCRIBE_1",
        "SourceSpecialist": "SPECIALIST_SCRIBE_1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_SCRIBE_2",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_SCRIBE_2",
        "SourceSpecialist": "SPECIALIST_SCRIBE_2",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "40"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_CITIZEN",
            "SubPair": {
              "zSubIndex": "YIELD_MONEY",
              "iValue": "10"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_SCRIBE_3",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_SCRIBE_3",
        "SourceSpecialist": "SPECIALIST_SCRIBE_3",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "60"
          }
        },
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_CITIZEN",
            "SubPair": {
              "zSubIndex": "YIELD_MONEY",
              "iValue": "20"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_OFFICER_1",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_OFFICER_1",
        "SourceSpecialist": "SPECIALIST_OFFICER_1",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_OFFICER_2",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_OFFICER_2",
        "SourceSpecialist": "SPECIALIST_OFFICER_2",
        "iUnitXP": "25",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_OFFICER_3",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_OFFICER_3",
        "SourceSpecialist": "SPECIALIST_OFFICER_3",
        "iUnitXP": "50",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_RURAL",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_RURAL",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_APPRENTICE",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_APPRENTICE",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_MASTER",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_MASTER",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_SPECIALIST_ELDER",
        "Name": "TEXT_EFFECTCITY_SPECIALIST_ELDER",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_ORATOR_ARCHETYPE_ALL",
        "Name": "TEXT_EFFECTCITY_TRAIT_ORATOR_ARCHETYPE_ALL",
        "SourceTrait": "TRAIT_ORATOR_ARCHETYPE",
        "aaiEffectCityYieldRate": {
          "Pair": {
            "zIndex": "EFFECTCITY_OPINIONFAMILY_FRIENDLY",
            "SubPair": {
              "zSubIndex": "YIELD_ORDERS",
              "iValue": "20"
            }
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_BUILDER_ARCHETYPE_ALL",
        "Name": "TEXT_EFFECTCITY_TRAIT_BUILDER_ARCHETYPE_ALL",
        "SourceTrait": "TRAIT_BUILDER_ARCHETYPE",
        "aiUnitTrainModifier": {
          "Pair": {
            "zIndex": "UNIT_WORKER",
            "iValue": "-50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_COMMANDER_ARCHETYPE_ALL",
        "Name": "TEXT_EFFECTCITY_TRAIT_COMMANDER_ARCHETYPE_ALL",
        "SourceTrait": "TRAIT_COMMANDER_ARCHETYPE",
        "bHurryPopulation": "1"
      },
      {
        "zType": "EFFECTCITY_TRAIT_ZEALOT_ARCHETYPE_STATE",
        "Name": "TEXT_EFFECTCITY_TRAIT_ZEALOT_ARCHETYPE_STATE",
        "SourceTrait": "TRAIT_ZEALOT_ARCHETYPE",
        "bHurryTraining": "1"
      },
      {
        "zType": "EFFECTCITY_TRAIT_AFFABLE",
        "Name": "TEXT_EFFECTCITY_TRAIT_AFFABLE",
        "SourceTrait": "TRAIT_AFFABLE",
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_ELOQUENT",
        "Name": "TEXT_EFFECTCITY_TRAIT_ELOQUENT",
        "SourceTrait": "TRAIT_ELOQUENT",
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_WARLIKE",
        "Name": "TEXT_EFFECTCITY_TRAIT_WARLIKE",
        "SourceTrait": "TRAIT_WARLIKE",
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_INSPIRED",
        "Name": "TEXT_EFFECTCITY_TRAIT_INSPIRED",
        "SourceTrait": "TRAIT_INSPIRED",
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_INTELLIGENT",
        "Name": "TEXT_EFFECTCITY_TRAIT_INTELLIGENT",
        "SourceTrait": "TRAIT_INTELLIGENT",
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_PROSPEROUS",
        "Name": "TEXT_EFFECTCITY_TRAIT_PROSPEROUS",
        "SourceTrait": "TRAIT_PROSPEROUS",
        "aiYieldRateCulture": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_FRUGAL",
        "Name": "TEXT_EFFECTCITY_TRAIT_FRUGAL",
        "SourceTrait": "TRAIT_FRUGAL",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_MAINTENANCE",
            "iValue": "-50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_RIGHTEOUS",
        "Name": "TEXT_EFFECTCITY_TRAIT_RIGHTEOUS",
        "SourceTrait": "TRAIT_RIGHTEOUS",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_CRUEL",
        "Name": "TEXT_EFFECTCITY_TRAIT_CRUEL",
        "SourceTrait": "TRAIT_CRUEL",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_CARELESS",
        "Name": "TEXT_EFFECTCITY_TRAIT_CARELESS",
        "SourceTrait": "TRAIT_CARELESS",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_SLOTHFUL",
        "Name": "TEXT_EFFECTCITY_TRAIT_SLOTHFUL",
        "SourceTrait": "TRAIT_SLOTHFUL",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_UNCOUTH",
        "Name": "TEXT_EFFECTCITY_TRAIT_UNCOUTH",
        "SourceTrait": "TRAIT_UNCOUTH",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_FOOLISH",
        "Name": "TEXT_EFFECTCITY_TRAIT_FOOLISH",
        "SourceTrait": "TRAIT_FOOLISH",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_EXTRAVAGANT",
        "Name": "TEXT_EFFECTCITY_TRAIT_EXTRAVAGANT",
        "SourceTrait": "TRAIT_EXTRAVAGANT",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_CORRUPT",
        "Name": "TEXT_EFFECTCITY_TRAIT_CORRUPT",
        "SourceTrait": "TRAIT_CORRUPT",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_MAINTENANCE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_DEBAUCHED",
        "Name": "TEXT_EFFECTCITY_TRAIT_DEBAUCHED",
        "SourceTrait": "TRAIT_DEBAUCHED",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_ROBUST",
        "Name": "TEXT_EFFECTCITY_TRAIT_ROBUST",
        "SourceTrait": "TRAIT_ROBUST",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_VIGILANT",
        "Name": "TEXT_EFFECTCITY_TRAIT_VIGILANT",
        "SourceTrait": "TRAIT_VIGILANT",
        "iStrengthModifier": "50"
      },
      {
        "zType": "EFFECTCITY_TRAIT_STRICT",
        "Name": "TEXT_EFFECTCITY_TRAIT_STRICT",
        "SourceTrait": "TRAIT_STRICT",
        "iUnitXP": "50"
      },
      {
        "zType": "EFFECTCITY_TRAIT_DRILLMASTER",
        "Name": "TEXT_EFFECTCITY_TRAIT_DRILLMASTER",
        "SourceTrait": "TRAIT_DRILLMASTER",
        "aiUnitTraitXP": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_KEEN",
        "Name": "TEXT_EFFECTCITY_TRAIT_KEEN",
        "SourceTrait": "TRAIT_KEEN",
        "aiUnitTraitXP": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_EQUESTRIAN",
        "Name": "TEXT_EFFECTCITY_TRAIT_EQUESTRIAN",
        "SourceTrait": "TRAIT_EQUESTRIAN",
        "aiUnitTraitXP": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_ANGLER",
        "Name": "TEXT_EFFECTCITY_TRAIT_ANGLER",
        "SourceTrait": "TRAIT_ANGLER",
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_NETS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_PLANTER",
        "Name": "TEXT_EFFECTCITY_TRAIT_PLANTER",
        "SourceTrait": "TRAIT_PLANTER",
        "aiImprovementModifier": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENT_FARM",
              "iValue": "50"
            },
            {
              "zIndex": "IMPROVEMENT_GROVE",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_FORESTER",
        "Name": "TEXT_EFFECTCITY_TRAIT_FORESTER",
        "SourceTrait": "TRAIT_FORESTER",
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_LUMBERMILL",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_DELVER",
        "Name": "TEXT_EFFECTCITY_TRAIT_DELVER",
        "SourceTrait": "TRAIT_DELVER",
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_QUARRY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_SMELTER",
        "Name": "TEXT_EFFECTCITY_TRAIT_SMELTER",
        "SourceTrait": "TRAIT_SMELTER",
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_MINE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_HERDER",
        "Name": "TEXT_EFFECTCITY_TRAIT_HERDER",
        "SourceTrait": "TRAIT_HERDER",
        "aiImprovementModifier": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENT_PASTURE",
              "iValue": "100"
            },
            {
              "zIndex": "IMPROVEMENT_CAMP",
              "iValue": "100"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_MISERABLE_ALL",
        "Name": "TEXT_EFFECTCITY_TRAIT_MISERABLE",
        "SourceTrait": "TRAIT_MISERABLE",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_MOURNING_ALL",
        "Name": "TEXT_EFFECTCITY_TRAIT_MOURNING",
        "SourceTrait": "TRAIT_MOURNING",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_SOLDIER_ALL",
        "Name": "TEXT_EFFECTCITY_TRAIT_SOLDIER",
        "SourceTrait": "TRAIT_SOLDIER",
        "aiYieldModifier": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "EFFECTCITY_TRAIT_ENEMY_OF_THE_STATE",
        "Name": "TEXT_EFFECTCITY_TRAIT_ENEMY_OF_THE_STATE",
        "SourceTrait": "TRAIT_ENEMY_OF_THE_STATE",
        "iDiscipleTrainTimeModifier": "-10",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "10"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-20"
            }
          ]
        }
      },
      {
        "zType": "EFFECTCITY_UNIT_CARAVAN",
        "Name": "TEXT_EFFECTCITY_UNIT_CARAVAN",
        "SourceUnit": "UNIT_CARAVAN"
      }
    ]
  }
}
    export default data
    