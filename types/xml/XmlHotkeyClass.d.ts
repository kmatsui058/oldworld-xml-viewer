
declare namespace XmlHotkeyClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  bPopupValid?: ZType | string;
  bMapEditor?: ZType | string;
}
export interface ZType {
}

}
