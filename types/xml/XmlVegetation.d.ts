
declare namespace XmlVegetation {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  NameRemove: ZType | string;
  AssetVariation: ZType | string;
  zIconName: ZType | string;
  zRemoveIcon: ZType | string;
  zRemovalAudio?: ZType | string;
  iMovementCost?: ZType | string;
  iRemoveCost?: ZType | string;
  iBuildCost: ZType | string;
  iGrowthRoll?: ZType | string;
  iBorderValue?: ZType | string;
  iRevealChange?: ZType | string;
  VegetationRemove?: ZType | string;
  VegetationGrow?: ZType | string;
  aiYieldRemove: AiYieldRemove;
  aiYieldBuild: AiYieldRemove;
  aiDefendUnitTrait?: AiYieldRemove;
  aeTerrainAssetVariation?: AeTerrainAssetVariation;
}
export interface AeTerrainAssetVariation {
  Triple?: Triple;
}
export interface Triple {
  First: ZType;
  Second: string;
  Third: string;
}
export interface AiYieldRemove {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
