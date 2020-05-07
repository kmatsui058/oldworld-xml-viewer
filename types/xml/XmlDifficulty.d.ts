
declare namespace XmlDifficulty {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  EffectPlayer: ZType | string;
  aiYieldStockpile: AiYieldStockpile;
  aiYieldThresholdBase: AiYieldStockpile;
  aiYieldThresholdPer: AiYieldThresholdPer;
}
export interface AiYieldThresholdPer {
  Pair?: Pair;
}
export interface AiYieldStockpile {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
