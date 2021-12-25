
declare namespace XmlGrammaticalGender {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  NameShort: ZType | string;
}
export interface ZType {
}

}
