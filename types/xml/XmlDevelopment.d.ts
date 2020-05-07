
declare namespace XmlDevelopment {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  zHelp: ZType | string;
  iCities: ZType | string;
  iCapitalPopulation: ZType | string;
  iTechs: ZType | string;
  iAdjacentChange: ZType | string;
  iDistantChange: ZType | string;
  iLoneOpponentChange: ZType | string;
  aiMapSizeChange: AiMapSizeChange;
}
export interface AiMapSizeChange {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
