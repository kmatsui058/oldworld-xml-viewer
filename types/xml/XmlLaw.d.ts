
declare namespace XmlLaw {
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
  iCostBase: ZType | string;
  iCostPerCity: ZType | string;
  iCostPerChange: ZType | string;
  LawClass: ZType | string;
  EffectPlayer?: ZType | string;
  EffectPlayerUpkeep?: ZType | string;
  SuccessionOrder?: ZType | string;
  SuccessionGender?: ZType;
}
export interface ZType {
}

}
