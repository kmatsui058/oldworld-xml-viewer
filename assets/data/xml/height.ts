
    const data: XmlHeight.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "zIconName": {
          
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
        "aiDefendEffectUnit": {
          
        }
      },
      {
        "zType": "HEIGHT_OCEAN",
        "zName": "Ocean",
        "zIconName": "OceanEditorIcon",
        "bNoVegetation": "1"
      },
      {
        "zType": "HEIGHT_COAST",
        "zName": "Coast",
        "zIconName": "CoastEditorIcon",
        "iLandValueAdjacent": "10",
        "bNoVegetation": "1"
      },
      {
        "zType": "HEIGHT_LAKE",
        "zName": "Lake",
        "zIconName": "LakeEditorIcon",
        "iLandValueAdjacent": "20",
        "bNoVegetation": "1"
      },
      {
        "zType": "HEIGHT_FLAT",
        "zName": "Flat",
        "zIconName": "FlatEditorIcon",
        "iRevealChange": "1",
        "aiDefendEffectUnit": {
          "Pair": [
            {
              "zIndex": "EFFECTUNIT_MOUNTED",
              "iValue": "-25"
            },
            {
              "zIndex": "EFFECTUNIT_MANEUVERS",
              "iValue": "-25"
            }
          ]
        }
      },
      {
        "zType": "HEIGHT_HILL",
        "zName": "Hill",
        "zIconName": "HillsEditorIcon",
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
        "zIconName": "MountainEditorIcon",
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
        "zIconName": "VolcanoEditorIcon",
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
    