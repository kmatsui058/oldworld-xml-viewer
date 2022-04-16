
declare namespace XmlStat {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  iMin?: IMin;
  iMax?: IMin;
}
export interface IMin {
  comment: string;
}
export interface ZType {
}

}
