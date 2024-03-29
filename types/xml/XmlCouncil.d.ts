
declare namespace XmlCouncil {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zIconName: ZType | string;
  GenderedNames: GenderedNames;
  TechPrereq: ZType | string;
  iXP: ZType | string;
  iOpinion: ZType | string;
  bDisable?: ZType;
  EffectPlayer?: ZType | string;
  AssignMission: ZType | string;
  aiPlayerOpinion?: AiPlayerOpinion;
  aiTribeOpinion?: AiPlayerOpinion;
  aiReligionOpinion?: AiPlayerOpinion;
  aiFamilyOpinion?: AiPlayerOpinion;
  abTraitPrereq: AbTraitPrereq;
  aaiRatingYieldGlobal?: AaiRatingYieldGlobal;
  aaiRatingYieldCity: AaiRatingYieldCity;
}
export interface AaiRatingYieldCity {
  Pair?: Pair4;
}
export interface AaiRatingYieldGlobal {
  Pair?: Pair4[];
}
export interface Pair4 {
  zIndex: string;
  SubPair: SubPair;
}
export interface SubPair {
  zSubIndex: string;
  iValue: string;
}
export interface AbTraitPrereq {
  Pair?: Pair3[];
}
export interface Pair3 {
  zIndex: string;
  bValue: string;
}
export interface AiPlayerOpinion {
  Pair?: Pair2;
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
