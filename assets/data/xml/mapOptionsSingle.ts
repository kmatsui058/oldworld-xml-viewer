
    const data: XmlMapOptionsSingle.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "zDescription": {
          
        },
        "bDefault": {
          
        },
        "bSinglePlayerValid": {
          
        },
        "bMultiPlayerValid": {
          
        }
      },
      {
        "zType": "MAP_OPTIONS_SINGLE_MIRROR",
        "zName": "TEXT_MAP_OPTION_MIRROR_MAP",
        "zDescription": "East-West symmetric map: need even number of teams",
        "bSinglePlayerValid": "0"
      },
      {
        "zType": "MAP_OPTIONS_SINGLE_SEASIDE_CENTER_BIAS",
        "zName": "TEXT_MAP_OPTION_CENTER_BIAS",
        "zDescription": "Player starts near the center of the map, only in single player",
        "bDefault": "1",
        "bMultiPlayerValid": "0"
      },
      {
        "zType": "MAP_OPTIONS_SINGLE_CENTER_BIAS",
        "zName": "TEXT_MAP_OPTION_CENTER_BIAS",
        "zDescription": "Avoid starting near west or east map edges, only in single player",
        "bDefault": "1",
        "bMultiPlayerValid": "0"
      }
    ]
  }
}
    export default data
    