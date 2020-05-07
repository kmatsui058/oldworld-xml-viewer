
declare namespace XmlCityName {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  azNationAdjectivesMale?: AzNationAdjectivesMale;
  azNationAdjectivesFemale?: AzNationAdjectivesMale;
}
export interface AzNationAdjectivesMale {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  zValue: string;
}
export interface ZType {
}

}
