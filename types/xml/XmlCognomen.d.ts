
declare namespace XmlCognomen {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  GenderedNames: GenderedNames;
  iLegitimacy?: ZType | string;
  iMinValue?: ZType | string;
  Achievement?: ZType | string;
  aiStatValue?: AiStatValue;
}
export interface AiStatValue {
  Pair?: Pair2[] | Pair2;
}
export interface Pair2 {
  zIndex: string;
  iValue: string;
}
export interface GenderedNames {
  Pair?: Pair;
}
export interface Pair {
  First: string;
  Second: string;
}
export interface ZType {
}

}
