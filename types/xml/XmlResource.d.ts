
declare namespace XmlResource {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  AssetVariation: ZType | string;
  zIconName: ZType | string;
  iProbThousand: ZType | string;
  iMinDist?: ZType | string;
  iMinLatitude?: ZType | string;
  iMaxLatitude?: ZType | string;
  iMinPerPlayer?: ZType | string;
  iBorderValue: ZType | string;
  iHarvestCost: ZType | string;
  iHarvestRoll: ZType | string;
  bNoVegetation?: ZType | string;
  bClearVegetation?: ZType | string;
  aiYieldReveal: AiYieldReveal;
  aiYieldHarvest: AiYieldHarvest;
  abTerrainValid: AbTerrainValid;
  abHeightValid: AbTerrainValid;
  abVegetationValid?: AbTerrainValid;
}
export interface AbTerrainValid {
  Pair?: Pair2 | Pair2[];
}
export interface Pair2 {
  zIndex: string;
  bValue: string;
}
export interface AiYieldHarvest {
  Pair?: Pair;
}
export interface AiYieldReveal {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
