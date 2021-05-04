
    const data: XmlTrait.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "Nickname": {
          
        },
        "zIconName": {
          
        },
        "iMinAge": {
          
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
        "iOpinionSame": {
          
        },
        "iOpinionFamily": {
          
        },
        "iOpinionReligion": {
          
        },
        "iOpinionProximity": {
          
        },
        "iOpinionStrength": {
          
        },
        "iOpinionKnowledge": {
          
        },
        "iOpinionGenerals": {
          
        },
        "iOpinionGovernors": {
          
        },
        "iOpinionWonders": {
          
        },
        "iOpinionLaws": {
          
        },
        "iOpinionCognomen": {
          
        },
        "iOpinionTrades": {
          
        },
        "iBirthModifier": {
          
        },
        "iPeaceModifier": {
          
        },
        "iTruceModifier": {
          
        },
        "iWarModifier": {
          
        },
        "bArchetype": {
          
        },
        "bStrength": {
          
        },
        "bWeakness": {
          
        },
        "bNickname": {
          
        },
        "bUpgrade": {
          
        },
        "bNoEvents": {
          
        },
        "bNoMissions": {
          
        },
        "bNoMarry": {
          
        },
        "bNoBirth": {
          
        },
        "bNoHeir": {
          
        },
        "bNoJob": {
          
        },
        "bNoCourtier": {
          
        },
        "bGeneralPrereq": {
          
        },
        "bGeneralAll": {
          
        },
        "bGovernorPrereq": {
          
        },
        "bGovernorAll": {
          
        },
        "bAgentPrereq": {
          
        },
        "bRemoveLeader": {
          
        },
        "bRemoveDeath": {
          
        },
        "bDoomed": {
          
        },
        "bGiveBirth": {
          
        },
        "bTeamAlliance": {
          
        },
        "LeaderEffectPlayer": {
          
        },
        "GovernorEffectCity": {
          
        },
        "GeneralEffectUnit": {
          
        },
        "LeaderEffectUnit": {
          
        },
        "MemoryCharacter": {
          
        },
        "aiRating": {
          
        },
        "aiTraitOpinion": {
          
        },
        "aiTraitProb": {
          
        },
        "aiLawOpinion": {
          
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
        "Nickname": "TEXT_TRAIT_HERO_ARCHETYPE_NICKNAME",
        "zIconName": "TRAIT_HERO",
        "iMinAge": "12",
        "iNoFamilyDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "40",
        "iOpinionProximity": "-40",
        "iTruceModifier": "-50",
        "iWarModifier": "50",
        "bArchetype": "1",
        "bGeneralPrereq": "1",
        "bAgentPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_HERO_ARCHETYPE",
        "GeneralEffectUnit": "EFFECTUNIT_HERO",
        "LeaderEffectUnit": "EFFECTUNIT_HERO_LEADER",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "3"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_BUILDER_ARCHETYPE",
            "iValue": "-60"
          }
        },
        "aiLawOpinion": {
          "Pair": {
            "zIndex": "LAW_EPICS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "TRAIT_COMMANDER_ARCHETYPE",
        "Name": "TEXT_TRAIT_COMMANDER_ARCHETYPE",
        "Nickname": "TEXT_TRAIT_COMMANDER_ARCHETYPE_NICKNAME",
        "zIconName": "TRAIT_COMMANDER",
        "iMinAge": "12",
        "iNoFamilyDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "40",
        "iOpinionGenerals": "-40",
        "iTruceModifier": "-50",
        "iWarModifier": "50",
        "bArchetype": "1",
        "bGeneralPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_COMMANDER_ARCHETYPE",
        "GeneralEffectUnit": "EFFECTUNIT_COMMANDER",
        "LeaderEffectUnit": "EFFECTUNIT_COMMANDER_LEADER",
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
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_TACTICIAN_ARCHETYPE",
            "iValue": "-60"
          }
        },
        "aiLawOpinion": {
          "Pair": {
            "zIndex": "LAW_AUTARKY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "TRAIT_TACTICIAN_ARCHETYPE",
        "Name": "TEXT_TRAIT_TACTICIAN_ARCHETYPE",
        "Nickname": "TEXT_TRAIT_TACTICIAN_ARCHETYPE_NICKNAME",
        "zIconName": "TRAIT_TACTICIAN",
        "iMinAge": "12",
        "iNoFamilyDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "40",
        "iOpinionStrength": "-40",
        "iTruceModifier": "-50",
        "iWarModifier": "50",
        "bArchetype": "1",
        "bGeneralPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_TACTICIAN_ARCHETYPE",
        "GeneralEffectUnit": "EFFECTUNIT_TACTICIAN",
        "LeaderEffectUnit": "EFFECTUNIT_TACTICIAN_LEADER",
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
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_COMMANDER_ARCHETYPE",
            "iValue": "-60"
          }
        },
        "aiLawOpinion": {
          "Pair": {
            "zIndex": "LAW_PROFESSIONAL_ARMY",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "TRAIT_ZEALOT_ARCHETYPE",
        "Name": "TEXT_TRAIT_ZEALOT_ARCHETYPE",
        "Nickname": "TEXT_TRAIT_ZEALOT_ARCHETYPE_NICKNAME",
        "zIconName": "TRAIT_ZEALOT",
        "iMinAge": "12",
        "iNoFamilyDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "40",
        "iOpinionReligion": "-40",
        "iTruceModifier": "-50",
        "iWarModifier": "50",
        "bArchetype": "1",
        "bGeneralPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_ZEALOT_ARCHETYPE",
        "GeneralEffectUnit": "EFFECTUNIT_ZEALOT",
        "LeaderEffectUnit": "EFFECTUNIT_ZEALOT_LEADER",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "4"
            },
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "-1"
            }
          ]
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_SCHOLAR_ARCHETYPE",
            "iValue": "-60"
          }
        },
        "aiLawOpinion": {
          "Pair": {
            "zIndex": "LAW_HOLY_WAR",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "TRAIT_SCHEMER_ARCHETYPE",
        "Name": "TEXT_TRAIT_SCHEMER_ARCHETYPE",
        "Nickname": "TEXT_TRAIT_SCHEMER_ARCHETYPE_NICKNAME",
        "zIconName": "TRAIT_SCHEMER",
        "iMinAge": "12",
        "iNoFamilyDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "40",
        "iOpinionCognomen": "-40",
        "iPeaceModifier": "50",
        "bArchetype": "1",
        "bAgentPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_SCHEMER_ARCHETYPE",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "4"
            },
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "-1"
            }
          ]
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_JUDGE_ARCHETYPE",
            "iValue": "-60"
          }
        },
        "aiLawOpinion": {
          "Pair": [
            {
              "zIndex": "LAW_ELITES",
              "iValue": "20"
            },
            {
              "zIndex": "LAW_COIN_DEBASEMENT",
              "iValue": "20"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_ORATOR_ARCHETYPE",
        "Name": "TEXT_TRAIT_ORATOR_ARCHETYPE",
        "Nickname": "TEXT_TRAIT_ORATOR_ARCHETYPE_NICKNAME",
        "zIconName": "TRAIT_ORATOR",
        "iMinAge": "12",
        "iNoFamilyDie": "1",
        "iOpinionSame": "40",
        "iOpinionGovernors": "-40",
        "iPeaceModifier": "50",
        "bArchetype": "1",
        "bGovernorPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_ORATOR_ARCHETYPE",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_ORATOR",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "iValue": "4"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "-1"
            }
          ]
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_DIPLOMAT_ARCHETYPE",
            "iValue": "-60"
          }
        },
        "aiLawOpinion": {
          "Pair": {
            "zIndex": "LAW_TYRANNY",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "TRAIT_DIPLOMAT_ARCHETYPE",
        "Name": "TEXT_TRAIT_DIPLOMAT_ARCHETYPE",
        "Nickname": "TEXT_TRAIT_DIPLOMAT_ARCHETYPE_NICKNAME",
        "zIconName": "TRAIT_DIPLOMAT",
        "iMinAge": "12",
        "iNoFamilyDie": "1",
        "iOpinionSame": "40",
        "iOpinionTrades": "-40",
        "iPeaceModifier": "50",
        "bArchetype": "1",
        "bAgentPrereq": "1",
        "bTeamAlliance": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_DIPLOMAT_ARCHETYPE",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "3"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_ORATOR_ARCHETYPE",
            "iValue": "-60"
          }
        },
        "aiLawOpinion": {
          "Pair": {
            "zIndex": "LAW_COLONIZATION",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "TRAIT_JUDGE_ARCHETYPE",
        "Name": "TEXT_TRAIT_JUDGE_ARCHETYPE",
        "Nickname": "TEXT_TRAIT_JUDGE_ARCHETYPE_NICKNAME",
        "zIconName": "TRAIT_JUDGE",
        "iMinAge": "12",
        "iNoFamilyDie": "1",
        "iOpinionSame": "40",
        "iOpinionLaws": "-40",
        "iTruceModifier": "25",
        "iWarModifier": "-25",
        "bArchetype": "1",
        "bGovernorPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_JUDGE_ARCHETYPE",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_JUDGE",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "iValue": "2"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "2"
            }
          ]
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_SCHEMER_ARCHETYPE",
            "iValue": "-60"
          }
        },
        "aiLawOpinion": {
          "Pair": {
            "zIndex": "LAW_LEGAL_CODE",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "TRAIT_BUILDER_ARCHETYPE",
        "Name": "TEXT_TRAIT_BUILDER_ARCHETYPE",
        "Nickname": "TEXT_TRAIT_BUILDER_ARCHETYPE_NICKNAME",
        "zIconName": "TRAIT_BUILDER",
        "iMinAge": "12",
        "iNoFamilyDie": "1",
        "iOpinionSame": "40",
        "iOpinionWonders": "-40",
        "iTruceModifier": "25",
        "iWarModifier": "-25",
        "bArchetype": "1",
        "bGovernorPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_BUILDER_ARCHETYPE",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_BUILDER",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "3"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_HERO_ARCHETYPE",
            "iValue": "-60"
          }
        },
        "aiLawOpinion": {
          "Pair": {
            "zIndex": "LAW_SLAVERY",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "TRAIT_SCHOLAR_ARCHETYPE",
        "Name": "TEXT_TRAIT_SCHOLAR_ARCHETYPE",
        "Nickname": "TEXT_TRAIT_SCHOLAR_ARCHETYPE_NICKNAME",
        "zIconName": "TRAIT_SCHOLAR",
        "iMinAge": "12",
        "iNoFamilyDie": "1",
        "iOpinionSame": "40",
        "iOpinionKnowledge": "-40",
        "iTruceModifier": "25",
        "iWarModifier": "-25",
        "bArchetype": "1",
        "bGovernorPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_SCHOLAR_ARCHETYPE",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_SCHOLAR",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "3"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_ZEALOT_ARCHETYPE",
            "iValue": "-60"
          }
        },
        "aiLawOpinion": {
          "Pair": {
            "zIndex": "LAW_ENGINEERING",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "TRAIT_AFFABLE",
        "Name": "TEXT_TRAIT_AFFABLE",
        "Nickname": "TEXT_TRAIT_AFFABLE_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_AFFABLE",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_AFFABLE",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_CRUEL",
            "iValue": "-40"
          }
        },
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
        "Nickname": "TEXT_TRAIT_ELOQUENT_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_ELOQUENT",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_ELOQUENT",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_INTOLERANT",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_INTOLERANT"
        },
        "aePositiveRating": {
          "zValue": "RATING_CHARISMA"
        }
      },
      {
        "zType": "TRAIT_WARLIKE",
        "Name": "TEXT_TRAIT_WARLIKE",
        "Nickname": "TEXT_TRAIT_WARLIKE_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_WARLIKE",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_WARLIKE",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_SLOTHFUL",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_SLOTHFUL"
        },
        "aePositiveRating": {
          "zValue": "RATING_COURAGE"
        }
      },
      {
        "zType": "TRAIT_INSPIRING",
        "Name": "TEXT_TRAIT_INSPIRING",
        "Nickname": "TEXT_TRAIT_INSPIRING_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_INSPIRING",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_INSPIRING",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_UNCOUTH",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_UNCOUTH"
        }
      },
      {
        "zType": "TRAIT_INTELLIGENT",
        "Name": "TEXT_TRAIT_INTELLIGENT",
        "Nickname": "TEXT_TRAIT_INTELLIGENT_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_INTELLIGENT",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_INTELLIGENT",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_FOOLISH",
            "iValue": "-40"
          }
        },
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
        "Nickname": "TEXT_TRAIT_PROSPEROUS_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_PROSPEROUS",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_PROSPEROUS",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_EXTRAVAGANT",
            "iValue": "-40"
          }
        },
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
        "Nickname": "TEXT_TRAIT_FRUGAL_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_FRUGAL",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_FRUGAL",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_CORRUPT",
            "iValue": "-40"
          }
        },
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
        "Nickname": "TEXT_TRAIT_RIGHTEOUS_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_RIGHTEOUS",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_RIGHTEOUS",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_DEBAUCHED",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_DEBAUCHED"
        }
      },
      {
        "zType": "TRAIT_CRUEL",
        "Name": "TEXT_TRAIT_CRUEL",
        "Nickname": "TEXT_TRAIT_CRUEL_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_CRUEL",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_CRUEL",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_AFFABLE",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_AFFABLE"
        }
      },
      {
        "zType": "TRAIT_INTOLERANT",
        "Name": "TEXT_TRAIT_INTOLERANT",
        "Nickname": "TEXT_TRAIT_INTOLERANT_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_INTOLERANT",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_INTOLERANT",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_ELOQUENT",
            "iValue": "-40"
          }
        },
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
        "Nickname": "TEXT_TRAIT_SLOTHFUL_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_SLOTHFUL",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_SLOTHFUL",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_WARLIKE",
            "iValue": "-40"
          }
        },
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
        "Nickname": "TEXT_TRAIT_UNCOUTH_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_UNCOUTH",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_UNCOUTH",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_INSPIRING",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_INSPIRING"
        },
        "aeNegativeRating": {
          "zValue": "RATING_CHARISMA"
        }
      },
      {
        "zType": "TRAIT_FOOLISH",
        "Name": "TEXT_TRAIT_FOOLISH",
        "Nickname": "TEXT_TRAIT_FOOLISH_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_FOOLISH",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_FOOLISH",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_INTELLIGENT",
            "iValue": "-40"
          }
        },
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
        "Nickname": "TEXT_TRAIT_EXTRAVAGANT_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_EXTRAVAGANT",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_EXTRAVAGANT",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_PROSPEROUS",
            "iValue": "-40"
          }
        },
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
        "Nickname": "TEXT_TRAIT_CORRUPT_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_CORRUPT",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_CORRUPT",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_FRUGAL",
            "iValue": "-40"
          }
        },
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
        "Nickname": "TEXT_TRAIT_DEBAUCHED_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_DEBAUCHED",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_DEBAUCHED",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_RIGHTEOUS",
            "iValue": "-40"
          }
        },
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
        "Nickname": "TEXT_TRAIT_ROBUST_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_ROBUST",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_ROBUST"
      },
      {
        "zType": "TRAIT_VIGILANT",
        "Name": "TEXT_TRAIT_VIGILANT",
        "Nickname": "TEXT_TRAIT_VIGILANT_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_VIGILANT",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_VIGILANT",
        "aePositiveRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_STRICT",
        "Name": "TEXT_TRAIT_STRICT",
        "Nickname": "TEXT_TRAIT_STRICT_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_STRICT",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_STRICT",
        "aePositiveRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_EQUESTRIAN",
        "Name": "TEXT_TRAIT_EQUESTRIAN",
        "Nickname": "TEXT_TRAIT_EQUESTRIAN_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_EQUESTRIAN",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_EQUESTRIAN"
      },
      {
        "zType": "TRAIT_CARPENTER",
        "Name": "TEXT_TRAIT_CARPENTER",
        "Nickname": "TEXT_TRAIT_CARPENTER_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_CARPENTER",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_CARPENTER"
      },
      {
        "zType": "TRAIT_PATHFINDER",
        "Name": "TEXT_TRAIT_PATHFINDER",
        "Nickname": "TEXT_TRAIT_PATHFINDER_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_PATHFINDER",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_PATHFINDER"
      },
      {
        "zType": "TRAIT_CULTIVATOR",
        "Name": "TEXT_TRAIT_CULTIVATOR",
        "Nickname": "TEXT_TRAIT_CULTIVATOR_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_CULTIVATOR",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_CULTIVATOR"
      },
      {
        "zType": "TRAIT_NATURALIST",
        "Name": "TEXT_TRAIT_NATURALIST",
        "Nickname": "TEXT_TRAIT_NATURALIST_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_NATURALIST",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_NATURALIST"
      },
      {
        "zType": "TRAIT_DELVER",
        "Name": "TEXT_TRAIT_DELVER",
        "Nickname": "TEXT_TRAIT_DELVER_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_DELVER",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_DELVER"
      },
      {
        "zType": "TRAIT_DEALMAKER",
        "Name": "TEXT_TRAIT_DEALMAKER",
        "Nickname": "TEXT_TRAIT_DEALMAKER_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_DEALMAKER"
      },
      {
        "zType": "TRAIT_TRACKER",
        "Name": "TEXT_TRAIT_TRACKER",
        "Nickname": "TEXT_TRAIT_TRACKER_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_TRACKER",
        "GeneralEffectUnit": "EFFECTUNIT_TRACKER"
      },
      {
        "zType": "TRAIT_SWIFT",
        "Name": "TEXT_TRAIT_SWIFT",
        "Nickname": "TEXT_TRAIT_SWIFT_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_SWIFT",
        "GeneralEffectUnit": "EFFECTUNIT_SWIFT"
      },
      {
        "zType": "TRAIT_BESIEGER",
        "Name": "TEXT_TRAIT_BESIEGER",
        "Nickname": "TEXT_TRAIT_BESIEGER_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_BESIEGER",
        "GeneralEffectUnit": "EFFECTUNIT_BESIEGER"
      },
      {
        "zType": "TRAIT_TOUGH",
        "Name": "TEXT_TRAIT_TOUGH",
        "Nickname": "TEXT_TRAIT_TOUGH_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_TOUGH",
        "GeneralEffectUnit": "EFFECTUNIT_TOUGH"
      },
      {
        "zType": "TRAIT_BLOODTHIRSTY",
        "Name": "TEXT_TRAIT_BLOODTHIRSTY",
        "Nickname": "TEXT_TRAIT_BLOODTHIRSTY_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_BLOODTHIRSTY",
        "GeneralEffectUnit": "EFFECTUNIT_BLOODTHIRSTY"
      },
      {
        "zType": "TRAIT_HECKLER",
        "Name": "TEXT_TRAIT_HECKLER",
        "Nickname": "TEXT_TRAIT_HECKLER_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_HECKLER",
        "GeneralEffectUnit": "EFFECTUNIT_HECKLER"
      },
      {
        "zType": "TRAIT_STEADFAST",
        "Name": "TEXT_TRAIT_STEADFAST",
        "Nickname": "TEXT_TRAIT_STEADFAST_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_STEADFAST",
        "GeneralEffectUnit": "EFFECTUNIT_STEADFAST"
      },
      {
        "zType": "TRAIT_HERBALIST",
        "Name": "TEXT_TRAIT_HERBALIST",
        "Nickname": "TEXT_TRAIT_HERBALIST_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_HERBALIST",
        "GeneralEffectUnit": "EFFECTUNIT_HERBALIST"
      },
      {
        "zType": "TRAIT_HIGHLANDER",
        "Name": "TEXT_TRAIT_HIGHLANDER",
        "Nickname": "TEXT_TRAIT_HIGHLANDER_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_HIGHLANDER",
        "GeneralEffectUnit": "EFFECTUNIT_HIGHLANDER"
      },
      {
        "zType": "TRAIT_RANGER",
        "Name": "TEXT_TRAIT_RANGER",
        "Nickname": "TEXT_TRAIT_RANGER_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_RANGER",
        "GeneralEffectUnit": "EFFECTUNIT_RANGER"
      },
      {
        "zType": "TRAIT_BRAVE",
        "Name": "TEXT_TRAIT_BRAVE",
        "Nickname": "TEXT_TRAIT_BRAVE_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_BRAVE",
        "GeneralEffectUnit": "EFFECTUNIT_BRAVE",
        "aePositiveRating": {
          "zValue": "RATING_COURAGE"
        }
      },
      {
        "zType": "TRAIT_SHIELDBEARER",
        "Name": "TEXT_TRAIT_SHIELDBEARER",
        "Nickname": "TEXT_TRAIT_SHIELDBEARER_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_SHIELDBEARER",
        "GeneralEffectUnit": "EFFECTUNIT_SHIELDBEARER"
      },
      {
        "zType": "TRAIT_FIERCE",
        "Name": "TEXT_TRAIT_FIERCE",
        "Nickname": "TEXT_TRAIT_FIERCE_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_FIERCE",
        "GeneralEffectUnit": "EFFECTUNIT_FIERCE",
        "aePositiveRating": {
          "zValue": "RATING_COURAGE"
        }
      },
      {
        "zType": "TRAIT_HORSEBANE",
        "Name": "TEXT_TRAIT_HORSEBANE",
        "Nickname": "TEXT_TRAIT_HORSEBANE_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_HORSEBANE",
        "GeneralEffectUnit": "EFFECTUNIT_HORSEBANE"
      },
      {
        "zType": "TRAIT_ENGINEER",
        "Name": "TEXT_TRAIT_ENGINEER",
        "Nickname": "TEXT_TRAIT_ENGINEER_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "bUpgrade": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_ENGINEER",
        "GeneralEffectUnit": "EFFECTUNIT_ENGINEER"
      },
      {
        "zType": "TRAIT_BOLD",
        "Name": "TEXT_TRAIT_BOLD",
        "Nickname": "TEXT_TRAIT_BOLD_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "2"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_COWARDLY",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_COWARDLY"
        }
      },
      {
        "zType": "TRAIT_COWARDLY",
        "Name": "TEXT_TRAIT_COWARDLY",
        "Nickname": "TEXT_TRAIT_COWARDLY_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "-2"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_BOLD",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_BOLD"
        }
      },
      {
        "zType": "TRAIT_GRACIOUS",
        "Name": "TEXT_TRAIT_GRACIOUS",
        "Nickname": "TEXT_TRAIT_GRACIOUS_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "2"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_GREEDY",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_GREEDY"
        }
      },
      {
        "zType": "TRAIT_GREEDY",
        "Name": "TEXT_TRAIT_GREEDY",
        "Nickname": "TEXT_TRAIT_GREEDY_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "bWeakness": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "-2"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_GRACIOUS",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_GRACIOUS"
        }
      },
      {
        "zType": "TRAIT_ROMANTIC",
        "Name": "TEXT_TRAIT_ROMANTIC",
        "Nickname": "TEXT_TRAIT_ROMANTIC_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "iBirthModifier": "25",
        "bStrength": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "2"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_BITTER",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_ROMANTIC"
        }
      },
      {
        "zType": "TRAIT_BITTER",
        "Name": "TEXT_TRAIT_BITTER",
        "Nickname": "TEXT_TRAIT_BITTER_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "-1"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_ROMANTIC",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_BITTER"
        }
      },
      {
        "zType": "TRAIT_EDUCATED",
        "Name": "TEXT_TRAIT_EDUCATED",
        "Nickname": "TEXT_TRAIT_EDUCATED_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "2"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_SUPERSTITIOUS",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_SUPERSTITIOUS"
        }
      },
      {
        "zType": "TRAIT_SUPERSTITIOUS",
        "Name": "TEXT_TRAIT_SUPERSTITIOUS",
        "Nickname": "TEXT_TRAIT_SUPERSTITIOUS_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "-2"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_EDUCATED",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_EDUCATED"
        }
      },
      {
        "zType": "TRAIT_COMPASSIONATE",
        "Name": "TEXT_TRAIT_COMPASSIONATE",
        "Nickname": "TEXT_TRAIT_COMPASSIONATE_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "iValue": "1"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "1"
            }
          ]
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_RUTHLESS",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_RUTHLESS"
        }
      },
      {
        "zType": "TRAIT_RUTHLESS",
        "Name": "TEXT_TRAIT_RUTHLESS",
        "Nickname": "TEXT_TRAIT_RUTHLESS_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bWeakness": "1",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "2"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "-1"
            }
          ]
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_COMPASSIONATE",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_COMPASSIONATE"
        }
      },
      {
        "zType": "TRAIT_PIOUS",
        "Name": "TEXT_TRAIT_PIOUS",
        "Nickname": "TEXT_TRAIT_PIOUS_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "1"
            },
            {
              "zIndex": "RATING_CHARISMA",
              "iValue": "1"
            }
          ]
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_WANTON",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_WANTON"
        }
      },
      {
        "zType": "TRAIT_WANTON",
        "Name": "TEXT_TRAIT_WANTON",
        "Nickname": "TEXT_TRAIT_WANTON_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "iBirthModifier": "25",
        "bWeakness": "1",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "iValue": "2"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "-1"
            }
          ]
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_PIOUS",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_PIOUS"
        }
      },
      {
        "zType": "TRAIT_LOYAL",
        "Name": "TEXT_TRAIT_LOYAL",
        "Nickname": "TEXT_TRAIT_LOYAL_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "2"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_CUNNING",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_CUNNING"
        }
      },
      {
        "zType": "TRAIT_CUNNING",
        "Name": "TEXT_TRAIT_CUNNING",
        "Nickname": "TEXT_TRAIT_CUNNING_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "bStrength": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_CUNNING",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_LOYAL",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_LOYAL"
        }
      },
      {
        "zType": "TRAIT_HUMBLE",
        "Name": "TEXT_TRAIT_HUMBLE",
        "Nickname": "TEXT_TRAIT_HUMBLE_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "1"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "1"
            }
          ]
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_PROUD",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_PROUD"
        }
      },
      {
        "zType": "TRAIT_PROUD",
        "Name": "TEXT_TRAIT_PROUD",
        "Nickname": "TEXT_TRAIT_PROUD_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinion": "-40",
        "iOpinionSame": "20",
        "bStrength": "1",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "-1"
            },
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "2"
            }
          ]
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_HUMBLE",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_HUMBLE"
        }
      },
      {
        "zType": "TRAIT_WITTY",
        "Name": "TEXT_TRAIT_WITTY",
        "Nickname": "TEXT_TRAIT_WITTY_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "iValue": "1"
            },
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_SPOILED",
        "Name": "TEXT_TRAIT_SPOILED",
        "Nickname": "TEXT_TRAIT_SPOILED_NICKNAME",
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "TRAIT_DRUNK",
        "Name": "TEXT_TRAIT_DRUNK",
        "Nickname": "TEXT_TRAIT_DRUNK_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bWeakness": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_DRUNK",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "TRAIT_INSANE",
        "Name": "TEXT_TRAIT_INSANE",
        "Nickname": "TEXT_TRAIT_INSANE_NICKNAME",
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "bWeakness": "1",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "-2"
            },
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "2"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "-2"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_BLESSED",
        "Name": "TEXT_TRAIT_BLESSED",
        "Nickname": "TEXT_TRAIT_BLESSED_NICKNAME"
      },
      {
        "zType": "TRAIT_CURSED",
        "Name": "TEXT_TRAIT_CURSED",
        "Nickname": "TEXT_TRAIT_CURSED_NICKNAME"
      },
      {
        "zType": "TRAIT_EXOTIC",
        "Name": "TEXT_TRAIT_EXOTIC",
        "Nickname": "TEXT_TRAIT_EXOTIC_NICKNAME",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "2"
          }
        }
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
        "zType": "TRAIT_STUDY_PHILOSOPHY",
        "Name": "TEXT_TRAIT_STUDY_PHILOSOPHY",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_STUDY_RHETORIC",
        "Name": "TEXT_TRAIT_STUDY_RHETORIC",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_STUDY_TACTICS",
        "Name": "TEXT_TRAIT_STUDY_TACTICS",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_STUDY_COMMERCE",
        "Name": "TEXT_TRAIT_STUDY_COMMERCE",
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
        "zType": "TRAIT_IMPRISONED",
        "Name": "TEXT_TRAIT_IMPRISONED",
        "iOpinion": "-100",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1",
        "MemoryCharacter": "MEMORYCHARACTER_IMPRISONED_RECENTLY"
      },
      {
        "zType": "TRAIT_FUGITIVE",
        "Name": "TEXT_TRAIT_FUGITIVE",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1"
      },
      {
        "zType": "TRAIT_MISSING",
        "Name": "TEXT_TRAIT_MISSING",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1"
      },
      {
        "zType": "TRAIT_UNDER_ASYLUM",
        "Name": "TEXT_TRAIT_UNDER_ASYLUM",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1"
      },
      {
        "zType": "TRAIT_ELOPED",
        "Name": "TEXT_TRAIT_ELOPED",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1"
      },
      {
        "zType": "TRAIT_CAPTURED",
        "Name": "TEXT_TRAIT_CAPTURED",
        "iOpinion": "-100",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1"
      },
      {
        "zType": "TRAIT_EXILED",
        "Name": "TEXT_TRAIT_EXILED",
        "iOpinion": "-100",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1"
      },
      {
        "zType": "TRAIT_DESERTER",
        "Name": "TEXT_TRAIT_DESERTER",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1"
      },
      {
        "zType": "TRAIT_INCUBATED",
        "Name": "TEXT_TRAIT_INCUBATED",
        "iRemoveProb": "30",
        "bNoJob": "1",
        "bRemoveLeader": "1",
        "bRemoveDeath": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "-2"
          }
        },
        "aiMortalityDieProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "5"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "10"
            },
            {
              "zIndex": "MORTALITY_REALISTIC",
              "iValue": "15"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_SLIGHTED",
        "Name": "TEXT_TRAIT_SLIGHTED",
        "iOpinion": "-100",
        "bNoJob": "1",
        "bRemoveLeader": "1"
      },
      {
        "zType": "TRAIT_ILL",
        "Name": "TEXT_TRAIT_ILL",
        "iRemoveProb": "60",
        "bRemoveLeader": "1",
        "bRemoveDeath": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "-2"
          }
        },
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
        "bNoEvents": "1",
        "bRemoveLeader": "1",
        "bRemoveDeath": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "-2"
          }
        },
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
        "zType": "TRAIT_WOUNDED",
        "Name": "TEXT_TRAIT_WOUNDED",
        "iRemoveProb": "80",
        "bRemoveLeader": "1",
        "bRemoveDeath": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "-2"
          }
        },
        "aiTraitProb": {
          "Pair": {
            "zIndex": "TRAIT_SCARRED",
            "iValue": "20"
          }
        },
        "aiMortalityDieProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "20"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "30"
            },
            {
              "zIndex": "MORTALITY_REALISTIC",
              "iValue": "40"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_SEVERELY_WOUNDED",
        "Name": "TEXT_TRAIT_SEVERELY_WOUNDED",
        "iRemoveProb": "40",
        "bNoEvents": "1",
        "bRemoveLeader": "1",
        "bRemoveDeath": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "-2"
          }
        },
        "aiTraitProb": {
          "Pair": [
            {
              "zIndex": "TRAIT_CRIPPLED",
              "iValue": "20"
            },
            {
              "zIndex": "TRAIT_BLINDED",
              "iValue": "20"
            }
          ]
        },
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
        "iOpinion": "-40",
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
        "Nickname": "TEXT_TRAIT_CRIPPLED_NICKNAME",
        "iInjuryDie": "3",
        "GeneralEffectUnit": "EFFECTUNIT_CRIPPLED"
      },
      {
        "zType": "TRAIT_BLINDED",
        "Name": "TEXT_TRAIT_BLINDED",
        "Nickname": "TEXT_TRAIT_BLINDED_NICKNAME",
        "iInjuryDie": "1",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_DOOMED",
        "Name": "TEXT_TRAIT_DOOMED",
        "bNoEvents": "1",
        "bRemoveDeath": "1",
        "bDoomed": "1"
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
        "zType": "TRAIT_LEGITIMIZED",
        "Name": "TEXT_TRAIT_LEGITIMIZED",
        "iOpinion": "40"
      },
      {
        "zType": "TRAIT_ADOPTED",
        "Name": "TEXT_TRAIT_ADOPTED"
      },
      {
        "zType": "TRAIT_PREGNANT",
        "Name": "TEXT_TRAIT_PREGNANT"
      },
      {
        "zType": "TRAIT_CLAIMED",
        "Name": "TEXT_TRAIT_CLAIMED"
      },
      {
        "zType": "TRAIT_CLERGY",
        "Name": "TEXT_TRAIT_CLERGY",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "TRAIT_ASCETIC",
        "Name": "TEXT_TRAIT_ASCETIC",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "iValue": "-2"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "1"
            },
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_ARTIST",
        "Name": "TEXT_TRAIT_ARTIST",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "TRAIT_FAMOUS",
        "Name": "TEXT_TRAIT_FAMOUS",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_FAMOUS",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_FAMOUS",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_INFAMOUS",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_INFAMOUS"
        }
      },
      {
        "zType": "TRAIT_INFAMOUS",
        "Name": "TEXT_TRAIT_INFAMOUS",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_INFAMOUS",
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_FAMOUS",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_FAMOUS"
        }
      },
      {
        "zType": "TRAIT_ABDICATED",
        "Name": "TEXT_TRAIT_ABDICATED"
      },
      {
        "zType": "TRAIT_REGENT",
        "Name": "TEXT_TRAIT_REGENT",
        "iOpinionFamily": "40"
      },
      {
        "zType": "TRAIT_RIGHTFUL_HEIR",
        "Name": "TEXT_TRAIT_RIGHTFUL_HEIR"
      },
      {
        "zType": "TRAIT_EXCLUDED",
        "Name": "TEXT_TRAIT_EXCLUDED",
        "iOpinion": "-100",
        "bNoHeir": "1"
      },
      {
        "zType": "TRAIT_SOLDIER",
        "Name": "TEXT_TRAIT_SOLDIER",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_SOLDIER",
        "GeneralEffectUnit": "EFFECTUNIT_SOLDIER"
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
        }
      },
      {
        "zType": "TRAIT_PROPHET",
        "Name": "TEXT_TRAIT_PROPHET",
        "iOpinionSame": "-100",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_PROPHET",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "TRAIT_ARCHON",
        "Name": "TEXT_TRAIT_ARCHON",
        "Nickname": "TEXT_TRAIT_ARCHON_NICKNAME",
        "bNickname": "1",
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
        "zType": "TRAIT_MONKEY_PAW",
        "Name": "TEXT_TRAIT_MONKEY_PAW"
      },
      {
        "zType": "TRAIT_DOG_OWNER",
        "Name": "TEXT_TRAIT_DOG_OWNER"
      },
      {
        "zType": "TRAIT_OVERSEER_OF_THE_FIELDS",
        "Name": "TEXT_TRAIT_OVERSEER_OF_THE_FIELDS",
        "Nickname": "TEXT_TRAIT_OVERSEER_OF_THE_FIELDS_NICKNAME",
        "iOpinionFamily": "40",
        "bNickname": "1"
      },
      {
        "zType": "TRAIT_POSSESSOR_OF_VENERATION",
        "Name": "TEXT_TRAIT_POSSESSOR_OF_VENERATION",
        "Nickname": "TEXT_TRAIT_POSSESSOR_OF_VENERATION_NICKNAME",
        "iOpinionFamily": "40",
        "bNickname": "1"
      },
      {
        "zType": "TRAIT_STEWARD_OF_THE_CHAMBER",
        "Name": "TEXT_TRAIT_STEWARD_OF_THE_CHAMBER",
        "Nickname": "TEXT_TRAIT_STEWARD_OF_THE_CHAMBER_NICKNAME",
        "iOpinionFamily": "40",
        "bNickname": "1"
      },
      {
        "zType": "TRAIT_AMULET_OWNER_POSITIVE",
        "Name": "TEXT_TRAIT_AMULET_OWNER_POSITIVE",
        "iBirthModifier": "35"
      },
      {
        "zType": "TRAIT_AMULET_OWNER_NEGATIVE",
        "Name": "TEXT_TRAIT_AMULET_OWNER_NEGATIVE",
        "iBirthModifier": "-35"
      },
      {
        "zType": "TRAIT_GODS_CONSORT",
        "Name": "TEXT_TRAIT_GODS_CONSORT",
        "Nickname": "TEXT_TRAIT_GODS_CONSORT_NICKNAME",
        "bNickname": "1"
      },
      {
        "zType": "TRAIT_DROUGHT_STRICKEN",
        "Name": "TEXT_TRAIT_DROUGHT_STRICKEN",
        "iDieProb": "10",
        "iRemoveProb": "50",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_DROUGHT_STRICKEN"
      },
      {
        "zType": "TRAIT_HORSE",
        "Name": "TEXT_TRAIT_HORSE",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "3"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "1"
            },
            {
              "zIndex": "RATING_WISDOM",
              "iValue": "-5"
            }
          ]
        }
      },
      {
        "zType": "TRAIT_AMARNA_REFORMER",
        "Name": "TEXT_TRAIT_AMARNA_REFORMER",
        "aeTraitInvalid": {
          "zValue": "TRAIT_RIGHTEOUS"
        }
      },
      {
        "zType": "TRAIT_BARRACKS_INSTRUCTOR",
        "Name": "TEXT_TRAIT_BARRACKS_INSTRUCTOR",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_SAVIOR_OF_THE_THRONE",
        "Name": "TEXT_TRAIT_SAVIOR_OF_THE_THRONE",
        "Nickname": "TEXT_TRAIT_SAVIOR_OF_THE_THRONE_NICKNAME",
        "bNickname": "1"
      },
      {
        "zType": "TRAIT_SAOSHYANT",
        "Name": "TEXT_TRAIT_SAOSHYANT",
        "Nickname": "TEXT_TRAIT_SAOSHYANT_NICKNAME",
        "iMinAge": "12",
        "iOpinionGenerals": "-40",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "2"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "-2"
            }
          ]
        }
      }
    ]
  }
}
    export default data
    