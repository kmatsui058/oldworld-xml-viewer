
    const data: XmlReligion.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "GenderedNames": {
          
        },
        "zIconName": {
          
        },
        "HeadTitle": {
          
        },
        "iCostBase": {
          
        },
        "iCostPerCity": {
          
        },
        "iCostPerChange": {
          
        },
        "iSpreadPercent": {
          
        },
        "iRequiresCitizens": {
          
        },
        "bDisabled": {
          
        },
        "Achievement": {
          
        },
        "EffectCity": {
          
        },
        "EffectPlayerState": {
          
        },
        "EffectPlayerUpkeep": {
          
        },
        "PaganNation": {
          
        },
        "RequiresReligion": {
          
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_RELIGION_ZOROASTRIANISM_F"
          }
        },
        "zIconName": "RELIGION_ZOROASTRIANISM",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "iSpreadPercent": "10",
        "Achievement": "ACHIEVEMENT_RELIGION_ZOROASTRIANISM",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_RELIGION_JUDAISM_F"
          }
        },
        "zIconName": "RELIGION_JUDAISM",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "iSpreadPercent": "10",
        "Achievement": "ACHIEVEMENT_RELIGION_JUDAISM",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_RELIGION_CHRISTIANITY_F"
          }
        },
        "zIconName": "RELIGION_CHRISTIANITY",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "iSpreadPercent": "15",
        "iRequiresCitizens": "12",
        "Achievement": "ACHIEVEMENT_RELIGION_CHRISTIANITY",
        "EffectCity": "EFFECTCITY_RELIGION_CHRISTIANITY",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_CHRISTIANITY",
        "EffectPlayerUpkeep": "EFFECTPLAYER_UPKEEP_LOW_CIVICS",
        "RequiresReligion": "RELIGION_JUDAISM",
        "RequiresTech": "TECH_METAPHYSICS",
        "SpreadUnit": "UNIT_CHRISTIANITY_DISCIPLE",
        "aiRequiresReligion": {
          "Pair": {
            "zIndex": "RELIGION_JUDAISM",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "RELIGION_MANICHAEISM",
        "Name": "TEXT_RELIGION_MANICHAEISM",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_RELIGION_MANICHAEISM_F"
          }
        },
        "zIconName": "RELIGION_MANICHAEISM",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "iSpreadPercent": "15",
        "Achievement": "ACHIEVEMENT_RELIGION_MANICHAEISM",
        "EffectCity": "EFFECTCITY_RELIGION_MANICHAEISM",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_MANICHAEISM",
        "EffectPlayerUpkeep": "EFFECTPLAYER_UPKEEP_LOW_CIVICS",
        "RequiresTech": "TECH_MONASTICISM",
        "SpreadUnit": "UNIT_MANICHAEISM_DISCIPLE",
        "aiRequiresReligion": {
          "Pair": [
            {
              "zIndex": "RELIGION_ZOROASTRIANISM",
              "iValue": "2"
            },
            {
              "zIndex": "RELIGION_CHRISTIANITY",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "RELIGION_PAGAN_ASSYRIA",
        "Name": "TEXT_RELIGION_PAGAN_ASSYRIA",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_RELIGION_PAGAN_ASSYRIA_F"
          }
        },
        "zIconName": "RELIGION_PAGAN_ASSYRIA",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "Achievement": "ACHIEVEMENT_RELIGION_PAGAN_ASSYRIA",
        "EffectCity": "EFFECTCITY_RELIGION_PAGAN",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_PAGAN",
        "PaganNation": "NATION_ASSYRIA"
      },
      {
        "zType": "RELIGION_PAGAN_BABYLONIA",
        "Name": "TEXT_RELIGION_PAGAN_BABYLONIA",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_RELIGION_PAGAN_BABYLONIA_F"
          }
        },
        "zIconName": "RELIGION_PAGAN_BABYLONIA",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "Achievement": "ACHIEVEMENT_RELIGION_PAGAN_BABYLONIA",
        "EffectCity": "EFFECTCITY_RELIGION_PAGAN",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_PAGAN",
        "PaganNation": "NATION_BABYLONIA"
      },
      {
        "zType": "RELIGION_PAGAN_CARTHAGE",
        "Name": "TEXT_RELIGION_PAGAN_CARTHAGE",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_RELIGION_PAGAN_CARTHAGE_F"
          }
        },
        "zIconName": "RELIGION_PAGAN_CARTHAGE",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "Achievement": "ACHIEVEMENT_RELIGION_PAGAN_CARTHAGE",
        "EffectCity": "EFFECTCITY_RELIGION_PAGAN",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_PAGAN",
        "PaganNation": "NATION_CARTHAGE"
      },
      {
        "zType": "RELIGION_PAGAN_EGYPT",
        "Name": "TEXT_RELIGION_PAGAN_EGYPT",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_RELIGION_PAGAN_EGYPT_F"
          }
        },
        "zIconName": "RELIGION_PAGAN_EGYPT",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "Achievement": "ACHIEVEMENT_RELIGION_PAGAN_EGYPT",
        "EffectCity": "EFFECTCITY_RELIGION_PAGAN",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_PAGAN",
        "PaganNation": "NATION_EGYPT"
      },
      {
        "zType": "RELIGION_PAGAN_GREECE",
        "Name": "TEXT_RELIGION_PAGAN_GREECE",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_RELIGION_PAGAN_GREECE_F"
          }
        },
        "zIconName": "RELIGION_PAGAN_GREECE",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "Achievement": "ACHIEVEMENT_RELIGION_PAGAN_GREECE",
        "EffectCity": "EFFECTCITY_RELIGION_PAGAN",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_PAGAN",
        "PaganNation": "NATION_GREECE"
      },
      {
        "zType": "RELIGION_PAGAN_ROME",
        "Name": "TEXT_RELIGION_PAGAN_ROME",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_RELIGION_PAGAN_ROME_F"
          }
        },
        "zIconName": "RELIGION_PAGAN_ROME",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "Achievement": "ACHIEVEMENT_RELIGION_PAGAN_ROME",
        "EffectCity": "EFFECTCITY_RELIGION_PAGAN",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_PAGAN",
        "PaganNation": "NATION_ROME"
      },
      {
        "zType": "RELIGION_PAGAN_PERSIA",
        "Name": "TEXT_RELIGION_PAGAN_PERSIA",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_RELIGION_PAGAN_PERSIA_F"
          }
        },
        "zIconName": "RELIGION_PAGAN_PERSIA",
        "iCostBase": "400",
        "iCostPerChange": "200",
        "Achievement": "ACHIEVEMENT_RELIGION_PAGAN_PERSIA",
        "EffectCity": "EFFECTCITY_RELIGION_PAGAN",
        "EffectPlayerState": "EFFECTPLAYER_RELIGION_PAGAN",
        "PaganNation": "NATION_PERSIA"
      }
    ]
  }
}
    export default data
    