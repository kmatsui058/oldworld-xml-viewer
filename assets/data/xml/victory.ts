
    const data: XmlVictory.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "bToggle": {
          
        },
        "bConquest": {
          
        },
        "bAmbitions": {
          
        },
        "iPercentVP": {
          
        },
        "iOpponentMaxPointPercent": {
          
        },
        "iMinTurns": {
          
        },
        "zHelp": {
          
        }
      },
      {
        "zType": "VICTORY_POINTS",
        "Name": "TEXT_VICTORY_POINTS",
        "bToggle": "1",
        "iPercentVP": "100",
        "zHelp": "Victory from acquiring the target number of VPs."
      },
      {
        "zType": "VICTORY_DOUBLE",
        "Name": "TEXT_VICTORY_DOUBLE",
        "bToggle": "1",
        "iPercentVP": "50",
        "iOpponentMaxPointPercent": "50",
        "zHelp": "Victory from acquiring twice as many VPs as any other Nation.\n(Must also have at least half the target number of VPs. Only possible for Humans.)"
      },
      {
        "zType": "VICTORY_AMBITION",
        "Name": "TEXT_VICTORY_AMBITION",
        "bToggle": "1",
        "bAmbitions": "1",
        "zHelp": "Victory from completing int(MAX_AMBITIONS) Ambitions."
      },
      {
        "zType": "VICTORY_TIME",
        "Name": "TEXT_VICTORY_TIME",
        "iOpponentMaxPointPercent": "100",
        "iMinTurns": "200",
        "zHelp": "Victory from having the most VPs at the end of 200 Years."
      },
      {
        "zType": "VICTORY_CONQUEST",
        "Name": "TEXT_VICTORY_CONQUEST",
        "bConquest": "1",
        "zHelp": "Victory from conquering all other Nations."
      }
    ]
  }
}
    export default data
    