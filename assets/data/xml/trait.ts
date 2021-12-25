
    const data: XmlTrait.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "GenderedNames": {
          
        },
        "Description": {
          
        },
        "Nickname": {
          
        },
        "GainTexts": {
          
        },
        "LoseTexts": {
          
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
        "iAgentModifier": {
          
        },
        "iBirthModifier": {
          
        },
        "iTribeAllianceModifier": {
          
        },
        "iAllianceModifier": {
          
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
        "bDisplay": {
          
        },
        "bUpgrade": {
          
        },
        "bNoEvents": {
          
        },
        "bNoMissions": {
          
        },
        "bNoMarry": {
          
        },
        "bNoSpouse": {
          
        },
        "bNoBirth": {
          
        },
        "bNoHeir": {
          
        },
        "bNoJob": {
          
        },
        "bNoCourtier": {
          
        },
        "bNoFamilyHead": {
          
        },
        "bNoReligionHead": {
          
        },
        "bNoReligion": {
          
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
        "LeaderEffectPlayer": {
          
        },
        "GovernorEffectCity": {
          
        },
        "GeneralEffectUnit": {
          
        },
        "LeaderEffectUnit": {
          
        },
        "AdjacentEffectUnit": {
          
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_HERO_ARCHETYPE_F"
          }
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_COMMANDER_ARCHETYPE_F"
          }
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_TACTICIAN_ARCHETYPE_F"
          }
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_ZEALOT_ARCHETYPE_F"
          }
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SCHEMER_ARCHETYPE_F"
          }
        },
        "Nickname": "TEXT_TRAIT_SCHEMER_ARCHETYPE_NICKNAME",
        "zIconName": "TRAIT_SCHEMER",
        "iMinAge": "12",
        "iNoFamilyDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "40",
        "iOpinionCognomen": "-40",
        "iAgentModifier": "20",
        "iTribeAllianceModifier": "50",
        "iAllianceModifier": "50",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_ORATOR_ARCHETYPE_F"
          }
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_DIPLOMAT_ARCHETYPE_F"
          }
        },
        "Nickname": "TEXT_TRAIT_DIPLOMAT_ARCHETYPE_NICKNAME",
        "zIconName": "TRAIT_DIPLOMAT",
        "iMinAge": "12",
        "iNoFamilyDie": "1",
        "iOpinionSame": "40",
        "iOpinionTrades": "-40",
        "iPeaceModifier": "50",
        "bArchetype": "1",
        "bGovernorPrereq": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_DIPLOMAT_ARCHETYPE",
        "GovernorEffectCity": "EFFECTCITY_TRAIT_DIPLOMAT",
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
            "zIndex": "LAW_COLONIES",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "TRAIT_JUDGE_ARCHETYPE",
        "Name": "TEXT_TRAIT_JUDGE_ARCHETYPE",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_JUDGE_ARCHETYPE_F"
          }
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_BUILDER_ARCHETYPE_F"
          }
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SCHOLAR_ARCHETYPE_F"
          }
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_AFFABLE_F"
          }
        },
        "Nickname": "TEXT_TRAIT_AFFABLE_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_AFFABLE_GAIN_1",
            "TEXT_TRAIT_AFFABLE_GAIN_2"
          ]
        },
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
            "iValue": "-20"
          }
        },
        "aeTraitInvalid": {
          "zValue": [
            "TRAIT_CRUEL",
            "TRAIT_RUTHLESS"
          ]
        },
        "aePositiveRating": {
          "zValue": "RATING_CHARISMA"
        }
      },
      {
        "zType": "TRAIT_CRUEL",
        "Name": "TEXT_TRAIT_CRUEL",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_CRUEL_F"
          }
        },
        "Nickname": "TEXT_TRAIT_CRUEL_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_CRUEL_GAIN_1",
            "TEXT_TRAIT_CRUEL_GAIN_2"
          ]
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "40",
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
          "zValue": [
            "TRAIT_AFFABLE",
            "TRAIT_COMPASSIONATE"
          ]
        }
      },
      {
        "zType": "TRAIT_ELOQUENT",
        "Name": "TEXT_TRAIT_ELOQUENT",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_ELOQUENT_F"
          }
        },
        "Nickname": "TEXT_TRAIT_ELOQUENT_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_ELOQUENT_GAIN_1",
            "TEXT_TRAIT_ELOQUENT_GAIN_2"
          ]
        },
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
            "iValue": "-20"
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
        "zType": "TRAIT_INTOLERANT",
        "Name": "TEXT_TRAIT_INTOLERANT",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_INTOLERANT_F"
          }
        },
        "Nickname": "TEXT_TRAIT_INTOLERANT_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_INTOLERANT_GAIN_1",
            "TEXT_TRAIT_INTOLERANT_GAIN_2"
          ]
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
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
        "zType": "TRAIT_WARLIKE",
        "Name": "TEXT_TRAIT_WARLIKE",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_WARLIKE_F"
          }
        },
        "Nickname": "TEXT_TRAIT_WARLIKE_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_WARLIKE_GAIN_1",
            "TEXT_TRAIT_WARLIKE_GAIN_2"
          ]
        },
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
            "iValue": "-20"
          }
        },
        "aeTraitInvalid": {
          "zValue": [
            "TRAIT_SLOTHFUL",
            "TRAIT_TIMID"
          ]
        },
        "aePositiveRating": {
          "zValue": "RATING_COURAGE"
        }
      },
      {
        "zType": "TRAIT_SLOTHFUL",
        "Name": "TEXT_TRAIT_SLOTHFUL",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SLOTHFUL_F"
          }
        },
        "Nickname": "TEXT_TRAIT_SLOTHFUL_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_SLOTHFUL_GAIN_1",
            "TEXT_TRAIT_SLOTHFUL_GAIN_2"
          ]
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
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
          "zValue": [
            "TRAIT_WARLIKE",
            "TRAIT_BOLD"
          ]
        },
        "aeNegativeRating": {
          "zValue": "RATING_COURAGE"
        }
      },
      {
        "zType": "TRAIT_INSPIRING",
        "Name": "TEXT_TRAIT_INSPIRING",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_INSPIRING_F"
          }
        },
        "Nickname": "TEXT_TRAIT_INSPIRING_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_INSPIRING_GAIN_1",
            "TEXT_TRAIT_INSPIRING_GAIN_2"
          ]
        },
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
            "iValue": "-20"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_UNCOUTH"
        },
        "aePositiveRating": {
          "zValue": "RATING_CHARISMA"
        }
      },
      {
        "zType": "TRAIT_UNCOUTH",
        "Name": "TEXT_TRAIT_UNCOUTH",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_UNCOUTH_F"
          }
        },
        "Nickname": "TEXT_TRAIT_UNCOUTH_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_UNCOUTH_GAIN_1",
            "TEXT_TRAIT_UNCOUTH_GAIN_2"
          ]
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
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
        "zType": "TRAIT_INTELLIGENT",
        "Name": "TEXT_TRAIT_INTELLIGENT",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_INTELLIGENT_F"
          }
        },
        "Nickname": "TEXT_TRAIT_INTELLIGENT_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_INTELLIGENT_GAIN_1",
            "TEXT_TRAIT_INTELLIGENT_GAIN_2"
          ]
        },
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
            "iValue": "-20"
          }
        },
        "aeTraitInvalid": {
          "zValue": [
            "TRAIT_FOOLISH",
            "TRAIT_SUPERSTITIOUS"
          ]
        },
        "aePositiveRating": {
          "zValue": "RATING_WISDOM"
        }
      },
      {
        "zType": "TRAIT_FOOLISH",
        "Name": "TEXT_TRAIT_FOOLISH",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_FOOLISH_F"
          }
        },
        "Nickname": "TEXT_TRAIT_FOOLISH_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_FOOLISH_GAIN_1",
            "TEXT_TRAIT_FOOLISH_GAIN_2"
          ]
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
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
          "zValue": [
            "TRAIT_INTELLIGENT",
            "TRAIT_EDUCATED"
          ]
        },
        "aeNegativeRating": {
          "zValue": "RATING_WISDOM"
        }
      },
      {
        "zType": "TRAIT_PROSPEROUS",
        "Name": "TEXT_TRAIT_PROSPEROUS",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_PROSPEROUS_F"
          }
        },
        "Nickname": "TEXT_TRAIT_PROSPEROUS_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_PROSPEROUS_GAIN_1",
            "TEXT_TRAIT_PROSPEROUS_GAIN_2"
          ]
        },
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
            "iValue": "-20"
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
        "zType": "TRAIT_EXTRAVAGANT",
        "Name": "TEXT_TRAIT_EXTRAVAGANT",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_EXTRAVAGANT_F"
          }
        },
        "Nickname": "TEXT_TRAIT_EXTRAVAGANT_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_EXTRAVAGANT_GAIN_1",
            "TEXT_TRAIT_EXTRAVAGANT_GAIN_2"
          ]
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "40",
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
        "zType": "TRAIT_FRUGAL",
        "Name": "TEXT_TRAIT_FRUGAL",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_FRUGAL_F"
          }
        },
        "Nickname": "TEXT_TRAIT_FRUGAL_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_FRUGAL_GAIN_1",
            "TEXT_TRAIT_FRUGAL_GAIN_2"
          ]
        },
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
            "iValue": "-20"
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
        "zType": "TRAIT_CORRUPT",
        "Name": "TEXT_TRAIT_CORRUPT",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_CORRUPT_F"
          }
        },
        "Nickname": "TEXT_TRAIT_CORRUPT_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_CORRUPT_GAIN_1",
            "TEXT_TRAIT_CORRUPT_GAIN_2"
          ]
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
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
        "zType": "TRAIT_RIGHTEOUS",
        "Name": "TEXT_TRAIT_RIGHTEOUS",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_RIGHTEOUS_F"
          }
        },
        "Nickname": "TEXT_TRAIT_RIGHTEOUS_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_RIGHTEOUS_GAIN_1",
            "TEXT_TRAIT_RIGHTEOUS_GAIN_2"
          ]
        },
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
            "iValue": "-20"
          }
        },
        "aeTraitInvalid": {
          "zValue": [
            "TRAIT_DEBAUCHED",
            "TRAIT_WANTON"
          ]
        }
      },
      {
        "zType": "TRAIT_DEBAUCHED",
        "Name": "TEXT_TRAIT_DEBAUCHED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_DEBAUCHED_F"
          }
        },
        "Nickname": "TEXT_TRAIT_DEBAUCHED_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_DEBAUCHED_GAIN_1",
            "TEXT_TRAIT_DEBAUCHED_GAIN_2"
          ]
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
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
          "zValue": [
            "TRAIT_RIGHTEOUS",
            "TRAIT_PIOUS"
          ]
        },
        "aeNegativeRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_ROBUST",
        "Name": "TEXT_TRAIT_ROBUST",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_ROBUST_F"
          }
        },
        "Nickname": "TEXT_TRAIT_ROBUST_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_ROBUST_GAIN_1",
            "TEXT_TRAIT_ROBUST_GAIN_2"
          ]
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_VIGILANT_F"
          }
        },
        "Nickname": "TEXT_TRAIT_VIGILANT_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_VIGILANT_GAIN_1",
            "TEXT_TRAIT_VIGILANT_GAIN_2"
          ]
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_STRICT_F"
          }
        },
        "Nickname": "TEXT_TRAIT_STRICT_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_STRICT_GAIN_1",
            "TEXT_TRAIT_STRICT_GAIN_2"
          ]
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_EQUESTRIAN_F"
          }
        },
        "Nickname": "TEXT_TRAIT_EQUESTRIAN_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_EQUESTRIAN_GAIN_1",
            "TEXT_TRAIT_EQUESTRIAN_GAIN_2"
          ]
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_CARPENTER_F"
          }
        },
        "Nickname": "TEXT_TRAIT_CARPENTER_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_CARPENTER_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_PATHFINDER_F"
          }
        },
        "Nickname": "TEXT_TRAIT_PATHFINDER_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_PATHFINDER_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_CULTIVATOR_F"
          }
        },
        "Nickname": "TEXT_TRAIT_CULTIVATOR_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_CULTIVATOR_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_NATURALIST_F"
          }
        },
        "Nickname": "TEXT_TRAIT_NATURALIST_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_NATURALIST_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_DELVER_F"
          }
        },
        "Nickname": "TEXT_TRAIT_DELVER_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_DELVER_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_DEALMAKER_F"
          }
        },
        "Nickname": "TEXT_TRAIT_DEALMAKER_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_DEALMAKER_GAIN_1",
            "TEXT_TRAIT_DEALMAKER_GAIN_2"
          ]
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_TRACKER_F"
          }
        },
        "Nickname": "TEXT_TRAIT_TRACKER_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_TRACKER_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SWIFT_F"
          }
        },
        "Nickname": "TEXT_TRAIT_SWIFT_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_SWIFT_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_BESIEGER_F"
          }
        },
        "Nickname": "TEXT_TRAIT_BESIEGER_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_BESIEGER_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_TOUGH_F"
          }
        },
        "Nickname": "TEXT_TRAIT_TOUGH_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_TOUGH_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_BLOODTHIRSTY_F"
          }
        },
        "Nickname": "TEXT_TRAIT_BLOODTHIRSTY_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_BLOODTHIRSTY_GAIN_1",
            "TEXT_TRAIT_BLOODTHIRSTY_GAIN_2"
          ]
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_HECKLER_F"
          }
        },
        "Nickname": "TEXT_TRAIT_HECKLER_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_HECKLER_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_STEADFAST_F"
          }
        },
        "Nickname": "TEXT_TRAIT_STEADFAST_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_STEADFAST_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_HERBALIST_F"
          }
        },
        "Nickname": "TEXT_TRAIT_HERBALIST_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_HERBALIST_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_HIGHLANDER_F"
          }
        },
        "Nickname": "TEXT_TRAIT_HIGHLANDER_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_HIGHLANDER_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_RANGER_F"
          }
        },
        "Nickname": "TEXT_TRAIT_RANGER_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_RANGER_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_BRAVE_F"
          }
        },
        "Nickname": "TEXT_TRAIT_BRAVE_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_BRAVE_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SHIELDBEARER_F"
          }
        },
        "Nickname": "TEXT_TRAIT_SHIELDBEARER_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_SHIELDBEARER_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_FIERCE_F"
          }
        },
        "Nickname": "TEXT_TRAIT_FIERCE_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_FIERCE_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_HORSEBANE_F"
          }
        },
        "Nickname": "TEXT_TRAIT_HORSEBANE_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_HORSEBANE_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_ENGINEER_F"
          }
        },
        "Nickname": "TEXT_TRAIT_ENGINEER_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_ENGINEER_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_BOLD_F"
          }
        },
        "Nickname": "TEXT_TRAIT_BOLD_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_BOLD_GAIN_1"
        },
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
            "zIndex": "TRAIT_TIMID",
            "iValue": "-20"
          }
        },
        "aeTraitInvalid": {
          "zValue": [
            "TRAIT_SLOTHFUL",
            "TRAIT_TIMID"
          ]
        },
        "aePositiveRating": {
          "zValue": "RATING_COURAGE"
        }
      },
      {
        "zType": "TRAIT_TIMID",
        "Name": "TEXT_TRAIT_TIMID",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_TIMID_F"
          }
        },
        "Nickname": "TEXT_TRAIT_TIMID_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_TIMID_GAIN_1"
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
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
          "zValue": [
            "TRAIT_WARLIKE",
            "TRAIT_BOLD"
          ]
        },
        "aeNegativeRating": {
          "zValue": "RATING_COURAGE"
        }
      },
      {
        "zType": "TRAIT_GRACIOUS",
        "Name": "TEXT_TRAIT_GRACIOUS",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_GRACIOUS_F"
          }
        },
        "Nickname": "TEXT_TRAIT_GRACIOUS_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_GRACIOUS_GAIN_1"
        },
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
            "iValue": "-20"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_GREEDY"
        },
        "aePositiveRating": {
          "zValue": "RATING_CHARISMA"
        }
      },
      {
        "zType": "TRAIT_GREEDY",
        "Name": "TEXT_TRAIT_GREEDY",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_GREEDY_F"
          }
        },
        "Nickname": "TEXT_TRAIT_GREEDY_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_GREEDY_GAIN_1"
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
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
        },
        "aeNegativeRating": {
          "zValue": "RATING_CHARISMA"
        }
      },
      {
        "zType": "TRAIT_ROMANTIC",
        "Name": "TEXT_TRAIT_ROMANTIC",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_ROMANTIC_F"
          }
        },
        "Nickname": "TEXT_TRAIT_ROMANTIC_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_ROMANTIC_GAIN_1"
        },
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
            "iValue": "-20"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_ROMANTIC"
        }
      },
      {
        "zType": "TRAIT_BITTER",
        "Name": "TEXT_TRAIT_BITTER",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_BITTER_F"
          }
        },
        "Nickname": "TEXT_TRAIT_BITTER_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_BITTER_GAIN_1"
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_EDUCATED_F"
          }
        },
        "Nickname": "TEXT_TRAIT_EDUCATED_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_EDUCATED_GAIN_1"
        },
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
            "iValue": "-20"
          }
        },
        "aeTraitInvalid": {
          "zValue": [
            "TRAIT_FOOLISH",
            "TRAIT_SUPERSTITIOUS"
          ]
        },
        "aePositiveRating": {
          "zValue": "RATING_WISDOM"
        }
      },
      {
        "zType": "TRAIT_SUPERSTITIOUS",
        "Name": "TEXT_TRAIT_SUPERSTITIOUS",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SUPERSTITIOUS_F"
          }
        },
        "Nickname": "TEXT_TRAIT_SUPERSTITIOUS_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_SUPERSTITIOUS_GAIN_1"
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "40",
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
          "zValue": [
            "TRAIT_INTELLIGENT",
            "TRAIT_EDUCATED"
          ]
        },
        "aeNegativeRating": {
          "zValue": "RATING_WISDOM"
        }
      },
      {
        "zType": "TRAIT_COMPASSIONATE",
        "Name": "TEXT_TRAIT_COMPASSIONATE",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_COMPASSIONATE_F"
          }
        },
        "Nickname": "TEXT_TRAIT_COMPASSIONATE_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_COMPASSIONATE_GAIN_1"
        },
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
            "iValue": "-20"
          }
        },
        "aeTraitInvalid": {
          "zValue": [
            "TRAIT_CRUEL",
            "TRAIT_RUTHLESS"
          ]
        }
      },
      {
        "zType": "TRAIT_RUTHLESS",
        "Name": "TEXT_TRAIT_RUTHLESS",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_RUTHLESS_F"
          }
        },
        "Nickname": "TEXT_TRAIT_RUTHLESS_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_RUTHLESS_GAIN_1"
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinionSame": "40",
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
          "zValue": [
            "TRAIT_AFFABLE",
            "TRAIT_COMPASSIONATE"
          ]
        }
      },
      {
        "zType": "TRAIT_PIOUS",
        "Name": "TEXT_TRAIT_PIOUS",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_PIOUS_F"
          }
        },
        "Nickname": "TEXT_TRAIT_PIOUS_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_PIOUS_GAIN_1"
        },
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
            "iValue": "-20"
          }
        },
        "aeTraitInvalid": {
          "zValue": [
            "TRAIT_DEBAUCHED",
            "TRAIT_WANTON"
          ]
        }
      },
      {
        "zType": "TRAIT_WANTON",
        "Name": "TEXT_TRAIT_WANTON",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_WANTON_F"
          }
        },
        "Nickname": "TEXT_TRAIT_WANTON_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_WANTON_GAIN_1"
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
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
          "zValue": [
            "TRAIT_RIGHTEOUS",
            "TRAIT_PIOUS"
          ]
        }
      },
      {
        "zType": "TRAIT_LOYAL",
        "Name": "TEXT_TRAIT_LOYAL",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_LOYAL_F"
          }
        },
        "Nickname": "TEXT_TRAIT_LOYAL_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_LOYAL_GAIN_1"
        },
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
            "zIndex": "TRAIT_DECEITFUL",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_DECEITFUL"
        },
        "aePositiveRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_DECEITFUL",
        "Name": "TEXT_TRAIT_DECEITFUL",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_DECEITFUL_F"
          }
        },
        "Nickname": "TEXT_TRAIT_DECEITFUL_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_DECEITFUL_GAIN_1"
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
        "bWeakness": "1",
        "aiRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "-2"
          }
        },
        "aiTraitOpinion": {
          "Pair": {
            "zIndex": "TRAIT_LOYAL",
            "iValue": "-40"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_LOYAL"
        },
        "aeNegativeRating": {
          "zValue": "RATING_DISCIPLINE"
        }
      },
      {
        "zType": "TRAIT_HUMBLE",
        "Name": "TEXT_TRAIT_HUMBLE",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_HUMBLE_F"
          }
        },
        "Nickname": "TEXT_TRAIT_HUMBLE_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_HUMBLE_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_PROUD_F"
          }
        },
        "Nickname": "TEXT_TRAIT_PROUD_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_PROUD_GAIN_1"
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iBarbDie": "1",
        "iOpinion": "-40",
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
        "zType": "TRAIT_CUNNING",
        "Name": "TEXT_TRAIT_CUNNING",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_CUNNING_F"
          }
        },
        "Nickname": "TEXT_TRAIT_CUNNING_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_CUNNING_GAIN_1"
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "20",
        "bStrength": "1",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_CUNNING"
      },
      {
        "zType": "TRAIT_WITTY",
        "Name": "TEXT_TRAIT_WITTY",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_WITTY_F"
          }
        },
        "Nickname": "TEXT_TRAIT_WITTY_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_WITTY_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SPOILED_F"
          }
        },
        "Nickname": "TEXT_TRAIT_SPOILED_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_SPOILED_GAIN_1"
        },
        "iMinAge": "7",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_DRUNK_F"
          }
        },
        "Nickname": "TEXT_TRAIT_DRUNK_NICKNAME",
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_DRUNK_GAIN_1",
            "TEXT_TRAIT_DRUNK_GAIN_2"
          ]
        },
        "iMinAge": "10",
        "iAdjectiveDie": "1",
        "iOpinionSame": "40",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_INSANE_F"
          }
        },
        "Nickname": "TEXT_TRAIT_INSANE_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_INSANE_GAIN_1"
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_BLESSED_F"
          }
        },
        "Description": "TEXT_TRAIT_BLESSED_DESCRIPTION",
        "Nickname": "TEXT_TRAIT_BLESSED_NICKNAME",
        "bDisplay": "1"
      },
      {
        "zType": "TRAIT_CURSED",
        "Name": "TEXT_TRAIT_CURSED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_CURSED_F"
          }
        },
        "Description": "TEXT_TRAIT_CURSED_DESCRIPTION",
        "Nickname": "TEXT_TRAIT_CURSED_NICKNAME",
        "bDisplay": "1"
      },
      {
        "zType": "TRAIT_EXOTIC",
        "Name": "TEXT_TRAIT_EXOTIC",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_EXOTIC_F"
          }
        },
        "Nickname": "TEXT_TRAIT_EXOTIC_NICKNAME",
        "iBarbDie": "1",
        "bDisplay": "1",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_DIVINE_F"
          }
        },
        "bDisplay": "1",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_STUDY_PHILOSOPHY_F"
          }
        },
        "bDisplay": "1"
      },
      {
        "zType": "TRAIT_STUDY_POLITICS",
        "Name": "TEXT_TRAIT_STUDY_POLITICS",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_STUDY_POLITICS_F"
          }
        },
        "bDisplay": "1"
      },
      {
        "zType": "TRAIT_STUDY_TACTICS",
        "Name": "TEXT_TRAIT_STUDY_TACTICS",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_STUDY_TACTICS_F"
          }
        },
        "bDisplay": "1"
      },
      {
        "zType": "TRAIT_STUDY_COMMERCE",
        "Name": "TEXT_TRAIT_STUDY_COMMERCE",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_STUDY_COMMERCE_F"
          }
        },
        "bDisplay": "1"
      },
      {
        "zType": "TRAIT_EXPLORING",
        "Name": "TEXT_TRAIT_EXPLORING",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_EXPLORING_F"
          }
        },
        "bDisplay": "1",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoJob": "1",
        "aeTraitInvalid": {
          "zValue": [
            "TRAIT_STUDY_PHILOSOPHY",
            "TRAIT_STUDY_COMMERCE",
            "TRAIT_STUDY_POLITICS",
            "TRAIT_STUDY_TACTICS"
          ]
        }
      },
      {
        "zType": "TRAIT_IMPRISONED",
        "Name": "TEXT_TRAIT_IMPRISONED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_IMPRISONED_F"
          }
        },
        "iOpinion": "-100",
        "bDisplay": "1",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_FUGITIVE_F"
          }
        },
        "bDisplay": "1",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1",
        "bNoFamilyHead": "1"
      },
      {
        "zType": "TRAIT_MISSING",
        "Name": "TEXT_TRAIT_MISSING",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_MISSING_F"
          }
        },
        "bDisplay": "1",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1",
        "bNoFamilyHead": "1",
        "bNoReligionHead": "1"
      },
      {
        "zType": "TRAIT_UNDER_ASYLUM",
        "Name": "TEXT_TRAIT_UNDER_ASYLUM",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_UNDER_ASYLUM_F"
          }
        },
        "bDisplay": "1",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1",
        "bNoFamilyHead": "1"
      },
      {
        "zType": "TRAIT_ELOPED",
        "Name": "TEXT_TRAIT_ELOPED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_ELOPED_F"
          }
        },
        "bDisplay": "1",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1"
      },
      {
        "zType": "TRAIT_CAPTURED",
        "Name": "TEXT_TRAIT_CAPTURED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_CAPTURED_F"
          }
        },
        "iOpinion": "-100",
        "bDisplay": "1",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_EXILED_F"
          }
        },
        "iOpinion": "-100",
        "bDisplay": "1",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1",
        "bNoFamilyHead": "1"
      },
      {
        "zType": "TRAIT_DESERTER",
        "Name": "TEXT_TRAIT_DESERTER",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_DESERTER_F"
          }
        },
        "bDisplay": "1",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1",
        "bNoFamilyHead": "1"
      },
      {
        "zType": "TRAIT_INCUBATED",
        "Name": "TEXT_TRAIT_INCUBATED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_INCUBATED_F"
          }
        },
        "LoseTexts": {
          "zValue": "TEXT_TRAIT_INCUBATED_LOSS_1"
        },
        "iRemoveProb": "30",
        "bDisplay": "1",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SLIGHTED_F"
          }
        },
        "iOpinion": "-100",
        "bDisplay": "1",
        "bNoJob": "1",
        "bRemoveLeader": "1"
      },
      {
        "zType": "TRAIT_ILL",
        "Name": "TEXT_TRAIT_ILL",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_ILL_F"
          }
        },
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_ILL_GAIN_1",
            "TEXT_TRAIT_ILL_GAIN_2",
            "TEXT_TRAIT_ILL_GAIN_3",
            "TEXT_TRAIT_ILL_GAIN_4",
            "TEXT_TRAIT_ILL_GAIN_5"
          ]
        },
        "LoseTexts": {
          "zValue": [
            "TEXT_TRAIT_ILL_LOSS_1",
            "TEXT_TRAIT_ILL_LOSS_2",
            "TEXT_TRAIT_ILL_LOSS_3"
          ]
        },
        "iRemoveProb": "60",
        "bDisplay": "1",
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
        "aeTraitInvalid": {
          "zValue": "TRAIT_SEVERELY_ILL"
        }
      },
      {
        "zType": "TRAIT_SEVERELY_ILL",
        "Name": "TEXT_TRAIT_SEVERELY_ILL",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SEVERELY_ILL_F"
          }
        },
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_SEVERELY_ILL_GAIN_1",
            "TEXT_TRAIT_SEVERELY_ILL_GAIN_2",
            "TEXT_TRAIT_SEVERELY_ILL_GAIN_3",
            "TEXT_TRAIT_SEVERELY_ILL_GAIN_4",
            "TEXT_TRAIT_SEVERELY_ILL_GAIN_5"
          ]
        },
        "LoseTexts": {
          "zValue": [
            "TEXT_TRAIT_SEVERELY_ILL_LOSS_1",
            "TEXT_TRAIT_SEVERELY_ILL_LOSS_2",
            "TEXT_TRAIT_SEVERELY_ILL_LOSS_3"
          ]
        },
        "iRemoveProb": "40",
        "bDisplay": "1",
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
        "aeTraitInvalid": {
          "zValue": "TRAIT_ILL"
        }
      },
      {
        "zType": "TRAIT_WOUNDED",
        "Name": "TEXT_TRAIT_WOUNDED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_WOUNDED_F"
          }
        },
        "GainTexts": {
          "zValue": "TEXT_TRAIT_WOUNDED_GAIN_1"
        },
        "LoseTexts": {
          "zValue": "TEXT_TRAIT_WOUNDED_LOSS_1"
        },
        "iInjuryDie": "6",
        "iRemoveProb": "40",
        "bDisplay": "1",
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
            "iValue": "60"
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SEVERELY_WOUNDED_F"
          }
        },
        "GainTexts": {
          "zValue": "TEXT_TRAIT_SEVERELY_WOUNDED_GAIN_1"
        },
        "LoseTexts": {
          "zValue": "TEXT_TRAIT_SEVERELY_WOUNDED_LOSS_1"
        },
        "iInjuryDie": "3",
        "iRemoveProb": "20",
        "bDisplay": "1",
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
              "zIndex": "TRAIT_SCARRED",
              "iValue": "20"
            },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_POISONED_F"
          }
        },
        "LoseTexts": {
          "zValue": "TEXT_TRAIT_POISONED_LOSS_1"
        },
        "iRemoveProb": "25",
        "bDisplay": "1",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_MISERABLE_F"
          }
        },
        "iOpinion": "-40",
        "bDisplay": "1",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SCARRED_F"
          }
        },
        "GainTexts": {
          "zValue": [
            "TEXT_TRAIT_SCARRED_GAIN_1",
            "TEXT_TRAIT_SCARRED_GAIN_2",
            "TEXT_TRAIT_SCARRED_GAIN_3"
          ]
        },
        "iInjuryDie": "4",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_CRIPPLED_F"
          }
        },
        "Nickname": "TEXT_TRAIT_CRIPPLED_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_CRIPPLED_GAIN_1"
        },
        "iInjuryDie": "3",
        "GeneralEffectUnit": "EFFECTUNIT_CRIPPLED"
      },
      {
        "zType": "TRAIT_BLINDED",
        "Name": "TEXT_TRAIT_BLINDED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_BLINDED_F"
          }
        },
        "Nickname": "TEXT_TRAIT_BLINDED_NICKNAME",
        "GainTexts": {
          "zValue": "TEXT_TRAIT_BLINDED_GAIN_1"
        },
        "iInjuryDie": "1",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_DOOMED",
        "Name": "TEXT_TRAIT_DOOMED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_DOOMED_F"
          }
        },
        "Description": "TEXT_TRAIT_DOOMED_DESCRIPTION",
        "bRemoveDeath": "1",
        "bDoomed": "1"
      },
      {
        "zType": "TRAIT_GAY",
        "Name": "TEXT_TRAIT_GAY",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_GAY_F"
          }
        },
        "iAdultProb": "5",
        "iBirthModifier": "-50"
      },
      {
        "zType": "TRAIT_BASTARD",
        "Name": "TEXT_TRAIT_BASTARD",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_BASTARD_F"
          }
        },
        "bNoMarry": "1",
        "bNoHeir": "1"
      },
      {
        "zType": "TRAIT_LEGITIMIZED",
        "Name": "TEXT_TRAIT_LEGITIMIZED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_LEGITIMIZED_F"
          }
        },
        "iOpinion": "40"
      },
      {
        "zType": "TRAIT_ADOPTED",
        "Name": "TEXT_TRAIT_ADOPTED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_ADOPTED_F"
          }
        }
      },
      {
        "zType": "TRAIT_PREGNANT",
        "Name": "TEXT_TRAIT_PREGNANT"
      },
      {
        "zType": "TRAIT_CLAIMED",
        "Name": "TEXT_TRAIT_CLAIMED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_CLAIMED_F"
          }
        }
      },
      {
        "zType": "TRAIT_CLERGY",
        "Name": "TEXT_TRAIT_CLERGY",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_CLERGY_F"
          }
        },
        "bDisplay": "1",
        "bNoSpouse": "1",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_ASCETIC_F"
          }
        },
        "bDisplay": "1",
        "bNoSpouse": "1",
        "bNoBirth": "1",
        "bNoJob": "1",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "iValue": "-2"
            },
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
        "zType": "TRAIT_ARTIST",
        "Name": "TEXT_TRAIT_ARTIST",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_ARTIST_F"
          }
        },
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_FAMOUS_F"
          }
        },
        "bDisplay": "1",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_INFAMOUS_F"
          }
        },
        "bDisplay": "1",
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
        "Name": "TEXT_TRAIT_ABDICATED",
        "bRemoveLeader": "1"
      },
      {
        "zType": "TRAIT_REGENT",
        "Name": "TEXT_TRAIT_REGENT",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_REGENT_F"
          }
        },
        "iOpinionFamily": "40"
      },
      {
        "zType": "TRAIT_RIGHTFUL_HEIR",
        "Name": "TEXT_TRAIT_RIGHTFUL_HEIR",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_RIGHTFUL_HEIR_F"
          }
        }
      },
      {
        "zType": "TRAIT_EXCLUDED",
        "Name": "TEXT_TRAIT_EXCLUDED",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_EXCLUDED_F"
          }
        },
        "iOpinion": "-100",
        "bNoHeir": "1"
      },
      {
        "zType": "TRAIT_SOLDIER",
        "Name": "TEXT_TRAIT_SOLDIER",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SOLDIER_F"
          }
        },
        "bDisplay": "1",
        "GeneralEffectUnit": "EFFECTUNIT_SOLDIER"
      },
      {
        "zType": "TRAIT_MOURNING",
        "Name": "TEXT_TRAIT_MOURNING",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_MOURNING_F"
          }
        },
        "LoseTexts": {
          "zValue": "TEXT_TRAIT_MOURNING_LOSS_1"
        },
        "iRemoveProb": "25",
        "bDisplay": "1",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_PROPHET_F"
          }
        },
        "iOpinionSame": "-100",
        "bDisplay": "1",
        "GeneralEffectUnit": "EFFECTUNIT_PROPHET",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_ARCHON_F"
          }
        }
      },
      {
        "zType": "TRAIT_KING_OF_TYRE",
        "Name": "TEXT_TRAIT_KING_OF_TYRE",
        "Nickname": "TEXT_TRAIT_KING_OF_TYRE_NICKNAME",
        "bNickname": "1",
        "bDisplay": "1",
        "bNoMissions": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1",
        "bNoReligionHead": "1"
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
        "Name": "TEXT_TRAIT_DOG_OWNER",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_DOG_OWNER_F"
          }
        }
      },
      {
        "zType": "TRAIT_AMULET_OWNER_POSITIVE",
        "Name": "TEXT_TRAIT_AMULET_OWNER_POSITIVE",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_AMULET_OWNER_POSITIVE_F"
          }
        },
        "iBirthModifier": "35"
      },
      {
        "zType": "TRAIT_AMULET_OWNER_NEGATIVE",
        "Name": "TEXT_TRAIT_AMULET_OWNER_NEGATIVE",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_AMULET_OWNER_NEGATIVE_F"
          }
        },
        "iBirthModifier": "-35"
      },
      {
        "zType": "TRAIT_GODS_CONSORT",
        "Name": "TEXT_TRAIT_GODS_CONSORT",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_GODS_CONSORT_F"
          }
        },
        "Nickname": "TEXT_TRAIT_GODS_CONSORT_NICKNAME",
        "bNickname": "1"
      },
      {
        "zType": "TRAIT_DROUGHT_STRICKEN",
        "Name": "TEXT_TRAIT_DROUGHT_STRICKEN",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_DROUGHT_STRICKEN_F"
          }
        },
        "LoseTexts": {
          "zValue": "TEXT_TRAIT_DROUGHT_STRICKEN_LOSS_1"
        },
        "iDieProb": "10",
        "iRemoveProb": "50",
        "LeaderEffectPlayer": "EFFECTPLAYER_TRAIT_DROUGHT_STRICKEN"
      },
      {
        "zType": "TRAIT_HORSE",
        "Name": "TEXT_TRAIT_HORSE",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_HORSE_F"
          }
        },
        "bNoEvents": "1",
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
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_AMARNA_REFORMER_F"
          }
        },
        "aeTraitInvalid": {
          "zValue": "TRAIT_RIGHTEOUS"
        }
      },
      {
        "zType": "TRAIT_BARRACKS_INSTRUCTOR",
        "Name": "TEXT_TRAIT_BARRACKS_INSTRUCTOR",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_BARRACKS_INSTRUCTOR_F"
          }
        },
        "bDisplay": "1",
        "bNoJob": "1"
      },
      {
        "zType": "TRAIT_SAVIOR_OF_THE_THRONE",
        "Name": "TEXT_TRAIT_SAVIOR_OF_THE_THRONE",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SAVIOR_OF_THE_THRONE_F"
          }
        },
        "Nickname": "TEXT_TRAIT_SAVIOR_OF_THE_THRONE_NICKNAME",
        "bNickname": "1"
      },
      {
        "zType": "TRAIT_SAOSHYANT",
        "Name": "TEXT_TRAIT_SAOSHYANT",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_SAOSHYANT_F"
          }
        },
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
      },
      {
        "zType": "TRAIT_REBEL_SLAVE",
        "Name": "TEXT_TRAIT_REBEL_SLAVE",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_REBEL_SLAVE_F"
          }
        },
        "bDisplay": "1",
        "bNoEvents": "1",
        "bNoMissions": "1",
        "bNoMarry": "1",
        "bNoSpouse": "1",
        "bNoBirth": "1",
        "bNoHeir": "1",
        "bNoJob": "1",
        "bNoCourtier": "1"
      },
      {
        "zType": "TRAIT_COMMANDER_ROYAL_GUARD",
        "Name": "TEXT_TRAIT_COMMANDER_ROYAL_GUARD",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_COMMANDER_ROYAL_GUARD_F"
          }
        },
        "bDisplay": "1",
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
        }
      },
      {
        "zType": "TRAIT_COMMANDER_BORDER_FORTS",
        "Name": "TEXT_TRAIT_COMMANDER_BORDER_FORTS",
        "GenderedNames": {
          "Pair": {
            "First": "GENDER_FEMALE",
            "Second": "TEXT_TRAIT_COMMANDER_BORDER_FORTS_F"
          }
        },
        "bDisplay": "1",
        "aiRating": {
          "Pair": [
            {
              "zIndex": "RATING_COURAGE",
              "iValue": "1"
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "iValue": "1"
            }
          ]
        }
      }
    ]
  }
}
    export default data
    