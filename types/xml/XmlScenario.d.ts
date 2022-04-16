
declare namespace XmlScenario {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  SubTitle: ZType | string;
  ScenarioClass?: ZType | string;
  zIcon?: ZType | string;
  bPublic: ZType | string;
  zMapFile?: ZType | string;
  bAllowMap?: ZType | string;
  zMapScript?: ZType;
  zModName?: ZType | string;
  azAchievements?: AzAchievements;
  bContinue?: ZType | string;
  Prereq?: ZType | string;
  Nation?: ZType | string;
  TeamNation?: ZType | string;
  Difficulty?: ZType | string;
  Archetype?: ZType;
  TurnScale?: ZType | string;
  TurnStyle?: ZType | string;
  TurnTimer?: ZType | string;
  OpponentLevel?: ZType | string;
  DevelopmentLevel?: ZType | string;
  AdvantageLevel?: ZType | string;
  TribeLevel?: ZType | string;
  SuccessionGender?: ZType | string;
  SuccessionOrder?: ZType | string;
  MortalityLevel?: ZType | string;
  EventLevel?: ZType | string;
  DisableOptions?: ZType | string;
  VictoryEnabled?: VictoryEnabled;
  OptionValid?: VictoryEnabled;
  MapSizeDisabled?: VictoryEnabled;
  DifficultyDisabled?: VictoryEnabled;
  TribeLevelDisabled?: TribeLevelDisabled;
  ParametersInvalid?: AzAchievements;
}
export interface TribeLevelDisabled {
  zValue?: string;
}
export interface VictoryEnabled {
  zValue?: string[];
}
export interface AzAchievements {
  zValue?: string[] | string;
}
export interface ZType {
}

}
