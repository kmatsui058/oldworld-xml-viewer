
declare namespace XmlOpinionTribe {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Color: ZType | string;
  iThreshold?: ZType | string;
  iAlliancePercent?: ZType | string;
  iPeacePercent?: ZType | string;
  iTrucePercent?: ZType | string;
  iWarPercent?: ZType | string;
  iRaidDistModifier?: ZType | string;
  iMercenaryCostModifier?: ZType | string;
}
export interface ZType {
}

}
