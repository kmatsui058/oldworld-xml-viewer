
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
  MemoryPlayer?: ZType | ZName2 | string;
  ForgetPlayer?: ForgetPlayer;
  MemoryBarb?: ZType | ZName2 | string;
  ForgetBarb?: ForgetPlayer;
  MemoryReligion?: ForgetPlayer;
  ForgetReligion?: ForgetPlayer;
  MemoryFamily?: ZType | ZName2 | string;
  ForgetFamily?: ForgetPlayer;
  MemoryAllFamilies?: ForgetPlayer;
  MemoryCharacter?: ForgetPlayer;
  ForgetCharacter?: ForgetPlayer;
  DiplomacyPlayer?: ZType | ZName2 | string;
  DiplomacyBarb?: ZType | ZName2 | string;
  MakeCourtier?: ForgetPlayer;
  StartLaw?: ForgetPlayer;
  FreeLaw?: ForgetPlayer;
  FoundReligion?: ForgetPlayer;
  AdoptReligion?: ForgetPlayer;
  FreeTheology?: ForgetPlayer;
  Quest?: ForgetPlayer;
  Ambition?: ForgetPlayer;
  DesiredAmbition?: ForgetPlayer;
  Mission?: ForgetPlayer;
  Council?: ZType | ZName2 | string;
  SetArchetype?: ZType | ZName2 | string;
  SetNickname?: ForgetPlayer;
  SetVegetation?: ForgetPlayer;
  SetResource?: ForgetPlayer;
  SetImprovement?: ForgetPlayer;
  iRevealRange?: ZType | ZName2 | string;
  iCitizens?: ZType | ZName2 | string;
  iBorderGrowth?: ZType | ZName2 | string;
  iCultureLevels?: ZType | ZName2 | string;
  iDiscontentLevels?: ZType | ZName2 | string;
  iRebelUnits?: ForgetPlayer;
  iDestroyImprovements?: ForgetPlayer;
  iHPCity?: ForgetPlayer;
  iHPUnit?: ForgetPlayer;
  iXPUnit?: ZType | ZName2 | string;
  iXPCharacter?: ZType | ZName2 | string;
  iLegitimacy?: ZType | ZName2 | string;
  iDiplomacyPlayer?: ForgetPlayer;
  iMarrySubject?: ZType | ZName2 | string;
  iAdoptedBySubject?: ZType | ZName2 | string;
  iGovernorOfSubject?: ForgetPlayer;
  iGeneralOfSubject?: ForgetPlayer;
  iSpreadToSubject?: ForgetPlayer;
  iTradeResourceSubject?: ForgetPlayer;
  iMissionSubject?: ForgetPlayer;
  bRevealTerritory?: ZType | ZName2 | string;
  bCancelTrade?: ZType | ZName2 | string;
  bPlayerAlliance?: ForgetPlayer;
  bPlayerAllianceEnd?: ForgetPlayer;
  bBarbAlliance?: ZType | ZName2 | string;
  bBarbAllianceEnd?: ForgetPlayer;
  bBarbInvade?: ZType | ZName2 | string;
  bStateReligion?: ForgetPlayer;
  bStateReligionEnd?: ForgetPlayer;
  bFoundReligion?: ZType | ZName2 | string;
  bStartLaw?: ZType | ZName2 | string;
  bFreeLaw?: ZType | ZName2 | string;
  bFreeTheology?: ZType | ZName2 | string;
  bFreeTech?: ForgetPlayer;
  bNoCourtier?: ForgetPlayer;
  bLeaveCouncil?: ForgetPlayer;
  bReleaseGeneral?: ForgetPlayer;
  bChangeSuccession?: ForgetPlayer;
  bDivorce?: ZType | ZName2 | string;
  bAbdicate?: ZType | ZName2 | string;
  bSeizeThrone?: ForgetPlayer;
  bChosenHeir?: ZType | ZName2 | string;
  bDoomCharacter?: ZType | ZName2 | string;
  bKillCharacter?: ZType | ZName2 | string;
  bHaveBastard?: ForgetPlayer;
  bKillUnit?: ForgetPlayer;
  bRemoveVegetation?: ForgetPlayer;
  aiCityYields?: AiCityYields;
  aiGlobalYieldsBase?: AiCityYields;
  aiGlobalYieldsPer?: AiGlobalYieldsPer;
  aiYieldsSendBase?: AiGlobalYieldsPer;
  aiYieldsSendPerUs?: AiGlobalYieldsPer;
  aiYieldsSendPerThem?: ForgetPlayer;
  aiYieldsExchangeBase?: ForgetPlayer;
  aiYieldsExchangePerUs?: ForgetPlayer;
  aiYieldsExchangePerThem?: ForgetPlayer;
  aiYieldsTradeBase?: ForgetPlayer;
  aiYieldsTradePerUs?: ForgetPlayer;
  aiYieldsTradePerThem?: ForgetPlayer;
  aiYieldsTributeBase?: ForgetPlayer;
  aiYieldsTributePerUs?: ForgetPlayer;
  aiYieldsTributePerThem?: ForgetPlayer;
  aiUnits?: AiGlobalYieldsPer;
  aiBonusUnits?: AiGlobalYieldsPer;
  aiLawOpinion?: ForgetPlayer;
  aiRatings?: AiGlobalYieldsPer;
  aiTraitDie?: ForgetPlayer;
  aeAddProjects?: AeAddProjects;
  aeRemoveProjects?: ForgetPlayer;
  aeAddSpecialistClasses?: ForgetPlayer;
  aePromotions?: ForgetPlayer;
  aeAddTraits?: AeAddTraits;
  aeRemoveTraits?: AeAddTraits;
  aeTechs?: AeAddProjects;
  aeCultureProject?: ForgetPlayer;
  aaiCultureYield?: AaiCultureYield;
  aeBonuses?: AeAddProjects;
  aeFamilyBonuses?: ForgetPlayer;
  aeAllCityBonuses?: AeAddProjects;
  DiplomacySubjects?: ForgetPlayer;
  AddRelationshipSubjects?: ForgetPlayer;
  AddRelationshipReverse?: ForgetPlayer;
  RemoveRelationshipSubjects?: ForgetPlayer;
  RemoveRelationshipReverse?: ForgetPlayer;
  AddCourtierGender?: AddCourtierGender;
}
export interface AddCourtierGender {
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
export interface AiGlobalYieldsPer {
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
export interface ForgetPlayer {
  comment?: string;
}
export interface ZName2 {
  comment: string;
}
export interface ZType {
}

}
