
declare namespace XmlSubject {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName?: ZType | string;
  Class: ZType | string;
  RelationUs?: ZType | RelationUs2 | string;
  RelationLeader?: ZType | RelationUs2 | string;
  Religion?: ZType | RelationUs2 | string;
  Law?: ZType | RelationUs2 | string;
  Theology?: ZType | RelationUs2 | string;
  Resource?: ZType | RelationUs2 | string;
  Character?: ZType | RelationUs2 | string;
  MemoryPlayerPrereq?: ZType | RelationUs2 | string;
  MemoryPlayerInvalid?: MemoryPlayerInvalid;
  MemoryBarbarianPrereq?: MemoryPlayerInvalid;
  MemoryBarbarianInvalid?: MemoryPlayerInvalid;
  MemoryReligionPrereq?: MemoryPlayerInvalid;
  MemoryReligionInvalid?: MemoryPlayerInvalid;
  MemoryFamilyPrereq?: ZType | RelationUs2 | string;
  MemoryFamilyInvalid?: MemoryPlayerInvalid;
  MemoryCharacterPrereq?: MemoryPlayerInvalid;
  MemoryCharacterInvalid?: MemoryPlayerInvalid;
  NationPrereq?: ZType | RelationUs2 | string;
  TechPrereq?: ZType | RelationUs2 | string;
  TechInvalid?: MemoryPlayerInvalid;
  BarbarianPrereq?: ZType | RelationUs2 | string;
  FamilyClassPrereq?: ZType | RelationUs2 | string;
  GenderPrereq?: ZType | RelationUs2 | string;
  CouncilPrereq?: ZType | RelationUs2 | string;
  CourtierPrereq?: ZType | RelationUs2 | string;
  TraitPrereq?: ZType | RelationUs2 | string;
  TraitInvalid?: ZType | RelationUs2 | string;
  CognomenPrereq?: MemoryPlayerInvalid;
  ProjectPrereq?: ZType | RelationUs2 | string;
  ImprovementCity?: ZType | RelationUs2 | string;
  ImprovementTile?: ZType | RelationUs2 | string;
  ImprovementClassCity?: ZType | RelationUs2 | string;
  ImprovementClassTile?: MemoryPlayerInvalid;
  UnitType?: ZType | RelationUs2 | string;
  UnitTrait?: ZType | RelationUs2 | string;
  Terrain?: ZType | RelationUs2 | string;
  Height?: ZType | RelationUs2 | string;
  Vegetation?: ZType | RelationUs2 | string;
  iMinDiplomacyTurns?: ZType | RelationUs2 | string;
  iMaxDiplomacyTurns?: MemoryPlayerInvalid;
  iMinCamps?: ZType | RelationUs2 | string;
  iMaxCamps?: MemoryPlayerInvalid;
  iMinHappyEvents?: MemoryPlayerInvalid;
  iMaxHappyEvents?: MemoryPlayerInvalid;
  iMinDiscontentLevel?: ZType | RelationUs2 | string;
  iMinDamagePercent?: ZType | RelationUs2 | string;
  iMinAge?: ZType | RelationUs2 | string;
  iMaxAge?: ZType | RelationUs2 | string;
  iMinCourtiers?: MemoryPlayerInvalid;
  iMaxCourtiers?: ZType | RelationUs2 | string;
  iMaxHeirs?: ZType | RelationUs2 | string;
  bHasHeirs?: ZType | RelationUs2 | string;
  bHasNoHeirs?: ZType | RelationUs2 | string;
  bIsUs?: ZType | RelationUs2 | string;
  bIsNotUs?: ZType | RelationUs2 | string;
  bHasPlayer?: ZType | RelationUs2 | string;
  bNoPlayer?: ZType | RelationUs2 | string;
  bStateReligion?: ZType | RelationUs2 | string;
  bNoStateReligion?: ZType | RelationUs2 | string;
  bTrading?: ZType | RelationUs2 | string;
  bCapital?: ZType | RelationUs2 | string;
  bNewestCity?: ZType | RelationUs2 | string;
  bFamilyReligion?: ZType | RelationUs2 | string;
  bNoFamilyReligion?: ZType | RelationUs2 | string;
  bDead?: ZType | RelationUs2 | string;
  bFertile?: ZType | RelationUs2 | string;
  bNotMe?: ZType | RelationUs2 | string;
  bWasLeader?: ZType | RelationUs2 | string;
  bLeader?: ZType | RelationUs2 | string;
  bNonLeader?: ZType | RelationUs2 | string;
  bLeaderOrDescendant?: ZType | RelationUs2 | string;
  bHeir?: ZType | RelationUs2 | string;
  bNonHeir?: ZType | RelationUs2 | string;
  bSuccession?: ZType | RelationUs2 | string;
  bNonSuccession?: MemoryPlayerInvalid;
  bGovernor?: ZType | RelationUs2 | string;
  bGeneral?: ZType | RelationUs2 | string;
  bNonGeneral?: ZType | RelationUs2 | string;
  bNoJob?: ZType | RelationUs2 | string;
  bRoyal?: ZType | RelationUs2 | string;
  bNonRoyal?: ZType | RelationUs2 | string;
  bRoyalSpouse?: ZType | RelationUs2 | string;
  bCourtier?: ZType | RelationUs2 | string;
  bNonCourtier?: ZType | RelationUs2 | string;
  bBarbarian?: ZType | RelationUs2 | string;
  bBarbarianLeader?: ZType | RelationUs2 | string;
  bHasSpouse?: ZType | RelationUs2 | string;
  bHasNoSpouse?: ZType | RelationUs2 | string;
  bHasFamily?: ZType | RelationUs2 | string;
  bCanMarry?: ZType | RelationUs2 | string;
  bCanHaveChildren?: ZType | RelationUs2 | string;
  bArchetype?: ZType | RelationUs2 | string;
  bNoArchetype?: ZType | RelationUs2 | string;
  bFamilySeat?: ZType | RelationUs2 | string;
  bNeedsGeneral?: ZType | RelationUs2 | string;
  bClaimed?: ZType | RelationUs2 | string;
  bUnclaimed?: ZType | RelationUs2 | string;
  bFreshWater?: ZType | RelationUs2 | string;
  bNoFreshWater?: ZType | RelationUs2 | string;
  bCoast?: ZType | RelationUs2 | string;
  bRiver?: ZType | RelationUs2 | string;
  bNoResource?: ZType | RelationUs2 | string;
  bTribe?: ZType | RelationUs2 | string;
  aiMinRating?: AiMinRating;
  aiMaxRating?: AiMinRating;
  aeTraitAny?: AeTraitAny;
  aeYieldNegative?: AeYieldNegative;
  comment?: string;
}
export interface AeYieldNegative {
  comment?: string;
  zValue?: string;
}
export interface AeTraitAny {
  comment?: string;
  zValue?: string[];
}
export interface AiMinRating {
  comment?: string;
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface MemoryPlayerInvalid {
  comment?: string;
}
export interface RelationUs2 {
  comment: string;
}
export interface ZType {
}

}
