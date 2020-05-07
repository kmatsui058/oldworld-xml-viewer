
    const data: XmlMission.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "NamePlus": {
          
        },
        "iCost": {
          
        },
        "iXP": {
          
        },
        "iMissionTurns": {
          
        },
        "iMinDiplomacyTurnsTurns": {
          
        },
        "bVisibleCharacter": {
          
        },
        "bVisibleTarget": {
          
        },
        "bVisibleAlways": {
          
        },
        "bNoPopup": {
          
        },
        "bHighlight": {
          
        },
        "SubjectCharacter": {
          
        },
        "SubjectCharacterPlayer": {
          
        },
        "SubjectTarget": {
          
        },
        "SubjectRelation": {
          
        },
        "aiResultDie": {
          
        },
        "aiYieldCost": {
          
        }
      },
      {
        "zType": "MISSION_AMBASSADOR",
        "Name": "TEXT_MISSION_AMBASSADOR",
        "iCost": "1",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_CHARACTER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_AMBASSADOR",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_CHANCELLOR",
        "Name": "TEXT_MISSION_CHANCELLOR",
        "iCost": "1",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_CHARACTER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_CHANCELLOR",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_SPYMASTER",
        "Name": "TEXT_MISSION_SPYMASTER",
        "iCost": "1",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_CHARACTER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_SPYMASTER",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_ALLIANCE",
        "Name": "TEXT_MISSION_PLAYER_ALLIANCE",
        "NamePlus": "TEXT_MISSION_PLAYER_ALLIANCE_PLUS",
        "iCost": "1",
        "iMissionTurns": "1",
        "iMinDiplomacyTurnsTurns": "4",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bNoPopup": "1",
        "bHighlight": "1",
        "SubjectCharacter": "SUBJECT_LEADER_DIPLOMAT",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_PLAYER_PEACE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_ALLIANCE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_PEACE",
        "Name": "TEXT_MISSION_PLAYER_PEACE",
        "NamePlus": "TEXT_MISSION_PLAYER_PEACE_PLUS",
        "iCost": "1",
        "iXP": "20",
        "iMissionTurns": "1",
        "iMinDiplomacyTurnsTurns": "4",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_PLAYER_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_PEACE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_TRUCE",
        "Name": "TEXT_MISSION_PLAYER_TRUCE",
        "NamePlus": "TEXT_MISSION_PLAYER_TRUCE_PLUS",
        "iCost": "1",
        "iXP": "20",
        "iMissionTurns": "1",
        "iMinDiplomacyTurnsTurns": "4",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_PLAYER_WAR",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_TRUCE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_DECLARE_WAR",
        "Name": "TEXT_MISSION_PLAYER_DECLARE_WAR",
        "NamePlus": "TEXT_MISSION_PLAYER_DECLARE_WAR_PLUS",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_THEM",
        "SubjectTarget": "SUBJECT_PLAYER_PEACE_OR_TRUCE",
        "SubjectRelation": "SUBJECTRELATION_PLAYER_SAME",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_DECLARE_WAR_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_BREAK_PEACE",
        "Name": "TEXT_MISSION_PLAYER_BREAK_PEACE",
        "NamePlus": "TEXT_MISSION_PLAYER_BREAK_PEACE_PLUS",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_THEM",
        "SubjectTarget": "SUBJECT_PLAYER_PEACE",
        "SubjectRelation": "SUBJECTRELATION_PLAYER_SAME",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_BREAK_PEACE_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_END_ALLIANCE",
        "Name": "TEXT_MISSION_PLAYER_END_ALLIANCE",
        "NamePlus": "TEXT_MISSION_PLAYER_END_ALLIANCE_PLUS",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_THEM",
        "SubjectTarget": "SUBJECT_PLAYER_ALLIANCE",
        "SubjectRelation": "SUBJECTRELATION_PLAYER_SAME",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_END_ALLIANCE_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_CANCEL_TRADE",
        "Name": "TEXT_MISSION_PLAYER_CANCEL_TRADE",
        "NamePlus": "TEXT_MISSION_PLAYER_CANCEL_TRADE_PLUS",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_THEM",
        "SubjectTarget": "SUBJECT_PLAYER_TRADING",
        "SubjectRelation": "SUBJECTRELATION_PLAYER_SAME",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_CANCEL_TRADE_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_BARBARIAN_ALLIANCE",
        "Name": "TEXT_MISSION_BARBARIAN_ALLIANCE",
        "NamePlus": "TEXT_MISSION_BARBARIAN_ALLIANCE_PLUS",
        "iCost": "1",
        "iMissionTurns": "2",
        "iMinDiplomacyTurnsTurns": "4",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bHighlight": "1",
        "SubjectCharacter": "SUBJECT_LEADER_DIPLOMAT",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_BARBARIAN_PEACE",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_BARBARIAN_ALLIANCE_EVENT",
              "iValue": "2"
            },
            {
              "zIndex": "MISSIONRESULT_BARBARIAN_ALLIANCE_FAILURE",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "MISSION_BARBARIAN_PEACE",
        "Name": "TEXT_MISSION_BARBARIAN_PEACE",
        "NamePlus": "TEXT_MISSION_BARBARIAN_PEACE_PLUS",
        "iCost": "1",
        "iXP": "20",
        "iMissionTurns": "2",
        "iMinDiplomacyTurnsTurns": "4",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_BARBARIAN_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_BARBARIAN_PEACE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_BARBARIAN_TRUCE",
        "Name": "TEXT_MISSION_BARBARIAN_TRUCE",
        "NamePlus": "TEXT_MISSION_BARBARIAN_TRUCE_PLUS",
        "iCost": "1",
        "iXP": "20",
        "iMissionTurns": "2",
        "iMinDiplomacyTurnsTurns": "4",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_BARBARIAN_WAR",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_BARBARIAN_TRUCE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_BARBARIAN_DECLARE_WAR",
        "Name": "TEXT_MISSION_BARBARIAN_DECLARE_WAR",
        "NamePlus": "TEXT_MISSION_BARBARIAN_DECLARE_WAR_PLUS",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_BARBARIAN_THEM",
        "SubjectTarget": "SUBJECT_BARBARIAN_TRUCE",
        "SubjectRelation": "SUBJECTRELATION_BARBARIAN_SAME",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_BARBARIAN_DECLARE_WAR_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_BARBARIAN_BREAK_PEACE",
        "Name": "TEXT_MISSION_BARBARIAN_BREAK_PEACE",
        "NamePlus": "TEXT_MISSION_BARBARIAN_BREAK_PEACE_PLUS",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_BARBARIAN_THEM",
        "SubjectTarget": "SUBJECT_BARBARIAN_PEACE",
        "SubjectRelation": "SUBJECTRELATION_BARBARIAN_SAME",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_BARBARIAN_BREAK_PEACE_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_BARBARIAN_END_ALLIANCE",
        "Name": "TEXT_MISSION_BARBARIAN_END_ALLIANCE",
        "NamePlus": "TEXT_MISSION_BARBARIAN_END_ALLIANCE_PLUS",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_BARBARIAN_THEM",
        "SubjectTarget": "SUBJECT_BARBARIAN_ALLIANCE",
        "SubjectRelation": "SUBJECTRELATION_BARBARIAN_SAME",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_BARBARIAN_END_ALLIANCE_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_FAMILY_MARRIAGE",
        "Name": "TEXT_MISSION_FAMILY_MARRIAGE",
        "iCost": "1",
        "iMissionTurns": "1",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_OR_DESCENDANT_MARRY",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_FAMILY_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_FAMILY_MARRIAGE_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_MARRY_COURTIER",
        "Name": "TEXT_MISSION_MARRY_COURTIER",
        "NamePlus": "TEXT_MISSION_MARRY_COURTIER_PLUS",
        "iCost": "1",
        "iMissionTurns": "1",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "bHighlight": "1",
        "SubjectCharacter": "SUBJECT_LEADER_OR_DESCENDANT_MARRY",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_COURTIER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_MARRY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_ABDICATE",
        "Name": "TEXT_MISSION_ABDICATE",
        "iCost": "1",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_HAS_HEIRS",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_ABDICATE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_ADOPT",
        "Name": "TEXT_MISSION_ADOPT",
        "NamePlus": "TEXT_MISSION_ADOPT_PLUS",
        "iCost": "1",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_SCHEMER",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_NON_LEADER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_ADOPT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_LEGITIMIZE",
        "Name": "TEXT_MISSION_LEGITIMIZE",
        "iCost": "1",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_BASTARD",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_LEGITIMIZE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_CHOSEN_HEIR",
        "Name": "TEXT_MISSION_CHOSEN_HEIR",
        "iCost": "1",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_ROYAL",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_CHOSEN_HEIR",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_INFILTRATE",
        "Name": "TEXT_MISSION_INFILTRATE",
        "NamePlus": "TEXT_MISSION_INFILTRATE_PLUS",
        "iCost": "1",
        "iXP": "20",
        "iMissionTurns": "3",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "SubjectCharacter": "SUBJECT_SPYMASTER",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_PLAYER_THEM",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_INFILTRATE_REVEAL",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "500"
          }
        }
      },
      {
        "zType": "MISSION_ASSASSINATE",
        "Name": "TEXT_MISSION_ASSASSINATE",
        "NamePlus": "TEXT_MISSION_ASSASSINATE_PLUS",
        "iCost": "1",
        "iXP": "20",
        "iMissionTurns": "2",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "SubjectCharacter": "SUBJECT_SPYMASTER",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_CHARACTER_NOT_ME",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_ASSASSINATE_KILL",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_ASSASSINATE_KILL_EXPOSED",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_ASSASSINATE_FAIL_EXPOSED",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_ASSASSINATE_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_TRADE_MISSION",
        "Name": "TEXT_MISSION_TRADE_MISSION",
        "NamePlus": "TEXT_MISSION_TRADE_MISSION_PLUS",
        "iCost": "1",
        "iXP": "20",
        "iMissionTurns": "3",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "bHighlight": "1",
        "SubjectCharacter": "SUBJECT_CHANCELLOR",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_PLAYER_PEACE_OR_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_TRADE_MISSION_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_FAMILY_GIFT",
        "Name": "TEXT_MISSION_FAMILY_GIFT",
        "NamePlus": "TEXT_MISSION_FAMILY_GIFT_PLUS",
        "iCost": "1",
        "iXP": "20",
        "iMissionTurns": "2",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "SubjectCharacter": "SUBJECT_CHANCELLOR",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_FAMILY_US",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_FAMILY_GIFT_SUCCESS",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_FAMILY_GIFT_SUCCESS_WEAKEN",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_FAMILY_GIFT_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "500"
          }
        }
      },
      {
        "zType": "MISSION_IMPRISON",
        "Name": "TEXT_MISSION_IMPRISON",
        "NamePlus": "TEXT_MISSION_IMPRISON_PLUS",
        "iCost": "1",
        "iXP": "20",
        "iMissionTurns": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "SubjectCharacter": "SUBJECT_CHANCELLOR",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "SubjectTarget": "SUBJECT_NON_LEADER_US",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_IMPRISON_JUST",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_IMPRISON_UNJUST",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_IMPRISON_ESCAPE",
              "iValue": "1"
            }
          ]
        }
      },
      {
        "zType": "MISSION_RELEASE",
        "Name": "TEXT_MISSION_RELEASE",
        "iCost": "1",
        "iMissionTurns": "1",
        "bVisibleCharacter": "1",
        "SubjectCharacter": "SUBJECT_IMPRISONED",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_RELEASE_GRATEFUL",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_RELEASE_BITTER",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_RELEASE_UNJUST",
              "iValue": "1"
            }
          ]
        }
      },
      {
        "zType": "MISSION_CAPTURE",
        "Name": "TEXT_MISSION_CAPTURE",
        "iCost": "1",
        "iMissionTurns": "2",
        "bVisibleCharacter": "1",
        "SubjectCharacter": "SUBJECT_ON_THE_RUN",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_CAPTURE_SURRENDER",
              "iValue": "4"
            },
            {
              "zIndex": "MISSIONRESULT_CAPTURE_KILLED",
              "iValue": "2"
            },
            {
              "zIndex": "MISSIONRESULT_CAPTURE_FLEE",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_CAPTURE_FAIL",
              "iValue": "3"
            }
          ]
        }
      },
      {
        "zType": "MISSION_DIVORCE",
        "Name": "TEXT_MISSION_DIVORCE",
        "iCost": "1",
        "bVisibleCharacter": "1",
        "SubjectCharacter": "SUBJECT_ROYAL_SPOUSE",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_DIVORCE_MUTUAL",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_DIVORCE_FORCED",
              "iValue": "1"
            }
          ]
        }
      },
      {
        "zType": "MISSION_CAPTURED_RANSOM",
        "Name": "TEXT_MISSION_CAPTURED_RANSOM",
        "iMissionTurns": "1",
        "bVisibleCharacter": "1",
        "bHighlight": "1",
        "SubjectCharacter": "SUBJECT_CAPTURED",
        "SubjectCharacterPlayer": "SUBJECT_PLAYER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_CAPTURED_RANSOM",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "500"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_BARBARIAN_WAR",
        "Name": "TEXT_MISSION_PLAYER_BARBARIAN_WAR",
        "iCost": "1",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_PEACE_OR_TRUCE",
        "SubjectTarget": "SUBJECT_BARBARIAN",
        "SubjectRelation": "SUBJECTRELATION_BARBARIAN_PEACE_OR_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_BARBARIAN_WAR_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_PLAYER_WAR",
        "Name": "TEXT_MISSION_PLAYER_PLAYER_WAR",
        "iCost": "1",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_PEACE_OR_TRUCE",
        "SubjectTarget": "SUBJECT_PLAYER_THEM",
        "SubjectRelation": "SUBJECTRELATION_MISSION_PLAYER_PLAYER_WAR",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_PLAYER_WAR_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      }
    ]
  }
}
    export default data
    