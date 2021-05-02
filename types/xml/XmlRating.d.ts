
declare namespace XmlRating {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zColor: ZType | string;
  zName: ZType | string;
  zIconName: ZType | string;
  zHelp: ZType | string;
  iStrengthModifier?: ZType | string;
  iDefenseModifier?: ZType | string;
  iCriticalChance?: ZType | string;
  iUnitXP?: ZType | string;
  aiYieldCourtRate: AiYieldCourtRate;
  aiYieldGovernorModifier: AiYieldCourtRate;
  aiYieldAgentPercent: AiYieldCourtRate;
}
export interface AiYieldCourtRate {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
