
declare namespace XmlDifficultyMode {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  Difficulty?: ZType | string;
  Development?: ZType | string;
  BarbarianLevel?: ZType | string;
}
export interface ZType {
}

}
