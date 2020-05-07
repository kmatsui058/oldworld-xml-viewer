
declare namespace XmlNation {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  TeamColor: ZType | string;
  Crest: ZType | string;
  zAttackPortraitName: ZType | string;
  zCharacterPortraitBackground: ZType | string;
  CapitalAsset: ZType | string;
  CityAsset: ZType | string;
  UrbanAsset: ZType | string;
  Founder: ZType | string;
  FirstRuler: ZType | string;
  FirstBuild: ZType | string;
  EffectPlayer: ZType | string;
  MapElementNames: ZType | string;
  iFirstBuildPercent: ZType | string;
  bShowSurname?: ZType | string;
  aiStartUnit: AiStartUnit;
  aiStartYield?: AiStartUnit;
  aeStartingTech: AeStartingTech;
  aeStartingLaw: AeStartingLaw;
  aeFirstNamesMale: AeStartingTech;
  aeFirstNamesFemale: AeStartingTech;
  aeCityNames: AeStartingTech;
  aeCharacterPortraits: AeStartingTech;
  zStory: ZType | string;
}
export interface AeStartingLaw {
  Pair?: Pair2;
}
export interface Pair2 {
  zIndex: string;
  zValue: string;
}
export interface AeStartingTech {
  zValue?: string[];
}
export interface AiStartUnit {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
