
declare namespace XmlCouncil {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  zIconName: ZType | string;
  TechPrereq: ZType | string;
  iXP: ZType | string;
  iOpinion: ZType | string;
  AssignMission: ZType | string;
  aiPlayerOpinion?: AiPlayerOpinion;
  aiBarbarianOpinion?: AiPlayerOpinion;
  aiFamilyOpinion?: AiPlayerOpinion;
  abTraitPrereq: AbTraitPrereq;
  aaiRatingYieldRate?: AaiRatingYieldRate;
}
export interface AaiRatingYieldRate {
  Pair?: Pair3[];
}
export interface Pair3 {
  zIndex: string;
  SubPair: SubPair;
}
export interface SubPair {
  zSubIndex: string;
  iValue: string;
}
export interface AbTraitPrereq {
  Pair?: Pair2[];
}
export interface Pair2 {
  zIndex: string;
  bValue: string;
}
export interface AiPlayerOpinion {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
