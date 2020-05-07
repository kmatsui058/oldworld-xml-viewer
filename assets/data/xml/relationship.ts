
    const data: XmlRelationship.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "iOpinion": {
          
        },
        "aeInvalidateRelationship": {
          
        }
      },
      {
        "zType": "RELATIONSHIP_IN_LOVE_WITH",
        "zName": "In Love with",
        "iOpinion": "160",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_LOVER_OF",
            "RELATIONSHIP_SUSPICIOUS_OF",
            "RELATIONSHIP_DISAPPOINTED_WITH",
            "RELATIONSHIP_ESTRANGED_FROM",
            "RELATIONSHIP_VENGEFUL_AGAINST",
            "RELATIONSHIP_PLOTTING_AGAINST"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_LOVER_OF",
        "zName": "Lover of",
        "iOpinion": "160",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_IN_LOVE_WITH",
            "RELATIONSHIP_SUSPICIOUS_OF",
            "RELATIONSHIP_DISAPPOINTED_WITH",
            "RELATIONSHIP_ESTRANGED_FROM",
            "RELATIONSHIP_VENGEFUL_AGAINST",
            "RELATIONSHIP_PLOTTING_AGAINST"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_ALLIED_WITH",
        "zName": "Allied with",
        "iOpinion": "120"
      },
      {
        "zType": "RELATIONSHIP_ENDEARED_TO",
        "zName": "Endeared to",
        "iOpinion": "80",
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
        "zType": "RELATIONSHIP_OBLIGED_TO",
        "zName": "Obliged to",
        "iOpinion": "40",
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
        "zType": "RELATIONSHIP_JEALOUS_ABOUT",
        "zName": "Jealous about",
        "iOpinion": "-20"
      },
      {
        "zType": "RELATIONSHIP_SUSPICIOUS_OF",
        "zName": "Suspicious of",
        "iOpinion": "-40",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_IN_LOVE_WITH",
            "RELATIONSHIP_LOVER_OF",
            "RELATIONSHIP_ENDEARED_TO"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_DISAPPOINTED_WITH",
        "zName": "Disappointed with",
        "iOpinion": "-80",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_IN_LOVE_WITH",
            "RELATIONSHIP_LOVER_OF",
            "RELATIONSHIP_ENDEARED_TO",
            "RELATIONSHIP_OBLIGED_TO"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_ESTRANGED_FROM",
        "zName": "Estranged from",
        "iOpinion": "-120",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_IN_LOVE_WITH",
            "RELATIONSHIP_LOVER_OF",
            "RELATIONSHIP_ALLIED_WITH",
            "RELATIONSHIP_ENDEARED_TO",
            "RELATIONSHIP_OBLIGED_TO"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_VENGEFUL_AGAINST",
        "zName": "Vengeful against",
        "iOpinion": "-160",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_IN_LOVE_WITH",
            "RELATIONSHIP_LOVER_OF",
            "RELATIONSHIP_ALLIED_WITH",
            "RELATIONSHIP_ENDEARED_TO",
            "RELATIONSHIP_OBLIGED_TO",
            "RELATIONSHIP_ESTRANGED_FROM"
          ]
        }
      },
      {
        "zType": "RELATIONSHIP_PLOTTING_AGAINST",
        "zName": "Plottiing against",
        "iOpinion": "-200",
        "aeInvalidateRelationship": {
          "zValue": [
            "RELATIONSHIP_IN_LOVE_WITH",
            "RELATIONSHIP_LOVER_OF",
            "RELATIONSHIP_ALLIED_WITH",
            "RELATIONSHIP_ENDEARED_TO",
            "RELATIONSHIP_OBLIGED_TO",
            "RELATIONSHIP_ESTRANGED_FROM",
            "RELATIONSHIP_VENGEFUL_AGAINST"
          ]
        }
      }
    ]
  }
}
    export default data
    