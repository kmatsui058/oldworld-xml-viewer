
declare namespace XmlReligion {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  GenderedNames: GenderedNames;
  zIconName: ZType | string;
  HeadTitle?: ZType;
  iCostBase: ZType | string;
  iCostPerCity?: ZType;
  iCostPerChange: ZType | string;
  iSpreadPercent?: ZType | string;
  iRequiresCitizens?: ZType | string;
  bDisabled?: ZType;
  Achievement: ZType | string;
  EffectCity: ZType | string;
  EffectPlayerState: ZType | string;
  EffectPlayerUpkeep?: ZType | string;
  PaganNation?: ZType | string;
  RequiresReligion?: ZType | string;
  RequiresTech?: ZType | string;
  SpreadUnit?: ZType | string;
  aiRequiresImprovement?: ZType;
  aiRequiresImprovementClass?: ZType;
  aiRequiresSpecialist?: AiRequiresSpecialist;
  aiRequiresSpecialistClass?: AiRequiresSpecialist;
  aiRequiresReligion?: AiRequiresReligion;
}
export interface AiRequiresReligion {
  Pair?: Pair2[] | Pair2;
}
export interface AiRequiresSpecialist {
  Pair?: Pair2;
}
export interface Pair2 {
  zIndex: string;
  iValue: string;
}
export interface GenderedNames {
  Pair?: Pair;
}
export interface Pair {
  First: string;
  Second: string;
}
export interface ZType {
}

}
