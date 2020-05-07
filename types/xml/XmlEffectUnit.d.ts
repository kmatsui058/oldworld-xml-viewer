
declare namespace XmlEffectUnit {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zIconName: ZType | string;
  iStrengthModifier?: ZType | string;
  iDefenseModifier?: ZType | string;
  iCriticalChance?: ZType | string;
  iVisionExtra?: ZType | string;
  iMovementExtra?: ZType | string;
  iFatigueExtra?: ZType | string;
  iRangeExtra?: ZType | string;
  iRiverAttackModifier?: ZType | string;
  iSettlementAttackModifier?: ZType | string;
  iUrbanAttackModifier?: ZType | string;
  iDamagedModifier?: ZType | string;
  iBarbarianModifier?: ZType | string;
  iAdjacentEffectDefenseModifier?: ZType | string;
  iHealExtra?: ZType | string;
  iHealAlways?: ZType | string;
  bRout?: ZType | string;
  bIgnoresDistance?: ZType | string;
  bLaunchOffensive?: ZType | string;
  aiTerrainModifier?: AiTerrainModifier;
  aiHeightModifier?: AiTerrainModifier;
  aiVegetationModifier?: AiTerrainModifier;
  aiUnitTraitModifier?: AiTerrainModifier;
  aiUnitTraitModifierAttack?: ZType;
  aiUnitTraitModifierDefense?: ZType;
  aiUnitTraitModifierMelee?: ZType;
  abHideVegetation?: AbHideVegetation;
  abUnitTraitValid?: AbUnitTraitValid;
}
export interface AbUnitTraitValid {
  Pair?: Pair2 | Pair2[];
}
export interface AbHideVegetation {
  Pair?: Pair2;
}
export interface Pair2 {
  zIndex: string;
  bValue: string;
}
export interface AiTerrainModifier {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
