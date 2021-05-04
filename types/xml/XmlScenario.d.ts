
declare namespace XmlScenario {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  zSubTitle?: ZType;
  zIcon?: ZType;
  zMapFile?: ZType | string;
  bAllowMap?: ZType | string;
  zMapScript?: ZType;
  zModName: ZType | string;
  zAchievement?: ZType | string;
  bContinue?: ZType | string;
  Prereq?: ZType | string;
  Nation?: ZType | string;
  abOpponents?: ZType;
  abTribes?: ZType;
  abOptionEnabled?: ZType;
  abOptionValid?: AbOptionValid;
  azParametersInvalid?: AzParametersInvalid;
}
export interface AzParametersInvalid {
  zValue?: string[];
}
export interface AbOptionValid {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  bValue: string;
}
export interface ZType {
}

}
