
declare namespace XmlBonus {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName?: ZType | ZName2 | string;
  zIcon?: ZType | ZName2 | string;
  CharacterName?: CharacterName;
  CityName?: CharacterName;
  UnitName?: CharacterName;
  Victory?: CharacterName;
  Achievement?: ZType | ZName2 | string;
  MemoryPlayer?: ZType | ZName2 | string;
  MemoryPlayerOther?: ZType | ZName2 | string;
  ForgetPlayer?: CharacterName;
  MemoryAllPlayers?: ZType | ZName2 | string;
  MemoryTribe?: ZType | ZName2 | string;
  ForgetTribe?: CharacterName;
  MemoryAllTribes?: ZType | ZName2 | string;
  MemoryReligion?: ZType | ZName2 | string;
  ForgetReligion?: CharacterName;
  MemoryFamily?: ZType | ZName2 | string;
  ForgetFamily?: CharacterName;
  MemoryAllFamilies?: ZType | ZName2 | string;
  MemoryCharacter?: CharacterName;
  ForgetCharacter?: CharacterName;
  AddLeaderRelationship?: ZType | ZName2 | string;
  RemoveLeaderRelationship?: ZType | ZName2 | string;
  DiplomacyPlayerFrom?: ZType | ZName2 | string;
  DiplomacyPlayerTo?: ZType | ZName2 | string;
  DiplomacyTribe?: ZType | ZName2 | string;
  MakeCourtier?: ZType | ZName2 | string;
  StartLaw?: CharacterName;
  EndLaw?: CharacterName;
  FreeLaw?: CharacterName;
  FoundReligion?: CharacterName;
  FreeTheology?: CharacterName;
  Quest?: CharacterName;
  QuestForce?: CharacterName;
  Ambition?: CharacterName;
  FinishGoal?: CharacterName;
  FailGoal?: CharacterName;
  DesiredAmbition?: CharacterName;
  Mission?: CharacterName;
  Council?: ZType | ZName2 | string;
  SetArchetype?: ZType | ZName2 | string;
  SetVegetation?: CharacterName;
  SetResource?: CharacterName;
  AddResource?: ZType | ZName2 | string;
  SetImprovement?: CharacterName;
  AddImprovement?: ZType | ZName2 | string;
  iSpreadUnits?: CharacterName;
  iRevealRange?: ZType | ZName2 | string;
  iCitizens?: ZType | ZName2 | string;
  iBorderGrowth?: ZType | ZName2 | string;
  iCultureLevels?: ZType | ZName2 | string;
  iDiscontentLevels?: ZType | ZName2 | string;
  iRebelUnits?: ZType | ZName2 | string;
  iDestroyImprovements?: CharacterName;
  iHPCity?: ZType | ZName2 | string;
  iHPUnit?: ZType | ZName2 | string;
  iXPUnit?: ZType | ZName2 | string;
  iXPCharacter?: ZType | ZName2 | string;
  iLegitimacy?: ZType | ZName2 | string;
  iTradeTurns?: CharacterName;
  iTributeTurns?: CharacterName;
  iAllianceSubject?: CharacterName;
  iMarrySubject?: ZType | ZName2 | string;
  iPolyMarrySubject?: CharacterName;
  iDivorcedBySubject?: ZType | ZName2 | string;
  iBirthWithSubject?: CharacterName;
  iAdoptedBySubject?: ZType | ZName2 | string;
  iGovernorOfSubject?: CharacterName;
  iGeneralOfSubject?: CharacterName;
  iJoinSubject?: CharacterName;
  iSeizeThroneSubject?: CharacterName;
  iSpreadToSubject?: CharacterName;
  iRemoveFromSubject?: CharacterName;
  iConvertReligionSubject?: CharacterName;
  iHeadReligionSubject?: CharacterName;
  iHeadFamilySubject?: CharacterName;
  iAcquireTechSubject?: CharacterName;
  iTradeResourceSubject?: CharacterName;
  iAgentCitySubject?: CharacterName;
  iTradeCitySubject?: CharacterName;
  iConvertUnitSubject?: CharacterName;
  iMissionSubject?: CharacterName;
  iMissionReverse?: CharacterName;
  iAmbitionFamilySubject?: CharacterName;
  bMissionFree?: CharacterName;
  bMercenaryUnit?: CharacterName;
  bRevealTerritory?: ZType | ZName2 | string;
  bHolyCityAgents?: ZType | ZName2 | string;
  bCancelTrade?: ZType | ZName2 | string;
  bTeamAlliance?: ZType | ZName2 | string;
  bTeamAllianceEnd?: ZType | ZName2 | string;
  bTribeAlliance?: ZType | ZName2 | string;
  bTribeAllianceEnd?: ZType | ZName2 | string;
  bTribeInvade?: ZType | ZName2 | string;
  bAdoptReligion?: ZType | ZName2 | string;
  bStateReligion?: ZType | ZName2 | string;
  bStateReligionEnd?: ZType | ZName2 | string;
  bFoundReligion?: CharacterName;
  bFoundReligionCity?: ZType | ZName2 | string;
  bStartLaw?: ZType | ZName2 | string;
  bFreeLaw?: ZType | ZName2 | string;
  bFreeTheology?: ZType | ZName2 | string;
  bRandomTech?: ZType | ZName2 | string;
  bConvertStateReligion?: ZType | ZName2 | string;
  bNoCourtier?: ZType | ZName2 | string;
  bLeaveCouncil?: ZType | ZName2 | string;
  bReleaseGeneral?: CharacterName;
  bReleaseGovernor?: CharacterName;
  bReleaseAgent?: ZType | ZName2 | string;
  bChangeSuccession?: CharacterName;
  bAbdicate?: ZType | ZName2 | string;
  bChosenHeir?: ZType | ZName2 | string;
  bKillCharacter?: ZType | ZName2 | string;
  bHaveBastard?: ZType | ZName2 | string;
  bKillUnit?: ZType | ZName2 | string;
  bRemoveVegetation?: CharacterName;
  bTribeRaid?: ZType | ZName2 | string;
  bRazeCity?: CharacterName;
  bRazeCityNoCitySite?: CharacterName;
  bDefeat?: CharacterName;
  aiCityYields?: AiCityYields;
  aiGlobalYields?: AiCityYields;
  aiGlobalYieldsBase?: AiGlobalYieldsBase;
  aiGlobalYieldsPer?: AiGlobalYieldsBase;
  aiOtherYieldsBase?: AiGlobalYieldsBase;
  aiOtherYieldsPer?: AiGlobalYieldsBase;
  aiYieldsSendBase?: AiGlobalYieldsBase;
  aiYieldsSendPerUs?: AiGlobalYieldsBase;
  aiYieldsSendPerThem?: CharacterName;
  aiYieldsTradeBase?: CharacterName;
  aiYieldsTradePerUs?: CharacterName;
  aiYieldsTradePerThem?: CharacterName;
  aiYieldsTributeBase?: AiGlobalYieldsBase;
  aiYieldsTributePerUs?: AiGlobalYieldsBase;
  aiYieldsTributePerThem?: AiGlobalYieldsBase;
  aiUnits?: AiGlobalYieldsBase;
  aiTribeUnits?: CharacterName;
  aiBonusUnits?: AiGlobalYieldsBase;
  aiLawOpinion?: CharacterName;
  aiRatings?: AiGlobalYieldsBase;
  aeAddProjects?: AeAddProjects;
  aeRemoveProjects?: CharacterName;
  aeAddSpecialistClasses?: CharacterName;
  aePromotions?: CharacterName;
  aeRandomTrait?: CharacterName;
  aeAddTraits?: AeAddTraits;
  aeRemoveTraits?: AeAddProjects;
  aeRandomLeaderRelationship?: CharacterName;
  aeTechs?: AeAddProjects;
  aeCultureProject?: CharacterName;
  aaiCultureYield?: AaiCultureYield;
  aeBonuses?: AeAddProjects;
  aeFamilyBonuses?: CharacterName;
  aeAllCityBonuses?: AeAddProjects;
  DiplomacySubjects?: CharacterName;
  AddRelationshipSubjects?: CharacterName;
  AddRelationshipReverse?: CharacterName;
  RemoveRelationshipSubjects?: CharacterName;
  RemoveRelationshipReverse?: CharacterName;
  AddCourtierForce?: AddCourtierForce;
  AddCourtier?: AddCourtierForce;
  AddCourtierOther?: CharacterName;
}
export interface AddCourtierForce {
  comment?: string;
  Pair?: Pair3;
}
export interface Pair3 {
  zIndex: string;
  zValue: string;
}
export interface AaiCultureYield {
  comment?: string;
  Pair?: Pair2[];
}
export interface Pair2 {
  zIndex: string;
  SubPair: SubPair;
}
export interface SubPair {
  zSubIndex: string;
  iValue: string;
}
export interface AeAddTraits {
  comment?: string;
  zValue?: string[] | string;
}
export interface AeAddProjects {
  comment?: string;
  zValue?: string;
}
export interface AiGlobalYieldsBase {
  comment?: string;
  Pair?: Pair;
}
export interface AiCityYields {
  comment?: string;
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface CharacterName {
  comment?: string;
}
export interface ZName2 {
  comment: string;
}
export interface ZType {
}

}
