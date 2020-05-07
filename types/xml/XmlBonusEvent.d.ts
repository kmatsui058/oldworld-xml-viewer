
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
  MemoryPlayer?: ZType | string;
  ForgetPlayer?: ZType | string;
  MemoryBarb?: ZType | string;
  ForgetBarb?: ZType;
  MemoryReligion?: ZType | string;
  ForgetReligion?: ZType;
  MemoryFamily?: ZType | string;
  ForgetFamily?: ZType;
  MemoryAllFamilies?: ZType | string;
  MemoryCharacter?: ZType | string;
  ForgetCharacter?: ZType;
  DiplomacyPlayer?: ZType | string;
  DiplomacyBarb?: ZType | string;
  MakeCourtier?: ZType | string;
  StartLaw?: ZType | string;
  FreeLaw?: ZType | string;
  FoundReligion?: ZType | string;
  AdoptReligion?: ZType | string;
  FreeTheology?: ZType | string;
  Quest?: ZType | string;
  Ambition?: ZType | string;
  DesiredAmbition?: ZType | string;
  Mission?: ZType | string;
  Council?: ZType | string;
  SetArchetype?: ZType | string;
  SetNickname?: ZType;
  SetVegetation?: ZType | string;
  SetResource?: ZType | string;
  SetImprovement?: ZType | string;
  iRevealRange?: ZType;
  iCitizens?: ZType | string;
  iBorderGrowth?: ZType | string;
  iCultureLevels?: ZType | string;
  iDiscontentLevels?: ZType | string;
  iRebelUnits?: ZType | string;
  iDestroyImprovements?: ZType | string;
  iHPCity?: ZType;
  iHPUnit?: ZType;
  iXPUnit?: ZType | string;
  iXPCharacter?: ZType | string;
  iLegitimacy?: ZType | string;
  iDiplomacyPlayer?: ZType | string;
  iMarrySubject?: ZType | string;
  iAdoptedBySubject?: ZType | string;
  iGovernorOfSubject?: ZType | string;
  iGeneralOfSubject?: ZType | string;
  iSpreadToSubject?: ZType | string;
  iTradeResourceSubject?: ZType | string;
  iMissionSubject?: ZType | string;
  bRevealTerritory?: ZType | string;
  bCancelTrade?: ZType;
  bPlayerAlliance?: ZType | string;
  bPlayerAllianceEnd?: ZType | string;
  bBarbAlliance?: ZType;
  bBarbAllianceEnd?: ZType | string;
  bBarbInvade?: ZType | string;
  bStateReligion?: ZType | string;
  bStateReligionEnd?: ZType;
  bFoundReligion?: ZType | string;
  bStartLaw?: ZType;
  bFreeLaw?: ZType;
  bFreeTheology?: ZType;
  bFreeTech?: ZType | string;
  bNoCourtier?: ZType | string;
  bLeaveCouncil?: ZType | string;
  bReleaseGeneral?: ZType | string;
  bChangeSuccession?: ZType | string;
  bDivorce?: ZType | string;
  bAbdicate?: ZType | string;
  bSeizeThrone?: ZType | string;
  bChosenHeir?: ZType | string;
  bDoomCharacter?: ZType | string;
  bKillCharacter?: ZType | string;
  bHaveBastard?: ZType | string;
  bKillUnit?: ZType;
  bRemoveVegetation?: ZType;
  aiCityYields?: AiCityYields;
  aiGlobalYieldsBase?: AiCityYields;
  aiGlobalYieldsPer?: AiGlobalYieldsPer;
  aiYieldsSendBase?: AiGlobalYieldsPer;
  aiYieldsSendPerUs?: AiGlobalYieldsPer;
  aiYieldsSendPerThem?: ZType;
  aiYieldsExchangeBase?: AiCityYields;
  aiYieldsExchangePerUs?: ZType;
  aiYieldsExchangePerThem?: ZType;
  aiYieldsTradeBase?: AiCityYields;
  aiYieldsTradePerUs?: ZType;
  aiYieldsTradePerThem?: ZType;
  aiYieldsTributeBase?: AiCityYields;
  aiYieldsTributePerUs?: AiGlobalYieldsPer;
  aiYieldsTributePerThem?: AiGlobalYieldsPer;
  aiUnits?: AiCityYields;
  aiBonusUnits?: AiCityYields;
  aiLawOpinion?: AiGlobalYieldsPer;
  aiRatings?: AiCityYields;
  aiTraitDie?: ZType;
  aeAddProjects?: AeAddProjects;
  aeRemoveProjects?: AeAddProjects;
  aeAddSpecialistClasses?: AeAddSpecialistClasses;
  aePromotions?: AeAddSpecialistClasses;
  aeAddTraits?: AeAddSpecialistClasses;
  aeRemoveTraits?: AeAddProjects;
  aeTechs?: AeAddProjects;
  aeCultureProject?: AeCultureProject;
  aaiCultureYield?: ZType;
  aeBonuses?: AeAddSpecialistClasses;
  aeFamilyBonuses?: ZType;
  aeAllCityBonuses?: AeAddProjects;
  DiplomacySubjects?: DiplomacySubjects;
  AddRelationshipSubjects?: DiplomacySubjects;
  AddRelationshipReverse?: AddRelationshipReverse;
  RemoveRelationshipSubjects?: DiplomacySubjects;
  RemoveRelationshipReverse?: DiplomacySubjects;
  AddCourtierGender?: AddCourtierGender;
  beginGroup?: string;
}
export interface AddCourtierGender {
  Pair?: Pair2;
}
export interface AddRelationshipReverse {
  Pair?: Pair3[] | Pair3;
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
export interface AeAddSpecialistClasses {
  zValue?: string[] | string;
}
export interface AeAddProjects {
  zValue?: string;
}
export interface AiGlobalYieldsPer {
  Pair?: Pair;
}
export interface AiCityYields {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
