
declare namespace XmlOpponentLevel {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  iWarModifier?: ZType | string;
  iWarMinTurn?: ZType | string;
}
export interface ZType {
}

}
