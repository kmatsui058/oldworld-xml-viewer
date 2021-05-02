
    const data: XmlMapOptionsSingle.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
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
        "Name": "TEXT_MAP_OPTION_MIRROR_MAP",
        "zDescription": "East-West symmetric map: need even number of teams",
        "bSinglePlayerValid": "0"
      },
      {
        "zType": "MAP_OPTIONS_SINGLE_SEASIDE_CENTER_BIAS",
        "Name": "TEXT_MAP_OPTION_CENTER_BIAS",
        "zDescription": "Player starts near the center of the map, only in single player",
        "bDefault": "1",
        "bMultiPlayerValid": "0"
      },
      {
        "zType": "MAP_OPTIONS_SINGLE_CENTER_BIAS",
        "Name": "TEXT_MAP_OPTION_CENTER_BIAS",
        "zDescription": "Avoid starting near west or east map edges, only in single player",
        "bDefault": "1",
        "bMultiPlayerValid": "0"
      },
      {
        "zType": "MAP_OPTIONS_SINGLE_KING_OF_THE_HILL",
        "Name": "TEXT_MAP_OPTION_KING_OF_THE_HILL",
        "zDescription": "A resource-rich center instead of water at the channel intersection area"
      }
    ]
  }
}
    export default data
    