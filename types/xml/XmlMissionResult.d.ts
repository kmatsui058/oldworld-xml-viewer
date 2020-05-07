
declare namespace XmlMissionResult {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Description?: ZType | string;
  bIgnoreTest?: ZType;
  bTestEnabled?: ZType | string;
  TargetBonus?: ZType | string;
  EventTrigger?: ZType | string;
  aiRatingModifier?: AiRatingModifier;
}
export interface AiRatingModifier {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
