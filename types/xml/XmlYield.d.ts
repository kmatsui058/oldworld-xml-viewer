
declare namespace XmlYield {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Color: ZType | string;
  zHelp?: ZType | string;
  zIconName: ZType | string;
  iMinimum?: ZType | string;
  iLuxuryRate?: ZType | string;
  iLeaderGovernor?: ZType | string;
  iForeignPopulation?: ZType | string;
  iFamilyMilitary?: ZType | string;
  iPerRuralPopulation?: ZType | string;
  iPerConnectedForeign?: ZType | string;
  iPerLivingRoyal?: ZType | string;
  iPerLivingCourtier?: ZType | string;
  iPerCapitalDist?: ZType | string;
  iPerLegitimacy?: ZType | string;
  iDiscontentModifier?: ZType | string;
  iDiscontentMultiplier?: ZType | string;
  iValueAI: ZType | string;
  iPrice?: ZType | string;
  iMinPrice?: ZType | string;
  iMaxPrice?: ZType | string;
  iDemand?: ZType | string;
  iOffensiveCost?: ZType | string;
  iDowryYieldBase?: ZType | string;
  iDowryYieldPer?: ZType | string;
  iUIPosition?: ZType | string;
  bGlobal?: ZType | string;
  bStockpile?: ZType | string;
  bNoDamage?: ZType | string;
  bNoAssimilate?: ZType | string;
  bNegative?: ZType | string;
  bFloor?: ZType | string;
  bShortfall?: ZType | string;
  bCanSell?: ZType | string;
  bCanBuy?: ZType | string;
  bCanGift?: ZType | string;
  bSellDebt?: ZType | string;
  AddToYield?: ZType | string;
  aiRoadCost?: AiRoadCost;
  aiUrbanCost?: AiRoadCost;
}
export interface AiRoadCost {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
