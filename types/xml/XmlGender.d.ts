
declare namespace XmlGender {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  bMasculine: ZType | string;
  iMaxFertile: ZType | string;
  GeneralFormation: ZType | string;
  zLeaderTitle: ZType | string;
}
export interface ZType {
}

}
