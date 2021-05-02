
declare namespace XmlBonusEvent {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName?: ZType | string;
  zIcon?: ZType;
  CharacterName?: ZType;
  CityName?: ZType;
  UnitName?: ZType;
  Victory?: ZType;
  Achievement?: ZType;
  MemoryPlayer?: ZType | string;
  MemoryPlayerOther?: ZType;
  ForgetPlayer?: ZType | string;
  MemoryAllPlayers?: ZType | string;
  MemoryTribe?: ZType | string;
  ForgetTribe?: ZType;
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
  Quest?: ZType | string;
  QuestForce?: ZType;
  Ambition?: ZType | string;
  FinishGoal?: ZType;
  FailGoal?: ZType;
  DesiredAmbition?: ZType | string;
  Mission?: ZType | string;
  Council?: ZType | string;
  SetArchetype?: ZType | string;
  SetVegetation?: ZType | string;
  SetResource?: ZType | string;
  AddResource?: ZType | string;
  SetImprovement?: ZType | string;
  AddImprovement?: ZType | string;
  iSpreadUnits?: ZType | string;
  iRevealRange?: ZType;
  iCitizens?: ZType | string;
  iBorderGrowth?: ZType | string;
  iCultureLevels?: ZType | string;
  iDiscontentLevels?: ZType | string;
  iRebelUnits?: ZType | string;
  iDestroyImprovements?: ZType | string;
  iHPCity?: ZType | string;
  iHPUnit?: ZType | string;
  iXPUnit?: ZType | string;
  iXPCharacter?: ZType | string;
  iLegitimacy?: ZType | string;
  iTradeTurns?: ZType;
  iTributeTurns?: ZType;
  iAllianceSubject?: ZType;
  iMarrySubject?: ZType | string;
  iPolyMarrySubject?: ZType | string;
  iDivorcedBySubject?: ZType | string;
  iBirthWithSubject?: ZType | string;
  iAdoptedBySubject?: ZType | string;
  iGovernorOfSubject?: ZType | string;
  iGeneralOfSubject?: ZType | string;
  iJoinSubject?: ZType | string;
  iSeizeThroneSubject?: ZType | string;
  iSpreadToSubject?: ZType | string;
  iRemoveFromSubject?: ZType | string;
  iConvertReligionSubject?: ZType | string;
  iHeadReligionSubject?: ZType | string;
  iHeadFamilySubject?: ZType;
  iAcquireTechSubject?: ZType | string;
  iTradeResourceSubject?: ZType | string;
  iAgentCitySubject?: ZType;
  iTradeCitySubject?: ZType | string;
  iConvertUnitSubject?: ZType;
  iMissionSubject?: ZType | string;
  iMissionReverse?: ZType | string;
  iAmbitionFamilySubject?: ZType | string;
  bMissionFree?: ZType | string;
  bMercenaryUnit?: ZType | string;
  bRevealTerritory?: ZType | string;
  bHolyCityAgents?: ZType | string;
  bCancelTrade?: ZType;
  bTeamAlliance?: ZType | string;
  bTeamAllianceEnd?: ZType;
  bTribeAlliance?: ZType;
  bTribeAllianceEnd?: ZType;
  bTribeInvade?: ZType | string;
  bAdoptReligion?: ZType;
  bStateReligion?: ZType | string;
  bStateReligionEnd?: ZType | string;
  bFoundReligion?: ZType | string;
  bFoundReligionCity?: ZType;
  bStartLaw?: ZType;
  bFreeLaw?: ZType;
  bFreeTheology?: ZType | string;
  bRandomTech?: ZType | string;
  bConvertStateReligion?: ZType;
  bNoCourtier?: ZType | string;
  bLeaveCouncil?: ZType;
  bReleaseGeneral?: ZType | string;
  bReleaseGovernor?: ZType | string;
  bReleaseAgent?: ZType;
  bChangeSuccession?: ZType | string;
  bAbdicate?: ZType | string;
  bChosenHeir?: ZType | string;
  bKillCharacter?: ZType | string;
  bHaveBastard?: ZType | string;
  bKillUnit?: ZType | string;
  bRemoveVegetation?: ZType;
  bTribeRaid?: ZType;
  bRazeCity?: ZType;
  bRazeCityNoCitySite?: ZType;
  bDefeat?: ZType;
  aiCityYields?: AiCityYields;
  aiGlobalYields?: ZType;
  aiGlobalYieldsBase?: AiGlobalYieldsBase;
  aiGlobalYieldsPer?: ZType;
  aiOtherYieldsBase?: ZType;
  aiOtherYieldsPer?: ZType;
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
  aiTribeUnits?: AiTribeUnits;
  aiBonusUnits?: AiGlobalYieldsBase;
  aiLawOpinion?: AiCityYields;
  aiRatings?: AiGlobalYieldsBase;
  aeAddProjects?: AeAddProjects;
  aeRemoveProjects?: AeAddProjects;
  aeAddSpecialistClasses?: AeAddSpecialistClasses;
  aePromotions?: AeAddSpecialistClasses;
  aeRandomTrait?: AeRandomTrait;
  aeAddTraits?: AeAddSpecialistClasses;
  aeRemoveTraits?: AeAddSpecialistClasses;
  aeRandomLeaderRelationship?: AeRandomTrait;
  aeTechs?: AeAddProjects;
  aeCultureProject?: AeCultureProject;
  aaiCultureYield?: ZType;
  aeBonuses?: AeAddSpecialistClasses;
  aeFamilyBonuses?: ZType;
  aeAllCityBonuses?: AeAddProjects;
  DiplomacySubjects?: DiplomacySubjects;
  AddRelationshipSubjects?: DiplomacySubjects;
  AddRelationshipReverse?: DiplomacySubjects;
  RemoveRelationshipSubjects?: ZType;
  RemoveRelationshipReverse?: ZType;
  AddCourtierForce?: AddCourtierForce;
  AddCourtier?: AddCourtierForce;
  AddCourtierOther?: AddCourtierForce;
  beginGroup?: string;
}
export interface AddCourtierForce {
  Pair?: Pair2;
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
export interface AeRandomTrait {
  zValue?: string[];
}
export interface AeAddSpecialistClasses {
  zValue?: string[] | string;
}
export interface AeAddProjects {
  zValue?: string;
}
export interface AiTribeUnits {
  Pair?: Pair[];
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
