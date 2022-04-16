
declare namespace XmlTribe {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  GenderedNames?: GenderedNames;
  Help?: ZType | string;
  TeamColor: ZType | string;
  iLatitude?: ZType | string;
  bDiplomacy?: ZType | string;
  bMercenary?: ZType | string;
  bPersistent?: ZType | string;
  bWaterMove?: ZType | string;
  Crest: ZType | string;
  Diplomacy: ZType | string;
  aeFirstNamesMale?: AeFirstNamesMale;
  aeFirstNamesFemale?: AeFirstNamesMale;
  Nicknames?: Nicknames;
  zPortraitBackground: ZType | string;
  zCharacterPortraitBackground?: ZType | string;
  aeCharacterPortraits?: AeFirstNamesMale;
}
export interface Nicknames {
  Pair?: Pair[];
}
export interface AeFirstNamesMale {
  zValue?: string[];
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
