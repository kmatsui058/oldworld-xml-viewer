
declare namespace XmlCognomen {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  bGeneric?: ZType | string;
  iLegitimacyActive?: ZType | string;
  iLegitimacyLegacy?: ZType | string;
  iMinValue?: ZType | string;
  aiStatValue?: AiStatValue;
}
export interface AiStatValue {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
