
declare namespace XmlGameOptionPreset {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  zHelp?: ZType | string;
  TurnScale?: ZType | string;
  EventLevel?: ZType | string;
  Mortality?: ZType | string;
  Archetype?: ZType | string;
  SuccessionGender?: ZType | string;
  SuccessionOrder?: ZType | string;
  VictoriesDisabled?: VictoriesDisabled;
  Options?: Options;
}
export interface Options {
  zValue?: string[] | string;
}
export interface VictoriesDisabled {
  zValue?: string;
}
export interface ZType {
}

}
