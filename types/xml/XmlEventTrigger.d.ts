
declare namespace XmlEventTrigger {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  eDataAllowed?: ZType | string;
  iProb?: IProb | string;
  bModal?: IProb | string;
}
export interface IProb {
  comment: string;
}
export interface ZType {
}

}
