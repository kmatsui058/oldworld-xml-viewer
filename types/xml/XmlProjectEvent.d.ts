
declare namespace XmlProjectEvent {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zIcon: ZType | string;
  ProjectAsset?: ZType;
  iCivics?: ZType;
  iMaxCount?: ZType;
  iFree?: ZType;
  iFirstFree?: ZType;
  iRemoveProb?: ZType;
  iHealHP?: ZType;
  iExtraPopRequired?: ZType;
  bHidden: ZType | string;
  bRepeat?: ZType;
  bNoHurry?: ZType;
  bRequiresRiver?: ZType;
  bRequiresCoast?: ZType;
  bRequiresDamage?: ZType;
  bCaptureDestroy?: ZType;
  Bonus?: ZType;
  CityProject: ZType | string;
  EffectCity: ZType | string;
  EffectCityExtra?: ZType;
  MinimumCulture?: ZType;
  RequiresCulture?: ZType;
  TechPrereq?: ZType;
  ProjectPrereq?: ZType;
  EffectCityPrereq?: ZType;
  EffectPlayerPrereq?: ZType;
  CapitalEffectPlayerPrereq?: ZType;
  Stat?: ZType;
  aiYieldCost?: ZType;
  aiYieldModifier?: ZType;
  abInvalidBy?: ZType;
}
export interface ZType {
}

}
