
    const data: XmlSpecialist.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "zIconName": {
          
        },
        "Class": {
          
        },
        "iCivics": {
          
        },
        "bUpgrade": {
          
        },
        "SpecialistPrereq": {
          
        },
        "EffectCity": {
          
        },
        "EffectCityExtra": {
          
        },
        "aiYieldCost": {
          
        },
        "aiImprovementModifier": {
          
        }
      },
      {
        "zType": "SPECIALIST_FARMER",
        "Name": "TEXT_SPECIALIST_FARMER",
        "zIconName": "SPECIALIST_FARMER",
        "Class": "SPECIALISTCLASS_FARMER",
        "iCivics": "60",
        "EffectCity": "EFFECTCITY_SPECIALIST_FARMER",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_RURAL",
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_FARM",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "SPECIALIST_WOODCUTTER",
        "Name": "TEXT_SPECIALIST_WOODCUTTER",
        "zIconName": "SPECIALIST_WOODCUTTER",
        "Class": "SPECIALISTCLASS_WOODCUTTER",
        "iCivics": "60",
        "EffectCity": "EFFECTCITY_SPECIALIST_WOODCUTTER",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_RURAL",
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_LUMBERMILL",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "SPECIALIST_STONECUTTER",
        "Name": "TEXT_SPECIALIST_STONECUTTER",
        "zIconName": "SPECIALIST_STONECUTTER",
        "Class": "SPECIALISTCLASS_STONECUTTER",
        "iCivics": "60",
        "EffectCity": "EFFECTCITY_SPECIALIST_STONECUTTER",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_RURAL",
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_QUARRY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "SPECIALIST_MINER",
        "Name": "TEXT_SPECIALIST_MINER",
        "zIconName": "SPECIALIST_MINER",
        "Class": "SPECIALISTCLASS_MINER",
        "iCivics": "60",
        "EffectCity": "EFFECTCITY_SPECIALIST_MINER",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_RURAL",
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_MINE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "SPECIALIST_RANCHER",
        "Name": "TEXT_SPECIALIST_RANCHER",
        "zIconName": "SPECIALIST_RANCHER",
        "Class": "SPECIALISTCLASS_RANCHER",
        "iCivics": "80",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_RURAL",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "20"
          }
        },
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_PASTURE",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "SPECIALIST_TRAPPER",
        "Name": "TEXT_SPECIALIST_TRAPPER",
        "zIconName": "SPECIALIST_TRAPPER",
        "Class": "SPECIALISTCLASS_TRAPPER",
        "iCivics": "80",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_RURAL",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "20"
          }
        },
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_CAMP",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "SPECIALIST_GARDENER",
        "Name": "TEXT_SPECIALIST_GARDENER",
        "zIconName": "SPECIALIST_GARDENER",
        "Class": "SPECIALISTCLASS_GARDENER",
        "iCivics": "80",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_RURAL",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "20"
          }
        },
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_GROVE",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "SPECIALIST_FISHER",
        "Name": "TEXT_SPECIALIST_FISHER",
        "zIconName": "SPECIALIST_FISHER",
        "Class": "SPECIALISTCLASS_FISHER",
        "iCivics": "80",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_RURAL",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "20"
          }
        },
        "aiImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_NETS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "SPECIALIST_DOCTOR_1",
        "Name": "TEXT_SPECIALIST_DOCTOR_1",
        "zIconName": "SPECIALIST_DOCTOR",
        "Class": "SPECIALISTCLASS_DOCTOR",
        "iCivics": "80",
        "EffectCity": "EFFECTCITY_SPECIALIST_DOCTOR_1",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_APPRENTICE",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "SPECIALIST_DOCTOR_2",
        "Name": "TEXT_SPECIALIST_DOCTOR_2",
        "zIconName": "SPECIALIST_DOCTOR",
        "Class": "SPECIALISTCLASS_DOCTOR",
        "iCivics": "100",
        "SpecialistPrereq": "SPECIALIST_DOCTOR_1",
        "EffectCity": "EFFECTCITY_SPECIALIST_DOCTOR_2",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_MASTER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "SPECIALIST_DOCTOR_3",
        "Name": "TEXT_SPECIALIST_DOCTOR_3",
        "zIconName": "SPECIALIST_DOCTOR",
        "Class": "SPECIALISTCLASS_DOCTOR",
        "iCivics": "120",
        "SpecialistPrereq": "SPECIALIST_DOCTOR_2",
        "EffectCity": "EFFECTCITY_SPECIALIST_DOCTOR_3",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_ELDER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "SPECIALIST_ACOLYTE_1",
        "Name": "TEXT_SPECIALIST_ACOLYTE_1",
        "zIconName": "SPECIALIST_ACOLYTE",
        "Class": "SPECIALISTCLASS_ACOLYTE",
        "iCivics": "80",
        "EffectCity": "EFFECTCITY_SPECIALIST_ACOLYTE_1",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_APPRENTICE",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "SPECIALIST_ACOLYTE_2",
        "Name": "TEXT_SPECIALIST_ACOLYTE_2",
        "zIconName": "SPECIALIST_ACOLYTE",
        "Class": "SPECIALISTCLASS_ACOLYTE",
        "iCivics": "100",
        "SpecialistPrereq": "SPECIALIST_ACOLYTE_1",
        "EffectCity": "EFFECTCITY_SPECIALIST_ACOLYTE_2",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_MASTER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "SPECIALIST_ACOLYTE_3",
        "Name": "TEXT_SPECIALIST_ACOLYTE_3",
        "zIconName": "SPECIALIST_ACOLYTE",
        "Class": "SPECIALISTCLASS_ACOLYTE",
        "iCivics": "120",
        "SpecialistPrereq": "SPECIALIST_ACOLYTE_2",
        "EffectCity": "EFFECTCITY_SPECIALIST_ACOLYTE_3",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_ELDER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "SPECIALIST_MONK_1",
        "Name": "TEXT_SPECIALIST_MONK_1",
        "zIconName": "SPECIALIST_MONK",
        "Class": "SPECIALISTCLASS_MONK",
        "iCivics": "80",
        "EffectCity": "EFFECTCITY_SPECIALIST_MONK_1",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_APPRENTICE",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "SPECIALIST_MONK_2",
        "Name": "TEXT_SPECIALIST_MONK_2",
        "zIconName": "SPECIALIST_MONK",
        "Class": "SPECIALISTCLASS_MONK",
        "iCivics": "100",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_MONK_1",
        "EffectCity": "EFFECTCITY_SPECIALIST_MONK_2",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_MASTER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "SPECIALIST_MONK_3",
        "Name": "TEXT_SPECIALIST_MONK_3",
        "zIconName": "SPECIALIST_MONK",
        "Class": "SPECIALISTCLASS_MONK",
        "iCivics": "120",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_MONK_2",
        "EffectCity": "EFFECTCITY_SPECIALIST_MONK_3",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_ELDER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "SPECIALIST_PRIEST_1",
        "Name": "TEXT_SPECIALIST_PRIEST_1",
        "zIconName": "SPECIALIST_PRIEST",
        "Class": "SPECIALISTCLASS_PRIEST",
        "iCivics": "80",
        "EffectCity": "EFFECTCITY_SPECIALIST_PRIEST_1",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_APPRENTICE",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "SPECIALIST_PRIEST_2",
        "Name": "TEXT_SPECIALIST_PRIEST_2",
        "zIconName": "SPECIALIST_PRIEST",
        "Class": "SPECIALISTCLASS_PRIEST",
        "iCivics": "100",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_PRIEST_1",
        "EffectCity": "EFFECTCITY_SPECIALIST_PRIEST_2",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_MASTER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "SPECIALIST_PRIEST_3",
        "Name": "TEXT_SPECIALIST_PRIEST_3",
        "zIconName": "SPECIALIST_PRIEST",
        "Class": "SPECIALISTCLASS_PRIEST",
        "iCivics": "120",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_PRIEST_2",
        "EffectCity": "EFFECTCITY_SPECIALIST_PRIEST_3",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_ELDER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "SPECIALIST_BISHOP_1",
        "Name": "TEXT_SPECIALIST_BISHOP_1",
        "zIconName": "SPECIALIST_BISHOP",
        "Class": "SPECIALISTCLASS_BISHOP",
        "iCivics": "80",
        "EffectCity": "EFFECTCITY_SPECIALIST_BISHOP_1",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_APPRENTICE",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "SPECIALIST_BISHOP_2",
        "Name": "TEXT_SPECIALIST_BISHOP_2",
        "zIconName": "SPECIALIST_BISHOP",
        "Class": "SPECIALISTCLASS_BISHOP",
        "iCivics": "100",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_BISHOP_1",
        "EffectCity": "EFFECTCITY_SPECIALIST_BISHOP_2",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_MASTER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "SPECIALIST_BISHOP_3",
        "Name": "TEXT_SPECIALIST_BISHOP_3",
        "zIconName": "SPECIALIST_BISHOP",
        "Class": "SPECIALISTCLASS_BISHOP",
        "iCivics": "120",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_BISHOP_2",
        "EffectCity": "EFFECTCITY_SPECIALIST_BISHOP_3",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_ELDER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "SPECIALIST_POET_1",
        "Name": "TEXT_SPECIALIST_POET_1",
        "zIconName": "SPECIALIST_POET",
        "Class": "SPECIALISTCLASS_POET",
        "iCivics": "80",
        "EffectCity": "EFFECTCITY_SPECIALIST_POET_1",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_APPRENTICE",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "SPECIALIST_POET_2",
        "Name": "TEXT_SPECIALIST_POET_2",
        "zIconName": "SPECIALIST_POET",
        "Class": "SPECIALISTCLASS_POET",
        "iCivics": "100",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_POET_1",
        "EffectCity": "EFFECTCITY_SPECIALIST_POET_2",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_MASTER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "SPECIALIST_POET_3",
        "Name": "TEXT_SPECIALIST_POET_3",
        "zIconName": "SPECIALIST_POET",
        "Class": "SPECIALISTCLASS_POET",
        "iCivics": "120",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_POET_2",
        "EffectCity": "EFFECTCITY_SPECIALIST_POET_3",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_ELDER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "SPECIALIST_SHOPKEEPER_1",
        "Name": "TEXT_SPECIALIST_SHOPKEEPER_1",
        "zIconName": "SPECIALIST_SHOPKEEPER",
        "Class": "SPECIALISTCLASS_SHOPKEEPER",
        "iCivics": "80",
        "EffectCity": "EFFECTCITY_SPECIALIST_SHOPKEEPER_1",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_APPRENTICE",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "SPECIALIST_SHOPKEEPER_2",
        "Name": "TEXT_SPECIALIST_SHOPKEEPER_2",
        "zIconName": "SPECIALIST_SHOPKEEPER",
        "Class": "SPECIALISTCLASS_SHOPKEEPER",
        "iCivics": "100",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_SHOPKEEPER_1",
        "EffectCity": "EFFECTCITY_SPECIALIST_SHOPKEEPER_2",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_MASTER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "SPECIALIST_SHOPKEEPER_3",
        "Name": "TEXT_SPECIALIST_SHOPKEEPER_3",
        "zIconName": "SPECIALIST_SHOPKEEPER",
        "Class": "SPECIALISTCLASS_SHOPKEEPER",
        "iCivics": "120",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_SHOPKEEPER_2",
        "EffectCity": "EFFECTCITY_SPECIALIST_SHOPKEEPER_3",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_ELDER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "SPECIALIST_PHILOSOPHER_1",
        "Name": "TEXT_SPECIALIST_PHILOSOPHER_1",
        "zIconName": "SPECIALIST_PHILOSOPHER",
        "Class": "SPECIALISTCLASS_PHILOSOPHER",
        "iCivics": "80",
        "EffectCity": "EFFECTCITY_SPECIALIST_PHILOSOPHER_1",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_APPRENTICE",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "SPECIALIST_PHILOSOPHER_2",
        "Name": "TEXT_SPECIALIST_PHILOSOPHER_2",
        "zIconName": "SPECIALIST_PHILOSOPHER",
        "Class": "SPECIALISTCLASS_PHILOSOPHER",
        "iCivics": "100",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_PHILOSOPHER_1",
        "EffectCity": "EFFECTCITY_SPECIALIST_PHILOSOPHER_2",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_MASTER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "SPECIALIST_PHILOSOPHER_3",
        "Name": "TEXT_SPECIALIST_PHILOSOPHER_3",
        "zIconName": "SPECIALIST_PHILOSOPHER",
        "Class": "SPECIALISTCLASS_PHILOSOPHER",
        "iCivics": "120",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_PHILOSOPHER_2",
        "EffectCity": "EFFECTCITY_SPECIALIST_PHILOSOPHER_3",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_ELDER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "SPECIALIST_SCRIBE_1",
        "Name": "TEXT_SPECIALIST_SCRIBE_1",
        "zIconName": "SPECIALIST_SCRIBE",
        "Class": "SPECIALISTCLASS_SCRIBE",
        "iCivics": "80",
        "EffectCity": "EFFECTCITY_SPECIALIST_SCRIBE_1",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_APPRENTICE",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "SPECIALIST_SCRIBE_2",
        "Name": "TEXT_SPECIALIST_SCRIBE_2",
        "zIconName": "SPECIALIST_SCRIBE",
        "Class": "SPECIALISTCLASS_SCRIBE",
        "iCivics": "100",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_SCRIBE_1",
        "EffectCity": "EFFECTCITY_SPECIALIST_SCRIBE_2",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_MASTER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "SPECIALIST_SCRIBE_3",
        "Name": "TEXT_SPECIALIST_SCRIBE_3",
        "zIconName": "SPECIALIST_SCRIBE",
        "Class": "SPECIALISTCLASS_SCRIBE",
        "iCivics": "120",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_SCRIBE_2",
        "EffectCity": "EFFECTCITY_SPECIALIST_SCRIBE_3",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_ELDER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "SPECIALIST_OFFICER_1",
        "Name": "TEXT_SPECIALIST_OFFICER_1",
        "zIconName": "SPECIALIST_OFFICER",
        "Class": "SPECIALISTCLASS_OFFICER",
        "iCivics": "80",
        "EffectCity": "EFFECTCITY_SPECIALIST_OFFICER_1",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_APPRENTICE",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "SPECIALIST_OFFICER_2",
        "Name": "TEXT_SPECIALIST_OFFICER_2",
        "zIconName": "SPECIALIST_OFFICER",
        "Class": "SPECIALISTCLASS_OFFICER",
        "iCivics": "100",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_OFFICER_1",
        "EffectCity": "EFFECTCITY_SPECIALIST_OFFICER_2",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_MASTER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "SPECIALIST_OFFICER_3",
        "Name": "TEXT_SPECIALIST_OFFICER_3",
        "zIconName": "SPECIALIST_OFFICER",
        "Class": "SPECIALISTCLASS_OFFICER",
        "iCivics": "120",
        "bUpgrade": "1",
        "SpecialistPrereq": "SPECIALIST_OFFICER_2",
        "EffectCity": "EFFECTCITY_SPECIALIST_OFFICER_3",
        "EffectCityExtra": "EFFECTCITY_SPECIALIST_ELDER",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "80"
          }
        }
      }
    ]
  }
}
    export default data
    