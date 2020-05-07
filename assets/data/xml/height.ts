
    const data: XmlHeight.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "iMovementCost": {
          
        },
        "iRangeChange": {
          
        },
        "iRevealChange": {
          
        },
        "iBuildChange": {
          
        },
        "iBorderValue": {
          
        },
        "iLandValueAdjacent": {
          
        },
        "bNoVegetation": {
          
        },
        "bImpassable": {
          
        },
        "bCitySite": {
          
        },
        "bRangedAttackBlock": {
          
        },
        "Color": {
          
        },
        "aiDefendUnitTrait": {
          
        }
      },
      {
        "zType": "HEIGHT_OCEAN",
        "zName": "Ocean",
        "bNoVegetation": "1"
      },
      {
        "zType": "HEIGHT_COAST",
        "zName": "Coast",
        "iLandValueAdjacent": "10",
        "bNoVegetation": "1"
      },
      {
        "zType": "HEIGHT_LAKE",
        "zName": "Lake",
        "iLandValueAdjacent": "20",
        "bNoVegetation": "1"
      },
      {
        "zType": "HEIGHT_FLAT",
        "zName": "Flat",
        "iRevealChange": "1",
        "aiDefendUnitTrait": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "-25"
          }
        }
      },
      {
        "zType": "HEIGHT_HILL",
        "zName": "Hill",
        "iMovementCost": "9",
        "iRangeChange": "1",
        "iRevealChange": "2",
        "iBuildChange": "1",
        "iBorderValue": "200",
        "bCitySite": "1",
        "Color": "COLOR_HEIGHT_HILL"
      },
      {
        "zType": "HEIGHT_MOUNTAIN",
        "zName": "Mountain",
        "iRangeChange": "2",
        "iRevealChange": "3",
        "iBorderValue": "-1",
        "iLandValueAdjacent": "40",
        "bNoVegetation": "1",
        "bImpassable": "1",
        "bRangedAttackBlock": "1"
      },
      {
        "zType": "HEIGHT_VOLCANO",
        "zName": "Volcano",
        "iRangeChange": "2",
        "iRevealChange": "3",
        "iBorderValue": "-1",
        "iLandValueAdjacent": "40",
        "bNoVegetation": "1",
        "bImpassable": "1",
        "bRangedAttackBlock": "1"
      }
    ]
  }
}
    export default data
    