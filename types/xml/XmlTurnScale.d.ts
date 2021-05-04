
declare namespace XmlTurnScale {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zScaleSingular: ZType | string;
  zScalePlural: ZType | string;
  zScaleShort: ZType | string;
  bEnabled?: ZType | string;
  iCognomenModifier?: ZType | string;
  azTurnNames?: AzTurnNames;
}
export interface AzTurnNames {
  zValue?: string[];
}
export interface ZType {
}

}
