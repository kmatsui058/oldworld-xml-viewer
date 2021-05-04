
    const data: XmlYield.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "Color": {
          
        },
        "Help": {
          
        },
        "zIconName": {
          
        },
        "iMinimum": {
          
        },
        "iLeaderGovernor": {
          
        },
        "iForeignPopulation": {
          
        },
        "iPerMissingFamily": {
          
        },
        "iPerUrbanTile": {
          
        },
        "iPerEmptyImprovement": {
          
        },
        "iPerConnectedForeign": {
          
        },
        "iPerLivingRoyal": {
          
        },
        "iPerLivingCourtier": {
          
        },
        "iPerCapitalDist": {
          
        },
        "iPerLegitimacy": {
          
        },
        "iHurryModifier": {
          
        },
        "iDiscontentModifier": {
          
        },
        "iPrice": {
          
        },
        "iMinPrice": {
          
        },
        "iMaxPrice": {
          
        },
        "iDemand": {
          
        },
        "iVolitility": {
          
        },
        "iGeneralCost": {
          
        },
        "iGovernorCost": {
          
        },
        "iOffensiveCost": {
          
        },
        "iHireMercenaryCost": {
          
        },
        "iDowryYieldBase": {
          
        },
        "iDowryYieldPer": {
          
        },
        "iUIPosition": {
          
        },
        "bGlobal": {
          
        },
        "bStockpile": {
          
        },
        "bNoDamage": {
          
        },
        "bNoAssimilate": {
          
        },
        "bWarning": {
          
        },
        "bNegative": {
          
        },
        "bFloor": {
          
        },
        "bShortfall": {
          
        },
        "bCanSell": {
          
        },
        "bCanBuy": {
          
        },
        "bCanGift": {
          
        },
        "bSellDebt": {
          
        },
        "AddToYield": {
          
        },
        "aiRoadCost": {
          
        },
        "aiUrbanCost": {
          
        },
        "aiOpinionCharacterRate": {
          
        }
      },
      {
        "zType": "YIELD_GROWTH",
        "Name": "TEXT_YIELD_GROWTH",
        "Color": "COLOR_YIELD_GROWTH",
        "Help": "TEXT_YIELD_GROWTH_HELP",
        "zIconName": "YIELD_GROWTH",
        "iMinimum": "10",
        "iLeaderGovernor": "20",
        "iHurryModifier": "50",
        "iDiscontentModifier": "-5",
        "bFloor": "1",
        "aiOpinionCharacterRate": {
          "Pair": [
            {
              "zIndex": "OPINIONCHARACTER_PLEASED",
              "iValue": "10"
            },
            {
              "zIndex": "OPINIONCHARACTER_FRIENDLY",
              "iValue": "20"
            }
          ]
        }
      },
      {
        "zType": "YIELD_CIVICS",
        "Name": "TEXT_YIELD_CIVICS",
        "Color": "COLOR_YIELD_CIVICS",
        "Help": "TEXT_YIELD_CIVICS_HELP",
        "zIconName": "YIELD_CIVICS",
        "iMinimum": "10",
        "iGovernorCost": "100",
        "iUIPosition": "6",
        "bGlobal": "1",
        "bStockpile": "1",
        "bShortfall": "1"
      },
      {
        "zType": "YIELD_TRAINING",
        "Name": "TEXT_YIELD_TRAINING",
        "Color": "COLOR_YIELD_TRAINING",
        "Help": "TEXT_YIELD_TRAINING_HELP",
        "zIconName": "YIELD_TRAINING",
        "iMinimum": "10",
        "iGeneralCost": "100",
        "iOffensiveCost": "500",
        "iUIPosition": "7",
        "bGlobal": "1",
        "bStockpile": "1",
        "bShortfall": "1"
      },
      {
        "zType": "YIELD_CULTURE",
        "Name": "TEXT_YIELD_CULTURE",
        "Color": "COLOR_YIELD_CULTURE",
        "Help": "TEXT_YIELD_CULTURE_HELP",
        "zIconName": "YIELD_CULTURE",
        "bFloor": "1"
      },
      {
        "zType": "YIELD_DISCONTENT",
        "Name": "TEXT_YIELD_DISCONTENT",
        "Color": "COLOR_YIELD_DISCONTENT",
        "Help": "TEXT_YIELD_DISCONTENT_HELP",
        "zIconName": "YIELD_DISCONTENT",
        "iForeignPopulation": "20",
        "iPerMissingFamily": "20",
        "iPerUrbanTile": "1",
        "bNoDamage": "1",
        "bNoAssimilate": "1",
        "bWarning": "1",
        "aiOpinionCharacterRate": {
          "Pair": [
            {
              "zIndex": "OPINIONCHARACTER_FURIOUS",
              "iValue": "30"
            },
            {
              "zIndex": "OPINIONCHARACTER_ANGRY",
              "iValue": "20"
            },
            {
              "zIndex": "OPINIONCHARACTER_UPSET",
              "iValue": "10"
            }
          ]
        }
      },
      {
        "zType": "YIELD_SCIENCE",
        "Name": "TEXT_YIELD_SCIENCE",
        "Color": "COLOR_YIELD_SCIENCE",
        "Help": "TEXT_YIELD_SCIENCE_HELP",
        "zIconName": "YIELD_SCIENCE",
        "iDiscontentModifier": "-5",
        "iUIPosition": "5",
        "bGlobal": "1",
        "bFloor": "1"
      },
      {
        "zType": "YIELD_MONEY",
        "Name": "TEXT_YIELD_MONEY",
        "Color": "COLOR_YIELD_MONEY",
        "Help": "TEXT_YIELD_MONEY_HELP",
        "zIconName": "YIELD_MONEY",
        "iPerConnectedForeign": "10",
        "iPerLivingRoyal": "-20",
        "iPerLivingCourtier": "-50",
        "iHireMercenaryCost": "10",
        "iDowryYieldBase": "2000",
        "iDowryYieldPer": "-200",
        "iUIPosition": "0",
        "bGlobal": "1",
        "bStockpile": "1"
      },
      {
        "zType": "YIELD_MAINTENANCE",
        "Name": "TEXT_YIELD_MAINTENANCE",
        "Color": "COLOR_YIELD_MAINTENANCE",
        "Help": "TEXT_YIELD_MAINTENANCE_HELP",
        "zIconName": "YIELD_MAINTENANCE",
        "iPerEmptyImprovement": "-20",
        "iPerCapitalDist": "-10",
        "iDiscontentModifier": "5",
        "bGlobal": "1",
        "bNoDamage": "1",
        "bNoAssimilate": "1",
        "bWarning": "1",
        "bNegative": "1",
        "AddToYield": "YIELD_MONEY"
      },
      {
        "zType": "YIELD_ORDERS",
        "Name": "TEXT_YIELD_ORDERS",
        "Color": "COLOR_YIELD_ORDERS",
        "Help": "TEXT_YIELD_ORDERS_HELP",
        "zIconName": "YIELD_ORDERS",
        "iPerLegitimacy": "1",
        "iPrice": "20",
        "iMinPrice": "10",
        "iMaxPrice": "1000",
        "iDemand": "1000",
        "iVolitility": "100",
        "iGovernorCost": "2",
        "iUIPosition": "8",
        "bGlobal": "1",
        "bStockpile": "1",
        "bNoDamage": "1",
        "bNoAssimilate": "1"
      },
      {
        "zType": "YIELD_FOOD",
        "Name": "TEXT_YIELD_FOOD",
        "Color": "COLOR_YIELD_FOOD",
        "zIconName": "YIELD_FOOD",
        "iPrice": "4",
        "iMinPrice": "2",
        "iMaxPrice": "100",
        "iDemand": "800",
        "iUIPosition": "1",
        "bGlobal": "1",
        "bStockpile": "1",
        "bCanSell": "1",
        "bCanBuy": "1",
        "bCanGift": "1",
        "bSellDebt": "1"
      },
      {
        "zType": "YIELD_IRON",
        "Name": "TEXT_YIELD_IRON",
        "Color": "COLOR_YIELD_IRON",
        "zIconName": "YIELD_IRON",
        "iPrice": "4",
        "iMinPrice": "2",
        "iMaxPrice": "100",
        "iDemand": "600",
        "iUIPosition": "2",
        "bGlobal": "1",
        "bStockpile": "1",
        "bCanSell": "1",
        "bCanBuy": "1",
        "bCanGift": "1",
        "bSellDebt": "1"
      },
      {
        "zType": "YIELD_STONE",
        "Name": "TEXT_YIELD_STONE",
        "Color": "COLOR_YIELD_STONE",
        "zIconName": "YIELD_STONE",
        "iPrice": "4",
        "iMinPrice": "2",
        "iMaxPrice": "100",
        "iDemand": "400",
        "iUIPosition": "3",
        "bGlobal": "1",
        "bStockpile": "1",
        "bCanSell": "1",
        "bCanBuy": "1",
        "bCanGift": "1",
        "bSellDebt": "1",
        "aiRoadCost": {
          "Pair": [
            {
              "zIndex": "HEIGHT_FLAT",
              "iValue": "10"
            },
            {
              "zIndex": "HEIGHT_HILL",
              "iValue": "20"
            }
          ]
        },
        "aiUrbanCost": {
          "Pair": [
            {
              "zIndex": "HEIGHT_FLAT",
              "iValue": "10"
            },
            {
              "zIndex": "HEIGHT_HILL",
              "iValue": "20"
            }
          ]
        }
      },
      {
        "zType": "YIELD_WOOD",
        "Name": "TEXT_YIELD_WOOD",
        "Color": "COLOR_YIELD_WOOD",
        "zIconName": "YIELD_WOOD",
        "iPrice": "4",
        "iMinPrice": "2",
        "iMaxPrice": "100",
        "iDemand": "200",
        "iUIPosition": "4",
        "bGlobal": "1",
        "bStockpile": "1",
        "bCanSell": "1",
        "bCanBuy": "1",
        "bCanGift": "1",
        "bSellDebt": "1"
      }
    ]
  }
}
    export default data
    