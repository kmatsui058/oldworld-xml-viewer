
declare namespace XmlSubjectTextVar {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zTag: ZType | string;
  SubjectClass: ZType | string;
  DefaultText: ZType | string;
  Subjects: Subjects;
}
export interface Subjects {
  Pair?: Pair[];
}
export interface Pair {
  First: string;
  Second: string;
}
export interface ZType {
}

}
