
    const data: XmlTech.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "zIconName": {
          
        },
        "BonusDiscover": {
          
        },
        "EffectPlayer": {
          
        },
        "iCost": {
          
        },
        "iColumn": {
          
        },
        "iRow": {
          
        },
        "bHide": {
          
        },
        "bTrash": {
          
        },
        "bNoBonus": {
          
        },
        "bSkipLog": {
          
        },
        "bReturn": {
          
        },
        "bValidAll": {
          
        },
        "abNationValid": {
          
        },
        "abTechPrereq": {
          
        }
      },
      {
        "zType": "TECH_IRONWORKING",
        "zName": "Ironworking",
        "zIconName": "TECH_IRONWORKING",
        "iCost": "80",
        "iColumn": "0",
        "iRow": "2",
        "bValidAll": "1"
      },
      {
        "zType": "TECH_STONECUTTING",
        "zName": "Stonecutting",
        "zIconName": "TECH_STONECUTTING",
        "iCost": "80",
        "iColumn": "0",
        "iRow": "5",
        "bValidAll": "1"
      },
      {
        "zType": "TECH_STONECUTTING_BONUS_STONE",
        "zName": "Stone Boost",
        "zIconName": "BOOST_STONE",
        "BonusDiscover": "BONUS_TECH_STONECUTTING_BONUS_STONE",
        "iCost": "60",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STONECUTTING",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_TRAPPING",
        "zName": "Trapping",
        "zIconName": "TECH_TRAPPING",
        "iCost": "80",
        "iColumn": "0",
        "iRow": "7",
        "bValidAll": "1"
      },
      {
        "zType": "TECH_DIVINATION",
        "zName": "Divination",
        "zIconName": "TECH_DIVINATION",
        "iCost": "80",
        "iColumn": "0",
        "iRow": "8",
        "bValidAll": "1"
      },
      {
        "zType": "TECH_ADMINISTRATION",
        "zName": "Administration",
        "zIconName": "TECH_ADMINISTRATION",
        "iCost": "80",
        "iColumn": "0",
        "iRow": "10",
        "bValidAll": "1"
      },
      {
        "zType": "TECH_LABOR_FORCE",
        "zName": "Labor Force",
        "zIconName": "TECH_LABOR_FORCE",
        "EffectPlayer": "EFFECTPLAYER_TECH_LABOR_FORCE",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_IRONWORKING",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_HUSBANDRY",
        "zName": "Husbandry",
        "zIconName": "TECH_HUSBANDRY",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "3",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_IRONWORKING",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_HUSBANDRY_BONUS_FOOD",
        "zName": "Food Boost",
        "zIconName": "BONUS_FOOD",
        "BonusDiscover": "BONUS_TECH_HUSBANDRY_BONUS_FOOD",
        "iCost": "80",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_HUSBANDRY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_DRAMA",
        "zName": "Drama",
        "zIconName": "TECH_DRAMA",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "4",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STONECUTTING",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_POLIS",
        "zName": "Polis",
        "zIconName": "TECH_POLIS",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "6",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_STONECUTTING",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_TRAPPING",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_POLIS_BONUS_SETTLER",
        "zName": "Free Settler",
        "zIconName": "BONUS_SETTLER",
        "BonusDiscover": "BONUS_TECH_POLIS_BONUS_SETTLER",
        "iCost": "80",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_POLIS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MILITARY_DRILL",
        "zName": "Military Drill",
        "zIconName": "TECH_MILITARY_DRILL",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "7",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_TRAPPING",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_ARISTOCRACY",
        "zName": "Aristocracy",
        "zIconName": "TECH_ARISTOCRACY",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "8",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_DIVINATION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_SOVEREIGNTY",
        "zName": "Sovereignty",
        "zIconName": "TECH_SOVEREIGNTY",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "9",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_DIVINATION",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_ADMINISTRATION",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_RHETORIC",
        "zName": "Rhetoric",
        "zIconName": "TECH_RHETORIC",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "10",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_ADMINISTRATION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_NAVIGATION",
        "zName": "Navigation",
        "zIconName": "TECH_NAVIGATION",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "0",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_LABOR_FORCE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_NAVIGATION_BONUS_BIREME",
        "zName": "Free Bireme",
        "zIconName": "UNIT_BIREME",
        "BonusDiscover": "BONUS_TECH_NAVIGATION_BONUS_BIREME",
        "iCost": "120",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_NAVIGATION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_PHALANX",
        "zName": "Phalanx",
        "zIconName": "TECH_PHALANX",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "2",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_LABOR_FORCE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_SPOKED_WHEEL",
        "zName": "Spoked Wheel",
        "zIconName": "TECH_SPOKED_WHEEL",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "3",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_HUSBANDRY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_SPOKED_WHEEL_BONUS_CHARIOT",
        "zName": "Free Chariot",
        "zIconName": "UNIT_CHARIOT",
        "BonusDiscover": "BONUS_TECH_SPOKED_WHEEL_BONUS_CHARIOT",
        "iCost": "120",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_SPOKED_WHEEL",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_RAMPARTS",
        "zName": "Ramparts",
        "zIconName": "TECH_RAMPARTS",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "4",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_DRAMA",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_RAMPARTS_BONUS_ARCHER",
        "zName": "Free Archer",
        "zIconName": "BONUS_ARCHER",
        "BonusDiscover": "BONUS_TECH_RAMPARTS_BONUS_ARCHER",
        "iCost": "120",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_RAMPARTS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_FORESTRY",
        "zName": "Forestry",
        "zIconName": "TECH_FORESTRY",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "5",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_POLIS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_BATTLELINE",
        "zName": "Battleline",
        "zIconName": "TECH_BATTLELINE",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "7",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_IRONWORKING",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_MILITARY_DRILL",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_MONASTICISM",
        "zName": "Monasticism",
        "zIconName": "TECH_MONASTICISM",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "8",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_ARISTOCRACY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_COMPOSITE_BOW",
        "zName": "Composite Bow",
        "zIconName": "TECH_COMPOSITE_BOW",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "10",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_RHETORIC",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_METAPHYSICS",
        "zName": "Metaphysics",
        "zIconName": "TECH_METAPHYSICS",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "11",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_RHETORIC",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_CITIZENSHIP",
        "zName": "Citizenship",
        "zIconName": "TECH_CITIZENSHIP",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_PHALANX",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_CITIZENSHIP_BONUS_MINISTER",
        "zName": "Free Great Minister",
        "zIconName": "COURTIER_GREAT_MINISTER",
        "BonusDiscover": "BONUS_TECH_CITIZENSHIP_BONUS_MINISTER",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_CITIZENSHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_DRAWBRIDGE",
        "zName": "Drawbridge",
        "zIconName": "TECH_DRAWBRIDGE",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "4",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_SPOKED_WHEEL",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_RAMPARTS",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_DRAWBRIDGE_BONUS_MACEMAN",
        "zName": "Free Maceman",
        "zIconName": "BONUS_MACEMAN",
        "BonusDiscover": "BONUS_TECH_DRAWBRIDGE_BONUS_MACEMAN",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_DRAWBRIDGE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_LAND_CONSOLIDATION",
        "zName": "Land Consolidation",
        "zIconName": "TECH_LAND_CONSOLIDATION",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "5",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_FORESTRY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_LAND_CONSOLIDATION_BONUS_WAR_ELEPHANT",
        "zName": "Free War Elephant",
        "zIconName": "BONUS_WAR_ELEPHANT",
        "BonusDiscover": "BONUS_TECH_LAND_CONSOLIDATION_BONUS_WAR_ELEPHANT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_LAND_CONSOLIDATION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_STEEL",
        "zName": "Steel",
        "zIconName": "TECH_STEEL",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "6",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_FORESTRY",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_BATTLELINE",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_THEOLOGY",
        "zName": "Theology",
        "zIconName": "TECH_THEOLOGY",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "8",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_METAPHYSICS",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_MONASTICISM",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_THEOLOGY_BONUS_ORDERS",
        "zName": "Orders Boost",
        "zIconName": "BOOST_ORDERS",
        "BonusDiscover": "BONUS_TECH_THEOLOGY_BONUS_ORDERS",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_THEOLOGY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_SIEGECRAFT",
        "zName": "Siegecraft",
        "zIconName": "TECH_SIEGECRAFT",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "9",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_SOVEREIGNTY",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_COMPOSITE_BOW",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_COINAGE",
        "zName": "Coinage",
        "zIconName": "TECH_COINAGE",
        "iCost": "800",
        "iColumn": "4",
        "iRow": "0",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_NAVIGATION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_COINAGE_BONUS_MONEY",
        "zName": "Money Boost",
        "zIconName": "BOOST_MONEY",
        "BonusDiscover": "BONUS_TECH_COINAGE_BONUS_MONEY",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_COINAGE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_SCHOLARSHIP",
        "zName": "Scholarship",
        "zIconName": "TECH_SCHOLARSHIP",
        "iCost": "800",
        "iColumn": "4",
        "iRow": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_CITIZENSHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_SCHOLARSHIP_BONUS_SCIENTIST",
        "zName": "Free Great Scientist",
        "zIconName": "BONUS_GREAT_SCIENTIST",
        "BonusDiscover": "BONUS_TECH_SCHOLARSHIP_BONUS_SCIENTIST",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_SCHOLARSHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_TORSION",
        "zName": "Torsion",
        "zIconName": "TECH_TORSION",
        "iCost": "800",
        "iColumn": "4",
        "iRow": "2",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_PHALANX",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_SIEGECRAFT",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_TORSION_BONUS_BALLISTA",
        "zName": "Free Ballista",
        "zIconName": "BONUS_BALLISTA",
        "BonusDiscover": "BONUS_TECH_TORSION_BONUS_BALLISTA",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_TORSION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_STIRRUPS",
        "zName": "Stirrups",
        "zIconName": "TECH_STIRRUPS",
        "iCost": "800",
        "iColumn": "4",
        "iRow": "3",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_SPOKED_WHEEL",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_LAND_CONSOLIDATION",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_STIRRUPS_BONUS_HORSEMAN",
        "zName": "Free Horseman",
        "zIconName": "BONUS_HORSEMAN",
        "BonusDiscover": "BONUS_TECH_STIRRUPS_BONUS_HORSEMAN",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STIRRUPS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_ARCHITECTURE",
        "zName": "Architecture",
        "zIconName": "TECH_ARCHITECTURE",
        "iCost": "800",
        "iColumn": "4",
        "iRow": "4",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_DRAWBRIDGE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_ARCHITECTURE_BONUS_CIVICS",
        "zName": "Civics Boost",
        "zIconName": "BONUS_CIVICS",
        "BonusDiscover": "BONUS_TECH_ARCHITECTURE_BONUS_CIVICS",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_ARCHITECTURE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MANOR",
        "zName": "Manor",
        "zIconName": "TECH_MANOR",
        "iCost": "800",
        "iColumn": "4",
        "iRow": "5",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_COMPOSITE_BOW",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_LAND_CONSOLIDATION",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_MANOR_BONUS_GOODS",
        "zName": "Goods Boost",
        "zIconName": "BONUS_GOODS",
        "BonusDiscover": "BONUS_TECH_MANOR_BONUS_GOODS",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_MANOR",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MACHINERY",
        "zName": "Machinery",
        "zIconName": "TECH_MACHINERY",
        "iCost": "800",
        "iColumn": "4",
        "iRow": "9",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_SIEGECRAFT",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MACHINERY_BONUS_CATAPULT",
        "zName": "Free Catapult",
        "zIconName": "BONUS_CATAPULT",
        "BonusDiscover": "BONUS_TECH_MACHINERY_BONUS_CATAPULT",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_MACHINERY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MOUNTED_ARCHERY",
        "zName": "Mounted Archery",
        "zIconName": "TECH_MOUNTED_ARCHERY",
        "iCost": "800",
        "iColumn": "4",
        "iRow": "10",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_SIEGECRAFT",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MOUNTED_ARCHERY_BONUS_HORSE_ARCHER",
        "zName": "Free Horse Archer",
        "zIconName": "BONUS_HORSE_ARCHER",
        "BonusDiscover": "BONUS_TECH_MOUNTED_ARCHERY_BONUS_HORSE_ARCHER",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_MOUNTED_ARCHERY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MOUNTED_ARCHERY_BONUS_CAMEL_ARCHER",
        "zName": "Free Camel Archer",
        "zIconName": "BONUS_CAMEL_ARCHER",
        "BonusDiscover": "BONUS_TECH_MOUNTED_ARCHERY_BONUS_CAMEL_ARCHER",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_MOUNTED_ARCHERY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_CARTOGRAPHY",
        "zName": "Cartography",
        "zIconName": "TECH_CARTOGRAPHY",
        "iCost": "800",
        "iColumn": "4",
        "iRow": "11",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_NAVIGATION",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_METAPHYSICS",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_CARTOGRAPHY_BONUS_TRIREME",
        "zName": "Free Trireme",
        "zIconName": "BONUS_TRIREME",
        "BonusDiscover": "BONUS_TECH_CARTOGRAPHY_BONUS_TRIREME",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_CARTOGRAPHY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_HYDRAULICS",
        "zName": "Hydraulics",
        "zIconName": "TECH_HYDRAULICS",
        "iCost": "1600",
        "iColumn": "5",
        "iRow": "0",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_COINAGE",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_MACHINERY",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_LATEEN_SAIL",
        "zName": "Lateen Sail",
        "zIconName": "TECH_LATEEN_SAIL",
        "iCost": "1600",
        "iColumn": "5",
        "iRow": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_COINAGE",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_SCHOLARSHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_LATEEN_SAIL_BONUS_DROMON",
        "zName": "Free Dromon",
        "zIconName": "BONUS_DROMON",
        "BonusDiscover": "BONUS_TECH_LATEEN_SAIL_BONUS_DROMON",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_LATEEN_SAIL",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_LATEEN_SAIL_BONUS_MERCHANT",
        "zName": "Free Great Merchant",
        "zIconName": "COURTIER_GREAT_MERCHANT",
        "BonusDiscover": "BONUS_TECH_LATEEN_SAIL_BONUS_MERCHANT",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_LATEEN_SAIL",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_WARRIOR_CODE",
        "zName": "Warrior Code",
        "zIconName": "TECH_WARRIOR_CODE",
        "iCost": "1600",
        "iColumn": "5",
        "iRow": "4",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_ARCHITECTURE",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_MANOR",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_BODKIN_ARROW",
        "zName": "Bodkin Arrow",
        "zIconName": "TECH_BODKIN_ARROW",
        "iCost": "1600",
        "iColumn": "5",
        "iRow": "6",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_STEEL",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_MANOR",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_BODKIN_ARROW_BONUS_TRAINING",
        "zName": "Training Boost",
        "zIconName": "BONUS_TRAINING",
        "BonusDiscover": "BONUS_TECH_BODKIN_ARROW_BONUS_TRAINING",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_BODKIN_ARROW",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_AESTHETICS",
        "zName": "Aesthetics",
        "zIconName": "TECH_AESTHETICS",
        "iCost": "1600",
        "iColumn": "5",
        "iRow": "7",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_THEOLOGY",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_ARCHITECTURE",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_AESTHETICS_BONUS_BORDERS",
        "zName": "Border Boost",
        "zIconName": "BOOST_BORDER",
        "BonusDiscover": "BONUS_TECH_AESTHETICS_BONUS_BORDERS",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_AESTHETICS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_UNIT_TACTICS",
        "zName": "Unit Tactics",
        "zIconName": "TECH_UNIT_TACTICS",
        "iCost": "1600",
        "iColumn": "5",
        "iRow": "8",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_THEOLOGY",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_MACHINERY",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_UNIT_TACTICS_BONUS_SOLDIER",
        "zName": "Free Great Soldier",
        "zIconName": "COURTIER_GREAT_SOLDIER",
        "BonusDiscover": "BONUS_TECH_UNIT_TACTICS_BONUS_SOLDIER",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_UNIT_TACTICS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_STRATEGY",
        "zName": "Strategy",
        "zIconName": "TECH_STRATEGY",
        "iCost": "1600",
        "iColumn": "5",
        "iRow": "11",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_CARTOGRAPHY",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_TORSION",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_STRATEGY_BONUS_TRAINING",
        "zName": "Training Boost",
        "zIconName": "BONUS_TRAINING",
        "BonusDiscover": "BONUS_TECH_STRATEGY_BONUS_TRAINING",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STRATEGY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_VAULTING",
        "zName": "Vaulting",
        "zIconName": "TECH_VAULTING",
        "iCost": "3200",
        "iColumn": "6",
        "iRow": "0",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_HYDRAULICS",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_AESTHETICS",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_JURISPRUDENCE",
        "zName": "Jurisprudence",
        "zIconName": "TECH_JURISPRUDENCE",
        "iCost": "3200",
        "iColumn": "6",
        "iRow": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_LATEEN_SAIL",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_BARDING",
        "zName": "Barding",
        "zIconName": "TECH_BARDING",
        "iCost": "3200",
        "iColumn": "6",
        "iRow": "3",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_STIRRUPS",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_WARRIOR_CODE",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_SARISSA",
        "zName": "Sarissa",
        "zIconName": "TECH_SARISSA",
        "iCost": "3200",
        "iColumn": "6",
        "iRow": "6",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_CITIZENSHIP",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_BODKIN_ARROW",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_FISCAL_POLICY",
        "zName": "Fiscal Policy",
        "zIconName": "TECH_FISCAL_POLICY",
        "iCost": "3200",
        "iColumn": "6",
        "iRow": "9",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_UNIT_TACTICS",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_MACHINERY",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_WINDLASS",
        "zName": "Windlass",
        "zIconName": "TECH_WINDLASS",
        "iCost": "3200",
        "iColumn": "6",
        "iRow": "10",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_MOUNTED_ARCHERY",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_STRATEGY",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_POLITICAL_REFORM",
        "zName": "Political Reform",
        "zIconName": "COURTIER_GREAT_MINISTER",
        "BonusDiscover": "BONUS_TECH_POLITICAL_REFORM",
        "iCost": "6400",
        "iColumn": "7",
        "iRow": "1",
        "bReturn": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_JURISPRUDENCE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MILITARY_REFORM",
        "zName": "Military Reform",
        "zIconName": "COURTIER_GREAT_SOLDIER",
        "BonusDiscover": "BONUS_TECH_MILITARY_REFORM",
        "iCost": "6400",
        "iColumn": "7",
        "iRow": "6",
        "bReturn": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_SARISSA",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_ECONOMIC_REFORM",
        "zName": "Economic Reform",
        "zIconName": "COURTIER_GREAT_MERCHANT",
        "BonusDiscover": "BONUS_TECH_ECONOMIC_REFORM",
        "iCost": "6400",
        "iColumn": "7",
        "iRow": "9",
        "bReturn": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_FISCAL_POLICY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_BATTERING_RAM_BONUS",
        "zName": "Free Battering Ram",
        "zIconName": "UNIT_BATTERING_RAM",
        "BonusDiscover": "BONUS_TECH_BATTERING_RAM_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_ASSYRIA",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_RAMPARTS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_SIEGE_TOWER_BONUS",
        "zName": "Free Siege Tower",
        "zIconName": "UNIT_SIEGE_TOWER",
        "BonusDiscover": "BONUS_TECH_SIEGE_TOWER_UNIT",
        "iCost": "1600",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_ASSYRIA",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_MACHINERY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_AKKADIAN_ARCHER_BONUS",
        "zName": "Free Akkadian Archer",
        "zIconName": "UNIT_AKKADIAN_ARCHER",
        "BonusDiscover": "BONUS_TECH_AKKADIAN_ARCHER_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_BABYLONIA",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_COMPOSITE_BOW",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_CIMMERIAN_ARCHER_BONUS",
        "zName": "Free Cimmerian Archer",
        "zIconName": "BONUS_CIMMERIAN_ARCHER",
        "BonusDiscover": "BONUS_TECH_CIMMERIAN_ARCHER_UNIT",
        "iCost": "1600",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_BABYLONIA",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_BODKIN_ARROW",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_AFRICAN_ELEPHANT_BONUS",
        "zName": "Free African Elephant",
        "zIconName": "UNIT_AFRICAN_ELEPHANT",
        "BonusDiscover": "BONUS_TECH_AFRICAN_ELEPHANT_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_CARTHAGE",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_BATTLELINE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_TURRETED_ELEPHANT_BONUS",
        "zName": "Free Turreted Elephant",
        "zIconName": "UNIT_TURRETED_ELEPHANT",
        "BonusDiscover": "BONUS_TECH_TURRETED_ELEPHANT_UNIT",
        "iCost": "1600",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_CARTHAGE",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_ARCHITECTURE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_LIGHT_CHARIOT_BONUS",
        "zName": "Free Light Chariot",
        "zIconName": "UNIT_LIGHT_CHARIOT",
        "BonusDiscover": "BONUS_TECH_LIGHT_CHARIOT_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_EGYPT",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_FORESTRY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_KUSHITE_CAVALRY_BONUS",
        "zName": "Free Kushite Cavalry",
        "zIconName": "UNIT_KUSHITE_CAVALRY",
        "BonusDiscover": "BONUS_TECH_KUSHITE_CAVALRY_UNIT",
        "iCost": "1600",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_EGYPT",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STIRRUPS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_HOPLITE_BONUS",
        "zName": "Free Hoplite",
        "zIconName": "UNIT_HOPLITE",
        "BonusDiscover": "BONUS_TECH_HOPLITE_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_GREECE",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_PHALANX",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_PHALANGITE_BONUS",
        "zName": "Free Phalangite",
        "zIconName": "UNIT_PHALANGITE",
        "BonusDiscover": "BONUS_TECH_PHALANGITE_UNIT",
        "iCost": "1600",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_GREECE",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_SARISSA",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_PALTON_CAVALRY_BONUS",
        "zName": "Free Palton Cavalry",
        "zIconName": "UNIT_PALTON_CAVALRY",
        "BonusDiscover": "BONUS_TECH_PALTON_CAVALRY_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_PERSIA",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_COMPOSITE_BOW",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_CATAPHRACT_ARCHER_BONUS",
        "zName": "Free Cataphract Archer",
        "zIconName": "UNIT_CATAPHRACT_ARCHER",
        "BonusDiscover": "BONUS_TECH_CATAPHRACT_ARCHER_UNIT",
        "iCost": "1600",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_PERSIA",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STRATEGY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_HASTATUS_BONUS",
        "zName": "Free Hastatus",
        "zIconName": "UNIT_HASTATUS",
        "BonusDiscover": "BONUS_TECH_HASTATUS_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_ROME",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_BATTLELINE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_LEGIONARY_BONUS",
        "zName": "Free Legionary",
        "zIconName": "UNIT_LEGIONARY",
        "BonusDiscover": "BONUS_TECH_LEGIONARY_UNIT",
        "iCost": "1600",
        "bHide": "1",
        "bTrash": "1",
        "bNoBonus": "1",
        "bSkipLog": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_ROME",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_UNIT_TACTICS",
            "bValue": "1"
          }
        }
      }
    ]
  }
}
    export default data
    