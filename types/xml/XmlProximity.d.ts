
declare namespace XmlProximity {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  iDistance?: ZType | string;
  iTruceModifier?: ZType | string;
  iWarModifier?: ZType | string;
  iPlayerOpinion?: ZType | string;
  bDeclareWar?: ZType | string;
}
export interface ZType {
}

}