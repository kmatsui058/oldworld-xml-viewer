
    const data: XmlTrait.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "zIconName": {
          
        },
        "iAdjectiveDie": {
          
        },
        "iNoFamilyDie": {
          
        },
        "iBarbDie": {
          
        },
        "iInjuryDie": {
          
        },
        "iAdultProb": {
          
        },
        "iDieProb": {
          
        },
        "iRemoveProb": {
          
        },
        "iOpinion": {
          
        },
        "iBirthModifier": {
          
        },
        "bArchetype": {
          
        },
        "bAdjective": {
          
        },
        "bUpgrade": {
          
        },
        "bNoEvents": {
          
        },
        "bNoMarry": {
          
        },
        "bNoBirth": {
          
        },
        "bNoHeir": {
          
        },
        "bNoJob": {
          
        },
        "bGovernorPrereq": {
          
        },
        "bGeneralPrereq": {
          
        },
        "bRemoveLeader": {
          
        },
        "LeaderEffectPlayer": {
          
        },
        "GovernorEffectCity": {
          
        },
        "GeneralEffectUnit": {
          
        },
        "LeaderEffectUnit": {
          
        },
        "Cognomen": {
          
        },
        "aiRating": {
          
        },
        "aiTraitProb": {
          
        },
        "aiMortalityDieProb": {
          
        },
        "aiDecadeProb": {
          
        },
        "abSkipDecade": {
          
        },
        "aeTraitInvalid": {
          
        },
        "aePositiveRating": {
          
        },
        "aeNegativeRating": {
          
        }
      },
      {
        "zType": "TRAIT_HERO_ARCHETYPE",
        "Name": "TEXT_TRAIT_HERO_ARCHETYPE",
        "zIconName": "TRAIT_HERO",
        "iNoFamilyDie": "1",
        "iBarbDie": "1",
        "bArchetype": "1",
        "bGeneralPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_HERO_ARCHETYPE",
        "GeneralEffectUnit": "EFFECTUNIT_HERO",
        "LeaderEffectUnit": "EFFECTUNIT_TRAIT_HERO_ARCHETYPE_LEADER",
        "Cognomen": "COGNOMEN_HERO",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "TRAIT_COMMANDER_ARCHETYPE",
        "Name": "TEXT_TRAIT_COMMANDER_ARCHETYPE",
        "zIconName": "TRAIT_COMMANDER",
        "iNoFamilyDie": "1",
        "iBarbDie": "1",
        "bArchetype": "1",
        "bGeneralPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_COMMANDER_ARCHETYPE",
        "Cognomen": "COGNOMEN_COMMANDER",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "2"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_TACTICIAN_ARCHETYPE",
        "Name": "TEXT_TRAIT_TACTICIAN_ARCHETYPE",
        "zIconName": "TRAIT_TACTICIAN",
        "iNoFamilyDie": "1",
        "iBarbDie": "1",
        "bArchetype": "1",
        "bGeneralPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_TACTICIAN_ARCHETYPE",
        "Cognomen": "COGNOMEN_TACTICIAN",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "2"
            },
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_ZEALOT_ARCHETYPE",
        "Name": "TEXT_TRAIT_ZEALOT_ARCHETYPE",
        "zIconName": "TRAIT_ZEALOT",
        "iNoFamilyDie": "1",
        "iBarbDie": "1",
        "bArchetype": "1",
        "bGeneralPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_ZEALOT_ARCHETYPE",
        "Cognomen": "COGNOMEN_ZEALOT",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "iValue": "4"
            },
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "-2"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_SCHEMER_ARCHETYPE",
        "Name": "TEXT_TRAIT_SCHEMER_ARCHETYPE",
        "zIconName": "TRAIT_SCHEMER",
        "iNoFamilyDie": "1",
        "iBarbDie": "1",
        "bArchetype": "1",
        "bGeneralPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_SCHEMER_ARCHETYPE",
        "Cognomen": "COGNOMEN_SCHEMER",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "4"
            },
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "-2"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_ORATOR_ARCHETYPE",
        "Name": "TEXT_TRAIT_ORATOR_ARCHETYPE",
        "zIconName": "TRAIT_ORATOR",
        "iNoFamilyDie": "1",
        "bArchetype": "1",
        "bGovernorPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_ORATOR_ARCHETYPE",
        "Cognomen": "COGNOMEN_ORATOR",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "iValue": "4"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "-2"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_JUDGE_ARCHETYPE",
        "Name": "TEXT_TRAIT_JUDGE_ARCHETYPE",
        "zIconName": "TRAIT_JUDGE",
        "iNoFamilyDie": "1",
        "bArchetype": "1",
        "bGovernorPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_JUDGE_ARCHETYPE",
        "Cognomen": "COGNOMEN_JUDGE",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "2"
            },
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_BUILDER_ARCHETYPE",
        "Name": "TEXT_TRAIT_BUILDER_ARCHETYPE",
        "zIconName": "TRAIT_BUILDER",
        "iNoFamilyDie": "1",
        "bArchetype": "1",
        "bGovernorPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_BUILDER_ARCHETYPE",
        "Cognomen": "COGNOMEN_BUILDER",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "TRAIT_SCHOLAR_ARCHETYPE",
        "Name": "TEXT_TRAIT_SCHOLAR_ARCHETYPE",
        "zIconName": "TRAIT_SCHOLAR",
        "iNoFamilyDie": "1",
        "bArchetype": "1",
        "bGovernorPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_SCHOLAR_ARCHETYPE",
        "Cognomen": "COGNOMEN_SCHOLAR",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "TRAIT_DIPLOMAT_ARCHETYPE",
        "Name": "TEXT_TRAIT_DIPLOMAT_ARCHETYPE",
        "zIconName": "TRAIT_DIPLOMAT",
        "iNoFamilyDie": "1",
        "bArchetype": "1",
        "bGovernorPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_DIPLOMAT_ARCHETYPE",
        "Cognomen": "COGNOMEN_DIPLOMAT",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "TRAIT_AFFABLE",
        "Name": "TEXT_TRAIT_AFFABLE",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_AFFABLE",
        "Cognomen": "COGNOMEN_AFFABLE",
        "aeTraitInvalid": {
          "zValue": "TRAIT_CRUEL"
        },
        "aePositiveRating": {
          "zValue": "RATING_CHARISMA"
        }
      },
      {
        "zType": "TRAIT_ELOQUENT",
        "Name": "TEXT_TRAIT_ELOQUENT",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_ELOQUENT",
        "Cognomen": "COGNOMEN_ELOQUENT",
        "aeTraitInvalid": {
          "zValue": "TRAIT_CARELESS"
        },
        "aePositiveRating": {
          "zValue": "RATING_CHARISMA"
        }
      },
      {
        "zType": "TRAIT_WARLIKE",
        "Name": "TEXT_TRAIT_WARLIKE",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_WARLIKE",
        "Cognomen": "COGNOMEN_WARLIKE",
        "aeTraitInvalid": {
          "zValue": "TRAIT_SLOTHFUL"
        },
        "aePositiveRating": {
          "zValue": "RATING_COURAGE"
        }
      },
      {
        "zType": "TRAIT_INSPIRED",
        "Name": "TEXT_TRAIT_INSPIRED",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_INSPIRED",
        "Cognomen": "COGNOMEN_INSPIRED",
        "aeTraitInvalid": {
          "zValue": "TRAIT_UNCOUTH"
        }
      },
      {
        "zType": "TRAIT_INTELLIGENT",
        "Name": "TEXT_TRAIT_INTELLIGENT",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_INTELLIGENT",
        "Cognomen": "COGNOMEN_INTELLIGENT",
        "aeTraitInvalid": {
          "zValue": "TRAIT_FOOLISH"
        },
        "aePositiveRating": {
          "zValue": "RATING_WISDOM"
        }
      },
      {
        "zType": "TRAIT_PROSPEROUS",
        "Name": "TEXT_TRAIT_PROSPEROUS",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_PROSPEROUS",
        "Cognomen": "COGNOMEN_PROSPEROUS",
        "aeTraitInvalid": {
          "zValue": "TRAIT_EXTRAVAGANT"
        },
        "aePositiveRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_FRUGAL",
        "Name": "TEXT_TRAIT_FRUGAL",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_FRUGAL",
        "Cognomen": "COGNOMEN_FRUGAL",
        "aeTraitInvalid": {
          "zValue": "TRAIT_CORRUPT"
        },
        "aePositiveRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_RIGHTEOUS",
        "Name": "TEXT_TRAIT_RIGHTEOUS",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_RIGHTEOUS",
        "Cognomen": "COGNOMEN_RIGHTEOUS",
        "aeTraitInvalid": {
          "zValue": "TRAIT_DEBAUCHED"
        }
      },
      {
        "zType": "TRAIT_CRUEL",
        "Name": "TEXT_TRAIT_CRUEL",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_CRUEL",
        "Cognomen": "COGNOMEN_CRUEL",
        "aeTraitInvalid": {
          "zValue": "TRAIT_AFFABLE"
        }
      },
      {
        "zType": "TRAIT_CARELESS",
        "Name": "TEXT_TRAIT_CARELESS",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_CARELESS",
        "Cognomen": "COGNOMEN_CARELESS",
        "aeTraitInvalid": {
          "zValue": "TRAIT_ELOQUENT"
        },
        "aeNegativeRating": {
          "zValue": "RATING_WISDOM"
        }
      },
      {
        "zType": "TRAIT_SLOTHFUL",
        "Name": "TEXT_TRAIT_SLOTHFUL",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_SLOTHFUL",
        "Cognomen": "COGNOMEN_SLOTHFUL",
        "aeTraitInvalid": {
          "zValue": "TRAIT_WARLIKE"
        },
        "aeNegativeRating": {
          "zValue": "RATING_COURAGE"
        }
      },
      {
        "zType": "TRAIT_UNCOUTH",
        "Name": "TEXT_TRAIT_UNCOUTH",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_UNCOUTH",
        "Cognomen": "COGNOMEN_UNCOUTH",
        "aeTraitInvalid": {
          "zValue": "TRAIT_INSPIRED"
        },
        "aeNegativeRating": {
          "zValue": "RATING_CHARISMA"
        }
      },
      {
        "zType": "TRAIT_FOOLISH",
        "Name": "TEXT_TRAIT_FOOLISH",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_FOOLISH",
        "Cognomen": "COGNOMEN_FOOLISH",
        "aeTraitInvalid": {
          "zValue": "TRAIT_INTELLIGENT"
        },
        "aeNegativeRating": {
          "zValue": "RATING_WISDOM"
        }
      },
      {
        "zType": "TRAIT_EXTRAVAGANT",
        "Name": "TEXT_TRAIT_EXTRAVAGANT",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_EXTRAVAGANT",
        "Cognomen": "COGNOMEN_EXTRAVAGANT",
        "aeTraitInvalid": {
          "zValue": "TRAIT_PROSPEROUS"
        },
        "aeNegativeRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_CORRUPT",
        "Name": "TEXT_TRAIT_CORRUPT",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_CORRUPT",
        "Cognomen": "COGNOMEN_CORRUPT",
        "aeTraitInvalid": {
          "zValue": "TRAIT_FRUGAL"
        },
        "aeNegativeRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_DEBAUCHED",
        "Name": "TEXT_TRAIT_DEBAUCHED",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_DEBAUCHED",
        "Cognomen": "COGNOMEN_DEBAUCHED",
        "aeTraitInvalid": {
          "zValue": "TRAIT_RIGHTEOUS"
        },
        "aeNegativeRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_ROBUST",
        "Name": "TEXT_TRAIT_ROBUST",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_ROBUST",
        "Cognomen": "COGNOMEN_ROBUST"
      },
      {
        "zType": "TRAIT_VIGILANT",
        "Name": "TEXT_TRAIT_VIGILANT",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_VIGILANT",
        "Cognomen": "COGNOMEN_VIGILANT",
        "aePositiveRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_STRICT",
        "Name": "TEXT_TRAIT_STRICT",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_STRICT",
        "Cognomen": "COGNOMEN_STRICT",
        "aePositiveRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_DRILLMASTER",
        "Name": "TEXT_TRAIT_DRILLMASTER",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_DRILLMASTER",
        "Cognomen": "COGNOMEN_DRILLMASTER",
        "aePositiveRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_KEEN",
        "Name": "TEXT_TRAIT_KEEN",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_KEEN",
        "Cognomen": "COGNOMEN_KEEN"
      },
      {
        "zType": "TRAIT_EQUESTRIAN",
        "Name": "TEXT_TRAIT_EQUESTRIAN",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_EQUESTRIAN",
        "Cognomen": "COGNOMEN_EQUESTRIAN"
      },
      {
        "zType": "TRAIT_ANGLER",
        "Name": "TEXT_TRAIT_ANGLER",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_ANGLER",
        "Cognomen": "COGNOMEN_ANGLER"
      },
      {
        "zType": "TRAIT_PLANTER",
        "Name": "TEXT_TRAIT_PLANTER",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_PLANTER",
        "Cognomen": "COGNOMEN_PLANTER"
      },
      {
        "zType": "TRAIT_FORESTER",
        "Name": "TEXT_TRAIT_FORESTER",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_FORESTER",
        "Cognomen": "COGNOMEN_FORESTER"
      },
      {
        "zType": "TRAIT_DELVER",
        "Name": "TEXT_TRAIT_DELVER",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_DELVER",
        "Cognomen": "COGNOMEN_DELVER"
      },
      {
        "zType": "TRAIT_SMELTER",
        "Name": "TEXT_TRAIT_SMELTER",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_SMELTER",
        "Cognomen": "COGNOMEN_SMELTER"
      },
      {
        "zType": "TRAIT_HERDER",
        "Name": "TEXT_TRAIT_HERDER",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_HERDER",
        "Cognomen": "COGNOMEN_HERDER"
      },
      {
        "zType": "TRAIT_TRACKER",
        "Name": "TEXT_TRAIT_TRACKER",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_TRACKER",
        "Cognomen": "COGNOMEN_TRACKER"
      },
      {
        "zType": "TRAIT_SWIFT",
        "Name": "TEXT_TRAIT_SWIFT",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_SWIFT",
        "Cognomen": "COGNOMEN_SWIFT"
      },
      {
        "zType": "TRAIT_HARDY",
        "Name": "TEXT_TRAIT_HARDY",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_HARDY",
        "Cognomen": "COGNOMEN_HARDY"
      },
      {
        "zType": "TRAIT_EAGLE_EYE",
        "Name": "TEXT_TRAIT_EAGLE_EYE",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_EAGLE_EYE",
        "Cognomen": "COGNOMEN_EAGLE_EYE"
      },
      {
        "zType": "TRAIT_MARKSMAN",
        "Name": "TEXT_TRAIT_MARKSMAN",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_MARKSMAN",
        "Cognomen": "COGNOMEN_MARKSMAN"
      },
      {
        "zType": "TRAIT_ENGINEER",
        "Name": "TEXT_TRAIT_ENGINEER",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_ENGINEER",
        "Cognomen": "COGNOMEN_ENGINEER"
      },
      {
        "zType": "TRAIT_BESIEGER",
        "Name": "TEXT_TRAIT_BESIEGER",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_BESIEGER",
        "Cognomen": "COGNOMEN_BESIEGER"
      },
      {
        "zType": "TRAIT_GARRISON",
        "Name": "TEXT_TRAIT_GARRISON",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_GARRISON",
        "Cognomen": "COGNOMEN_GARRISON"
      },
      {
        "zType": "TRAIT_BLOODTHIRSTY",
        "Name": "TEXT_TRAIT_BLOODTHIRSTY",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_BLOODTHIRSTY",
        "Cognomen": "COGNOMEN_BLOODTHIRSTY"
      },
      {
        "zType": "TRAIT_STEADFAST",
        "Name": "TEXT_TRAIT_STEADFAST",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_STEADFAST",
        "Cognomen": "COGNOMEN_STEADFAST"
      },
      {
        "zType": "TRAIT_HERBALIST",
        "Name": "TEXT_TRAIT_HERBALIST",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_HERBALIST",
        "Cognomen": "COGNOMEN_HERBALIST"
      },
      {
        "zType": "TRAIT_HIGHLANDER",
        "Name": "TEXT_TRAIT_HIGHLANDER",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_HIGHLANDER",
        "Cognomen": "COGNOMEN_HIGHLANDER"
      },
      {
        "zType": "TRAIT_RANGER",
        "Name": "TEXT_TRAIT_RANGER",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_RANGER",
        "Cognomen": "COGNOMEN_RANGER"
      },
      {
        "zType": "TRAIT_BRAVE",
        "Name": "TEXT_TRAIT_BRAVE",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_BRAVE",
        "Cognomen": "COGNOMEN_BRAVE",
        "aePositiveRating": {
          "zValue": "RATING_COURAGE"
        }
      },
      {
        "zType": "TRAIT_SHIELDBEARER",
        "Name": "TEXT_TRAIT_SHIELDBEARER",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_SHIELDBEARER",
        "Cognomen": "COGNOMEN_SHIELDBEARER"
      },
      {
        "zType": "TRAIT_FIERCE",
        "Name": "TEXT_TRAIT_FIERCE",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_FIERCE",
        "Cognomen": "COGNOMEN_FIERCE",
        "aePositiveRating": {
          "zValue": "RATING_COURAGE"
        }
      },
      {
        "zType": "TRAIT_HORSEBANE",
        "Name": "TEXT_TRAIT_HORSEBANE",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_HORSEBANE",
        "Cognomen": "COGNOMEN_HORSEBANE"
      },
      {
        "zType": "TRAIT_AGGRESSOR",
        "Name": "TEXT_TRAIT_AGGRESSOR",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "bUpgrade": "1",
        "GeneralEffectUnit": "EFFECTUNIT_AGGRESSOR",
        "Cognomen": "COGNOMEN_AGGRESSOR",
        "aePositiveRating": {
          "zValue": "RATING_COURAGE"
        }
      },
      {
        "zType": "TRAIT_BOLD",
        "Name": "TEXT_TRAIT_BOLD",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_BOLD",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "2"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_COWARDLY"
        }
      },
      {
        "zType": "TRAIT_COWARDLY",
        "Name": "TEXT_TRAIT_COWARDLY",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_COWARDLY",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "-1"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_BOLD"
        }
      },
      {
        "zType": "TRAIT_GRACIOUS",
        "Name": "TEXT_TRAIT_GRACIOUS",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_GRACIOUS",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "2"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_GREEDY"
        }
      },
      {
        "zType": "TRAIT_GREEDY",
        "Name": "TEXT_TRAIT_GREEDY",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_GREEDY",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "-1"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_GRACIOUS"
        }
      },
      {
        "zType": "TRAIT_CUNNING",
        "Name": "TEXT_TRAIT_CUNNING",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_CUNNING",
        "Cognomen": "COGNOMEN_CUNNING"
      },
      {
        "zType": "TRAIT_ROMANTIC",
        "Name": "TEXT_TRAIT_ROMANTIC",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_ROMANTIC",
        "Cognomen": "COGNOMEN_ROMANTIC",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "TRAIT_COMPASSIONATE",
        "Name": "TEXT_TRAIT_COMPASSIONATE",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_COMPASSIONATE",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "TRAIT_INSPIRING",
        "Name": "TEXT_TRAIT_INSPIRING",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_INSPIRING",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "TRAIT_LOYAL",
        "Name": "TEXT_TRAIT_LOYAL",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_LOYAL",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "TRAIT_BITTER",
        "Name": "TEXT_TRAIT_BITTER",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_BITTER",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "TRAIT_SPOILED",
        "Name": "TEXT_TRAIT_SPOILED",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_SPOILED",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "TRAIT_HONEST",
        "Name": "TEXT_TRAIT_HONEST",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_HONEST",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "TRAIT_PIOUS",
        "Name": "TEXT_TRAIT_PIOUS",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_PIOUS",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "TRAIT_HUMBLE",
        "Name": "TEXT_TRAIT_HUMBLE",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_HUMBLE",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "TRAIT_HEARTBROKEN",
        "Name": "TEXT_TRAIT_HEARTBROKEN",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_HEARTBROKEN",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "TRAIT_INTOLERANT",
        "Name": "TEXT_TRAIT_INTOLERANT",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_INTOLERANT",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "TRAIT_VENGEFUL",
        "Name": "TEXT_TRAIT_VENGEFUL",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_VENGEFUL",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "iValue": "1"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "-1"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_SUPERSTITIOUS",
        "Name": "TEXT_TRAIT_SUPERSTITIOUS",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_SUPERSTITIOUS",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "TRAIT_RUTHLESS",
        "Name": "TEXT_TRAIT_RUTHLESS",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_RUTHLESS",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "-1"
            },
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_PROUD",
        "Name": "TEXT_TRAIT_PROUD",
        "iAdjectiveDie": "1",
        "iOpinion": "-20",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_PROUD",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "iValue": "1"
            },
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "-1"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_BEAUTIFUL",
        "Name": "TEXT_TRAIT_BEAUTIFUL",
        "iAdjectiveDie": "1",
        "bAdjective": "1",
        "Cognomen": "COGNOMEN_BEAUTIFUL",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "TRAIT_STUDY_TACTICS",
        "Name": "TEXT_TRAIT_STUDY_TACTICS",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_STUDY_RHETORIC",
        "Name": "TEXT_TRAIT_STUDY_RHETORIC",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_STUDY_COMMERCE",
        "Name": "TEXT_TRAIT_STUDY_COMMERCE",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_STUDY_PHILOSOPHY",
        "Name": "TEXT_TRAIT_STUDY_PHILOSOPHY",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_EXPLORING",
        "Name": "TEXT_TRAIT_EXPLORING",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoJob": "1",
        "aeTraitInvalid": {
          "zValue": [
            "TRAIT_STUDY_PHILOSOPHY",
            "TRAIT_STUDY_COMMERCE",
            "TRAIT_STUDY_RHETORIC",
            "TRAIT_STUDY_TACTICS"
          ]
        }
      },
      {
        "zType": "TRAIT_BLESSED",
        "Name": "TEXT_TRAIT_BLESSED",
        "Cognomen": "COGNOMEN_BLESSED"
      },
      {
        "zType": "TRAIT_CURSED",
        "Name": "TEXT_TRAIT_CURSED",
        "Cognomen": "COGNOMEN_CURSED"
      },
      {
        "zType": "TRAIT_ILL",
        "Name": "TEXT_TRAIT_ILL",
        "iRemoveProb": "60",
        "bRemoveLeader": "1",
        "aiTraitProb": {
          "Pair": {
            "zIndex": "TRAIT_SEVERELY_ILL",
            "iValue": "20"
          }
        },
        "aiMortalityDieProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "10"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "20"
            },
            {
              "zIndex": "MORTALITY_REALISTIC",
              "iValue": "40"
            }
          ]
        },
        "aiDecadeProb": {
          "iValue": [
            "0",
            "0",
            "1",
            "1",
            "3",
            "5",
            "5",
            "0",
            "0",
            "0"
          ]
        },
        "abSkipDecade": {
          "Pair": {
            "zIndex": "TRAIT_SEVERELY_ILL",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TRAIT_SEVERELY_ILL",
        "Name": "TEXT_TRAIT_SEVERELY_ILL",
        "iRemoveProb": "40",
        "bRemoveLeader": "1",
        "aiMortalityDieProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "50"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "70"
            },
            {
              "zIndex": "MORTALITY_REALISTIC",
              "iValue": "90"
            }
          ]
        },
        "aiDecadeProb": {
          "iValue": [
            "0",
            "0",
            "0",
            "0",
            "0",
            "5",
            "10",
            "20",
            "30",
            "30"
          ]
        },
        "abSkipDecade": {
          "Pair": {
            "zIndex": "TRAIT_ILL",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TRAIT_INCUBATED",
        "Name": "TEXT_TRAIT_INCUBATED",
        "iRemoveProb": "40",
        "bRemoveLeader": "1",
        "aiMortalityDieProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "50"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "70"
            },
            {
              "zIndex": "MORTALITY_REALISTIC",
              "iValue": "90"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_POISONER",
        "Name": "TEXT_TRAIT_POISONER"
      },
      {
        "zType": "TRAIT_POISONED",
        "Name": "TEXT_TRAIT_POISONED",
        "iRemoveProb": "25",
        "bRemoveLeader": "1",
        "aiMortalityDieProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "30"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            },
            {
              "zIndex": "MORTALITY_REALISTIC",
              "iValue": "70"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_MISERABLE",
        "Name": "TEXT_TRAIT_MISERABLE",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_MISERABLE",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "TRAIT_SCARRED",
        "Name": "TEXT_TRAIT_SCARRED",
        "iInjuryDie": "6",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "TRAIT_CRIPPLED",
        "Name": "TEXT_TRAIT_CRIPPLED",
        "iInjuryDie": "3",
        "GeneralEffectUnit": "EFFECTUNIT_TRAIT_CRIPPLED",
        "Cognomen": "COGNOMEN_CRIPPLED"
      },
      {
        "zType": "TRAIT_BLINDED",
        "Name": "TEXT_TRAIT_BLINDED",
        "iInjuryDie": "1",
        "bNoJob": "1",
        "Cognomen": "COGNOMEN_BLIND"
      },
      {
        "zType": "TRAIT_FLED_COUNTRY",
        "Name": "TEXT_TRAIT_FLED_COUNTRY",
        "bNoEvents": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_IMPRISONED",
        "Name": "TEXT_TRAIT_IMPRISONED",
        "iOpinion": "-100",
        "bNoEvents": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_IMPRISONED_SHORT",
        "Name": "TEXT_TRAIT_IMPRISONED",
        "iOpinion": "-50",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "aiTraitProb": {
          "Pair": {
            "zIndex": "TRAIT_RELEASED",
            "iValue": "35"
          }
        }
      },
      {
        "zType": "TRAIT_RELEASED",
        "Name": "TEXT_TRAIT_RELEASED"
      },
      {
        "zType": "TRAIT_ON_THE_RUN",
        "Name": "TEXT_TRAIT_ON_THE_RUN",
        "bNoEvents": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_HIDING_ABROAD",
        "Name": "TEXT_TRAIT_HIDING_ABROAD",
        "bNoEvents": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_ELOPED",
        "Name": "TEXT_TRAIT_ELOPED",
        "bNoEvents": "1",
        "bNoHeir": "1",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_CAPTURED",
        "Name": "TEXT_TRAIT_CAPTURED",
        "iOpinion": "-100",
        "bNoEvents": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_EXILED",
        "Name": "TEXT_TRAIT_EXILED",
        "iOpinion": "-100",
        "bNoEvents": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_GAY",
        "Name": "TEXT_TRAIT_GAY",
        "iAdultProb": "5",
        "iBirthModifier": "-50"
      },
      {
        "zType": "TRAIT_BASTARD",
        "Name": "TEXT_TRAIT_BASTARD",
        "bNoMarry": "1",
        "bNoHeir": "1"
      },
      {
        "zType": "TRAIT_ADOPTED",
        "Name": "TEXT_TRAIT_ADOPTED"
      },
      {
        "zType": "TRAIT_SLIGHTED",
        "Name": "TEXT_TRAIT_SLIGHTED",
        "iOpinion": "-100",
        "bNoJob": "1",
        "bRemoveLeader": "1"
      },
      {
        "zType": "TRAIT_INFAMOUS",
        "Name": "TEXT_TRAIT_INFAMOUS"
      },
      {
        "zType": "TRAIT_FAMOUS",
        "Name": "TEXT_TRAIT_FAMOUS"
      },
      {
        "zType": "TRAIT_POPULAR_HERO",
        "Name": "TEXT_TRAIT_POPULAR_HERO"
      },
      {
        "zType": "TRAIT_BYPASSED_HEIR",
        "Name": "TEXT_TRAIT_BYPASSED_HEIR",
        "iOpinion": "-100",
        "bRemoveLeader": "1"
      },
      {
        "zType": "TRAIT_ABDICATED",
        "Name": "TEXT_TRAIT_ABDICATED"
      },
      {
        "zType": "TRAIT_EXOTIC",
        "Name": "TEXT_TRAIT_EXOTIC",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "TRAIT_EXCLUDED",
        "Name": "TEXT_TRAIT_EXCLUDED",
        "iOpinion": "-100",
        "bNoHeir": "1"
      },
      {
        "zType": "TRAIT_DIVINE",
        "Name": "TEXT_TRAIT_DIVINE",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "TRAIT_SOLDIER",
        "Name": "TEXT_TRAIT_SOLDIER",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_SOLDIER"
      },
      {
        "zType": "TRAIT_DRUNK",
        "Name": "TEXT_TRAIT_DRUNK",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_DRUNK"
      },
      {
        "zType": "TRAIT_MOURNING",
        "Name": "TEXT_TRAIT_MOURNING",
        "iRemoveProb": "25",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_MOURNING",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "4"
          }
        },
        "aiTraitProb": {
          "Pair": {
            "zIndex": "TRAIT_ILL",
            "iValue": "10"
          }
        },
        "aiMortalityDieProb": {
          
        }
      },
      {
        "zType": "TRAIT_DEALMAKER",
        "Name": "TEXT_TRAIT_DEALMAKER",
        "LeaderEffectPlayer": "EFFECTPLAYER_DEALMAKER"
      },
      {
        "zType": "TRAIT_ARCHON",
        "Name": "TEXT_TRAIT_ARCHON",
        "bAdjective": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_INSPIRED",
        "Cognomen": "COGNOMEN_INSPIRED",
        "aePositiveRating": {
          "zValue": "RATING_WISDOM"
        }
      },
      {
        "zType": "TRAIT_MYSTERIOUS_SWORD",
        "Name": "TEXT_TRAIT_MYSTERIOUS_SWORD"
      },
      {
        "zType": "TRAIT_SWORD_OF_THE_GODS",
        "Name": "TEXT_TRAIT_SWORD_OF_THE_GODS",
        "GeneralEffectUnit": "EFFECTUNIT_SWORD_OF_THE_GODS"
      },
      {
        "zType": "TRAIT_PET_FISH",
        "Name": "TEXT_TRAIT_PET_FISH"
      },
      {
        "zType": "TRAIT_PET_MONKEY",
        "Name": "TEXT_TRAIT_PET_MONKEY"
      },
      {
        "zType": "TRAIT_MONKEY_ASSASSIN",
        "Name": "TEXT_TRAIT_MONKEY_ASSASSIN"
      },
      {
        "zType": "TRAIT_OVERSEER_OF_THE_FIELDS",
        "Name": "TEXT_TRAIT_OVERSEER_OF_THE_FIELDS"
      },
      {
        "zType": "TRAIT_POSSESSOR_OF_VENERATION",
        "Name": "TEXT_TRAIT_POSSESSOR_OF_VENERATION"
      },
      {
        "zType": "TRAIT_STEWARD_OF_THE_CHAMBER",
        "Name": "TEXT_TRAIT_STEWARD_OF_THE_CHAMBER"
      },
      {
        "zType": "TRAIT_ENEMY_OF_THE_STATE",
        "Name": "TEXT_TRAIT_ENEMY_OF_THE_STATE",
        "iDieProb": "10",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_ENEMY_OF_THE_STATE"
      }
    ]
  }
}
    export default data
    