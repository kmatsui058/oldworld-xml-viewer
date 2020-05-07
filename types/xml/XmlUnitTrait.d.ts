
declare namespace XmlUnitTrait {
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
  iRiverAttackModifier?: ZType | string;
  iUrbanAttackModifier?: ZType | string;
  iUrbanDefenseModifier?: ZType | string;
  iAITargetPercent?: ZType | string;
}
export interface ZType {
}

}
