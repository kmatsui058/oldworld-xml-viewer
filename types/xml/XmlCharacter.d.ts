
declare namespace XmlCharacter {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Gender?: ZType | string;
  FirstName?: ZType | string;
  Nation?: ZType | string;
  Father?: ZType | string;
  Mother?: ZType | string;
  Spouse?: ZType | string;
  Portrait?: ZType | string;
  CharacterSelectPortrait?: ZType | string;
  CharacterSelectBackgroundColor?: ZType;
  iAge?: ZType | string;
  iRating?: ZType | string;
  bInfertile?: ZType | string;
  bSuitorTemp?: ZType | string;
  aeTraits?: AeTraits;
  aeRelationships?: AeRelationships;
}
export interface AeRelationships {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  zValue: string;
}
export interface AeTraits {
  zValue?: string[] | string;
}
export interface ZType {
}

}
