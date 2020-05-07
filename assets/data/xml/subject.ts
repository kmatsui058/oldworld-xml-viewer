
    const data: XmlSubject.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "Class": {
          
        },
        "RelationUs": {
          "comment": "Has this SubjectRelationship with the Player."
        },
        "RelationLeader": {
          "comment": "Has this SubjectRelationship with the Leader."
        },
        "Religion": {
          "comment": "Is this Religion."
        },
        "Law": {
          "comment": "Is this Law."
        },
        "Theology": {
          "comment": "Is this Theology."
        },
        "Resource": {
          "comment": "Is or Tile has this Resource."
        },
        "Character": {
          "comment": "Is this Character (automatically created for Events)."
        },
        "MemoryPlayerPrereq": {
          "comment": "Player has this Memory."
        },
        "MemoryPlayerInvalid": {
          "comment": "Player does not have this Memory."
        },
        "MemoryBarbarianPrereq": {
          "comment": "Barbarian has this Memory."
        },
        "MemoryBarbarianInvalid": {
          "comment": "Barbarian does not have this Memory."
        },
        "MemoryReligionPrereq": {
          "comment": "Religion has this Memory."
        },
        "MemoryReligionInvalid": {
          "comment": "Religion does not have this Memory."
        },
        "MemoryFamilyPrereq": {
          "comment": "Family has this Memory."
        },
        "MemoryFamilyInvalid": {
          "comment": "Family does not have this Memory."
        },
        "MemoryCharacterPrereq": {
          "comment": "Character has this Memory."
        },
        "MemoryCharacterInvalid": {
          "comment": "Character does not have this Memory."
        },
        "NationPrereq": {
          "comment": "Is this Nation."
        },
        "TechPrereq": {
          "comment": "Has this Technology."
        },
        "TechInvalid": {
          "comment": "Does not have this Technology."
        },
        "BarbarianPrereq": {
          "comment": "IS this Barbarian."
        },
        "FamilyClassPrereq": {
          "comment": "Family FamilyClass required for this Subject or this Subject’s Family."
        },
        "GenderPrereq": {
          "comment": "Required gender for this Character Subject."
        },
        "CouncilPrereq": {
          "comment": "Type of Council Member that this Character Subject must be."
        },
        "CourtierPrereq": {
          "comment": "Type of Courtier that this Character Subject must be."
        },
        "TraitPrereq": {
          "comment": "Trait required for this Character Subject."
        },
        "TraitInvalid": {
          "comment": "Trait that this Character Subject must not have."
        },
        "CognomenPrereq": {
          "comment": "Has this Cognomen."
        },
        "ProjectPrereq": {
          "comment": "Project that must be present in this City."
        },
        "ImprovementCity": {
          "comment": "City has this Improvement."
        },
        "ImprovementTile": {
          "comment": "Tile has this Improvement."
        },
        "ImprovementClassCity": {
          "comment": "City has this ImprovementClass."
        },
        "ImprovementClassTile": {
          "comment": "Tile has this ImprovementClass."
        },
        "UnitType": {
          "comment": "Unit is of this Type."
        },
        "UnitTrait": {
          "comment": "Unit has this Trait."
        },
        "Terrain": {
          "comment": "Tile has this Terrain."
        },
        "Height": {
          "comment": "Tile has this Height."
        },
        "Vegetation": {
          "comment": "Tile has this Vegetation."
        },
        "iMinDiplomacyTurns": {
          "comment": "Current Diplomacy state has at least this many turns."
        },
        "iMaxDiplomacyTurns": {
          "comment": "Current Diplomacy state has at most this many turns."
        },
        "iMinCamps": {
          "comment": "Barbarian has at least this many settlements."
        },
        "iMaxCamps": {
          "comment": "Barbarian has at most this many settlements."
        },
        "iMinHappyEvents": {
          "comment": "Minimum number of happiness events this City Subject must have ever experienced."
        },
        "iMaxHappyEvents": {
          "comment": "Maximum number of happiness events this City Subject must have ever experienced."
        },
        "iMinDiscontentLevel": {
          "comment": "Minimum discontent level this City Subject must have."
        },
        "iMinDamagePercent": {
          "comment": "City has at least this much Damage."
        },
        "iMinAge": {
          "comment": "Minimum age of this Character Subject."
        },
        "iMaxAge": {
          "comment": "Maximum age of this Character Subject."
        },
        "iMinCourtiers": {
          "comment": "Player has at least this many Courtiers."
        },
        "iMaxCourtiers": {
          "comment": "Player has at most this many Courtiers."
        },
        "iMaxHeirs": {
          "comment": "Maximum number of heirs permitted for this player Subject."
        },
        "bHasHeirs": {
          "comment": "This player Subject must have at least 1 valid heir."
        },
        "bHasNoHeirs": {
          "comment": "This player Subject must have no heirs at all."
        },
        "bIsUs": {
          "comment": "The player Subject must be the same as the player getting the event."
        },
        "bIsNotUs": {
          "comment": "The player Subject must be different from the player getting the event."
        },
        "bHasPlayer": {
          "comment": "This Subject must belong to a foreign Nation."
        },
        "bNoPlayer": {
          "comment": "This Subject must be Barbarian and NOT belong to a Nation."
        },
        "bStateReligion": {
          "comment": "Has a State Religion."
        },
        "bNoStateReligion": {
          "comment": "Does not have a State Religion."
        },
        "bTrading": {
          "comment": "Is trading with the Player."
        },
        "bCapital": {
          "comment": "This Subject must be the capital, or the governor of the capital."
        },
        "bNewestCity": {
          "comment": "This Subject is the City that this player founded most recently."
        },
        "bFamilyReligion": {
          "comment": "Family has a Religion."
        },
        "bNoFamilyReligion": {
          "comment": "Family does not have a Religion."
        },
        "bDead": {
          "comment": "The Character Subject must be dead. Note: Normally being dead disqualifies the Character from being a Subject; setting this entry to true overrides this disqualification. (This value is only tested if either bIsUs or bIsNotUs is true.)"
        },
        "bFertile": {
          "comment": "Character is Fertile."
        },
        "bNotMe": {
          "comment": "This Subject is not our Leader."
        },
        "bWasLeader": {
          "comment": "This Subject must be or have been the Leader."
        },
        "bLeader": {
          "comment": "This Subject must be the Leader."
        },
        "bNonLeader": {
          "comment": "This Subject must not be the Leader."
        },
        "bLeaderOrDescendant": {
          "comment": "Is the Leader or descendant of the Leader."
        },
        "bHeir": {
          "comment": "This Subject must be the direct heir, or the Family of the direct heir."
        },
        "bNonHeir": {
          "comment": "This Subject cannot be the direct heir, nor the Family of the direct heir."
        },
        "bSuccession": {
          "comment": "This Subject must be somewhere in the line of succession."
        },
        "bNonSuccession": {
          "comment": "This Subject cannot be anywhere in the line of succession."
        },
        "bGovernor": {
          "comment": "This Subject must be a governor, or have a governor."
        },
        "bGeneral": {
          "comment": "This Character Subject must be a general."
        },
        "bNonGeneral": {
          "comment": "This Character Subject must not be a general."
        },
        "bNoJob": {
          "comment": "This Character Subject is not a general or governor or on the council."
        },
        "bRoyal": {
          "comment": "This Character Subject must be royal, meaning descended from the original ruler."
        },
        "bNonRoyal": {
          "comment": "This Character Subject must not be royal."
        },
        "bRoyalSpouse": {
          "comment": "This Character Subject’s spouse must be royal."
        },
        "bCourtier": {
          "comment": "This Character Subject must be a Courtier."
        },
        "bNonCourtier": {
          "comment": "This Character Subject must not be a Courtier."
        },
        "bBarbarian": {
          "comment": "This Subject must have a Barbarian type"
        },
        "bBarbarianLeader": {
          "comment": "This Subject is a Barbarian leader"
        },
        "bHasSpouse": {
          "comment": "Character has a Spouse."
        },
        "bHasNoSpouse": {
          "comment": "Character does not have a Spouse."
        },
        "bHasFamily": {
          "comment": "This Subject must have a Family associated with it."
        },
        "bCanMarry": {
          "comment": "This Character can marry."
        },
        "bCanHaveChildren": {
          "comment": "This Character must be of a fertile age. They must be an adult (at least 18) and no older than 35 (for female Characters) or 60 (for male Characters)."
        },
        "bArchetype": {
          "comment": "The Character has an Archetype Trait."
        },
        "bNoArchetype": {
          "comment": "The Character does not have an Archetype Trait."
        },
        "bFamilySeat": {
          "comment": "This City Subject must be a Family seat."
        },
        "bNeedsGeneral": {
          "comment": "This Character can have and does not have a General."
        },
        "bClaimed": {
          "comment": "This Tile has an owner."
        },
        "bUnclaimed": {
          "comment": "This Tile does not have an owner."
        },
        "bFreshWater": {
          "comment": "This Tile has access to Fresh Water."
        },
        "bNoFreshWater": {
          "comment": "This Tile does not have access to Fresh Water."
        },
        "bCoast": {
          "comment": "This Tile is on the coast."
        },
        "bRiver": {
          "comment": "This Tile is on a river."
        },
        "bNoResource": {
          "comment": "This Tile doesn't have a resource."
        },
        "bTribe": {
          "comment": "This Tile has a Barbarian settlement that is a Tribe."
        },
        "aiMinRating": {
          "comment": "List of minimum ratings (Leadership, etc.) required for this Subject."
        },
        "aiMaxRating": {
          "comment": "List of maximum ratings (Leadership, etc.) required for this Subject."
        },
        "aeTraitAny": {
          "comment": "The Character has at least one of these Traits."
        },
        "aeYieldNegative": {
          "comment": "The Player has a negative rate of this Yield."
        }
      },
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "Class": {
          
        },
        "RelationUs": {
          
        },
        "RelationLeader": {
          
        },
        "Religion": {
          
        },
        "Law": {
          
        },
        "Theology": {
          
        },
        "Resource": {
          
        },
        "Character": {
          
        },
        "MemoryPlayerPrereq": {
          
        },
        "MemoryPlayerInvalid": {
          
        },
        "MemoryBarbarianPrereq": {
          
        },
        "MemoryBarbarianInvalid": {
          
        },
        "MemoryReligionPrereq": {
          
        },
        "MemoryReligionInvalid": {
          
        },
        "MemoryFamilyPrereq": {
          
        },
        "MemoryFamilyInvalid": {
          
        },
        "MemoryCharacterPrereq": {
          
        },
        "MemoryCharacterInvalid": {
          
        },
        "NationPrereq": {
          
        },
        "TechPrereq": {
          
        },
        "TechInvalid": {
          
        },
        "BarbarianPrereq": {
          
        },
        "FamilyClassPrereq": {
          
        },
        "GenderPrereq": {
          
        },
        "CouncilPrereq": {
          
        },
        "CourtierPrereq": {
          
        },
        "TraitPrereq": {
          
        },
        "TraitInvalid": {
          
        },
        "CognomenPrereq": {
          
        },
        "ProjectPrereq": {
          
        },
        "ImprovementCity": {
          
        },
        "ImprovementTile": {
          
        },
        "ImprovementClassCity": {
          
        },
        "ImprovementClassTile": {
          
        },
        "UnitType": {
          
        },
        "UnitTrait": {
          
        },
        "Terrain": {
          
        },
        "Height": {
          
        },
        "Vegetation": {
          
        },
        "iMinDiplomacyTurns": {
          
        },
        "iMaxDiplomacyTurns": {
          
        },
        "iMinCamps": {
          
        },
        "iMaxCamps": {
          
        },
        "iMinHappyEvents": {
          
        },
        "iMaxHappyEvents": {
          
        },
        "iMinDiscontentLevel": {
          
        },
        "iMinDamagePercent": {
          
        },
        "iMinAge": {
          
        },
        "iMaxAge": {
          
        },
        "iMinCourtiers": {
          
        },
        "iMaxCourtiers": {
          
        },
        "iMaxHeirs": {
          
        },
        "bHasHeirs": {
          
        },
        "bHasNoHeirs": {
          
        },
        "bIsUs": {
          
        },
        "bIsNotUs": {
          
        },
        "bHasPlayer": {
          
        },
        "bNoPlayer": {
          
        },
        "bStateReligion": {
          
        },
        "bNoStateReligion": {
          
        },
        "bTrading": {
          
        },
        "bCapital": {
          
        },
        "bNewestCity": {
          
        },
        "bFamilyReligion": {
          
        },
        "bNoFamilyReligion": {
          
        },
        "bDead": {
          
        },
        "bFertile": {
          
        },
        "bNotMe": {
          
        },
        "bWasLeader": {
          
        },
        "bLeader": {
          
        },
        "bNonLeader": {
          
        },
        "bLeaderOrDescendant": {
          
        },
        "bHeir": {
          
        },
        "bNonHeir": {
          
        },
        "bSuccession": {
          
        },
        "bNonSuccession": {
          
        },
        "bGovernor": {
          
        },
        "bGeneral": {
          
        },
        "bNonGeneral": {
          
        },
        "bNoJob": {
          
        },
        "bRoyal": {
          
        },
        "bNonRoyal": {
          
        },
        "bRoyalSpouse": {
          
        },
        "bCourtier": {
          
        },
        "bNonCourtier": {
          
        },
        "bBarbarian": {
          
        },
        "bBarbarianLeader": {
          
        },
        "bHasSpouse": {
          
        },
        "bHasNoSpouse": {
          
        },
        "bHasFamily": {
          
        },
        "bCanMarry": {
          
        },
        "bCanHaveChildren": {
          
        },
        "bArchetype": {
          
        },
        "bNoArchetype": {
          
        },
        "bFamilySeat": {
          
        },
        "bNeedsGeneral": {
          
        },
        "bClaimed": {
          
        },
        "bUnclaimed": {
          
        },
        "bFreshWater": {
          
        },
        "bNoFreshWater": {
          
        },
        "bCoast": {
          
        },
        "bRiver": {
          
        },
        "bNoResource": {
          
        },
        "bTribe": {
          
        },
        "aiMinRating": {
          
        },
        "aiMaxRating": {
          
        },
        "aeTraitAny": {
          
        },
        "aeYieldNegative": {
          
        }
      },
      {
        "comment": "The human user's nation",
        "zType": "SUBJECT_PLAYER_US",
        "Class": "SUBJECTCLASS_PLAYER",
        "bIsUs": "1"
      },
      {
        "comment": "An AI nation",
        "zType": "SUBJECT_PLAYER_THEM",
        "Class": "SUBJECTCLASS_PLAYER",
        "bIsNotUs": "1"
      },
      {
        "comment": "AI nation at war with the human",
        "zType": "SUBJECT_PLAYER_WAR",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_WAR",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_TRUCE",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_TRUCE",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_PEACE",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_PEACE",
        "bIsNotUs": "1"
      },
      {
        "comment": "Non-hostile AI nation",
        "zType": "SUBJECT_PLAYER_PEACE_OR_TRUCE",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_VERY_CLOSE",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_VERY_CLOSE",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_CLOSE",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_CLOSE",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_NEAR",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_NEAR",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_FAR",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_FAR",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_MAX_NEAR",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MAX_NEAR",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_MIN_DISTANT",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MIN_DISTANT",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_FRIENDLY",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_FRIENDLY",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_PLEASED",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_PLEASED",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_CAUTIOUS",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_CAUTIOUS",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_UPSET",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_UPSET",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_ANGRY",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_ANGRY",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_FURIOUS",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_FURIOUS",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_MAX_ANGRY",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MAX_ANGRY",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_MAX_UPSET",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MAX_UPSET",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_MAX_CAUTIOUS",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MAX_CAUTIOUS",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_MAX_PLEASED",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MAX_PLEASED",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_MIN_ANGRY",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MIN_ANGRY",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_MIN_UPSET",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MIN_UPSET",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_MIN_CAUTIOUS",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MIN_CAUTIOUS",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_MIN_PLEASED",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MIN_PLEASED",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_RANGE_ANGRY_PLEASED",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_ANGRY_TO_PLEASED",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_RANGE_ANGRY_CAUTIOUS",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_ANGRY_TO_CAUTIOUS",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_RANGE_ANGRY_UPSET",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_ANGRY_TO_UPSET",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_RANGE_UPSET_PLEASED",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_UPSET_TO_PLEASED",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_RANGE_UPSET_CAUTIOUS",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_UPSET_TO_CAUTIOUS",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_OPINION_RANGE_CAUTIOUS_PLEASED",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_CAUTIOUS_TO_PLEASED",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_MAX_WEAKER",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MAX_WEAKER",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_MAX_SIMILAR",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MAX_SIMILAR",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_MAX_STRONGER",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MAX_STRONGER",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_MIN_SIMILAR",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MIN_SIMILAR",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_MIN_STRONGER",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MIN_STRONGER",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_ROUTED",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_ROUTED",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_LOSING",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_LOSING",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_NEUTRAL",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_NEUTRAL",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_WINNING",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_WINNING",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_TRIUMPHANT",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_TRIUMPHANT",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_MAX_LOSING",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MAX_LOSING",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_MAX_NEUTRAL",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MAX_NEUTRAL",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_MIN_NEUTRAL",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MIN_NEUTRAL",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_MIN_WINNING",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_MIN_WINNING",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_ALLIANCE",
        "Class": "SUBJECTCLASS_PLAYER",
        "RelationUs": "SUBJECTRELATION_PLAYER_ALLIANCE",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_DIPLOMACY_FIVE_TURNS",
        "Class": "SUBJECTCLASS_PLAYER",
        "iMinDiplomacyTurns": "5",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_TRADING",
        "Class": "SUBJECTCLASS_PLAYER",
        "bIsNotUs": "1",
        "bTrading": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_STATE_RELIGION",
        "Class": "SUBJECTCLASS_PLAYER",
        "bStateReligion": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_NO_STATE_RELIGION",
        "Class": "SUBJECTCLASS_PLAYER",
        "bNoStateReligion": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_TACTICIAN",
        "Class": "SUBJECTCLASS_PLAYER",
        "TraitPrereq": "TRAIT_TACTICIAN_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_PLAYER_JUDGE",
        "Class": "SUBJECTCLASS_PLAYER",
        "TraitPrereq": "TRAIT_JUDGE_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_PLAYER_ORATOR",
        "Class": "SUBJECTCLASS_PLAYER",
        "TraitPrereq": "TRAIT_ORATOR_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_PLAYER_SCHOLAR",
        "Class": "SUBJECTCLASS_PLAYER",
        "TraitPrereq": "TRAIT_SCHOLAR_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_PLAYER_BUILDER",
        "Class": "SUBJECTCLASS_PLAYER",
        "TraitPrereq": "TRAIT_BUILDER_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_PLAYER_SCHEMER",
        "Class": "SUBJECTCLASS_PLAYER",
        "TraitPrereq": "TRAIT_SCHEMER_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_PLAYER_COMMANDER",
        "Class": "SUBJECTCLASS_PLAYER",
        "TraitPrereq": "TRAIT_COMMANDER_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_PLAYER_ZEALOT",
        "Class": "SUBJECTCLASS_PLAYER",
        "TraitPrereq": "TRAIT_ZEALOT_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_PLAYER_DIPLOMAT",
        "Class": "SUBJECTCLASS_PLAYER",
        "TraitPrereq": "TRAIT_DIPLOMAT_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_PLAYER_HERO",
        "Class": "SUBJECTCLASS_PLAYER",
        "TraitPrereq": "TRAIT_HERO_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_PLAYER_MAX_TWO_HEIRS",
        "Class": "SUBJECTCLASS_PLAYER",
        "iMaxHeirs": "2"
      },
      {
        "comment": "Nation only if Heirs exist",
        "zType": "SUBJECT_PLAYER_HAS_HEIRS",
        "Class": "SUBJECTCLASS_PLAYER",
        "bHasHeirs": "1"
      },
      {
        "comment": "Nation with no Heirs",
        "zType": "SUBJECT_PLAYER_NO_HEIRS",
        "Class": "SUBJECTCLASS_PLAYER",
        "bHasNoHeirs": "1"
      },
      {
        "zType": "SUBJECT_PLAYER_COINAGE",
        "Class": "SUBJECTCLASS_PLAYER",
        "TechPrereq": "TECH_COINAGE"
      },
      {
        "zType": "SUBJECT_PLAYER_SCHOLARSHIP",
        "Class": "SUBJECTCLASS_PLAYER",
        "TechPrereq": "TECH_SCHOLARSHIP"
      },
      {
        "zType": "SUBJECT_PLAYER_MACHINERY",
        "Class": "SUBJECTCLASS_PLAYER",
        "TechPrereq": "TECH_MACHINERY"
      },
      {
        "zType": "SUBJECT_PLAYER_BODKIN_ARROW",
        "Class": "SUBJECTCLASS_PLAYER",
        "TechPrereq": "TECH_BODKIN_ARROW"
      },
      {
        "zType": "SUBJECT_PLAYER_MAX_THREE_COURTIERS",
        "Class": "SUBJECTCLASS_PLAYER",
        "iMaxCourtiers": "3"
      },
      {
        "zType": "SUBJECT_PLAYER_ASSYRIA",
        "Class": "SUBJECTCLASS_PLAYER",
        "NationPrereq": "NATION_ASSYRIA"
      },
      {
        "zType": "SUBJECT_PLAYER_BABYLONIA",
        "Class": "SUBJECTCLASS_PLAYER",
        "NationPrereq": "NATION_BABYLONIA"
      },
      {
        "zType": "SUBJECT_PLAYER_CARTHAGE",
        "Class": "SUBJECTCLASS_PLAYER",
        "NationPrereq": "NATION_CARTHAGE"
      },
      {
        "zType": "SUBJECT_PLAYER_EGYPT",
        "Class": "SUBJECTCLASS_PLAYER",
        "NationPrereq": "NATION_EGYPT"
      },
      {
        "zType": "SUBJECT_PLAYER_GREECE",
        "Class": "SUBJECTCLASS_PLAYER",
        "NationPrereq": "NATION_GREECE"
      },
      {
        "zType": "SUBJECT_PLAYER_PERSIA",
        "Class": "SUBJECTCLASS_PLAYER",
        "NationPrereq": "NATION_PERSIA"
      },
      {
        "zType": "SUBJECT_PLAYER_ROME",
        "Class": "SUBJECTCLASS_PLAYER",
        "NationPrereq": "NATION_ROME"
      },
      {
        "comment": "If a Favor has been given",
        "zType": "SUBJECT_PLAYER_GAVE_FAVOR",
        "Class": "SUBJECTCLASS_PLAYER",
        "MemoryPlayerPrereq": "MEMORYPLAYER_GAVE_FAVOR"
      },
      {
        "zType": "SUBJECT_PLAYER_NEIGHBORS_ROME_PRIDE",
        "Class": "SUBJECTCLASS_PLAYER",
        "MemoryPlayerPrereq": "MEMORYPLAYER_NEIGHBORS_ROME_PRIDE",
        "NationPrereq": "NATION_ROME"
      },
      {
        "zType": "SUBJECT_NEIGHBORS_PERSIA_EXCHANGE",
        "Class": "SUBJECTCLASS_PLAYER",
        "MemoryPlayerPrereq": "MEMORYPLAYER_NEIGHBORS_HUMBLE",
        "NationPrereq": "NATION_PERSIA"
      },
      {
        "comment": "Subjects regarding Resource amounts",
        "zType": "SUBJECT_PLAYER_NEGATIVE_MONEY",
        "Class": "SUBJECTCLASS_PLAYER",
        "aeYieldNegative": {
          "zValue": "YIELD_MONEY"
        }
      },
      {
        "zType": "SUBJECT_PLAYER_NEGATIVE_FOOD",
        "Class": "SUBJECTCLASS_PLAYER",
        "aeYieldNegative": {
          "zValue": "YIELD_FOOD"
        }
      },
      {
        "zType": "SUBJECT_PLAYER_NEGATIVE_IRON",
        "Class": "SUBJECTCLASS_PLAYER",
        "aeYieldNegative": {
          "zValue": "YIELD_IRON"
        }
      },
      {
        "zType": "SUBJECT_PLAYER_NEGATIVE_STONE",
        "Class": "SUBJECTCLASS_PLAYER",
        "aeYieldNegative": {
          "zValue": "YIELD_STONE"
        }
      },
      {
        "zType": "SUBJECT_PLAYER_NEGATIVE_WOOD",
        "Class": "SUBJECTCLASS_PLAYER",
        "aeYieldNegative": {
          "zValue": "YIELD_WOOD"
        }
      },
      {
        "comment": "A tribal faction",
        "zType": "SUBJECT_BARBARIAN",
        "Class": "SUBJECTCLASS_BARBARIAN"
      },
      {
        "zType": "SUBJECT_BARBARIAN_GAULS",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "BarbarianPrereq": "BARBARIAN_GAULS"
      },
      {
        "zType": "SUBJECT_BARBARIAN_VANDALS",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "BarbarianPrereq": "BARBARIAN_VANDALS"
      },
      {
        "zType": "SUBJECT_BARBARIAN_DANES",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "BarbarianPrereq": "BARBARIAN_DANES"
      },
      {
        "zType": "SUBJECT_BARBARIAN_THRACIANS",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "BarbarianPrereq": "BARBARIAN_THRACIANS"
      },
      {
        "zType": "SUBJECT_BARBARIAN_SCYTHIANS",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "BarbarianPrereq": "BARBARIAN_SCYTHIANS"
      },
      {
        "zType": "SUBJECT_BARBARIAN_NUMIDIANS",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "BarbarianPrereq": "BARBARIAN_NUMIDIANS"
      },
      {
        "comment": "Tribal faction at War with the human",
        "zType": "SUBJECT_BARBARIAN_WAR",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_WAR"
      },
      {
        "zType": "SUBJECT_BARBARIAN_TRUCE",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_TRUCE"
      },
      {
        "zType": "SUBJECT_BARBARIAN_TRUCE_OR_WAR",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_TRUCE_OR_WAR"
      },
      {
        "zType": "SUBJECT_BARBARIAN_PEACE_OR_TRUCE",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_PEACE_OR_TRUCE"
      },
      {
        "comment": "A tribal faction at Peace with the human",
        "zType": "SUBJECT_BARBARIAN_PEACE",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_PEACE"
      },
      {
        "zType": "SUBJECT_BARBARIAN_MIN_DISTANT",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_MIN_DISTANT"
      },
      {
        "zType": "SUBJECT_BARBARIAN_MAX_CLOSE",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_MAX_CLOSE"
      },
      {
        "zType": "SUBJECT_BARBARIAN_MAX_NEAR",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_MAX_NEAR"
      },
      {
        "zType": "SUBJECT_BARBARIAN_MAX_CAUTIOUS",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_MAX_CAUTIOUS"
      },
      {
        "zType": "SUBJECT_BARBARIAN_MIN_SIMILAR",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_MIN_SIMILAR"
      },
      {
        "zType": "SUBJECT_BARBARIAN_MIN_STRONGER",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_MIN_STRONGER"
      },
      {
        "zType": "SUBJECT_BARBARIAN_ROUTED",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_ROUTED"
      },
      {
        "zType": "SUBJECT_BARBARIAN_LOSING",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_LOSING"
      },
      {
        "zType": "SUBJECT_BARBARIAN_NEUTRAL",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_NEUTRAL"
      },
      {
        "zType": "SUBJECT_BARBARIAN_WINNING",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_WINNING"
      },
      {
        "zType": "SUBJECT_BARBARIAN_TRIUMPHANT",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_TRIUMPHANT"
      },
      {
        "zType": "SUBJECT_BARBARIAN_MAX_ROUTED",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_MAX_ROUTED"
      },
      {
        "zType": "SUBJECT_BARBARIAN_MAX_LOSING",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_MAX_LOSING"
      },
      {
        "zType": "SUBJECT_BARBARIAN_MIN_WINNING",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_MIN_WINNING"
      },
      {
        "zType": "SUBJECT_BARBARIAN_MIN_TRIUMPHANT",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_MIN_TRIUMPHANT"
      },
      {
        "zType": "SUBJECT_BARBARIAN_ALLIANCE",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "RelationUs": "SUBJECTRELATION_BARBARIAN_ALLIANCE"
      },
      {
        "zType": "SUBJECT_BARBARIAN_DIPLOMACY_FIVE_TURNS",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "iMinDiplomacyTurns": "5"
      },
      {
        "zType": "SUBJECT_BARBARIAN_FIFTEEN_CAMPS_MINIMUM",
        "Class": "SUBJECTCLASS_BARBARIAN",
        "iMinCamps": "15"
      },
      {
        "zType": "SUBJECT_RELIGION",
        "Class": "SUBJECTCLASS_RELIGION"
      },
      {
        "zType": "SUBJECT_RELIGION_STATE",
        "Class": "SUBJECTCLASS_RELIGION",
        "RelationUs": "SUBJECTRELATION_RELIGION_STATE"
      },
      {
        "zType": "SUBJECT_RELIGION_STATE_NO",
        "Class": "SUBJECTCLASS_RELIGION",
        "RelationUs": "SUBJECTRELATION_RELIGION_STATE_NO"
      },
      {
        "zType": "SUBJECT_RELIGION_PLAYER",
        "Class": "SUBJECTCLASS_RELIGION",
        "RelationUs": "SUBJECTRELATION_RELIGION_PLAYER"
      },
      {
        "zType": "SUBJECT_RELIGION_PLAYER_NO",
        "Class": "SUBJECTCLASS_RELIGION",
        "RelationUs": "SUBJECTRELATION_RELIGION_PLAYER_NO"
      },
      {
        "zType": "SUBJECT_ZOROASTRIANISM",
        "Class": "SUBJECTCLASS_RELIGION",
        "Religion": "RELIGION_ZOROASTRIANISM"
      },
      {
        "zType": "SUBJECT_JUDAISM",
        "Class": "SUBJECTCLASS_RELIGION",
        "Religion": "RELIGION_JUDAISM"
      },
      {
        "zType": "SUBJECT_CHRISTIANITY",
        "Class": "SUBJECTCLASS_RELIGION",
        "Religion": "RELIGION_CHRISTIANITY"
      },
      {
        "zType": "SUBJECT_MANICHAEISM",
        "Class": "SUBJECTCLASS_RELIGION",
        "Religion": "RELIGION_MANICHAEISM"
      },
      {
        "comment": "A Family within the human's nation",
        "zType": "SUBJECT_FAMILY_US",
        "Class": "SUBJECTCLASS_FAMILY",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_FAMILY_NON_LEADER",
        "Class": "SUBJECTCLASS_FAMILY",
        "bNonLeader": "1"
      },
      {
        "zType": "SUBJECT_FAMILY_HEIR",
        "Class": "SUBJECTCLASS_FAMILY",
        "bHeir": "1"
      },
      {
        "zType": "SUBJECT_FAMILY_NON_HEIR",
        "Class": "SUBJECTCLASS_FAMILY",
        "bNonHeir": "1"
      },
      {
        "zType": "SUBJECT_FAMILY_STATE_RELIGION",
        "Class": "SUBJECTCLASS_FAMILY",
        "bFamilyReligion": "1"
      },
      {
        "zType": "SUBJECT_FAMILY_NO_STATE_RELIGION",
        "Class": "SUBJECTCLASS_FAMILY",
        "bNoFamilyReligion": "1"
      },
      {
        "zType": "SUBJECT_FAMILY_MAX_CAUTIOUS",
        "Class": "SUBJECTCLASS_FAMILY",
        "RelationUs": "SUBJECTRELATION_FAMILY_MAX_CAUTIOUS"
      },
      {
        "zType": "SUBJECT_FAMILY_MAX_UPSET",
        "Class": "SUBJECTCLASS_FAMILY",
        "RelationUs": "SUBJECTRELATION_FAMILY_MAX_UPSET"
      },
      {
        "zType": "SUBJECT_FAMILY_MAX_ANGRY",
        "Class": "SUBJECTCLASS_FAMILY",
        "RelationUs": "SUBJECTRELATION_FAMILY_MAX_ANGRY"
      },
      {
        "zType": "SUBJECT_FAMILY_MAX_FURIOUS",
        "Class": "SUBJECTCLASS_FAMILY",
        "RelationUs": "SUBJECTRELATION_FAMILY_MAX_FURIOUS"
      },
      {
        "zType": "SUBJECT_FAMILY_MIN_CAUTIOUS",
        "Class": "SUBJECTCLASS_FAMILY",
        "RelationUs": "SUBJECTRELATION_FAMILY_MIN_CAUTIOUS"
      },
      {
        "zType": "SUBJECT_FAMILY_MIN_PLEASED",
        "Class": "SUBJECTCLASS_FAMILY",
        "RelationUs": "SUBJECTRELATION_FAMILY_MIN_PLEASED"
      },
      {
        "zType": "SUBJECT_FAMILY_MIN_FRIENDLY",
        "Class": "SUBJECTCLASS_FAMILY",
        "RelationUs": "SUBJECTRELATION_FAMILY_MIN_FRIENDLY"
      },
      {
        "zType": "SUBJECT_FAMILY_ACROPOLIS_GUARD",
        "Class": "SUBJECTCLASS_FAMILY",
        "MemoryFamilyPrereq": "MEMORYFAMILY_ACROPOLIS_TREASURY"
      },
      {
        "zType": "SUBJECT_FAMILY_LANDOWNERS",
        "Class": "SUBJECTCLASS_FAMILY",
        "FamilyClassPrereq": "FAMILY_CLASS_LANDOWNERS"
      },
      {
        "zType": "SUBJECT_FAMILY_CHAMPIONS",
        "Class": "SUBJECTCLASS_FAMILY",
        "FamilyClassPrereq": "FAMILY_CLASS_CHAMPIONS"
      },
      {
        "zType": "SUBJECT_FAMILY_STATESMEN",
        "Class": "SUBJECTCLASS_FAMILY",
        "FamilyClassPrereq": "FAMILY_CLASS_STATESMEN"
      },
      {
        "zType": "SUBJECT_FAMILY_PATRONS",
        "Class": "SUBJECTCLASS_FAMILY",
        "FamilyClassPrereq": "FAMILY_CLASS_PATRONS"
      },
      {
        "zType": "SUBJECT_FAMILY_CLERICS",
        "Class": "SUBJECTCLASS_FAMILY",
        "FamilyClassPrereq": "FAMILY_CLASS_CLERICS"
      },
      {
        "zType": "SUBJECT_FAMILY_SAGES",
        "Class": "SUBJECTCLASS_FAMILY",
        "FamilyClassPrereq": "FAMILY_CLASS_SAGES"
      },
      {
        "zType": "SUBJECT_FAMILY_TRADERS",
        "Class": "SUBJECTCLASS_FAMILY",
        "FamilyClassPrereq": "FAMILY_CLASS_TRADERS"
      },
      {
        "zType": "SUBJECT_FAMILY_ARTISANS",
        "Class": "SUBJECTCLASS_FAMILY",
        "FamilyClassPrereq": "FAMILY_CLASS_ARTISANS"
      },
      {
        "zType": "SUBJECT_FAMILY_RIDERS",
        "Class": "SUBJECTCLASS_FAMILY",
        "FamilyClassPrereq": "FAMILY_CLASS_RIDERS"
      },
      {
        "zType": "SUBJECT_FAMILY_HUNTERS",
        "Class": "SUBJECTCLASS_FAMILY",
        "FamilyClassPrereq": "FAMILY_CLASS_HUNTERS"
      },
      {
        "zType": "SUBJECT_LAW",
        "Class": "SUBJECTCLASS_LAW"
      },
      {
        "zType": "SUBJECT_LAW_PRIMOGENITURE",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_PRIMOGENITURE"
      },
      {
        "zType": "SUBJECT_LAW_ULTIMOGENITURE",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_ULTIMOGENITURE"
      },
      {
        "zType": "SUBJECT_LAW_LATERAL",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_LATERAL"
      },
      {
        "zType": "SUBJECT_LAW_DYNASTIC",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_DYNASTIC"
      },
      {
        "zType": "SUBJECT_LAW_SENIORITY",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_SENIORITY"
      },
      {
        "zType": "SUBJECT_LAW_SLAVERY",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_SLAVERY"
      },
      {
        "zType": "SUBJECT_LAW_FREEDOM",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_FREEDOM"
      },
      {
        "zType": "SUBJECT_LAW_CENTRALIZATION",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_CENTRALIZATION"
      },
      {
        "zType": "SUBJECT_LAW_VASSALAGE",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_VASSALAGE"
      },
      {
        "zType": "SUBJECT_LAW_TYRANNY",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_TYRANNY"
      },
      {
        "zType": "SUBJECT_LAW_CONSTITUTION",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_CONSTITUTION"
      },
      {
        "zType": "SUBJECT_LAW_EPICS",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_EPICS"
      },
      {
        "zType": "SUBJECT_LAW_EXPLORATION",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_EXPLORATION"
      },
      {
        "zType": "SUBJECT_LAW_COLONIZATION",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_COLONIZATION"
      },
      {
        "zType": "SUBJECT_LAW_SERFDOM",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_SERFDOM"
      },
      {
        "zType": "SUBJECT_LAW_MONOTHEISM",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_MONOTHEISM"
      },
      {
        "zType": "SUBJECT_LAW_POLYTHEISM",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_POLYTHEISM"
      },
      {
        "zType": "SUBJECT_LAW_PROFESSIONAL_ARMY",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_PROFESSIONAL_ARMY"
      },
      {
        "zType": "SUBJECT_LAW_VOLUNTEERS",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_VOLUNTEERS"
      },
      {
        "zType": "SUBJECT_LAW_TOLERANCE",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_TOLERANCE"
      },
      {
        "zType": "SUBJECT_LAW_ORTHODOXY",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_ORTHODOXY"
      },
      {
        "zType": "SUBJECT_LAW_GUILDS",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_GUILDS"
      },
      {
        "zType": "SUBJECT_LAW_ELITES",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_ELITES"
      },
      {
        "zType": "SUBJECT_LAW_PHILOSOPHY",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_PHILOSOPHY"
      },
      {
        "zType": "SUBJECT_LAW_ENGINEERING",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_ENGINEERING"
      },
      {
        "zType": "SUBJECT_LAW_ICONOGRAPHY",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_ICONOGRAPHY"
      },
      {
        "zType": "SUBJECT_LAW_CALLIGRAPHY",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_CALLIGRAPHY"
      },
      {
        "zType": "SUBJECT_LAW_ISOLATIONISM",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_ISOLATIONISM"
      },
      {
        "zType": "SUBJECT_LAW_TRADE_LEAGUE",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_TRADE_LEAGUE"
      },
      {
        "zType": "SUBJECT_LAW_ASCETICISM",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_ASCETICISM"
      },
      {
        "zType": "SUBJECT_LAW_HOLY_WAR",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_HOLY_WAR"
      },
      {
        "zType": "SUBJECT_LAW_DIVINE_RULE",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_DIVINE_RULE"
      },
      {
        "zType": "SUBJECT_LAW_SECULARISM",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_SECULARISM"
      },
      {
        "zType": "SUBJECT_LAW_COIN_DEBASEMENT",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_COIN_DEBASEMENT"
      },
      {
        "zType": "SUBJECT_LAW_MONETARY_REFORM",
        "Class": "SUBJECTCLASS_LAW",
        "Law": "LAW_MONETARY_REFORM"
      },
      {
        "zType": "SUBJECT_THEOLOGY",
        "Class": "SUBJECTCLASS_THEOLOGY"
      },
      {
        "zType": "SUBJECT_THEOLOGY_MYTHOLOGY",
        "Class": "SUBJECTCLASS_THEOLOGY",
        "Theology": "THEOLOGY_MYTHOLOGY"
      },
      {
        "zType": "SUBJECT_THEOLOGY_VENERATION",
        "Class": "SUBJECTCLASS_THEOLOGY",
        "Theology": "THEOLOGY_VENERATION"
      },
      {
        "zType": "SUBJECT_THEOLOGY_LEGALISM",
        "Class": "SUBJECTCLASS_THEOLOGY",
        "Theology": "THEOLOGY_LEGALISM"
      },
      {
        "zType": "SUBJECT_THEOLOGY_REVELATION",
        "Class": "SUBJECTCLASS_THEOLOGY",
        "Theology": "THEOLOGY_REVELATION"
      },
      {
        "zType": "SUBJECT_THEOLOGY_GNOSTICISM",
        "Class": "SUBJECTCLASS_THEOLOGY",
        "Theology": "THEOLOGY_GNOSTICISM"
      },
      {
        "zType": "SUBJECT_THEOLOGY_REDEMPTION",
        "Class": "SUBJECTCLASS_THEOLOGY",
        "Theology": "THEOLOGY_REDEMPTION"
      },
      {
        "zType": "SUBJECT_THEOLOGY_DUALISM",
        "Class": "SUBJECTCLASS_THEOLOGY",
        "Theology": "THEOLOGY_DUALISM"
      },
      {
        "zType": "SUBJECT_THEOLOGY_ENLIGHTENMENT",
        "Class": "SUBJECTCLASS_THEOLOGY",
        "Theology": "THEOLOGY_ENLIGHTENMENT"
      },
      {
        "zType": "SUBJECT_RESOURCE",
        "Class": "SUBJECTCLASS_RESOURCE"
      },
      {
        "zType": "SUBJECT_HAS_LUXURY",
        "Class": "SUBJECTCLASS_RESOURCE",
        "RelationUs": "SUBJECTRELATION_PLAYER_LUXURY"
      },
      {
        "zType": "SUBJECT_HAS_GEM",
        "Class": "SUBJECTCLASS_RESOURCE",
        "RelationUs": "SUBJECTRELATION_PLAYER_LUXURY",
        "Resource": "RESOURCE_GEM"
      },
      {
        "zType": "SUBJECT_HAS_INCENSE",
        "Class": "SUBJECTCLASS_RESOURCE",
        "RelationUs": "SUBJECTRELATION_PLAYER_LUXURY",
        "Resource": "RESOURCE_INCENSE"
      },
      {
        "zType": "SUBJECT_CHARACTER_NOT_ME",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bNotMe": "1"
      },
      {
        "comment": "A Character in the human's nation",
        "zType": "SUBJECT_CHARACTER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsUs": "1"
      },
      {
        "comment": "A Character in an AI nation",
        "zType": "SUBJECT_CHARACTER_THEM",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsNotUs": "1"
      },
      {
        "zType": "SUBJECT_CHARACTER_DEAD_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsUs": "1",
        "bDead": "1"
      },
      {
        "zType": "SUBJECT_WAS_LEADER_DEAD_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsUs": "1",
        "bDead": "1",
        "bWasLeader": "1"
      },
      {
        "comment": "Leader of the Human nation",
        "zType": "SUBJECT_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsUs": "1",
        "bLeader": "1"
      },
      {
        "comment": "Leader of the Human nation who has a family",
        "zType": "SUBJECT_LEADER_FAMILY_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsUs": "1",
        "bLeader": "1",
        "bHasFamily": "1"
      },
      {
        "zType": "SUBJECT_NON_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsUs": "1",
        "bNonLeader": "1"
      },
      {
        "zType": "SUBJECT_SPOUSE_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_SPOUSE_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_CHILD_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_CHILD_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_GRANDCHILD_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_GRANDCHILD_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_DESCENDANT_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_DESCENDANT_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_PARENT_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_PARENT_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_GRANDPARENT_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_GRANDPARENT_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_ANCESTOR_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_ANCESTOR_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_SIBLING_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_SIBLING_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_SIBLING_IN_LAW_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_SIBLING_IN_LAW_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_HALF_SIBLING_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_HALF_SIBLING_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_LEADER_COUSIN_OF_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_COUSIN_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_AUNT_UNCLE_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_AUNT_UNCLE_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_NIECE_NEPHEW_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_NIECE_NEPHEW_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_CHILD_OF_IN_LAW_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_CHILD_IN_LAW_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_PARENT_IN_LAW_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_PARENT_IN_LAW_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_STEPCHILD_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_STEPCHILD_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_STEPPARENT_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_STEPPARENT_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_ENDEARED_TO_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_ENDEARED_TO",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_SUSPICIOUS_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_SUSPICIOUS_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_JEALOUS_ABOUT_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_JEALOUS_ABOUT",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_OBLIGED_TO_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_OBLIGED_TO",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_DISAPPOINTED_WITH_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_DISAPPOINTED_WITH",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_ALLIED_WITH_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_ALLIED_WITH",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_LOVER_OF_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_LOVER_OF",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_ESTRANGED_FROM_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_ESTRANGED_FROM",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_IN_LOVE_WITH_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_IN_LOVE_WITH",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_VENGEFUL_AGAINST_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_VENGEFUL_AGAINST",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_PLOTTING_AGAINST_LEADER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationLeader": "SUBJECTRELATION_PLOTTING_AGAINST",
        "bIsUs": "1"
      },
      {
        "comment": "Character with a Family of human nation",
        "zType": "SUBJECT_CHARACTER_FAMILY_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsUs": "1",
        "bHasFamily": "1"
      },
      {
        "comment": "Heir to the human nation",
        "zType": "SUBJECT_HEIR_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsUs": "1",
        "bHeir": "1"
      },
      {
        "comment": "In line of succession to the human nation",
        "zType": "SUBJECT_SUCCESSION_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsUs": "1",
        "bSuccession": "1"
      },
      {
        "comment": "Courtier from human nation",
        "zType": "SUBJECT_COURTIER_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsUs": "1",
        "bCourtier": "1"
      },
      {
        "comment": "Barbarian from human nation",
        "zType": "SUBJECT_CHARACTER_BARBARIAN_US",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsUs": "1",
        "bBarbarian": "1"
      },
      {
        "comment": "Character from a foreign Nation",
        "zType": "SUBJECT_CHARACTER_PLAYER_THEM",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsNotUs": "1",
        "bHasPlayer": "1"
      },
      {
        "comment": "A Leader from an AI nation",
        "zType": "SUBJECT_LEADER_THEM",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsNotUs": "1",
        "bHasPlayer": "1",
        "bLeader": "1"
      },
      {
        "comment": "Leader of an AI nation at War with human",
        "zType": "SUBJECT_LEADER_WAR",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationUs": "SUBJECTRELATION_PLAYER_WAR",
        "bIsNotUs": "1",
        "bHasPlayer": "1",
        "bLeader": "1"
      },
      {
        "comment": "Leader of AI nation non-hostile with human",
        "zType": "SUBJECT_LEADER_PEACE_OR_TRUCE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationUs": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
        "bIsNotUs": "1",
        "bHasPlayer": "1",
        "bLeader": "1"
      },
      {
        "comment": "Heir of an AI nation",
        "zType": "SUBJECT_HEIR_THEM",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsNotUs": "1",
        "bHasPlayer": "1",
        "bHeir": "1"
      },
      {
        "comment": "In line of succession of an AI nation",
        "zType": "SUBJECT_SUCCESSION_THEM",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsNotUs": "1",
        "bHasPlayer": "1",
        "bSuccession": "1"
      },
      {
        "comment": "Barbarian Character not part of any Nation",
        "zType": "SUBJECT_CHARACTER_BARBARIAN_THEM",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsNotUs": "1",
        "bNoPlayer": "1",
        "bBarbarian": "1"
      },
      {
        "comment": "Leader of a Barbarian Tribe",
        "zType": "SUBJECT_LEADER_BARBARIAN_THEM",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bIsNotUs": "1",
        "bNoPlayer": "1",
        "bBarbarianLeader": "1"
      },
      {
        "zType": "SUBJECT_LEADER_SCHEMER",
        "zName": "Schemer Leader",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SCHEMER_ARCHETYPE",
        "bLeader": "1"
      },
      {
        "zType": "SUBJECT_LEADER_DIPLOMAT",
        "zName": "Diplomat Leader",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_DIPLOMAT_ARCHETYPE",
        "bLeader": "1"
      },
      {
        "zType": "SUBJECT_LEADER_OR_DESCENDANT_MARRY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bLeaderOrDescendant": "1",
        "bCanMarry": "1"
      },
      {
        "zType": "SUBJECT_CHARACTER_MAX_CAUTIOUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationUs": "SUBJECTRELATION_CHARACTER_MAX_CAUTIOUS"
      },
      {
        "zType": "SUBJECT_CHARACTER_MAX_UPSET",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationUs": "SUBJECTRELATION_CHARACTER_MAX_UPSET"
      },
      {
        "zType": "SUBJECT_CHARACTER_MAX_ANGRY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationUs": "SUBJECTRELATION_CHARACTER_MAX_ANGRY"
      },
      {
        "zType": "SUBJECT_CHARACTER_MAX_FURIOUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "RelationUs": "SUBJECTRELATION_CHARACTER_MAX_FURIOUS"
      },
      {
        "zType": "SUBJECT_CHARACTER_FAMILY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bHasFamily": "1"
      },
      {
        "zType": "SUBJECT_HEALTHY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_SEVERELY_ILL"
      },
      {
        "zType": "SUBJECT_BABY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "iMaxAge": "1"
      },
      {
        "zType": "SUBJECT_TODDLER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "iMinAge": "2",
        "iMaxAge": "5"
      },
      {
        "zType": "SUBJECT_CHILD",
        "Class": "SUBJECTCLASS_CHARACTER",
        "iMinAge": "6",
        "iMaxAge": "11"
      },
      {
        "zType": "SUBJECT_TEENAGER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "iMinAge": "12",
        "iMaxAge": "18"
      },
      {
        "zType": "SUBJECT_CHILD_OR_TEENAGER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "iMinAge": "6",
        "iMaxAge": "18"
      },
      {
        "zType": "SUBJECT_TEENAGER_OR_ADULT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "iMinAge": "12"
      },
      {
        "zType": "SUBJECT_ADULT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "iMinAge": "18"
      },
      {
        "zType": "SUBJECT_MIDDLE_AGE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "iMinAge": "18",
        "iMaxAge": "40"
      },
      {
        "zType": "SUBJECT_OLD",
        "Class": "SUBJECTCLASS_CHARACTER",
        "iMinAge": "40"
      },
      {
        "zType": "SUBJECT_ADULT_UNDER_30",
        "Class": "SUBJECTCLASS_CHARACTER",
        "iMinAge": "18",
        "iMaxAge": "30"
      },
      {
        "zType": "SUBJECT_ADULT_UNDER_40",
        "Class": "SUBJECTCLASS_CHARACTER",
        "iMinAge": "18",
        "iMaxAge": "40"
      },
      {
        "zType": "SUBJECT_OVER_40",
        "Class": "SUBJECTCLASS_CHARACTER",
        "iMinAge": "40"
      },
      {
        "zType": "SUBJECT_MARRIED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bHasSpouse": "1"
      },
      {
        "zType": "SUBJECT_SINGLE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bHasNoSpouse": "1"
      },
      {
        "zType": "SUBJECT_FEMALE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "GenderPrereq": "GENDER_FEMALE"
      },
      {
        "zType": "SUBJECT_MALE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "GenderPrereq": "GENDER_MALE"
      },
      {
        "zType": "SUBJECT_FERTILE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bFertile": "1"
      },
      {
        "zType": "SUBJECT_GOVERNOR",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bGovernor": "1"
      },
      {
        "zType": "SUBJECT_GENERAL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bGeneral": "1"
      },
      {
        "zType": "SUBJECT_NON_GENERAL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bNonGeneral": "1"
      },
      {
        "zType": "SUBJECT_NO_JOB",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bNoJob": "1"
      },
      {
        "zType": "SUBJECT_ROYAL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bRoyal": "1"
      },
      {
        "zType": "SUBJECT_NON_ROYAL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bNonRoyal": "1"
      },
      {
        "zType": "SUBJECT_ROYAL_SPOUSE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bRoyalSpouse": "1"
      },
      {
        "zType": "SUBJECT_AMBASSADOR",
        "zName": "Ambassador",
        "Class": "SUBJECTCLASS_CHARACTER",
        "CouncilPrereq": "COUNCIL_AMBASSADOR"
      },
      {
        "zType": "SUBJECT_CHANCELLOR",
        "zName": "Chancellor",
        "Class": "SUBJECTCLASS_CHARACTER",
        "CouncilPrereq": "COUNCIL_CHANCELLOR"
      },
      {
        "zType": "SUBJECT_SPYMASTER",
        "zName": "Spymaster",
        "Class": "SUBJECTCLASS_CHARACTER",
        "CouncilPrereq": "COUNCIL_SPYMASTER"
      },
      {
        "zType": "SUBJECT_GREAT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bCourtier": "1"
      },
      {
        "zType": "SUBJECT_NON_GREAT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bNonCourtier": "1"
      },
      {
        "zType": "SUBJECT_CAN_MARRY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bCanMarry": "1"
      },
      {
        "zType": "SUBJECT_CAN_HAVE_CHILDREN",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bCanHaveChildren": "1"
      },
      {
        "zType": "SUBJECT_ARCHETYPE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bArchetype": "1"
      },
      {
        "zType": "SUBJECT_NO_ARCHETYPE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "bNoArchetype": "1"
      },
      {
        "zType": "SUBJECT_GREAT_SOLDIER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "CourtierPrereq": "COURTIER_GREAT_SOLDIER"
      },
      {
        "zType": "SUBJECT_GREAT_MINISTER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "CourtierPrereq": "COURTIER_GREAT_MINISTER"
      },
      {
        "zType": "SUBJECT_GREAT_MERCHANT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "CourtierPrereq": "COURTIER_GREAT_MERCHANT"
      },
      {
        "zType": "SUBJECT_GREAT_SCIENTIST",
        "Class": "SUBJECTCLASS_CHARACTER",
        "CourtierPrereq": "COURTIER_GREAT_SCIENTIST"
      },
      {
        "zType": "SUBJECT_CHARACTER_MELEE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "UnitTrait": "UNITTRAIT_MELEE"
      },
      {
        "zType": "SUBJECT_CHARACTER_RANGED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "UnitTrait": "UNITTRAIT_RANGED"
      },
      {
        "zType": "SUBJECT_CHARACTER_LANDOWNERS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "FamilyClassPrereq": "FAMILY_CLASS_LANDOWNERS"
      },
      {
        "zType": "SUBJECT_CHARACTER_CHAMPIONS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "FamilyClassPrereq": "FAMILY_CLASS_CHAMPIONS"
      },
      {
        "zType": "SUBJECT_CHARACTER_STATESMEN",
        "Class": "SUBJECTCLASS_CHARACTER",
        "FamilyClassPrereq": "FAMILY_CLASS_STATESMEN"
      },
      {
        "zType": "SUBJECT_CHARACTER_PATRONS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "FamilyClassPrereq": "FAMILY_CLASS_PATRONS"
      },
      {
        "zType": "SUBJECT_CHARACTER_CLERICS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "FamilyClassPrereq": "FAMILY_CLASS_CLERICS"
      },
      {
        "zType": "SUBJECT_CHARACTER_SAGES",
        "Class": "SUBJECTCLASS_CHARACTER",
        "FamilyClassPrereq": "FAMILY_CLASS_SAGES"
      },
      {
        "zType": "SUBJECT_CHARACTER_TRADERS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "FamilyClassPrereq": "FAMILY_CLASS_TRADERS"
      },
      {
        "zType": "SUBJECT_CHARACTER_ARTISANS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "FamilyClassPrereq": "FAMILY_CLASS_ARTISANS"
      },
      {
        "zType": "SUBJECT_CHARACTER_RIDERS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "FamilyClassPrereq": "FAMILY_CLASS_RIDERS"
      },
      {
        "zType": "SUBJECT_CHARACTER_HUNTERS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "FamilyClassPrereq": "FAMILY_CLASS_HUNTERS"
      },
      {
        "zType": "SUBJECT_HIGH_CHARISMA",
        "Class": "SUBJECTCLASS_CHARACTER",
        "aiMinRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "SUBJECT_LOW_CHARISMA",
        "Class": "SUBJECTCLASS_CHARACTER",
        "aiMaxRating": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "SUBJECT_HIGH_COURAGE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "aiMinRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "SUBJECT_LOW_COURAGE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "aiMaxRating": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "SUBJECT_HIGH_DISCIPLINE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "aiMinRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "SUBJECT_LOW_DISCIPLINE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "aiMaxRating": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "SUBJECT_HIGH_WISDOM",
        "Class": "SUBJECTCLASS_CHARACTER",
        "aiMinRating": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "SUBJECT_LOW_WISDOM",
        "Class": "SUBJECTCLASS_CHARACTER",
        "aiMaxRating": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "SUBJECT_TACTICIAN",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_TACTICIAN_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_JUDGE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_JUDGE_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_ORATOR",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_ORATOR_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_SCHOLAR",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SCHOLAR_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_BUILDER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_BUILDER_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_SCHEMER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SCHEMER_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_COMMANDER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_COMMANDER_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_ZEALOT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_ZEALOT_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_NOT_ZEALOT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_ZEALOT_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_DIPLOMAT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_DIPLOMAT_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_HERO",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_HERO_ARCHETYPE"
      },
      {
        "zType": "SUBJECT_AFFABLE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_AFFABLE"
      },
      {
        "zType": "SUBJECT_NOT_AFFABLE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_AFFABLE"
      },
      {
        "zType": "SUBJECT_ELOQUENT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_ELOQUENT"
      },
      {
        "zType": "SUBJECT_NOT_ELOQUENT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_ELOQUENT"
      },
      {
        "zType": "SUBJECT_WARLIKE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_WARLIKE"
      },
      {
        "zType": "SUBJECT_NOT_WARLIKE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_WARLIKE"
      },
      {
        "zType": "SUBJECT_INSPIRED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_INSPIRED"
      },
      {
        "zType": "SUBJECT_NOT_INSPIRED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_INSPIRED"
      },
      {
        "zType": "SUBJECT_INTELLIGENT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_INTELLIGENT"
      },
      {
        "zType": "SUBJECT_NOT_INTELLIGENT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_INTELLIGENT"
      },
      {
        "zType": "SUBJECT_PROSPEROUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_PROSPEROUS"
      },
      {
        "zType": "SUBJECT_NOT_PROSPEROUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_PROSPEROUS"
      },
      {
        "zType": "SUBJECT_FRUGAL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_FRUGAL"
      },
      {
        "zType": "SUBJECT_NOT_FRUGAL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_FRUGAL"
      },
      {
        "zType": "SUBJECT_RIGHTEOUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_RIGHTEOUS"
      },
      {
        "zType": "SUBJECT_NOT_RIGHTEOUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_RIGHTEOUS"
      },
      {
        "zType": "SUBJECT_CRUEL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_CRUEL"
      },
      {
        "zType": "SUBJECT_NOT_CRUEL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_CRUEL"
      },
      {
        "zType": "SUBJECT_CARELESS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_CARELESS"
      },
      {
        "zType": "SUBJECT_NOT_CARELESS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_CARELESS"
      },
      {
        "zType": "SUBJECT_SLOTHFUL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SLOTHFUL"
      },
      {
        "zType": "SUBJECT_NOT_SLOTHFUL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_SLOTHFUL"
      },
      {
        "zType": "SUBJECT_CORRUPT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_CORRUPT"
      },
      {
        "zType": "SUBJECT_NOT_CORRUPT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_CORRUPT"
      },
      {
        "zType": "SUBJECT_UNCOUTH",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_UNCOUTH"
      },
      {
        "zType": "SUBJECT_NOT_UNCOUTH",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_UNCOUTH"
      },
      {
        "zType": "SUBJECT_FOOLISH",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_FOOLISH"
      },
      {
        "zType": "SUBJECT_NOT_FOOLISH",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_FOOLISH"
      },
      {
        "zType": "SUBJECT_EXTRAVAGANT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_EXTRAVAGANT"
      },
      {
        "zType": "SUBJECT_NOT_EXTRAVAGANT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_EXTRAVAGANT"
      },
      {
        "zType": "SUBJECT_DEBAUCHED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_DEBAUCHED"
      },
      {
        "zType": "SUBJECT_NOT_DEBAUCHED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_DEBAUCHED"
      },
      {
        "zType": "SUBJECT_ROBUST",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_ROBUST"
      },
      {
        "zType": "SUBJECT_VIGILANT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_VIGILANT"
      },
      {
        "zType": "SUBJECT_STRICT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_STRICT"
      },
      {
        "zType": "SUBJECT_DRILLMASTER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_DRILLMASTER"
      },
      {
        "zType": "SUBJECT_KEEN",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_KEEN"
      },
      {
        "zType": "SUBJECT_EQUESTRIAN",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_EQUESTRIAN"
      },
      {
        "zType": "SUBJECT_ANGLER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_ANGLER"
      },
      {
        "zType": "SUBJECT_PLANTER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_PLANTER"
      },
      {
        "zType": "SUBJECT_FORESTER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_FORESTER"
      },
      {
        "zType": "SUBJECT_DELVER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_DELVER"
      },
      {
        "zType": "SUBJECT_SMELTER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SMELTER"
      },
      {
        "zType": "SUBJECT_HERDER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_HERDER"
      },
      {
        "zType": "SUBJECT_TRACKER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_TRACKER"
      },
      {
        "zType": "SUBJECT_SWIFT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SWIFT"
      },
      {
        "zType": "SUBJECT_HARDY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_HARDY"
      },
      {
        "zType": "SUBJECT_EAGLE_EYE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_EAGLE_EYE"
      },
      {
        "zType": "SUBJECT_MARKSMAN",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_MARKSMAN"
      },
      {
        "zType": "SUBJECT_ENGINEER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_ENGINEER"
      },
      {
        "zType": "SUBJECT_BESIEGER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_BESIEGER"
      },
      {
        "zType": "SUBJECT_GARRISON",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_GARRISON"
      },
      {
        "zType": "SUBJECT_BLOODTHIRSTY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_BLOODTHIRSTY"
      },
      {
        "zType": "SUBJECT_STEADFAST",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_STEADFAST"
      },
      {
        "zType": "SUBJECT_HERBALIST",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_HERBALIST"
      },
      {
        "zType": "SUBJECT_HIGHLANDER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_HIGHLANDER"
      },
      {
        "zType": "SUBJECT_RANGER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_RANGER"
      },
      {
        "zType": "SUBJECT_BRAVE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_BRAVE"
      },
      {
        "zType": "SUBJECT_SHIELDBEARER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SHIELDBEARER"
      },
      {
        "zType": "SUBJECT_FIERCE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_FIERCE"
      },
      {
        "zType": "SUBJECT_HORSEBANE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_HORSEBANE"
      },
      {
        "zType": "SUBJECT_AGGRESSOR",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_AGGRESSOR"
      },
      {
        "zType": "SUBJECT_BOLD",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_BOLD"
      },
      {
        "zType": "SUBJECT_NOT_BOLD",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_BOLD"
      },
      {
        "zType": "SUBJECT_COWARDLY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_COWARDLY"
      },
      {
        "zType": "SUBJECT_NOT_COWARDLY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_COWARDLY"
      },
      {
        "zType": "SUBJECT_GREEDY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_GREEDY"
      },
      {
        "zType": "SUBJECT_NOT_GREEDY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_GREEDY"
      },
      {
        "zType": "SUBJECT_CUNNING",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_CUNNING"
      },
      {
        "zType": "SUBJECT_ROMANTIC",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_ROMANTIC"
      },
      {
        "zType": "SUBJECT_NOT_ROMANTIC",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_ROMANTIC"
      },
      {
        "zType": "SUBJECT_COMPASSIONATE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_COMPASSIONATE"
      },
      {
        "zType": "SUBJECT_INSPIRING",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_INSPIRING"
      },
      {
        "zType": "SUBJECT_LOYAL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_LOYAL"
      },
      {
        "zType": "SUBJECT_NOT_LOYAL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_LOYAL"
      },
      {
        "zType": "SUBJECT_BITTER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_BITTER"
      },
      {
        "zType": "SUBJECT_NOT_BITTER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_BITTER"
      },
      {
        "zType": "SUBJECT_SPOILED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SPOILED"
      },
      {
        "zType": "SUBJECT_HONEST",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_HONEST"
      },
      {
        "zType": "SUBJECT_PIOUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_PIOUS"
      },
      {
        "zType": "SUBJECT_HUMBLE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_HUMBLE"
      },
      {
        "zType": "SUBJECT_HEARTBROKEN",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_HEARTBROKEN"
      },
      {
        "zType": "SUBJECT_INTOLERANT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_INTOLERANT"
      },
      {
        "zType": "SUBJECT_VENGEFUL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_VENGEFUL"
      },
      {
        "zType": "SUBJECT_SUPERSTITIOUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SUPERSTITIOUS"
      },
      {
        "zType": "SUBJECT_RUTHLESS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_RUTHLESS"
      },
      {
        "zType": "SUBJECT_NOT_RUTHLESS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_RUTHLESS"
      },
      {
        "zType": "SUBJECT_GRACIOUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_GRACIOUS"
      },
      {
        "zType": "SUBJECT_NOT_GRACIOUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_GRACIOUS"
      },
      {
        "zType": "SUBJECT_PROUD",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_PROUD"
      },
      {
        "zType": "SUBJECT_NOT_PROUD",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_PROUD"
      },
      {
        "zType": "SUBJECT_BEAUTIFUL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_BEAUTIFUL"
      },
      {
        "zType": "SUBJECT_DEALMAKER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_DEALMAKER"
      },
      {
        "zType": "SUBJECT_STUDY_TACTICS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_STUDY_TACTICS"
      },
      {
        "zType": "SUBJECT_STUDY_RHETORIC",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_STUDY_RHETORIC"
      },
      {
        "zType": "SUBJECT_STUDY_COMMERCE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_STUDY_COMMERCE"
      },
      {
        "zType": "SUBJECT_STUDY_PHILOSOPHY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_STUDY_PHILOSOPHY"
      },
      {
        "zType": "SUBJECT_STUDY_ANY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "aeTraitAny": {
          "zValue": [
            "TRAIT_STUDY_TACTICS",
            "TRAIT_STUDY_RHETORIC",
            "TRAIT_STUDY_COMMERCE",
            "TRAIT_STUDY_PHILOSOPHY"
          ]
        }
      },
      {
        "zType": "SUBJECT_LEADER_STYLE_INQUISITIVE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "aeTraitAny": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_DIPLOMAT_ARCHETYPE",
            "TRAIT_JUDGE_ARCHETYPE"
          ]
        }
      },
      {
        "zType": "SUBJECT_LEADER_STYLE_MARTIAL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "aeTraitAny": {
          "zValue": [
            "TRAIT_HERO_ARCHETYPE",
            "TRAIT_COMMANDER_ARCHETYPE",
            "TRAIT_TACTICIAN_ARCHETYPE"
          ]
        }
      },
      {
        "zType": "SUBJECT_LEADER_STYLE_PARANOID",
        "Class": "SUBJECTCLASS_CHARACTER",
        "aeTraitAny": {
          "zValue": [
            "TRAIT_SCHEMER_ARCHETYPE",
            "TRAIT_ZEALOT_ARCHETYPE",
            "TRAIT_ORATOR_ARCHETYPE"
          ]
        }
      },
      {
        "zType": "SUBJECT_EXPLORING",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_EXPLORING"
      },
      {
        "zType": "SUBJECT_BLESSED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_BLESSED"
      },
      {
        "zType": "SUBJECT_CURSED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_CURSED"
      },
      {
        "zType": "SUBJECT_ILL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_ILL"
      },
      {
        "zType": "SUBJECT_SEVERELY_ILL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SEVERELY_ILL"
      },
      {
        "zType": "SUBJECT_POISONER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_POISONER"
      },
      {
        "zType": "SUBJECT_POISONED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_POISONED"
      },
      {
        "zType": "SUBJECT_MISERABLE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_MISERABLE"
      },
      {
        "zType": "SUBJECT_SCARRED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SCARRED"
      },
      {
        "zType": "SUBJECT_CRIPPLED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_CRIPPLED"
      },
      {
        "zType": "SUBJECT_BLINDED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_BLINDED"
      },
      {
        "zType": "SUBJECT_FLED_COUNTRY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_FLED_COUNTRY"
      },
      {
        "zType": "SUBJECT_IMPRISONED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_IMPRISONED"
      },
      {
        "zType": "SUBJECT_RELEASED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_RELEASED"
      },
      {
        "zType": "SUBJECT_ON_THE_RUN",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_ON_THE_RUN"
      },
      {
        "zType": "SUBJECT_HIDING_ABROAD",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_HIDING_ABROAD"
      },
      {
        "zType": "SUBJECT_CAPTURED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_CAPTURED"
      },
      {
        "zType": "SUBJECT_EXILED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_EXILED"
      },
      {
        "zType": "SUBJECT_GAY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_GAY"
      },
      {
        "zType": "SUBJECT_NOT_GAY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_GAY"
      },
      {
        "zType": "SUBJECT_BASTARD",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_BASTARD"
      },
      {
        "zType": "SUBJECT_ADOPTED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_ADOPTED"
      },
      {
        "zType": "SUBJECT_SLIGHTED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SLIGHTED"
      },
      {
        "zType": "SUBJECT_INFAMOUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_INFAMOUS"
      },
      {
        "zType": "SUBJECT_FAMOUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_FAMOUS"
      },
      {
        "zType": "SUBJECT_POPULAR_HERO",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_POPULAR_HERO"
      },
      {
        "zType": "SUBJECT_BYPASSED_HEIR",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_BYPASSED_HEIR"
      },
      {
        "zType": "SUBJECT_EXOTIC",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_EXOTIC"
      },
      {
        "zType": "SUBJECT_EXCLUDED",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_EXCLUDED"
      },
      {
        "zType": "SUBJECT_DIVINE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_DIVINE"
      },
      {
        "zType": "SUBJECT_SOLDIER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SOLDIER"
      },
      {
        "zType": "SUBJECT_DRUNK",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_DRUNK"
      },
      {
        "zType": "SUBJECT_NOT_DRUNK",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitInvalid": "TRAIT_DRUNK"
      },
      {
        "zType": "SUBJECT_MOURNING",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_MOURNING"
      },
      {
        "zType": "SUBJECT_ARCHON",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_ARCHON"
      },
      {
        "zType": "SUBJECT_MYSTERIOUS_SWORD",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_MYSTERIOUS_SWORD"
      },
      {
        "zType": "SUBJECT_SWORD_OF_THE_GODS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_SWORD_OF_THE_GODS"
      },
      {
        "zType": "SUBJECT_PET_FISH",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_PET_FISH"
      },
      {
        "zType": "SUBJECT_PET_MONKEY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_PET_MONKEY"
      },
      {
        "zType": "SUBJECT_MONKEY_ASSASSIN",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_MONKEY_ASSASSIN"
      },
      {
        "zType": "SUBJECT_OVERSEER_OF_THE_FIELDS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_OVERSEER_OF_THE_FIELDS"
      },
      {
        "zType": "SUBJECT_POSSESSOR_OF_VENERATION",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_POSSESSOR_OF_VENERATION"
      },
      {
        "zType": "SUBJECT_STEWARD_OF_THE_CHAMBER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "TraitPrereq": "TRAIT_STEWARD_OF_THE_CHAMBER"
      },
      {
        "comment": "A City within the human nation",
        "zType": "SUBJECT_CITY_US",
        "Class": "SUBJECTCLASS_CITY",
        "bIsUs": "1",
        "bHasPlayer": "1",
        "bHasFamily": "1"
      },
      {
        "comment": "A City within another player nation",
        "zType": "SUBJECT_CITY_THEM",
        "Class": "SUBJECTCLASS_CITY",
        "bIsNotUs": "1",
        "bHasPlayer": "1",
        "bHasFamily": "1"
      },
      {
        "comment": "Capital of the human nation",
        "zType": "SUBJECT_CAPITAL_US",
        "Class": "SUBJECTCLASS_CITY",
        "bIsUs": "1",
        "bCapital": "1"
      },
      {
        "zType": "SUBJECT_CITY_COASTAL",
        "Class": "SUBJECTCLASS_CITY",
        "bCoast": "1"
      },
      {
        "zType": "SUBJECT_CITY_MAX_UPSET",
        "Class": "SUBJECTCLASS_CITY",
        "RelationUs": "SUBJECTRELATION_FAMILY_MAX_UPSET"
      },
      {
        "zType": "SUBJECT_CITY_MAX_ANGRY",
        "Class": "SUBJECTCLASS_CITY",
        "RelationUs": "SUBJECTRELATION_FAMILY_MAX_ANGRY"
      },
      {
        "zType": "SUBJECT_CITY_MAX_FURIOUS",
        "Class": "SUBJECTCLASS_CITY",
        "RelationUs": "SUBJECTRELATION_FAMILY_MAX_FURIOUS"
      },
      {
        "zType": "SUBJECT_CITY_WITH_GOVERNOR",
        "Class": "SUBJECTCLASS_CITY",
        "bGovernor": "1"
      },
      {
        "comment": "XXX might not be necessary if all our cities have families",
        "zType": "SUBJECT_CITY_FAMILY_SEAT",
        "Class": "SUBJECTCLASS_CITY",
        "bFamilySeat": "1"
      },
      {
        "zType": "SUBJECT_CITY_SAGES",
        "Class": "SUBJECTCLASS_CITY",
        "FamilyClassPrereq": "FAMILY_CLASS_SAGES"
      },
      {
        "zType": "SUBJECT_CITY_DISCONTENT_MODERATE",
        "Class": "SUBJECTCLASS_CITY",
        "iMinDiscontentLevel": "5"
      },
      {
        "zType": "SUBJECT_CITY_HALF_DAMAGE",
        "Class": "SUBJECTCLASS_CITY",
        "iMinDamagePercent": "50"
      },
      {
        "zType": "SUBJECT_CITY_MONASTERY",
        "Class": "SUBJECTCLASS_CITY",
        "ImprovementClassCity": "IMPROVEMENTCLASS_MONASTERY"
      },
      {
        "zType": "SUBJECT_CITY_NEWEST",
        "Class": "SUBJECTCLASS_CITY",
        "bNewestCity": "1"
      },
      {
        "zType": "SUBJECT_CITY_HOSTILE_GARRISON",
        "Class": "SUBJECTCLASS_CITY",
        "ProjectPrereq": "PROJECT_HOSTILE_GARRISON"
      },
      {
        "zType": "SUBJECT_CITY_PROPAGANDA",
        "Class": "SUBJECTCLASS_CITY",
        "ProjectPrereq": "PROJECT_PROPAGANDA"
      },
      {
        "zType": "SUBJECT_CITY_NECROPOLIS",
        "Class": "SUBJECTCLASS_CITY",
        "ImprovementCity": "IMPROVEMENT_NECROPOLIS"
      },
      {
        "comment": "A unit belonging to the human nation",
        "zType": "SUBJECT_UNIT_US",
        "Class": "SUBJECTCLASS_UNIT",
        "bIsUs": "1"
      },
      {
        "zType": "SUBJECT_SCOUT",
        "Class": "SUBJECTCLASS_UNIT",
        "UnitType": "UNIT_SCOUT"
      },
      {
        "comment": "Military melee unit",
        "zType": "SUBJECT_UNIT_MELEE",
        "Class": "SUBJECTCLASS_UNIT",
        "UnitTrait": "UNITTRAIT_MELEE"
      },
      {
        "comment": "Military mounted unit",
        "zType": "SUBJECT_UNIT_MOUNTED",
        "Class": "SUBJECTCLASS_UNIT",
        "UnitTrait": "UNITTRAIT_MOUNTED"
      },
      {
        "comment": "Military ranged unit",
        "zType": "SUBJECT_UNIT_RANGED",
        "Class": "SUBJECTCLASS_UNIT",
        "UnitTrait": "UNITTRAIT_RANGED"
      },
      {
        "zType": "SUBJECT_UNIT_NEEDS_GENERAL",
        "Class": "SUBJECTCLASS_UNIT",
        "bNeedsGeneral": "1"
      },
      {
        "comment": "A tile on the map",
        "zType": "SUBJECT_TILE",
        "Class": "SUBJECTCLASS_TILE"
      },
      {
        "zType": "SUBJECT_TILE_CLAIMED",
        "Class": "SUBJECTCLASS_TILE",
        "bClaimed": "1"
      },
      {
        "zType": "SUBJECT_TILE_UNCLAIMED",
        "Class": "SUBJECTCLASS_TILE",
        "bUnclaimed": "1"
      },
      {
        "zType": "SUBJECT_TILE_FRESH_WATER",
        "Class": "SUBJECTCLASS_TILE",
        "bFreshWater": "1"
      },
      {
        "zType": "SUBJECT_TILE_FRESH_WATER_NO",
        "Class": "SUBJECTCLASS_TILE",
        "bNoFreshWater": "1"
      },
      {
        "comment": "Land tile adjacent to salt water",
        "zType": "SUBJECT_TILE_COASTAL_LAND",
        "Class": "SUBJECTCLASS_TILE",
        "bCoast": "1"
      },
      {
        "zType": "SUBJECT_TILE_RIVER",
        "Class": "SUBJECTCLASS_TILE",
        "bRiver": "1"
      },
      {
        "zType": "SUBJECT_TILE_NO_RESOURCE",
        "Class": "SUBJECTCLASS_TILE",
        "bNoResource": "1"
      },
      {
        "zType": "SUBJECT_TILE_TRIBE",
        "Class": "SUBJECTCLASS_TILE",
        "bTribe": "1"
      },
      {
        "comment": "Water tile with Coastal terrain type",
        "zType": "SUBJECT_TILE_COASTAL_WATER",
        "Class": "SUBJECTCLASS_TILE",
        "Terrain": "TERRAIN_WATER",
        "Height": "HEIGHT_COAST"
      },
      {
        "zType": "SUBJECT_TILE_MINE",
        "Class": "SUBJECTCLASS_TILE",
        "ImprovementTile": "IMPROVEMENT_MINE"
      },
      {
        "zType": "SUBJECT_TILE_LUSH",
        "Class": "SUBJECTCLASS_TILE",
        "Terrain": "TERRAIN_LUSH"
      },
      {
        "zType": "SUBJECT_TILE_TEMPERATE",
        "Class": "SUBJECTCLASS_TILE",
        "Terrain": "TERRAIN_TEMPERATE"
      },
      {
        "zType": "SUBJECT_TILE_ARID",
        "Class": "SUBJECTCLASS_TILE",
        "Terrain": "TERRAIN_ARID"
      },
      {
        "zType": "SUBJECT_TILE_DESERT",
        "Class": "SUBJECTCLASS_TILE",
        "Terrain": "TERRAIN_SAND"
      },
      {
        "zType": "SUBJECT_TILE_TUNDRA",
        "Class": "SUBJECTCLASS_TILE",
        "Terrain": "TERRAIN_TUNDRA"
      },
      {
        "zType": "SUBJECT_TILE_FLAT",
        "Class": "SUBJECTCLASS_TILE",
        "Height": "HEIGHT_FLAT"
      },
      {
        "zType": "SUBJECT_TILE_HILL",
        "Class": "SUBJECTCLASS_TILE",
        "Height": "HEIGHT_HILL"
      },
      {
        "zType": "SUBJECT_TILE_TREES",
        "Class": "SUBJECTCLASS_TILE",
        "Vegetation": "VEGETATION_TREES"
      },
      {
        "zType": "SUBJECT_TILE_TREES_CUT",
        "Class": "SUBJECTCLASS_TILE",
        "Vegetation": "VEGETATION_TREES_CUT"
      },
      {
        "zType": "SUBJECT_TILE_SCRUB",
        "Class": "SUBJECTCLASS_TILE",
        "Vegetation": "VEGETATION_SCRUB"
      },
      {
        "zType": "SUBJECT_TILE_SCRUB_CUT",
        "Class": "SUBJECTCLASS_TILE",
        "Vegetation": "VEGETATION_SCRUB_CUT"
      },
      {
        "zType": "SUBJECT_TILE_RESOURCE_NO",
        "Class": "SUBJECTCLASS_TILE",
        "Vegetation": "VEGETATION_SCRUB_CUT"
      },
      {
        "zType": "SUBJECT_SUITOR_TEMP",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_SUITOR_TEMP"
      },
      {
        "zType": "SUBJECT_SUITOR_TEMP_BAD",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_SUITOR_TEMP_BAD"
      },
      {
        "zType": "SUBJECT_YOUNG_HOSTAGE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_YOUNG_HOSTAGE"
      },
      {
        "zType": "SUBJECT_WITCH_QUEEN",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_WITCH_QUEEN"
      },
      {
        "zType": "SUBJECT_TEACHING_THE_ENEMY",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TEACHING_THE_ENEMY"
      },
      {
        "zType": "SUBJECT_KINGS_RANSOM_MOTHER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_KINGS_RANSOM_MOTHER"
      },
      {
        "zType": "SUBJECT_KINGS_RANSOM_DAUGHTER_OLDER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_KINGS_RANSOM_DAUGHTER_OLDER"
      },
      {
        "zType": "SUBJECT_KINGS_RANSOM_DAUGHTER_YOUNGER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_KINGS_RANSOM_DAUGHTER_YOUNGER"
      },
      {
        "zType": "SUBJECT_BARBARIAN_PRINCE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_BARBARIAN_PRINCE"
      },
      {
        "zType": "SUBJECT_BARDIYA",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_BARDIYA"
      },
      {
        "zType": "SUBJECT_ZAMRA",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_ZAMRA"
      },
      {
        "zType": "SUBJECT_MYSTERIOUS_INFANT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_MYSTERIOUS_INFANT"
      },
      {
        "zType": "SUBJECT_ATOSSA",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_ATOSSA"
      },
      {
        "zType": "SUBJECT_FOREST_FIRE_ORPHAN",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_FOREST_FIRE_ORPHAN"
      },
      {
        "zType": "SUBJECT_VERY_CHARMING",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_VERY_CHARMING"
      },
      {
        "zType": "SUBJECT_MATCH_BAD",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_MATCH_BAD"
      },
      {
        "zType": "SUBJECT_MATCH_NEUTRAL",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_MATCH_NEUTRAL"
      },
      {
        "zType": "SUBJECT_MATCH_GOOD",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_MATCH_GOOD"
      },
      {
        "zType": "SUBJECT_CATO",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_CATO"
      },
      {
        "zType": "SUBJECT_HIARBAS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_HIARBAS"
      },
      {
        "zType": "SUBJECT_AUGUSTINE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_AUGUSTINE"
      },
      {
        "zType": "SUBJECT_TUTOR_ROME_LIVIUS_ANDRONICUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_ROME_LIVIUS_ANDRONICUS"
      },
      {
        "zType": "SUBJECT_TUTOR_ROME_PLINY_THE_ELDER",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_ROME_PLINY_THE_ELDER"
      },
      {
        "zType": "SUBJECT_TUTOR_ROME_CORNELIA",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_ROME_CORNELIA"
      },
      {
        "zType": "SUBJECT_TUTOR_GREECE_AGNODICE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_GREECE_AGNODICE"
      },
      {
        "zType": "SUBJECT_TUTOR_GREECE_ARISTOTLE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_GREECE_ARISTOTLE"
      },
      {
        "zType": "SUBJECT_TUTOR_GREECE_PYTHAGORAS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_GREECE_PYTHAGORAS"
      },
      {
        "zType": "SUBJECT_TUTOR_ASSYRIA_BARDAISAN",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_ASSYRIA_BARDAISAN"
      },
      {
        "zType": "SUBJECT_TUTOR_SCYTHIAN_ANACHARSIS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_SCYTHIAN_ANACHARSIS"
      },
      {
        "zType": "SUBJECT_TUTOR_ASSYRIA_OSTANES",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_ASSYRIA_OSTANES"
      },
      {
        "zType": "SUBJECT_TUTOR_CARTHAGE_HANNO",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_CARTHAGE_HANNO"
      },
      {
        "zType": "SUBJECT_TUTOR_CARTHAGE_CLITOMACHUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_CARTHAGE_CLITOMACHUS"
      },
      {
        "zType": "SUBJECT_TUTOR_CARTHAGE_MAGO",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_CARTHAGE_MAGO"
      },
      {
        "zType": "SUBJECT_TUTOR_BABYLONIA_ESAGIL_KIN_APLI",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_BABYLONIA_ESAGIL_KIN_APLI"
      },
      {
        "zType": "SUBJECT_TUTOR_BABYLONIA_SERUA_ETERAT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_BABYLONIA_SERUA_ETERAT"
      },
      {
        "zType": "SUBJECT_TUTOR_BABYLONIA_SIN_LEQI_UNNINNI",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_BABYLONIA_SIN_LEQI_UNNINNI"
      },
      {
        "zType": "SUBJECT_TUTOR_EGYPT_PTAHHOTEP",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_EGYPT_PTAHHOTEP"
      },
      {
        "zType": "SUBJECT_TUTOR_EGYPT_SENENMUT",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_EGYPT_SENENMUT"
      },
      {
        "zType": "SUBJECT_TUTOR_EGYPT_CLEOPATRA_SELENE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_EGYPT_CLEOPATRA_SELENE"
      },
      {
        "zType": "SUBJECT_TUTOR_PERSIA_HARPAGUS",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_PERSIA_HARPAGUS"
      },
      {
        "zType": "SUBJECT_TUTOR_PERSIA_AVICENNA",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_PERSIA_AVICENNA"
      },
      {
        "zType": "SUBJECT_TUTOR_PERSIA_KARTIR",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_TUTOR_PERSIA_KARTIR"
      },
      {
        "zType": "SUBJECT_MOONFACE",
        "Class": "SUBJECTCLASS_CHARACTER",
        "Character": "CHARACTER_MOONFACE"
      }
    ]
  }
}
    export default data
    