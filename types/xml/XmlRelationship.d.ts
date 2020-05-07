
declare namespace XmlRelationship {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  iOpinion: ZType | string;
  aeInvalidateRelationship?: AeInvalidateRelationship;
}
export interface AeInvalidateRelationship {
  zValue?: string[];
}
export interface ZType {
}

}
