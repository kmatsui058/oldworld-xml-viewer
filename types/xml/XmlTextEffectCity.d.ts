
declare namespace XmlTextEffectCity {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  'en-US': ZType | string;
}
export interface ZType {
}

}
