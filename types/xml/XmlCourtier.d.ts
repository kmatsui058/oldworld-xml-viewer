
declare namespace XmlCourtier {
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
  aiRatingBase: AiRatingBase;
  aiRatingRand: AiRatingBase;
  aiAdjectiveDie: AiAdjectiveDie;
  aiArchetypeDie: AiAdjectiveDie;
  Nicknames: Nicknames;
}
export interface Nicknames {
  Pair?: Pair[];
}
export interface AiAdjectiveDie {
  Pair?: Pair2[];
}
export interface AiRatingBase {
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
