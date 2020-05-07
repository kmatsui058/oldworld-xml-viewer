
declare namespace XmlFamilyClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  zCharacterPortraitBackground: ZType | string;
  Crest: ZType | string;
  SeatCrest: ZType | string;
  iFoundCostBase?: ZType;
  iFoundCostPer?: ZType;
  iOurGovernorUs?: ZType;
  iTheirGovernorUs?: ZType;
  iOurGovernorThem?: ZType;
  iLeaderHeirOpinion?: ZType | string;
  iLeaderSpouseOpinion?: ZType | string;
  iDescendantSpouseOpinion?: ZType | string;
  iLeaderNotAdultOpinion?: ZType | string;
  iLeaderUnmarriedOpinion?: ZType | string;
  iLeaderBarbarianSpouseOpinion?: ZType | string;
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
  iNotConnectedOpinion?: ZType | string;
  iCityDamagedOpinion?: ZType | string;
  iCityDefendedOpinion?: ZType | string;
  iPillagedOpinion?: ZType | string;
  iUnitInsideOpinion?: ZType | string;
  iHostileUnitOpinion?: ZType | string;
  EffectCity: ZType | string;
  SeatEffectCity: ZType | string;
  SeatFoundBonus: ZType | string;
  FoundBonus?: ZType | string;
  aiDowryYieldBase: AiDowryYieldBase;
  aiDowryYieldPer: AiDowryYieldBase;
  aiLuxuryMissingOpinion?: AiDowryYieldBase;
  aiLawOpinion: AiLawOpinion;
  aiStateTheologyOpinion?: AiDowryYieldBase;
  aiTheologyOpinion?: AiDowryYieldBase;
  aiTraitDie: AiLawOpinion;
}
export interface AiLawOpinion {
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
