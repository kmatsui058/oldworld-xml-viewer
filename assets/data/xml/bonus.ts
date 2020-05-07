
    const data: XmlBonus.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "zName": {
          "comment": "Bonus title string. This is ONLY necessary if this bonus changes Legitimacy."
        },
        "MemoryPlayer": {
          "comment": "Memory received by the Player Subject."
        },
        "ForgetPlayer": {
          "comment": "Memory forgotten by the Player Subject."
        },
        "MemoryBarb": {
          "comment": "Memory received by the Barbarian Subject."
        },
        "ForgetBarb": {
          "comment": "Memory forgotten by the Barbarian Subject."
        },
        "MemoryReligion": {
          "comment": "Memory received by the Religion Subject."
        },
        "ForgetReligion": {
          "comment": "Memory forgotten by the Religion Subject."
        },
        "MemoryFamily": {
          "comment": "Memory received by the Family Subject."
        },
        "ForgetFamily": {
          "comment": "Memory forgotten by the Family Subject."
        },
        "MemoryAllFamilies": {
          "comment": "Memory received by all your noble Families."
        },
        "MemoryCharacter": {
          "comment": "Memory received by the character Subject."
        },
        "ForgetCharacter": {
          "comment": "Memory forgotten by the character Subject."
        },
        "DiplomacyPlayer": {
          "comment": "Diplomacy state (from diplomacy.xml) to which the Player Subject is set."
        },
        "DiplomacyBarb": {
          "comment": "Diplomacy state (from diplomacy.xml) to which the Barbarian Subject is set."
        },
        "MakeCourtier": {
          "comment": "Makes the character Subject into this type of courtier which is added to the Player's court."
        },
        "StartLaw": {
          "comment": "Law enacted. You must pay the normal Civics cost."
        },
        "FreeLaw": {
          "comment": "Law enacted for free (i.e. no Civics cost)."
        },
        "FoundReligion": {
          "comment": "Religion founded."
        },
        "AdoptReligion": {
          "comment": "Religion adopted as your state Religion."
        },
        "FreeTheology": {
          "comment": "Theology added to your state Religion (if any)."
        },
        "Quest": {
          "comment": "A Goal given to the Player (similar to Ambitions)"
        },
        "Ambition": {
          "comment": "Adds this Ambition to the Player"
        },
        "DesiredAmbition": {
          "comment": "Adds this Desired Ambition to the Character"
        },
        "Mission": {
          "comment": "Starts a Mission."
        },
        "Council": {
          "comment": "Makes the Character this Council member."
        },
        "SetArchetype": {
          "comment": "Gives the Character this Archetype Trait (and will remove the old one)."
        },
        "SetNickname": {
          "comment": "Cognomen (from cognomen.xml) received by the character Subject. Should never be used on the Leader."
        },
        "SetVegetation": {
          "comment": "Sets the Tile's Vegetation."
        },
        "SetResource": {
          "comment": "Sets the Tile's Resource."
        },
        "SetImprovement": {
          "comment": "Sets the Tile's Improvement."
        },
        "iRevealRange": {
          "comment": "Reveals this range distance from the Tile."
        },
        "iCitizens": {
          "comment": "Number of citizens added to the City Subject."
        },
        "iBorderGrowth": {
          "comment": "Adds this many Tiles to the City's territory."
        },
        "iCultureLevels": {
          "comment": "Number of Culture levels (regardless of cost) gained by the City Subject."
        },
        "iDiscontentLevels": {
          "comment": "Number of Discontent levels gained by the City Subject."
        },
        "iRebelUnits": {
          "comment": "Number of rebel Units spawned by the City Subject."
        },
        "iDestroyImprovements": {
          "comment": "Number of random Improvements destroyed at the City Subject."
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
          "comment": "Amount of Legitimacy gained or lost by the Player."
        },
        "iDiplomacyPlayer": {
          "comment": "Changes the Diplomacy level by this value (Peace = 0, Truce = 1, War = 2)."
        },
        "iMarrySubject": {
          "comment": "Character will marry the previous Subject at this index."
        },
        "iAdoptedBySubject": {
          "comment": "Character will be adopted by the previous Subject at this index."
        },
        "iGovernorOfSubject": {
          "comment": "Character will be Governor of the previous Subject City at this index."
        },
        "iGeneralOfSubject": {
          "comment": "Character will be General of the previous Subject Unit at this index."
        },
        "iSpreadToSubject": {
          "comment": "Religion will spread to the previous Subject City at this index."
        },
        "iTradeResourceSubject": {
          "comment": "Trades the Resources to previous Subject at this index."
        },
        "iMissionSubject": {
          "comment": "The Mission will target the previous Subject at this index."
        },
        "bRevealTerritory": {
          "comment": "Will reveal all the territory of this Player."
        },
        "bCancelTrade": {
          "comment": "Will cancel trade with this Player."
        },
        "bPlayerAlliance": {
          "comment": "Will make an Alliance with this Player."
        },
        "bPlayerAllianceEnd": {
          "comment": "Will end an Alliance with this Player."
        },
        "bBarbAlliance": {
          "comment": "Will make an Alliance with this Barbarian."
        },
        "bBarbAllianceEnd": {
          "comment": "Will end an Alliance with this Barbarian."
        },
        "bBarbInvade": {
          "comment": "Tribe will send a number of Units to raid the Player."
        },
        "bStateReligion": {
          "comment": "Make this Religion the Player's State Religion."
        },
        "bStateReligionEnd": {
          "comment": "Clears the Player's State Religion."
        },
        "bFoundReligion": {
          "comment": "The Player will found a random Religion."
        },
        "bStartLaw": {
          "comment": "Starts the Law and pays the Civics cost."
        },
        "bFreeLaw": {
          "comment": "Starts the Law without paying the cost."
        },
        "bFreeTheology": {
          "comment": "Establishes the Theology without paying the cost."
        },
        "bFreeTech": {
          "comment": "The Player will receive a random free Tech."
        },
        "bNoCourtier": {
          "comment": "Character will no longer be a Courtier."
        },
        "bLeaveCouncil": {
          "comment": "Character will no longer be on the Council."
        },
        "bReleaseGeneral": {
          "comment": "If set to 1 (true), the character Subject will be released from being a general if they are one."
        },
        "bChangeSuccession": {
          "comment": "If set to 1 (true), the game will automatically attempt to set the Player’s inheritance laws so that the character Subject will become your direct heir. Any law changes made cost no Civics."
        },
        "bDivorce": {
          "comment": "If set to 1 (true), the character Subject gets divorced."
        },
        "bAbdicate": {
          "comment": "If set to 1 (true), the character Subject abdicates the throne."
        },
        "bSeizeThrone": {
          "comment": "Character will become the new Leader"
        },
        "bChosenHeir": {
          "comment": "Make this Character the Chosen Heir"
        },
        "bDoomCharacter": {
          "comment": "If set to 1 (true), the character Subject becomes doomed (meaning they are guaranteed to die within a few years)."
        },
        "bKillCharacter": {
          "comment": "If set to 1 (true), the character Subject dies immediately."
        },
        "bHaveBastard": {
          "comment": "Character will have a bastard child"
        },
        "bKillUnit": {
          "comment": "If set to 1 (true), the Unit Subject dies immediately."
        },
        "bRemoveVegetation": {
          "comment": "Removes Vegetation from the Tile."
        },
        "aiCityYields": {
          "comment": "List of Yields (Money, Science, etc.) gained in the City Subject."
        },
        "aiGlobalYieldsBase": {
          "comment": "List of Yields (Money, Science, etc.) gained by the Player. This is distinct from aicityYields in that it is added directly to the national stockpile, not to any particular City."
        },
        "aiGlobalYieldsPer": {
          "comment": "List of Yields per City gained by the Player. For example, if this is 20 Money, and the Player has 3 cities, the Player will gain 60 Money."
        },
        "aiYieldsSendBase": {
          "comment": "Send this Yield (lump sum) to the other Player (and deduct it from this Player's stockpile)."
        },
        "aiYieldsSendPerUs": {
          "comment": "Send this Yield (per this Player's Cities) to the other Player (and deduct it from this Player's stockpile)."
        },
        "aiYieldsSendPerThem": {
          "comment": "Send this Yield (per other Player's Cities) to the other Player (and deduct it from this Player's stockpile)."
        },
        "aiYieldsExchangeBase": {
          "comment": "List of Yields (lump sum) both sides gain in trade."
        },
        "aiYieldsExchangePerUs": {
          "comment": "List of Yields (per this Player's Cities) both sides gain in trade."
        },
        "aiYieldsExchangePerThem": {
          "comment": "List of Yields (per other Player's Cities) both sides gain in trade."
        },
        "aiYieldsTradeBase": {
          "comment": "List of Yields (lump sum) gained in trade. If this value is positive, this Player receives the Yields; if it’s negative, the other Player receives the Yields."
        },
        "aiYieldsTradePerUs": {
          "comment": "List of Yields (per this Player's Cities) gained in trade. If this value is positive, this Player receives the Yields; if it’s negative, the other Player receives the Yields."
        },
        "aiYieldsTradePerThem": {
          "comment": "List of Yields (per other Player's Cities) gained in trade. If this value is positive, this Player receives the Yields; if it’s negative, the other Player receives the Yields."
        },
        "aiYieldsTributeBase": {
          "comment": "List of Yields (lump sum) to be given to this Subject as tribute. If this value is positive, the Player will receive tribute; if it’s negative, the Player will give tribute."
        },
        "aiYieldsTributePerUs": {
          "comment": "List of Yields (per this Player's Cities) to be given to this Subject as tribute. If this value is positive, the Player will receive tribute; if it’s negative, the Player will give tribute."
        },
        "aiYieldsTributePerThem": {
          "comment": "List of Yields (per other Player's Cities) to be given to this Subject as tribute. If this value is positive, the Player will receive tribute; if it’s negative, the Player will give tribute."
        },
        "aiUnits": {
          "comment": "List of Units that will appear near the City Subject."
        },
        "aiBonusUnits": {
          "comment": "List of bonus Units (from bonusUnitClass.xml) that will appear near the Subject City. bonusUnitClass awards you the highest-indexed Unit you have researched in the indicated category."
        },
        "aiLawOpinion": {
          "comment": "List of permanent opinion changes to laws added to the Family Subject. For example, if you could put Centralization and -5 here, the Family would gain a -5 opinion of the Centralization law."
        },
        "aiRatings": {
          "comment": "List of changes to ratings (Charisma, Courage, etc.) applied to the character Subject."
        },
        "aiTraitDie": {
          "comment": "List of traits with probability weights. One of these will be randomyl added to the character Subject."
        },
        "aeAddProjects": {
          "comment": "List of projects added to the City Subject."
        },
        "aeRemoveProjects": {
          "comment": "List of projects removed from the City Subject."
        },
        "aeAddSpecialistClasses": {
          "comment": "List of specialists to be added to the City Subject."
        },
        "aePromotions": {
          "comment": "List of promotions gained by the Unit led by the character Subject."
        },
        "aeAddTraits": {
          "comment": "List of traits gained by the character Subject."
        },
        "aeRemoveTraits": {
          "comment": "List of traits removed from the character Subject."
        },
        "aeTechs": {
          "comment": "List of techs gained by the Player."
        },
        "aeCultureProject": {
          "comment": "List of projects added to the City Subject, based on the City’s Culture value in zIndex."
        },
        "aaiCultureYield": {
          "comment": "List of Yields added to the City Subject, based on the City’s Culture value in zIndex."
        },
        "aeBonuses": {
          "comment": "List of other bonuses to be added onto this one. This is for use with the scaling bonuses found in bonus.xml. [Please avoid making infinite bonus loops.]"
        },
        "aeFamilyBonuses": {
          "comment": "Bonuses are applied to all Cities of this Family."
        },
        "aeAllCityBonuses": {
          "comment": "Bonuses are applied to all the Player's Cities."
        },
        "DiplomacySubjects": {
          "comment": "Subject will enter this Diplomacy state with the previous Subject at this index."
        },
        "AddRelationshipSubjects": {
          "comment": "Give this Character a Relationship with the previous Character at this index."
        },
        "AddRelationshipReverse": {
          "comment": "Give the previous Character at this index a Relationship with this Character."
        },
        "RemoveRelationshipSubjects": {
          "comment": "Remove the Relationship of this Character with the previous Character at this index."
        },
        "RemoveRelationshipReverse": {
          "comment": "Remove the Relationship of the previous Character at this index with this Character."
        },
        "AddCourtierGender": {
          "comment": "List of courtiers with assigned gender to be added to the Player's court."
        }
      },
      {
        "zType": {
          
        },
        "zName": {
          
        },
        "MemoryPlayer": {
          
        },
        "ForgetPlayer": {
          
        },
        "MemoryBarb": {
          
        },
        "ForgetBarb": {
          
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
        "DiplomacyPlayer": {
          
        },
        "DiplomacyBarb": {
          
        },
        "MakeCourtier": {
          
        },
        "StartLaw": {
          
        },
        "FreeLaw": {
          
        },
        "FoundReligion": {
          
        },
        "AdoptReligion": {
          
        },
        "FreeTheology": {
          
        },
        "Quest": {
          
        },
        "Ambition": {
          
        },
        "DesiredAmbition": {
          
        },
        "Mission": {
          
        },
        "Council": {
          
        },
        "SetArchetype": {
          
        },
        "SetNickname": {
          
        },
        "SetVegetation": {
          
        },
        "SetResource": {
          
        },
        "SetImprovement": {
          
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
        "iDiplomacyPlayer": {
          
        },
        "iMarrySubject": {
          
        },
        "iAdoptedBySubject": {
          
        },
        "iGovernorOfSubject": {
          
        },
        "iGeneralOfSubject": {
          
        },
        "iSpreadToSubject": {
          
        },
        "iTradeResourceSubject": {
          
        },
        "iMissionSubject": {
          
        },
        "bRevealTerritory": {
          
        },
        "bCancelTrade": {
          
        },
        "bPlayerAlliance": {
          
        },
        "bPlayerAllianceEnd": {
          
        },
        "bBarbAlliance": {
          
        },
        "bBarbAllianceEnd": {
          
        },
        "bBarbInvade": {
          
        },
        "bStateReligion": {
          
        },
        "bStateReligionEnd": {
          
        },
        "bFoundReligion": {
          
        },
        "bStartLaw": {
          
        },
        "bFreeLaw": {
          
        },
        "bFreeTheology": {
          
        },
        "bFreeTech": {
          
        },
        "bNoCourtier": {
          
        },
        "bLeaveCouncil": {
          
        },
        "bReleaseGeneral": {
          
        },
        "bChangeSuccession": {
          
        },
        "bDivorce": {
          
        },
        "bAbdicate": {
          
        },
        "bSeizeThrone": {
          
        },
        "bChosenHeir": {
          
        },
        "bDoomCharacter": {
          
        },
        "bKillCharacter": {
          
        },
        "bHaveBastard": {
          
        },
        "bKillUnit": {
          
        },
        "bRemoveVegetation": {
          
        },
        "aiCityYields": {
          
        },
        "aiGlobalYieldsBase": {
          
        },
        "aiGlobalYieldsPer": {
          
        },
        "aiYieldsSendBase": {
          
        },
        "aiYieldsSendPerUs": {
          
        },
        "aiYieldsSendPerThem": {
          
        },
        "aiYieldsExchangeBase": {
          
        },
        "aiYieldsExchangePerUs": {
          
        },
        "aiYieldsExchangePerThem": {
          
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
        "aiBonusUnits": {
          
        },
        "aiLawOpinion": {
          
        },
        "aiRatings": {
          
        },
        "aiTraitDie": {
          
        },
        "aeAddProjects": {
          
        },
        "aeRemoveProjects": {
          
        },
        "aeAddSpecialistClasses": {
          
        },
        "aePromotions": {
          
        },
        "aeAddTraits": {
          
        },
        "aeRemoveTraits": {
          
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
        "AddCourtierGender": {
          
        }
      },
      {
        "zType": "BONUS_SKIP_SEAT",
        "zName": "Skipped Family Seat",
        "iLegitimacy": "-5"
      },
      {
        "zType": "BONUS_FAMILY_FOUND",
        "iCitizens": "1"
      },
      {
        "zType": "BONUS_BARBARIAN_FOUND",
        "zName": "Founded at Barbarian Site",
        "iLegitimacy": "-10"
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
        "zType": "BONUS_FINISHED_WONDER",
        "zName": "Built a Wonder",
        "iLegitimacy": "2"
      },
      {
        "zType": "BONUS_CONVERT_LEGITIMACY",
        "zName": "Used for {YIELD_ORDERS}",
        "iLegitimacy": "-1",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_LEADER_ADOPTS",
        "zName": "Ruler Adopted a Child",
        "iLegitimacy": "-2"
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
        "iLegitimacy": "-2"
      },
      {
        "zType": "BONUS_BARBARIAN_MARRIAGE",
        "zName": "Married a Barbarian",
        "iLegitimacy": "-2"
      },
      {
        "zType": "BONUS_BARBARIAN_WAR",
        "DiplomacyBarb": "DIPLOMACY_WAR"
      },
      {
        "zType": "BONUS_BARBARIAN_WAR_LEGITIMACY",
        "zName": "Unafraid of Barbarians",
        "DiplomacyBarb": "DIPLOMACY_WAR",
        "iLegitimacy": "2"
      },
      {
        "zType": "BONUS_DECLARE_WAR_BARBARIAN",
        "MemoryBarb": "MEMORYBARBARIAN_DECLARED_WAR",
        "DiplomacyBarb": "DIPLOMACY_WAR"
      },
      {
        "zType": "BONUS_BARBARIAN_TRUCE",
        "DiplomacyBarb": "DIPLOMACY_TRUCE"
      },
      {
        "zType": "BONUS_BARBARIAN_PEACE",
        "DiplomacyBarb": "DIPLOMACY_PEACE"
      },
      {
        "zType": "BONUS_BARBARIAN_ALLIANCE",
        "zName": "Barbarian Alliance",
        "iLegitimacy": "-2",
        "bBarbAlliance": "1"
      },
      {
        "zType": "BONUS_BARBARIAN_INVASION",
        "bBarbInvade": "1"
      },
      {
        "zType": "BONUS_BARBARIAN_INVASION_LEGITIMACY",
        "zName": "Unafraid of Invasion",
        "iLegitimacy": "4",
        "bBarbInvade": "1"
      },
      {
        "zType": "BONUS_CANCEL_TRADE",
        "MemoryPlayer": "MEMORYPLAYER_CANCELLED_TRADE",
        "bCancelTrade": "1"
      },
      {
        "zType": "BONUS_DECLARE_WAR_PLAYER",
        "MemoryPlayer": "MEMORYPLAYER_DECLARED_WAR",
        "DiplomacyPlayer": "DIPLOMACY_WAR",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_OFFER"
        }
      },
      {
        "zType": "BONUS_PLAYER_WAR",
        "DiplomacyPlayer": "DIPLOMACY_WAR",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_OFFER"
        }
      },
      {
        "zType": "BONUS_PLAYER_WAR_LEGITIMACY",
        "zName": "Unafraid of War",
        "DiplomacyPlayer": "DIPLOMACY_WAR",
        "iLegitimacy": "2",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_OFFER"
        }
      },
      {
        "zType": "BONUS_PLAYER_TRUCE",
        "DiplomacyPlayer": "DIPLOMACY_TRUCE",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_OFFER"
        }
      },
      {
        "zType": "BONUS_PLAYER_PEACE",
        "DiplomacyPlayer": "DIPLOMACY_PEACE",
        "aeBonuses": {
          "zValue": "BONUS_PLAYER_OFFER"
        }
      },
      {
        "zType": "BONUS_PLAYER_OFFER",
        "MemoryPlayer": "MEMORYPLAYER_OFFER"
      },
      {
        "zType": "BONUS_FAMILY_CLASS_LANDOWNERS_SEAT",
        "iCitizens": "2"
      },
      {
        "zType": "BONUS_FAMILY_CLASS_CHAMPIONS_SEAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "BONUS_FAMILY_CLASS_STATESMEN",
        "aeAddProjects": {
          "zValue": "PROJECT_TREASURY_1"
        }
      },
      {
        "zType": "BONUS_FAMILY_CLASS_STATESMEN_SEAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "BONUS_FAMILY_CLASS_PATRONS_SEAT",
        "iCultureLevels": "1"
      },
      {
        "zType": "BONUS_FAMILY_CLASS_CLERICS_SEAT",
        "bFoundReligion": "1"
      },
      {
        "zType": "BONUS_FAMILY_CLASS_SAGES_SEAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "BONUS_FAMILY_CLASS_TRADERS_SEAT",
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_MERCHANT",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_FAMILY_CLASS_ARTISANS_SEAT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_WORKER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_FAMILY_CLASS_RIDERS"
      },
      {
        "zType": "BONUS_FAMILY_CLASS_RIDERS_SEAT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_SCOUT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_FAMILY_CLASS_HUNTERS_SEAT",
        "aiGlobalYieldsBase": {
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
        "zType": "BONUS_GAIN_COURAGE",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_LOSE_COURAGE",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "BONUS_GAIN_CHARISMA",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_LOSE_CHARISMA",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "BONUS_GAIN_DISCIPLINE",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_LOSE_DISCIPLINE",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "BONUS_GAIN_WISDOM",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_LOSE_WISDOM",
        "aiRatings": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "iValue": "-1"
          }
        }
      },
      {
        "zType": "BONUS_REVEAL_MAP",
        "iRevealRange": "5"
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
        "zType": "BONUS_IMPROVEMENT_ISHTAR_GATE",
        "iCultureLevels": "1"
      },
      {
        "zType": "BONUS_IMPROVEMENT_PANTHEON",
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_MERCHANT",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_AMBASSADOR",
        "Council": "COUNCIL_AMBASSADOR"
      },
      {
        "zType": "BONUS_MISSIONRESULT_CHANCELLOR",
        "Council": "COUNCIL_CHANCELLOR"
      },
      {
        "zType": "BONUS_MISSIONRESULT_SPYMASTER",
        "Council": "COUNCIL_SPYMASTER"
      },
      {
        "zType": "BONUS_MISSIONRESULT_ABDICATE",
        "zName": "Abdication",
        "iLegitimacy": "-2",
        "bAbdicate": "1"
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
        "zName": "Infiltrate",
        "bRevealTerritory": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_ASSASSINATE_KILL",
        "zName": "Assassinate (Kill)",
        "bKillCharacter": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_ASSASSINATE_KILL_EXPOSED",
        "zName": "Assassinate (Kill, Exposed)",
        "MemoryFamily": "MEMORYFAMILY_ASSASSINATION_EXPOSED",
        "iLegitimacy": "-2",
        "bKillCharacter": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_ASSASSINATE_FAIL_EXPOSED",
        "zName": "Assassinate (Fail, Exposed)",
        "MemoryFamily": "MEMORYFAMILY_ASSASSINATION_EXPOSED",
        "iLegitimacy": "-2"
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
        "zType": "BONUS_MISSIONRESULT_IMPRISON_JUST",
        "zName": "Imprison (Just)",
        "MemoryFamily": "MEMORYFAMILY_MEMBER_IMPRISONED",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "500"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        },
        "aeAddTraits": {
          "zValue": [
            "TRAIT_IMPRISONED",
            "TRAIT_SLIGHTED"
          ]
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_IMPRISON_UNJUST",
        "zName": "Imprison (Unjust)",
        "MemoryFamily": "MEMORYFAMILY_MEMBER_IMPRISONED",
        "iLegitimacy": "-2",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "500"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        },
        "aeAddTraits": {
          "zValue": [
            "TRAIT_IMPRISONED",
            "TRAIT_SLIGHTED"
          ]
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_IMPRISON_ESCAPE",
        "zName": "Imprison (Escape)",
        "iLegitimacy": "-2",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "500"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
          }
        },
        "aeAddTraits": {
          "zValue": [
            "TRAIT_SLIGHTED",
            "TRAIT_ON_THE_RUN"
          ]
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_RELEASE_GRATEFUL",
        "zName": "Release (Grateful)",
        "aeRemoveTraits": {
          "zValue": [
            "TRAIT_IMPRISONED",
            "TRAIT_SLIGHTED"
          ]
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_RELEASE_BITTER",
        "zName": "Release (Bitter)",
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
          "zValue": "TRAIT_ON_THE_RUN"
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
          "zValue": "TRAIT_HIDING_ABROAD"
        },
        "aeRemoveTraits": {
          "zValue": "TRAIT_ON_THE_RUN"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_CAPTURE_FAIL",
        "zName": "Capture (Fail)"
      },
      {
        "zType": "BONUS_MISSIONRESULT_MARRY",
        "zName": "Marry",
        "iMarrySubject": "0"
      },
      {
        "zType": "BONUS_MISSIONRESULT_DIVORCE_MUTUAL",
        "zName": "Divorce (Mutual)",
        "bDivorce": "1"
      },
      {
        "zType": "BONUS_MISSIONRESULT_DIVORCE_FORCED",
        "zName": "Divorce (Forced)",
        "MemoryFamily": "MEMORYFAMILY_DIVORCE_FORCED",
        "bDivorce": "1",
        "aeBonuses": {
          "zValue": "BONUS_MONEY_LOSS_LARGE"
        }
      },
      {
        "zType": "BONUS_MISSIONRESULT_CAPTURED_RANSOM",
        "zName": "Capture Ransom",
        "aeRemoveTraits": {
          "zValue": "TRAIT_CAPTURED"
        }
      },
      {
        "zType": "BONUS_NATION_CARTHAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "BONUS_NATION_EGYPT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_DECREE_1",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_DECREE_2",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_DECREE_3",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "8"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_DECREE_4",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "10"
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
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_INQUIRY_2",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "120"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_INQUIRY_3",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "160"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_INQUIRY_4",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_HUNT_1",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_HUNT_2",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_HUNT_3",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "150"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_HUNT_4",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_OLYMPICS_1",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_OLYMPICS_2",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_OLYMPICS_3",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_OLYMPICS_4",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_CONVOY_1",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_CONVOY_2",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "120"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_CONVOY_3",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_PROJECT_CONVOY_4",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "300"
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
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_TECH_HUSBANDRY_BONUS_FOOD",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_TECH_POLIS_BONUS_SETTLER",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_SETTLER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_NAVIGATION_BONUS_BIREME",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_BIREME",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_SPOKED_WHEEL_BONUS_CHARIOT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_CHARIOT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_RAMPARTS_BONUS_ARCHER",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_ARCHER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_CITIZENSHIP_BONUS_MINISTER",
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_MINISTER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_DRAWBRIDGE_BONUS_MACEMAN",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_MACEMAN",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_LAND_CONSOLIDATION_BONUS_WAR_ELEPHANT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_WAR_ELEPHANT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_THEOLOGY_BONUS_ORDERS",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "12"
          }
        }
      },
      {
        "zType": "BONUS_TECH_COINAGE_BONUS_MONEY",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "BONUS_TECH_SCHOLARSHIP_BONUS_SCIENTIST",
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_SCIENTIST",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_TORSION_BONUS_BALLISTA",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_BALLISTA",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_STIRRUPS_BONUS_HORSEMAN",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_HORSEMAN",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_ARCHITECTURE_BONUS_CIVICS",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "500"
          }
        }
      },
      {
        "zType": "BONUS_TECH_MANOR_BONUS_GOODS",
        "aiGlobalYieldsBase": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "200"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "200"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "200"
            }
          ]
        }
      },
      {
        "zType": "BONUS_TECH_MACHINERY_BONUS_CATAPULT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_CATAPULT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_MOUNTED_ARCHERY_BONUS_HORSE_ARCHER",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_HORSE_ARCHER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_MOUNTED_ARCHERY_BONUS_CAMEL_ARCHER",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_CAMEL_ARCHER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_CARTOGRAPHY_BONUS_TRIREME",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_TRIREME",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_LATEEN_SAIL_BONUS_DROMON",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_DROMON",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_LATEEN_SAIL_BONUS_MERCHANT",
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_MERCHANT",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_BODKIN_ARROW_BONUS_TRAINING",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "BONUS_TECH_AESTHETICS_BONUS_BORDERS",
        "aeAllCityBonuses": {
          "zValue": "BONUS_TECH_AESTHETICS_BONUS_BORDERS_ALL"
        }
      },
      {
        "zType": "BONUS_TECH_AESTHETICS_BONUS_BORDERS_ALL",
        "iBorderGrowth": "5"
      },
      {
        "zType": "BONUS_TECH_UNIT_TACTICS_BONUS_SOLDIER",
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_SOLDIER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_STRATEGY_BONUS_TRAINING",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "1500"
          }
        }
      },
      {
        "zType": "BONUS_TECH_MILITARY_REFORM",
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_SOLDIER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_POLITICAL_REFORM",
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_MINISTER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_ECONOMIC_REFORM",
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_MERCHANT",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_TECH_BATTERING_RAM_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_BATTERING_RAM",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_SIEGE_TOWER_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_SIEGE_TOWER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_AKKADIAN_ARCHER_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_AKKADIAN_ARCHER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_CIMMERIAN_ARCHER_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_CIMMERIAN_ARCHER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_AFRICAN_ELEPHANT_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_AFRICAN_ELEPHANT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_TURRETED_ELEPHANT_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_TURRETED_ELEPHANT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_LIGHT_CHARIOT_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_LIGHT_CHARIOT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_KUSHITE_CAVALRY_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_KUSHITE_CAVALRY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_HOPLITE_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_HOPLITE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_PHALANGITE_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_PHALANGITE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_PALTON_CAVALRY_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_PALTON_CAVALRY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_CATAPHRACT_ARCHER_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_CATAPHRACT_ARCHER",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_HASTATUS_UNIT",
        "aiUnits": {
          "Pair": {
            "zIndex": "UNIT_HASTATUS",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "BONUS_TECH_LEGIONARY_UNIT",
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
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_SOLDIER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_ADD_GREAT_MINISTER",
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_MINISTER",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_ADD_GREAT_MERCHANT",
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_MERCHANT",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_ADD_GREAT_SCIENTIST",
        "AddCourtierGender": {
          "Pair": {
            "zIndex": "COURTIER_GREAT_SCIENTIST",
            "zValue": "NONE"
          }
        }
      },
      {
        "zType": "BONUS_DOOM_CHARACTER",
        "bDoomCharacter": "1"
      },
      {
        "zType": "BONUS_KILL_CHARACTER",
        "bKillCharacter": "1"
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
        "zType": "BONUS_SET_DIPLOMAT_ARCHETYPE",
        "SetArchetype": "TRAIT_DIPLOMAT_ARCHETYPE"
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
        "zType": "BONUS_DISCONTENT_UP",
        "iDiscontentLevels": "1"
      },
      {
        "zType": "BONUS_DISCONTENT_DOWN",
        "iDiscontentLevels": "-1"
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
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "7"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "BONUS_ORDERS_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "15"
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
            "iValue": "30"
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
            "iValue": "50"
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
            "iValue": "75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "35"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "50"
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
            "iValue": "-30"
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
            "iValue": "-50"
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
            "iValue": "-75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-25"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_LOSS_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-35"
          }
        }
      },
      {
        "zType": "BONUS_CIVICS_LOSS_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-50"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_GAIN_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_GAIN_TINY",
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
        "zType": "BONUS_TRAINING_GAIN_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "30"
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
        "zType": "BONUS_TRAINING_GAIN_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "50"
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
        "zType": "BONUS_TRAINING_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "35"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_LOSS_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-8"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_LOSS_TINY",
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
        "zType": "BONUS_TRAINING_LOSS_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-30"
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
        "zType": "BONUS_TRAINING_LOSS_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-50"
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
        "zType": "BONUS_TRAINING_LOSS_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-25"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_LOSS_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-35"
          }
        }
      },
      {
        "zType": "BONUS_TRAINING_LOSS_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-50"
          }
        }
      },
      {
        "zType": "BONUS_SCIENCE_GAIN_MINIMAL",
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
        "zType": "BONUS_SCIENCE_GAIN_TINY",
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
        "zType": "BONUS_SCIENCE_GAIN_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "30"
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
        "zType": "BONUS_SCIENCE_GAIN_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "50"
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
        "zType": "BONUS_SCIENCE_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "75"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "BONUS_SCIENCE_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "100"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "35"
          }
        }
      },
      {
        "zType": "BONUS_SCIENCE_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "150"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_GAIN_MINIMAL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_GAIN_TINY",
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
        "zType": "BONUS_MONEY_GAIN_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "60"
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
        "zType": "BONUS_MONEY_GAIN_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "100"
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
        "zType": "BONUS_MONEY_GAIN_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
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
        "zType": "BONUS_MONEY_GAIN_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "250"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_GAIN_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
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
            "iValue": "-20"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-5"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_TINY",
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
        "zType": "BONUS_MONEY_LOSS_SMALL",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-60"
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
        "zType": "BONUS_MONEY_LOSS_AVERAGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-100"
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
        "zType": "BONUS_MONEY_LOSS_LARGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-200"
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
        "zType": "BONUS_MONEY_LOSS_HUGE",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-250"
          }
        },
        "aiGlobalYieldsPer": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-50"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_GIGANTIC",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-200"
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
            "iValue": "-400"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_AVERAGE_FLAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-600"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_LARGE_FLAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-1000"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_HUGE_FLAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-1600"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_LOSS_GIGANTIC_FLAT",
        "aiGlobalYieldsBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-2400"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_MINIMAL",
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
        "zType": "BONUS_MONEY_SEND_TINY",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "800"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_SMALL",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "1200"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_AVERAGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "2000"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "600"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_LARGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "3000"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_HUGE",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "4000"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "1500"
          }
        }
      },
      {
        "zType": "BONUS_MONEY_SEND_GIGANTIC",
        "aiYieldsSendBase": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "5000"
          }
        },
        "aiYieldsSendPerUs": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "2000"
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
        "zType": "BONUS_GIVE_TRAIT_AFFABLE",
        "aeAddTraits": {
          "zValue": "TRAIT_AFFABLE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_INTELLIGENT",
        "aeAddTraits": {
          "zValue": "TRAIT_INTELLIGENT"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_STRICT",
        "aeAddTraits": {
          "zValue": "TRAIT_STRICT"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_BOLD",
        "aeAddTraits": {
          "zValue": "TRAIT_BOLD"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_ROMANTIC",
        "aeAddTraits": {
          "zValue": "TRAIT_ROMANTIC"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_MOURNING",
        "aeAddTraits": {
          "zValue": "TRAIT_MOURNING"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_HUMBLE",
        "aeAddTraits": {
          "zValue": "TRAIT_HUMBLE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_RUTHLESS",
        "aeAddTraits": {
          "zValue": "TRAIT_RUTHLESS"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_STEADFAST",
        "aeAddTraits": {
          "zValue": "TRAIT_STEADFAST"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_BRAVE",
        "aeAddTraits": {
          "zValue": "TRAIT_BRAVE"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_RIGHTEOUS",
        "aeAddTraits": {
          "zValue": "TRAIT_RIGHTEOUS"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_LOYAL",
        "aeAddTraits": {
          "zValue": "TRAIT_LOYAL"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_GRACIOUS",
        "aeAddTraits": {
          "zValue": "TRAIT_GRACIOUS"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_PROUD",
        "aeAddTraits": {
          "zValue": "TRAIT_PROUD"
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
        "zType": "BONUS_GIVE_TRAIT_SEVERELY_ILL",
        "aeAddTraits": {
          "zValue": "TRAIT_SEVERELY_ILL"
        }
      },
      {
        "zType": "BONUS_GIVE_TRAIT_SLIGHTED",
        "aeAddTraits": {
          "zValue": "TRAIT_SLIGHTED"
        }
      }
    ]
  }
}
    export default data
    