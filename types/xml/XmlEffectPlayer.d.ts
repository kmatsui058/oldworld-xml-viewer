
declare namespace XmlEffectPlayer {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zIconName?: ZType | string;
  SourceCouncil?: ZType | string;
  SourceDifficulty?: ZType | string;
  SourceImprovement?: ZType | string;
  SourceLaw?: ZType | string;
  SourceNation?: ZType | string;
  SourceReligionState?: ZType | string;
  SourceTech?: ZType | string;
  SourceTrait?: ZType | string;
  EffectPlayer?: ZType | string;
  EffectCity?: ZType | string;
  EffectCityExtra?: ZType | string;
  CoastEffectCity?: ZType | string;
  StateReligionEffectCity?: ZType | string;
  CapitalEffectCity?: ZType | string;
  EffectUnit?: ZType | string;
  StartBonus?: ZType | string;
  FoundBonus?: ZType | string;
  iVP?: ZType | string;
  iMaxActions?: ZType | string;
  iXPIdleTurn?: ZType | string;
  iXPModifier?: ZType | string;
  iHarvestModifier?: ZType | string;
  iConsumptionModifier?: ZType | string;
  iWonderModifier?: ZType | string;
  iStartLawModifier?: ZType | string;
  iSwitchLawModifier?: ZType | string;
  iTrainingOrderModifier?: ZType;
  iBuildTurnChange?: ZType | string;
  iFatigueLimitChange?: ZType | string;
  iVisionChange?: ZType | string;
  iTechsAvailableChange?: ZType | string;
  iLeaderOpinionChange?: ZType | string;
  iReligionOpinionChange?: ZType | string;
  iFamilyOpinionChange?: ZType | string;
  bStartMusic?: ZType | string;
  bRedrawTechs?: ZType | string;
  bAddRoad?: ZType | string;
  bAddUrban?: ZType | string;
  bUpgradeImprovement?: ZType | string;
  bNoWonders?: ZType;
  bNoReligions?: ZType;
  bNoTheologies?: ZType;
  bMultipleWorkers?: ZType | string;
  bBuyTile?: ZType | string;
  bAgent?: ZType | string;
  bRiverMovement?: ZType | string;
  bNoSellPenalty?: ZType | string;
  bNoUnitConsumption?: ZType | string;
  bPurgeReligions?: ZType | string;
  bBuildAllReligions?: ZType | string;
  bPaganStateReligion?: ZType | string;
  bLegitimacyOrders?: ZType | string;
  bRecruitMercenaries?: ZType | string;
  bHireMercenaries?: ZType | string;
  bAutomateWorkers?: ZType | string;
  aiMilitaryKillYield?: AiMilitaryKillYield;
  aiWarYield?: AiMilitaryKillYield;
  aiYieldRate?: AiMilitaryKillYield;
  aiYieldUpkeep?: AiMilitaryKillYield;
  aeEffectUnit?: AeEffectUnit;
  aeTradeYield?: AeTradeYield;
  aeWaterUnit?: AeTradeYield;
  aeHideUnit?: AeTradeYield;
}
export interface AeTradeYield {
  zValue?: string;
}
export interface AeEffectUnit {
  Pair?: Pair2;
}
export interface Pair2 {
  zIndex: string;
  zValue: string;
}
export interface AiMilitaryKillYield {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
