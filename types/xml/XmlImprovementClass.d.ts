
declare namespace XmlImprovementClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  iMaxCultureCount?: ZType | string;
  iAdjacentDiscount?: ZType | string;
  bNoAdjacent?: ZType | string;
  TechPrereq?: ZType | string;
  EffectCity?: ZType | string;
  SpecialistClass?: ZType | string;
  abResourceValid?: AbResourceValid;
  aeTheologyCityEffect?: AeTheologyCityEffect;
  aeResourceCityEffect?: AeTheologyCityEffect;
  aaiResourceYieldOutput?: AaiResourceYieldOutput;
}
export interface AaiResourceYieldOutput {
  Pair?: Pair3[] | Pair22[] | Pair22;
}
export interface Pair22 {
  zIndex: string;
  SubPair: SubPair[];
}
export interface Pair3 {
  zIndex: string;
  SubPair: SubPair | SubPair[];
}
export interface SubPair {
  zSubIndex: string;
  iValue: string;
}
export interface AeTheologyCityEffect {
  Pair?: Pair2[];
}
export interface Pair2 {
  zIndex: string;
  zValue: string;
}
export interface AbResourceValid {
  Pair?: Pair | Pair[];
}
export interface Pair {
  zIndex: string;
  bValue: string;
}
export interface ZType {
}

}
