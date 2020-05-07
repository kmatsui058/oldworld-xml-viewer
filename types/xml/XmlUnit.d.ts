
declare namespace XmlUnit {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zIconName: ZType | string;
  zPortraitName: ZType | string;
  zBackgroundName: ZType | string;
  zAudioSelectionType: ZType | string;
  zAudioMovementType: ZType | string;
  zAudioAttackType: ZType | string;
  azGenderIconName?: ZType;
  azGenderPortraitName?: ZType;
  azBarbarianPortraitName?: AzBarbarianPortraitName;
  aeFormations: AeFormations;
  UnitCycle: ZType | string;
  TechPrereq?: ZType | string;
  NationPrereq?: ZType | string;
  CulturePrereq?: ZType | string;
  EffectCityPrereq?: ZType | string;
  ImprovementPrereq?: ZType | string;
  ImprovementObsolete?: ZType | string;
  RequiresReligion?: ZType | string;
  SpreadReligion?: ZType | string;
  BuildReligion?: ZType | string;
  ProductionType?: ZType | string;
  iMovement: ZType | string;
  iVision: ZType | string;
  iReveal?: ZType | string;
  iFatigue: ZType | string;
  iWaterControl?: ZType | string;
  iStrength: ZType | string;
  iRangeMin?: ZType | string;
  iRangeMax?: ZType | string;
  iHPMax: ZType | string;
  iProduction?: ZType | string;
  iProductionPer?: ZType | string;
  iPopulationCost?: ZType;
  iStartFirst?: ZType | string;
  iStartCity?: ZType | string;
  iStartCityAI?: ZType | string;
  iStartDeveloped?: ZType | string;
  fAttackDuration?: ZType | string;
  bWater?: ZType | string;
  bAmphibious?: ZType | string;
  bTerritoryWater?: ZType | string;
  bReveal?: ZType | string;
  bMelee?: ZType | string;
  bOutsideConsumption?: ZType | string;
  bOutsideOpinion?: ZType | string;
  bZOC?: ZType | string;
  bIgnoreZOC?: ZType | string;
  bBlocks?: ZType | string;
  bFortify?: ZType | string;
  bTestudo?: ZType | string;
  bPillage?: ZType | string;
  bUnlimber?: ZType | string;
  bAnchor?: ZType | string;
  bFound?: ZType | string;
  bHarvest?: ZType | string;
  bBuild?: ZType | string;
  bBuyTile?: ZType | string;
  bTrade?: ZType | string;
  bTheology?: ZType | string;
  bReligious?: ZType | string;
  bPromote?: ZType | string;
  bGeneral?: ZType | string;
  bBarbCity?: ZType | string;
  bNoHurry?: ZType | string;
  aiUnitTraitModifier?: AiUnitTraitModifier;
  aiUnitTraitModifierAttack?: AiUnitTraitModifier;
  aiUnitTraitModifierDefense?: AiUnitTraitModifier;
  aiUnitTraitModifierMelee?: AiUnitTraitModifier;
  aiYieldCost?: AiYieldCost;
  aiYieldConsumption?: AiYieldCost;
  aiAttackValue?: AiUnitTraitModifier;
  aiAttackPercent?: AiUnitTraitModifier;
  aeObsoleteTech?: AeFormations;
  aeUpgradeUnit?: AeFormations;
  aeUnitTrait?: AeFormations;
  aeEffectUnit?: AeEffectUnit;
  aeRemoveVegetation?: AeRemoveVegetation;
}
export interface AeRemoveVegetation {
  zValue?: string[];
}
export interface AeEffectUnit {
  zValue?: string;
}
export interface AiYieldCost {
  Pair?: Pair2[] | Pair2;
}
export interface AiUnitTraitModifier {
  Pair?: Pair2;
}
export interface Pair2 {
  zIndex: string;
  iValue: string;
}
export interface AeFormations {
  zValue?: string[] | string;
}
export interface AzBarbarianPortraitName {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  zValue: string;
}
export interface ZType {
}

}
