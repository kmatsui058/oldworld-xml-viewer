
declare namespace XmlTheology {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  zIconName: ZType | string;
  iPrereqCount: ZType | string;
  iColumn: ZType | string;
  iRow: ZType | string;
  iCost: ZType | string;
  abPrereqTheology?: AbPrereqTheology;
}
export interface AbPrereqTheology {
  Pair?: Pair | Pair[];
}
export interface Pair {
  zIndex: string;
  bValue: string;
}
export interface ZType {
}

}
