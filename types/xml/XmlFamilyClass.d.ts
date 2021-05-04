
declare namespace XmlFamilyClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zUnitWidget: ZType | string;
  zCityWidget: ZType | string;
  zCharacterPortraitBackground: ZType | string;
  Crest: ZType | string;
  SeatCrest: ZType | string;
  iLeaderHeirOpinion?: ZType;
  iLeaderSpouseOpinion?: ZType;
  iHeirSpouseOpinion?: ZType;
  iDescendantSpouseOpinion?: ZType;
  iLeaderNotAdultOpinion?: ZType | string;
  iLeaderUnmarriedOpinion?: ZType | string;
  iLeaderTribeSpouseOpinion?: ZType | string;
  iNoCouncilOpinion?: ZType | string;
  iLuxuryOpinion?: ZType | string;
  iWonderOpinion?: ZType | string;
  iHolyCityOpinion?: ZType;
  iPopulationOpinion?: ZType | string;
  iLargestMilitaryOpinion?: ZType | string;
  iSmallestMilitaryOpinion?: ZType | string;
  iMostCitiesOpinion?: ZType | string;
  iFewestCitiesOpinion?: ZType | string;
  iNoReligionOpinion?: ZType | string;
  iConnectedOpinion?: ZType | string;
  iCityDamagedOpinion?: ZType | string;
  iCityDefendedOpinion?: ZType | string;
  iPillagedOpinion?: ZType | string;
  iUnitInsideOpinion?: ZType | string;
  iHostileUnitOpinion?: ZType | string;
  bPrefersDistant?: ZType | string;
  EffectUnit?: ZType | string;
  EffectCity: ZType | string;
  SeatEffectCity: ZType | string;
  SeatFoundBonus: ZType | string;
  FoundBonus?: ZType | string;
  aiDowryYieldBase: AiDowryYieldBase;
  aiDowryYieldPer: AiDowryYieldBase;
  aiLuxuryMissingOpinion: AiLuxuryMissingOpinion;
  aiLawOpinion: AiLawOpinion;
  aiTraitDie: AiLuxuryMissingOpinion;
  aeLuxuryEffectCity: AeLuxuryEffectCity;
}
export interface AeLuxuryEffectCity {
  Pair?: Pair2[];
}
export interface Pair2 {
  zIndex: string;
  zValue: string;
}
export interface AiLawOpinion {
  Pair?: Pair[] | Pair;
}
export interface AiLuxuryMissingOpinion {
  Pair?: Pair[];
}
export interface AiDowryYieldBase {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
