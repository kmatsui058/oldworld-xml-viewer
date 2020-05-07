
declare namespace XmlSubjectRelation {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Relative?: ZType | string;
  RelationshipPrereq?: ZType | string;
  RelationshipInvalid?: ZType | string;
  MinDiplomacyPlayer?: ZType | string;
  MaxDiplomacyPlayer?: ZType | string;
  MinDiplomacyBarbarian?: ZType | string;
  MaxDiplomacyBarbarian?: ZType | string;
  MinProximityPlayer?: ZType | string;
  MaxProximityPlayer?: ZType | string;
  MinProximityBarbarian?: ZType | string;
  MaxProximityBarbarian?: ZType | string;
  MinStrengthPlayer?: ZType | string;
  MaxStrengthPlayer?: ZType | string;
  MinStrengthBarbarian?: ZType | string;
  MaxStrengthBarbarian?: ZType;
  MinWarStatePlayer?: ZType | string;
  MaxWarStatePlayer?: ZType | string;
  MinWarStateBarbarian?: ZType | string;
  MaxWarStateBarbarian?: ZType | string;
  MinOpinionPlayer?: ZType | string;
  MaxOpinionPlayer?: ZType | string;
  MinOpinionBarbarian?: ZType;
  MaxOpinionBarbarian?: ZType | string;
  MinOpinionReligion?: ZType;
  MaxOpinionReligion?: ZType;
  MinOpinionFamily?: ZType | string;
  MaxOpinionFamily?: ZType | string;
  MinOpinionCharacter?: ZType;
  MaxOpinionCharacter?: ZType | string;
  bBehindSuccession?: ZType | string;
  bAttractedTo?: ZType | string;
  bGenderSame?: ZType | string;
  bGenderDiff?: ZType | string;
  bPlayerSame?: ZType | string;
  bPlayerDiff?: ZType | string;
  bPlayerAlliance?: ZType | string;
  bBarbarianSame?: ZType | string;
  bBarbarianDiff?: ZType | string;
  bBarbarianAlliance?: ZType | string;
  bFamilySame?: ZType | string;
  bFamilyDiff?: ZType | string;
  bReligionSame?: ZType | string;
  bReligionDiff?: ZType | string;
  bReligionState?: ZType | string;
  bReligionStateNo?: ZType | string;
  bReligionPlayer?: ZType | string;
  bReligionPlayerNo?: ZType | string;
  bReligionCity?: ZType | string;
  bReligionCityNo?: ZType | string;
  bReligionHolyCity?: ZType | string;
  bLawActive?: ZType | string;
  bLawPositive?: ZType | string;
  bLawNegative?: ZType | string;
  bTheologyActive?: ZType | string;
  bTheologyPositive?: ZType | string;
  bTheologyNegative?: ZType | string;
  bPlayerLuxury?: ZType | string;
  bTileResource?: ZType | string;
  bCitySame?: ZType | string;
  bUnitSame?: ZType | string;
}
export interface ZType {
}

}
