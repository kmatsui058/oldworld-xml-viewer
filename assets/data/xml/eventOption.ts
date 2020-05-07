
    const data: XmlEventOption.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "EventLinkAdd": {
          "comment": "Creates a link that other events can use to become a followup Event on a future turn."
        },
        "EventLinkStart": {
          "comment": "Creates a link that other events can use to become a followup Event immediately after this Event ends."
        },
        "Text": {
          "comment": "Reference to the text-eventOption entry that has the actual option text (shown as 'English Text' above)."
        },
        "HelpText": {
          "comment": "Reference to the text-eventOption entry that appears as a tooltip when hovering over this option. Usually blank."
        },
        "aeBonuses": {
          "comment": "List of Bonuses (from either bonus-event.xml or bonus.xml) awarded to each Event Subject in order."
        },
        "LeaderSubject": {
          "comment": "Requires the Leader to be valid for this Subject"
        },
        "bLawScreen": {
          "comment": "If set to 1 (true), selecting this option will open the Laws screen."
        },
        "bReligionScreen": {
          "comment": "If set to 1 (true), selecting this option will open the Religion screen."
        },
        "bTimelineScreen": {
          "comment": "If set to 1 (true), selecting this option will open the Timeline sceen."
        },
        "bMainMenu": {
          "comment": "If set to 1 (true), selecting this option will exit the current game and return to the main menu."
        },
        "bHidePrereqs": {
          "comment": "If set to 1 (true), the option text will not display certain prereqs that made this option selectable."
        },
        "bFutureEvents": {
          "comment": "If set to 1 (true), this Event will display a generic message hinting that it could lead to future events."
        },
        "aiMinPrice": {
          "comment": "Requires the whole price of the Yield to be at or above"
        },
        "aiMaxPrice": {
          "comment": "Requires the whole price of the Yield to be at or below"
        },
        "aiEventOptionProb": {
          "comment": "A paired list of Event options with probability rolls. (Highest roll is the option that is chosen.) If this Event option is possible, it will randomly choose one of the listed Event options."
        }
      },
      {
        "zType": {
          
        },
        "EventLinkAdd": {
          
        },
        "EventLinkStart": {
          
        },
        "Text": {
          
        },
        "HelpText": {
          
        },
        "aeBonuses": {
          
        },
        "LeaderSubject": {
          
        },
        "bLawScreen": {
          
        },
        "bReligionScreen": {
          
        },
        "bHidePrereqs": {
          
        },
        "bFutureEvents": {
          
        },
        "aiMinPrice": {
          
        },
        "aiMaxPrice": {
          
        },
        "aiEventOptionProb": {
          
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_TRUCE_NO",
        "Text": "TEXT_EVENTOPTION_PLAYER_TRUCE_NO"
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_NO",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_PLAYER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PEACE_RESPONSE_OFFER_TRIBUTE_NO",
        "Text": "TEXT_EVENTOPTION_PEACE_RESPONSE_OFFER_TRIBUTE_NO"
      },
      {
        "zType": "EVENTOPTION_PEACE_RESPONSE_NO_TRIBUTE_YES",
        "Text": "TEXT_EVENTOPTION_PEACE_RESPONSE_NO_TRIBUTE_YES",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_PEACE"
        }
      },
      {
        "zType": "EVENTOPTION_PEACE_RESPONSE_NO_TRIBUTE_NO",
        "Text": "TEXT_EVENTOPTION_PEACE_RESPONSE_NO_TRIBUTE_NO"
      },
      {
        "zType": "EVENTOPTION_PEACE_RESPONSE_DEMAND_TRIBUTE_NO",
        "Text": "TEXT_EVENTOPTION_PEACE_RESPONSE_DEMAND_TRIBUTE_NO"
      },
      {
        "zType": "EVENTOPTION_PEACE_RESPONSE_REJECTED",
        "Text": "TEXT_EVENTOPTION_PEACE_RESPONSE_REJECTED"
      },
      {
        "zType": "EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_NO",
        "Text": "TEXT_EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_NO"
      },
      {
        "zType": "EVENTOPTION_TRUCE_RESPONSE_NO_TRIBUTE_YES",
        "Text": "TEXT_EVENTOPTION_TRUCE_RESPONSE_NO_TRIBUTE_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_TRUCE_RESPONSE_NO_TRIBUTE_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRUCE_RESPONSE_NO_TRIBUTE_NO",
        "Text": "TEXT_EVENTOPTION_TRUCE_RESPONSE_NO_TRIBUTE_NO"
      },
      {
        "zType": "EVENTOPTION_TRUCE_RESPONSE_DEMAND_TRIBUTE_NO",
        "Text": "TEXT_EVENTOPTION_TRUCE_RESPONSE_DEMAND_TRIBUTE_NO"
      },
      {
        "zType": "EVENTOPTION_TRUCE_RESPONSE_REJECTED",
        "Text": "TEXT_EVENTOPTION_TRUCE_RESPONSE_REJECTED"
      },
      {
        "zType": "EVENTOPTION_PLAYER_BARBARIAN_WAR_MONEY",
        "Text": "TEXT_EVENTOPTION_PLAYER_BARBARIAN_WAR_MONEY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_BARBARIAN_WAR_MONEY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_BARBARIAN_WAR_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_PLAYER_BARBARIAN_WAR_TRIBUTE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_BARBARIAN_WAR_TRIBUTE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_BARBARIAN_WAR_NO",
        "Text": "TEXT_EVENTOPTION_PLAYER_BARBARIAN_WAR_NO"
      },
      {
        "zType": "EVENTOPTION_PLAYER_PLAYER_WAR_MONEY",
        "Text": "TEXT_EVENTOPTION_PLAYER_PLAYER_WAR_MONEY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_PLAYER_WAR_MONEY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_PLAYER_WAR_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_PLAYER_PLAYER_WAR_TRIBUTE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_PLAYER_WAR_TRIBUTE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_PLAYER_WAR_NO",
        "Text": "TEXT_EVENTOPTION_PLAYER_PLAYER_WAR_NO"
      },
      {
        "zType": "EVENTOPTION_PLAYER_DECLARE_WAR_YES",
        "Text": "TEXT_EVENTOPTION_PLAYER_DECLARE_WAR_YES",
        "aeBonuses": {
          "zValue": "BONUS_DECLARE_WAR_PLAYER"
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_DECLARE_WAR_NO",
        "Text": "TEXT_EVENTOPTION_PLAYER_DECLARE_WAR_NO"
      },
      {
        "zType": "EVENTOPTION_PLAYER_BREAK_PEACE_YES",
        "Text": "TEXT_EVENTOPTION_PLAYER_BREAK_PEACE_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PLAYER_BREAK_PEACE_YES"
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_BREAK_PEACE_NO",
        "Text": "TEXT_EVENTOPTION_PLAYER_BREAK_PEACE_NO"
      },
      {
        "zType": "EVENTOPTION_PLAYER_END_ALLIANCE_YES",
        "Text": "TEXT_EVENTOPTION_PLAYER_END_ALLIANCE_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PLAYER_END_ALLIANCE_YES"
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_END_ALLIANCE_NO",
        "Text": "TEXT_EVENTOPTION_PLAYER_END_ALLIANCE_NO"
      },
      {
        "zType": "EVENTOPTION_PLAYER_CANCEL_TRADE_YES",
        "Text": "TEXT_EVENTOPTION_PLAYER_CANCEL_TRADE_YES",
        "aeBonuses": {
          "zValue": "BONUS_CANCEL_TRADE"
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_CANCEL_TRADE_NO",
        "Text": "TEXT_EVENTOPTION_PLAYER_CANCEL_TRADE_NO"
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_DECLARE_WAR_YES",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_DECLARE_WAR_YES",
        "aeBonuses": {
          "zValue": "BONUS_DECLARE_WAR_BARBARIAN"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_DECLARE_WAR_NO",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_DECLARE_WAR_NO"
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_BREAK_PEACE_YES",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_BREAK_PEACE_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BARBARIAN_BREAK_PEACE_YES"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_BREAK_PEACE_NO",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_BREAK_PEACE_NO"
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_END_ALLIANCE_YES",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_END_ALLIANCE_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BARBARIAN_END_ALLIANCE_YES"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_END_ALLIANCE_NO",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_END_ALLIANCE_NO"
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED_WAR",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED_WAR",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED_WAR_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED_OPINION_DROP",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED_OPINION_DROP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED_OPINION_DROP",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED_OPINION_DROP_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED_FURIOUS",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED_FURIOUS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED_WAR",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED_WAR_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP_FRIENDLY",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP_FRIENDLY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP_FRIENDLY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP_PLEASED",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP_PLEASED",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP_PLEASED",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_TRUCE",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_TRUCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_TRUCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_TRUCE_ANGRY",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_TRUCE_ANGRY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_TRUCE_ANGRY",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_TRUCE_ANGRY_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_WAR",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_WAR",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_WAR_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_DECLARE_WAR_FURIOUS",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_DECLARE_WAR_FURIOUS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_DECLARE_WAR_FURIOUS",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_DECLARE_WAR_FURIOUS_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED_DIPLOMATIC",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED_DIPLOMATIC",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED_DIPLOMATIC",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED_DIPLOMATIC_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_LEADER_DIPLOMAT"
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED_WAR",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_PLAYER",
            "BONUS_UNITCLASS_HEAVY_INFANTRY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED_OPINION_DROP",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED_OPINION_DROP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED_OPINION_DROP",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED_OPINION_DROP_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED_FURIOUS",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED_FURIOUS",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_PLAYER",
            "BONUS_UNITCLASS_LEVY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_PEACE",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_PEACE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_PEACE",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_PEACE_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_LEADER_DIPLOMAT"
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_LESSER_OPINION_DROP",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_LESSER_OPINION_DROP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_LESSER_OPINION_DROP",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_LESSER_OPINION_DROP_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_FRIENDLY",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_FRIENDLY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_FRIENDLY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_PLEASED",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_PLEASED",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_PLEASED",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_BIGGER_OPINION_DROP",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_BIGGER_OPINION_DROP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_BIGGER_OPINION_DROP",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_ANGRY",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_ANGRY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_ANGRY",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_ANGRY_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_WAR",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_WAR",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_WAR_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_DECLARE_WAR_FURIOUS",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_DECLARE_WAR_FURIOUS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_DECLARE_WAR_FURIOUS",
            "BONUS_EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_DECLARE_WAR_FURIOUS_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_SLAVERY",
        "Text": "TEXT_EVENTOPTION_LAW_SLAVERY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_FREEDOM",
        "Text": "TEXT_EVENTOPTION_LAW_FREEDOM",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_CENTRALIZATION",
        "Text": "TEXT_EVENTOPTION_LAW_CENTRALIZATION",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_VASSALAGE",
        "Text": "TEXT_EVENTOPTION_LAW_VASSALAGE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_TYRANNY",
        "Text": "TEXT_EVENTOPTION_LAW_TYRANNY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_CONSTITUTION",
        "Text": "TEXT_EVENTOPTION_LAW_CONSTITUTION",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_EPICS",
        "Text": "TEXT_EVENTOPTION_LAW_EPICS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_EXPLORATION",
        "Text": "TEXT_EVENTOPTION_LAW_EXPLORATION",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_COLONIZATION",
        "Text": "TEXT_EVENTOPTION_LAW_COLONIZATION",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_SERFDOM",
        "Text": "TEXT_EVENTOPTION_LAW_SERFDOM",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_PROFESSIONAL_ARMY",
        "Text": "TEXT_EVENTOPTION_LAW_PROFESSIONAL_ARMY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_VOLUNTEERS",
        "Text": "TEXT_EVENTOPTION_LAW_VOLUNTEERS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_PHILOSOPHY",
        "Text": "TEXT_EVENTOPTION_LAW_PHILOSOPHY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_ENGINEERING",
        "Text": "TEXT_EVENTOPTION_LAW_ENGINEERING",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_MONOTHEISM",
        "Text": "TEXT_EVENTOPTION_LAW_MONOTHEISM",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_POLYTHEISM",
        "Text": "TEXT_EVENTOPTION_LAW_POLYTHEISM",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_GUILDS",
        "Text": "TEXT_EVENTOPTION_LAW_GUILDS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_ELITES",
        "Text": "TEXT_EVENTOPTION_LAW_ELITES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_TOLERANCE",
        "Text": "TEXT_EVENTOPTION_LAW_TOLERANCE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_ORTHODOXY",
        "Text": "TEXT_EVENTOPTION_LAW_ORTHODOXY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_ISOLATIONISM",
        "Text": "TEXT_EVENTOPTION_LAW_ISOLATIONISM",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_TRADE_LEAGUE",
        "Text": "TEXT_EVENTOPTION_LAW_TRADE_LEAGUE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_ICONOGRAPHY",
        "Text": "TEXT_EVENTOPTION_LAW_ICONOGRAPHY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_CALLIGRAPHY",
        "Text": "TEXT_EVENTOPTION_LAW_CALLIGRAPHY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_DIVINE_RULE",
        "Text": "TEXT_EVENTOPTION_LAW_DIVINE_RULE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_SECULARISM",
        "Text": "TEXT_EVENTOPTION_LAW_SECULARISM",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_ASCETICISM",
        "Text": "TEXT_EVENTOPTION_LAW_ASCETICISM",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_HOLY_WAR",
        "Text": "TEXT_EVENTOPTION_LAW_HOLY_WAR",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_COIN_DEBASEMENT",
        "Text": "TEXT_EVENTOPTION_LAW_COIN_DEBASEMENT",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_START_LAW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_MONETARY_REFORM",
        "Text": "TEXT_EVENTOPTION_LAW_MONETARY_REFORM",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_START_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_NO",
        "Text": "TEXT_EVENTOPTION_LAW_NO"
      },
      {
        "zType": "EVENTOPTION_LAW_SCREEN",
        "Text": "TEXT_EVENTOPTION_LAW_SCREEN",
        "bLawScreen": "1"
      },
      {
        "zType": "EVENTOPTION_RELIGION_NO",
        "Text": "TEXT_EVENTOPTION_RELIGION_NO",
        "HelpText": "TEXT_EVENTOPTION_RELIGION_NO"
      },
      {
        "zType": "EVENTOPTION_RELIGION_SCREEN",
        "Text": "TEXT_EVENTOPTION_RELIGION_SCREEN"
      },
      {
        "zType": "EVENTOPTION_STUDY_TACTICS",
        "Text": "TEXT_EVENTOPTION_STUDY_TACTICS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_STUDY_TACTICS"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_RHETORIC",
        "Text": "TEXT_EVENTOPTION_STUDY_RHETORIC",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_STUDY_RHETORIC"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_COMMERCE",
        "Text": "TEXT_EVENTOPTION_STUDY_COMMERCE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_STUDY_COMMERCE"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_PHILOSOPHY",
        "Text": "TEXT_EVENTOPTION_STUDY_PHILOSOPHY",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_STUDY_PHILOSOPHY"
        }
      },
      {
        "zType": "EVENTOPTION_GREAT_PERSON_NONE",
        "Text": "TEXT_EVENTOPTION_GREAT_PERSON_NONE"
      },
      {
        "zType": "EVENTOPTION_MERCENARY_NO",
        "Text": "TEXT_EVENTOPTION_MERCENARY_NO"
      },
      {
        "zType": "EVENTOPTION_FAMILY_LAW_YES",
        "Text": "TEXT_EVENTOPTION_FAMILY_LAW_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_FREE_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_LAW_NO",
        "Text": "TEXT_EVENTOPTION_FAMILY_LAW_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAMILY_LAW_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_THEOLOGY_YES",
        "Text": "TEXT_EVENTOPTION_FAMILY_THEOLOGY_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_FREE_THEOLOGY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_THEOLOGY_NO",
        "Text": "TEXT_EVENTOPTION_FAMILY_THEOLOGY_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAMILY_THEOLOGY_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TOO_EXPENSIVE",
        "Text": "TEXT_EVENTOPTION_TOO_EXPENSIVE"
      },
      {
        "zType": "EVENTOPTION_ORACLE_ME",
        "Text": "TEXT_EVENTOPTION_ORACLE_ME",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ORACLE_ME"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ORACLE_WEALTHY",
        "Text": "TEXT_EVENTOPTION_ORACLE_WEALTHY",
        "aeBonuses": {
          "zValue": [
            "BONUS_DISCONTENT_GAIN_SMALL",
            "BONUS_EVENTOPTION_ORACLE_WEALTHY_LEADER"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_EXTRAVAGANT",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_ORACLE_EVERYONE",
        "Text": "TEXT_EVENTOPTION_ORACLE_EVERYONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_ORACLE_EVERYONE_CITY",
            "BONUS_EVENTOPTION_ORACLE_EVERYONE_LEADER"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_CRUEL",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_ORACLE_INDIGNANT",
        "Text": "TEXT_EVENTOPTION_ORACLE_INDIGNANT",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ORACLE_INDIGNANT"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ORACLE_CONFUSED",
        "Text": "TEXT_EVENTOPTION_ORACLE_CONFUSED",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ORACLE_CONFUSED"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ORACLE_PLEASED",
        "Text": "TEXT_EVENTOPTION_ORACLE_PLEASED",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ORACLE_PLEASED"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_SACK",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_SACK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_BACK_HOME",
            "BONUS_KILL_CHARACTER",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_SACK"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_SPARE",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_SPARE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_BACK_HOME",
            "BONUS_KILL_CHARACTER",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_SPARE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_RETURN",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_RETURN",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAMILY_QUARREL_RETURN",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_BACK_HOME",
            "BONUS_KILL_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_CODES_OF_JUSTICE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_CODES_OF_JUSTICE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_CODES_OF_JUSTICE_OPTION_0",
            "BONUS_EVENTOPTION_TRAIT_CODES_OF_JUSTICE_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_CODES_OF_JUSTICE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_CODES_OF_JUSTICE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_CODES_OF_JUSTICE_OPTION_1",
            "BONUS_EVENTOPTION_TRAIT_CODES_OF_JUSTICE_OPTION_1_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_SAGE_COUNSEL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_SAGE_COUNSEL_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_SAGE_COUNSEL_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_SAGE_COUNSEL_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_SAGE_COUNSEL_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_SAGE_COUNSEL_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_SAGE_COUNSEL_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_SAGE_COUNSEL_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_SAGE_COUNSEL_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_BARBARIANS_AT_THE_GATE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_BARBARIANS_AT_THE_GATE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_BARBARIANS_AT_THE_GATE_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_BARBARIANS_AT_THE_GATE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_BARBARIANS_AT_THE_GATE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_BARBARIANS_AT_THE_GATE_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_MOUTHPIECE_OF_THE_GODS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_MOUTHPIECE_OF_THE_GODS_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_MOUTHPIECE_OF_THE_GODS_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_MOUTHPIECE_OF_THE_GODS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_MOUTHPIECE_OF_THE_GODS_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_MOUTHPIECE_OF_THE_GODS_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DIVINE_MANDATE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_DIVINE_MANDATE_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_DIVINE_MANDATE_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DIVINE_MANDATE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_DIVINE_MANDATE_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_DIVINE_MANDATE_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DIVINE_MANDATE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_DIVINE_MANDATE_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_DIVINE_MANDATE_OPTION_2"
        },
        "LeaderSubject": "SUBJECT_FOOLISH"
      },
      {
        "zType": "EVENTOPTION_TRAIT_UNDER_SUSPICION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_UNDER_SUSPICION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_UNDER_SUSPICION_OPTION_0_PLAYER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_UNDER_SUSPICION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_UNDER_SUSPICION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_UNDER_SUSPICION_OPTION_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_UNDER_SUSPICION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_UNDER_SUSPICION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_CIVICS_GAIN_MINIMAL",
            "BONUS_EVENTOPTION_TRAIT_UNDER_SUSPICION_OPTION_2",
            "BONUS_START_LAW"
          ]
        },
        "LeaderSubject": "SUBJECT_DIPLOMAT"
      },
      {
        "zType": "EVENTOPTION_TRAIT_ARTS_AND_SCIENCES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_ARTS_AND_SCIENCES_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_ARTS_AND_SCIENCES_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_ARTS_AND_SCIENCES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_ARTS_AND_SCIENCES_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_ARTS_AND_SCIENCES_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_ARTS_AND_SCIENCES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_ARTS_AND_SCIENCES_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_ARTS_AND_SCIENCES_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_OF_THE_PEOPLE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_OF_THE_PEOPLE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_OF_THE_PEOPLE_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_OF_THE_PEOPLE_OPTION_0_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_OF_THE_PEOPLE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_OF_THE_PEOPLE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_OF_THE_PEOPLE_OPTION_1",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_OF_THE_PEOPLE_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_0",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_ZEALOT",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_ZEALOT",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_2",
            "BONUS_EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_0",
            "BONUS_EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_0_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_2",
            "BONUS_KILL_CHARACTER",
            "BONUS_EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_2_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_COLLISION_COURSE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_COLLISION_COURSE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_COLLISION_COURSE_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_COLLISION_COURSE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_COLLISION_COURSE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_COLLISION_COURSE_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_COLLISION_COURSE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_COLLISION_COURSE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_COLLISION_COURSE_OPTION_2"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_CHARISMA"
      },
      {
        "zType": "EVENTOPTION_TRAIT_ENABLERS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_ENABLERS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_ENABLERS_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_ENABLERS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_ENABLERS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_ENABLERS_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_ENABLERS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_ENABLERS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_ENABLERS_OPTION_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_ROYAL_TRAGEDIES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_ROYAL_TRAGEDIES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_ROYAL_TRAGEDIES_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_ROYAL_TRAGEDIES_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_ROYAL_TRAGEDIES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_ROYAL_TRAGEDIES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_ROYAL_TRAGEDIES_OPTION_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_DARK_PALL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_DARK_PALL_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_A_DARK_PALL_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_DARK_PALL_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_DARK_PALL_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_A_DARK_PALL_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_0",
        "EventLinkAdd": "EVENTLINK_DUEL_OF_FATES",
        "Text": "TEXT_EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_0",
            "BONUS_EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_0_PLAYER"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_1",
            "BONUS_EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_1_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_2",
            "BONUS_DECLARE_WAR_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DUEL_OF_FATES_VICTORIOUS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_DUEL_OF_FATES_VICTORIOUS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_DUEL_OF_FATES_VICTORIOUS_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DUEL_OF_FATES_DEFEATED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_DUEL_OF_FATES_DEFEATED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_DUEL_OF_FATES_DEFEATED_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_0",
            "BONUS_EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_0_FAMILY_0",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_1",
            "BONUS_EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_1_FAMILY_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_2",
            "BONUS_EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_2_FAMILY_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_FINER_THINGS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_FINER_THINGS_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_THE_FINER_THINGS_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_FINER_THINGS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_FINER_THINGS_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_THE_FINER_THINGS_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_FINER_THINGS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_FINER_THINGS_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_THE_FINER_THINGS_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_CHILL_IN_THE_PALACE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_CHILL_IN_THE_PALACE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_A_CHILL_IN_THE_PALACE_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_TRAIT_A_CHILL_IN_THE_PALACE_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_CHILL_IN_THE_PALACE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_CHILL_IN_THE_PALACE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_MONEY_LOSS_AVERAGE",
            "BONUS_EVENTOPTION_TRAIT_A_CHILL_IN_THE_PALACE_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FACING_THE_HORDE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_FACING_THE_HORDE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_GAIN_COURAGE",
            "BONUS_EVENTOPTION_TRAIT_FACING_THE_HORDE_OPTION_0_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FACING_THE_HORDE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_FACING_THE_HORDE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_FACING_THE_HORDE_OPTION_1_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FACING_THE_HORDE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_FACING_THE_HORDE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_FACING_THE_HORDE_OPTION_2_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FORCED_DEPORTATIONS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_FORCED_DEPORTATIONS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_FORCED_DEPORTATIONS_OPTION_0_FAMILY",
            "BONUS_EVENTOPTION_TRAIT_FORCED_DEPORTATIONS_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FORCED_DEPORTATIONS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_FORCED_DEPORTATIONS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_FORCED_DEPORTATIONS_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_COMBAT",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_COMBAT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAINING_NEWS_COMBAT"
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_GUARD",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_GUARD",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAINING_NEWS_GUARD"
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_ENGINEERING",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_ENGINEERING",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAINING_NEWS_ENGINEERING"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_GOOD_NEWS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STUDY_GOOD_NEWS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STUDY_GOOD_NEWS_OPTION_0",
            "BONUS_EVENTOPTION_STUDY_GOOD_NEWS_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_GOOD_NEWS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STUDY_GOOD_NEWS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STUDY_GOOD_NEWS_OPTION_1_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "beginGroup": "Exploration",
        "zType": "EVENTOPTION_RUINS_SURVIVORS_INVITE",
        "Text": "TEXT_EVENTOPTION_RUINS_SURVIVORS_INVITE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_SURVIVORS_INVITE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_SURVIVORS_EXPLORE",
        "Text": "TEXT_EVENTOPTION_RUINS_SURVIVORS_EXPLORE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_SURVIVORS_EXPLORE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_RITUAL_PERFORMANCE_COTTAGE",
        "Text": "TEXT_EVENTOPTION_RUINS_RITUAL_PERFORMANCE_COTTAGE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_RITUAL_PERFORMANCE_COTTAGE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_RITUAL_PERFORMANCE_AMPHITHEATER",
        "Text": "TEXT_EVENTOPTION_RUINS_RITUAL_PERFORMANCE_AMPHITHEATER",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_RITUAL_PERFORMANCE_AMPHITHEATER"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_RITUAL_PERFORMANCE_TRAIT",
        "Text": "TEXT_EVENTOPTION_RUINS_RITUAL_PERFORMANCE_TRAIT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_RITUAL_PERFORMANCE_TRAIT"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_CARVED_WALL_CEREMONY_IMPERIAL_CULT",
        "Text": "TEXT_EVENTOPTION_RUINS_CARVED_WALL_TAKE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_CARVED_WALL_TAKE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_CARVED_WALL_LEAVE",
        "Text": "TEXT_EVENTOPTION_RUINS_CARVED_WALL_LEAVE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_CARVED_WALL_LEAVE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_MONUMENTS_OF_LAW_SAGES",
        "Text": "TEXT_EVENTOPTION_RUINS_MONUMENTS_OF_LAW_SAGES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_MONUMENTS_OF_LAW_SAGES"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_MONUMENTS_OF_LAW_CITIZENS",
        "Text": "TEXT_EVENTOPTION_RUINS_MONUMENTS_OF_LAW_CITIZENS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_MONUMENTS_OF_LAW_CITIZENS"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_HUNGRY_LOREKEEPERS_FEED",
        "Text": "TEXT_EVENTOPTION_RUINS_HUNGRY_LOREKEEPERS_FEED",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RUINS_HUNGRY_LOREKEEPERS_FEED",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_HUNGRY_LOREKEEPERS_NO",
        "Text": "TEXT_EVENTOPTION_RUINS_HUNGRY_LOREKEEPERS_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_GAIN_DISCIPLINE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_HIDDEN_JEWELS_LEAVE",
        "Text": "TEXT_EVENTOPTION_RUINS_HIDDEN_JEWELS_LEAVE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_HIDDEN_JEWELS_LEAVE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_HIDDEN_JEWELS_STAY",
        "Text": "TEXT_EVENTOPTION_RUINS_HIDDEN_JEWELS_STAY",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_HIDDEN_JEWELS_STAY"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_FRIGHTENED_FAMILIES_JOIN",
        "Text": "TEXT_EVENTOPTION_RUINS_FRIGHTENED_FAMILIES_JOIN",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RUINS_FRIGHTENED_FAMILIES_JOIN",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_FRIGHTENED_FAMILIES_GUARD",
        "Text": "TEXT_EVENTOPTION_RUINS_FRIGHTENED_FAMILIES_GUARD",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_FRIGHTENED_FAMILIES_GUARD"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_FRIGHTENED_FAMILIES_SCOUT",
        "Text": "TEXT_EVENTOPTION_RUINS_FRIGHTENED_FAMILIES_SCOUT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RUINS_FRIGHTENED_FAMILIES_SCOUT",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_ELDERLY_COUPLE_HELP",
        "Text": "TEXT_EVENTOPTION_RUINS_ELDERLY_COUPLE_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_ELDERLY_COUPLE_HELP"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_ELDERLY_COUPLE_ABDUCTED",
        "EventLinkAdd": "EVENTLINK_RUINS_ELDERLY_COUPLE_ABDUCTED",
        "Text": "TEXT_EVENTOPTION_RUINS_ELDERLY_COUPLE_ABDUCTED",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_ELDERLY_COUPLE_ABDUCTED"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_RUINS_ELDERLY_COUPLE_WITCH_SACRIFICE",
        "Text": "TEXT_EVENTOPTION_RUINS_ELDERLY_COUPLE_WITCH_SACRIFICE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_ELDERLY_COUPLE_WITCH_SACRIFICE_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_ELDERLY_COUPLE_WITCH_DISMISS",
        "Text": "TEXT_EVENTOPTION_RUINS_ELDERLY_COUPLE_WITCH_DISMISS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_ELDERLY_COUPLE_WITCH_DISMISS_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_DESPOILED_RUINS_STONE",
        "Text": "TEXT_EVENTOPTION_RUINS_DESPOILED_RUINS_STONE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_DESPOILED_RUINS_STONE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_DESPOILED_RUINS_IRON",
        "Text": "TEXT_EVENTOPTION_RUINS_DESPOILED_RUINS_IRON",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_DESPOILED_RUINS_IRON"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_DESPOILED_RUINS_WOOD",
        "Text": "TEXT_EVENTOPTION_RUINS_DESPOILED_RUINS_WOOD",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_DESPOILED_RUINS_WOOD"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_HAUNTED_QUARRY_EXAMINE",
        "Text": "TEXT_EVENTOPTION_RUINS_HAUNTED_QUARRY_EXAMINE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_HAUNTED_QUARRY_EXAMINE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_HAUNTED_QUARRY_HAUL",
        "Text": "TEXT_EVENTOPTION_RUINS_HAUNTED_QUARRY_HAUL",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_HAUNTED_QUARRY_HAUL"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_HAUNTED_QUARRY_LEAVE",
        "Text": "TEXT_EVENTOPTION_RUINS_HAUNTED_QUARRY_LEAVE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_HAUNTED_QUARRY_LEAVE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_BURLY_SMITH_LEARN",
        "Text": "TEXT_EVENTOPTION_RUINS_BURLY_SMITH_LEARN",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_BURLY_SMITH_LEARN"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_BURLY_SMITH_LOOT",
        "Text": "TEXT_EVENTOPTION_RUINS_BURLY_SMITH_LOOT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_BURLY_SMITH_LOOT"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_GOOD_FENCES_PASTURE",
        "Text": "TEXT_EVENTOPTION_RUINS_GOOD_FENCES_PASTURE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_GOOD_FENCES_PASTURE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_GOOD_FENCES_MEAT",
        "Text": "TEXT_EVENTOPTION_RUINS_GOOD_FENCES_MEAT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_GOOD_FENCES_MEAT"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_GOOD_FENCES_NO",
        "Text": "TEXT_EVENTOPTION_RUINS_GOOD_FENCES_NO",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_GOOD_FENCES_NO"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_TRIBAL_HUNTERS_KILL",
        "Text": "TEXT_EVENTOPTION_RUINS_TRIBAL_HUNTERS_KILL",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_TRIBAL_HUNTERS_KILL"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_TRIBAL_HUNTERS_OBSERVE",
        "Text": "TEXT_EVENTOPTION_RUINS_TRIBAL_HUNTERS_OBSERVE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_TRIBAL_HUNTERS_OBSERVE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_STAR_CHARTS_YOUTH",
        "Text": "TEXT_EVENTOPTION_RUINS_STAR_CHARTS_YOUTH",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_STAR_CHARTS_YOUTH"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_STAR_CHARTS_STARGAZER",
        "Text": "TEXT_EVENTOPTION_RUINS_STAR_CHARTS_STARGAZER",
        "aeBonuses": {
          "zValue": "BONUS_ADD_GREAT_SCIENTIST"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_FRUIT_TREES_FRUIT",
        "Text": "TEXT_EVENTOPTION_RUINS_FRUIT_TREES_FRUIT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_FRUIT_TREES_FRUIT"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_FRUIT_TREES_WOOD",
        "Text": "TEXT_EVENTOPTION_RUINS_FRUIT_TREES_WOOD",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_FRUIT_TREES_WOOD"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_FRUIT_TREES_CULTURE",
        "Text": "TEXT_EVENTOPTION_RUINS_FRUIT_TREES_CULTURE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_FRUIT_TREES_CULTURE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_OLD_SOLDIER_MILITARY_DRILL",
        "Text": "TEXT_EVENTOPTION_RUINS_OLD_SOLDIER_MILITARY_DRILL",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_OLD_SOLDIER_MILITARY_DRILL"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_OLD_SOLDIER_INVITE",
        "Text": "TEXT_EVENTOPTION_RUINS_OLD_SOLDIER_INVITE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RUINS_OLD_SOLDIER_INVITE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_WEARY_RAIDERS_LABOR",
        "Text": "TEXT_EVENTOPTION_RUINS_WEARY_RAIDERS_LABOR",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RUINS_WEARY_RAIDERS_LABOR",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_WEARY_RAIDERS_FIGHT",
        "Text": "TEXT_EVENTOPTION_RUINS_WEARY_RAIDERS_FIGHT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RUINS_WEARY_RAIDERS_FIGHT",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_GREAT_MIGRATION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_GREAT_MIGRATION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RUINS_GREAT_MIGRATION_OPTION_0_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_GREAT_MIGRATION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_GREAT_MIGRATION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_SCIENCE_GAIN_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_VULGAR_SPEECH_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_VULGAR_SPEECH_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_CULTURE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_VULGAR_SPEECH_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_VULGAR_SPEECH_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_SCIENCE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_VULGAR_SPEECH_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RUINS_VULGAR_SPEECH_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_VULGAR_SPEECH_OPTION_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_ANCIENT_BARBARIANS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_ANCIENT_BARBARIANS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_ANCIENT_BARBARIANS_OPTION_0_CHARACTER",
            "BONUS_EVENTOPTION_RUINS_ANCIENT_BARBARIANS_OPTION_0_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_ANCIENT_BARBARIANS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_ANCIENT_BARBARIANS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_ANCIENT_BARBARIANS_OPTION_1_CHARACTER",
            "BONUS_EVENTOPTION_RUINS_ANCIENT_BARBARIANS_OPTION_1_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_THE_WATCHERS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_THE_WATCHERS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_THE_WATCHERS_OPTION_0_CHARACTER",
            {
              
            },
            {
              
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_THE_WATCHERS_OPTION_1",
        "EventLinkAdd": "EVENTLINK_RUINS_THE_WATCHERS",
        "Text": "TEXT_EVENTOPTION_RUINS_THE_WATCHERS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_THE_WATCHERS_OPTION_1_CHARACTER",
            {
              
            },
            {
              
            }
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_ANCIENT_SITE_RAZE",
        "Text": "TEXT_EVENTOPTION_ANCIENT_SITE_RAZE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_STONE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ANCIENT_SITE_PRESERVE",
        "Text": "TEXT_EVENTOPTION_ANCIENT_SITE_PRESERVE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ANCIENT_SITE_PRESERVE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ANCIENT_SITE_OFFERINGS",
        "Text": "TEXT_EVENTOPTION_ANCIENT_SITE_OFFERINGS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ANCIENT_SITE_OFFERINGS"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SACRED_TOMB_LEAVE",
        "Text": "TEXT_EVENTOPTION_SACRED_TOMB_LEAVE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SACRED_TOMB_LEAVE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SACRED_TOMB_DESTROY",
        "Text": "TEXT_EVENTOPTION_SACRED_TOMB_DESTROY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SACRED_TOMB_DESTROY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SACRED_TOMB_STUDY",
        "Text": "TEXT_EVENTOPTION_SACRED_TOMB_STUDY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_SCIENCE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SEASHORE_FIND_SCIENCE",
        "Text": "TEXT_EVENTOPTION_SEASHORE_FIND_SCIENCE",
        "aeBonuses": {
          "zValue": "BONUS_SCIENCE_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_SEASHORE_FIND_CULTURE",
        "Text": "TEXT_EVENTOPTION_SEASHORE_FIND_CULTURE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SEASHORE_FIND_CULTURE"
        }
      },
      {
        "zType": "EVENTOPTION_SEASHORE_FIND_MONEY",
        "Text": "TEXT_EVENTOPTION_SEASHORE_FIND_MONEY",
        "aeBonuses": {
          "zValue": "BONUS_MONEY_GAIN_AVERAGE"
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_EARLY_DISCIPLES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_EARLY_DISCIPLES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RUINS_EARLY_DISCIPLES_OPTION_0_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_EARLY_DISCIPLES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_EARLY_DISCIPLES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_EARLY_DISCIPLES_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_EARLY_DISCIPLES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RUINS_EARLY_DISCIPLES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_ORDERS_GAIN_TINY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_THE_FLOATING_CITY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_THE_FLOATING_CITY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_THE_FLOATING_CITY_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_THE_FLOATING_CITY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_THE_FLOATING_CITY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_GAIN_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_NEW_HUMANS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_NEW_HUMANS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_NEW_HUMANS_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_RUINS_NEW_HUMANS_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_NEW_HUMANS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_NEW_HUMANS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_NEW_HUMANS_OPTION_1_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_SUNKEN_TOMBS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_SUNKEN_TOMBS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_SUNKEN_TOMBS_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_SUNKEN_TOMBS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_SUNKEN_TOMBS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_SUNKEN_TOMBS_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_THE_KINGS_ROADS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_THE_KINGS_ROADS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_THE_KINGS_ROADS_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_THE_KINGS_ROADS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_THE_KINGS_ROADS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_THE_KINGS_ROADS_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_GEOGLYPHS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_GEOGLYPHS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_GEOGLYPHS_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_GEOGLYPHS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_GEOGLYPHS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_GEOGLYPHS_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_RAISED_FIELDS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_RAISED_FIELDS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_RAISED_FIELDS_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_RAISED_FIELDS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_RAISED_FIELDS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_RAISED_FIELDS_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_GRAVE_CIRCLES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_GRAVE_CIRCLES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RUINS_GRAVE_CIRCLES_OPTION_0_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_GRAVE_CIRCLES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_GRAVE_CIRCLES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_GRAVE_CIRCLES_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_EMERALD_MINES_OPTION_0",
        "EventLinkAdd": "EVENTLINK_EMERALD_MINES_START",
        "Text": "TEXT_EVENTOPTION_RUINS_EMERALD_MINES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_EMERALD_MINES_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_EMERALD_MINES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_EMERALD_MINES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_EMERALD_MINES_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_EMERALD_MINES_CAVE_IN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_EMERALD_MINES_CAVE_IN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_EMERALD_MINES_CAVE_IN_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_EMERALD_MINE_REBUILT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_EMERALD_MINE_REBUILT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RUINS_EMERALD_MINE_REBUILT_OPTION_0",
            "BONUS_EVENTOPTION_RUINS_EMERALD_MINE_REBUILT_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_IN_THE_CLOUDS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_IN_THE_CLOUDS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_IN_THE_CLOUDS_OPTION_0_CHARACTER",
            "BONUS_EVENTOPTION_RUINS_IN_THE_CLOUDS_OPTION_0_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_IN_THE_CLOUDS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_IN_THE_CLOUDS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_IN_THE_CLOUDS_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_HEAVEN_AND_EARTH_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_HEAVEN_AND_EARTH_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_HEAVEN_AND_EARTH_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_HEAVEN_AND_EARTH_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_HEAVEN_AND_EARTH_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_HEAVEN_AND_EARTH_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_GOLD_WORKERS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_GOLD_WORKERS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_GOLD_WORKERS_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_GOLD_WORKERS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_GOLD_WORKERS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_GOLD_WORKERS_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_GOLD_WORKERS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RUINS_GOLD_WORKERS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_GOLD_WORKERS_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_0_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_1_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_2_CHARACTER",
            "BONUS_EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_2_FAMILY"
          ]
        }
      },
      {
        "beginGroup": "Contact",
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_CALM_EMISSARY_TRUCE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_CALM_EMISSARY_TRUCE",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP"
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_CALM_EMISSARY_WAR",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_CALM_EMISSARY_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR_LEGITIMACY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_SEEDY_MESSENGER_TRUCE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_SEEDY_MESSENGER_TRUCE",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_SEEDY_MESSENGER_WAR",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_SEEDY_MESSENGER_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR_LEGITIMACY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_GIFT_EXCHANGE_WOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_GIFT_EXCHANGE_WOOD",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_CONTACT_GIFT_EXCHANGE_WOOD"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_GIFT_EXCHANGE_METAL",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_GIFT_EXCHANGE_METAL",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_CONTACT_GIFT_EXCHANGE_IRON"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_GIFT_EXCHANGE_WAR",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_GIFT_EXCHANGE_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR_LEGITIMACY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_REFUGEE_OUTLAWS_WAR",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_REFUGEE_OUTLAWS_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR",
            "BONUS_CULTURE_GAIN_AVERAGE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_REFUGEE_OUTLAWS_NEW",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_REFUGEE_OUTLAWS_NEW",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR",
            "BONUS_ADD_CITIZEN_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_REFUGEE_OUTLAWS_TRUCE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_REFUGEE_OUTLAWS_TRUCE",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_GIVE_TRAIT_STRICT"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_RIPE_LANDS_WAR",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_RIPE_LANDS_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR_LEGITIMACY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_RIPE_LANDS_TRUCE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_RIPE_LANDS_TRUCE",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP"
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_HAUGHTY_EMISSARY_TRUCE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_HAUGHTY_EMISSARY_TRUCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_PEACE",
            "NONE",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_COURAGE"
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_HAUGHTY_EMISSARY_PEACE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_HAUGHTY_EMISSARY_PEACE",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_CONTACT_HAUGHTY_EMISSARY_MEMORY_FAMILIES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_HAUGHTY_EMISSARY_WAR",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_HAUGHTY_EMISSARY_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR_LEGITIMACY",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_GRINNING_EMISSARY_TRUCE_STONE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_GRINNING_EMISSARY_TRUCE_STONE",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_CONTACT_GRINNING_EMISSARY_MEMORY",
            "NONE",
            "BONUS_MONEY_GAIN_TINY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_GRINNING_EMISSARY_TRUCE_IRON",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_GRINNING_EMISSARY_TRUCE_IRON",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_CONTACT_GRINNING_EMISSARY_ACCEPT"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_GRINNING_EMISSARY_WAR",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_GRINNING_EMISSARY_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_BARBARIAN",
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_CONTACT_GRINNING_EMISSARY_WAR"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_CULTURAL_DELEGATION_YES",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_CULTURAL_DELEGATION_YES",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_CONTACT_CULTURAL_DELEGATION_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_CULTURAL_DELEGATION_HIRE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_CULTURAL_DELEGATION_HIRE",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_CONTACT_CULTURAL_DELEGATION_HIRE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_CULTURAL_DELEGATION_NO",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_CULTURAL_DELEGATION_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_CONTACT_CULTURAL_DELEGATION_NO",
            "NONE",
            "BONUS_DISCONTENT_LOSS_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_DELIGHTED_EMISSARY_PEACE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_DELIGHTED_EMISSARY_PEACE",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_PEACE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_CONTACT_DELIGHTED_EMISSARY_PEACE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_DELIGHTED_EMISSARY_WISDOM",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_DELIGHTED_EMISSARY_WISDOM",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_GAIN_WISDOM"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_DELIGHTED_EMISSARY_WAR",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_DELIGHTED_EMISSARY_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR_LEGITIMACY",
            "NONE",
            "BONUS_BARBARIAN_TRUCE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_WARLIKE"
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_FUMING_MESSENGER_WAR_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_FUMING_MESSENGER_WAR_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_CONTACT_FUMING_MESSENGER_WAR_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CONTACT_FUMING_MESSENGER_WAR_2",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CONTACT_FUMING_MESSENGER_WAR_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_BARBARIAN_WAR",
            "BONUS_UNITCLASS_HEAVY_INFANTRY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WAR_AMBASSADOR_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_WAR_AMBASSADOR_TRIBUTE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WAR_AMBASSADOR_TRIBUTE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WAR_AMBASSADOR_IF",
        "Text": "TEXT_EVENTOPTION_WAR_AMBASSADOR_IF",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WAR_AMBASSADOR_IF_BARBARIAN",
            "NONE",
            "BONUS_EVENTOPTION_WAR_AMBASSADOR_IF_LEADER"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_WAR_AMBASSADOR_WAR",
        "Text": "TEXT_EVENTOPTION_WAR_AMBASSADOR_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR_LEGITIMACY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_3",
        "Text": "TEXT_EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_NONE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_3"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_CONTACT_MEMORY",
        "Text": "TEXT_EVENTOPTION_PLAYER_CONTACT_MEMORY",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_CONTACT_GIFT",
            "NONE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_CONTACT_TRUCE",
        "Text": "TEXT_EVENTOPTION_PLAYER_CONTACT_TRUCE",
        "HelpText": "TEXT_EVENTOPTION_MAINTAIN_TRUCE_HELP"
      },
      {
        "zType": "EVENTOPTION_PLAYER_CONTACT_WAR",
        "Text": "TEXT_EVENTOPTION_PLAYER_CONTACT_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_WAR_LEGITIMACY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FRIEND_OR_FOE_BEFRIEND",
        "Text": "TEXT_EVENTOPTION_FRIEND_OR_FOE_BEFRIEND",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_FRIEND_OR_FOE_BEFRIEND_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FRIEND_OR_FOE_BEWARE",
        "Text": "TEXT_EVENTOPTION_FRIEND_OR_FOE_BEWARE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_FRIEND_OR_FOE_BEWARE_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FRIEND_OR_FOE_HOSTAGE",
        "Text": "TEXT_EVENTOPTION_FRIEND_OR_FOE_HOSTAGE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FRIEND_OR_FOE_HOSTAGE_PLAYER_THEM",
            "NONE",
            "BONUS_EVENTOPTION_FRIEND_OR_FOE_HOSTAGE_PLAYER_US"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_HUMBLE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_OPTION_0",
        "HelpText": "TEXT_EVENTOPTION_NEIGHBORS_OPTION_0_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_OPTION_0",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_OPTION_1",
        "HelpText": "TEXT_EVENTOPTION_NEIGHBORS_OPTION_1_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_OPTION_1",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_OPTION_2",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_PRIDEFUL",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_OPTION_2",
        "HelpText": "TEXT_EVENTOPTION_NEIGHBORS_OPTION_2_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_OPTION_2",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_ROOT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_ROOT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_ROOT_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_ROOT_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_HUMBLE_ASSYRIA_REFUSE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_ROOT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_ROOT_OPTION_1_NO"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_ROOT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_ROOT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_PLAYER",
            "BONUS_GIVE_TRAIT_RUTHLESS"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_TRIBUTE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_TRIBUTE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_TRIBUTE_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_TRIBUTE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_TRIBUTE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_TRIBUTE_OPTION_1",
            "BONUS_GIVE_TRAIT_STEADFAST"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_GREECE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_GREECE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_GREECE_OPTION_0",
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_GREECE_OPTION_0_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_CHARISMA"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_GREECE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_GREECE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_GREECE_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_GREECE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_GREECE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_PLAYER",
            "BONUS_GIVE_TRAIT_RIGHTEOUS"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_HUMBLE_WELCOME",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_GIVE_TRAIT_GRACIOUS"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_HUMBLE_IGNORE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_OPTION_1",
            "BONUS_ORDERS_GAIN_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_OPTION_2",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_HUMBLE_REFUSE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_OPTION_1_PLAYER"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_FOOD_GAIN_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_HUMBLE_WELCOME_EGYPT",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_OPTION_1_PLAYER"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_GAIN_COURAGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_ALLIANCE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_ALLIANCE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_ALLIANCE_OPTION_0",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_ALLIANCE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_ALLIANCE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_FOOD_GAIN_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PERSIA_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PERSIA_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PERSIA_OPTION_0",
            "BONUS_TRAINING_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PERSIA_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PERSIA_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PERSIA_OPTION_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_HUMBLE"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PERSIA_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PERSIA_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PERSIA_OPTION_2",
            "BONUS_GIVE_TRAIT_PROUD"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_IGNORE_PERSIA_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_IGNORE_PERSIA_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_IGNORE_PERSIA_OPTION_0",
            "BONUS_MONEY_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_HUMBLE_WELCOME_GENERIC",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_WOOD_GAIN_AVERAGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_HUMBLE_WELCOME_GENERIC",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_STONE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_OPTION_2",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_HUMBLE_WELCOME_GENERIC",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_IRON_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_IGNORE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_IGNORE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_IGNORE_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_0",
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_0_PLAYER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_HUMBLE_REFUSE_SPIES_SPARED",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_2",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_HUMBLE_REFUSE_SPIES_SPARED",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_2",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_2_CHARACTER_3"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_SPIES_SPARED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_SPIES_SPARED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_SPIES_SPARED_OPTION_0",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_SPIES_SPARED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_SPIES_SPARED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_SMALL",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PEACE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PEACE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PEACE_OPTION_0",
            "BONUS_MONEY_LOSS_TINY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PEACE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PEACE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PEACE_OPTION_1",
            "BONUS_MONEY_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE_OPTION_0_PLAYER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE_OPTION_1_PLAYER_1",
            "BONUS_EVENTOPTION_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE_OPTION_1_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_SCIENCE_GAIN_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_CARTHAGE_INVEST",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_LARGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_CARTHAGE_REFUSE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_INVEST_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_INVEST_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_INVEST_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_INVEST_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_INVEST_OPTION_1",
        "LeaderSubject": "SUBJECT_ELOQUENT"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_REFUSE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_REFUSE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_REFUSE_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_REFUSE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_REFUSE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_EGYPT_DONATION_OSIRIS",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_EGYPT_REFUSE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_OPTION_1",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_ISIS_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_EGYPT_DONATION_ISIS",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_ISIS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_ISIS_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_EGYPT_REFUSE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_ISIS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_ISIS_OPTION_1",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_RA_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_RA_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_RA_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_RA_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_RA_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_REFUSED_DONATION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_REFUSED_DONATION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_PLAYER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_REFUSED_DONATION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_REFUSED_DONATION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_REFUSED_DONATION_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_REFUSED_DONATION_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_ROME_DECLINE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_ROME_ACCEPT",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_MINIMAL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_OPTION_2",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_ROME_GUIDE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_OPTION_2_PLAYER_1"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_DECLINE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_DECLINE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_DECLINE_OPTION_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_DECLINE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_DECLINE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_DECLINE_OPTION_1",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_HUMBLE"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_1",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_2",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_3",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_3",
            "BONUS_MONEY_LOSS_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_DECLINE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_DECLINE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_GUIDE_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_ROME_AID",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_GUIDE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_IRON_LOSS_AVERAGE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_GUIDE_OPTION_2",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_ROME_AID",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_GUIDE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_WOOD_LOSS_AVERAGE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_GUIDE_OPTION_3",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_ROME_AID",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_GUIDE_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_FOOD_LOSS_AVERAGE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_GUIDE_OPTION_4",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_ROME_AID",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_GUIDE_OPTION_4",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_LARGE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ALLY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ALLY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ALLY_OPTION_0",
            "BONUS_MONEY_GAIN_AVERAGE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_WELCOME",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_LAVISH",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_OPTION_1",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_PEACE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_0",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_BABYLON_REQUEST_PEACE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_1",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_1_PLAYER_1"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_2",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_BABYLON_REQUEST_PEACE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_2_PLAYER_1"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_3",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_APPRECIATE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_APPRECIATE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_PEACE",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_APPRECIATE_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_APPRECIATE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_APPRECIATE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_PEACE",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_APPRECIATE_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_PEACE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_PEACE",
            "BONUS_FOOD_LOSS_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_0",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_PEACE",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_LAVISH_MORE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_FRIENDLY_LAVISH_FOOD",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_FOOD_LOSS_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_OPTION_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_MORE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_MORE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_MORE_OPTION_0",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_MORE_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_MORE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_MORE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_MORE_OPTION_1",
            "BONUS_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_MORE_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_FOOD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_FOOD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_PEACE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_ROME_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_ROME_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_ROME_OPTION_0",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_ROME_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_ROME_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_ROME_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_ROME_OPTION_1_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_COWARDLY"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_CAPTURED_ROMAN_CITY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_CAPTURED_ROMAN_CITY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_CAPTURED_ROMAN_CITY_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_NEIGHBORS_CAPTURED_ROMAN_CITY_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_CAPTURED_ROMAN_CITY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_CAPTURED_ROMAN_CITY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_CAPTURED_ROMAN_CITY_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_NEIGHBORS_CAPTURED_ROMAN_CITY_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_ROMANS_HAVE_TAKEN_OUR_CITY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_ROMANS_HAVE_TAKEN_OUR_CITY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_ROMANS_HAVE_TAKEN_OUR_CITY_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_NEIGHBORS_ROMANS_HAVE_TAKEN_OUR_CITY_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_ROMANS_HAVE_TAKEN_OUR_CITY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_ROMANS_HAVE_TAKEN_OUR_CITY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_ROMANS_HAVE_TAKEN_OUR_CITY_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_NEIGHBORS_ROMANS_HAVE_TAKEN_OUR_CITY_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_PRIDEFUL_PERSIA_DUEL",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_0_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_1",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_2",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_PRIDEFUL_PERSIA",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_2_PLAYER_1"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_2",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_2_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_DIPLOMAT"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_3",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_3",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_3_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_SCHEMER"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_VICTORIOUS_CHAMPION_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_PRIDEFUL_PERSIA",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_VICTORIOUS_CHAMPION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_VICTORIOUS_CHAMPION_01"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_VICTORIOUS_CHAMPION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_VICTORIOUS_CHAMPION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_1",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_DEFEATED_CHAMPION_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_PRIDEFUL_PERSIA",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_DEFEATED_CHAMPION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_2_PLAYER_1"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_DEFEATED_CHAMPION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_DEFEATED_CHAMPION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_1",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_OPTION_0",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_PRIDEFUL_FEE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_OPTION_0_PLAYER_0",
            "BONUS_MONEY_GAIN_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_PRIDEFUL_SUGGEST",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_OPTION_2",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_PRIDEFUL_VERBOSE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_0",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_1",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_2",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_2_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_CHARISMA"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_BABYLON_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_BABYLON_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_PLAYER",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_BABYLON_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_BABYLON_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_BABYLON_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_BABYLON_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_BABYLON_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_BABYLON_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_BABYLON_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_BABYLON_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_BABYLON_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_BABYLON_OPTION_2",
            "BONUS_MONEY_LOSS_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_ANGLER"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_2",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_HERDER"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_3",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_3",
            "BONUS_MONEY_GAIN_HUGE"
          ]
        },
        "LeaderSubject": "SUBJECT_FOOLISH"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_TRIBUTE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_TRIBUTE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_TRIBUTE_OPTION_0",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_TRIBUTE_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_PLANTER"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_2",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_SMELTER"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_3",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_3",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_3_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_CORRUPT"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_0_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_1",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_POLITELY_DECLINE",
        "Text": "TEXT_EVENTOPTION_POLITELY_DECLINE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PEACE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PEACE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_PEACE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PEACE_OPTION_2",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_PRIDEFUL_BROKE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PEACE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_PEACE_SECOND_CHANCE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_PEACE_SECOND_CHANCE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_PEACE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_0_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_CHARISMA"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_1",
        "EventLinkAdd": "EVENTLINK_NEIGHBORS_PRIDEFUL_TRADE",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_2",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_TRADE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_TRADE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_TRADE_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_TRADE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_TRADE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_TRADE_OPTION_1",
            "BONUS_EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_TRADE_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_0",
        "EventLinkAdd": "EVENTLINK_HOSTILE_NEIGHBORS_FIRST_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_1",
        "EventLinkAdd": "EVENTLINK_HOSTILE_NEIGHBORS_FIRST_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_IRON_LOSS_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_2",
        "EventLinkAdd": "EVENTLINK_HOSTILE_NEIGHBORS_FIRST_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_FOOD_LOSS_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_3",
        "EventLinkAdd": "EVENTLINK_HOSTILE_NEIGHBORS_FIRST_REFUSE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE",
            "BONUS_XP_CHARACTER_AVERAGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_4",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_4",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_4",
            "BONUS_EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_4_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_DIPLOMAT"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_0",
        "EventLinkAdd": "EVENTLINK_HOSTILE_NEIGHBORS_SECOND_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_1",
        "EventLinkAdd": "EVENTLINK_HOSTILE_NEIGHBORS_SECOND_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_IRON_LOSS_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_2",
        "EventLinkAdd": "EVENTLINK_HOSTILE_NEIGHBORS_SECOND_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_FOOD_LOSS_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_3",
        "EventLinkAdd": "EVENTLINK_HOSTILE_NEIGHBORS_SECOND_REFUSE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_3",
            "BONUS_EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_3_PLAYER_1"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE_OPTION_0",
        "EventLinkAdd": "EVENTLINK_HOSTILE_NEIGHBORS_FIRST_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE_OPTION_1",
        "EventLinkAdd": "EVENTLINK_HOSTILE_NEIGHBORS_FIRST_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_IRON_LOSS_AVERAGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE_OPTION_2",
        "EventLinkAdd": "EVENTLINK_HOSTILE_NEIGHBORS_FIRST_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_FOOD_LOSS_AVERAGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE_OPTION_3",
        "EventLinkAdd": "EVENTLINK_HOSTILE_NEIGHBORS_SECOND_REFUSE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HOSTILE_NEIGHBORS_SECOND_REFUSE",
            "BONUS_XP_CHARACTER_AVERAGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_PAID_TWICE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_PAID_TWICE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HOSTILE_NEIGHBORS_PAID_TWICE_OPTION_0",
            "BONUS_EVENTOPTION_HOSTILE_NEIGHBORS_PAID_TWICE_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_WAR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_WAR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_PLAYER",
            "BONUS_EVENTOPTION_HOSTILE_NEIGHBORS_WAR_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HOSTILE_NEIGHBORS_WAR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_HOSTILE_NEIGHBORS_WAR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_PLAYER",
            "BONUS_EVENTOPTION_HOSTILE_NEIGHBORS_WAR_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_WITH_DISTANT_NATION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CONTACT_WITH_DISTANT_NATION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_WITH_DISTANT_NATION_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_WITH_DISTANT_NATION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CONTACT_WITH_DISTANT_NATION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_WITH_DISTANT_NATION_OPTION_1",
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_CONTACT_ON_THE_MOVE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CONTACT_ON_THE_MOVE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_ON_THE_MOVE_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_ON_THE_MOVE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CONTACT_ON_THE_MOVE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_ON_THE_MOVE_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_0_BARBARIAN",
            "BONUS_EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_0_TILE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_1_BARBARIAN",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_XP_CHARACTER_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_A_LEARNING_OPPORTUNITY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CONTACT_A_LEARNING_OPPORTUNITY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_A_LEARNING_OPPORTUNITY_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_A_LEARNING_OPPORTUNITY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CONTACT_A_LEARNING_OPPORTUNITY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_A_LEARNING_OPPORTUNITY_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_0_BARBARIAN",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_1_BARBARIAN",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_2_BARBARIAN",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_2_CHARACTER"
          ]
        },
        "LeaderSubject": "SUBJECT_DIPLOMAT"
      },
      {
        "zType": "EVENTOPTION_ATTACKED_BY_A_BEAR_OPTION_0",
        "EventLinkAdd": "EVENTLINK_ATTACKED_BY_A_BEAR_AID",
        "Text": "TEXT_EVENTOPTION_ATTACKED_BY_A_BEAR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_ATTACKED_BY_A_BEAR_OPTION_0"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_ATTACKED_BY_A_BEAR_OPTION_1",
        "EventLinkAdd": "EVENTLINK_ATTACKED_BY_A_BEAR_AID",
        "Text": "TEXT_EVENTOPTION_ATTACKED_BY_A_BEAR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_ATTACKED_BY_A_BEAR_OPTION_1"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_ATTACKED_BY_A_BEAR_OPTION_2",
        "EventLinkAdd": "EVENTLINK_ATTACKED_BY_A_BEAR_NOTIFY",
        "Text": "TEXT_EVENTOPTION_ATTACKED_BY_A_BEAR_OPTION_2",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_ATTACKED_BY_A_BEAR_AID_OPTION_0",
        "Text": "TEXT_EVENTOPTION_ATTACKED_BY_A_BEAR_AID_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_ATTACKED_BY_A_BEAR_AID_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ATTACKED_BY_A_BEAR_AID_OPTION_1",
        "Text": "TEXT_EVENTOPTION_ATTACKED_BY_A_BEAR_AID_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_ATTACKED_BY_A_BEAR_AID_OPTION_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ATTACKED_BY_A_BEAR_NOTIFY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_ATTACKED_BY_A_BEAR_NOTIFY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTSTORY_ATTACKED_BY_A_BEAR_NOTIFY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_2_PLAYER_0",
            "BONUS_EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_2_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_COURAGE"
      },
      {
        "zType": "EVENTOPTION_CONTACT_THE_FOOL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CONTACT_THE_FOOL_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_THE_FOOL_OPTION_0_PLAYER_1",
            "BONUS_EVENTOPTION_CONTACT_THE_FOOL_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_THE_FOOL_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CONTACT_THE_FOOL_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_XP_CHARACTER_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_THE_FOOL_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CONTACT_THE_FOOL_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_THE_FOOL_OPTION_2_PLAYER_0",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_THE_FOOL_OPTION_2_PLAYER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_THE_FOOL_OPTION_3",
        "Text": "TEXT_EVENTOPTION_CONTACT_THE_FOOL_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_THE_FOOL_OPTION_3_PLAYER_1",
            "BONUS_EVENTOPTION_CONTACT_THE_FOOL_OPTION_3_CHARACTER"
          ]
        },
        "LeaderSubject": "SUBJECT_AFFABLE"
      },
      {
        "zType": "EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_0",
        "EventLinkAdd": "EVENTLINK_CONTACT_LETHAL_AFFLICTION",
        "Text": "TEXT_EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_0_PLAYER_0",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_1_PLAYER_0",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_2_PLAYER_0",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_1_PLAYER_0",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_2_PLAYER_0",
            "NONE",
            "BONUS_EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "beginGroup": "Diplomacy",
        "zType": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_SCIENCE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_MONEY",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_FOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_IRON",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_STONE",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_CIVICS",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_CIVICS"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_TRAINING",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_TRAINING"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_SCIENCE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_SCIENCE"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_MONEY",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_MONEY"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_FOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_FOOD"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_WOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_WOOD"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_IRON",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_IRON"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_STONE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES_STONE"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_NO",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_NO",
        "aeBonuses": {
          "zValue": "NONE"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ALLIANCE_WELCOME",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ALLIANCE_WELCOME",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_ALLIANCE_WELCOME",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ALLIANCE_NO",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ALLIANCE_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_SCIENCE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_MONEY",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_FOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_IRON",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_STONE",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_CIVICS",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_CIVICS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_TRAINING",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_TRAINING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_SCIENCE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_SCIENCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_MONEY",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_MONEY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_FOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_FOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_WOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_WOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_IRON",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_IRON",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_STONE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_PEACE_OFFER_YES_STONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PEACE_OFFER_NO",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_PEACE_OFFER_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_SCIENCE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_MONEY",
              "iValue": "1200"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_FOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_IRON",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_STONE",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_CIVICS",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_CIVICS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_TRAINING",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_TRAINING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_SCIENCE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_SCIENCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_MONEY",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_MONEY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_FOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_FOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_WOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_WOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_IRON",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_IRON",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_STONE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES_STONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_SCIENCE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_MONEY",
              "iValue": "1200"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_FOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_IRON",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_STONE",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_CIVICS",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_CIVICS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_TRAINING",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_TRAINING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_SCIENCE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_SCIENCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_MONEY",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_MONEY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_FOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_FOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_WOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_WOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_IRON",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_IRON",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_STONE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES_STONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_NEUTRAL_YES",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_TRUCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_SCIENCE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_MONEY",
              "iValue": "1200"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_FOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_IRON",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_STONE",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_CIVICS",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_CIVICS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_TRAINING",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_TRAINING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_SCIENCE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_SCIENCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_MONEY",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_MONEY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_FOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_FOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_WOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_WOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_IRON",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_IRON",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_STONE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES_STONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_SCIENCE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_MONEY",
              "iValue": "1200"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_FOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_IRON",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_STONE",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_CIVICS",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_CIVICS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_TRAINING",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_TRAINING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_SCIENCE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_SCIENCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_MONEY",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_MONEY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_FOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_FOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_WOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_WOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_IRON",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_IRON",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_STONE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES_STONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRUCE_OFFER_NO",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRUCE_OFFER_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WAR_YES",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WAR_YES",
        "aeBonuses": {
          "zValue": "BONUS_MONEY_LOSS_AVERAGE"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WAR_NO",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WAR_NO",
        "aeBonuses": {
          "zValue": "BONUS_BARBARIAN_WAR_LEGITIMACY"
        }
      },
      {
        "zType": "EVENTOPTION_WARLIKE_PRINCESS_CONVINCE",
        "Text": "TEXT_EVENTOPTION_WARLIKE_PRINCESS_CONVINCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_ALLIANCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WARLIKE_PRINCESS_BRIBE",
        "Text": "TEXT_EVENTOPTION_WARLIKE_PRINCESS_BRIBE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WARLIKE_PRINCESS_BRIBE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WARLIKE_PRINCESS_PREPARE",
        "Text": "TEXT_EVENTOPTION_WARLIKE_PRINCESS_PREPARE",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR_LEGITIMACY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ENVOY_PEACE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ENVOY_PEACE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_ENVOY_PEACE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_ENVOY_NO",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_ENVOY_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR_LEGITIMACY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FLORID_DIPLOMAT_GIFTS",
        "Text": "TEXT_EVENTOPTION_FLORID_DIPLOMAT_GIFTS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FLORID_DIPLOMAT_GIFTS_TRIBE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_CHARISMA"
      },
      {
        "zType": "EVENTOPTION_FLORID_DIPLOMAT_WAR",
        "Text": "TEXT_EVENTOPTION_FLORID_DIPLOMAT_WAR",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR_LEGITIMACY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DISCERNING_JUDGMENT_JUDGE",
        "Text": "TEXT_EVENTOPTION_DISCERNING_JUDGMENT_JUDGE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DISCERNING_JUDGMENT_JUDGE_CHARACTER"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_WISDOM"
      },
      {
        "zType": "EVENTOPTION_DISCERNING_JUDGMENT_NONSENSE",
        "Text": "TEXT_EVENTOPTION_DISCERNING_JUDGMENT_NONSENSE",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR_LEGITIMACY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WAR_PREPARATIONS_POLITICAL",
        "Text": "TEXT_EVENTOPTION_WAR_PREPARATIONS_POLITICAL",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR",
            "BONUS_CIVICS_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WAR_PREPARATIONS_ARMY",
        "Text": "TEXT_EVENTOPTION_WAR_PREPARATIONS_ARMY",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR",
            "BONUS_TRAINING_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WAR_PREPARATIONS_TAX",
        "Text": "TEXT_EVENTOPTION_WAR_PREPARATIONS_TAX",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR",
            "BONUS_MONEY_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AN_UNLIKELY_MATCH_REFUSAL",
        "Text": "TEXT_EVENTOPTION_AN_UNLIKELY_MATCH_REFUSAL",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_AN_UNLIKELY_MATCH_REFUSAL_BARBARIAN",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AN_UNLIKELY_MATCH_DELAY",
        "EventLinkAdd": "EVENTLINK_AN_UNLIKELY_MATCH_DELAY",
        "Text": "TEXT_EVENTOPTION_AN_UNLIKELY_MATCH_DELAY",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_AN_UNLIKELY_MATCH_SUBMISSION",
        "EventLinkAdd": "EVENTLINK_AN_UNLIKELY_MATCH_SUBMISSION",
        "Text": "TEXT_EVENTOPTION_AN_UNLIKELY_MATCH_SUBMISSION",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_AN_UNLIKELY_MATCH_SUBMISSION_CHARACTER"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_AN_UNLIKELY_MATCH_DELAY_WEDDING_IS_ON",
        "Text": "TEXT_EVENTOPTION_AN_UNLIKELY_MATCH_DELAY_WEDDING_IS_ON",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_AN_UNLIKELY_MATCH_DELAY_WEDDING_IS_ON_FAMILY",
            "BONUS_EVENTOPTION_AN_UNLIKELY_MATCH_DELAY_WEDDING_IS_ON_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AN_UNLIKELY_MATCH_DELAY_NO_CAN_DO",
        "Text": "TEXT_EVENTOPTION_AN_UNLIKELY_MATCH_DELAY_NO_CAN_DO",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR_LEGITIMACY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AN_UNLIKELY_MATCH_FAVORABLE_WEDDING_BELLS",
        "Text": "TEXT_EVENTOPTION_AN_UNLIKELY_MATCH_FAVORABLE_WEDDING_BELLS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_AN_UNLIKELY_MATCH_FAVORABLE_WEDDING_BELLS_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AN_UNLIKELY_MATCH_SUBMISSION_MARRIAGE",
        "Text": "TEXT_EVENTOPTION_AN_UNLIKELY_MATCH_SUBMISSION_MARRIAGE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_AN_UNLIKELY_MATCH_SUBMISSION_MARRIAGE_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_INVASION_YES",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_INVASION_YES",
        "aeBonuses": {
          "zValue": "BONUS_MONEY_LOSS_LARGE"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_INVASION_NO",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_INVASION_NO",
        "aeBonuses": {
          "zValue": "BONUS_BARBARIAN_INVASION_LEGITIMACY"
        }
      },
      {
        "zType": "EVENTOPTION_TRIBAL_MIGRATION_ASSIMILATE",
        "Text": "TEXT_EVENTOPTION_TRIBAL_MIGRATION_ASSIMILATE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRIBAL_MIGRATION_ASSIMILATE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_CHARISMA"
      },
      {
        "zType": "EVENTOPTION_TRIBAL_MIGRATION_PERSUADE",
        "Text": "TEXT_EVENTOPTION_TRIBAL_MIGRATION_PERSUADE",
        "aeBonuses": {
          "zValue": [
            "BONUS_DISCONTENT_LOSS_TINY",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_ELOQUENT"
      },
      {
        "zType": "EVENTOPTION_TRIBAL_MIGRATION_DEFEND",
        "Text": "TEXT_EVENTOPTION_TRIBAL_MIGRATION_DEFEND",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_INVASION_LEGITIMACY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRAVE_OFFENSE_ATONE",
        "Text": "TEXT_EVENTOPTION_GRAVE_OFFENSE_ATONE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GRAVE_OFFENSE_ATONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRAVE_OFFENSE_REFUSE",
        "Text": "TEXT_EVENTOPTION_GRAVE_OFFENSE_REFUSE",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_INVASION_LEGITIMACY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HOSTILE_GARRISON_ACCEPT",
        "EventLinkAdd": "EVENTLINK_HOSTILE_GARRISON_ACCEPT",
        "Text": "TEXT_EVENTOPTION_HOSTILE_GARRISON_ACCEPT",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_PEACE",
            "BONUS_EVENTOPTION_HOSTILE_GARRISON_ACCEPT_CAPITAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HOSTILE_GARRISON_REFUSE",
        "Text": "TEXT_EVENTOPTION_HOSTILE_GARRISON_REFUSE",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_INVASION_LEGITIMACY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HOSTILE_GARRISON_EXPEL_YES",
        "Text": "TEXT_EVENTOPTION_HOSTILE_GARRISON_EXPEL_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR",
            "BONUS_EVENTOPTION_HOSTILE_GARRISON_EXPEL_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HOSTILE_GARRISON_EXPEL_NO",
        "Text": "TEXT_EVENTOPTION_HOSTILE_GARRISON_EXPEL_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_DISCONTENT_GAIN_TINY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SCALES_OF_TRIBUTE_ACQUIESCE",
        "Text": "TEXT_EVENTOPTION_SCALES_OF_TRIBUTE_ACQUIESCE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SCALES_OF_TRIBUTE_ACQUIESCE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SCALES_OF_TRIBUTE_PERSUADE",
        "Text": "TEXT_EVENTOPTION_SCALES_OF_TRIBUTE_PERSUADE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SCALES_OF_TRIBUTE_PERSUADE"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_DISCIPLINE"
      },
      {
        "zType": "EVENTOPTION_SCALES_OF_TRIBUTE_REFUSE",
        "Text": "TEXT_EVENTOPTION_SCALES_OF_TRIBUTE_REFUSE",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_INVASION_LEGITIMACY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DESPERATE_MESSENGER_ALLIANCE",
        "Text": "TEXT_EVENTOPTION_DESPERATE_MESSENGER_ALLIANCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_INVASION",
            "BONUS_BARBARIAN_ALLIANCE",
            "BONUS_EVENTOPTION_DESPERATE_MESSENGER_ALLIANCE_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DESPERATE_MESSENGER_ALONE",
        "Text": "TEXT_EVENTOPTION_DESPERATE_MESSENGER_ALONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_INVASION",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRIBUTE_FOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRIBUTE_FOOD",
        "aeBonuses": {
          "zValue": "BONUS_FOOD_GAIN_AVERAGE"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRIBUTE_WOOD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRIBUTE_WOOD",
        "aeBonuses": {
          "zValue": "BONUS_WOOD_GAIN_AVERAGE"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRIBUTE_IRON",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRIBUTE_IRON",
        "aeBonuses": {
          "zValue": "BONUS_IRON_GAIN_AVERAGE"
        }
      },
      {
        "zType": "EVENTOPTION_SECURING_PEACE_YES",
        "EventLinkAdd": "EVENTLINK_SECURING_PEACE_YES",
        "Text": "TEXT_EVENTOPTION_SECURING_PEACE_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_PEACE",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SECURING_PEACE_NO",
        "Text": "TEXT_EVENTOPTION_SECURING_PEACE_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SECURING_PEACE_NO",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SECURING_PEACE_FURIOUS_EMISSARY_SUICIDE",
        "EventLinkAdd": "EVENTLINK_SECURING_PEACE_FURIOUS_EMISSARY_SUICIDE",
        "Text": "TEXT_EVENTOPTION_SECURING_PEACE_FURIOUS_EMISSARY_SUICIDE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SECURING_PEACE_FURIOUS_EMISSARY_SUICIDE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SECURING_PEACE_FURIOUS_EMISSARY_MISUNDERSTANDING",
        "Text": "TEXT_EVENTOPTION_SECURING_PEACE_FURIOUS_EMISSARY_MISUNDERSTANDING",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_SECURING_PEACE_FURIOUS_EMISSARY_MISUNDERSTANDING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SECURING_PEACE_FURIOUS_EMISSARY_REFUSE",
        "EventLinkAdd": "EVENTLINK_SECURING_PEACE_RETURNING_EMISSARY_REFUSE",
        "Text": "TEXT_EVENTOPTION_SECURING_PEACE_FURIOUS_EMISSARY_REFUSE",
        "HelpText": "TEXT_EVENTOPTION_SECURING_PEACE_FURIOUS_EMISSARY_REFUSE_HELP"
      },
      {
        "zType": "EVENTOPTION_SECURING_PEACE_RETURNING_EMISSARY_THANKS_OK",
        "Text": "TEXT_EVENTOPTION_SECURING_PEACE_RETURNING_EMISSARY_THANKS_OK",
        "HelpText": "TEXT_EVENTOPTION_SECURING_PEACE_RETURNING_EMISSARY_THANKS_OK_HELP"
      },
      {
        "zType": "EVENTOPTION_SECURING_PEACE_RETURNING_EMISSARY_MISUNDERSTANDING_WAR",
        "Text": "TEXT_EVENTOPTION_SECURING_PEACE_RETURNING_EMISSARY_MISUNDERSTANDING_WAR",
        "HelpText": "TEXT_EVENTOPTION_SECURING_PEACE_RETURNING_EMISSARY_MISUNDERSTANDING_WAR_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_INVASION_LEGITIMACY",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SECURING_PEACE_RETURNING_EMISSARY_MISUNDERSTANDING_DIPLOMAT",
        "Text": "TEXT_EVENTOPTION_SECURING_PEACE_RETURNING_EMISSARY_MISUNDERSTANDING_DIPLOMAT",
        "HelpText": "TEXT_EVENTOPTION_SECURING_PEACE_RETURNING_EMISSARY_MISUNDERSTANDING_DIPLOMAT_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_CULTURE_GAIN_SMALL",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_ELOQUENT"
      },
      {
        "zType": "EVENTOPTION_PLAYER_PEACE_YES",
        "Text": "TEXT_EVENTOPTION_PLAYER_PEACE_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_PEACE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_PEACE_NO",
        "Text": "TEXT_EVENTOPTION_PLAYER_PEACE_NO"
      },
      {
        "zType": "EVENTOPTION_PLAYER_PEACE_SIGN_TREATY",
        "Text": "TEXT_EVENTOPTION_PLAYER_PEACE_SIGN_TREATY",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_PEACE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_PEACE_BUILDING_TRUST_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_PEACE_BUILDING_TRUST_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_PEACE_BUILDING_TRUST_OPTION_1",
            "BONUS_EVENTOPTION_PLAYER_PEACE_BUILDING_TRUST_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PAUSE_IN_HOSTILITIES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PAUSE_IN_HOSTILITIES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_TRUCE",
            "BONUS_BARBARIAN_WAR",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PAUSE_IN_HOSTILITIES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PAUSE_IN_HOSTILITIES_OPTION_1"
      },
      {
        "zType": "EVENTOPTION_PLAYER_TRUCE_ROUTED",
        "Text": "TEXT_EVENTOPTION_PLAYER_TRUCE_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PLAYER_TRUCE_ROUTED"
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_TRUCE_LOSING",
        "Text": "TEXT_EVENTOPTION_PLAYER_TRUCE_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PLAYER_TRUCE_LOSING"
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_TRUCE_NEUTRAL",
        "Text": "TEXT_EVENTOPTION_PLAYER_TRUCE_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PLAYER_TRUCE_NEUTRAL"
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_TRUCE_WINNING",
        "Text": "TEXT_EVENTOPTION_PLAYER_TRUCE_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PLAYER_TRUCE_WINNING"
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_TRUCE_TRIUMPHANT",
        "Text": "TEXT_EVENTOPTION_PLAYER_TRUCE_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PLAYER_TRUCE_TRIUMPHANT"
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_MONEY",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_TRIBUTE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EVENTSTORY_PLAYER_WAR_DISTANT_EMPIRE_THREATENS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_EVENTSTORY_PLAYER_WAR_DISTANT_EMPIRE_THREATENS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EVENTSTORY_PLAYER_WAR_DISTANT_EMPIRE_THREATENS_OPTION_0",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EVENTSTORY_PLAYER_WAR_DISTANT_EMPIRE_THREATENS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_EVENTSTORY_PLAYER_WAR_DISTANT_EMPIRE_THREATENS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EVENTSTORY_PLAYER_WAR_DISTANT_EMPIRE_THREATENS_OPTION_1",
            "BONUS_EVENTOPTION_EVENTSTORY_PLAYER_WAR_DISTANT_EMPIRE_THREATENS_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_OF_MONARCH_ACCEPT_NOW",
        "EventLinkAdd": "EVENTLINK_ASSASSINATION_OF_MONARCH_ACCEPT",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_OF_MONARCH_ACCEPT_NOW",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_OF_MONARCH_STALL",
        "EventLinkAdd": "EVENTLINK_ASSASSINATION_OF_MONARCH_STALL",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_OF_MONARCH_STALL",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_DISCONTENT_GAIN_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_OF_MONARCH_SUCCESS",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_OF_MONARCH_SUCCESS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_ASSASSINATION_OF_MONARCH_SUCCESS"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_OF_MONARCH_ACCEPT_LATER",
        "EventLinkAdd": "EVENTLINK_ASSASSINATION_OF_MONARCH_ACCEPT",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_OF_MONARCH_ACCEPT_LATER",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_OF_MONARCH_REJECT",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_OF_MONARCH_REJECT",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_PLAYER",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_OF_MONARCH_HOLE",
        "EventLinkAdd": "EVENTLINK_ASSASSINATION_OF_MONARCH_HOLE",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_OF_MONARCH_HOLE",
        "LeaderSubject": "SUBJECT_HIGH_CHARISMA",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_OF_MONARCH_STALL_AGAIN",
        "EventLinkAdd": "EVENTLINK_ASSASSINATION_OF_MONARCH_STALL_AGAIN",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_OF_MONARCH_STALL_AGAIN",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_DISCONTENT_GAIN_AVERAGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_OF_MONARCH_BATHS",
        "EventLinkAdd": "EVENTLINK_ASSASSINATION_OF_MONARCH_BATHS",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_OF_MONARCH_BATHS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_ASSASSINATION_OF_MONARCH_REVENGE",
            "NONE",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_WISDOM",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_ALLIANCE_PROPOSAL_YES",
        "Text": "TEXT_EVENTOPTION_ALLIANCE_PROPOSAL_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_ALLIANCE_PROPOSAL_YES"
        }
      },
      {
        "zType": "EVENTOPTION_ALLIANCE_PROPOSAL_NO",
        "Text": "TEXT_EVENTOPTION_ALLIANCE_PROPOSAL_NO"
      },
      {
        "zType": "EVENTOPTION_PEACE_PROPOSAL_OFFER_TRIBUTE",
        "EventLinkStart": "EVENTLINK_PEACE_PROPOSAL_OFFER_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_PEACE_PROPOSAL_OFFER_TRIBUTE",
        "HelpText": "TEXT_EVENTOPTION_PEACE_PROPOSAL_OFFER_TRIBUTE_HELP"
      },
      {
        "zType": "EVENTOPTION_PEACE_PROPOSAL_NO_TRIBUTE",
        "EventLinkStart": "EVENTLINK_PEACE_PROPOSAL_NO_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_PEACE_PROPOSAL_NO_TRIBUTE",
        "HelpText": "TEXT_EVENTOPTION_PEACE_PROPOSAL_NO_TRIBUTE_HELP"
      },
      {
        "zType": "EVENTOPTION_PEACE_PROPOSAL_DEMAND_TRIBUTE",
        "EventLinkStart": "EVENTLINK_PEACE_PROPOSAL_DEMAND_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_PEACE_PROPOSAL_DEMAND_TRIBUTE",
        "HelpText": "TEXT_EVENTOPTION_PEACE_PROPOSAL_DEMAND_TRIBUTE_HELP"
      },
      {
        "zType": "EVENTOPTION_PEACE_RESPONSE_OFFER_TRIBUTE_STRONGER",
        "Text": "TEXT_EVENTOPTION_PEACE_RESPONSE_OFFER_TRIBUTE_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PEACE_RESPONSE_OFFER_TRIBUTE_STRONGER"
        }
      },
      {
        "zType": "EVENTOPTION_PEACE_RESPONSE_OFFER_TRIBUTE_SIMILAR",
        "Text": "TEXT_EVENTOPTION_PEACE_RESPONSE_OFFER_TRIBUTE_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PEACE_RESPONSE_OFFER_TRIBUTE_SIMILAR"
        }
      },
      {
        "zType": "EVENTOPTION_PEACE_RESPONSE_DEMAND_TRIBUTE_WEAKER",
        "Text": "TEXT_EVENTOPTION_PEACE_RESPONSE_DEMAND_TRIBUTE_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PEACE_RESPONSE_DEMAND_TRIBUTE_WEAKER"
        }
      },
      {
        "zType": "EVENTOPTION_TRUCE_PROPOSAL_OFFER_TRIBUTE",
        "EventLinkStart": "EVENTLINK_TRUCE_PROPOSAL_OFFER_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_TRUCE_PROPOSAL_OFFER_TRIBUTE",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRUCE_PROPOSAL_NO_TRIBUTE",
        "EventLinkStart": "EVENTLINK_TRUCE_PROPOSAL_NO_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_TRUCE_PROPOSAL_NO_TRIBUTE",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRUCE_PROPOSAL_DEMAND_TRIBUTE",
        "EventLinkStart": "EVENTLINK_TRUCE_PROPOSAL_DEMAND_TRIBUTE",
        "Text": "TEXT_EVENTOPTION_TRUCE_PROPOSAL_DEMAND_TRIBUTE",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_TRIUMPHANT",
        "Text": "TEXT_EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_TRUCE_TRIUMPHANT",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_WINNING",
        "Text": "TEXT_EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_TRUCE_WINNING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_NEUTRAL",
        "Text": "TEXT_EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_TRUCE_NEUTRAL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRUCE_RESPONSE_DEMAND_TRIBUTE_LOSING",
        "Text": "TEXT_EVENTOPTION_TRUCE_RESPONSE_DEMAND_TRIBUTE_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_TRUCE_LOSING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRUCE_RESPONSE_DEMAND_TRIBUTE_ROUTED",
        "Text": "TEXT_EVENTOPTION_TRUCE_RESPONSE_DEMAND_TRIBUTE_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_TRUCE_ROUTED",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CITY_CAPTURED_TRUCE_YES",
        "Text": "TEXT_EVENTOPTION_CITY_CAPTURED_TRUCE_YES",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_TRUCE"
        }
      },
      {
        "zType": "EVENTOPTION_CITY_CAPTURED_TRUCE_NO",
        "Text": "TEXT_EVENTOPTION_CITY_CAPTURED_TRUCE_NO"
      },
      {
        "zType": "EVENTOPTION_BOASTFUL_HEIR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BOASTFUL_HEIR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BOASTFUL_HEIR_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_BOASTFUL_HEIR_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BOASTFUL_HEIR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BOASTFUL_HEIR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BOASTFUL_HEIR_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_BOASTFUL_HEIR_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BOASTFUL_HEIR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_BOASTFUL_HEIR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BOASTFUL_HEIR_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_BOASTFUL_HEIR_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_ELOQUENT"
      },
      {
        "zType": "EVENTOPTION_SEEKING_KNOWLEDGE_WOOD",
        "Text": "TEXT_EVENTOPTION_SEEKING_KNOWLEDGE_WOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SEEKING_KNOWLEDGE_YES",
            "BONUS_WOOD_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SEEKING_KNOWLEDGE_FOOD",
        "Text": "TEXT_EVENTOPTION_SEEKING_KNOWLEDGE_FOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SEEKING_KNOWLEDGE_YES",
            "BONUS_FOOD_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SEEKING_KNOWLEDGE_STONE",
        "Text": "TEXT_EVENTOPTION_SEEKING_KNOWLEDGE_STONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SEEKING_KNOWLEDGE_YES",
            "BONUS_STONE_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SEEKING_KNOWLEDGE_NO",
        "Text": "TEXT_EVENTOPTION_SEEKING_KNOWLEDGE_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SEEKING_KNOWLEDGE_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WALLS_YES",
        "Text": "TEXT_EVENTOPTION_WALLS_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WALLS_YES"
        }
      },
      {
        "zType": "EVENTOPTION_WALLS_NO",
        "Text": "TEXT_EVENTOPTION_WALLS_NO",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WALLS_NO"
        }
      },
      {
        "zType": "EVENTOPTION_AN_UPGRADE_YES",
        "Text": "TEXT_EVENTOPTION_AN_UPGRADE_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_AN_UPGRADE_YES_CHARACTER",
            "BONUS_EVENTOPTION_AN_UPGRADE_YES_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AN_UPGRADE_NO",
        "Text": "TEXT_EVENTOPTION_AN_UPGRADE_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_AN_UPGRADE_NO_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CITIZENSHIP_YES",
        "Text": "TEXT_EVENTOPTION_CITIZENSHIP_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CITIZENSHIP_YES",
            "BONUS_MONEY_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CITIZENSHIP_NO",
        "Text": "TEXT_EVENTOPTION_CITIZENSHIP_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CITIZENSHIP_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_A_FRIEND_IN_NEED_YES",
        "Text": "TEXT_EVENTOPTION_A_FRIEND_IN_NEED_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_A_FRIEND_IN_NEED_YES"
        }
      },
      {
        "zType": "EVENTOPTION_A_FRIEND_IN_NEED_NO",
        "Text": "TEXT_EVENTOPTION_A_FRIEND_IN_NEED_NO",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_A_FRIEND_IN_NEED_NO"
        }
      },
      {
        "zType": "EVENTOPTION_ROAD_TO_HEAVEN_YES",
        "Text": "TEXT_EVENTOPTION_ROAD_TO_HEAVEN_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_ROAD_TO_HEAVEN_YES"
        }
      },
      {
        "zType": "EVENTOPTION_ROAD_TO_HEAVEN_NO",
        "Text": "TEXT_EVENTOPTION_ROAD_TO_HEAVEN_NO",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_ROAD_TO_HEAVEN_NO"
        }
      },
      {
        "zType": "EVENTOPTION_A_TINY_FAVOR_YES",
        "Text": "TEXT_EVENTOPTION_A_TINY_FAVOR_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_A_TINY_FAVOR_YES",
            "BONUS_SCIENCE_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_A_TINY_FAVOR_NO",
        "Text": "TEXT_EVENTOPTION_A_TINY_FAVOR_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_A_TINY_FAVOR_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WARRIOR_CODE_COURTIER",
        "Text": "TEXT_EVENTOPTION_WARRIOR_CODE_COURTIER",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WARRIOR_CODE_YES",
            "BONUS_ADD_GREAT_SOLDIER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WARRIOR_CODE_BODKIN_ARROW",
        "Text": "TEXT_EVENTOPTION_WARRIOR_CODE_BODKIN_ARROW",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WARRIOR_CODE_YES",
            "BONUS_EVENTOPTION_WARRIOR_CODE_BODKIN_ARROW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WARRIOR_CODE_NO",
        "Text": "TEXT_EVENTOPTION_WARRIOR_CODE_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WARRIOR_CODE_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TIT_FOR_TAT_YES",
        "Text": "TEXT_EVENTOPTION_TIT_FOR_TAT_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TIT_FOR_TAT_YES_CHARACTER",
            "BONUS_EVENTOPTION_TIT_FOR_TAT_YES_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TIT_FOR_TAT_NO",
        "Text": "TEXT_EVENTOPTION_TIT_FOR_TAT_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TIT_FOR_TAT_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WINDMILLS_AND_CATAPULTS_COINAGE",
        "Text": "TEXT_EVENTOPTION_WINDMILLS_AND_CATAPULTS_COINAGE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WINDMILLS_AND_CATAPULTS_COINAGE",
            "BONUS_EVENTOPTION_WINDMILLS_AND_CATAPULTS_MACHINERY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WINDMILLS_AND_CATAPULTS_SCHOLARSHIP",
        "Text": "TEXT_EVENTOPTION_WINDMILLS_AND_CATAPULTS_SCHOLARSHIP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WINDMILLS_AND_CATAPULTS_SCHOLARSHIP",
            "BONUS_EVENTOPTION_WINDMILLS_AND_CATAPULTS_MACHINERY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WINDMILLS_AND_CATAPULTS_NO",
        "Text": "TEXT_EVENTOPTION_WINDMILLS_AND_CATAPULTS_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WINDMILLS_AND_CATAPULTS_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_FOOD",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_WOOD",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_IRON",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_STONE",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_ORDERS",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_CIVICS",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_TRAINING",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_SCIENCE",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_MONEY",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_HEAVY_INFANTRY",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_POLEARM_INFANTRY",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_RANGED_INFANTRY",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_MELEE_CAVALRY",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_SIEGE",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_SHIP",
              "iValue": "10"
            },
            {
              "zIndex": "EVENTOPTION_RETURNING_A_FAVOR_POPULATION",
              "iValue": "10"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_FOOD",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_FOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_FOOD_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_WOOD",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_WOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_WOOD_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_IRON",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_IRON",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_IRON_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_STONE",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_STONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_STONE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_ORDERS",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_ORDERS_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_CIVICS",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_CIVICS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_CIVICS_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_TRAINING",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_TRAINING_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_SCIENCE",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_SCIENCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_SCIENCE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_MONEY",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_MONEY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_MONEY_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_HEAVY_INFANTRY",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_HEAVY_INFANTRY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_UNITCLASS_HEAVY_INFANTRY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_POLEARM_INFANTRY",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_POLEARM_INFANTRY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_UNITCLASS_POLEARM_INFANTRY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_RANGED_INFANTRY",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_RANGED_INFANTRY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_UNITCLASS_RANGED_INFANTRY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_MELEE_CAVALRY",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_MELEE_CAVALRY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_UNITCLASS_MELEE_CAVALRY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_SIEGE",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_SIEGE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_UNITCLASS_SIEGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_SHIP",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_SHIP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_UNITCLASS_SHIP"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RETURNING_A_FAVOR_POPULATION",
        "Text": "TEXT_EVENTOPTION_RETURNING_A_FAVOR_POPULATION",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RETURNING_A_FAVOR",
            "BONUS_ADD_CITIZEN_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_PEACE_SOLID_FOUNDATION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_PEACE_SOLID_FOUNDATION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_PEACE_SOLID_FOUNDATION_OPTION_1",
            "BONUS_EVENTOPTION_PLAYER_PEACE_SOLID_FOUNDATION_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_PEACE_LUMBER_TRADE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_PEACE_LUMBER_TRADE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_PEACE_LUMBER_TRADE_OPTION_1",
            "BONUS_EVENTOPTION_PLAYER_PEACE_LUMBER_TRADE_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_PEACE_ACQUIRED_TASTE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_PEACE_ACQUIRED_TASTE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_PEACE_ACQUIRED_TASTE_OPTION_1",
            "BONUS_EVENTOPTION_PLAYER_PEACE_ACQUIRED_TASTE_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_PEACE_QUALITY_ORE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_PEACE_QUALITY_ORE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_PEACE_QUALITY_ORE_OPTION_0",
            "BONUS_IRON_LOSS_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_PEACE_QUALITY_ORE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_PEACE_QUALITY_ORE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_PEACE_QUALITY_ORE_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_0",
            "BONUS_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_0_FAMILY",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_FOOLISH",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_0",
            "BONUS_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_1_FAMILY",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_FOOLISH",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_2",
            "BONUS_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_2_FAMILY",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_FOOLISH",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_3",
        "Text": "TEXT_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_3",
            "BONUS_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_2_FAMILY",
            "BONUS_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_3_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_FOOLISH",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_4",
        "Text": "TEXT_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_4",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_4_PLAYER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_UPSET_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_UPSET_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_UPSET_OPTION_0_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_UPSET_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_UPSET_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_UPSET_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_UPSET_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_0_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_2_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_2_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_2_OPTION_0_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_2_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_2_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_2_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3_OPTION_0_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3_OPTION_2",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_FREE",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_MONEY_ORDERS_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_MONEY_CIVICS_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_FOOD_ORDERS_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_FOOD_CIVICS_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_IRON_ORDERS_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_IRON_CIVICS_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_WOOD_ORDERS_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_WOOD_CIVICS_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_STONE_ORDERS_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_STONE_CIVICS_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_MONEY_TRAINING_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_MONEY_SCIENCE_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_FOOD_TRAINING_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_FOOD_SCIENCE_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_IRON_TRAINING_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_IRON_SCIENCE_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_WOOD_TRAINING_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_WOOD_SCIENCE_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_STONE_TRAINING_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_STONE_SCIENCE_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_MONEY_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_MONEY_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_FOOD_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_FOOD_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_IRON_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_IRON_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_WOOD_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_WOOD_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_STONE_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_STONE_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_MONEY_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_MONEY_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_FOOD_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_FOOD_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_IRON_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_IRON_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_WOOD_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_WOOD_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_STONE_FREE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_STONE_FREE",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_MONEY_ORDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_MONEY_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_FOOD_ORDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_FOOD_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_IRON_ORDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_IRON_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_WOOD_ORDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_WOOD_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_STONE_ORDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_STONE_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_MONEY_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_MONEY_SCIENCE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_FOOD_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_FOOD_SCIENCE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_IRON_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_IRON_SCIENCE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_WOOD_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_WOOD_SCIENCE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_STONE_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_STONE_SCIENCE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_MONEY",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_MONEY",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_FOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_FOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_IRON",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_IRON",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_STONE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_STONE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_MONEY",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_MONEY",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_FOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_FOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_IRON",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_IRON",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_STONE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_STONE",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_MONEY_ORDERS_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_MONEY_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_MONEY_ORDERS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_MONEY_ORDERS",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_MONEY_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_MONEY_ORDERS",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_MONEY_CIVICS_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_MONEY_CIVICS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_MONEY_CIVICS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_MONEY_CIVICS",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_MONEY_CIVICS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_MONEY_CIVICS",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_MONEY_TRAINING_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_MONEY_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_MONEY_TRAINING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_MONEY_TRAINING",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_MONEY_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_MONEY_TRAINING",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_MONEY_SCIENCE_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_MONEY_SCIENCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_MONEY_SCIENCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_MONEY_SCIENCE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_MONEY_SCIENCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_MONEY_SCIENCE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_FOOD_ORDERS_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_FOOD_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_FOOD_ORDERS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_FOOD_ORDERS",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_FOOD_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_FOOD_ORDERS",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_FOOD_CIVICS_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_FOOD_CIVICS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_FOOD_CIVICS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_FOOD_CIVICS",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_FOOD_CIVICS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_FOOD_CIVICS",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_FOOD_TRAINING_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_FOOD_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_FOOD_TRAINING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_FOOD_TRAINING",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_FOOD_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_FOOD_TRAINING",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_FOOD_SCIENCE_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_FOOD_SCIENCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_FOOD_SCIENCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_FOOD_SCIENCE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_FOOD_SCIENCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_FOOD_SCIENCE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_IRON_ORDERS_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_IRON_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_IRON_ORDERS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_IRON_ORDERS",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_IRON_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_IRON_ORDERS",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_IRON_CIVICS_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_IRON_CIVICS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_IRON_CIVICS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_IRON_CIVICS",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_IRON_CIVICS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_IRON_CIVICS",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_IRON_TRAINING_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_IRON_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_IRON_TRAINING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_IRON_TRAINING",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_IRON_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_IRON_TRAINING",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_IRON_SCIENCE_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_IRON_SCIENCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_IRON_SCIENCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_IRON_SCIENCE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_IRON_SCIENCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_IRON_SCIENCE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_WOOD_ORDERS_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_WOOD_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_WOOD_ORDERS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_WOOD_ORDERS",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_WOOD_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_WOOD_ORDERS",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_WOOD_CIVICS_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_WOOD_CIVICS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_WOOD_CIVICS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_WOOD_CIVICS",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_WOOD_CIVICS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_WOOD_CIVICS",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_WOOD_TRAINING_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_WOOD_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_WOOD_TRAINING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_WOOD_TRAINING",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_WOOD_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_WOOD_TRAINING",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_WOOD_SCIENCE_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_WOOD_SCIENCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_WOOD_SCIENCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_WOOD_SCIENCE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_WOOD_SCIENCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_WOOD_SCIENCE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_STONE_ORDERS_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_STONE_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_STONE_ORDERS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_STONE_ORDERS",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_STONE_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_STONE_ORDERS",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_STONE_CIVICS_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_STONE_CIVICS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_STONE_CIVICS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_STONE_CIVICS",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_STONE_CIVICS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_STONE_CIVICS",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_STONE_TRAINING_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_STONE_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_STONE_TRAINING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_STONE_TRAINING",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_STONE_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_STONE_TRAINING",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_STONE_SCIENCE_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_STONE_SCIENCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_STONE_SCIENCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_STONE_SCIENCE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_STONE_SCIENCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_STONE_SCIENCE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_MONEY_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_ORDERS_MONEY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_ORDERS_MONEY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_MONEY",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_ORDERS_MONEY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_ORDERS_MONEY",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_MONEY_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_CIVICS_MONEY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_CIVICS_MONEY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_MONEY",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_CIVICS_MONEY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_CIVICS_MONEY",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_MONEY_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_TRAINING_MONEY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_TRAINING_MONEY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_MONEY",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_TRAINING_MONEY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_TRAINING_MONEY",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_MONEY_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_MONEY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_MONEY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_MONEY",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_MONEY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_MONEY",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_FOOD_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_ORDERS_FOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_ORDERS_FOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_FOOD",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_ORDERS_FOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_ORDERS_FOOD",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_FOOD_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_CIVICS_FOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_CIVICS_FOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_FOOD",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_CIVICS_FOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_CIVICS_FOOD",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_FOOD_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_TRAINING_FOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_TRAINING_FOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_FOOD",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_TRAINING_FOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_TRAINING_FOOD",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_FOOD_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_FOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_FOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_FOOD",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_FOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_FOOD",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_IRON_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_ORDERS_IRON",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_ORDERS_IRON",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_IRON",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_ORDERS_IRON",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_ORDERS_IRON",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_IRON_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_CIVICS_IRON",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_CIVICS_IRON",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_IRON",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_CIVICS_IRON",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_CIVICS_IRON",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_IRON_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_TRAINING_IRON",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_TRAINING_IRON",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_IRON",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_TRAINING_IRON",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_TRAINING_IRON",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_IRON_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_IRON",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_IRON",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_IRON",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_IRON",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_IRON",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_WOOD_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_ORDERS_WOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_ORDERS_WOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_WOOD",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_ORDERS_WOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_ORDERS_WOOD",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_WOOD_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_CIVICS_WOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_CIVICS_WOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_WOOD",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_CIVICS_WOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_CIVICS_WOOD",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_WOOD_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_TRAINING_WOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_TRAINING_WOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_WOOD",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_TRAINING_WOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_TRAINING_WOOD",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_WOOD_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_WOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_WOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_WOOD",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_WOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_WOOD",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_STONE_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_ORDERS_STONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_ORDERS_STONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_ORDERS_STONE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_ORDERS_STONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_ORDERS_STONE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_STONE_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_CIVICS_STONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_CIVICS_STONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_CIVICS_STONE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_CIVICS_STONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_CIVICS_STONE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_STONE_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_TRAINING_STONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_TRAINING_STONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_TRAINING_STONE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_TRAINING_STONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_TRAINING_STONE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_STONE_FREE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_STONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_STONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_SCIENCE_STONE",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_STONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_SCIENCE_STONE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_NO",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_NO"
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_YES_FAIL",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_YES_FAIL",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_YES_FAIL",
            "BONUS_MONEY_LOSS_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRADE_MISSION_NO_FAIL",
        "Text": "TEXT_EVENTOPTION_TRADE_MISSION_NO_FAIL",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRADE_MISSION_NO_FAIL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CANCEL_TRADE_DEMAND_YES",
        "Text": "TEXT_EVENTOPTION_CANCEL_TRADE_DEMAND_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CANCEL_TRADE_DEMAND_YES_PLAYER_1",
            "BONUS_CANCEL_TRADE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CANCEL_TRADE_DEMAND_NO",
        "Text": "TEXT_EVENTOPTION_CANCEL_TRADE_DEMAND_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CANCEL_TRADE_DEMAND_NO_PLAYER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DECLARE_WAR_DEMAND_YES",
        "Text": "TEXT_EVENTOPTION_DECLARE_WAR_DEMAND_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DECLARE_WAR_DEMAND_YES_PLAYER_1",
            "BONUS_DECLARE_WAR_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DECLARE_WAR_DEMAND_NO",
        "Text": "TEXT_EVENTOPTION_DECLARE_WAR_DEMAND_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DECLARE_WAR_DEMAND_NO_PLAYER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DECLARE_WAR_DEMAND_BARBARIAN_YES",
        "Text": "TEXT_EVENTOPTION_DECLARE_WAR_DEMAND_BARBARIAN_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DECLARE_WAR_DEMAND_YES_PLAYER_1",
            "BONUS_DECLARE_WAR_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DECLARE_WAR_DEMAND_BARBARIAN_NO",
        "Text": "TEXT_EVENTOPTION_DECLARE_WAR_DEMAND_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DECLARE_WAR_DEMAND_NO_PLAYER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_2",
        "EventLinkAdd": "EVENTLINK_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_2_PLAYER_0",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_1",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_1_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_1_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_2_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_3",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_3_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_3_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET_OPTION_1",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET_OPTION_1_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_2",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_2",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_2_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_2_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_0",
        "EventLinkAdd": "EVENTLINK_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_0",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_0_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_0_PLAYER_0",
            "BONUS_MONEY_LOSS_TINY"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_1",
        "EventLinkAdd": "EVENTLINK_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_1",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_1_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_1_PLAYER_0",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_2",
        "EventLinkAdd": "EVENTLINK_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_2",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_2_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_SCIENCE_GAIN_SMALL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT_OPTION_0_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE_OPTION_0",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE_OPTION_0_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE_OPTION_1_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_0_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_OPTION_0_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_LEADER3_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_LEADER3_OPTION_0_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_LEADER3_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_LEADER3_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_LEADER3_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AMBITION_CAPTURE_PLAYER_CITIES_YES",
        "Text": "TEXT_EVENTOPTION_AMBITION_CAPTURE_PLAYER_CITIES_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_AMBITION_CAPTURE_PLAYER_CITIES_YES_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AMBITION_CAPTURE_PLAYER_CITIES_NO",
        "Text": "TEXT_EVENTOPTION_AMBITION_CAPTURE_PLAYER_CITIES_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_AMBITION_CAPTURE_PLAYER_CITIES_NO_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WAR_OR_INVASION_WAR",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WAR_OR_INVASION_WAR",
        "aeBonuses": {
          "zValue": "BONUS_BARBARIAN_WAR_LEGITIMACY"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WAR_OR_INVASION_INVASION",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WAR_OR_INVASION_INVASION",
        "aeBonuses": {
          "zValue": "BONUS_BARBARIAN_INVASION_LEGITIMACY"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CHOOSE_WAR_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CHOOSE_WAR_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CHOOSE_WAR_2",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CHOOSE_WAR_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_DECLARE_WAR_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WAR_STRONGER_ORDERS",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WAR_STRONGER_ORDERS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_ORDERS_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WAR_STRONGER_SCIENCE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WAR_STRONGER_SCIENCE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_SCIENCE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_INVASION_FAR_LEVY",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_INVASION_FAR_LEVY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_UNITCLASS_LEVY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_INVASION_FAR_TRAINING",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_INVASION_FAR_TRAINING",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_TRAINING_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WAR_AMBITION_YES",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WAR_AMBITION_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_WAR_AMBITION_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WAR_AMBITION_NO",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WAR_AMBITION_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRIBUTE_PLAYER_0",
            "BONUS_FOOD_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_OPTION_2",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_OPTION_2_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_OPTION_0_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_0",
        "EventLinkAdd": "EVENTLINK_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_0",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_0_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_0_PLAYER_1"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_1",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_1_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_WAR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_WAR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_WAR_OPTION_0_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED_OPTION_0",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED_OPTION_0_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED_OPTION_0_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_FOOLISH"
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED_OPTION_1",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED_OPTION_1_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED_OPTION_1_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_3",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_3_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_2",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_3",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_3_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_4",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_4",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_4_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_LUXURY_YES",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_LUXURY_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_LUXURY_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_LUXURY_NO",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_LUXURY_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_LUXURY_NO",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_1",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_1_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_WAR",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_OPTION_1",
        "Text": "NONE",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_FOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_STONE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_IRON",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_FOOD",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_FOOD_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_STONE",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_STONE_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_WOOD",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_WOOD_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_IRON",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_MATERIALS_IRON_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_OPTION_2",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_OPTION_2_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER_OPTION_1",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER_OPTION_1_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER_OPTION_1_PLAYER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY_OPTION_0",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY_OPTION_0_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_WAR",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED_OPTION_0",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED_OPTION_0_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED_OPTION_1",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED_OPTION_1_HELP"
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_DECLARE",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_PLAYER_WAR_DECLARE_ORDERS",
              "iValue": "1200"
            },
            {
              "zIndex": "EVENTOPTION_PLAYER_WAR_DECLARE_MONEY",
              "iValue": "1200"
            },
            {
              "zIndex": "EVENTOPTION_PLAYER_WAR_DECLARE_KILL_10_UNITS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_PLAYER_WAR_DECLARE_KILL_15_UNITS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_PLAYER_WAR_DECLARE_KILL_20_UNITS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_DECLARE_ORDERS",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_DECLARE_ORDERS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_ORDERS_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_DECLARE_MONEY",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_DECLARE_MONEY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_DECLARE_KILL_10_UNITS",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_DECLARE_KILL_UNITS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_DECLARE_KILL_10_UNITS"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_DECLARE_KILL_15_UNITS",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_DECLARE_KILL_UNITS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_DECLARE_KILL_15_UNITS"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_WAR_DECLARE_KILL_20_UNITS",
        "Text": "TEXT_EVENTOPTION_PLAYER_WAR_DECLARE_KILL_UNITS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_WAR_DECLARE_KILL_20_UNITS"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_PEACE_END_OPINION",
        "Text": "TEXT_EVENTOPTION_PLAYER_PEACE_END_OPINION",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_PEACE_END_OPINION_PLAYER_0",
            "BONUS_EVENTOPTION_PLAYER_PEACE_END_OPINION_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_PEACE_END_OK",
        "Text": "TEXT_EVENTOPTION_PLAYER_PEACE_END_OK",
        "HelpText": "TEXT_EVENTOPTION_PLAYER_PEACE_END_OK_HELP"
      },
      {
        "zType": "EVENTOPTION_PLAYER_DIPLO_MARRIAGE_1",
        "Text": "TEXT_EVENTOPTION_PLAYER_DIPLO_MARRIAGE_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_DIPLO_MARRIAGE_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_DIPLO_MARRIAGE_2",
        "Text": "TEXT_EVENTOPTION_PLAYER_DIPLO_MARRIAGE_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_PLAYER_DIPLO_MARRIAGE_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLAYER_DIPLO_MARRIAGE_NO",
        "Text": "TEXT_EVENTOPTION_PLAYER_DIPLO_MARRIAGE_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLAYER_DIPLO_MARRIAGE_NO",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WAR_OFFER_RELIGION_STATE_YES",
        "Text": "TEXT_EVENTOPTION_WAR_OFFER_RELIGION_STATE_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WAR_OFFER_RELIGION_STATE_YES_PLAYER",
            "NONE",
            "BONUS_EVENTOPTION_WAR_OFFER_RELIGION_STATE_YES_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WAR_OFFER_RELIGION_STATE_NO",
        "Text": "TEXT_EVENTOPTION_WAR_OFFER_RELIGION_STATE_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_WAR_LEGITIMACY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_RELIGION_SPREAD_YES",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_RELIGION_SPREAD_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_SMALL",
            "NONE",
            "BONUS_EVENTOPTION_DIPLO_OFFER_RELIGION_SPREAD_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_RELIGION_SPREAD_NO",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_RELIGION_SPREAD_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_DIPLO_OFFER_RELIGION_SPREAD_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_MONEY",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_ORDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_FOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_IRON",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_STONE",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_CIVICS",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_CIVICS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_CIVICS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_TRAINING",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_TRAINING",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_MONEY",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_MONEY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_MONEY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_ORDERS",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_ORDERS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_FOOD",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_FOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_FOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_IRON",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_IRON",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_IRON",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_WOOD",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_WOOD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_WOOD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_STONE",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_STONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES_STONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_NO",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_FAMILY_RELIGION_WAR_YES",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_FAMILY_RELIGION_WAR_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_PLAYER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_FAMILY_RELIGION_WAR_NO",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_FAMILY_RELIGION_WAR_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DIPLO_OFFER_FAMILY_RELIGION_WAR_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_FAMILY_LAW_WAR_YES",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_FAMILY_LAW_WAR_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_DECLARE_WAR_PLAYER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DIPLO_OFFER_FAMILY_LAW_WAR_NO",
        "Text": "TEXT_EVENTOPTION_DIPLO_OFFER_FAMILY_LAW_WAR_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DIPLO_OFFER_FAMILY_LAW_WAR_NO"
          ]
        }
      },
      {
        "beginGroup": "Combat",
        "zType": "EVENTOPTION_LEADER_SMITING_FOES_STATUE",
        "Text": "TEXT_EVENTOPTION_LEADER_SMITING_FOES_STATUE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_LEADER_SMITING_FOES_STATUE"
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_SMITING_FOES_INSPIRATION",
        "Text": "TEXT_EVENTOPTION_LEADER_SMITING_FOES_INSPIRATION",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_LEADER_SMITING_FOES_INSPIRATION"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_BATTLEFIELD_BRILLIANCE_PEACE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_BATTLEFIELD_BRILLIANCE_PEACE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_BARBARIAN_PEACE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_BATTLEFIELD_BRILLIANCE_AMUSE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_BATTLEFIELD_BRILLIANCE_AMUSE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_BATTLEFIELD_BRILLIANCE_AMUSE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_COWARDLY",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_ORDER_OF_BUSINESS_HEIR_FIRST",
        "Text": "TEXT_EVENTOPTION_ORDER_OF_BUSINESS_HEIR_FIRST",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ORDER_OF_BUSINESS_HEIR_FIRST_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ORDER_OF_BUSINESS_GENERAL_FIRST",
        "Text": "TEXT_EVENTOPTION_ORDER_OF_BUSINESS_GENERAL_FIRST",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_ORDER_OF_BUSINESS_GENERAL_FIRST_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ORDER_OF_BUSINESS_HORSE_FIRST",
        "Text": "TEXT_EVENTOPTION_ORDER_OF_BUSINESS_HORSE_FIRST",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ORDER_OF_BUSINESS_HORSE_FIRST_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_WAR_BLUNDERS_DARE",
        "Text": "TEXT_EVENTOPTION_LEADER_WAR_BLUNDERS_DARE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_LEADER_WAR_BLUNDERS_DARE"
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_WAR_BLUNDERS_GOLD",
        "Text": "TEXT_EVENTOPTION_LEADER_WAR_BLUNDERS_GOLD",
        "aeBonuses": {
          "zValue": "BONUS_MONEY_LOSS_LARGE"
        }
      },
      {
        "zType": "EVENTOPTION_ABANDONED_SUPPLIES_WEAPONS",
        "Text": "TEXT_EVENTOPTION_ABANDONED_SUPPLIES_WEAPONS",
        "aeBonuses": {
          "zValue": "BONUS_IRON_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_ABANDONED_SUPPLIES_FOOD",
        "Text": "TEXT_EVENTOPTION_ABANDONED_SUPPLIES_FOOD",
        "aeBonuses": {
          "zValue": "BONUS_FOOD_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_CAPTURED_PRISONERS_RANSOM",
        "Text": "TEXT_EVENTOPTION_CAPTURED_PRISONERS_RANSOM",
        "aeBonuses": {
          "zValue": "BONUS_MONEY_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_CAPTURED_PRISONERS_EXECUTE",
        "Text": "TEXT_EVENTOPTION_CAPTURED_PRISONERS_EXECUTE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CAPTURED_PRISONERS_EXECUTE"
        },
        "LeaderSubject": "SUBJECT_NOT_GRACIOUS",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_CAPTURED_PRISONERS_RESETTLE",
        "Text": "TEXT_EVENTOPTION_CAPTURED_PRISONERS_RESETTLE",
        "aeBonuses": {
          "zValue": "BONUS_ADD_CITIZEN_1"
        }
      },
      {
        "zType": "EVENTOPTION_INACCURATE_TROOPS_SHOOT",
        "Text": "TEXT_EVENTOPTION_INACCURATE_TROOPS_SHOOT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_INACCURATE_TROOPS_SHOOT"
        }
      },
      {
        "zType": "EVENTOPTION_INACCURATE_TROOPS_DRILL",
        "Text": "TEXT_EVENTOPTION_INACCURATE_TROOPS_DRILL",
        "aeBonuses": {
          "zValue": "BONUS_TRAINING_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_BATTLEFIELD_PROMOTION_PROMOTE",
        "Text": "TEXT_EVENTOPTION_BATTLEFIELD_PROMOTION_PROMOTE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BATTLEFIELD_PROMOTION_PROMOTE"
        }
      },
      {
        "zType": "EVENTOPTION_BATTLEFIELD_PROMOTION_TRIUMPH",
        "Text": "TEXT_EVENTOPTION_BATTLEFIELD_PROMOTION_TRIUMPH",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BATTLEFIELD_PROMOTION_TRIUMPH"
        }
      },
      {
        "zType": "EVENTOPTION_BATTLEFIELD_PROMOTION_DECLINE",
        "Text": "TEXT_EVENTOPTION_BATTLEFIELD_PROMOTION_DECLINE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_BATTLEFIELD_PROMOTION_DECLINE"
        }
      },
      {
        "zType": "EVENTOPTION_HONOR_AND_GLORY_TRIUMPH",
        "Text": "TEXT_EVENTOPTION_HONOR_AND_GLORY_TRIUMPH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HONOR_AND_GLORY_TRIUMPH_CHARACTER_0",
            "BONUS_MONEY_LOSS_LARGE",
            "BONUS_EVENTOPTION_HONOR_AND_GLORY_TRIUMPH_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HONOR_AND_GLORY_HAPPY_PEOPLE",
        "Text": "TEXT_EVENTOPTION_HONOR_AND_GLORY_HAPPY_PEOPLE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_LARGE",
            "BONUS_EVENTOPTION_HONOR_AND_GLORY_HAPPY_PEOPLE_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HONOR_AND_GLORY_MAGNIFICENT_SLIGHTED",
        "Text": "TEXT_EVENTOPTION_HONOR_AND_GLORY_MAGNIFICENT_SLIGHTED",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HONOR_AND_GLORY_MAGNIFICENT_SLIGHTED_CHARACTER_0",
            "BONUS_EVENTOPTION_HONOR_AND_GLORY_MAGNIFICENT_SLIGHTED_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_PEOPLES_GENERAL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_THE_PEOPLES_GENERAL_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_THE_PEOPLES_GENERAL_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_CAPTURED_GENERAL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CAPTURED_GENERAL_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CAPTURED_GENERAL_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CAPTURED_GENERAL_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CAPTURED_GENERAL_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FACIAL_WOUND_OK",
        "Text": "TEXT_EVENTOPTION_FACIAL_WOUND_OK",
        "aeBonuses": {
          "zValue": "BONUS_STONE_LOSS_AVERAGE"
        }
      },
      {
        "zType": "EVENTOPTION_FACIAL_WOUND_NO",
        "Text": "TEXT_EVENTOPTION_FACIAL_WOUND_NO",
        "aeBonuses": {
          "zValue": "BONUS_GIVE_TRAIT_SLIGHTED"
        }
      },
      {
        "zType": "EVENTOPTION_SHATTERED_KNEE_OK",
        "Text": "TEXT_EVENTOPTION_SHATTERED_KNEE_OK"
      },
      {
        "zType": "EVENTOPTION_SHATTERED_KNEE_NO",
        "Text": "TEXT_EVENTOPTION_SHATTERED_KNEE_NO",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SHATTERED_KNEE_NO"
        }
      },
      {
        "zType": "EVENTOPTION_LOST_SIGHT_OK",
        "Text": "TEXT_EVENTOPTION_LOST_SIGHT_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_LOST_SIGHT_OK"
        }
      },
      {
        "zType": "EVENTOPTION_LOST_SIGHT_NO",
        "Text": "TEXT_EVENTOPTION_LOST_SIGHT_NO",
        "aeBonuses": {
          "zValue": "BONUS_ORDERS_GAIN_AVERAGE"
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WEAPONS_OF_WAR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WEAPONS_OF_WAR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_WEAPONS_OF_WAR_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WEAPONS_OF_WAR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WEAPONS_OF_WAR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_WEAPONS_OF_WAR_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_0",
            "BONUS_EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_1",
            "BONUS_DECLARE_WAR_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_0",
            "BONUS_EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_0_BARBARIAN_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_1",
            "BONUS_EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_1_BARBARIAN_1",
            "BONUS_EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_2",
            "BONUS_EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_2_BARBARIAN_1",
            "BONUS_ADD_CITIZEN_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_ALLIANCE",
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_1",
            "BONUS_EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_2",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_2_BARBARIAN",
            "BONUS_EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_2",
            "BONUS_KILL_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TEACHING_THE_ENEMY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TEACHING_THE_ENEMY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_TEACHING_THE_ENEMY_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_BARBARIAN_TEACHING_THE_ENEMY_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TEACHING_THE_ENEMY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TEACHING_THE_ENEMY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_TEACHING_THE_ENEMY_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_0_TILE",
            "BONUS_EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_2",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_2_TILE",
            "BONUS_EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_LIBERATED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_LIBERATED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_ADD_CITIZEN_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_LIBERATED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_LIBERATED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_LIBERATED_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_0",
            "BONUS_EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_1",
            "BONUS_EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_2",
            "BONUS_EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_0",
            "BONUS_EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_0_CHARACTER_0",
            "NONE",
            "NONE",
            "NONE",
            {
              
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_1",
            "BONUS_EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_1_CHARACTER_2",
            "BONUS_EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_1_CHARACTER_3",
            {
              
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_2",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_2",
            "BONUS_EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_2_CHARACTER_0",
            "NONE",
            "NONE",
            "NONE",
            {
              
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STRANGE_ENCOUNTER_CURSED_TREASURE",
        "EventLinkAdd": "EVENTLINK_STRANGER_ENCOUNTER_CURSED_TREASURE",
        "Text": "TEXT_EVENTOPTION_STRANGE_ENCOUNTER_CURSED_TREASURE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_GAIN_AVERAGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_STRANGE_ENCOUNTER_KNOWLEDGE",
        "Text": "TEXT_EVENTOPTION_STRANGE_ENCOUNTER_KNOWLEDGE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_SCIENCE_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STRANGE_ENCOUNTER_RESPECT",
        "Text": "TEXT_EVENTOPTION_STRANGE_ENCOUNTER_RESPECT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STRANGE_ENCOUNTER_RESPECT_BARBARIAN",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STRANGE_ENCOUNTER_CURIOUS_ARTIFACT_RETURN_ARTIFACT",
        "Text": "TEXT_EVENTOPTION_STRANGE_ENCOUNTER_CURIOUS_ARTIFACT_RETURN_ARTIFACT",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_STRANGE_ENCOUNTER_CURIOUS_ARTIFACT_RETURN_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STRANGE_ENCOUNTER_CURIOUS_ARTIFACT_REFUSE",
        "Text": "TEXT_EVENTOPTION_STRANGE_ENCOUNTER_CURIOUS_ARTIFACT_REFUSE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_STRANGE_ENCOUNTER_CURIOUS_ARTIFACT_REFUSE_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PRISONERS_OF_WAR_EXECUTE",
        "Text": "TEXT_EVENTOPTION_PRISONERS_OF_WAR_EXECUTE",
        "HelpText": "TEXT_EVENTOPTION_PRISONERS_OF_WAR_EXECUTE_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PRISONERS_OF_WAR_EXECUTE_BARBARIAN",
            "BONUS_EVENTOPTION_PRISONERS_OF_WAR_EXECUTE_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PRISONERS_OF_WAR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PRISONERS_OF_WAR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PRISONERS_OF_WAR_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EVENTSTORY_BARBARIAN_TOMBS_EVENTSTORY_BARBARIAN_TOMBS_LOOT",
        "Text": "TEXT_EVENTOPTION_EVENTSTORY_BARBARIAN_TOMBS_EVENTSTORY_BARBARIAN_TOMBS_LOOT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EVENTSTORY_BARBARIAN_TOMBS_EVENTSTORY_BARBARIAN_TOMBS_LOOT_BARBARIAN",
            "BONUS_EVENTOPTION_EVENTSTORY_BARBARIAN_TOMBS_EVENTSTORY_BARBARIAN_TOMBS_LOOT"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EVENTSTORY_BARBARIAN_TOMBS_EVENTSTORY_BARBARIAN_TOMBS_NO_LOOT",
        "Text": "TEXT_EVENTOPTION_EVENTSTORY_BARBARIAN_TOMBS_EVENTSTORY_BARBARIAN_TOMBS_NO_LOOT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EVENTSTORY_BARBARIAN_TOMBS_EVENTSTORY_BARBARIAN_TOMBS_NO_LOOT_BARBARIAN",
            "BONUS_EVENTOPTION_EVENTSTORY_BARBARIAN_TOMBS_EVENTSTORY_BARBARIAN_TOMBS_NO_LOOT"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CULT_OF_FLAME_KEEP",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CULT_OF_FLAME_KEEP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_CULT_OF_FLAME_KEEP"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_CULT_OF_FLAME_SMASH",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_CULT_OF_FLAME_SMASH",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_CULT_OF_FLAME_SMASH"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PRINCE_ENSLAVE",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_PRINCE_ENSLAVE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_ADD_CITIZEN_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PRINCE_KILL",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_PRINCE_KILL",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_PRINCE_KILL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_PRINCE_WARD",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_PRINCE_WARD",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_PRINCE_WARD",
            "BONUS_EVENTOPTION_BARBARIAN_PRINCE_WARD_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRIBAL_CONFEDERATION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRIBAL_CONFEDERATION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_TRIBAL_CONFEDERATION_OPTION_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRIBAL_CONFEDERATION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRIBAL_CONFEDERATION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_TRIBAL_CONFEDERATION_OPTION_1",
            "BONUS_BARBARIAN_WAR",
            "BONUS_BARBARIAN_WAR"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_TRIBAL_CONFEDERATION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_TRIBAL_CONFEDERATION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_BARBARIAN_ALLIANCE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_ELOQUENT"
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_RIVALS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_RIVALS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_RIVALS_OPTION_0",
            "BONUS_EVENTOPTION_BARBARIAN_RIVALS_OPTION_0_BARBARIAN_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_RIVALS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_RIVALS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_RIVALS_OPTION_1",
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_RIVALS_OPTION_1_BARBARIAN_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_RIVALS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_RIVALS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_RIVALS_OPTION_2_BARBARIAN_0",
            "BONUS_EVENTOPTION_BARBARIAN_RIVALS_OPTION_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SAVAGE_PLAGUE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_SAVAGE_PLAGUE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SAVAGE_PLAGUE_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_SAVAGE_PLAGUE_OPTION_0_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SAVAGE_PLAGUE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_SAVAGE_PLAGUE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SAVAGE_PLAGUE_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_2_TILE",
            "BONUS_EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_HORSE_LORDS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_HORSE_LORDS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_HORSE_LORDS_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_HORSE_LORDS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_HORSE_LORDS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_HORSE_LORDS_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BARBARIAN_HORSE_LORDS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_BARBARIAN_HORSE_LORDS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BARBARIAN_HORSE_LORDS_OPTION_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HONOR_AND_FIDELITY_PROMOTION",
        "Text": "TEXT_EVENTOPTION_HONOR_AND_FIDELITY_PROMOTION",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HONOR_AND_FIDELITY_PROMOTION_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HONOR_AND_FIDELITY_TRIUMPH",
        "Text": "TEXT_EVENTOPTION_HONOR_AND_FIDELITY_TRIUMPH",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HONOR_AND_FIDELITY_TRIUMPH_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMOUS_VICTOR_OK",
        "Text": "TEXT_EVENTOPTION_FAMOUS_VICTOR_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMOUS_VICTOR_NO",
        "Text": "TEXT_EVENTOPTION_FAMOUS_VICTOR_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMOUS_VICTOR_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_0_PLAYER",
            "BONUS_EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_1_PLAYER",
            "BONUS_EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_1_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_2_PLAYER",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_INTELLIGENT"
      },
      {
        "zType": "EVENTOPTION_LOVE_AND_WAR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LOVE_AND_WAR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR",
            "BONUS_EVENTOPTION_LOVE_AND_WAR_OPTION_0_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOVE_AND_WAR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LOVE_AND_WAR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LOVE_AND_WAR_OPTION_1_BARBARIAN",
            "BONUS_XP_CHARACTER_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOVE_AND_WAR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_LOVE_AND_WAR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LOVE_AND_WAR_OPTION_2_BARBARIAN",
            "BONUS_EVENTOPTION_LOVE_AND_WAR_OPTION_2_CHARACTER_0",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_KEEN"
      },
      {
        "beginGroup": "Marriage",
        "zType": "EVENTOPTION_MARRIAGE_OFFER_YES",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_OFFER_NO",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_OFFER_NO"
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_OFFER_FAMILY_1",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_OFFER_FAMILY_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_FAMILY_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_OFFER_FAMILY_2",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_OFFER_FAMILY_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_FAMILY_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_OFFER_FAMILY_NO",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_OFFER_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_FAMILY_NO",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_1",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_YES",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_2",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_NO",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_NO",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_NO",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_OFFER_FOREIGN_1",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_OFFER_FOREIGN_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_OFFER_FOREIGN_2",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_OFFER_FOREIGN_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_OFFER_BARBARIAN_YES",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_OFFER_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_MARRIAGE",
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MISSION_MARRIAGE_FAMILY_1",
        "Text": "TEXT_EVENTOPTION_MISSION_MARRIAGE_FAMILY_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_MISSION_MARRIAGE_FAMILY_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MISSION_MARRIAGE_FAMILY_2",
        "Text": "TEXT_EVENTOPTION_MISSION_MARRIAGE_FAMILY_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_MISSION_MARRIAGE_FAMILY_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MATCHMAKER_0_OPTION_0",
        "Text": "TEXT_EVENTOPTION_MATCHMAKER_0_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MATCHMAKER_0_OPTION_1",
        "Text": "TEXT_EVENTOPTION_MATCHMAKER_0_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MATCHMAKER_0_OPTION_2",
        "Text": "TEXT_EVENTOPTION_MATCHMAKER_0_OPTION_2",
        "HelpText": "TEXT_EVENTOPTION_MATCHMAKER_0_OPTION_2_HELP"
      },
      {
        "zType": "EVENTOPTION_MATCHMAKER_1_OPTION_0",
        "Text": "TEXT_EVENTOPTION_MATCHMAKER_1_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_MARRIAGE",
            "BONUS_BARBARIAN_PEACE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MATCHMAKER_1_OPTION_1",
        "Text": "TEXT_EVENTOPTION_MATCHMAKER_1_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_MARRIAGE",
            "BONUS_BARBARIAN_PEACE",
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MATCHMAKER_1_OPTION_2",
        "Text": "TEXT_EVENTOPTION_MATCHMAKER_1_OPTION_2",
        "HelpText": "TEXT_EVENTOPTION_MATCHMAKER_1_OPTION_2_HELP"
      },
      {
        "zType": "EVENTOPTION_MATCHMAKER_2_OPTION_0",
        "Text": "TEXT_EVENTOPTION_MATCHMAKER_2_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_MARRIAGE",
            "BONUS_EVENTOPTION_MATCHMAKER_2_OPTION_0_BARBARIAN",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_YES",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MATCHMAKER_2_OPTION_1",
        "Text": "TEXT_EVENTOPTION_MATCHMAKER_2_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MATCHMAKER_2_OPTION_2",
        "Text": "TEXT_EVENTOPTION_MATCHMAKER_2_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_OFFER_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MATCHMAKER_2_OPTION_3",
        "Text": "TEXT_EVENTOPTION_MATCHMAKER_2_OPTION_3"
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_PROPOSAL_DECLINE",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_PROPOSAL_DECLINE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_MARRIAGE_PROPOSAL_DECLINE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_PROPOSAL_MARRY_US",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_PROPOSAL_MARRY_US",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_PROPOSAL_MARRY_US",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MARRIAGE_PROPOSAL_MARRY_HEIR",
        "Text": "TEXT_EVENTOPTION_MARRIAGE_PROPOSAL_MARRY_HEIR",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_MARRIAGE_PROPOSAL_MARRY_HEIR"
          ]
        }
      },
      {
        "beginGroup": "Character",
        "zType": "EVENTOPTION_DELICIOUS_DRINKS_BOTTOMS_UP",
        "Text": "TEXT_EVENTOPTION_DELICIOUS_DRINKS_BOTTOMS_UP",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_DELICIOUS_DRINKS_BOTTOMS_UP"
        }
      },
      {
        "zType": "EVENTOPTION_DELICIOUS_DRINKS_FRIEND",
        "Text": "TEXT_EVENTOPTION_DELICIOUS_DRINKS_FRIEND",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_DELICIOUS_DRINKS_FRIEND"
        }
      },
      {
        "zType": "EVENTOPTION_SUDDEN_INSIGHT_UNVEIL",
        "Text": "TEXT_EVENTOPTION_SUDDEN_INSIGHT_UNVEIL",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SUDDEN_INSIGHT_UNVEIL"
        }
      },
      {
        "zType": "EVENTOPTION_SUDDEN_INSIGHT_SELL",
        "Text": "TEXT_EVENTOPTION_SUDDEN_INSIGHT_SELL",
        "aeBonuses": {
          "zValue": "BONUS_MONEY_GAIN_LARGE"
        }
      },
      {
        "zType": "EVENTOPTION_TIME_FOR_A_BREAK_RELAX",
        "Text": "TEXT_EVENTOPTION_TIME_FOR_A_BREAK_RELAX",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TIME_FOR_A_BREAK_RELAX"
        }
      },
      {
        "zType": "EVENTOPTION_TIME_FOR_A_BREAK_GAMBLE",
        "Text": "TEXT_EVENTOPTION_TIME_FOR_A_BREAK_GAMBLE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TIME_FOR_A_BREAK_GAMBLE"
        }
      },
      {
        "zType": "EVENTOPTION_TIME_FOR_A_BREAK_DRINK",
        "Text": "TEXT_EVENTOPTION_TIME_FOR_A_BREAK_DRINK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TIME_FOR_A_BREAK_DRINK"
        },
        "LeaderSubject": "SUBJECT_NOT_RIGHTEOUS",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_SPARE_TIME_SCHOOL",
        "Text": "TEXT_EVENTOPTION_SPARE_TIME_SCHOOL",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SPARE_TIME_SCHOOL"
        }
      },
      {
        "zType": "EVENTOPTION_SPARE_TIME_LABOR",
        "Text": "TEXT_EVENTOPTION_SPARE_TIME_LABOR",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SPARE_TIME_LABOR"
        }
      },
      {
        "zType": "EVENTOPTION_SPARE_TIME_DRILL",
        "Text": "TEXT_EVENTOPTION_SPARE_TIME_DRILL",
        "aeBonuses": {
          "zValue": "BONUS_TRAINING_GAIN_GIGANTIC"
        }
      },
      {
        "zType": "EVENTOPTION_EPIC_POETRY_RECITE",
        "Text": "TEXT_EVENTOPTION_EPIC_POETRY_RECITE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_CULTURE_GAIN_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EPIC_POETRY_TEACH",
        "Text": "TEXT_EVENTOPTION_EPIC_POETRY_TEACH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EPIC_POETRY_TEACH",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EPIC_POETRY_SERVICE",
        "Text": "TEXT_EVENTOPTION_EPIC_POETRY_SERVICE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_EPIC_POETRY_SERVICE_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOOKING_OUTWARD_MYSELF",
        "Text": "TEXT_EVENTOPTION_LOOKING_OUTWARD_MYSELF",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_LOOKING_OUTWARD_MYSELF"
        }
      },
      {
        "zType": "EVENTOPTION_LOOKING_OUTWARD_SCOUTS",
        "Text": "TEXT_EVENTOPTION_LOOKING_OUTWARD_SCOUTS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_LOOKING_OUTWARD_SCOUTS"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_0",
        "EventLinkAdd": "EVENTLINK_LOST_RELATIVE_AUDIENCE",
        "Text": "TEXT_EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_0_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_1",
        "EventLinkAdd": "EVENTLINK_LOST_RELATIVE_INVESTIGATE",
        "Text": "TEXT_EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_1_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_1_CHARACTER_2"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_2",
        "EventLinkAdd": "EVENTLINK_LOST_RELATIVE_IGNORE",
        "Text": "TEXT_EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_2_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_PRIVATE_AUDIENCE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_PRIVATE_AUDIENCE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_A_PRIVATE_AUDIENCE_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_A_PRIVATE_AUDIENCE_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_PRIVATE_AUDIENCE_OPTION_1",
        "EventLinkAdd": "EVENTLINK_LOST_RELATIVE_INVESTIGATE",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_PRIVATE_AUDIENCE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_A_PRIVATE_AUDIENCE_OPTION_1",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_A_PRIVATE_AUDIENCE_OPTION_1_CHARACTER_2"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRAIT_DEMAND_FOR_JUSTICE_OPTION_0",
        "EventLinkAdd": "EVENTLINK_LOST_RELATIVE_RIOTS",
        "Text": "TEXT_EVENTOPTION_TRAIT_DEMAND_FOR_JUSTICE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_DEMAND_FOR_JUSTICE_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_DEMAND_FOR_JUSTICE_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DEMAND_FOR_JUSTICE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_DEMAND_FOR_JUSTICE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_DEMAND_FOR_JUSTICE_OPTION_1",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_DEMAND_FOR_JUSTICE_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_INVESTIGATION_COMPLETE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_INVESTIGATION_COMPLETE_OPTION_0"
      },
      {
        "zType": "EVENTOPTION_TRAIT_INVESTIGATION_COMPLETE_OPTION_1",
        "EventLinkAdd": "EVENTLINK_LOST_RELATIVE_RIOTS",
        "Text": "TEXT_EVENTOPTION_TRAIT_INVESTIGATION_COMPLETE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_INVESTIGATION_COMPLETE_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRAIT_PEACEMAKER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_PEACEMAKER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_PEACEMAKER_OPTION_0_PLAYER_0",
            "BONUS_EVENTOPTION_TRAIT_PEACEMAKER_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_PEACEMAKER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_PEACEMAKER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_PEACEMAKER_OPTION_1_PLAYER_0",
            "BONUS_EVENTOPTION_TRAIT_PEACEMAKER_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_PEACEMAKER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_PEACEMAKER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_PEACEMAKER_OPTION_2",
            "BONUS_EVENTOPTION_TRAIT_PEACEMAKER_OPTION_2_PLAYER_0",
            "BONUS_EVENTOPTION_TRAIT_PEACEMAKER_OPTION_2_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_COURTLY_DRAMA_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_COURTLY_DRAMA_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_COURTLY_DRAMA_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_COURTLY_DRAMA_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_COURTLY_DRAMA_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_COURTLY_DRAMA_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_COURTLY_DRAMA_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_COURTLY_DRAMA_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_COURTLY_DRAMA_OPTION_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_0_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_1",
            "BONUS_BARBARIAN_WAR",
            "BONUS_EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_2",
            "BONUS_BARBARIAN_WAR",
            "BONUS_EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_2_FAMILY"
          ]
        },
        "LeaderSubject": "SUBJECT_WARLIKE"
      },
      {
        "zType": "EVENTOPTION_TRAIT_SIMPLE_GIFTS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_SIMPLE_GIFTS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_SIMPLE_GIFTS_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_SIMPLE_GIFTS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_SIMPLE_GIFTS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_SIMPLE_GIFTS_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_SIMPLE_GIFTS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_SIMPLE_GIFTS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_SIMPLE_GIFTS_OPTION_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_TAX_HIKE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_TAX_HIKE_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_TAX_HIKE_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_TAX_HIKE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_TAX_HIKE_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_TAX_HIKE_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FORBIDDEN_KNOWLEDGE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_FORBIDDEN_KNOWLEDGE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_FORBIDDEN_KNOWLEDGE_OPTION_0",
            "BONUS_BARBARIAN_PEACE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FORBIDDEN_KNOWLEDGE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_FORBIDDEN_KNOWLEDGE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_DISCONTENT_GAIN_LARGE",
            "BONUS_BARBARIAN_ALLIANCE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FORBIDDEN_KNOWLEDGE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_FORBIDDEN_KNOWLEDGE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_FORBIDDEN_KNOWLEDGE_OPTION_2",
            "BONUS_EVENTOPTION_TRAIT_FORBIDDEN_KNOWLEDGE_OPTION_2_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_CORRUPT"
      },
      {
        "zType": "EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_1",
            "BONUS_DECLARE_WAR_PLAYER",
            "BONUS_EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_2",
            "BONUS_EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_2_PLAYER",
            "BONUS_EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_2_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_0",
            "BONUS_EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_1",
            "BONUS_EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_2",
            "BONUS_KILL_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_1",
            "BONUS_EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_2",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_CORRUPT"
      },
      {
        "zType": "EVENTOPTION_TRAIT_TEDIUM_ON_THE_THRONE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_TEDIUM_ON_THE_THRONE_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_TEDIUM_ON_THE_THRONE_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_TEDIUM_ON_THE_THRONE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_TEDIUM_ON_THE_THRONE_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_TEDIUM_ON_THE_THRONE_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_TEDIUM_ON_THE_THRONE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_TEDIUM_ON_THE_THRONE_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_TEDIUM_ON_THE_THRONE_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_WILD_HUNT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_WILD_HUNT_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_THE_WILD_HUNT_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_WILD_HUNT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_WILD_HUNT_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_THE_WILD_HUNT_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_FOREIGN_SCHOLAR_SCIENTIST",
        "Text": "TEXT_EVENTOPTION_FOREIGN_SCHOLAR_SCIENTIST",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_ADD_GREAT_SCIENTIST",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FOREIGN_SCHOLAR_RANDOM_TECH",
        "Text": "TEXT_EVENTOPTION_FOREIGN_SCHOLAR_RANDOM_TECH",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_FOREIGN_SCHOLAR_RANDOM_TECH"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_0",
        "EventLinkAdd": "EVENTLINK_A_COUNCIL_OF_ELDERS",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_0_FAMILY"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_1",
        "EventLinkAdd": "EVENTLINK_FAMILY_TENSIONS",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_1",
            "BONUS_EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_1_FAMILY"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_2",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_2_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_JOB_OPENING_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_JOB_OPENING_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_JOB_OPENING_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_JOB_OPENING_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_JOB_OPENING_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_JOB_OPENING_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_0",
            "BONUS_EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_0_FAMILY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_1",
        "EventLinkAdd": "EVENTLINK_FAMILY_TENSIONS",
        "Text": "TEXT_EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_1",
            "BONUS_EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_1_FAMILY",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_2",
            "BONUS_EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_2_FAMILY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_AN_EXODUS_OPTION_0",
        "EventLinkAdd": "EVENTLINK_FAMILY_ENEMY_ALLIANCE",
        "Text": "TEXT_EVENTOPTION_TRAIT_AN_EXODUS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_AN_EXODUS_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_AN_EXODUS_OPTION_0_FAMILY"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_TRAIT_AN_EXODUS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_AN_EXODUS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_AN_EXODUS_OPTION_1",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_AN_EXODUS_OPTION_1_FAMILY"
          ]
        },
        "LeaderSubject": "SUBJECT_ELOQUENT"
      },
      {
        "zType": "EVENTOPTION_TRAIT_AN_EXODUS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_AN_EXODUS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_AN_EXODUS_OPTION_2",
            "BONUS_KILL_CHARACTER",
            "BONUS_EVENTOPTION_TRAIT_AN_EXODUS_OPTION_2_FAMILY"
          ]
        },
        "LeaderSubject": "SUBJECT_CUNNING"
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_BITTER_ALLIANCE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_BITTER_ALLIANCE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_A_BITTER_ALLIANCE_OPTION_0",
            "NONE",
            "NONE",
            "BONUS_DECLARE_WAR_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_BITTER_ALLIANCE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_BITTER_ALLIANCE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_A_BITTER_ALLIANCE_OPTION_1",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_A_BITTER_ALLIANCE_OPTION_1_CHARACTER_2"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_WISDOM"
      },
      {
        "zType": "EVENTOPTION_TRAIT_MILITARY_MIND_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_MILITARY_MIND_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_MILITARY_MIND_OPTION_0",
            "BONUS_EVENTOPTION_TRAIT_MILITARY_MIND_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_MILITARY_MIND_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_MILITARY_MIND_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_MILITARY_MIND_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_MAN_OF_PEACE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_MAN_OF_PEACE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_A_MAN_OF_PEACE_OPTION_0",
            "BONUS_EVENTOPTION_TRAIT_A_MAN_OF_PEACE_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_TRAIT_A_MAN_OF_PEACE_OPTION_0_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_MAN_OF_PEACE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_MAN_OF_PEACE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_A_MAN_OF_PEACE_OPTION_1",
            "BONUS_EVENTOPTION_TRAIT_A_MAN_OF_PEACE_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_TRAIT_A_MAN_OF_PEACE_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DAUGHTERS_DREAM_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_DAUGHTERS_DREAM_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_DAUGHTERS_DREAM_OPTION_0",
            "BONUS_KILL_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DAUGHTERS_DREAM_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_DAUGHTERS_DREAM_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_DAUGHTERS_DREAM_OPTION_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DAUGHTERS_DREAM_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_DAUGHTERS_DREAM_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_DAUGHTERS_DREAM_OPTION_2",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_0",
            "BONUS_EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_2",
            "BONUS_EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_BURNED_LIBRARY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_BURNED_LIBRARY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_BURNED_LIBRARY_OPTION_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_BURNED_LIBRARY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_BURNED_LIBRARY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_BURNED_LIBRARY_OPTION_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_BURNED_LIBRARY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_BURNED_LIBRARY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_BURNED_LIBRARY_OPTION_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_0",
            "BONUS_EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_1",
            "BONUS_EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_1_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_2",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_CUNNING"
      },
      {
        "zType": "EVENTOPTION_SPOUSE_TOO_EXPENSIVE",
        "Text": "TEXT_EVENTOPTION_SPOUSE_TOO_EXPENSIVE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SPOUSE_TOO_EXPENSIVE"
        }
      },
      {
        "zType": "EVENTOPTION_SPOUSE_HORSEBACK_RIDING_OK",
        "Text": "TEXT_EVENTOPTION_SPOUSE_HORSEBACK_RIDING_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SPOUSE_HORSEBACK_RIDING_OK"
        }
      },
      {
        "zType": "EVENTOPTION_SPOUSE_PERSUASION_OK",
        "Text": "TEXT_EVENTOPTION_SPOUSE_PERSUASION_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SPOUSE_PERSUASION_OK"
        }
      },
      {
        "zType": "EVENTOPTION_SPOUSE_CREATIVE_PURSUITS_OK",
        "Text": "TEXT_EVENTOPTION_SPOUSE_CREATIVE_PURSUITS_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SPOUSE_CREATIVE_PURSUITS_OK"
        }
      },
      {
        "zType": "EVENTOPTION_SPOUSE_SPONSOR_A_LABORATORY_OK",
        "Text": "TEXT_EVENTOPTION_SPOUSE_SPONSOR_A_LABORATORY_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SPOUSE_SPONSOR_A_LABORATORY_OK"
        }
      },
      {
        "zType": "EVENTOPTION_SPOUSE_TILL_THE_EARTH_OK",
        "Text": "TEXT_EVENTOPTION_SPOUSE_TILL_THE_EARTH_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SPOUSE_TILL_THE_EARTH_OK"
        }
      },
      {
        "zType": "EVENTOPTION_SPOUSE_LEGAL_INSTRUCTION_OK",
        "Text": "TEXT_EVENTOPTION_SPOUSE_LEGAL_INSTRUCTION_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SPOUSE_LEGAL_INSTRUCTION_OK"
        }
      },
      {
        "zType": "EVENTOPTION_SPOUSE_COMBAT_TRAINING_OK",
        "Text": "TEXT_EVENTOPTION_SPOUSE_COMBAT_TRAINING_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SPOUSE_COMBAT_TRAINING_OK"
        }
      },
      {
        "zType": "EVENTOPTION_SPOUSE_MONASTIC_LIVING_OK",
        "Text": "TEXT_EVENTOPTION_SPOUSE_MONASTIC_LIVING_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SPOUSE_MONASTIC_LIVING_OK",
            "BONUS_CULTURE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SPOUSE_MONASTIC_LIVING_NO",
        "Text": "TEXT_EVENTOPTION_SPOUSE_MONASTIC_LIVING_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SPOUSE_MONASTIC_LIVING_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SPOUSE_DEEPER_MEANING_OK",
        "Text": "TEXT_EVENTOPTION_SPOUSE_DEEPER_MEANING_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_SPOUSE_DEEPER_MEANING_OK"
        }
      },
      {
        "zType": "EVENTOPTION_RUMOR_HAS_IT_PETS",
        "Text": "TEXT_EVENTOPTION_RUMOR_HAS_IT_PETS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUMOR_HAS_IT_PETS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUMOR_HAS_IT_MISUNDERSTOOD",
        "Text": "TEXT_EVENTOPTION_RUMOR_HAS_IT_MISUNDERSTOOD",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUMOR_HAS_IT_MISUNDERSTOOD",
            "BONUS_EVENTOPTION_RUMOR_HAS_IT_MISUNDERSTOOD_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUMOR_HAS_IT_BURN",
        "Text": "TEXT_EVENTOPTION_RUMOR_HAS_IT_BURN",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RUMOR_HAS_IT_BURN_CHARACTER_0",
            "NONE",
            "BONUS_BARBARIAN_WAR_LEGITIMACY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ENCHANTING_CONVERSATION_OPTION_0",
        "EventLinkAdd": "EVENTLINK_ENCHANTING_CONVERSATION",
        "Text": "TEXT_EVENTOPTION_ENCHANTING_CONVERSATION_OPTION_0",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_ENCHANTING_CONVERSATION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_ENCHANTING_CONVERSATION_OPTION_1",
        "LeaderSubject": "SUBJECT_NOT_DRUNK",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_FRUITFUL_AFFAIR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_FRUITFUL_AFFAIR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FRUITFUL_AFFAIR_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_FRUITFUL_AFFAIR_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EMPTY_BED_OPTION_0",
        "EventLinkAdd": "EVENTLINK_EMPTY_BED",
        "Text": "TEXT_EVENTOPTION_EMPTY_BED_OPTION_0",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_EMPTY_BED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_EMPTY_BED_OPTION_1",
        "LeaderSubject": "SUBJECT_NOT_DEBAUCHED",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_REVEALED_AFFAIR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_REVEALED_AFFAIR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_REVEALED_AFFAIR_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_REVEALED_AFFAIR_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_INDIFFERENT_QUEEN_OPTION_0",
        "EventLinkAdd": "EVENTLINK_INDIFFERENT_QUEEN",
        "Text": "TEXT_EVENTOPTION_INDIFFERENT_QUEEN_OPTION_0",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_INDIFFERENT_QUEEN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_INDIFFERENT_QUEEN_OPTION_1",
        "LeaderSubject": "SUBJECT_NOT_ROMANTIC",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_CHILD_OF_PASSION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_OF_PASSION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_OF_PASSION_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_CHILD_OF_PASSION_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DISTRACTING_CHILD_SNOW",
        "Text": "TEXT_EVENTOPTION_DISTRACTING_CHILD_SNOW",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_DISTRACTING_CHILD_SNOW"
        }
      },
      {
        "zType": "EVENTOPTION_DISTRACTING_CHILD_HILLS",
        "Text": "TEXT_EVENTOPTION_DISTRACTING_CHILD_HILLS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_DISTRACTING_CHILD_HILLS"
        }
      },
      {
        "zType": "EVENTOPTION_DISTRACTING_CHILD_WOODS",
        "Text": "TEXT_EVENTOPTION_DISTRACTING_CHILD_WOODS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_DISTRACTING_CHILD_WOODS"
        }
      },
      {
        "zType": "EVENTOPTION_OUTDOOR_PASTIME_FISH",
        "Text": "TEXT_EVENTOPTION_OUTDOOR_PASTIME_FISH",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_OUTDOOR_PASTIME_FISH"
        }
      },
      {
        "zType": "EVENTOPTION_OUTDOOR_PASTIME_PLANTS",
        "Text": "TEXT_EVENTOPTION_OUTDOOR_PASTIME_PLANTS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_OUTDOOR_PASTIME_PLANTS"
        }
      },
      {
        "zType": "EVENTOPTION_OUTDOOR_PASTIME_ANIMALS",
        "Text": "TEXT_EVENTOPTION_OUTDOOR_PASTIME_ANIMALS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_OUTDOOR_PASTIME_ANIMALS"
        }
      },
      {
        "zType": "EVENTOPTION_RESTLESS_HANDS_ARTIFACTS",
        "Text": "TEXT_EVENTOPTION_RESTLESS_HANDS_ARTIFACTS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RESTLESS_HANDS_ARTIFACTS"
        }
      },
      {
        "zType": "EVENTOPTION_RESTLESS_HANDS_HERBS",
        "Text": "TEXT_EVENTOPTION_RESTLESS_HANDS_HERBS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RESTLESS_HANDS_HERBS"
        }
      },
      {
        "zType": "EVENTOPTION_RESTLESS_HANDS_SLAG",
        "Text": "TEXT_EVENTOPTION_RESTLESS_HANDS_SLAG",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RESTLESS_HANDS_SLAG"
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_DARK_OMENS_SACRIFICE",
        "Text": "TEXT_EVENTOPTION_CHILD_DARK_OMENS_SACRIFICE",
        "aeBonuses": {
          "zValue": "BONUS_FOOD_LOSS_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_DARK_OMENS_FIRE",
        "Text": "TEXT_EVENTOPTION_CHILD_DARK_OMENS_FIRE",
        "aeBonuses": {
          "zValue": "BONUS_WOOD_LOSS_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_DARK_OMENS_NOTHING",
        "Text": "TEXT_EVENTOPTION_CHILD_DARK_OMENS_NOTHING",
        "aeBonuses": {
          "zValue": "BONUS_DISCONTENT_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_ROYAL_BIRTH_COLLECT",
        "Text": "TEXT_EVENTOPTION_CHILD_ROYAL_BIRTH_COLLECT",
        "aeBonuses": {
          "zValue": [
            "BONUS_MONEY_GAIN_LARGE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_EXTRAVAGANT",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_CHILD_ROYAL_BIRTH_SEND",
        "Text": "TEXT_EVENTOPTION_CHILD_ROYAL_BIRTH_SEND",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_ROYAL_BIRTH_SEND",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_FRUGAL",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_CHILD_ROYAL_BIRTH_PRESENT",
        "Text": "TEXT_EVENTOPTION_CHILD_ROYAL_BIRTH_PRESENT",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_ROYAL_BIRTH_PRESENT"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_NEW_THOUGHTS_DEFEND",
        "Text": "TEXT_EVENTOPTION_CHILD_NEW_THOUGHTS_DEFEND",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_NEW_THOUGHTS_DEFEND"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_NEW_THOUGHTS_PEACE",
        "Text": "TEXT_EVENTOPTION_CHILD_NEW_THOUGHTS_PEACE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_NEW_THOUGHTS_PEACE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_NEW_THOUGHTS_FAMILY",
        "Text": "TEXT_EVENTOPTION_CHILD_NEW_THOUGHTS_FAMILY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_NEW_THOUGHTS_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BULLYING_HEIR_ALLOW",
        "EventLinkAdd": "EVENTLINK_BULLYING_HEIR_ALLOW",
        "Text": "TEXT_EVENTOPTION_BULLYING_HEIR_ALLOW",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BULLYING_HEIR_ALLOW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BULLYING_HEIR_TEACH",
        "Text": "TEXT_EVENTOPTION_BULLYING_HEIR_TEACH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BULLYING_HEIR_TEACH",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BULLYING_HEIR_ESCALATION_ACCEPT",
        "EventLinkAdd": "EVENTLINK_BULLYING_HEIR_ESCALATION_ACCEPT",
        "Text": "TEXT_EVENTOPTION_BULLYING_HEIR_ESCALATION_ACCEPT",
        "aeBonuses": {
          "zValue": [
            "BONUS_MONEY_GAIN_HUGE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BULLYING_HEIR_ESCALATION_REFUSE",
        "EventLinkAdd": "EVENTLINK_BULLYING_HEIR_ESCALATION_REFUSE",
        "Text": "TEXT_EVENTOPTION_BULLYING_HEIR_ESCALATION_REFUSE",
        "HelpText": "TEXT_EVENTOPTION_BULLYING_HEIR_ESCALATION_REFUSE_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BULLYING_HEIR_ESCALATION_REFUSE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BULLYING_HEIR_ESCALATION_IMPRISON",
        "Text": "TEXT_EVENTOPTION_BULLYING_HEIR_ESCALATION_IMPRISON",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BULLYING_HEIR_ESCALATION_IMPRISON"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BULLYING_HEIR_ESCALATION_SUCCEEDED_OK",
        "Text": "TEXT_EVENTOPTION_BULLYING_HEIR_ESCALATION_SUCCEEDED_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_KILL_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BULLYING_HEIR_ESCALATION_DISCOVERED_OK",
        "Text": "TEXT_EVENTOPTION_BULLYING_HEIR_ESCALATION_DISCOVERED_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_BULLYING_HEIR_ESCALATION_DISCOVERED_OK",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BULLYING_HEIR_ESCALATION_FAILED_OK",
        "Text": "TEXT_EVENTOPTION_BULLYING_HEIR_ESCALATION_FAILED_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_BULLYING_HEIR_ESCALATION_CALLED_OFF_OK",
        "Text": "TEXT_EVENTOPTION_BULLYING_HEIR_ESCALATION_CALLED_OFF_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_BULLYING_HEIR_ESCALATION_CALLED_OFF_OK"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_2",
            "BONUS_EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_WISDOM"
      },
      {
        "zType": "EVENTOPTION_HEIR_HOLY_WAR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_HEIR_HOLY_WAR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_HOLY_WAR_OPTION_0",
            "BONUS_EVENTOPTION_HEIR_HOLY_WAR_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_HOLY_WAR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_HEIR_HOLY_WAR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_HOLY_WAR_OPTION_1",
            "BONUS_EVENTOPTION_HEIR_HOLY_WAR_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_HEIR_HOLY_WAR_OPTION_1_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_HOLY_WAR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_HEIR_HOLY_WAR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_HOLY_WAR_OPTION_2",
            "BONUS_EVENTOPTION_HEIR_HOLY_WAR_OPTION_2_CHARACTER_1",
            "BONUS_BARBARIAN_WAR"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_COMING_OF_AGE_CEREMONY",
        "Text": "TEXT_EVENTOPTION_HEIR_COMING_OF_AGE_CEREMONY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_COMING_OF_AGE_CEREMONY_HEIR",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_COMING_OF_AGE_GIFTS",
        "Text": "TEXT_EVENTOPTION_HEIR_COMING_OF_AGE_GIFTS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HEIR_COMING_OF_AGE_GIFTS_PLAYER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_COMING_OF_AGE_HOLIDAY",
        "Text": "TEXT_EVENTOPTION_HEIR_COMING_OF_AGE_HOLIDAY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_CULTURE_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PREPARE_YOUR_HEIR_RULE",
        "Text": "TEXT_EVENTOPTION_PREPARE_YOUR_HEIR_RULE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PREPARE_YOUR_HEIR_RULE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PREPARE_YOUR_HEIR_HUNT",
        "Text": "TEXT_EVENTOPTION_PREPARE_YOUR_HEIR_HUNT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PREPARE_YOUR_HEIR_HUNT",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PREPARE_YOUR_HEIR_RIDE",
        "Text": "TEXT_EVENTOPTION_PREPARE_YOUR_HEIR_RIDE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PREPARE_YOUR_HEIR_RIDE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_JOYOUS_WEDDING_PRIVATE",
        "Text": "TEXT_EVENTOPTION_JOYOUS_WEDDING_PRIVATE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_JOYOUS_WEDDING_PRIVATE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_JOYOUS_WEDDING_ARISTOCRATS",
        "Text": "TEXT_EVENTOPTION_JOYOUS_WEDDING_ARISTOCRATS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_JOYOUS_WEDDING_ARISTOCRATS",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_JOYOUS_WEDDING_FEASTS",
        "Text": "TEXT_EVENTOPTION_JOYOUS_WEDDING_FEASTS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_CULTURE_GAIN_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_WEDDING_FAUX_PAS_BRIBES",
        "Text": "TEXT_EVENTOPTION_HEIR_WEDDING_FAUX_PAS_BRIBES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_WEDDING_FAUX_PAS_NOTHING",
        "Text": "TEXT_EVENTOPTION_HEIR_WEDDING_FAUX_PAS_NOTHING",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HEIR_WEDDING_FAUX_PAS_NOTHING"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_WEDDING_FAUX_PAS_LIGHTEN",
        "Text": "TEXT_EVENTOPTION_HEIR_WEDDING_FAUX_PAS_LIGHTEN",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_AVERAGE"
          ]
        },
        "LeaderSubject": "SUBJECT_ELOQUENT"
      },
      {
        "zType": "EVENTOPTION_HEIR_CRUSHING_BLOW_STUDY",
        "Text": "TEXT_EVENTOPTION_HEIR_CRUSHING_BLOW_STUDY",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HEIR_CRUSHING_BLOW_STUDY"
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_CRUSHING_BLOW_CHEER",
        "Text": "TEXT_EVENTOPTION_HEIR_CRUSHING_BLOW_CHEER",
        "aeBonuses": {
          "zValue": "BONUS_CULTURE_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_BUDDING_ARCHER_EYES",
        "Text": "TEXT_EVENTOPTION_HEIR_BUDDING_ARCHER_EYES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HEIR_BUDDING_ARCHER_EYES"
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_BUDDING_ARCHER_ARMS",
        "Text": "TEXT_EVENTOPTION_HEIR_BUDDING_ARCHER_ARMS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HEIR_BUDDING_ARCHER_ARMS"
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_BUDDING_ARCHER_HANDS",
        "Text": "TEXT_EVENTOPTION_HEIR_BUDDING_ARCHER_HANDS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HEIR_BUDDING_ARCHER_HANDS"
        }
      },
      {
        "zType": "EVENTOPTION_SLAIN_CHAMPION_PRAISE",
        "Text": "TEXT_EVENTOPTION_SLAIN_CHAMPION_PRAISE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SLAIN_CHAMPION_PRAISE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SLAIN_CHAMPION_COMMISSION",
        "Text": "TEXT_EVENTOPTION_SLAIN_CHAMPION_COMMISSION",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SLAIN_CHAMPION_COMMISSION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SLAIN_CHAMPION_ADMONISH",
        "Text": "TEXT_EVENTOPTION_SLAIN_CHAMPION_ADMONISH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SLAIN_CHAMPION_ADMONISH",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AXES_HIGH_TREMBLE",
        "Text": "TEXT_EVENTOPTION_AXES_HIGH_TREMBLE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_AXES_HIGH_TREMBLE"
        },
        "LeaderSubject": "SUBJECT_NOT_COWARDLY",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_AXES_HIGH_HOME",
        "Text": "TEXT_EVENTOPTION_AXES_HIGH_HOME",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_AXES_HIGH_HOME"
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_CRISIS_ACCIDENT",
        "EventLinkAdd": "EVENTLINK_HEIR_CRISIS_ACCIDENT",
        "Text": "TEXT_EVENTOPTION_HEIR_CRISIS_ACCIDENT",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_CRISIS_DIVORCE",
        "Text": "TEXT_EVENTOPTION_HEIR_CRISIS_DIVORCE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HEIR_CRISIS_DIVORCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_CRISIS_NOTHING",
        "Text": "TEXT_EVENTOPTION_HEIR_CRISIS_NOTHING"
      },
      {
        "zType": "EVENTOPTION_HEIR_CRISIS_SAFE_OK",
        "Text": "TEXT_EVENTOPTION_HEIR_CRISIS_SAFE_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_XP_CHARACTER_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_CRISIS_CAUGHT_OK",
        "Text": "TEXT_EVENTOPTION_HEIR_CRISIS_CAUGHT_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_HEIR_CRISIS_CAUGHT_OK"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DWINDLING_LINE_1",
        "Text": "TEXT_EVENTOPTION_DWINDLING_LINE_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DWINDLING_LINE_ADOPTED",
            "BONUS_EVENTOPTION_DWINDLING_LINE_NO",
            "BONUS_EVENTOPTION_DWINDLING_LINE_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DWINDLING_LINE_2",
        "Text": "TEXT_EVENTOPTION_DWINDLING_LINE_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DWINDLING_LINE_NO",
            "BONUS_EVENTOPTION_DWINDLING_LINE_ADOPTED",
            "BONUS_EVENTOPTION_DWINDLING_LINE_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DWINDLING_LINE_3",
        "Text": "TEXT_EVENTOPTION_DWINDLING_LINE_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DWINDLING_LINE_NO",
            "BONUS_EVENTOPTION_DWINDLING_LINE_NO",
            "BONUS_EVENTOPTION_DWINDLING_LINE_ADOPTED",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DWINDLING_LINE_NO",
        "Text": "TEXT_EVENTOPTION_DWINDLING_LINE_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DWINDLING_LINE_NO",
            "BONUS_EVENTOPTION_DWINDLING_LINE_NO",
            "BONUS_EVENTOPTION_DWINDLING_LINE_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_2",
            "BONUS_EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_OUR_CONSERVATIVE_ELDERS_OFFENDED_TRAIL",
        "Text": "TEXT_EVENTOPTION_OUR_CONSERVATIVE_ELDERS_OFFENDED_TRAIL",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_OUR_CONSERVATIVE_ELDERS_OFFENDED_TRAIL_CHARACTER",
            "BONUS_EVENTOPTION_OUR_CONSERVATIVE_ELDERS_OFFENDED_TRAIL_FAMILY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_OUR_CONSERVATIVE_ELDERS_SUBMISSION",
        "Text": "TEXT_EVENTOPTION_OUR_CONSERVATIVE_ELDERS_SUBMISSION",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_OUR_CONSERVATIVE_ELDERS_SUBMISSION_CHARACTER",
            "BONUS_EVENTOPTION_OUR_CONSERVATIVE_ELDERS_SUBMISSION_FAMILY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_OUR_CONSERVATIVE_ELDERS_HATSHEPSUT",
        "Text": "TEXT_EVENTOPTION_OUR_CONSERVATIVE_ELDERS_HATSHEPSUT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_OUR_CONSERVATIVE_ELDERS_HATSHEPSUT_CHARACTER",
            "NONE",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_CUNNING"
      },
      {
        "zType": "EVENTOPTION_FAMILY_ADOPTION_YES",
        "Text": "TEXT_EVENTOPTION_FAMILY_ADOPTION_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_ADOPTION_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_ADOPTION_NO",
        "Text": "TEXT_EVENTOPTION_FAMILY_ADOPTION_NO",
        "HelpText": "TEXT_EVENTOPTION_FAMILY_ADOPTION_NO_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_POTENTIAL_HEIR_YES",
        "Text": "TEXT_EVENTOPTION_POTENTIAL_HEIR_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_POTENTIAL_HEIR_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_POTENTIAL_HEIR_NO",
        "Text": "TEXT_EVENTOPTION_POTENTIAL_HEIR_NO",
        "HelpText": "TEXT_EVENTOPTION_POTENTIAL_HEIR_NO_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DANGEROUS_HEIRS_OPTION_0",
        "EventLinkAdd": "EVENTLINK_DANGEROUS_HEIRS",
        "Text": "TEXT_EVENTOPTION_DANGEROUS_HEIRS_OPTION_0"
      },
      {
        "zType": "EVENTOPTION_DANGEROUS_HEIRS_DEATH_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DANGEROUS_HEIRS_DEATH_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_KILL_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_SELF_REFLECTION_RIGHTEOUSNESS",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_SELF_REFLECTION_RIGHTEOUSNESS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SUCCESSION_SELF_REFLECTION_RIGHTEOUSNESS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_SELF_REFLECTION_BRILLIANT",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_SELF_REFLECTION_BRILLIANT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SUCCESSION_SELF_REFLECTION_BRILLIANT_LEADER",
            "BONUS_CULTURE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_SELF_REFLECTION_PEACEFUL",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_SELF_REFLECTION_PEACEFUL",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SUCCESSION_SELF_REFLECTION_PEACEFUL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_SELF_REFLECTION_NO",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_SELF_REFLECTION_NO"
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_NEW_LEAF_FEAST",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_NEW_LEAF_FEAST",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_NEW_LEAF_FEAST_FAMILY",
            "BONUS_FOOD_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_NEW_LEAF_MONUMENT",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_NEW_LEAF_MONUMENT",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_NEW_LEAF_MONUMENT_FAMILY",
            "BONUS_STONE_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_NEW_LEAF_BRIBE",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_NEW_LEAF_BRIBE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_NEW_LEAF_BRIBE_FAMILY",
            "BONUS_MONEY_LOSS_HUGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_NEW_LEAF_NO",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_NEW_LEAF_NO"
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_CHANCE_FOR_PEACE_TRUCE",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_CHANCE_FOR_PEACE_TRUCE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_BARBARIAN_TRUCE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_CHANCE_FOR_PEACE_FRIENDS",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_CHANCE_FOR_PEACE_FRIENDS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_BARBARIAN_PEACE",
            "BONUS_EVENTOPTION_SUCCESSION_CHANCE_FOR_PEACE_FRIENDS_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_CHANCE_FOR_PEACE_NO",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_CHANCE_FOR_PEACE_NO",
        "HelpText": "TEXT_EVENTOPTION_SUCCESSION_CHANCE_FOR_PEACE_NO_HELP"
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_SNAKE_SIGNS_RACES",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_SNAKE_SIGNS_RACES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_SNAKE_SIGNS_RACES_FAMILY",
            "NONE",
            "NONE",
            "BONUS_MONEY_LOSS_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_SNAKE_SIGNS_BANQUET",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_SNAKE_SIGNS_BANQUET",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_SNAKE_SIGNS_BANQUET_FAMILY",
            "NONE",
            "BONUS_FOOD_LOSS_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_SNAKE_SIGNS_CONTEST",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_SNAKE_SIGNS_CONTEST",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_SNAKE_SIGNS_CONTEST_FAMILY",
            "BONUS_IRON_LOSS_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_SNAKE_SIGNS_NO",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_SNAKE_SIGNS_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_GIVE_TRAIT_PROUD",
            "NONE",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_CORONATION_FESTIVAL_POETRY",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_CORONATION_FESTIVAL_POETRY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_CORONATION_FESTIVAL_POETRY_FAMILY",
            "NONE",
            "NONE",
            "BONUS_CULTURE_GAIN_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_CORONATION_FESTIVAL_FEAST",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_CORONATION_FESTIVAL_FEAST",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_CORONATION_FESTIVAL_FEAST_FAMILY",
            "NONE",
            "BONUS_FOOD_GAIN_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_CORONATION_FESTIVAL_ARCHERY",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_CORONATION_FESTIVAL_ARCHERY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_CORONATION_FESTIVAL_ARCHERY_FAMILY",
            "BONUS_UNITCLASS_RANGED_INFANTRY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_LABOR",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_LABOR",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_LABOR_LEADER",
            "BONUS_EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_LABOR_CAPITAL"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_CRUEL",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_TRAIN",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_TRAIN",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_TRAIN_LEADER",
            "BONUS_TRAINING_GAIN_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_ARTISANS",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_ARTISANS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_ARTISANS_LEADER",
            "BONUS_EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_ARTISANS_CAPITAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_GRANITE",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_GRANITE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_GRANITE_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_STEEL",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_STEEL",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_UNITCLASS_HEAVY_INFANTRY",
            "BONUS_IRON_GAIN_TINY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_EBONY",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_EBONY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_EBONY_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_KILL",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_KILL",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_KILL_LEADER",
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_KILL_PLAYER"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_GRACIOUS",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_TAKING_THE_CROWN_FESTIVAL",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_TAKING_THE_CROWN_FESTIVAL",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_TAKING_THE_CROWN_FESTIVAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_TAKING_THE_CROWN_INQUIRY",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_TAKING_THE_CROWN_INQUIRY",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SUCCESSION_TAKING_THE_CROWN_INQUIRY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SUCCESSION_TAKING_THE_CROWN_TRADITIONAL",
        "Text": "TEXT_EVENTOPTION_SUCCESSION_TAKING_THE_CROWN_TRADITIONAL",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_CULTURE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MASTER_OF_WHISPERS_FRIENDS",
        "Text": "TEXT_EVENTOPTION_MASTER_OF_WHISPERS_FRIENDS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_MASTER_OF_WHISPERS_FRIENDS"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MASTER_OF_WHISPERS_IMPRISION",
        "Text": "TEXT_EVENTOPTION_MASTER_OF_WHISPERS_IMPRISION",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_MASTER_OF_WHISPERS_IMPRISION",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SPYMASTER_MASTER_OF_POISONS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_SPYMASTER_MASTER_OF_POISONS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SPYMASTER_MASTER_OF_POISONS_OPTION_0",
            "BONUS_EVENTOPTION_SPYMASTER_MASTER_OF_POISONS_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SPYMASTER_MASTER_OF_POISONS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_SPYMASTER_MASTER_OF_POISONS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SPYMASTER_MASTER_OF_POISONS_OPTION_1",
            "BONUS_EVENTOPTION_SPYMASTER_MASTER_OF_POISONS_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_BETRAYAL_ADMIT",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_BETRAYAL_ADMIT",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ASSASSINATION_BETRAYAL_ADMIT"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_BETRAYAL_DENY",
        "EventLinkAdd": "EVENTLINK_ASSASSINATION_BETRAYAL",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_BETRAYAL_DENY",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_REVENGE_PAYOFF",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_REVENGE_PAYOFF",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_GIGANTIC"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_REVENGE_DEATH",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_REVENGE_DEATH",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_RUMORS_REMOVE",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_RUMORS_REMOVE"
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_RUMORS_IMPRISON_WIFE",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_RUMORS_IMPRISON_WIFE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ASSASSINATION_RUMORS_IMPRISON",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ASSASSINATION_RUMORS_IMPRISON_HEIR",
        "Text": "TEXT_EVENTOPTION_ASSASSINATION_RUMORS_IMPRISON_HEIR",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_ASSASSINATION_RUMORS_IMPRISON"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_PARTISANS_OK",
        "Text": "TEXT_EVENTOPTION_FAMILY_PARTISANS_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_FAMILY_PARTISANS_OK"
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_PARTISANS_HELP",
        "Text": "TEXT_EVENTOPTION_FAMILY_PARTISANS_HELP",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_FAMILY_PARTISANS_HELP"
        },
        "LeaderSubject": "SUBJECT_NOT_CRUEL",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_SABOTAGE_OK",
        "Text": "TEXT_EVENTOPTION_SABOTAGE_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SABOTAGE_OK",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SABOTAGE_HELP",
        "Text": "TEXT_EVENTOPTION_SABOTAGE_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_XP_CHARACTER_AVERAGE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_PROUD",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_LAND_RESPECT",
        "EventLinkAdd": "EVENTLINK_FAMILY_SQUABBLE",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_LAND_RESPECT",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_LAND_SUPPORTED",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_LAND_OPPOSED",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_LAND_KEEP",
        "EventLinkAdd": "EVENTLINK_FAMILY_SQUABBLE",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_LAND_KEEP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_LAND_OPPOSED",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_LAND_SUPPORTED",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_LAND_STAND",
        "EventLinkAdd": "EVENTLINK_FAMILY_SQUABBLE",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_LAND_STAND"
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_LAND_TAKE",
        "EventLinkAdd": "EVENTLINK_FAMILY_SQUABBLE",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_LAND_TAKE",
        "aeBonuses": {
          "zValue": [
            "BONUS_FOOD_GAIN_AVERAGE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_LAND_SEIZED_FAMILY",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_LAND_SEIZED_FAMILY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_1",
        "EventLinkAdd": "EVENTLINK_FAMILY_SQUABBLE",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_US",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_THEM",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_2",
        "EventLinkAdd": "EVENTLINK_FAMILY_SQUABBLE",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_THEM",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_US",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_NO",
        "EventLinkAdd": "EVENTLINK_FAMILY_SQUABBLE",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_NO",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_RUMORS_GOLD",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_GOLD",
        "aeBonuses": {
          "zValue": [
            "BONUS_MONEY_GAIN_LARGE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_TOOK_BRIBE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_REJECTED",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_RUMORS_TIMBER",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_TIMBER",
        "aeBonuses": {
          "zValue": [
            "BONUS_WOOD_GAIN_LARGE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_REJECTED",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_TOOK_BRIBE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_RUMORS_THANKS",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_THANKS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_BOTH_BRIBES",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_WASTED_BRIBE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_WASTED_BRIBE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_RUMORS_REFUSE",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_REFUSE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_REFUSED_BRIBE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_RUMORS_REFUSED_BRIBE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_1",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_TRAINING_GAIN_SMALL",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_US",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_THEM",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_2",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_CIVICS_GAIN_SMALL",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_THEM",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_US",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_NO",
        "Text": "TEXT_EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_NO",
            "BONUS_EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_ALLOW",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_ALLOW",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAMILY_QUARREL_ALLOW_FAMILY",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_ALLOW_LEADER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_PURSUE",
        "EventLinkAdd": "EVENTLINK_FAMILY_QUARREL_PURSUE",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_PURSUE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_FLED_COUNTRY",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_FLED_COUNTRY",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_HELP",
        "EventLinkAdd": "EVENTLINK_FAMILY_QUARREL_PURSUE",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAMILY_QUARREL_HELP_FAMILY",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_FLED_COUNTRY",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_FLED_COUNTRY",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_PURSUE_RETREAT",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_PURSUE_RETREAT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAMILY_QUARREL_RETREAT_FAMILY",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_BACK_HOME",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_BACK_HOME",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_PURSUE_RETREAT"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_PURSUE_SIEGE",
        "EventLinkAdd": "EVENTLINK_FAMILY_QUARREL_SIEGE",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_PURSUE_SIEGE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_PURSUE_SIEGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_PURSUE_HORSE",
        "EventLinkAdd": "EVENTLINK_FAMILY_QUARREL_HORSE",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_PURSUE_HORSE",
        "LeaderSubject": "SUBJECT_HIGH_WISDOM",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_SIEGE_CONTINUE",
        "EventLinkAdd": "EVENTLINK_FAMILY_QUARREL_CONTINUE",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_SIEGE_CONTINUE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_SIEGE_CONTINUE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_SIEGE_ATTACK",
        "EventLinkAdd": "EVENTLINK_FAMILY_QUARREL_ATTACK",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_SIEGE_ATTACK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_SIEGE_ATTACK"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_SIEGE_RETREAT",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_SIEGE_RETREAT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAMILY_QUARREL_RETREAT_FAMILY",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_BACK_HOME",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_BACK_HOME",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_SIEGE_RETREAT"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_FATIGUED_ATTACK",
        "EventLinkAdd": "EVENTLINK_FAMILY_QUARREL_ATTACK",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_FATIGUED_ATTACK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_FATIGUED_ATTACK"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_FAMILY_QUARREL_FATIGUED_RETREAT",
        "Text": "TEXT_EVENTOPTION_FAMILY_QUARREL_FATIGUED_RETREAT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAMILY_QUARREL_RETREAT_FAMILY",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_BACK_HOME",
            "BONUS_EVENTOPTION_FAMILY_QUARREL_BACK_HOME",
            "BONUS_TRAINING_GAIN_HUGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ACROPOLIS_GUARD_YES",
        "Text": "TEXT_EVENTOPTION_ACROPOLIS_GUARD_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ACROPOLIS_GUARD_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ACROPOLIS_GUARD_NO",
        "Text": "TEXT_EVENTOPTION_ACROPOLIS_GUARD_NO",
        "HelpText": "TEXT_EVENTOPTION_ACROPOLIS_GUARD_NO_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ACROPOLIS_GUARD_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_GAMES",
        "Text": "TEXT_EVENTOPTION_FAMILY_GAMES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_FAMILY_GAMES"
        }
      },
      {
        "zType": "EVENTOPTION_HOMELESS_CHILDREN_NO_AID",
        "Text": "TEXT_EVENTOPTION_HOMELESS_CHILDREN_NO_AID",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HOMELESS_CHILDREN_NO_AID",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HOMELESS_CHILDREN_SHELTER",
        "Text": "TEXT_EVENTOPTION_HOMELESS_CHILDREN_SHELTER",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HOMELESS_CHILDREN_SHELTER",
            "BONUS_EVENTOPTION_HOMELESS_CHILDREN_SHELTER_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HOMELESS_CHILDREN_CHILD_LABOR",
        "Text": "TEXT_EVENTOPTION_HOMELESS_CHILDREN_CHILD_LABOR",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HOMELESS_CHILDREN_CHILD_LABOR",
            "NONE",
            "BONUS_EVENTOPTION_HOMELESS_CHILDREN_CHILD_LABOR_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DECADENCE_SACRIFICE",
        "EventLinkAdd": "EVENTLINK_DECADENCE_SACRIFICE",
        "Text": "TEXT_EVENTOPTION_DECADENCE_SACRIFICE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DECADENCE_SACRIFICE",
            "BONUS_EVENTOPTION_DECADENCE_SACRIFICE_FAMILY_0",
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_DECADENCE_CRAZY_PRIESTS",
        "Text": "TEXT_EVENTOPTION_DECADENCE_CRAZY_PRIESTS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DECADENCE_CRAZY_PRIESTS",
            "NONE",
            "BONUS_EVENTOPTION_DECADENCE_CRAZY_PRIESTS_FAMILY_OTHER",
            "BONUS_EVENTOPTION_DECADENCE_CRAZY_PRIESTS_FAMILY_OTHER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STRICTER_RULES_PRIESTS_PLEASED",
        "Text": "TEXT_EVENTOPTION_STRICTER_RULES_PRIESTS_PLEASED",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_STRICTER_RULES_PRIESTS_PLEASED_FAMILY",
            "BONUS_EVENTOPTION_STRICTER_RULES_PRIESTS_PLEASED_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STRICTER_RULES_PEOPLE_PLEASED",
        "Text": "TEXT_EVENTOPTION_STRICTER_RULES_PEOPLE_PLEASED",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_STRICTER_RULES_PEOPLE_PLEASED_FAMILY_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RAMPANT_CORRUPTION_ALLOW",
        "Text": "TEXT_EVENTOPTION_RAMPANT_CORRUPTION_ALLOW",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RAMPANT_CORRUPTION_ALLOW",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RAMPANT_CORRUPTION_SUPPORT",
        "Text": "TEXT_EVENTOPTION_RAMPANT_CORRUPTION_SUPPORT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RAMPANT_CORRUPTION_SUPPORT_CITY",
            "BONUS_MONEY_LOSS_HUGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RAMPANT_CORRUPTION_HIRE",
        "Text": "TEXT_EVENTOPTION_RAMPANT_CORRUPTION_HIRE",
        "aeBonuses": {
          "zValue": [
            "BONUS_ADD_GREAT_MINISTER",
            "BONUS_MONEY_LOSS_HUGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RAMPANT_CORRUPTION_BRIBES",
        "Text": "TEXT_EVENTOPTION_RAMPANT_CORRUPTION_BRIBES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RADICAL_PHILOSOPHER_ACCEPT",
        "Text": "TEXT_EVENTOPTION_RADICAL_PHILOSOPHER_ACCEPT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RADICAL_PHILOSOPHER_ACCEPT",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RADICAL_PHILOSOPHER_RID",
        "Text": "TEXT_EVENTOPTION_RADICAL_PHILOSOPHER_RID",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RADICAL_PHILOSOPHER_RID_FAMILY",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTEST_OF_RHETORIC_MYSELF",
        "Text": "TEXT_EVENTOPTION_CONTEST_OF_RHETORIC_MYSELF",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTEST_OF_RHETORIC_MYSELF",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_ELOQUENT"
      },
      {
        "zType": "EVENTOPTION_CONTEST_OF_RHETORIC_ORATOR",
        "Text": "TEXT_EVENTOPTION_CONTEST_OF_RHETORIC_ORATOR",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTEST_OF_RHETORIC_ORATOR_FAMILY",
            "BONUS_MONEY_LOSS_LARGE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTEST_OF_RHETORIC_ANYONE",
        "Text": "TEXT_EVENTOPTION_CONTEST_OF_RHETORIC_ANYONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTEST_OF_RHETORIC_ANYONE_FAMILY",
            "BONUS_MONEY_LOSS_MINIMAL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CONTEST_OF_RHETORIC_REFUSE",
        "Text": "TEXT_EVENTOPTION_CONTEST_OF_RHETORIC_REFUSE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CONTEST_OF_RHETORIC_REFUSE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EAGER_EXPLORERS_OK",
        "Text": "TEXT_EVENTOPTION_EAGER_EXPLORERS_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EAGER_EXPLORERS_OK"
        }
      },
      {
        "zType": "EVENTOPTION_EAGER_EXPLORERS_NEW",
        "Text": "TEXT_EVENTOPTION_EAGER_EXPLORERS_NEW",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EAGER_EXPLORERS_NEW"
        }
      },
      {
        "zType": "EVENTOPTION_IMPROPER_VASSAL_REMIND",
        "Text": "TEXT_EVENTOPTION_IMPROPER_VASSAL_REMIND",
        "HelpText": "TEXT_EVENTOPTION_IMPROPER_VASSAL_REMIND_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_XP_CHARACTER_SMALL"
          ]
        },
        "LeaderSubject": "SUBJECT_GRACIOUS"
      },
      {
        "zType": "EVENTOPTION_IMPROPER_VASSAL_REPRIMAND",
        "Text": "TEXT_EVENTOPTION_IMPROPER_VASSAL_REPRIMAND",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_IMPROPER_VASSAL_REPRIMAND",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_IMPROPER_VASSAL_LET_GO",
        "Text": "TEXT_EVENTOPTION_IMPROPER_VASSAL_LET_GO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_IMPROPER_VASSAL_LET_GO",
            "BONUS_EVENTOPTION_IMPROPER_VASSAL_LET_GO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEATED_RIVALRY_REFUSE",
        "Text": "TEXT_EVENTOPTION_HEATED_RIVALRY_REFUSE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEATED_RIVALRY_REFUSE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEATED_RIVALRY_ACQUIESCE",
        "Text": "TEXT_EVENTOPTION_HEATED_RIVALRY_ACQUIESCE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HEATED_RIVALRY_ACQUIESCE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAVORED_VASSAL_OK",
        "EventLinkAdd": "EVENTLINK_FAVORED_VASSAL_OK",
        "Text": "TEXT_EVENTOPTION_FAVORED_VASSAL_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_MONEY_LOSS_TINY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAVORED_VASSAL_NO",
        "Text": "TEXT_EVENTOPTION_FAVORED_VASSAL_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAVORED_VASSAL_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAVORED_VASSAL_FEAST_OK",
        "EventLinkAdd": "EVENTLINK_FAVORED_VASSAL_FEAST_OK",
        "Text": "TEXT_EVENTOPTION_FAVORED_VASSAL_FEAST_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAVORED_VASSAL_FEAST_OK",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAVORED_VASSAL_FEAST_NO",
        "Text": "TEXT_EVENTOPTION_FAVORED_VASSAL_FEAST_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAVORED_VASSAL_FEAST_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAVORED_VASSAL_CEREMONY_OK",
        "Text": "TEXT_EVENTOPTION_FAVORED_VASSAL_CEREMONY_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAVORED_VASSAL_CEREMONY_OK_PLAYER",
            "BONUS_EVENTOPTION_FAVORED_VASSAL_CEREMONY_OK_FAMILY_MAIN",
            "BONUS_EVENTOPTION_FAVORED_VASSAL_CEREMONY_OK_FAMILY_OTHER",
            "BONUS_EVENTOPTION_FAVORED_VASSAL_CEREMONY_OK_FAMILY_OTHER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAVORED_VASSAL_CEREMONY_COMPROMISE",
        "Text": "TEXT_EVENTOPTION_FAVORED_VASSAL_CEREMONY_COMPROMISE",
        "aeBonuses": {
          "zValue": [
            "BONUS_MONEY_LOSS_LARGE",
            "BONUS_EVENTOPTION_FAVORED_VASSAL_CEREMONY_COMPROMISE_FAMILY_MAIN",
            "BONUS_EVENTOPTION_FAVORED_VASSAL_CEREMONY_COMPROMISE_FAMILY_OTHER",
            "BONUS_EVENTOPTION_FAVORED_VASSAL_CEREMONY_COMPROMISE_FAMILY_OTHER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAVORED_VASSAL_CEREMONY_NO",
        "Text": "TEXT_EVENTOPTION_FAVORED_VASSAL_CEREMONY_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAVORED_VASSAL_CEREMONY_NO",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_INQUIRING_MINDS_YES",
        "Text": "TEXT_EVENTOPTION_INQUIRING_MINDS_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_INQUIRING_MINDS_YES"
        }
      },
      {
        "zType": "EVENTOPTION_INQUIRING_MINDS_NO",
        "Text": "TEXT_EVENTOPTION_INQUIRING_MINDS_NO",
        "aeBonuses": {
          "zValue": "BONUS_SCIENCE_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_INQUIRING_MINDS_SUCCESS_OK",
        "Text": "TEXT_EVENTOPTION_INQUIRING_MINDS_SUCCESS_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_INQUIRING_MINDS_SUCCESS_OK"
        }
      },
      {
        "zType": "EVENTOPTION_GREAT_PERSON_A1_SOLDIER",
        "EventLinkAdd": "EVENTLINK_GREAT_PERSON_A1",
        "Text": "TEXT_EVENTOPTION_GREAT_PERSON_A1_SOLDIER",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GREAT_PERSON_A1_SOLDIER"
        }
      },
      {
        "zType": "EVENTOPTION_GREAT_PERSON_A1_MERCHANT",
        "EventLinkAdd": "EVENTLINK_GREAT_PERSON_A1",
        "Text": "TEXT_EVENTOPTION_GREAT_PERSON_A1_MERCHANT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GREAT_PERSON_A1_MERCHANT"
        }
      },
      {
        "zType": "EVENTOPTION_GREAT_PERSON_A2_SOLDIER",
        "Text": "TEXT_EVENTOPTION_GREAT_PERSON_A2_SOLDIER",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GREAT_PERSON_A2_SOLDIER"
        }
      },
      {
        "zType": "EVENTOPTION_GREAT_PERSON_A2_MERCHANT",
        "Text": "TEXT_EVENTOPTION_GREAT_PERSON_A2_MERCHANT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GREAT_PERSON_A2_MERCHANT"
        }
      },
      {
        "zType": "EVENTOPTION_GREAT_PERSON_B1_SCIENTIST",
        "EventLinkAdd": "EVENTLINK_GREAT_PERSON_B1",
        "Text": "TEXT_EVENTOPTION_GREAT_PERSON_B1_SCIENTIST",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GREAT_PERSON_B1_SCIENTIST"
        }
      },
      {
        "zType": "EVENTOPTION_GREAT_PERSON_B1_MINISTER",
        "EventLinkAdd": "EVENTLINK_GREAT_PERSON_B1",
        "Text": "TEXT_EVENTOPTION_GREAT_PERSON_B1_MINISTER",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GREAT_PERSON_B1_MINISTER"
        }
      },
      {
        "zType": "EVENTOPTION_GREAT_PERSON_B2_SCIENTIST",
        "Text": "TEXT_EVENTOPTION_GREAT_PERSON_B2_SCIENTIST",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GREAT_PERSON_B2_SCIENTIST"
        }
      },
      {
        "zType": "EVENTOPTION_GREAT_PERSON_B2_MINISTER",
        "Text": "TEXT_EVENTOPTION_GREAT_PERSON_B2_MINISTER",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GREAT_PERSON_B2_MINISTER"
        }
      },
      {
        "zType": "EVENTOPTION_GP_WISDOM_LITERATURE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_WISDOM_LITERATURE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_WISDOM_LITERATURE_OPTION_0",
            "BONUS_EVENTOPTION_GP_WISDOM_LITERATURE_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_WISDOM_LITERATURE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_WISDOM_LITERATURE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_WISDOM_LITERATURE_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_A_PROMOTION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_A_PROMOTION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_A_PROMOTION_OPTION_0",
            "BONUS_EVENTOPTION_GP_A_PROMOTION_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_A_PROMOTION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_A_PROMOTION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_A_PROMOTION_OPTION_1",
            "BONUS_EVENTOPTION_GP_A_PROMOTION_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_A_PROMOTION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GP_A_PROMOTION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_A_PROMOTION_OPTION_2",
            "BONUS_EVENTOPTION_GP_A_PROMOTION_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_1_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_2_PLAYER"
          ]
        },
        "LeaderSubject": "SUBJECT_DIPLOMAT"
      },
      {
        "zType": "EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_0_FAMILY_0",
            "BONUS_EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_0_CHARACTER_2",
            "BONUS_EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_0_FAMILY_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_1",
            "NONE",
            "BONUS_EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_1_FAMILY_0",
            "NONE",
            "BONUS_EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_1_FAMILY_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_2_FAMILY_0",
            "NONE",
            "BONUS_EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_2_FAMILY_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_ANNEXATION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_ANNEXATION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_ANNEXATION_OPTION_0_BARBARIAN",
            "BONUS_EVENTOPTION_GP_ANNEXATION_OPTION_0_LEADER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_ANNEXATION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_ANNEXATION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_ANNEXATION_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_KILL_CHARACTER",
            "BONUS_EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_1",
            "BONUS_EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_2",
            "BONUS_EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_A_GRUESOME_EXAMPLE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_A_GRUESOME_EXAMPLE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_A_GRUESOME_EXAMPLE_OPTION_0",
            "BONUS_EVENTOPTION_GP_A_GRUESOME_EXAMPLE_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_A_GRUESOME_EXAMPLE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_A_GRUESOME_EXAMPLE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_A_GRUESOME_EXAMPLE_OPTION_1",
            "BONUS_EVENTOPTION_GP_A_GRUESOME_EXAMPLE_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_0",
            "BONUS_EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_0_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_1",
            "BONUS_EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_2",
            "BONUS_EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_2_FAMILY"
          ]
        },
        "LeaderSubject": "SUBJECT_GRACIOUS"
      },
      {
        "zType": "EVENTOPTION_GP_OFFENSIVE_BEHAVIOR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_OFFENSIVE_BEHAVIOR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_OFFENSIVE_BEHAVIOR_OPTION_0",
            "BONUS_EVENTOPTION_GP_OFFENSIVE_BEHAVIOR_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_OFFENSIVE_BEHAVIOR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_OFFENSIVE_BEHAVIOR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_OFFENSIVE_BEHAVIOR_OPTION_1",
            "BONUS_EVENTOPTION_GP_OFFENSIVE_BEHAVIOR_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_THE_UNIVERSAL_ORDER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_THE_UNIVERSAL_ORDER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_THE_UNIVERSAL_ORDER_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_THE_UNIVERSAL_ORDER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_THE_UNIVERSAL_ORDER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_THE_UNIVERSAL_ORDER_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_THE_UNIVERSAL_ORDER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GP_THE_UNIVERSAL_ORDER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_THE_UNIVERSAL_ORDER_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_WISDOM"
      },
      {
        "zType": "EVENTOPTION_GP_FARMING_BY_STAR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_FARMING_BY_STAR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_GP_FARMING_BY_STAR_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_FARMING_BY_STAR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_FARMING_BY_STAR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_ADD_CITIZEN_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_THE_MECHANISM_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_THE_MECHANISM_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_THE_MECHANISM_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_THE_MECHANISM_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_THE_MECHANISM_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_THE_MECHANISM_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_THE_MECHANISM_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GP_THE_MECHANISM_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_THE_MECHANISM_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_INTELLIGENT"
      },
      {
        "zType": "EVENTOPTION_GP_TABOOS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_TABOOS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_TABOOS_OPTION_0",
            "BONUS_EVENTOPTION_GP_TABOOS_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_TABOOS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_TABOOS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_TABOOS_OPTION_1",
            "BONUS_EVENTOPTION_GP_TABOOS_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_TABOOS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GP_TABOOS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_TABOOS_OPTION_2",
            "BONUS_EVENTOPTION_GP_TABOOS_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_TABOOS_OPTION_2_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_SCIENCE_OR_MAGIC_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_SCIENCE_OR_MAGIC_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_SCIENCE_OR_MAGIC_OPTION_0",
            "BONUS_EVENTOPTION_GP_SCIENCE_OR_MAGIC_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_SCIENCE_OR_MAGIC_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_SCIENCE_OR_MAGIC_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_SCIENCE_OR_MAGIC_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_1",
            "BONUS_EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_1_CHARACTER_1",
            "BONUS_FREE_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_2",
            "BONUS_EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_0_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_2_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_LEFT_BEHIND_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_LEFT_BEHIND_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_LEFT_BEHIND_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_LEFT_BEHIND_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_LEFT_BEHIND_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_LEFT_BEHIND_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_LEFT_BEHIND_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GP_LEFT_BEHIND_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_LEFT_BEHIND_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_MERCHANT_TOWN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_MERCHANT_TOWN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_MERCHANT_TOWN_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_MERCHANT_TOWN_OPTION_0_CITY",
            "BONUS_EVENTOPTION_GP_MERCHANT_TOWN_OPTION_0_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_MERCHANT_TOWN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_MERCHANT_TOWN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GP_MERCHANT_TOWN_OPTION_1_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_GP_MERCHANT_TOWN_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GP_STICKY_FINGERS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GP_STICKY_FINGERS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_KILL_CHARACTER",
            "BONUS_EVENTOPTION_GP_STICKY_FINGERS_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_STICKY_FINGERS_OPTION_0_FAMILY"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_CORRUPT",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_GP_STICKY_FINGERS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GP_STICKY_FINGERS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_STICKY_FINGERS_OPTION_1",
            "BONUS_EVENTOPTION_GP_STICKY_FINGERS_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_STICKY_FINGERS_OPTION_1_FAMILY"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_CORRUPT",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_GP_STICKY_FINGERS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GP_STICKY_FINGERS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GP_STICKY_FINGERS_OPTION_2",
            "BONUS_EVENTOPTION_GP_STICKY_FINGERS_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_GP_STICKY_FINGERS_OPTION_2_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_A_LONG_FALL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DEATH_A_LONG_FALL_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_CIVICS_GAIN_AVERAGE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_A_LONG_FALL_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DEATH_A_LONG_FALL_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_DISCONTENT_LOSS_AVERAGE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_TRAMPLED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DEATH_TRAMPLED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_FOOD_GAIN_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_TRAMPLED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DEATH_TRAMPLED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_UNITCLASS_HEAVY_INFANTRY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_STRICKEN_DOWN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DEATH_STRICKEN_DOWN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_SCIENCE_GAIN_SMALL",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_STRICKEN_DOWN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DEATH_STRICKEN_DOWN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_DEATH_STRICKEN_DOWN_OPTION_1_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_VANISHED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DEATH_VANISHED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_CULTURE_GAIN_AVERAGE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_VANISHED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DEATH_VANISHED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_DISCONTENT_LOSS_AVERAGE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_VANISHED_OPTION_2",
        "Text": "TEXT_EVENTOPTION_DEATH_VANISHED_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEATH_VANISHED_OPTION_2",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_STRICT"
      },
      {
        "zType": "EVENTOPTION_DEATH_DARK_WATERS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DEATH_DARK_WATERS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEATH_DARK_WATERS_OPTION_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_DARK_WATERS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DEATH_DARK_WATERS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEATH_DARK_WATERS_OPTION_1_CHARACTER",
            "NONE",
            "BONUS_EVENTOPTION_DEATH_DARK_WATERS_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_DEADLY_DRINK_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DEATH_DEADLY_DRINK_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEATH_DEADLY_DRINK_OPTION_0_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_DEADLY_DRINK_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DEATH_DEADLY_DRINK_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEATH_DEADLY_DRINK_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_BRAWL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DEATH_BRAWL_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEATH_BRAWL_OPTION_0_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_BRAWL_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DEATH_BRAWL_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEATH_BRAWL_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_THE_PRICE_OF_POWER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DEATH_THE_PRICE_OF_POWER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEATH_THE_PRICE_OF_POWER_OPTION_0_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_THE_PRICE_OF_POWER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DEATH_THE_PRICE_OF_POWER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEATH_THE_PRICE_OF_POWER_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_ACT_OF_MALICE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DEATH_ACT_OF_MALICE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEATH_ACT_OF_MALICE_OPTION_0_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEATH_ACT_OF_MALICE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DEATH_ACT_OF_MALICE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEATH_ACT_OF_MALICE_OPTION_1_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_NO_SIGNS_OF_LIFE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_NO_SIGNS_OF_LIFE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_NO_SIGNS_OF_LIFE_OPTION_0_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_NO_SIGNS_OF_LIFE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_NO_SIGNS_OF_LIFE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_NO_SIGNS_OF_LIFE_OPTION_1_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_0_CHARACTER_2",
            "BONUS_EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_0_CHARACTER_3"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_CRUEL",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_1_CHARACTER_2",
            "BONUS_EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_1_CHARACTER_3"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_CRUEL",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_2_CHARACTER_0",
            "BONUS_DOOM_CHARACTER",
            "BONUS_EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_2_CHARACTER_3"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_FRAGILE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_FRAGILE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_FRAGILE_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_FRAGILE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_FRAGILE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_FRAGILE_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_NATAL_ASTROLOGER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_NATAL_ASTROLOGER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_NATAL_ASTROLOGER_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_NATAL_ASTROLOGER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_NATAL_ASTROLOGER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_NATAL_ASTROLOGER_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_NATAL_ASTROLOGER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_NATAL_ASTROLOGER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_NATAL_ASTROLOGER_OPTION_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_JOY_AND_PAIN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_JOY_AND_PAIN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CHILD_JOY_AND_PAIN_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_JOY_AND_PAIN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_JOY_AND_PAIN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CHILD_JOY_AND_PAIN_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_THE_CALLING_OPTION_0",
        "Text": "TEXT_EVENTOPTION_HEIR_THE_CALLING_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ADULTHOOD_THE_CALLING_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_THE_CALLING_OPTION_1",
        "Text": "TEXT_EVENTOPTION_HEIR_THE_CALLING_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ADULTHOOD_THE_CALLING_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_KILLED_IN_ACTION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_KILLED_IN_ACTION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_KILLED_IN_ACTION_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_KILLED_IN_ACTION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_KILLED_IN_ACTION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_KILLED_IN_ACTION_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_KILLED_IN_ACTION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_KILLED_IN_ACTION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_KILLED_IN_ACTION_OPTION_2",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_COMMANDER"
      },
      {
        "zType": "EVENTOPTION_CHILD_ENLISTMENT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_ENLISTMENT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_ENLISTMENT_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_ENLISTMENT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_ENLISTMENT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_ENLISTMENT_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_ENLISTMENT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_ENLISTMENT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_ENLISTMENT_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_COMMON_LOVE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_COMMON_LOVE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_COMMON_LOVE_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_COMMON_LOVE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_COMMON_LOVE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_COMMON_LOVE_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_CHILD_COMMON_LOVE_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_CHILD_COMMON_LOVE_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_STRONG_OPINIONS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_STRONG_OPINIONS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_STRONG_OPINIONS_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_STRONG_OPINIONS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_STRONG_OPINIONS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_STRONG_OPINIONS_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_STRONG_OPINIONS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_STRONG_OPINIONS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_STRONG_OPINIONS_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_WISDOM"
      },
      {
        "zType": "EVENTOPTION_CHILD_BIG_QUESTIONS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_BIG_QUESTIONS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_BIG_QUESTIONS_OPTION_0_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_BITTER",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_CHILD_BIG_QUESTIONS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_BIG_QUESTIONS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_BIG_QUESTIONS_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_BIG_QUESTIONS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_BIG_QUESTIONS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_BIG_QUESTIONS_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_BRAVE"
      },
      {
        "zType": "EVENTOPTION_CHILD_PETTY_CRIMES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_PETTY_CRIMES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_PETTY_CRIMES_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_PETTY_CRIMES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_PETTY_CRIMES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_PETTY_CRIMES_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_PETTY_CRIMES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_PETTY_CRIMES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_PETTY_CRIMES_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_DISCIPLINE"
      },
      {
        "zType": "EVENTOPTION_CHILD_THE_PUPPIES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_THE_PUPPIES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_THE_PUPPIES_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_THE_PUPPIES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_THE_PUPPIES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_THE_PUPPIES_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_THE_PUPPIES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_THE_PUPPIES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_THE_PUPPIES_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_AFFAIRS_OF_THE_CITY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_AFFAIRS_OF_THE_CITY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_AFFAIRS_OF_THE_CITY_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_AFFAIRS_OF_THE_CITY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_AFFAIRS_OF_THE_CITY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_AFFAIRS_OF_THE_CITY_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_WISE_INVESTMENTS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_WISE_INVESTMENTS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_WISE_INVESTMENTS_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_WISE_INVESTMENTS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_WISE_INVESTMENTS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_WISE_INVESTMENTS_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_WITH_CHILD_M_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_WITH_CHILD_M_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_WITH_CHILD_M_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_WITH_CHILD_M_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_WITH_CHILD_M_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_WITH_CHILD_M_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_CHILD_WITH_CHILD_M_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_DISCIPLINE"
      },
      {
        "zType": "EVENTOPTION_CHILD_THE_BIRTHDAY_GIFT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_THE_BIRTHDAY_GIFT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_THE_BIRTHDAY_GIFT_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_THE_BIRTHDAY_GIFT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_THE_BIRTHDAY_GIFT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_THE_BIRTHDAY_GIFT_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_THE_BIRTHDAY_GIFT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_THE_BIRTHDAY_GIFT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_THE_BIRTHDAY_GIFT_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_PROSPEROUS"
      },
      {
        "zType": "EVENTOPTION_CHILD_FALSE_ACCUSATION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_FALSE_ACCUSATION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_FALSE_ACCUSATION_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_FALSE_ACCUSATION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_FALSE_ACCUSATION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_FALSE_ACCUSATION_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_FALSE_ACCUSATION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_FALSE_ACCUSATION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_FALSE_ACCUSATION_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_0_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_GREEDY",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_1_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_GREEDY",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_INSPIRING"
      },
      {
        "zType": "EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_3",
        "Text": "TEXT_EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_3"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_FEATS_OF_VALOR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_FEATS_OF_VALOR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_FEATS_OF_VALOR_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_FEATS_OF_VALOR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_FEATS_OF_VALOR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_FEATS_OF_VALOR_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_FEATS_OF_VALOR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_FEATS_OF_VALOR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_FEATS_OF_VALOR_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_0_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_RUTHLESS",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_1_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_RUTHLESS",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_RUTHLESS",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_3",
        "Text": "TEXT_EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_3_CHARACTER_0",
            "BONUS_KILL_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_ELOPED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_ELOPED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_ELOPED_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_CHILD_ELOPED_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_CHILD_ELOPED_OPTION_0_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_ELOPED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_ELOPED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_ELOPED_OPTION_1",
            "BONUS_EVENTOPTION_CHILD_ELOPED_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_CHILD_ELOPED_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_ELOPED_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHILD_ELOPED_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_ELOPED_OPTION_2",
            "BONUS_EVENTOPTION_CHILD_ELOPED_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_DISCIPLINE"
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_QUESTION_OF_SUCCESSION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_QUESTION_OF_SUCCESSION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_A_QUESTION_OF_SUCCESSION_OPTION_0_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_A_QUESTION_OF_SUCCESSION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_A_QUESTION_OF_SUCCESSION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_A_QUESTION_OF_SUCCESSION_OPTION_1_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_A_QUESTION_OF_SUCCESSION_OPTION_1_CHARACTER_3"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DOWNWARD_SPIRAL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_DOWNWARD_SPIRAL_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_DOWNWARD_SPIRAL_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_TRAIT_DOWNWARD_SPIRAL_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DOWNWARD_SPIRAL_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_DOWNWARD_SPIRAL_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_DOWNWARD_SPIRAL_OPTION_1",
            "BONUS_EVENTOPTION_TRAIT_DOWNWARD_SPIRAL_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_0",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_1",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_1_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_2",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_2_CITY"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_CHARISMA"
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_RETURN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_RETURN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_THE_RETURN_OPTION_0",
            "BONUS_EVENTOPTION_TRAIT_THE_RETURN_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_RETURN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_RETURN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_THE_RETURN_OPTION_1",
            "BONUS_EVENTOPTION_TRAIT_THE_RETURN_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_1",
            "BONUS_EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_2",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_ROBUST"
      },
      {
        "zType": "EVENTOPTION_TRAIT_REVENANTS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_REVENANTS_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_REVENANTS_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_REVENANTS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_REVENANTS_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAIT_REVENANTS_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_WISDOM_WITH_AGE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LEADER_WISDOM_WITH_AGE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_LEADER_WISDOM_WITH_AGE_OPTION_0_CHARACTER_1",
            "BONUS_FREE_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_WISDOM_WITH_AGE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LEADER_WISDOM_WITH_AGE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LEADER_WISDOM_WITH_AGE_OPTION_1",
            "BONUS_EVENTOPTION_LEADER_WISDOM_WITH_AGE_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_0",
            "NONE",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_RUTHLESS",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_1",
            "BONUS_EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_1_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_RUTHLESS",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_2",
            "BONUS_DOOM_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_0",
            "BONUS_EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_0_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_1",
            "BONUS_EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_2",
        "Text": "TEXT_EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_2",
            "BONUS_EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_2_CHARACTER_2"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_DISCIPLINE"
      },
      {
        "zType": "EVENTOPTION_LEADER_TWILIGHT_YEARS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LEADER_TWILIGHT_YEARS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LEADER_TWILIGHT_YEARS_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_LEADER_TWILIGHT_YEARS_OPTION_0_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_TWILIGHT_YEARS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LEADER_TWILIGHT_YEARS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_LEADER_TWILIGHT_YEARS_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_LEADER_TWILIGHT_YEARS_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_THE_HEIRS_CUP_OPTION_0",
        "EventLinkAdd": "EVENTLINK_THE_HEIRS_CUP_START",
        "Text": "TEXT_EVENTOPTION_LEADER_THE_HEIRS_CUP_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_GAIN_CHARISMA",
            "BONUS_EVENTOPTION_LEADER_THE_HEIRS_CUP_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_THE_HEIRS_CUP_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LEADER_THE_HEIRS_CUP_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LEADER_THE_HEIRS_CUP_OPTION_1",
            "BONUS_EVENTOPTION_LEADER_THE_HEIRS_CUP_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_THE_HEIRS_CUP_POISONED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LEADER_THE_HEIRS_CUP_POISONED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_DOOM_CHARACTER",
            "BONUS_EVENTOPTION_LEADER_THE_HEIRS_CUP_POISONED_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_THE_HEIRS_CUP_POISONED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LEADER_THE_HEIRS_CUP_POISONED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_LEADER_THE_HEIRS_CUP_POISONED_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_1",
            "BONUS_DECLARE_WAR_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_2",
        "Text": "TEXT_EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_DIPLOMAT"
      },
      {
        "zType": "EVENTOPTION_LEADER_BIOGRAPHY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LEADER_BIOGRAPHY_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_LEADER_BIOGRAPHY_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_BIOGRAPHY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LEADER_BIOGRAPHY_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_LEADER_BIOGRAPHY_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_BIOGRAPHY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_LEADER_BIOGRAPHY_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_LEADER_BIOGRAPHY_OPTION_2"
        },
        "LeaderSubject": "SUBJECT_SCHEMER"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_NO_SMALL_FAVOR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_NO_SMALL_FAVOR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_MONEY_LOSS_AVERAGE",
            "NONE",
            "BONUS_DISCONTENT_LOSS_TINY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_NO_SMALL_FAVOR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_NO_SMALL_FAVOR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_NO_SMALL_FAVOR_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_XP_CHARACTER_SMALL",
            "BONUS_EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_2",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_DEATH_IN_THE_FAMILY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_DEATH_IN_THE_FAMILY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_DEATH_IN_THE_FAMILY_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_DEATH_IN_THE_FAMILY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_DEATH_IN_THE_FAMILY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_DEATH_IN_THE_FAMILY_OPTION_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_DEATH_IN_THE_FAMILY_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_SPARK_OPTION_0",
        "EventLinkStart": "EVENTLINK_A_SPARK_01",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_SPARK_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_XP_CHARACTER_AVERAGE",
            "NONE",
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_SPARK_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_SPARK_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_GIVE_TRAIT_LOYAL",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SOMETHING_REAL_OPTION_0",
        "EventLinkStart": "EVENTLINK_A_SPARK_02",
        "Text": "TEXT_EVENTOPTION_SOMETHING_REAL_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_XP_CHARACTER_AVERAGE",
            "BONUS_EVENTOPTION_SOMETHING_REAL_OPTION_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SOMETHING_REAL_OPTION_1",
        "Text": "TEXT_EVENTOPTION_SOMETHING_REAL_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SOMETHING_REAL_OPTION_1",
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_0_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_0_CHARACTER_2"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_DEBAUCHED",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_1_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_1_CHARACTER_2"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_DEBAUCHED",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_2",
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_2_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_2_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_0_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_1",
            "BONUS_EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_2",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_TIME_FOR_REJOICING_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STUDY_TIME_FOR_REJOICING_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STUDY_TIME_FOR_REJOICING_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_TIME_FOR_REJOICING_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STUDY_TIME_FOR_REJOICING_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STUDY_TIME_FOR_REJOICING_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATED_CHILD_RETURNS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATED_CHILD_RETURNS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_CULTURE_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATED_CHILD_RETURNS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATED_CHILD_RETURNS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GRADUATED_CHILD_RETURNS_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_0_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_2",
            "BONUS_EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_NOT_WITHOUT_RISK_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STUDY_NOT_WITHOUT_RISK_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_GIVE_TRAIT_MOURNING"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_NOT_WITHOUT_RISK_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STUDY_NOT_WITHOUT_RISK_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_STUDY_NOT_WITHOUT_RISK_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_EXCELLENT_STUDENT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STUDY_EXCELLENT_STUDENT_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_STUDY_EXCELLENT_STUDENT_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_EXCELLENT_STUDENT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STUDY_EXCELLENT_STUDENT_OPTION_1",
        "aeBonuses": {
          "zValue": "NONEVENTOPTION_STUDY_EXCELLENT_STUDENT_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_WILDERNESS_SURVIVAL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STUDY_WILDERNESS_SURVIVAL_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_STUDY_WILDERNESS_SURVIVAL_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_WILDERNESS_SURVIVAL_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STUDY_WILDERNESS_SURVIVAL_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_STUDY_WILDERNESS_SURVIVAL_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_MASTER_ORATION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STUDY_MASTER_ORATION_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_STUDY_MASTER_ORATION_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_MASTER_ORATION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STUDY_MASTER_ORATION_OPTION_1",
        "aeBonuses": {
          "zValue": "NONEVENTOPTION_STUDY_MASTER_ORATION_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_MASTER_ORATION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_STUDY_MASTER_ORATION_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_STUDY_MASTER_ORATION_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_0",
            "BONUS_EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_2",
            "BONUS_EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_GOLDEN_VOICE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STUDY_GOLDEN_VOICE_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_STUDY_GOLDEN_VOICE_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_GOLDEN_VOICE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STUDY_GOLDEN_VOICE_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_STUDY_GOLDEN_VOICE_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_SPENDTHRIFT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STUDY_SPENDTHRIFT_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_XP_CHARACTER_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_SPENDTHRIFT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STUDY_SPENDTHRIFT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_STUDY_SPENDTHRIFT_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_THE_MISEDUCATION_OF_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STUDY_THE_MISEDUCATION_OF_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STUDY_THE_MISEDUCATION_OF_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_THE_MISEDUCATION_OF_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STUDY_THE_MISEDUCATION_OF_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STUDY_THE_MISEDUCATION_OF_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_STUDY_THE_MISEDUCATION_OF_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_0_CHARACTER_0",
            "BONUS_MONEY_GAIN_TINY",
            "BONUS_EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_0_FAMILY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_1_CHARACTER_0",
            "BONUS_GIVE_TRAIT_ROMANTIC",
            "BONUS_EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_1_CHARACTER_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_2_CHARACTER_3"
          ]
        },
        "LeaderSubject": "SUBJECT_SCHEMER"
      },
      {
        "zType": "EVENTOPTION_GRADUATE_TAKING_THE_MANTLE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATE_TAKING_THE_MANTLE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GRADUATE_TAKING_THE_MANTLE_OPTION_0_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_GRADUATE_TAKING_THE_MANTLE_OPTION_0_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATE_TAKING_THE_MANTLE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATE_TAKING_THE_MANTLE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GRADUATE_TAKING_THE_MANTLE_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_GRADUATE_TAKING_THE_MANTLE_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_GRADUATE_TAKING_THE_MANTLE_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATE_A_RAISED_VOICE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATE_A_RAISED_VOICE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_GIVE_TRAIT_BOLD",
            "BONUS_EVENTOPTION_GRADUATE_A_RAISED_VOICE_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATE_A_RAISED_VOICE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATE_A_RAISED_VOICE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_GIVE_TRAIT_SLIGHTED",
            "BONUS_GAIN_DISCIPLINE",
            "BONUS_DISCONTENT_GAIN_MINIMAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATE_A_RAISED_VOICE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_GRADUATE_A_RAISED_VOICE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GRADUATE_A_RAISED_VOICE_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEAR_PARENT_TACTICS_NO",
        "Text": "TEXT_EVENTOPTION_DEAR_PARENT_TACTICS_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEAR_PARENT_TACTICS_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEAR_PARENT_TACTICS_YES",
        "Text": "TEXT_EVENTOPTION_DEAR_PARENT_TACTICS_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DEAR_PARENT_TACTICS_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEAR_PARENT_RHETORIC_NO",
        "Text": "TEXT_EVENTOPTION_DEAR_PARENT_RHETORIC_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEAR_PARENT_RHETORIC_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEAR_PARENT_RHETORIC_YES",
        "Text": "TEXT_EVENTOPTION_DEAR_PARENT_RHETORIC_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DEAR_PARENT_RHETORIC_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEAR_PARENT_COMMERCE_NO",
        "Text": "TEXT_EVENTOPTION_DEAR_PARENT_COMMERCE_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEAR_PARENT_COMMERCE_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEAR_PARENT_COMMERCE_YES",
        "Text": "TEXT_EVENTOPTION_DEAR_PARENT_COMMERCE_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DEAR_PARENT_COMMERCE_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEAR_PARENT_PHILOSOPHY_NO",
        "Text": "TEXT_EVENTOPTION_DEAR_PARENT_PHILOSOPHY_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DEAR_PARENT_PHILOSOPHY_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DEAR_PARENT_PHILOSOPHY_YES",
        "Text": "TEXT_EVENTOPTION_DEAR_PARENT_PHILOSOPHY_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DEAR_PARENT_PHILOSOPHY_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TACTICS_TO_PHILOSOPHY_NO",
        "Text": "TEXT_EVENTOPTION_TACTICS_TO_PHILOSOPHY_NO",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TACTICS_TO_PHILOSOPHY_NO"
        }
      },
      {
        "zType": "EVENTOPTION_TACTICS_TO_PHILOSOPHY_YES",
        "Text": "TEXT_EVENTOPTION_TACTICS_TO_PHILOSOPHY_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TACTICS_TO_PHILOSOPHY_YES"
        }
      },
      {
        "zType": "EVENTOPTION_PHILOSOPHY_TO_COMMERCE_PUNISH",
        "Text": "TEXT_EVENTOPTION_PHILOSOPHY_TO_COMMERCE_PUNISH",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PHILOSOPHY_TO_COMMERCE_PUNISH"
        }
      },
      {
        "zType": "EVENTOPTION_PHILOSOPHY_TO_COMMERCE_CHANGE",
        "Text": "TEXT_EVENTOPTION_PHILOSOPHY_TO_COMMERCE_CHANGE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PHILOSOPHY_TO_COMMERCE_CHANGE"
        }
      },
      {
        "zType": "EVENTOPTION_PHILOSOPHY_TO_COMMERCE_TUTOR",
        "Text": "TEXT_EVENTOPTION_PHILOSOPHY_TO_COMMERCE_TUTOR",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PHILOSOPHY_TO_COMMERCE_TUTOR"
        }
      },
      {
        "zType": "EVENTOPTION_A_REMARKABLE_YOUTH_NO",
        "Text": "TEXT_EVENTOPTION_A_REMARKABLE_YOUTH_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_A_REMARKABLE_YOUTH_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_A_REMARKABLE_YOUTH_YES",
        "Text": "TEXT_EVENTOPTION_A_REMARKABLE_YOUTH_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_A_REMARKABLE_YOUTH_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CAUSE_FOR_WORRY_IGNORE",
        "Text": "TEXT_EVENTOPTION_CAUSE_FOR_WORRY_IGNORE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CAUSE_FOR_WORRY_IGNORE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CAUSE_FOR_WORRY_INVESTIGATE",
        "EventLinkAdd": "EVENTLINK_CAUSE_FOR_WORRY_INVESTIGATE",
        "Text": "TEXT_EVENTOPTION_CAUSE_FOR_WORRY_INVESTIGATE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CAUSE_FOR_WORRY_INVESTIGATE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOVE_BIRDS_RUMORS_IGNORE",
        "EventLinkAdd": "EVENTLINK_LOVE_BIRDS_RUMORS",
        "Text": "TEXT_EVENTOPTION_LOVE_BIRDS_RUMORS_IGNORE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_LOVE_BIRDS_RUMORS_IGNORE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOVE_BIRDS_RUMORS_END",
        "EventLinkAdd": "EVENTLINK_LOVE_BIRDS_RUMORS",
        "Text": "TEXT_EVENTOPTION_LOVE_BIRDS_RUMORS_END",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_LOVE_BIRDS_RUMORS_END"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_INFIDELITY_IGNORE",
        "Text": "TEXT_EVENTOPTION_INFIDELITY_IGNORE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_INFIDELITY_IGNORE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_INFIDELITY_IMPRISON",
        "Text": "TEXT_EVENTOPTION_INFIDELITY_IMPRISON",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_INFIDELITY_IMPRISON",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLEA_FOR_MERCY_YES",
        "Text": "TEXT_EVENTOPTION_PLEA_FOR_MERCY_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PLEA_FOR_MERCY_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PLEA_FOR_MERCY_NO",
        "Text": "TEXT_EVENTOPTION_PLEA_FOR_MERCY_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_PLEA_FOR_MERCY_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GOWNS_OF_SILK_NO",
        "Text": "TEXT_EVENTOPTION_GOWNS_OF_SILK_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GOWNS_OF_SILK_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GOWNS_OF_SILK_YES",
        "Text": "TEXT_EVENTOPTION_GOWNS_OF_SILK_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_GOWNS_OF_SILK_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_FIRST_YES",
        "Text": "TEXT_EVENTOPTION_FAMILY_FIRST_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_FIRST_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_FIRST_NO",
        "Text": "TEXT_EVENTOPTION_FAMILY_FIRST_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAMILY_FIRST_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WORD_OF_A_COUP_INVESTIGATE",
        "EventLinkAdd": "EVENTLINK_WORD_OF_A_COUP_INVESTIGATE",
        "Text": "TEXT_EVENTOPTION_WORD_OF_A_COUP_INVESTIGATE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_HUGE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_WORD_OF_A_COUP_IGNORE",
        "EventLinkAdd": "EVENTLINK_WORD_OF_A_COUP_IGNORE",
        "Text": "TEXT_EVENTOPTION_WORD_OF_A_COUP_IGNORE",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_WORD_OF_A_COUP_PLOTS_AND_BETRAYALS_IMPRISON",
        "Text": "TEXT_EVENTOPTION_WORD_OF_A_COUP_PLOTS_AND_BETRAYALS_IMPRISON",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLOTS_AND_BETRAYALS_IMPRISON",
            "NONE",
            "BONUS_EVENTOPTION_PLOTS_AND_BETRAYALS_IMPRISON"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WORD_OF_A_COUP_PLOTS_AND_BETRAYALS_PUNISH",
        "Text": "TEXT_EVENTOPTION_WORD_OF_A_COUP_PLOTS_AND_BETRAYALS_PUNISH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PLOTS_AND_BETRAYALS_PUNISH",
            "BONUS_MONEY_GAIN_AVERAGE",
            "BONUS_EVENTOPTION_PLOTS_AND_BETRAYALS_PUNISH"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_EXILE",
        "Text": "TEXT_EVENTOPTION_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_EXILE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WORD_OF_A_COUP_THE_COUP_SUCCEEDS",
            "BONUS_EVENTOPTION_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_EXILE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_DIE",
        "Text": "TEXT_EVENTOPTION_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_DIE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WORD_OF_A_COUP_THE_COUP_SUCCEEDS",
            "BONUS_KILL_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_UNHAPPY_SIBLING_YES",
        "Text": "TEXT_EVENTOPTION_UNHAPPY_SIBLING_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_UNHAPPY_SIBLING_NO",
        "Text": "TEXT_EVENTOPTION_UNHAPPY_SIBLING_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_UNHAPPY_SIBLING_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DATE_NIGHT_NO",
        "Text": "TEXT_EVENTOPTION_DATE_NIGHT_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DATE_NIGHT_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DATE_NIGHT_YES",
        "Text": "TEXT_EVENTOPTION_DATE_NIGHT_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_DATE_NIGHT_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DOMESTIC_DISPUTE_YES",
        "Text": "TEXT_EVENTOPTION_DOMESTIC_DISPUTE_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DOMESTIC_DISPUTE_YES_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_DOMESTIC_DISPUTE_YES_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DOMESTIC_DISPUTE_NO",
        "Text": "TEXT_EVENTOPTION_DOMESTIC_DISPUTE_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DOMESTIC_DISPUTE_NO_CHARACTER_0",
            "BONUS_EVENTOPTION_DOMESTIC_DISPUTE_NO_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SIGNS_OF_LUNACY_REMOVE",
        "Text": "TEXT_EVENTOPTION_SIGNS_OF_LUNACY_REMOVE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SIGNS_OF_LUNACY_REMOVE_CHARACTER_1",
            "BONUS_EVENTOPTION_SIGNS_OF_LUNACY_REMOVE_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SIGNS_OF_LUNACY_PHYSICIANS",
        "Text": "TEXT_EVENTOPTION_SIGNS_OF_LUNACY_PHYSICIANS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SIGNS_OF_LUNACY_PHYSICIANS",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WORRISOME_MATCH_ALLOW",
        "Text": "TEXT_EVENTOPTION_WORRISOME_MATCH_ALLOW",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WORRISOME_MATCH_ALLOW_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_WORRISOME_MATCH_ALLOW_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WORRISOME_MATCH_PREVENT",
        "Text": "TEXT_EVENTOPTION_WORRISOME_MATCH_PREVENT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WORRISOME_MATCH_PREVENT",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_IMPUDENT_MATCH_STOP",
        "Text": "TEXT_EVENTOPTION_IMPUDENT_MATCH_STOP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_IMPUDENT_MATCH_STOP_CHARACTER_0",
            "BONUS_EVENTOPTION_IMPUDENT_MATCH_STOP_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_IMPUDENT_MATCH_ALLOW",
        "Text": "TEXT_EVENTOPTION_IMPUDENT_MATCH_ALLOW",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_IMPUDENT_MATCH_ALLOW_CHARACTER",
            "BONUS_EVENTOPTION_IMPUDENT_MATCH_ALLOW_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_A_LITTLE_PUSHBACK_YES",
        "Text": "TEXT_EVENTOPTION_A_LITTLE_PUSHBACK_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_A_LITTLE_PUSHBACK_YES_CHARACTER_1",
            "BONUS_EVENTOPTION_A_LITTLE_PUSHBACK_YES_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_A_LITTLE_PUSHBACK_NO",
        "Text": "TEXT_EVENTOPTION_A_LITTLE_PUSHBACK_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_A_LITTLE_PUSHBACK_NO_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_A_LITTLE_PUSHBACK_NO_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_VERY_CHARMING_YES",
        "Text": "TEXT_EVENTOPTION_VERY_CHARMING_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_VERY_CHARMING_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_VERY_CHARMING_NO",
        "Text": "TEXT_EVENTOPTION_VERY_CHARMING_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_VERY_CHARMING_NO_CHARACTER_0",
            "BONUS_EVENTOPTION_VERY_CHARMING_NO_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOVE_AFFAIR_KEEP",
        "Text": "TEXT_EVENTOPTION_LOVE_AFFAIR_KEEP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_LOVE_AFFAIR_KEEP"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOVE_AFFAIR_END",
        "Text": "TEXT_EVENTOPTION_LOVE_AFFAIR_END",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LOVE_AFFAIR_END_CHARACTER_0",
            "BONUS_EVENTOPTION_LOVE_AFFAIR_END_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_FRIENDLY_VISIT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STUDY_FRIENDLY_VISIT_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_XP_CHARACTER_LARGE"
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_FRIENDLY_VISIT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STUDY_FRIENDLY_VISIT_OPTION_1",
        "aeBonuses": {
          "zValue": "NONEVENTOPTION_STUDY_FRIENDLY_VISIT_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATE_A_FAMILIAR_FACE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATE_A_FAMILIAR_FACE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_LARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATE_A_FAMILIAR_FACE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATE_A_FAMILIAR_FACE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_GAIN_DISCIPLINE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATE_THE_RETURN_OF_CHARACTER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATE_THE_RETURN_OF_CHARACTER_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GRADUATE_THE_RETURN_OF_CHARACTER_OPTION_0_CHARACTER"
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATE_THE_RETURN_OF_CHARACTER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATE_THE_RETURN_OF_CHARACTER_OPTION_1",
        "aeBonuses": {
          "zValue": "NONEVENTOPTION_GRADUATE_THE_RETURN_OF_CHARACTER_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_A_SCOUNDREL_EXILE",
        "Text": "TEXT_EVENTOPTION_A_SCOUNDREL_EXILE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_A_SCOUNDREL_EXILE_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_A_SCOUNDREL_RESTORE",
        "Text": "TEXT_EVENTOPTION_A_SCOUNDREL_RESTORE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_A_SCOUNDREL_RESTORE_CHARACTER",
            "BONUS_EVENTOPTION_A_SCOUNDREL_RESTORE_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATION_A_CITY_CELEBRATES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATION_A_CITY_CELEBRATES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GRADUATION_A_CITY_CELEBRATES_OPTION_0_CHARACTER",
            "BONUS_EVENTOPTION_GRADUATION_A_CITY_CELEBRATES_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATION_A_CITY_CELEBERATES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATION_A_CITY_CELEBERATES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONEVENTOPTION_GRADUATION_A_CITY_CELEBERATES_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATION_HOMECOMING_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATION_HOMECOMING_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GRADUATION_HOMECOMING_OPTION_0_CHARACTER"
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATION_HOMECOMING_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATION_HOMECOMING_OPTION_1",
        "aeBonuses": {
          "zValue": "NONEVENTOPTION_GRADUATION_HOMECOMING_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_CHANGE_OF_HEART_STOP",
        "Text": "TEXT_EVENTOPTION_CHANGE_OF_HEART_STOP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHANGE_OF_HEART_STOP_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHANGE_OF_HEART_TALK",
        "EventLinkAdd": "EVENTLINK_CHANGE_OF_HEART_TALK",
        "Text": "TEXT_EVENTOPTION_CHANGE_OF_HEART_TALK",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_A_FRUSTRATING_OUTCOME_CUT_OFF",
        "Text": "TEXT_EVENTOPTION_A_FRUSTRATING_OUTCOME_CUT_OFF",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_A_FRUSTRATING_OUTCOME_CUT_OFF_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_A_FRUSTRATING_OUTCOME_FRUSTRATED",
        "Text": "TEXT_EVENTOPTION_A_FRUSTRATING_OUTCOME_FRUSTRATED",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_A_FRUSTRATING_OUTCOME_FRUSTRATED_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DISMISSAL_VASSALAGE",
        "Text": "TEXT_EVENTOPTION_DISMISSAL_VASSALAGE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DISMISSAL_VASSALAGE_CHARACTER_0",
            "BONUS_EVENTOPTION_DISMISSAL_VASSALAGE_CHARACTER_1",
            "BONUS_EVENTOPTION_DISMISSAL_VASSALAGE_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DISMISSAL_CENTRALIZATION",
        "Text": "TEXT_EVENTOPTION_DISMISSAL_CENTRALIZATION",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DISMISSAL_CENTRALIZATION_CHARACTER_0",
            "BONUS_EVENTOPTION_DISMISSAL_CENTRALIZATION_CHARACTER_1",
            "BONUS_EVENTOPTION_DISMISSAL_CENTRALIZATION_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DISMISSAL_NONE",
        "Text": "TEXT_EVENTOPTION_DISMISSAL_NONE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DISMISSAL_NONE_CHARACTER_0",
            "BONUS_EVENTOPTION_DISMISSAL_NONE_CHARACTER_1",
            "BONUS_EVENTOPTION_DISMISSAL_NONE_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_0",
        "EventLinkAdd": "EVENTLINK_SPECIAL_RECOGNITION_01",
        "Text": "TEXT_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_0_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_HIGH_COURAGE"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_2",
        "EventLinkStart": "EVENTLINK_SPECIAL_RECOGNITION_02",
        "Text": "TEXT_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_FIERCE"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_03_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_03_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SPECIAL_RECOGNITION_03_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_03_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_03_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SPECIAL_RECOGNITION_03_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_03_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_03_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SPECIAL_RECOGNITION_03_OPTION_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_DIPLOMAT"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_A_RULER_FALLS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_A_RULER_FALLS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_A_RULER_FALLS_OPTION_0_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_A_RULER_FALLS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_A_RULER_FALLS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_A_RULER_FALLS_OPTION_1_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_A_RULER_FALLS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_A_RULER_FALLS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_A_RULER_FALLS_OPTION_2_CHARACTER_0",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_CUNNING"
      },
      {
        "zType": "EVENTOPTION_CULTURE_ORIGIN_OF_THE_STATE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_ORIGIN_OF_THE_STATE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_ORIGIN_OF_THE_STATE_OPTION_0_CITY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_ORIGIN_OF_THE_STATE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CULTURE_ORIGIN_OF_THE_STATE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_ORIGIN_OF_THE_STATE_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_ORIGIN_OF_THE_STATE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CULTURE_ORIGIN_OF_THE_STATE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_ORIGIN_OF_THE_STATE_OPTION_2_CHARACTER"
          ]
        },
        "LeaderSubject": "SUBJECT_SCHOLAR"
      },
      {
        "zType": "EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_0",
        "EventLinkStart": "EVENTLINK_CULTURE_A_FIERY_RIDE_01",
        "Text": "TEXT_EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_2",
        "EventLinkStart": "EVENTLINK_CULTURE_A_FIERY_RIDE_01",
        "Text": "TEXT_EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_3",
        "EventLinkStart": "EVENTLINK_CULTURE_A_FIERY_RIDE_01",
        "Text": "TEXT_EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_3_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_4",
        "EventLinkStart": "EVENTLINK_CULTURE_A_FIERY_RIDE_02",
        "Text": "TEXT_EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_4",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_4_CHARACTER"
          ]
        },
        "LeaderSubject": "SUBJECT_EQUESTRIAN"
      },
      {
        "zType": "EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_5",
        "Text": "TEXT_EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_5",
        "aeBonuses": {
          "zValue": [
            "NONEVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_5",
            "NONEVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_5"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_PRIZE_HORSE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_PRIZE_HORSE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_PRIZE_HORSE_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_THE_LOSER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_THE_LOSER_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_XP_CHARACTER_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_CELEBRATION_CHAMPIONS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_CELEBRATION_CHAMPIONS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_CELEBRATION_CHAMPIONS_OPTION_0_CITY",
            "BONUS_EVENTOPTION_CULTURE_CELEBRATION_CHAMPIONS_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_RIOTS_IN_THE_STREETS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_RIOTS_IN_THE_STREETS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_RIOTS_IN_THE_STREETS_OPTION_0_CITY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_RIOTS_IN_THE_STREETS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_RIOTS_IN_THE_STREETS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_RIOTS_IN_THE_STREETS_OPTION_1_CITY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_RIOTS_IN_THE_STREETS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_RIOTS_IN_THE_STREETS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_RIOTS_IN_THE_STREETS_OPTION_2_CITY",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_HONEST"
      },
      {
        "zType": "EVENTOPTION_STUDY_TACTICS_ARCHETYPES",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_HERO",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_COMMANDER",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_TACTICIAN",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_ZEALOT",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_SCHEMER",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_RHETORIC_ARCHETYPES",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_JUDGE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_DIPLOMAT",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_HERO",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_ORATOR",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_SCHOLAR",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_COMMERCE_ARCHETYPES",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_ORATOR",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_BUILDER",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_COMMANDER",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_SCHEMER",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_DIPLOMAT",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STUDY_PHILOSOPHY_ARCHETYPES",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_TACTICIAN",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_SCHOLAR",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_ZEALOT",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_JUDGE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_BUILDER",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ARCHETYPE_HERO",
        "Text": "TEXT_EVENTOPTION_ARCHETYPE_HERO",
        "aeBonuses": {
          "zValue": "BONUS_SET_HERO_ARCHETYPE"
        }
      },
      {
        "zType": "EVENTOPTION_ARCHETYPE_COMMANDER",
        "Text": "TEXT_EVENTOPTION_ARCHETYPE_COMMANDER",
        "aeBonuses": {
          "zValue": "BONUS_SET_COMMANDER_ARCHETYPE"
        }
      },
      {
        "zType": "EVENTOPTION_ARCHETYPE_TACTICIAN",
        "Text": "TEXT_EVENTOPTION_ARCHETYPE_TACTICIAN",
        "aeBonuses": {
          "zValue": "BONUS_SET_TACTICIAN_ARCHETYPE"
        }
      },
      {
        "zType": "EVENTOPTION_ARCHETYPE_ZEALOT",
        "Text": "TEXT_EVENTOPTION_ARCHETYPE_ZEALOT",
        "aeBonuses": {
          "zValue": "BONUS_SET_ZEALOT_ARCHETYPE"
        }
      },
      {
        "zType": "EVENTOPTION_ARCHETYPE_SCHEMER",
        "Text": "TEXT_EVENTOPTION_ARCHETYPE_SCHEMER",
        "aeBonuses": {
          "zValue": "BONUS_SET_SCHEMER_ARCHETYPE"
        }
      },
      {
        "zType": "EVENTOPTION_ARCHETYPE_ORATOR",
        "Text": "TEXT_EVENTOPTION_ARCHETYPE_ORATOR",
        "aeBonuses": {
          "zValue": "BONUS_SET_ORATOR_ARCHETYPE"
        }
      },
      {
        "zType": "EVENTOPTION_ARCHETYPE_JUDGE",
        "Text": "TEXT_EVENTOPTION_ARCHETYPE_JUDGE",
        "aeBonuses": {
          "zValue": "BONUS_SET_JUDGE_ARCHETYPE"
        }
      },
      {
        "zType": "EVENTOPTION_ARCHETYPE_BUILDER",
        "Text": "TEXT_EVENTOPTION_ARCHETYPE_BUILDER",
        "aeBonuses": {
          "zValue": "BONUS_SET_BUILDER_ARCHETYPE"
        }
      },
      {
        "zType": "EVENTOPTION_ARCHETYPE_SCHOLAR",
        "Text": "TEXT_EVENTOPTION_ARCHETYPE_SCHOLAR",
        "aeBonuses": {
          "zValue": "BONUS_SET_SCHOLAR_ARCHETYPE"
        }
      },
      {
        "zType": "EVENTOPTION_ARCHETYPE_DIPLOMAT",
        "Text": "TEXT_EVENTOPTION_ARCHETYPE_DIPLOMAT",
        "aeBonuses": {
          "zValue": "BONUS_SET_DIPLOMAT_ARCHETYPE"
        }
      },
      {
        "zType": "EVENTOPTION_SCHEMER_SUCCESSION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_SCHEMER_SUCCESSION_OPTION_0"
      },
      {
        "zType": "EVENTOPTION_SCHEMER_SUCCESSION_SPOUSE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_SCHEMER_SUCCESSION_SPOUSE_OPTION_0"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_1_CITY"
          ]
        },
        "LeaderSubject": "SUBJECT_ELOQUENT"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PAY_TO_PLAY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_PAY_TO_PLAY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PAY_TO_PLAY_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_PAY_TO_PLAY_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PAY_TO_PLAY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_PAY_TO_PLAY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PAY_TO_PLAY_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PAY_TO_PLAY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_PAY_TO_PLAY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PAY_TO_PLAY_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_PAY_TO_PLAY_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_1_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_PROSPEROUS"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_SCHOLAR"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_PREEMPTIVE_STRIKE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_PREEMPTIVE_STRIKE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_PREEMPTIVE_STRIKE_OPTION_0_CHARACTER_0",
            "NONE",
            "BONUS_BARBARIAN_WAR_LEGITIMACY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_PREEMPTIVE_STRIKE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_PREEMPTIVE_STRIKE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_PREEMPTIVE_STRIKE_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_PREEMPTIVE_STRIKE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_PREEMPTIVE_STRIKE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_PREEMPTIVE_STRIKE_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_TACTICIAN"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_0_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_0_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_2_CHARACTER_1",
            "BONUS_XP_CHARACTER_SMALL"
          ]
        },
        "LeaderSubject": "SUBJECT_DEALMAKER"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_AFFAIRS_OF_THE_HEART_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_AFFAIRS_OF_THE_HEART_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_AFFAIRS_OF_THE_HEART_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_AFFAIRS_OF_THE_HEART_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_AFFAIRS_OF_THE_HEART_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_CIVICS_GAIN_SMALL",
            "BONUS_EVENTOPTION_CHARACTER_AFFAIRS_OF_THE_HEART_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_AFFAIRS_OF_THE_HEART_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_AFFAIRS_OF_THE_HEART_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_KILL_CHARACTER",
            "BONUS_EVENTOPTION_CHARACTER_AFFAIRS_OF_THE_HEART_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_RUTHLESS"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_PLAYER_SCHEMER"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_0_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_COMMANDER"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_WARMONGERS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_WARMONGERS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_WARMONGERS_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_WARMONGERS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_WARMONGERS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_WARMONGERS_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_WARMONGERS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_WARMONGERS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_WARMONGERS_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_WARMONGERS_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_0_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_VENGEFUL"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BIRTHRIGHT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BIRTHRIGHT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_BIRTHRIGHT_OPTION_0_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BIRTHRIGHT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BIRTHRIGHT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_BIRTHRIGHT_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BIRTHRIGHT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BIRTHRIGHT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_BIRTHRIGHT_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_POPULAR_HERO"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_0_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_ELOQUENT"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_ENEMY_COUNSEL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_ENEMY_COUNSEL_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_ENEMY_COUNSEL_OPTION_0_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_ENEMY_COUNSEL_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_ENEMY_COUNSEL_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_KILL_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_ENEMY_COUNSEL_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_ENEMY_COUNSEL_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_ENEMY_COUNSEL_OPTION_2_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_AUDITED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_AUDITED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_AUDITED_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_AUDITED_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_AUDITED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_AUDITED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_AUDITED_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_AUDITED_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_AUDITED_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_AUDITED_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_AUDITED_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_3",
        "Text": "TEXT_EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_3"
      },
      {
        "zType": "EVENTOPTION_LEADER_ASCENSION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LEADER_ASCENSION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_LEADER_ASCENSION_OPTION_0_CHARACTER",
            "BONUS_EVENTOPTION_LEADER_ASCENSION_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_ASCENSION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LEADER_ASCENSION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_LEADER_ASCENSION_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_ASCENSION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_LEADER_ASCENSION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LEADER_ASCENSION_OPTION_2_PLAYER",
            "NONE",
            "BONUS_EVENTOPTION_LEADER_ASCENSION_OPTION_2_CITY"
          ]
        },
        "LeaderSubject": "SUBJECT_HUMBLE"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_0_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_0_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_2_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_2_CHARACTER_2"
          ]
        },
        "LeaderSubject": "SUBJECT_CUNNING"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_LOYAL"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_3",
        "Text": "TEXT_EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_3_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_3_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_RUTHLESS"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_GREEDY_AMBITION",
        "Text": "TEXT_EVENTOPTION_CHARACTER_GREEDY_AMBITION",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_GREEDY_AMBITION"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_GREEDY_AMBITION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_GREEDY_AMBITION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_GREEDY_AMBITION_1"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_PYRAMIDS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_GREAT_ZIGGURAT",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_ORACLE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_HANGING_GARDENS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_NECROPOLIS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_ISHTAR_GATE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_LIGHTHOUSE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_APADANA",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_MAUSOLEUM",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_ACROPOLIS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_COLOSSUS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_MUSAEUM",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_CIRCUS_MAXIMUS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_PANTHEON",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_HAGIA_SOPHIA",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_GRAND_BAZAAR",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_PYRAMIDS",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_PYRAMIDS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_PYRAMIDS"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_GREAT_ZIGGURAT",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_GREAT_ZIGGURAT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_GREAT_ZIGGURAT"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_ORACLE",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_ORACLE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_ORACLE"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_HANGING_GARDENS",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_HANGING_GARDENS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_HANGING_GARDENS"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_NECROPOLIS",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_NECROPOLIS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_NECROPOLIS"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_ISHTAR_GATE",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_ISHTAR_GATE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_ISHTAR_GATE"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_LIGHTHOUSE",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_LIGHTHOUSE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_LIGHTHOUSE"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_APADANA",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_APADANA",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_APADANA"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_MAUSOLEUM",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_MAUSOLEUM",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_MAUSOLEUM"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_ACROPOLIS",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_ACROPOLIS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_ACROPOLIS"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_COLOSSUS",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_COLOSSUS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_COLOSSUS"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_MUSAEUM",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_MUSAEUM",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_MUSAEUM"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_CIRCUS_MAXIMUS",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_CIRCUS_MAXIMUS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_CIRCUS_MAXIMUS"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_PANTHEON",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_PANTHEON",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_PANTHEON"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_HAGIA_SOPHIA",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_HAGIA_SOPHIA",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_HAGIA_SOPHIA"
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_BUILDER_AMBITION_GRAND_BAZAAR",
        "Text": "TEXT_EVENTOPTION_CHARACTER_BUILDER_AMBITION_GRAND_BAZAAR",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CHARACTER_BUILDER_AMBITION_GRAND_BAZAAR"
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_ARCHETYPE",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_HERO",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_COMMANDER",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_TACTICIAN",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_ZEALOT",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_SCHEMER",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_ORATOR",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_JUDGE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_BUILDER",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_SCHOLAR",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_ARCHETYPE_DIPLOMAT",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXPLORING_ENDS",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_EXPLORING_ENDS_MONEY",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_EXPLORING_ENDS_SCIENCE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_EXPLORING_ENDS_LEGITIMACY",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_EXPLORING_ENDS_ORDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_EXPLORING_ENDS_GREAT_SOLDIER",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_EXPLORING_ENDS_BRAVE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_EXPLORING_ENDS_BLESSED",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_EXPLORING_ENDS_ZEALOT",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_EXPLORING_ENDS_EXPLORATION",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_EXPLORING_ENDS_FOUND_RELIGION",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXPLORING_ENDS_MONEY",
        "Text": "TEXT_EVENTOPTION_EXPLORING_ENDS_MONEY",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXPLORING_ENDS_MONEY"
        }
      },
      {
        "zType": "EVENTOPTION_EXPLORING_ENDS_SCIENCE",
        "Text": "TEXT_EVENTOPTION_EXPLORING_ENDS_SCIENCE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXPLORING_ENDS_SCIENCE"
        }
      },
      {
        "zType": "EVENTOPTION_EXPLORING_ENDS_LEGITIMACY",
        "Text": "TEXT_EVENTOPTION_EXPLORING_ENDS_LEGITIMACY",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXPLORING_ENDS_LEGITIMACY"
        }
      },
      {
        "zType": "EVENTOPTION_EXPLORING_ENDS_ORDERS",
        "Text": "TEXT_EVENTOPTION_EXPLORING_ENDS_ORDERS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXPLORING_ENDS_ORDERS"
        }
      },
      {
        "zType": "EVENTOPTION_EXPLORING_ENDS_GREAT_SOLDIER",
        "Text": "TEXT_EVENTOPTION_EXPLORING_ENDS_GREAT_SOLDIER",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXPLORING_ENDS_GREAT_SOLDIER"
        }
      },
      {
        "zType": "EVENTOPTION_EXPLORING_ENDS_BRAVE",
        "Text": "TEXT_EVENTOPTION_EXPLORING_ENDS_BRAVE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXPLORING_ENDS_GREAT_SOLDIER"
        }
      },
      {
        "zType": "EVENTOPTION_EXPLORING_ENDS_BLESSED",
        "Text": "TEXT_EVENTOPTION_EXPLORING_ENDS_BLESSED",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXPLORING_ENDS_BLESSED"
        }
      },
      {
        "zType": "EVENTOPTION_EXPLORING_ENDS_ZEALOT",
        "Text": "TEXT_EVENTOPTION_EXPLORING_ENDS_ZEALOT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXPLORING_ENDS_ZEALOT"
        }
      },
      {
        "zType": "EVENTOPTION_EXPLORING_ENDS_EXPLORATION",
        "Text": "TEXT_EVENTOPTION_EXPLORING_ENDS_EXPLORATION",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXPLORING_ENDS_EXPLORATION"
        }
      },
      {
        "zType": "EVENTOPTION_EXPLORING_ENDS_FOUND_RELIGION",
        "Text": "TEXT_EVENTOPTION_EXPLORING_ENDS_FOUND_RELIGION",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXPLORING_ENDS_FOUND_RELIGION"
        }
      },
      {
        "zType": "EVENTOPTION_EXPLORING_CONTINUES",
        "Text": "TEXT_EVENTOPTION_EXPLORING_CONTINUES",
        "aeBonuses": {
          "zValue": "BONUS_XP_CHARACTER_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_LEADER_DEATH",
        "Text": "TEXT_EVENTOPTION_LEADER_DEATH",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_CHOSEN_HEIR_YES",
        "Text": "TEXT_EVENTOPTION_FAMILY_CHOSEN_HEIR_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "EVENTOPTION_FAMILY_CHOSEN_HEIR_YES_CHARACTER_1",
            "EVENTOPTION_FAMILY_CHOSEN_HEIR_YES_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_CHOSEN_HEIR_NO",
        "Text": "TEXT_EVENTOPTION_FAMILY_CHOSEN_HEIR_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "EVENTOPTION_FAMILY_CHOSEN_HEIR_NO_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_0_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_1_BARBARIAN",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_2_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_3_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_3_CHARACTER_2"
          ]
        },
        "LeaderSubject": "SUBJECT_LOYAL"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_DEATH_COMES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_DEATH_COMES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_DEATH_COMES_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_DEATH_COMES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_DEATH_COMES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_DEATH_COMES_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_2_PLAYER"
          ]
        },
        "LeaderSubject": "SUBJECT_DEALMAKER"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_3_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_3_PLAYER"
          ]
        },
        "LeaderSubject": "SUBJECT_SCHEMER"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_3_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_INSIDER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_THE_INSIDER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_THE_INSIDER_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_THE_INSIDER_OPTION_0_CHARACTER_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_INSIDER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_THE_INSIDER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_THE_INSIDER_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_THE_INSIDER_OPTION_1_CHARACTER_2",
            "BONUS_EVENTOPTION_THE_INSIDER_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_INSIDER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_THE_INSIDER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_THE_INSIDER_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_THE_INSIDER_OPTION_2_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_0_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_1_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_2",
        "EventLinkStart": "EVENTLINK_RELATIONSHIP_PALACE_INTRUDER",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_2_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_0_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_0_CHARACTER_3"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_1_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_1_CHARACTER_3"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_2_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_2_CHARACTER_3"
          ]
        },
        "LeaderSubject": "SUBJECT_HONEST"
      },
      {
        "zType": "EVENTOPTION_A_FALLEN_RIVAL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_A_FALLEN_RIVAL_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_A_FALLEN_RIVAL_OPTION_0_CHARACTER",
            "BONUS_EVENTOPTION_A_FALLEN_RIVAL_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_A_FALLEN_RIVAL_OPTION_1",
        "Text": "TEXT_EVENTOPTION_A_FALLEN_RIVAL_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_A_FALLEN_RIVAL_OPTION_1_CHARACTER",
            "BONUS_EVENTOPTION_A_FALLEN_RIVAL_OPTION_1_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_A_FALLEN_RIVAL_OPTION_2",
        "Text": "TEXT_EVENTOPTION_A_FALLEN_RIVAL_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_A_FALLEN_RIVAL_OPTION_2_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_THE_STEWARD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_THE_STEWARD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_THE_STEWARD_OPTION_0_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_THE_STEWARD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_THE_STEWARD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_THE_STEWARD_OPTION_1_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_0_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_1_CHARACTER",
            "BONUS_EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_1_PLAYER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_2_PLAYER",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_ROMANTIC"
      },
      {
        "zType": "EVENTOPTION_THE_MAXIMS_OF_PTAHHOTEP_OPTION_0",
        "Text": "TEXT_EVENTOPTION_THE_MAXIMS_OF_PTAHHOTEP_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_THE_MAXIMS_OF_PTAHHOTEP_OPTION_0_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_MAXIMS_OF_PTAHHOTEP_OPTION_1",
        "Text": "TEXT_EVENTOPTION_THE_MAXIMS_OF_PTAHHOTEP_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_THE_MAXIMS_OF_PTAHHOTEP_OPTION_1_CITY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_MAXIMS_OF_PTAHHOTEP_OPTION_2",
        "Text": "TEXT_EVENTOPTION_THE_MAXIMS_OF_PTAHHOTEP_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_THE_MAXIMS_OF_PTAHHOTEP_OPTION_2_CITY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_OUTDOOR_LESSON_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TUTOR_OUTDOOR_LESSON_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_OUTDOOR_LESSON_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_OUTDOOR_LESSON_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TUTOR_OUTDOOR_LESSON_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_OUTDOOR_LESSON_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_ART_OF_WAR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TUTOR_ART_OF_WAR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_ART_OF_WAR_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_ART_OF_WAR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TUTOR_ART_OF_WAR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_ART_OF_WAR_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_COMBAT_TRAINING_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TUTOR_COMBAT_TRAINING_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_COMBAT_TRAINING_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_COMBAT_TRAINING_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TUTOR_COMBAT_TRAINING_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_COMBAT_TRAINING_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_MONEY_MANAGEMENT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TUTOR_MONEY_MANAGEMENT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_MONEY_MANAGEMENT_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_MONEY_MANAGEMENT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TUTOR_MONEY_MANAGEMENT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_MONEY_MANAGEMENT_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_TRADE_NEGOTIATIONS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TUTOR_TRADE_NEGOTIATIONS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_TRADE_NEGOTIATIONS_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_TRADE_NEGOTIATIONS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TUTOR_TRADE_NEGOTIATIONS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_TRADE_NEGOTIATIONS_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_HANDS_DIRTY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TUTOR_HANDS_DIRTY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_HANDS_DIRTY_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_HANDS_DIRTY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TUTOR_HANDS_DIRTY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_HANDS_DIRTY_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_HANDS_DIRTY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TUTOR_HANDS_DIRTY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_HANDS_DIRTY_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_THE_LION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TUTOR_THE_LION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_THE_LION_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_THE_LION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TUTOR_THE_LION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_THE_LION_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_ACTS_OF_CHARITY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TUTOR_ACTS_OF_CHARITY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_ACTS_OF_CHARITY_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_ACTS_OF_CHARITY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TUTOR_ACTS_OF_CHARITY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_ACTS_OF_CHARITY_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_DAY_IN_COURT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TUTOR_DAY_IN_COURT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_DAY_IN_COURT_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_DAY_IN_COURT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TUTOR_DAY_IN_COURT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_DAY_IN_COURT_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_DAY_IN_COURT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TUTOR_DAY_IN_COURT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_DAY_IN_COURT_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_BYSTANDER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TUTOR_BYSTANDER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_BYSTANDER_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_BYSTANDER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TUTOR_BYSTANDER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_BYSTANDER_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_BYSTANDER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TUTOR_BYSTANDER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_BYSTANDER_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTOR_BYSTANDER_OPTION_3",
        "Text": "TEXT_EVENTOPTION_TUTOR_BYSTANDER_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTOR_BYSTANDER_OPTION_3_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_2",
        "EventLinkStart": "EVENTLINK_RELATIONSHIP_AT_DEATHS_DOOR",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_3_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_HERBALIST"
      },
      {
        "zType": "EVENTOPTION_HEIR_SULKING_HEIR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_HEIR_SULKING_HEIR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_SULKING_HEIR_OPTION_0_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_SULKING_HEIR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_HEIR_SULKING_HEIR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_SULKING_HEIR_OPTION_1_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_SULKING_HEIR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_HEIR_SULKING_HEIR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HEIR_SULKING_HEIR_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_FUTURE_ACCOMPLISHMENTS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_HEIR_FUTURE_ACCOMPLISHMENTS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_FUTURE_ACCOMPLISHMENTS_OPTION_0_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_FUTURE_ACCOMPLISHMENTS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_HEIR_FUTURE_ACCOMPLISHMENTS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_FUTURE_ACCOMPLISHMENTS_OPTION_1_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_FUTURE_ACCOMPLISHMENTS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_HEIR_FUTURE_ACCOMPLISHMENTS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HEIR_SULKING_HEIR_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_TROUBLING_BEHAVIOR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_HEIR_TROUBLING_BEHAVIOR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_TROUBLING_BEHAVIOR_OPTION_0_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_TROUBLING_BEHAVIOR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_HEIR_TROUBLING_BEHAVIOR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_TROUBLING_BEHAVIOR_OPTION_1_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_TROUBLING_BEHAVIOR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_HEIR_TROUBLING_BEHAVIOR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HEIR_TROUBLING_BEHAVIOR_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_RISING_TO_THE_ROLE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_HEIR_RISING_TO_THE_ROLE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_RISING_TO_THE_ROLE_OPTION_0_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_RISING_TO_THE_ROLE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_HEIR_RISING_TO_THE_ROLE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_RISING_TO_THE_ROLE_OPTION_1_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_RISING_TO_THE_ROLE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_HEIR_RISING_TO_THE_ROLE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HEIR_RISING_TO_THE_ROLE_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "beginGroup": "City",
        "zType": "EVENTOPTION_HAPPINESS_IMMIGRANTS_YES",
        "EventLinkAdd": "EVENTLINK_HAPPINESS_IMMIGRANTS_YES",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_IMMIGRANTS_YES",
        "aeBonuses": {
          "zValue": "BONUS_ADD_CITIZEN_1"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_IMMIGRANTS_SCOUTS",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_IMMIGRANTS_SCOUTS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_IMMIGRANTS_SCOUTS"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_IMMIGRANTS_MILITARY_INFANTRY",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_IMMIGRANTS_MILITARY_INFANTRY",
        "aeBonuses": {
          "zValue": "BONUS_UNITCLASS_HEAVY_INFANTRY"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_IMMIGRANTS_MILITARY_MISSILE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_IMMIGRANTS_MILITARY_MISSILE",
        "aeBonuses": {
          "zValue": "BONUS_UNITCLASS_RANGED_INFANTRY"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_SEASONAL_FESTIVAL_CIVICS",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_SEASONAL_FESTIVAL_CIVICS",
        "aeBonuses": {
          "zValue": "BONUS_CIVICS_GAIN_LARGE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_SEASONAL_FESTIVAL_SCIENCE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_SEASONAL_FESTIVAL_SCIENCE",
        "aeBonuses": {
          "zValue": "BONUS_SCIENCE_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_TAX_SURPLUS_MONEY",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_TAX_SURPLUS_MONEY",
        "aeBonuses": {
          "zValue": "BONUS_MONEY_GAIN_AVERAGE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_TAX_SURPLUS_MATERIAL",
        "aiEventOptionProb": {
          "Pair": [
            {
              "zIndex": "EVENTOPTION_HAPPINESS_TAX_SURPLUS_MATERIAL_FOOD",
              "iValue": "1100"
            },
            {
              "zIndex": "EVENTOPTION_HAPPINESS_TAX_SURPLUS_MATERIAL_STONE",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_HAPPINESS_TAX_SURPLUS_MATERIAL_WOOD",
              "iValue": "1000"
            },
            {
              "zIndex": "EVENTOPTION_HAPPINESS_TAX_SURPLUS_MATERIAL_IRON",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_TAX_SURPLUS_MATERIAL_FOOD",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_TAX_SURPLUS_FOOD",
        "aeBonuses": {
          "zValue": "BONUS_FOOD_GAIN_AVERAGE"
        },
        "aiMinPrice": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "5"
          }
        },
        "aiMaxPrice": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_TAX_SURPLUS_MATERIAL_STONE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_TAX_SURPLUS_STONE",
        "aeBonuses": {
          "zValue": "BONUS_STONE_GAIN_AVERAGE"
        },
        "aiMinPrice": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "5"
          }
        },
        "aiMaxPrice": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_TAX_SURPLUS_MATERIAL_WOOD",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_TAX_SURPLUS_WOOD",
        "aeBonuses": {
          "zValue": "BONUS_WOOD_GAIN_AVERAGE"
        },
        "aiMinPrice": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "5"
          }
        },
        "aiMaxPrice": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_TAX_SURPLUS_MATERIAL_IRON",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_TAX_SURPLUS_IRON",
        "aeBonuses": {
          "zValue": "BONUS_IRON_GAIN_AVERAGE"
        },
        "aiMinPrice": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "5"
          }
        },
        "aiMaxPrice": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_ANCIENT_TEMPLE_DEVOTEE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_ANCIENT_TEMPLE_DEVOTEE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_ANCIENT_TEMPLE_DEVOTEE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_ANCIENT_TEMPLE_STONE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_ANCIENT_TEMPLE_STONE",
        "aeBonuses": {
          "zValue": "BONUS_STONE_GAIN_LARGE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_CITIZEN_DEFENSE_WALLS",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_CITIZEN_DEFENSE_WALLS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_CITIZEN_DEFENSE_WALLS"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_CITIZEN_DEFENSE_TRAINING",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_CITIZEN_DEFENSE_TRAINING",
        "aeBonuses": {
          "zValue": "BONUS_TRAINING_GAIN_LARGE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_SCAVENGERS_FOOD",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_SCAVENGERS_FOOD",
        "aeBonuses": {
          "zValue": "BONUS_FOOD_GAIN_AVERAGE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_SCAVENGERS_ORDERS",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_SCAVENGERS_ORDERS",
        "aeBonuses": {
          "zValue": "BONUS_ORDERS_GAIN_LARGE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_VOLUNTEERS_WORKER",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_VOLUNTEERS_WORKER",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_VOLUNTEERS_WORKER"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_VOLUNTEERS_SOLDIER",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_VOLUNTEERS_SOLDIER",
        "aeBonuses": {
          "zValue": "BONUS_UNITCLASS_HEAVY_INFANTRY"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_PROMISING_STUDENT_SCRIBE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_PROMISING_STUDENT_SCRIBE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_PROMISING_STUDENT_SCRIBE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_PROMISING_STUDENT_POET",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_PROMISING_STUDENT_POET",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_PROMISING_STUDENT_POET"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_PROMISING_STUDENT_CITIZEN",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_PROMISING_STUDENT_CITIZEN",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_PROMISING_STUDENT_CITIZEN"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_FOUND_ZOROASTRIANISM_YES",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_FOUND_ZOROASTRIANISM_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_FOUND_ZOROASTRIANISM_YES"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_FOUND_ZOROASTRIANISM_NO",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_FOUND_ZOROASTRIANISM_NO",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_FOUND_ZOROASTRIANISM_NO"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_FOUND_JUDAISM_YES",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_FOUND_JUDAISM_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_FOUND_JUDAISM_YES"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_FOUND_JUDAISM_NO",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_FOUND_JUDAISM_NO",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_FOUND_JUDAISM_NO"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_VALUABLE_EXPERIENCE_ASTUTE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_VALUABLE_EXPERIENCE_ASTUTE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_VALUABLE_EXPERIENCE_ASTUTE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_VALUABLE_EXPERIENCE_WISDOM",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_VALUABLE_EXPERIENCE_WISDOM",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_VALUABLE_EXPERIENCE_WISDOM"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_GIFTED_INVENTOR_SCIENTIST",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_GIFTED_INVENTOR_SCIENTIST",
        "aeBonuses": {
          "zValue": "BONUS_ADD_GREAT_SCIENTIST"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_GIFTED_INVENTOR_SOLDIER",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_GIFTED_INVENTOR_SOLDIER",
        "aeBonuses": {
          "zValue": "BONUS_ADD_GREAT_SOLDIER"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_DILIGENT_CLERK_MERCHANT",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_DILIGENT_CLERK_MERCHANT",
        "aeBonuses": {
          "zValue": "BONUS_ADD_GREAT_MERCHANT"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_DILIGENT_CLERK_MINISTER",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_DILIGENT_CLERK_MINISTER",
        "aeBonuses": {
          "zValue": "BONUS_ADD_GREAT_MINISTER"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_MATHEMATICAL_BREAKTHROUGH_SCIENTIST",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_MATHEMATICAL_BREAKTHROUGH_SCIENTIST",
        "aeBonuses": {
          "zValue": "BONUS_ADD_GREAT_SCIENTIST"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_MATHEMATICAL_BREAKTHROUGH_SCIENCE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_MATHEMATICAL_BREAKTHROUGH_SCIENCE",
        "aeBonuses": {
          "zValue": "BONUS_SCIENCE_GAIN_HUGE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_ASPIRING_OFFICER_SOLDIER",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_ASPIRING_OFFICER_SOLDIER",
        "aeBonuses": {
          "zValue": "BONUS_ADD_GREAT_SOLDIER"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_ASPIRING_OFFICER_TRAINING",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_ASPIRING_OFFICER_TRAINING",
        "aeBonuses": {
          "zValue": "BONUS_TRAINING_GAIN_HUGE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_BENEVOLENT_TRADER_MERCHANT",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_BENEVOLENT_TRADER_MERCHANT",
        "aeBonuses": {
          "zValue": "BONUS_ADD_GREAT_MERCHANT"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_BENEVOLENT_TRADER_MONEY",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_BENEVOLENT_TRADER_MONEY",
        "aeBonuses": {
          "zValue": "BONUS_MONEY_GAIN_HUGE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_TALENTED_POLITICIAN_MINISTER",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_TALENTED_POLITICIAN_MINISTER",
        "aeBonuses": {
          "zValue": "BONUS_ADD_GREAT_MINISTER"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_TALENTED_POLITICIAN_CIVICS",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_TALENTED_POLITICIAN_CIVICS",
        "aeBonuses": {
          "zValue": "BONUS_CIVICS_GAIN_HUGE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_FASHIONABLE_PAINTER_CAPITAL",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_FASHIONABLE_PAINTER_CAPITAL",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_CULTURE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_FASHIONABLE_PAINTER_MURAL",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_FASHIONABLE_PAINTER_MURAL",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HAPPINESS_FASHIONABLE_PAINTER_MURAL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_ATHLETIC_GAMES_JUDGE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_ATHLETIC_GAMES_JUDGE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HAPPINESS_ATHLETIC_GAMES_JUDGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_ATHLETIC_GAMES_COMPETE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_ATHLETIC_GAMES_COMPETE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HAPPINESS_ATHLETIC_GAMES_COMPETE"
          ]
        },
        "LeaderSubject": "SUBJECT_ADULT_UNDER_40"
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_ATHLETIC_GAMES_GAMBLE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_ATHLETIC_GAMES_GAMBLE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONEVENTOPTION_HAPPINESS_ATHLETIC_GAMES_GAMBLE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_POETRY_CONTEST_RECITE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_POETRY_CONTEST_RECITE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_POETRY_CONTEST_RECITE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_POETRY_CONTEST_ATTEND",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_POETRY_CONTEST_ATTEND",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_POETRY_CONTEST_ATTEND"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_POETRY_CONTEST_JUDGE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_POETRY_CONTEST_JUDGE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_POETRY_CONTEST_JUDGE"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_PUBLIC_FEAST_MODERATION",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_PUBLIC_FEAST_MODERATION",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_PUBLIC_FEAST_MODERATION"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_PUBLIC_FEAST_POOR",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_PUBLIC_FEAST_POOR",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_PUBLIC_FEAST_POOR"
        }
      },
      {
        "zType": "EVENTOPTION_HAPPINESS_PUBLIC_FEAST_STORE",
        "Text": "TEXT_EVENTOPTION_HAPPINESS_PUBLIC_FEAST_STORE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_HAPPINESS_PUBLIC_FEAST_STORE"
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_0",
            "BONUS_EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_0_FAMILY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_1",
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_2",
            "BONUS_EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_2_FAMILY",
            "BONUS_EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_MIDWIVES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHILD_MIDWIVES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_MIDWIVES_OPTION_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHILD_MIDWIVES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHILD_MIDWIVES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHILD_MIDWIVES_OPTION_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_0",
            "BONUS_EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_1",
            "BONUS_EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MINES_OF_LAURION_YES",
        "Text": "TEXT_EVENTOPTION_MINES_OF_LAURION_YES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MINES_OF_LAURION_YES"
        }
      },
      {
        "zType": "EVENTOPTION_MINES_OF_LAURION_NO",
        "Text": "TEXT_EVENTOPTION_MINES_OF_LAURION_NO",
        "aeBonuses": {
          "zValue": "BONUS_GAIN_DISCIPLINE"
        }
      },
      {
        "zType": "EVENTOPTION_FOREST_FIRE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_FOREST_FIRE_OPTION_0"
      },
      {
        "zType": "EVENTOPTION_FOREST_FIRE_OPTION_1",
        "EventLinkAdd": "EVENTLINK_FOREST_FIRE",
        "Text": "TEXT_EVENTOPTION_FOREST_FIRE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_MONEY_LOSS_MINIMAL"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_FOREST_FIRE_WOOD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_FOREST_FIRE_WOOD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_WOOD_GAIN_MINIMAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FOREST_FIRE_EMBERS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_FOREST_FIRE_EMBERS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FOREST_FIRE_EMBERS_OPTION_0_CITY",
            "BONUS_EVENTOPTION_FOREST_FIRE_EMBERS_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_0_PLAYER",
            "NONE",
            "BONUS_EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_1_CITY",
            "BONUS_EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_1_PLAYER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_2",
        "Text": "TEXT_EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_2_PLAYER",
            "NONE",
            "BONUS_EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FOREST_FIRE_TOMB_OPTION_0",
        "Text": "TEXT_EVENTOPTION_FOREST_FIRE_TOMB_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_FOREST_FIRE_TOMB_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FOREST_FIRE_TOMB_OPTION_1",
        "Text": "TEXT_EVENTOPTION_FOREST_FIRE_TOMB_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FOREST_FIRE_TOMB_OPTION_1",
            "BONUS_EVENTOPTION_FOREST_FIRE_TOMB_OPTION_1_CITY",
            "BONUS_EVENTOPTION_FOREST_FIRE_TOMB_OPTION_1_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FOREST_FIRE_TOMB_OPTION_2",
        "EventLinkAdd": "EVENTLINK_FOREST_FIRE_TOMB",
        "Text": "TEXT_EVENTOPTION_FOREST_FIRE_TOMB_OPTION_2",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_FOREST_FIRE_MONUMENT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_FOREST_FIRE_MONUMENT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FOREST_FIRE_MONUMENT_OPTION_1",
            "BONUS_EVENTOPTION_FOREST_FIRE_MONUMENT_OPTION_1_CITY",
            "BONUS_EVENTOPTION_FOREST_FIRE_MONUMENT_OPTION_1_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FOREST_FIRE_MONUMENT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_FOREST_FIRE_MONUMENT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_FOREST_FIRE_MONUMENT_OPTION_2_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEW_TYPE_OF_ANIMAL_PETS",
        "Text": "TEXT_EVENTOPTION_NEW_TYPE_OF_ANIMAL_PETS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_MONEY_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEW_TYPE_OF_ANIMAL_RESEARCH",
        "Text": "TEXT_EVENTOPTION_NEW_TYPE_OF_ANIMAL_RESEARCH",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_SCIENCE_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEW_TYPE_OF_ANIMAL_SYMBOL",
        "Text": "TEXT_EVENTOPTION_NEW_TYPE_OF_ANIMAL_SYMBOL",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_NEW_TYPE_OF_ANIMAL_SYMBOL_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEW_TYPE_OF_ANIMAL_LOCALS",
        "Text": "TEXT_EVENTOPTION_NEW_TYPE_OF_ANIMAL_LOCALS",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_NEW_TYPE_OF_ANIMAL_LOCALS_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS_OPTION_2_CITY",
            "BONUS_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS_OPTION_2_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_MONEY_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER_OPTION_2",
        "EventLinkAdd": "EVENTLINK_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER",
        "Text": "TEXT_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_MONEY_LOSS_TINY"
          ]
        },
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_GEMS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_GEMS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_GEMS_OPTION_0",
            "NONE",
            "BONUS_EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_GEMS_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_OPPORTUNITIES_FOR_ALL_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_OPPORTUNITIES_FOR_ALL_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_TRAINING_GAIN_HUGE"
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_OPPORTUNITIES_FOR_ALL_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CULTURE_OPPORTUNITIES_FOR_ALL_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_CULTURE_OPPORTUNITIES_FOR_ALL_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_OPPORTUNITIES_FOR_ALL_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CULTURE_OPPORTUNITIES_FOR_ALL_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_DISCONTENT_LOSS_LARGE"
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_A_BEACON_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_A_BEACON_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_A_BEACON_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_A_BEACON_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CULTURE_A_BEACON_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_A_BEACON_OPTION_1_CITY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_A_BEACON_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CULTURE_A_BEACON_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_A_BEACON_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_AFFABLE"
      },
      {
        "zType": "EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_0_CHARACTER",
            "BONUS_EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_0_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_1_CITY",
            "BONUS_EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_2_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_0_CITY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_1_CITY",
            "BONUS_EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_2_CHARACTER",
            "BONUS_FREE_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_0_CITY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_1_CITY",
            "BONUS_EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_THE_PUBLIC_PURSE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_THE_PUBLIC_PURSE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_THE_PUBLIC_PURSE_OPTION_0_CITY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_THE_PUBLIC_PURSE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CULTURE_THE_PUBLIC_PURSE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_THE_PUBLIC_PURSE_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_THE_PUBLIC_PURSE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CULTURE_THE_PUBLIC_PURSE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CULTURE_THE_PUBLIC_PURSE_OPTION_2_CITY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_A_GOLDEN_AGE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_A_GOLDEN_AGE_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_CULTURE_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_A_GOLDEN_AGE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CULTURE_A_GOLDEN_AGE_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_CIVICS_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_A_GOLDEN_AGE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CULTURE_A_GOLDEN_AGE_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_MONEY_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_A_GOLDEN_AGE_OPTION_3",
        "Text": "TEXT_EVENTOPTION_CULTURE_A_GOLDEN_AGE_OPTION_3",
        "aeBonuses": {
          "zValue": "BONUS_DISCONTENT_LOSS_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_THE_ZIGGURAT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_WONDER_THE_ZIGGURAT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WONDER_THE_ZIGGURAT_OPTION_0_CITY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_THE_ZIGGURAT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_WONDER_THE_ZIGGURAT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WONDER_THE_ZIGGURAT_OPTION_1_CITY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_THE_ZIGGURAT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_WONDER_THE_ZIGGURAT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WONDER_THE_ZIGGURAT_OPTION_2_CITY",
            "NONE"
          ]
        }
      },
      {
        "beginGroup": "Miscellaneous",
        "zType": "EVENTOPTION_START_SLAVERY_YES",
        "Text": "TEXT_EVENTOPTION_START_SLAVERY_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_START_SLAVERY_YES",
            "BONUS_FREE_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_START_SLAVERY_NO",
        "Text": "TEXT_EVENTOPTION_START_SLAVERY_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_GROWTH_GAIN_AVERAGE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_JUDAISM",
        "Text": "TEXT_EVENTOPTION_RELIGION_JUDAISM",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RELIGION_JUDAISM"
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_ZOROASTRIANISM",
        "Text": "TEXT_EVENTOPTION_RELIGION_ZOROASTRIANISM",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RELIGION_ZOROASTRIANISM"
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_CHRISTIANITY",
        "Text": "TEXT_EVENTOPTION_RELIGION_CHRISTIANITY",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RELIGION_CHRISTIANITY"
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_MANICHAEISM",
        "Text": "TEXT_EVENTOPTION_RELIGION_MANICHAEISM",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_RELIGION_MANICHAEISM"
        }
      },
      {
        "zType": "EVENTOPTION_CEREMONIAL_OFFERING_PROVIDE",
        "Text": "TEXT_EVENTOPTION_CEREMONIAL_OFFERING_PROVIDE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CEREMONIAL_OFFERING_PROVIDE_CITY",
            "BONUS_EVENTOPTION_CEREMONIAL_OFFERING_PROVIDE_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CEREMONIAL_OFFERING_NO",
        "Text": "TEXT_EVENTOPTION_CEREMONIAL_OFFERING_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CEREMONIAL_OFFERING_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CEREMONIAL_OFFERING_REQUISITION",
        "Text": "TEXT_EVENTOPTION_CEREMONIAL_OFFERING_REQUISITION",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CEREMONIAL_OFFERING_REQUISITION_CITY",
            "BONUS_EVENTOPTION_CEREMONIAL_OFFERING_REQUISITION_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FOUNDING_SIGNS_OK",
        "Text": "TEXT_EVENTOPTION_FOUNDING_SIGNS_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_FOUNDING_SIGNS_OK"
        }
      },
      {
        "zType": "EVENTOPTION_FOUNDING_SIGNS_NO",
        "Text": "TEXT_EVENTOPTION_FOUNDING_SIGNS_NO",
        "aeBonuses": {
          "zValue": "BONUS_DISCONTENT_LOSS_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_FOUNDING_SIGNS_SUCCESS_OK",
        "Text": "TEXT_EVENTOPTION_FOUNDING_SIGNS_SUCCESS_OK",
        "aeBonuses": {
          "zValue": "BONUS_CULTURE_GAIN_LARGE"
        }
      },
      {
        "zType": "EVENTOPTION_VIRTUOUS_REFORMERS_LET",
        "Text": "TEXT_EVENTOPTION_VIRTUOUS_REFORMERS_LET",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_VIRTUOUS_REFORMERS_LET",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_DEBAUCHED",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_VIRTUOUS_REFORMERS_SHOW",
        "Text": "TEXT_EVENTOPTION_VIRTUOUS_REFORMERS_SHOW",
        "aeBonuses": {
          "zValue": [
            "BONUS_CULTURE_GAIN_AVERAGE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_UNHAPPY_PEASANTS_SACRIFICE",
        "Text": "TEXT_EVENTOPTION_UNHAPPY_PEASANTS_SACRIFICE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_UNHAPPY_PEASANTS_SACRIFICE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_UNHAPPY_PEASANTS_DECLINE",
        "Text": "TEXT_EVENTOPTION_UNHAPPY_PEASANTS_DECLINE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_UNHAPPY_PEASANTS_DECLINE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HARSH_RULE_ARREST",
        "Text": "TEXT_EVENTOPTION_HARSH_RULE_ARREST",
        "aeBonuses": {
          "zValue": "BONUS_DISCONTENT_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_HARSH_RULE_BRIBE",
        "Text": "TEXT_EVENTOPTION_HARSH_RULE_BRIBE",
        "aeBonuses": {
          "zValue": "BONUS_MONEY_LOSS_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_HARSH_RULE_CONVINCE",
        "Text": "TEXT_EVENTOPTION_HARSH_RULE_CONVINCE",
        "LeaderSubject": "SUBJECT_ELOQUENT"
      },
      {
        "zType": "EVENTOPTION_WONDER_FINISHED",
        "Text": "TEXT_EVENTOPTION_WONDER_FINISHED",
        "aeBonuses": {
          "zValue": "BONUS_FINISHED_WONDER"
        }
      },
      {
        "zType": "EVENTOPTION_COLOSSUS_WARLIKE",
        "Text": "TEXT_EVENTOPTION_COLOSSUS_WARLIKE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_COLOSSUS_WARLIKE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_COLOSSUS_ANCESTOR",
        "Text": "TEXT_EVENTOPTION_COLOSSUS_ANCESTOR",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_COLOSSUS_ANCESTOR"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_COLOSSUS_SCULPTOR",
        "Text": "TEXT_EVENTOPTION_COLOSSUS_SCULPTOR",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_COLOSSUS_SCULPTOR",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LIGHTHOUSE_WARSHIPS",
        "Text": "TEXT_EVENTOPTION_LIGHTHOUSE_WARSHIPS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_LIGHTHOUSE_WARSHIPS"
        }
      },
      {
        "zType": "EVENTOPTION_LIGHTHOUSE_GRAIN",
        "Text": "TEXT_EVENTOPTION_LIGHTHOUSE_GRAIN",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_LIGHTHOUSE_GRAIN"
        }
      },
      {
        "zType": "EVENTOPTION_LIGHTHOUSE_LUXURY",
        "Text": "TEXT_EVENTOPTION_LIGHTHOUSE_LUXURY",
        "aeBonuses": {
          "zValue": "BONUS_CULTURE_GAIN_GIGANTIC"
        }
      },
      {
        "zType": "EVENTOPTION_HANGING_GARDENS_MEDITATE",
        "Text": "TEXT_EVENTOPTION_HANGING_GARDENS_MEDITATE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HANGING_GARDENS_MEDITATE",
            "NONE"
          ]
        },
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_HANGING_GARDENS_STUDY",
        "Text": "TEXT_EVENTOPTION_HANGING_GARDENS_STUDY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HANGING_GARDENS_STUDY",
            "NONE"
          ]
        },
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_HANGING_GARDENS_PARTY",
        "Text": "TEXT_EVENTOPTION_HANGING_GARDENS_PARTY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HANGING_GARDENS_PARTY_CITY",
            "BONUS_EVENTOPTION_HANGING_GARDENS_PARTY_LEADER"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_RIGHTEOUS",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_PYRAMIDS_WORK",
        "Text": "TEXT_EVENTOPTION_PYRAMIDS_WORK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PYRAMIDS_WORK"
        }
      },
      {
        "zType": "EVENTOPTION_PYRAMIDS_BLOODLINE",
        "Text": "TEXT_EVENTOPTION_PYRAMIDS_BLOODLINE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PYRAMIDS_BLOODLINE"
        }
      },
      {
        "zType": "EVENTOPTION_PYRAMIDS_DEATH",
        "Text": "TEXT_EVENTOPTION_PYRAMIDS_DEATH",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PYRAMIDS_DEATH"
        }
      },
      {
        "zType": "EVENTOPTION_ISHTAR_GATE_ME",
        "Text": "TEXT_EVENTOPTION_ISHTAR_GATE_ME",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ISHTAR_GATE_ME"
          ]
        },
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_ISHTAR_GATE_ARTISTS",
        "Text": "TEXT_EVENTOPTION_ISHTAR_GATE_ARTISTS",
        "aeBonuses": {
          "zValue": [
            "BONUS_CULTURE_GAIN_AVERAGE",
            "BONUS_EVENTOPTION_ISHTAR_GATE_ARTISTS_LEADER"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_FRUGAL",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_ISHTAR_GATE_CHILDREN",
        "Text": "TEXT_EVENTOPTION_ISHTAR_GATE_CHILDREN",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ISHTAR_GATE_CHILDREN"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_CRUEL",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_ACROPOLIS_FAMILY_TREASURY_1",
        "Text": "TEXT_EVENTOPTION_ACROPOLIS_FAMILY_TREASURY_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_ACROPOLIS_FAMILY_TREASURY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ACROPOLIS_FAMILY_TREASURY_2",
        "Text": "TEXT_EVENTOPTION_ACROPOLIS_FAMILY_TREASURY_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ACROPOLIS_FAMILY_TREASURY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ACROPOLIS_FAMILY_TREASURY_3",
        "Text": "TEXT_EVENTOPTION_ACROPOLIS_FAMILY_TREASURY_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_ACROPOLIS_FAMILY_TREASURY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NECROPOLIS_RECORD",
        "Text": "TEXT_EVENTOPTION_NECROPOLIS_RECORD",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_NECROPOLIS_RECORD_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NECROPOLIS_RITES",
        "Text": "TEXT_EVENTOPTION_NECROPOLIS_RITES",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NECROPOLIS_RITES",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_DEBAUCHED",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_ANCIENT_STATUE_DISPLAY",
        "EventLinkAdd": "EVENTLINK_ANCIENT_STATUE_DISPLAY",
        "Text": "TEXT_EVENTOPTION_ANCIENT_STATUE_DISPLAY",
        "aeBonuses": {
          "zValue": [
            "BONUS_CULTURE_GAIN_SMALL",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ANCIENT_STATUE_BREAK",
        "Text": "TEXT_EVENTOPTION_ANCIENT_STATUE_BREAK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_STONE_GAIN_SMALL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ANCIENT_STATUE_STOLEN_LOCATE",
        "EventLinkAdd": "EVENTLINK_ANCIENT_STATUE_STOLEN_LOCATE",
        "Text": "TEXT_EVENTOPTION_ANCIENT_STATUE_STOLEN_LOCATE",
        "aeBonuses": {
          "zValue": [
            "BONUS_MONEY_LOSS_SMALL",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ANCIENT_STATUE_STOLEN_FORGET",
        "Text": "TEXT_EVENTOPTION_ANCIENT_STATUE_STOLEN_FORGET",
        "HelpText": "TEXT_EVENTOPTION_ANCIENT_STATUE_STOLEN_FORGET_HELP"
      },
      {
        "zType": "EVENTOPTION_ANCIENT_STATUE_APPREHENDED_EXECUTE",
        "Text": "TEXT_EVENTOPTION_ANCIENT_STATUE_APPREHENDED_EXECUTE",
        "aeBonuses": {
          "zValue": [
            "BONUS_CIVICS_GAIN_SMALL",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ANCIENT_STATUE_APPREHENDED_PARDON",
        "Text": "TEXT_EVENTOPTION_ANCIENT_STATUE_APPREHENDED_PARDON",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ANCIENT_STATUE_APPREHENDED_PARDON",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_CRUEL",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_PRECIOUS_METALS_TREASURY",
        "Text": "TEXT_EVENTOPTION_PRECIOUS_METALS_TREASURY",
        "aeBonuses": {
          "zValue": "BONUS_MONEY_GAIN_AVERAGE"
        }
      },
      {
        "zType": "EVENTOPTION_PRECIOUS_METALS_BEAUTIFY",
        "Text": "TEXT_EVENTOPTION_PRECIOUS_METALS_BEAUTIFY",
        "aeBonuses": {
          "zValue": "BONUS_CULTURE_GAIN_AVERAGE"
        }
      },
      {
        "zType": "EVENTOPTION_QUESTIONABLE_CARVING_DISPLAY",
        "Text": "TEXT_EVENTOPTION_QUESTIONABLE_CARVING_DISPLAY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_QUESTIONABLE_CARVING_DISPLAY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_QUESTIONABLE_CARVING_ERECT",
        "Text": "TEXT_EVENTOPTION_QUESTIONABLE_CARVING_ERECT",
        "aeBonuses": {
          "zValue": [
            "BONUS_DISCONTENT_GAIN_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_QUESTIONABLE_CARVING_PURCHASE",
        "Text": "TEXT_EVENTOPTION_QUESTIONABLE_CARVING_PURCHASE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_MONEY_LOSS_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_COTTAGE_DECOR_ARTWORKS",
        "Text": "TEXT_EVENTOPTION_COTTAGE_DECOR_ARTWORKS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_COTTAGE_DECOR_ARTWORKS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_COTTAGE_DECOR_BUSTS",
        "Text": "TEXT_EVENTOPTION_COTTAGE_DECOR_BUSTS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_COTTAGE_DECOR_BUSTS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_COTTAGE_DECOR_AUSTERE",
        "Text": "TEXT_EVENTOPTION_COTTAGE_DECOR_AUSTERE",
        "aeBonuses": {
          "zValue": [
            "BONUS_CIVICS_GAIN_AVERAGE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_FRUGAL"
      },
      {
        "zType": "EVENTOPTION_RUNAWAY_SLAVE_REPRIMAND",
        "Text": "TEXT_EVENTOPTION_RUNAWAY_SLAVE_REPRIMAND",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUNAWAY_SLAVE_REPRIMAND"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUNAWAY_SLAVE_REFUSE",
        "Text": "TEXT_EVENTOPTION_RUNAWAY_SLAVE_REFUSE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_DISCONTENT_GAIN_MINIMAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUNAWAY_SLAVE_BEAT",
        "Text": "TEXT_EVENTOPTION_RUNAWAY_SLAVE_BEAT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RUNAWAY_SLAVE_BEAT_LEADER",
            "BONUS_EVENTOPTION_RUNAWAY_SLAVE_BEAT_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PRIESTLY_DWELLING_LAND",
        "Text": "TEXT_EVENTOPTION_PRIESTLY_DWELLING_LAND",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PRIESTLY_DWELLING_LAND"
        }
      },
      {
        "zType": "EVENTOPTION_PRIESTLY_DWELLING_RESIDENCE",
        "Text": "TEXT_EVENTOPTION_PRIESTLY_DWELLING_RESIDENCE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PRIESTLY_DWELLING_RESIDENCE"
        },
        "LeaderSubject": "SUBJECT_RIGHTEOUS"
      },
      {
        "zType": "EVENTOPTION_PRIESTLY_DWELLING_COMMONERS",
        "Text": "TEXT_EVENTOPTION_PRIESTLY_DWELLING_COMMONERS",
        "aeBonuses": {
          "zValue": "BONUS_GROWTH_GAIN_AVERAGE"
        }
      },
      {
        "zType": "EVENTOPTION_VETERAN_COLONIES_SETTLE",
        "Text": "TEXT_EVENTOPTION_VETERAN_COLONIES_SETTLE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_ADD_CITIZEN_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_VETERAN_COLONIES_PAY",
        "Text": "TEXT_EVENTOPTION_VETERAN_COLONIES_PAY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_VETERAN_COLONIES_PAY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_VETERAN_COLONIES_NO",
        "Text": "TEXT_EVENTOPTION_VETERAN_COLONIES_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_VETERAN_COLONIES_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_2",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_ELOQUENT"
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_3",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_3",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_3",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_3",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_COWARDLY",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_EXPLORATION_VERSION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_EXPLORATION_VERSION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_EXPLORATION_VERSION_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_EXPLORATION_VERSION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_EXPLORATION_VERSION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_SCIENCE_GAIN_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_EXPLORATION_VERSION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_EXPLORATION_VERSION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_EXPLORATION_VERSION_OPTION_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_LITERATURE_VERSION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_LITERATURE_VERSION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_LITERATURE_VERSION_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_LITERATURE_VERSION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_LITERATURE_VERSION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_LITERATURE_VERSION_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DINOSAUR_BONES_LITERATURE_VERSION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_DINOSAUR_BONES_LITERATURE_VERSION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_DINOSAUR_BONES_LITERATURE_VERSION_OPTION_2",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_NOT_COWARDLY",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_ARCHER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_ARCHER_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAINING_NEWS_ARCHER_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_ARCHER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_ARCHER_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAINING_NEWS_ARCHER_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_ARCHER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_ARCHER_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAINING_NEWS_ARCHER_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_CHARIOT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_CHARIOT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_CHARIOT_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_CHARIOT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_CHARIOT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_CHARIOT_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_3",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_3",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_CAMEL_ARCHER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_CAMEL_ARCHER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_CAMEL_ARCHER_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_CAMEL_ARCHER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_CAMEL_ARCHER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_CAMEL_ARCHER_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_WAR_ELEPHANT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_WAR_ELEPHANT_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TRAINING_NEWS_WAR_ELEPHANT_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_BALLISTA_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_BALLISTA_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_BALLISTA_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_BALLISTA_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_BALLISTA_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_BALLISTA_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_HORSE_ARCHER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_HORSE_ARCHER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_HORSE_ARCHER_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_HORSE_ARCHER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_HORSE_ARCHER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_HORSE_ARCHER_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_HORSE_ARCHER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_HORSE_ARCHER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_HORSE_ARCHER_OPTION_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_CATAPULT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_CATAPULT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_CATAPULT_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_CATAPULT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_CATAPULT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_CATAPULT_OPTION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAINING_NEWS_CATAPULT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAINING_NEWS_CATAPULT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAINING_NEWS_CATAPULT_OPTION_2",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_MACEMAN",
        "Text": "TEXT_EVENTOPTION_MERCENARY_MACEMAN",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_MACEMAN"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_SPEARMAN",
        "Text": "TEXT_EVENTOPTION_MERCENARY_SPEARMAN",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_SPEARMAN"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_AXEMAN",
        "Text": "TEXT_EVENTOPTION_MERCENARY_AXEMAN",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_AXEMAN"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_SWORDSMAN",
        "Text": "TEXT_EVENTOPTION_MERCENARY_SWORDSMAN",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_SWORDSMAN"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_PIKEMAN",
        "Text": "TEXT_EVENTOPTION_MERCENARY_PIKEMAN",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_PIKEMAN"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_ARCHER",
        "Text": "TEXT_EVENTOPTION_MERCENARY_ARCHER",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_ARCHER"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_LONGBOWMAN",
        "Text": "TEXT_EVENTOPTION_MERCENARY_LONGBOWMAN",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_LONGBOWMAN"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_CROSSBOWMAN",
        "Text": "TEXT_EVENTOPTION_MERCENARY_CROSSBOWMAN",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_CROSSBOWMAN"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_POLYBOLOS",
        "Text": "TEXT_EVENTOPTION_MERCENARY_POLYBOLOS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_POLYBOLOS"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_CHARIOT",
        "Text": "TEXT_EVENTOPTION_MERCENARY_CHARIOT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_CHARIOT"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_HORSEMAN",
        "Text": "TEXT_EVENTOPTION_MERCENARY_HORSEMAN",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_HORSEMAN"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_HORSE_ARCHER",
        "Text": "TEXT_EVENTOPTION_MERCENARY_HORSE_ARCHER",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_HORSE_ARCHER"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_CAMEL_ARCHER",
        "Text": "TEXT_EVENTOPTION_MERCENARY_CAMEL_ARCHER",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_CAMEL_ARCHER"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_WAR_ELEPHANT",
        "Text": "TEXT_EVENTOPTION_MERCENARY_WAR_ELEPHANT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_WAR_ELEPHANT"
        }
      },
      {
        "zType": "EVENTOPTION_MERCENARY_CATAPHRACT",
        "Text": "TEXT_EVENTOPTION_MERCENARY_CATAPHRACT",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_MERCENARY_CATAPHRACT"
        }
      },
      {
        "zType": "EVENTOPTION_PILLAGING_BARBARIANS_REVENGE",
        "EventLinkAdd": "EVENTLINK_PILLAGING_BARBARIANS",
        "Text": "TEXT_EVENTOPTION_PILLAGING_BARBARIANS_REVENGE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_PILLAGING_BARBARIANS_REVENGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PILLAGING_BARBARIANS_ORDERS",
        "Text": "TEXT_EVENTOPTION_PILLAGING_BARBARIANS_ORDERS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PILLAGING_BARBARIANS_ORDERS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_PILLAGING_BARBARIANS_SUCCESS",
        "Text": "TEXT_EVENTOPTION_PILLAGING_BARBARIANS_SUCCESS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_PILLAGING_BARBARIANS_SUCCESS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY",
        "EventLinkAdd": "EVENTLINK_EXOTIC_PETS_MONKEY",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY"
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_FISH",
        "EventLinkAdd": "EVENTLINK_EXOTIC_PETS_FISH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_FISH",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXOTIC_PETS_FISH"
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_NO",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_NO",
        "aeBonuses": {
          "zValue": "NONE"
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_FISH_PEACE_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_FISH_PEACE_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_CULTURE_GAIN_MINIMAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_FISH_FAN_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_FISH_FAN_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_CULTURE_GAIN_MINIMAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_FISH_FAN_TASTE",
        "EventLinkAdd": "EVENTLINK_EXOTIC_PETS_FISH_FAN_TASTE",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_FISH_FAN_TASTE",
        "bFutureEvents": "1"
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_FISH_THOUGHTS_FISH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_FISH_THOUGHTS_FISH",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_CULTURE_GAIN_MINIMAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_FISH_THOUGHTS_DISH",
        "EventLinkAdd": "EVENTLINK_EXOTIC_PETS_FISH_THOUGHTS_DISH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_FISH_THOUGHTS_DISH",
        "HelpText": "TEXT_EVENTOPTION_EXOTIC_PETS_FISH_THOUGHTS_DISH_HELP",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_CULTURE_GAIN_MINIMAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_FISH_HORROR_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_FISH_HORROR_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_FISH_HORROR_OK_LEADER",
            "BONUS_DISCONTENT_GAIN_MINIMAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_FISH_REST_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_FISH_REST_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_FISH_REST_OK_LEADER",
            "BONUS_DISCONTENT_GAIN_MINIMAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_THIEF_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_THIEF_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_THIEF_OK"
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_THIEF_NO",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_THIEF_NO",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_THIEF_NO"
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_THIEF_ENOUGH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_ENOUGH",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_THIEF_ENOUGH"
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_DISTRACTING_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_DISTRACTING_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_DISTRACTING_OK"
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_DISTRACTING_ENOUGH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_ENOUGH",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_DISTRACTING_ENOUGH"
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_DIPLOMAT_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_DIPLOMAT_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_BARBARIAN_TRUCE",
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_DIPLOMAT_OK_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_DIPLOMAT_NO",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_DIPLOMAT_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_DIPLOMAT_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_DIPLOMAT_ENOUGH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_ENOUGH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_DIPLOMAT_ENOUGH_PLAYER",
            "BONUS_BARBARIAN_TRUCE",
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_DIPLOMAT_ENOUGH_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_WEIRD",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_WEIRD",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_TRAIN",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_TRAIN",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_TRAIN",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_ENOUGH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_ENOUGH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_ENOUGH",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_SUCCESS_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_SUCCESS_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_SUCCESS_OK_PLAYER",
            "BONUS_KILL_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_FAILURE_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_FAILURE_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_FAILURE_OK",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_UNINTERESTED_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_UNINTERESTED_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_UNINTERESTED_OK",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_REVERSAL_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_REVERSAL_OK",
        "aeBonuses": {
          "zValue": [
            "BONUS_KILL_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_CAMPAIGN_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_CAMPAIGN_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_TRAINING_GAIN_TINY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_CAMPAIGN_ENOUGH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_ENOUGH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_CAMPAIGN_ENOUGH_LEADER",
            "BONUS_TRAINING_GAIN_TINY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_BAD_POLITICS_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_BAD_POLITICS_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_BAD_POLITICS"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_BAD_POLITICS_ENOUGH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_ENOUGH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_BAD_POLITICS_ENOUGH_LEADER",
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_BAD_POLITICS"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_CHARM_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_CHARM_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_CHARM_OK"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_CHARM_ENOUGH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_ENOUGH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_CHARM_ENOUGH_LEADER",
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_CHARM_ENOUGH_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_DESTRUCTION_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_DESTRUCTION_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_DESTRUCTION_OK"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_DESTRUCTION_ENOUGH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_ENOUGH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_DESTRUCTION_ENOUGH_LEADER",
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_DESTRUCTION_ENOUGH_CAPITAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_SCIENCE_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_SCIENCE_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_SCIENCE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_SCIENCE_ENOUGH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_ENOUGH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_SCIENCE_ENOUGH_LEADER",
            "BONUS_SCIENCE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_CULTURE_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_CULTURE_OK",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_CULTURE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_CULTURE_ENOUGH",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_ENOUGH",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_CULTURE_ENOUGH_LEADER",
            "BONUS_CULTURE_GAIN_AVERAGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_EXOTIC_PETS_MONKEY_REST_OK",
        "Text": "TEXT_EVENTOPTION_EXOTIC_PETS_MONKEY_REST_OK",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_EXOTIC_PETS_MONKEY_REST_OK"
        }
      },
      {
        "zType": "EVENTOPTION_MYSTERIOUS_SWORD_GIFTS",
        "EventLinkAdd": "EVENTLINK_MYSTERIOUS_SWORD_TAKE",
        "Text": "TEXT_EVENTOPTION_MYSTERIOUS_SWORD_GIFTS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_MYSTERIOUS_SWORD_GIFTS_LEADER",
            "BONUS_CULTURE_GAIN_TINY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MYSTERIOUS_SWORD_DISMISS",
        "EventLinkAdd": "EVENTLINK_MYSTERIOUS_SWORD_TAKE",
        "Text": "TEXT_EVENTOPTION_MYSTERIOUS_SWORD_DISMISS",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_MYSTERIOUS_SWORD_DISMISS",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MYSTERIOUS_SWORD_REFUSE",
        "Text": "TEXT_EVENTOPTION_MYSTERIOUS_SWORD_REFUSE"
      },
      {
        "zType": "EVENTOPTION_MYSTERIOUS_SWORD_USING_WIELD",
        "EventLinkAdd": "EVENTLINK_MYSTERIOUS_SWORD_USING_WIELD",
        "Text": "TEXT_EVENTOPTION_MYSTERIOUS_SWORD_USING_WIELD",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_MYSTERIOUS_SWORD_USING_WIELD",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MYSTERIOUS_SWORD_USING_DISPLAY",
        "EventLinkAdd": "EVENTLINK_MYSTERIOUS_SWORD_USING_DISPLAY",
        "Text": "TEXT_EVENTOPTION_MYSTERIOUS_SWORD_USING_DISPLAY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_MYSTERIOUS_SWORD_USING_DISPLAY_LEADER",
            "BONUS_EVENTOPTION_MYSTERIOUS_SWORD_USING_DISPLAY_CAPITAL"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MYSTERIOUS_SWORD_USING_SELL",
        "Text": "TEXT_EVENTOPTION_MYSTERIOUS_SWORD_USING_SELL",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_MYSTERIOUS_SWORD_USING_SELL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MYSTERIOUS_SWORD_PILGRIMS_HOUSING",
        "Text": "TEXT_EVENTOPTION_MYSTERIOUS_SWORD_PILGRIMS_HOUSING",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_MYSTERIOUS_SWORD_PILGRIMS_HOUSING"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MYSTERIOUS_SWORD_PILGRIMS_CHARGE",
        "Text": "TEXT_EVENTOPTION_MYSTERIOUS_SWORD_PILGRIMS_CHARGE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_MYSTERIOUS_SWORD_PILGRIMS_CHARGE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MYSTERIOUS_SWORD_BREAK_ACCEPT",
        "Text": "TEXT_EVENTOPTION_MYSTERIOUS_SWORD_BREAK_ACCEPT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_MYSTERIOUS_SWORD_BREAK_ACCEPT",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MYSTERIOUS_SWORD_DEATH_ACCEPT",
        "Text": "TEXT_EVENTOPTION_MYSTERIOUS_SWORD_DEATH_ACCEPT"
      },
      {
        "zType": "EVENTOPTION_CONSPIRACY_OPTION_0",
        "EventLinkAdd": "EVENTLINK_CONSPIRACY",
        "Text": "TEXT_EVENTOPTION_CONSPIRACY_OPTION_0"
      },
      {
        "zType": "EVENTOPTION_KNIVES_OF_THE_CONSPIRACY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_KNIVES_OF_THE_CONSPIRACY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TEMPTING_RUMORS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TEMPTING_RUMORS_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TEMPTING_RUMORS_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TEMPTING_RUMORS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TEMPTING_RUMORS_OPTION_1",
        "aeBonuses": {
          "zValue": "NONE"
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SUCCESSION_YES",
        "Text": "TEXT_EVENTOPTION_FAMILY_SUCCESSION_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_FAMILY_SUCCESSION_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_FAMILY_SUCCESSION_NO",
        "Text": "TEXT_EVENTOPTION_FAMILY_SUCCESSION_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_FAMILY_SUCCESSION_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ASCETIC_MOVEMENT_REPRESS",
        "Text": "TEXT_EVENTOPTION_ASCETIC_MOVEMENT_REPRESS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_ASCETIC_MOVEMENT_REPRESS"
        },
        "LeaderSubject": "SUBJECT_NOT_GRACIOUS",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTOPTION_ASCETIC_MOVEMENT_ALLOW",
        "Text": "TEXT_EVENTOPTION_ASCETIC_MOVEMENT_ALLOW",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_ASCETIC_MOVEMENT_ALLOW"
        }
      },
      {
        "zType": "EVENTOPTION_WAYWARD_SUBJECT_FORGIVE",
        "Text": "TEXT_EVENTOPTION_WAYWARD_SUBJECT_FORGIVE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WAYWARD_SUBJECT_FORGIVE"
        }
      },
      {
        "zType": "EVENTOPTION_WAYWARD_SUBJECT_IMPRISON",
        "Text": "TEXT_EVENTOPTION_WAYWARD_SUBJECT_IMPRISON",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WAYWARD_SUBJECT_IMPRISON"
        }
      },
      {
        "zType": "EVENTOPTION_GEM_SEEKERS_YES",
        "Text": "TEXT_EVENTOPTION_GEM_SEEKERS_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_MONEY_GAIN_SMALL",
            "BONUS_EVENTOPTION_GEM_SEEKERS_TRADE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GEM_SEEKERS_GIFT",
        "Text": "TEXT_EVENTOPTION_GEM_SEEKERS_GIFT",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GEM_SEEKERS_GIFT",
            "BONUS_EVENTOPTION_GEM_SEEKERS_TRADE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_GEM_SEEKERS_NO",
        "Text": "TEXT_EVENTOPTION_GEM_SEEKERS_NO",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_GEM_SEEKERS_NO",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEW_AMBASSADOR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_NEW_AMBASSADOR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEW_AMBASSADOR_OPTION_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_NEW_AMBASSADOR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_NEW_AMBASSADOR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_NEW_AMBASSADOR_OPTION_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_DARKENED_MOON_ATTACK",
        "Text": "TEXT_EVENTOPTION_DARKENED_MOON_ATTACK",
        "aeBonuses": {
          "zValue": "BONUS_ORDERS_GAIN_HUGE"
        }
      },
      {
        "zType": "EVENTOPTION_DARKENED_MOON_SCIENCE",
        "Text": "TEXT_EVENTOPTION_DARKENED_MOON_SCIENCE",
        "aeBonuses": {
          "zValue": "BONUS_SCIENCE_GAIN_LARGE"
        }
      },
      {
        "zType": "EVENTOPTION_DARKENED_MOON_GODS",
        "Text": "TEXT_EVENTOPTION_DARKENED_MOON_GODS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_DARKENED_MOON_GODS"
        }
      },
      {
        "zType": "EVENTOPTION_RENOWNED_BEAUTY_ADVICE",
        "Text": "TEXT_EVENTOPTION_RENOWNED_BEAUTY_ADVICE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RENOWNED_BEAUTY_ADVICE",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RENOWNED_BEAUTY_DIVORCE",
        "Text": "TEXT_EVENTOPTION_RENOWNED_BEAUTY_DIVORCE",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RENOWNED_BEAUTY_DIVORCE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RENOWNED_BEAUTY_COUNCIL",
        "Text": "TEXT_EVENTOPTION_RENOWNED_BEAUTY_COUNCIL",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RENOWNED_BEAUTY_COUNCIL_CHANCELLOR",
            "BONUS_EVENTOPTION_RENOWNED_BEAUTY_COUNCIL_HEIR"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_LITERATE_CITIZEN",
        "Text": "TEXT_EVENTOPTION_THE_LITERATE_CITIZEN",
        "aeBonuses": {
          "zValue": "BONUS_ADD_CITIZEN_1"
        }
      },
      {
        "zType": "EVENTOPTION_THE_LITERATE_THE_LITERATE",
        "Text": "TEXT_EVENTOPTION_THE_LITERATE_THE_LITERATE",
        "aeBonuses": {
          "zValue": "BONUS_SCIENCE_GAIN_SMALL"
        }
      },
      {
        "zType": "EVENTOPTION_THE_LITERATE_PROPAGANDA",
        "Text": "TEXT_EVENTOPTION_THE_LITERATE_PROPAGANDA",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_THE_LITERATE_PROPAGANDA"
        }
      },
      {
        "zType": "EVENTOPTION_PROPAGANDA_CITIZEN",
        "Text": "TEXT_EVENTOPTION_PROPAGANDA_CITIZEN",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PROPAGANDA_CITIZEN"
        }
      },
      {
        "zType": "EVENTOPTION_PROPAGANDA_FOOD_VS_CULTURE",
        "Text": "TEXT_EVENTOPTION_PROPAGANDA_FOOD_VS_CULTURE",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_PROPAGANDA_FOOD_VS_CULTURE"
        }
      },
      {
        "zType": "EVENTOPTION_INSOLENT_GENERALS_TRAINING",
        "Text": "TEXT_EVENTOPTION_INSOLENT_GENERALS_TRAINING",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_INSOLENT_GENERALS_TRAINING_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_INSOLENT_GENERALS_WAR",
        "Text": "TEXT_EVENTOPTION_INSOLENT_GENERALS_WAR",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_DECLARE_WAR_PLAYER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_MUST_I_DO_EVERYTHING_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_MUST_I_DO_EVERYTHING_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_MUST_I_DO_EVERYTHING_OPTION_0",
            "BONUS_EVENTOPTION_LAW_MUST_I_DO_EVERYTHING_OPTION_0_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_MUST_I_DO_EVERYTHING_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_MUST_I_DO_EVERYTHING_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_MUST_I_DO_EVERYTHING_OPTION_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_BALANCE_OF_POWER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_BALANCE_OF_POWER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_BALANCE_OF_POWER_OPTION_0",
            "BONUS_EVENTOPTION_LAW_BALANCE_OF_POWER_OPTION_0_FAMILY_1",
            "BONUS_EVENTOPTION_LAW_BALANCE_OF_POWER_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_BALANCE_OF_POWER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_BALANCE_OF_POWER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_BALANCE_OF_POWER_OPTION_1",
            "BONUS_EVENTOPTION_LAW_BALANCE_OF_POWER_OPTION_1_FAMILY_1",
            "BONUS_EVENTOPTION_LAW_BALANCE_OF_POWER_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_0",
            "BONUS_EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_0_FAMILY_1",
            "BONUS_EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_1",
            "BONUS_EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_1_FAMILY_1",
            "BONUS_EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_0",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_1",
            "NONE",
            "NONE",
            "BONUS_FREE_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_2",
            "BONUS_EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_2_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_SHARE_THE_BURDEN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_SHARE_THE_BURDEN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_FREE_LAW"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_SHARE_THE_BURDEN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_SHARE_THE_BURDEN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_SHARE_THE_BURDEN_OPTION_1_FAMILY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_0",
            "BONUS_EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_0_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_1",
            "BONUS_EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_1_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_2",
            "NONE",
            "BONUS_EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_NEW_HORIZONS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_NEW_HORIZONS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_NEW_HORIZONS_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_LAW_NEW_HORIZONS_OPTION_0_FAMILY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_NEW_HORIZONS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_NEW_HORIZONS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_NEW_HORIZONS_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_LAW_NEW_HORIZONS_OPTION_1_FAMILY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_IDLE_HANDS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_IDLE_HANDS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_IDLE_HANDS_OPTION_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_IDLE_HANDS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_IDLE_HANDS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_IDLE_HANDS_OPTION_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_IDLE_HANDS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_LAW_IDLE_HANDS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_IDLE_HANDS_OPTION_2",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_A_FEEBLE_MILITARY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_A_FEEBLE_MILITARY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_A_FEEBLE_MILITARY_OPTION_0_FAMILY",
            "NONE",
            "BONUS_EVENTOPTION_LAW_A_FEEBLE_MILITARY_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_A_FEEBLE_MILITARY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_A_FEEBLE_MILITARY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_LAW_A_FEEBLE_MILITARY_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_LAW_A_FEEBLE_MILITARY_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_CAPTIVES_OF_BELIEF_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_CAPTIVES_OF_BELIEF_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_CAPTIVES_OF_BELIEF_OPTION_0",
            "BONUS_EVENTOPTION_LAW_CAPTIVES_OF_BELIEF_OPTION_0_BARBARIAN",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_CAPTIVES_OF_BELIEF_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_CAPTIVES_OF_BELIEF_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_CAPTIVES_OF_BELIEF_OPTION_1",
            "NONE",
            "BONUS_EVENTOPTION_LAW_CAPTIVES_OF_BELIEF_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_0",
            "BONUS_EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_0_FAMILY_1",
            "BONUS_EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_1",
            "BONUS_EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_1_FAMILY_1",
            "BONUS_EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_2",
        "Text": "TEXT_EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_2",
            "BONUS_EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_2_FAMILY_1",
            "BONUS_EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_FRIEND_OF_THE_FAITH_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_FRIEND_OF_THE_FAITH_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_FRIEND_OF_THE_FAITH_OPTION_0",
            "BONUS_EVENTOPTION_LAW_FRIEND_OF_THE_FAITH_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_FRIEND_OF_THE_FAITH_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_FRIEND_OF_THE_FAITH_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_FRIEND_OF_THE_FAITH_OPTION_1",
            "BONUS_EVENTOPTION_LAW_FRIEND_OF_THE_FAITH_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_ABUNDANCE_OF_RICHES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_ABUNDANCE_OF_RICHES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_LAW_ABUNDANCE_OF_RICHES_OPTION_0_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_ABUNDANCE_OF_RICHES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_ABUNDANCE_OF_RICHES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_ABUNDANCE_OF_RICHES_OPTION_1",
            "BONUS_EVENTOPTION_LAW_ABUNDANCE_OF_RICHES_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_0",
            "BONUS_EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_0_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_1",
            "BONUS_EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_1_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_2",
            "BONUS_EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_VIEW_FROM_THE_THRONE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_VIEW_FROM_THE_THRONE_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_VIEW_FROM_THE_THRONE_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_VIEW_FROM_THE_THRONE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_VIEW_FROM_THE_THRONE_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_VIEW_FROM_THE_THRONE_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_VIEW_FROM_THE_THRONE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_VIEW_FROM_THE_THRONE_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_VIEW_FROM_THE_THRONE_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_WARM_RELATIONS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_WONDER_WARM_RELATIONS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_WONDER_WARM_RELATIONS_OPTION_0_FAMILY_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_WARM_RELATIONS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_WONDER_WARM_RELATIONS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_WONDER_WARM_RELATIONS_OPTION_1_FAMILY_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_WARM_RELATIONS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_WONDER_WARM_RELATIONS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_WONDER_WARM_RELATIONS_OPTION_2_FAMILY_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_ETERNAL_REST_OPTION_0",
        "Text": "TEXT_EVENTOPTION_WONDER_ETERNAL_REST_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WONDER_ETERNAL_REST_OPTION_0",
            "BONUS_EVENTOPTION_WONDER_ETERNAL_REST_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_ETERNAL_REST_OPTION_1",
        "Text": "TEXT_EVENTOPTION_WONDER_ETERNAL_REST_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WONDER_ETERNAL_REST_OPTION_1",
            "NONE",
            "BONUS_EVENTOPTION_WONDER_ETERNAL_REST_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_ETERNAL_REST_OPTION_2",
        "Text": "TEXT_EVENTOPTION_WONDER_ETERNAL_REST_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WONDER_ETERNAL_REST_OPTION_2",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_GODS_AND_MEN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_WONDER_GODS_AND_MEN_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WONDER_GODS_AND_MEN_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_GODS_AND_MEN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_WONDER_GODS_AND_MEN_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WONDER_GODS_AND_MEN_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_GODS_AND_MEN_OPTION_2",
        "Text": "TEXT_EVENTOPTION_WONDER_GODS_AND_MEN_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WONDER_GODS_AND_MEN_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_THE_CIRCUS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_WONDER_THE_CIRCUS_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WONDER_THE_CIRCUS_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_THE_CIRCUS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_WONDER_THE_CIRCUS_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WONDER_THE_CIRCUS_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_A_SPIRITUAL_CROSSROADS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_WONDER_A_SPIRITUAL_CROSSROADS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_WONDER_A_SPIRITUAL_CROSSROADS_OPTION_0_RELIGION",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_A_SPIRITUAL_CROSSROADS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_WONDER_A_SPIRITUAL_CROSSROADS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_WONDER_A_SPIRITUAL_CROSSROADS_OPTION_1_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_A_SPIRITUAL_CROSSROADS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_WONDER_A_SPIRITUAL_CROSSROADS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_WONDER_A_SPIRITUAL_CROSSROADS_OPTION_2",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_BEACON_OF_KNOWLEDGE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_WONDER_BEACON_OF_KNOWLEDGE_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WONDER_BEACON_OF_KNOWLEDGE_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_BEACON_OF_KNOWLEDGE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_WONDER_BEACON_OF_KNOWLEDGE_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WONDER_BEACON_OF_KNOWLEDGE_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_BEACON_OF_KNOWLEDGE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_WONDER_BEACON_OF_KNOWLEDGE_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WONDER_BEACON_OF_KNOWLEDGE_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_PUBLIC_SPECTACLE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_WONDER_PUBLIC_SPECTACLE_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WONDER_PUBLIC_SPECTACLE_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_PUBLIC_SPECTACLE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_WONDER_PUBLIC_SPECTACLE_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WONDER_PUBLIC_SPECTACLE_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_WONDER_PUBLIC_SPECTACLE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_WONDER_PUBLIC_SPECTACLE_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_WONDER_PUBLIC_SPECTACLE_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_MOUNTAIN_LIGHTS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_MOUNTAIN_LIGHTS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_MOUNTAIN_LIGHTS_OPTION_0",
            "BONUS_EVENTOPTION_RELIGION_MOUNTAIN_LIGHTS_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_RELIGION_MOUNTAIN_LIGHTS_OPTION_0_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_MOUNTAIN_LIGHTS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_MOUNTAIN_LIGHTS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_MOUNTAIN_LIGHTS_OPTION_1",
            "BONUS_EVENTOPTION_RELIGION_MOUNTAIN_LIGHTS_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_0_RELIGION",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_1",
            "BONUS_EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_1_RELIGION",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_2_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_NOMADS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_NOMADS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_NOMADS_OPTION_0_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_NOMADS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_NOMADS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_NOMADS_OPTION_1",
            "BONUS_EVENTOPTION_RELIGION_NOMADS_OPTION_1_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_READING_THE_WORD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_READING_THE_WORD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_READING_THE_WORD_OPTION_0",
            "BONUS_EVENTOPTION_RELIGION_READING_THE_WORD_OPTION_0_RELIGION",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_READING_THE_WORD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_READING_THE_WORD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_READING_THE_WORD_OPTION_1",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_READING_THE_WORD_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_0_RELIGION",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_1_CITY",
            "BONUS_EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_1_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_2",
            "BONUS_EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_2_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_KINGDOM_OF_GOD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_KINGDOM_OF_GOD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_KINGDOM_OF_GOD_OPTION_0",
            "BONUS_EVENTOPTION_RELIGION_KINGDOM_OF_GOD_OPTION_0_RELIGION",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_KINGDOM_OF_GOD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_KINGDOM_OF_GOD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_KINGDOM_OF_GOD_OPTION_1",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_KINGDOM_OF_GOD_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_1",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_LIGHT_AND_DARK_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_LIGHT_AND_DARK_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_LIGHT_AND_DARK_OPTION_0_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_LIGHT_AND_DARK_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_LIGHT_AND_DARK_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_LIGHT_AND_DARK_OPTION_1_FAMILY_0",
            "BONUS_EVENTOPTION_RELIGION_LIGHT_AND_DARK_OPTION_1_FAMILY_1",
            "BONUS_EVENTOPTION_RELIGION_LIGHT_AND_DARK_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_GADFLY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_GADFLY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_GADFLY_OPTION_0",
            "BONUS_EVENTOPTION_CULTURE_GADFLY_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_GADFLY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CULTURE_GADFLY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_GADFLY_OPTION_1",
            "BONUS_EVENTOPTION_CULTURE_GADFLY_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_SHOOTING_STAR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CULTURE_SHOOTING_STAR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_SHOOTING_STAR_OPTION_0"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_SHOOTING_STAR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CULTURE_SHOOTING_STAR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_SHOOTING_STAR_OPTION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CULTURE_SHOOTING_STAR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CULTURE_SHOOTING_STAR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CULTURE_SHOOTING_STAR_OPTION_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_MY_CONDOLENCES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_MY_CONDOLENCES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_MY_CONDOLENCES_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_TRAIT_MY_CONDOLENCES_OPTION_0_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_MY_CONDOLENCES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_MY_CONDOLENCES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_MY_CONDOLENCES_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_TRAIT_MY_CONDOLENCES_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOCAL_BRIGANDS_OPTION_0",
        "EventLinkAdd": "EVENTLINK_LOCAL_BRIGANDS",
        "Text": "TEXT_EVENTOPTION_LOCAL_BRIGANDS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_LOCAL_BRIGANDS_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOCAL_BRIGANDS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LOCAL_BRIGANDS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_XP_UNIT_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOCAL_BRIGANDS_ENDING_A_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LOCAL_BRIGANDS_ENDING_A_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LOCAL_BRIGANDS_ENDING_A_OPTION_0",
            "BONUS_EVENTOPTION_LOCAL_BRIGANDS_ENDING_A_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOCAL_BRIGANDS_ENDING_B_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LOCAL_BRIGANDS_ENDING_B_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LOCAL_BRIGANDS_ENDING_B_OPTION_0",
            "BONUS_EVENTOPTION_LOCAL_BRIGANDS_ENDING_B_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOCAL_BRIGANDS_ENDING_C_OPTION_0",
        "Text": "TEXT_EVENTOPTION_LOCAL_BRIGANDS_ENDING_C_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LOCAL_BRIGANDS_ENDING_C_OPTION_0_UNIT",
            "BONUS_EVENTOPTION_LOCAL_BRIGANDS_ENDING_C_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_LOCAL_BRIGANDS_ENDING_C_OPTION_1",
        "Text": "TEXT_EVENTOPTION_LOCAL_BRIGANDS_ENDING_C_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_LOCAL_BRIGANDS_ENDING_C_OPTION_1_UNIT",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AN_UNLIKELY_SCENARIO_NO",
        "Text": "TEXT_EVENTOPTION_AN_UNLIKELY_SCENARIO_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_AN_UNLIKELY_SCENARIO_NO_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AN_UNLIKELY_SCENARIO_YES",
        "Text": "TEXT_EVENTOPTION_AN_UNLIKELY_SCENARIO_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_FOOD_LOSS_AVERAGE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGIOUS_FREEDOM_ORTHODOXY",
        "Text": "TEXT_EVENTOPTION_RELIGIOUS_FREEDOM_ORTHODOXY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGIOUS_FREEDOM_ORTHODOXY_PLAYER",
            "NONE",
            "BONUS_EVENTOPTION_RELIGIOUS_FREEDOM_ORTHODOXY_RELIGION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGIOUS_FREEDOM_TOLERANCE",
        "Text": "TEXT_EVENTOPTION_RELIGIOUS_FREEDOM_TOLERANCE",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGIOUS_FREEDOM_TOLERANCE_PLAYER",
            "BONUS_EVENTOPTION_RELIGIOUS_FREEDOM_TOLERANCE_RELIGION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGIOUS_FREEDOM_FEARFUL",
        "Text": "TEXT_EVENTOPTION_RELIGIOUS_FREEDOM_FEARFUL",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGIOUS_FREEDOM_FEARFUL_PLAYER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AMBASSADOR_CANDIDATES_FIRST",
        "Text": "TEXT_EVENTOPTION_AMBASSADOR_CANDIDATES_FIRST",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_AMBASSADOR_CANDIDATES_FIRST_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_AMBASSADOR_CANDIDATES_SECOND",
        "Text": "TEXT_EVENTOPTION_AMBASSADOR_CANDIDATES_SECOND",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_AMBASSADOR_CANDIDATES_SECOND_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHANCELLOR_CANDIDATES_FIRST",
        "Text": "TEXT_EVENTOPTION_CHANCELLOR_CANDIDATES_FIRST",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHANCELLOR_CANDIDATES_FIRST_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHANCELLOR_CANDIDATES_SECOND",
        "Text": "TEXT_EVENTOPTION_CHANCELLOR_CANDIDATES_SECOND",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHANCELLOR_CANDIDATES_SECOND_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SPYMASTER_CANDIDATES_FIRST",
        "Text": "TEXT_EVENTOPTION_SPYMASTER_CANDIDATES_FIRST",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SPYMASTER_CANDIDATES_FIRST_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SPYMASTER_CANDIDATES_SECOND",
        "Text": "TEXT_EVENTOPTION_SPYMASTER_CANDIDATES_SECOND",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SPYMASTER_CANDIDATES_SECOND_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_COUNCIL_CANDIDATES_NEITHER",
        "Text": "TEXT_EVENTOPTION_COUNCIL_CANDIDATES_NEITHER",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_COUNCIL_CANDIDATES_NEITHER_CHARACTER_0",
            "BONUS_EVENTOPTION_COUNCIL_CANDIDATES_NEITHER_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_0_CHARACTER",
            "BONUS_EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_1_CHARACTER",
            "BONUS_EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_1_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_2_CITY"
          ]
        },
        "LeaderSubject": "SUBJECT_INTELLIGENT"
      },
      {
        "zType": "EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_0_CHARACTER",
            "NONE",
            "BONUS_EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_0_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_1_CHARACTER",
            "NONE",
            "BONUS_EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_1_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_2_CHARACTER",
            "NONE",
            "BONUS_EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_2_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_BUILDER"
      },
      {
        "zType": "EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_0_PLAYER",
            "BONUS_EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_0_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_1_CHARACTER",
            "BONUS_PLAYER_WAR",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_2_CHARACTER",
            "BONUS_EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_2_PLAYER",
            "BONUS_EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_2_FAMILY"
          ]
        },
        "LeaderSubject": "SUBJECT_DIPLOMAT"
      },
      {
        "zType": "EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_0_UNIT",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_1_UNIT",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_2_UNIT",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_3",
        "Text": "TEXT_EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_3_UNIT",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_COMMANDER"
      },
      {
        "zType": "EVENTOPTION_TECH_LATEEN_MAIDEN_VOYAGE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_LATEEN_MAIDEN_VOYAGE_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_LATEEN_MAIDEN_VOYAGE_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_LATEEN_MAIDEN_VOYAGE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_LATEEN_MAIDEN_VOYAGE_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_LATEEN_MAIDEN_VOYAGE_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_LATEEN_MAIDEN_VOYAGE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_LATEEN_MAIDEN_VOYAGE_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_LATEEN_MAIDEN_VOYAGE_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_0_CITY_0",
            "NONE",
            "BONUS_EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_0_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_1_CITY_0",
            "NONE",
            "BONUS_EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_1_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_2_CHARACTER",
            "BONUS_EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_2_CITY",
            "NONE",
            "BONUS_EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_2_RELIGION"
          ]
        },
        "LeaderSubject": "SUBJECT_PIOUS"
      },
      {
        "zType": "EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_0_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_0_FAMILY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_1_PLAYER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_HYDRAULICS_THE_AUTOMATON_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_HYDRAULICS_THE_AUTOMATON_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_HYDRAULICS_THE_AUTOMATON_OPTION_0_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_HYDRAULICS_THE_AUTOMATON_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_HYDRAULICS_THE_AUTOMATON_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_HYDRAULICS_THE_AUTOMATON_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_HYDRAULICS_THE_AUTOMATON_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_HYDRAULICS_THE_AUTOMATON_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TECH_HYDRAULICS_THE_AUTOMATON_OPTION_2_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BODKIN_THE_POINTY_END_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_BODKIN_THE_POINTY_END_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_BODKIN_THE_POINTY_END_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BODKIN_THE_POINTY_END_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_BODKIN_THE_POINTY_END_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_BODKIN_THE_POINTY_END_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BODKIN_THE_POINTY_END_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_BODKIN_THE_POINTY_END_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_BODKIN_THE_POINTY_END_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_HYDRAULICS_RUNNING_WATERS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_HYDRAULICS_RUNNING_WATERS_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_HYDRAULICS_RUNNING_WATERS_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_HYDRAULICS_RUNNING_WATERS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_HYDRAULICS_RUNNING_WATERS_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_HYDRAULICS_RUNNING_WATERS_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_HYDRAULICS_RUNNING_WATERS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_HYDRAULICS_RUNNING_WATERS_OPTION_2"
      },
      {
        "zType": "EVENTOPTION_TECH_WINDLASS_EARLY_ADOPTERS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_WINDLASS_EARLY_ADOPTERS_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_WINDLASS_EARLY_ADOPTERS_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_WINDLASS_EARLY_ADOPTERS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_WINDLASS_EARLY_ADOPTERS_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_WINDLASS_EARLY_ADOPTERS_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_WINDLASS_EARLY_ADOPTERS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_WINDLASS_EARLY_ADOPTERS_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_WINDLASS_EARLY_ADOPTERS_OPTION_2"
        },
        "LeaderSubject": "SUBJECT_TACTICIAN"
      },
      {
        "zType": "EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_1_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_2_CHARACTER_0",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_PLAYER_WAR"
      },
      {
        "zType": "EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_3",
        "Text": "TEXT_EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_3_CHARACTER_0",
            "BONUS_EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_3_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_CRUEL"
      },
      {
        "zType": "EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_0_CHARACTER_0",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_0_RESOURCE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_1_CHARACTER_0",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_2_FAMILY",
            "BONUS_EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_SARISSA_COMPANION_CAVALRY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_SARISSA_COMPANION_CAVALRY_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_SARISSA_COMPANION_CAVALRY_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_SARISSA_COMPANION_CAVALRY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_SARISSA_COMPANION_CAVALRY_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_SARISSA_COMPANION_CAVALRY_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_SARISSA_COMPANION_CAVALRY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_SARISSA_COMPANION_CAVALRY_OPTION_2",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TECH_SARISSA_COMPANION_CAVALRY_OPTION_2"
        }
      },
      {
        "zType": "EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_LOYAL"
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_0_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_1_FAMILY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_2_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_EXTRAVAGANT"
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_0_CHARACTER",
            "BONUS_EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_1_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_2_CHARACTER",
            "BONUS_EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_2_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_3",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_3_CHARACTER",
            "BONUS_EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_3_PLAYER"
          ]
        },
        "LeaderSubject": "SUBJECT_DEALMAKER"
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_0_CITY",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_1_CHARACTER_0",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_2_CHARACTER_0",
            "NONE",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_JUDGE"
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_SURVIVORS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_SURVIVORS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TECH_BARDING_SURVIVORS_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_SURVIVORS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_SURVIVORS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TECH_BARDING_SURVIVORS_OPTION_1_UNIT",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TECH_BARDING_SURVIVORS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TECH_BARDING_SURVIVORS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_TECH_BARDING_SURVIVORS_OPTION_2_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_1_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_2",
        "EventLinkAdd": "EVENTLINK_RELATIONSHIP_TREACHERY",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_3_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_3_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_COMMANDER"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_ALLIED_INTELLIGENCE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_ALLIED_INTELLIGENCE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_ALLIED_INTELLIGENCE_OPTION_0_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_ALLIED_INTELLIGENCE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_ALLIED_INTELLIGENCE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_ALLIED_INTELLIGENCE_OPTION_1_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_ALLIED_INTELLIGENCE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_ALLIED_INTELLIGENCE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_ALLIED_INTELLIGENCE_OPTION_2_PLAYER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_3_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_RELIGION_STATE"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GIFT_OF_LAND_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GIFT_OF_LAND_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GIFT_OF_LAND_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GIFT_OF_LAND_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GIFT_OF_LAND_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GIFT_OF_LAND_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GIFT_OF_LAND_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GIFT_OF_LAND_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GIFT_OF_LAND_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_ENGINEER"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_0_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_0_CHARACTER_3",
            "BONUS_EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_0_CHARACTER_4"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_1_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_1_CHARACTER_3",
            "BONUS_EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_1_CHARACTER_4"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_2_CHARACTER_1",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_NEW_METHOD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_NEW_METHOD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_NEW_METHOD_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_NEW_METHOD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_NEW_METHOD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_NEW_METHOD_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_NEW_METHOD_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_NEW_METHOD_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_NEW_METHOD_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_INTELLIGENT"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_0_RELIGION",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_1_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_1_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_2_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_2_CITY"
          ]
        },
        "LeaderSubject": "SUBJECT_PIOUS"
      },
      {
        "zType": "EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_PLAYER_JUDGE"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_0_CHARACTER_2",
            "NONE",
            {
              
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_1_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_1_FAMILY",
            {
              
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_2_CHARACTER_1",
            "NONE",
            "NONE",
            {
              
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_3"
      },
      {
        "zType": "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_TACTICS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_TACTICS_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_TACTICS_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_TACTICS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_TACTICS_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_TACTICS_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_RHETORIC_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_RHETORIC_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_RHETORIC_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_RHETORIC_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_RHETORIC_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_RHETORIC_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_COMMERCE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_COMMERCE_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_COMMERCE_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_COMMERCE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_COMMERCE_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_COMMERCE_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_PHILOSOPHY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_PHILOSOPHY_OPTION_0",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_PHILOSOPHY_OPTION_0"
        }
      },
      {
        "zType": "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_PHILOSOPHY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_PHILOSOPHY_OPTION_1",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_GRADUATION_STUDIES_COMPLETE_PHILOSOPHY_OPTION_1"
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_IN_YOUR_DEBT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_IN_YOUR_DEBT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_IN_YOUR_DEBT_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_IN_YOUR_DEBT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_IN_YOUR_DEBT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_IN_YOUR_DEBT_OPTION_1_CHARACTER_3",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_IN_YOUR_DEBT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_IN_YOUR_DEBT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_IN_YOUR_DEBT_OPTION_2_CHARACTER_3",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_JEALOUS_RAGE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_JEALOUS_RAGE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_JEALOUS_RAGE_OPTION_0_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_JEALOUS_RAGE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_JEALOUS_RAGE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_JEALOUS_RAGE_OPTION_1_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_JEALOUS_RAGE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_JEALOUS_RAGE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_JEALOUS_RAGE_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_1_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_2_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_JAILBREAK_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_JAILBREAK_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_JAILBREAK_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_TRAIT_JAILBREAK_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_JAILBREAK_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_JAILBREAK_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_JAILBREAK_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_TRAIT_JAILBREAK_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_JAILBREAK_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_JAILBREAK_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_JAILBREAK_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_TRAIT_JAILBREAK_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_0",
        "HelpText": "TEXT_EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_0_HELP",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_0_CHARACTER_0",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_0_CHARACTER_3"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_1_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_1_CHARACTER_3"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_2_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_0_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_1_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_2_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_2_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_3_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_DEALMAKER"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_0_CITY",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_1_CITY",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_2_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PLAYING_POLITICS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PLAYING_POLITICS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_PLAYING_POLITICS_OPTION_0_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_PLAYING_POLITICS_OPTION_0_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PLAYING_POLITICS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PLAYING_POLITICS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_PLAYING_POLITICS_OPTION_1_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_PLAYING_POLITICS_OPTION_1_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONEVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_2",
            "NONEVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_CAVE_OF_PATRIARCHS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_CAVE_OF_PATRIARCHS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_CAVE_OF_PATRIARCHS_OPTION_0_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_CAVE_OF_PATRIARCHS_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_CAVE_OF_PATRIARCHS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_CAVE_OF_PATRIARCHS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_CAVE_OF_PATRIARCHS_OPTION_1_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_CAVE_OF_PATRIARCHS_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_0_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_0_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_1_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_1_CHARACTER",
            "BONUS_EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_1_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_2_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_2_CHARACTER",
            "BONUS_EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_2_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_0_RELIGION_0",
            "BONUS_EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_0_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_1_CHARACTER",
            "BONUS_EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_1_RELIGION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_2_RELIGION_0",
            "BONUS_EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_2_CHARACTER",
            "BONUS_EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_2_RELIGION_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_0_RELIGION_0",
            "BONUS_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_0_CHARACTER",
            "BONUS_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_0_PLAYER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_1_CHARACTER",
            "BONUS_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_1_PLAYER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_2_RELIGION_0",
            "BONUS_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_2_CHARACTER",
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_2_RELIGION_1"
          ]
        },
        "LeaderSubject": "SUBJECT_RELIGION_PLAYER_NO"
      },
      {
        "zType": "EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_3_CHARACTER",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_3_CITY",
            "BONUS_EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_3_RELIGION_1"
          ]
        },
        "LeaderSubject": "SUBJECT_PIOUS"
      },
      {
        "zType": "EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_0_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_1_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_2_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_2_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_3_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_3_CHARACTER_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_HOLY_WAR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_HOLY_WAR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_HOLY_WAR_OPTION_0_RELIGION_0",
            "BONUS_EVENTOPTION_RELIGION_HOLY_WAR_OPTION_0_CHARACTER",
            "NONE",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_HOLY_WAR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_HOLY_WAR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_HOLY_WAR_OPTION_1_CHARACTER",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_HOLY_WAR_OPTION_1_RELIGION_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_HOLY_WAR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_HOLY_WAR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_HOLY_WAR_OPTION_2_CHARACTER",
            "NONE",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_RIGHTEOUS"
      },
      {
        "zType": "EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_0_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_0_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_1_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_2_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_2_CHARACTER",
            "BONUS_EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_2_PLAYER"
          ]
        },
        "LeaderSubject": "SUBJECT_LEADER_SCHEMER"
      },
      {
        "zType": "EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_0_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_1_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_2_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_0_CHARACTER",
            "BONUS_EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_0_RELIGION",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_1_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_2_CHARACTER",
            "BONUS_EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_2_RELIGION",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_BLOOD_IN_THE_STREETS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_BLOOD_IN_THE_STREETS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_BLOOD_IN_THE_STREETS_OPTION_0_RELIGION_0",
            "NONE",
            "BONUS_XP_CHARACTER_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_BLOOD_IN_THE_STREETS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_BLOOD_IN_THE_STREETS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_BLOOD_IN_THE_STREETS_OPTION_1_RELIGION_1",
            "BONUS_XP_CHARACTER_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_BLOOD_IN_THE_STREETS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_BLOOD_IN_THE_STREETS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_GAIN_DISCIPLINE",
            "BONUS_EVENTOPTION_RELIGION_BLOOD_IN_THE_STREETS_OPTION_2_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_0_RELIGION",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_0_CITY",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_PIOUS"
      },
      {
        "zType": "EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_1_RELIGION",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_1_CITY",
            "BONUS_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_2_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_2_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_3_CHARACTER_0",
            "BONUS_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_3_CITY",
            "BONUS_EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_3_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_STRICT"
      },
      {
        "zType": "EVENTOPTION_RELIGION_BANNED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELIGION_BANNED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_BANNED_OPTION_0_RELIGION",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_BANNED_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_BANNED_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELIGION_BANNED_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_BANNED_OPTION_1_RELIGION",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_BANNED_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_BANNED_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELIGION_BANNED_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELIGION_BANNED_OPTION_2_RELIGION",
            "BONUS_EVENTOPTION_RELIGION_BANNED_OPTION_2_PLAYER",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_PIOUS"
      },
      {
        "zType": "EVENTOPTION_RELIGION_SPREAD_YES",
        "Text": "TEXT_EVENTOPTION_RELIGION_SPREAD_YES",
        "aeBonuses": {
          "zValue": [
            "BONUS_MONEY_LOSS_AVERAGE",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_SPREAD_YES"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELIGION_SPREAD_NO",
        "Text": "TEXT_EVENTOPTION_RELIGION_SPREAD_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_RELIGION_SPREAD_NO"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ZOROASTRIANISM_TEMPLES_YES",
        "Text": "TEXT_EVENTOPTION_ZOROASTRIANISM_TEMPLES_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_ZOROASTRIANISM_TEMPLES_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_ZOROASTRIANISM_TEMPLES_NO",
        "Text": "TEXT_EVENTOPTION_ZOROASTRIANISM_TEMPLES_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_JUDAISM_TEMPLES_YES",
        "Text": "TEXT_EVENTOPTION_JUDAISM_TEMPLES_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_JUDAISM_TEMPLES_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_JUDAISM_TEMPLES_NO",
        "Text": "TEXT_EVENTOPTION_JUDAISM_TEMPLES_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHRISTIANITY_CATHEDRALS_YES",
        "Text": "TEXT_EVENTOPTION_CHRISTIANITY_CATHEDRALS_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHRISTIANITY_CATHEDRALS_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHRISTIANITY_CATHEDRALS_NO",
        "Text": "TEXT_EVENTOPTION_CHRISTIANITY_CATHEDRALS_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MANICHAEISM_CATHEDRALS_YES",
        "Text": "TEXT_EVENTOPTION_MANICHAEISM_CATHEDRALS_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_MANICHAEISM_CATHEDRALS_YES",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_MANICHAEISM_CATHEDRALS_NO",
        "Text": "TEXT_EVENTOPTION_MANICHAEISM_CATHEDRALS_NO",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_XP_CHARACTER_SMALL",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_1",
        "Text": "TEXT_EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_2",
        "Text": "TEXT_EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_2_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DREAMS_OF_HOME_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_DREAMS_OF_HOME_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_DREAMS_OF_HOME_OPTION_0_CHARACTER",
            "BONUS_EVENTOPTION_TRAIT_DREAMS_OF_HOME_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_DREAMS_OF_HOME_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_DREAMS_OF_HOME_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_REMOVE_TRAIT_EXPLORING",
            "BONUS_EVENTOPTION_TRAIT_DREAMS_OF_HOME_OPTION_1_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_0_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_1_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_2_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_REMOVE_TRAIT_EXPLORING",
            "BONUS_EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_SCHOLAR"
      },
      {
        "zType": "EVENTOPTION_TRAIT_MONSOON_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TRAIT_MONSOON_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_MONSOON_OPTION_0_CHARACTER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_MONSOON_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TRAIT_MONSOON_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_MONSOON_OPTION_1_CHARACTER",
            "NONE",
            "BONUS_EVENTOPTION_TRAIT_MONSOON_OPTION_1_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TRAIT_MONSOON_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TRAIT_MONSOON_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TRAIT_MONSOON_OPTION_2_CHARACTER",
            "NONE",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_ROBUST"
      },
      {
        "zType": "EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_0_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_1_CHARACTER",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_2_CHARACTER",
            "BONUS_EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_SUPERSTITIOUS"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_0_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_1_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_2_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_3_CHARACTER"
          ]
        },
        "LeaderSubject": "SUBJECT_FOOLISH"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_AN_ADMIRER_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_AN_ADMIRER_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_AN_ADMIRER_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_AN_ADMIRER_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_AN_ADMIRER_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_AN_ADMIRER_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_AN_ADMIRER_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_AN_ADMIRER_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_AN_ADMIRER_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_COMPASSIONATE"
      },
      {
        "zType": "EVENTOPTION_CHARACTER_RELEASED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_CHARACTER_RELEASED_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_CHARACTER_RELEASED_OPTION_0",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_2_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_MONEY_SEND_AVERAGE",
            "BONUS_EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_3_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_3_CITY"
          ]
        },
        "LeaderSubject": "SUBJECT_CUNNING"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_CRUEL"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_3_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GUEST_OF_HONOR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GUEST_OF_HONOR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GUEST_OF_HONOR_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GUEST_OF_HONOR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GUEST_OF_HONOR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GUEST_OF_HONOR_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_VISITING_PRINCESS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_VISITING_PRINCESS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_VISITING_PRINCESS_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_VISITING_PRINCESS_OPTION_0_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_VISITING_PRINCESS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_VISITING_PRINCESS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_VISITING_PRINCESS_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_VISITING_PRINCESS_OPTION_1_CITY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_INNER_CIRCLE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_INNER_CIRCLE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_INNER_CIRCLE_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_INNER_CIRCLE_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_INNER_CIRCLE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_INNER_CIRCLE_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_SPIRITUAL_CONNECTION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_SPIRITUAL_CONNECTION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_SPIRITUAL_CONNECTION_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_SPIRITUAL_CONNECTION_OPTION_0_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_SPIRITUAL_CONNECTION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_SPIRITUAL_CONNECTION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_SPIRITUAL_CONNECTION_OPTION_1_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_SPIRITUAL_CONNECTION_OPTION_1_RELIGION"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_GENEROUS_DONATION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_GENEROUS_DONATION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_A_GENEROUS_DONATION_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_GENEROUS_DONATION_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_A_GENEROUS_DONATION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_A_GENEROUS_DONATION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_A_GENEROUS_DONATION_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_0_BARBARIAN"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        },
        "LeaderSubject": "SUBJECT_CUNNING"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_0_CHARACTER_1",
            "NONE",
            {
              
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_1_CHARACTER_1",
            "NONE",
            {
              
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_2_FAMILY",
            {
              
            }
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_0_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_1_CHARACTER_1",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_2_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_2_FAMILY"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_0",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_0_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_1",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_1_CHARACTER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_2",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_2_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_BUILDER"
      },
      {
        "zType": "EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_3",
        "Text": "TEXT_EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_3_CHARACTER_0",
            "BONUS_EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_3_CHARACTER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_COMMANDER"
      },
      {
        "zType": "EVENTOPTION_TWO_VISIONS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TWO_VISIONS_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TWO_VISIONS_OPTION_0_CHARACTER_0",
            "BONUS_EVENTOPTION_TWO_VISIONS_OPTION_0_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TWO_VISIONS_OPTION_1",
        "Text": "TEXT_EVENTOPTION_TWO_VISIONS_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TWO_VISIONS_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_TWO_VISIONS_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TWO_VISIONS_OPTION_2",
        "Text": "TEXT_EVENTOPTION_TWO_VISIONS_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TWO_VISIONS_OPTION_2_CHARACTER_0",
            "BONUS_EVENTOPTION_TWO_VISIONS_OPTION_2_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_0",
        "Text": "TEXT_EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_0_CHARACTER",
            "NONE",
            "BONUS_EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_0_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_1",
        "EventLinkStart": "EVENTLINK_HEIR_THE_RUNAWAY_PRINCE",
        "Text": "TEXT_EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_1_CHARACTER",
            "NONE",
            "BONUS_EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_1_PLAYER_1"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_2",
        "Text": "TEXT_EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_2_CHARACTER",
            "BONUS_EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_2_PLAYER_0",
            "BONUS_EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_2_PLAYER_1"
          ]
        },
        "LeaderSubject": "SUBJECT_CRUEL"
      },
      {
        "zType": "EVENTOPTION_HEIR_TO_HEIR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_HEIR_TO_HEIR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HEIR_TO_HEIR_OPTION_0_CHARACTER_1",
            "BONUS_EVENTOPTION_HEIR_TO_HEIR_OPTION_0_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_TO_HEIR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_HEIR_TO_HEIR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_HEIR_TO_HEIR_OPTION_1_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_HEIR_TO_HEIR_OPTION_1_CHARACTER_2"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_HEIR_TO_HEIR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_HEIR_TO_HEIR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_HEIR_TO_HEIR_OPTION_2_CHARACTER_1",
            "BONUS_EVENTOPTION_HEIR_TO_HEIR_OPTION_2_CHARACTER_2"
          ]
        },
        "LeaderSubject": "SUBJECT_WARLIKE"
      },
      {
        "zType": "EVENTOPTION_HEIR_TO_HEIR_OPTION_3",
        "Text": "TEXT_EVENTOPTION_HEIR_TO_HEIR_OPTION_3",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_HEIR_TO_HEIR_OPTION_3_CHARACTER_2"
          ]
        },
        "LeaderSubject": "SUBJECT_INTELLIGENT"
      },
      {
        "zType": "EVENTOPTION_IN_ABSENTIA_OPTION_0",
        "Text": "TEXT_EVENTOPTION_IN_ABSENTIA_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_IN_ABSENTIA_OPTION_0_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_IN_ABSENTIA_OPTION_0_CHARACTER_3"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_IN_ABSENTIA_OPTION_1",
        "Text": "TEXT_EVENTOPTION_IN_ABSENTIA_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTOPTION_IN_ABSENTIA_OPTION_1_CHARACTER_2",
            "BONUS_EVENTOPTION_IN_ABSENTIA_OPTION_1_CHARACTER_3"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_IN_ABSENTIA_OPTION_2",
        "Text": "TEXT_EVENTOPTION_IN_ABSENTIA_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_IN_ABSENTIA_OPTION_2_CHARACTER_1",
            "NONE",
            "BONUS_EVENTOPTION_IN_ABSENTIA_OPTION_2_CHARACTER_3"
          ]
        },
        "LeaderSubject": "SUBJECT_AFFABLE"
      },
      {
        "zType": "EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_0",
        "Text": "TEXT_EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_0",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_0_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_0_PLAYER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_1",
        "Text": "TEXT_EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_1",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_1_CHARACTER_0",
            "BONUS_EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_1_CHARACTER_1",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_2",
        "Text": "TEXT_EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_2",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_2_CHARACTER_0",
            "NONE",
            "BONUS_EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_2_PLAYER"
          ]
        },
        "LeaderSubject": "SUBJECT_ORATOR"
      },
      {
        "beginGroup": "Tutorial",
        "zType": "EVENTOPTION_VICTORY_OK",
        "Text": "TEXT_EVENTOPTION_VICTORY_OK",
        "bTimelineScreen": "1"
      },
      {
        "zType": "EVENTOPTION_VICTORY_CONTINUE",
        "Text": "TEXT_EVENTOPTION_VICTORY_CONTINUE"
      },
      {
        "zType": "EVENTOPTION_VICTORY_MAIN_MENU",
        "Text": "TEXT_EVENTOPTION_VICTORY_MAIN_MENU",
        "bMainMenu": "1"
      },
      {
        "zType": "EVENTOPTION_LOSS_OK",
        "Text": "TEXT_EVENTOPTION_LOSS_OK",
        "bTimelineScreen": "1"
      },
      {
        "zType": "EVENTOPTION_LOSS_MAIN_MENU",
        "Text": "TEXT_EVENTOPTION_LOSS_MAIN_MENU",
        "bMainMenu": "1"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_INTRO_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_INTRO_OKAY"
      },
      {
        "zType": "EVENTOPTION_SCOUT_SELECTED_OK",
        "Text": "TEXT_EVENTOPTION_SCOUT_SELECTED_OK"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_ORDERS_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_ORDERS_OPTION_0"
      },
      {
        "zType": "EVENTOPTION_SECOND_CITY_OK",
        "Text": "TEXT_EVENTOPTION_SECOND_CITY_OK"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_WORKER_SELECTED_OPTION_0",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_WORKER_SELECTED_OPTION_0"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_SLINGER_SELECTED_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_SLINGER_SELECTED_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_WARRIOR_SELECTED_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_WARRIOR_SELECTED_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_CHARIOT_SELECTED_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_CHARIOT_SELECTED_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_BARBARIAN_CAMP_CLEARED_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_BARBARIAN_CAMP_CLEARED_OKAY",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TUTORIAL_BARBARIAN_CAMP_CLEARED_OKAY"
        }
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_CITY_CAPTURED_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_CITY_CAPTURED_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_CULTURE_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_CULTURE_OKAY",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TUTORIAL_CULTURE_OKAY"
        }
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_TRIBE_CONTACT_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_TRIBE_CONTACT_OKAY",
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTOPTION_TUTORIAL_TRIBE_CONTACT_OKAY_PLAYER",
            "NONE",
            "NONE"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_UNIT_ON_COOLDOWN_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_UNIT_ON_COOLDOWN_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_UNIT_FATIGUED_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_UNIT_FATIGUED_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_OUT_OF_ORDERS_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_OUT_OF_ORDERS_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_HARVEST_RESOURCE_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_HARVEST_RESOURECE_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_RELIGION_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_RELIGION_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_NATION_CONTACT_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_NATION_CONTACT_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_BARBARIANS_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_BARBARIANS_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_AMBITION_CITIES",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_AMBITION_CITIES",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TUTORIAL_AMBITION_CITIES"
        }
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_AMBITION_UNITS",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_AMBITION_UNITS",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TUTORIAL_AMBITION_UNITS"
        }
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_SUCCESSION_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_SUCCESSION_OKAY",
        "aeBonuses": {
          "zValue": "BONUS_EVENTOPTION_TUTORIAL_SUCCESSION_OKAY"
        }
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_LEGITIMACY_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_LEGITIMACY_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_MARRIAGE_OKAY",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_MARRIAGE_OKAY"
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_PROMOTION_YES",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_PROMOTION_YES",
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_TUTORIAL_PROMOTION_YES_CHARACTER"
          ]
        }
      },
      {
        "zType": "EVENTOPTION_TUTORIAL_PROMOTION_NO",
        "Text": "TEXT_EVENTOPTION_TUTORIAL_PROMOTION_NO"
      }
    ]
  }
}
    export default data
    