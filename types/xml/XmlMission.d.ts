
declare namespace XmlMission {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  NamePlus?: ZType | string;
  iCost?: ZType | string;
  iXP?: ZType | string;
  iMissionTurns?: ZType | string;
  iMinDiplomacyTurnsTurns?: ZType | string;
  bVisibleCharacter?: ZType | string;
  bVisibleTarget?: ZType | string;
  bVisibleAlways?: ZType | string;
  bNoPopup?: ZType | string;
  bHighlight?: ZType | string;
  SubjectCharacter: ZType | string;
  SubjectCharacterPlayer?: ZType | string;
  SubjectTarget?: ZType | string;
  SubjectRelation?: ZType | string;
  aiResultDie: AiResultDie;
  aiYieldCost?: AiYieldCost;
}
export interface AiYieldCost {
  Pair?: Pair;
}
export interface AiResultDie {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
