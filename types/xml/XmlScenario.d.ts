
declare namespace XmlScenario {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  zMapFile: ZType | string;
  zMapScript: ZType | string;
  Nation: ZType | string;
  abOpponents?: AbOpponents;
  abBarbarians: AbBarbarians;
}
export interface AbBarbarians {
  Pair?: Pair[];
}
export interface AbOpponents {
  Pair?: Pair | Pair[];
}
export interface Pair {
  zIndex: string;
  bValue: string;
}
export interface ZType {
}

}
