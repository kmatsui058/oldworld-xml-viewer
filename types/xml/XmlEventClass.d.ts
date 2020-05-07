
declare namespace XmlEventClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  iPlayerProb?: ZType | string;
  iCharacterProb?: ZType | string;
  iMinTurns?: ZType | string;
  iMinRepeat?: ZType | string;
}
export interface ZType {
}

}
