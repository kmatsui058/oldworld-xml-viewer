
    const data: XmlRelationship.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "zNameVerb": {
          
        },
        "iOpinion": {
          
        },
        "iMinAgeUs": {
          
        },
        "iMinAgeThem": {
          
        },
        "aeInvalidateRelationship": {
          
        }
      },
      {
        "zType": "RELATIONSHIP_LOVER_OF",
        "zName": "Lover of",
        "zNameVerb": "Becomes Lover of",
        "iOpinion": "160",
        "iMinAgeUs": "15",
        "iMinAgeThem": "15"
      },
      {
        "zType": "RELATIONSHIP_ALLIED_WITH",
        "zName": "Allied with",
        "zNameVerb": "Becomes Allied with",
        "iOpinion": "120",
        "iMinAgeUs": "15",
        "iMinAgeThem": "15"
      },
      {
        "zType": "RELATIONSHIP_IN_LOVE_WITH",
        "zName": "In Love with",
        "zNameVerb": "Is In Love with",
        "iOpinion": "160",
        "iMinAgeUs": "15",
        "iMinAgeThem": "15",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_SUSPICIOUS_OF",
            "RELATIONSHIP_DISAPPOINTED_WITH",
            "RELATIONSHIP_ESTRANGED_FROM",
            "RELATIONSHIP_VENGEFUL_AGAINST",
            "RELATIONSHIP_PLOTTING_AGAINST"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_TERRIFIED_OF",
        "zName": "Terrified of",
        "zNameVerb": "Becomes Terrified of",
        "iOpinion": "120",
        "iMinAgeUs": "10",
        "iMinAgeThem": "15",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_IN_LOVE_WITH",
            "RELATIONSHIP_ENDEARED_TO"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_ENDEARED_TO",
        "zName": "Endeared to",
        "zNameVerb": "Becomes Endeared to",
        "iOpinion": "80",
        "iMinAgeUs": "10",
        "iMinAgeThem": "15",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_DISAPPOINTED_WITH",
            "RELATIONSHIP_ESTRANGED_FROM",
            "RELATIONSHIP_VENGEFUL_AGAINST",
            "RELATIONSHIP_PLOTTING_AGAINST"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_INTERCESSED_FOR",
        "zName": "Intercessed for",
        "zNameVerb": "Is Intercessed for",
        "iOpinion": "60",
        "iMinAgeUs": "10",
        "iMinAgeThem": "15"
      },
      {
        "zType": "RELATIONSHIP_INFLUENCED_BY",
        "zName": "Influenced by",
        "zNameVerb": "Becomes Influenced by",
        "iOpinion": "40",
        "iMinAgeUs": "10",
        "iMinAgeThem": "15"
      },
      {
        "zType": "RELATIONSHIP_OWES_FAVOR_TO",
        "zName": "Owes Favor to",
        "zNameVerb": "Now Owes Favor to",
        "iOpinion": "20",
        "iMinAgeUs": "15",
        "iMinAgeThem": "15",
        "aeInvalidateRelationship": {
          "zValue": "RELATIONSHIP_HOLDS_FAVOR_FROM"
        }
      },
      {
        "zType": "RELATIONSHIP_HOLDS_FAVOR_FROM",
        "zName": "Holds Favor from",
        "zNameVerb": "Now Holds Favor from",
        "iOpinion": "-20",
        "iMinAgeUs": "15",
        "iMinAgeThem": "15",
        "aeInvalidateRelationship": {
          "zValue": "RELATIONSHIP_OWES_FAVOR_TO"
        }
      },
      {
        "zType": "RELATIONSHIP_JEALOUS_ABOUT",
        "zName": "Jealous about",
        "zNameVerb": "Becomes Jealous about",
        "iOpinion": "-40",
        "iMinAgeUs": "15",
        "iMinAgeThem": "15",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_INFLUENCED_BY",
            "RELATIONSHIP_ENDEARED_TO"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_SUSPICIOUS_OF",
        "zName": "Suspicious of",
        "zNameVerb": "Becomes Suspicious of",
        "iOpinion": "-60",
        "iMinAgeUs": "10",
        "iMinAgeThem": "10",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_IN_LOVE_WITH",
            "RELATIONSHIP_LOVER_OF",
            "RELATIONSHIP_INFLUENCED_BY"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_DISAPPOINTED_WITH",
        "zName": "Disappointed with",
        "zNameVerb": "Becomes Disappointed with",
        "iOpinion": "-80",
        "iMinAgeUs": "10",
        "iMinAgeThem": "10",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_IN_LOVE_WITH",
            "RELATIONSHIP_LOVER_OF",
            "RELATIONSHIP_ENDEARED_TO"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_ESTRANGED_FROM",
        "zName": "Estranged from",
        "zNameVerb": "Becomes Estranged from",
        "iOpinion": "-120",
        "iMinAgeUs": "10",
        "iMinAgeThem": "15",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_IN_LOVE_WITH",
            "RELATIONSHIP_LOVER_OF",
            "RELATIONSHIP_ALLIED_WITH",
            "RELATIONSHIP_ENDEARED_TO"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_VENGEFUL_AGAINST",
        "zName": "Vengeful against",
        "zNameVerb": "Becomes Vengeful against",
        "iOpinion": "-160",
        "iMinAgeUs": "15",
        "iMinAgeThem": "15",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_IN_LOVE_WITH",
            "RELATIONSHIP_LOVER_OF",
            "RELATIONSHIP_ALLIED_WITH",
            "RELATIONSHIP_ENDEARED_TO",
            "RELATIONSHIP_ESTRANGED_FROM"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_PLOTTING_AGAINST",
        "zName": "Plotting against",
        "zNameVerb": "Starts Plotting against",
        "iOpinion": "-200",
        "iMinAgeUs": "15",
        "iMinAgeThem": "10",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_IN_LOVE_WITH",
            "RELATIONSHIP_LOVER_OF",
            "RELATIONSHIP_ALLIED_WITH",
            "RELATIONSHIP_ENDEARED_TO",
            "RELATIONSHIP_ESTRANGED_FROM",
            "RELATIONSHIP_VENGEFUL_AGAINST"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_MADE_HEIR_BY",
        "zName": "Made Heir by",
        "zNameVerb": "Is Made Heir by",
        "iOpinion": "80"
      },
      {
        "zType": "RELATIONSHIP_BYPASSED_BY",
        "zName": "Bypassed by",
        "zNameVerb": "Is Bypassed by",
        "iOpinion": "-40"
      },
      {
        "zType": "RELATIONSHIP_DIVORCED_BY",
        "zName": "Divorced by",
        "zNameVerb": "Is Divorced by",
        "iOpinion": "-80"
      }
    ]
  }
}
    export default data
    