
declare namespace XmlImprovement {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Class?: ZType | string;
  Asset: ZType | string;
  AssetVariation?: ZType | string;
  zIconName: ZType | string;
  fHillHeightOffset?: ZType | string;
  iBuildTurns?: ZType | string;
  iBuildCost?: ZType | string;
  iUpgradeTurns?: ZType | string;
  iUpgradeRand?: ZType | string;
  iPillageTurns?: ZType | string;
  iRevealChange?: ZType | string;
  iDefenseModifier?: ZType | string;
  iFreshWaterModifier?: ZType;
  iRiverModifier?: ZType;
  iVP?: ZType | string;
  iMaxCityCount?: ZType | string;
  iMaxFamilyCount?: ZType | string;
  iMaxPlayerCount?: ZType | string;
  iCitySiteUnits?: ZType | string;
  iUpgradeUnits?: ZType | string;
  iDefendUnits?: ZType | string;
  iUnitTurns?: ZType | string;
  iUnitReligionDie?: ZType | string;
  iUnitHeal?: ZType | string;
  iLegitimacy?: ZType | string;
  bBuild?: ZType | string;
  bHolyCity?: ZType | string;
  bTerritoryOnly?: ZType | string;
  bUrban?: ZType | string;
  bRequiresUrban?: ZType | string;
  bTradeNetwork?: ZType | string;
  bSpreadsBorders?: ZType | string;
  bNoAdjacentReligion?: ZType | string;
  bNoVegetation?: ZType | string;
  bFreshWaterSource?: ZType | string;
  bFreshWaterValid?: ZType | string;
  bRiverValid?: ZType | string;
  bRotateTowardsLand?: ZType | string;
  bCoastValid?: ZType | string;
  bWaterCoastValid?: ZType | string;
  bCityValid?: ZType | string;
  bHolyCityValid?: ZType | string;
  bPermanent?: ZType | string;
  bWonder?: ZType | string;
  bHeal?: ZType | string;
  bBonus?: ZType | string;
  bCitySite?: ZType | string;
  bBarbarian?: ZType | string;
  bBlockUpgrade?: ZType | string;
  bRemoveBorder?: ZType | string;
  bRemoveBonus?: ZType | string;
  NationPrereq?: ZType | string;
  ReligionPrereq?: ZType | string;
  CulturePrereq?: ZType | string;
  AdjacentImprovementClassPrereq?: ZType;
  ImprovementPrereq?: ZType | string;
  RaiseImprovement?: ZType | string;
  UpgradeImprovement?: ZType | string;
  BonusImprovement?: ZType | string;
  EffectCity?: ZType | string;
  EffectPlayer?: ZType | string;
  UnitDefend?: ZType | string;
  Bonus?: ZType | string;
  BonusCities?: ZType | string;
  aiYieldCost?: AiYieldCost;
  aiYieldOutput?: AiYieldCost;
  aiYieldPillage?: AiYieldPillage;
  aiYieldFreshWaterModifier?: AiYieldPillage;
  aiYieldRiverModifier?: AiYieldPillage;
  aiTerrainModifier?: ZType;
  aiHeightModifier?: ZType;
  aiAdjacentHeightModifier?: ZType;
  aiAdjacentImprovementModifier?: AiYieldCost;
  aiAdjacentImprovementClassModifier?: AiAdjacentImprovementClassModifier;
  aiUnitTraitHeal?: AiYieldPillage;
  aiUnitTraitXP?: AiYieldPillage;
  aiUnitDie?: ZType;
  aiBonusDie?: AiAdjacentImprovementClassModifier;
  abTerrainValid?: AbTerrainValid;
  abTerrainInvalid?: AbTerrainValid;
  abHeightValid?: AbTerrainValid;
  abHeightAdjacentValid?: AbHeightAdjacentValid;
  abVegetationValid?: AbHeightAdjacentValid;
  abNoBaseOutput?: AbNoBaseOutput;
  aeResourceAsset?: AeResourceAsset;
  aeUnitDefend?: AeUnitDefend;
  aaiTerrainYieldModifier?: AaiTerrainYieldModifier;
  aaiHeightYieldModifier?: AaiHeightYieldModifier;
  aaiAdjacentHeightYieldModifier?: AaiTerrainYieldModifier;
  aaiAdjacentImprovementYieldModifier?: ZType;
  aaiBarbarianUnitDie?: AaiBarbarianUnitDie;
  zAudioLoopWhenBuilding?: ZType | string;
  zAudioSwitchName?: ZType | string;
}
export interface AaiBarbarianUnitDie {
  Pair?: Pair5[];
}
export interface Pair5 {
  zIndex: string;
  SubPair: SubPair[];
}
export interface AaiHeightYieldModifier {
  Pair?: Pair4;
}
export interface AaiTerrainYieldModifier {
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
export interface AeUnitDefend {
  Pair?: Pair3[];
}
export interface AeResourceAsset {
  Pair?: Pair3[] | Pair3;
}
export interface Pair3 {
  zIndex: string;
  zValue: string;
}
export interface AbNoBaseOutput {
  Pair?: Pair2[];
}
export interface AbHeightAdjacentValid {
  Pair?: Pair2;
}
export interface AbTerrainValid {
  Pair?: Pair2 | Pair2[];
}
export interface Pair2 {
  zIndex: string;
  bValue: string;
}
export interface AiAdjacentImprovementClassModifier {
  Pair?: Pair[];
}
export interface AiYieldPillage {
  Pair?: Pair;
}
export interface AiYieldCost {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
