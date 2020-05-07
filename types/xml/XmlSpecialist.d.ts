
declare namespace XmlSpecialist {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zIconName: ZType | string;
  Class: ZType | string;
  iCivics: ZType | string;
  bUpgrade?: ZType | string;
  SpecialistPrereq?: ZType | string;
  EffectCity?: ZType | string;
  EffectCityExtra: ZType | string;
  aiYieldCost?: AiYieldCost;
  aiImprovementModifier?: AiYieldCost;
}
export interface AiYieldCost {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
