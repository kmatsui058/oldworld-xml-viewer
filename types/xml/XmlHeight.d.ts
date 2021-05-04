
declare namespace XmlHeight {
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
  iMovementCost?: ZType | string;
  iRangeChange?: ZType | string;
  iRevealChange?: ZType | string;
  iBuildChange?: ZType | string;
  iBorderValue?: ZType | string;
  iLandValueAdjacent?: ZType | string;
  bNoVegetation?: ZType | string;
  bImpassable?: ZType | string;
  bCitySite?: ZType | string;
  bRangedAttackBlock?: ZType | string;
  Color?: ZType | string;
  aiDefendEffectUnit?: AiDefendEffectUnit;
}
export interface AiDefendEffectUnit {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
