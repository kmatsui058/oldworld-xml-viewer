
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
  GenderedNames?: GenderedNames;
  Description?: ZType | string;
  Title?: ZType | string;
  Nickname?: ZType | string;
  GenderedNicknames?: GenderedNames;
  GainTexts?: GainTexts;
  LoseTexts?: GainTexts;
  zIconName?: ZType | string;
  iMinAge?: ZType | string;
  iAdjectiveDie?: ZType | string;
  iNoFamilyDie?: ZType | string;
  iBarbDie?: ZType | string;
  iInjuryDie?: ZType | string;
  iAdultProb?: ZType | string;
  iDieProb?: ZType | string;
  iRemoveProb?: ZType | string;
  iOpinion?: ZType | string;
  iOpinionSame?: ZType | string;
  iOpinionFamily?: ZType | string;
  iOpinionReligion?: ZType | string;
  iOpinionProximity?: ZType | string;
  iOpinionStrength?: ZType | string;
  iOpinionKnowledge?: ZType | string;
  iOpinionGenerals?: ZType | string;
  iOpinionGovernors?: ZType | string;
  iOpinionWonders?: ZType | string;
  iOpinionLaws?: ZType | string;
  iOpinionCognomen?: ZType | string;
  iOpinionTrades?: ZType | string;
  iAgentModifier?: ZType | string;
  iBirthModifier?: ZType | string;
  iFamilyHeadModifier?: ZType | string;
  iReligionHeadModifier?: ZType | string;
  iTribeAllianceModifier?: ZType | string;
  iAllianceModifier?: ZType | string;
  iPeaceModifier?: ZType | string;
  iTruceModifier?: ZType | string;
  iWarModifier?: ZType | string;
  bArchetype?: ZType | string;
  bStrength?: ZType | string;
  bWeakness?: ZType | string;
  bForceNickname?: ZType | string;
  bDisplay?: ZType | string;
  bUpgrade?: ZType | string;
  bNoEvents?: ZType | string;
  bNoMissions?: ZType | string;
  bNoMarry?: ZType | string;
  bNoSpouse?: ZType | string;
  bNoBirth?: ZType | string;
  bNoSuccession?: ZType | string;
  bNoSuccessionChildren?: ZType | string;
  bDoBypass?: ZType | string;
  bNoJob?: ZType | string;
  bNoCourtier?: ZType | string;
  bNoFamilyHead?: ZType | string;
  bNoReligionHead?: ZType | string;
  bNoReligion?: ZType;
  bGeneralPrereq?: ZType | string;
  bGeneralAll?: ZType;
  bGovernorPrereq?: ZType | string;
  bGovernorAll?: ZType;
  bAgentPrereq?: ZType | string;
  bRemoveLeader?: ZType | string;
  bRemoveDeath?: ZType | string;
  bDoomed?: ZType | string;
  bGiveBirth?: ZType;
  LeaderEffectPlayer?: ZType | string;
  GovernorEffectCity?: ZType | string;
  GeneralEffectUnit?: ZType | string;
  LeaderEffectUnit?: ZType | string;
  AdjacentEffectUnit?: ZType;
  MemoryCharacter?: ZType | string;
  Religion?: ZType;
  aiRating?: AiRating;
  aiTraitOpinion?: AiTraitOpinion;
  aiTraitProb?: AiRating;
  aiReligionOpinion?: ZType;
  aiFamilyClassOpinion?: AiTraitOpinion;
  aiLawOpinion?: AiRating;
  aiMortalityDieProb?: AiMortalityDieProb;
  aiDecadeProb?: AiDecadeProb;
  aeTraitInvalid?: GainTexts;
  aePositiveRating?: AePositiveRating;
  aeNegativeRating?: AePositiveRating;
}
export interface AePositiveRating {
  zValue?: string;
}
export interface AiDecadeProb {
  iValue?: string[];
}
export interface AiMortalityDieProb {
  Pair?: Pair2[];
}
export interface AiTraitOpinion {
  Pair?: Pair2;
}
export interface AiRating {
  Pair?: Pair2[] | Pair2;
}
export interface Pair2 {
  zIndex: string;
  iValue: string;
}
export interface GainTexts {
  zValue?: string[] | string;
}
export interface GenderedNames {
  Pair?: Pair;
}
export interface Pair {
  First: string;
  Second: string;
}
export interface ZType {
}

}
