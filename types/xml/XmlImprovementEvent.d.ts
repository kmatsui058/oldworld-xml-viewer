
declare namespace XmlImprovementEvent {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Class: ZType | string;
  Asset: ZType | string;
  AssetVariation?: ZType;
  zIconName: ZType | string;
  fHillHeightOffset?: ZType;
  iBuildTurns?: ZType;
  iBuildCost?: ZType;
  iUpgradeTurns?: ZType;
  iUpgradeRand?: ZType;
  iPillageTurns: ZType | string;
  iRevealChange?: ZType;
  iDefenseModifier?: ZType;
  iFreshWaterModifier?: ZType;
  iRiverModifier?: ZType;
  iVP?: ZType;
  iMaxCityCount?: ZType;
  iMaxFamilyCount?: ZType;
  iMaxPlayerCount?: ZType;
  iCitySiteUnits?: ZType;
  iUpgradeUnits?: ZType;
  iDefendUnits?: ZType;
  iUnitTurns?: ZType;
  iUnitReligionDie?: ZType;
  iUnitHeal?: ZType;
  iLegitimacy?: ZType;
  bBuild?: ZType;
  bHolyCity?: ZType;
  bTerritoryOnly: ZType | string;
  bUrban?: ZType;
  bRequiresUrban?: ZType;
  bTradeNetwork?: ZType;
  bSpreadsBorders?: ZType;
  bNoAdjacentReligion?: ZType;
  bNoVegetation: ZType | string;
  bFreshWaterSource?: ZType;
  bFreshWaterValid?: ZType;
  bRiverValid?: ZType;
  bRotateTowardsLand?: ZType;
  bCoastValid?: ZType;
  bWaterCoastValid?: ZType;
  bCityValid?: ZType;
  bHolyCityValid?: ZType;
  bPermanent?: ZType;
  bWonder?: ZType;
  bHeal?: ZType;
  bBonus?: ZType;
  bCitySite?: ZType;
  bBarbarian?: ZType;
  bBlockUpgrade?: ZType;
  bRemoveBorder?: ZType;
  bRemoveBonus?: ZType;
  NationPrereq?: ZType;
  ReligionPrereq?: ZType;
  CulturePrereq?: ZType;
  AdjacentImprovementClassPrereq?: ZType;
  ImprovementPrereq?: ZType;
  RaiseImprovement?: ZType;
  UpgradeImprovement?: ZType;
  BonusImprovement?: ZType;
  EffectCity?: ZType;
  EffectPlayer?: ZType;
  UnitDefend?: ZType;
  Bonus?: ZType;
  BonusCities?: ZType;
  aiYieldCost?: ZType;
  aiYieldOutput: AiYieldOutput;
  aiYieldPillage: AiYieldPillage;
  aiYieldFreshWaterModifier?: ZType;
  aiYieldRiverModifier?: ZType;
  aiTerrainModifier?: ZType;
  aiHeightModifier?: ZType;
  aiAdjacentHeightModifier?: ZType;
  aiAdjacentImprovementModifier?: AiYieldPillage;
  aiAdjacentImprovementClassModifier?: ZType;
  aiUnitTraitHeal?: ZType;
  aiUnitTraitXP?: ZType;
  aiUnitDie?: ZType;
  aiBonusDie?: ZType;
  abTerrainValid: AbTerrainValid;
  abTerrainInvalid: AbTerrainInvalid;
  abHeightValid?: AbHeightValid;
  abHeightAdjacentValid?: ZType;
  abVegetationValid?: ZType;
  abNoBaseOutput?: AbTerrainValid;
  aeResourceAsset?: AeResourceAsset;
  aeUnitDefend?: ZType;
  aaiTerrainYieldModifier?: AaiTerrainYieldModifier;
  aaiHeightYieldModifier?: AaiTerrainYieldModifier;
  aaiAdjacentHeightYieldModifier?: ZType;
  aaiAdjacentImprovementYieldModifier?: ZType;
  aaiBarbarianUnitDie?: ZType;
  zAudioLoopWhenBuilding?: ZType;
  zAudioSwitchName?: ZType;
}
export interface AaiTerrainYieldModifier {
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
export interface AeResourceAsset {
  Pair?: Pair3[];
}
export interface Pair3 {
  zIndex: string;
  zValue: string;
}
export interface AbHeightValid {
  Pair?: Pair2;
}
export interface AbTerrainInvalid {
  Pair?: Pair2 | Pair2[];
}
export interface AbTerrainValid {
  Pair?: Pair2[];
}
export interface Pair2 {
  zIndex: string;
  bValue: string;
}
export interface AiYieldPillage {
  Pair?: Pair;
}
export interface AiYieldOutput {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
