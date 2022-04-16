
declare namespace XmlFamily {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  NameFemale: ZType | string;
  TeamColor: ZType | string;
  iColorIndex: ZType | string;
  FamilyClass: ZType | string;
  abNation: AbNation;
}
export interface AbNation {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  bValue: string;
}
export interface ZType {
}

}
