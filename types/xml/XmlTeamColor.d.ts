
declare namespace XmlTeamColor {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  TeamPlayerColor: ZType | string;
  aePlayerColors: AePlayerColors;
  aeBorderPatterns: AePlayerColors;
}
export interface AePlayerColors {
  zValue?: string[];
}
export interface ZType {
}

}
