
    const data: XmlVegetation.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "NameRemove": {
          
        },
        "AssetVariation": {
          
        },
        "zIconName": {
          
        },
        "zRemoveIcon": {
          
        },
        "zRemovalAudio": {
          
        },
        "iMovementCost": {
          
        },
        "iRemoveCost": {
          
        },
        "iBuildCost": {
          
        },
        "iGrowthRoll": {
          
        },
        "iBorderValue": {
          
        },
        "iRevealChange": {
          
        },
        "VegetationRemove": {
          
        },
        "VegetationGrow": {
          
        },
        "aiYieldRemove": {
          
        },
        "aiYieldBuild": {
          
        },
        "aiDefendUnitTrait": {
          
        },
        "aeTerrainAssetVariation": {
          
        }
      },
      {
        "zType": "VEGETATION_TREES",
        "Name": "TEXT_VEGETATION_TREES",
        "NameRemove": "TEXT_VEGETATION_TREES_REMOVE",
        "AssetVariation": "ASSET_VARIATION_VEGETATION_TREES",
        "zIconName": "VEGETATION_TREES",
        "zRemoveIcon": "REMOVE_TREES",
        "zRemovalAudio": "AUDIO_UNIT_WORKER_REMOVES_VEGETATION_TREES",
        "iMovementCost": "9",
        "iRemoveCost": "1",
        "iBuildCost": "3",
        "iBorderValue": "200",
        "iRevealChange": "1",
        "VegetationRemove": "VEGETATION_TREES_CUT",
        "aiYieldRemove": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "20"
          }
        },
        "aiYieldBuild": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "40"
          }
        },
        "aiDefendUnitTrait": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "50"
          }
        },
        "aeTerrainAssetVariation": {
          "Triple": {
            "First": {
              
            },
            "Second": "HEIGHT_HILL",
            "Third": "ASSET_VARIATION_VEGETATION_TREES_HILL"
          }
        }
      },
      {
        "zType": "VEGETATION_TREES_CUT",
        "Name": "TEXT_VEGETATION_TREES_CUT",
        "NameRemove": "TEXT_VEGETATION_TREES_CUT_REMOVE",
        "AssetVariation": "ASSET_VARIATION_VEGETATION_TREES_CUT",
        "zIconName": "VEGETATION_TREES_CUT",
        "zRemoveIcon": "REMOVE_TREES_CUT",
        "iRemoveCost": "2",
        "iBuildCost": "2",
        "iGrowthRoll": "40",
        "iBorderValue": "100",
        "VegetationGrow": "VEGETATION_TREES",
        "aiYieldRemove": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "20"
          }
        },
        "aiYieldBuild": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "VEGETATION_SCRUB",
        "Name": "TEXT_VEGETATION_SCRUB",
        "NameRemove": "TEXT_VEGETATION_SCRUB_REMOVE",
        "AssetVariation": "ASSET_VARIATION_VEGETATION_SCRUB",
        "zIconName": "VEGETATION_SCRUB",
        "zRemoveIcon": "REMOVE_SCRUB",
        "zRemovalAudio": "AUDIO_UNIT_WORKER_REMOVES_VEGETATION_SCRUB",
        "iMovementCost": "9",
        "iBuildCost": "1",
        "iRevealChange": "1",
        "VegetationRemove": "VEGETATION_SCRUB_CUT",
        "aiYieldRemove": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "10"
          }
        },
        "aiYieldBuild": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "20"
          }
        },
        "aiDefendUnitTrait": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "25"
          }
        },
        "aeTerrainAssetVariation": {
          "Triple": {
            "First": {
              
            },
            "Second": "HEIGHT_HILL",
            "Third": "ASSET_VARIATION_VEGETATION_SCRUB_HILL"
          }
        }
      },
      {
        "zType": "VEGETATION_SCRUB_CUT",
        "Name": "TEXT_VEGETATION_SCRUB_CUT",
        "NameRemove": "TEXT_VEGETATION_SCRUB_CUT_REMOVE",
        "AssetVariation": "ASSET_VARIATION_VEGETATION_SCRUB_CUT",
        "zIconName": "VEGETATION_SCRUB_CUT",
        "zRemoveIcon": "REMOVE_SCRUB_CUT",
        "iRemoveCost": "1",
        "iBuildCost": "1",
        "iGrowthRoll": "20",
        "VegetationGrow": "VEGETATION_SCRUB",
        "aiYieldRemove": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "10"
          }
        },
        "aiYieldBuild": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "10"
          }
        }
      }
    ]
  }
}
    export default data
    