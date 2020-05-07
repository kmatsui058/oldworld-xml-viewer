
declare namespace XmlWarState {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  iThreshold?: ZType | string;
}
export interface ZType {
}

}
