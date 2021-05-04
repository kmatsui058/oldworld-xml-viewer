
declare namespace XmlAudio {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | ZType2 | string;
  zAsset: ZType | ZType2 | string;
  bOnlyAllowOnePerFrame?: ZType | string;
  Creators?: Creators;
  zInstrumentation?: ZType | ZType2 | string;
  zTags?: ZType | ZType2 | string;
}
export interface Creators {
  comment?: string;
  Creator?: Creator;
}
export interface Creator {
  zCreatorName: string;
  zPercentage: string;
  zAffiliation: string;
}
export interface ZType2 {
  comment: string;
}
export interface ZType {
}

}
