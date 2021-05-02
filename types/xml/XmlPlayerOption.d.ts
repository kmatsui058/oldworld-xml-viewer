
declare namespace XmlPlayerOption {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  zDesc: ZType | string;
  bGameplay?: ZType | string;
  bDebug?: ZType | string;
}
export interface ZType {
}

}
