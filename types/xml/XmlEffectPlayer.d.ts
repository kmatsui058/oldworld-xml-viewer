
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
  SourceDifficulty?: ZType | string;
  SourceImprovement?: ZType | string;
  SourceLaw?: ZType | string;
  SourceNation?: ZType | string;
  SourceReligionState?: ZType | string;
  SourceTech?: ZType | string;
  SourceTrait?: ZType | string;
  EffectPlayer?: ZType | string;
  EffectCity?: ZType | string;
  CoastEffectCity?: ZType | string;
  StateReligionEffectCity?: ZType | string;
  CapitalEffectCity?: ZType | string;
  EffectUnit?: ZType | string;
  StartBonus?: ZType | string;
  FoundBonus?: ZType | string;
  iMaxActions?: ZType | string;
  iXPIdleTurn?: ZType | string;
  iXPModifier?: ZType | string;
  iHarvestModifier?: ZType | string;
  iConsumptionModifier?: ZType | string;
  iImprovementModifier?: ZType | string;
  iWonderModifier?: ZType | string;
  iStartLawModifier?: ZType | string;
  iSwitchLawModifier?: ZType | string;
  iTrainingOrderModifier?: ZType;
  iBuildTurnChange?: ZType | string;
  iFatigueLimitChange?: ZType | string;
  iRevealChange?: ZType | string;
  iTechsAvailableChange?: ZType | string;
  iLeaderOpinionChange?: ZType | string;
  bRedrawTechs?: ZType | string;
  bAddRoad?: ZType | string;
  bAddUrban?: ZType | string;
  bRaiseImprovement?: ZType | string;
  bNoWonders?: ZType;
  bNoReligions?: ZType;
  bNoTheologies?: ZType;
  bMultipleWorkers?: ZType | string;
  bBuyTile?: ZType | string;
  bRiverMovement?: ZType | string;
  bNoSellPenalty?: ZType | string;
  bNoUnitConsumption?: ZType | string;
  bBuildAllReligions?: ZType | string;
  bHolyCitiesVisible?: ZType | string;
  bLegitimacyOrders?: ZType | string;
  aiUnitKillYield?: AiUnitKillYield;
  aiWarYield?: AiUnitKillYield;
  aiYieldRate?: AiUnitKillYield;
  aiYieldUpkeep?: AiUnitKillYield;
  aeTradeYield?: AeTradeYield;
  aeWaterUnit?: AeTradeYield;
  aeHideUnit?: AeTradeYield;
  aeHurryCivics?: ZType;
  aeHurryTraining?: ZType;
  aeHurryMoney?: AeTradeYield;
  aeHurryPopulation?: AeTradeYield;
}
export interface AeTradeYield {
  zValue?: string;
}
export interface AiUnitKillYield {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
