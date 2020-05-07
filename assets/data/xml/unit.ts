
    const data: XmlUnit.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "zIconName": {
          
        },
        "zPortraitName": {
          
        },
        "zBackgroundName": {
          
        },
        "zAudioSelectionType": {
          
        },
        "zAudioMovementType": {
          
        },
        "zAudioAttackType": {
          
        },
        "azGenderIconName": {
          
        },
        "azGenderPortraitName": {
          
        },
        "azBarbarianPortraitName": {
          
        },
        "aeFormations": {
          
        },
        "UnitCycle": {
          
        },
        "TechPrereq": {
          
        },
        "NationPrereq": {
          
        },
        "CulturePrereq": {
          
        },
        "EffectCityPrereq": {
          
        },
        "ImprovementPrereq": {
          
        },
        "ImprovementObsolete": {
          
        },
        "RequiresReligion": {
          
        },
        "SpreadReligion": {
          
        },
        "BuildReligion": {
          
        },
        "ProductionType": {
          
        },
        "iMovement": {
          
        },
        "iVision": {
          
        },
        "iReveal": {
          
        },
        "iFatigue": {
          
        },
        "iWaterControl": {
          
        },
        "iStrength": {
          
        },
        "iRangeMin": {
          
        },
        "iRangeMax": {
          
        },
        "iHPMax": {
          
        },
        "iProduction": {
          
        },
        "iProductionPer": {
          
        },
        "iPopulationCost": {
          
        },
        "iStartFirst": {
          
        },
        "iStartCity": {
          
        },
        "iStartCityAI": {
          
        },
        "iStartDeveloped": {
          
        },
        "fAttackDuration": {
          
        },
        "bWater": {
          
        },
        "bAmphibious": {
          
        },
        "bTerritoryWater": {
          
        },
        "bReveal": {
          
        },
        "bMelee": {
          
        },
        "bOutsideConsumption": {
          
        },
        "bOutsideOpinion": {
          
        },
        "bZOC": {
          
        },
        "bIgnoreZOC": {
          
        },
        "bBlocks": {
          
        },
        "bFortify": {
          
        },
        "bTestudo": {
          
        },
        "bPillage": {
          
        },
        "bUnlimber": {
          
        },
        "bAnchor": {
          
        },
        "bFound": {
          
        },
        "bHarvest": {
          
        },
        "bBuild": {
          
        },
        "bBuyTile": {
          
        },
        "bTrade": {
          
        },
        "bTheology": {
          
        },
        "bReligious": {
          
        },
        "bPromote": {
          
        },
        "bGeneral": {
          
        },
        "bBarbCity": {
          
        },
        "bNoHurry": {
          
        },
        "aiUnitTraitModifier": {
          
        },
        "aiUnitTraitModifierAttack": {
          
        },
        "aiUnitTraitModifierDefense": {
          
        },
        "aiUnitTraitModifierMelee": {
          
        },
        "aiYieldCost": {
          
        },
        "aiYieldConsumption": {
          
        },
        "aiAttackValue": {
          
        },
        "aiAttackPercent": {
          
        },
        "aeObsoleteTech": {
          
        },
        "aeUpgradeUnit": {
          
        },
        "aeUnitTrait": {
          
        },
        "aeEffectUnit": {
          
        },
        "aeRemoveVegetation": {
          
        }
      },
      {
        "zType": "UNIT_SETTLER",
        "Name": "TEXT_UNIT_SETTLER",
        "zIconName": "UNIT_SETTLER",
        "zPortraitName": "UNIT_SETTLER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SETTLER",
        "zAudioMovementType": "SETTLER",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_SETTLER"
        },
        "UnitCycle": "UNITCYCLE_FOUND",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "10",
        "iStartFirst": "1",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bFound": "1",
        "bHarvest": "1",
        "bNoHurry": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "100"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "UNIT_WORKER",
        "Name": "TEXT_UNIT_WORKER",
        "zIconName": "UNIT_WORKER",
        "zPortraitName": "UNIT_WORKER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "WORKER",
        "zAudioMovementType": "WORKER",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": [
            "FORMATION_WORKER",
            "FORMATION_WORKER_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_WORKER",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "50",
        "iProductionPer": "10",
        "iStartCity": "1",
        "iStartDeveloped": "1",
        "bTerritoryWater": "1",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bHarvest": "1",
        "bBuild": "1",
        "bBuyTile": "1",
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "2"
          }
        },
        "aeRemoveVegetation": {
          "zValue": [
            "VEGETATION_TREES",
            "VEGETATION_TREES_CUT",
            "VEGETATION_SCRUB",
            "VEGETATION_SCRUB_CUT"
          ]
        }
      },
      {
        "zType": "UNIT_SCOUT",
        "Name": "TEXT_UNIT_SCOUT",
        "zIconName": "UNIT_SCOUT",
        "zPortraitName": "UNIT_SCOUT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SCOUT",
        "zAudioMovementType": "SCOUT",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_SCOUT"
        },
        "UnitCycle": "UNITCYCLE_SCOUT",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "3",
        "iVision": "4",
        "iReveal": "1",
        "iFatigue": "4",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "50",
        "iProductionPer": "10",
        "iStartCity": "1",
        "bReveal": "1",
        "bIgnoreZOC": "1",
        "bHarvest": "1",
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_STEALTH"
        }
      },
      {
        "zType": "UNIT_CARAVAN",
        "Name": "TEXT_UNIT_CARAVAN",
        "zIconName": "UNIT_CARAVAN",
        "zPortraitName": "UNIT_CARAVAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "GENERIC",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_CARAVAN"
        },
        "UnitCycle": "UNITCYCLE_CARAVAN",
        "EffectCityPrereq": "EFFECTCITY_UNIT_CARAVAN",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "2",
        "iVision": "2",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "10",
        "bAmphibious": "1",
        "bReveal": "1",
        "bTrade": "1"
      },
      {
        "zType": "UNIT_ZOROASTRIANISM_DISCIPLE",
        "Name": "TEXT_UNIT_RELIGION_DISCIPLE",
        "zIconName": "RELIGION_ZOROASTRIANISM",
        "zPortraitName": "UNIT_ZOROASTRIANISM_DISCIPLE",
        "zBackgroundName": "DiscipleUnitAttackBackground",
        "zAudioSelectionType": "DISCIPLE",
        "zAudioMovementType": "DISCIPLE",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_ZOROASTRIANISM_DISCIPLE"
        },
        "UnitCycle": "UNITCYCLE_DISCIPLE",
        "RequiresReligion": "RELIGION_ZOROASTRIANISM",
        "SpreadReligion": "RELIGION_ZOROASTRIANISM",
        "BuildReligion": "RELIGION_ZOROASTRIANISM",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "3",
        "iVision": "2",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "10",
        "bBuyTile": "1",
        "bTheology": "1",
        "bReligious": "1"
      },
      {
        "zType": "UNIT_JUDAISM_DISCIPLE",
        "Name": "TEXT_UNIT_RELIGION_DISCIPLE",
        "zIconName": "RELIGION_JUDAISM",
        "zPortraitName": "UNIT_JUDAISM_DISCIPLE",
        "zBackgroundName": "DiscipleUnitAttackBackground",
        "zAudioSelectionType": "DISCIPLE",
        "zAudioMovementType": "DISCIPLE",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_JUDAISM_DISCIPLE"
        },
        "UnitCycle": "UNITCYCLE_DISCIPLE",
        "RequiresReligion": "RELIGION_JUDAISM",
        "SpreadReligion": "RELIGION_JUDAISM",
        "BuildReligion": "RELIGION_JUDAISM",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "3",
        "iVision": "2",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "10",
        "bBuyTile": "1",
        "bTheology": "1",
        "bReligious": "1"
      },
      {
        "zType": "UNIT_CHRISTIANITY_DISCIPLE",
        "Name": "TEXT_UNIT_RELIGION_DISCIPLE",
        "zIconName": "RELIGION_CHRISTIANITY",
        "zPortraitName": "UNIT_CHRISTIANITY_DISCIPLE",
        "zBackgroundName": "DiscipleUnitAttackBackground",
        "zAudioSelectionType": "DISCIPLE",
        "zAudioMovementType": "DISCIPLE",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_CHRISTIANITY_DISCIPLE"
        },
        "UnitCycle": "UNITCYCLE_DISCIPLE",
        "RequiresReligion": "RELIGION_CHRISTIANITY",
        "SpreadReligion": "RELIGION_CHRISTIANITY",
        "BuildReligion": "RELIGION_CHRISTIANITY",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "3",
        "iVision": "2",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "10",
        "bBuyTile": "1",
        "bTheology": "1",
        "bReligious": "1"
      },
      {
        "zType": "UNIT_MANICHAEISM_DISCIPLE",
        "Name": "TEXT_UNIT_RELIGION_DISCIPLE",
        "zIconName": "RELIGION_MANICHAEISM",
        "zPortraitName": "UNIT_MANICHAEISM_DISCIPLE",
        "zBackgroundName": "DiscipleUnitAttackBackground",
        "zAudioSelectionType": "DISCIPLE",
        "zAudioMovementType": "DISCIPLE",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_MANICHAEISM_DISCIPLE"
        },
        "UnitCycle": "UNITCYCLE_DISCIPLE",
        "RequiresReligion": "RELIGION_MANICHAEISM",
        "SpreadReligion": "RELIGION_MANICHAEISM",
        "BuildReligion": "RELIGION_MANICHAEISM",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "3",
        "iVision": "2",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "10",
        "bBuyTile": "1",
        "bTheology": "1",
        "bReligious": "1"
      },
      {
        "zType": "UNIT_MILITIA",
        "Name": "TEXT_UNIT_MILITIA",
        "zIconName": "UNIT_MILITIA",
        "zPortraitName": "UNIT_MILITIA",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITIA",
        "zAudioMovementType": "INFANTRY_LEATHER_LIGHT",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_MILITIA"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "60",
        "iProductionPer": "2",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "1"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_MANOR"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_LEVY"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_LEVY",
        "Name": "TEXT_UNIT_LEVY",
        "zIconName": "UNIT_LEVY",
        "zPortraitName": "UNIT_LEVY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITIA",
        "zAudioMovementType": "INFANTRY_LEATHER_LIGHT",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_LEVY"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_MANOR",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "50",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "2",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "50"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "2"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_WARRIOR",
        "Name": "TEXT_UNIT_WARRIOR",
        "zIconName": "UNIT_WARRIOR",
        "zPortraitName": "UNIT_WARRIOR",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SWORD",
        "zAudioMovementType": "INFANTRY_METAL_LIGHT",
        "zAudioAttackType": "MELEE_SWORD",
        "aeFormations": {
          "zValue": "FORMATION_WARRIOR"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_IRONWORKING",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "40",
        "iHPMax": "20",
        "iProduction": "60",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "50"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "1"
          }
        },
        "aeObsoleteTech": {
          "zValue": [
            "TECH_BATTLELINE",
            "TECH_PHALANX"
          ]
        },
        "aeUpgradeUnit": {
          "zValue": [
            "UNIT_MACEMAN",
            "UNIT_SPEARMAN"
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_MACEMAN",
        "Name": "TEXT_UNIT_MACEMAN",
        "zIconName": "UNIT_MACEMAN",
        "zPortraitName": "UNIT_MACEMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MACE",
        "zAudioMovementType": "INFANTRY_METAL_HEAVY",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_MACEMAN"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_BATTLELINE",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "50",
        "iHPMax": "20",
        "iProduction": "80",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "100"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "2"
          }
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_ARC",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_ARC",
            "iValue": "25"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_UNIT_TACTICS"
        },
        "aeUpgradeUnit": {
          "zValue": [
            "UNIT_AXEMAN",
            "UNIT_SWORDSMAN"
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_SPEARMAN",
        "Name": "TEXT_UNIT_SPEARMAN",
        "zIconName": "UNIT_SPEARMAN",
        "zPortraitName": "UNIT_SPEARMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SPEAR",
        "zAudioMovementType": "INFANTRY_METAL_LIGHT",
        "zAudioAttackType": "MELEE_SPEAR",
        "aeFormations": {
          "zValue": "FORMATION_SPEARMAN"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_PHALANX",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "50",
        "iHPMax": "20",
        "iProduction": "80",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "2"
          }
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "25"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_SARISSA"
        },
        "aeUpgradeUnit": {
          "zValue": [
            "UNIT_PIKEMAN",
            "UNIT_SWORDSMAN"
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_AXEMAN",
        "Name": "TEXT_UNIT_AXEMAN",
        "zIconName": "UNIT_AXEMAN",
        "zPortraitName": "UNIT_AXEMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "AXE",
        "zAudioMovementType": "INFANTRY_METAL_HEAVY",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_AXEMAN"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_STEEL",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "25"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "150"
          }
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "3"
            }
          ]
        },
        "aeObsoleteTech": {
          "zValue": "TECH_UNIT_TACTICS"
        },
        "aeUpgradeUnit": {
          "zValue": [
            "UNIT_PIKEMAN",
            "UNIT_SWORDSMAN"
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_SWORDSMAN",
        "Name": "TEXT_UNIT_SWORDSMAN",
        "zIconName": "UNIT_SWORDSMAN",
        "zPortraitName": "UNIT_SWORDSMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SWORD",
        "zAudioMovementType": "INFANTRY_METAL_HEAVY",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_SWORDSMAN"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_UNIT_TACTICS",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "80",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "200"
          }
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_ARC",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_ARC",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_PIKEMAN",
        "Name": "TEXT_UNIT_PIKEMAN",
        "zIconName": "UNIT_PIKEMAN",
        "zPortraitName": "UNIT_PIKEMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SPEAR",
        "zAudioMovementType": "INFANTRY_METAL_LIGHT",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_PIKEMAN"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_SARISSA",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "80",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "100"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_SLINGER",
        "Name": "TEXT_UNIT_SLINGER",
        "zIconName": "UNIT_SLINGER",
        "zPortraitName": "UNIT_SLINGER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SLINGER",
        "zAudioMovementType": "SLINGER",
        "zAudioAttackType": "RANGED_SLINGER",
        "aeFormations": {
          "zValue": "FORMATION_SLINGER"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "TechPrereq": "TECH_TRAPPING",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "40",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "60",
        "iStartCityAI": "1",
        "fAttackDuration": "4",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "50"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "1"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_STRATEGY"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_ARCHER"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_ARCHER",
        "Name": "TEXT_UNIT_ARCHER",
        "zIconName": "UNIT_ARCHER",
        "zPortraitName": "UNIT_ARCHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "BOW",
        "zAudioMovementType": "BOW",
        "zAudioAttackType": "RANGED_BOW",
        "aeFormations": {
          "zValue": "FORMATION_ARCHER"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "TechPrereq": "TECH_COMPOSITE_BOW",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "50",
        "iRangeMax": "3",
        "iHPMax": "20",
        "iProduction": "80",
        "fAttackDuration": "1",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "100"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "2"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_BODKIN_ARROW"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_LONGBOWMAN"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_LONGBOWMAN",
        "Name": "TEXT_UNIT_LONGBOWMAN",
        "zIconName": "UNIT_LONGBOWMAN",
        "zPortraitName": "UNIT_LONGBOWMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "LONGBOW",
        "zAudioMovementType": "BOW",
        "zAudioAttackType": "RANGED_BOW",
        "aeFormations": {
          "zValue": "FORMATION_LONGBOWMAN"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "TechPrereq": "TECH_BODKIN_ARROW",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "80",
        "iRangeMax": "3",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "150"
          }
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_CROSSBOWMAN",
        "Name": "TEXT_UNIT_CROSSBOWMAN",
        "zIconName": "UNIT_CROSSBOWMAN",
        "zPortraitName": "UNIT_CROSSBOWMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CROSSBOW",
        "zAudioMovementType": "INFANTRY_METAL_LIGHT",
        "zAudioAttackType": "RANGED_CROSSBOW",
        "aeFormations": {
          "zValue": "FORMATION_CROSSBOWMAN"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "TechPrereq": "TECH_STRATEGY",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "80",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_MELEE",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "3"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_POLYBOLOS",
        "Name": "TEXT_UNIT_POLYBOLOS",
        "zIconName": "UNIT_POLYBOLOS",
        "zPortraitName": "UNIT_POLYBOLOS",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "POLYBOLOS",
        "zAudioMovementType": "SIEGE_METAL",
        "zAudioAttackType": "SIEGE_POLYBOLOS",
        "aeFormations": {
          "zValue": "FORMATION_POLYBOLOS"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "TechPrereq": "TECH_WINDLASS",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "100",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_ARC",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_ARC",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_CHARIOT",
        "Name": "TEXT_UNIT_CHARIOT",
        "zIconName": "UNIT_CHARIOT",
        "zPortraitName": "UNIT_CHARIOT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CHARIOT",
        "zAudioMovementType": "CHARIOT",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_CHARIOT"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "TechPrereq": "TECH_SPOKED_WHEEL",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "50",
        "iHPMax": "20",
        "iProduction": "80",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "2"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_STIRRUPS"
        },
        "aeUpgradeUnit": {
          "zValue": [
            "UNIT_HORSEMAN",
            "UNIT_HORSE_ARCHER"
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ROUT"
        }
      },
      {
        "zType": "UNIT_HORSEMAN",
        "Name": "TEXT_UNIT_HORSEMAN",
        "zIconName": "UNIT_HORSEMAN",
        "zPortraitName": "UNIT_HORSEMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "HORSEMAN",
        "zAudioMovementType": "HORSE",
        "zAudioAttackType": "ANIMAL_HORSE_LANCER",
        "aeFormations": {
          "zValue": "FORMATION_HORSEMAN"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "TechPrereq": "TECH_STIRRUPS",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifierAttack": {
          "Pair": {
            "zIndex": "UNITTRAIT_SIEGE",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "3"
            }
          ]
        },
        "aeObsoleteTech": {
          "zValue": "TECH_BARDING"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_CATAPHRACT"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ROUT"
        }
      },
      {
        "zType": "UNIT_CATAPHRACT",
        "Name": "TEXT_UNIT_CATAPHRACT",
        "zIconName": "UNIT_CATAPHRACT",
        "zPortraitName": "UNIT_CATAPHRACT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CATAPHRACT",
        "zAudioMovementType": "CATAPHRACT",
        "zAudioAttackType": "ANIMAL_HORSE_LANCER",
        "aeFormations": {
          "zValue": "FORMATION_CATAPHRACT"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "TechPrereq": "TECH_BARDING",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "100",
        "iHPMax": "20",
        "iProduction": "160",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifierAttack": {
          "Pair": {
            "zIndex": "UNITTRAIT_SIEGE",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_CIRCLE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_CIRCLE",
            "iValue": "25"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ROUT"
        }
      },
      {
        "zType": "UNIT_HORSE_ARCHER",
        "Name": "TEXT_UNIT_HORSE_ARCHER",
        "zIconName": "UNIT_HORSE_ARCHER",
        "zPortraitName": "UNIT_HORSE_ARCHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "HORSEARCHER",
        "zAudioMovementType": "HORSE",
        "zAudioAttackType": "ANIMAL_HORSE_ARCHER",
        "aeFormations": {
          "zValue": "FORMATION_HORSE_ARCHER"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "TechPrereq": "TECH_MOUNTED_ARCHERY",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_CAMEL_ARCHER",
        "Name": "TEXT_UNIT_CAMEL_ARCHER",
        "zIconName": "UNIT_CAMEL_ARCHER",
        "zPortraitName": "UNIT_CAMEL_ARCHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CAMEL_ARCHER",
        "zAudioMovementType": "CAMEL_ARCHER",
        "zAudioAttackType": "ANIMAL_CAMEL_ARCHER",
        "aeFormations": {
          "zValue": "FORMATION_CAMEL_ARCHER"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "TechPrereq": "TECH_MOUNTED_ARCHERY",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_CAMEL",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "4",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "80",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_CAMEL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_NOMAD"
        }
      },
      {
        "zType": "UNIT_WAR_ELEPHANT",
        "Name": "TEXT_UNIT_WAR_ELEPHANT",
        "zIconName": "UNIT_WAR_ELEPHANT",
        "zPortraitName": "UNIT_WAR_ELEPHANT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "WAR_ELEPHANT",
        "zAudioMovementType": "WAR_ELEPHANT",
        "zAudioAttackType": "ANIMAL_WAR_ELEPHANT",
        "aeFormations": {
          "zValue": "FORMATION_WAR_ELEPHANT"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_ELEPHANT",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_ELEPHANT"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ROUT"
        }
      },
      {
        "zType": "UNIT_BALLISTA",
        "Name": "TEXT_UNIT_BALLISTA",
        "zIconName": "UNIT_BALLISTA",
        "zPortraitName": "UNIT_BALLISTA",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "BALLISTA",
        "zAudioMovementType": "SIEGE_METAL",
        "zAudioAttackType": "SIEGE_BALLISTA",
        "aeFormations": {
          "zValue": "FORMATION_BALLISTA"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_SIEGE",
        "TechPrereq": "TECH_TORSION",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "1",
        "iVision": "2",
        "iFatigue": "3",
        "iStrength": "50",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifierAttack": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "100"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "3"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "2"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_SIEGE"
          ]
        }
      },
      {
        "zType": "UNIT_CATAPULT",
        "Name": "TEXT_UNIT_CATAPULT",
        "zIconName": "UNIT_CATAPULT",
        "zPortraitName": "UNIT_CATAPULT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CATAPULT",
        "zAudioMovementType": "SIEGE_WOOD_LARGE",
        "zAudioAttackType": "SIEGE_CATAPULT",
        "aeFormations": {
          "zValue": "FORMATION_CATAPULT"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_SIEGE",
        "TechPrereq": "TECH_MACHINERY",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "1",
        "iVision": "2",
        "iFatigue": "3",
        "iStrength": "60",
        "iRangeMin": "2",
        "iRangeMax": "4",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bUnlimber": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "3"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "25"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_VAULTING"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_ONAGER"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_SIEGE"
          ]
        }
      },
      {
        "zType": "UNIT_ONAGER",
        "Name": "TEXT_UNIT_ONAGER",
        "zIconName": "UNIT_ONAGER",
        "zPortraitName": "UNIT_ONAGER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ONAGER",
        "zAudioMovementType": "SIEGE_WOOD_LARGE",
        "zAudioAttackType": "SIEGE_ONAGER",
        "aeFormations": {
          "zValue": "FORMATION_ONAGER"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_SIEGE",
        "TechPrereq": "TECH_VAULTING",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "1",
        "iVision": "2",
        "iFatigue": "3",
        "iStrength": "80",
        "iRangeMin": "2",
        "iRangeMax": "5",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bUnlimber": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_SIEGE"
          ]
        }
      },
      {
        "zType": "UNIT_BIREME",
        "Name": "TEXT_UNIT_BIREME",
        "zIconName": "UNIT_BIREME",
        "zPortraitName": "UNIT_BIREME",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "NAVAL",
        "zAudioMovementType": "NAVAL",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_BIREME"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_WATER",
        "TechPrereq": "TECH_NAVIGATION",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "4",
        "iReveal": "1",
        "iFatigue": "3",
        "iWaterControl": "3",
        "iStrength": "40",
        "iHPMax": "20",
        "iProduction": "80",
        "fAttackDuration": "2",
        "bWater": "1",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bAnchor": "1",
        "bPromote": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "2"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_CARTOGRAPHY"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_TRIREME"
        },
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_SHIP"
        }
      },
      {
        "zType": "UNIT_TRIREME",
        "Name": "TEXT_UNIT_TRIREME",
        "zIconName": "UNIT_TRIREME",
        "zPortraitName": "UNIT_TRIREME",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "NAVAL",
        "zAudioMovementType": "NAVAL",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_TRIREME"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_WATER",
        "TechPrereq": "TECH_CARTOGRAPHY",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "4",
        "iVision": "5",
        "iReveal": "1",
        "iFatigue": "3",
        "iWaterControl": "4",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": "2",
        "bWater": "1",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bAnchor": "1",
        "bPromote": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "3"
            }
          ]
        },
        "aeObsoleteTech": {
          "zValue": "TECH_LATEEN_SAIL"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_DROMON"
        },
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_SHIP"
        }
      },
      {
        "zType": "UNIT_DROMON",
        "Name": "TEXT_UNIT_DROMON",
        "zIconName": "UNIT_DROMON",
        "zPortraitName": "UNIT_DROMON",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "NAVAL",
        "zAudioMovementType": "NAVAL",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_DROMON"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_WATER",
        "TechPrereq": "TECH_LATEEN_SAIL",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "5",
        "iVision": "6",
        "iReveal": "1",
        "iFatigue": "3",
        "iWaterControl": "5",
        "iStrength": "80",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2",
        "bWater": "1",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bAnchor": "1",
        "bPromote": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "150"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "4"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_SHIP"
        }
      },
      {
        "zType": "UNIT_BATTERING_RAM",
        "Name": "TEXT_UNIT_BATTERING_RAM",
        "zIconName": "UNIT_BATTERING_RAM",
        "zPortraitName": "UNIT_BATTERING_RAM",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "BATTERING_RAM",
        "zAudioMovementType": "SIEGE_WOOD_LARGE",
        "zAudioAttackType": "SIEGE_BATTERING_RAM",
        "aeFormations": {
          "zValue": "FORMATION_BATTERING_RAM"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_SIEGE",
        "NationPrereq": "NATION_ASSYRIA",
        "CulturePrereq": "CULTURE_STRONG",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "1",
        "iVision": "2",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "80",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifierDefense": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "200"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "2"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_SIEGE_TOWER"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_SIEGE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ASSAULT"
        }
      },
      {
        "zType": "UNIT_SIEGE_TOWER",
        "Name": "TEXT_UNIT_SIEGE_TOWER",
        "zIconName": "UNIT_SIEGE_TOWER",
        "zPortraitName": "UNIT_SIEGE_TOWER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SIEGE_TOWER",
        "zAudioMovementType": "SIEGE_WOOD_LARGE",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_SIEGE_TOWER"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_SIEGE",
        "NationPrereq": "NATION_ASSYRIA",
        "CulturePrereq": "CULTURE_LEGENDARY",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "1",
        "iVision": "2",
        "iFatigue": "3",
        "iStrength": "40",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifierDefense": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "200"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_SIEGE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ASSAULT"
        }
      },
      {
        "zType": "UNIT_AKKADIAN_ARCHER",
        "Name": "TEXT_UNIT_AKKADIAN_ARCHER",
        "zIconName": "UNIT_AKKADIAN_ARCHER",
        "zPortraitName": "UNIT_AKKADIAN_ARCHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "BOW",
        "zAudioMovementType": "BOW",
        "zAudioAttackType": "RANGED_BOW",
        "aeFormations": {
          "zValue": "FORMATION_AKKADIAN_ARCHER"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "NationPrereq": "NATION_BABYLONIA",
        "CulturePrereq": "CULTURE_STRONG",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "60",
        "iRangeMax": "3",
        "iHPMax": "20",
        "iProduction": "80",
        "fAttackDuration": "1",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "100"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "2"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_CIMMERIAN_ARCHER"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_CIMMERIAN_ARCHER",
        "Name": "TEXT_UNIT_CIMMERIAN_ARCHER",
        "zIconName": "UNIT_CIMMERIAN_ARCHER",
        "zPortraitName": "UNIT_CIMMERIAN_ARCHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "BOW",
        "zAudioMovementType": "BOW",
        "zAudioAttackType": "RANGED_BOW",
        "aeFormations": {
          "zValue": "FORMATION_CIMMERIAN_ARCHER"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "NationPrereq": "NATION_BABYLONIA",
        "CulturePrereq": "CULTURE_LEGENDARY",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "80",
        "iRangeMax": "4",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "150"
          }
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_AFRICAN_ELEPHANT",
        "Name": "TEXT_UNIT_AFRICAN_ELEPHANT",
        "zIconName": "UNIT_AFRICAN_ELEPHANT",
        "zPortraitName": "UNIT_AFRICAN_ELEPHANT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_AFRICAN_ELEPHANT"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "NationPrereq": "NATION_CARTHAGE",
        "CulturePrereq": "CULTURE_STRONG",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_ELEPHANT",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "140",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "3"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_CIRCLE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_CIRCLE",
            "iValue": "25"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_TURRETED_ELEPHANT"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_ELEPHANT"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ROUT"
        }
      },
      {
        "zType": "UNIT_TURRETED_ELEPHANT",
        "Name": "TEXT_UNIT_TURRETED_ELEPHANT",
        "zIconName": "UNIT_TURRETED_ELEPHANT",
        "zPortraitName": "UNIT_TURRETED_ELEPHANT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_TURRETED_ELEPHANT"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "NationPrereq": "NATION_CARTHAGE",
        "CulturePrereq": "CULTURE_LEGENDARY",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_ELEPHANT",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "80",
        "iHPMax": "20",
        "iProduction": "160",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_CIRCLE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_CIRCLE",
            "iValue": "25"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_ELEPHANT"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ROUT"
        }
      },
      {
        "zType": "UNIT_LIGHT_CHARIOT",
        "Name": "TEXT_UNIT_LIGHT_CHARIOT",
        "zIconName": "UNIT_LIGHT_CHARIOT",
        "zPortraitName": "UNIT_LIGHT_CHARIOT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_LIGHT_CHARIOT"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "NationPrereq": "NATION_EGYPT",
        "CulturePrereq": "CULTURE_STRONG",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "4",
        "iVision": "6",
        "iFatigue": "3",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "80",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "2"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_KUSHITE_CAVALRY"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_KUSHITE_CAVALRY",
        "Name": "TEXT_UNIT_KUSHITE_CAVALRY",
        "zIconName": "UNIT_KUSHITE_CAVALRY",
        "zPortraitName": "UNIT_KUSHITE_CAVALRY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_KUSHITE_CAVALRY"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "NationPrereq": "NATION_EGYPT",
        "CulturePrereq": "CULTURE_LEGENDARY",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "4",
        "iVision": "6",
        "iFatigue": "3",
        "iStrength": "70",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_HOPLITE",
        "Name": "TEXT_UNIT_HOPLITE",
        "zIconName": "UNIT_HOPLITE",
        "zPortraitName": "UNIT_HOPLITE",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_HOPLITE"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "NationPrereq": "NATION_GREECE",
        "CulturePrereq": "CULTURE_STRONG",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "2"
          }
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "25"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_PHALANGITE"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_FORMATION"
        }
      },
      {
        "zType": "UNIT_PHALANGITE",
        "Name": "TEXT_UNIT_PHALANGITE",
        "zIconName": "UNIT_PHALANGITE",
        "zPortraitName": "UNIT_PHALANGITE",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_PHALANGITE"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "NationPrereq": "NATION_GREECE",
        "CulturePrereq": "CULTURE_LEGENDARY",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "80",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "100"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_FORMATION"
        }
      },
      {
        "zType": "UNIT_PALTON_CAVALRY",
        "Name": "TEXT_UNIT_PALTON_CAVALRY",
        "zIconName": "UNIT_PALTON_CAVALRY",
        "zPortraitName": "UNIT_PALTON_CAVALRY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_PALTON_CAVALRY"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "NationPrereq": "NATION_PERSIA",
        "CulturePrereq": "CULTURE_STRONG",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "2"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_CATAPHRACT_ARCHER"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_CATAPHRACT_ARCHER",
        "Name": "TEXT_UNIT_CATAPHRACT_ARCHER",
        "zIconName": "UNIT_CATAPHRACT_ARCHER",
        "zPortraitName": "UNIT_CATAPHRACT_ARCHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_CATAPHRACT_ARCHER"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "NationPrereq": "NATION_PERSIA",
        "CulturePrereq": "CULTURE_LEGENDARY",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "80",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "4"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_HASTATUS",
        "Name": "TEXT_UNIT_HASTATUS",
        "zIconName": "UNIT_HASTATUS",
        "zPortraitName": "UNIT_HASTATUS",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_HASTATUS"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "NationPrereq": "NATION_ROME",
        "CulturePrereq": "CULTURE_STRONG",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "70",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bTestudo": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "150"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "2"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_LEGIONARY"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_LEGIONARY",
        "Name": "TEXT_UNIT_LEGIONARY",
        "zIconName": "UNIT_LEGIONARY",
        "zPortraitName": "UNIT_LEGIONARY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "aeFormations": {
          "zValue": "FORMATION_LEGIONARY"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "NationPrereq": "NATION_ROME",
        "CulturePrereq": "CULTURE_LEGENDARY",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "100",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideConsumption": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bTestudo": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "200"
          }
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "4"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_RAIDER_1",
        "Name": "TEXT_UNIT_RAIDER_1",
        "zIconName": "UNIT_RAIDER",
        "zPortraitName": "UNIT_RAIDER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_TRIBE",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_RAIDERS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_RAIDER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_RAIDER_NONE",
            "FORMATION_RAIDER_TRIBE",
            "FORMATION_RAIDER_RAIDER",
            "FORMATION_RAIDER_GAULS",
            "FORMATION_RAIDER_VANDALS",
            "FORMATION_RAIDER_DANES",
            "FORMATION_RAIDER_THRACIANS"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "30",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUpgradeUnit": {
          "zValue": "UNIT_RAIDER_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_SKIRMISHER_1",
        "Name": "TEXT_UNIT_SKIRMISHER_1",
        "zIconName": "UNIT_SKIRMISHER",
        "zPortraitName": "UNIT_SKIRMISHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_SKIRMISHER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_SKIRMISHER_NONE",
            "FORMATION_SKIRMISHER_TRIBE",
            "FORMATION_SKIRMISHER_RAIDER",
            "FORMATION_SKIRMISHER_GAULS",
            "FORMATION_SKIRMISHER_VANDALS",
            "FORMATION_SKIRMISHER_DANES",
            "FORMATION_SKIRMISHER_THRACIANS"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "30",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUpgradeUnit": {
          "zValue": "UNIT_SKIRMISHER_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_NOMAD_RAIDER_1",
        "Name": "TEXT_UNIT_NOMAD_RAIDER_1",
        "zIconName": "UNIT_NOMAD_RAIDER",
        "zPortraitName": "UNIT_NOMAD_RAIDER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_NOMAD_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_NOMAD_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_NOMAD_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_NOMAD_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_NOMAD_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_NOMAD_RAIDER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_NOMAD_RAIDER_TRIBE",
            "FORMATION_NOMAD_RAIDER_RAIDER",
            "FORMATION_NOMAD_RAIDER_SCYTHIANS",
            "FORMATION_NOMAD_RAIDER_NUMIDIANS"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "30",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUpgradeUnit": {
          "zValue": "UNIT_NOMAD_RAIDER_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_NOMAD_SKIRMISHER_1",
        "Name": "TEXT_UNIT_NOMAD_SKIRMISHER_1",
        "zIconName": "UNIT_NOMAD_SKIRMISHER",
        "zPortraitName": "UNIT_NOMAD_SKIRMISHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_NOMAD_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_NOMAD_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_NOMAD_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_NOMAD_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_NOMAD_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_NOMAD_SKIRMISHER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_NOMAD_SKIRMISHER_TRIBE",
            "FORMATION_NOMAD_SKIRMISHER_RAIDER",
            "FORMATION_NOMAD_SKIRMISHER_SCYTHIANS",
            "FORMATION_NOMAD_SKIRMISHER_NUMIDIANS"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "30",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUpgradeUnit": {
          "zValue": "UNIT_NOMAD_SKIRMISHER_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_RAIDER_2",
        "Name": "TEXT_UNIT_RAIDER_2",
        "zIconName": "UNIT_ELITE_RAIDER",
        "zPortraitName": "UNIT_ELITE_RAIDER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_TRIBE",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_RAIDERS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_RAIDER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_RAIDER_TRIBE",
            "FORMATION_ELITE_RAIDER_RAIDER",
            "FORMATION_ELITE_RAIDER_GAULS",
            "FORMATION_ELITE_RAIDER_VANDALS",
            "FORMATION_ELITE_RAIDER_DANES",
            "FORMATION_ELITE_RAIDER_THRACIANS"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "40",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_SKIRMISHER_2",
        "Name": "TEXT_UNIT_SKIRMISHER_2",
        "zIconName": "UNIT_ELITE_SKIRMISHER",
        "zPortraitName": "UNIT_ELITE_SKIRMISHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_SKIRMISHER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_SKIRMISHER_TRIBE",
            "FORMATION_ELITE_SKIRMISHER_RAIDER",
            "FORMATION_ELITE_SKIRMISHER_GAULS",
            "FORMATION_ELITE_SKIRMISHER_VANDALS",
            "FORMATION_ELITE_SKIRMISHER_DANES",
            "FORMATION_ELITE_SKIRMISHER_THRACIANS"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "40",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_NOMAD_RAIDER_2",
        "Name": "TEXT_UNIT_NOMAD_RAIDER_2",
        "zIconName": "UNIT_ELITE_NOMAD_RAIDER",
        "zPortraitName": "UNIT_ELITE_NOMAD_RAIDER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_NOMAD_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_NOMAD_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_NOMAD_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_NOMAD_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_NOMAD_RAIDER"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_NOMAD_RAIDER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_NOMAD_RAIDER_TRIBE",
            "FORMATION_ELITE_NOMAD_RAIDER_RAIDER",
            "FORMATION_ELITE_NOMAD_RAIDER_SCYTHIANS",
            "FORMATION_ELITE_NOMAD_RAIDER_NUMIDIANS"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "40",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUpgradeUnit": {
          "zValue": "UNIT_NOMAD_WARLORD_1"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_NOMAD_SKIRMISHER_2",
        "Name": "TEXT_UNIT_NOMAD_SKIRMISHER_2",
        "zIconName": "UNIT_ELITE_NOMAD_SKIRMISHER",
        "zPortraitName": "UNIT_ELITE_NOMAD_SKIRMISHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_NOMAD_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_NOMAD_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_NOMAD_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_NOMAD_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_NOMAD_SKIRMISHER"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_NOMAD_SKIRMISHER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_NOMAD_SKIRMISHER_TRIBE",
            "FORMATION_ELITE_NOMAD_SKIRMISHER_RAIDER",
            "FORMATION_ELITE_NOMAD_SKIRMISHER_SCYTHIANS",
            "FORMATION_ELITE_NOMAD_SKIRMISHER_NUMIDIANS"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "40",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_WARLORD_1",
        "Name": "TEXT_UNIT_WARLORD_1",
        "zIconName": "UNIT_WARLORD",
        "zPortraitName": "UNIT_WARLORD",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_WARLORD"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_WARLORD",
            "FORMATION_WARLORD_VANDALS",
            "FORMATION_WARLORD_THRACIANS"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "50",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUpgradeUnit": {
          "zValue": "UNIT_WARLORD_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_JAVELINEER_1",
        "Name": "TEXT_UNIT_JAVELINEER_1",
        "zIconName": "UNIT_JAVELINEER",
        "zPortraitName": "UNIT_JAVELINEER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_JAVELINEER"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_JAVELINEER"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_JAVELINEER"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_JAVELINEER"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_JAVELINEER"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_JAVELINEER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_JAVELINEER",
            "FORMATION_JAVELINEER_GAULS",
            "FORMATION_JAVELINEER_DANES"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUpgradeUnit": {
          "zValue": "UNIT_JAVELINEER_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_NOMAD_WARLORD_1",
        "Name": "TEXT_UNIT_NOMAD_WARLORD_1",
        "zIconName": "UNIT_NOMAD_WARLORD",
        "zPortraitName": "UNIT_NOMAD_WARLORD",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_NOMAD_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_NOMAD_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_NOMAD_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_NOMAD_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_NOMAD_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_NOMAD_WARLORD"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_NOMAD_WARLORD",
            "FORMATION_NOMAD_WARLORD_SCYTHIANS",
            "FORMATION_NOMAD_WARLORD_NUMIDIANS"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "50",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUpgradeUnit": {
          "zValue": "UNIT_NOMAD_WARLORD_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_GAESATA_1",
        "Name": "TEXT_UNIT_GAESATA_1",
        "zIconName": "UNIT_GAESATA",
        "zPortraitName": "UNIT_GAESATA",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_GAESATA"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_GAESATA"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_GAESATA"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_GAESATA"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_GAESATA"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_GAESATA"
            }
          ]
        },
        "aeFormations": {
          "zValue": "FORMATION_GAESATA_GAULS"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "50",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "50"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_GAESATA_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_RANGER"
        }
      },
      {
        "zType": "UNIT_HUSCARL_1",
        "Name": "TEXT_UNIT_HUSCARL_1",
        "zIconName": "UNIT_HUSCARL",
        "zPortraitName": "UNIT_HUSCARL",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_HUSCARL"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_HUSCARL"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_HUSCARL"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_HUSCARL"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_HUSCARL"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_HUSCARL"
            }
          ]
        },
        "aeFormations": {
          "zValue": "FORMATION_HUSCARL_DANES"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "50",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_ARC",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_ARC",
            "iValue": "50"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_HUSCARL_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_COLD"
        }
      },
      {
        "zType": "UNIT_CLUBTHROWER_1",
        "Name": "TEXT_UNIT_CLUBTHROWER_1",
        "zIconName": "UNIT_CLUBTHROWER",
        "zPortraitName": "UNIT_CLUBTHROWER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_CLUBTHROWER"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_CLUBTHROWER"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_CLUBTHROWER"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_CLUBTHROWER"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_CLUBTHROWER"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_CLUBTHROWER"
            }
          ]
        },
        "aeFormations": {
          "zValue": "FORMATION_CLUBTHROWER_VANDALS"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUpgradeUnit": {
          "zValue": "UNIT_CLUBTHROWER_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_FIERCE"
        }
      },
      {
        "zType": "UNIT_PELTAST_1",
        "Name": "TEXT_UNIT_PELTAST_1",
        "zIconName": "UNIT_PELTAST",
        "zPortraitName": "UNIT_PELTAST",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_PELTAST"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_PELTAST"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_PELTAST"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_PELTAST"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_PELTAST"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_PELTAST"
            }
          ]
        },
        "aeFormations": {
          "zValue": "FORMATION_PELTAST_THRACIANS"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUpgradeUnit": {
          "zValue": "UNIT_PELTAST_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_HIGHLANDER"
        }
      },
      {
        "zType": "UNIT_AMAZON_CAVALRY_1",
        "Name": "TEXT_UNIT_AMAZON_CAVALRY_1",
        "zIconName": "UNIT_AMAZON_CAVALRY",
        "zPortraitName": "UNIT_AMAZON_CAVALRY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_AMAZON_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_AMAZON_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_AMAZON_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_AMAZON_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_AMAZON_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_AMAZON_CAVALRY"
            }
          ]
        },
        "aeFormations": {
          "zValue": "FORMATION_AMAZON_CAVALRY_SCYTHIANS"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUpgradeUnit": {
          "zValue": "UNIT_AMAZON_CAVALRY_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_NOMAD"
        }
      },
      {
        "zType": "UNIT_LIBYAN_CAVALRY_1",
        "Name": "TEXT_UNIT_LIBYAN_CAVALRY_1",
        "zIconName": "UNIT_LIBYAN_CAVALRY",
        "zPortraitName": "UNIT_LIBYAN_CAVALRY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_LIBYAN_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_LIBYAN_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_LIBYAN_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_LIBYAN_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_LIBYAN_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_LIBYAN_CAVALRY"
            }
          ]
        },
        "aeFormations": {
          "zValue": "FORMATION_LIBYAN_CAVALRY_NUMIDIANS"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUpgradeUnit": {
          "zValue": "UNIT_LIBYAN_CAVALRY_2"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_SHIELDBEARER"
        }
      },
      {
        "zType": "UNIT_WARLORD_2",
        "Name": "TEXT_UNIT_WARLORD_2",
        "zIconName": "UNIT_ELITE_WARLORD",
        "zPortraitName": "UNIT_ELITE_WARLORD",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_WARLORD"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_WARLORD",
            "FORMATION_ELITE_WARLORD_VANDALS",
            "FORMATION_ELITE_WARLORD_THRACIANS"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "60",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_JAVELINEER_2",
        "Name": "TEXT_UNIT_JAVELINEER_2",
        "zIconName": "UNIT_ELITE_JAVELINEER",
        "zPortraitName": "UNIT_ELITE_JAVELINEER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_JAVELINEER"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_JAVELINEER"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_JAVELINEER"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_JAVELINEER"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_JAVELINEER"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_JAVELINEER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_JAVELINEER",
            "FORMATION_ELITE_JAVELINEER_GAULS",
            "FORMATION_ELITE_JAVELINEER_DANES"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_NOMAD_WARLORD_2",
        "Name": "TEXT_UNIT_NOMAD_WARLORD_2",
        "zIconName": "UNIT_ELITE_NOMAD_WARLORD",
        "zPortraitName": "UNIT_ELITE_NOMAD_WARLORD",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_NOMAD_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_NOMAD_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_NOMAD_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_NOMAD_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_NOMAD_WARLORD"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_NOMAD_WARLORD"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_NOMAD_WARLORD",
            "FORMATION_ELITE_NOMAD_WARLORD_SCYTHIANS",
            "FORMATION_ELITE_NOMAD_WARLORD_NUMIDIANS"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "60",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_GAESATA_2",
        "Name": "TEXT_UNIT_GAESATA_2",
        "zIconName": "UNIT_ELITE_GAESATA",
        "zPortraitName": "UNIT_ELITE_GAESATA",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_GAESATA"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_GAESATA"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_GAESATA"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_GAESATA"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_GAESATA"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_GAESATA"
            }
          ]
        },
        "aeFormations": {
          "zValue": "FORMATION_ELITE_GAESATA_GAULS"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "60",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_FORWARD",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_RANGER"
        }
      },
      {
        "zType": "UNIT_HUSCARL_2",
        "Name": "TEXT_UNIT_HUSCARL_2",
        "zIconName": "UNIT_ELITE_HUSCARL",
        "zPortraitName": "UNIT_ELITE_HUSCARL",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_HUSCARL"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_HUSCARL"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_HUSCARL"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_HUSCARL"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_HUSCARL"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_HUSCARL"
            }
          ]
        },
        "aeFormations": {
          "zValue": "FORMATION_ELITE_HUSCARL_DANES"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "60",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bReveal": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_ARC",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_ARC",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_COLD"
        }
      },
      {
        "zType": "UNIT_CLUBTHROWER_2",
        "Name": "TEXT_UNIT_CLUBTHROWER_2",
        "zIconName": "UNIT_ELITE_CLUBTHROWER",
        "zPortraitName": "UNIT_ELITE_CLUBTHROWER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_CLUBTHROWER"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_CLUBTHROWER"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_CLUBTHROWER"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_CLUBTHROWER"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_CLUBTHROWER"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_CLUBTHROWER"
            }
          ]
        },
        "aeFormations": {
          "zValue": "FORMATION_ELITE_CLUBTHROWER_VANDALS"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_FIERCE"
        }
      },
      {
        "zType": "UNIT_PELTAST_2",
        "Name": "TEXT_UNIT_PELTAST_2",
        "zIconName": "UNIT_ELITE_PELTAST",
        "zPortraitName": "UNIT_ELITE_PELTAST",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_PELTAST"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_PELTAST"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_PELTAST"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_PELTAST"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_PELTAST"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_PELTAST"
            }
          ]
        },
        "aeFormations": {
          "zValue": "FORMATION_ELITE_PELTAST_THRACIANS"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "1",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_HIGHLANDER"
        }
      },
      {
        "zType": "UNIT_AMAZON_CAVALRY_2",
        "Name": "TEXT_UNIT_AMAZON_CAVALRY_2",
        "zIconName": "UNIT_ELITE_AMAZON_CAVALRY",
        "zPortraitName": "UNIT_ELITE_AMAZON_CAVALRY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_AMAZON_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_AMAZON_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_AMAZON_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_AMAZON_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_AMAZON_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_AMAZON_CAVALRY"
            }
          ]
        },
        "aeFormations": {
          "zValue": "FORMATION_ELITE_AMAZON_CAVALRY_SCYTHIANS"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_NOMAD"
        }
      },
      {
        "zType": "UNIT_LIBYAN_CAVALRY_2",
        "Name": "TEXT_UNIT_LIBYAN_CAVALRY_2",
        "zIconName": "UNIT_ELITE_LIBYAN_CAVALRY",
        "zPortraitName": "UNIT_ELITE_LIBYAN_CAVALRY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITARY",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "GENERIC",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "BARBARIAN_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_LIBYAN_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_LIBYAN_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_LIBYAN_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_LIBYAN_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_LIBYAN_CAVALRY"
            },
            {
              "zIndex": "BARBARIAN_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_LIBYAN_CAVALRY"
            }
          ]
        },
        "aeFormations": {
          "zValue": "FORMATION_ELITE_LIBYAN_CAVALRY_NUMIDIANS"
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": ".5",
        "bReveal": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_SHIELDBEARER"
        }
      }
    ]
  }
}
    export default data
    