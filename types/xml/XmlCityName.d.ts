
declare namespace XmlCityName {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  GrammaticalGenders?: ZType;
}
export interface ZType {
}

}
