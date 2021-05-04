
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
  Class?: ZType | string;
  AssetVariation: ZType | string;
  AssetConstruction?: ZType;
  zIconName: ZType | string;
  iBuildTurns?: ZType;
  iBuildCost?: ZType;
  iDevelopTurns?: ZType;
  iDevelopRand?: ZType;
  iPillageTurns: ZType | string;
  iRevealChange?: ZType;
  iVisionChange?: ZType;
  iDefenseModifier?: ZType;
  iFreshWaterModifier?: ZType;
  iRiverModifier?: ZType;
  iSpecialistCost?: ZType;
  iVP?: ZType;
  iMaxCityCount?: ZType;
  iMaxFamilyCount?: ZType;
  iMaxPlayerCount?: ZType;
  iCitySiteUnits?: ZType;
  iDefendUnits?: ZType;
  iUnitTurns?: ZType;
  iUnitReligionDie?: ZType;
  iUnitHeal?: ZType;
  iLegitimacy?: ZType;
  iOpinionReligion?: ZType;
  bBuild?: ZType;
  bHolyCity?: ZType;
  bTerritoryOnly: ZType | string;
  bUrban?: ZType | string;
  bRequiresUrban?: ZType | string;
  bTradeNetwork?: ZType;
  bSpreadsBorders?: ZType;
  bNoAdjacentReligion?: ZType;
  bNoVegetation: ZType | string;
  bFreshWaterSource?: ZType;
  bFreshWaterValid?: ZType;
  bRiverValid?: ZType;
  bRotateTowardsLand?: ZType;
  bCoastLandValid?: ZType;
  bCoastWaterValid?: ZType;
  bCityValid?: ZType;
  bHolyCityValid?: ZType;
  bPermanent?: ZType;
  bWonder?: ZType;
  bPause?: ZType;
  bHeal?: ZType;
  bBonus?: ZType;
  bCitySite?: ZType;
  bTribe?: ZType;
  bRemoveBorder?: ZType;
  bRemoveBonus?: ZType;
  bNoAnalytics?: ZType;
  bText: ZType | string;
  Achievement?: ZType;
  NationPrereq?: ZType;
  ReligionPrereq?: ZType;
  ReligionSpread?: ZType;
  CulturePrereq?: ZType;
  AdjacentImprovementPrereq?: ZType;
  AdjacentImprovementClassPrereq?: ZType;
  ImprovementPrereq?: ZType;
  UpgradeImprovement?: ZType;
  DevelopImprovement?: ZType;
  BonusImprovement?: ZType;
  EffectCityPrereq?: ZType;
  EffectCity?: ZType | string;
  EffectPlayer?: ZType;
  UnitDefend?: ZType;
  Bonus?: ZType;
  BonusCities?: ZType;
  aiYieldCost?: ZType;
  aiYieldOutput: AiYieldOutput;
  aiWonderYieldOutput?: ZType;
  aiAdjacentResourceYieldOutput?: ZType;
  aiTradeNetworkYieldOutput?: ZType;
  aiYieldPillage: AiYieldPillage;
  aiYieldFreshWaterModifier?: ZType;
  aiYieldRiverModifier?: ZType;
  aiTerrainModifier?: ZType;
  aiHeightModifier?: ZType;
  aiAdjacentHeightModifier?: ZType;
  aiAdjacentImprovementModifier?: AiYieldPillage;
  aiUnitTraitHeal?: ZType;
  aiUnitTraitXP?: ZType;
  aiUnitDie?: ZType;
  aiBonusDie?: ZType;
  abTerrainValid: AbTerrainValid;
  abTerrainInvalid?: ZType;
  abHeightValid?: AbHeightValid;
  abHeightAdjacentValid?: ZType;
  abVegetationValid?: ZType;
  abNoBaseOutput?: AbTerrainValid;
  aeResourceAssetVariation?: AeResourceAssetVariation;
  aeUnitDefend?: ZType;
  aaiImprovementClassYieldOutput?: ZType;
  aaiTerrainYieldModifier?: AaiTerrainYieldModifier;
  aaiHeightYieldModifier?: AaiTerrainYieldModifier;
  aaiAdjacentHeightYieldModifier?: ZType;
  aaiAdjacentImprovementYieldModifier?: ZType;
  aaiTribeUnitDie?: ZType;
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
export interface AeResourceAssetVariation {
  Pair?: Pair3[];
}
export interface Pair3 {
  zIndex: string;
  zValue: string;
}
export interface AbHeightValid {
  Pair?: Pair2;
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
