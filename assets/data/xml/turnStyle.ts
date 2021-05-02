
    const data: XmlTurnStyle.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "zHelp": {
          
        },
        "iTimeModifier": {
          
        },
        "iCombatModifier": {
          
        },
        "bSimultaneous": {
          
        },
        "bTeamSplit": {
          
        },
        "bTribeSplit": {
          
        },
        "bNoCooldown": {
          
        },
        "bNoBuild": {
          
        },
        "bNoMilitary": {
          
        }
      },
      {
        "zType": "TURNSTYLE_SIMULTANEOUS",
        "zName": "Simultaneous",
        "zHelp": "Simultaneous Turns",
        "iTimeModifier": "25",
        "iCombatModifier": "50",
        "bSimultaneous": "1",
        "bNoCooldown": "1"
      },
      {
        "zType": "TURNSTYLE_LOOSE",
        "zName": "Loose",
        "zHelp": "No Movement Restrictions",
        "iTimeModifier": "-25",
        "iCombatModifier": "50",
        "bTribeSplit": "1",
        "bNoCooldown": "1"
      },
      {
        "zType": "TURNSTYLE_NORMAL",
        "zName": "Normal",
        "zHelp": "Attacking during another Team's Turn gives a Double Cooldown",
        "iCombatModifier": "25"
      },
      {
        "zType": "TURNSTYLE_TIGHT",
        "zName": "Tight",
        "zHelp": "Can only move Non-Military Units during another Team's Turn",
        "iTimeModifier": "25",
        "iCombatModifier": "25",
        "bNoMilitary": "1"
      },
      {
        "zType": "TURNSTYLE_TEAMS",
        "zName": "Teams",
        "zHelp": "Cannot move any Units during another Team's Turn",
        "iTimeModifier": "50",
        "iCombatModifier": "25",
        "bNoBuild": "1",
        "bNoMilitary": "1"
      },
      {
        "zType": "TURNSTYLE_STRICT",
        "zName": "Strict",
        "zHelp": "Cannot move any Units during another Player's Turn",
        "iTimeModifier": "50",
        "iCombatModifier": "25",
        "bTeamSplit": "1",
        "bNoBuild": "1",
        "bNoMilitary": "1"
      }
    ]
  }
}
    export default data
    