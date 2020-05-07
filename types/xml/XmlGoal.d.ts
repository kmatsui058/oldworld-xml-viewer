
declare namespace XmlGoal {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  iAmbitionClass?: ZType | string;
  iMaxTurns?: ZType | string;
  iMinTier?: ZType | string;
  iMaxTier?: ZType | string;
  TechPrereq?: ZType | string;
  TechObsolete?: ZType | string;
  NationPrereq?: ZType | string;
  EstablishTheology?: ZType | string;
  StartLaw?: ZType | string;
  iLegitimacy?: ZType;
  iCities?: ZType | string;
  iConnectedCities?: ZType | string;
  iCitizens?: ZType;
  iSpecialists?: ZType | string;
  iPopulation?: ZType | string;
  iPopulationHighest?: ZType | string;
  iMilitaryHighest?: ZType | string;
  iUrbanImprovements?: ZType | string;
  iWonders?: ZType | string;
  iLaws?: ZType | string;
  iRevealLand?: ZType | string;
  iMilitaryUnits?: ZType | string;
  iMaxLevelUnits?: ZType;
  iImprovementClassThreshold?: ZType | string;
  iUnitThreshold?: ZType | string;
  iPlayerCapturedData?: ZType | string;
  iBarbsClearedData?: ZType | string;
  iPlayerKilledData?: ZType | string;
  iBarbsKilledData?: ZType | string;
  bVictoryEligible?: ZType | string;
  bStateReligion?: ZType | string;
  aiFamilyClassWeight?: AiFamilyClassWeight;
  aiDesiredWeight?: AiFamilyClassWeight;
  aiDiplomacyCount?: AiDiplomacyCount;
  aiBarbsKilledData?: AiDiplomacyCount;
  aiYieldProducedData?: AiDiplomacyCount;
  aiYieldRate?: AiFamilyClassWeight;
  aiYieldCount?: AiDiplomacyCount;
  aiImprovementCount?: AiFamilyClassWeight;
  aiImprovementClassCount?: AiDiplomacyCount;
  aiCultureCount?: AiDiplomacyCount;
  aiCultureWonders?: AiDiplomacyCount;
  aiSpecialistCount?: AiDiplomacyCount;
  aiProjectCount?: AiFamilyClassWeight;
  aiEffectCityCount?: AiDiplomacyCount;
  aiUnitCount?: AiDiplomacyCount;
  aiUnitTraitCount?: AiFamilyClassWeight;
  aiUnitTraitMaxLevelCount?: AiUnitTraitMaxLevelCount;
  aiStatCount?: ZType;
  aiStatCountData?: AiDiplomacyCount;
  aeTechsAcquired?: AeTechsAcquired;
  aeThresholdImprovementClasses?: AeTechsAcquired;
  aeThresholdUnits?: AeTechsAcquired;
}
export interface AeTechsAcquired {
  zValue?: string[];
}
export interface AiUnitTraitMaxLevelCount {
  Pair?: Pair[];
}
export interface AiDiplomacyCount {
  Pair?: Pair;
}
export interface AiFamilyClassWeight {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
