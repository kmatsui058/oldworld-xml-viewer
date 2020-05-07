
    const data: XmlEventTrigger.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "eDataAllowed": {
          
        },
        "iProb": {
          "comment": "Chance out of 100 that this trigger will create an event."
        },
        "bModal": {
          "comment": "If set to 1 (true), this trigger can cause events to happen instantly mid-turn. Otherwise, it will only trigger events at the start of a turn."
        }
      },
      {
        "zType": "EVENTTRIGGER_START_GAME",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_WIN_GAME",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_LOSE_GAME",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_NEW_TURN"
      },
      {
        "zType": "EVENTTRIGGER_NEW_TURN_CHARACTER"
      },
      {
        "zType": "EVENTTRIGGER_TECHNOLOGY",
        "eDataAllowed": "TECH"
      },
      {
        "zType": "EVENTTRIGGER_RELIGION_FOUNDED",
        "eDataAllowed": "RELIGION"
      },
      {
        "zType": "EVENTTRIGGER_RELIGION_SPREAD",
        "eDataAllowed": "RELIGION"
      },
      {
        "zType": "EVENTTRIGGER_THEOLOGY_ESTABLISHED",
        "eDataAllowed": "THEOLOGY"
      },
      {
        "zType": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_BARBARIAN_ALLIANCE_OFFER"
      },
      {
        "zType": "EVENTTRIGGER_BARBARIAN_PEACE_OFFER"
      },
      {
        "zType": "EVENTTRIGGER_BARBARIAN_TRUCE_OFFER"
      },
      {
        "zType": "EVENTTRIGGER_BARBARIAN_WAR_OFFER"
      },
      {
        "zType": "EVENTTRIGGER_PLAYER_CONTACT",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_PLAYER_PEACE_OFFER"
      },
      {
        "zType": "EVENTTRIGGER_PLAYER_TRUCE_OFFER"
      },
      {
        "zType": "EVENTTRIGGER_PLAYER_WAR_OFFER"
      },
      {
        "zType": "EVENTTRIGGER_PLAYER_WAR_DECLARE"
      },
      {
        "zType": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER"
      },
      {
        "zType": "EVENTTRIGGER_CITY_FOUNDED",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_CITY_LOST"
      },
      {
        "zType": "EVENTTRIGGER_CITY_CAPTURED",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_CITY_CULTURE"
      },
      {
        "zType": "EVENTTRIGGER_PRODUCTION_PROJECT",
        "eDataAllowed": "PROJECT"
      },
      {
        "zType": "EVENTTRIGGER_PRODUCTION_SPECIALIST",
        "eDataAllowed": "SPECIALIST"
      },
      {
        "zType": "EVENTTRIGGER_PRODUCTION_UNIT",
        "eDataAllowed": "UNIT"
      },
      {
        "zType": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "eDataAllowed": "IMPROVEMENT"
      },
      {
        "zType": "EVENTTRIGGER_IMPROVEMENT_PILLAGED_TRIBE",
        "eDataAllowed": "IMPROVEMENT"
      },
      {
        "zType": "EVENTTRIGGER_IMPROVEMENT_PILLAGED_ENEMY",
        "eDataAllowed": "IMPROVEMENT"
      },
      {
        "zType": "EVENTTRIGGER_CHOOSE_AMBITION"
      },
      {
        "zType": "EVENTTRIGGER_GOAL_FINISHED",
        "eDataAllowed": "GOAL",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_MISSION_FINISHED"
      },
      {
        "zType": "EVENTTRIGGER_MARRIAGE_OFFER"
      },
      {
        "zType": "EVENTTRIGGER_MARRIAGE",
        "iProb": "25"
      },
      {
        "zType": "EVENTTRIGGER_BIRTH",
        "iProb": "25"
      },
      {
        "zType": "EVENTTRIGGER_DEATH",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_ADULTHOOD",
        "iProb": "25",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_TUTOR"
      },
      {
        "zType": "EVENTTRIGGER_ADOPTED",
        "iProb": "25"
      },
      {
        "zType": "EVENTTRIGGER_DIVORCE",
        "iProb": "25"
      },
      {
        "zType": "EVENTTRIGGER_COGNOMEN",
        "eDataAllowed": "COGNOMEN"
      },
      {
        "zType": "EVENTTRIGGER_SUCCESSION_US"
      },
      {
        "zType": "EVENTTRIGGER_SUCCESSION_THEM"
      },
      {
        "zType": "EVENTTRIGGER_ATTACKED_CITY",
        "iProb": "25",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_GENERAL_KILL",
        "iProb": "25",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_GENERAL_CRITICAL",
        "iProb": "25",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_GENERAL_INJURY",
        "iProb": "25",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_GENERAL_ATTACK",
        "iProb": "25",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_GENERAL_UNIT_KILLED",
        "iProb": "25"
      },
      {
        "zType": "EVENTTRIGGER_UNIT_PROMOTION",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_SET_TILE",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_RESOURCE_HARVESTED",
        "eDataAllowed": "RESOURCE",
        "iProb": "10",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_RUINS_EXPLORED",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "eDataAllowed": "IMPROVEMENT",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_UNIT_SELECTED",
        "eDataAllowed": "UNIT",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_UNIT_ON_COOLDOWN",
        "eDataAllowed": "UNIT",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_UNIT_IS_FATIGUED",
        "eDataAllowed": "UNIT",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_UNIT_NO_ORDERS",
        "eDataAllowed": "UNIT",
        "bModal": "1"
      }
    ]
  }
}
    export default data
    