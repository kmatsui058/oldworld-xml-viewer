
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
  SourceEffectPlayer?: ZType | string;
  SourceFamilyClass?: ZType | string;
  SourceCulture?: ZType | string;
  SourceDifficulty?: ZType | string;
  SourceImprovement?: ZType | string;
  SourceImprovementClass?: ZType | string;
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
  aeSourceProjects?: AeSourceImprovements;
  aeSourceResources?: AeSourceImprovements;
  CultureBonus?: ZType | string;
  iCityHP?: ZType | string;
  iUnitXP?: ZType | string;
  iUnitLevel?: ZType | string;
  iUnitHeal?: ZType;
  iRangeChange?: ZType | string;
  iRandomPromotions?: ZType | string;
  iStrengthModifier?: ZType | string;
  iImprovementCostModifier?: ZType | string;
  iAdjacentClassCostModifier?: ZType | string;
  iSpecialistCostModifier?: ZType | string;
  iSpecialistRuralTrainTimeModifier?: ZType | string;
  iSpecialistUrbanCostModifier?: ZType | string;
  iSpecialistUrbanTrainTimeModifier?: ZType | string;
  iDiscipleTrainTimeModifier?: ZType | string;
  iHurryDiscontentModifier?: ZType | string;
  iBuildTurnChange?: ZType | string;
  iUrbanBuildTurnChange?: ZType | string;
  iFamilyOpinion?: ZType | string;
  iRebelProb?: ZType | string;
  bLuxury?: ZType | string;
  bAutoBuild?: ZType | string;
  bNoHurry?: ZType | string;
  bHurryCivics?: ZType;
  bHurryTraining?: ZType | string;
  bHurryMoney?: ZType;
  bHurryPopulation?: ZType | string;
  bHurryOrders?: ZType | string;
  bEnablesGovernor?: ZType | string;
  bAlwaysConnected?: ZType | string;
  bBuyTile?: ZType | string;
  bNoReligionSpread?: ZType | string;
  bStateReligionImprovements?: ZType | string;
  aiYieldRate?: AiYieldRate;
  aiYieldRatePopulation?: AiYieldRate;
  aiYieldRateCulture?: AiYieldRateCulture;
  aiYieldRateOpinion?: AiYieldRateCulture;
  aiYieldRateMilitary?: AiYieldRateCulture;
  aiYieldRateSpecialist?: AiYieldRateCulture;
  aiYieldRateDefending?: AiYieldRateCulture;
  aiYieldRateReligion?: AiYieldRateCulture;
  aiYieldRateHolyCityWorld?: AiYieldRateCulture;
  aiYieldModifier?: AiYieldRate;
  aiImprovementModifier?: AiImprovementModifier;
  aiImprovementRiverModifier?: AiYieldRateCulture;
  aiImprovementClassModifier?: AiYieldRate;
  aiUnitCostModifier?: AiYieldRateCulture;
  aiUnitTrainModifier?: AiYieldRateCulture;
  aiUnitTraitXP?: AiYieldRate;
  aiUnitTraitLevel?: AiYieldRateCulture;
  aiUnitTraitCostModifier?: AiYieldRateCulture;
  aiUnitTraitTrainModifier?: AiYieldRateCulture;
  aiImprovementClassUpgradeTurnChange?: AiYieldRateCulture;
  abNoImprovementClassMax?: AbNoImprovementClassMax;
  abUrbanTerrainValid?: AbNoImprovementClassMax;
  aeHurryCivics?: ZType;
  aeHurryTraining?: ZType;
  aeHurryMoney?: AeHurryMoney;
  aeHurryPopulation?: ZType;
  aeHurryOrders?: ZType;
  aeFreePromotion?: AeHurryMoney;
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
  Pair?: Pair4;
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
export interface AeHurryMoney {
  zValue?: string;
}
export interface AbNoImprovementClassMax {
  Pair?: Pair2;
}
export interface Pair2 {
  zIndex: string;
  bValue: string;
}
export interface AiImprovementModifier {
  Pair?: Pair[];
}
export interface AiYieldRateCulture {
  Pair?: Pair;
}
export interface AiYieldRate {
  Pair?: Pair[] | Pair;
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
