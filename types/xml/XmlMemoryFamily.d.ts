
declare namespace XmlMemoryFamily {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zText?: ZText | string;
  MemoryLevel?: ZType | string;
  iValue?: ZText;
  iTurns?: ZText;
  bName?: ZText;
  beginGroup?: string;
}
export interface ZText {
  comment: string;
}
export interface ZType {
}

}
