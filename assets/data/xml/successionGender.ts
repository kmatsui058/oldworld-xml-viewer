
    const data: XmlSuccessionGender.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "zHelp": {
          
        },
        "bSingleGender": {
          
        },
        "Gender": {
          
        }
      },
      {
        "zType": "SUCCESSIONGENDER_AGNATIC",
        "zName": "Agnatic",
        "zHelp": "Only Males descendants can inherit",
        "bSingleGender": "1",
        "Gender": "GENDER_MALE"
      },
      {
        "zType": "SUCCESSIONGENDER_AGNATIC_COGNATIC",
        "zName": "Agnatic Cognatic",
        "zHelp": "Males inherit before Females",
        "Gender": "GENDER_MALE"
      },
      {
        "zType": "SUCCESSIONGENDER_ABSOLUTE_COGNATIC",
        "zName": "Absolute Cognatic",
        "zHelp": "Genders inherit equally"
      },
      {
        "zType": "SUCCESSIONGENDER_ENATIC_COGNATIC",
        "zName": "Enatic Cognatic",
        "zHelp": "Females inherit before Males",
        "Gender": "GENDER_FEMALE"
      },
      {
        "zType": "SUCCESSIONGENDER_ENATIC",
        "zName": "Enatic",
        "zHelp": "Only Females descendants can inherit",
        "bSingleGender": "1",
        "Gender": "GENDER_FEMALE"
      }
    ]
  }
}
    export default data
    