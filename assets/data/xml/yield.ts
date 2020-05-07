
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
        "zHelp": {
          
        },
        "zIconName": {
          
        },
        "iMinimum": {
          
        },
        "iLuxuryRate": {
          
        },
        "iLeaderGovernor": {
          
        },
        "iForeignPopulation": {
          
        },
        "iFamilyMilitary": {
          
        },
        "iPerRuralPopulation": {
          
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
        "iDiscontentModifier": {
          
        },
        "iDiscontentMultiplier": {
          
        },
        "iValueAI": {
          
        },
        "iPrice": {
          
        },
        "iMinPrice": {
          
        },
        "iMaxPrice": {
          
        },
        "iDemand": {
          
        },
        "iOffensiveCost": {
          
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
          
        }
      },
      {
        "zType": "YIELD_GROWTH",
        "Name": "TEXT_YIELD_GROWTH",
        "Color": "COLOR_YIELD_GROWTH",
        "zHelp": "When a City's Growth{YIELD_GROWTH} fills up, the City gains a new Citizen. Basic ways to improve Growth{YIELD_GROWTH} include training link(SPECIALIST_FARMER,2) and link(IMPROVEMENTCLASS_BATHS,2).",
        "zIconName": "YIELD_GROWTH",
        "iMinimum": "10",
        "iLuxuryRate": "20",
        "iLeaderGovernor": "20",
        "iDiscontentModifier": "-5",
        "iValueAI": "50",
        "bFloor": "1"
      },
      {
        "zType": "YIELD_CIVICS",
        "Name": "TEXT_YIELD_CIVICS",
        "Color": "COLOR_YIELD_CIVICS",
        "zHelp": "Used to develop Specialists and finish Projects. Unused Civics{YIELD_CIVICS} go into the national stockpile, which can be used enact Laws and establish Theologies. Increase Civics{YIELD_CIVICS} by building link(IMPROVEMENTCLASS_COURTHOUSE,2) and link(PROJECT_FORUM_1,2).",
        "zIconName": "YIELD_CIVICS",
        "iMinimum": "10",
        "iValueAI": "50",
        "iUIPosition": "0",
        "bGlobal": "1",
        "bStockpile": "1",
        "bShortfall": "1"
      },
      {
        "zType": "YIELD_TRAINING",
        "Name": "TEXT_YIELD_TRAINING",
        "Color": "COLOR_YIELD_TRAINING",
        "zHelp": "Used to train Military Units. Unused Training{YIELD_TRAINING} goes into the national stockpile, which can be used to Promote and Upgrade Units. Increase Training{YIELD_TRAINING} by building link(IMPROVEMENT_BARRACKS,2) and link(IMPROVEMENT_RANGE,2).",
        "zIconName": "YIELD_TRAINING",
        "iMinimum": "10",
        "iValueAI": "50",
        "iOffensiveCost": "500",
        "iUIPosition": "1",
        "bGlobal": "1",
        "bStockpile": "1",
        "bShortfall": "1"
      },
      {
        "zType": "YIELD_CULTURE",
        "Name": "TEXT_YIELD_CULTURE",
        "Color": "COLOR_YIELD_CULTURE",
        "zHelp": "When a City's Culture{YIELD_CULTURE} fills up, a positive event occurs. The City's overall Culture{YIELD_CULTURE} Level affects what Improvements and Wonders can be built. Improve Culture{YIELD_CULTURE} by building link(IMPROVEMENTCLASS_SHRINE,2) and link(IMPROVEMENTCLASS_THEATER,2).",
        "zIconName": "YIELD_CULTURE",
        "iDiscontentModifier": "-5",
        "iValueAI": "50",
        "bFloor": "1"
      },
      {
        "zType": "YIELD_DISCONTENT",
        "Name": "TEXT_YIELD_DISCONTENT",
        "Color": "COLOR_YIELD_DISCONTENT",
        "zHelp": "Cities gain Discontent{YIELD_DECADENCE} over time. When a city's Discontent{YIELD_DECADENCE} fills up, its overall Discontent{YIELD_DECADENCE} Level goes up, which increases Maintenance{YIELD_MAINTENANCE} and reduces Growth{YIELD_GROWTH}. Use link(PROJECT_FESTIVAL,2) to reduce Discontent{YIELD_DECADENCE}.",
        "zIconName": "YIELD_DECADENCE",
        "iForeignPopulation": "20",
        "iFamilyMilitary": "-10",
        "iPerRuralPopulation": "2",
        "iValueAI": "-200",
        "bNoDamage": "1",
        "bNoAssimilate": "1",
        "bNegative": "1"
      },
      {
        "zType": "YIELD_SCIENCE",
        "Name": "TEXT_YIELD_SCIENCE",
        "Color": "COLOR_YIELD_SCIENCE",
        "zHelp": "Used to research technologies. Increase Science{YIELD_SCIENCE} by building link(PROJECT_ARCHIVE_1,2) and link(IMPROVEMENTCLASS_LIBRARY,2).",
        "zIconName": "YIELD_SCIENCE",
        "iValueAI": "100",
        "iUIPosition": "4",
        "bGlobal": "1",
        "bStockpile": "1"
      },
      {
        "zType": "YIELD_MONEY",
        "Name": "TEXT_YIELD_MONEY",
        "Color": "COLOR_YIELD_MONEY",
        "zHelp": "Used to purchase other resources. Increase Money{YIELD_MONEY} by building link(IMPROVEMENT_HAMLET,2) and link(IMPROVEMENTCLASS_MARKET,2).",
        "zIconName": "YIELD_MONEY",
        "iPerConnectedForeign": "20",
        "iPerLivingRoyal": "-1",
        "iPerLivingCourtier": "-2",
        "iValueAI": "10",
        "iDowryYieldBase": "1000",
        "iDowryYieldPer": "-100",
        "iUIPosition": "5",
        "bGlobal": "1",
        "bStockpile": "1"
      },
      {
        "zType": "YIELD_MAINTENANCE",
        "Name": "TEXT_YIELD_MAINTENANCE",
        "Color": "COLOR_YIELD_MAINTENANCE",
        "zHelp": "Decreases the amount of Money{YIELD_MONEY} income a City generates. Maintenance{YIELD_MAINTENANCE} can be reduced by connecting the City to your Capital.",
        "zIconName": "YIELD_MAINTENANCE",
        "iPerCapitalDist": "10",
        "iDiscontentMultiplier": "50",
        "iValueAI": "-10",
        "bGlobal": "1",
        "bNoDamage": "1",
        "bNoAssimilate": "1",
        "bNegative": "1",
        "AddToYield": "YIELD_MONEY"
      },
      {
        "zType": "YIELD_ORDERS",
        "Name": "TEXT_YIELD_ORDERS",
        "Color": "COLOR_YIELD_ORDERS",
        "zHelp": "Orders{YIELD_ORDERS} can be spent on various actions such as moving, attacking, and building Improvements. Unused Orders{YIELD_ORDERS} are sold for Money{YIELD_MONEY} at the end of the Year.",
        "zIconName": "YIELD_ORDERS",
        "iPerLegitimacy": "1",
        "iValueAI": "200",
        "iPrice": "20",
        "iMinPrice": "10",
        "iMaxPrice": "500",
        "iDemand": "200",
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
        "iValueAI": "40",
        "iPrice": "4",
        "iMinPrice": "2",
        "iMaxPrice": "100",
        "iDemand": "200",
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
        "iValueAI": "40",
        "iPrice": "4",
        "iMinPrice": "2",
        "iMaxPrice": "100",
        "iDemand": "200",
        "bGlobal": "1",
        "bStockpile": "1",
        "bCanSell": "1",
        "bCanBuy": "1",
        "bCanGift": "1",
        "bSellDebt": "1"
      },
      {
        "zType": "YIELD_WOOD",
        "Name": "TEXT_YIELD_WOOD",
        "Color": "COLOR_YIELD_WOOD",
        "zIconName": "YIELD_WOOD",
        "iValueAI": "60",
        "iPrice": "4",
        "iMinPrice": "2",
        "iMaxPrice": "100",
        "iDemand": "200",
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
        "iValueAI": "40",
        "iPrice": "4",
        "iMinPrice": "2",
        "iMaxPrice": "100",
        "iDemand": "200",
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
      }
    ]
  }
}
    export default data
    