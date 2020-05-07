
    const data: XmlReligion.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "zIconName": {
          
        },
        "iCostBase": {
          
        },
        "iCostPerCity": {
          
        },
        "iCostPerChange": {
          
        },
        "iSpreadThreshold": {
          
        },
        "iRequiresCitizens": {
          
        },
        "EffectCity": {
          
        },
        "EffectPlayerState": {
          
        },
        "EffectPlayerUpkeep": {
          
        },
        "RequiresTech": {
          
        },
        "SpreadUnit": {
          
        },
        "aiRequiresImprovement": {
          
        },
        "aiRequiresImprovementClass": {
          
        },
        "aiRequiresSpecialist": {
          
        },
        "aiRequiresSpecialistClass": {
          
        },
        "aiRequiresReligion": {
          
        }
      },
      {
        "zType": "RELIGION_ZOROASTRIANISM",
        "Name": "TEXT_RELIGION_ZOROASTRIANISM",
        "zIconName": "RELIGION_ZOROASTRIANISM",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "iSpreadThreshold": "12",
        "EffectCity": "EFFECTCITY_RELIGION_ZOROASTRIANISM",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_ZOROASTRIANISM",
        "EffectPlayerUpkeep": "EFFECTPLAYER_UPKEEP_LOW_CIVICS",
        "SpreadUnit": "UNIT_ZOROASTRIANISM_DISCIPLE",
        "aiRequiresSpecialistClass": {
          "Pair": {
            "zIndex": "SPECIALISTCLASS_ACOLYTE",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "RELIGION_JUDAISM",
        "Name": "TEXT_RELIGION_JUDAISM",
        "zIconName": "RELIGION_JUDAISM",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "iSpreadThreshold": "12",
        "EffectCity": "EFFECTCITY_RELIGION_JUDAISM",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_JUDAISM",
        "EffectPlayerUpkeep": "EFFECTPLAYER_UPKEEP_LOW_CIVICS",
        "RequiresTech": "TECH_LABOR_FORCE",
        "SpreadUnit": "UNIT_JUDAISM_DISCIPLE",
        "aiRequiresSpecialist": {
          "Pair": {
            "zIndex": "SPECIALIST_RANCHER",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "RELIGION_CHRISTIANITY",
        "Name": "TEXT_RELIGION_CHRISTIANITY",
        "zIconName": "RELIGION_CHRISTIANITY",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "iSpreadThreshold": "8",
        "iRequiresCitizens": "12",
        "EffectCity": "EFFECTCITY_RELIGION_CHRISTIANITY",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_CHRISTIANITY",
        "EffectPlayerUpkeep": "EFFECTPLAYER_UPKEEP_LOW_CIVICS",
        "RequiresTech": "TECH_METAPHYSICS",
        "SpreadUnit": "UNIT_CHRISTIANITY_DISCIPLE",
        "aiRequiresReligion": {
          "Pair": {
            "zIndex": "RELIGION_JUDAISM",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "RELIGION_MANICHAEISM",
        "Name": "TEXT_RELIGION_MANICHAEISM",
        "zIconName": "RELIGION_MANICHAEISM",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "iSpreadThreshold": "8",
        "EffectCity": "EFFECTCITY_RELIGION_MANICHAEISM",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_MANICHAEISM",
        "EffectPlayerUpkeep": "EFFECTPLAYER_UPKEEP_LOW_CIVICS",
        "RequiresTech": "TECH_MONASTICISM",
        "SpreadUnit": "UNIT_MANICHAEISM_DISCIPLE",
        "aiRequiresReligion": {
          "Pair": {
            "zIndex": "RELIGION_ZOROASTRIANISM",
            "iValue": "3"
          }
        }
      }
    ]
  }
}
    export default data
    