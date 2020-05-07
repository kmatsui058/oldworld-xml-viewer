
    const data: XmlTheology.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "zIconName": {
          
        },
        "iPrereqCount": {
          
        },
        "iColumn": {
          
        },
        "iRow": {
          
        },
        "iCost": {
          
        },
        "abPrereqTheology": {
          
        }
      },
      {
        "zType": "THEOLOGY_MYTHOLOGY",
        "zName": "Mythology",
        "zIconName": "THEOLOGY_MYTHOLOGY",
        "iPrereqCount": "0",
        "iColumn": "0",
        "iRow": "0",
        "iCost": "400"
      },
      {
        "zType": "THEOLOGY_VENERATION",
        "zName": "Veneration",
        "zIconName": "THEOLOGY_VENERATION",
        "iPrereqCount": "0",
        "iColumn": "2",
        "iRow": "0",
        "iCost": "400"
      },
      {
        "zType": "THEOLOGY_LEGALISM",
        "zName": "Legalism",
        "zIconName": "THEOLOGY_LEGALISM",
        "iPrereqCount": "0",
        "iColumn": "4",
        "iRow": "0",
        "iCost": "400"
      },
      {
        "zType": "THEOLOGY_REVELATION",
        "zName": "Revelation",
        "zIconName": "THEOLOGY_REVELATION",
        "iPrereqCount": "1",
        "iColumn": "1",
        "iRow": "1",
        "iCost": "600",
        "abPrereqTheology": {
          "Pair": [
            {
              "zIndex": "THEOLOGY_MYTHOLOGY",
              "bValue": "1"
            },
            {
              "zIndex": "THEOLOGY_VENERATION",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "THEOLOGY_GNOSTICISM",
        "zName": "Gnosticism",
        "zIconName": "THEOLOGY_GNOSTICISM",
        "iPrereqCount": "1",
        "iColumn": "3",
        "iRow": "1",
        "iCost": "600",
        "abPrereqTheology": {
          "Pair": [
            {
              "zIndex": "THEOLOGY_VENERATION",
              "bValue": "1"
            },
            {
              "zIndex": "THEOLOGY_LEGALISM",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "THEOLOGY_REDEMPTION",
        "zName": "Redemption",
        "zIconName": "THEOLOGY_REDEMPTION",
        "iPrereqCount": "2",
        "iColumn": "0",
        "iRow": "2",
        "iCost": "800",
        "abPrereqTheology": {
          "Pair": {
            "zIndex": "THEOLOGY_REVELATION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "THEOLOGY_DUALISM",
        "zName": "Dualism",
        "zIconName": "THEOLOGY_DUALISM",
        "iPrereqCount": "2",
        "iColumn": "2",
        "iRow": "2",
        "iCost": "800",
        "abPrereqTheology": {
          "Pair": [
            {
              "zIndex": "THEOLOGY_REVELATION",
              "bValue": "1"
            },
            {
              "zIndex": "THEOLOGY_GNOSTICISM",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "THEOLOGY_ENLIGHTENMENT",
        "zName": "Enlightenment",
        "zIconName": "THEOLOGY_ENLIGHTENMENT",
        "iPrereqCount": "2",
        "iColumn": "4",
        "iRow": "2",
        "iCost": "800",
        "abPrereqTheology": {
          "Pair": {
            "zIndex": "THEOLOGY_GNOSTICISM",
            "bValue": "1"
          }
        }
      }
    ]
  }
}
    export default data
    