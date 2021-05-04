
declare namespace XmlKnowledge {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  iPercent?: ZType | string;
}
export interface ZType {
}

}
