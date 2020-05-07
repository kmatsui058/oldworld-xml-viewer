
declare namespace XmlMapClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  zScriptType?: ZType;
  zHelp: ZType | string;
  bRandom: ZType | string;
  bHidden?: ZType;
  bGameOfTheWeek?: ZType;
}
export interface ZType {
}

}
