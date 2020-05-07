
declare namespace XmlOpinionFamily {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  EffectCity?: ZType | string;
  EffectUnit?: ZType | string;
  Color: ZType | string;
  iThreshold?: ZType | string;
  iCharacterOpinion?: ZType | string;
}
export interface ZType {
}

}
