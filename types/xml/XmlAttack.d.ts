
declare namespace XmlAttack {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  ePattern: ZType | string;
}
export interface ZType {
}

}
