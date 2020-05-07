
declare namespace XmlStrength {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  iPercent?: ZType | string;
  iTruceModifier?: ZType | string;
  iWarModifier?: ZType | string;
  bDeclareWar?: ZType | string;
}
export interface ZType {
}

}
