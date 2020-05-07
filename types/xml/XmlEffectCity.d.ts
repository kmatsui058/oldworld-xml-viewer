
declare namespace XmlEffectCity {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Source?: ZType | string;
  EffectCityUnlock?: ZType | string;
  SourceUnlock?: ZType | string;
  SourceEffectPlayer?: ZType;
  SourceFamilyClass?: ZType | string;
  SourceCulture?: ZType | string;
  SourceDifficulty?: ZType | string;
  SourceImprovement?: ZType | string;
  SourceLaw?: ZType | string;
  SourceNation?: ZType | string;
  SourceOpinionFamily?: ZType | string;
  SourceOpinionReligion?: ZType | string;
  SourceProject?: ZType | string;
  SourceReligion?: ZType | string;
  SourceResource?: ZType | string;
  SourceSpecialist?: ZType | string;
  SourceTheology?: ZType | string;
  SourceTrait?: ZType | string;
  SourceUnit?: ZType | string;
  aeSourceImprovements?: AeSourceImprovements;
  aeSourceResources?: AeSourceImprovements;
  iCityHP?: ZType | string;
  iUnitXP?: ZType | string;
  iUnitLevel?: ZType | string;
  iUnitHeal?: ZType;
  iRangeChange?: ZType | string;
  iRandomPromotions?: ZType | string;
  iStrengthModifier?: ZType | string;
  iSpecialistCostModifier?: ZType;
  iSpecialistRuralTrainTimeModifier?: ZType | string;
  iSpecialistUrbanCostModifier?: ZType | string;
  iSpecialistUrbanTrainTimeModifier?: ZType | string;
  iDiscipleTrainTimeModifier?: ZType | string;
  iUrbanBuildTurnChange?: ZType | string;
  iFamilyOpinion?: ZType | string;
  iRebelProb?: ZType | string;
  bLuxury?: ZType | string;
  bNoHurry?: ZType | string;
  bHurryCivics?: ZType;
  bHurryTraining?: ZType | string;
  bHurryMoney?: ZType | string;
  bHurryPopulation?: ZType | string;
  bEnablesGovernor?: ZType | string;
  bAlwaysConnected?: ZType | string;
  bBuyTile?: ZType | string;
  bStateReligionImprovements?: ZType | string;
  aiYieldCultureGrowth?: AiYieldCultureGrowth;
  aiYieldRate?: AiYieldRate;
  aiYieldRatePopulation?: AiYieldRate;
  aiYieldRateCulture?: AiYieldCultureGrowth;
  aiYieldRateOpinion?: AiYieldCultureGrowth;
  aiYieldRateMilitary?: AiYieldCultureGrowth;
  aiYieldRateSpecialist?: AiYieldCultureGrowth;
  aiYieldRateReligion?: AiYieldCultureGrowth;
  aiYieldRateReligionWorld?: AiYieldCultureGrowth;
  aiYieldModifier?: AiYieldRate;
  aiImprovementModifier?: AiYieldRate;
  aiImprovementRiverModifier?: AiImprovementRiverModifier;
  aiImprovementClassModifier?: AiImprovementRiverModifier;
  aiUnitCostModifier?: AiYieldCultureGrowth;
  aiUnitTrainModifier?: AiYieldCultureGrowth;
  aiUnitTraitXP?: AiYieldCultureGrowth;
  aiUnitTraitLevel?: ZType;
  aiUnitTraitCostModifier?: AiYieldCultureGrowth;
  aiUnitTraitTrainModifier?: AiYieldCultureGrowth;
  aiImprovementClassUpgradeTurnChange?: AiYieldCultureGrowth;
  abNoImprovementClassMax?: AbNoImprovementClassMax;
  aeFreePromotion?: AeFreePromotion;
  aeFreeUnitEffectCity?: AeSourceImprovements;
  aeTraitPromotion?: AeTraitPromotion;
  aaiImprovementClassYield?: AaiImprovementClassYield;
  aaiEffectCityYieldRate?: AaiEffectCityYieldRate;
}
export interface AaiEffectCityYieldRate {
  Pair?: Pair5;
}
export interface Pair5 {
  zIndex: string;
  SubPair: SubPair | SubPair[];
}
export interface AaiImprovementClassYield {
  Pair?: Pair4[] | Pair4;
}
export interface Pair4 {
  zIndex: string;
  SubPair: SubPair;
}
export interface SubPair {
  zSubIndex: string;
  iValue: string;
}
export interface AeTraitPromotion {
  Pair?: Pair3[] | Pair3;
}
export interface Pair3 {
  zIndex: string;
  zValue: string;
}
export interface AeFreePromotion {
  zValue?: string;
}
export interface AbNoImprovementClassMax {
  Pair?: Pair2;
}
export interface Pair2 {
  zIndex: string;
  bValue: string;
}
export interface AiImprovementRiverModifier {
  Pair?: Pair[];
}
export interface AiYieldRate {
  Pair?: Pair[] | Pair;
}
export interface AiYieldCultureGrowth {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface AeSourceImprovements {
  zValue?: string[];
}
export interface ZType {
}

}
