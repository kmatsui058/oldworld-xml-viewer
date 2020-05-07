
declare namespace XmlTrait {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zIconName?: ZType | string;
  iAdjectiveDie?: ZType | string;
  iNoFamilyDie?: ZType | string;
  iBarbDie?: ZType | string;
  iInjuryDie?: ZType | string;
  iAdultProb?: ZType | string;
  iDieProb?: ZType | string;
  iRemoveProb?: ZType | string;
  iOpinion?: ZType | string;
  iBirthModifier?: ZType | string;
  bArchetype?: ZType | string;
  bAdjective?: ZType | string;
  bUpgrade?: ZType | string;
  bNoEvents?: ZType | string;
  bNoMarry?: ZType | string;
  bNoBirth?: ZType | string;
  bNoHeir?: ZType | string;
  bNoJob?: ZType | string;
  bGovernorPrereq?: ZType | string;
  bGeneralPrereq?: ZType | string;
  bRemoveLeader?: ZType | string;
  LeaderEffectPlayer?: ZType | string;
  GovernorEffectCity?: ZType | string;
  GeneralEffectUnit?: ZType | string;
  LeaderEffectUnit?: ZType | string;
  Cognomen?: ZType | string;
  aiRating?: AiRating;
  aiTraitProb?: AiTraitProb;
  aiMortalityDieProb?: AiMortalityDieProb;
  aiDecadeProb?: AiDecadeProb;
  abSkipDecade?: AbSkipDecade;
  aeTraitInvalid?: AeTraitInvalid;
  aePositiveRating?: AePositiveRating;
  aeNegativeRating?: AePositiveRating;
}
export interface AePositiveRating {
  zValue?: string;
}
export interface AeTraitInvalid {
  zValue?: string[] | string;
}
export interface AbSkipDecade {
  Pair?: Pair2;
}
export interface Pair2 {
  zIndex: string;
  bValue: string;
}
export interface AiDecadeProb {
  iValue?: string[];
}
export interface AiMortalityDieProb {
  Pair?: Pair[];
}
export interface AiTraitProb {
  Pair?: Pair;
}
export interface AiRating {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
