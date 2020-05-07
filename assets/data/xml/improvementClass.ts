
    const data: XmlImprovementClass.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "iMaxCultureCount": {
          
        },
        "iAdjacentDiscount": {
          
        },
        "bNoAdjacent": {
          
        },
        "TechPrereq": {
          
        },
        "EffectCity": {
          
        },
        "SpecialistClass": {
          
        },
        "abResourceValid": {
          
        },
        "aeTheologyCityEffect": {
          
        },
        "aeResourceCityEffect": {
          
        },
        "aaiResourceYieldOutput": {
          
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_FORT",
        "Name": "TEXT_IMPROVEMENTCLASS_FORT",
        "TechPrereq": "TECH_SIEGECRAFT"
      },
      {
        "zType": "IMPROVEMENTCLASS_FARM",
        "Name": "TEXT_IMPROVEMENTCLASS_FARM",
        "SpecialistClass": "SPECIALISTCLASS_FARMER",
        "abResourceValid": {
          "Pair": [
            {
              "zIndex": "RESOURCE_WHEAT",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_BARLEY",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_SORGHUM",
              "bValue": "1"
            }
          ]
        },
        "aeResourceCityEffect": {
          "Pair": [
            {
              "zIndex": "RESOURCE_WHEAT",
              "zValue": "EFFECTCITY_RESOURCE_FOOD_STAPLE"
            },
            {
              "zIndex": "RESOURCE_BARLEY",
              "zValue": "EFFECTCITY_RESOURCE_FOOD_STAPLE"
            },
            {
              "zIndex": "RESOURCE_SORGHUM",
              "zValue": "EFFECTCITY_RESOURCE_FOOD_STAPLE"
            }
          ]
        },
        "aaiResourceYieldOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_WHEAT",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "10"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_BARLEY",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "10"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_SORGHUM",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "10"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_MINE",
        "Name": "TEXT_IMPROVEMENTCLASS_MINE",
        "SpecialistClass": "SPECIALISTCLASS_MINER",
        "abResourceValid": {
          "Pair": [
            {
              "zIndex": "RESOURCE_ORE",
              "bValue": "1"
            },
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
        "aeResourceCityEffect": {
          "Pair": [
            {
              "zIndex": "RESOURCE_ORE",
              "zValue": "EFFECTCITY_RESOURCE_ORE"
            },
            {
              "zIndex": "RESOURCE_SALT",
              "zValue": "EFFECTCITY_RESOURCE_SALT"
            },
            {
              "zIndex": "RESOURCE_GEM",
              "zValue": "EFFECTCITY_RESOURCE_GEM"
            }
          ]
        },
        "aaiResourceYieldOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_ORE",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_TRAINING",
                  "iValue": "10"
                },
                {
                  "zSubIndex": "YIELD_IRON",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_SALT",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "100"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_GEM",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "200"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_GOLD",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "200"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_SILVER",
              "SubPair": {
                "zSubIndex": "YIELD_MONEY",
                "iValue": "300"
              }
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_LUMBERMILL",
        "Name": "TEXT_IMPROVEMENTCLASS_LUMBERMILL",
        "TechPrereq": "TECH_FORESTRY",
        "SpecialistClass": "SPECIALISTCLASS_WOODCUTTER"
      },
      {
        "zType": "IMPROVEMENTCLASS_QUARRY",
        "Name": "TEXT_IMPROVEMENTCLASS_QUARRY",
        "TechPrereq": "TECH_STONECUTTING",
        "SpecialistClass": "SPECIALISTCLASS_STONECUTTER",
        "abResourceValid": {
          "Pair": {
            "zIndex": "RESOURCE_MARBLE",
            "bValue": "1"
          }
        },
        "aaiResourceYieldOutput": {
          "Pair": {
            "zIndex": "RESOURCE_MARBLE",
            "SubPair": [
              {
                "zSubIndex": "YIELD_CIVICS",
                "iValue": "10"
              },
              {
                "zSubIndex": "YIELD_STONE",
                "iValue": "50"
              }
            ]
          }
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_PASTURE",
        "Name": "TEXT_IMPROVEMENTCLASS_PASTURE",
        "TechPrereq": "TECH_HUSBANDRY",
        "SpecialistClass": "SPECIALISTCLASS_RANCHER",
        "abResourceValid": {
          "Pair": [
            {
              "zIndex": "RESOURCE_HORSE",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_CATTLE",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_SHEEP",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_PIG",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_GOAT",
              "bValue": "1"
            }
          ]
        },
        "aeResourceCityEffect": {
          "Pair": [
            {
              "zIndex": "RESOURCE_HORSE",
              "zValue": "EFFECTCITY_RESOURCE_HORSE"
            },
            {
              "zIndex": "RESOURCE_CATTLE",
              "zValue": "EFFECTCITY_RESOURCE_FOOD_STAPLE"
            },
            {
              "zIndex": "RESOURCE_SHEEP",
              "zValue": "EFFECTCITY_RESOURCE_FOOD_STAPLE"
            },
            {
              "zIndex": "RESOURCE_PIG",
              "zValue": "EFFECTCITY_RESOURCE_FOOD_STAPLE"
            },
            {
              "zIndex": "RESOURCE_GOAT",
              "zValue": "EFFECTCITY_RESOURCE_FOOD_STAPLE"
            }
          ]
        },
        "aaiResourceYieldOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_HORSE",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "5"
              }
            },
            {
              "zIndex": "RESOURCE_CATTLE",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "10"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_SHEEP",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "10"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_PIG",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "10"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_GOAT",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "10"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_CAMP",
        "Name": "TEXT_IMPROVEMENTCLASS_CAMP",
        "TechPrereq": "TECH_TRAPPING",
        "SpecialistClass": "SPECIALISTCLASS_TRAPPER",
        "abResourceValid": {
          "Pair": [
            {
              "zIndex": "RESOURCE_CAMEL",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_ELEPHANT",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_FUR",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_GAME",
              "bValue": "1"
            }
          ]
        },
        "aeResourceCityEffect": {
          "Pair": [
            {
              "zIndex": "RESOURCE_CAMEL",
              "zValue": "EFFECTCITY_RESOURCE_CAMEL"
            },
            {
              "zIndex": "RESOURCE_ELEPHANT",
              "zValue": "EFFECTCITY_RESOURCE_ELEPHANT"
            },
            {
              "zIndex": "RESOURCE_FUR",
              "zValue": "EFFECTCITY_RESOURCE_FUR"
            }
          ]
        },
        "aaiResourceYieldOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_CAMEL",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "5"
              }
            },
            {
              "zIndex": "RESOURCE_ELEPHANT",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "5"
              }
            },
            {
              "zIndex": "RESOURCE_GAME",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "10"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_FUR",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "100"
                }
              ]
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_GROVE",
        "Name": "TEXT_IMPROVEMENTCLASS_GROVE",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "SpecialistClass": "SPECIALISTCLASS_GARDENER",
        "abResourceValid": {
          "Pair": [
            {
              "zIndex": "RESOURCE_CITRUS",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_INCENSE",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_OLIVE",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_WINE",
              "bValue": "1"
            }
          ]
        },
        "aeResourceCityEffect": {
          "Pair": [
            {
              "zIndex": "RESOURCE_INCENSE",
              "zValue": "EFFECTCITY_RESOURCE_INCENSE"
            },
            {
              "zIndex": "RESOURCE_OLIVE",
              "zValue": "EFFECTCITY_RESOURCE_OLIVE"
            },
            {
              "zIndex": "RESOURCE_WINE",
              "zValue": "EFFECTCITY_RESOURCE_WINE"
            }
          ]
        },
        "aaiResourceYieldOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_CITRUS",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_INCENSE",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "100"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_OLIVE",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_WINE",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_NETS",
        "Name": "TEXT_IMPROVEMENTCLASS_NETS",
        "SpecialistClass": "SPECIALISTCLASS_FISHER",
        "abResourceValid": {
          "Pair": [
            {
              "zIndex": "RESOURCE_DYE",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_PEARL",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_FISH",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_CRAB",
              "bValue": "1"
            }
          ]
        },
        "aeResourceCityEffect": {
          "Pair": [
            {
              "zIndex": "RESOURCE_DYE",
              "zValue": "EFFECTCITY_RESOURCE_DYE"
            },
            {
              "zIndex": "RESOURCE_PEARL",
              "zValue": "EFFECTCITY_RESOURCE_PEARL"
            },
            {
              "zIndex": "RESOURCE_FISH",
              "zValue": "EFFECTCITY_RESOURCE_FOOD_STAPLE"
            }
          ]
        },
        "aaiResourceYieldOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_DYE",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "100"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_PEARL",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_FISH",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "10"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_CRAB",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "10"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_HARBOR",
        "Name": "TEXT_IMPROVEMENTCLASS_HARBOR",
        "TechPrereq": "TECH_NAVIGATION"
      },
      {
        "zType": "IMPROVEMENTCLASS_GRANARY",
        "Name": "TEXT_IMPROVEMENTCLASS_GRANARY",
        "iMaxCultureCount": "1",
        "TechPrereq": "TECH_ADMINISTRATION"
      },
      {
        "zType": "IMPROVEMENTCLASS_MILL",
        "Name": "TEXT_IMPROVEMENTCLASS_MILL",
        "iMaxCultureCount": "1",
        "TechPrereq": "TECH_HYDRAULICS"
      },
      {
        "zType": "IMPROVEMENTCLASS_HAMLET",
        "Name": "TEXT_IMPROVEMENTCLASS_HAMLET",
        "iMaxCultureCount": "1",
        "TechPrereq": "TECH_POLIS"
      },
      {
        "zType": "IMPROVEMENTCLASS_AQUEDUCT",
        "Name": "TEXT_IMPROVEMENTCLASS_AQUEDUCT",
        "iMaxCultureCount": "1",
        "TechPrereq": "TECH_DRAWBRIDGE"
      },
      {
        "zType": "IMPROVEMENTCLASS_BARRACKS",
        "Name": "TEXT_IMPROVEMENTCLASS_BARRACKS",
        "TechPrereq": "TECH_MILITARY_DRILL",
        "SpecialistClass": "SPECIALISTCLASS_OFFICER"
      },
      {
        "zType": "IMPROVEMENTCLASS_RANGE",
        "Name": "TEXT_IMPROVEMENTCLASS_RANGE",
        "TechPrereq": "TECH_SIEGECRAFT",
        "SpecialistClass": "SPECIALISTCLASS_OFFICER"
      },
      {
        "zType": "IMPROVEMENTCLASS_THEATER",
        "Name": "TEXT_IMPROVEMENTCLASS_THEATER",
        "iAdjacentDiscount": "-10",
        "TechPrereq": "TECH_DRAMA",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_THEATER",
        "SpecialistClass": "SPECIALISTCLASS_POET"
      },
      {
        "zType": "IMPROVEMENTCLASS_BATHS",
        "Name": "TEXT_IMPROVEMENTCLASS_BATHS",
        "iAdjacentDiscount": "-10",
        "TechPrereq": "TECH_ARCHITECTURE",
        "SpecialistClass": "SPECIALISTCLASS_DOCTOR"
      },
      {
        "zType": "IMPROVEMENTCLASS_MARKET",
        "Name": "TEXT_IMPROVEMENTCLASS_MARKET",
        "iAdjacentDiscount": "-10",
        "TechPrereq": "TECH_COINAGE",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_MARKET",
        "SpecialistClass": "SPECIALISTCLASS_SHOPKEEPER"
      },
      {
        "zType": "IMPROVEMENTCLASS_LIBRARY",
        "Name": "TEXT_IMPROVEMENTCLASS_LIBRARY",
        "iAdjacentDiscount": "-10",
        "TechPrereq": "TECH_SCHOLARSHIP",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_LIBRARY",
        "SpecialistClass": "SPECIALISTCLASS_PHILOSOPHER"
      },
      {
        "zType": "IMPROVEMENTCLASS_COURTHOUSE",
        "Name": "TEXT_IMPROVEMENTCLASS_COURTHOUSE",
        "iAdjacentDiscount": "-10",
        "TechPrereq": "TECH_CITIZENSHIP",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_COURTHOUSE",
        "SpecialistClass": "SPECIALISTCLASS_SCRIBE"
      },
      {
        "zType": "IMPROVEMENTCLASS_GARRISON",
        "Name": "TEXT_IMPROVEMENTCLASS_GARRISON",
        "iAdjacentDiscount": "-10",
        "TechPrereq": "TECH_SOVEREIGNTY"
      },
      {
        "zType": "IMPROVEMENTCLASS_SHRINE",
        "Name": "TEXT_IMPROVEMENTCLASS_SHRINE",
        "iMaxCultureCount": "1",
        "bNoAdjacent": "1",
        "TechPrereq": "TECH_DIVINATION",
        "SpecialistClass": "SPECIALISTCLASS_ACOLYTE"
      },
      {
        "zType": "IMPROVEMENTCLASS_MONASTERY",
        "Name": "TEXT_IMPROVEMENTCLASS_MONASTERY",
        "TechPrereq": "TECH_MONASTICISM",
        "SpecialistClass": "SPECIALISTCLASS_MONK",
        "aeTheologyCityEffect": {
          "Pair": [
            {
              "zIndex": "THEOLOGY_MYTHOLOGY",
              "zValue": "EFFECTCITY_IMPROVEMENTCLASS_MONASTERY_MYTHOLOGY"
            },
            {
              "zIndex": "THEOLOGY_VENERATION",
              "zValue": "EFFECTCITY_IMPROVEMENTCLASS_MONASTERY_VENERATION"
            },
            {
              "zIndex": "THEOLOGY_LEGALISM",
              "zValue": "EFFECTCITY_IMPROVEMENTCLASS_MONASTERY_LEGALISM"
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_TEMPLE",
        "Name": "TEXT_IMPROVEMENTCLASS_TEMPLE",
        "TechPrereq": "TECH_THEOLOGY",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_TEMPLE",
        "SpecialistClass": "SPECIALISTCLASS_PRIEST",
        "aeTheologyCityEffect": {
          "Pair": [
            {
              "zIndex": "THEOLOGY_REVELATION",
              "zValue": "EFFECTCITY_IMPROVEMENTCLASS_TEMPLE_REVELATION"
            },
            {
              "zIndex": "THEOLOGY_GNOSTICISM",
              "zValue": "EFFECTCITY_IMPROVEMENTCLASS_TEMPLE_GNOSTICISM"
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_CATHEDRAL",
        "Name": "TEXT_IMPROVEMENTCLASS_CATHEDRAL",
        "TechPrereq": "TECH_VAULTING",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL",
        "SpecialistClass": "SPECIALISTCLASS_BISHOP",
        "aeTheologyCityEffect": {
          "Pair": [
            {
              "zIndex": "THEOLOGY_REDEMPTION",
              "zValue": "EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL_REDEMPTION"
            },
            {
              "zIndex": "THEOLOGY_DUALISM",
              "zValue": "EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL_DUALISM"
            },
            {
              "zIndex": "THEOLOGY_ENLIGHTENMENT",
              "zValue": "EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL_ENLIGHTENMENT"
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_HOLY_SITE",
        "Name": "TEXT_IMPROVEMENTCLASS_HOLY_SITE",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_HOLY_SITE"
      }
    ]
  }
}
    export default data
    