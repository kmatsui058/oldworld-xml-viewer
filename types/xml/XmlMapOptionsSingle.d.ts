
declare namespace XmlMapOptionsSingle {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zDescription: ZType | string;
  bDefault?: ZType | string;
  bSinglePlayerValid?: ZType | string;
  bMultiPlayerValid?: ZType | string;
}
export interface ZType {
}

}
