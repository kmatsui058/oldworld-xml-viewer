
    const data: XmlBonus.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          "comment": "Bonus title string. This is ONLY necessary if this bonus changes Legitimacy"
        },
        "zIcon": {
          "comment": "Bonus icon. This is only shown in tech tooltips"
        },
        "CharacterName": {
          "comment": "Rename a Character"
        },
        "CityName": {
          "comment": "Rename a City"
        },
        "UnitName": {
          "comment": "Rename a Unit"
        },
        "Victory": {
          "comment": "Player achieves this Victory type"
        },
        "Achievement": {
          "comment": "Player gets this Achievement"
        },
        "MemoryPlayer": {
          "comment": "Memory received by the Player Subject"
        },
        "MemoryPlayerOther": {
          "comment": "Memory received by the Player Subject (only works if the Subject is another Player)"
        },
        "ForgetPlayer": {
          "comment": "Memory forgotten by the Player Subject"
        },
        "MemoryAllPlayers": {
          "comment": "Memory received by all rival Players"
        },
        "MemoryTribe": {
          "comment": "Memory received by the Tribe Subject"
        },
        "ForgetTribe": {
          "comment": "Memory forgotten by the Tribe Subject"
        },
        "MemoryAllTribes": {
          "comment": "Memory received by all Tribes"
        },
        "MemoryReligion": {
          "comment": "Memory received by the Religion Subject"
        },
        "ForgetReligion": {
          "comment": "Memory forgotten by the Religion Subject"
        },
        "MemoryFamily": {
          "comment": "Memory received by the Family Subject"
        },
        "ForgetFamily": {
          "comment": "Memory forgotten by the Family Subject"
        },
        "MemoryAllFamilies": {
          "comment": "Memory received by all your noble Families"
        },
        "MemoryCharacter": {
          "comment": "Memory received by the character Subject"
        },
        "ForgetCharacter": {
          "comment": "Memory forgotten by the character Subject"
        },
        "AddLeaderRelationship": {
          "comment": "Add a Relationship towards the Leader"
        },
        "RemoveLeaderRelationship": {
          "comment": "Remove a Relationship towards the Leader"
        },
        "DiplomacyPlayerFrom": {
          "comment": "Diplomacy state (from diplomacy.xml) to which the Player Subject is set, initiated by Us"
        },
        "DiplomacyPlayerTo": {
          "comment": "Diplomacy state (from diplomacy.xml) to which the Player Subject is set, initiated by the Other Player"
        },
        "DiplomacyTribe": {
          "comment": "Diplomacy state (from diplomacy.xml) to which the Barbarian Subject is set"
        },
        "MakeCourtier": {
          "comment": "Makes the character Subject into this type of courtier which is added to the Player's court"
        },
        "StartLaw": {
          "comment": "Law enacted. You must pay the normal Civics cost"
        },
        "EndLaw": {
          "comment": "Law cancelled"
        },
        "FreeLaw": {
          "comment": "Law enacted for free (i.e. no Civics cost)"
        },
        "FoundReligion": {
          "comment": "Religion founded"
        },
        "FreeTheology": {
          "comment": "Theology added to your state Religion (if any)"
        },
        "Quest": {
          "comment": "A Quest given to the Player (similar to Ambitions)"
        },
        "QuestForce": {
          "comment": "A Quest given to the Player (similar to Ambitions), but does not check if the Quest is close to complete"
        },
        "Ambition": {
          "comment": "Adds this Ambition to the Player"
        },
        "FinishGoal": {
          "comment": "Finishes this Quest or Ambition"
        },
        "FailGoal": {
          "comment": "Failes this Quest or Ambition"
        },
        "DesiredAmbition": {
          "comment": "Adds this Desired Ambition to the Character. (Cannot be the Leader)"
        },
        "Mission": {
          "comment": "Starts a Mission"
        },
        "Council": {
          "comment": "Makes the Character this Council member"
        },
        "SetArchetype": {
          "comment": "Gives the Character this Archetype Trait (and will remove the old one)"
        },
        "SetVegetation": {
          "comment": "Sets the Tile's Vegetation"
        },
        "SetResource": {
          "comment": "Sets the Tile's Resource"
        },
        "AddResource": {
          "comment": "Adds Improvement to a random valid Tile for the City Subject"
        },
        "SetImprovement": {
          "comment": "Sets the Tile's Improvement"
        },
        "AddImprovement": {
          "comment": "Adds Improvement to a random valid Tile for the City Subject"
        },
        "iSpreadUnits": {
          "comment": "List of Religion units that will appear near the City Subject"
        },
        "iRevealRange": {
          "comment": "Reveals this range distance from the Tile"
        },
        "iCitizens": {
          "comment": "Number of citizens added to the City Subject"
        },
        "iBorderGrowth": {
          "comment": "Adds this many Tiles to the City's territory"
        },
        "iCultureLevels": {
          "comment": "Number of Culture levels (regardless of cost) gained by the City Subject"
        },
        "iDiscontentLevels": {
          "comment": "Number of Discontent levels gained by the City Subject"
        },
        "iRebelUnits": {
          "comment": "Number of rebel Units spawned by the City Subject"
        },
        "iDestroyImprovements": {
          "comment": "Number of random Improvements destroyed at the City Subject"
        },
        "iHPCity": {
          "comment": "Changes the HP of the City"
        },
        "iHPUnit": {
          "comment": "Changes the HP of the Unit"
        },
        "iXPUnit": {
          "comment": "Changes the XP of the Unit"
        },
        "iXPCharacter": {
          "comment": "Changes the XP of the Character"
        },
        "iLegitimacy": {
          "comment": "Amount of Legitimacy gained or lost by the Human"
        },
        "iTradeTurns": {
          "comment": "Turns of Yields given in Trade (if 0 defaults to TRADE_TURNS)"
        },
        "iTributeTurns": {
          "comment": "Turns of Yields given in Tribute (if 0 defaults to TRIBUTE_TURNS)"
        },
        "iAllianceSubject": {
          "comment": "Player allies with the previous Subject at this index"
        },
        "iMarrySubject": {
          "comment": "Character will marry the previous Subject at this index"
        },
        "iPolyMarrySubject": {
          "comment": "Character will marry the previous Subject at this index (allows polygamy)"
        },
        "iDivorcedBySubject": {
          "comment": "Character will divorce the previous Subject at this index"
        },
        "iBirthWithSubject": {
          "comment": "Character will give birth with the previous Subject at this index"
        },
        "iAdoptedBySubject": {
          "comment": "Character will be adopted by the previous Subject at this index"
        },
        "iGovernorOfSubject": {
          "comment": "Character will be Governor of the previous Subject City at this index"
        },
        "iGeneralOfSubject": {
          "comment": "Character will be General of the previous Subject Unit at this index"
        },
        "iJoinSubject": {
          "comment": "Character will join the Player at the previous Subject at this index"
        },
        "iSeizeThroneSubject": {
          "comment": "Become the new leader of the previous Subject at this index"
        },
        "iSpreadToSubject": {
          "comment": "Religion will spread to the previous Subject City at this index"
        },
        "iRemoveFromSubject": {
          "comment": "Religion will be removed from the previous Subject City at this index"
        },
        "iConvertReligionSubject": {
          "comment": "The previous Subject Character at this index will convert to this Religion"
        },
        "iHeadReligionSubject": {
          "comment": "The previous Subject Character at this index will become Head of this Religion"
        },
        "iHeadFamilySubject": {
          "comment": "The previous Subject Character at this index will become Head of this Family"
        },
        "iAcquireTechSubject": {
          "comment": "The previous Subject at this index acquires the Tech"
        },
        "iTradeResourceSubject": {
          "comment": "Trades the Resources to previous Subject at this index"
        },
        "iAgentCitySubject": {
          "comment": "Character will become the Agent in the previous Subject City at this index"
        },
        "iTradeCitySubject": {
          "comment": "Trade the City to the previous Subject at this index"
        },
        "iConvertUnitSubject": {
          "comment": "Converts the Unit to the previous Subject at this index"
        },
        "iMissionSubject": {
          "comment": "The Mission will target the previous Subject at this index"
        },
        "iMissionReverse": {
          "comment": "The Mission character will be the previous Subject at this index"
        },
        "iAmbitionFamilySubject": {
          "comment": "Subject index of the Family associated with the Ambition"
        },
        "bMissionFree": {
          "comment": "The Mission will not have Yield costs"
        },
        "bMercenaryUnit": {
          "comment": "The Units created will not be processed through a City (so, no Family, for example)"
        },
        "bRevealTerritory": {
          "comment": "Will reveal all the territory of this Player"
        },
        "bHolyCityAgents": {
          "comment": "Adds an Agent in all Holy Cities"
        },
        "bCancelTrade": {
          "comment": "Will cancel trade with this Player"
        },
        "bTeamAlliance": {
          "comment": "Will make an Alliance with this Player"
        },
        "bTeamAllianceEnd": {
          "comment": "Will end an Alliance with this Player"
        },
        "bTribeAlliance": {
          "comment": "Will make an Alliance with this Barbarian"
        },
        "bTribeAllianceEnd": {
          "comment": "Will end an Alliance with this Barbarian"
        },
        "bTribeInvade": {
          "comment": "Tribe will send a number of Units to raid the Player"
        },
        "bAdoptReligion": {
          "comment": "Adopt this Religion the Player's State Religion (with paying the cost)"
        },
        "bStateReligion": {
          "comment": "Set this Religion the Player's State Religion (without paying the cost)"
        },
        "bStateReligionEnd": {
          "comment": "Clears the Player's State Religion"
        },
        "bFoundReligion": {
          "comment": "The Player will found a random Religion"
        },
        "bFoundReligionCity": {
          "comment": "The Player will found a random Religion in this City"
        },
        "bStartLaw": {
          "comment": "Starts the Law and pays the Civics cost"
        },
        "bFreeLaw": {
          "comment": "Starts the Law without paying the cost"
        },
        "bFreeTheology": {
          "comment": "Establishes the Theology without paying the cost"
        },
        "bRandomTech": {
          "comment": "The Player will receive a random free Tech"
        },
        "bConvertStateReligion": {
          "comment": "Set this Character's Religion to the Player's State Religion"
        },
        "bNoCourtier": {
          "comment": "Character will no longer be a Courtier"
        },
        "bLeaveCouncil": {
          "comment": "Character will no longer be on the Council"
        },
        "bReleaseGeneral": {
          "comment": "If set to 1 (true), the character Subject will be released from being a general"
        },
        "bReleaseGovernor": {
          "comment": "If set to 1 (true), the character Subject will be released from being a governor"
        },
        "bReleaseAgent": {
          "comment": "If set to 1 (true), the character Subject will be released from being an agent"
        },
        "bChangeSuccession": {
          "comment": "If set to 1 (true), the game will automatically attempt to set the Player’s inheritance laws so that the character Subject will become your direct heir. Any law changes made cost no Civics"
        },
        "bAbdicate": {
          "comment": "If set to 1 (true), the character Subject abdicates the throne"
        },
        "bChosenHeir": {
          "comment": "Make this Character the Chosen Heir"
        },
        "bKillCharacter": {
          "comment": "If set to 1 (true), the character Subject dies immediately"
        },
        "bHaveBastard": {
          "comment": "Character will have a bastard child"
        },
        "bKillUnit": {
          "comment": "If set to 1 (true), the Unit Subject dies immediately"
        },
        "bRemoveVegetation": {
          "comment": "Removes Vegetation from the Tile"
        },
        "bTribeRaid": {
          "comment": "Starts a raid from the Barbarian settlement on the Tile"
        },
        "bRazeCity": {
          "comment": "Razes the City Subject"
        },
        "bRazeCityNoCitySite": {
          "comment": "Razes the City Subject, and disables its city site"
        },
        "bDefeat": {
          "comment": "Results in player defeat"
        },
        "aiCityYields": {
          "comment": "List of Yields (Money, Science, etc.) gained in the City Subject"
        },
        "aiGlobalYields": {
          "comment": "List of Yields (Money, Science, etc.) gained by the Player. Unlike the other Global Yield values, this is unmodified by inflation."
        },
        "aiGlobalYieldsBase": {
          "comment": "List of Yields (Money, Science, etc.) gained by the Player. This is distinct from aicityYields in that it is added directly to the national stockpile, not to any particular City"
        },
        "aiGlobalYieldsPer": {
          "comment": "List of Yields per City gained by the Player. For example, if this is 20 Money, and the Player has 3 cities, the Player will gain 60 Money"
        },
        "aiOtherYieldsBase": {
          "comment": "List of Yields (Money, Science, etc.) gained by the Player"
        },
        "aiOtherYieldsPer": {
          "comment": "List of Yields per City gained by the Other Player. For example, if this is 20 Money, and the Other Player has 3 cities, the Player will gain 60 Money"
        },
        "aiYieldsSendBase": {
          "comment": "Send this Yield (lump sum) to the other Player (and deduct it from this Player's stockpile)"
        },
        "aiYieldsSendPerUs": {
          "comment": "Send this Yield (per this Player's Cities) to the other Player (and deduct it from this Player's stockpile)"
        },
        "aiYieldsSendPerThem": {
          "comment": "Send this Yield (per other Player's Cities) to the other Player (and deduct it from this Player's stockpile)"
        },
        "aiYieldsTradeBase": {
          "comment": "List of Yields (lump sum) gained in trade. If this value is positive, this Player receives the Yields; if it’s negative, the other Player receives the Yields"
        },
        "aiYieldsTradePerUs": {
          "comment": "List of Yields (per this Player's Cities) gained in trade. If this value is positive, this Player receives the Yields; if it’s negative, the other Player receives the Yields"
        },
        "aiYieldsTradePerThem": {
          "comment": "List of Yields (per other Player's Cities) gained in trade. If this value is positive, this Player receives the Yields; if it’s negative, the other Player receives the Yields"
        },
        "aiYieldsTributeBase": {
          "comment": "List of Yields (lump sum) to be given to this Subject as tribute. If this value is positive, the Player will receive tribute; if it’s negative, the Player will give tribute"
        },
        "aiYieldsTributePerUs": {
          "comment": "List of Yields (per this Player's Cities) to be given to this Subject as tribute. If this value is positive, the Player will receive tribute; if it’s negative, the Player will give tribute"
        },
        "aiYieldsTributePerThem": {
          "comment": "List of Yields (per other Player's Cities) to be given to this Subject as tribute. If this value is positive, the Player will receive tribute; if it’s negative, the Player will give tribute"
        },
        "aiUnits": {
          "comment": "List of Units that will appear near the City Subject"
        },
        "aiTribeUnits": {
          "comment": "List of Tribe Units that will appear near the Tile Subject"
        },
        "aiBonusUnits": {
          "comment": "List of bonus Units (from bonusUnitClass.xml) that will appear near the Subject City. bonusUnitClass awards you the highest-indexed Unit you have researched in the indicated category"
        },
        "aiLawOpinion": {
          "comment": "List of permanent opinion changes to laws added to the Family Subject. For example, if you could put Centralization and -5 here, the Family would gain a -5 opinion of the Centralization law"
        },
        "aiRatings": {
          "comment": "List of changes to ratings (Charisma, Courage, etc.) applied to the character Subject"
        },
        "aeAddProjects": {
          "comment": "List of projects added to the City Subject"
        },
        "aeRemoveProjects": {
          "comment": "List of projects removed from the City Subject"
        },
        "aeAddSpecialistClasses": {
          "comment": "List of specialists to be added to the City Subject"
        },
        "aePromotions": {
          "comment": "List of promotions gained by the Unit led by the character Subject"
        },
        "aeRandomTrait": {
          "comment": "One of these will be randomly added to the character Subject"
        },
        "aeAddTraits": {
          "comment": "List of traits gained by the character Subject"
        },
        "aeRemoveTraits": {
          "comment": "List of traits removed from the character Subject"
        },
        "aeRandomLeaderRelationship": {
          "comment": "One of these relationships will be randomly created with the Leader"
        },
        "aeTechs": {
          "comment": "List of techs gained by the Player"
        },
        "aeCultureProject": {
          "comment": "List of projects added to the City Subject, based on the City’s Culture value in zIndex"
        },
        "aaiCultureYield": {
          "comment": "List of Yields added to the City Subject, based on the City’s Culture value in zIndex"
        },
        "aeBonuses": {
          "comment": "List of other bonuses to be added onto this one. This is for use with the scaling bonuses found in bonus.xml. [Please avoid making infinite bonus loops.]"
        },
        "aeFamilyBonuses": {
          "comment": "Bonuses are applied to all Cities of this Family"
        },
        "aeAllCityBonuses": {
          "comment": "Bonuses are applied to all the Player's Cities"
        },
        "DiplomacySubjects": {
          "comment": "Subject will enter this Diplomacy state with the previous Subject at this index"
        },
        "AddRelationshipSubjects": {
          "comment": "Give this Character a Relationship with the previous Character at this index"
        },
        "AddRelationshipReverse": {
          "comment": "Give the previous Character at this index a Relationship with this Character"
        },
        "RemoveRelationshipSubjects": {
          "comment": "Remove the Relationship of this Character with the previous Character at this index"
        },
        "RemoveRelationshipReverse": {
          "comment": "Remove the Relationship of the previous Character at this index with this Character"
        },
        "AddCourtierForce": {
          "comment": "List of courtiers with assigned gender to be added to the Subjects's court, ignoring the Courtier Capacity"
        },
        "AddCourtier": {
          "comment": "List of courtiers with assigned gender to be added to the Subjects's court"
        },
        "AddCourtierOther": {
          "comment": "List of courtiers with assigned gender to be added to the Humans's court but with the Subject's nationality"
        }
      },
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "zIcon": {
          
        },
        "CharacterName": {
          
        },
        "CityName": {
          
        },
        "UnitName": {
          
        },
        "Victory": {
          
        },
        "Achievement": {
          
        },
        "MemoryPlayer": {
          
        },
        "MemoryPlayerOther": {
          
        },
        "ForgetPlayer": {
          
        },
        "MemoryAllPlayers": {
          
        },
        "MemoryTribe": {
          
        },
        "ForgetTribe": {
          
        },
        "MemoryAllTribes": {
          
        },
        "MemoryReligion": {
          
        },
        "ForgetReligion": {
          
        },
        "MemoryFamily": {
          
        },
        "ForgetFamily": {
          
        },
        "MemoryAllFamilies": {
          
        },
        "MemoryCharacter": {
          
        },
        "ForgetCharacter": {
          
        },
        "AddLeaderRelationship": {
          
        },
        "RemoveLeaderRelationship": {
          
        },
        "DiplomacyPlayerFrom": {
          
        },
        "DiplomacyPlayerTo": {
          
        },
        "DiplomacyTribe": {
          
        },
        "MakeCourtier": {
          
        },
        "StartLaw": {
          
        },
        "EndLaw": {
          
        },
        "FreeLaw": {
          
        },
        "FoundReligion": {
          
        },
        "FreeTheology": {
          
        },
        "Quest": {
          
        },
        "QuestForce": {
          
        },
        "Ambition": {
          
        },
        "FinishGoal": {
          
        },
        "FailGoal": {
          
        },
        "DesiredAmbition": {
          
        },
        "Mission": {
          
        },
        "Council": {
          
        },
        "SetArchetype": {
          
        },
        "SetVegetation": {
          
        },
        "SetResource": {
          
        },
        "AddResource": {
          
        },
        "SetImprovement": {
          
        },
        "AddImprovement": {
          
        },
        "iSpreadUnits": {
          
        },
        "iRevealRange": {
          
        },
        "iCitizens": {
          
        },
        "iBorderGrowth": {
          
        },
        "iCultureLevels": {
          
        },
        "iDiscontentLevels": {
          
        },
        "iRebelUnits": {
          
        },
        "iDestroyImprovements": {
          
        },
        "iHPCity": {
          
        },
        "iHPUnit": {
          
        },
        "iXPUnit": {
          
        },
        "iXPCharacter": {
          
        },
        "iLegitimacy": {
          
        },
        "iTradeTurns": {
          
        },
        "iTributeTurns": {
          
        },
        "iAllianceSubject": {
          
        },
        "iMarrySubject": {
          
        },
        "iPolyMarrySubject": {
          
        },
        "iDivorcedBySubject": {
          
        },
        "iBirthWithSubject": {
          
        },
        "iAdoptedBySubject": {
          
        },
        "iGovernorOfSubject": {
          
        },
        "iGeneralOfSubject": {
          
        },
        "iJoinSubject": {
          
        },
        "iSeizeThroneSubject": {
          
        },
        "iSpreadToSubject": {
          
        },
        "iRemoveFromSubject": {
          
        },
        "iConvertReligionSubject": {
          
        },
        "iHeadReligionSubject": {
          
        },
        "iHeadFamilySubject": {
          
        },
        "iAcquireTechSubject": {
          
        },
        "iTradeResourceSubject": {
          
        },
        "iAgentCitySubject": {
          
        },
        "iTradeCitySubject": {
          
        },
        "iConvertUnitSubject": {
          
        },
        "iMissionSubject": {
          
        },
        "iMissionReverse": {
          
        },
        "iAmbitionFamilySubject": {
          
        },
        "bMissionFree": {
          
        },
        "bMercenaryUnit": {
          
        },
        "bRevealTerritory": {
          
        },
        "bHolyCityAgents": {
          
        },
        "bCancelTrade": {
          
        },
        "bTeamAlliance": {
          
        },
        "bTeamAllianceEnd": {
          
        },
        "bTribeAlliance": {
          
        },
        "bTribeAllianceEnd": {
          
        },
        "bTribeInvade": {
          
        },
        "bAdoptReligion": {
          
        },
        "bStateReligion": {
          
        },
        "bStateReligionEnd": {
          
        },
        "bFoundReligion": {
          
        },
        "bFoundReligionCity": {
          
        },
        "bStartLaw": {
          
        },
        "bFreeLaw": {
          
        },
        "bFreeTheology": {
          
        },
        "bRandomTech": {
          
        },
        "bConvertStateReligion": {
          
        },
        "bNoCourtier": {
          
        },
        "bLeaveCouncil": {
          
        },
        "bReleaseGeneral": {
          
        },
        "bReleaseGovernor": {
          
        },
        "bReleaseAgent": {
          
        },
        "bChangeSuccession": {
          
        },
        "bAbdicate": {
          
        },
        "bChosenHeir": {
          
        },
        "bKillCharacter": {
          
        },
        "bHaveBastard": {
          
        },
        "bKillUnit": {
          
        },
        "bRemoveVegetation": {
          
        },
        "bTribeRaid": {
          
        },
        "bRazeCity": {
          
        },
        "bRazeCityNoCitySite": {
          
        },
        "bDefeat": {
          
        },
        "aiCityYields": {
          
        },
        "aiGlobalYields": {
          
        },
        "aiGlobalYieldsBase": {
          
        },
        "aiGlobalYieldsPer": {
          
        },
        "aiOtherYieldsBase": {
          
        },
        "aiOtherYieldsPer": {
          
        },
        "aiYieldsSendBase": {
          
        },
        "aiYieldsSendPerUs": {
          
        },
        "aiYieldsSendPerThem": {
          
        },
        "aiYieldsTradeBase": {
          
        },
        "aiYieldsTradePerUs": {
          
        },
        "aiYieldsTradePerThem": {
          
        },
        "aiYieldsTributeBase": {
          
        },
        "aiYieldsTributePerUs": {
          
        },
        "aiYieldsTributePerThem": {
          
        },
        "aiUnits": {
          
        },
        "aiTribeUnits": {
          
        },
        "aiBonusUnits": {
          
        },
        "aiLawOpinion": {
          
        },
        "aiRatings": {
          
        },
        "aeAddProjects": {
          
        },
        "aeRemoveProjects": {
          
        },
        "aeAddSpecialistClasses": {
          
        },
        "aePromotions": {
          
        },
        "aeRandomTrait": {
          
        },
        "aeAddTraits": {
          
        },
        "aeRemoveTraits": {
          
        },
        "aeRandomLeaderRelationship": {
          
        },
        "aeTechs": {
          
        },
        "aeCultureProject": {
          
        },
        "aaiCultureYield": {
          
        },
        "aeBonuses": {
          
        },
        "aeFamilyBonuses": {
          
        },
        "aeAllCityBonuses": {
          
        },
        "DiplomacySubjects": {
          
        },
        "AddRelationshipSubjects": {
          
        },
        "AddRelationshipReverse": {
          
        },
        "RemoveRelationshipSubjects": {
          
        },
        "RemoveRelationshipReverse": {
          
        },
        "AddCourtierForce": {
          
        },
        "AddCourtier": {
          
        },
        "AddCourtierOther": {
          
        }
      },
      {
        "zType": "BONUS_HUMAN_DIPLOMACY",
        "MemoryPlayer": "MEMORYPLAYER_HUMAN_DIPLOMACY"
      },
      {
        "zType": "BONUS_FAMILY_SEAT",
        "zName": "Founded link(CONCEPT_FAMILY_SEAT)",
        "iLegitimacy": "5"
      },
      {
        "zType": "BONUS_FAMILY_FOUND",
        "iCitizens": "1"
      },
      {
        "zType": "BONUS_DISCOVERED_LANDMARK",
        "zName": "Landmark Discovered",
        "iLegitimacy": "1"
      },
      {
        "zType": "BONUS_NAMED_LANDMARK",
        "zName": "Landmark Named",
        "iLegitimacy": "2"
      },
      {
        "zType": "BONUS_FINISHED_AMBITION",
        "zName": "Finished Ambition(s)",
        "iLegitimacy": "10"
      },
      {
        "zType": "BONUS_FINISHED_LEGACY",
        "zName": "Finished Legac(ies)",
        "iLegitimacy": "5"
      },
      {
        "zType": "BONUS_ABANDONED_AMBITION",
        "zName": "Abandoned Ambition(s)",
        "iLegitimacy": "-5"
      },
      {
        "zType": "BONUS_FAILED_LEGACY",
        "zName": "Failed Legac(ies)",
        "iLegitimacy": "-5"
      },
      {
        "zType": "BONUS_FINISHED_QUEST",
        "zName": "Finished Quest(s)",
        "iLegitimacy": "10"
      },
      {
        "zType": "BONUS_FINISHED_HOLY_SITE",
        "zName": "Built a Holy Site",
        "iLegitimacy": "2"
      },
      {
        "zType": "BONUS_FINISHED_WONDER",
        "zName": "Built a Wonder",
        "iLegitimacy": "2"
      },
      {
        "zType": "BONUS_INSPIRED_BY_WONDER",
        "zName": "Inspired by a Wonder",
        "iLegitimacy": "2"
      },
      {
        "zType": "BONUS_HIGH_SYNOD",
        "zName": "High Synod",
        "iLegitimacy": "-2"
      },
      {
        "zType": "BONUS_CONVERT_LEGITIMACY",
        "zName": "Used for {YIELD_ORDERS}",
        "iLegitimacy": "-1",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "BONUS_LEADER_ADOPTS",
        "zName": "Ruler Adopted a Child",
        "iLegitimacy": "-2"
      },
      {
        "zType": "BONUS_ESTABLISH_THEOLOGY",
        "MemoryReligion": "MEMORYRELIGION_ESTABLISH_THEOLOGY"
      },
      {
        "zType": "BONUS_PURGE_RELIGION",
        "MemoryReligion": "MEMORYRELIGION_PURGE_RELIGION"
      },
      {
        "zType": "BONUS_START_LAW",
        "bStartLaw": "1"
      },
      {
        "zType": "BONUS_FREE_LAW",
        "bFreeLaw": "1"
      },
      {
        "zType": "BONUS_FREE_THEOLOGY",
        "bFreeTheology": "1"
      },
      {
        "zType": "BONUS_BREAK_PEACE",
        "zName": "Broke Peace Treaty",
        "MemoryAllPlayers": "MEMORYPLAYER_BROKE_PEACE",
        "MemoryAllTribes": "MEMORYTRIBE_BROKE_PEACE",
        "iLegitimacy": "-2"
      },
      {
        "zType": "BONUS_END_ALLIANCE",
        "zName": "Ended Alliance",
        "iLegitimacy": "-2"
      },
      {
        "zType": "BONUS_TRIBE_MARRIAGE",
        "zName": "Marriage with a Tribe",
        "iLegitimacy": "-1"
      },
      {
        "zType": "BONUS_DECLARE_WAR_TRIBE",
        "MemoryTribe": "MEMORYTRIBE_DECLARED_WAR",
        "DiplomacyTribe": "DIPLOMACY_WAR",
        "aeBonuses": {
          "zValue": "BONUS_TRIBE_OFFER"
        }
      },
      {
        "zType": "BONUS_TRIBE_WAR",
        "DiplomacyTribe": "DIPLOMACY_WAR",
        "aeBonuses": {
          "zValue": "BONUS_TRIBE_OFFER"
        }
      },
      {
        "zType": "BONUS_TRIBE_WAR_LEGITIMACY",
        "zName": "Unafraid of Tribes",
        "DiplomacyTribe": "DIPLOMACY_WAR",
        "iLegitimacy": "5",
        "aeBonuses": {
          "zValue": "BONUS_TRIBE_OFFER"
        }
      },
      {
        "zType": "BONUS_TRIBE_TRUCE",
        "DiplomacyTribe": "DIPLOMACY_TRUCE",
        "aeBonuses": {
          "zValue": "BONUS_TRIBE_OFFER"
        }
      },
      {
        "zType": "BONUS_TRIBE_TRUCE_LEGITIMACY",
        "zName": "Made a Truce with a Tribe",
        "DiplomacyTribe": "DIPLOMACY_TRUCE",
        "iLegitimacy": "-1",
        "aeBonuses": {
          "zValue": "BONUS_TRIBE_OFFER"
        }
      },
      {
        "zType": "BONUS_TRIBE_PEACE",
        "DiplomacyTribe": "DIPLOMACY_PEACE",
        "aeBonuses": {
          "zValue": "BONUS_TRIBE_OFFER"
        }
      },
      {
        "zType": "BONUS_TRIBE_PEACE_LEGITIMACY",
        "zName": "Made Peace with a Tribe",
        "DiplomacyTribe": "DIPLOMACY_PEACE",
        "iLegitimacy": "-1",
        "aeBonuses": {
          "zValue": "BONUS_TRIBE_OFFER"
        }
      },
      {
        "zType": "BONUS_TRIBE_ALLIANCE",
        "zName": "Made an Alliance with a Tribe",
        "iLegitimacy": "-2",
        "bTribeAlliance": "1",
        "aeBonuses": {
          "zValue": "BONUS_TRIBE_OFFER"
        }
      },
      {
        "zType": "BONUS_TRIBE_ALLIANCE_END",
        "bTribeAllianceEnd": "1",
        "aeBonuses": {
          "zValue": "BONUS_TRIBE_OFFER"
        }
      },
      {
        "zType": "BONUS_TRIBAL_INVASION",
        "bTribeInvade": "1",
        "aeBonuses": {
          "zValue": "BONUS_TRIBE_OFFER"
        }
      },
      {
        "zType": "BONUS_TRIBAL_INVASION_LEGITIMACY",
        "zName": "Unafraid of Invasion",
        "iLegitimacy": "10",
        "bTribeInvade": "1",
        "aeBonuses": {
          "zValue": "BONUS_TRIBE_OFFER"
        }
      },
      {
        "zType": "BONUS_TRIBE_OFFER",
        "MemoryTribe": "MEMORYTRIBE_OFFER"
      },
      {
        "zType": "BONUS_TRIBE_ELIMINATED_LEGITIMACY",
        "zName": "Eliminated a Tribe",
        "iLegitimacy": "5"
      },
      {
        "zType": "BONUS_CANCEL_TRADE",
        "MemoryPlayer": "MEMORYPLAYER_CANCELLED_TRADE",
        "bCancelTrade": "1"
      },
      {
        "zType": "BONUS_DECLARE_WAR_PLAYER",
        "MemoryPlayer": "MEMORYPLAYER_DECLARED_WAR",
        "DiplomacyPlayerFrom": "DIPLOMACY_WAR",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_OFFER"
        }
      },
      {
        "zType": "BONUS_PLAYER_WAR",
        "DiplomacyPlayerTo": "DIPLOMACY_WAR",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_OFFER"
        }
      },
      {
        "zType": "BONUS_PLAYER_WAR_LEGITIMACY",
        "zName": "Unafraid of War",
        "DiplomacyPlayerTo": "DIPLOMACY_WAR",
        "iLegitimacy": "5",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_OFFER"
        }
      },
      {
        "zType": "BONUS_PLAYER_TRUCE",
        "DiplomacyPlayerFrom": "DIPLOMACY_TRUCE",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_OFFER"
        }
      },
      {
        "zType": "BONUS_PLAYER_PEACE",
        "DiplomacyPlayerFrom": "DIPLOMACY_PEACE",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_OFFER"
        }
      },
      {
        "zType": "BONUS_PLAYER_ALLIANCE",
        "bTeamAlliance": "1",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_OFFER"
        }
      },
      {
        "zType": "BONUS_PLAYER_ALLIANCE_END",
        "bTeamAllianceEnd": "1",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_OFFER"
        }
      },
      {
        "zType": "BONUS_PLAYER_DEMAND_TRIBUTE",
        "MemoryPlayer": "MEMORYPLAYER_DEMANDED_TRIBUTE"
      },
      {
        "zType": "BONUS_PLAYER_OFFER",
        "MemoryPlayer": "MEMORYPLAYER_OFFER"
      },
      {
        "zType": "BONUS_FAMILY_PURSUED_AMBITION",
        "MemoryFamily": "MEMORYFAMILY_PURSUED_AMBITION"
      },
      {
        "zType": "BONUS_FAMILYCLASS_LANDOWNERS_SEAT",
        "iCitizens": "2"
      },
      {
        "zType": "BONUS_FAMILYCLASS_CHAMPIONS_SEAT",
        "AddImprovement": "IMPROVEMENT_GARRISON_1"
      },
      {
        "zType": "BONUS_FAMILYCLASS_STATESMEN",
        "aeAddProjects": {
          "zValue": "PROJECT_TREASURY_1"
        }
      },
      {
        "zType": "BONUS_FAMILYCLASS_STATESMEN_SEAT",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "BONUS_FAMILYCLASS_PATRONS_SEAT",
        "AddCourtierForce": {
          "Pair": {
            "zIndex": "COURTIER_MINISTER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_FAMILYCLASS_CLERICS_SEAT",
        "bFoundReligionCity": "1"
      },
      {
        "zType": "BONUS_FAMILYCLASS_SAGES_SEAT",
        "bRandomTech": "1"
      },
      {
        "zType": "BONUS_FAMILYCLASS_TRADERS_SEAT",
        "AddCourtierForce": {
          "Pair": {
            "zIndex": "COURTIER_MERCHANT",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_FAMILYCLASS_ARTISANS_SEAT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_WORKER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_FAMILYCLASS_RIDERS_SEAT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_SCOUT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_FAMILYCLASS_HUNTERS_SEAT",
        "aiGlobalYields": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "BONUS_EFFECTCITY_FAMILYCLASS_PATRONS_SEAT",
        "iDiscontentLevels": "-1"
      },
      {
        "zType": "BONUS_GAIN_WISDOM_1",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_GAIN_WISDOM_2",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_LOSE_WISDOM_1",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "BONUS_LOSE_WISDOM_2",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_GAIN_CHARISMA_1",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_GAIN_CHARISMA_2",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_LOSE_CHARISMA_1",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "BONUS_LOSE_CHARISMA_2",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_GAIN_COURAGE_1",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_GAIN_COURAGE_2",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_LOSE_COURAGE_1",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "BONUS_LOSE_COURAGE_2",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_GAIN_DISCIPLINE_1",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_GAIN_DISCIPLINE_2",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_LOSE_DISCIPLINE_1",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "BONUS_LOSE_DISCIPLINE_2",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_ADD_WALLS",
        "aeAddProjects": {
          "zValue": "PROJECT_WALLS"
        }
      },
      {
        "zType": "BONUS_ADD_MOAT",
        "aeAddProjects": {
          "zValue": "PROJECT_MOAT"
        }
      },
      {
        "zType": "BONUS_ADD_TOWERS",
        "aeAddProjects": {
          "zValue": "PROJECT_TOWERS"
        }
      },
      {
        "zType": "BONUS_REVEAL_MAP",
        "iRevealRange": "5"
      },
      {
        "zType": "BONUS_RANDOM_TECH",
        "bRandomTech": "1"
      },
      {
        "zType": "BONUS_IMPROVEMENT_ISHTAR_GATE",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "BONUS_IMPROVEMENT_ORACLE",
        "bHolyCityAgents": "1"
      },
      {
        "zType": "BONUS_MAKE_AMBASSADOR",
        "Council": "COUNCIL_AMBASSADOR"
      },
      {
        "zType": "BONUS_MAKE_CHANCELLOR",
        "Council": "COUNCIL_CHANCELLOR"
      },
      {
        "zType": "BONUS_MAKE_SPYMASTER",
        "Council": "COUNCIL_SPYMASTER"
      },
      {
        "zType": "BONUS_MISSIONRESULT_LEAVE_COUNCIL",
        "bLeaveCouncil": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_LEAVE_RELIGION",
        "zName": "Leave link(CONCEPT_STATE_RELIGION)",
        "bStateReligionEnd": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_RALLY_TROOPS",
        "zName": "Rally Troops",
        "aeBonuses": {
          "zValue": "BONUS_TRAINING_GAIN_AVERAGE"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_HOLD_COURT",
        "zName": "Hold Court",
        "aeBonuses": {
          "zValue": "BONUS_CIVICS_GAIN_AVERAGE"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_INFLUENCE",
        "zName": "Influence (Success)",
        "aeBonuses": {
          "zValue": "BONUS_LEADER_INFLUENCED_BY"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_INFLUENCE_WEAKEN",
        "zName": "Influence (Success, Weaken)",
        "iLegitimacy": "-1",
        "aeBonuses": {
          "zValue": "BONUS_LEADER_INFLUENCED_BY"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_ABDICATE",
        "aeBonuses": {
          "zValue": "BONUS_ABDICATE"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_CONVERT_RELIGION",
        "zName": "Convert to link(CONCEPT_STATE_RELIGION)",
        "bConvertStateReligion": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_INTERCESSION",
        "zName": "Intercession (Success)",
        "aeBonuses": {
          "zValue": "BONUS_LEADER_INTERCESSED_FOR"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_INTERCESSION_WEAKEN",
        "zName": "Influence (Success, Weaken)",
        "iLegitimacy": "-1",
        "aeBonuses": {
          "zValue": "BONUS_LEADER_INTERCESSED_FOR"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_ADOPT",
        "zName": "Adoption",
        "iLegitimacy": "-1",
        "iAdoptedBySubject": "0"
      },
      {
        "zType": "BONUS_MISSIONRESULT_LEGITIMIZE",
        "zName": "Legitimized Bastard",
        "iLegitimacy": "-2",
        "aeAddTraits": {
          "zValue": "TRAIT_LEGITIMIZED"
        },
        "aeRemoveTraits": {
          "zValue": "TRAIT_BASTARD"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_CHOSEN_HEIR",
        "zName": "Chosen Heir",
        "iLegitimacy": "-4",
        "bChosenHeir": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_INFILTRATE_REVEAL",
        "zName": "Infiltrate (Success)",
        "bRevealTerritory": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_INFILTRATE_REVEAL_EXPOSED",
        "zName": "Infiltrate (Success, Exposed)",
        "iLegitimacy": "-1",
        "bRevealTerritory": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_SLANDER_SUCCESS",
        "zName": "Slander (Success)",
        "MemoryAllPlayers": "MEMORYPLAYER_SLANDER"
      },
      {
        "zType": "BONUS_MISSIONRESULT_SLANDER_SUCCESS_EXPOSED",
        "zName": "Slander (Success, Exposed)",
        "MemoryAllPlayers": "MEMORYPLAYER_SLANDER",
        "iLegitimacy": "-1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_STEAL_RESEARCH_SUCCESS",
        "zName": "Steal Research (Success)",
        "aiOtherYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "30"
          }
        },
        "aiOtherYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_STEAL_RESEARCH_SUCCESS_EXPOSED",
        "zName": "Steal Research (Success, Exposed)",
        "MemoryPlayer": "MEMORYPLAYER_STEAL_RESEARCH",
        "aiOtherYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "30"
          }
        },
        "aiOtherYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_ASSASSINATE_KILL",
        "zName": "Assassinate (Kill)",
        "bKillCharacter": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_ASSASSINATE_KILL_EXPOSED",
        "zName": "Assassinate (Kill, Exposed)",
        "iLegitimacy": "-2",
        "bKillCharacter": "1",
        "aeBonuses": {
          "zValue": "BONUS_ASSASSINATION_EXPOSED"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_ASSASSINATE_FAIL_EXPOSED",
        "zName": "Assassinate (Fail, Exposed)",
        "iLegitimacy": "-2",
        "aeBonuses": {
          "zValue": "BONUS_ASSASSINATION_EXPOSED"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_TREACHERY_SUCCESS",
        "zName": "Treachery (Success)",
        "iHPCity": "-10"
      },
      {
        "zType": "BONUS_MISSIONRESULT_TREACHERY_FAILURE",
        "zName": "Treachery (Failure)",
        "iLegitimacy": "-1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_INSURRECTION_SUCCESS",
        "zName": "Insurrection (Success)",
        "iDiscontentLevels": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_INSURRECTION_FAILURE",
        "zName": "Insurrection (Failure)",
        "iLegitimacy": "-1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_HIGH_SYNOD_SUCCESS",
        "zName": "High Synod (Success)",
        "MemoryReligion": "MEMORYFAMILY_HIGH_SYNOD_SUCCESS"
      },
      {
        "zType": "BONUS_MISSIONRESULT_HIGH_SYNOD_FAILURE",
        "zName": "High Synod (Failure)",
        "MemoryReligion": "MEMORYFAMILY_HIGH_SYNOD_FAILURE"
      },
      {
        "zType": "BONUS_MISSIONRESULT_FAMILY_GIFT_SUCCESS",
        "zName": "Family Gift (Success)",
        "MemoryFamily": "MEMORYFAMILY_FAMILY_GIFTS"
      },
      {
        "zType": "BONUS_MISSIONRESULT_FAMILY_GIFT_SUCCESS_WEAKEN",
        "zName": "Family Gift (Success, Weaken)",
        "MemoryFamily": "MEMORYFAMILY_FAMILY_GIFTS",
        "iLegitimacy": "-1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_PACIFY_CITY_SUCCESS",
        "zName": "Pacify City (Success)",
        "iDiscontentLevels": "-1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_PACIFY_CITY_SUCCESS_WEAKEN",
        "zName": "Pacify City (Success, Weaken)",
        "iDiscontentLevels": "-1",
        "iLegitimacy": "-1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_IMPRISON_JUST",
        "zName": "Imprison (Just)",
        "MemoryFamily": "MEMORYFAMILY_MEMBER_IMPRISONED",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "500"
          }
        },
        "aeAddTraits": {
          "zValue": "TRAIT_IMPRISONED"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_IMPRISON_UNJUST",
        "zName": "Imprison (Unjust)",
        "MemoryFamily": "MEMORYFAMILY_MEMBER_IMPRISONED",
        "iLegitimacy": "-2",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "500"
          }
        },
        "aeAddTraits": {
          "zValue": "TRAIT_IMPRISONED"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_IMPRISON_ESCAPE",
        "zName": "Imprison (Escape)",
        "iLegitimacy": "-2",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "500"
          }
        },
        "aeAddTraits": {
          "zValue": [
            "TRAIT_SLIGHTED",
            "TRAIT_FUGITIVE"
          ]
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_RELEASE_GRATEFUL",
        "zName": "Release (Grateful)",
        "aeRemoveTraits": {
          "zValue": "TRAIT_IMPRISONED"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_RELEASE_BITTER",
        "zName": "Release (Bitter)",
        "aeAddTraits": {
          "zValue": "TRAIT_SLIGHTED"
        },
        "aeRemoveTraits": {
          "zValue": "TRAIT_IMPRISONED"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_RELEASE_UNJUST",
        "zName": "Release (Unjust)",
        "iLegitimacy": "-2",
        "aeRemoveTraits": {
          "zValue": "TRAIT_IMPRISONED"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_CAPTURE_SURRENDER",
        "zName": "Capture (Surrender)",
        "aeAddTraits": {
          "zValue": "TRAIT_IMPRISONED"
        },
        "aeRemoveTraits": {
          "zValue": "TRAIT_FUGITIVE"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_CAPTURE_KILLED",
        "zName": "Capture (Killed)",
        "bKillCharacter": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_CAPTURE_FLEE",
        "zName": "Capture (Flee)",
        "aeAddTraits": {
          "zValue": "TRAIT_UNDER_ASYLUM"
        },
        "aeRemoveTraits": {
          "zValue": "TRAIT_FUGITIVE"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_PAY_RANSOM",
        "zName": "Capture Ransom",
        "aeRemoveTraits": {
          "zValue": "TRAIT_CAPTURED"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_MARRY_COURTIER",
        "zName": "Marry",
        "iMarrySubject": "0"
      },
      {
        "zType": "BONUS_MISSIONRESULT_DIVORCE",
        "zName": "Divorce",
        "iDivorcedBySubject": "0"
      },
      {
        "zType": "BONUS_NATION_CARTHAGE",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_NATION_EGYPT",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_REPAIRS",
        "iHPCity": "4"
      },
      {
        "zType": "BONUS_PROJECT_TREASURY_1",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_TREASURY_2",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "150"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_TREASURY_3",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "250"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_TREASURY_4",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_FORUM_1",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_FORUM_2",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_FORUM_3",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_FORUM_4",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_ARCHIVE_1",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_ARCHIVE_2",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_ARCHIVE_3",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_ARCHIVE_4",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_DECREE_1",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_DECREE_2",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "8"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_DECREE_3",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_DECREE_4",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "12"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_FESTIVAL_1",
        "aiCityYields": {
          "Pair": [
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-20"
            }
          ]
        }
      },
      {
        "zType": "BONUS_PROJECT_FESTIVAL_2",
        "aiCityYields": {
          "Pair": [
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "40"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-40"
            }
          ]
        }
      },
      {
        "zType": "BONUS_PROJECT_FESTIVAL_3",
        "aiCityYields": {
          "Pair": [
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "60"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-60"
            }
          ]
        }
      },
      {
        "zType": "BONUS_PROJECT_FESTIVAL_4",
        "aiCityYields": {
          "Pair": [
            {
              "zIndex": "YIELD_GROWTH",
              "iValue": "80"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-80"
            }
          ]
        }
      },
      {
        "zType": "BONUS_PROJECT_INQUIRY_1",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_INQUIRY_2",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_INQUIRY_3",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "120"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_INQUIRY_4",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "160"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_HUNT_1",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_HUNT_2",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_HUNT_3",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "150"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_HUNT_4",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_OLYMPICS_1",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_OLYMPICS_2",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_OLYMPICS_3",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "120"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_OLYMPICS_4",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "160"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_CONVOY_1",
        "aiGlobalYields": {
          "Pair": [
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-40"
            }
          ]
        }
      },
      {
        "zType": "BONUS_PROJECT_CONVOY_2",
        "aiGlobalYields": {
          "Pair": [
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "200"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-60"
            }
          ]
        }
      },
      {
        "zType": "BONUS_PROJECT_CONVOY_3",
        "aiGlobalYields": {
          "Pair": [
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "300"
            },
            {
              "zIndex": "YIELD_DISCONTENT",
              "iValue": "-80"
            }
          ]
        }
      },
      {
        "zType": "BONUS_PROJECT_CONVOY_4",
        "iDiscontentLevels": "-1",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "BONUS_TECH_IRONWORKING",
        "aeTechs": {
          "zValue": "TECH_IRONWORKING"
        }
      },
      {
        "zType": "BONUS_TECH_STONECUTTING",
        "aeTechs": {
          "zValue": "TECH_STONECUTTING"
        }
      },
      {
        "zType": "BONUS_TECH_TRAPPING",
        "aeTechs": {
          "zValue": "TECH_TRAPPING"
        }
      },
      {
        "zType": "BONUS_TECH_DIVINATION",
        "aeTechs": {
          "zValue": "TECH_DIVINATION"
        }
      },
      {
        "zType": "BONUS_TECH_ADMINISTRATION",
        "aeTechs": {
          "zValue": "TECH_ADMINISTRATION"
        }
      },
      {
        "zType": "BONUS_TECH_STONECUTTING_BONUS_STONE",
        "zName": "Stone Boost",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_TECH_HUSBANDRY_BONUS_FOOD",
        "zName": "Food Boost",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_TECH_POLIS_BONUS_SETTLER",
        "zName": "Free link(UNIT_SETTLER)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_SETTLER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_ARISTOCRACY_BONUS_BORDERS",
        "zName": "Border Boost",
        "aeAllCityBonuses": {
          "zValue": "BONUS_TECH_ARISTOCRACY_BONUS_BORDERS_ALL"
        }
      },
      {
        "zType": "BONUS_TECH_ARISTOCRACY_BONUS_BORDERS_ALL",
        "iBorderGrowth": "5"
      },
      {
        "zType": "BONUS_TECH_NAVIGATION_BONUS_BIREME",
        "zName": "Free link(UNIT_BIREME)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_BIREME",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_SPOKED_WHEEL_BONUS_CHARIOT",
        "zName": "Free link(UNIT_CHARIOT)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_CHARIOT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_CITIZENSHIP_BONUS_MINISTER",
        "zName": "New link(COURTIER_MINISTER)",
        "AddCourtierForce": {
          "Pair": {
            "zIndex": "COURTIER_MINISTER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_PORTCULLIS_BONUS_MACEMAN",
        "zName": "Free link(UNIT_MACEMAN)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_MACEMAN",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_LAND_CONSOLIDATION_BONUS_CAMEL_ARCHER",
        "zName": "Free link(UNIT_CAMEL_ARCHER)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_CAMEL_ARCHER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_LAND_CONSOLIDATION_BONUS_WAR_ELEPHANT",
        "zName": "Free link(UNIT_WAR_ELEPHANT)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_WAR_ELEPHANT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_COMPOSITE_BOW_BONUS_ARCHER",
        "zName": "Free link(UNIT_ARCHER)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_ARCHER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_DOCTRINE_BONUS_ORDERS",
        "zName": "Orders Boost",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_TECH_COINAGE_BONUS_MONEY",
        "zName": "Money Boost",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "2000"
          }
        }
      },
      {
        "zType": "BONUS_TECH_SCHOLARSHIP_BONUS_SCIENTIST",
        "zName": "New link(COURTIER_SCIENTIST)",
        "AddCourtierForce": {
          "Pair": {
            "zIndex": "COURTIER_SCIENTIST",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_TORSION_BONUS_BALLISTA",
        "zName": "Free link(UNIT_BALLISTA)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_BALLISTA",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_STIRRUPS_BONUS_HORSEMAN",
        "zName": "Free link(UNIT_HORSEMAN)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_HORSEMAN",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_STIRRUPS_BONUS_HORSE_ARCHER",
        "zName": "Free link(UNIT_HORSE_ARCHER)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_HORSE_ARCHER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_ARCHITECTURE_BONUS_CIVICS",
        "zName": "Civics Boost",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "BONUS_TECH_MANOR_BONUS_GOODS",
        "zName": "Goods Boost",
        "aiGlobalYields": {
          "Pair": [
            {
              "zIndex": "YIELD_IRON",
              "iValue": "200"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "200"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "200"
            }
          ]
        }
      },
      {
        "zType": "BONUS_TECH_MACHINERY_BONUS_ONAGER",
        "zName": "Free link(UNIT_ONAGER)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_ONAGER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_CARTOGRAPHY_BONUS_TRIREME",
        "zName": "Free link(UNIT_TRIREME)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_TRIREME",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_HYDRAULICS_BONUS_MERCHANT",
        "zName": "New link(COURTIER_MERCHANT)",
        "AddCourtierForce": {
          "Pair": {
            "zIndex": "COURTIER_MERCHANT",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_BODKIN_ARROW_BONUS_TRAINING",
        "zName": "Training Boost",
        "aiGlobalYields": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "BONUS_TECH_COHORTS_BONUS_SOLDIER",
        "zName": "New link(COURTIER_SOLDIER)",
        "AddCourtierForce": {
          "Pair": {
            "zIndex": "COURTIER_SOLDIER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_WINDLASS_BONUS_CROSSBOWMAN",
        "zName": "Free link(UNIT_CROSSBOWMAN)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_CROSSBOWMAN",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_LATEEN_SAIL_BONUS_DROMON",
        "zName": "Free link(UNIT_DROMON)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_DROMON",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_ECONOMIC_REFORM",
        "zName": "New link(COURTIER_MERCHANT)",
        "zIcon": "COURTIER_MERCHANT",
        "AddCourtierForce": {
          "Pair": {
            "zIndex": "COURTIER_MERCHANT",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_MILITARY_PRESTIGE",
        "zName": "New link(COURTIER_SOLDIER)",
        "zIcon": "COURTIER_SOLDIER",
        "AddCourtierForce": {
          "Pair": {
            "zIndex": "COURTIER_SOLDIER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_INDUSTRIAL_PROGRESS",
        "zName": "New link(COURTIER_MINISTER)",
        "zIcon": "COURTIER_MINISTER",
        "AddCourtierForce": {
          "Pair": {
            "zIndex": "COURTIER_MINISTER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_BATTERING_RAM_UNIT",
        "zName": "Free link(UNIT_BATTERING_RAM)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_BATTERING_RAM",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_SIEGE_TOWER_UNIT",
        "zName": "Free link(UNIT_SIEGE_TOWER)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_SIEGE_TOWER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_AKKADIAN_ARCHER_UNIT",
        "zName": "Free link(UNIT_AKKADIAN_ARCHER)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_AKKADIAN_ARCHER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_CIMMERIAN_ARCHER_UNIT",
        "zName": "Free link(UNIT_CIMMERIAN_ARCHER)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_CIMMERIAN_ARCHER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_AFRICAN_ELEPHANT_UNIT",
        "zName": "Free link(UNIT_AFRICAN_ELEPHANT)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_AFRICAN_ELEPHANT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_TURRETED_ELEPHANT_UNIT",
        "zName": "Free link(UNIT_TURRETED_ELEPHANT)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_TURRETED_ELEPHANT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_LIGHT_CHARIOT_UNIT",
        "zName": "Free link(UNIT_LIGHT_CHARIOT)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_LIGHT_CHARIOT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_KUSHITE_CAVALRY_UNIT",
        "zName": "Free link(UNIT_KUSHITE_CAVALRY)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_KUSHITE_CAVALRY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_HOPLITE_UNIT",
        "zName": "Free link(UNIT_HOPLITE)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_HOPLITE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_PHALANGITE_UNIT",
        "zName": "Free link(UNIT_PHALANGITE)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_PHALANGITE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_PALTON_CAVALRY_UNIT",
        "zName": "Free link(UNIT_PALTON_CAVALRY)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_PALTON_CAVALRY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_CATAPHRACT_ARCHER_UNIT",
        "zName": "Free link(UNIT_CATAPHRACT_ARCHER)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_CATAPHRACT_ARCHER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_HASTATUS_UNIT",
        "zName": "Free link(UNIT_HASTATUS)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_HASTATUS",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_LEGIONARY_UNIT",
        "zName": "Free link(UNIT_LEGIONARY)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_LEGIONARY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_UNIT_SCOUT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_SCOUT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_YIELD_ORDERS",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_YIELD_FOOD",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_YIELD_WOOD",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_YIELD_STONE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_YIELD_IRON",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_YIELD_MONEY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "BONUS_EVENTCITY_POPULATION_BOOM",
        "iCitizens": "1"
      },
      {
        "zType": "BONUS_EVENTCITY_CIVICS_BOOM",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_EVENTCITY_TRAINING_BOOM",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_EVENTCITY_SCIENCE_BOOM",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_EVENTCITY_MONEY_BOOM",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "BONUS_EVENTCITY_ORDERS_BOOM",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "BONUS_ADD_GREAT_SOLDIER",
        "AddCourtier": {
          "Pair": {
            "zIndex": "COURTIER_SOLDIER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_ADD_GREAT_MINISTER",
        "AddCourtier": {
          "Pair": {
            "zIndex": "COURTIER_MINISTER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_ADD_GREAT_MERCHANT",
        "AddCourtier": {
          "Pair": {
            "zIndex": "COURTIER_MERCHANT",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_ADD_GREAT_SCIENTIST",
        "AddCourtier": {
          "Pair": {
            "zIndex": "COURTIER_SCIENTIST",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_DIVORCE_SUBJECT",
        "iDivorcedBySubject": "0"
      },
      {
        "zType": "BONUS_ADOPT_RELIGION",
        "bAdoptReligion": "1"
      },
      {
        "zType": "BONUS_STATE_RELIGION",
        "bStateReligion": "1"
      },
      {
        "zType": "BONUS_NO_COURTIER",
        "bNoCourtier": "1"
      },
      {
        "zType": "BONUS_LEAVE_COUNCIL",
        "bLeaveCouncil": "1",
        "aeAddTraits": {
          "zValue": "TRAIT_SLIGHTED"
        }
      },
      {
        "zType": "BONUS_KILL_CHARACTER",
        "bKillCharacter": "1"
      },
      {
        "zType": "BONUS_KILL_CHARACTER_EXPOSED",
        "bKillCharacter": "1",
        "aeBonuses": {
          "zValue": "BONUS_ASSASSINATION_EXPOSED"
        }
      },
      {
        "zType": "BONUS_ASSASSINATION_EXPOSED",
        "MemoryPlayerOther": "MEMORYPLAYER_ASSASSINATION_EXPOSED",
        "MemoryFamily": "MEMORYFAMILY_ASSASSINATION_EXPOSED"
      },
      {
        "zType": "BONUS_ABDICATE",
        "zName": "Abdication",
        "iLegitimacy": "-10",
        "bAbdicate": "1"
      },
      {
        "zType": "BONUS_HAVE_BASTARD",
        "bHaveBastard": "1"
      },
      {
        "zType": "BONUS_TRIBE_RAID",
        "bTribeRaid": "1"
      },
      {
        "zType": "BONUS_XP_UNIT_SMALL",
        "iXPUnit": "20"
      },
      {
        "zType": "BONUS_XP_UNIT_AVERAGE",
        "iXPUnit": "40"
      },
      {
        "zType": "BONUS_XP_UNIT_LARGE",
        "iXPUnit": "60"
      },
      {
        "zType": "BONUS_XP_CHARACTER_SMALL",
        "iXPCharacter": "20"
      },
      {
        "zType": "BONUS_XP_CHARACTER_AVERAGE",
        "iXPCharacter": "40"
      },
      {
        "zType": "BONUS_XP_CHARACTER_LARGE",
        "iXPCharacter": "60"
      },
      {
        "zType": "BONUS_MAKE_GREAT_SOLDIER",
        "MakeCourtier": "COURTIER_SOLDIER"
      },
      {
        "zType": "BONUS_MAKE_GREAT_MINISTER",
        "MakeCourtier": "COURTIER_MINISTER"
      },
      {
        "zType": "BONUS_MAKE_GREAT_MERCHANT",
        "MakeCourtier": "COURTIER_MERCHANT"
      },
      {
        "zType": "BONUS_MAKE_GREAT_SCIENTIST",
        "MakeCourtier": "COURTIER_SCIENTIST"
      },
      {
        "zType": "BONUS_SET_HERO_ARCHETYPE",
        "SetArchetype": "TRAIT_HERO_ARCHETYPE"
      },
      {
        "zType": "BONUS_SET_COMMANDER_ARCHETYPE",
        "SetArchetype": "TRAIT_COMMANDER_ARCHETYPE"
      },
      {
        "zType": "BONUS_SET_TACTICIAN_ARCHETYPE",
        "SetArchetype": "TRAIT_TACTICIAN_ARCHETYPE"
      },
      {
        "zType": "BONUS_SET_ZEALOT_ARCHETYPE",
        "SetArchetype": "TRAIT_ZEALOT_ARCHETYPE"
      },
      {
        "zType": "BONUS_SET_SCHEMER_ARCHETYPE",
        "SetArchetype": "TRAIT_SCHEMER_ARCHETYPE"
      },
      {
        "zType": "BONUS_SET_ORATOR_ARCHETYPE",
        "SetArchetype": "TRAIT_ORATOR_ARCHETYPE"
      },
      {
        "zType": "BONUS_SET_DIPLOMAT_ARCHETYPE",
        "SetArchetype": "TRAIT_DIPLOMAT_ARCHETYPE"
      },
      {
        "zType": "BONUS_SET_JUDGE_ARCHETYPE",
        "SetArchetype": "TRAIT_JUDGE_ARCHETYPE"
      },
      {
        "zType": "BONUS_SET_BUILDER_ARCHETYPE",
        "SetArchetype": "TRAIT_BUILDER_ARCHETYPE"
      },
      {
        "zType": "BONUS_SET_SCHOLAR_ARCHETYPE",
        "SetArchetype": "TRAIT_SCHOLAR_ARCHETYPE"
      },
      {
        "zType": "BONUS_REMOVE_STUDY_TACTICS",
        "aeRemoveTraits": {
          "zValue": "TRAIT_STUDY_TACTICS"
        }
      },
      {
        "zType": "BONUS_REMOVE_STUDY_RHETORIC",
        "aeRemoveTraits": {
          "zValue": "TRAIT_STUDY_RHETORIC"
        }
      },
      {
        "zType": "BONUS_REMOVE_STUDY_COMMERCE",
        "aeRemoveTraits": {
          "zValue": "TRAIT_STUDY_COMMERCE"
        }
      },
      {
        "zType": "BONUS_REMOVE_STUDY_PHILOSOPHY",
        "aeRemoveTraits": {
          "zValue": "TRAIT_STUDY_PHILOSOPHY"
        }
      },
      {
        "zType": "BONUS_ADD_CITIZEN_1",
        "iCitizens": "1"
      },
      {
        "zType": "BONUS_ADD_CITIZEN_2",
        "iCitizens": "2"
      },
      {
        "zType": "BONUS_ADD_CITIZEN_3",
        "iCitizens": "3"
      },
      {
        "zType": "BONUS_ADD_CITIZEN_4",
        "iCitizens": "4"
      },
      {
        "zType": "BONUS_LOSE_CITIZEN_1",
        "iCitizens": "-1"
      },
      {
        "zType": "BONUS_LOSE_CITIZEN_2",
        "iCitizens": "-2"
      },
      {
        "zType": "BONUS_LOSE_CITIZEN_3",
        "iCitizens": "-3"
      },
      {
        "zType": "BONUS_LOSE_CITIZEN_4",
        "iCitizens": "-4"
      },
      {
        "zType": "BONUS_CULTURE_LEVEL",
        "iCultureLevels": "1"
      },
      {
        "zType": "BONUS_DISCONTENT_UP",
        "iDiscontentLevels": "1"
      },
      {
        "zType": "BONUS_DISCONTENT_DOWN",
        "iDiscontentLevels": "-1"
      },
      {
        "zType": "BONUS_REBEL_UNITS_1",
        "iRebelUnits": "1"
      },
      {
        "zType": "BONUS_REBEL_UNITS_2",
        "iRebelUnits": "2"
      },
      {
        "zType": "BONUS_REBEL_UNITS_3",
        "iRebelUnits": "3"
      },
      {
        "zType": "BONUS_REBEL_UNITS_4",
        "iRebelUnits": "4"
      },
      {
        "zType": "BONUS_UNIT_WORKER",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_WORKER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_ZOROASTRIANISM_DISCIPLE",
        "zName": "Free link(UNIT_ZOROASTRIANISM_DISCIPLE)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_ZOROASTRIANISM_DISCIPLE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_JUDAISM_DISCIPLE",
        "zName": "Free link(UNIT_JUDAISM_DISCIPLE)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_JUDAISM_DISCIPLE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_CHRISTIANITY_DISCIPLE",
        "zName": "Free link(UNIT_CHRISTIANITY_DISCIPLE)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_CHRISTIANITY_DISCIPLE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_MANICHAEISM_DISCIPLE",
        "zName": "Free link(UNIT_MANICHAEISM_DISCIPLE)",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_MANICHAEISM_DISCIPLE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_UNITCLASS_LEVY",
        "aiBonusUnits": {
          "Pair": {
            "zIndex": "BONUSUNITCLASS_LEVY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_UNITCLASS_HEAVY_INFANTRY",
        "aiBonusUnits": {
          "Pair": {
            "zIndex": "BONUSUNITCLASS_HEAVY_INFANTRY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_UNITCLASS_POLEARM_INFANTRY",
        "aiBonusUnits": {
          "Pair": {
            "zIndex": "BONUSUNITCLASS_POLEARM_INFANTRY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_UNITCLASS_RANGED_INFANTRY",
        "aiBonusUnits": {
          "Pair": {
            "zIndex": "BONUSUNITCLASS_RANGED_INFANTRY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_UNITCLASS_MELEE_CAVALRY",
        "aiBonusUnits": {
          "Pair": {
            "zIndex": "BONUSUNITCLASS_MELEE_CAVALRY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_UNITCLASS_SIEGE",
        "aiBonusUnits": {
          "Pair": {
            "zIndex": "BONUSUNITCLASS_SIEGE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_UNITCLASS_SHIP",
        "aiBonusUnits": {
          "Pair": {
            "zIndex": "BONUSUNITCLASS_SHIP",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_GAIN_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_GAIN_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_GAIN_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_GAIN_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "8"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "12"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "16"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_LOSS_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_LOSS_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-3"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_LOSS_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-4"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_LOSS_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-5"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_LOSS_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-7"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_LOSS_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_LOSS_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-15"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_SEND_MINIMAL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_SEND_TINY",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_SEND_SMALL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_SEND_AVERAGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_SEND_LARGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "7"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_SEND_HUGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_SEND_GIGANTIC",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_GAIN_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_GAIN_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_GAIN_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "30"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_GAIN_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "50"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "35"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_LOSS_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_LOSS_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-5"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_LOSS_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-30"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_LOSS_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-50"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-15"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_LOSS_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-25"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_LOSS_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-35"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_LOSS_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-50"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_SEND_MINIMAL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "8"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_SEND_TINY",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "20"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_SEND_SMALL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "30"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_SEND_AVERAGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "50"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_SEND_LARGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "75"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_SEND_HUGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "100"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "35"
          }
        }
      },
      {
        "zType": "BONUS_FOOD_SEND_GIGANTIC",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "150"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_GAIN_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_GAIN_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_GAIN_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "30"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_GAIN_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "50"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "35"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_LOSS_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_LOSS_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-5"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_LOSS_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-30"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_LOSS_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-50"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-15"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_LOSS_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-25"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_LOSS_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-35"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_LOSS_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-50"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_SEND_MINIMAL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "8"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_SEND_TINY",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "20"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_SEND_SMALL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "30"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_SEND_AVERAGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "50"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_SEND_LARGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "75"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_SEND_HUGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "100"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "35"
          }
        }
      },
      {
        "zType": "BONUS_WOOD_SEND_GIGANTIC",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "150"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_IRON_GAIN_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_IRON_GAIN_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_IRON_GAIN_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "30"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_IRON_GAIN_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "50"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_IRON_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "BONUS_IRON_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "35"
          }
        }
      },
      {
        "zType": "BONUS_IRON_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_IRON_LOSS_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_IRON_LOSS_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-5"
          }
        }
      },
      {
        "zType": "BONUS_IRON_LOSS_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-30"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_IRON_LOSS_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-50"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-15"
          }
        }
      },
      {
        "zType": "BONUS_IRON_LOSS_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-25"
          }
        }
      },
      {
        "zType": "BONUS_IRON_LOSS_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-35"
          }
        }
      },
      {
        "zType": "BONUS_IRON_LOSS_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-50"
          }
        }
      },
      {
        "zType": "BONUS_IRON_SEND_MINIMAL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "8"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_IRON_SEND_TINY",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "20"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_IRON_SEND_SMALL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "30"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_IRON_SEND_AVERAGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "50"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_IRON_SEND_LARGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "75"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "BONUS_IRON_SEND_HUGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "100"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "35"
          }
        }
      },
      {
        "zType": "BONUS_IRON_SEND_GIGANTIC",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "150"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_STONE_GAIN_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_STONE_GAIN_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_STONE_GAIN_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "30"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_STONE_GAIN_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "50"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_STONE_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "BONUS_STONE_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "35"
          }
        }
      },
      {
        "zType": "BONUS_STONE_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_STONE_LOSS_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_STONE_LOSS_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-5"
          }
        }
      },
      {
        "zType": "BONUS_STONE_LOSS_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-30"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_STONE_LOSS_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-50"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-15"
          }
        }
      },
      {
        "zType": "BONUS_STONE_LOSS_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-25"
          }
        }
      },
      {
        "zType": "BONUS_STONE_LOSS_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-35"
          }
        }
      },
      {
        "zType": "BONUS_STONE_LOSS_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-50"
          }
        }
      },
      {
        "zType": "BONUS_STONE_SEND_MINIMAL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "8"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_STONE_SEND_TINY",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "20"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_STONE_SEND_SMALL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "30"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_STONE_SEND_AVERAGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "50"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_STONE_SEND_LARGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "75"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "BONUS_STONE_SEND_HUGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "100"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "35"
          }
        }
      },
      {
        "zType": "BONUS_STONE_SEND_GIGANTIC",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "150"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_SCIENCE_GAIN_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "4"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_SCIENCE_GAIN_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_SCIENCE_GAIN_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_SCIENCE_GAIN_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "40"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_SCIENCE_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "60"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_SCIENCE_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "80"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_SCIENCE_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "120"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_GAIN_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_GAIN_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_GAIN_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "40"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_GAIN_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "60"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "80"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "120"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "160"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_LOSS_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_LOSS_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-5"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_LOSS_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-40"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_LOSS_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-60"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-15"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_LOSS_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-80"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_LOSS_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-120"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_LOSS_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-160"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-40"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_SEND_MINIMAL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "8"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_SEND_TINY",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_SEND_SMALL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "40"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_SEND_AVERAGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "60"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_SEND_LARGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "80"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_SEND_HUGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "120"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_SEND_GIGANTIC",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "160"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_GAIN_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_GAIN_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "40"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_GAIN_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "60"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_GAIN_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "80"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "120"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "160"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "240"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_LOSS_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-5"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_LOSS_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-40"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_LOSS_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-60"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-15"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_LOSS_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-80"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_LOSS_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-120"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_LOSS_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-160"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-40"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_LOSS_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-240"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-60"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_SEND_MINIMAL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_SEND_TINY",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "40"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_SEND_SMALL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "60"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_SEND_AVERAGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "80"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_SEND_LARGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "120"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_SEND_HUGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "160"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_SEND_GIGANTIC",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "240"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_GAIN_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "40"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_GAIN_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "80"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_GAIN_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "120"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_GAIN_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "160"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "240"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "320"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "400"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-40"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_TINY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-80"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-120"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-160"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-40"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-240"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-60"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-320"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-80"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-400"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-100"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_MINIMAL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "40"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_TINY",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "80"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_SMALL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "120"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_AVERAGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "160"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_LARGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "240"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_HUGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "320"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_GIGANTIC",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "400"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_MINIMAL_FLAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-100"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_TINY_FLAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-200"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_SMALL_FLAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-300"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_AVERAGE_FLAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-400"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_LARGE_FLAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-600"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_HUGE_FLAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-800"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_GIGANTIC_FLAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-1000"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_GAIN_MINIMAL",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_GAIN_TINY",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_GAIN_SMALL",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_GAIN_AVERAGE",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_GAIN_LARGE",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "120"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_GAIN_HUGE",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "160"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_GAIN_GIGANTIC",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_LOSS_MINIMAL",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_LOSS_TINY",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_LOSS_SMALL",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_LOSS_AVERAGE",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "-40"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_LOSS_LARGE",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "-60"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_LOSS_HUGE",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "-80"
          }
        }
      },
      {
        "zType": "BONUS_DISCONTENT_LOSS_GIGANTIC",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "-100"
          }
        }
      },
      {
        "zType": "BONUS_GROWTH_GAIN_MINIMAL",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_GROWTH_GAIN_TINY",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_GROWTH_GAIN_SMALL",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "BONUS_GROWTH_GAIN_AVERAGE",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_GROWTH_GAIN_LARGE",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "BONUS_GROWTH_GAIN_HUGE",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "120"
          }
        }
      },
      {
        "zType": "BONUS_GROWTH_GAIN_GIGANTIC",
        "aiCityYields": {
          "Pair": {
            "zIndex": "YIELD_GROWTH",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_CULTURE_GAIN_MINIMAL",
        "aaiCultureYield": {
          "Pair": [
            {
              "zIndex": "CULTURE_WEAK",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "5"
              }
            },
            {
              "zIndex": "CULTURE_DEVELOPING",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "10"
              }
            },
            {
              "zIndex": "CULTURE_STRONG",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "20"
              }
            },
            {
              "zIndex": "CULTURE_LEGENDARY",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "50"
              }
            }
          ]
        }
      },
      {
        "zType": "BONUS_CULTURE_GAIN_TINY",
        "aaiCultureYield": {
          "Pair": [
            {
              "zIndex": "CULTURE_WEAK",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "10"
              }
            },
            {
              "zIndex": "CULTURE_DEVELOPING",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "20"
              }
            },
            {
              "zIndex": "CULTURE_STRONG",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "40"
              }
            },
            {
              "zIndex": "CULTURE_LEGENDARY",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "100"
              }
            }
          ]
        }
      },
      {
        "zType": "BONUS_CULTURE_GAIN_SMALL",
        "aaiCultureYield": {
          "Pair": [
            {
              "zIndex": "CULTURE_WEAK",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "20"
              }
            },
            {
              "zIndex": "CULTURE_DEVELOPING",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "40"
              }
            },
            {
              "zIndex": "CULTURE_STRONG",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "80"
              }
            },
            {
              "zIndex": "CULTURE_LEGENDARY",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "200"
              }
            }
          ]
        }
      },
      {
        "zType": "BONUS_CULTURE_GAIN_AVERAGE",
        "aaiCultureYield": {
          "Pair": [
            {
              "zIndex": "CULTURE_WEAK",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "30"
              }
            },
            {
              "zIndex": "CULTURE_DEVELOPING",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "60"
              }
            },
            {
              "zIndex": "CULTURE_STRONG",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "120"
              }
            },
            {
              "zIndex": "CULTURE_LEGENDARY",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "300"
              }
            }
          ]
        }
      },
      {
        "zType": "BONUS_CULTURE_GAIN_LARGE",
        "aaiCultureYield": {
          "Pair": [
            {
              "zIndex": "CULTURE_WEAK",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "40"
              }
            },
            {
              "zIndex": "CULTURE_DEVELOPING",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "80"
              }
            },
            {
              "zIndex": "CULTURE_STRONG",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "160"
              }
            },
            {
              "zIndex": "CULTURE_LEGENDARY",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "400"
              }
            }
          ]
        }
      },
      {
        "zType": "BONUS_CULTURE_GAIN_HUGE",
        "aaiCultureYield": {
          "Pair": [
            {
              "zIndex": "CULTURE_WEAK",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "60"
              }
            },
            {
              "zIndex": "CULTURE_DEVELOPING",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "120"
              }
            },
            {
              "zIndex": "CULTURE_STRONG",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "240"
              }
            },
            {
              "zIndex": "CULTURE_LEGENDARY",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "600"
              }
            }
          ]
        }
      },
      {
        "zType": "BONUS_CULTURE_GAIN_GIGANTIC",
        "aaiCultureYield": {
          "Pair": [
            {
              "zIndex": "CULTURE_WEAK",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "80"
              }
            },
            {
              "zIndex": "CULTURE_DEVELOPING",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "160"
              }
            },
            {
              "zIndex": "CULTURE_STRONG",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "320"
              }
            },
            {
              "zIndex": "CULTURE_LEGENDARY",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "800"
              }
            }
          ]
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_SCIENCE_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "-10"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_SCIENCE_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "-25"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "-5"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_SCIENCE_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "-50"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_SCIENCE_HUGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "-75"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "-15"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_CIVICS_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-25"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-5"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_CIVICS_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-50"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_CIVICS_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-75"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-15"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_CIVICS_HUGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-100"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_TRAINING_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-50"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_TRAINING_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-75"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-15"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_TRAINING_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-100"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_TRAINING_HUGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-150"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_MONEY_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-100"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_MONEY_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-150"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_MONEY_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-200"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-40"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_MONEY_HUGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-300"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-60"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_MONEY_GIGANTIC",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-400"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-80"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_ORDERS_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-5"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_ORDERS_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-10"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_ORDERS_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-25"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-5"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_ORDERS_HUGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-50"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_FOOD_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-20"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-4"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_FOOD_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-50"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_FOOD_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-100"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_FOOD_HUGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-150"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_IRON_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-20"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-4"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_IRON_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-50"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_IRON_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-100"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_IRON_HUGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-150"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_WOOD_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-20"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-4"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_WOOD_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-50"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_WOOD_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-100"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_WOOD_HUGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-150"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_STONE_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-20"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-4"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_STONE_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-50"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_STONE_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-100"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_GIVE_STONE_HUGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-150"
          }
        },
        "aiYieldsTributePerUs": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_SCIENCE_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_SCIENCE_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "25"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_SCIENCE_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "50"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_CIVICS_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "25"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_CIVICS_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "50"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_CIVICS_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "75"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_TRAINING_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "50"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_TRAINING_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "75"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_TRAINING_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "100"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_MONEY_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_MONEY_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "150"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "30"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_MONEY_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_MONEY_HUGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "300"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_MONEY_GIGANTIC",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "400"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_ORDERS_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "5"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_ORDERS_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "10"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_ORDERS_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "20"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_FOOD_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "20"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_FOOD_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "50"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_FOOD_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "100"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_IRON_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "20"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_IRON_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "50"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_IRON_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "100"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_WOOD_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "20"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_WOOD_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "50"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_WOOD_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "100"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_STONE_SMALL",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "20"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_STONE_AVERAGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "50"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_TRIBUTE_RECEIVE_STONE_LARGE",
        "aiYieldsTributeBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "100"
          }
        },
        "aiYieldsTributePerThem": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_CHARACTER_WOUNDED",
        "aeAddTraits": {
          "zValue": "TRAIT_WOUNDED"
        }
      },
      {
        "zType": "BONUS_CHARACTER_SEVERELY_WOUNDED",
        "aeAddTraits": {
          "zValue": "TRAIT_SEVERELY_WOUNDED"
        }
      },
      {
        "zType": "BONUS_DAMAGE_UNIT_LOW",
        "iHPUnit": "-4"
      },
      {
        "zType": "BONUS_DAMAGE_UNIT_MEDIUM",
        "iHPUnit": "-7"
      },
      {
        "zType": "BONUS_DAMAGE_UNIT_HIGH",
        "iHPUnit": "-10"
      },
      {
        "zType": "BONUS_DAMAGE_CITY_LOW",
        "iHPCity": "-4"
      },
      {
        "zType": "BONUS_DAMAGE_CITY_MEDIUM",
        "iHPCity": "-7"
      },
      {
        "zType": "BONUS_DAMAGE_CITY_HIGH",
        "iHPCity": "-10"
      },
      {
        "zType": "BONUS_LEADER_IN_LOVE_WITH",
        "AddLeaderRelationship": "RELATIONSHIP_IN_LOVE_WITH"
      },
      {
        "zType": "BONUS_LEADER_ALLIED_WITH",
        "AddLeaderRelationship": "RELATIONSHIP_ALLIED_WITH"
      },
      {
        "zType": "BONUS_LEADER_LOVER_OF",
        "AddLeaderRelationship": "RELATIONSHIP_LOVER_OF"
      },
      {
        "zType": "BONUS_LEADER_ENDEARED_TO",
        "AddLeaderRelationship": "RELATIONSHIP_ENDEARED_TO"
      },
      {
        "zType": "BONUS_LEADER_TERRIFIED_OF",
        "AddLeaderRelationship": "RELATIONSHIP_TERRIFIED_OF"
      },
      {
        "zType": "BONUS_LEADER_INFLUENCED_BY",
        "AddLeaderRelationship": "RELATIONSHIP_INFLUENCED_BY"
      },
      {
        "zType": "BONUS_LEADER_INTERCESSED_FOR",
        "AddLeaderRelationship": "RELATIONSHIP_INTERCESSED_FOR"
      },
      {
        "zType": "BONUS_LEADER_HOLDS_FAVOR_FROM",
        "AddLeaderRelationship": "RELATIONSHIP_HOLDS_FAVOR_FROM"
      },
      {
        "zType": "BONUS_LEADER_OWES_FAVOR_TO",
        "AddLeaderRelationship": "RELATIONSHIP_OWES_FAVOR_TO"
      },
      {
        "zType": "BONUS_LEADER_JEALOUS_ABOUT",
        "AddLeaderRelationship": "RELATIONSHIP_JEALOUS_ABOUT"
      },
      {
        "zType": "BONUS_LEADER_SUSPICIOUS_OF",
        "AddLeaderRelationship": "RELATIONSHIP_SUSPICIOUS_OF"
      },
      {
        "zType": "BONUS_LEADER_DISAPPOINTED_WITH",
        "AddLeaderRelationship": "RELATIONSHIP_DISAPPOINTED_WITH"
      },
      {
        "zType": "BONUS_LEADER_ESTRANGED_FROM",
        "AddLeaderRelationship": "RELATIONSHIP_ESTRANGED_FROM"
      },
      {
        "zType": "BONUS_LEADER_VENGEFUL_AGAINST",
        "AddLeaderRelationship": "RELATIONSHIP_VENGEFUL_AGAINST"
      },
      {
        "zType": "BONUS_LEADER_PLOTTING_AGAINST",
        "AddLeaderRelationship": "RELATIONSHIP_PLOTTING_AGAINST"
      },
      {
        "zType": "BONUS_LEADER_BYPASSED_BY",
        "AddLeaderRelationship": "RELATIONSHIP_BYPASSED_BY"
      },
      {
        "zType": "BONUS_LEADER_DIVORCED_BY",
        "AddLeaderRelationship": "RELATIONSHIP_DIVORCED_BY"
      },
      {
        "zType": "BONUS_LEADER_IN_LOVE_WITH_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_IN_LOVE_WITH"
      },
      {
        "zType": "BONUS_LEADER_ALLIED_WITH_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_ALLIED_WITH"
      },
      {
        "zType": "BONUS_LEADER_LOVER_OF_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_LOVER_OF"
      },
      {
        "zType": "BONUS_LEADER_ENDEARED_TO_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_ENDEARED_TO"
      },
      {
        "zType": "BONUS_LEADER_TERRIFIED_OF_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_TERRIFIED_OF"
      },
      {
        "zType": "BONUS_LEADER_INFLUENCED_BY_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_INFLUENCED_BY"
      },
      {
        "zType": "BONUS_LEADER_INTERCESSED_FOR_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_INTERCESSED_FOR"
      },
      {
        "zType": "BONUS_LEADER_HOLDS_FAVOR_FROM_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_HOLDS_FAVOR_FROM"
      },
      {
        "zType": "BONUS_LEADER_OWES_FAVOR_TO_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_OWES_FAVOR_TO"
      },
      {
        "zType": "BONUS_LEADER_JEALOUS_ABOUT_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_JEALOUS_ABOUT"
      },
      {
        "zType": "BONUS_LEADER_SUSPICIOUS_OF_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_SUSPICIOUS_OF"
      },
      {
        "zType": "BONUS_LEADER_DISAPPOINTED_WITH_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_DISAPPOINTED_WITH"
      },
      {
        "zType": "BONUS_LEADER_ESTRANGED_FROM_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_ESTRANGED_FROM"
      },
      {
        "zType": "BONUS_LEADER_VENGEFUL_AGAINST_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_VENGEFUL_AGAINST"
      },
      {
        "zType": "BONUS_LEADER_PLOTTING_AGAINST_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_PLOTTING_AGAINST"
      },
      {
        "zType": "BONUS_LEADER_BYPASSED_BY_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_BYPASSED_BY"
      },
      {
        "zType": "BONUS_LEADER_DIVORCED_BY_REMOVE",
        "RemoveLeaderRelationship": "RELATIONSHIP_DIVORCED_BY"
      },
      {
        "zType": "BONUS_GIVE_TRAIT_INTOLERANT",
        "aeAddTraits": {
          "zValue": "TRAIT_INTOLERANT"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_AFFABLE",
        "aeAddTraits": {
          "zValue": "TRAIT_AFFABLE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_ELOQUENT",
        "aeAddTraits": {
          "zValue": "TRAIT_ELOQUENT"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_WARLIKE",
        "aeAddTraits": {
          "zValue": "TRAIT_WARLIKE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_INSPIRING",
        "aeAddTraits": {
          "zValue": "TRAIT_INSPIRING"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_INTELLIGENT",
        "aeAddTraits": {
          "zValue": "TRAIT_INTELLIGENT"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_PROSPEROUS",
        "aeAddTraits": {
          "zValue": "TRAIT_PROSPEROUS"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_FRUGAL",
        "aeAddTraits": {
          "zValue": "TRAIT_FRUGAL"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_RIGHTEOUS",
        "aeAddTraits": {
          "zValue": "TRAIT_RIGHTEOUS"
        }
      },
      {
        "zType": "BONUS_REMOVE_TRAIT_RIGHTEOUS",
        "aeRemoveTraits": {
          "zValue": "TRAIT_RIGHTEOUS"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_CRUEL",
        "aeAddTraits": {
          "zValue": "TRAIT_CRUEL"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_SLOTHFUL",
        "aeAddTraits": {
          "zValue": "TRAIT_SLOTHFUL"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_UNCOUTH",
        "aeAddTraits": {
          "zValue": "TRAIT_UNCOUTH"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_FOOLISH",
        "aeAddTraits": {
          "zValue": "TRAIT_FOOLISH"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_EXTRAVAGANT",
        "aeAddTraits": {
          "zValue": "TRAIT_EXTRAVAGANT"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_CORRUPT",
        "aeAddTraits": {
          "zValue": "TRAIT_CORRUPT"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_DEBAUCHED",
        "aeAddTraits": {
          "zValue": "TRAIT_DEBAUCHED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_ROBUST",
        "aeAddTraits": {
          "zValue": "TRAIT_ROBUST"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_VIGILANT",
        "aeAddTraits": {
          "zValue": "TRAIT_VIGILANT"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_STRICT",
        "aeAddTraits": {
          "zValue": "TRAIT_STRICT"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_EQUESTRIAN",
        "aeAddTraits": {
          "zValue": "TRAIT_EQUESTRIAN"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_CARPENTER",
        "aeAddTraits": {
          "zValue": "TRAIT_CARPENTER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_PATHFINDER",
        "aeAddTraits": {
          "zValue": "TRAIT_PATHFINDER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_CULTIVATOR",
        "aeAddTraits": {
          "zValue": "TRAIT_CULTIVATOR"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_NATURALIST",
        "aeAddTraits": {
          "zValue": "TRAIT_NATURALIST"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_DELVER",
        "aeAddTraits": {
          "zValue": "TRAIT_DELVER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_DEALMAKER",
        "aeAddTraits": {
          "zValue": "TRAIT_DEALMAKER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_TRACKER",
        "aeAddTraits": {
          "zValue": "TRAIT_TRACKER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_SWIFT",
        "aeAddTraits": {
          "zValue": "TRAIT_SWIFT"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_BESIEGER",
        "aeAddTraits": {
          "zValue": "TRAIT_BESIEGER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_TOUGH",
        "aeAddTraits": {
          "zValue": "TRAIT_TOUGH"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_BLOODTHIRSTY",
        "aeAddTraits": {
          "zValue": "TRAIT_BLOODTHIRSTY"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_HECKLER",
        "aeAddTraits": {
          "zValue": "TRAIT_HECKLER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_STEADFAST",
        "aeAddTraits": {
          "zValue": "TRAIT_STEADFAST"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_HERBALIST",
        "aeAddTraits": {
          "zValue": "TRAIT_HERBALIST"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_HIGHLANDER",
        "aeAddTraits": {
          "zValue": "TRAIT_HIGHLANDER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_RANGER",
        "aeAddTraits": {
          "zValue": "TRAIT_RANGER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_BRAVE",
        "aeAddTraits": {
          "zValue": "TRAIT_BRAVE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_SHIELDBEARER",
        "aeAddTraits": {
          "zValue": "TRAIT_SHIELDBEARER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_FIERCE",
        "aeAddTraits": {
          "zValue": "TRAIT_FIERCE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_HORSEBANE",
        "aeAddTraits": {
          "zValue": "TRAIT_HORSEBANE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_ENGINEER",
        "aeAddTraits": {
          "zValue": "TRAIT_ENGINEER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_BOLD",
        "aeAddTraits": {
          "zValue": "TRAIT_BOLD"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_COWARDLY",
        "aeAddTraits": {
          "zValue": "TRAIT_COWARDLY"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_GRACIOUS",
        "aeAddTraits": {
          "zValue": "TRAIT_GRACIOUS"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_GREEDY",
        "aeAddTraits": {
          "zValue": "TRAIT_GREEDY"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_ROMANTIC",
        "aeAddTraits": {
          "zValue": "TRAIT_ROMANTIC"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_BITTER",
        "aeAddTraits": {
          "zValue": "TRAIT_BITTER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_EDUCATED",
        "aeAddTraits": {
          "zValue": "TRAIT_EDUCATED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_SUPERSTITIOUS",
        "aeAddTraits": {
          "zValue": "TRAIT_SUPERSTITIOUS"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_COMPASSIONATE",
        "aeAddTraits": {
          "zValue": "TRAIT_COMPASSIONATE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_RUTHLESS",
        "aeAddTraits": {
          "zValue": "TRAIT_RUTHLESS"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_PIOUS",
        "aeAddTraits": {
          "zValue": "TRAIT_PIOUS"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_WANTON",
        "aeAddTraits": {
          "zValue": "TRAIT_WANTON"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_LOYAL",
        "aeAddTraits": {
          "zValue": "TRAIT_LOYAL"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_CUNNING",
        "aeAddTraits": {
          "zValue": "TRAIT_CUNNING"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_HUMBLE",
        "aeAddTraits": {
          "zValue": "TRAIT_HUMBLE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_PROUD",
        "aeAddTraits": {
          "zValue": "TRAIT_PROUD"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_WITTY",
        "aeAddTraits": {
          "zValue": "TRAIT_WITTY"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_SPOILED",
        "aeAddTraits": {
          "zValue": "TRAIT_SPOILED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_DRUNK",
        "aeAddTraits": {
          "zValue": "TRAIT_DRUNK"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_INSANE",
        "aeAddTraits": {
          "zValue": "TRAIT_INSANE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_STUDY_TACTICS",
        "aeAddTraits": {
          "zValue": "TRAIT_STUDY_TACTICS"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_STUDY_RHETORIC",
        "aeAddTraits": {
          "zValue": "TRAIT_STUDY_RHETORIC"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_STUDY_COMMERCE",
        "aeAddTraits": {
          "zValue": "TRAIT_STUDY_COMMERCE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_STUDY_PHILOSOPHY",
        "aeAddTraits": {
          "zValue": "TRAIT_STUDY_PHILOSOPHY"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_EXPLORING",
        "aeAddTraits": {
          "zValue": "TRAIT_EXPLORING"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_EXOTIC",
        "aeAddTraits": {
          "zValue": "TRAIT_EXOTIC"
        }
      },
      {
        "zType": "BONUS_REMOVE_TRAIT_EXPLORING",
        "aeRemoveTraits": {
          "zValue": "TRAIT_EXPLORING"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_BLESSED",
        "aeAddTraits": {
          "zValue": "TRAIT_BLESSED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_CURSED",
        "aeAddTraits": {
          "zValue": "TRAIT_CURSED"
        }
      },
      {
        "zType": "BONUS_REMOVE_TRAIT_CURSED",
        "aeRemoveTraits": {
          "zValue": "TRAIT_CURSED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_ILL",
        "aeAddTraits": {
          "zValue": "TRAIT_ILL"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_SEVERELY_ILL",
        "aeAddTraits": {
          "zValue": "TRAIT_SEVERELY_ILL"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_INCUBATED",
        "aeAddTraits": {
          "zValue": "TRAIT_INCUBATED"
        }
      },
      {
        "zType": "BONUS_REMOVE_TRAIT_INCUBATED",
        "aeRemoveTraits": {
          "zValue": "TRAIT_INCUBATED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_POISONED",
        "aeAddTraits": {
          "zValue": "TRAIT_POISONED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_MISERABLE",
        "aeAddTraits": {
          "zValue": "TRAIT_MISERABLE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_SCARRED",
        "aeAddTraits": {
          "zValue": "TRAIT_SCARRED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_CRIPPLED",
        "aeAddTraits": {
          "zValue": "TRAIT_CRIPPLED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_BLINDED",
        "aeAddTraits": {
          "zValue": "TRAIT_BLINDED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_IMPRISONED",
        "aeAddTraits": {
          "zValue": "TRAIT_IMPRISONED"
        }
      },
      {
        "zType": "BONUS_REMOVE_TRAIT_IMPRISONED",
        "aeRemoveTraits": {
          "zValue": "TRAIT_IMPRISONED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_FUGITIVE",
        "aeAddTraits": {
          "zValue": "TRAIT_FUGITIVE"
        }
      },
      {
        "zType": "BONUS_REMOVE_TRAIT_FUGITIVE",
        "aeRemoveTraits": {
          "zValue": "TRAIT_FUGITIVE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_MISSING",
        "aeAddTraits": {
          "zValue": "TRAIT_MISSING"
        }
      },
      {
        "zType": "BONUS_REMOVE_TRAIT_MISSING",
        "aeRemoveTraits": {
          "zValue": "TRAIT_MISSING"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_UNDER_ASYLUM",
        "aeAddTraits": {
          "zValue": "TRAIT_UNDER_ASYLUM"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_ELOPED",
        "aeAddTraits": {
          "zValue": "TRAIT_ELOPED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_CAPTURED",
        "aeAddTraits": {
          "zValue": "TRAIT_CAPTURED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_EXILED",
        "aeAddTraits": {
          "zValue": "TRAIT_EXILED"
        }
      },
      {
        "zType": "BONUS_REMOVE_TRAIT_EXILED",
        "aeRemoveTraits": {
          "zValue": "TRAIT_EXILED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_DOOMED",
        "aeAddTraits": {
          "zValue": "TRAIT_DOOMED"
        }
      },
      {
        "zType": "BONUS_REMOVE_TRAIT_DOOMED",
        "aeRemoveTraits": {
          "zValue": "TRAIT_DOOMED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_GAY",
        "aeAddTraits": {
          "zValue": "TRAIT_GAY"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_BASTARD",
        "aeAddTraits": {
          "zValue": "TRAIT_BASTARD"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_LEGITIMIZED",
        "aeAddTraits": {
          "zValue": "TRAIT_LEGITIMIZED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_ADOPTED",
        "aeAddTraits": {
          "zValue": "TRAIT_ADOPTED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_PREGNANT",
        "aeAddTraits": {
          "zValue": "TRAIT_PREGNANT"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_SLIGHTED",
        "aeAddTraits": {
          "zValue": "TRAIT_SLIGHTED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_CLERGY",
        "aeAddTraits": {
          "zValue": "TRAIT_CLERGY"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_ASCETIC",
        "aeAddTraits": {
          "zValue": "TRAIT_ASCETIC"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_FAMOUS",
        "aeAddTraits": {
          "zValue": "TRAIT_FAMOUS"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_INFAMOUS",
        "aeAddTraits": {
          "zValue": "TRAIT_INFAMOUS"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_ABDICATED",
        "aeAddTraits": {
          "zValue": "TRAIT_ABDICATED"
        }
      },
      {
        "zType": "BONUS_REMOVE_TRAIT_ABDICATED",
        "aeRemoveTraits": {
          "zValue": "TRAIT_ABDICATED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_RIGHTFUL_HEIR",
        "aeAddTraits": {
          "zValue": "TRAIT_RIGHTFUL_HEIR"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_EXCLUDED",
        "aeAddTraits": {
          "zValue": "TRAIT_EXCLUDED"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_DIVINE",
        "aeAddTraits": {
          "zValue": "TRAIT_DIVINE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_SOLDIER",
        "aeAddTraits": {
          "zValue": "TRAIT_SOLDIER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_MOURNING",
        "aeAddTraits": {
          "zValue": "TRAIT_MOURNING"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_PROPHET",
        "aeAddTraits": {
          "zValue": "TRAIT_PROPHET"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_ARCHON",
        "aeAddTraits": {
          "zValue": "TRAIT_ARCHON"
        }
      },
      {
        "zType": "BONUS_REMOVE_TRAIT_DOG_OWNER",
        "aeRemoveTraits": {
          "zValue": "TRAIT_DOG_OWNER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_DOG_OWNER",
        "aeAddTraits": {
          "zValue": "TRAIT_DOG_OWNER"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_DROUGHT_STRICKEN",
        "aeAddTraits": {
          "zValue": "TRAIT_DROUGHT_STRICKEN"
        }
      },
      {
        "zType": "BONUS_REMOVE_TRAIT_DROUGHT_STRICKEN",
        "aeRemoveTraits": {
          "zValue": "TRAIT_DROUGHT_STRICKEN"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_MYSTERIOUS_SWORD",
        "aeAddTraits": {
          "zValue": "TRAIT_MYSTERIOUS_SWORD"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_PET_MONKEY",
        "aeAddTraits": {
          "zValue": "TRAIT_PET_MONKEY"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_ARTIST",
        "aeAddTraits": {
          "zValue": "TRAIT_ARTIST"
        }
      },
      {
        "zType": "BONUS_PROJECT_PROTECTION_EDICTS",
        "zName": "Issued protection edicts",
        "iLegitimacy": "2",
        "aeAddProjects": {
          "zValue": "PROJECT_PROTECTION_EDICTS"
        }
      },
      {
        "zType": "BONUS_PROJECT_ROYAL_INSCRIPTIONS",
        "zName": "Erected royal inscriptions",
        "iLegitimacy": "2",
        "aeAddProjects": {
          "zValue": "PROJECT_ROYAL_INSCRIPTIONS"
        }
      },
      {
        "zType": "BONUS_STUDY_DID_NOT_EXPEL",
        "MemoryAllFamilies": "MEMORYFAMILY_DID_NOT_EXPEL_STUDENT"
      },
      {
        "zType": "BONUS_SHRINE_DEDICATION_MEMORY_YES",
        "MemoryReligion": "MEMORYRELIGION_SHRINE_DEDICATION_YES"
      },
      {
        "zType": "BONUS_SHRINE_DEDICATION_MEMORY_NO",
        "MemoryReligion": "MEMORYRELIGION_SHRINE_DEDICATION_NO"
      },
      {
        "zType": "BONUS_IMPRISON_FAMILY_HEAD_UNJUST",
        "MemoryFamily": "MEMORYFAMILY_IMPRISONED_FAMILY_HEAD_UNJUST"
      },
      {
        "zType": "BONUS_FAMILY_LIED",
        "MemoryFamily": "MEMORYFAMILY_LIED"
      },
      {
        "zType": "BONUS_SECOND_CLASS_PLAYER_NEG",
        "MemoryPlayer": "MEMORYPLAYER_SECOND_CLASS_CITIZENS_NEG"
      },
      {
        "zType": "BONUS_SECOND_CLASS_PLAYER_POS",
        "MemoryPlayer": "MEMORYPLAYER_SECOND_CLASS_CITIZENS_POS"
      },
      {
        "zType": "BONUS_SUPPORTED_FAITH_YES",
        "MemoryReligion": "MEMORYRELIGION_SUPPORTED_FAITH"
      },
      {
        "zType": "BONUS_SUPPORTED_FAITH_NO",
        "MemoryReligion": "MEMORYRELIGION_REFUSED_SUPPORT"
      },
      {
        "zType": "BONUS_RELEASE_AGENT",
        "bReleaseAgent": "1"
      },
      {
        "zType": "BONUS_KILL_UNIT",
        "bKillUnit": "1"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_MARBLE",
        "AddResource": "RESOURCE_MARBLE"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_ORE",
        "AddResource": "RESOURCE_ORE"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_SALT",
        "AddResource": "RESOURCE_SALT"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_GEM",
        "AddResource": "RESOURCE_GEM"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_GOLD",
        "AddResource": "RESOURCE_GOLD"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_SILVER",
        "AddResource": "RESOURCE_SILVER"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_HORSE",
        "AddResource": "RESOURCE_HORSE"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_CATTLE",
        "AddResource": "RESOURCE_CATTLE"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_SHEEP",
        "AddResource": "RESOURCE_SHEEP"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_PIG",
        "AddResource": "RESOURCE_PIG"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_GOAT",
        "AddResource": "RESOURCE_GOAT"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_WHEAT",
        "AddResource": "RESOURCE_WHEAT"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_BARLEY",
        "AddResource": "RESOURCE_BARLEY"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_SORGHUM",
        "AddResource": "RESOURCE_SORGHUM"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_CAMEL",
        "AddResource": "RESOURCE_CAMEL"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_ELEPHANT",
        "AddResource": "RESOURCE_ELEPHANT"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_GAME",
        "AddResource": "RESOURCE_GAME"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_FUR",
        "AddResource": "RESOURCE_FUR"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_CITRUS",
        "AddResource": "RESOURCE_CITRUS"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_HONEY",
        "AddResource": "RESOURCE_HONEY"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_INCENSE",
        "AddResource": "RESOURCE_INCENSE"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_LAVENDER",
        "AddResource": "RESOURCE_LAVENDER"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_OLIVE",
        "AddResource": "RESOURCE_OLIVE"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_WINE",
        "AddResource": "RESOURCE_WINE"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_DYE",
        "AddResource": "RESOURCE_DYE"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_PEARL",
        "AddResource": "RESOURCE_PEARL"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_FISH",
        "AddResource": "RESOURCE_FISH"
      },
      {
        "zType": "BONUS_CITY_ADD_RESOURCE_CRAB",
        "AddResource": "RESOURCE_CRAB"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_100_YEARS",
        "Achievement": "ACHIEVEMENT_100_YEARS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_ASSASSINATED_ANOTHER_LEADER",
        "Achievement": "ACHIEVEMENT_ASSASSINATED_ANOTHER_LEADER",
        "bKillCharacter": "1"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_ASSASSINATED_HEIR",
        "Achievement": "ACHIEVEMENT_ASSASSINATED_HEIR",
        "bKillCharacter": "1"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_BLADE_OF_THE_MONKEY",
        "Achievement": "ACHIEVEMENT_BLADE_OF_THE_MONKEY"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_BLADE_OF_THE_MONKEY_KILL",
        "Achievement": "ACHIEVEMENT_BLADE_OF_THE_MONKEY",
        "bKillCharacter": "1"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_ROMAN_PAPACY",
        "Achievement": "ACHIEVEMENT_ROMAN_PAPACY"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_ELEPHANTINE_ELEPHANT",
        "Achievement": "ACHIEVEMENT_ELEPHANTINE_ELEPHANT"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_KNOWLEDGE_ANCIENTS",
        "Achievement": "ACHIEVEMENT_KNOWLEDGE_ANCIENTS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_FAMILY_FURIOUS",
        "Achievement": "ACHIEVEMENT_FAMILY_FURIOUS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_FAMILY_FRIENDLY",
        "Achievement": "ACHIEVEMENT_FAMILY_FRIENDLY"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_COUNCIL_OF_MADNESS",
        "Achievement": "ACHIEVEMENT_COUNCIL_OF_MADNESS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_MEMPHIS_PYRAMIDS",
        "Achievement": "ACHIEVEMENT_MEMPHIS_PYRAMIDS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_UR_GREAT_ZIGGURAT",
        "Achievement": "ACHIEVEMENT_UR_GREAT_ZIGGURAT"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_DELPHI_ORACLE",
        "Achievement": "ACHIEVEMENT_DELPHI_ORACLE"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_BABYLON_HANGING_GARDENS",
        "Achievement": "ACHIEVEMENT_BABYLON_HANGING_GARDENS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_THEBES_NECROPOLIS",
        "Achievement": "ACHIEVEMENT_THEBES_NECROPOLIS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_BABYLON_ISHTAR_GATE",
        "Achievement": "ACHIEVEMENT_BABYLON_ISHTAR_GATE"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_ALEXANDRIA_LIGHTHOUSE",
        "Achievement": "ACHIEVEMENT_ALEXANDRIA_LIGHTHOUSE"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_PERSEPOLIS_APADANA",
        "Achievement": "ACHIEVEMENT_PERSEPOLIS_APADANA"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_HALICARNASSUS_MAUSOLEUM",
        "Achievement": "ACHIEVEMENT_HALICARNASSUS_MAUSOLEUM"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_ATHENS_ACROPOLIS",
        "Achievement": "ACHIEVEMENT_ATHENS_ACROPOLIS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_RHODES_COLOSSUS",
        "Achievement": "ACHIEVEMENT_RHODES_COLOSSUS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_ALEXANDRIA_MUSAEUM",
        "Achievement": "ACHIEVEMENT_ALEXANDRIA_MUSAEUM"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_ROMA_CIRCUS_MAXIMUS",
        "Achievement": "ACHIEVEMENT_ROMA_CIRCUS_MAXIMUS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_ROMA_PANTHEON",
        "Achievement": "ACHIEVEMENT_ROMA_PANTHEON"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_BYZANTIUM_HAGIA_SOPHIA",
        "Achievement": "ACHIEVEMENT_BYZANTIUM_HAGIA_SOPHIA"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_DAMASCUS_VIA_RECTA_SOUK",
        "Achievement": "ACHIEVEMENT_DAMASCUS_VIA_RECTA_SOUK"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_OLD_WORLD_ORDER",
        "Achievement": "ACHIEVEMENT_OLD_WORLD_ORDER"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_POWER_TO_THE_PEOPLE",
        "Achievement": "ACHIEVEMENT_POWER_TO_THE_PEOPLE"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_PANTHEON_OF_GODS",
        "Achievement": "ACHIEVEMENT_PANTHEON_OF_GODS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_THE_WORD_OF_GOD",
        "Achievement": "ACHIEVEMENT_THE_WORD_OF_GOD"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_ALEXANDER_THE_GREAT",
        "Achievement": "ACHIEVEMENT_ALEXANDER_THE_GREAT"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_PUNIC_WARS",
        "Achievement": "ACHIEVEMENT_PUNIC_WARS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_MACEDONIAN_WARS",
        "Achievement": "ACHIEVEMENT_MACEDONIAN_WARS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_BATTLE_OF_OPIS",
        "Achievement": "ACHIEVEMENT_BATTLE_OF_OPIS"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_MEDOBABYLONIAN_CONQUEST",
        "Achievement": "ACHIEVEMENT_MEDOBABYLONIAN_CONQUEST"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_CLEOPATRAS_LOVE",
        "Achievement": "ACHIEVEMENT_CLEOPATRAS_LOVE"
      },
      {
        "zType": "BONUS_ACHIEVEMENT_ALEXANDER_THE_WHO",
        "Achievement": "ACHIEVEMENT_ALEXANDER_THE_WHO"
      }
    ]
  }
}
    export default data
    