
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
        "bCanEndTurn": {
          
        },
        "bBarbSplit": {
          
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
        "bCanEndTurn": "1",
        "bNoCooldown": "1"
      },
      {
        "zType": "TURNSTYLE_LOOSE",
        "zName": "Loose",
        "zHelp": "No Movement Restrictions",
        "iTimeModifier": "-25",
        "iCombatModifier": "50",
        "bBarbSplit": "1",
        "bNoCooldown": "1"
      },
      {
        "zType": "TURNSTYLE_NORMAL",
        "zName": "Normal",
        "zHelp": "Attacking on Enemy Turn gives a Double Cooldown",
        "iCombatModifier": "25",
        "bCanEndTurn": "1"
      },
      {
        "zType": "TURNSTYLE_TIGHT",
        "zName": "Tight",
        "zHelp": "Can only move Non-Military Units during Enemy Turn",
        "iTimeModifier": "25",
        "iCombatModifier": "25",
        "bCanEndTurn": "1",
        "bNoMilitary": "1"
      },
      {
        "zType": "TURNSTYLE_STRICT",
        "zName": "Strict",
        "zHelp": "Cannot move any Units during Enemy Turn",
        "iTimeModifier": "50",
        "iCombatModifier": "25",
        "bCanEndTurn": "1",
        "bNoBuild": "1",
        "bNoMilitary": "1"
      }
    ]
  }
}
    export default data
    