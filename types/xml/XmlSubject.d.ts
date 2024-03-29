
declare namespace XmlSubject {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name?: ZType | string;
  GenderedNames?: GenderedNames;
  Class: ZType | string;
  RelationUs?: ZType | RelationUs2 | string;
  RelationLeader?: ZType | RelationUs2 | string;
  NoRelationLeader?: RelationUs2 | string;
  Religion?: ZType | RelationUs2 | string;
  Tech?: ZType | RelationUs2 | string;
  Law?: ZType | RelationUs2 | string;
  Theology?: ZType | RelationUs2 | string;
  Resource?: ZType | RelationUs2 | string;
  Goal?: Goal;
  Character?: ZType | RelationUs2 | string;
  CityName?: ZType | RelationUs2 | string;
  ActiveAmbition?: ZType | RelationUs2 | string;
  ActiveQuest?: Goal;
  MemoryPlayerPrereq?: ZType | RelationUs2 | string;
  MemoryPlayerInvalid?: ZType | RelationUs2 | string;
  MemoryTribePrereq?: ZType | RelationUs2 | string;
  MemoryTribeInvalid?: ZType | RelationUs2 | string;
  MemoryReligionPrereq?: Goal;
  MemoryReligionInvalid?: Goal;
  MemoryFamilyPrereq?: ZType | RelationUs2 | string;
  MemoryFamilyInvalid?: Goal;
  MemoryCharacterPrereq?: ZType | RelationUs2 | string;
  MemoryCharacterInvalid?: ZType | RelationUs2 | string;
  NationPrereq?: ZType | RelationUs2 | string;
  TechPrereq?: ZType | RelationUs2 | string;
  TechInvalid?: Goal;
  LawPrereq?: ZType | RelationUs2 | string;
  TribePrereq?: ZType | RelationUs2 | string;
  HasFamilyClass?: ZType | RelationUs2 | string;
  FamilyClassPrereq?: ZType | RelationUs2 | string;
  FamilyPrereq?: Goal;
  GenderPrereq?: ZType | RelationUs2 | string;
  CouncilPrereq?: ZType | RelationUs2 | string;
  CourtierPrereq?: ZType | RelationUs2 | string;
  TraitNone?: ZType | RelationUs2 | string;
  TraitPrereq?: ZType | RelationUs2 | string;
  TraitInvalid?: ZType | RelationUs2 | string;
  CognomenPrereq?: ZType | RelationUs2 | string;
  ProjectPrereq?: ZType | RelationUs2 | string;
  ImprovementCity?: ZType | RelationUs2 | string;
  ImprovementTile?: ZType | RelationUs2 | string;
  ImprovementClassCity?: ZType | RelationUs2 | string;
  ImprovementClassTile?: Goal;
  UnitType?: ZType | RelationUs2 | string;
  UnitTrait?: ZType | RelationUs2 | string;
  Terrain?: ZType | RelationUs2 | string;
  Height?: ZType | RelationUs2 | string;
  Vegetation?: ZType | RelationUs2 | string;
  Improvement?: Goal;
  iCityID?: Goal;
  iTileID?: Goal;
  iMinPlayerWars?: ZType | RelationUs2 | string;
  iMaxPlayerWars?: ZType | RelationUs2 | string;
  iMinDiplomacyTurns?: ZType | RelationUs2 | string;
  iMaxDiplomacyTurns?: ZType | RelationUs2 | string;
  iMinTotalWarScore?: ZType | RelationUs2 | string;
  iMaxTotalWarScore?: ZType | RelationUs2 | string;
  iMinCamps?: ZType | RelationUs2 | string;
  iMaxCamps?: Goal;
  iMinDiscontentLevel?: ZType | RelationUs2 | string;
  iMinDamagePercent?: ZType | RelationUs2 | string;
  iMinAge?: ZType | RelationUs2 | string;
  iMaxAge?: ZType | RelationUs2 | string;
  iMinReign?: ZType | RelationUs2 | string;
  iMaxReign?: ZType | RelationUs2 | string;
  iMinCourtiers?: Goal;
  iMaxCourtiers?: ZType | RelationUs2 | string;
  iMaxHeirs?: ZType | RelationUs2 | string;
  iMinLevel?: ZType | RelationUs2 | string;
  bIgnoreRandom?: ZType | RelationUs2 | string;
  bIsUs?: ZType | RelationUs2 | string;
  bIsNotUs?: ZType | RelationUs2 | string;
  bIsUsOrThem?: ZType | RelationUs2 | string;
  bIsSameTeam?: ZType | RelationUs2 | string;
  bNoContact?: ZType | RelationUs2 | string;
  bHuman?: ZType | RelationUs2 | string;
  bHumanOrAI?: ZType | RelationUs2 | string;
  bHasPlayer?: ZType | RelationUs2 | string;
  bNoPlayer?: ZType | RelationUs2 | string;
  bPlayToWinVs?: ZType | RelationUs2 | string;
  bHighestVP?: ZType | RelationUs2 | string;
  bHasHeirs?: ZType | RelationUs2 | string;
  bHasNoHeirs?: ZType | RelationUs2 | string;
  bNoWorldReligion?: ZType | RelationUs2 | string;
  bStateReligion?: ZType | RelationUs2 | string;
  bNoStateReligion?: ZType | RelationUs2 | string;
  bTrading?: ZType | RelationUs2 | string;
  bCapital?: ZType | RelationUs2 | string;
  bAgentNetwork?: ZType | RelationUs2 | string;
  bNewestCity?: ZType | RelationUs2 | string;
  bPaganReligion?: ZType | RelationUs2 | string;
  bWorldReligion?: ZType | RelationUs2 | string;
  bUnlockedReligion?: ZType | RelationUs2 | string;
  bTribeReligion?: ZType | RelationUs2 | string;
  bNoTribeReligion?: ZType | RelationUs2 | string;
  bFamilyReligion?: ZType | RelationUs2 | string;
  bNoFamilyReligion?: ZType | RelationUs2 | string;
  bCharacterReligion?: ZType | RelationUs2 | string;
  bNoCharacterReligion?: ZType | RelationUs2 | string;
  bDead?: ZType | RelationUs2 | string;
  bFertileAge?: ZType | RelationUs2 | string;
  bInfertile?: ZType | RelationUs2 | string;
  bNotMe?: ZType | RelationUs2 | string;
  bWasLeader?: ZType | RelationUs2 | string;
  bLeader?: ZType | RelationUs2 | string;
  bNonLeader?: ZType | RelationUs2 | string;
  bNoRelationLeader?: ZType | RelationUs2 | string;
  bLeaderOrDescendant?: ZType | RelationUs2 | string;
  bHeir?: ZType | RelationUs2 | string;
  bNonHeir?: ZType | RelationUs2 | string;
  bSuccession?: ZType | RelationUs2 | string;
  bNonSuccession?: ZType | RelationUs2 | string;
  bGenderHeirValid?: ZType | RelationUs2 | string;
  bCouncil?: ZType | RelationUs2 | string;
  bGovernor?: ZType | RelationUs2 | string;
  bAgent?: ZType | RelationUs2 | string;
  bGeneral?: ZType | RelationUs2 | string;
  bNonGeneral?: ZType | RelationUs2 | string;
  bHasJob?: ZType | RelationUs2 | string;
  bNoJob?: ZType | RelationUs2 | string;
  bRoyal?: ZType | RelationUs2 | string;
  bNonRoyal?: ZType | RelationUs2 | string;
  bRoyalSpouse?: ZType | RelationUs2 | string;
  bCourtier?: ZType | RelationUs2 | string;
  bNonCourtier?: ZType | RelationUs2 | string;
  bTutor?: ZType | RelationUs2 | string;
  bTutorStudent?: ZType | RelationUs2 | string;
  bOfStateReligion?: ZType | RelationUs2 | string;
  bReligionHead?: ZType | RelationUs2 | string;
  bNonReligionHead?: Goal;
  bWasReligionHead?: ZType | RelationUs2 | string;
  bFamilyHead?: ZType | RelationUs2 | string;
  bNonFamilyHead?: Goal;
  bWasFamilyHead?: ZType | RelationUs2 | string;
  bTribe?: ZType | RelationUs2 | string;
  bTribeLeader?: ZType | RelationUs2 | string;
  bHasSpouse?: ZType | RelationUs2 | string;
  bHasNoSpouse?: ZType | RelationUs2 | string;
  bHasFamily?: ZType | RelationUs2 | string;
  bHasNoFamily?: ZType | RelationUs2 | string;
  bCanMarry?: ZType | RelationUs2 | string;
  bCanHaveChildren?: ZType | RelationUs2 | string;
  bNoBabies?: ZType | RelationUs2 | string;
  bNoChildren?: ZType | RelationUs2 | string;
  bArchetype?: ZType | RelationUs2 | string;
  bNoArchetype?: ZType | RelationUs2 | string;
  bFamilySeat?: ZType | RelationUs2 | string;
  bFamilySeatNo?: ZType | RelationUs2 | string;
  bNeedsGeneral?: ZType | RelationUs2 | string;
  bCityTerritory?: ZType | RelationUs2 | string;
  bNoCityTerritory?: ZType | RelationUs2 | string;
  bFreshWater?: ZType | RelationUs2 | string;
  bNoFreshWater?: ZType | RelationUs2 | string;
  bCoast?: ZType | RelationUs2 | string;
  bRiver?: ZType | RelationUs2 | string;
  bNoResource?: ZType | RelationUs2 | string;
  bNoImprovement?: ZType | RelationUs2 | string;
  bTribeImprovement?: ZType | RelationUs2 | string;
  bTribeTerritory?: ZType | RelationUs2 | string;
  bUndiscoveredLandmark?: ZType | RelationUs2 | string;
  aiMinRating?: AiMinRating;
  aiMaxRating?: AiMinRating;
  aeTraitAny?: AeTraitAny;
  aeTraitNone?: AeTraitNone;
  aeYieldNegative?: AeYieldNegative;
  comment?: string;
}
export interface AeYieldNegative {
  comment?: string;
  zValue?: string;
}
export interface AeTraitNone {
  comment?: string;
  zValue?: string[] | string;
}
export interface AeTraitAny {
  comment?: string;
  zValue?: string[];
}
export interface AiMinRating {
  comment?: string;
  Pair?: Pair2;
}
export interface Pair2 {
  zIndex: string;
  iValue: string;
}
export interface Goal {
  comment?: string;
}
export interface RelationUs2 {
  comment: string;
}
export interface GenderedNames {
  Pair?: Pair;
}
export interface Pair {
  First: string;
  Second: string;
}
export interface ZType {
}

}
