
declare namespace XmlEventStory {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | Name2 | string;
  Text?: ZType | Name2 | string;
  zBackgroundName?: ZType | string;
  zEventURL?: ZType | Name2 | string;
  zAudioTrigger?: ZType | Name2 | string;
  zEventAuthor?: ZType | Name2 | string;
  aeSubjects: AeSubjects;
  SubjectRepeatTurns?: SubjectRepeatTurns;
  SubjectExtras?: SubjectExtras;
  SubjectRelations?: SubjectRelations;
  aeBonuses?: AeSubjects;
  aeOptions: AeSubjects;
  Class?: ZType | Name2 | string;
  Trigger?: ZType | Name2 | string;
  TriggerData?: ZType | Name2 | string;
  iTriggerSubject?: ZType | Name2 | string;
  iTriggerExtra?: ZType | Name2 | string;
  iImageSubject?: ZType | Name2 | string;
  iImageExtra?: IImageExtra;
  EventLinkPrereq?: ZType | Name2 | string;
  iEventLinkTurns?: ZType | Name2 | string;
  TechPrereq?: ZType | Name2 | string;
  TechInvalid?: ZType | Name2 | string;
  LawPrereq?: ZType | Name2 | string;
  CouncilInvalid?: ZType | Name2 | string;
  iMinLeader?: ZType | Name2 | string;
  iMinTurns?: ZType | Name2 | string;
  iPriority?: ZType | Name2 | string;
  iWeight: ZType | Name2 | string;
  iProb?: ZType | Name2 | string;
  iRepeatTurns?: ZType | Name2 | string;
  bHidePrereqs?: ZType | Name2 | string;
  bNoCharacters?: ZType | Name2 | string;
  bModal?: ZType | Name2 | string;
  bAllOptions?: IImageExtra;
  bIgnoreOptions?: ZType | Name2 | string;
  bTutorial?: ZType | Name2 | string;
  aiMortalitySkipProb?: AiMortalitySkipProb;
  aeLawInvalid?: AeSubjects;
  aeEventStoryNoRepeat?: AeSubjects;
  beginGroup?: string;
}
export interface AiMortalitySkipProb {
  comment?: string;
  Pair?: Pair2[];
}
export interface Pair2 {
  zIndex: string;
  iValue: string;
}
export interface IImageExtra {
  comment?: string;
}
export interface SubjectRelations {
  comment?: string;
  Triple?: Triple | Triple[];
}
export interface Triple {
  First: string;
  Second: string;
  Third: string;
}
export interface SubjectExtras {
  comment?: string;
  Pair?: Pair[] | Pair;
}
export interface SubjectRepeatTurns {
  comment?: string;
  Pair?: Pair;
}
export interface Pair {
  First: string;
  Second: string;
}
export interface AeSubjects {
  comment?: string;
  zValue?: string[] | string;
}
export interface Name2 {
  comment: string;
}
export interface ZType {
}

}
