
declare namespace XmlPing {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  PingAsset: ZType | string;
  zIconName: ZType | string;
  zLogText: ZType | string;
  iMPTurnDuration: ZType | string;
  iSPTurnDuration?: ZType;
  iMaxNumber?: ZType | string;
  bFound?: ZType | string;
  bTextInput?: ZType | string;
}
export interface ZType {
}

}
