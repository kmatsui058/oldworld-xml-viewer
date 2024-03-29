
declare namespace XmlGameOption {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  zHelp: ZType | string;
  EffectPlayer?: ZType | string;
  bDefaultSinglePlayer?: ZType;
  bDefaultMultiPlayer?: ZType | string;
  bSinglePlayer?: ZType | string;
  bMultiPlayer?: ZType | string;
  bDebug?: ZType;
  abDisableWhenActive?: AbDisableWhenActive;
}
export interface AbDisableWhenActive {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  bValue: string;
}
export interface ZType {
}

}
