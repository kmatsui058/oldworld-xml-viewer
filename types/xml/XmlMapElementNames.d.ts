
declare namespace XmlMapElementNames {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  azVolcanoNames: AzVolcanoNames;
  azMountainRangeNames: AzVolcanoNames;
  azPeakNames: AzVolcanoNames;
  azRiverNames: AzVolcanoNames;
  azForestNames: AzVolcanoNames;
  azHeathNames: AzVolcanoNames;
  azPlainNames: AzVolcanoNames;
  azDesertNames: AzVolcanoNames;
  azPlateauNames: AzVolcanoNames;
  azValleyNames: AzVolcanoNames;
  azOceanNames: AzOceanNames;
  azSeaNames: AzVolcanoNames;
  azBayNames: AzVolcanoNames;
  azLakeNames: AzVolcanoNames;
  azIslandNames: AzVolcanoNames;
}
export interface AzOceanNames {
  zValue?: string[] | string;
}
export interface AzVolcanoNames {
  zValue?: string[];
}
export interface ZType {
}

}
