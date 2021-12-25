
declare namespace XmlTextCharacter {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  'en-US': ZType | string;
  comment?: string;
}
export interface ZType {
}

}
