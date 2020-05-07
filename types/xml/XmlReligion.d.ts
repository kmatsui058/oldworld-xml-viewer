
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
  zIconName: ZType | string;
  iCostBase: ZType | string;
  iCostPerCity?: ZType;
  iCostPerChange: ZType | string;
  iSpreadThreshold: ZType | string;
  iRequiresCitizens?: ZType | string;
  EffectCity: ZType | string;
  EffectPlayerState: ZType | string;
  EffectPlayerUpkeep: ZType | string;
  RequiresTech?: ZType | string;
  SpreadUnit: ZType | string;
  aiRequiresImprovement?: ZType;
  aiRequiresImprovementClass?: ZType;
  aiRequiresSpecialist?: AiRequiresSpecialist;
  aiRequiresSpecialistClass?: AiRequiresSpecialist;
  aiRequiresReligion?: AiRequiresSpecialist;
}
export interface AiRequiresSpecialist {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
