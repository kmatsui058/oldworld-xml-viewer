
declare namespace XmlBonusEvent {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name?: ZType | string;
  zIcon?: ZType | string;
  CharacterName?: ZType | string;
  CityName?: ZType;
  UnitName?: ZType | string;
  Victory?: ZType;
  Achievement?: ZType | string;
  MemoryPlayer?: ZType | string;
  MemoryPlayerOther?: ZType;
  ForgetPlayer?: ZType | string;
  MemoryAllPlayers?: ZType | string;
  MemoryTribe?: ZType | string;
  ForgetTribe?: ZType | string;
  MemoryAllTribes?: ZType;
  MemoryReligion?: ZType | string;
  ForgetReligion?: ZType;
  MemoryFamily?: ZType | string;
  ForgetFamily?: ZType;
  MemoryAllFamilies?: ZType | string;
  MemoryCharacter?: ZType | string;
  ForgetCharacter?: ZType | string;
  AddLeaderRelationship?: ZType | string;
  RemoveLeaderRelationship?: ZType | string;
  DiplomacyPlayerFrom?: ZType | string;
  DiplomacyPlayerTo?: ZType;
  DiplomacyTribe?: ZType | string;
  MakeCourtier?: ZType | string;
  StartLaw?: ZType | string;
  EndLaw?: ZType | string;
  FreeLaw?: ZType | string;
  FoundReligion?: ZType | string;
  FreeTheology?: ZType | string;
  GoalAdd?: ZType | string;
  GoalForce?: ZType;
  Ambition?: ZType | string;
  AmbitionFamily?: ZType | string;
  AmbitionReligion?: ZType | string;
  FinishGoal?: ZType | string;
  FailGoal?: ZType | string;
  Mission?: ZType | string;
  Council?: ZType | string;
  SetArchetype?: ZType | string;
  SetName?: ZType;
  SetTitle?: ZType | string;
  SetVegetation?: ZType | string;
  SetResource?: ZType | string;
  AddResource?: ZType | string;
  SetImprovement?: ZType | string;
  AddImprovement?: ZType | string;
  AddUrbanImprovement?: ZType;
  SetSpecialist?: ZType | string;
  BirthCharacter?: ZType;
  iSpreadUnits?: ZType | string;
  iRevealRange?: ZType | string;
  iCitizens?: ZType | string;
  iBorderGrowth?: ZType | string;
  iCultureLevels?: ZType | string;
  iDiscontentLevels?: ZType | string;
  iRebelUnits?: ZType | string;
  iDestroyImprovements?: ZType | string;
  iHPCity?: ZType | string;
  iHPCityPercent?: ZType | string;
  iHPUnit?: ZType | string;
  iXPUnit?: ZType | string;
  iXPCharacter?: ZType | string;
  iLegitimacy?: ZType | string;
  iTradeTurns?: ZType;
  iTributeTurns?: ZType;
  iContactSubject?: ZType | string;
  iAllianceSubject?: ZType;
  iMarrySubject?: ZType | string;
  iPolyMarrySubject?: ZType | string;
  iDivorcedBySubject?: ZType | string;
  iBirthWithSubject?: ZType | string;
  iAdoptedBySubject?: ZType | string;
  iConvertedBySubject?: ZType;
  iGovernorOfSubject?: ZType | string;
  iGeneralOfSubject?: ZType | string;
  iJoinSubject?: ZType | string;
  iJoinReverse?: ZType | string;
  iSeizeThroneSubject?: ZType | string;
  iSpreadToSubject?: ZType | string;
  iRemoveFromSubject?: ZType | string;
  iConvertReligionSubject?: ZType | string;
  iHeadReligionSubject?: ZType | string;
  iHeadFamilySubject?: ZType;
  iAcquireTechSubject?: ZType | string;
  iTradeResourceSubject?: ZType | string;
  iAgentCitySubject?: ZType | string;
  iTradeCitySubject?: ZType | string;
  iConvertUnitSubject?: ZType | string;
  iMissionSubject?: ZType | string;
  iMissionReverse?: ZType | string;
  iAmbitionFamilySubject?: ZType | string;
  iAmbitionReligionSubject?: ZType;
  bMissionFree?: ZType | string;
  bMercenaryUnit?: ZType | string;
  bRevealTerritory?: ZType | string;
  bHolyCityAgents?: ZType | string;
  bCancelTrade?: ZType;
  bTeamAlliance?: ZType | string;
  bTeamAllianceEnd?: ZType | string;
  bTribeAlliance?: ZType;
  bTribeAllianceEnd?: ZType;
  bTribeInvade?: ZType | string;
  bAdoptReligion?: ZType;
  bStateReligion?: ZType | string;
  bStateReligionEnd?: ZType | string;
  bFoundReligion?: ZType | string;
  bFoundReligionCity?: ZType | string;
  bStartLaw?: ZType;
  bFreeLaw?: ZType;
  bFreeTheology?: ZType | string;
  bAddAmbition?: ZType;
  bRandomTech?: ZType | string;
  bDistantRaid?: ZType | string;
  bAddAgentNetwork?: ZType;
  bLoseAgentNetwork?: ZType;
  bConvertStateReligion?: ZType;
  bNoCourtier?: ZType | string;
  bLeaveCouncil?: ZType | string;
  bReleaseGeneral?: ZType | string;
  bReleaseGovernor?: ZType | string;
  bReleaseAgent?: ZType | string;
  bChangeSuccession?: ZType | string;
  bAbdicate?: ZType | string;
  bChosenHeir?: ZType | string;
  bKillCharacter?: ZType | string;
  bKillCharacterSafe?: ZType;
  bHaveBastard?: ZType | string;
  bKillUnit?: ZType | string;
  bRemoveVegetation?: ZType;
  bClearImprovement?: ZType;
  bPillageImprovement?: ZType;
  bTribeRaid?: ZType;
  bRazeCity?: ZType | string;
  bRazeCityNoCitySite?: ZType;
  bDefeat?: ZType;
  aiCityYields?: AiCityYields;
  aiGlobalYields?: ZType;
  aiGlobalYieldsBase?: AiGlobalYieldsBase;
  aiGlobalYieldsPer?: ZType;
  aiOtherYieldsBase?: ZType;
  aiOtherYieldsPer?: ZType;
  aiYieldsSend?: AiGlobalYieldsBase;
  aiYieldsSendBase?: AiCityYields;
  aiYieldsSendPerUs?: AiCityYields;
  aiYieldsSendPerThem?: ZType;
  aiYieldsTradeBase?: AiGlobalYieldsBase;
  aiYieldsTradePerUs?: ZType;
  aiYieldsTradePerThem?: ZType;
  aiYieldsTributeBase?: AiGlobalYieldsBase;
  aiYieldsTributePerUs?: AiCityYields;
  aiYieldsTributePerThem?: AiCityYields;
  aiUnits?: AiGlobalYieldsBase;
  aiTribeUnits?: AiCityYields;
  aiBonusUnits?: AiGlobalYieldsBase;
  aiRebelUnits?: ZType;
  aeNewUnitNames?: AeNewUnitNames;
  aiLawOpinion?: AiCityYields;
  aiRatings?: AiGlobalYieldsBase;
  aiStats?: ZType;
  aeAddProjects?: AeAddProjects;
  aeRemoveProjects?: AeNewUnitNames;
  aeAddSpecialistClasses?: AeAddSpecialistClasses;
  aePromotions?: AeAddSpecialistClasses;
  aeRandomTrait?: AeRandomTrait;
  aeAddTraits?: AeAddTraits;
  aeRemoveTraits?: AeRemoveTrait | AeRemoveTraits2 | ZType | string;
  aeRandomLeaderRelationship?: AeRandomTrait;
  aeTechs?: AeNewUnitNames;
  aeCultureProject?: AeCultureProject;
  aaiCultureYield?: ZType;
  aeBonuses?: AeAddTraits;
  aeFamilyBonuses?: ZType;
  aeAllCityBonuses?: AeNewUnitNames;
  DiplomacySubjects?: DiplomacySubjects;
  AddRelationshipSubjects?: DiplomacySubjects;
  AddRelationshipReverse?: DiplomacySubjects;
  RemoveRelationshipSubjects?: ZType;
  RemoveRelationshipReverse?: ZType;
  AddCourtier?: AddCourtier;
  AddCourtierOther?: AddCourtier;
  AddTraitReligion?: ZType;
  RemoveTraitReligion?: ZType;
  beginGroup?: string;
}
export interface AddCourtier {
  Pair?: Pair4;
}
export interface Pair4 {
  zIndex: string;
  zValue: ZType | string;
}
export interface DiplomacySubjects {
  Pair?: Pair3;
}
export interface Pair3 {
  First: string;
  Second: string;
}
export interface AeCultureProject {
  Pair?: Pair2[];
}
export interface Pair2 {
  zIndex: string;
  zValue: string;
}
export interface AeRemoveTraits2 {
  zValue: string[];
}
export interface AeRemoveTrait {
  zValue: string;
}
export interface AeAddTraits {
  zValue?: string[] | (ZType | string)[] | string;
}
export interface AeRandomTrait {
  zValue?: string[];
}
export interface AeAddSpecialistClasses {
  zValue?: string[] | string;
}
export interface AeAddProjects {
  zValue?: (ZType | string)[] | string;
}
export interface AeNewUnitNames {
  zValue?: string;
}
export interface AiGlobalYieldsBase {
  Pair?: Pair[] | Pair;
}
export interface AiCityYields {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
