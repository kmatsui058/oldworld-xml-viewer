
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
  iAvgCities?: ZType | string;
  iMaxCities?: ZType | string;
  iCapitalPopulation?: ZType | string;
  iTechs?: ZType | string;
  iLoneOpponentChange?: ZType | string;
}
export interface ZType {
}

}
