
    const data: XmlEventStory.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          "comment": "Event title string."
        },
        "Text": {
          "comment": "Reference to the text-eventStory entry."
        },
        "zBackgroundName": {
          
        },
        "zEventURL": {
          "comment": "External link to a webpage with background infomation"
        },
        "zAudioTrigger": {
          "comment": "The Audio event name to be triggered on the opening of the modal decision popup."
        },
        "zEventAuthor": {
          "comment": "The author of this Event"
        },
        "aeSubjects": {
          "comment": "List of subjects that participate in this Event. A valid, unique possibility for each listed eventSubject must be found in order for this Event to trigger."
        },
        "SubjectRepeatTurns": {
          "comment": "Minimum turns between events for each Subject. -1 means that it can only happen once per game for that Subject. First is the index of the Subject (starting at 0),  and Second is the turns."
        },
        "SubjectExtras": {
          "comment": "Extra test for the Subjects. There can be an unlimited number of tests for each Subject. First is the index of the Subject (starting at 0),  and Second is the SUBJECT test itself."
        },
        "SubjectRelations": {
          "comment": "An unlimited number of tests between subjects. First and Third are the indexes of the Subjects. Second is the SUBJECTRELATION test itself. Place the compared subjects in reverse order, so that the one with the higher index goes in the first slot."
        },
        "aeBonuses": {
          "comment": "Bonuses attached directly to the EventStory are processed prior to Player being given the Options, and occur regardless of Option chosen. One Bonus per Subject. (Use NONE if there is to be no Bonus for a given Subject.) Bonuses need to be in the same order as the Subjects. (Bonus #1 applies to Subject #1.)"
        },
        "aeOptions": {
          "comment": "List of eventOptions this Event uses. Options will be displayed to the user in the order they are entered here."
        },
        "Class": {
          "comment": "Event class, which can be used to separate Trigger events."
        },
        "Trigger": {
          "comment": "Event trigger from the list in eventTrigger. May or may not require TriggerData. Each new trigger type must be individually implemented in code."
        },
        "TriggerData": {
          "comment": "For eventTriggers that require a specific entry. For instance, if you wanted an Event to trigger when you discovered a specific tech, you would put EVENTSTORYTRIGGER_TECHNOLOGY in Trigger, and the tech’s zType in TriggerData."
        },
        "iTriggerSubject": {
          "comment": "Some Triggers have specific Subjects associated with them. (For example, ADULTHOOD passes in the Character that became an adult.) Normally, this Subject is at index 0. However, if the Subject needs to be at a different index, that index can be set here. Use only when necessary."
        },
        "iTriggerExtra": {
          "comment": "Works the same as iTriggerSubject but for a second Subject. (For example, RUINS_EXPLORED passes in the Tile as the iTriggerSubject and the Unit as the iTriggerExtra.) Defaults to -1, which ignores the second Subject."
        },
        "iImageSubject": {
          "comment": "If you want the Event mini-portrait to be drawn from a Subject other than Subject 0, specify here. (Note that the background art image for the Event is a different thing than the character mini-portrait.)"
        },
        "iImageExtra": {
          "comment": "A second character portrait to be drawn. Defaults to -1, which means not to draw a second portrat."
        },
        "EventLinkPrereq": {
          "comment": "If this Event is to be a followup to a prior Event, via an EventLink object, specify that object here. EventLink objects will fire off only once per link. If no  matching Event is found to be eligible, the link will expire unused."
        },
        "iEventLinkTurns": {
          "comment": "Number of turns that this Event will trigger, after the EventLink specified in the previous field was activated by a prior Event."
        },
        "TechPrereq": {
          "comment": "Tech that the Player must have researched in order for this Event to trigger."
        },
        "TechInvalid": {
          "comment": "Tech that prevents this Event from triggering if the Player has researched it."
        },
        "LawPrereq": {
          "comment": "Law that the Player must have active in order for this Event to trigger."
        },
        "CouncilInvalid": {
          "comment": "The Event will only happen if the Player does not have this position filled."
        },
        "iMinLeader": {
          "comment": "Minimum leader number required for this Event to trigger. For example, if this is set to 2, then the Event will not trigger for your first Leader."
        },
        "iMinTurns": {
          "comment": "Minimum turn number required for this Event to trigger."
        },
        "iPriority": {
          "comment": "Priority over other valid events. An Event will always be picked over another Event with a lower priority value. If multiple events are tied, iWeight and iProb are used to randomly break the tie."
        },
        "iWeight": {
          "comment": "Weight used when randomly picking events to trigger. (1 is the default.) An Event with a weight of 2 is twice as likely to get picked as an Event with a weight of 1. Note: This should NOT be set over 20."
        },
        "iProb": {
          "comment": "Probability of this Event being added to the possible Event pool (on the current turn only) if it meets the other prereqs. Values are from 1-100 (0 is ignored). For example, if this is set to 75, there is only a 75% chance  that the Event will be added to the Event pool. (Use this in conjunction with iWeight to lower probabilities.)"
        },
        "iRepeatTurns": {
          "comment": "The minimum number of turns between when an Event  triggers and when it is allowed to trigger again. If -1, the Event can only trigger once per game."
        },
        "bHidePrereqs": {
          "comment": "Event text will not explicitly tell you what prereqs enabled this Event to trigger."
        },
        "bNoCharacters": {
          "comment": "Event will not happen if the NO_CHARACTER flag is set (for example, in the Multiplayer Mod)"
        },
        "bModal": {
          "comment": "Event will occur immediately, even during the middle of a turn, when triggered. This is redundant (useless) for triggers that only fire between turns or at the start of a new turn."
        },
        "bAllOptions": {
          "comment": "Event will ONLY occur if all options are enabled."
        },
        "bIgnoreOptions": {
          "comment": "Ignores the unit test that ensures that one option must always be valid."
        },
        "bTutorial": {
          "comment": "If set to 1 (true), this Event will ONLY occur when the user has selected Enabled for Tutorial / Teaching events."
        },
        "aiMortalitySkipProb": {
          "comment": "Chances that the Event will be skipped based on the Game's Mortality level"
        },
        "aeLawInvalid": {
          "comment": "List of laws that prevent this Event from triggering if the Player has any of them active."
        },
        "aeEventStoryNoRepeat": {
          "comment": "List of events that iRepeatTurns checks against. For example, if you have several events in here and an iRepeatTurns of 40, then this Event will not trigger within 40 turns after any of the listed events. You do not need to list the Event itself here, but it won’t break anything if you do. The purpose of this is to ensure variety. Let’s say you have a bunch of events to hire different mercenaries. If any one of them triggers, then none of them will trigger for a while, thus preventing the Player from seeing a bunch of very similar events one after the other."
        }
      },
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "Text": {
          
        },
        "zBackgroundName": {
          
        },
        "zEventURL": {
          
        },
        "zAudioTrigger": {
          
        },
        "zEventAuthor": {
          
        },
        "aeSubjects": {
          
        },
        "SubjectRepeatTurns": {
          
        },
        "SubjectExtras": {
          
        },
        "SubjectRelations": {
          
        },
        "aeBonuses": {
          
        },
        "aeOptions": {
          
        },
        "Class": {
          
        },
        "Trigger": {
          
        },
        "TriggerData": {
          
        },
        "iTriggerSubject": {
          
        },
        "iTriggerExtra": {
          
        },
        "iImageSubject": {
          
        },
        "iImageExtra": {
          
        },
        "EventLinkPrereq": {
          
        },
        "iEventLinkTurns": {
          
        },
        "TechPrereq": {
          
        },
        "TechInvalid": {
          
        },
        "LawPrereq": {
          
        },
        "CouncilInvalid": {
          
        },
        "iMinLeader": {
          
        },
        "iMinTurns": {
          
        },
        "iPriority": {
          
        },
        "iWeight": {
          
        },
        "iProb": {
          
        },
        "iRepeatTurns": {
          
        },
        "bHidePrereqs": {
          
        },
        "bNoCharacters": {
          
        },
        "bModal": {
          
        },
        "bAllOptions": {
          
        },
        "bIgnoreOptions": {
          
        },
        "bTutorial": {
          
        },
        "aiMortalitySkipProb": {
          
        },
        "aeLawInvalid": {
          
        },
        "aeEventStoryNoRepeat": {
          
        }
      },
      {
        "beginGroup": "Exploration",
        "zType": "EVENTSTORY_RUINS_SURVIVORS",
        "Name": "TEXT_EVENTSTORY_RUINS_SURVIVORS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_SURVIVORS",
        "zBackgroundName": "Captured_Soldiers",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_SURVIVORS_INVITE",
            "EVENTOPTION_RUINS_SURVIVORS_EXPLORE"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_RITUAL_PERFORMANCE",
        "Name": "TEXT_EVENTSTORY_RUINS_RITUAL_PERFORMANCE_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_RITUAL_PERFORMANCE",
        "zBackgroundName": "DEFAULT",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_RITUAL_PERFORMANCE_COTTAGE",
            "EVENTOPTION_RUINS_RITUAL_PERFORMANCE_AMPHITHEATER",
            "EVENTOPTION_RUINS_RITUAL_PERFORMANCE_TRAIT"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_RUINS_CARVED_WALL",
        "Name": "TEXT_EVENTSTORY_RUINS_CARVED_WALL_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_CARVED_WALL",
        "zBackgroundName": "Ruins2",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_CARVED_WALL_CEREMONY_IMPERIAL_CULT",
            "EVENTOPTION_RUINS_CARVED_WALL_LEAVE"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_RUINS_MONUMENTS_OF_LAW",
        "Name": "TEXT_EVENTSTORY_RUINS_MONUMENTS_OF_LAW_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_MONUMENTS_OF_LAW",
        "zBackgroundName": "mysterious pillar",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_MONUMENTS_OF_LAW_SAGES",
            "EVENTOPTION_RUINS_MONUMENTS_OF_LAW_CITIZENS"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_HUNGRY_LOREKEEPERS",
        "Name": "TEXT_EVENTSTORY_RUINS_HUNGRY_LOREKEEPERS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_HUNGRY_LOREKEEPERS",
        "zBackgroundName": "Ruins",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_HUNGRY_LOREKEEPERS_FEED",
            "EVENTOPTION_RUINS_HUNGRY_LOREKEEPERS_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_RUINS_HIDDEN_JEWELS",
        "Name": "TEXT_EVENTSTORY_RUINS_HIDDEN_JEWELS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_HIDDEN_JEWELS",
        "zBackgroundName": "Explore_Cave",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE_ARID"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_HIDDEN_JEWELS_LEAVE",
            "EVENTOPTION_RUINS_HIDDEN_JEWELS_STAY"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_FRIGHTENED_FAMILIES",
        "Name": "TEXT_EVENTSTORY_RUINS_FRIGHTENED_FAMILIES_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_FRIGHTENED_FAMILIES",
        "zBackgroundName": "Farm Couple",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_UNIT_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_FRIGHTENED_FAMILIES_JOIN",
            "EVENTOPTION_RUINS_FRIGHTENED_FAMILIES_GUARD",
            "EVENTOPTION_RUINS_FRIGHTENED_FAMILIES_SCOUT"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iTriggerExtra": "1",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_ELDERLY_COUPLE",
        "Name": "TEXT_EVENTSTORY_RUINS_ELDERLY_COUPLE_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_ELDERLY_COUPLE",
        "zBackgroundName": "Farm Couple",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_ELDERLY_COUPLE_HELP",
            "EVENTOPTION_RUINS_ELDERLY_COUPLE_ABDUCTED"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "2",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_RUINS_ELDERLY_COUPLE_WITCH",
        "Name": "TEXT_EVENTSTORY_RUINS_ELDERLY_COUPLE_WITCH_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_ELDERLY_COUPLE_WITCH",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_ELDERLY_COUPLE_WITCH_SACRIFICE",
            "EVENTOPTION_RUINS_ELDERLY_COUPLE_WITCH_DISMISS"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_RUINS_ELDERLY_COUPLE_ABDUCTED",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_DESPOILED_RUINS",
        "Name": "TEXT_EVENTSTORY_RUINS_DESPOILED_RUINS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_DESPOILED_RUINS",
        "zBackgroundName": "DEFAULT",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_DESPOILED_RUINS_STONE",
            "EVENTOPTION_RUINS_DESPOILED_RUINS_IRON",
            "EVENTOPTION_RUINS_DESPOILED_RUINS_WOOD"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_HAUNTED_QUARRY",
        "Name": "TEXT_EVENTSTORY_RUINS_HAUNTED_QUARRY_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_HAUNTED_QUARRY",
        "zBackgroundName": "DEFAULT",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_HAUNTED_QUARRY_EXAMINE",
            "EVENTOPTION_RUINS_HAUNTED_QUARRY_HAUL",
            "EVENTOPTION_RUINS_HAUNTED_QUARRY_LEAVE"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_RUINS_BURLY_SMITH",
        "Name": "TEXT_EVENTSTORY_RUINS_BURLY_SMITH_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_BURLY_SMITH",
        "zBackgroundName": "DEFAULT",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_BURLY_SMITH_LEARN",
            "EVENTOPTION_RUINS_BURLY_SMITH_LOOT"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "2",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_RUINS_GOOD_FENCES",
        "Name": "TEXT_EVENTSTORY_RUINS_GOOD_FENCES_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_GOOD_FENCES",
        "zBackgroundName": "Farm Couple",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE_TEMPERATE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_GOOD_FENCES_PASTURE",
            "EVENTOPTION_RUINS_GOOD_FENCES_MEAT",
            "EVENTOPTION_RUINS_GOOD_FENCES_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "2",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_RUINS_TRIBAL_HUNTERS",
        "Name": "TEXT_EVENTSTORY_RUINS_TRIBAL_HUNTERS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_TRIBAL_HUNTERS",
        "zBackgroundName": "Ruins",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_TRIBAL_HUNTERS_KILL",
            "EVENTOPTION_RUINS_TRIBAL_HUNTERS_OBSERVE"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "2",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_RUINS_STAR_CHARTS",
        "Name": "TEXT_EVENTSTORY_RUINS_STAR_CHARTS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_STAR_CHARTS",
        "zBackgroundName": "DEFAULT",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_STAR_CHARTS_YOUTH",
            "EVENTOPTION_RUINS_STAR_CHARTS_STARGAZER"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_FRUIT_TREES",
        "Name": "TEXT_EVENTSTORY_RUINS_FRUIT_TREES_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_FRUIT_TREES",
        "zBackgroundName": "Explore_Jungle",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE_LUSH"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_FRUIT_TREES_FRUIT",
            "EVENTOPTION_RUINS_FRUIT_TREES_WOOD",
            "EVENTOPTION_RUINS_FRUIT_TREES_CULTURE"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_OLD_SOLDIER",
        "Name": "TEXT_EVENTSTORY_RUINS_OLD_SOLDIER_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_OLD_SOLDIER",
        "zBackgroundName": "Ruins2",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_OLD_SOLDIER_MILITARY_DRILL",
            "EVENTOPTION_RUINS_OLD_SOLDIER_INVITE"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_RUINS_WEARY_RAIDERS",
        "Name": "TEXT_EVENTSTORY_RUINS_WEARY_RAIDERS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_WEARY_RAIDERS",
        "zBackgroundName": "DEFAULT",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_BARBARIAN_WAR"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_WEARY_RAIDERS_LABOR",
            "EVENTOPTION_RUINS_WEARY_RAIDERS_FIGHT"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "TechInvalid": "TECH_STEEL",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_GREAT_MIGRATION",
        "Name": "TEXT_EVENTSTORY_RUINS_GREAT_MIGRATION_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_GREAT_MIGRATION",
        "zBackgroundName": "Ruins",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_GREAT_MIGRATION_OPTION_0",
            "EVENTOPTION_RUINS_GREAT_MIGRATION_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RUINS_VULGAR_SPEECH",
        "Name": "TEXT_EVENTSTORY_RUINS_VULGAR_SPEECH_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_VULGAR_SPEECH",
        "zBackgroundName": "mysterious pillar",
        "zEventURL": "https://en.wikipedia.org/wiki/Vulgar_Latin",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_ROME"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_VULGAR_SPEECH_OPTION_0",
            "EVENTOPTION_RUINS_VULGAR_SPEECH_OPTION_1",
            "EVENTOPTION_RUINS_VULGAR_SPEECH_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RUINS_ANCIENT_BARBARIANS",
        "Name": "TEXT_EVENTSTORY_RUINS_ANCIENT_BARBARIANS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_ANCIENT_BARBARIANS",
        "zBackgroundName": "Statue",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN_MAX_NEAR"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_ANCIENT_BARBARIANS_OPTION_0",
            "EVENTOPTION_RUINS_ANCIENT_BARBARIANS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RUINS_THE_WATCHERS",
        "Name": "TEXT_EVENTSTORY_RUINS_THE_WATCHERS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_THE_WATCHERS",
        "zBackgroundName": "Statue",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_THE_WATCHERS_OPTION_0",
            "EVENTOPTION_RUINS_THE_WATCHERS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iMinLeader": "2",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_ANCIENT_SITE",
        "Name": "TEXT_EVENTSTORY_ANCIENT_SITE_TITLE",
        "Text": "TEXT_EVENTSTORY_ANCIENT_SITE",
        "zBackgroundName": "Ruins",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ANCIENT_SITE_RAZE",
            "EVENTOPTION_ANCIENT_SITE_PRESERVE",
            "EVENTOPTION_ANCIENT_SITE_OFFERINGS"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_SACRED_TOMB",
        "Name": "TEXT_EVENTSTORY_SACRED_TOMB_TITLE",
        "Text": "TEXT_EVENTSTORY_SACRED_TOMB",
        "zBackgroundName": "DEFAULT",
        "zEventURL": "https://en.wikipedia.org/wiki/Tomb_of_Cyrus",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SACRED_TOMB_LEAVE",
            "EVENTOPTION_SACRED_TOMB_DESTROY",
            "EVENTOPTION_SACRED_TOMB_STUDY"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_SEASHORE_FIND",
        "Name": "TEXT_EVENTSTORY_SEASHORE_FIND_TITLE",
        "Text": "TEXT_EVENTSTORY_SEASHORE_FIND",
        "zBackgroundName": "Ruins2",
        "zEventURL": "https://en.wikipedia.org/wiki/Tyrian_purple",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE_COASTAL_LAND"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SEASHORE_FIND_SCIENCE",
            "EVENTOPTION_SEASHORE_FIND_CULTURE",
            "EVENTOPTION_SEASHORE_FIND_MONEY"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_EARLY_DISCIPLES",
        "Name": "TEXT_EVENTSTORY_RUINS_EARLY_DISCIPLES_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_EARLY_DISCIPLES",
        "zBackgroundName": "Ruins2",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_COASTAL_LAND",
            "SUBJECT_LEADER_US",
            "SUBJECT_RELIGION"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_EARLY_DISCIPLES_OPTION_0",
            "EVENTOPTION_RUINS_EARLY_DISCIPLES_OPTION_1",
            "EVENTOPTION_RUINS_EARLY_DISCIPLES_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_THE_FLOATING_CITY",
        "Name": "TEXT_EVENTSTORY_RUINS_THE_FLOATING_CITY_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_THE_FLOATING_CITY",
        "zBackgroundName": "Ruins",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_COASTAL_LAND",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_ARID"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_THE_FLOATING_CITY_OPTION_0",
            "EVENTOPTION_RUINS_THE_FLOATING_CITY_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_NEW_HUMANS",
        "Name": "TEXT_EVENTSTORY_RUINS_NEW_HUMANS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_NEW_HUMANS",
        "zBackgroundName": "Explore_Jungle",
        "zEventURL": "https://en.wikipedia.org/wiki/Homo_floresiensis",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_COASTAL_LAND",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_TILE_LUSH"
            },
            {
              "First": "2",
              "Second": "SUBJECT_GREAT_SCIENTIST"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_NEW_HUMANS_OPTION_0",
            "EVENTOPTION_RUINS_NEW_HUMANS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_SUNKEN_TOMBS",
        "Name": "TEXT_EVENTSTORY_RUINS_SUNKEN_TOMBS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_SUNKEN_TOMBS",
        "zBackgroundName": "DEFAULT",
        "zEventURL": "https://en.wikipedia.org/wiki/Kalek%C3%B6y",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_COASTAL_LAND",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_TEMPERATE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_SUNKEN_TOMBS_OPTION_0",
            "EVENTOPTION_RUINS_SUNKEN_TOMBS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_THE_KINGS_ROADS",
        "Name": "TEXT_EVENTSTORY_RUINS_THE_KINGS_ROADS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_THE_KINGS_ROADS",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_FLAT",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_THE_KINGS_ROADS_OPTION_0",
            "EVENTOPTION_RUINS_THE_KINGS_ROADS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_GEOGLYPHS",
        "Name": "TEXT_EVENTSTORY_RUINS_GEOGLYPHS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_GEOGLYPHS",
        "zEventURL": "https://en.wikipedia.org/wiki/Geoglyph",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_ARID"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_GEOGLYPHS_OPTION_0",
            "EVENTOPTION_RUINS_GEOGLYPHS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_RAISED_FIELDS",
        "Name": "TEXT_EVENTSTORY_RUINS_RAISED_FIELDS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_RAISED_FIELDS",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_ARID",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_FLAT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_RAISED_FIELDS_OPTION_0",
            "EVENTOPTION_RUINS_RAISED_FIELDS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_GRAVE_CIRCLES",
        "Name": "TEXT_EVENTSTORY_RUINS_GRAVE_CIRCLES_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_GRAVE_CIRCLES",
        "zBackgroundName": "Explore_Cave",
        "zEventURL": "https://en.wikipedia.org/wiki/Shaft_tomb",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TEMPERATE",
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_TILE_FLAT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_FAMILY_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_GRAVE_CIRCLES_OPTION_0",
            "EVENTOPTION_RUINS_GRAVE_CIRCLES_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_EMERALD_MINES",
        "Name": "TEXT_EVENTSTORY_RUINS_EMERALD_MINES_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_EMERALD_MINES",
        "zBackgroundName": "Explore_Cave",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_ARID",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_HILL"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_EMERALD_MINES_OPTION_0",
            "EVENTOPTION_RUINS_EMERALD_MINES_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_EMERALD_MINES_CAVE_IN",
        "Name": "TEXT_EVENTSTORY_RUINS_EMERALD_MINES_CAVE_IN_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_EMERALD_MINES_CAVE_IN",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_ARID",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_HILL"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_RUINS_EMERALD_MINES_CAVE_IN_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_EMERALD_MINES_START",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_RUINS_EMERALD_MINE_REBUILT",
        "Name": "TEXT_EVENTSTORY_RUINS_EMERALD_MINE_REBUILT_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_EMERALD_MINE_REBUILT",
        "zBackgroundName": "Explore_Cave",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_ARID",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_HILL"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_RUINS_EMERALD_MINE_REBUILT_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_EMERALD_MINES_START",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_RUINS_IN_THE_CLOUDS",
        "Name": "TEXT_EVENTSTORY_RUINS_IN_THE_CLOUDS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_IN_THE_CLOUDS",
        "zBackgroundName": "Ruins",
        "zEventURL": "https://en.wikipedia.org/wiki/Chachapoya_culture",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_LUSH",
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_HILL"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_IN_THE_CLOUDS_OPTION_0",
            "EVENTOPTION_RUINS_IN_THE_CLOUDS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_HEAVEN_AND_EARTH",
        "Name": "TEXT_EVENTSTORY_RUINS_HEAVEN_AND_EARTH_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_HEAVEN_AND_EARTH",
        "zBackgroundName": "Ruins2",
        "zEventURL": "https://en.wikipedia.org/wiki/Pumapunku",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_HILL",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_TEMPERATE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_HEAVEN_AND_EARTH_OPTION_0",
            "EVENTOPTION_RUINS_HEAVEN_AND_EARTH_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_GOLD_WORKERS",
        "Name": "TEXT_EVENTSTORY_RUINS_GOLD_WORKERS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_GOLD_WORKERS",
        "zBackgroundName": "Explore_Jungle",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_LUSH",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_GOLD_WORKERS_OPTION_0",
            "EVENTOPTION_RUINS_GOLD_WORKERS_OPTION_1",
            "EVENTOPTION_RUINS_GOLD_WORKERS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_BEADS_AND_FIGURINES",
        "Name": "TEXT_EVENTSTORY_RUINS_BEADS_AND_FIGURINES_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_BEADS_AND_FIGURINES",
        "zBackgroundName": "Statue",
        "zAudioTrigger": "AUDIO_UI_EVENT_POP_RUIN_GENERIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_SPOUSE_OF",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "2"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_0",
            "EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_1",
            "EVENTOPTION_RUINS_BEADS_AND_FIGURINES_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_HOMELESS_CHILDREN",
        "Name": "TEXT_EVENTSTORY_HOMELESS_CHILDREN_TITLE",
        "Text": "TEXT_EVENTSTORY_HOMELESS_CHILDREN",
        "zBackgroundName": "DEFAULT",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HOMELESS_CHILDREN_NO_AID",
            "EVENTOPTION_HOMELESS_CHILDREN_SHELTER",
            "EVENTOPTION_HOMELESS_CHILDREN_CHILD_LABOR"
          ]
        },
        "Trigger": "EVENTTRIGGER_RUINS_EXPLORED",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RUINS_WRATH_OF_THE_WATCHERS",
        "Name": "TEXT_EVENTSTORY_RUINS_WRATH_OF_THE_WATCHERS_TITLE",
        "Text": "TEXT_EVENTSTORY_RUINS_WRATH_OF_THE_WATCHERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "NONE",
            "BONUS_EVENTSTORY_RUINS_WRATH_OF_THE_WATCHERS_CITY"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_0",
            "EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_1",
            "EVENTOPTION_RUINS_WRATH_OF_THE_WATCHERS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_RUINS_THE_WATCHERS",
        "iEventLinkTurns": "2",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "beginGroup": "Contact",
        "zType": "EVENTSTORY_BARBARIAN_CONTACT_CALM_EMISSARY",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_CALM_EMISSARY_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_CALM_EMISSARY",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_CONTACT_CALM_EMISSARY_TRUCE",
            "EVENTOPTION_BARBARIAN_CONTACT_CALM_EMISSARY_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_CONTACT_SEEDY_MESSENGER",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_SEEDY_MESSENGER_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_SEEDY_MESSENGER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_CONTACT_SEEDY_MESSENGER_TRUCE",
            "EVENTOPTION_BARBARIAN_CONTACT_SEEDY_MESSENGER_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_CONTACT_GIFT_EXCHANGE",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_GIFT_EXCHANGE_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_GIFT_EXCHANGE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_CONTACT_GIFT_EXCHANGE_WOOD",
            "EVENTOPTION_BARBARIAN_CONTACT_GIFT_EXCHANGE_METAL",
            "EVENTOPTION_BARBARIAN_CONTACT_GIFT_EXCHANGE_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_CONTACT_REFUGEE_OUTLAWS",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_REFUGEE_OUTLAWS_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_REFUGEE_OUTLAWS",
        "zBackgroundName": "city approach",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_CONTACT_REFUGEE_OUTLAWS_WAR",
            "EVENTOPTION_BARBARIAN_CONTACT_REFUGEE_OUTLAWS_NEW",
            "EVENTOPTION_BARBARIAN_CONTACT_REFUGEE_OUTLAWS_TRUCE"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iProb": "60",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_CONTACT_RIPE_LANDS",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_RIPE_LANDS_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_RIPE_LANDS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_CONTACT_RIPE_LANDS_WAR",
            "EVENTOPTION_BARBARIAN_CONTACT_RIPE_LANDS_TRUCE"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_CONTACT_HAUGHTY_EMISSARY",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_HAUGHTY_EMISSARY_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_HAUGHTY_EMISSARY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_CONTACT_HAUGHTY_EMISSARY_PEACE",
            "EVENTOPTION_BARBARIAN_CONTACT_HAUGHTY_EMISSARY_TRUCE",
            "EVENTOPTION_BARBARIAN_CONTACT_HAUGHTY_EMISSARY_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_CONTACT_GRINNING_EMISSARY",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_GRINNING_EMISSARY_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_GRINNING_EMISSARY",
        "zBackgroundName": "decree2final",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_CONTACT_GRINNING_EMISSARY_TRUCE_STONE",
            "EVENTOPTION_BARBARIAN_CONTACT_GRINNING_EMISSARY_TRUCE_IRON",
            "EVENTOPTION_BARBARIAN_CONTACT_GRINNING_EMISSARY_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_CONTACT_CULTURAL_DELEGATION",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_CULTURAL_DELEGATION_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_CULTURAL_DELEGATION",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_CONTACT_CULTURAL_DELEGATION_YES",
            "EVENTOPTION_BARBARIAN_CONTACT_CULTURAL_DELEGATION_HIRE",
            "EVENTOPTION_BARBARIAN_CONTACT_CULTURAL_DELEGATION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_CONTACT_DELIGHTED_EMISSARY",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_DELIGHTED_EMISSARY_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_DELIGHTED_EMISSARY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_BARBARIAN_WAR",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_CONTACT_DELIGHTED_EMISSARY_PEACE",
            "EVENTOPTION_BARBARIAN_CONTACT_DELIGHTED_EMISSARY_WISDOM",
            "EVENTOPTION_BARBARIAN_CONTACT_DELIGHTED_EMISSARY_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_CONTACT_FUMING_MESSENGER",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_FUMING_MESSENGER_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_CONTACT_FUMING_MESSENGER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_BARBARIAN_WAR",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_CONTACT_FUMING_MESSENGER_WAR_1",
            "EVENTOPTION_BARBARIAN_CONTACT_FUMING_MESSENGER_WAR_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_WAR_AMBASSADOR",
        "Name": "TEXT_EVENTSTORY_WAR_AMBASSADOR_TITLE",
        "Text": "TEXT_EVENTSTORY_WAR_AMBASSADOR",
        "zEventURL": "https://en.wikipedia.org/wiki/Laconic_phrase",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WAR_AMBASSADOR_TRIBUTE",
            "EVENTOPTION_WAR_AMBASSADOR_IF",
            "EVENTOPTION_WAR_AMBASSADOR_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_THE_NUMBERLESS_GAULS_CONTACT",
        "Name": "TEXT_EVENTSTORY_THE_NUMBERLESS_GAULS_CONTACT_TITLE",
        "Text": "TEXT_EVENTSTORY_THE_NUMBERLESS_GAULS_CONTACT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN_FIFTEEN_CAMPS_MINIMUM",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_0",
            "EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_1",
            "EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_2",
            "EVENTOPTION_THE_NUMBERLESS_GAULS_CONTACT_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_CONTACT",
        "Name": "TEXT_EVENTSTORY_PLAYER_CONTACT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_CONTACT",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_CONTACT_MEMORY",
            "EVENTOPTION_PLAYER_CONTACT_TRUCE",
            "EVENTOPTION_PLAYER_CONTACT_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_CONTACT_01",
        "Name": "TEXT_EVENTSTORY_PLAYER_CONTACT_TITLE_01",
        "Text": "TEXT_EVENTSTORY_PLAYER_CONTACT_01",
        "zBackgroundName": "Farm Couple",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_CONTACT_MEMORY",
            "EVENTOPTION_PLAYER_CONTACT_TRUCE",
            "EVENTOPTION_PLAYER_CONTACT_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_CONTACT_02",
        "Name": "TEXT_EVENTSTORY_PLAYER_CONTACT_TITLE_02",
        "Text": "TEXT_EVENTSTORY_PLAYER_CONTACT_02",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_CONTACT_MEMORY",
            "EVENTOPTION_PLAYER_CONTACT_TRUCE",
            "EVENTOPTION_PLAYER_CONTACT_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_FRIEND_OR_FOE",
        "Name": "TEXT_EVENTSTORY_FRIEND_OR_FOE_TITLE",
        "Text": "TEXT_EVENTSTORY_FRIEND_OR_FOE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_MIN_DISTANT",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FRIEND_OR_FOE_BEFRIEND",
            "EVENTOPTION_FRIEND_OR_FOE_BEWARE",
            "EVENTOPTION_FRIEND_OR_FOE_HOSTAGE"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iTriggerExtra": "1",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS",
        "zBackgroundName": "Farm Couple",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_MAX_NEAR",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_OPTION_0",
            "EVENTOPTION_NEIGHBORS_OPTION_1",
            "EVENTOPTION_NEIGHBORS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_ASSYRIA_ROOT",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_ASSYRIA_ROOT",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_ASSYRIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_ROOT_OPTION_0",
            "EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_ROOT_OPTION_1",
            "EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_ROOT_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE",
        "iEventLinkTurns": "2",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_ASSYRIA_TRIBUTE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_ASSYRIA_TRIBUTE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_ASSYRIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_TRIBUTE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_HUMBLE_ASSYRIA_TRIBUTE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE_ASSYRIA_REFUSE",
        "iEventLinkTurns": "3",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_GREECE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_GREECE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_GREECE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_GREECE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_HUMBLE_GREECE_OPTION_1",
            "EVENTOPTION_NEIGHBORS_HUMBLE_GREECE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE",
        "iEventLinkTurns": "2",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_HUMBLE_OPTION_1",
            "EVENTOPTION_NEIGHBORS_HUMBLE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE",
        "iEventLinkTurns": "2",
        "iPriority": "5",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEIGHBORS_HUMBLE_ASSYRIA_ROOT",
            "EVENTSTORY_NEIGHBORS_HUMBLE_GREECE"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_WELCOME_EGYPT",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_WELCOME_EGYPT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_EGYPT"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_OPTION_0",
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_OPTION_1",
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE_WELCOME",
        "iEventLinkTurns": "3",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_WELCOME_EGYPT_ALLIANCE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_WELCOME_EGYPT_ALLIANCE",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_EGYPT"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_ALLIANCE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_EGYPT_ALLIANCE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE_WELCOME_EGYPT",
        "iEventLinkTurns": "4",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_WELCOME_PERSIA",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_WELCOME_PERSIA",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PERSIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PERSIA_OPTION_0",
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PERSIA_OPTION_1",
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PERSIA_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE_WELCOME",
        "iEventLinkTurns": "3",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_IGNORE_PERSIA",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_IGNORE_PERSIA",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PERSIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_IGNORE_PERSIA_OPTION_0",
            "EVENTOPTION_POLITELY_DECLINE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE_IGNORE",
        "iEventLinkTurns": "3",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_WELCOME",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_WELCOME",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_OPTION_0",
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_OPTION_1",
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE_WELCOME",
        "iEventLinkTurns": "4",
        "iPriority": "5",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEIGHBORS_HUMBLE_WELCOME_EGYPT",
            "EVENTSTORY_NEIGHBORS_HUMBLE_WELCOME_PERSIA"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_IGNORE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_IGNORE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_IGNORE_OPTION_0",
            "EVENTOPTION_POLITELY_DECLINE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE_IGNORE",
        "iPriority": "5",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": "EVENTSTORY_NEIGHBORS_HUMBLE_IGNORE_PERSIA"
        }
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_REFUSE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_REFUSE",
        "zBackgroundName": "Captured_Soldiers",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "3",
            "Second": "SUBJECT_TEENAGER_OR_ADULT"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_1",
            "EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE_REFUSE",
        "iEventLinkTurns": "4",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_REFUSE_SPIES_SPARED",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_REFUSE_SPIES_SPARED",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_SPIES_SPARED_OPTION_0",
            "EVENTOPTION_NEIGHBORS_HUMBLE_REFUSE_SPIES_SPARED_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE_REFUSE_SPIES_SPARED",
        "iEventLinkTurns": "4",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_WELCOME_PEACE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_WELCOME_PEACE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PEACE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_HUMBLE_WELCOME_PEACE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_HUMBLE_WELCOME_GENERIC",
        "iEventLinkTurns": "7",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_NEIGHBORS_PERSIA_EXCHANGE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_PLAYER_PEACE"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE_OPTION_1",
            "EVENTOPTION_NEIGHBORS_HUMBLE_PERSIA_EXCHANGE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iPriority": "10",
        "iWeight": "1",
        "iProb": "15",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_CARTHAGE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_CARTHAGE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_CARTHAGE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY",
        "iEventLinkTurns": "3",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_CARTHAGE_INVEST",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_CARTHAGE_INVEST",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_CARTHAGE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_INVEST_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_INVEST_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_CARTHAGE_INVEST",
        "iEventLinkTurns": "3",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_CARTHAGE_REFUSE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_CARTHAGE_REFUSE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_CARTHAGE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_REFUSE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_CARTHAGE_REFUSE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_CARTHAGE_REFUSE",
        "iEventLinkTurns": "3",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_EGYPT",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_EGYPT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_EGYPT"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY",
        "iEventLinkTurns": "3",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_EGYPT_ISIS",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_EGYPT_ISIS",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_EGYPT"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_ISIS_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_ISIS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_EGYPT_DONATION_OSIRIS",
        "iEventLinkTurns": "5",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_EGYPT_RA",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_EGYPT_RA",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_EGYPT"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_RA_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_RA_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_EGYPT_DONATION_ISIS",
        "iEventLinkTurns": "6",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_EGYPT_REFUSED_DONATION",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_EGYPT_REFUSED_DONATION",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_EGYPT"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_REFUSED_DONATION_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_EGYPT_REFUSED_DONATION_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_EGYPT_REFUSE",
        "iEventLinkTurns": "5",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_ROME",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_ROME",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_ROME"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_OPTION_1",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY",
        "iEventLinkTurns": "3",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_ROME_DECLINE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_ROME_DECLINE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_ROME"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_DECLINE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_DECLINE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_ROME_DECLINE",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_ROME_ACCEPT",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_ROME_ACCEPT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_ROME"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_POLITELY_DECLINE",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_1",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_2",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ACCEPT_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_ROME_ACCEPT",
        "iEventLinkTurns": "4",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_ROME_GUIDE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_ROME_GUIDE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_ROME"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_DECLINE",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_GUIDE_OPTION_1",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_GUIDE_OPTION_2",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_GUIDE_OPTION_3",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_GUIDE_OPTION_4"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_ROME_GUIDE",
        "iEventLinkTurns": "5",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_ROME_ALLY",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_ROME_ALLY",
        "zBackgroundName": "decree",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_PLAYER_ROME"
            },
            {
              "First": "0",
              "Second": "SUBJECT_PLAYER_PEACE"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_ALLY_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_ROME_DECLINE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_ROME_AID",
        "iEventLinkTurns": "8",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_OPTION_1",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY",
        "iEventLinkTurns": "3",
        "iPriority": "5",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEIGHBORS_FRIENDLY_CARTHAGE",
            "EVENTSTORY_NEIGHBORS_FRIENDLY_EGYPT",
            "EVENTSTORY_NEIGHBORS_FRIENDLY_ROME"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_WELCOME_BABYLON",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_WELCOME_BABYLON",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_BABYLONIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_WELCOME",
        "iEventLinkTurns": "5",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_BABYLONIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_1",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_2",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_LEARN",
        "iEventLinkTurns": "6",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_APPRECIATE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_APPRECIATE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_BABYLONIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_APPRECIATE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_BABYLON_APPRECIATE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_BABYLON_REQUEST_PEACE",
        "iEventLinkTurns": "4",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_WELCOME",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_WELCOME",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_OPTION_1",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_WELCOME_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_WELCOME",
        "iEventLinkTurns": "5",
        "iPriority": "5",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": "EVENTSTORY_NEIGHBORS_FRIENDLY_WELCOME_BABYLON"
        }
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_LAVISH_GREECE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_LAVISH_GREECE",
        "zBackgroundName": "decree",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_GREECE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_1",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_GREECE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_LAVISH",
        "iEventLinkTurns": "4",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_LAVISH",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_LAVISH",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_OPTION_1",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_LAVISH",
        "iEventLinkTurns": "4",
        "iPriority": "5",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": "EVENTSTORY_NEIGHBORS_FRIENDLY_LAVISH_GREECE"
        }
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_LAVISH_MORE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_LAVISH_MORE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_MORE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_MORE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_LAVISH_MORE",
        "iEventLinkTurns": "7",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_FRIENDLY_LAVISH_FOOD",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_FRIENDLY_LAVISH_FOOD",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_FRIENDLY_LAVISH_FOOD_OPTION_0",
            "EVENTOPTION_POLITELY_DECLINE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_FRIENDLY_LAVISH_FOOD",
        "iEventLinkTurns": "6",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_ROME",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_ROME",
        "zBackgroundName": "decree",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_ROME"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_ROME_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_ROME_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL",
        "iEventLinkTurns": "3",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_CAPTURED_ROMAN_CITY",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_CAPTURED_ROMAN_CITY",
        "zBackgroundName": "Captured_Soldiers",
        "zEventURL": "https://en.wikipedia.org/wiki/Caligula",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_NEIGHBORS_ROME_PRIDE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_CAPTURED_ROMAN_CITY_OPTION_0",
            "EVENTOPTION_NEIGHBORS_CAPTURED_ROMAN_CITY_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CAPTURED",
        "iPriority": "15",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_ROMANS_HAVE_TAKEN_OUR_CITY",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_ROMANS_HAVE_TAKEN_OUR_CITY",
        "zEventURL": "https://en.wikipedia.org/wiki/Carthago_delenda_est",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_NEIGHBORS_ROME_PRIDE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_ROMANS_HAVE_TAKEN_OUR_CITY_OPTION_0",
            "EVENTOPTION_NEIGHBORS_ROMANS_HAVE_TAKEN_OUR_CITY_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_LOST",
        "iPriority": "15",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_PERSIA",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_PERSIA",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PERSIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_1",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL",
        "iEventLinkTurns": "3",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PERSIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_1",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_2",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_RESPECT_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_PERSIA",
        "iEventLinkTurns": "6",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_PERSIA_VICTORIOUS_CHAMPION",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_PERSIA_VICTORIOUS_CHAMPION_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_PERSIA_VICTORIOUS_CHAMPION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PERSIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_VICTORIOUS_CHAMPION_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_VICTORIOUS_CHAMPION_OPTION_1"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_PERSIA_DUEL",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_PERSIA_DEFEATED_CHAMPION",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_PERSIA_DEFEATED_CHAMPION_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_PERSIA_DEFEATED_CHAMPION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PERSIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_DEFEATED_CHAMPION_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PERSIA_DEFEATED_CHAMPION_OPTION_1"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_PERSIA_DUEL",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_OPTION_1",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL",
        "iEventLinkTurns": "3",
        "iPriority": "5",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEIGHBORS_PRIDEFUL_ROME",
            "EVENTSTORY_NEIGHBORS_PRIDEFUL_PERSIA"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_BABYLON",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_BABYLON",
        "zBackgroundName": "Birth",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_BABYLONIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_1",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_BABYLON_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_FEE",
        "iEventLinkTurns": "5",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_SUGGEST_BABYLON",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_SUGGEST_BABYLON",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_BABYLONIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_BABYLON_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_SUGGEST",
        "iEventLinkTurns": "5",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_BRAG_BABYLON",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_BRAG_BABYLON",
        "zBackgroundName": "decree",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_BABYLONIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_BABYLON_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_BABYLON_OPTION_1",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_BABYLON_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_VERBOSE",
        "iEventLinkTurns": "4",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_CARTHAGE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_CARTHAGE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_CARTHAGE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_1",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_2",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_FEE",
        "iEventLinkTurns": "5",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_CARTHAGE_TRIBUTE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_CARTHAGE_TRIBUTE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_CARTHAGE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_NEIGHBORS_PRIDEFUL_CARTHAGE_TRIBUTE_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_SUGGEST",
        "iEventLinkTurns": "5",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_CARTHAGE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_1",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_2",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_VERBOSE",
        "iEventLinkTurns": "4",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_ASSYRIA",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_ASSYRIA",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_ASSYRIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_FEE",
        "iEventLinkTurns": "5",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_ASSYRIA_SUGGEST",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_ASSYRIA",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_ASSYRIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_SUGGEST",
        "iEventLinkTurns": "5",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_ASSYRIA_BRAG",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_ASSYRIA",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_ASSYRIA"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_ASSYRIA_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_VERBOSE",
        "iEventLinkTurns": "4",
        "iPriority": "10",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_PEACE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_PEACE",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PEACE_OPTION_0",
            "EVENTOPTION_POLITELY_DECLINE",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PEACE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_FEE",
        "iEventLinkTurns": "5",
        "iPriority": "5",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEIGHBORS_PRIDEFUL_BABYLON",
            "EVENTSTORY_NEIGHBORS_PRIDEFUL_CARTHAGE",
            "EVENTSTORY_NEIGHBORS_PRIDEFUL_ASSYRIA"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_PEACE_VERBOSE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_PEACE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PEACE_OPTION_0",
            "EVENTOPTION_POLITELY_DECLINE",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PEACE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_VERBOSE",
        "iEventLinkTurns": "4",
        "iPriority": "5",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEIGHBORS_PRIDEFUL_BRAG_BABYLON",
            "EVENTSTORY_NEIGHBORS_PRIDEFUL_BRAG_CARTHAGE",
            "EVENTSTORY_NEIGHBORS_PRIDEFUL_ASSYRIA_BRAG"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_PEACE_SECOND_CHANCE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_PEACE_SECOND_CHANCE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_PEACE_SECOND_CHANCE_OPTION_0",
            "EVENTOPTION_POLITELY_DECLINE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_BROKE",
        "iEventLinkTurns": "7",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_SUGGEST",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_SUGGEST",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_1",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_SUGGEST",
        "iEventLinkTurns": "5",
        "iPriority": "5",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEIGHBORS_PRIDEFUL_SUGGEST_BABYLON",
            "EVENTSTORY_NEIGHBORS_PRIDEFUL_CARTHAGE_TRIBUTE",
            "EVENTSTORY_NEIGHBORS_PRIDEFUL_ASSYRIA_SUGGEST"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEIGHBORS_PRIDEFUL_SUGGEST_TRADE",
        "Name": "TEXT_EVENTSTORY_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEIGHBORS_PRIDEFUL_SUGGEST_TRADE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_TRADE_OPTION_0",
            "EVENTOPTION_NEIGHBORS_PRIDEFUL_SUGGEST_TRADE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEIGHBORS_PRIDEFUL_TRADE",
        "iEventLinkTurns": "4",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_HOSTILE_NEIGHBORS",
        "Name": "TEXT_EVENTSTORY_HOSTILE_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_HOSTILE_NEIGHBORS",
        "zBackgroundName": "MudFight",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_MAX_NEAR",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_MIN_SIMILAR"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_0",
            "EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_1",
            "EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_2",
            "EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_3",
            "EVENTOPTION_HOSTILE_NEIGHBORS_OPTION_4"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iPriority": "1",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_HOSTILE_NEIGHBORS_FIRST_TRIBUTE",
        "Name": "TEXT_EVENTSTORY_HOSTILE_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_HOSTILE_NEIGHBORS_FIRST_TRIBUTE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_0",
            "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_1",
            "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_2",
            "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_TRIBUTE_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_HOSTILE_NEIGHBORS_FIRST_TRIBUTE",
        "iEventLinkTurns": "9",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_HOSTILE_NEIGHBORS_FIRST_REFUSE",
        "Name": "TEXT_EVENTSTORY_HOSTILE_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_HOSTILE_NEIGHBORS_FIRST_REFUSE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE_OPTION_0",
            "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE_OPTION_1",
            "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE_OPTION_2",
            "EVENTOPTION_HOSTILE_NEIGHBORS_FIRST_REFUSE_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_HOSTILE_NEIGHBORS_FIRST_REFUSE",
        "iEventLinkTurns": "9",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_HOSTILE_NEIGHBORS_PAID_TWICE",
        "Name": "TEXT_EVENTSTORY_HOSTILE_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_HOSTILE_NEIGHBORS_PAID_TWICE",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HOSTILE_NEIGHBORS_PAID_TWICE_OPTION_0",
            "EVENTOPTION_POLITELY_DECLINE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_HOSTILE_NEIGHBORS_SECOND_TRIBUTE",
        "iEventLinkTurns": "9",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_HOSTILE_NEIGHBORS_WAR",
        "Name": "TEXT_EVENTSTORY_HOSTILE_NEIGHBORS_TITLE",
        "Text": "TEXT_EVENTSTORY_HOSTILE_NEIGHBORS_WAR",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HOSTILE_NEIGHBORS_WAR_OPTION_0",
            "EVENTOPTION_HOSTILE_NEIGHBORS_WAR_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_HOSTILE_NEIGHBORS_SECOND_REFUSE",
        "iEventLinkTurns": "9",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_CONTACT_WITH_DISTANT_NATION",
        "Name": "TEXT_EVENTSTORY_CONTACT_WITH_DISTANT_NATION_TITLE",
        "Text": "TEXT_EVENTSTORY_CONTACT_WITH_DISTANT_NATION",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_NEAR",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CONTACT_WITH_DISTANT_NATION_OPTION_0",
            "EVENTOPTION_CONTACT_WITH_DISTANT_NATION_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iTriggerExtra": "1",
        "iPriority": "1",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_CONTACT_ON_THE_MOVE",
        "Name": "TEXT_EVENTSTORY_CONTACT_ON_THE_MOVE_TITLE",
        "Text": "TEXT_EVENTSTORY_CONTACT_ON_THE_MOVE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CONTACT_ON_THE_MOVE_OPTION_0",
            "EVENTOPTION_CONTACT_ON_THE_MOVE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CONTACT_GROWING_TENSION",
        "Name": "TEXT_EVENTSTORY_CONTACT_GROWING_TENSION_TITLE",
        "Text": "TEXT_EVENTSTORY_CONTACT_GROWING_TENSION",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_0",
            "EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_1",
            "EVENTOPTION_CONTACT_GROWING_TENSION_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CONTACT_A_LEARNING_OPPORTUNITY",
        "Name": "TEXT_EVENTSTORY_CONTACT_A_LEARNING_OPPORTUNITY_TITLE",
        "Text": "TEXT_EVENTSTORY_CONTACT_A_LEARNING_OPPORTUNITY",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CONTACT_A_LEARNING_OPPORTUNITY_OPTION_0",
            "EVENTOPTION_CONTACT_A_LEARNING_OPPORTUNITY_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CONTACT_BORDER_DISPUTE",
        "Name": "TEXT_EVENTSTORY_CONTACT_BORDER_DISPUTE_TITLE",
        "Text": "TEXT_EVENTSTORY_CONTACT_BORDER_DISPUTE",
        "zBackgroundName": "MudFight",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_0",
            "EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_1",
            "EVENTOPTION_CONTACT_BORDER_DISPUTE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_ATTACKED_BY_A_BEAR",
        "Name": "TEXT_EVENTSTORY_ATTACKED_BY_A_BEAR_TITLE",
        "Text": "TEXT_EVENTSTORY_ATTACKED_BY_A_BEAR",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_MAX_NEAR",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ATTACKED_BY_A_BEAR_OPTION_0",
            "EVENTOPTION_ATTACKED_BY_A_BEAR_OPTION_1",
            "EVENTOPTION_ATTACKED_BY_A_BEAR_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iTriggerExtra": "1",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_ATTACKED_BY_A_BEAR_AID",
        "Name": "TEXT_EVENTSTORY_ATTACKED_BY_A_BEAR_AID_TITLE",
        "Text": "TEXT_EVENTSTORY_ATTACKED_BY_A_BEAR_AID",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_MAX_NEAR",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTSTORY_ATTACKED_BY_A_BEAR_AID",
            "NONE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ATTACKED_BY_A_BEAR_AID_OPTION_0",
            "EVENTOPTION_ATTACKED_BY_A_BEAR_AID_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iTriggerExtra": "1",
        "EventLinkPrereq": "EVENTLINK_ATTACKED_BY_A_BEAR_AID",
        "iPriority": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_ATTACKED_BY_A_BEAR_NOTIFY",
        "Name": "TEXT_EVENTSTORY_ATTACKED_BY_A_BEAR_NOTIFY_TITLE",
        "Text": "TEXT_EVENTSTORY_ATTACKED_BY_A_BEAR_NOTIFY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_MAX_NEAR",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_ATTACKED_BY_A_BEAR_NOTIFY_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iTriggerExtra": "1",
        "EventLinkPrereq": "EVENTLINK_ATTACKED_BY_A_BEAR_NOTIFY",
        "iEventLinkTurns": "2",
        "iPriority": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_CONTACT_THE_INJURED_PLAYER",
        "Name": "TEXT_EVENTSTORY_CONTACT_THE_INJURED_PLAYER_TITLE",
        "Text": "TEXT_EVENTSTORY_CONTACT_THE_INJURED_PLAYER",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US",
            "SUBJECT_TILE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_0",
            "EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_1",
            "EVENTOPTION_CONTACT_THE_INJURED_PLAYER_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iTriggerExtra": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_CONTACT_POLITICAL_PRISONER",
        "Name": "TEXT_EVENTSTORY_CONTACT_POLITICAL_PRISONER_TITLE",
        "Text": "TEXT_EVENTSTORY_CONTACT_POLITICAL_PRISONER",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US",
            "SUBJECT_TILE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_0",
            "EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_1",
            "EVENTOPTION_CONTACT_POLITICAL_PRISONER_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iTriggerExtra": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_CONTACT_THE_FOOL",
        "Name": "TEXT_EVENTSTORY_CONTACT_THE_FOOL_TITLE",
        "Text": "TEXT_EVENTSTORY_CONTACT_THE_FOOL",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_MOONFACE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CONTACT_THE_FOOL_OPTION_0",
            "EVENTOPTION_CONTACT_THE_FOOL_OPTION_1",
            "EVENTOPTION_CONTACT_THE_FOOL_OPTION_2",
            "EVENTOPTION_CONTACT_THE_FOOL_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CONTACT_MOMENTOUS_MEETING",
        "Name": "TEXT_EVENTSTORY_CONTACT_MOMENTOUS_MEETING_TITLE",
        "Text": "TEXT_EVENTSTORY_CONTACT_MOMENTOUS_MEETING",
        "zBackgroundName": "MudFight",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_0",
            "EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_1",
            "EVENTOPTION_CONTACT_MOMENTOUS_MEETING_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iTriggerExtra": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CONTACT_LETHAL_AFFLICTION",
        "Name": "TEXT_EVENTSTORY_CONTACT_LETHAL_AFFLICTION_TITLE",
        "Text": "TEXT_EVENTSTORY_CONTACT_LETHAL_AFFLICTION",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_TILE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_0",
            "EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_1",
            "EVENTOPTION_CONTACT_LETHAL_AFFLICTION_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_CONTACT_LETHAL_AFFLICTION",
        "iEventLinkTurns": "1",
        "iWeight": "2",
        "iProb": "35",
        "iRepeatTurns": "-1"
      },
      {
        "beginGroup": "Diplomacy",
        "zType": "EVENTSTORY_PLAYER_PEACE_LUMBER_TRADE",
        "Name": "TEXT_EVENTSTORY_PLAYER_PEACE_LUMBER_TRADE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_PEACE_LUMBER_TRADE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_PEACE_SIGN_TREATY",
            "EVENTOPTION_PLAYER_PEACE_LUMBER_TRADE_OPTION_1",
            "EVENTOPTION_POLITELY_DECLINE"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_PEACE_OFFER",
        "iPriority": "3",
        "iWeight": "2",
        "iRepeatTurns": "30"
      },
      {
        "zType": "EVENTSTORY_PLAYER_PEACE_ACQUIRED_TASTE",
        "Name": "TEXT_EVENTSTORY_PLAYER_PEACE_ACQUIRED_TASTE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_PEACE_ACQUIRED_TASTE",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_PEACE_SIGN_TREATY",
            "EVENTOPTION_PLAYER_PEACE_ACQUIRED_TASTE_OPTION_1",
            "EVENTOPTION_POLITELY_DECLINE"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_PEACE_OFFER",
        "iPriority": "3",
        "iWeight": "2",
        "iRepeatTurns": "30"
      },
      {
        "zType": "EVENTSTORY_PLAYER_PEACE_QUALITY_ORE",
        "Name": "TEXT_EVENTSTORY_PLAYER_PEACE_QUALITY_ORE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_PEACE_QUALITY_ORE",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_PEACE_QUALITY_ORE_OPTION_0",
            "EVENTOPTION_PLAYER_PEACE_QUALITY_ORE_OPTION_1",
            "EVENTOPTION_POLITELY_DECLINE"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_PEACE_OFFER",
        "iPriority": "3",
        "iWeight": "2",
        "iRepeatTurns": "30"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_ALLIANCE_OFFER",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_ALLIANCE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_ALLIANCE_OFFER",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_BARBARIAN"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_YES",
            "EVENTOPTION_BARBARIAN_ALLIANCE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_ALLIANCE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_ALLIANCE",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_ALLIANCE_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_ALLIANCE",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN_PEACE",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_HIGH_CHARISMA"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_ALLIANCE_WELCOME",
            "EVENTOPTION_BARBARIAN_ALLIANCE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_ALLIANCE_OFFER",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_PEACE_OFFER",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_PEACE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_PEACE_OFFER",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_PEACE_OFFER_YES",
            "EVENTOPTION_BARBARIAN_PEACE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_PEACE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_TRUCE_OFFER_TRIUMPHANT",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_TRUCE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_TRUCE_OFFER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN_TRIUMPHANT",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_TRUCE_OFFER_TRIUMPHANT_YES",
            "EVENTOPTION_BARBARIAN_TRUCE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_TRUCE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_TRUCE_OFFER_WINNING",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_TRUCE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_TRUCE_OFFER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN_WINNING",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_TRUCE_OFFER_WINNING_YES",
            "EVENTOPTION_BARBARIAN_TRUCE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_TRUCE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_TRUCE_OFFER_NEUTRAL",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_TRUCE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_TRUCE_OFFER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN_NEUTRAL",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_TRUCE_OFFER_NEUTRAL_YES",
            "EVENTOPTION_BARBARIAN_TRUCE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_TRUCE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_TRUCE_OFFER_LOSING",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_TRUCE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_TRUCE_OFFER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN_LOSING",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_TRUCE_OFFER_LOSING_YES",
            "EVENTOPTION_BARBARIAN_TRUCE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_TRUCE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_TRUCE_OFFER_ROUTED",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_TRUCE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_TRUCE_OFFER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN_ROUTED",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_TRUCE_OFFER_ROUTED_YES",
            "EVENTOPTION_BARBARIAN_TRUCE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_TRUCE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_WAR",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_WAR",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_BARBARIAN"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_WAR_YES",
            "EVENTOPTION_BARBARIAN_WAR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WARLIKE_PRINCESS",
        "Name": "TEXT_EVENTSTORY_WARLIKE_PRINCESS_TITLE",
        "Text": "TEXT_EVENTSTORY_WARLIKE_PRINCESS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_CHARACTER_BARBARIAN_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_BARBARIAN_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WARLIKE_PRINCESS_CONVINCE",
            "EVENTOPTION_WARLIKE_PRINCESS_BRIBE",
            "EVENTOPTION_WARLIKE_PRINCESS_PREPARE"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_ENVOY",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_ENVOY_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_ENVOY",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_ENVOY_PEACE",
            "EVENTOPTION_BARBARIAN_ENVOY_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_FLORID_DIPLOMAT",
        "Name": "TEXT_EVENTSTORY_FLORID_DIPLOMAT_TITLE",
        "Text": "TEXT_EVENTSTORY_FLORID_DIPLOMAT",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FLORID_DIPLOMAT_GIFTS",
            "EVENTOPTION_FLORID_DIPLOMAT_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_DISCERNING_JUDGMENT",
        "Name": "TEXT_EVENTSTORY_DISCERNING_JUDGMENT_TITLE",
        "Text": "TEXT_EVENTSTORY_DISCERNING_JUDGMENT",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DISCERNING_JUDGMENT_JUDGE",
            "EVENTOPTION_DISCERNING_JUDGMENT_NONSENSE"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_WAR_PREPARATIONS",
        "Name": "TEXT_EVENTSTORY_WAR_PREPARATIONS_TITLE",
        "Text": "TEXT_EVENTSTORY_WAR_PREPARATIONS",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_BARBARIAN_MAX_NEAR"
            },
            {
              "First": "0",
              "Second": "SUBJECT_BARBARIAN_MIN_SIMILAR"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WAR_PREPARATIONS_POLITICAL",
            "EVENTOPTION_WAR_PREPARATIONS_ARMY",
            "EVENTOPTION_WAR_PREPARATIONS_TAX"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_AN_UNLIKELY_MATCH",
        "Name": "TEXT_EVENTSTORY_AN_UNLIKELY_MATCH_TITLE",
        "Text": "TEXT_EVENTSTORY_AN_UNLIKELY_MATCH",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_GOVERNOR"
            },
            {
              "First": "1",
              "Second": "SUBJECT_MALE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_SINGLE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_AN_UNLIKELY_MATCH_REFUSAL",
            "EVENTOPTION_AN_UNLIKELY_MATCH_DELAY",
            "EVENTOPTION_AN_UNLIKELY_MATCH_SUBMISSION"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_AN_UNLIKELY_MATCH_DELAY",
        "Name": "TEXT_EVENTSTORY_AN_UNLIKELY_MATCH_DELAY_TITLE",
        "Text": "TEXT_EVENTSTORY_AN_UNLIKELY_MATCH_DELAY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_MATCH_BAD"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_AN_UNLIKELY_MATCH_DELAY_WEDDING_IS_ON",
            "EVENTOPTION_AN_UNLIKELY_MATCH_DELAY_NO_CAN_DO"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_AN_UNLIKELY_MATCH_DELAY",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_AN_UNLIKELY_MATCH_FAVORABLE",
        "Name": "TEXT_EVENTSTORY_AN_UNLIKELY_MATCH_FAVORABLE_TITLE",
        "Text": "TEXT_EVENTSTORY_AN_UNLIKELY_MATCH_FAVORABLE",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_MATCH_GOOD"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_AN_UNLIKELY_MATCH_FAVORABLE_WEDDING_BELLS"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_AN_UNLIKELY_MATCH_DELAY",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_AN_UNLIKELY_MATCH_SUBMISSION",
        "Name": "TEXT_EVENTSTORY_AN_UNLIKELY_MATCH_SUBMISSION_TITLE",
        "Text": "TEXT_EVENTSTORY_AN_UNLIKELY_MATCH_SUBMISSION",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_MATCH_NEUTRAL"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_AN_UNLIKELY_MATCH_SUBMISSION_MARRIAGE"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_AN_UNLIKELY_MATCH_SUBMISSION",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_INVASION",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_INVASION_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_INVASION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_BARBARIAN"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_INVASION_YES",
            "EVENTOPTION_BARBARIAN_INVASION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iMinTurns": "50",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRIBAL_MIGRATION",
        "Name": "TEXT_EVENTSTORY_TRIBAL_MIGRATION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRIBAL_MIGRATION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRIBAL_MIGRATION_ASSIMILATE",
            "EVENTOPTION_TRIBAL_MIGRATION_PERSUADE",
            "EVENTOPTION_TRIBAL_MIGRATION_DEFEND"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iMinTurns": "50",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_GRAVE_OFFENSE",
        "Name": "TEXT_EVENTSTORY_GRAVE_OFFENSE_TITLE",
        "Text": "TEXT_EVENTSTORY_GRAVE_OFFENSE",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_NON_ROYAL"
            },
            {
              "First": "1",
              "Second": "SUBJECT_UNCOUTH"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRAVE_OFFENSE_ATONE",
            "EVENTOPTION_GRAVE_OFFENSE_REFUSE"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iMinTurns": "50",
        "iPriority": "1",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_HOSTILE_GARRISON",
        "Name": "TEXT_EVENTSTORY_HOSTILE_GARRISON_TITLE",
        "Text": "TEXT_EVENTSTORY_HOSTILE_GARRISON",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_BARBARIAN_MIN_SIMILAR"
            },
            {
              "First": "0",
              "Second": "SUBJECT_BARBARIAN_MAX_CLOSE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HOSTILE_GARRISON_ACCEPT",
            "EVENTOPTION_HOSTILE_GARRISON_REFUSE"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iMinTurns": "50",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_HOSTILE_GARRISON_EXPEL",
        "Name": "TEXT_EVENTSTORY_HOSTILE_GARRISON_EXPEL_TITLE",
        "Text": "TEXT_EVENTSTORY_HOSTILE_GARRISON_EXPEL",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_CITY_HOSTILE_GARRISON"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CITY_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HOSTILE_GARRISON_EXPEL_YES",
            "EVENTOPTION_HOSTILE_GARRISON_EXPEL_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_HOSTILE_GARRISON_ACCEPT",
        "iWeight": "1",
        "iProb": "20"
      },
      {
        "zType": "EVENTSTORY_SCALES_OF_TRIBUTE",
        "Name": "TEXT_EVENTSTORY_SCALES_OF_TRIBUTE_TITLE",
        "Text": "TEXT_EVENTSTORY_SCALES_OF_TRIBUTE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SCALES_OF_TRIBUTE_ACQUIESCE",
            "EVENTOPTION_SCALES_OF_TRIBUTE_PERSUADE",
            "EVENTOPTION_SCALES_OF_TRIBUTE_REFUSE"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iMinTurns": "50",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_DESPERATE_MESSENGER",
        "Name": "TEXT_EVENTSTORY_DESPERATE_MESSENGER_TITLE",
        "Text": "TEXT_EVENTSTORY_DESPERATE_MESSENGER",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_BARBARIAN_PEACE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DESPERATE_MESSENGER_ALLIANCE",
            "EVENTOPTION_DESPERATE_MESSENGER_ALONE"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iImageSubject": "1",
        "iMinTurns": "50",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_TRIBUTE",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_TRIBUTE_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_TRIBUTE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_BARBARIAN_PEACE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_TRIBUTE_FOOD",
            "EVENTOPTION_BARBARIAN_TRIBUTE_WOOD",
            "EVENTOPTION_BARBARIAN_TRIBUTE_IRON"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_SECURING_PEACE",
        "Name": "TEXT_EVENTSTORY_SECURING_PEACE_TITLE",
        "Text": "TEXT_EVENTSTORY_SECURING_PEACE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN_WAR",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_NON_ROYAL"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SECURING_PEACE_YES",
            "EVENTOPTION_SECURING_PEACE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_TRUCE_OFFER",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_SECURING_PEACE_FURIOUS_EMISSARY",
        "Name": "TEXT_EVENTSTORY_SECURING_PEACE_FURIOUS_EMISSARY_TITLE",
        "Text": "TEXT_EVENTSTORY_SECURING_PEACE_FURIOUS_EMISSARY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SECURING_PEACE_FURIOUS_EMISSARY_SUICIDE",
            "EVENTOPTION_SECURING_PEACE_FURIOUS_EMISSARY_MISUNDERSTANDING",
            "EVENTOPTION_SECURING_PEACE_FURIOUS_EMISSARY_REFUSE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_SECURING_PEACE_YES",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_SECURING_PEACE_RETURNING_EMISSARY_THANKS",
        "Name": "TEXT_EVENTSTORY_SECURING_PEACE_RETURNING_EMISSARY_THANKS_TITLE",
        "Text": "TEXT_EVENTSTORY_SECURING_PEACE_RETURNING_EMISSARY_THANKS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_CHARACTER_DEAD_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_SECURING_PEACE_RETURNING_EMISSARY_THANKS_OK"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_SECURING_PEACE_FURIOUS_EMISSARY_SUICIDE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_SECURING_PEACE_RETURNING_EMISSARY_MISUNDERSTANDING",
        "Name": "TEXT_EVENTSTORY_SECURING_PEACE_RETURNING_EMISSARY_MISUNDERSTANDING_TITLE",
        "Text": "TEXT_EVENTSTORY_SECURING_PEACE_RETURNING_EMISSARY_MISUNDERSTANDING",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SECURING_PEACE_RETURNING_EMISSARY_MISUNDERSTANDING_WAR",
            "EVENTOPTION_SECURING_PEACE_RETURNING_EMISSARY_MISUNDERSTANDING_DIPLOMAT"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_SECURING_PEACE_RETURNING_EMISSARY_REFUSE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_PEACE",
        "Name": "TEXT_EVENTSTORY_PLAYER_PEACE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_PEACE",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_PEACE_YES",
            "EVENTOPTION_PLAYER_PEACE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_PEACE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_PEACE_BUILDING_TRUST",
        "Name": "TEXT_EVENTSTORY_PLAYER_PEACE_BUILDING_TRUST_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_PEACE_BUILDING_TRUST",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_PEACE_SIGN_TREATY",
            "EVENTOPTION_PLAYER_PEACE_BUILDING_TRUST_OPTION_1",
            "EVENTOPTION_POLITELY_DECLINE"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_PEACE_OFFER",
        "iPriority": "1",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PAUSE_IN_HOSTILITIES",
        "Name": "TEXT_EVENTSTORY_PAUSE_IN_HOSTILITIES_TITLE",
        "Text": "TEXT_EVENTSTORY_PAUSE_IN_HOSTILITIES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_BARBARIAN_MAX_CLOSE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_BARBARIAN_WAR",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_BARBARIAN_PEACE_OR_TRUCE",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PAUSE_IN_HOSTILITIES_OPTION_0",
            "EVENTOPTION_PAUSE_IN_HOSTILITIES_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_TRUCE_OFFER",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_TRUCE_ROUTED",
        "Name": "TEXT_EVENTSTORY_PLAYER_TRUCE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_TRUCE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_ROUTED"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_TRUCE_ROUTED",
            "EVENTOPTION_PLAYER_TRUCE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_TRUCE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_TRUCE_LOSING",
        "Name": "TEXT_EVENTSTORY_PLAYER_TRUCE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_TRUCE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_LOSING"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_TRUCE_LOSING",
            "EVENTOPTION_PLAYER_TRUCE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_TRUCE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_TRUCE_NEUTRAL",
        "Name": "TEXT_EVENTSTORY_PLAYER_TRUCE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_TRUCE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_NEUTRAL"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_TRUCE_NEUTRAL",
            "EVENTOPTION_PLAYER_TRUCE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_TRUCE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_TRUCE_WINNING",
        "Name": "TEXT_EVENTSTORY_PLAYER_TRUCE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_TRUCE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_WINNING"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_TRUCE_WINNING",
            "EVENTOPTION_PLAYER_TRUCE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_TRUCE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_TRUCE_TRIUMPHANT",
        "Name": "TEXT_EVENTSTORY_PLAYER_TRUCE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_TRUCE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_TRIUMPHANT"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_TRUCE_TRIUMPHANT",
            "EVENTOPTION_PLAYER_TRUCE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_TRUCE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_MONEY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_MONEY",
            "EVENTOPTION_PLAYER_WAR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_TRIBUTE",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_OPINION_MAX_CAUTIOUS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_TRIBUTE",
            "EVENTOPTION_PLAYER_WAR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_DISTANT_EMPIRE_THREATENS",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_DISTANT_EMPIRE_THREATENS_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_DISTANT_EMPIRE_THREATENS",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_MIN_DISTANT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EVENTSTORY_PLAYER_WAR_DISTANT_EMPIRE_THREATENS_OPTION_0",
            "EVENTOPTION_EVENTSTORY_PLAYER_WAR_DISTANT_EMPIRE_THREATENS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_PEACE_PROBLEM_FRIENDLY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_PEACE_PROBLEM_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_PEACE_PROBLEM",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_FRIENDLY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PEACE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED",
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "6",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_PEACE_PROBLEM_PLEASED",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_PEACE_PROBLEM_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_PEACE_PROBLEM",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_PLEASED",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PEACE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED",
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "6",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_PEACE_PROBLEM_CAUTIOUS",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_PEACE_PROBLEM_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_PEACE_PROBLEM",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_CAUTIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PEACE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED",
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "6",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_PEACE_PROBLEM_UPSET",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_PEACE_PROBLEM_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_PEACE_PROBLEM",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_UPSET",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PEACE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED",
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "6",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_PEACE_PROBLEM_ANGRY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_PEACE_PROBLEM_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_PEACE_PROBLEM",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_ANGRY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PEACE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_SOLVED_OPINION_DROP",
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "6",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_PEACE_PROBLEM_FURIOUS",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_PEACE_PROBLEM_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_PEACE_PROBLEM",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_FURIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PEACE"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_PLAYER_WAR_AT_PEACE_PROBLEM_NOT_SOLVED_FURIOUS"
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "6",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_PEACE_INCIDENT_FRIENDLY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_PEACE_INCIDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_PEACE_INCIDENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_FRIENDLY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PEACE"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP_FRIENDLY"
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "6",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_PEACE_INCIDENT_PLEASED",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_PEACE_INCIDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_PEACE_INCIDENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_PLEASED",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PEACE"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP_PLEASED"
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "6",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_PEACE_INCIDENT_CAUTIOUS",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_PEACE_INCIDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_PEACE_INCIDENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_CAUTIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PEACE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP",
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_TRUCE"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "6",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_PEACE_INCIDENT_UPSET",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_PEACE_INCIDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_PEACE_INCIDENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_UPSET",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PEACE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_OPINION_DROP",
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "6",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_PEACE_INCIDENT_ANGRY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_PEACE_INCIDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_PEACE_INCIDENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_ANGRY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PEACE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_TRUCE_ANGRY",
            "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "6",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_PEACE_INCIDENT_FURIOUS",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_PEACE_INCIDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_PEACE_INCIDENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_FURIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_PEACE"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_PLAYER_WAR_AT_PEACE_INCIDENT_DECLARE_WAR_FURIOUS"
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "6",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_TRUCE_PROBLEM_FRIENDLY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_TRUCE_PROBLEM_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_TRUCE_PROBLEM",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_FRIENDLY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_TRUCE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED_DIPLOMATIC",
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED",
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_TRUCE_PROBLEM_PLEASED",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_TRUCE_PROBLEM_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_TRUCE_PROBLEM",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_PLEASED",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_TRUCE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED_DIPLOMATIC",
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED",
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_TRUCE_PROBLEM_CAUTIOUS",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_TRUCE_PROBLEM_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_TRUCE_PROBLEM",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_CAUTIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_TRUCE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED",
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_TRUCE_PROBLEM_UPSET",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_TRUCE_PROBLEM_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_TRUCE_PROBLEM",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_UPSET",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_TRUCE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED",
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_TRUCE_PROBLEM_ANGRY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_TRUCE_PROBLEM_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_TRUCE_PROBLEM",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_ANGRY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_TRUCE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_SOLVED_OPINION_DROP",
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_TRUCE_PROBLEM_FURIOUS",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_TRUCE_PROBLEM_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_TRUCE_PROBLEM",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_FURIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_TRUCE"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_PROBLEM_NOT_SOLVED_FURIOUS"
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_TRUCE_INCIDENT_FRIENDLY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_TRUCE_INCIDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_TRUCE_INCIDENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_FRIENDLY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_TRUCE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_PEACE",
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_LESSER_OPINION_DROP",
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_FRIENDLY"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_TRUCE_INCIDENT_PLEASED",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_TRUCE_INCIDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_TRUCE_INCIDENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_PLEASED",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_TRUCE"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_PLEASED"
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_TRUCE_INCIDENT_CAUTIOUS",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_TRUCE_INCIDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_TRUCE_INCIDENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_CAUTIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_TRUCE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP",
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_BIGGER_OPINION_DROP"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_TRUCE_INCIDENT_UPSET",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_TRUCE_INCIDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_TRUCE_INCIDENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_UPSET",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_TRUCE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP",
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_TRUCE_INCIDENT_ANGRY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_TRUCE_INCIDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_TRUCE_INCIDENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_ANGRY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_TRUCE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_OPINION_DROP_ANGRY",
            "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_WAR"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_AT_TRUCE_INCIDENT_FURIOUS",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_AT_TRUCE_INCIDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_STUB_AT_TRUCE_INCIDENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_FURIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_TRUCE"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_PLAYER_WAR_AT_TRUCE_INCIDENT_DECLARE_WAR_FURIOUS"
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_ASSASSINATION_OF_MONARCH",
        "Name": "TEXT_EVENTSTORY_ASSASSINATION_OF_MONARCH_TITLE",
        "Text": "TEXT_EVENTSTORY_ASSASSINATION_OF_MONARCH",
        "zEventURL": "https://en.wikipedia.org/wiki/Olga_of_Kiev",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "3",
            "Second": "SUBJECT_TEENAGER"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "0",
            "Second": "SUBJECTRELATION_GENDER_SAME",
            "Third": "1"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER",
            "NONE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ASSASSINATION_OF_MONARCH_ACCEPT_NOW",
            "EVENTOPTION_ASSASSINATION_OF_MONARCH_STALL"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "CouncilInvalid": "COUNCIL_SPYMASTER",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bModal": "1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_ASSASSINATION_OF_MONARCH_STALL",
        "Name": "TEXT_EVENTSTORY_ASSASSINATION_OF_MONARCH_STALL_TITLE",
        "Text": "TEXT_EVENTSTORY_ASSASSINATION_OF_MONARCH_STALL",
        "zEventURL": "https://en.wikipedia.org/wiki/Olga_of_Kiev",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_PLAYER_THEM",
            "SUBJECT_CHARACTER_DEAD_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ASSASSINATION_OF_MONARCH_ACCEPT_LATER",
            "EVENTOPTION_ASSASSINATION_OF_MONARCH_REJECT"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_ASSASSINATION_OF_MONARCH_STALL",
        "iWeight": "1",
        "iProb": "50"
      },
      {
        "zType": "EVENTSTORY_ASSASSINATION_OF_MONARCH_ACCEPT",
        "Name": "TEXT_EVENTSTORY_ASSASSINATION_OF_MONARCH_ACCEPT_TITLE",
        "Text": "TEXT_EVENTSTORY_ASSASSINATION_OF_MONARCH_ACCEPT",
        "zEventURL": "https://en.wikipedia.org/wiki/Olga_of_Kiev",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_PLAYER_THEM",
            "SUBJECT_CHARACTER_DEAD_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ASSASSINATION_OF_MONARCH_HOLE",
            "EVENTOPTION_ASSASSINATION_OF_MONARCH_REJECT",
            "EVENTOPTION_ASSASSINATION_OF_MONARCH_STALL_AGAIN"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_ASSASSINATION_OF_MONARCH_ACCEPT",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_ASSASSINATION_OF_MONARCH_STALL_AGAIN",
        "Name": "TEXT_EVENTSTORY_ASSASSINATION_OF_MONARCH_STALL_AGAIN_TITLE",
        "Text": "TEXT_EVENTSTORY_ASSASSINATION_OF_MONARCH_STALL_AGAIN",
        "zEventURL": "https://en.wikipedia.org/wiki/Olga_of_Kiev",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_PLAYER_THEM",
            "SUBJECT_CHARACTER_DEAD_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ASSASSINATION_OF_MONARCH_HOLE",
            "EVENTOPTION_ASSASSINATION_OF_MONARCH_REJECT"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_ASSASSINATION_OF_MONARCH_STALL_AGAIN",
        "iWeight": "1",
        "iProb": "50"
      },
      {
        "zType": "EVENTSTORY_ASSASSINATION_OF_MONARCH_HOLE",
        "Name": "TEXT_EVENTSTORY_ASSASSINATION_OF_MONARCH_HOLE_TITLE",
        "Text": "TEXT_EVENTSTORY_ASSASSINATION_OF_MONARCH_HOLE",
        "zEventURL": "https://en.wikipedia.org/wiki/Olga_of_Kiev",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_PLAYER_THEM",
            "SUBJECT_CHARACTER_DEAD_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ASSASSINATION_OF_MONARCH_BATHS",
            "EVENTOPTION_ASSASSINATION_OF_MONARCH_REJECT"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_ASSASSINATION_OF_MONARCH_HOLE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_ASSASSINATION_OF_MONARCH_SUCCESS",
        "Name": "TEXT_EVENTSTORY_ASSASSINATION_OF_MONARCH_SUCCESS_TITLE",
        "Text": "TEXT_EVENTSTORY_ASSASSINATION_OF_MONARCH_SUCCESS",
        "zEventURL": "https://en.wikipedia.org/wiki/Olga_of_Kiev",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_PLAYER_THEM",
            "SUBJECT_CHARACTER_DEAD_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_ASSASSINATION_OF_MONARCH_SUCCESS"
        },
        "Trigger": "EVENTTRIGGER_GOAL_FINISHED",
        "TriggerData": "GOAL_QUEST_KILL_5_ENEMIES",
        "EventLinkPrereq": "EVENTLINK_ASSASSINATION_OF_MONARCH_BATHS",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_ALLIANCE_PROPOSAL",
        "Name": "TEXT_EVENTSTORY_ALLIANCE_PROPOSAL_TITLE",
        "Text": "TEXT_EVENTSTORY_ALLIANCE_PROPOSAL",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_PEACE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ALLIANCE_PROPOSAL_YES",
            "EVENTOPTION_ALLIANCE_PROPOSAL_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_PLAYER_ALLIANCE",
        "iWeight": "1",
        "bHidePrereqs": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PEACE_PROPOSAL",
        "Name": "TEXT_EVENTSTORY_PEACE_PROPOSAL_TITLE",
        "Text": "TEXT_EVENTSTORY_PEACE_PROPOSAL",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_TRUCE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PEACE_PROPOSAL_OFFER_TRIBUTE",
            "EVENTOPTION_PEACE_PROPOSAL_NO_TRIBUTE",
            "EVENTOPTION_PEACE_PROPOSAL_DEMAND_TRIBUTE"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_PLAYER_PEACE",
        "iWeight": "1",
        "bHidePrereqs": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PEACE_RESPONSE_OFFER_TRIBUTE_STRONGER",
        "Name": "TEXT_EVENTSTORY_PEACE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_PEACE_RESPONSE_OFFER_TRIBUTE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_MIN_STRONGER"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PEACE_RESPONSE_OFFER_TRIBUTE_STRONGER",
            "EVENTOPTION_PEACE_RESPONSE_OFFER_TRIBUTE_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_PEACE_PROPOSAL_OFFER_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PEACE_RESPONSE_OFFER_TRIBUTE_SIMILAR",
        "Name": "TEXT_EVENTSTORY_PEACE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_PEACE_RESPONSE_OFFER_TRIBUTE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_MAX_SIMILAR"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PEACE_RESPONSE_OFFER_TRIBUTE_SIMILAR",
            "EVENTOPTION_PEACE_RESPONSE_OFFER_TRIBUTE_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_PEACE_PROPOSAL_OFFER_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PEACE_RESPONSE_NO_TRIBUTE_NEUTRAL",
        "Name": "TEXT_EVENTSTORY_PEACE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_PEACE_RESPONSE_NO_TRIBUTE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_MAX_SIMILAR"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PEACE_RESPONSE_NO_TRIBUTE_YES",
            "EVENTOPTION_PEACE_RESPONSE_NO_TRIBUTE_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_PEACE_PROPOSAL_NO_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PEACE_RESPONSE_NO_TRIBUTE_REJECTED",
        "Name": "TEXT_EVENTSTORY_PEACE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_PEACE_RESPONSE_REJECTED",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_MIN_STRONGER"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_PEACE_RESPONSE_REJECTED"
        },
        "EventLinkPrereq": "EVENTLINK_PEACE_PROPOSAL_NO_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PEACE_RESPONSE_DEMAND_TRIBUTE_WEAKER",
        "Name": "TEXT_EVENTSTORY_PEACE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_PEACE_RESPONSE_DEMAND_TRIBUTE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_MAX_WEAKER"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PEACE_RESPONSE_DEMAND_TRIBUTE_WEAKER",
            "EVENTOPTION_PEACE_RESPONSE_DEMAND_TRIBUTE_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_PEACE_PROPOSAL_DEMAND_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PEACE_RESPONSE_DEMAND_TRIBUTE_REJECTED",
        "Name": "TEXT_EVENTSTORY_PEACE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_PEACE_RESPONSE_REJECTED",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_MIN_SIMILAR"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_PEACE_RESPONSE_REJECTED"
        },
        "EventLinkPrereq": "EVENTLINK_PEACE_PROPOSAL_DEMAND_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_TRUCE_PROPOSAL",
        "Name": "TEXT_EVENTSTORY_TRUCE_PROPOSAL_TITLE",
        "Text": "TEXT_EVENTSTORY_TRUCE_PROPOSAL",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_WAR",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRUCE_PROPOSAL_OFFER_TRIBUTE",
            "EVENTOPTION_TRUCE_PROPOSAL_NO_TRIBUTE",
            "EVENTOPTION_TRUCE_PROPOSAL_DEMAND_TRIBUTE"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_PLAYER_TRUCE",
        "iWeight": "1",
        "bHidePrereqs": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_TRUCE_RESPONSE_OFFER_TRIBUTE_TRIUMPHANT",
        "Name": "TEXT_EVENTSTORY_TRUCE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRUCE_RESPONSE_OFFER_TRIBUTE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_TRIUMPHANT",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_TRIUMPHANT",
            "EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_TRUCE_PROPOSAL_OFFER_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_TRUCE_RESPONSE_OFFER_TRIBUTE_WINNING",
        "Name": "TEXT_EVENTSTORY_TRUCE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRUCE_RESPONSE_OFFER_TRIBUTE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_WINNING",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_WINNING",
            "EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_TRUCE_PROPOSAL_OFFER_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_TRUCE_RESPONSE_OFFER_TRIBUTE_NEUTRAL",
        "Name": "TEXT_EVENTSTORY_TRUCE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRUCE_RESPONSE_OFFER_TRIBUTE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_MAX_NEUTRAL",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_NEUTRAL",
            "EVENTOPTION_TRUCE_RESPONSE_OFFER_TRIBUTE_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_TRUCE_PROPOSAL_OFFER_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_TRUCE_RESPONSE_NO_TRIBUTE_NEUTRAL",
        "Name": "TEXT_EVENTSTORY_TRUCE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRUCE_RESPONSE_NO_TRIBUTE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_MAX_NEUTRAL",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRUCE_RESPONSE_NO_TRIBUTE_YES",
            "EVENTOPTION_TRUCE_RESPONSE_NO_TRIBUTE_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_TRUCE_PROPOSAL_NO_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_TRUCE_RESPONSE_NO_TRIBUTE_REJECTED",
        "Name": "TEXT_EVENTSTORY_TRUCE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRUCE_RESPONSE_REJECTED",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_MIN_WINNING",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TRUCE_RESPONSE_REJECTED"
        },
        "EventLinkPrereq": "EVENTLINK_TRUCE_PROPOSAL_NO_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_TRUCE_RESPONSE_DEMAND_TRIBUTE_ROUTED",
        "Name": "TEXT_EVENTSTORY_TRUCE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRUCE_RESPONSE_DEMAND_TRIBUTE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_ROUTED",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRUCE_RESPONSE_DEMAND_TRIBUTE_ROUTED",
            "EVENTOPTION_TRUCE_RESPONSE_DEMAND_TRIBUTE_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_TRUCE_PROPOSAL_DEMAND_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_TRUCE_RESPONSE_DEMAND_TRIBUTE_LOSING",
        "Name": "TEXT_EVENTSTORY_TRUCE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRUCE_RESPONSE_DEMAND_TRIBUTE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_LOSING",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRUCE_RESPONSE_DEMAND_TRIBUTE_LOSING",
            "EVENTOPTION_TRUCE_RESPONSE_DEMAND_TRIBUTE_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_TRUCE_PROPOSAL_DEMAND_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_TRUCE_RESPONSE_DEMAND_TRIBUTE_REJECTED",
        "Name": "TEXT_EVENTSTORY_TRUCE_RESPONSE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRUCE_RESPONSE_REJECTED",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_MIN_NEUTRAL",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TRUCE_RESPONSE_REJECTED"
        },
        "EventLinkPrereq": "EVENTLINK_TRUCE_PROPOSAL_DEMAND_TRIBUTE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_BARBARIAN_WAR",
        "Name": "TEXT_EVENTSTORY_PLAYER_BARBARIAN_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_BARBARIAN_WAR",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_LEADER_PEACE_OR_TRUCE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_BARBARIAN_WAR_MONEY",
            "EVENTOPTION_PLAYER_BARBARIAN_WAR_TRIBUTE",
            "EVENTOPTION_PLAYER_BARBARIAN_WAR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_PLAYER_BARBARIAN_WAR",
        "iTriggerExtra": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_PLAYER_WAR",
        "Name": "TEXT_EVENTSTORY_PLAYER_PLAYER_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_PLAYER_WAR",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_LEADER_PEACE_OR_TRUCE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_PLAYER_WAR_MONEY",
            "EVENTOPTION_PLAYER_PLAYER_WAR_TRIBUTE",
            "EVENTOPTION_PLAYER_PLAYER_WAR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_PLAYER_PLAYER_WAR",
        "iTriggerExtra": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_DECLARE_WAR",
        "Name": "TEXT_EVENTSTORY_PLAYER_DECLARE_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_DECLARE_WAR",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_PEACE_OR_TRUCE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_DECLARE_WAR_YES",
            "EVENTOPTION_PLAYER_DECLARE_WAR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_PLAYER_DECLARE_WAR",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_BREAK_PEACE",
        "Name": "TEXT_EVENTSTORY_PLAYER_BREAK_PEACE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_BREAK_PEACE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_PEACE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_BREAK_PEACE_YES",
            "EVENTOPTION_PLAYER_BREAK_PEACE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_PLAYER_BREAK_PEACE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_END_ALLIANCE",
        "Name": "TEXT_EVENTSTORY_PLAYER_END_ALLIANCE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_END_ALLIANCE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_ALLIANCE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_END_ALLIANCE_YES",
            "EVENTOPTION_PLAYER_END_ALLIANCE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_PLAYER_END_ALLIANCE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_CANCEL_TRADE",
        "Name": "TEXT_EVENTSTORY_PLAYER_CANCEL_TRADE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_CANCEL_TRADE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_TRADING"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_CANCEL_TRADE_YES",
            "EVENTOPTION_PLAYER_CANCEL_TRADE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_PLAYER_CANCEL_TRADE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_DECLARE_WAR",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_DECLARE_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_DECLARE_WAR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_BARBARIAN_TRUCE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_DECLARE_WAR_YES",
            "EVENTOPTION_BARBARIAN_DECLARE_WAR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_BARBARIAN_DECLARE_WAR",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_BREAK_PEACE",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_BREAK_PEACE_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_BREAK_PEACE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_BARBARIAN_PEACE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_BREAK_PEACE_YES",
            "EVENTOPTION_BARBARIAN_BREAK_PEACE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_BARBARIAN_BREAK_PEACE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_END_ALLIANCE",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_END_ALLIANCE_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_END_ALLIANCE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_BARBARIAN_ALLIANCE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_END_ALLIANCE_YES",
            "EVENTOPTION_BARBARIAN_END_ALLIANCE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_BARBARIAN_END_ALLIANCE",
        "iWeight": "1",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_CITY_CAPTURED_TRUCE",
        "Name": "TEXT_EVENTSTORY_CITY_CAPTURED_TRUCE_TITLE",
        "Text": "TEXT_EVENTSTORY_CITY_CAPTURED_TRUCE",
        "zBackgroundName": "Captured_Soldiers",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_MAX_LOSING"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CITY_CAPTURED_TRUCE_YES",
            "EVENTOPTION_CITY_CAPTURED_TRUCE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CAPTURED",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_BOASTFUL_HEIR",
        "Name": "TEXT_EVENTSTORY_BOASTFUL_HEIR_TITLE",
        "Text": "TEXT_EVENTSTORY_BOASTFUL_HEIR",
        "zBackgroundName": "Birth",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_THEM",
            "SUBJECT_LEADER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "0"
            },
            {
              "First": "0",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "2"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BOASTFUL_HEIR_OPTION_0",
            "EVENTOPTION_BOASTFUL_HEIR_OPTION_1",
            "EVENTOPTION_BOASTFUL_HEIR_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "iMinTurns": "20",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_SEEKING_KNOWLEDGE",
        "Name": "TEXT_EVENTSTORY_SEEKING_KNOWLEDGE_TITLE",
        "Text": "TEXT_EVENTSTORY_SEEKING_KNOWLEDGE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SEEKING_KNOWLEDGE_WOOD",
            "EVENTOPTION_SEEKING_KNOWLEDGE_FOOD",
            "EVENTOPTION_SEEKING_KNOWLEDGE_STONE",
            "EVENTOPTION_SEEKING_KNOWLEDGE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "TechPrereq": "TECH_SCHOLARSHIP",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_WALLS",
        "Name": "TEXT_EVENTSTORY_WALLS_TITLE",
        "Text": "TEXT_EVENTSTORY_WALLS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_THEM"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WALLS_YES",
            "EVENTOPTION_WALLS_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "TechPrereq": "TECH_RAMPARTS",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_AN_UPGRADE",
        "Name": "TEXT_EVENTSTORY_AN_UPGRADE_TITLE",
        "Text": "TEXT_EVENTSTORY_AN_UPGRADE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_AN_UPGRADE_YES",
            "EVENTOPTION_AN_UPGRADE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "TechPrereq": "TECH_MANOR",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CITIZENSHIP",
        "Name": "TEXT_EVENTSTORY_CITIZENSHIP_TITLE",
        "Text": "TEXT_EVENTSTORY_CITIZENSHIP",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CITIZENSHIP_YES",
            "EVENTOPTION_CITIZENSHIP_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "TechPrereq": "TECH_CITIZENSHIP",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_A_FRIEND_IN_NEED",
        "Name": "TEXT_EVENTSTORY_A_FRIEND_IN_NEED_TITLE",
        "Text": "TEXT_EVENTSTORY_A_FRIEND_IN_NEED",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_THEM"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_A_FRIEND_IN_NEED_YES",
            "EVENTOPTION_A_FRIEND_IN_NEED_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "TechPrereq": "TECH_CARTOGRAPHY",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_ROAD_TO_HEAVEN",
        "Name": "TEXT_EVENTSTORY_ROAD_TO_HEAVEN_TITLE",
        "Text": "TEXT_EVENTSTORY_ROAD_TO_HEAVEN",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_THEM"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ROAD_TO_HEAVEN_YES",
            "EVENTOPTION_ROAD_TO_HEAVEN_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "TechPrereq": "TECH_MONASTICISM",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_A_TINY_FAVOR",
        "Name": "TEXT_EVENTSTORY_A_TINY_FAVOR_TITLE",
        "Text": "TEXT_EVENTSTORY_A_TINY_FAVOR",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_A_TINY_FAVOR_YES",
            "EVENTOPTION_A_TINY_FAVOR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "TechPrereq": "TECH_STEEL",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_WARRIOR_CODE",
        "Name": "TEXT_EVENTSTORY_WARRIOR_CODE_TITLE",
        "Text": "TEXT_EVENTSTORY_WARRIOR_CODE",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_BODKIN_ARROW"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WARRIOR_CODE_COURTIER",
            "EVENTOPTION_WARRIOR_CODE_BODKIN_ARROW",
            "EVENTOPTION_WARRIOR_CODE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "TechPrereq": "TECH_WARRIOR_CODE",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_TIT_FOR_TAT",
        "Name": "TEXT_EVENTSTORY_TIT_FOR_TAT_TITLE",
        "Text": "TEXT_EVENTSTORY_TIT_FOR_TAT",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_BODKIN_ARROW"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TIT_FOR_TAT_YES",
            "EVENTOPTION_TIT_FOR_TAT_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "TechPrereq": "TECH_MOUNTED_ARCHERY",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_WINDMILLS_AND_CATAPULTS",
        "Name": "TEXT_EVENTSTORY_WINDMILLS_AND_CATAPULTS_TITLE",
        "Text": "TEXT_EVENTSTORY_WINDMILLS_AND_CATAPULTS",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_PLAYER_MACHINERY"
            },
            {
              "First": "1",
              "Second": "SUBJECT_PLAYER_COINAGE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_PLAYER_SCHOLARSHIP"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WINDMILLS_AND_CATAPULTS_COINAGE",
            "EVENTOPTION_WINDMILLS_AND_CATAPULTS_SCHOLARSHIP",
            "EVENTOPTION_WINDMILLS_AND_CATAPULTS_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RETURNING_A_FAVOR",
        "Name": "TEXT_EVENTSTORY_RETURNING_A_FAVOR_TITLE",
        "Text": "TEXT_EVENTSTORY_RETURNING_A_FAVOR",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_GAVE_FAVOR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RETURNING_A_FAVOR",
            "EVENTOPTION_RETURNING_A_FAVOR",
            "EVENTOPTION_RETURNING_A_FAVOR"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "iWeight": "1",
        "iRepeatTurns": "10"
      },
      {
        "zType": "EVENTSTORY_PLAYER_PEACE_SOLID_FOUNDATION",
        "Name": "TEXT_EVENTSTORY_PLAYER_PEACE_SOLID_FOUNDATION_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_PEACE_SOLID_FOUNDATION",
        "zBackgroundName": "decree2final",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_PEACE_SIGN_TREATY",
            "EVENTOPTION_PLAYER_PEACE_SOLID_FOUNDATION_OPTION_1",
            "EVENTOPTION_POLITELY_DECLINE"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_PEACE_OFFER",
        "iPriority": "3",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_AT_PEACE_HUNTING_GROUNDS_DISPUTE",
        "Name": "TEXT_EVENTSTORY_AT_PEACE_HUNTING_GROUNDS_DISPUTE_TITLE",
        "Text": "TEXT_EVENTSTORY_AT_PEACE_HUNTING_GROUNDS_DISPUTE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE",
            "SUBJECT_FAMILY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_FAMILY_MIN_CAUTIOUS"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_OFFER",
            "NONE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_0",
            "EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_1",
            "EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_2",
            "EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_3",
            "EVENTOPTION_AT_PEACE_HUNTING_GROUNDS_DISPUTE_OPTION_4"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "TechPrereq": "TECH_FORESTRY",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_UPSET",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_UPSET",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_UPSET",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_TACTICIAN"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_UPSET_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_UPSET_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iMinLeader": "3",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_MAX_ANGRY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_TACTICIAN"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_2",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_2",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_MAX_ANGRY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_TACTICIAN"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_2_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_2_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iMinLeader": "2",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_MAX_ANGRY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_TACTICIAN"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_TACTICIAN_ARCHETYPE_ANGRY_3_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iMinLeader": "4",
        "iPriority": "5",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRADE_MISSION_FRIENDLY_FREE",
        "Name": "TEXT_EVENTSTORY_TRADE_MISSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRADE_MISSION_FREE",
        "zAudioTrigger": "AUDIO_UI_EVENT_ENCOURAGING_SITES",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_OPINION_FRIENDLY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRADE_MISSION_YES_FREE",
            "EVENTOPTION_TRADE_MISSION_YES_FREE",
            "EVENTOPTION_TRADE_MISSION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_TRADE_MISSION",
        "iTriggerExtra": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRADE_MISSION_PLEASED_FREE",
        "Name": "TEXT_EVENTSTORY_TRADE_MISSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRADE_MISSION_FREE",
        "zAudioTrigger": "AUDIO_UI_EVENT_ENCOURAGING_SITES",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_OPINION_PLEASED"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRADE_MISSION_YES_FREE",
            "EVENTOPTION_TRADE_MISSION_YES_FREE",
            "EVENTOPTION_TRADE_MISSION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_TRADE_MISSION",
        "iTriggerExtra": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRADE_MISSION_PLEASED",
        "Name": "TEXT_EVENTSTORY_TRADE_MISSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRADE_MISSION",
        "zAudioTrigger": "AUDIO_UI_EVENT_ENCOURAGING_SITES",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_OPINION_PLEASED"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRADE_MISSION_YES",
            "EVENTOPTION_TRADE_MISSION_YES",
            "EVENTOPTION_TRADE_MISSION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_TRADE_MISSION",
        "iTriggerExtra": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRADE_MISSION_CAUTIOUS_FREE",
        "Name": "TEXT_EVENTSTORY_TRADE_MISSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRADE_MISSION_FREE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_OPINION_CAUTIOUS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRADE_MISSION_YES_FREE",
            "EVENTOPTION_TRADE_MISSION_YES_FREE",
            "EVENTOPTION_TRADE_MISSION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_TRADE_MISSION",
        "iTriggerExtra": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRADE_MISSION_CAUTIOUS",
        "Name": "TEXT_EVENTSTORY_TRADE_MISSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRADE_MISSION",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_OPINION_CAUTIOUS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRADE_MISSION_YES",
            "EVENTOPTION_TRADE_MISSION_YES",
            "EVENTOPTION_TRADE_MISSION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_TRADE_MISSION",
        "iTriggerExtra": "2",
        "iWeight": "2"
      },
      {
        "zType": "EVENTSTORY_TRADE_MISSION_UPSET",
        "Name": "TEXT_EVENTSTORY_TRADE_MISSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRADE_MISSION",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_OPINION_UPSET"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRADE_MISSION_YES",
            "EVENTOPTION_TRADE_MISSION_YES",
            "EVENTOPTION_TRADE_MISSION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_TRADE_MISSION",
        "iTriggerExtra": "2",
        "iWeight": "2"
      },
      {
        "zType": "EVENTSTORY_TRADE_MISSION_UPSET_FAIL",
        "Name": "TEXT_EVENTSTORY_TRADE_MISSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRADE_MISSION_FAIL",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_OPINION_UPSET"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRADE_MISSION_YES_FAIL",
            "EVENTOPTION_TRADE_MISSION_NO_FAIL"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_TRADE_MISSION",
        "iTriggerExtra": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRADE_MISSION_ANGRY",
        "Name": "TEXT_EVENTSTORY_TRADE_MISSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRADE_MISSION",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_OPINION_ANGRY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRADE_MISSION_YES",
            "EVENTOPTION_TRADE_MISSION_YES",
            "EVENTOPTION_TRADE_MISSION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_TRADE_MISSION",
        "iTriggerExtra": "2",
        "iWeight": "2"
      },
      {
        "zType": "EVENTSTORY_TRADE_MISSION_ANGRY_FAIL",
        "Name": "TEXT_EVENTSTORY_TRADE_MISSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRADE_MISSION_FAIL",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_OPINION_ANGRY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRADE_MISSION_YES_FAIL",
            "EVENTOPTION_TRADE_MISSION_NO_FAIL"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_TRADE_MISSION",
        "iTriggerExtra": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRADE_MISSION_HOSTILE_FAIL",
        "Name": "TEXT_EVENTSTORY_TRADE_MISSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRADE_MISSION_FAIL",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_OPINION_FURIOUS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRADE_MISSION_YES_FAIL",
            "EVENTOPTION_TRADE_MISSION_NO_FAIL"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_TRADE_MISSION",
        "iTriggerExtra": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRADE_OFFER",
        "Name": "TEXT_EVENTSTORY_TRADE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_TRADE_OFFER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectRepeatTurns": {
          "Pair": {
            "First": "0",
            "Second": "20"
          }
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_OPINION_MIN_CAUTIOUS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRADE_MISSION_YES",
            "EVENTOPTION_TRADE_MISSION_YES",
            "EVENTOPTION_TRADE_MISSION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "10"
      },
      {
        "zType": "EVENTSTORY_CANCEL_TRADE_DEMAND",
        "Name": "TEXT_EVENTSTORY_CANCEL_TRADE_DEMAND_TITLE",
        "Text": "TEXT_EVENTSTORY_CANCEL_TRADE_DEMAND",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_TRADING"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_MAX_ANGRY",
            "Third": "2"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CANCEL_TRADE_DEMAND_YES",
            "EVENTOPTION_CANCEL_TRADE_DEMAND_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "10"
      },
      {
        "zType": "EVENTSTORY_DECLARE_WAR_DEMAND",
        "Name": "TEXT_EVENTSTORY_DECLARE_WAR_DEMAND_TITLE",
        "Text": "TEXT_EVENTSTORY_DECLARE_WAR_DEMAND",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_MAX_ANGRY",
            "Third": "2"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DECLARE_WAR_DEMAND_YES",
            "EVENTOPTION_DECLARE_WAR_DEMAND_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iMinTurns": "40",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_DECLARE_WAR_DEMAND_BARBARIAN",
        "Name": "TEXT_EVENTSTORY_DECLARE_WAR_DEMAND_BARBARIAN_TITLE",
        "Text": "TEXT_EVENTSTORY_DECLARE_WAR_DEMAND_BARBARIAN",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_BARBARIAN_PEACE_OR_TRUCE"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_BARBARIAN_WAR",
            "Third": "2"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DECLARE_WAR_DEMAND_BARBARIAN_YES",
            "EVENTOPTION_DECLARE_WAR_DEMAND_BARBARIAN_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iMinTurns": "30",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_CAUTIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_JUDGE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_JUDGE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_2",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_CAUTIOUS_DELAY",
        "iEventLinkTurns": "1",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_UPSET",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_JUDGE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_JUDGE_ARCHETYPE_UPSET_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_PLEASED",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_SCHOLAR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_PLEASED_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iMinLeader": "2",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_CAUTIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_SCHOLAR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_MAX_NEAR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_GIFT",
        "iEventLinkTurns": "2",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_TRADE",
        "iEventLinkTurns": "3",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_PREPARE",
        "iEventLinkTurns": "4",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_LEADER4",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_LEADER4_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_LEADER4",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_CAUTIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_SCHOLAR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iMinLeader": "4",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_UPSET",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_SCHOLAR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_LEADER3",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_LEADER3",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_UPSET",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_SCHOLAR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_LEADER3_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHOLAR_ARCHETYPE_UPSET_LEADER3_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iMinLeader": "3",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_AMBITION_CAPTURE_PLAYER_CITIES",
        "Name": "TEXT_EVENTSTORY_AMBITION_CAPTURE_PLAYER_CITIES_TITLE",
        "Text": "TEXT_EVENTSTORY_AMBITION_CAPTURE_PLAYER_CITIES",
        "zBackgroundName": "city approach",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_WAR",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_DIPLOMACY_FIVE_TURNS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_AMBITION_CAPTURE_PLAYER_CITIES_YES",
            "EVENTOPTION_AMBITION_CAPTURE_PLAYER_CITIES_NO"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_WAR_OR_INVASION",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_WAR_OR_INVASION_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_WAR_OR_INVASION",
        "zBackgroundName": "city approach",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_BARBARIAN"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_BARBARIAN_MAX_NEAR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_WAR_OR_INVASION_WAR",
            "EVENTOPTION_BARBARIAN_WAR_OR_INVASION_INVASION"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_CHOOSE_WAR",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_CHOOSE_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_CHOOSE_WAR",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_BARBARIAN_PEACE_OR_TRUCE"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_BARBARIAN_MAX_NEAR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_CHOOSE_WAR_1",
            "EVENTOPTION_BARBARIAN_CHOOSE_WAR_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_WAR_STRONGER",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_WAR_STRONGER_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_WAR_STRONGER",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_BARBARIAN_MAX_NEAR"
            },
            {
              "First": "0",
              "Second": "SUBJECT_BARBARIAN_MIN_STRONGER"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_WAR",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_WAR_STRONGER_ORDERS",
            "EVENTOPTION_BARBARIAN_WAR_STRONGER_SCIENCE"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_INVASION_DISTANT",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_INVASION_DISTANT_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_INVASION_DISTANT",
        "zBackgroundName": "MudFight",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_BARBARIAN_MIN_DISTANT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_BARBARIAN_MAX_CAUTIOUS"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_BARBARIAN_INVASION",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_INVASION_FAR_LEVY",
            "EVENTOPTION_BARBARIAN_INVASION_FAR_TRAINING"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iMinTurns": "50",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_WAR_AMBITION",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_WAR_AMBITION_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_WAR_AMBITION",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_BARBARIAN_MAX_NEAR"
            },
            {
              "First": "0",
              "Second": "SUBJECT_BARBARIAN_MIN_SIMILAR"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_WAR_AMBITION_YES",
            "EVENTOPTION_BARBARIAN_WAR_AMBITION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_WAR_OFFER",
        "iWeight": "2",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_MIN_PLEASED",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_BUILDER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_PLEASED_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_CAUTIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_BUILDER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_CAUTIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_BUILDER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iMinLeader": "4",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_WAR",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_WAR",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_WAR_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4",
        "iEventLinkTurns": "2",
        "iPriority": "5",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4_INTIMIDATED_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_PLAYER_WAR_OFFER_TRAIT_BUILDER_ARCHETYPE_CAUTIOUS_LEADER4",
        "iEventLinkTurns": "2",
        "iPriority": "5",
        "iWeight": "3"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_MAX_ANGRY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_COMMANDER"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_WAR",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_2",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_MAX_ANGRY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_COMMANDER"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_WAR",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_2",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_3",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_COMMANDER_ARCHETYPE_ANGRY_LEADER4_OPTION_4"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iMinLeader": "4",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_LUXURY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_LUXURY_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_LUXURY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_MAX_CAUTIOUS",
            "SUBJECT_PLAYER_US",
            "SUBJECT_HAS_LUXURY"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_LUXURY_YES",
            "EVENTOPTION_PLAYER_WAR_OFFER_LUXURY_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "3",
        "iWeight": "2"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_ANGRY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_DIPLOMAT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_ANGRY_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iMinLeader": "2",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "35",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_UPSET",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_DIPLOMAT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_DIPLOMAT_ARCHETYPE_UPSET_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iMinLeader": "2",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "35"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_MIN_CAUTIOUS",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_ZEALOT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_ZEALOT_CAUTIOUS_OR_BETTER_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iMinLeader": "2",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "35"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_MAX_ANGRY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_HERO"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_WAR",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_OPTION_1",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_HERO_ARCHETYPE_ANGRY_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iMinLeader": "2",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_MAX_ANGRY",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_SCHEMER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_ANGRY_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_PLEASED",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_SCHEMER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED_OPTION_0",
            "EVENTOPTION_PLAYER_WAR_OFFER_TRAIT_SCHEMER_ARCHETYPE_PLEASED_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_WAR_DECLARE",
        "Name": "TEXT_EVENTSTORY_PLAYER_WAR_DECLARE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_WAR_DECLARE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_WAR",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_WAR_DECLARE",
            "EVENTOPTION_PLAYER_WAR_DECLARE"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_DECLARE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_PEACE_END",
        "Name": "TEXT_EVENTSTORY_PLAYER_PEACE_END_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_PEACE_END",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_PEACE",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_PLAYER_OPINION_MAX_UPSET"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_PLAYER_TRUCE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_PEACE_END_OPINION",
            "EVENTOPTION_PLAYER_PEACE_END_OK"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PLAYER_DIPLO_MARRIAGE",
        "Name": "TEXT_EVENTSTORY_PLAYER_DIPLO_MARRIAGE_TITLE",
        "Text": "TEXT_EVENTSTORY_PLAYER_DIPLO_MARRIAGE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_SUCCESSION_THEM",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "2",
              "Second": "SUBJECT_ROYAL"
            },
            {
              "First": "3",
              "Second": "SUBJECT_ROYAL"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLAYER_DIPLO_MARRIAGE_1",
            "EVENTOPTION_PLAYER_DIPLO_MARRIAGE_2",
            "EVENTOPTION_PLAYER_DIPLO_MARRIAGE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "iWeight": "2"
      },
      {
        "zType": "EVENTSTORY_WAR_OFFER_RELIGION_STATE",
        "Name": "TEXT_EVENTSTORY_WAR_OFFER_RELIGION_STATE_TITLE",
        "Text": "TEXT_EVENTSTORY_WAR_OFFER_RELIGION_STATE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_OPINION_MAX_CAUTIOUS",
            "SUBJECT_PLAYER_US",
            "SUBJECT_RELIGION"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_STATE_RELIGION"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_RELIGION_STATE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WAR_OFFER_RELIGION_STATE_YES",
            "EVENTOPTION_WAR_OFFER_RELIGION_STATE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "iPriority": "2",
        "iWeight": "2",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_DIPLO_OFFER_RELIGION_SPREAD",
        "Name": "TEXT_EVENTSTORY_DIPLO_OFFER_RELIGION_SPREAD_TITLE",
        "Text": "TEXT_EVENTSTORY_DIPLO_OFFER_RELIGION_SPREAD",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US",
            "SUBJECT_RELIGION",
            "SUBJECT_LEADER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_STATE_RELIGION"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "3",
              "Second": "SUBJECTRELATION_RELIGION_STATE",
              "Third": "0"
            },
            {
              "First": "4",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DIPLO_OFFER_RELIGION_SPREAD_YES",
            "EVENTOPTION_DIPLO_OFFER_RELIGION_SPREAD_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_DIPLO_OFFER_ASK_FAVOR",
        "Name": "TEXT_EVENTSTORY_DIPLO_OFFER_ASK_FAVOR_TITLE",
        "Text": "TEXT_EVENTSTORY_DIPLO_OFFER_ASK_FAVOR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_MAX_STRONGER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_YES",
            "EVENTOPTION_DIPLO_OFFER_ASK_FAVOR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_DIPLO_OFFER_FAMILY_RELIGION_WAR",
        "Name": "TEXT_EVENTSTORY_DIPLO_OFFER_FAMILY_RELIGION_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_DIPLO_OFFER_FAMILY_RELIGION_WAR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_PLAYER_STATE_RELIGION"
            },
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_STATE_RELIGION"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_RELIGION_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DIPLO_OFFER_FAMILY_RELIGION_WAR_YES",
            "EVENTOPTION_DIPLO_OFFER_FAMILY_RELIGION_WAR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "iMinTurns": "20",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_DIPLO_OFFER_FAMILY_LAW_WAR",
        "Name": "TEXT_EVENTSTORY_DIPLO_OFFER_FAMILY_LAW_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_DIPLO_OFFER_FAMILY_LAW_WAR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LAW"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_LAW_ACTIVE",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_LAW_NEGATIVE",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DIPLO_OFFER_FAMILY_LAW_WAR_YES",
            "EVENTOPTION_DIPLO_OFFER_FAMILY_LAW_WAR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "iMinTurns": "30",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "beginGroup": "Combat",
        "zType": "EVENTSTORY_LEADER_SMITING_FOES",
        "Name": "TEXT_EVENTSTORY_LEADER_SMITING_FOES_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_SMITING_FOES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LEADER_SMITING_FOES_STATUE",
            "EVENTOPTION_LEADER_SMITING_FOES_INSPIRATION"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_CRITICAL",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_BATTLEFIELD_BRILLIANCE",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_BATTLEFIELD_BRILLIANCE_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_BATTLEFIELD_BRILLIANCE",
        "zEventURL": "https://en.wikiquote.org/wiki/Aristotle",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN_WAR"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_HIGH_COURAGE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_BATTLEFIELD_BRILLIANCE_PEACE",
            "EVENTOPTION_BARBARIAN_BATTLEFIELD_BRILLIANCE_AMUSE"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_CRITICAL",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_ORDER_OF_BUSINESS",
        "Name": "TEXT_EVENTSTORY_ORDER_OF_BUSINESS_TITLE",
        "Text": "TEXT_EVENTSTORY_ORDER_OF_BUSINESS",
        "zEventURL": "https://en.wikipedia.org/wiki/Alexander_the_Great",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GENERAL"
            },
            {
              "First": "2",
              "Second": "SUBJECT_BABY"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_CHILD_OF",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ORDER_OF_BUSINESS_HEIR_FIRST",
            "EVENTOPTION_ORDER_OF_BUSINESS_GENERAL_FIRST",
            "EVENTOPTION_ORDER_OF_BUSINESS_HORSE_FIRST"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_CRITICAL",
        "iWeight": "5",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_LEADER_WAR_BLUNDERS",
        "Name": "TEXT_EVENTSTORY_LEADER_WAR_BLUNDERS_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_WAR_BLUNDERS",
        "zBackgroundName": "Military_Defeat",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_LOW_COURAGE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LEADER_WAR_BLUNDERS_DARE",
            "EVENTOPTION_LEADER_WAR_BLUNDERS_GOLD"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_UNIT_KILLED",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_ABANDONED_SUPPLIES",
        "Name": "TEXT_EVENTSTORY_ABANDONED_SUPPLIES_TITLE",
        "Text": "TEXT_EVENTSTORY_ABANDONED_SUPPLIES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHARACTER_MELEE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ABANDONED_SUPPLIES_WEAPONS",
            "EVENTOPTION_ABANDONED_SUPPLIES_FOOD"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_KILL",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_CAPTURED_PRISONERS",
        "Name": "TEXT_EVENTSTORY_CAPTURED_PRISONERS_TITLE",
        "Text": "TEXT_EVENTSTORY_CAPTURED_PRISONERS",
        "zBackgroundName": "Captured_Soldiers",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHARACTER_MELEE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CAPTURED_PRISONERS_RANSOM",
            "EVENTOPTION_CAPTURED_PRISONERS_EXECUTE",
            "EVENTOPTION_CAPTURED_PRISONERS_RESETTLE"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_KILL",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_INACCURATE_TROOPS",
        "Name": "TEXT_EVENTSTORY_INACCURATE_TROOPS_TITLE",
        "Text": "TEXT_EVENTSTORY_INACCURATE_TROOPS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_RANGED"
            },
            {
              "First": "0",
              "Second": "SUBJECT_HIGH_COURAGE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_INACCURATE_TROOPS_SHOOT",
            "EVENTOPTION_INACCURATE_TROOPS_DRILL"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_KILL",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_BATTLEFIELD_PROMOTION",
        "Name": "TEXT_EVENTSTORY_BATTLEFIELD_PROMOTION_TITLE",
        "Text": "TEXT_EVENTSTORY_BATTLEFIELD_PROMOTION",
        "zBackgroundName": "promotion_01",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_UNIT_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BATTLEFIELD_PROMOTION_PROMOTE",
            "EVENTOPTION_BATTLEFIELD_PROMOTION_TRIUMPH",
            "EVENTOPTION_BATTLEFIELD_PROMOTION_DECLINE"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_KILL",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_HONOR_AND_GLORY",
        "Name": "TEXT_EVENTSTORY_HONOR_AND_GLORY_TITLE",
        "Text": "TEXT_EVENTSTORY_HONOR_AND_GLORY",
        "zBackgroundName": "promotion_01",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GENERAL"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HONOR_AND_GLORY_TRIUMPH",
            "EVENTOPTION_HONOR_AND_GLORY_HAPPY_PEOPLE",
            "EVENTOPTION_HONOR_AND_GLORY_MAGNIFICENT_SLIGHTED"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_KILL",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_THE_PEOPLES_GENERAL",
        "Name": "TEXT_EVENTSTORY_THE_PEOPLES_GENERAL_TITLE",
        "Text": "TEXT_EVENTSTORY_THE_PEOPLES_GENERAL",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_NON_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_FAMOUS"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_THE_PEOPLES_GENERAL_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_GENERAL_KILL",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CAPTURED_GENERAL",
        "Name": "TEXT_EVENTSTORY_CAPTURED_GENERAL_TITLE",
        "Text": "TEXT_EVENTSTORY_CAPTURED_GENERAL",
        "zBackgroundName": "Captured_Soldiers",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_NON_LEADER_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CAPTURED_GENERAL_OPTION_0",
            "EVENTOPTION_CAPTURED_GENERAL_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_UNIT_KILLED",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_FACIAL_WOUND",
        "Name": "TEXT_EVENTSTORY_FACIAL_WOUND_TITLE",
        "Text": "TEXT_EVENTSTORY_FACIAL_WOUND",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_NON_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GENERAL"
          }
        },
        "aeBonuses": {
          "zValue": "BONUS_EVENT_FACIAL_WOUND"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FACIAL_WOUND_OK",
            "EVENTOPTION_FACIAL_WOUND_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_INJURY",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SHATTERED_KNEE",
        "Name": "TEXT_EVENTSTORY_SHATTERED_KNEE_TITLE",
        "Text": "TEXT_EVENTSTORY_SHATTERED_KNEE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GENERAL"
          }
        },
        "aeBonuses": {
          "zValue": "BONUS_EVENTSTORY_SHATTERED_KNEE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SHATTERED_KNEE_OK",
            "EVENTOPTION_SHATTERED_KNEE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_INJURY",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_LOST_SIGHT",
        "Name": "TEXT_EVENTSTORY_LOST_SIGHT_TITLE",
        "Text": "TEXT_EVENTSTORY_LOST_SIGHT",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GENERAL"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NON_LEADER_US"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_EVENTSTORY_LOST_SIGHT"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LOST_SIGHT_OK",
            "EVENTOPTION_LOST_SIGHT_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_INJURY",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_WEAPONS_OF_WAR",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_WEAPONS_OF_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_WEAPONS_OF_WAR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_WEAPONS_OF_WAR_OPTION_0",
            "EVENTOPTION_BARBARIAN_WEAPONS_OF_WAR_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_SECRET_ALLIANCES",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_SECRET_ALLIANCES_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_SECRET_ALLIANCES",
        "zBackgroundName": "Captured_Soldiers",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_BARBARIAN_PEACE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_0",
            "EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_1",
            "EVENTOPTION_BARBARIAN_SECRET_ALLIANCES_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_YOUNG_HOSTAGE",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_YOUNG_HOSTAGE_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_YOUNG_HOSTAGE",
        "zBackgroundName": "Captured_Soldiers",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN",
            "SUBJECT_YOUNG_HOSTAGE"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_BARBARIAN_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_BARBARIAN_PEACE_OR_TRUCE",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_BARBARIAN_SAME",
              "Third": "2"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_0",
            "EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_1",
            "EVENTOPTION_BARBARIAN_YOUNG_HOSTAGE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_WITCH_QUEEN",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_WITCH_QUEEN_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_WITCH_QUEEN",
        "zBackgroundName": "poetess",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US",
            "SUBJECT_WITCH_QUEEN"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_BARBARIAN_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_0",
            "EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_1",
            "EVENTOPTION_BARBARIAN_WITCH_QUEEN_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_TEACHING_THE_ENEMY",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_TEACHING_THE_ENEMY_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_TEACHING_THE_ENEMY",
        "zAudioTrigger": "AUDIO_UI_EVENT_ENCOURAGING_SITES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US",
            "SUBJECT_TEACHING_THE_ENEMY"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_BARBARIAN_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_TEACHING_THE_ENEMY_OPTION_0",
            "EVENTOPTION_BARBARIAN_TEACHING_THE_ENEMY_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_HOMELAND_BURNING",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_HOMELAND_BURNING_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_HOMELAND_BURNING",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_0",
            "EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_1",
            "EVENTOPTION_BARBARIAN_HOMELAND_BURNING_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_LIBERATED",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_LIBERATED_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_LIBERATED",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_LIBERATED_OPTION_0",
            "EVENTOPTION_BARBARIAN_LIBERATED_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_EXOTIC_INFLUENCE",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_EXOTIC_INFLUENCE_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_EXOTIC_INFLUENCE",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_0",
            "EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_1",
            "EVENTOPTION_BARBARIAN_EXOTIC_INFLUENCE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_KINGS_RANSOM",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_KINGS_RANSOM_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_KINGS_RANSOM",
        "zBackgroundName": "Military_Defeat",
        "zEventURL": "https://en.wikipedia.org/wiki/Battle_of_Issus",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US",
            "SUBJECT_KINGS_RANSOM_MOTHER",
            "SUBJECT_KINGS_RANSOM_DAUGHTER_OLDER",
            "SUBJECT_KINGS_RANSOM_DAUGHTER_YOUNGER",
            "SUBJECT_LEADER_BARBARIAN_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "5",
            "Second": "SUBJECT_MALE"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_BARBARIAN_SAME",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_BARBARIAN_SAME",
              "Third": "0"
            },
            {
              "First": "4",
              "Second": "SUBJECTRELATION_BARBARIAN_SAME",
              "Third": "0"
            },
            {
              "First": "5",
              "Second": "SUBJECTRELATION_BARBARIAN_SAME",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_0",
            "EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_1",
            "EVENTOPTION_BARBARIAN_KINGS_RANSOM_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iImageSubject": "5",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_STRANGE_ENCOUNTER",
        "Name": "TEXT_EVENTSTORY_STRANGE_ENCOUNTER_TITLE",
        "Text": "TEXT_EVENTSTORY_STRANGE_ENCOUNTER",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STRANGE_ENCOUNTER_CURSED_TREASURE",
            "EVENTOPTION_STRANGE_ENCOUNTER_KNOWLEDGE",
            "EVENTOPTION_STRANGE_ENCOUNTER_RESPECT"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_STRANGE_ENCOUNTER_CURIOUS_ARTIFACT",
        "Name": "TEXT_EVENTSTORY_STRANGE_ENCOUNTER_CURIOUS_ARTIFACT_TITLE",
        "Text": "TEXT_EVENTSTORY_STRANGE_ENCOUNTER_CURIOUS_ARTIFACT",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STRANGE_ENCOUNTER_CURIOUS_ARTIFACT_RETURN_ARTIFACT",
            "EVENTOPTION_STRANGE_ENCOUNTER_CURIOUS_ARTIFACT_REFUSE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_STRANGER_ENCOUNTER_CURSED_TREASURE",
        "iEventLinkTurns": "3",
        "iWeight": "1",
        "iProb": "5"
      },
      {
        "zType": "EVENTSTORY_PRISONERS_OF_WAR",
        "Name": "TEXT_EVENTSTORY_PRISONERS_OF_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_PRISONERS_OF_WAR",
        "zBackgroundName": "Captured_Soldiers",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PRISONERS_OF_WAR_EXECUTE",
            "EVENTOPTION_PRISONERS_OF_WAR_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_TOMBS",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_TOMBS_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_TOMBS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EVENTSTORY_BARBARIAN_TOMBS_EVENTSTORY_BARBARIAN_TOMBS_LOOT",
            "EVENTOPTION_EVENTSTORY_BARBARIAN_TOMBS_EVENTSTORY_BARBARIAN_TOMBS_NO_LOOT"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_CULT_OF_FLAME",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_CULT_OF_FLAME_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_CULT_OF_FLAME",
        "zBackgroundName": "Military_Defeat",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_CULT_OF_FLAME_KEEP",
            "EVENTOPTION_BARBARIAN_CULT_OF_FLAME_SMASH"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_PRINCE",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_PRINCE_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_PRINCE",
        "zBackgroundName": "Escaped_Slave",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN_PRINCE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_PRINCE_ENSLAVE",
            "EVENTOPTION_BARBARIAN_PRINCE_KILL",
            "EVENTOPTION_BARBARIAN_PRINCE_WARD"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_TRIBAL_CONFEDERATION",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_TRIBAL_CONFEDERATION_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_TRIBAL_CONFEDERATION",
        "zBackgroundName": "city approach",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_BARBARIAN_DIFF",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_BARBARIAN_DIFF",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_TRIBAL_CONFEDERATION_OPTION_0",
            "EVENTOPTION_BARBARIAN_TRIBAL_CONFEDERATION_OPTION_1",
            "EVENTOPTION_BARBARIAN_TRIBAL_CONFEDERATION_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_RIVALS",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_RIVALS_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_RIVALS",
        "zBackgroundName": "Military_Defeat",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_BARBARIAN_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_RIVALS_OPTION_0",
            "EVENTOPTION_BARBARIAN_RIVALS_OPTION_1",
            "EVENTOPTION_BARBARIAN_RIVALS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_SAVAGE_PLAGUE",
        "Name": "TEXT_EVENTSTORY_SAVAGE_PLAGUE_TITLE",
        "Text": "TEXT_EVENTSTORY_SAVAGE_PLAGUE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "2",
            "Second": "SUBJECT_GENERAL"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SAVAGE_PLAGUE_OPTION_0",
            "EVENTOPTION_SAVAGE_PLAGUE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "4"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_REBEL_GLADIATORS",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_REBEL_GLADIATORS_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_REBEL_GLADIATORS",
        "zBackgroundName": "Escaped_Slave",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_0",
            "EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_1",
            "EVENTOPTION_BARBARIAN_REBEL_GLADIATORS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_BARBARIAN_HORSE_LORDS",
        "Name": "TEXT_EVENTSTORY_BARBARIAN_HORSE_LORDS_TITLE",
        "Text": "TEXT_EVENTSTORY_BARBARIAN_HORSE_LORDS",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_TRIBE",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BARBARIAN_HORSE_LORDS_OPTION_0",
            "EVENTOPTION_BARBARIAN_HORSE_LORDS_OPTION_1",
            "EVENTOPTION_BARBARIAN_HORSE_LORDS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "TechPrereq": "TECH_MANOR",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_HONOR_AND_FIDELITY",
        "Name": "TEXT_EVENTSTORY_HONOR_AND_FIDELITY_TITLE",
        "Text": "TEXT_EVENTSTORY_HONOR_AND_FIDELITY",
        "zBackgroundName": "promotion_01",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GENERAL"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CITY_FAMILY_SEAT"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HONOR_AND_FIDELITY_PROMOTION",
            "EVENTOPTION_HONOR_AND_FIDELITY_TRIUMPH"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_CRITICAL",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_FAMOUS_VICTOR",
        "Name": "TEXT_EVENTSTORY_FAMOUS_VICTOR_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMOUS_VICTOR",
        "zBackgroundName": "promotion_01",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_NON_LEADER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MELEE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_DIPLOMAT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_EVENT_FAMOUS_VICTOR"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMOUS_VICTOR_OK",
            "EVENTOPTION_FAMOUS_VICTOR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_KILL",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CITY_GLADIATOR_ARMY",
        "Name": "TEXT_EVENTSTORY_CITY_GLADIATOR_ARMY_TITLE",
        "Text": "TEXT_EVENTSTORY_CITY_GLADIATOR_ARMY",
        "zBackgroundName": "city approach",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_0",
            "EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_1",
            "EVENTOPTION_CITY_GLADIATOR_ARMY_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CAPTURED",
        "iTriggerExtra": "1",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_LOVE_AND_WAR",
        "Name": "TEXT_EVENTSTORY_LOVE_AND_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_LOVE_AND_WAR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_BARBARIAN_NUMIDIANS",
            "SUBJECT_LEADER_US",
            "SUBJECT_HIARBAS"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_BARBARIAN_PEACE_OR_TRUCE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_SINGLE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_FEMALE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LOVE_AND_WAR_OPTION_0",
            "EVENTOPTION_LOVE_AND_WAR_OPTION_1",
            "EVENTOPTION_LOVE_AND_WAR_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "beginGroup": "Marriage",
        "zType": "EVENTSTORY_MARRIAGE_OFFER",
        "Name": "TEXT_EVENTSTORY_MARRIAGE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_MARRIAGE_OFFER",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MARRIAGE_OFFER_YES",
            "EVENTOPTION_MARRIAGE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iImageSubject": "1",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MARRIAGE_OFFER_FAMILY",
        "Name": "TEXT_EVENTSTORY_MARRIAGE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_MARRIAGE_OFFER_FAMILY",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MARRIAGE_OFFER_FAMILY_1",
            "EVENTOPTION_MARRIAGE_OFFER_FAMILY_2",
            "EVENTOPTION_MARRIAGE_OFFER_FAMILY_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iPriority": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MARRIAGE_OFFER_FAMILY_TEMP",
        "Name": "TEXT_EVENTSTORY_MARRIAGE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_MARRIAGE_OFFER_FAMILY",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_SUITOR_TEMP"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MARRIAGE_OFFER_FAMILY_1",
            "EVENTOPTION_MARRIAGE_OFFER_FAMILY_2",
            "EVENTOPTION_MARRIAGE_OFFER_FAMILY_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iPriority": "1",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MARRIAGE_OFFER_FAMILY_TEMP_ALL",
        "Name": "TEXT_EVENTSTORY_MARRIAGE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_MARRIAGE_OFFER_FAMILY",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_SUITOR_TEMP",
            "SUBJECT_SUITOR_TEMP"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MARRIAGE_OFFER_FAMILY_1",
            "EVENTOPTION_MARRIAGE_OFFER_FAMILY_2",
            "EVENTOPTION_MARRIAGE_OFFER_FAMILY_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MARRIAGE_OFFER_TWO_FAMILIES",
        "Name": "TEXT_EVENTSTORY_MARRIAGE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_MARRIAGE_OFFER_TWO_FAMILIES",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_1",
            "EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_2",
            "EVENTOPTION_MARRIAGE_OFFER_TWO_FAMILIES_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iPriority": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MARRIAGE_OFFER_FOREIGN",
        "Name": "TEXT_EVENTSTORY_MARRIAGE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_MARRIAGE_OFFER_FOREIGN",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_CHARACTER_PLAYER_THEM",
            "SUBJECT_CHARACTER_PLAYER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "2",
              "Second": "SUBJECT_NO_JOB"
            },
            {
              "First": "3",
              "Second": "SUBJECT_NO_JOB"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MARRIAGE_OFFER_FOREIGN_1",
            "EVENTOPTION_MARRIAGE_OFFER_FOREIGN_2",
            "EVENTOPTION_MARRIAGE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iPriority": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MARRIAGE_OFFER_FOREIGN_TEMP",
        "Name": "TEXT_EVENTSTORY_MARRIAGE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_MARRIAGE_OFFER_FOREIGN",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_CHARACTER_PLAYER_THEM",
            "SUBJECT_SUITOR_TEMP"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "2",
            "Second": "SUBJECT_NO_JOB"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MARRIAGE_OFFER_FOREIGN_1",
            "EVENTOPTION_MARRIAGE_OFFER_FOREIGN_2",
            "EVENTOPTION_MARRIAGE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iPriority": "1",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MARRIAGE_OFFER_FOREIGN_TEMP_ALL",
        "Name": "TEXT_EVENTSTORY_MARRIAGE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_MARRIAGE_OFFER_FOREIGN",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_SUITOR_TEMP",
            "SUBJECT_SUITOR_TEMP"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MARRIAGE_OFFER_FOREIGN_1",
            "EVENTOPTION_MARRIAGE_OFFER_FOREIGN_2",
            "EVENTOPTION_MARRIAGE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MARRIAGE_OFFER_BARBARIAN",
        "Name": "TEXT_EVENTSTORY_MARRIAGE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_MARRIAGE_OFFER_BARBARIAN",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_BARBARIAN",
            "SUBJECT_CHARACTER_BARBARIAN_THEM"
          ]
        },
        "SubjectRepeatTurns": {
          "Pair": {
            "First": "1",
            "Second": "10"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_BARBARIAN_SAME",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MARRIAGE_OFFER_BARBARIAN_YES",
            "EVENTOPTION_MARRIAGE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iPriority": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MARRIAGE_OFFER_BARBARIAN_TEMP",
        "Name": "TEXT_EVENTSTORY_MARRIAGE_OFFER_TITLE",
        "Text": "TEXT_EVENTSTORY_MARRIAGE_OFFER_BARBARIAN",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_BARBARIAN",
            "SUBJECT_SUITOR_TEMP"
          ]
        },
        "SubjectRepeatTurns": {
          "Pair": {
            "First": "1",
            "Second": "10"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_BARBARIAN_SAME",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MARRIAGE_OFFER_BARBARIAN_YES",
            "EVENTOPTION_MARRIAGE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MISSION_MARRIAGE_FAMILY",
        "Name": "TEXT_EVENTSTORY_MISSION_MARRIAGE_FAMILY_TITLE",
        "Text": "TEXT_EVENTSTORY_MISSION_MARRIAGE_FAMILY",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MISSION_MARRIAGE_FAMILY_1",
            "EVENTOPTION_MISSION_MARRIAGE_FAMILY_2",
            "EVENTOPTION_MARRIAGE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_FAMILY_MARRIAGE",
        "iTriggerExtra": "1",
        "iPriority": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MISSION_MARRIAGE_FAMILY_TEMP",
        "Name": "TEXT_EVENTSTORY_MISSION_MARRIAGE_FAMILY_TITLE",
        "Text": "TEXT_EVENTSTORY_MISSION_MARRIAGE_FAMILY",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_SUITOR_TEMP"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MISSION_MARRIAGE_FAMILY_1",
            "EVENTOPTION_MISSION_MARRIAGE_FAMILY_2",
            "EVENTOPTION_MARRIAGE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_FAMILY_MARRIAGE",
        "iTriggerExtra": "1",
        "iPriority": "1",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MISSION_MARRIAGE_FAMILY_TEMP_ALL",
        "Name": "TEXT_EVENTSTORY_MISSION_MARRIAGE_FAMILY_TITLE",
        "Text": "TEXT_EVENTSTORY_MISSION_MARRIAGE_FAMILY",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_SUITOR_TEMP",
            "SUBJECT_SUITOR_TEMP"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MISSION_MARRIAGE_FAMILY_1",
            "EVENTOPTION_MISSION_MARRIAGE_FAMILY_2",
            "EVENTOPTION_MARRIAGE_OFFER_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_FAMILY_MARRIAGE",
        "iTriggerExtra": "1",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MATCHMAKER_0",
        "Name": "TEXT_EVENTSTORY_MATCHMAKER_0_TITLE",
        "Text": "TEXT_EVENTSTORY_MATCHMAKER_0",
        "zEventURL": "https://en.wikipedia.org/wiki/Sonnet_54",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_BEAUTIFUL"
            },
            {
              "First": "2",
              "Second": "SUBJECT_INTELLIGENT"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MATCHMAKER_0_OPTION_0",
            "EVENTOPTION_MATCHMAKER_0_OPTION_1",
            "EVENTOPTION_MATCHMAKER_0_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iPriority": "3",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_MATCHMAKER_1",
        "Name": "TEXT_EVENTSTORY_MATCHMAKER_1_TITLE",
        "Text": "TEXT_EVENTSTORY_MATCHMAKER_1",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_BARBARIAN_WAR",
            "SUBJECT_SUITOR_TEMP",
            "SUBJECT_SUITOR_TEMP"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_BARBARIAN_DIPLOMACY_FIVE_TURNS"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_BARBARIAN_SAME",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_BARBARIAN_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MATCHMAKER_1_OPTION_0",
            "EVENTOPTION_MATCHMAKER_1_OPTION_1",
            "EVENTOPTION_MATCHMAKER_1_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iPriority": "3",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_MATCHMAKER_2",
        "Name": "TEXT_EVENTSTORY_MATCHMAKER_2_TITLE",
        "Text": "TEXT_EVENTSTORY_MATCHMAKER_2",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN",
            "SUBJECT_SUITOR_TEMP",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_PLAYER_THEM"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_BARBARIAN_SAME",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MATCHMAKER_2_OPTION_0",
            "EVENTOPTION_MATCHMAKER_2_OPTION_1",
            "EVENTOPTION_MATCHMAKER_2_OPTION_2",
            "EVENTOPTION_MATCHMAKER_2_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE_OFFER",
        "iPriority": "3",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_MARRIAGE_PROPOSAL",
        "Name": "TEXT_EVENTSTORY_MARRIAGE_PROPOSAL_TITLE",
        "Text": "TEXT_EVENTSTORY_MARRIAGE_PROPOSAL",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MARRIAGE_PROPOSAL_DECLINE",
            "EVENTOPTION_MARRIAGE_PROPOSAL_MARRY_US",
            "EVENTOPTION_MARRIAGE_PROPOSAL_MARRY_HEIR"
          ]
        },
        "iPriority": "3",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "beginGroup": "Character",
        "zType": "EVENTSTORY_DELICIOUS_DRINKS",
        "Name": "TEXT_EVENTSTORY_DELICIOUS_DRINKS_TITLE",
        "Text": "TEXT_EVENTSTORY_DELICIOUS_DRINKS",
        "zBackgroundName": "Birth",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_LOW_WISDOM"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DELICIOUS_DRINKS_BOTTOMS_UP",
            "EVENTOPTION_DELICIOUS_DRINKS_FRIEND"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SUDDEN_INSIGHT",
        "Name": "TEXT_EVENTSTORY_SUDDEN_INSIGHT_TITLE",
        "Text": "TEXT_EVENTSTORY_SUDDEN_INSIGHT",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_HIGH_WISDOM"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SUDDEN_INSIGHT_UNVEIL",
            "EVENTOPTION_SUDDEN_INSIGHT_SELL"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_TIME_FOR_A_BREAK",
        "Name": "TEXT_EVENTSTORY_TIME_FOR_A_BREAK_TITLE",
        "Text": "TEXT_EVENTSTORY_TIME_FOR_A_BREAK",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_LOW_DISCIPLINE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TIME_FOR_A_BREAK_RELAX",
            "EVENTOPTION_TIME_FOR_A_BREAK_GAMBLE",
            "EVENTOPTION_TIME_FOR_A_BREAK_DRINK"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SPARE_TIME",
        "Name": "TEXT_EVENTSTORY_SPARE_TIME_TITLE",
        "Text": "TEXT_EVENTSTORY_SPARE_TIME",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_HIGH_DISCIPLINE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SPARE_TIME_SCHOOL",
            "EVENTOPTION_SPARE_TIME_LABOR",
            "EVENTOPTION_SPARE_TIME_DRILL"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_EPIC_POETRY",
        "Name": "TEXT_EVENTSTORY_EPIC_POETRY_TITLE",
        "Text": "TEXT_EVENTSTORY_EPIC_POETRY",
        "zBackgroundName": "poetess",
        "zAudioTrigger": "AUDIO_UI_EVENT_ENCOURAGING_SITES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_NOT_UNCOUTH"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EPIC_POETRY_RECITE",
            "EVENTOPTION_EPIC_POETRY_TEACH",
            "EVENTOPTION_EPIC_POETRY_SERVICE"
          ]
        },
        "LawPrereq": "LAW_EPICS",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_LOOKING_OUTWARD",
        "Name": "TEXT_EVENTSTORY_LOOKING_OUTWARD_TITLE",
        "Text": "TEXT_EVENTSTORY_LOOKING_OUTWARD",
        "zBackgroundName": "decree",
        "zAudioTrigger": "AUDIO_UI_EVENT_ENCOURAGING_SITES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_NOT_CRUEL"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LOOKING_OUTWARD_MYSELF",
            "EVENTOPTION_LOOKING_OUTWARD_SCOUTS"
          ]
        },
        "LawPrereq": "LAW_EXPLORATION",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_LOST_RELATIVE",
        "Name": "TEXT_EVENTSTORY_TRAIT_LOST_RELATIVE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_LOST_RELATIVE",
        "zEventURL": "https://en.wikipedia.org/wiki/Bardiya",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_BARDIYA",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_FOOLISH"
            },
            {
              "First": "3",
              "Second": "SUBJECT_SPYMASTER"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_0",
            "EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_1",
            "EVENTOPTION_TRAIT_LOST_RELATIVE_OPTION_2"
          ]
        },
        "iWeight": "3",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_A_PRIVATE_AUDIENCE",
        "Name": "TEXT_EVENTSTORY_TRAIT_A_PRIVATE_AUDIENCE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_A_PRIVATE_AUDIENCE",
        "zBackgroundName": "Escaped_Slave",
        "zEventURL": "https://en.wikipedia.org/wiki/Bardiya",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "3",
            "Second": "SUBJECT_SPYMASTER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_A_PRIVATE_AUDIENCE_OPTION_0",
            "EVENTOPTION_TRAIT_A_PRIVATE_AUDIENCE_OPTION_1"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_LOST_RELATIVE_AUDIENCE",
        "iWeight": "3"
      },
      {
        "zType": "EVENTSTORY_TRAIT_DEMAND_FOR_JUSTICE",
        "Name": "TEXT_EVENTSTORY_TRAIT_DEMAND_FOR_JUSTICE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_DEMAND_FOR_JUSTICE",
        "zEventURL": "https://en.wikipedia.org/wiki/Bardiya",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "3",
            "Second": "SUBJECT_SPYMASTER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_DEMAND_FOR_JUSTICE_OPTION_0",
            "EVENTOPTION_TRAIT_DEMAND_FOR_JUSTICE_OPTION_1"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_LOST_RELATIVE_IGNORE",
        "iEventLinkTurns": "3",
        "iWeight": "4"
      },
      {
        "zType": "EVENTSTORY_TRAIT_INVESTIGATION_COMPLETE",
        "Name": "TEXT_EVENTSTORY_TRAIT_INVESTIGATION_COMPLETE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_INVESTIGATION_COMPLETE",
        "zEventURL": "https://en.wikipedia.org/wiki/Bardiya",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "3",
            "Second": "SUBJECT_SPYMASTER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_INVESTIGATION_COMPLETE_OPTION_0",
            "EVENTOPTION_TRAIT_INVESTIGATION_COMPLETE_OPTION_1"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_LOST_RELATIVE_INVESTIGATE",
        "iWeight": "3"
      },
      {
        "zType": "EVENTSTORY_TRAIT_RIOTS_IN_THE_STREETS",
        "Name": "TEXT_EVENTSTORY_TRAIT_RIOTS_IN_THE_STREETS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_RIOTS_IN_THE_STREETS",
        "zBackgroundName": "poetess",
        "zEventURL": "https://en.wikipedia.org/wiki/Bardiya",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_RIOTS_IN_THE_STREETS_OPTION_0",
            "EVENTOPTION_TRAIT_RIOTS_IN_THE_STREETS_OPTION_1",
            "EVENTOPTION_TRAIT_RIOTS_IN_THE_STREETS_OPTION_2"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_LOST_RELATIVE_RIOTS",
        "iWeight": "3"
      },
      {
        "zType": "EVENTSTORY_TRAIT_PEACEMAKER",
        "Name": "TEXT_EVENTSTORY_TRAIT_PEACEMAKER_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_PEACEMAKER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_DEALMAKER"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_MAX_NEAR",
            "Third": "2"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_PEACEMAKER_OPTION_0",
            "EVENTOPTION_TRAIT_PEACEMAKER_OPTION_1",
            "EVENTOPTION_TRAIT_PEACEMAKER_OPTION_2"
          ]
        },
        "iWeight": "2"
      },
      {
        "zType": "EVENTSTORY_TRAIT_COURTLY_DRAMA",
        "Name": "TEXT_EVENTSTORY_TRAIT_COURTLY_DRAMA_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_COURTLY_DRAMA",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_HERO"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_COURTLY_DRAMA_OPTION_0",
            "EVENTOPTION_TRAIT_COURTLY_DRAMA_OPTION_1",
            "EVENTOPTION_TRAIT_COURTLY_DRAMA_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_RISKY_EXPEDITION",
        "Name": "TEXT_EVENTSTORY_TRAIT_RISKY_EXPEDITION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_RISKY_EXPEDITION",
        "zBackgroundName": "Captured_Soldiers",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_BARBARIAN",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_BOLD"
            },
            {
              "First": "1",
              "Second": "SUBJECT_BARBARIAN_PEACE"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_0",
            "EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_1",
            "EVENTOPTION_TRAIT_RISKY_EXPEDITION_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_SIMPLE_GIFTS",
        "Name": "TEXT_EVENTSTORY_TRAIT_SIMPLE_GIFTS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_SIMPLE_GIFTS",
        "zBackgroundName": "Explore_Cave",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GRACIOUS"
            },
            {
              "First": "1",
              "Second": "SUBJECT_GREAT_MINISTER"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_SIMPLE_GIFTS_OPTION_0",
            "EVENTOPTION_TRAIT_SIMPLE_GIFTS_OPTION_1",
            "EVENTOPTION_TRAIT_SIMPLE_GIFTS_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_TAX_HIKE",
        "Name": "TEXT_EVENTSTORY_TRAIT_TAX_HIKE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_TAX_HIKE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_FRUGAL"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_TAX_HIKE_OPTION_0",
            "EVENTOPTION_TRAIT_TAX_HIKE_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_FORBIDDEN_KNOWLEDGE",
        "Name": "TEXT_EVENTSTORY_TRAIT_FORBIDDEN_KNOWLEDGE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_FORBIDDEN_KNOWLEDGE",
        "zEventURL": "https://en.wikipedia.org/wiki/Druid",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_INTELLIGENT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_FORBIDDEN_KNOWLEDGE_OPTION_0",
            "EVENTOPTION_TRAIT_FORBIDDEN_KNOWLEDGE_OPTION_1",
            "EVENTOPTION_TRAIT_FORBIDDEN_KNOWLEDGE_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_KIDNAPPED_CONSORT",
        "Name": "TEXT_EVENTSTORY_TRAIT_KIDNAPPED_CONSORT_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_KIDNAPPED_CONSORT",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_COWARDLY"
            },
            {
              "First": "2",
              "Second": "SUBJECT_TEENAGER"
            },
            {
              "First": "2",
              "Second": "SUBJECT_MALE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_0",
            "EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_1",
            "EVENTOPTION_TRAIT_KIDNAPPED_CONSORT_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_AMITY_OR_TREASON",
        "Name": "TEXT_EVENTSTORY_TRAIT_AMITY_OR_TREASON_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_AMITY_OR_TREASON",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GREEDY"
            },
            {
              "First": "1",
              "Second": "SUBJECT_SPOUSE_OF_LEADER_US"
            },
            {
              "First": "1",
              "Second": "SUBJECT_FEMALE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_0",
            "EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_1",
            "EVENTOPTION_TRAIT_AMITY_OR_TREASON_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_THE_MORNING_AFTER",
        "Name": "TEXT_EVENTSTORY_TRAIT_THE_MORNING_AFTER_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_THE_MORNING_AFTER",
        "zBackgroundName": "Wedding",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_EXTRAVAGANT"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_0",
            "EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_1",
            "EVENTOPTION_TRAIT_THE_MORNING_AFTER_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_TEDIUM_ON_THE_THRONE",
        "Name": "TEXT_EVENTSTORY_TRAIT_TEDIUM_ON_THE_THRONE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_TEDIUM_ON_THE_THRONE",
        "zEventURL": "https://en.wikipedia.org/wiki/Incitatus",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_FOOLISH"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_TEDIUM_ON_THE_THRONE_OPTION_0",
            "EVENTOPTION_TRAIT_TEDIUM_ON_THE_THRONE_OPTION_1",
            "EVENTOPTION_TRAIT_TEDIUM_ON_THE_THRONE_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_THE_WILD_HUNT",
        "Name": "TEXT_EVENTSTORY_TRAIT_THE_WILD_HUNT_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_THE_WILD_HUNT",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ROBUST"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_THE_WILD_HUNT_OPTION_0",
            "EVENTOPTION_TRAIT_THE_WILD_HUNT_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_FOREIGN_SCHOLAR",
        "Name": "TEXT_EVENTSTORY_FOREIGN_SCHOLAR_TITLE",
        "Text": "TEXT_EVENTSTORY_FOREIGN_SCHOLAR",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_INTELLIGENT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FOREIGN_SCHOLAR_SCIENTIST",
            "EVENTOPTION_FOREIGN_SCHOLAR_RANDOM_TECH"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_A_FAMILY_WARNING",
        "Name": "TEXT_EVENTSTORY_TRAIT_A_FAMILY_WARNING_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_A_FAMILY_WARNING",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_LEADER_US"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CORRUPT"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_0",
            "EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_1",
            "EVENTOPTION_TRAIT_A_FAMILY_WARNING_OPTION_2"
          ]
        },
        "iWeight": "4"
      },
      {
        "zType": "EVENTSTORY_TRAIT_JOB_OPENING",
        "Name": "TEXT_EVENTSTORY_TRAIT_JOB_OPENING_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_JOB_OPENING",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CORRUPT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_GREAT_MERCHANT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTSTORY_TRAIT_JOB_OPENING"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_JOB_OPENING_OPTION_0",
            "EVENTOPTION_TRAIT_JOB_OPENING_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_FAMILY_COUNCIL",
        "Name": "TEXT_EVENTSTORY_TRAIT_FAMILY_COUNCIL_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_FAMILY_COUNCIL",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_LEADER_US"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CORRUPT"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_0",
            "EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_1",
            "EVENTOPTION_TRAIT_FAMILY_COUNCIL_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_A_COUNCIL_OF_ELDERS",
        "iWeight": "3",
        "iProb": "20"
      },
      {
        "zType": "EVENTSTORY_TRAIT_AN_EXODUS",
        "Name": "TEXT_EVENTSTORY_TRAIT_AN_EXODUS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_AN_EXODUS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_LEADER_US"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CORRUPT"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_AN_EXODUS_OPTION_0",
            "EVENTOPTION_TRAIT_AN_EXODUS_OPTION_1",
            "EVENTOPTION_TRAIT_AN_EXODUS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_FAMILY_TENSIONS",
        "iWeight": "3",
        "iProb": "20"
      },
      {
        "zType": "EVENTSTORY_TRAIT_A_BITTER_ALLIANCE",
        "Name": "TEXT_EVENTSTORY_TRAIT_A_BITTER_ALLIANCE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_A_BITTER_ALLIANCE",
        "zBackgroundName": "city approach",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_PLAYER_TRUCE"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_LEADER_US"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CORRUPT"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_A_BITTER_ALLIANCE_OPTION_0",
            "EVENTOPTION_TRAIT_A_BITTER_ALLIANCE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_FAMILY_ENEMY_ALLIANCE",
        "iWeight": "3",
        "iProb": "20"
      },
      {
        "zType": "EVENTSTORY_TRAIT_MILITARY_MIND",
        "Name": "TEXT_EVENTSTORY_TRAIT_MILITARY_MIND_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_MILITARY_MIND",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_TACTICIAN"
            },
            {
              "First": "1",
              "Second": "SUBJECT_GENERAL"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_MILITARY_MIND_OPTION_0",
            "EVENTOPTION_TRAIT_MILITARY_MIND_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_A_MAN_OF_PEACE",
        "Name": "TEXT_EVENTSTORY_TRAIT_A_MAN_OF_PEACE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_A_MAN_OF_PEACE",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_WARLIKE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_GENERAL"
            },
            {
              "First": "1",
              "Second": "SUBJECT_OVER_40"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_A_MAN_OF_PEACE_OPTION_0",
            "EVENTOPTION_TRAIT_A_MAN_OF_PEACE_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_DAUGHTERS_DREAM",
        "Name": "TEXT_EVENTSTORY_TRAIT_DAUGHTERS_DREAM_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_DAUGHTERS_DREAM",
        "zBackgroundName": "poetess",
        "zEventURL": "https://en.wikipedia.org/wiki/Astyages",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_JUDGE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_MALE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_OLD"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_CHILD_OF",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_DAUGHTERS_DREAM_OPTION_0",
            "EVENTOPTION_TRAIT_DAUGHTERS_DREAM_OPTION_1",
            "EVENTOPTION_TRAIT_DAUGHTERS_DREAM_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_TOO_MUCH_OF_A_GOOD_THING",
        "Name": "TEXT_EVENTSTORY_TRAIT_TOO_MUCH_OF_A_GOOD_THING_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_TOO_MUCH_OF_A_GOOD_THING",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_DEBAUCHED"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_0",
            "EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_1",
            "EVENTOPTION_TRAIT_TOO_MUCH_OF_A_GOOD_THING_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_BURNED_LIBRARY",
        "Name": "TEXT_EVENTSTORY_TRAIT_BURNED_LIBRARY_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_BURNED_LIBRARY",
        "zEventURL": "https://en.wikipedia.org/wiki/Library_of_Ashurbanipal",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_SCHOLAR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_BURNED_LIBRARY_OPTION_0",
            "EVENTOPTION_TRAIT_BURNED_LIBRARY_OPTION_1",
            "EVENTOPTION_TRAIT_BURNED_LIBRARY_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_SAFE_PASSAGE",
        "Name": "TEXT_EVENTSTORY_TRAIT_SAFE_PASSAGE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_SAFE_PASSAGE",
        "zBackgroundName": "Explore_Jungle",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_VIGILANT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_0",
            "EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_1",
            "EVENTOPTION_TRAIT_SAFE_PASSAGE_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_CODES_OF_JUSTICE",
        "Name": "TEXT_EVENTSTORY_TRAIT_CODES_OF_JUSTICE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_CODES_OF_JUSTICE",
        "zEventURL": "https://en.wikipedia.org/wiki/Draco_(lawgiver)",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STRICT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_CODES_OF_JUSTICE_OPTION_0",
            "EVENTOPTION_TRAIT_CODES_OF_JUSTICE_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_SAGE_COUNSEL",
        "Name": "TEXT_EVENTSTORY_TRAIT_SAGE_COUNSEL_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_SAGE_COUNSEL",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_AFFABLE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_SAGE_COUNSEL_OPTION_0",
            "EVENTOPTION_TRAIT_SAGE_COUNSEL_OPTION_1",
            "EVENTOPTION_TRAIT_SAGE_COUNSEL_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_BARBARIANS_AT_THE_GATE",
        "Name": "TEXT_EVENTSTORY_TRAIT_BARBARIANS_AT_THE_GATE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_BARBARIANS_AT_THE_GATE",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_VIGILANT"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_BARBARIAN_WAR",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_BARBARIANS_AT_THE_GATE_OPTION_0",
            "EVENTOPTION_TRAIT_BARBARIANS_AT_THE_GATE_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_MOUTHPIECE_OF_THE_GODS",
        "Name": "TEXT_EVENTSTORY_TRAIT_MOUTHPIECE_OF_THE_GODS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_MOUTHPIECE_OF_THE_GODS",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ELOQUENT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_MOUTHPIECE_OF_THE_GODS_OPTION_0",
            "EVENTOPTION_TRAIT_MOUTHPIECE_OF_THE_GODS_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_DIVINE_MANDATE",
        "Name": "TEXT_EVENTSTORY_TRAIT_DIVINE_MANDATE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_DIVINE_MANDATE",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_INSPIRED"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_DIVINE_MANDATE_OPTION_0",
            "EVENTOPTION_TRAIT_DIVINE_MANDATE_OPTION_1",
            "EVENTOPTION_TRAIT_DIVINE_MANDATE_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_UNDER_SUSPICION",
        "Name": "TEXT_EVENTSTORY_TRAIT_UNDER_SUSPICION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_UNDER_SUSPICION",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_LAW_TRADE_LEAGUE"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_COWARDLY"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_MAX_CAUTIOUS",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_UNDER_SUSPICION_OPTION_0",
            "EVENTOPTION_TRAIT_UNDER_SUSPICION_OPTION_1",
            "EVENTOPTION_TRAIT_UNDER_SUSPICION_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_ARTS_AND_SCIENCES",
        "Name": "TEXT_EVENTSTORY_TRAIT_ARTS_AND_SCIENCES_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_ARTS_AND_SCIENCES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PROSPEROUS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_ARTS_AND_SCIENCES_OPTION_0",
            "EVENTOPTION_TRAIT_ARTS_AND_SCIENCES_OPTION_1",
            "EVENTOPTION_TRAIT_ARTS_AND_SCIENCES_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_OF_THE_PEOPLE",
        "Name": "TEXT_EVENTSTORY_TRAIT_OF_THE_PEOPLE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_OF_THE_PEOPLE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_FRUGAL"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_OF_THE_PEOPLE_OPTION_0",
            "EVENTOPTION_TRAIT_OF_THE_PEOPLE_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_TEST_OF_FAITH",
        "Name": "TEXT_EVENTSTORY_TRAIT_TEST_OF_FAITH_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_TEST_OF_FAITH",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_RIGHTEOUS"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CHANCELLOR"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_0",
            "EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_1",
            "EVENTOPTION_TRAIT_TEST_OF_FAITH_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_QUESTION_AUTHORITY",
        "Name": "TEXT_EVENTSTORY_TRAIT_QUESTION_AUTHORITY_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_QUESTION_AUTHORITY",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CARELESS"
            },
            {
              "First": "1",
              "Second": "SUBJECT_GENERAL"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_SAME",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_0",
            "EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_1",
            "EVENTOPTION_TRAIT_QUESTION_AUTHORITY_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_COLLISION_COURSE",
        "Name": "TEXT_EVENTSTORY_TRAIT_COLLISION_COURSE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_COLLISION_COURSE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_COWARDLY"
            },
            {
              "First": "1",
              "Second": "SUBJECT_PLAYER_TRUCE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_COLLISION_COURSE_OPTION_0",
            "EVENTOPTION_TRAIT_COLLISION_COURSE_OPTION_1",
            "EVENTOPTION_TRAIT_COLLISION_COURSE_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_ENABLERS",
        "Name": "TEXT_EVENTSTORY_TRAIT_ENABLERS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_ENABLERS",
        "zBackgroundName": "Birth",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_UNCOUTH"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_ENABLERS_OPTION_0",
            "EVENTOPTION_TRAIT_ENABLERS_OPTION_1",
            "EVENTOPTION_TRAIT_ENABLERS_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_ROYAL_TRAGEDIES",
        "Name": "TEXT_EVENTSTORY_TRAIT_ROYAL_TRAGEDIES_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_ROYAL_TRAGEDIES",
        "zBackgroundName": "Funeral",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CURSED"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER",
            "BONUS_GIVE_TRAIT_SEVERELY_ILL"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_ROYAL_TRAGEDIES_OPTION_0",
            "EVENTOPTION_TRAIT_ROYAL_TRAGEDIES_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_TRAIT_A_DARK_PALL",
        "Name": "TEXT_EVENTSTORY_TRAIT_A_DARK_PALL_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_A_DARK_PALL",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_MISERABLE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_A_DARK_PALL_OPTION_0",
            "EVENTOPTION_TRAIT_A_DARK_PALL_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_DUEL_OF_FATES",
        "Name": "TEXT_EVENTSTORY_TRAIT_DUEL_OF_FATES_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_DUEL_OF_FATES",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_INFAMOUS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_0",
            "EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_1",
            "EVENTOPTION_TRAIT_DUEL_OF_FATES_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_DUEL_OF_FATES_VICTORIOUS",
        "Name": "TEXT_EVENTSTORY_TRAIT_DUEL_OF_FATES_VICTORIOUS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_DUEL_OF_FATES_VICTORIOUS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TRAIT_DUEL_OF_FATES_VICTORIOUS_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_DUEL_OF_FATES",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_DUEL_OF_FATES_DEFEATED",
        "Name": "TEXT_EVENTSTORY_TRAIT_DUEL_OF_FATES_DEFEATED_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_DUEL_OF_FATES_DEFEATED",
        "zBackgroundName": "Military_Defeat",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TRAIT_DUEL_OF_FATES_DEFEATED_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_DUEL_OF_FATES",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_FAMILY_RETREAT",
        "Name": "TEXT_EVENTSTORY_TRAIT_FAMILY_RETREAT_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_FAMILY_RETREAT",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_COWARDLY"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "3",
            "Second": "SUBJECTRELATION_FAMILY_SAME",
            "Third": "2"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_0",
            "EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_1",
            "EVENTOPTION_TRAIT_FAMILY_RETREAT_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_THE_FINER_THINGS",
        "Name": "TEXT_EVENTSTORY_TRAIT_THE_FINER_THINGS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_THE_FINER_THINGS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_EXOTIC"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_THE_FINER_THINGS_OPTION_0",
            "EVENTOPTION_TRAIT_THE_FINER_THINGS_OPTION_1",
            "EVENTOPTION_TRAIT_THE_FINER_THINGS_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_FORESTRY",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_A_CHILL_IN_THE_PALACE",
        "Name": "TEXT_EVENTSTORY_TRAIT_A_CHILL_IN_THE_PALACE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_A_CHILL_IN_THE_PALACE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ILL"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_ESTRANGED_FROM",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_A_CHILL_IN_THE_PALACE_OPTION_0",
            "EVENTOPTION_TRAIT_A_CHILL_IN_THE_PALACE_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_FACING_THE_HORDE",
        "Name": "TEXT_EVENTSTORY_TRAIT_FACING_THE_HORDE_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_FACING_THE_HORDE",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_BRAVE"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_BARBARIAN_TRUCE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_FACING_THE_HORDE_OPTION_0",
            "EVENTOPTION_TRAIT_FACING_THE_HORDE_OPTION_1",
            "EVENTOPTION_TRAIT_FACING_THE_HORDE_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_SPOUSE_HORSEBACK_RIDING",
        "Name": "TEXT_EVENTSTORY_SPOUSE_HORSEBACK_RIDING_TITLE",
        "Text": "TEXT_EVENTSTORY_SPOUSE_HORSEBACK_RIDING",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_SPOUSE_OF_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_HEALTHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NON_GENERAL"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SPOUSE_HORSEBACK_RIDING_OK",
            "EVENTOPTION_SPOUSE_TOO_EXPENSIVE"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "TechPrereq": "TECH_SPOKED_WHEEL",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SPOUSE_PERSUASION",
        "Name": "TEXT_EVENTSTORY_SPOUSE_PERSUASION_TITLE",
        "Text": "TEXT_EVENTSTORY_SPOUSE_PERSUASION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_SPOUSE_OF_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_HEALTHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SPOUSE_PERSUASION_OK",
            "EVENTOPTION_SPOUSE_TOO_EXPENSIVE"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SPOUSE_CREATIVE_PURSUITS",
        "Name": "TEXT_EVENTSTORY_SPOUSE_CREATIVE_PURSUITS_TITLE",
        "Text": "TEXT_EVENTSTORY_SPOUSE_CREATIVE_PURSUITS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_SPOUSE_OF_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_HEALTHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SPOUSE_CREATIVE_PURSUITS_OK",
            "EVENTOPTION_SPOUSE_TOO_EXPENSIVE"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SPOUSE_SPONSOR_A_LABORATORY",
        "Name": "TEXT_EVENTSTORY_SPOUSE_SPONSOR_A_LABORATORY_TITLE",
        "Text": "TEXT_EVENTSTORY_SPOUSE_SPONSOR_A_LABORATORY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_SPOUSE_OF_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_HEALTHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SPOUSE_SPONSOR_A_LABORATORY_OK",
            "EVENTOPTION_SPOUSE_TOO_EXPENSIVE"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SPOUSE_TILL_THE_EARTH",
        "Name": "TEXT_EVENTSTORY_SPOUSE_TILL_THE_EARTH_TITLE",
        "Text": "TEXT_EVENTSTORY_SPOUSE_TILL_THE_EARTH",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_SPOUSE_OF_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_HEALTHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SPOUSE_TILL_THE_EARTH_OK",
            "EVENTOPTION_SPOUSE_TOO_EXPENSIVE"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SPOUSE_LEGAL_INSTRUCTION",
        "Name": "TEXT_EVENTSTORY_SPOUSE_LEGAL_INSTRUCTION_TITLE",
        "Text": "TEXT_EVENTSTORY_SPOUSE_LEGAL_INSTRUCTION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_SPOUSE_OF_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_HEALTHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SPOUSE_LEGAL_INSTRUCTION_OK",
            "EVENTOPTION_SPOUSE_TOO_EXPENSIVE"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SPOUSE_COMBAT_TRAINING",
        "Name": "TEXT_EVENTSTORY_SPOUSE_COMBAT_TRAINING_TITLE",
        "Text": "TEXT_EVENTSTORY_SPOUSE_COMBAT_TRAINING",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_SPOUSE_OF_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_HEALTHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SPOUSE_COMBAT_TRAINING_OK",
            "EVENTOPTION_SPOUSE_TOO_EXPENSIVE"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SPOUSE_MONASTIC_LIVING",
        "Name": "TEXT_EVENTSTORY_SPOUSE_MONASTIC_LIVING_TITLE",
        "Text": "TEXT_EVENTSTORY_SPOUSE_MONASTIC_LIVING",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_HEALTHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_40"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CITY_MONASTERY"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SPOUSE_MONASTIC_LIVING_OK",
            "EVENTOPTION_SPOUSE_MONASTIC_LIVING_NO"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SPOUSE_DEEPER_MEANING",
        "Name": "TEXT_EVENTSTORY_SPOUSE_DEEPER_MEANING_TITLE",
        "Text": "TEXT_EVENTSTORY_SPOUSE_DEEPER_MEANING",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_SPOUSE_OF_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_HEALTHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SPOUSE_DEEPER_MEANING_OK",
            "EVENTOPTION_SPOUSE_TOO_EXPENSIVE"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_RUMOR_HAS_IT",
        "Name": "TEXT_EVENTSTORY_RUMOR_HAS_IT_TITLE",
        "Text": "TEXT_EVENTSTORY_RUMOR_HAS_IT",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_BARBARIAN_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN_PEACE_OR_TRUCE"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_SPOUSE_OF_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_BARBARIAN_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUMOR_HAS_IT_PETS",
            "EVENTOPTION_RUMOR_HAS_IT_MISUNDERSTOOD",
            "EVENTOPTION_RUMOR_HAS_IT_BURN"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_ENCHANTING_CONVERSATION",
        "Name": "TEXT_EVENTSTORY_ENCHANTING_CONVERSATION_TITLE",
        "Text": "TEXT_EVENTSTORY_ENCHANTING_CONVERSATION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_NOT_GAY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NON_GENERAL"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NOT_LOYAL"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CAN_HAVE_CHILDREN"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ENCHANTING_CONVERSATION_OPTION_0",
            "EVENTOPTION_ENCHANTING_CONVERSATION_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "2",
        "iRepeatTurns": "40",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_FRUITFUL_AFFAIR",
        "Name": "TEXT_EVENTSTORY_FRUITFUL_AFFAIR_TITLE",
        "Text": "TEXT_EVENTSTORY_FRUITFUL_AFFAIR",
        "zBackgroundName": "Birth",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_FRUITFUL_AFFAIR_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_ENCHANTING_CONVERSATION",
        "iWeight": "1",
        "iProb": "50"
      },
      {
        "zType": "EVENTSTORY_EMPTY_BED",
        "Name": "TEXT_EVENTSTORY_EMPTY_BED_TITLE",
        "Text": "TEXT_EVENTSTORY_EMPTY_BED",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_FEMALE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NOT_GAY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NON_GENERAL"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CAN_HAVE_CHILDREN"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EMPTY_BED_OPTION_0",
            "EVENTOPTION_EMPTY_BED_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "3",
        "iRepeatTurns": "40",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_REVEALED_AFFAIR",
        "Name": "TEXT_EVENTSTORY_REVEALED_AFFAIR_TITLE",
        "Text": "TEXT_EVENTSTORY_REVEALED_AFFAIR",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_REVEALED_AFFAIR_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_EMPTY_BED",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_INDIFFERENT_QUEEN",
        "Name": "TEXT_EVENTSTORY_INDIFFERENT_QUEEN_TITLE",
        "Text": "TEXT_EVENTSTORY_INDIFFERENT_QUEEN",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_MALE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NOT_GAY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NON_GENERAL"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CAN_HAVE_CHILDREN"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_INDIFFERENT_QUEEN_OPTION_0",
            "EVENTOPTION_INDIFFERENT_QUEEN_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CHILD_OF_PASSION",
        "Name": "TEXT_EVENTSTORY_CHILD_OF_PASSION_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_OF_PASSION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_CHILD_OF_PASSION_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_INDIFFERENT_QUEEN",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_DISTRACTING_CHILD",
        "Name": "TEXT_EVENTSTORY_DISTRACTING_CHILD_TITLE",
        "Text": "TEXT_EVENTSTORY_DISTRACTING_CHILD",
        "zBackgroundName": "childandfather",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHILD_OF_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHILD"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DISTRACTING_CHILD_SNOW",
            "EVENTOPTION_DISTRACTING_CHILD_HILLS",
            "EVENTOPTION_DISTRACTING_CHILD_WOODS"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_OUTDOOR_PASTIME",
        "Name": "TEXT_EVENTSTORY_OUTDOOR_PASTIME_TITLE",
        "Text": "TEXT_EVENTSTORY_OUTDOOR_PASTIME",
        "zBackgroundName": "childandfather",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHILD_OF_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TEENAGER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_OUTDOOR_PASTIME_FISH",
            "EVENTOPTION_OUTDOOR_PASTIME_PLANTS",
            "EVENTOPTION_OUTDOOR_PASTIME_ANIMALS"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RESTLESS_HANDS",
        "Name": "TEXT_EVENTSTORY_RESTLESS_HANDS_TITLE",
        "Text": "TEXT_EVENTSTORY_RESTLESS_HANDS",
        "zBackgroundName": "childandfather",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHILD_OF_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TEENAGER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RESTLESS_HANDS_ARTIFACTS",
            "EVENTOPTION_RESTLESS_HANDS_HERBS",
            "EVENTOPTION_RESTLESS_HANDS_SLAG"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CHILD_DARK_OMENS",
        "Name": "TEXT_EVENTSTORY_CHILD_DARK_OMENS_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_DARK_OMENS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHILD_OF_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_DARK_OMENS_SACRIFICE",
            "EVENTOPTION_CHILD_DARK_OMENS_FIRE",
            "EVENTOPTION_CHILD_DARK_OMENS_NOTHING"
          ]
        },
        "Trigger": "EVENTTRIGGER_BIRTH",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_CHILD_ROYAL_BIRTH",
        "Name": "TEXT_EVENTSTORY_CHILD_ROYAL_BIRTH_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_ROYAL_BIRTH",
        "zBackgroundName": "Birth",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_ROYAL_BIRTH_COLLECT",
            "EVENTOPTION_CHILD_ROYAL_BIRTH_SEND",
            "EVENTOPTION_CHILD_ROYAL_BIRTH_PRESENT"
          ]
        },
        "Trigger": "EVENTTRIGGER_BIRTH",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_CHILD_NEW_THOUGHTS",
        "Name": "TEXT_EVENTSTORY_CHILD_NEW_THOUGHTS_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_NEW_THOUGHTS",
        "zBackgroundName": "Birth",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_NEW_THOUGHTS_DEFEND",
            "EVENTOPTION_CHILD_NEW_THOUGHTS_PEACE",
            "EVENTOPTION_CHILD_NEW_THOUGHTS_FAMILY"
          ]
        },
        "Trigger": "EVENTTRIGGER_BIRTH",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_HEIR_EDUCATION",
        "Name": "TEXT_EVENTSTORY_HEIR_EDUCATION_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_EDUCATION",
        "zBackgroundName": "childandfather",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_SUCCESSION_US"
        },
        "SubjectRepeatTurns": {
          "Pair": {
            "First": "0",
            "Second": "-1"
          }
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TEENAGER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_TACTICS",
            "EVENTOPTION_STUDY_RHETORIC",
            "EVENTOPTION_STUDY_COMMERCE",
            "EVENTOPTION_STUDY_PHILOSOPHY"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iWeight": "1",
        "iRepeatTurns": "1"
      },
      {
        "zType": "EVENTSTORY_BULLYING_HEIR",
        "Name": "TEXT_EVENTSTORY_BULLYING_HEIR_TITLE",
        "Text": "TEXT_EVENTSTORY_BULLYING_HEIR",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_HEIR_US"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CHILD_OR_TEENAGER"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CHILD_OR_TEENAGER"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BULLYING_HEIR_ALLOW",
            "EVENTOPTION_BULLYING_HEIR_TEACH"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_BULLYING_HEIR_ESCALATION",
        "Name": "TEXT_EVENTSTORY_BULLYING_HEIR_ESCALATION_TITLE",
        "Text": "TEXT_EVENTSTORY_BULLYING_HEIR_ESCALATION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_BULLYING_HEIR_ESCALATION_ACCEPT",
            "EVENTOPTION_BULLYING_HEIR_ESCALATION_REFUSE",
            "EVENTOPTION_BULLYING_HEIR_ESCALATION_IMPRISON"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_BULLYING_HEIR_ALLOW",
        "iWeight": "1",
        "iProb": "10"
      },
      {
        "zType": "EVENTSTORY_BULLYING_HEIR_ESCALATION_SUCCEEDED",
        "Name": "TEXT_EVENTSTORY_BULLYING_HEIR_ESCALATION_SUCCEEDED_TITLE",
        "Text": "TEXT_EVENTSTORY_BULLYING_HEIR_ESCALATION_SUCCEEDED",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_BULLYING_HEIR_ESCALATION_SUCCEEDED_OK"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_BULLYING_HEIR_ESCALATION_ACCEPT",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_BULLYING_HEIR_ESCALATION_DISCOVERED",
        "Name": "TEXT_EVENTSTORY_BULLYING_HEIR_ESCALATION_DISCOVERED_TITLE",
        "Text": "TEXT_EVENTSTORY_BULLYING_HEIR_ESCALATION_DISCOVERED",
        "zBackgroundName": "MudFight",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_BULLYING_HEIR_ESCALATION_DISCOVERED_OK"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_BULLYING_HEIR_ESCALATION_ACCEPT",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_BULLYING_HEIR_ESCALATION_FAILED",
        "Name": "TEXT_EVENTSTORY_BULLYING_HEIR_ESCALATION_FAILED_TITLE",
        "Text": "TEXT_EVENTSTORY_BULLYING_HEIR_ESCALATION_FAILED",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_BULLYING_HEIR_ESCALATION_FAILED_OK"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_BULLYING_HEIR_ESCALATION_ACCEPT",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_BULLYING_HEIR_ESCALATION_CALLED_OFF",
        "Name": "TEXT_EVENTSTORY_BULLYING_HEIR_ESCALATION_CALLED_OFF_TITLE",
        "Text": "TEXT_EVENTSTORY_BULLYING_HEIR_ESCALATION_CALLED_OFF",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_BULLYING_HEIR_ESCALATION_CALLED_OFF_OK"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_BULLYING_HEIR_ESCALATION_REFUSE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_BRUTAL_HEIR",
        "Name": "TEXT_EVENTSTORY_TRAIT_BRUTAL_HEIR_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_BRUTAL_HEIR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_HEIR_US"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CRUEL"
            },
            {
              "First": "1",
              "Second": "SUBJECT_MALE"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_0",
            "EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_1",
            "EVENTOPTION_TRAIT_BRUTAL_HEIR_OPTION_2"
          ]
        },
        "iEventLinkTurns": "5",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_HEIR_HOLY_WAR",
        "Name": "TEXT_EVENTSTORY_HEIR_HOLY_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_HOLY_WAR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_HEIR_US"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_BARBARIAN_PEACE_OR_TRUCE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_HOLY_WAR_OPTION_0",
            "EVENTOPTION_HEIR_HOLY_WAR_OPTION_1",
            "EVENTOPTION_HEIR_HOLY_WAR_OPTION_2"
          ]
        },
        "iImageSubject": "1",
        "iEventLinkTurns": "4",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_HEIR_COMING_OF_AGE",
        "Name": "TEXT_EVENTSTORY_HEIR_COMING_OF_AGE_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_COMING_OF_AGE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_COMING_OF_AGE_CEREMONY",
            "EVENTOPTION_HEIR_COMING_OF_AGE_GIFTS",
            "EVENTOPTION_HEIR_COMING_OF_AGE_HOLIDAY"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "100"
      },
      {
        "zType": "EVENTSTORY_PREPARE_YOUR_HEIR",
        "Name": "TEXT_EVENTSTORY_PREPARE_YOUR_HEIR_TITLE",
        "Text": "TEXT_EVENTSTORY_PREPARE_YOUR_HEIR",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_OLD"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PREPARE_YOUR_HEIR_RULE",
            "EVENTOPTION_PREPARE_YOUR_HEIR_HUNT",
            "EVENTOPTION_PREPARE_YOUR_HEIR_RIDE"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "100"
      },
      {
        "zType": "EVENTSTORY_JOYOUS_WEDDING",
        "Name": "TEXT_EVENTSTORY_JOYOUS_WEDDING_TITLE",
        "Text": "TEXT_EVENTSTORY_JOYOUS_WEDDING",
        "zBackgroundName": "Rome_Wedding",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEDDING_BELLS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_SPOUSE_OF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_JOYOUS_WEDDING_PRIVATE",
            "EVENTOPTION_JOYOUS_WEDDING_ARISTOCRATS",
            "EVENTOPTION_JOYOUS_WEDDING_FEASTS"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "100"
      },
      {
        "zType": "EVENTSTORY_HEIR_WEDDING_FAUX_PAS",
        "Name": "TEXT_EVENTSTORY_HEIR_WEDDING_FAUX_PAS_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_WEDDING_FAUX_PAS",
        "zBackgroundName": "Wedding",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_UNCOUTH"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_WEDDING_FAUX_PAS_BRIBES",
            "EVENTOPTION_HEIR_WEDDING_FAUX_PAS_NOTHING",
            "EVENTOPTION_HEIR_WEDDING_FAUX_PAS_LIGHTEN"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE",
        "iWeight": "1",
        "iRepeatTurns": "100"
      },
      {
        "zType": "EVENTSTORY_HEIR_CRUSHING_BLOW",
        "Name": "TEXT_EVENTSTORY_HEIR_CRUSHING_BLOW_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_CRUSHING_BLOW",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_HEIR_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_CRUSHING_BLOW_STUDY",
            "EVENTOPTION_HEIR_CRUSHING_BLOW_CHEER"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_CRITICAL",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_HEIR_BUDDING_ARCHER",
        "Name": "TEXT_EVENTSTORY_HEIR_BUDDING_ARCHER_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_BUDDING_ARCHER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_HEIR_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TEENAGER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_BUDDING_ARCHER_EYES",
            "EVENTOPTION_HEIR_BUDDING_ARCHER_ARMS",
            "EVENTOPTION_HEIR_BUDDING_ARCHER_HANDS"
          ]
        },
        "Trigger": "EVENTTRIGGER_TECHNOLOGY",
        "TriggerData": "TECH_COMPOSITE_BOW",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_SLAIN_CHAMPION",
        "Name": "TEXT_EVENTSTORY_SLAIN_CHAMPION_TITLE",
        "Text": "TEXT_EVENTSTORY_SLAIN_CHAMPION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_BRAVE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SLAIN_CHAMPION_PRAISE",
            "EVENTOPTION_SLAIN_CHAMPION_COMMISSION",
            "EVENTOPTION_SLAIN_CHAMPION_ADMONISH"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_KILL",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_AXES_HIGH",
        "Name": "TEXT_EVENTSTORY_AXES_HIGH_TITLE",
        "Text": "TEXT_EVENTSTORY_AXES_HIGH",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_HEIR_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ADULT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_AXES_HIGH_TREMBLE",
            "EVENTOPTION_AXES_HIGH_HOME"
          ]
        },
        "Trigger": "EVENTTRIGGER_TECHNOLOGY",
        "TriggerData": "TECH_STEEL",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_HEIR_CRISIS",
        "Name": "TEXT_EVENTSTORY_HEIR_CRISIS_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_CRISIS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_PLAYER_NO_HEIRS"
            },
            {
              "First": "1",
              "Second": "SUBJECT_FEMALE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "2",
              "Second": "SUBJECT_OLD"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_CRISIS_ACCIDENT",
            "EVENTOPTION_HEIR_CRISIS_DIVORCE",
            "EVENTOPTION_HEIR_CRISIS_NOTHING"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "100"
      },
      {
        "zType": "EVENTSTORY_HEIR_CRISIS_SAFE",
        "Name": "TEXT_EVENTSTORY_HEIR_CRISIS_SAFE_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_CRISIS_SAFE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_CHARACTER_DEAD_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_HEIR_CRISIS_SAFE_OK"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_HEIR_CRISIS_ACCIDENT",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_HEIR_CRISIS_CAUGHT",
        "Name": "TEXT_EVENTSTORY_HEIR_CRISIS_CAUGHT_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_CRISIS_CAUGHT",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_CHARACTER_DEAD_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_HEIR_CRISIS_CAUGHT_OK"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_HEIR_CRISIS_ACCIDENT",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_HEIR_OF_CORRUPTION",
        "Name": "TEXT_EVENTSTORY_HEIR_OF_CORRUPTION_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_OF_CORRUPTION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_MALE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CORRUPT"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_0",
            "EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_1",
            "EVENTOPTION_HEIR_OF_CORRUPTION_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_OUR_CONSERVATIVE_ELDERS",
        "Name": "TEXT_EVENTSTORY_OUR_CONSERVATIVE_ELDERS_TITLE",
        "Text": "TEXT_EVENTSTORY_OUR_CONSERVATIVE_ELDERS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_HEIR_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_FEMALE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_HEIR"
            },
            {
              "First": "2",
              "Second": "SUBJECT_MALE"
            },
            {
              "First": "3",
              "Second": "SUBJECT_PLAYER_NO_STATE_RELIGION"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_OUR_CONSERVATIVE_ELDERS_OFFENDED_TRAIL",
            "EVENTOPTION_OUR_CONSERVATIVE_ELDERS_SUBMISSION",
            "EVENTOPTION_OUR_CONSERVATIVE_ELDERS_HATSHEPSUT"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "5"
      },
      {
        "zType": "EVENTSTORY_FAMILY_ADOPTION",
        "Name": "TEXT_EVENTSTORY_FAMILY_ADOPTION_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_ADOPTION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT_UNDER_30"
            },
            {
              "First": "2",
              "Second": "SUBJECT_PLAYER_NO_HEIRS"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_ADOPTION_YES",
            "EVENTOPTION_FAMILY_ADOPTION_NO"
          ]
        },
        "iWeight": "20",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_POTENTIAL_HEIR",
        "Name": "TEXT_EVENTSTORY_POTENTIAL_HEIR_TITLE",
        "Text": "TEXT_EVENTSTORY_POTENTIAL_HEIR",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "2",
              "Second": "SUBJECT_PLAYER_NO_HEIRS"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_POTENTIAL_HEIR_YES",
            "EVENTOPTION_POTENTIAL_HEIR_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iWeight": "1",
        "iRepeatTurns": "10"
      },
      {
        "zType": "EVENTSTORY_DWINDLING_LINE",
        "Name": "TEXT_EVENTSTORY_DWINDLING_LINE_TITLE",
        "Text": "TEXT_EVENTSTORY_DWINDLING_LINE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT_UNDER_30"
            },
            {
              "First": "2",
              "Second": "SUBJECT_ADULT_UNDER_30"
            },
            {
              "First": "3",
              "Second": "SUBJECT_ADULT_UNDER_30"
            },
            {
              "First": "4",
              "Second": "SUBJECT_PLAYER_MAX_TWO_HEIRS"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "2"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DWINDLING_LINE_1",
            "EVENTOPTION_DWINDLING_LINE_2",
            "EVENTOPTION_DWINDLING_LINE_3",
            "EVENTOPTION_DWINDLING_LINE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iMinLeader": "2",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "10"
      },
      {
        "zType": "EVENTSTORY_DANGEROUS_HEIRS",
        "Name": "TEXT_EVENTSTORY_DANGEROUS_HEIRS_TITLE",
        "Text": "TEXT_EVENTSTORY_DANGEROUS_HEIRS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_BYPASSED_HEIR"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_BYPASSED_HEIR"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_DANGEROUS_HEIRS_OPTION_0"
        },
        "iWeight": "5",
        "iRepeatTurns": "40",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_DANGEROUS_HEIRS_DEATH",
        "Name": "TEXT_EVENTSTORY_DANGEROUS_HEIRS_DEATH_TITLE",
        "Text": "TEXT_EVENTSTORY_DANGEROUS_HEIRS_DEATH",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_BYPASSED_HEIR"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_BYPASSED_HEIR"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_DANGEROUS_HEIRS_DEATH_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_DANGEROUS_HEIRS",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "40",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_SUCCESSION_SELF_REFLECTION",
        "Name": "TEXT_EVENTSTORY_SUCCESSION_SELF_REFLECTION_TITLE",
        "Text": "TEXT_EVENTSTORY_SUCCESSION_SELF_REFLECTION",
        "zBackgroundName": "crowning_01",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ADULT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SUCCESSION_SELF_REFLECTION_RIGHTEOUSNESS",
            "EVENTOPTION_SUCCESSION_SELF_REFLECTION_BRILLIANT",
            "EVENTOPTION_SUCCESSION_SELF_REFLECTION_PEACEFUL",
            "EVENTOPTION_SUCCESSION_SELF_REFLECTION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_US",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SUCCESSION_NEW_LEAF",
        "Name": "TEXT_EVENTSTORY_SUCCESSION_NEW_LEAF_TITLE",
        "Text": "TEXT_EVENTSTORY_SUCCESSION_NEW_LEAF",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SUCCESSION_NEW_LEAF_FEAST",
            "EVENTOPTION_SUCCESSION_NEW_LEAF_MONUMENT",
            "EVENTOPTION_SUCCESSION_NEW_LEAF_BRIBE",
            "EVENTOPTION_SUCCESSION_NEW_LEAF_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_US",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SUCCESSION_CHANCE_FOR_PEACE",
        "Name": "TEXT_EVENTSTORY_SUCCESSION_CHANCE_FOR_PEACE_TITLE",
        "Text": "TEXT_EVENTSTORY_SUCCESSION_CHANCE_FOR_PEACE",
        "zBackgroundName": "crowning_01",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN_WAR",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ADULT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SUCCESSION_CHANCE_FOR_PEACE_TRUCE",
            "EVENTOPTION_SUCCESSION_CHANCE_FOR_PEACE_FRIENDS",
            "EVENTOPTION_SUCCESSION_CHANCE_FOR_PEACE_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_US",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SUCCESSION_SNAKE_SIGNS",
        "Name": "TEXT_EVENTSTORY_SUCCESSION_SNAKE_SIGNS_TITLE",
        "Text": "TEXT_EVENTSTORY_SUCCESSION_SNAKE_SIGNS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US",
            "SUBJECT_CITY_US",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CITY_FAMILY_SEAT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CITY_FAMILY_SEAT"
            },
            {
              "First": "3",
              "Second": "SUBJECT_CITY_FAMILY_SEAT"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SUCCESSION_SNAKE_SIGNS_RACES",
            "EVENTOPTION_SUCCESSION_SNAKE_SIGNS_BANQUET",
            "EVENTOPTION_SUCCESSION_SNAKE_SIGNS_CONTEST",
            "EVENTOPTION_SUCCESSION_SNAKE_SIGNS_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_US",
        "TechPrereq": "TECH_SPOKED_WHEEL",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SUCCESSION_CORONATION_FESTIVAL",
        "Name": "TEXT_EVENTSTORY_SUCCESSION_CORONATION_FESTIVAL_TITLE",
        "Text": "TEXT_EVENTSTORY_SUCCESSION_CORONATION_FESTIVAL",
        "zBackgroundName": "crowning_01",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEDDING_BELLS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ADULT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SUCCESSION_CORONATION_FESTIVAL_POETRY",
            "EVENTOPTION_SUCCESSION_CORONATION_FESTIVAL_FEAST",
            "EVENTOPTION_SUCCESSION_CORONATION_FESTIVAL_ARCHERY"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_US",
        "TechPrereq": "TECH_COMPOSITE_BOW",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SUCCESSION_PATRIOTIC_FERVOR",
        "Name": "TEXT_EVENTSTORY_SUCCESSION_PATRIOTIC_FERVOR_TITLE",
        "Text": "TEXT_EVENTSTORY_SUCCESSION_PATRIOTIC_FERVOR",
        "zBackgroundName": "crowning_01",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ADULT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_LABOR",
            "EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_TRAIN",
            "EVENTOPTION_SUCCESSION_PATRIOTIC_FERVOR_ARTISANS"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_US",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SUCCESSION_FAMILY_DELEGATION",
        "Name": "TEXT_EVENTSTORY_SUCCESSION_FAMILY_DELEGATION_TITLE",
        "Text": "TEXT_EVENTSTORY_SUCCESSION_FAMILY_DELEGATION",
        "zBackgroundName": "crowning_02",
        "zAudioTrigger": "AUDIO_UI_EVENT_ENCOURAGING_SITES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ADULT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_GRANITE",
            "EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_STEEL",
            "EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_EBONY",
            "EVENTOPTION_SUCCESSION_FAMILY_DELEGATION_KILL"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_US",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SUCCESSION_TAKING_THE_CROWN",
        "Name": "TEXT_EVENTSTORY_SUCCESSION_TAKING_THE_CROWN_TITLE",
        "Text": "TEXT_EVENTSTORY_SUCCESSION_TAKING_THE_CROWN",
        "zBackgroundName": "crowning_02",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ADULT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SUCCESSION_TAKING_THE_CROWN_FESTIVAL",
            "EVENTOPTION_SUCCESSION_TAKING_THE_CROWN_INQUIRY",
            "EVENTOPTION_SUCCESSION_TAKING_THE_CROWN_TRADITIONAL"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_US",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_MASTER_OF_WHISPERS",
        "Name": "TEXT_EVENTSTORY_MASTER_OF_WHISPERS_TITLE",
        "Text": "TEXT_EVENTSTORY_MASTER_OF_WHISPERS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_SPYMASTER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MASTER_OF_WHISPERS_FRIENDS",
            "EVENTOPTION_MASTER_OF_WHISPERS_IMPRISION"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_SPYMASTER_MASTER_OF_POISONS",
        "Name": "TEXT_EVENTSTORY_SPYMASTER_MASTER_OF_POISONS_TITLE",
        "Text": "TEXT_EVENTSTORY_SPYMASTER_MASTER_OF_POISONS",
        "zEventURL": "https://en.wikipedia.org/wiki/Locusta",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_SPYMASTER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SPYMASTER_MASTER_OF_POISONS_OPTION_0",
            "EVENTOPTION_SPYMASTER_MASTER_OF_POISONS_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_ASSASSINATION_BETRAYAL",
        "Name": "TEXT_EVENTSTORY_ASSASSINATION_BETRAYAL_TITLE",
        "Text": "TEXT_EVENTSTORY_ASSASSINATION_BETRAYAL",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ADULT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ASSASSINATION_BETRAYAL_ADMIT",
            "EVENTOPTION_ASSASSINATION_BETRAYAL_DENY"
          ]
        },
        "Trigger": "EVENTTRIGGER_MISSION_FINISHED",
        "TriggerData": "MISSION_ASSASSINATE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_ASSASSINATION_REVENGE",
        "Name": "TEXT_EVENTSTORY_ASSASSINATION_REVENGE_TITLE",
        "Text": "TEXT_EVENTSTORY_ASSASSINATION_REVENGE",
        "zBackgroundName": "MudFight",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ASSASSINATION_REVENGE_PAYOFF",
            "EVENTOPTION_ASSASSINATION_REVENGE_DEATH"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_ASSASSINATION_BETRAYAL",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_ASSASSINATION_RUMORS",
        "Name": "TEXT_EVENTSTORY_ASSASSINATION_RUMORS_TITLE",
        "Text": "TEXT_EVENTSTORY_ASSASSINATION_RUMORS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_SPYMASTER"
            },
            {
              "First": "2",
              "Second": "SUBJECT_SLIGHTED"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_NOT_IN_LOVE_WITH",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ASSASSINATION_RUMORS_REMOVE",
            "EVENTOPTION_ASSASSINATION_RUMORS_IMPRISON_WIFE",
            "EVENTOPTION_ASSASSINATION_RUMORS_IMPRISON_HEIR"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_FAMILY_PARTISANS",
        "Name": "TEXT_EVENTSTORY_FAMILY_PARTISANS_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_PARTISANS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CITY_MAX_ANGRY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_PARTISANS_OK",
            "EVENTOPTION_FAMILY_PARTISANS_HELP"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_SABOTAGE",
        "Name": "TEXT_EVENTSTORY_SABOTAGE_TITLE",
        "Text": "TEXT_EVENTSTORY_SABOTAGE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_FAMILY_MAX_ANGRY"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTSTORY_SABOTAGE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SABOTAGE_OK",
            "EVENTOPTION_SABOTAGE_HELP"
          ]
        },
        "iWeight": "3",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_FAMILY_SQUABBLE_LAND",
        "Name": "TEXT_EVENTSTORY_FAMILY_SQUABBLE_LAND_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_SQUABBLE_LAND",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_SQUABBLE_LAND_RESPECT",
            "EVENTOPTION_FAMILY_SQUABBLE_LAND_KEEP",
            "EVENTOPTION_FAMILY_SQUABBLE_LAND_STAND",
            "EVENTOPTION_FAMILY_SQUABBLE_LAND_TAKE"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_FAMILY_SQUABBLE_LAND",
            "EVENTSTORY_FAMILY_SQUABBLE_HONOR_GUARD"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_FAMILY_SQUABBLE_HONOR_GUARD",
        "Name": "TEXT_EVENTSTORY_FAMILY_SQUABBLE_HONOR_GUARD_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_SQUABBLE_HONOR_GUARD",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_1",
            "EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_2",
            "EVENTOPTION_FAMILY_SQUABBLE_HONOR_GUARD_NO"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_FAMILY_SQUABBLE_LAND",
            "EVENTSTORY_FAMILY_SQUABBLE_HONOR_GUARD"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_FAMILY_SQUABBLE_RUMORS",
        "Name": "TEXT_EVENTSTORY_FAMILY_SQUABBLE_RUMORS_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_SQUABBLE_RUMORS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_SQUABBLE_RUMORS_GOLD",
            "EVENTOPTION_FAMILY_SQUABBLE_RUMORS_TIMBER",
            "EVENTOPTION_FAMILY_SQUABBLE_RUMORS_THANKS",
            "EVENTOPTION_FAMILY_SQUABBLE_RUMORS_REFUSE"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_FAMILY_SQUABBLE",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_FAMILY_SQUABBLE_RUMORS",
            "EVENTSTORY_FAMILY_SQUABBLE_INVITATIONS"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_FAMILY_SQUABBLE_INVITATIONS",
        "Name": "TEXT_EVENTSTORY_FAMILY_SQUABBLE_INVITATIONS_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_SQUABBLE_INVITATIONS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_1",
            "EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_2",
            "EVENTOPTION_FAMILY_SQUABBLE_INVITATIONS_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_FAMILY_SQUABBLE",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_FAMILY_SQUABBLE_RUMORS",
            "EVENTSTORY_FAMILY_SQUABBLE_INVITATIONS"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_FAMILY_QUARREL",
        "Name": "TEXT_EVENTSTORY_FAMILY_QUARREL_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_QUARREL",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GOVERNOR"
            },
            {
              "First": "2",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_SINGLE"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_SPOUSE_OF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_QUARREL_ALLOW",
            "EVENTOPTION_FAMILY_QUARREL_PURSUE",
            "EVENTOPTION_FAMILY_QUARREL_HELP"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_FAMILY_QUARREL_PURSUE",
        "Name": "TEXT_EVENTSTORY_FAMILY_QUARREL_PURSUE_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_QUARREL_PURSUE",
        "zBackgroundName": "city approach",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_QUARREL_PURSUE_RETREAT",
            "EVENTOPTION_FAMILY_QUARREL_PURSUE_SIEGE",
            "EVENTOPTION_FAMILY_QUARREL_PURSUE_HORSE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_FAMILY_QUARREL_PURSUE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_FAMILY_QUARREL_HORSE",
        "Name": "TEXT_EVENTSTORY_FAMILY_QUARREL_HORSE_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_QUARREL_HORSE",
        "zEventURL": "https://https://en.wikipedia.org/wiki/Trojan_Horse",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_QUARREL_SACK",
            "EVENTOPTION_FAMILY_QUARREL_SPARE",
            "EVENTOPTION_FAMILY_QUARREL_RETURN"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_FAMILY_QUARREL_HORSE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_FAMILY_QUARREL_SIEGE",
        "Name": "TEXT_EVENTSTORY_FAMILY_QUARREL_SIEGE_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_QUARREL_SIEGE",
        "zBackgroundName": "city approach",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_QUARREL_SIEGE_CONTINUE",
            "EVENTOPTION_FAMILY_QUARREL_SIEGE_ATTACK",
            "EVENTOPTION_FAMILY_QUARREL_SIEGE_RETREAT"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_FAMILY_QUARREL_SIEGE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_FAMILY_QUARREL_FATIGUED",
        "Name": "TEXT_EVENTSTORY_FAMILY_QUARREL_FATIGUED_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_QUARREL_FATIGUED",
        "zBackgroundName": "city approach",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_QUARREL_FATIGUED_ATTACK",
            "EVENTOPTION_FAMILY_QUARREL_FATIGUED_RETREAT"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_FAMILY_QUARREL_CONTINUE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_FAMILY_QUARREL_ATTACK",
        "Name": "TEXT_EVENTSTORY_FAMILY_QUARREL_ATTACK_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_QUARREL_ATTACK",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_QUARREL_SACK",
            "EVENTOPTION_FAMILY_QUARREL_SPARE",
            "EVENTOPTION_FAMILY_QUARREL_RETURN"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_FAMILY_QUARREL_ATTACK",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_ACROPOLIS_GUARD",
        "Name": "TEXT_EVENTSTORY_ACROPOLIS_GUARD_TITLE",
        "Text": "TEXT_EVENTSTORY_ACROPOLIS_GUARD",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_FAMILY_ACROPOLIS_GUARD"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ACROPOLIS_GUARD_YES",
            "EVENTOPTION_ACROPOLIS_GUARD_NO"
          ]
        },
        "iWeight": "5",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_FAMILY_GAMES",
        "Name": "TEXT_EVENTSTORY_FAMILY_GAMES_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_GAMES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_FAMILY_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_FAMILY_MAX_UPSET"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_GAMES",
            "EVENTOPTION_TOO_EXPENSIVE"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_START_LAW",
        "Name": "TEXT_EVENTSTORY_START_LAW_TITLE",
        "Text": "TEXT_EVENTSTORY_START_LAW",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_LAW"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_LAW_POSITIVE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_LAW_YES",
            "EVENTOPTION_FAMILY_LAW_NO"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_ESTABLISH_THEOLOGY",
        "Name": "TEXT_EVENTSTORY_ESTABLISH_THEOLOGY_TITLE",
        "Text": "TEXT_EVENTSTORY_ESTABLISH_THEOLOGY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_THEOLOGY"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_THEOLOGY_POSITIVE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_THEOLOGY_YES",
            "EVENTOPTION_FAMILY_THEOLOGY_NO"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_DECADENCE",
        "Name": "TEXT_EVENTSTORY_DECADENCE_TITLE",
        "Text": "TEXT_EVENTSTORY_DECADENCE",
        "zBackgroundName": "Wedding",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_FAMILY_CLERICS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DECADENCE_SACRIFICE",
            "EVENTOPTION_DECADENCE_CRAZY_PRIESTS"
          ]
        },
        "TechPrereq": "TECH_DIVINATION",
        "LawPrereq": "LAW_ELITES",
        "iWeight": "3"
      },
      {
        "zType": "EVENTSTORY_STRICTER_RULES",
        "Name": "TEXT_EVENTSTORY_STRICTER_RULES_TITLE",
        "Text": "TEXT_EVENTSTORY_STRICTER_RULES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_FAMILY_CLERICS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STRICTER_RULES_PRIESTS_PLEASED",
            "EVENTOPTION_STRICTER_RULES_PEOPLE_PLEASED"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_DECADENCE_SACRIFICE",
        "iWeight": "3"
      },
      {
        "zType": "EVENTSTORY_RAMPANT_CORRUPTION",
        "Name": "TEXT_EVENTSTORY_RAMPANT_CORRUPTION_TITLE",
        "Text": "TEXT_EVENTSTORY_RAMPANT_CORRUPTION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CITY_DISCONTENT_MODERATE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RAMPANT_CORRUPTION_ALLOW",
            "EVENTOPTION_RAMPANT_CORRUPTION_SUPPORT",
            "EVENTOPTION_RAMPANT_CORRUPTION_HIRE",
            "EVENTOPTION_RAMPANT_CORRUPTION_BRIBES"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_RADICAL_PHILOSOPHER",
        "Name": "TEXT_EVENTSTORY_RADICAL_PHILOSOPHER_TITLE",
        "Text": "TEXT_EVENTSTORY_RADICAL_PHILOSOPHER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RADICAL_PHILOSOPHER_ACCEPT",
            "EVENTOPTION_RADICAL_PHILOSOPHER_RID"
          ]
        },
        "LawPrereq": "LAW_SLAVERY",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CONTEST_OF_RHETORIC",
        "Name": "TEXT_EVENTSTORY_CONTEST_OF_RHETORIC_TITLE",
        "Text": "TEXT_EVENTSTORY_CONTEST_OF_RHETORIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_PLAYER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CONTEST_OF_RHETORIC_MYSELF",
            "EVENTOPTION_CONTEST_OF_RHETORIC_ORATOR",
            "EVENTOPTION_CONTEST_OF_RHETORIC_ANYONE",
            "EVENTOPTION_CONTEST_OF_RHETORIC_REFUSE"
          ]
        },
        "LawPrereq": "LAW_CENTRALIZATION",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_EAGER_EXPLORERS",
        "Name": "TEXT_EVENTSTORY_EAGER_EXPLORERS_TITLE",
        "Text": "TEXT_EVENTSTORY_EAGER_EXPLORERS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ENCOURAGING_SITES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_FAMILY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EAGER_EXPLORERS_OK",
            "EVENTOPTION_EAGER_EXPLORERS_NEW"
          ]
        },
        "LawPrereq": "LAW_EXPLORATION",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_IMPROPER_VASSAL",
        "Name": "TEXT_EVENTSTORY_IMPROPER_VASSAL_TITLE",
        "Text": "TEXT_EVENTSTORY_IMPROPER_VASSAL",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_FAMILY_MIN_CAUTIOUS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_IMPROPER_VASSAL_REMIND",
            "EVENTOPTION_IMPROPER_VASSAL_REPRIMAND",
            "EVENTOPTION_IMPROPER_VASSAL_LET_GO"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_HEATED_RIVALRY",
        "Name": "TEXT_EVENTSTORY_HEATED_RIVALRY_TITLE",
        "Text": "TEXT_EVENTSTORY_HEATED_RIVALRY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_FAMILY_NON_HEIR"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_FAMILY_MIN_FRIENDLY"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEATED_RIVALRY_REFUSE",
            "EVENTOPTION_HEATED_RIVALRY_ACQUIESCE"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_FAVORED_VASSAL",
        "Name": "TEXT_EVENTSTORY_FAVORED_VASSAL_TITLE",
        "Text": "TEXT_EVENTSTORY_FAVORED_VASSAL",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_MIN_FRIENDLY"
            },
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_NON_LEADER"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAVORED_VASSAL_OK",
            "EVENTOPTION_FAVORED_VASSAL_NO"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_FAVORED_VASSAL_FEAST",
        "Name": "TEXT_EVENTSTORY_FAVORED_VASSAL_FEAST_TITLE",
        "Text": "TEXT_EVENTSTORY_FAVORED_VASSAL_FEAST",
        "zBackgroundName": "Birth",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_MIN_FRIENDLY"
            },
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_NON_LEADER"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAVORED_VASSAL_FEAST_OK",
            "EVENTOPTION_FAVORED_VASSAL_FEAST_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_FAVORED_VASSAL_OK",
        "iWeight": "4"
      },
      {
        "zType": "EVENTSTORY_FAVORED_VASSAL_CEREMONY",
        "Name": "TEXT_EVENTSTORY_FAVORED_VASSAL_CEREMONY_TITLE",
        "Text": "TEXT_EVENTSTORY_FAVORED_VASSAL_CEREMONY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_MIN_FRIENDLY"
            },
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_NON_LEADER"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAVORED_VASSAL_CEREMONY_OK",
            "EVENTOPTION_FAVORED_VASSAL_CEREMONY_COMPROMISE",
            "EVENTOPTION_FAVORED_VASSAL_CEREMONY_NO"
          ]
        },
        "EventLinkPrereq": "EVENTLINK_FAVORED_VASSAL_FEAST_OK",
        "iWeight": "8"
      },
      {
        "zType": "EVENTSTORY_INQUIRING_MINDS",
        "Name": "TEXT_EVENTSTORY_INQUIRING_MINDS_TITLE",
        "Text": "TEXT_EVENTSTORY_INQUIRING_MINDS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CITY_FAMILY_SEAT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CITY_SAGES"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_INQUIRING_MINDS_YES",
            "EVENTOPTION_INQUIRING_MINDS_NO"
          ]
        },
        "iMinLeader": "2",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_INQUIRING_MINDS_SUCCESS",
        "Name": "TEXT_EVENTSTORY_INQUIRING_MINDS_SUCCESS_TITLE",
        "Text": "TEXT_EVENTSTORY_INQUIRING_MINDS_SUCCESS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CITY_FAMILY_SEAT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CITY_SAGES"
            }
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_INQUIRING_MINDS_SUCCESS_OK"
        },
        "Trigger": "EVENTTRIGGER_GOAL_FINISHED",
        "TriggerData": "GOAL_QUEST_INQUIRING_MINDS",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GREAT_PERSON_A1",
        "Name": "TEXT_EVENTSTORY_GREAT_PERSON_A1_TITLE",
        "Text": "TEXT_EVENTSTORY_GREAT_PERSON_A1",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_MAX_THREE_COURTIERS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GREAT_PERSON_A1_SOLDIER",
            "EVENTOPTION_GREAT_PERSON_A1_MERCHANT",
            "EVENTOPTION_GREAT_PERSON_NONE"
          ]
        },
        "Class": "EVENTCLASS_GREAT_PERSON",
        "iMinLeader": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_GREAT_PERSON_A2",
        "Name": "TEXT_EVENTSTORY_GREAT_PERSON_A2_TITLE",
        "Text": "TEXT_EVENTSTORY_GREAT_PERSON_A2",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_MAX_THREE_COURTIERS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GREAT_PERSON_A2_SOLDIER",
            "EVENTOPTION_GREAT_PERSON_A2_MERCHANT",
            "EVENTOPTION_GREAT_PERSON_NONE"
          ]
        },
        "Class": "EVENTCLASS_GREAT_PERSON",
        "EventLinkPrereq": "EVENTLINK_GREAT_PERSON_A1",
        "iWeight": "2"
      },
      {
        "zType": "EVENTSTORY_GREAT_PERSON_B1",
        "Name": "TEXT_EVENTSTORY_GREAT_PERSON_B1_TITLE",
        "Text": "TEXT_EVENTSTORY_GREAT_PERSON_B1",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_MAX_THREE_COURTIERS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GREAT_PERSON_B1_SCIENTIST",
            "EVENTOPTION_GREAT_PERSON_B1_MINISTER",
            "EVENTOPTION_GREAT_PERSON_NONE"
          ]
        },
        "Class": "EVENTCLASS_GREAT_PERSON",
        "iMinLeader": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_GREAT_PERSON_B2",
        "Name": "TEXT_EVENTSTORY_GREAT_PERSON_B2_TITLE",
        "Text": "TEXT_EVENTSTORY_GREAT_PERSON_B2",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_MAX_THREE_COURTIERS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GREAT_PERSON_B2_SCIENTIST",
            "EVENTOPTION_GREAT_PERSON_B2_MINISTER",
            "EVENTOPTION_GREAT_PERSON_NONE"
          ]
        },
        "Class": "EVENTCLASS_GREAT_PERSON",
        "EventLinkPrereq": "EVENTLINK_GREAT_PERSON_B1",
        "iWeight": "2"
      },
      {
        "zType": "EVENTSTORY_GP_WISDOM_LITERATURE",
        "Name": "TEXT_EVENTSTORY_GP_WISDOM_LITERATURE_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_WISDOM_LITERATURE",
        "zBackgroundName": "poetess",
        "zEventURL": "https://en.wikipedia.org/wiki/Wisdom_literature",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GREAT_MINISTER"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NO_JOB"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_WISDOM_LITERATURE_OPTION_0",
            "EVENTOPTION_GP_WISDOM_LITERATURE_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_A_PROMOTION",
        "Name": "TEXT_EVENTSTORY_GP_A_PROMOTION_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_A_PROMOTION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_MINISTER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_A_PROMOTION_OPTION_0",
            "EVENTOPTION_GP_A_PROMOTION_OPTION_1",
            "EVENTOPTION_GP_A_PROMOTION_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_DIPLOMATIC_MISSION",
        "Name": "TEXT_EVENTSTORY_GP_DIPLOMATIC_MISSION_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_DIPLOMATIC_MISSION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GREAT_MINISTER"
            },
            {
              "First": "2",
              "Second": "SUBJECT_PLAYER_MAX_NEAR"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_0",
            "EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_1",
            "EVENTOPTION_GP_DIPLOMATIC_MISSION_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_RIFT_IN_THE_COURT",
        "Name": "TEXT_EVENTSTORY_GP_RIFT_IN_THE_COURT_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_RIFT_IN_THE_COURT",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GREAT_MINISTER"
            },
            {
              "First": "2",
              "Second": "SUBJECT_FAMILY_MAX_UPSET"
            },
            {
              "First": "3",
              "Second": "SUBJECT_GREAT_MINISTER"
            },
            {
              "First": "4",
              "Second": "SUBJECT_FAMILY_MIN_PLEASED"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            },
            {
              "First": "4",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "3"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_0",
            "EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_1",
            "EVENTOPTION_GP_RIFT_IN_THE_COURT_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_ANNEXATION",
        "Name": "TEXT_EVENTSTORY_GP_ANNEXATION_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_ANNEXATION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_BARBARIAN_MAX_CLOSE",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_SOLDIER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_ANNEXATION_OPTION_0",
            "EVENTOPTION_GP_ANNEXATION_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_POISON_ON_THE_TREE",
        "Name": "TEXT_EVENTSTORY_GP_POISON_ON_THE_TREE_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_POISON_ON_THE_TREE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GREAT_SOLDIER"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_0",
            "EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_1",
            "EVENTOPTION_GP_POISON_ON_THE_TREE_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_FORCED_DEPORTATIONS",
        "Name": "TEXT_EVENTSTORY_TRAIT_FORCED_DEPORTATIONS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_FORCED_DEPORTATIONS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GREAT_SOLDIER"
            },
            {
              "First": "2",
              "Second": "SUBJECT_FAMILY_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_FORCED_DEPORTATIONS_OPTION_0",
            "EVENTOPTION_TRAIT_FORCED_DEPORTATIONS_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_A_GRUESOME_EXAMPLE",
        "Name": "TEXT_EVENTSTORY_GP_A_GRUESOME_EXAMPLE_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_A_GRUESOME_EXAMPLE",
        "zEventURL": "https://en.wikipedia.org/wiki/Fustuarium",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_SOLDIER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_A_GRUESOME_EXAMPLE_OPTION_0",
            "EVENTOPTION_GP_A_GRUESOME_EXAMPLE_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_FOREIGN_FIGHTERS",
        "Name": "TEXT_EVENTSTORY_GP_FOREIGN_FIGHTERS_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_FOREIGN_FIGHTERS",
        "zBackgroundName": "city approach",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_SOLDIER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_0",
            "EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_1",
            "EVENTOPTION_GP_FOREIGN_FIGHTERS_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_OFFENSIVE_BEHAVIOR",
        "Name": "TEXT_EVENTSTORY_GP_OFFENSIVE_BEHAVIOR_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_OFFENSIVE_BEHAVIOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_SOLDIER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_OFFENSIVE_BEHAVIOR_OPTION_0",
            "EVENTOPTION_GP_OFFENSIVE_BEHAVIOR_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_THE_UNIVERSAL_ORDER",
        "Name": "TEXT_EVENTSTORY_GP_THE_UNIVERSAL_ORDER_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_THE_UNIVERSAL_ORDER",
        "zEventURL": "https://en.wikipedia.org/wiki/Natural_History_(Pliny)",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_SCIENTIST"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_THE_UNIVERSAL_ORDER_OPTION_0",
            "EVENTOPTION_GP_THE_UNIVERSAL_ORDER_OPTION_1",
            "EVENTOPTION_GP_THE_UNIVERSAL_ORDER_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_FARMING_BY_STAR",
        "Name": "TEXT_EVENTSTORY_GP_FARMING_BY_STAR_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_FARMING_BY_STAR",
        "zBackgroundName": "Farm Couple",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_SCIENTIST"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_FARMING_BY_STAR_OPTION_0",
            "EVENTOPTION_GP_FARMING_BY_STAR_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_THE_MECHANISM",
        "Name": "TEXT_EVENTSTORY_GP_THE_MECHANISM_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_THE_MECHANISM",
        "zBackgroundName": "Escaped_Slave",
        "zEventURL": "https://en.wikipedia.org/wiki/Antikythera_mechanism",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_SCIENTIST"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_THE_MECHANISM_OPTION_0",
            "EVENTOPTION_GP_THE_MECHANISM_OPTION_1",
            "EVENTOPTION_GP_THE_MECHANISM_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_COMPOSITE_BOW",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_TABOOS",
        "Name": "TEXT_EVENTSTORY_GP_TABOOS_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_TABOOS",
        "zEventURL": "https://en.wikipedia.org/wiki/Galen",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GREAT_SCIENTIST"
            },
            {
              "First": "2",
              "Second": "SUBJECT_GREAT_SOLDIER"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_TABOOS_OPTION_0",
            "EVENTOPTION_GP_TABOOS_OPTION_1",
            "EVENTOPTION_GP_TABOOS_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_SCIENCE_OR_MAGIC",
        "Name": "TEXT_EVENTSTORY_GP_SCIENCE_OR_MAGIC_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_SCIENCE_OR_MAGIC",
        "zBackgroundName": "decree2final",
        "zEventURL": "https://en.wikipedia.org/wiki/Pythagoras",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GREAT_SCIENTIST"
            },
            {
              "First": "0",
              "Second": "SUBJECT_OLD"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_SCIENCE_OR_MAGIC_OPTION_0",
            "EVENTOPTION_GP_SCIENCE_OR_MAGIC_OPTION_1"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_UNETHICAL_PRACTICES",
        "Name": "TEXT_EVENTSTORY_GP_UNETHICAL_PRACTICES_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_UNETHICAL_PRACTICES",
        "zEventURL": "https://en.wikipedia.org/wiki/Usury",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_LAW_MONETARY_REFORM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_MERCHANT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_0",
            "EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_1",
            "EVENTOPTION_GP_UNETHICAL_PRACTICES_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_LIFESTYLES_OF_THE_RICH",
        "Name": "TEXT_EVENTSTORY_GP_LIFESTYLES_OF_THE_RICH_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_LIFESTYLES_OF_THE_RICH",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_MERCHANT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_0",
            "EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_1",
            "EVENTOPTION_GP_LIFESTYLES_OF_THE_RICH_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_LEFT_BEHIND",
        "Name": "TEXT_EVENTSTORY_GP_LEFT_BEHIND_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_LEFT_BEHIND",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_MERCHANT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_LEFT_BEHIND_OPTION_0",
            "EVENTOPTION_GP_LEFT_BEHIND_OPTION_1",
            "EVENTOPTION_GP_LEFT_BEHIND_OPTION_2"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_MERCHANT_TOWN",
        "Name": "TEXT_EVENTSTORY_GP_MERCHANT_TOWN_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_MERCHANT_TOWN",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_MERCHANT"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "3",
            "Second": "SUBJECTRELATION_FAMILY_SAME",
            "Third": "2"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_MERCHANT_TOWN_OPTION_0",
            "EVENTOPTION_GP_MERCHANT_TOWN_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GP_STICKY_FINGERS",
        "Name": "TEXT_EVENTSTORY_GP_STICKY_FINGERS_TITLE",
        "Text": "TEXT_EVENTSTORY_GP_STICKY_FINGERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_MERCHANT"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_SAME",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GP_STICKY_FINGERS_OPTION_0",
            "EVENTOPTION_GP_STICKY_FINGERS_OPTION_1",
            "EVENTOPTION_GP_STICKY_FINGERS_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_DEATH_DARK_WATERS",
        "Name": "TEXT_EVENTSTORY_DEATH_DARK_WATERS_TITLE",
        "Text": "TEXT_EVENTSTORY_DEATH_DARK_WATERS",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_CHILD_OF_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_SAME",
            "Third": "1"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEATH_DARK_WATERS_OPTION_0",
            "EVENTOPTION_DEATH_DARK_WATERS_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_SUDDEN_DEATH",
        "iImageSubject": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_DEATH_VANISHED",
        "Name": "TEXT_EVENTSTORY_DEATH_VANISHED_TITLE",
        "Text": "TEXT_EVENTSTORY_DEATH_VANISHED",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_CHILD"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_GIVE_TRAIT_MOURNING",
            "BONUS_KILL_CHARACTER"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEATH_VANISHED_OPTION_0",
            "EVENTOPTION_DEATH_VANISHED_OPTION_1",
            "EVENTOPTION_DEATH_VANISHED_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_SUDDEN_DEATH",
        "iImageSubject": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_DEATH_STRICKEN_DOWN",
        "Name": "TEXT_EVENTSTORY_DEATH_STRICKEN_DOWN_TITLE",
        "Text": "TEXT_EVENTSTORY_DEATH_STRICKEN_DOWN",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_RELIGION"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_CHILD"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_GIVE_TRAIT_MOURNING",
            "BONUS_KILL_CHARACTER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEATH_STRICKEN_DOWN_OPTION_0",
            "EVENTOPTION_DEATH_STRICKEN_DOWN_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_SUDDEN_DEATH",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_DEATH_TRAMPLED",
        "Name": "TEXT_EVENTSTORY_DEATH_TRAMPLED_TITLE",
        "Text": "TEXT_EVENTSTORY_DEATH_TRAMPLED",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_CHILD"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_GIVE_TRAIT_MOURNING",
            "BONUS_KILL_CHARACTER"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEATH_TRAMPLED_OPTION_0",
            "EVENTOPTION_DEATH_TRAMPLED_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_SUDDEN_DEATH",
        "iImageSubject": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_DEATH_A_LONG_FALL",
        "Name": "TEXT_EVENTSTORY_DEATH_A_LONG_FALL_TITLE",
        "Text": "TEXT_EVENTSTORY_DEATH_A_LONG_FALL",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_CHILD"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_GIVE_TRAIT_MOURNING",
            "BONUS_KILL_CHARACTER"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEATH_A_LONG_FALL_OPTION_0",
            "EVENTOPTION_DEATH_A_LONG_FALL_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_SUDDEN_DEATH",
        "iImageSubject": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_DEATH_DEADLY_DRINK",
        "Name": "TEXT_EVENTSTORY_DEATH_DEADLY_DRINK_TITLE",
        "Text": "TEXT_EVENTSTORY_DEATH_DEADLY_DRINK",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_TEENAGER"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEATH_DEADLY_DRINK_OPTION_0",
            "EVENTOPTION_DEATH_DEADLY_DRINK_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_SUDDEN_DEATH",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_DEATH_BRAWL",
        "Name": "TEXT_EVENTSTORY_DEATH_BRAWL_TITLE",
        "Text": "TEXT_EVENTSTORY_DEATH_BRAWL",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_TEENAGER"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEATH_BRAWL_OPTION_0",
            "EVENTOPTION_DEATH_BRAWL_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_SUDDEN_DEATH",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_DEATH_THE_PRICE_OF_POWER",
        "Name": "TEXT_EVENTSTORY_DEATH_THE_PRICE_OF_POWER_TITLE",
        "Text": "TEXT_EVENTSTORY_DEATH_THE_PRICE_OF_POWER",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_30"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEATH_THE_PRICE_OF_POWER_OPTION_0",
            "EVENTOPTION_DEATH_THE_PRICE_OF_POWER_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_SUDDEN_DEATH",
        "iImageSubject": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_DEATH_ACT_OF_MALICE",
        "Name": "TEXT_EVENTSTORY_DEATH_ACT_OF_MALICE_TITLE",
        "Text": "TEXT_EVENTSTORY_DEATH_ACT_OF_MALICE",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_TEENAGER"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEATH_ACT_OF_MALICE_OPTION_0",
            "EVENTOPTION_DEATH_ACT_OF_MALICE_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_SUDDEN_DEATH",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_CHILD_NO_SIGNS_OF_LIFE",
        "Name": "TEXT_EVENTSTORY_CHILD_NO_SIGNS_OF_LIFE_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_NO_SIGNS_OF_LIFE",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_BABY"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_NO_SIGNS_OF_LIFE_OPTION_0",
            "EVENTOPTION_CHILD_NO_SIGNS_OF_LIFE_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_SUDDEN_DEATH",
        "iMinLeader": "2",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_CHILD_MYSTERIOUS_INFANT",
        "Name": "TEXT_EVENTSTORY_CHILD_MYSTERIOUS_INFANT_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_MYSTERIOUS_INFANT",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_MYSTERIOUS_INFANT",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_0",
            "EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_1",
            "EVENTOPTION_CHILD_MYSTERIOUS_INFANT_OPTION_2"
          ]
        },
        "iMinLeader": "2",
        "iWeight": "1",
        "iProb": "35",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHILD_FRAGILE",
        "Name": "TEXT_EVENTSTORY_CHILD_FRAGILE_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_FRAGILE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTOPTION_CHILD_FRAGILE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_FRAGILE_OPTION_0",
            "EVENTOPTION_CHILD_FRAGILE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_BIRTH",
        "iTriggerSubject": "1",
        "iMinLeader": "2",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHILD_NATAL_ASTROLOGER",
        "Name": "TEXT_EVENTSTORY_CHILD_NATAL_ASTROLOGER_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_NATAL_ASTROLOGER",
        "zBackgroundName": "Birth",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_NATAL_ASTROLOGER_OPTION_0",
            "EVENTOPTION_CHILD_NATAL_ASTROLOGER_OPTION_1",
            "EVENTOPTION_CHILD_NATAL_ASTROLOGER_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BIRTH",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHILD_JOY_AND_PAIN",
        "Name": "TEXT_EVENTSTORY_CHILD_JOY_AND_PAIN_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_JOY_AND_PAIN",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_FEMALE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER",
            "NONE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_JOY_AND_PAIN_OPTION_0",
            "EVENTOPTION_CHILD_JOY_AND_PAIN_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_BIRTH",
        "iImageSubject": "1",
        "iWeight": "2",
        "iProb": "20",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_HEIR_THE_CALLING",
        "Name": "TEXT_EVENTSTORY_HEIR_THE_CALLING_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_THE_CALLING",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_RELIGION"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_40"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_THE_CALLING_OPTION_0",
            "EVENTOPTION_HEIR_THE_CALLING_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "35",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_CHILD_KILLED_IN_ACTION",
        "Name": "TEXT_EVENTSTORY_CHILD_KILLED_IN_ACTION_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_KILLED_IN_ACTION",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_40"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_KILLED_IN_ACTION_OPTION_0",
            "EVENTOPTION_CHILD_KILLED_IN_ACTION_OPTION_1",
            "EVENTOPTION_CHILD_KILLED_IN_ACTION_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_UNIT_KILLED",
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CHILD_ENLISTMENT",
        "Name": "TEXT_EVENTSTORY_CHILD_ENLISTMENT_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_ENLISTMENT",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_UNIT_NEEDS_GENERAL"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_ENLISTMENT_OPTION_0",
            "EVENTOPTION_CHILD_ENLISTMENT_OPTION_1",
            "EVENTOPTION_CHILD_ENLISTMENT_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_CHILD_COMMON_LOVE",
        "Name": "TEXT_EVENTSTORY_CHILD_COMMON_LOVE_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_COMMON_LOVE",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_SUITOR_TEMP_BAD"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_40"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_COMMON_LOVE_OPTION_0",
            "EVENTOPTION_CHILD_COMMON_LOVE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CHILD_STRONG_OPINIONS",
        "Name": "TEXT_EVENTSTORY_CHILD_STRONG_OPINIONS_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_STRONG_OPINIONS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_40"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_STRONG_OPINIONS_OPTION_0",
            "EVENTOPTION_CHILD_STRONG_OPINIONS_OPTION_1",
            "EVENTOPTION_CHILD_STRONG_OPINIONS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_CHILD_BIG_QUESTIONS",
        "Name": "TEXT_EVENTSTORY_CHILD_BIG_QUESTIONS_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_BIG_QUESTIONS",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_40"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_BIG_QUESTIONS_OPTION_0",
            "EVENTOPTION_CHILD_BIG_QUESTIONS_OPTION_1",
            "EVENTOPTION_CHILD_BIG_QUESTIONS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CHILD_PETTY_CRIMES",
        "Name": "TEXT_EVENTSTORY_CHILD_PETTY_CRIMES_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_PETTY_CRIMES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_40"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_PETTY_CRIMES_OPTION_0",
            "EVENTOPTION_CHILD_PETTY_CRIMES_OPTION_1",
            "EVENTOPTION_CHILD_PETTY_CRIMES_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_CHILD_THE_PUPPIES",
        "Name": "TEXT_EVENTSTORY_CHILD_THE_PUPPIES_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_THE_PUPPIES",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_40"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_THE_PUPPIES_OPTION_0",
            "EVENTOPTION_CHILD_THE_PUPPIES_OPTION_1",
            "EVENTOPTION_CHILD_THE_PUPPIES_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHILD_AFFAIRS_OF_THE_CITY",
        "Name": "TEXT_EVENTSTORY_CHILD_AFFAIRS_OF_THE_CITY_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_AFFAIRS_OF_THE_CITY",
        "zBackgroundName": "Wedding",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_40"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_AFFAIRS_OF_THE_CITY_OPTION_0",
            "EVENTOPTION_CHILD_AFFAIRS_OF_THE_CITY_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_CHILD_WISE_INVESTMENTS",
        "Name": "TEXT_EVENTSTORY_CHILD_WISE_INVESTMENTS_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_WISE_INVESTMENTS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_40"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_WISE_INVESTMENTS_OPTION_0",
            "EVENTOPTION_CHILD_WISE_INVESTMENTS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_CHILD_WITH_CHILD_M",
        "Name": "TEXT_EVENTSTORY_CHILD_WITH_CHILD_M_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_WITH_CHILD_M",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_CHILD_OF_LEADER_US"
            },
            {
              "First": "1",
              "Second": "SUBJECT_MALE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT_UNDER_40"
            },
            {
              "First": "2",
              "Second": "SUBJECT_FEMALE"
            },
            {
              "First": "2",
              "Second": "SUBJECT_NON_ROYAL"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_WITH_CHILD_M_OPTION_0",
            "EVENTOPTION_CHILD_WITH_CHILD_M_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "100"
      },
      {
        "zType": "EVENTSTORY_CHILD_WITH_CHILD_F",
        "Name": "TEXT_EVENTSTORY_CHILD_WITH_CHILD_F_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_WITH_CHILD_F",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "2",
              "Second": "SUBJECT_FEMALE"
            },
            {
              "First": "2",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_0",
            "EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_1",
            "EVENTOPTION_CHILD_WITH_CHILD_F_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "100"
      },
      {
        "zType": "EVENTSTORY_CHILD_THE_BIRTHDAY_GIFT",
        "Name": "TEXT_EVENTSTORY_CHILD_THE_BIRTHDAY_GIFT_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_THE_BIRTHDAY_GIFT",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_40"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_THE_BIRTHDAY_GIFT_OPTION_0",
            "EVENTOPTION_CHILD_THE_BIRTHDAY_GIFT_OPTION_1",
            "EVENTOPTION_CHILD_THE_BIRTHDAY_GIFT_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_CHILD_FALSE_ACCUSATION",
        "Name": "TEXT_EVENTSTORY_CHILD_FALSE_ACCUSATION_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_FALSE_ACCUSATION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_40"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_FALSE_ACCUSATION_OPTION_0",
            "EVENTOPTION_CHILD_FALSE_ACCUSATION_OPTION_1",
            "EVENTOPTION_CHILD_FALSE_ACCUSATION_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_CHILD_SEE_THE_WORLD",
        "Name": "TEXT_EVENTSTORY_CHILD_SEE_THE_WORLD_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_SEE_THE_WORLD",
        "zAudioTrigger": "AUDIO_UI_EVENT_ENCOURAGING_SITES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT_UNDER_40"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_0",
            "EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_1",
            "EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_2",
            "EVENTOPTION_CHILD_SEE_THE_WORLD_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_ADULTHOOD",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_CHILD_FEATS_OF_VALOR",
        "Name": "TEXT_EVENTSTORY_CHILD_FEATS_OF_VALOR_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_FEATS_OF_VALOR",
        "zBackgroundName": "promotion_01",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_UNIT_NEEDS_GENERAL"
            },
            {
              "First": "1",
              "Second": "SUBJECT_SOLDIER"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_FEATS_OF_VALOR_OPTION_0",
            "EVENTOPTION_CHILD_FEATS_OF_VALOR_OPTION_1",
            "EVENTOPTION_CHILD_FEATS_OF_VALOR_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_KILL",
        "iImageSubject": "1",
        "iWeight": "3",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_CHILD_THE_BAD_SEED",
        "Name": "TEXT_EVENTSTORY_CHILD_THE_BAD_SEED_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_THE_BAD_SEED",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_CRUEL"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_0",
            "EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_1",
            "EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_2",
            "EVENTOPTION_CHILD_THE_BAD_SEED_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "1",
        "iWeight": "2",
        "iProb": "25",
        "iRepeatTurns": "-1",
        "bIgnoreOptions": "1"
      },
      {
        "zType": "EVENTSTORY_CHILD_ELOPED",
        "Name": "TEXT_EVENTSTORY_CHILD_ELOPED_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_ELOPED",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_ROMANTIC"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT_UNDER_40"
            },
            {
              "First": "2",
              "Second": "SUBJECT_NON_ROYAL"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_ELOPED_OPTION_0",
            "EVENTOPTION_CHILD_ELOPED_OPTION_1",
            "EVENTOPTION_CHILD_ELOPED_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_A_QUESTION_OF_SUCCESSION",
        "Name": "TEXT_EVENTSTORY_TRAIT_A_QUESTION_OF_SUCCESSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_A_QUESTION_OF_SUCCESSION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_MOURNING"
            },
            {
              "First": "2",
              "Second": "SUBJECT_HEIR_US"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_A_QUESTION_OF_SUCCESSION_OPTION_0",
            "EVENTOPTION_TRAIT_A_QUESTION_OF_SUCCESSION_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_MOURNING",
        "iImageSubject": "1",
        "iWeight": "1",
        "iRepeatTurns": "100"
      },
      {
        "zType": "EVENTSTORY_TRAIT_DOWNWARD_SPIRAL",
        "Name": "TEXT_EVENTSTORY_TRAIT_DOWNWARD_SPIRAL_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_DOWNWARD_SPIRAL",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_MOURNING"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_DOWNWARD_SPIRAL_OPTION_0",
            "EVENTOPTION_TRAIT_DOWNWARD_SPIRAL_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_MOURNING",
        "iImageSubject": "1",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_TRAIT_OPPORTUNISTS",
        "Name": "TEXT_EVENTSTORY_TRAIT_OPPORTUNISTS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_OPPORTUNISTS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_MOURNING"
            },
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_MAX_UPSET"
            },
            {
              "First": "2",
              "Second": "SUBJECT_GOVERNOR"
            },
            {
              "First": "3",
              "Second": "SUBJECT_CITY_WITH_GOVERNOR"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "2"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_0",
            "EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_1",
            "EVENTOPTION_TRAIT_OPPORTUNISTS_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_MOURNING",
        "iImageSubject": "2",
        "iWeight": "1",
        "iRepeatTurns": "100"
      },
      {
        "zType": "EVENTSTORY_TRAIT_THE_RETURN",
        "Name": "TEXT_EVENTSTORY_TRAIT_THE_RETURN_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_THE_RETURN",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_MOURNING"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_ESTRANGED_FROM",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_THE_RETURN_OPTION_0",
            "EVENTOPTION_TRAIT_THE_RETURN_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_MOURNING",
        "iWeight": "1",
        "iRepeatTurns": "100"
      },
      {
        "zType": "EVENTSTORY_TRAIT_HARSH_WORDS",
        "Name": "TEXT_EVENTSTORY_TRAIT_HARSH_WORDS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_HARSH_WORDS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_MOURNING"
            },
            {
              "First": "1",
              "Second": "SUBJECT_GENERAL"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_0",
            "EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_1",
            "EVENTOPTION_TRAIT_HARSH_WORDS_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_MOURNING",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_TRAIT_REVENANTS",
        "Name": "TEXT_EVENTSTORY_TRAIT_REVENANTS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_REVENANTS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_MOURNING"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_REVENANTS_OPTION_0",
            "EVENTOPTION_TRAIT_REVENANTS_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_MOURNING",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_LEADER_WISDOM_WITH_AGE",
        "Name": "TEXT_EVENTSTORY_LEADER_WISDOM_WITH_AGE_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_WISDOM_WITH_AGE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_LAW_SENIORITY"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "1",
              "Second": "SUBJECT_HEIR_US"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LEADER_WISDOM_WITH_AGE_OPTION_0",
            "EVENTOPTION_LEADER_WISDOM_WITH_AGE_OPTION_1"
          ]
        },
        "iMinLeader": "2",
        "iWeight": "2",
        "iRepeatTurns": "-1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_SENIORITY",
            "LAW_PRIMOGENITURE"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_LEADER_BLOODLESS_REBELLION",
        "Name": "TEXT_EVENTSTORY_LEADER_BLOODLESS_REBELLION_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_BLOODLESS_REBELLION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "1",
              "Second": "SUBJECT_GOVERNOR"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            },
            {
              "First": "2",
              "Second": "SUBJECT_HEIR_US"
            },
            {
              "First": "3",
              "Second": "SUBJECT_CITY_DISCONTENT_MODERATE"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_0",
            "EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_1",
            "EVENTOPTION_LEADER_BLOODLESS_REBELLION_OPTION_2"
          ]
        },
        "iWeight": "3",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_LEADER_LEGACY_OF_GOLD",
        "Name": "TEXT_EVENTSTORY_LEADER_LEGACY_OF_GOLD_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_LEGACY_OF_GOLD",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CHANCELLOR"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_0",
            "EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_1",
            "EVENTOPTION_LEADER_LEGACY_OF_GOLD_OPTION_2"
          ]
        },
        "iWeight": "3",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_LEADER_TWILIGHT_YEARS",
        "Name": "TEXT_EVENTSTORY_LEADER_TWILIGHT_YEARS_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_TWILIGHT_YEARS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            },
            {
              "First": "2",
              "Second": "SUBJECT_HEIR_US"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LEADER_TWILIGHT_YEARS_OPTION_0",
            "EVENTOPTION_LEADER_TWILIGHT_YEARS_OPTION_1"
          ]
        },
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_LEADER_THE_HEIRS_CUP",
        "Name": "TEXT_EVENTSTORY_LEADER_THE_HEIRS_CUP_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_THE_HEIRS_CUP",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CRUEL"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LEADER_THE_HEIRS_CUP_OPTION_0",
            "EVENTOPTION_LEADER_THE_HEIRS_CUP_OPTION_1"
          ]
        },
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_LEADER_THE_HEIRS_CUP_POISONED",
        "Name": "TEXT_EVENTSTORY_LEADER_THE_HEIRS_CUP_POISONED_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_THE_HEIRS_CUP_POISONED",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            },
            {
              "First": "2",
              "Second": "SUBJECT_SPYMASTER"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LEADER_THE_HEIRS_CUP_POISONED_OPTION_0",
            "EVENTOPTION_LEADER_THE_HEIRS_CUP_POISONED_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_THE_HEIRS_CUP_START",
        "iWeight": "1",
        "iProb": "50"
      },
      {
        "zType": "EVENTSTORY_THE_FINAL_CAMPAIGN",
        "Name": "TEXT_EVENTSTORY_THE_FINAL_CAMPAIGN_TITLE",
        "Text": "TEXT_EVENTSTORY_THE_FINAL_CAMPAIGN",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_LEADER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_0",
            "EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_1",
            "EVENTOPTION_THE_FINAL_CAMPAIGN_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_LEADER_BIOGRAPHY",
        "Name": "TEXT_EVENTSTORY_LEADER_BIOGRAPHY_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_BIOGRAPHY",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "0",
              "Second": "SUBJECT_HIGH_WISDOM"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LEADER_BIOGRAPHY_OPTION_0",
            "EVENTOPTION_LEADER_BIOGRAPHY_OPTION_1",
            "EVENTOPTION_LEADER_BIOGRAPHY_OPTION_2"
          ]
        },
        "iMinLeader": "2",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_NO_SMALL_FAVOR",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_NO_SMALL_FAVOR_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_NO_SMALL_FAVOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_GOVERNOR"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CITY_WITH_GOVERNOR"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_SIBLING_OF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_CITY_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_NO_SMALL_FAVOR_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_NO_SMALL_FAVOR_OPTION_1"
          ]
        },
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_PROBLEM_CHILD",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_PROBLEM_CHILD_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_PROBLEM_CHILD",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_SIBLING_OF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_PROBLEM_CHILD_OPTION_2"
          ]
        },
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_DEATH_IN_THE_FAMILY",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_DEATH_IN_THE_FAMILY_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_DEATH_IN_THE_FAMILY",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_SIBLING_OF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_CHILD_OF",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_DEATH_IN_THE_FAMILY_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_DEATH_IN_THE_FAMILY_OPTION_1"
          ]
        },
        "iImageSubject": "1",
        "iMinLeader": "2",
        "iWeight": "2",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_A_SPARK",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_A_SPARK_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_A_SPARK",
        "zEventURL": "https://en.wikipedia.org/wiki/Atossa",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_ATOSSA",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_MARRIED"
            },
            {
              "First": "0",
              "Second": "SUBJECT_MALE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NOT_GAY"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_A_SPARK_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_A_SPARK_OPTION_1"
          ]
        },
        "iImageSubject": "1",
        "iWeight": "2",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_SOMETHING_REAL",
        "Name": "TEXT_EVENTSTORY_SOMETHING_REAL_TITLE",
        "Text": "TEXT_EVENTSTORY_SOMETHING_REAL",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_MARRIED"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SOMETHING_REAL_OPTION_0",
            "EVENTOPTION_SOMETHING_REAL_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_A_SPARK_01",
        "iEventLinkTurns": "2",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_LOVE_TRIANGLE",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_LOVE_TRIANGLE_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_LOVE_TRIANGLE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CAPITAL_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ADULT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_LOVE_TRIANGLE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_A_SPARK_02",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_GRADUATED_RIVAL_MENTOR",
        "Name": "TEXT_EVENTSTORY_GRADUATED_RIVAL_MENTOR_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATED_RIVAL_MENTOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_TACTICS"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_GREAT_SOLDIER"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_REMOVE_STUDY_TACTICS"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_0",
            "EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_1",
            "EVENTOPTION_GRADUATED_RIVAL_MENTOR_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iPriority": "1",
        "iWeight": "2",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_STUDY_TIME_FOR_REJOICING",
        "Name": "TEXT_EVENTSTORY_STUDY_TIME_FOR_REJOICING_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_TIME_FOR_REJOICING",
        "zBackgroundName": "Birth",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEDDING_BELLS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_PHILOSOPHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NO_ARCHETYPE"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_REMOVE_STUDY_PHILOSOPHY"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_TIME_FOR_REJOICING_OPTION_0",
            "EVENTOPTION_STUDY_TIME_FOR_REJOICING_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iPriority": "1",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GRADUATED_CHILD_RETURNS",
        "Name": "TEXT_EVENTSTORY_GRADUATED_CHILD_RETURNS_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATED_CHILD_RETURNS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_RHETORIC"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_REMOVE_STUDY_RHETORIC",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATED_CHILD_RETURNS_OPTION_0",
            "EVENTOPTION_GRADUATED_CHILD_RETURNS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iPriority": "1",
        "iWeight": "2",
        "iRepeatTurns": "25"
      },
      {
        "zType": "EVENTSTORY_GRADUATE_AIR_OF_CERTAINTY",
        "Name": "TEXT_EVENTSTORY_GRADUATE_AIR_OF_CERTAINTY_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATE_AIR_OF_CERTAINTY",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_STUDY_TACTICS"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_GREAT_SOLDIER"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_REMOVE_STUDY_TACTICS",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_0",
            "EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_1",
            "EVENTOPTION_GRADUATE_AIR_OF_CERTAINTY_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iPriority": "1",
        "iWeight": "2",
        "iProb": "75",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_STUDY_NOT_WITHOUT_RISK",
        "Name": "TEXT_EVENTSTORY_STUDY_NOT_WITHOUT_RISK_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_NOT_WITHOUT_RISK",
        "zBackgroundName": "Funeral",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_TACTICS"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_KILL_CHARACTER",
            "BONUS_EVENTSTORY_STUDY_NOT_WITHOUT_RISK_CHARACTER_1"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_NOT_WITHOUT_RISK_OPTION_0",
            "EVENTOPTION_STUDY_NOT_WITHOUT_RISK_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "-1",
        "aiMortalitySkipProb": {
          "Pair": [
            {
              "zIndex": "MORTALITY_LONG",
              "iValue": "100"
            },
            {
              "zIndex": "MORTALITY_STANDARD",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EVENTSTORY_STUDY_EXCELLENT_STUDENT",
        "Name": "TEXT_EVENTSTORY_STUDY_EXCELLENT_STUDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_EXCELLENT_STUDENT",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_TACTICS"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NO_ARCHETYPE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_EXCELLENT_STUDENT_OPTION_0",
            "EVENTOPTION_STUDY_EXCELLENT_STUDENT_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_STUDY_WILDERNESS_SURVIVAL",
        "Name": "TEXT_EVENTSTORY_STUDY_WILDERNESS_SURVIVAL_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_WILDERNESS_SURVIVAL",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_TACTICS"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NO_ARCHETYPE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_WILDERNESS_SURVIVAL_OPTION_0",
            "EVENTOPTION_STUDY_WILDERNESS_SURVIVAL_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_STUDY_MASTER_ORATION",
        "Name": "TEXT_EVENTSTORY_STUDY_MASTER_ORATION_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_MASTER_ORATION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_RHETORIC"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NO_ARCHETYPE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_MASTER_ORATION_OPTION_0",
            "EVENTOPTION_STUDY_MASTER_ORATION_OPTION_1",
            "EVENTOPTION_STUDY_MASTER_ORATION_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_STUDY_DISCIPLINARY_ACTION",
        "Name": "TEXT_EVENTSTORY_STUDY_DISCIPLINARY_ACTION_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_DISCIPLINARY_ACTION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_RHETORIC"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_0",
            "EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_1",
            "EVENTOPTION_STUDY_DISCIPLINARY_ACTION_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_STUDY_GOLDEN_VOICE",
        "Name": "TEXT_EVENTSTORY_STUDY_GOLDEN_VOICE_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_GOLDEN_VOICE",
        "zBackgroundName": "poetess",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_RHETORIC"
          }
        },
        "aeBonuses": {
          "zValue": "BONUS_EVENTSTORY_STUDY_GOLDEN_VOICE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_GOLDEN_VOICE_OPTION_0",
            "EVENTOPTION_STUDY_GOLDEN_VOICE_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_STUDY_SPENDTHRIFT",
        "Name": "TEXT_EVENTSTORY_STUDY_SPENDTHRIFT_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_SPENDTHRIFT",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_COMMERCE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTSTORY_STUDY_SPENDTHRIFT_CHARACTER_0",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_SPENDTHRIFT_OPTION_0",
            "EVENTOPTION_STUDY_SPENDTHRIFT_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_STUDY_THE_MISEDUCATION_OF",
        "Name": "TEXT_EVENTSTORY_STUDY_THE_MISEDUCATION_OF_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_THE_MISEDUCATION_OF",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_COMMERCE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_THE_MISEDUCATION_OF_OPTION_0",
            "EVENTOPTION_STUDY_THE_MISEDUCATION_OF_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "2",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_STUDY_KINDRED_SPIRITS",
        "Name": "TEXT_EVENTSTORY_STUDY_KINDRED_SPIRITS_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_KINDRED_SPIRITS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_PHILOSOPHY"
            },
            {
              "First": "2",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_SINGLE"
            },
            {
              "First": "3",
              "Second": "SUBJECT_SPYMASTER"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_0",
            "EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_1",
            "EVENTOPTION_STUDY_KINDRED_SPIRITS_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GRADUATE_TAKING_THE_MANTLE",
        "Name": "TEXT_EVENTSTORY_GRADUATE_TAKING_THE_MANTLE_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATE_TAKING_THE_MANTLE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CITY_WITH_GOVERNOR"
            },
            {
              "First": "1",
              "Second": "SUBJECT_STUDY_TACTICS"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_REMOVE_STUDY_TACTICS",
            "NONE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATE_TAKING_THE_MANTLE_OPTION_0",
            "EVENTOPTION_GRADUATE_TAKING_THE_MANTLE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "iPriority": "1",
        "iWeight": "2",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_GRADUATE_A_RAISED_VOICE",
        "Name": "TEXT_EVENTSTORY_GRADUATE_A_RAISED_VOICE_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATE_A_RAISED_VOICE",
        "zBackgroundName": "Birth",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_RHETORIC"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_REMOVE_STUDY_RHETORIC",
            "NONE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATE_A_RAISED_VOICE_OPTION_0",
            "EVENTOPTION_GRADUATE_A_RAISED_VOICE_OPTION_1",
            "EVENTOPTION_GRADUATE_A_RAISED_VOICE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "LawPrereq": "LAW_TYRANNY",
        "iPriority": "1",
        "iWeight": "2",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_DEAR_PARENT_TACTICS",
        "Name": "TEXT_EVENTSTORY_DEAR_PARENT_TITLE",
        "Text": "TEXT_EVENTSTORY_DEAR_PARENT_TACTICS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_TACTICS"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PARENT_OF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEAR_PARENT_TACTICS_NO",
            "EVENTOPTION_DEAR_PARENT_TACTICS_YES"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_DEAR_PARENT_RHETORIC",
        "Name": "TEXT_EVENTSTORY_DEAR_PARENT_TITLE",
        "Text": "TEXT_EVENTSTORY_DEAR_PARENT_RHETORIC",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_RHETORIC"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PARENT_OF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEAR_PARENT_RHETORIC_NO",
            "EVENTOPTION_DEAR_PARENT_RHETORIC_YES"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_DEAR_PARENT_COMMERCE",
        "Name": "TEXT_EVENTSTORY_DEAR_PARENT_TITLE",
        "Text": "TEXT_EVENTSTORY_DEAR_PARENT_COMMERCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_COMMERCE"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PARENT_OF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEAR_PARENT_COMMERCE_NO",
            "EVENTOPTION_DEAR_PARENT_COMMERCE_YES"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_DEAR_PARENT_PHILOSOPHY",
        "Name": "TEXT_EVENTSTORY_DEAR_PARENT_TITLE",
        "Text": "TEXT_EVENTSTORY_DEAR_PARENT_PHILOSOPHY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_PHILOSOPHY"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PARENT_OF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DEAR_PARENT_PHILOSOPHY_NO",
            "EVENTOPTION_DEAR_PARENT_PHILOSOPHY_YES"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_TACTICS_TO_PHILOSOPHY",
        "Name": "TEXT_EVENTSTORY_CHANGE_STUDIES_TITLE",
        "Text": "TEXT_EVENTSTORY_TACTICS_TO_PHILOSOPHY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_TACTICS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TACTICS_TO_PHILOSOPHY_NO",
            "EVENTOPTION_TACTICS_TO_PHILOSOPHY_YES"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_PHILOSOPHY_TO_COMMERCE",
        "Name": "TEXT_EVENTSTORY_CHANGE_STUDIES_TITLE",
        "Text": "TEXT_EVENTSTORY_PHILOSOPHY_TO_COMMERCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_HEIR_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_PHILOSOPHY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PHILOSOPHY_TO_COMMERCE_PUNISH",
            "EVENTOPTION_PHILOSOPHY_TO_COMMERCE_CHANGE",
            "EVENTOPTION_PHILOSOPHY_TO_COMMERCE_TUTOR"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_A_REMARKABLE_YOUTH",
        "Name": "TEXT_EVENTSTORY_A_REMARKABLE_YOUTH_TITLE",
        "Text": "TEXT_EVENTSTORY_A_REMARKABLE_YOUTH",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_NON_ROYAL"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_30"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_ATTRACTED_TO",
              "Third": "0"
            },
            {
              "First": "0",
              "Second": "SUBJECTRELATION_ATTRACTED_TO",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_A_REMARKABLE_YOUTH_NO",
            "EVENTOPTION_A_REMARKABLE_YOUTH_YES"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CAUSE_FOR_WORRY",
        "Name": "TEXT_EVENTSTORY_CAUSE_FOR_WORRY_TITLE",
        "Text": "TEXT_EVENTSTORY_CAUSE_FOR_WORRY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "0",
            "Second": "SUBJECTRELATION_NOT_IN_LOVE_WITH",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CAUSE_FOR_WORRY_IGNORE",
            "EVENTOPTION_CAUSE_FOR_WORRY_INVESTIGATE"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_LOVE_BIRDS_RUMORS",
        "Name": "TEXT_EVENTSTORY_LOVE_BIRDS_RUMORS_TITLE",
        "Text": "TEXT_EVENTSTORY_LOVE_BIRDS_RUMORS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LOVE_BIRDS_RUMORS_IGNORE",
            "EVENTOPTION_LOVE_BIRDS_RUMORS_END"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_CAUSE_FOR_WORRY_INVESTIGATE",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_INFIDELITY",
        "Name": "TEXT_EVENTSTORY_INFIDELITY_TITLE",
        "Text": "TEXT_EVENTSTORY_INFIDELITY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_INFIDELITY_IGNORE",
            "EVENTOPTION_INFIDELITY_IMPRISON"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_LOVE_BIRDS_RUMORS",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_PLEA_FOR_MERCY",
        "Name": "TEXT_EVENTSTORY_PLEA_FOR_MERCY_TITLE",
        "Text": "TEXT_EVENTSTORY_PLEA_FOR_MERCY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_IMPRISONED"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PARENT_OF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PLEA_FOR_MERCY_YES",
            "EVENTOPTION_PLEA_FOR_MERCY_NO"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_GOWNS_OF_SILK",
        "Name": "TEXT_EVENTSTORY_GOWNS_OF_SILK_TITLE",
        "Text": "TEXT_EVENTSTORY_GOWNS_OF_SILK",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ADULT"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_SIBLING_OF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GOWNS_OF_SILK_NO",
            "EVENTOPTION_GOWNS_OF_SILK_YES"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_FAMILY_FIRST",
        "Name": "TEXT_EVENTSTORY_FAMILY_FIRST_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_FIRST",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ADULT"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_SIBLING_OF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_FIRST_YES",
            "EVENTOPTION_FAMILY_FIRST_NO"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_WORD_OF_A_COUP",
        "Name": "TEXT_EVENTSTORY_WORD_OF_A_COUP_TITLE",
        "Text": "TEXT_EVENTSTORY_WORD_OF_A_COUP",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_SIBLING_OF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WORD_OF_A_COUP_INVESTIGATE",
            "EVENTOPTION_WORD_OF_A_COUP_IGNORE"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_WORD_OF_A_COUP_PLOTS_AND_BETRAYALS",
        "Name": "TEXT_EVENTSTORY_WORD_OF_A_COUP_PLOTS_AND_BETRAYALS_TITLE",
        "Text": "TEXT_EVENTSTORY_WORD_OF_A_COUP_PLOTS_AND_BETRAYALS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
            },
            {
              "First": "2",
              "Second": "SUBJECT_GREAT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WORD_OF_A_COUP_PLOTS_AND_BETRAYALS_IMPRISON",
            "EVENTOPTION_WORD_OF_A_COUP_PLOTS_AND_BETRAYALS_PUNISH"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_WORD_OF_A_COUP_INVESTIGATE",
        "iWeight": "1",
        "iProb": "50"
      },
      {
        "zType": "EVENTSTORY_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_INVESTIGATE",
        "Name": "TEXT_EVENTSTORY_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_TITLE",
        "Text": "TEXT_EVENTSTORY_WORD_OF_A_COUP_THE_COUP_SUCCEEDS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
            },
            {
              "First": "2",
              "Second": "SUBJECT_GREAT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_EXILE",
            "EVENTOPTION_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_DIE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_WORD_OF_A_COUP_INVESTIGATE",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_IGNORE",
        "Name": "TEXT_EVENTSTORY_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_TITLE",
        "Text": "TEXT_EVENTSTORY_WORD_OF_A_COUP_THE_COUP_SUCCEEDS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
            },
            {
              "First": "2",
              "Second": "SUBJECT_GREAT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_EXILE",
            "EVENTOPTION_WORD_OF_A_COUP_THE_COUP_SUCCEEDS_DIE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_WORD_OF_A_COUP_IGNORE",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_UNHAPPY_SIBLING",
        "Name": "TEXT_EVENTSTORY_UNHAPPY_SIBLING_TITLE",
        "Text": "TEXT_EVENTSTORY_UNHAPPY_SIBLING",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_UNHAPPY_SIBLING_YES",
            "EVENTOPTION_UNHAPPY_SIBLING_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_WORD_OF_A_COUP_IGNORE",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_DATE_NIGHT",
        "Name": "TEXT_EVENTSTORY_DATE_NIGHT_TITLE",
        "Text": "TEXT_EVENTSTORY_DATE_NIGHT",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "0",
            "Second": "SUBJECTRELATION_NOT_ESTRANGED_FROM",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DATE_NIGHT_NO",
            "EVENTOPTION_DATE_NIGHT_YES"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "1",
        "iRepeatTurns": "40",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_DOMESTIC_DISPUTE",
        "Name": "TEXT_EVENTSTORY_DOMESTIC_DISPUTE_TITLE",
        "Text": "TEXT_EVENTSTORY_DOMESTIC_DISPUTE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "2",
            "Second": "SUBJECT_GREAT"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "0",
              "Second": "SUBJECTRELATION_NOT_ESTRANGED_FROM",
              "Third": "1"
            },
            {
              "First": "1",
              "Second": "SUBJECTRELATION_ATTRACTED_TO",
              "Third": "2"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_ATTRACTED_TO",
              "Third": "1"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DOMESTIC_DISPUTE_YES",
            "EVENTOPTION_DOMESTIC_DISPUTE_NO"
          ]
        },
        "Class": "EVENTCLASS_LEADER_SPOUSE",
        "iWeight": "2",
        "iRepeatTurns": "75",
        "bModal": "1"
      },
      {
        "zType": "EVENTSTORY_SIGNS_OF_LUNACY",
        "Name": "TEXT_EVENTSTORY_SIGNS_OF_LUNACY_TITLE",
        "Text": "TEXT_EVENTSTORY_SIGNS_OF_LUNACY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_FERTILE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_FERTILE"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "0",
              "Second": "SUBJECTRELATION_JEALOUS_ABOUT",
              "Third": "1"
            },
            {
              "First": "1",
              "Second": "SUBJECTRELATION_ATTRACTED_TO",
              "Third": "2"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_ATTRACTED_TO",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SIGNS_OF_LUNACY_REMOVE",
            "EVENTOPTION_SIGNS_OF_LUNACY_PHYSICIANS"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_WORRISOME_MATCH",
        "Name": "TEXT_EVENTSTORY_WORRISOME_MATCH_TITLE",
        "Text": "TEXT_EVENTSTORY_WORRISOME_MATCH",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "2",
            "Second": "SUBJECT_LOW_WISDOM"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WORRISOME_MATCH_ALLOW",
            "EVENTOPTION_WORRISOME_MATCH_PREVENT"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_IMPUDENT_MATCH",
        "Name": "TEXT_EVENTSTORY_IMPUDENT_MATCH_TITLE",
        "Text": "TEXT_EVENTSTORY_IMPUDENT_MATCH",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_CHARACTER_PLAYER_THEM",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_DIFF",
              "Third": "1"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_WAR",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_IMPUDENT_MATCH_STOP",
            "EVENTOPTION_IMPUDENT_MATCH_ALLOW"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_A_LITTLE_PUSHBACK",
        "Name": "TEXT_EVENTSTORY_A_LITTLE_PUSHBACK_TITLE",
        "Text": "TEXT_EVENTSTORY_A_LITTLE_PUSHBACK",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_A_LITTLE_PUSHBACK_YES",
            "EVENTOPTION_A_LITTLE_PUSHBACK_NO"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_VERY_CHARMING",
        "Name": "TEXT_EVENTSTORY_VERY_CHARMING_TITLE",
        "Text": "TEXT_EVENTSTORY_VERY_CHARMING",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_VERY_CHARMING",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_MALE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_NOT_GAY"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_VERY_CHARMING_YES",
            "EVENTOPTION_VERY_CHARMING_NO"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_LOVE_AFFAIR",
        "Name": "TEXT_EVENTSTORY_LOVE_AFFAIR_TITLE",
        "Text": "TEXT_EVENTSTORY_LOVE_AFFAIR",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_LOVER_OF_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LOVE_AFFAIR_KEEP",
            "EVENTOPTION_LOVE_AFFAIR_END"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_STUDY_FRIENDLY_VISIT",
        "Name": "TEXT_EVENTSTORY_STUDY_FRIENDLY_VISIT_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_FRIENDLY_VISIT",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_ANY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_FRIENDLY_VISIT_OPTION_0",
            "EVENTOPTION_STUDY_FRIENDLY_VISIT_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GRADUATE_A_FAMILIAR_FACE",
        "Name": "TEXT_EVENTSTORY_GRADUATE_A_FAMILIAR_FACE_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATE_A_FAMILIAR_FACE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_TACTICS"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_REMOVE_STUDY_TACTICS",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATE_A_FAMILIAR_FACE_OPTION_0",
            "EVENTOPTION_GRADUATE_A_FAMILIAR_FACE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iPriority": "1",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "15",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_GRADUATE_THE_RETURN_OF_CHARACTER",
        "Name": "TEXT_EVENTSTORY_GRADUATE_THE_RETURN_OF_CHARACTER_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATE_THE_RETURN_OF_CHARACTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_RHETORIC"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_REMOVE_STUDY_RHETORIC"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATE_THE_RETURN_OF_CHARACTER_OPTION_0",
            "EVENTOPTION_GRADUATE_THE_RETURN_OF_CHARACTER_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iPriority": "1",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "15",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_A_SCOUNDREL",
        "Name": "TEXT_EVENTSTORY_A_SCOUNDREL_TITLE",
        "Text": "TEXT_EVENTSTORY_A_SCOUNDREL",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_RELIGION_STATE"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_DEBAUCHED"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_A_SCOUNDREL_EXILE",
            "EVENTOPTION_A_SCOUNDREL_RESTORE"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CHANGE_OF_HEART",
        "Name": "TEXT_EVENTSTORY_CHANGE_OF_HEART_TITLE",
        "Text": "TEXT_EVENTSTORY_CHANGE_OF_HEART",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_IN_LOVE_WITH",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHANGE_OF_HEART_STOP",
            "EVENTOPTION_CHANGE_OF_HEART_TALK"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_A_FRUSTRATING_OUTCOME",
        "Name": "TEXT_EVENTSTORY_A_FRUSTRATING_OUTCOME_TITLE",
        "Text": "TEXT_EVENTSTORY_A_FRUSTRATING_OUTCOME",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_IN_LOVE_WITH",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_A_FRUSTRATING_OUTCOME_CUT_OFF",
            "EVENTOPTION_A_FRUSTRATING_OUTCOME_FRUSTRATED"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_CHANGE_OF_HEART_TALK",
        "iWeight": "2",
        "iProb": "20"
      },
      {
        "zType": "EVENTSTORY_GRADUATION_A_CITY_CELEBRATES",
        "Name": "TEXT_EVENTSTORY_GRADUATION_A_CITY_CELEBRATES_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATION_A_CITY_CELEBRATES",
        "zBackgroundName": "Birth",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_COMMERCE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_REMOVE_STUDY_COMMERCE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATION_A_CITY_CELEBRATES_OPTION_0",
            "EVENTOPTION_GRADUATION_A_CITY_CELEBERATES_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iPriority": "1",
        "iWeight": "2",
        "iRepeatTurns": "40",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_GRADUATION_HOMECOMING",
        "Name": "TEXT_EVENTSTORY_GRADUATION_HOMECOMING_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATION_HOMECOMING",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_PHILOSOPHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_REMOVE_STUDY_PHILOSOPHY"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATION_HOMECOMING_OPTION_0",
            "EVENTOPTION_GRADUATION_HOMECOMING_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iPriority": "1",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "15",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_DISMISSAL",
        "Name": "TEXT_EVENTSTORY_DISMISSAL_TITLE",
        "Text": "TEXT_EVENTSTORY_DISMISSAL",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_SPOUSE_OF_LEADER_US"
            },
            {
              "First": "1",
              "Second": "SUBJECT_GOVERNOR"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "0",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DISMISSAL_VASSALAGE",
            "EVENTOPTION_DISMISSAL_CENTRALIZATION",
            "EVENTOPTION_DISMISSAL_NONE"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40",
        "aeLawInvalid": {
          "zValue": [
            "LAW_CENTRALIZATION",
            "LAW_VASSALAGE"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_CHARACTER_SPECIAL_RECOGNITION_01",
        "Name": "TEXT_EVENTSTORY_CHARACTER_SPECIAL_RECOGNITION_01_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_SPECIAL_RECOGNITION_01",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_0",
            "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_1",
            "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_01_OPTION_2"
          ]
        },
        "iImageSubject": "1",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_SPECIAL_RECOGNITION_02",
        "Name": "TEXT_EVENTSTORY_CHARACTER_SPECIAL_RECOGNITION_02_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_SPECIAL_RECOGNITION_02",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ARCHON"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_0",
            "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_1",
            "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_02_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_SPECIAL_RECOGNITION_01",
        "iEventLinkTurns": "2",
        "iWeight": "1",
        "iProb": "20"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_SPECIAL_RECOGNITION_03",
        "Name": "TEXT_EVENTSTORY_CHARACTER_SPECIAL_RECOGNITION_03_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_SPECIAL_RECOGNITION_03",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ARCHON"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_03_OPTION_0",
            "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_03_OPTION_1",
            "EVENTOPTION_CHARACTER_SPECIAL_RECOGNITION_03_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_SPECIAL_RECOGNITION_02",
        "iWeight": "1",
        "iProb": "20"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_NEW_FRIENDS_01",
        "Name": "TEXT_EVENTSTORY_CHARACTER_NEW_FRIENDS_01_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_NEW_FRIENDS_01",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_CHARACTER_MAX_CAUTIOUS"
            },
            {
              "First": "2",
              "Second": "SUBJECT_FAMILY_MAX_CAUTIOUS"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_0",
            "EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_1",
            "EVENTOPTION_CHARACTER_NEW_FRIENDS_01_OPTION_2"
          ]
        },
        "iImageSubject": "1",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_A_RULER_FALLS",
        "Name": "TEXT_EVENTSTORY_CHARACTER_A_RULER_FALLS_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_A_RULER_FALLS",
        "zEventURL": "https://en.wikipedia.org/wiki/Assassination_of_Julius_Caesar",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_LEADER_THEM"
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_DOOM_CHARACTER"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_A_RULER_FALLS_OPTION_0",
            "EVENTOPTION_CHARACTER_A_RULER_FALLS_OPTION_1",
            "EVENTOPTION_CHARACTER_A_RULER_FALLS_OPTION_2"
          ]
        },
        "iImageSubject": "1",
        "iMinLeader": "2",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_ORIGIN_OF_THE_STATE",
        "Name": "TEXT_EVENTSTORY_CULTURE_ORIGIN_OF_THE_STATE_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_ORIGIN_OF_THE_STATE",
        "zEventURL": "https://en.wikipedia.org/wiki/Origines",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CATO"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_ORIGIN_OF_THE_STATE_OPTION_0",
            "EVENTOPTION_CULTURE_ORIGIN_OF_THE_STATE_OPTION_1",
            "EVENTOPTION_CULTURE_ORIGIN_OF_THE_STATE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iImageSubject": "2",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_A_FIERY_RIDE",
        "Name": "TEXT_EVENTSTORY_CULTURE_A_FIERY_RIDE_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_A_FIERY_RIDE",
        "zEventURL": "https://en.wikipedia.org/wiki/Bendis",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_0",
            "EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_2",
            "EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_3",
            "EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_4",
            "EVENTOPTION_CULTURE_A_FIERY_RIDE_OPTION_5"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_PRIZE_HORSE",
        "Name": "TEXT_EVENTSTORY_CULTURE_PRIZE_HORSE_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_PRIZE_HORSE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_CULTURE_PRIZE_HORSE_OPTION_0"
        },
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_CULTURE_A_FIERY_RIDE_01",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_THE_LOSER",
        "Name": "TEXT_EVENTSTORY_CULTURE_THE_LOSER_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_THE_LOSER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_CULTURE_THE_LOSER_OPTION_0"
        },
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_CULTURE_A_FIERY_RIDE_01",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_CELEBRATION_CHAMPIONS",
        "Name": "TEXT_EVENTSTORY_CULTURE_CELEBRATION_CHAMPIONS_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_CELEBRATION_CHAMPIONS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_CULTURE_CELEBRATION_CHAMPIONS_OPTION_0"
        },
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_CULTURE_A_FIERY_RIDE_02",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_STUDY_GOOD_NEWS",
        "Name": "TEXT_EVENTSTORY_STUDY_GOOD_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_GOOD_NEWS",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_STUDY_ANY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_GOOD_NEWS_OPTION_0",
            "EVENTOPTION_STUDY_GOOD_NEWS_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_STUDY",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_STUDY_TACTICS_ARCHETYPES",
        "Name": "TEXT_EVENTSTORY_STUDY_TACTICS_ARCHETYPES_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_TACTICS_ARCHETYPES",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_NO_ARCHETYPE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_TACTICS"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_REMOVE_STUDY_TACTICS"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_TACTICS_ARCHETYPES",
            "EVENTOPTION_STUDY_TACTICS_ARCHETYPES"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iPriority": "2",
        "iWeight": "1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_STUDY_RHETORIC_ARCHETYPES",
        "Name": "TEXT_EVENTSTORY_STUDY_RHETORIC_ARCHETYPES_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_RHETORIC_ARCHETYPES",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_NO_ARCHETYPE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_RHETORIC"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_REMOVE_STUDY_RHETORIC"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_RHETORIC_ARCHETYPES",
            "EVENTOPTION_STUDY_RHETORIC_ARCHETYPES"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iPriority": "2",
        "iWeight": "1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_STUDY_COMMERCE_ARCHETYPES",
        "Name": "TEXT_EVENTSTORY_STUDY_COMMERCE_ARCHETYPES_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_COMMERCE_ARCHETYPES",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_NO_ARCHETYPE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_COMMERCE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_REMOVE_STUDY_COMMERCE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_COMMERCE_ARCHETYPES",
            "EVENTOPTION_STUDY_COMMERCE_ARCHETYPES"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iPriority": "2",
        "iWeight": "1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_STUDY_PHILOSOPHY_ARCHETYPES",
        "Name": "TEXT_EVENTSTORY_STUDY_PHILOSOPHY_ARCHETYPES_TITLE",
        "Text": "TEXT_EVENTSTORY_STUDY_PHILOSOPHY_ARCHETYPES",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_NO_ARCHETYPE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_PHILOSOPHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_REMOVE_STUDY_PHILOSOPHY"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STUDY_PHILOSOPHY_ARCHETYPES",
            "EVENTOPTION_STUDY_PHILOSOPHY_ARCHETYPES"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iPriority": "2",
        "iWeight": "1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_SCHEMER_SUCCESSION",
        "Name": "TEXT_EVENTSTORY_SCHEMER_SUCCESSION_TITLE",
        "Text": "TEXT_EVENTSTORY_SCHEMER_SUCCESSION",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_SUCCESSION_US",
            "SUBJECT_SUCCESSION_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_SCHEMER"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "0",
            "Second": "SUBJECTRELATION_BEHIND_SUCCESSION",
            "Third": "1"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_SCHEMER_SUCCESSION_OPTION_0"
        },
        "iWeight": "2",
        "iRepeatTurns": "5"
      },
      {
        "zType": "EVENTSTORY_SCHEMER_SUCCESSION_SPOUSE",
        "Name": "TEXT_EVENTSTORY_SCHEMER_SUCCESSION_SPOUSE_TITLE",
        "Text": "TEXT_EVENTSTORY_SCHEMER_SUCCESSION_SPOUSE",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_SUCCESSION_US",
            "SUBJECT_SUCCESSION_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "2",
            "Second": "SUBJECT_SCHEMER"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "0",
              "Second": "SUBJECTRELATION_BEHIND_SUCCESSION",
              "Third": "1"
            },
            {
              "First": "0",
              "Second": "SUBJECTRELATION_SPOUSE_OF",
              "Third": "2"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_KILL_CHARACTER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_SCHEMER_SUCCESSION_SPOUSE_OPTION_0"
        },
        "iWeight": "4",
        "iRepeatTurns": "5"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_BITE_THE_HAND",
        "Name": "TEXT_EVENTSTORY_CHARACTER_BITE_THE_HAND_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_BITE_THE_HAND",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_COURTIER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CITY_DISCONTENT_MODERATE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_0",
            "EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_1",
            "EVENTOPTION_CHARACTER_BITE_THE_HAND_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PAY_TO_PLAY",
        "Name": "TEXT_EVENTSTORY_PAY_TO_PLAY_TITLE",
        "Text": "TEXT_EVENTSTORY_PAY_TO_PLAY",
        "zEventURL": "https://en.wikipedia.org/wiki/Gylippus",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_COURTIER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHARACTER_MAX_UPSET"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PAY_TO_PLAY_OPTION_0",
            "EVENTOPTION_PAY_TO_PLAY_OPTION_1",
            "EVENTOPTION_PAY_TO_PLAY_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_FOREIGN_BRIBES",
        "Name": "TEXT_EVENTSTORY_CHARACTER_FOREIGN_BRIBES_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_FOREIGN_BRIBES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_COURTIER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHARACTER_MAX_FURIOUS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_0",
            "EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_1",
            "EVENTOPTION_CHARACTER_FOREIGN_BRIBES_OPTION_2"
          ]
        },
        "iWeight": "3",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_SYCOPHANT",
        "Name": "TEXT_EVENTSTORY_CHARACTER_SYCOPHANT_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_SYCOPHANT",
        "zEventURL": "https://en.wikipedia.org/wiki/Cleon",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_COURTIER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_FURIOUS"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CORRUPT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_SPYMASTER"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_0",
            "EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_1",
            "EVENTOPTION_CHARACTER_SYCOPHANT_OPTION_2"
          ]
        },
        "iWeight": "3",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_PREEMPTIVE_STRIKE",
        "Name": "TEXT_EVENTSTORY_CHARACTER_PREEMPTIVE_STRIKE_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_PREEMPTIVE_STRIKE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_FURIOUS"
            },
            {
              "First": "0",
              "Second": "SUBJECT_BOLD"
            },
            {
              "First": "2",
              "Second": "SUBJECT_BARBARIAN_PEACE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_PREEMPTIVE_STRIKE_OPTION_0",
            "EVENTOPTION_CHARACTER_PREEMPTIVE_STRIKE_OPTION_1",
            "EVENTOPTION_CHARACTER_PREEMPTIVE_STRIKE_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_THE_OLD_GUARD",
        "Name": "TEXT_EVENTSTORY_CHARACTER_THE_OLD_GUARD_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_THE_OLD_GUARD",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_FURIOUS"
            },
            {
              "First": "0",
              "Second": "SUBJECT_GREAT_SOLDIER"
            },
            {
              "First": "1",
              "Second": "SUBJECT_GREAT_SOLDIER"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_0",
            "EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_1",
            "EVENTOPTION_CHARACTER_THE_OLD_GUARD_OPTION_2"
          ]
        },
        "iWeight": "3",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_AFFAIRS_OF_THE_HEART",
        "Name": "TEXT_EVENTSTORY_CHARACTER_AFFAIRS_OF_THE_HEART_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_AFFAIRS_OF_THE_HEART",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_AFFAIRS_OF_THE_HEART_OPTION_0",
            "EVENTOPTION_CHARACTER_AFFAIRS_OF_THE_HEART_OPTION_1",
            "EVENTOPTION_CHARACTER_AFFAIRS_OF_THE_HEART_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_WICKED_CHARGES",
        "Name": "TEXT_EVENTSTORY_CHARACTER_WICKED_CHARGES_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_WICKED_CHARGES",
        "zEventURL": "https://en.wikipedia.org/wiki/Roman_censor",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_0",
            "EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_1",
            "EVENTOPTION_CHARACTER_WICKED_CHARGES_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_DIVORCE",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_NEEDLESS_BLOODSHED",
        "Name": "TEXT_EVENTSTORY_CHARACTER_NEEDLESS_BLOODSHED_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_NEEDLESS_BLOODSHED",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_UNIT_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
            },
            {
              "First": "1",
              "Second": "SUBJECT_UNIT_MELEE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_0",
            "EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_1",
            "EVENTOPTION_CHARACTER_NEEDLESS_BLOODSHED_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_GENERAL_UNIT_KILLED",
        "iWeight": "3",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_WARMONGERS",
        "Name": "TEXT_EVENTSTORY_CHARACTER_WARMONGERS_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_WARMONGERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_WARMONGERS_OPTION_0",
            "EVENTOPTION_CHARACTER_WARMONGERS_OPTION_1",
            "EVENTOPTION_CHARACTER_WARMONGERS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iWeight": "3",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_THE_SPEECHES",
        "Name": "TEXT_EVENTSTORY_CHARACTER_THE_SPEECHES_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_THE_SPEECHES",
        "zBackgroundName": "decree",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_0",
            "EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_1",
            "EVENTOPTION_CHARACTER_THE_SPEECHES_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_US",
        "iWeight": "3",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_BIRTHRIGHT",
        "Name": "TEXT_EVENTSTORY_CHARACTER_BIRTHRIGHT_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_BIRTHRIGHT",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_SIBLING_OF_LEADER_US"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_BIRTHRIGHT_OPTION_0",
            "EVENTOPTION_CHARACTER_BIRTHRIGHT_OPTION_1",
            "EVENTOPTION_CHARACTER_BIRTHRIGHT_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_US",
        "iWeight": "3",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_STOP_THE_FIGHTING",
        "Name": "TEXT_EVENTSTORY_CHARACTER_STOP_THE_FIGHTING_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_STOP_THE_FIGHTING",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_WAR"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_0",
            "EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_1",
            "EVENTOPTION_CHARACTER_STOP_THE_FIGHTING_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_ENEMY_COUNSEL",
        "Name": "TEXT_EVENTSTORY_CHARACTER_ENEMY_COUNSEL_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_ENEMY_COUNSEL",
        "zBackgroundName": "Captured_Soldiers",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ON_THE_RUN"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_ENEMY_COUNSEL_OPTION_0",
            "EVENTOPTION_CHARACTER_ENEMY_COUNSEL_OPTION_1",
            "EVENTOPTION_CHARACTER_ENEMY_COUNSEL_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CAPTURED",
        "iTriggerSubject": "2",
        "iWeight": "4",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_AUDITED",
        "Name": "TEXT_EVENTSTORY_CHARACTER_AUDITED_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_AUDITED",
        "zBackgroundName": "decree",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
            },
            {
              "First": "1",
              "Second": "SUBJECT_EXTRAVAGANT"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_AUDITED_OPTION_0",
            "EVENTOPTION_CHARACTER_AUDITED_OPTION_1",
            "EVENTOPTION_CHARACTER_AUDITED_OPTION_2"
          ]
        },
        "iWeight": "3",
        "iRepeatTurns": "-1",
        "bIgnoreOptions": "1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_RULER_FOR_LIFE",
        "Name": "TEXT_EVENTSTORY_CHARACTER_RULER_FOR_LIFE_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_RULER_FOR_LIFE",
        "zBackgroundName": "decree",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
            },
            {
              "First": "1",
              "Second": "SUBJECT_OLD"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ORATOR"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_0",
            "EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_1",
            "EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_2",
            "EVENTOPTION_CHARACTER_RULER_FOR_LIFE_OPTION_3"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_LEADER_ASCENSION",
        "Name": "TEXT_EVENTSTORY_LEADER_ASCENSION_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_ASCENSION",
        "zAudioTrigger": "AUDIO_UI_EVENT_WEARY_TRAVELER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_MAX_NEAR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LEADER_ASCENSION_OPTION_0",
            "EVENTOPTION_LEADER_ASCENSION_OPTION_1",
            "EVENTOPTION_LEADER_ASCENSION_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_THEM",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_LOVE_KILLS",
        "Name": "TEXT_EVENTSTORY_CHARACTER_LOVE_KILLS_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_LOVE_KILLS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_DEAD_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_0",
            "EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_1",
            "EVENTOPTION_CHARACTER_LOVE_KILLS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_DEATH",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_FAMILY_FEUD",
        "Name": "TEXT_EVENTSTORY_CHARACTER_FAMILY_FEUD_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_FAMILY_FEUD",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
            },
            {
              "First": "1",
              "Second": "SUBJECT_LEADER_US"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "0",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_0",
            "EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_1",
            "EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_2",
            "EVENTOPTION_CHARACTER_FAMILY_FEUD_OPTION_3"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_GREEDY_AMBITION",
        "Name": "TEXT_EVENTSTORY_CHARACTER_GREEDY_AMBITION_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_GREEDY_AMBITION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREEDY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_GREEDY_AMBITION",
            "EVENTOPTION_CHARACTER_GREEDY_AMBITION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_BUILDER_AMBITION",
        "Name": "TEXT_EVENTSTORY_CHARACTER_BUILDER_AMBITION_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_BUILDER_AMBITION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_BUILDER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_BUILDER_AMBITION",
            "EVENTOPTION_CHARACTER_BUILDER_AMBITION"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_LEADER_ARCHETYPE",
        "Name": "TEXT_EVENTSTORY_LEADER_ARCHETYPE_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_ARCHETYPE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NO_ARCHETYPE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LEADER_ARCHETYPE",
            "EVENTOPTION_LEADER_ARCHETYPE",
            "EVENTOPTION_LEADER_ARCHETYPE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_EXPLORING_ENDS",
        "Name": "TEXT_EVENTSTORY_EXPLORING_ENDS_TITLE",
        "Text": "TEXT_EVENTSTORY_EXPLORING_ENDS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_EXPLORING"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXPLORING_ENDS",
            "EVENTOPTION_EXPLORING_ENDS",
            "EVENTOPTION_EXPLORING_CONTINUES"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iWeight": "1",
        "iProb": "20"
      },
      {
        "zType": "EVENTSTORY_LEADER_DEATH_BASIC_01",
        "Name": "TEXT_EVENTSTORY_LEADER_DEATH_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_DEATH_BASIC_01",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_WAS_LEADER_DEAD_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_LEADER_DEATH"
        },
        "Trigger": "EVENTTRIGGER_DEATH",
        "iWeight": "3",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_LEADER_DEATH_BASIC_02",
        "Name": "TEXT_EVENTSTORY_LEADER_DEATH_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_DEATH_BASIC_02",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_WAS_LEADER_DEAD_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_LEADER_DEATH"
        },
        "Trigger": "EVENTTRIGGER_DEATH",
        "iWeight": "3",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_LEADER_DEATH_BASIC_03",
        "Name": "TEXT_EVENTSTORY_LEADER_DEATH_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_DEATH_BASIC_03",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_WAS_LEADER_DEAD_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_LEADER_DEATH"
        },
        "Trigger": "EVENTTRIGGER_DEATH",
        "iWeight": "3",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_LEADER_DEATH_WAR_01",
        "Name": "TEXT_EVENTSTORY_LEADER_DEATH_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_DEATH_WAR_01",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_WAS_LEADER_DEAD_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_LEADER_WAR"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_LEADER_DEATH"
        },
        "Trigger": "EVENTTRIGGER_DEATH",
        "iWeight": "3",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_LEADER_DEATH_WAR_02",
        "Name": "TEXT_EVENTSTORY_LEADER_DEATH_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_DEATH_WAR_02",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_WAS_LEADER_DEAD_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_LEADER_WAR"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_LEADER_DEATH"
        },
        "Trigger": "EVENTTRIGGER_DEATH",
        "iWeight": "3",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_LEADER_DEATH_EXPLORING",
        "Name": "TEXT_EVENTSTORY_LEADER_DEATH_EXPLORING_TITLE",
        "Text": "TEXT_EVENTSTORY_LEADER_DEATH_EXPLORING",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_WAS_LEADER_DEAD_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_EXPLORING"
            }
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_LEADER_DEATH"
        },
        "Trigger": "EVENTTRIGGER_DEATH",
        "iWeight": "3",
        "iRepeatTurns": "25"
      },
      {
        "zType": "EVENTSTORY_FAMILY_CHOSEN_HEIR",
        "Name": "TEXT_EVENTSTORY_FAMILY_CHOSEN_HEIR_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_CHOSEN_HEIR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US",
            "SUBJECT_SUCCESSION_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_FAMILY"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CHARACTER_FAMILY"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_CHOSEN_HEIR_YES",
            "EVENTOPTION_FAMILY_CHOSEN_HEIR_NO"
          ]
        },
        "iImageSubject": "1",
        "iWeight": "2"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_MAP_DISPUTE",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_MAP_DISPUTE_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_MAP_DISPUTE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN",
            "SUBJECT_HEIR_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ESTRANGED_FROM_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_BARBARIAN_PEACE_OR_TRUCE",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_2",
            "EVENTOPTION_RELATIONSHIP_MAP_DISPUTE_OPTION_3"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_DEATH_COMES",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_DEATH_COMES_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_DEATH_COMES",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ESTRANGED_FROM_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_CHILD_OF",
              "Third": "0"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTSTORY_RELATIONSHIP_DEATH_COMES_CHARACTER_2"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_DEATH_COMES_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_DEATH_COMES_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_RELATIONSHIP_AT_DEATHS_DOOR",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_A_CALL_FOR_HELP",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_A_CALL_FOR_HELP_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_A_CALL_FOR_HELP",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ESTRANGED_FROM_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_WAR",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_DIFF",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_2",
            "EVENTOPTION_RELATIONSHIP_A_CALL_FOR_HELP_OPTION_3"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_A_PERSONAL_LETTER",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_A_PERSONAL_LETTER_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_A_PERSONAL_LETTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ESTRANGED_FROM_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTSTORY_RELATIONSHIP_A_PERSONAL_LETTER_CHARACTER_1"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_2",
            "EVENTOPTION_RELATIONSHIP_A_PERSONAL_LETTER_OPTION_3"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_THE_INSIDER",
        "Name": "TEXT_EVENTSTORY_THE_INSIDER_TITLE",
        "Text": "TEXT_EVENTSTORY_THE_INSIDER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_VENGEFUL_AGAINST_LEADER_US"
            },
            {
              "First": "2",
              "Second": "SUBJECT_COURTIER_US"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "2"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_THE_INSIDER_OPTION_0",
            "EVENTOPTION_THE_INSIDER_OPTION_1",
            "EVENTOPTION_THE_INSIDER_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iImageSubject": "2",
        "iPriority": "10",
        "iWeight": "1",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_INTRUDER_IN_THE_PALACE",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_INTRUDER_IN_THE_PALACE_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_INTRUDER_IN_THE_PALACE",
        "zBackgroundName": "MudFight",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_HEIR_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_VENGEFUL_AGAINST_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_INTRUDER_IN_THE_PALACE_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iImageSubject": "2",
        "iPriority": "10",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_VENGEANCE_FROM_AFAR",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_VENGEANCE_FROM_AFAR_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_VENGEANCE_FROM_AFAR",
        "zBackgroundName": "Funeral",
        "zAudioTrigger": "AUDIO_UI_EVENT_OPEN_THE_TOMB",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_HEIR_THEM"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTSTORY_RELATIONSHIP_VENGEANCE_FROM_AFAR_CHARACTER_0",
            "NONE",
            "NONE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_VENGEANCE_FROM_AFAR_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iImageSubject": "3",
        "EventLinkPrereq": "EVENTLINK_RELATIONSHIP_PALACE_INTRUDER",
        "iMinTurns": "1",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_A_FALLEN_RIVAL",
        "Name": "TEXT_EVENTSTORY_A_FALLEN_RIVAL_TITLE",
        "Text": "TEXT_EVENTSTORY_A_FALLEN_RIVAL",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_HEIR_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CHILD_OF",
            "Third": "0"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_KILL_CHARACTER",
            "NONE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_A_FALLEN_RIVAL_OPTION_0",
            "EVENTOPTION_A_FALLEN_RIVAL_OPTION_1",
            "EVENTOPTION_A_FALLEN_RIVAL_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_THE_STEWARD",
        "Name": "TEXT_EVENTSTORY_CHARACTER_THE_STEWARD_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_THE_STEWARD",
        "zEventURL": "https://en.wikipedia.org/wiki/Senenmut",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_TUTOR_EGYPT_SENENMUT",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "3",
            "Second": "SUBJECT_PLAYER_EGYPT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_THE_STEWARD_OPTION_0",
            "EVENTOPTION_CHARACTER_THE_STEWARD_OPTION_1"
          ]
        },
        "iImageSubject": "1",
        "iMinLeader": "2",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_A_NOBLE_UPBRINGING",
        "Name": "TEXT_EVENTSTORY_CHARACTER_A_NOBLE_UPBRINGING_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_A_NOBLE_UPBRINGING",
        "zEventURL": "https://en.wikipedia.org/wiki/Cleopatra_Selene_II",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TUTOR_EGYPT_CLEOPATRA_SELENE",
            "SUBJECT_PLAYER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_PLAYER_EGYPT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CAPITAL_US"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_0",
            "EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_1",
            "EVENTOPTION_CHARACTER_A_NOBLE_UPBRINGING_OPTION_2"
          ]
        },
        "iMinLeader": "2",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_THE_MAXIMS_OF_PTAHHOTEP",
        "Name": "TEXT_EVENTSTORY_THE_MAXIMS_OF_PTAHHOTEP_TITLE",
        "Text": "TEXT_EVENTSTORY_THE_MAXIMS_OF_PTAHHOTEP",
        "zEventURL": "https://en.wikipedia.org/wiki/Ptahhotep",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_TUTOR_EGYPT_PTAHHOTEP",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "2",
            "Second": "SUBJECT_PLAYER_EGYPT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_THE_MAXIMS_OF_PTAHHOTEP_OPTION_0",
            "EVENTOPTION_THE_MAXIMS_OF_PTAHHOTEP_OPTION_1",
            "EVENTOPTION_THE_MAXIMS_OF_PTAHHOTEP_OPTION_2"
          ]
        },
        "iImageSubject": "1",
        "iMinLeader": "2",
        "iPriority": "2",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TUTOR_OUTDOOR_LESSON",
        "Name": "TEXT_EVENTSTORY_TUTOR_OUTDOOR_LESSON_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTOR_OUTDOOR_LESSON",
        "zBackgroundName": "childandfather",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GREAT_SOLDIER"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CAPITAL_US"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TUTOR_OUTDOOR_LESSON_OPTION_0",
            "EVENTOPTION_TUTOR_OUTDOOR_LESSON_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_TUTOR",
        "iTriggerExtra": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_TUTOR_ART_OF_WAR",
        "Name": "TEXT_EVENTSTORY_TUTOR_ART_OF_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTOR_ART_OF_WAR",
        "zBackgroundName": "childandfather",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_SOLDIER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TUTOR_ART_OF_WAR_OPTION_0",
            "EVENTOPTION_TUTOR_ART_OF_WAR_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_TUTOR",
        "iTriggerExtra": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_TUTOR_COMBAT_TRAINING",
        "Name": "TEXT_EVENTSTORY_TUTOR_COMBAT_TRAINING_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTOR_COMBAT_TRAINING",
        "zBackgroundName": "childandfather",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_SOLDIER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TUTOR_COMBAT_TRAINING_OPTION_0",
            "EVENTOPTION_TUTOR_COMBAT_TRAINING_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_TUTOR",
        "iTriggerExtra": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_TUTOR_MONEY_MANAGEMENT",
        "Name": "TEXT_EVENTSTORY_TUTOR_MONEY_MANAGEMENT_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTOR_MONEY_MANAGEMENT",
        "zBackgroundName": "childandfather",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_MERCHANT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TUTOR_MONEY_MANAGEMENT_OPTION_0",
            "EVENTOPTION_TUTOR_MONEY_MANAGEMENT_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_TUTOR",
        "iTriggerExtra": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_TUTOR_TRADE_NEGOTIATIONS",
        "Name": "TEXT_EVENTSTORY_TUTOR_TRADE_NEGOTIATIONS_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTOR_TRADE_NEGOTIATIONS",
        "zBackgroundName": "childandfather",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GREAT_MERCHANT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_PLAYER_PEACE_OR_TRUCE"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTSTORY_TUTOR_TRADE_NEGOTIATIONS_PLAYER"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TUTOR_TRADE_NEGOTIATIONS_OPTION_0",
            "EVENTOPTION_TUTOR_TRADE_NEGOTIATIONS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_TUTOR",
        "iTriggerExtra": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_TUTOR_HANDS_DIRTY",
        "Name": "TEXT_EVENTSTORY_TUTOR_HANDS_DIRTY_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTOR_HANDS_DIRTY",
        "zBackgroundName": "childandfather",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_SCIENTIST"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TUTOR_HANDS_DIRTY_OPTION_0",
            "EVENTOPTION_TUTOR_HANDS_DIRTY_OPTION_1",
            "EVENTOPTION_TUTOR_HANDS_DIRTY_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_TUTOR",
        "iTriggerExtra": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_TUTOR_THE_LION",
        "Name": "TEXT_EVENTSTORY_TUTOR_THE_LION_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTOR_THE_LION",
        "zBackgroundName": "childandfather",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_SCIENTIST"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TUTOR_THE_LION_OPTION_0",
            "EVENTOPTION_TUTOR_THE_LION_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_TUTOR",
        "iWeight": "1",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_TUTOR_ACTS_OF_CHARITY",
        "Name": "TEXT_EVENTSTORY_TUTOR_ACTS_OF_CHARITY_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTOR_ACTS_OF_CHARITY",
        "zBackgroundName": "childandfather",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GREAT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CAPITAL_US"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_DISCONTENT_LOSS_SMALL"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TUTOR_ACTS_OF_CHARITY_OPTION_0",
            "EVENTOPTION_TUTOR_ACTS_OF_CHARITY_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_TUTOR",
        "iTriggerExtra": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_TUTOR_DAY_IN_COURT",
        "Name": "TEXT_EVENTSTORY_TUTOR_DAY_IN_COURT_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTOR_DAY_IN_COURT",
        "zBackgroundName": "childandfather",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_GREAT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_HEIR_US"
            },
            {
              "First": "2",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTSTORY_TUTOR_DAY_IN_COURT_CHARACTER_1",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TUTOR_DAY_IN_COURT_OPTION_0",
            "EVENTOPTION_TUTOR_DAY_IN_COURT_OPTION_1",
            "EVENTOPTION_TUTOR_DAY_IN_COURT_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_TUTOR",
        "iTriggerExtra": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_TUTOR_BYSTANDER",
        "Name": "TEXT_EVENTSTORY_TUTOR_BYSTANDER_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTOR_BYSTANDER",
        "zBackgroundName": "childandfather",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TUTOR_BYSTANDER_OPTION_0",
            "EVENTOPTION_TUTOR_BYSTANDER_OPTION_1",
            "EVENTOPTION_TUTOR_BYSTANDER_OPTION_2",
            "EVENTOPTION_TUTOR_BYSTANDER_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_TUTOR",
        "iTriggerExtra": "1",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_AT_DEATHS_DOOR",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_AT_DEATHS_DOOR_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_AT_DEATHS_DOOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ESTRANGED_FROM_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_CHILD_OF",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_2",
            "EVENTOPTION_RELATIONSHIP_AT_DEATHS_DOOR_OPTION_3"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_HEIR_SULKING_HEIR",
        "Name": "TEXT_EVENTSTORY_HEIR_SULKING_HEIR_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_SULKING_HEIR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_LOW_CHARISMA"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_SULKING_HEIR_OPTION_0",
            "EVENTOPTION_HEIR_SULKING_HEIR_OPTION_1",
            "EVENTOPTION_HEIR_SULKING_HEIR_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iProb": "50",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_HEIR_FUTURE_ACCOMPLISHMENTS",
        "Name": "TEXT_EVENTSTORY_HEIR_FUTURE_ACCOMPLISHMENTS_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_FUTURE_ACCOMPLISHMENTS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_LOW_WISDOM"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_FUTURE_ACCOMPLISHMENTS_OPTION_0",
            "EVENTOPTION_HEIR_FUTURE_ACCOMPLISHMENTS_OPTION_1",
            "EVENTOPTION_HEIR_FUTURE_ACCOMPLISHMENTS_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iProb": "50",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_HEIR_TROUBLING_BEHAVIOR",
        "Name": "TEXT_EVENTSTORY_HEIR_TROUBLING_BEHAVIOR_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_TROUBLING_BEHAVIOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_LOW_COURAGE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_TROUBLING_BEHAVIOR_OPTION_0",
            "EVENTOPTION_HEIR_TROUBLING_BEHAVIOR_OPTION_1",
            "EVENTOPTION_HEIR_TROUBLING_BEHAVIOR_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iProb": "50",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_HEIR_RISING_TO_THE_ROLE",
        "Name": "TEXT_EVENTSTORY_HEIR_RISING_TO_THE_ROLE_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_RISING_TO_THE_ROLE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_LOW_DISCIPLINE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_RISING_TO_THE_ROLE_OPTION_0",
            "EVENTOPTION_HEIR_RISING_TO_THE_ROLE_OPTION_1",
            "EVENTOPTION_HEIR_RISING_TO_THE_ROLE_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iProb": "50",
        "iRepeatTurns": "50"
      },
      {
        "beginGroup": "City",
        "zType": "EVENTSTORY_HAPPINESS_IMMIGRANTS",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_IMMIGRANTS_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_IMMIGRANTS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_IMMIGRANTS_YES",
            "EVENTOPTION_HAPPINESS_IMMIGRANTS_SCOUTS"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_IMMIGRANTS_MILITARY",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_IMMIGRANTS_MILITARY_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_IMMIGRANTS_MILITARY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_IMMIGRANTS_MILITARY_INFANTRY",
            "EVENTOPTION_HAPPINESS_IMMIGRANTS_MILITARY_MISSILE"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "EventLinkPrereq": "EVENTLINK_HAPPINESS_IMMIGRANTS_YES",
        "TechInvalid": "TECH_CARTOGRAPHY",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_SEASONAL_FESTIVAL",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_SEASONAL_FESTIVAL_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_SEASONAL_FESTIVAL",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_SEASONAL_FESTIVAL_CIVICS",
            "EVENTOPTION_HAPPINESS_SEASONAL_FESTIVAL_SCIENCE"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_TAX_SURPLUS",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_TAX_SURPLUS_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_TAX_SURPLUS",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_TAX_SURPLUS_MONEY",
            "EVENTOPTION_HAPPINESS_TAX_SURPLUS_MATERIAL"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_ANCIENT_TEMPLE",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_ANCIENT_TEMPLE_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_ANCIENT_TEMPLE",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_ANCIENT_TEMPLE_DEVOTEE",
            "EVENTOPTION_HAPPINESS_ANCIENT_TEMPLE_STONE"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_CITIZEN_DEFENSE",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_CITIZEN_DEFENSE_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_CITIZEN_DEFENSE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_CITIZEN_DEFENSE_WALLS",
            "EVENTOPTION_HAPPINESS_CITIZEN_DEFENSE_TRAINING"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_SCAVENGERS",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_SCAVENGERS_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_SCAVENGERS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_SCAVENGERS_FOOD",
            "EVENTOPTION_HAPPINESS_SCAVENGERS_ORDERS"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_VOLUNTEERS",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_VOLUNTEERS_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_VOLUNTEERS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_VOLUNTEERS_WORKER",
            "EVENTOPTION_HAPPINESS_VOLUNTEERS_SOLDIER"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "TechPrereq": "TECH_BATTLELINE",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_PROMISING_STUDENT",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_PROMISING_STUDENT_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_PROMISING_STUDENT",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_PROMISING_STUDENT_SCRIBE",
            "EVENTOPTION_HAPPINESS_PROMISING_STUDENT_POET",
            "EVENTOPTION_HAPPINESS_PROMISING_STUDENT_CITIZEN"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_FOUND_ZOROASTRIANISM",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_FOUND_ZOROASTRIANISM_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_FOUND_ZOROASTRIANISM",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_FOUND_ZOROASTRIANISM_YES",
            "EVENTOPTION_HAPPINESS_FOUND_ZOROASTRIANISM_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_FOUND_JUDAISM",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_FOUND_JUDAISM_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_FOUND_JUDAISM",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_FOUND_JUDAISM_YES",
            "EVENTOPTION_HAPPINESS_FOUND_JUDAISM_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_VALUABLE_EXPERIENCE",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_VALUABLE_EXPERIENCE_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_VALUABLE_EXPERIENCE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CITY_WITH_GOVERNOR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_VALUABLE_EXPERIENCE_ASTUTE",
            "EVENTOPTION_HAPPINESS_VALUABLE_EXPERIENCE_WISDOM"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_GIFTED_INVENTOR",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_GIFTED_INVENTOR_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_GIFTED_INVENTOR",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_GIFTED_INVENTOR_SCIENTIST",
            "EVENTOPTION_HAPPINESS_GIFTED_INVENTOR_SOLDIER"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_DILIGENT_CLERK",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_DILIGENT_CLERK_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_DILIGENT_CLERK",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_DILIGENT_CLERK_MERCHANT",
            "EVENTOPTION_HAPPINESS_DILIGENT_CLERK_MINISTER"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_MATHEMATICAL_BREAKTHROUGH",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_MATHEMATICAL_BREAKTHROUGH_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_MATHEMATICAL_BREAKTHROUGH",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_MATHEMATICAL_BREAKTHROUGH_SCIENTIST",
            "EVENTOPTION_HAPPINESS_MATHEMATICAL_BREAKTHROUGH_SCIENCE"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_ASPIRING_OFFICER",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_ASPIRING_OFFICER_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_ASPIRING_OFFICER",
        "zBackgroundName": "promotion_01",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_ASPIRING_OFFICER_SOLDIER",
            "EVENTOPTION_HAPPINESS_ASPIRING_OFFICER_TRAINING"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_BENEVOLENT_TRADER",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_BENEVOLENT_TRADER_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_BENEVOLENT_TRADER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_BENEVOLENT_TRADER_MERCHANT",
            "EVENTOPTION_HAPPINESS_BENEVOLENT_TRADER_MONEY"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_TALENTED_POLITICIAN",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_TALENTED_POLITICIAN_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_TALENTED_POLITICIAN",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_TALENTED_POLITICIAN_MINISTER",
            "EVENTOPTION_HAPPINESS_TALENTED_POLITICIAN_CIVICS"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_FASHIONABLE_PAINTER",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_FASHIONABLE_PAINTER_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_FASHIONABLE_PAINTER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_FASHIONABLE_PAINTER_CAPITAL",
            "EVENTOPTION_HAPPINESS_FASHIONABLE_PAINTER_MURAL"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_ATHLETIC_GAMES",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_ATHLETIC_GAMES_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_ATHLETIC_GAMES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_GOVERNOR"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_ATHLETIC_GAMES_JUDGE",
            "EVENTOPTION_HAPPINESS_ATHLETIC_GAMES_COMPETE",
            "EVENTOPTION_HAPPINESS_ATHLETIC_GAMES_GAMBLE"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "3",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_POETRY_CONTEST",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_POETRY_CONTEST_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_POETRY_CONTEST",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CITY_WITH_GOVERNOR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_POETRY_CONTEST_RECITE",
            "EVENTOPTION_HAPPINESS_POETRY_CONTEST_ATTEND",
            "EVENTOPTION_HAPPINESS_POETRY_CONTEST_JUDGE"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_HAPPINESS_PUBLIC_FEAST",
        "Name": "TEXT_EVENTSTORY_HAPPINESS_PUBLIC_FEAST_TITLE",
        "Text": "TEXT_EVENTSTORY_HAPPINESS_PUBLIC_FEAST",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CITY_WITH_GOVERNOR"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HAPPINESS_PUBLIC_FEAST_MODERATION",
            "EVENTOPTION_HAPPINESS_PUBLIC_FEAST_POOR",
            "EVENTOPTION_HAPPINESS_PUBLIC_FEAST_STORE"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CULTURE_SHIP_BORNE_PLAGUE",
        "Name": "TEXT_EVENTSTORY_CULTURE_SHIP_BORNE_PLAGUE_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_SHIP_BORNE_PLAGUE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CITY_COASTAL"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_0",
            "EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_1",
            "EVENTOPTION_CULTURE_SHIP_BORNE_PLAGUE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHILD_MIDWIVES",
        "Name": "TEXT_EVENTSTORY_CHILD_MIDWIVES_TITLE",
        "Text": "TEXT_EVENTSTORY_CHILD_MIDWIVES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHILD_MIDWIVES_OPTION_0",
            "EVENTOPTION_CHILD_MIDWIVES_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_BIRTH",
        "iTriggerSubject": "1",
        "iWeight": "3",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_EARTHQUAKE",
        "Name": "TEXT_EVENTSTORY_CULTURE_EARTHQUAKE_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_EARTHQUAKE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_0",
            "EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_1",
            "EVENTOPTION_CULTURE_EARTHQUAKE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_MINES_OF_LAURION",
        "Name": "TEXT_EVENTSTORY_MINES_OF_LAURION_TITLE",
        "Text": "TEXT_EVENTSTORY_MINES_OF_LAURION",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_TILE_MINE"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_NO_RESOURCE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MINES_OF_LAURION_YES",
            "EVENTOPTION_MINES_OF_LAURION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_FOREST_FIRE",
        "Name": "TEXT_EVENTSTORY_FOREST_FIRE_TITLE",
        "Text": "TEXT_EVENTSTORY_FOREST_FIRE",
        "zBackgroundName": "Military_Defeat",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_FLAT",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_TILE_CLAIMED"
            },
            {
              "First": "0",
              "Second": "SUBJECT_TILE_TREES"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTSTORY_FOREST_FIRE",
            "NONE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FOREST_FIRE_OPTION_0",
            "EVENTOPTION_FOREST_FIRE_OPTION_1"
          ]
        },
        "TechPrereq": "TECH_FORESTRY",
        "iMinLeader": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_FOREST_FIRE_WOOD",
        "Name": "TEXT_EVENTSTORY_FOREST_FIRE_WOOD_TITLE",
        "Text": "TEXT_EVENTSTORY_FOREST_FIRE_WOOD",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_CLAIMED"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_FOREST_FIRE_WOOD_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_FOREST_FIRE",
        "iPriority": "2",
        "iWeight": "5"
      },
      {
        "zType": "EVENTSTORY_FOREST_FIRE_EMBERS",
        "Name": "TEXT_EVENTSTORY_FOREST_FIRE_EMBERS_TITLE",
        "Text": "TEXT_EVENTSTORY_FOREST_FIRE_EMBERS",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_CLAIMED"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_FOREST_FIRE_EMBERS_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_FOREST_FIRE",
        "iPriority": "2",
        "iWeight": "3"
      },
      {
        "zType": "EVENTSTORY_FOREST_FIRE_ORPHAN",
        "Name": "TEXT_EVENTSTORY_FOREST_FIRE_ORPHAN_TITLE",
        "Text": "TEXT_EVENTSTORY_FOREST_FIRE_ORPHAN",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_FOREST_FIRE_ORPHAN"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_CLAIMED"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_0",
            "EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_1",
            "EVENTOPTION_FOREST_FIRE_ORPHAN_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_FOREST_FIRE",
        "iPriority": "2",
        "iWeight": "2"
      },
      {
        "zType": "EVENTSTORY_FOREST_FIRE_TOMB",
        "Name": "TEXT_EVENTSTORY_FOREST_FIRE_TOMB_TITLE",
        "Text": "TEXT_EVENTSTORY_FOREST_FIRE_TOMB",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_CLAIMED"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FOREST_FIRE_TOMB_OPTION_0",
            "EVENTOPTION_FOREST_FIRE_TOMB_OPTION_1",
            "EVENTOPTION_FOREST_FIRE_TOMB_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_FOREST_FIRE",
        "iPriority": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_FOREST_FIRE_MONUMENT",
        "Name": "TEXT_EVENTSTORY_FOREST_FIRE_MONUMENT_TITLE",
        "Text": "TEXT_EVENTSTORY_FOREST_FIRE_MONUMENT",
        "zBackgroundName": "Escaped_Slave",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_CLAIMED"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FOREST_FIRE_TOMB_OPTION_1",
            "EVENTOPTION_FOREST_FIRE_MONUMENT_OPTION_1",
            "EVENTOPTION_FOREST_FIRE_MONUMENT_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_FOREST_FIRE_TOMB",
        "iEventLinkTurns": "2",
        "iPriority": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_RODENT",
        "Name": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_RODENT_TITLE",
        "Text": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_RODENT",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_HILL",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_TILE_CLAIMED"
            },
            {
              "First": "0",
              "Second": "SUBJECT_TILE_TUNDRA"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_PETS",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_RESEARCH",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_SYMBOL"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "iWeight": "7",
        "iRepeatTurns": "-1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_LIZARD",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FROG",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS",
        "Name": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_COASTAL_WATER",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_CLAIMED"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS_OPTION_0",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_RESEARCH",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_LOCALS"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "iWeight": "2",
        "iRepeatTurns": "-1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_RODENT",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_LIZARD",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FROG",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS",
        "Name": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_COASTAL_WATER",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_CLAIMED"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS_OPTION_0",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_RESEARCH",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "iWeight": "2",
        "iRepeatTurns": "-1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_RODENT",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_LIZARD",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FROG",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_LIZARD",
        "Name": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_LIZARD_TITLE",
        "Text": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_LIZARD",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_DESERT",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_CLAIMED"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_SYMBOL",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_RESEARCH",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_LOCALS"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "iWeight": "7",
        "iRepeatTurns": "-1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_RODENT",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FROG",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE",
        "Name": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE_TITLE",
        "Text": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_FLAT",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_TILE_CLAIMED"
            },
            {
              "First": "0",
              "Second": "SUBJECT_TILE_LUSH"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE_OPTION_0",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_RESEARCH",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_SYMBOL"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_RODENT",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_LIZARD",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FROG",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FROG",
        "Name": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FROG_TITLE",
        "Text": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FROG",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_RIVER",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_CLAIMED"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_PETS",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_RESEARCH",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_LOCALS"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_RODENT",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_LIZARD",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER",
        "Name": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER_TITLE",
        "Text": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_RIVER",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_CLAIMED"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER_OPTION_0",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_RESEARCH",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_RODENT",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_CRABS",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FISH_BIRDS",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_LIZARD",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_SNAKE",
            "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_FROG"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_GEMS",
        "Name": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_GEMS_TITLE",
        "Text": "TEXT_EVENTSTORY_NEW_TYPE_OF_ANIMAL_DISCOVERED_GEMS",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_TILE_RIVER",
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_TILE_CLAIMED"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_CITY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_DISCOVERED_GEMS_OPTION_0",
            "EVENTOPTION_NEW_TYPE_OF_ANIMAL_LOCALS"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_NEW_TYPE_OF_ANIMAL_DISCOVERED_SPIDER",
        "iEventLinkTurns": "9",
        "iPriority": "2",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_OPPORTUNITIES_FOR_ALL",
        "Name": "TEXT_EVENTSTORY_CULTURE_OPPORTUNITIES_FOR_ALL_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_OPPORTUNITIES_FOR_ALL",
        "zEventURL": "https://en.wikipedia.org/wiki/Fifth-century_Athens",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_OPPORTUNITIES_FOR_ALL_OPTION_0",
            "EVENTOPTION_CULTURE_OPPORTUNITIES_FOR_ALL_OPTION_1",
            "EVENTOPTION_CULTURE_OPPORTUNITIES_FOR_ALL_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_A_BEACON",
        "Name": "TEXT_EVENTSTORY_CULTURE_A_BEACON_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_A_BEACON",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_A_BEACON_OPTION_0",
            "EVENTOPTION_CULTURE_A_BEACON_OPTION_1",
            "EVENTOPTION_CULTURE_A_BEACON_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_TEMPLE_HYMNS",
        "Name": "TEXT_EVENTSTORY_CULTURE_TEMPLE_HYMNS_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_TEMPLE_HYMNS",
        "zBackgroundName": "poetess",
        "zEventURL": "https://en.wikipedia.org/wiki/Enheduanna",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_RELIGION"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_RELIGION_CITY",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_0",
            "EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_1",
            "EVENTOPTION_CULTURE_TEMPLE_HYMNS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_FREEDOM_MOVEMENT",
        "Name": "TEXT_EVENTSTORY_CULTURE_FREEDOM_MOVEMENT_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_FREEDOM_MOVEMENT",
        "zEventURL": "https://en.wikipedia.org/wiki/Constitutio_Antoniniana",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_LAW_FREEDOM"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_0",
            "EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_1",
            "EVENTOPTION_CULTURE_FREEDOM_MOVEMENT_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "LawPrereq": "LAW_SLAVERY",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_PAID_FUNCTION",
        "Name": "TEXT_EVENTSTORY_CULTURE_PAID_FUNCTION_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_PAID_FUNCTION",
        "zEventURL": "https://en.wikipedia.org/wiki/Fifth-century_Athens",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_0",
            "EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_1",
            "EVENTOPTION_CULTURE_PAID_FUNCTION_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_THE_PUBLIC_PURSE",
        "Name": "TEXT_EVENTSTORY_CULTURE_THE_PUBLIC_PURSE_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_THE_PUBLIC_PURSE",
        "zEventURL": "https://en.wikipedia.org/wiki/Cura_Annonae",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_THE_PUBLIC_PURSE_OPTION_0",
            "EVENTOPTION_CULTURE_THE_PUBLIC_PURSE_OPTION_1",
            "EVENTOPTION_CULTURE_THE_PUBLIC_PURSE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_A_GOLDEN_AGE",
        "Name": "TEXT_EVENTSTORY_CULTURE_A_GOLDEN_AGE_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_A_GOLDEN_AGE",
        "zEventURL": "https://en.wikipedia.org/wiki/Fifth-century_Athens",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_A_GOLDEN_AGE_OPTION_0",
            "EVENTOPTION_CULTURE_A_GOLDEN_AGE_OPTION_1",
            "EVENTOPTION_CULTURE_A_GOLDEN_AGE_OPTION_2",
            "EVENTOPTION_CULTURE_A_GOLDEN_AGE_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iProb": "75",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_WONDER_THE_ZIGGURAT",
        "Name": "TEXT_EVENTSTORY_WONDER_THE_ZIGGURAT_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_THE_ZIGGURAT",
        "zBackgroundName": "Ziggurat",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WONDER_THE_ZIGGURAT_OPTION_0",
            "EVENTOPTION_WONDER_THE_ZIGGURAT_OPTION_1",
            "EVENTOPTION_WONDER_THE_ZIGGURAT_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_GREAT_ZIGGURAT",
        "iImageSubject": "1",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "beginGroup": "Miscellaneous",
        "zType": "EVENTSTORY_START_SLAVERY",
        "Name": "TEXT_EVENTSTORY_START_SLAVERY_TITLE",
        "Text": "TEXT_EVENTSTORY_START_SLAVERY",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_SLAVERY"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_START_SLAVERY_YES",
            "EVENTOPTION_START_SLAVERY_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_TECHNOLOGY",
        "TriggerData": "TECH_LABOR_FORCE",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_SLAVERY_FREEDOM",
        "Name": "TEXT_EVENTSTORY_LAW_SLAVERY_FREEDOM_TITLE",
        "Text": "TEXT_EVENTSTORY_SLAVERY_FREEDOM",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_SLAVERY",
            "SUBJECT_LAW_FREEDOM"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_SLAVERY",
            "EVENTOPTION_LAW_FREEDOM",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_SLAVERY",
            "LAW_FREEDOM"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_CENTRALIZATION_VASSALAGE",
        "Name": "TEXT_EVENTSTORY_CENTRALIZATION_VASSALAGE_TITLE",
        "Text": "TEXT_EVENTSTORY_CENTRALIZATION_VASSALAGE",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_CENTRALIZATION",
            "SUBJECT_LAW_VASSALAGE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_CENTRALIZATION",
            "EVENTOPTION_LAW_VASSALAGE",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_CENTRALIZATION",
            "LAW_VASSALAGE"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_TYRANNY_CONSTITUTION",
        "Name": "TEXT_EVENTSTORY_TYRANNY_CONSTITUTION_TITLE",
        "Text": "TEXT_EVENTSTORY_TYRANNY_CONSTITUTION",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_TYRANNY",
            "SUBJECT_LAW_CONSTITUTION"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_TYRANNY",
            "EVENTOPTION_LAW_CONSTITUTION",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_TYRANNY",
            "LAW_CONSTITUTION"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_EPICS_EXPLORATION",
        "Name": "TEXT_EVENTSTORY_EPICS_EXPLORATION_TITLE",
        "Text": "TEXT_EVENTSTORY_EPICS_EXPLORATION",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_EPICS",
            "SUBJECT_LAW_EXPLORATION"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_EPICS",
            "EVENTOPTION_LAW_EXPLORATION",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_EPICS",
            "LAW_EXPLORATION"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_COLONIZATION_SERFDOM",
        "Name": "TEXT_EVENTSTORY_COLONIZATION_SERFDOM_TITLE",
        "Text": "TEXT_EVENTSTORY_COLONIZATION_SERFDOM",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_COLONIZATION",
            "SUBJECT_LAW_SERFDOM"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_COLONIZATION",
            "EVENTOPTION_LAW_SERFDOM",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_COLONIZATION",
            "LAW_SERFDOM"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_MONOTHEISM_POLYTHEISM",
        "Name": "TEXT_EVENTSTORY_MONOTHEISM_POLYTHEISM_TITLE",
        "Text": "TEXT_EVENTSTORY_MONOTHEISM_POLYTHEISM",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_MONOTHEISM",
            "SUBJECT_LAW_POLYTHEISM"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_MONOTHEISM",
            "EVENTOPTION_LAW_POLYTHEISM",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_MONOTHEISM",
            "LAW_POLYTHEISM"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_PROFESSIONAL_ARMY_VOLUNTEERS",
        "Name": "TEXT_EVENTSTORY_PROFESSIONAL_ARMY_VOLUNTEERS_TITLE",
        "Text": "TEXT_EVENTSTORY_PROFESSIONAL_ARMY_VOLUNTEERS",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_PROFESSIONAL_ARMY",
            "SUBJECT_LAW_VOLUNTEERS"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_PROFESSIONAL_ARMY",
            "EVENTOPTION_LAW_VOLUNTEERS",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_PROFESSIONAL_ARMY",
            "LAW_VOLUNTEERS"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_TOLERANCE_ORTHODOXY",
        "Name": "TEXT_EVENTSTORY_TOLERANCE_ORTHODOXY_TITLE",
        "Text": "TEXT_EVENTSTORY_TOLERANCE_ORTHODOXY",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_TOLERANCE",
            "SUBJECT_LAW_ORTHODOXY"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_TOLERANCE",
            "EVENTOPTION_LAW_ORTHODOXY",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_TOLERANCE",
            "LAW_ORTHODOXY"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_GUILDS_ELITES",
        "Name": "TEXT_EVENTSTORY_GUILDS_ELITES_TITLE",
        "Text": "TEXT_EVENTSTORY_GUILDS_ELITES",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_GUILDS",
            "SUBJECT_LAW_ELITES"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_GUILDS",
            "EVENTOPTION_LAW_ELITES",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_GUILDS",
            "LAW_ELITES"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_PHILOSOPHY_ENGINEERING",
        "Name": "TEXT_EVENTSTORY_PHILOSOPHY_ENGINEERING_TITLE",
        "Text": "TEXT_EVENTSTORY_PHILOSOPHY_ENGINEERING",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_PHILOSOPHY",
            "SUBJECT_LAW_ENGINEERING"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_PHILOSOPHY",
            "EVENTOPTION_LAW_ENGINEERING",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_PHILOSOPHY",
            "LAW_ENGINEERING"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_ICONOGRAPHY_CALLIGRAPHY",
        "Name": "TEXT_EVENTSTORY_ICONOGRAPHY_CALLIGRAPHY_TITLE",
        "Text": "TEXT_EVENTSTORY_ICONOGRAPHY_CALLIGRAPHY",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_ICONOGRAPHY",
            "SUBJECT_LAW_CALLIGRAPHY"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_ICONOGRAPHY",
            "EVENTOPTION_LAW_CALLIGRAPHY",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_ICONOGRAPHY",
            "LAW_CALLIGRAPHY"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_ISOLATIONISM_TRADE_LEAGUE",
        "Name": "TEXT_EVENTSTORY_ISOLATIONISM_TRADE_LEAGUE_TITLE",
        "Text": "TEXT_EVENTSTORY_ISOLATIONISM_TRADE_LEAGUE",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_ISOLATIONISM",
            "SUBJECT_LAW_TRADE_LEAGUE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_ISOLATIONISM",
            "EVENTOPTION_LAW_TRADE_LEAGUE",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_ISOLATIONISM",
            "LAW_TRADE_LEAGUE"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_ASCETICISM_HOLY_WAR",
        "Name": "TEXT_EVENTSTORY_ASCETICISM_HOLY_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_ASCETICISM_HOLY_WAR",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_ASCETICISM",
            "SUBJECT_LAW_HOLY_WAR"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_ASCETICISM",
            "EVENTOPTION_LAW_HOLY_WAR",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_ASCETICISM",
            "LAW_HOLY_WAR"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_DIVINE_RULE_SECULARISM",
        "Name": "TEXT_EVENTSTORY_DIVINE_RULE_SECULARISM_TITLE",
        "Text": "TEXT_EVENTSTORY_DIVINE_RULE_SECULARISM",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_DIVINE_RULE",
            "SUBJECT_LAW_SECULARISM"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_DIVINE_RULE",
            "EVENTOPTION_LAW_SECULARISM",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_DIVINE_RULE",
            "LAW_SECULARISM"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_COIN_DEBASEMENT_MONETARY_REFORM",
        "Name": "TEXT_EVENTSTORY_COIN_DEBASEMENT_MONETARY_REFORM_TITLE",
        "Text": "TEXT_EVENTSTORY_COIN_DEBASEMENT_MONETARY_REFORM",
        "zBackgroundName": "decree",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_LAW_COIN_DEBASEMENT",
            "SUBJECT_LAW_MONETARY_REFORM"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_COIN_DEBASEMENT",
            "EVENTOPTION_LAW_MONETARY_REFORM",
            "EVENTOPTION_LAW_NO",
            "EVENTOPTION_LAW_SCREEN"
          ]
        },
        "Class": "EVENTCLASS_LAW",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1",
        "aeLawInvalid": {
          "zValue": [
            "LAW_COIN_DEBASEMENT",
            "LAW_MONETARY_REFORM"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_RELIGION_JUDAISM",
        "Name": "TEXT_EVENTSTORY_RELIGION_JUDAISM_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_JUDAISM",
        "zBackgroundName": "decree",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_NO_STATE_RELIGION"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_JUDAISM",
            "EVENTOPTION_RELIGION_NO",
            "EVENTOPTION_RELIGION_SCREEN"
          ]
        },
        "Trigger": "EVENTTRIGGER_RELIGION_FOUNDED",
        "TriggerData": "RELIGION_JUDAISM",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELIGION_ZOROASTRIANISM",
        "Name": "TEXT_EVENTSTORY_RELIGION_ZOROASTRIANISM_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_ZOROASTRIANISM",
        "zBackgroundName": "decree",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_NO_STATE_RELIGION"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_ZOROASTRIANISM",
            "EVENTOPTION_RELIGION_NO",
            "EVENTOPTION_RELIGION_SCREEN"
          ]
        },
        "Trigger": "EVENTTRIGGER_RELIGION_FOUNDED",
        "TriggerData": "RELIGION_ZOROASTRIANISM",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1"
      },
      {
        "zType": "EVENTSTORY_RELIGION_CHRISTIANITY",
        "Name": "TEXT_EVENTSTORY_RELIGION_CHRISTIANITY_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_CHRISTIANITY",
        "zBackgroundName": "decree",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_NO_STATE_RELIGION"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_CHRISTIANITY",
            "EVENTOPTION_RELIGION_NO",
            "EVENTOPTION_RELIGION_SCREEN"
          ]
        },
        "Trigger": "EVENTTRIGGER_RELIGION_FOUNDED",
        "TriggerData": "RELIGION_CHRISTIANITY",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1"
      },
      {
        "zType": "EVENTSTORY_RELIGION_MANICHAEISM",
        "Name": "TEXT_EVENTSTORY_RELIGION_MANICHAEISM_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_MANICHAEISM",
        "zBackgroundName": "decree",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLAYER_NO_STATE_RELIGION"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_MANICHAEISM",
            "EVENTOPTION_RELIGION_NO",
            "EVENTOPTION_RELIGION_SCREEN"
          ]
        },
        "Trigger": "EVENTTRIGGER_RELIGION_FOUNDED",
        "TriggerData": "RELIGION_MANICHAEISM",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bNoCharacters": "1"
      },
      {
        "zType": "EVENTSTORY_CEREMONIAL_OFFERING",
        "Name": "TEXT_EVENTSTORY_CEREMONIAL_OFFERING_TITLE",
        "Text": "TEXT_EVENTSTORY_CEREMONIAL_OFFERING",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CEREMONIAL_OFFERING_PROVIDE",
            "EVENTOPTION_CEREMONIAL_OFFERING_NO",
            "EVENTOPTION_CEREMONIAL_OFFERING_REQUISITION"
          ]
        },
        "LawPrereq": "LAW_ORTHODOXY",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_FOUNDING_SIGNS",
        "Name": "TEXT_EVENTSTORY_FOUNDING_SIGNS_TITLE",
        "Text": "TEXT_EVENTSTORY_FOUNDING_SIGNS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FOUNDING_SIGNS_OK",
            "EVENTOPTION_FOUNDING_SIGNS_NO"
          ]
        },
        "iMinLeader": "2",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_FOUNDING_SIGNS_SUCCESS",
        "Name": "TEXT_EVENTSTORY_FOUNDING_SIGNS_SUCCESS_TITLE",
        "Text": "TEXT_EVENTSTORY_FOUNDING_SIGNS_SUCCESS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CITY_NEWEST"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_FOUNDING_SIGNS_SUCCESS_OK"
        },
        "Trigger": "EVENTTRIGGER_GOAL_FINISHED",
        "TriggerData": "GOAL_QUEST_FOUNDING_SIGNS",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_VIRTUOUS_REFORMERS",
        "Name": "TEXT_EVENTSTORY_VIRTUOUS_REFORMERS_TITLE",
        "Text": "TEXT_EVENTSTORY_VIRTUOUS_REFORMERS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_CITY_DISCONTENT_MODERATE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_VIRTUOUS_REFORMERS_LET",
            "EVENTOPTION_VIRTUOUS_REFORMERS_SHOW"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_UNHAPPY_PEASANTS",
        "Name": "TEXT_EVENTSTORY_UNHAPPY_PEASANTS_TITLE",
        "Text": "TEXT_EVENTSTORY_UNHAPPY_PEASANTS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CITY_DISCONTENT_MODERATE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_UNHAPPY_PEASANTS_SACRIFICE",
            "EVENTOPTION_UNHAPPY_PEASANTS_DECLINE"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_HARSH_RULE",
        "Name": "TEXT_EVENTSTORY_HARSH_RULE_TITLE",
        "Text": "TEXT_EVENTSTORY_HARSH_RULE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HARSH_RULE_ARREST",
            "EVENTOPTION_HARSH_RULE_BRIBE",
            "EVENTOPTION_HARSH_RULE_CONVINCE"
          ]
        },
        "LawPrereq": "LAW_TYRANNY",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_WONDER_PYRAMIDS",
        "Name": "TEXT_EVENTSTORY_WONDER_PYRAMIDS_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_PYRAMIDS",
        "zBackgroundName": "Pyramids",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_PYRAMIDS",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_GREAT_ZIGGURAT",
        "Name": "TEXT_EVENTSTORY_WONDER_GREAT_ZIGGURAT_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_GREAT_ZIGGURAT",
        "zBackgroundName": "Ziggurat",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_GREAT_ZIGGURAT",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_ORACLE",
        "Name": "TEXT_EVENTSTORY_WONDER_ORACLE_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_ORACLE",
        "zBackgroundName": "Oracle",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_ORACLE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_HANGING_GARDENS",
        "Name": "TEXT_EVENTSTORY_WONDER_HANGING_GARDENS_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_HANGING_GARDENS",
        "zBackgroundName": "Hanging_garden",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_HANGING_GARDENS",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_NECROPOLIS",
        "Name": "TEXT_EVENTSTORY_WONDER_NECROPOLIS_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_NECROPOLIS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_NECROPOLIS",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_ISHTAR_GATE",
        "Name": "TEXT_EVENTSTORY_WONDER_ISHTAR_GATE_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_ISHTAR_GATE",
        "zBackgroundName": "IshtarGate",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_ISHTAR_GATE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_LIGHTHOUSE",
        "Name": "TEXT_EVENTSTORY_WONDER_LIGHTHOUSE_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_LIGHTHOUSE",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_LIGHTHOUSE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_APADANA",
        "Name": "TEXT_EVENTSTORY_WONDER_APADANA_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_APADANA",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_APADANA",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_MAUSOLEUM",
        "Name": "TEXT_EVENTSTORY_WONDER_MAUSOLEUM_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_MAUSOLEUM",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_MAUSOLEUM",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_ACROPOLIS",
        "Name": "TEXT_EVENTSTORY_WONDER_ACROPOLIS_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_ACROPOLIS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_ACROPOLIS",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_COLOSSUS",
        "Name": "TEXT_EVENTSTORY_WONDER_COLOSSUS_TITLE",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_COLOSSUS",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_MUSAEUM",
        "Name": "TEXT_EVENTSTORY_WONDER_MUSAEUM_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_MUSAEUM",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_MUSAEUM",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_CIRCUS_MAXIMUS",
        "Name": "TEXT_EVENTSTORY_WONDER_CIRCUS_MAXIMUS_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_CIRCUS_MAXIMUS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_CIRCUS_MAXIMUS",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_PANTHEON",
        "Name": "TEXT_EVENTSTORY_WONDER_PANTHEON_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_PANTHEON",
        "zBackgroundName": "Pantheon",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_PANTHEON",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_HAGIA_SOPHIA",
        "Name": "TEXT_EVENTSTORY_WONDER_HAGIA_SOPHIA_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_HAGIA_SOPHIA",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_HAGIA_SOPHIA",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_WONDER_GRAND_BAZAAR",
        "Name": "TEXT_EVENTSTORY_WONDER_GRAND_BAZAAR_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_GRAND_BAZAAR",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_WONDER_FINISHED"
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_GRAND_BAZAAR",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_COLOSSUS",
        "Name": "TEXT_EVENTSTORY_COLOSSUS_TITLE",
        "Text": "TEXT_EVENTSTORY_COLOSSUS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_COLOSSUS_WARLIKE",
            "EVENTOPTION_COLOSSUS_ANCESTOR",
            "EVENTOPTION_COLOSSUS_SCULPTOR"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_COLOSSUS",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_LIGHTHOUSE",
        "Name": "TEXT_EVENTSTORY_LIGHTHOUSE_TITLE",
        "Text": "TEXT_EVENTSTORY_LIGHTHOUSE",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LIGHTHOUSE_WARSHIPS",
            "EVENTOPTION_LIGHTHOUSE_GRAIN",
            "EVENTOPTION_LIGHTHOUSE_LUXURY"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_LIGHTHOUSE",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_HANGING_GARDENS",
        "Name": "TEXT_EVENTSTORY_HANGING_GARDENS_TITLE",
        "Text": "TEXT_EVENTSTORY_HANGING_GARDENS",
        "zBackgroundName": "Hanging_garden",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HANGING_GARDENS_MEDITATE",
            "EVENTOPTION_HANGING_GARDENS_STUDY",
            "EVENTOPTION_HANGING_GARDENS_PARTY"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_HANGING_GARDENS",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_ORACLE_1",
        "Name": "TEXT_EVENTSTORY_ORACLE_1_TITLE",
        "Text": "TEXT_EVENTSTORY_ORACLE_1",
        "zBackgroundName": "Oracle",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ORACLE_ME",
            "EVENTOPTION_ORACLE_WEALTHY",
            "EVENTOPTION_ORACLE_EVERYONE"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_ORACLE",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_ORACLE_2",
        "Name": "TEXT_EVENTSTORY_ORACLE_2_TITLE",
        "Text": "TEXT_EVENTSTORY_ORACLE_2",
        "zBackgroundName": "Oracle",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ORACLE_INDIGNANT",
            "EVENTOPTION_ORACLE_CONFUSED",
            "EVENTOPTION_ORACLE_PLEASED"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_ORACLE",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_PYRAMIDS",
        "Name": "TEXT_EVENTSTORY_PYRAMIDS_TITLE",
        "Text": "TEXT_EVENTSTORY_PYRAMIDS",
        "zBackgroundName": "Pyramids",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_HEIR_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHILD"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PYRAMIDS_WORK",
            "EVENTOPTION_PYRAMIDS_BLOODLINE",
            "EVENTOPTION_PYRAMIDS_DEATH"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_PYRAMIDS",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_ISHTAR_GATE",
        "Name": "TEXT_EVENTSTORY_ISHTAR_GATE_TITLE",
        "Text": "TEXT_EVENTSTORY_ISHTAR_GATE",
        "zBackgroundName": "IshtarGate",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ISHTAR_GATE_ME",
            "EVENTOPTION_ISHTAR_GATE_ARTISTS",
            "EVENTOPTION_ISHTAR_GATE_CHILDREN"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_ISHTAR_GATE",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_ACROPOLIS",
        "Name": "TEXT_EVENTSTORY_ACROPOLIS_TITLE",
        "Text": "TEXT_EVENTSTORY_ACROPOLIS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ACROPOLIS_FAMILY_TREASURY_1",
            "EVENTOPTION_ACROPOLIS_FAMILY_TREASURY_2",
            "EVENTOPTION_ACROPOLIS_FAMILY_TREASURY_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_ACROPOLIS",
        "iWeight": "1",
        "iProb": "50"
      },
      {
        "zType": "EVENTSTORY_NECROPOLIS",
        "Name": "TEXT_EVENTSTORY_NECROPOLIS_TITLE",
        "Text": "TEXT_EVENTSTORY_NECROPOLIS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_WAS_LEADER_DEAD_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_CITY_NECROPOLIS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NECROPOLIS_RECORD",
            "EVENTOPTION_NECROPOLIS_RITES"
          ]
        },
        "Trigger": "EVENTTRIGGER_DEATH",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_ANCIENT_STATUE",
        "Name": "TEXT_EVENTSTORY_ANCIENT_STATUE_TITLE",
        "Text": "TEXT_EVENTSTORY_ANCIENT_STATUE",
        "zBackgroundName": "DEFAULT",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ANCIENT_STATUE_DISPLAY",
            "EVENTOPTION_ANCIENT_STATUE_BREAK"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_QUARRY",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "100"
      },
      {
        "zType": "EVENTSTORY_ANCIENT_STATUE_STOLEN",
        "Name": "TEXT_EVENTSTORY_ANCIENT_STATUE_STOLEN_TITLE",
        "Text": "TEXT_EVENTSTORY_ANCIENT_STATUE_STOLEN",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ANCIENT_STATUE_STOLEN_LOCATE",
            "EVENTOPTION_ANCIENT_STATUE_STOLEN_FORGET"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_ANCIENT_STATUE_DISPLAY",
        "iWeight": "1",
        "iProb": "20"
      },
      {
        "zType": "EVENTSTORY_ANCIENT_STATUE_APPREHENDED",
        "Name": "TEXT_EVENTSTORY_ANCIENT_STATUE_APPREHENDED_TITLE",
        "Text": "TEXT_EVENTSTORY_ANCIENT_STATUE_APPREHENDED",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ANCIENT_STATUE_APPREHENDED_EXECUTE",
            "EVENTOPTION_ANCIENT_STATUE_APPREHENDED_PARDON"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_ANCIENT_STATUE_STOLEN_LOCATE",
        "iWeight": "1",
        "iProb": "10"
      },
      {
        "zType": "EVENTSTORY_PRECIOUS_METALS",
        "Name": "TEXT_EVENTSTORY_PRECIOUS_METALS_TITLE",
        "Text": "TEXT_EVENTSTORY_PRECIOUS_METALS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PRECIOUS_METALS_TREASURY",
            "EVENTOPTION_PRECIOUS_METALS_BEAUTIFY"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_MINE",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "100"
      },
      {
        "zType": "EVENTSTORY_QUESTIONABLE_CARVING",
        "Name": "TEXT_EVENTSTORY_QUESTIONABLE_CARVING_TITLE",
        "Text": "TEXT_EVENTSTORY_QUESTIONABLE_CARVING",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_LOW_DISCIPLINE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_QUESTIONABLE_CARVING_DISPLAY",
            "EVENTOPTION_QUESTIONABLE_CARVING_ERECT",
            "EVENTOPTION_QUESTIONABLE_CARVING_PURCHASE"
          ]
        },
        "iWeight": "4",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_COTTAGE_DECOR",
        "Name": "TEXT_EVENTSTORY_COTTAGE_DECOR_TITLE",
        "Text": "TEXT_EVENTSTORY_COTTAGE_DECOR",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_HIGH_DISCIPLINE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_COTTAGE_DECOR_ARTWORKS",
            "EVENTOPTION_COTTAGE_DECOR_BUSTS",
            "EVENTOPTION_COTTAGE_DECOR_AUSTERE"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_HAMLET",
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_RUNAWAY_SLAVE",
        "Name": "TEXT_EVENTSTORY_RUNAWAY_SLAVE_TITLE",
        "Text": "TEXT_EVENTSTORY_RUNAWAY_SLAVE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CARELESS"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RUNAWAY_SLAVE_REPRIMAND",
            "EVENTOPTION_RUNAWAY_SLAVE_REFUSE",
            "EVENTOPTION_RUNAWAY_SLAVE_BEAT"
          ]
        },
        "LawPrereq": "LAW_SLAVERY",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PRIESTLY_DWELLING",
        "Name": "TEXT_EVENTSTORY_PRIESTLY_DWELLING_TITLE",
        "Text": "TEXT_EVENTSTORY_PRIESTLY_DWELLING",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PRIESTLY_DWELLING_LAND",
            "EVENTOPTION_PRIESTLY_DWELLING_RESIDENCE",
            "EVENTOPTION_PRIESTLY_DWELLING_COMMONERS"
          ]
        },
        "TechPrereq": "TECH_THEOLOGY",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_VETERAN_COLONIES",
        "Name": "TEXT_EVENTSTORY_VETERAN_COLONIES_TITLE",
        "Text": "TEXT_EVENTSTORY_VETERAN_COLONIES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_OLD"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_VETERAN_COLONIES_SETTLE",
            "EVENTOPTION_VETERAN_COLONIES_PAY",
            "EVENTOPTION_VETERAN_COLONIES_NO"
          ]
        },
        "LawPrereq": "LAW_COLONIZATION",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_DINOSAUR_BONES_SLAVERY_VERSION",
        "Name": "TEXT_EVENTSTORY_DINOSAUR_BONES_TITLE",
        "Text": "TEXT_EVENTSTORY_DINOSAUR_BONES_SLAVERY_VERSION",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_0",
            "EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_1",
            "EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_2",
            "EVENTOPTION_DINOSAUR_BONES_SLAVERY_VERSION_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_QUARRY",
        "TechPrereq": "TECH_DIVINATION",
        "LawPrereq": "LAW_SLAVERY",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_DINOSAUR_BONES_FREEDOM_VERSION",
            "EVENTSTORY_DINOSAUR_BONES_EXPLORATION_VERSION",
            "EVENTSTORY_DINOSAUR_BONES_LITERATURE_VERSION"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_DINOSAUR_BONES_FREEDOM_VERSION",
        "Name": "TEXT_EVENTSTORY_DINOSAUR_BONES_TITLE",
        "Text": "TEXT_EVENTSTORY_DINOSAUR_BONES_FREEDOM_VERSION",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_0",
            "EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_1",
            "EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_2",
            "EVENTOPTION_DINOSAUR_BONES_FREEDOM_VERSION_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_QUARRY",
        "TechPrereq": "TECH_DRAMA",
        "LawPrereq": "LAW_FREEDOM",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_DINOSAUR_BONES_SLAVERY_VERSION",
            "EVENTSTORY_DINOSAUR_BONES_EXPLORATION_VERSION",
            "EVENTSTORY_DINOSAUR_BONES_LITERATURE_VERSION"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_DINOSAUR_BONES_EXPLORATION_VERSION",
        "Name": "TEXT_EVENTSTORY_DINOSAUR_BONES_TITLE",
        "Text": "TEXT_EVENTSTORY_DINOSAUR_BONES_EXPLORATION_VERSION",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DINOSAUR_BONES_EXPLORATION_VERSION_OPTION_0",
            "EVENTOPTION_DINOSAUR_BONES_EXPLORATION_VERSION_OPTION_1",
            "EVENTOPTION_DINOSAUR_BONES_EXPLORATION_VERSION_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_QUARRY",
        "TechPrereq": "TECH_IRONWORKING",
        "LawPrereq": "LAW_EXPLORATION",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_DINOSAUR_BONES_SLAVERY_VERSION",
            "EVENTSTORY_DINOSAUR_BONES_FREEDOM_VERSION",
            "EVENTSTORY_DINOSAUR_BONES_LITERATURE_VERSION"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_DINOSAUR_BONES_LITERATURE_VERSION",
        "Name": "TEXT_EVENTSTORY_DINOSAUR_BONES_TITLE",
        "Text": "TEXT_EVENTSTORY_DINOSAUR_BONES_LITERATURE_VERSION",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DINOSAUR_BONES_LITERATURE_VERSION_OPTION_0",
            "EVENTOPTION_DINOSAUR_BONES_LITERATURE_VERSION_OPTION_1",
            "EVENTOPTION_DINOSAUR_BONES_LITERATURE_VERSION_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_QUARRY",
        "TechPrereq": "TECH_HUSBANDRY",
        "LawPrereq": "LAW_EPICS",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_DINOSAUR_BONES_SLAVERY_VERSION",
            "EVENTSTORY_DINOSAUR_BONES_FREEDOM_VERSION",
            "EVENTSTORY_DINOSAUR_BONES_EXPLORATION_VERSION"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_TRAINING_NEWS_SPEARMAN",
        "Name": "TEXT_EVENTSTORY_TRAINING_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAINING_NEWS_SPEARMAN",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAINING_NEWS_COMBAT",
            "EVENTOPTION_TRAINING_NEWS_GUARD"
          ]
        },
        "Class": "EVENTCLASS_TRAINING_NEWS",
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_SPEARMAN",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAINING_NEWS_ARCHER",
        "Name": "TEXT_EVENTSTORY_TRAINING_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAINING_NEWS_ARCHER",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAINING_NEWS_ARCHER_OPTION_0",
            "EVENTOPTION_TRAINING_NEWS_ARCHER_OPTION_1",
            "EVENTOPTION_TRAINING_NEWS_ARCHER_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_TRAINING_NEWS",
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_ARCHER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAINING_NEWS_MACEMAN",
        "Name": "TEXT_EVENTSTORY_TRAINING_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAINING_NEWS_MACEMAN",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAINING_NEWS_COMBAT",
            "EVENTOPTION_TRAINING_NEWS_ENGINEERING"
          ]
        },
        "Class": "EVENTCLASS_TRAINING_NEWS",
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_MACEMAN",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAINING_NEWS_CHARIOT",
        "Name": "TEXT_EVENTSTORY_TRAINING_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAINING_NEWS_CHARIOT",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAINING_NEWS_CHARIOT_OPTION_0",
            "EVENTOPTION_TRAINING_NEWS_CHARIOT_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_TRAINING_NEWS",
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_CHARIOT",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAINING_NEWS_AXEMAN",
        "Name": "TEXT_EVENTSTORY_TRAINING_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAINING_NEWS_AXEMAN",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAINING_NEWS_GUARD",
            "EVENTOPTION_TRAINING_NEWS_ENGINEERING",
            "EVENTOPTION_TRAINING_NEWS_COMBAT"
          ]
        },
        "Class": "EVENTCLASS_TRAINING_NEWS",
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_AXEMAN",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAINING_NEWS_HORSEMAN",
        "Name": "TEXT_EVENTSTORY_TRAINING_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAINING_NEWS_HORSEMAN",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_0",
            "EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_1",
            "EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_2",
            "EVENTOPTION_TRAINING_NEWS_HORSEMAN_OPTION_3"
          ]
        },
        "Class": "EVENTCLASS_TRAINING_NEWS",
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_HORSEMAN",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAINING_NEWS_CAMEL_ARCHER",
        "Name": "TEXT_EVENTSTORY_TRAINING_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAINING_NEWS_CAMEL_ARCHER",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAINING_NEWS_CAMEL_ARCHER_OPTION_0",
            "EVENTOPTION_TRAINING_NEWS_CAMEL_ARCHER_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_TRAINING_NEWS",
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_CAMEL_ARCHER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAINING_NEWS_WAR_ELEPHANT",
        "Name": "TEXT_EVENTSTORY_TRAINING_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAINING_NEWS_WAR_ELEPHANT",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAINING_NEWS_COMBAT",
            "EVENTOPTION_TRAINING_NEWS_ENGINEERING",
            "EVENTOPTION_TRAINING_NEWS_WAR_ELEPHANT_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_TRAINING_NEWS",
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_WAR_ELEPHANT",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAINING_NEWS_BALLISTA",
        "Name": "TEXT_EVENTSTORY_TRAINING_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAINING_NEWS_BALLISTA",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAINING_NEWS_BALLISTA_OPTION_0",
            "EVENTOPTION_TRAINING_NEWS_BALLISTA_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_TRAINING_NEWS",
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_BALLISTA",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAINING_NEWS_HORSE_ARCHER",
        "Name": "TEXT_EVENTSTORY_TRAINING_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAINING_NEWS_HORSE_ARCHER",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAINING_NEWS_HORSE_ARCHER_OPTION_0",
            "EVENTOPTION_TRAINING_NEWS_HORSE_ARCHER_OPTION_1",
            "EVENTOPTION_TRAINING_NEWS_HORSE_ARCHER_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_TRAINING_NEWS",
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_HORSE_ARCHER",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAINING_NEWS_CATAPULT",
        "Name": "TEXT_EVENTSTORY_TRAINING_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAINING_NEWS_CATAPULT",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAINING_NEWS_CATAPULT_OPTION_0",
            "EVENTOPTION_TRAINING_NEWS_CATAPULT_OPTION_1",
            "EVENTOPTION_TRAINING_NEWS_CATAPULT_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_TRAINING_NEWS",
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_CATAPULT",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TRAINING_NEWS_SWORDSMAN",
        "Name": "TEXT_EVENTSTORY_TRAINING_NEWS_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAINING_NEWS_SWORDSMAN",
        "zAudioTrigger": "AUDIO_UI_EVENT_SOLEMN_VICTORY",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAINING_NEWS_ENGINEERING",
            "EVENTOPTION_TRAINING_NEWS_COMBAT",
            "EVENTOPTION_TRAINING_NEWS_GUARD"
          ]
        },
        "Class": "EVENTCLASS_TRAINING_NEWS",
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_SWORDSMAN",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_MACEMAN",
        "Name": "TEXT_EVENTSTORY_MERCENARY_MACEMAN_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_MACEMAN",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_MACEMAN",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_MILITARY_DRILL",
        "TechInvalid": "TECH_BATTLELINE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_SPEARMAN",
        "Name": "TEXT_EVENTSTORY_MERCENARY_SPEARMAN_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_SPEARMAN",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_SPEARMAN",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_LABOR_FORCE",
        "TechInvalid": "TECH_BODKIN_ARROW",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_AXEMAN",
        "Name": "TEXT_EVENTSTORY_MERCENARY_AXEMAN_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_AXEMAN",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_AXEMAN",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_BATTLELINE",
        "TechInvalid": "TECH_MACHINERY",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_SWORDSMAN",
        "Name": "TEXT_EVENTSTORY_MERCENARY_SWORDSMAN_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_SWORDSMAN",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_SWORDSMAN",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_MACHINERY",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_PIKEMAN",
        "Name": "TEXT_EVENTSTORY_MERCENARY_PIKEMAN_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_PIKEMAN",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_PIKEMAN",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_BODKIN_ARROW",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_ARCHER",
        "Name": "TEXT_EVENTSTORY_MERCENARY_ARCHER_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_ARCHER",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_ARCHER",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_RHETORIC",
        "TechInvalid": "TECH_UNIT_TACTICS",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_LONGBOWMAN",
        "Name": "TEXT_EVENTSTORY_MERCENARY_LONGBOWMAN_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_LONGBOWMAN",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_LONGBOWMAN",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_UNIT_TACTICS",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_CROSSBOWMAN",
        "Name": "TEXT_EVENTSTORY_MERCENARY_CROSSBOWMAN_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_CROSSBOWMAN",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_CROSSBOWMAN",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_TORSION",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_POLYBOLOS",
        "Name": "TEXT_EVENTSTORY_MERCENARY_POLYBOLOS_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_POLYBOLOS",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_POLYBOLOS",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_STRATEGY",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_CHARIOT",
        "Name": "TEXT_EVENTSTORY_MERCENARY_CHARIOT_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_CHARIOT",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_CHARIOT",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_HUSBANDRY",
        "TechInvalid": "TECH_LAND_CONSOLIDATION",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_HORSEMAN",
        "Name": "TEXT_EVENTSTORY_MERCENARY_HORSEMAN_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_HORSEMAN",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_HORSEMAN",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "TechInvalid": "TECH_WARRIOR_CODE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_HORSE_ARCHER",
        "Name": "TEXT_EVENTSTORY_MERCENARY_HORSE_ARCHER_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_HORSE_ARCHER",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_HORSE_ARCHER",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_SIEGECRAFT",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_CAMEL_ARCHER",
        "Name": "TEXT_EVENTSTORY_MERCENARY_CAMEL_ARCHER_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_CAMEL_ARCHER",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_CAMEL_ARCHER",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_SIEGECRAFT",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_WAR_ELEPHANT",
        "Name": "TEXT_EVENTSTORY_MERCENARY_WAR_ELEPHANT_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_WAR_ELEPHANT",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_WAR_ELEPHANT",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MERCENARY_CATAPHRACT",
        "Name": "TEXT_EVENTSTORY_MERCENARY_CATAPHRACT_TITLE",
        "Text": "TEXT_EVENTSTORY_MERCENARY_CATAPHRACT",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MERCENARY_CATAPHRACT",
            "EVENTOPTION_MERCENARY_NO"
          ]
        },
        "Class": "EVENTCLASS_MERCENARY",
        "TechPrereq": "TECH_WARRIOR_CODE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_PILLAGING_BARBARIANS",
        "Name": "TEXT_EVENTSTORY_PILLAGING_BARBARIANS_TITLE",
        "Text": "TEXT_EVENTSTORY_PILLAGING_BARBARIANS",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PILLAGING_BARBARIANS_REVENGE",
            "EVENTOPTION_PILLAGING_BARBARIANS_ORDERS"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_PILLAGED_TRIBE",
        "iTriggerSubject": "1",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_PILLAGING_BARBARIANS_SUCCESS",
        "Name": "TEXT_EVENTSTORY_PILLAGING_BARBARIANS_SUCCESS_TITLE",
        "Text": "TEXT_EVENTSTORY_PILLAGING_BARBARIANS_SUCCESS",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_PILLAGING_BARBARIANS_SUCCESS"
        },
        "Trigger": "EVENTTRIGGER_GOAL_FINISHED",
        "TriggerData": "GOAL_QUEST_KILL_5_BARBS",
        "EventLinkPrereq": "EVENTLINK_PILLAGING_BARBARIANS",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ENCOURAGING_SITES",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_MONKEY",
            "EVENTOPTION_EXOTIC_PETS_FISH",
            "EVENTOPTION_EXOTIC_PETS_NO"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_FISH_PEACE",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_FISH_PEACE_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_FISH_PEACE",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_FISH"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_EXOTIC_PETS_FISH_PEACE_OK"
        },
        "Class": "EVENTCLASS_PET_FISH",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "10",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_FISH_FAN",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_FISH_FAN_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_FISH_FAN",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_FISH"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_FISH_FAN_OK",
            "EVENTOPTION_EXOTIC_PETS_FISH_FAN_TASTE"
          ]
        },
        "Class": "EVENTCLASS_PET_FISH",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "10",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_FISH_THOUGHTS",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_FISH_THOUGHTS_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_FISH_THOUGHTS",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_FISH"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_FISH_THOUGHTS_FISH",
            "EVENTOPTION_EXOTIC_PETS_FISH_THOUGHTS_DISH"
          ]
        },
        "Class": "EVENTCLASS_PET_FISH",
        "EventLinkPrereq": "EVENTLINK_EXOTIC_PETS_FISH_FAN_TASTE",
        "iWeight": "1",
        "iProb": "25",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_FISH_HORROR",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_FISH_HORROR_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_FISH_HORROR",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_FISH"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_EXOTIC_PETS_FISH_HORROR_OK"
        },
        "Class": "EVENTCLASS_PET_FISH",
        "EventLinkPrereq": "EVENTLINK_EXOTIC_PETS_FISH_THOUGHTS_DISH",
        "iWeight": "1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_FISH_REST",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_FISH_REST_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_FISH_REST",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_FISH"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_EXOTIC_PETS_FISH_REST_OK"
        },
        "Class": "EVENTCLASS_PET_FISH",
        "EventLinkPrereq": "EVENTLINK_EXOTIC_PETS_FISH",
        "iEventLinkTurns": "10",
        "iWeight": "2",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_THIEF",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_THIEF_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_THIEF",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_MONKEY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_MONKEY_THIEF_OK",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_THIEF_NO",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_THIEF_ENOUGH"
          ]
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "1",
        "iRepeatTurns": "10",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_DISTRACTING",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_DISTRACTING_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_DISTRACTING",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_MONKEY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_MONKEY_DISTRACTING_OK",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_DISTRACTING_ENOUGH"
          ]
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "1",
        "iRepeatTurns": "10",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_DIPLOMAT",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_DIPLOMAT_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_DIPLOMAT",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN_WAR",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_MONKEY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_MONKEY_DIPLOMAT_OK",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_DIPLOMAT_NO",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_DIPLOMAT_ENOUGH"
          ]
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "1",
        "iRepeatTurns": "10",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_MONKEY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_WEIRD",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_TRAIN",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_ENOUGH"
          ]
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "1",
        "iRepeatTurns": "10",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_SUCCESS",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_SUCCESS_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_SUCCESS",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_MONKEY_ASSASSIN"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_SUCCESS_OK"
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "2",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_FAILURE",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_FAILURE_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_FAILURE",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_MONKEY_ASSASSIN"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_FAILURE_OK"
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "4",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_UNINTERESTED",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_UNINTERESTED_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_UNINTERESTED",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_MONKEY_ASSASSIN"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_UNINTERESTED_OK"
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "2",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_REVERSAL",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_REVERSAL_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_GRUDGE_REVERSAL",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_MONKEY_ASSASSIN"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_EXOTIC_PETS_MONKEY_GRUDGE_REVERSAL_OK"
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_CAMPAIGN",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_CAMPAIGN_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_CAMPAIGN",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_MONKEY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_MONKEY_CAMPAIGN_OK",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_CAMPAIGN_ENOUGH"
          ]
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "1",
        "iRepeatTurns": "10",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_BAD_POLITICS",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_BAD_POLITICS_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_BAD_POLITICS",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_MONKEY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_MONKEY_BAD_POLITICS_OK",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_BAD_POLITICS_ENOUGH"
          ]
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "1",
        "iRepeatTurns": "10",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_CHARM",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_CHARM_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_CHARM",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_PET_MONKEY"
            },
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_MONKEY_CHARM_OK",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_CHARM_ENOUGH"
          ]
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "1",
        "iRepeatTurns": "10",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_DESTRUCTION",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_DESTRUCTION_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_DESTRUCTION",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_MONKEY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_MONKEY_DESTRUCTION_OK",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_DESTRUCTION_ENOUGH"
          ]
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "1",
        "iRepeatTurns": "10",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_SCIENCE",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_SCIENCE_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_SCIENCE",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_MONKEY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_MONKEY_SCIENCE_OK",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_SCIENCE_ENOUGH"
          ]
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "1",
        "iRepeatTurns": "10",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_CULTURE",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_CULTURE_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_CULTURE",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_MONKEY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_EXOTIC_PETS_MONKEY_CULTURE_OK",
            "EVENTOPTION_EXOTIC_PETS_MONKEY_CULTURE_ENOUGH"
          ]
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "iWeight": "1",
        "iRepeatTurns": "10",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_EXOTIC_PETS_MONKEY_REST",
        "Name": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_REST_TITLE",
        "Text": "TEXT_EVENTSTORY_EXOTIC_PETS_MONKEY_REST",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PET_MONKEY"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_EXOTIC_PETS_MONKEY_REST_OK"
        },
        "Class": "EVENTCLASS_PET_MONKEY",
        "EventLinkPrereq": "EVENTLINK_EXOTIC_PETS_MONKEY",
        "iEventLinkTurns": "10",
        "iWeight": "2",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_MYSTERIOUS_SWORD",
        "Name": "TEXT_EVENTSTORY_MYSTERIOUS_SWORD_TITLE",
        "Text": "TEXT_EVENTSTORY_MYSTERIOUS_SWORD",
        "zBackgroundName": "Farm Couple",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_MIDDLE_AGE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MYSTERIOUS_SWORD_GIFTS",
            "EVENTOPTION_MYSTERIOUS_SWORD_DISMISS",
            "EVENTOPTION_MYSTERIOUS_SWORD_REFUSE"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_MYSTERIOUS_SWORD_USING",
        "Name": "TEXT_EVENTSTORY_MYSTERIOUS_SWORD_USING_TITLE",
        "Text": "TEXT_EVENTSTORY_MYSTERIOUS_SWORD_USING",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_MYSTERIOUS_SWORD"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MYSTERIOUS_SWORD_USING_WIELD",
            "EVENTOPTION_MYSTERIOUS_SWORD_USING_DISPLAY",
            "EVENTOPTION_MYSTERIOUS_SWORD_USING_SELL"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_MYSTERIOUS_SWORD_TAKE",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_MYSTERIOUS_SWORD_PILGRIMS",
        "Name": "TEXT_EVENTSTORY_MYSTERIOUS_SWORD_PILGRIMS_TITLE",
        "Text": "TEXT_EVENTSTORY_MYSTERIOUS_SWORD_PILGRIMS",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MYSTERIOUS_SWORD_PILGRIMS_HOUSING",
            "EVENTOPTION_MYSTERIOUS_SWORD_PILGRIMS_CHARGE"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_MYSTERIOUS_SWORD_USING_DISPLAY",
        "iWeight": "1",
        "iProb": "10"
      },
      {
        "zType": "EVENTSTORY_MYSTERIOUS_SWORD_BREAK",
        "Name": "TEXT_EVENTSTORY_MYSTERIOUS_SWORD_BREAK_TITLE",
        "Text": "TEXT_EVENTSTORY_MYSTERIOUS_SWORD_BREAK",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_MYSTERIOUS_SWORD_BREAK_ACCEPT"
        },
        "Trigger": "EVENTTRIGGER_GENERAL_ATTACK",
        "EventLinkPrereq": "EVENTLINK_MYSTERIOUS_SWORD_USING_WIELD",
        "iWeight": "1",
        "iProb": "5"
      },
      {
        "zType": "EVENTSTORY_MYSTERIOUS_SWORD_DEATH",
        "Name": "TEXT_EVENTSTORY_MYSTERIOUS_SWORD_DEATH_TITLE",
        "Text": "TEXT_EVENTSTORY_MYSTERIOUS_SWORD_DEATH",
        "zEventAuthor": "Josh Raab",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_WAS_LEADER_DEAD_US",
            "SUBJECT_CAPITAL_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_MYSTERIOUS_SWORD_DEATH_ACCEPT"
        },
        "Trigger": "EVENTTRIGGER_DEATH",
        "EventLinkPrereq": "EVENTLINK_MYSTERIOUS_SWORD_USING_WIELD",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_CONSPIRACY",
        "Name": "TEXT_EVENTSTORY_CONSPIRACY_TITLE",
        "Text": "TEXT_EVENTSTORY_CONSPIRACY",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_POPULAR_HERO"
            },
            {
              "First": "0",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            }
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_CONSPIRACY_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iWeight": "1",
        "iProb": "20",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_KNIVES_OF_THE_CONSPIRACY",
        "Name": "TEXT_EVENTSTORY_KNIVES_OF_THE_CONSPIRACY_TITLE",
        "Text": "TEXT_EVENTSTORY_KNIVES_OF_THE_CONSPIRACY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHARACTER_MAX_ANGRY"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_KNIVES_OF_THE_CONSPIRACY_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_CONSPIRACY",
        "iWeight": "1",
        "iProb": "10"
      },
      {
        "zType": "EVENTSTORY_TEMPTING_RUMORS",
        "Name": "TEXT_EVENTSTORY_TEMPTING_RUMORS_TITLE",
        "Text": "TEXT_EVENTSTORY_TEMPTING_RUMORS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_NON_LEADER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_POPULAR_HERO"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TEMPTING_RUMORS_OPTION_0",
            "EVENTOPTION_TEMPTING_RUMORS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_FAMILY_SUCCESSION",
        "Name": "TEXT_EVENTSTORY_FAMILY_SUCCESSION_TITLE",
        "Text": "TEXT_EVENTSTORY_FAMILY_SUCCESSION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_FAMILY_NON_HEIR"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_FAMILY_SUCCESSION_YES",
            "EVENTOPTION_FAMILY_SUCCESSION_NO"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_ASCETIC_MOVEMENT",
        "Name": "TEXT_EVENTSTORY_ASCETIC_MOVEMENT_TITLE",
        "Text": "TEXT_EVENTSTORY_ASCETIC_MOVEMENT",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CITY_DISCONTENT_MODERATE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ASCETIC_MOVEMENT_REPRESS",
            "EVENTOPTION_ASCETIC_MOVEMENT_ALLOW"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_WAYWARD_SUBJECT",
        "Name": "TEXT_EVENTSTORY_WAYWARD_SUBJECT_TITLE",
        "Text": "TEXT_EVENTSTORY_WAYWARD_SUBJECT",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_HIDING_ABROAD"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WAYWARD_SUBJECT_FORGIVE",
            "EVENTOPTION_WAYWARD_SUBJECT_IMPRISON"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iWeight": "1",
        "iProb": "10",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_GEM_SEEKERS",
        "Name": "TEXT_EVENTSTORY_GEM_SEEKERS_TITLE",
        "Text": "TEXT_EVENTSTORY_GEM_SEEKERS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_HAS_GEM"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_FAMILY_NON_LEADER"
            },
            {
              "First": "0",
              "Second": "SUBJECT_FAMILY_PATRONS"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GEM_SEEKERS_YES",
            "EVENTOPTION_GEM_SEEKERS_GIFT",
            "EVENTOPTION_GEM_SEEKERS_NO"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_NEW_AMBASSADOR",
        "Name": "TEXT_EVENTSTORY_NEW_AMBASSADOR_TITLE",
        "Text": "TEXT_EVENTSTORY_NEW_AMBASSADOR",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_AMBASSADOR"
            },
            {
              "First": "2",
              "Second": "SUBJECT_FAMILY_MAX_UPSET"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_NEW_AMBASSADOR_OPTION_0",
            "EVENTOPTION_NEW_AMBASSADOR_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_DARKENED_MOON",
        "Name": "TEXT_EVENTSTORY_DARKENED_MOON_TITLE",
        "Text": "TEXT_EVENTSTORY_DARKENED_MOON",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_DARKENED_MOON_ATTACK",
            "EVENTOPTION_DARKENED_MOON_SCIENCE",
            "EVENTOPTION_DARKENED_MOON_GODS"
          ]
        },
        "iMinLeader": "2",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RENOWNED_BEAUTY",
        "Name": "TEXT_EVENTSTORY_RENOWNED_BEAUTY_TITLE",
        "Text": "TEXT_EVENTSTORY_RENOWNED_BEAUTY",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_MALE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_NOT_GAY"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CHANCELLOR"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RENOWNED_BEAUTY_ADVICE",
            "EVENTOPTION_RENOWNED_BEAUTY_DIVORCE",
            "EVENTOPTION_RENOWNED_BEAUTY_COUNCIL"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_THE_LITERATE",
        "Name": "TEXT_EVENTSTORY_THE_LITERATE_TITLE",
        "Text": "TEXT_EVENTSTORY_THE_LITERATE",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_THE_LITERATE_CITIZEN",
            "EVENTOPTION_THE_LITERATE_THE_LITERATE",
            "EVENTOPTION_THE_LITERATE_PROPAGANDA"
          ]
        },
        "TechPrereq": "TECH_STONECUTTING",
        "TechInvalid": "TECH_SCHOLARSHIP",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_PROPAGANDA",
        "Name": "TEXT_EVENTSTORY_PROPAGANDA_TITLE",
        "Text": "TEXT_EVENTSTORY_PROPAGANDA",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CITY_PROPAGANDA"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_PROPAGANDA_CITIZEN",
            "EVENTOPTION_PROPAGANDA_FOOD_VS_CULTURE"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_INSOLENT_GENERALS",
        "Name": "TEXT_EVENTSTORY_INSOLENT_GENERALS_TITLE",
        "Text": "TEXT_EVENTSTORY_INSOLENT_GENERALS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "2",
            "Second": "SUBJECT_GENERAL"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_PLAYER_SAME",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_INSOLENT_GENERALS_TRAINING",
            "EVENTOPTION_INSOLENT_GENERALS_WAR"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_LAW_MUST_I_DO_EVERYTHING",
        "Name": "TEXT_EVENTSTORY_LAW_MUST_I_DO_EVERYTHING_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_MUST_I_DO_EVERYTHING",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_LAW_VASSALAGE"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_LAW_POSITIVE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_MUST_I_DO_EVERYTHING_OPTION_0",
            "EVENTOPTION_LAW_MUST_I_DO_EVERYTHING_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40",
        "aeLawInvalid": {
          "zValue": [
            "LAW_CENTRALIZATION",
            "LAW_VASSALAGE"
          ]
        },
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_LAW_MUST_I_DO_EVERYTHING",
            "EVENTSTORY_LAW_BALANCE_OF_POWER"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_LAW_BALANCE_OF_POWER",
        "Name": "TEXT_EVENTSTORY_LAW_BALANCE_OF_POWER_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_BALANCE_OF_POWER",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_BALANCE_OF_POWER_OPTION_0",
            "EVENTOPTION_LAW_BALANCE_OF_POWER_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_US",
        "iWeight": "2",
        "iRepeatTurns": "40",
        "aeLawInvalid": {
          "zValue": [
            "LAW_CENTRALIZATION",
            "LAW_VASSALAGE"
          ]
        },
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_LAW_MUST_I_DO_EVERYTHING",
            "EVENTSTORY_LAW_BALANCE_OF_POWER"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_LAW_TIME_TO_CELEBRATE",
        "Name": "TEXT_EVENTSTORY_LAW_TIME_TO_CELEBRATE_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_TIME_TO_CELEBRATE",
        "zBackgroundName": "Wedding",
        "zAudioTrigger": "AUDIO_UI_EVENT_FESTIVITIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_0",
            "EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_1",
            "EVENTOPTION_LAW_TIME_TO_CELEBRATE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PRODUCTION_PROJECT",
        "TriggerData": "PROJECT_FESTIVAL",
        "iWeight": "3",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_LAW_A_SINGULAR_VISION",
        "Name": "TEXT_EVENTSTORY_LAW_A_SINGULAR_VISION_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_A_SINGULAR_VISION",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_LAW_TYRANNY"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_MALE"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_LAW_POSITIVE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_0",
            "EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_1",
            "EVENTOPTION_LAW_A_SINGULAR_VISION_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_LAW_SHARE_THE_BURDEN",
        "Name": "TEXT_EVENTSTORY_LAW_SHARE_THE_BURDEN_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_SHARE_THE_BURDEN",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_LAW_CONSTITUTION"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_LAW_POSITIVE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_SHARE_THE_BURDEN_OPTION_0",
            "EVENTOPTION_LAW_SHARE_THE_BURDEN_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40",
        "aeLawInvalid": {
          "zValue": [
            "LAW_TYRANNY",
            "LAW_CONSTITUTION"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_LAW_THE_STREET_SINGER",
        "Name": "TEXT_EVENTSTORY_LAW_THE_STREET_SINGER_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_THE_STREET_SINGER",
        "zBackgroundName": "poetess",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_ZAMRA",
            "SUBJECT_LAW_EPICS"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_LAW_POSITIVE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_0",
            "EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_1",
            "EVENTOPTION_LAW_THE_STREET_SINGER_OPTION_2"
          ]
        },
        "iWeight": "3",
        "iRepeatTurns": "40",
        "aeLawInvalid": {
          "zValue": [
            "LAW_EPICS",
            "LAW_EXPLORATION"
          ]
        },
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_LAW_THE_STREET_SINGER",
            "EVENTSTORY_LAW_NEW_HORIZONS"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_LAW_NEW_HORIZONS",
        "Name": "TEXT_EVENTSTORY_LAW_NEW_HORIZONS_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_NEW_HORIZONS",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_GREAT_MINISTER"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_NEW_HORIZONS_OPTION_0",
            "EVENTOPTION_LAW_NEW_HORIZONS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_SCOUT",
        "iWeight": "2",
        "iRepeatTurns": "40",
        "aeLawInvalid": {
          "zValue": [
            "LAW_EPICS",
            "LAW_EXPLORATION"
          ]
        },
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_LAW_THE_STREET_SINGER",
            "EVENTSTORY_LAW_NEW_HORIZONS"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_LAW_IDLE_HANDS",
        "Name": "TEXT_EVENTSTORY_LAW_IDLE_HANDS_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_IDLE_HANDS",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_LAW_PROFESSIONAL_ARMY"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_LAW_POSITIVE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_IDLE_HANDS_OPTION_0",
            "EVENTOPTION_LAW_IDLE_HANDS_OPTION_1",
            "EVENTOPTION_LAW_IDLE_HANDS_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_LAW_IDLE_HANDS",
            "EVENTSTORY_LAW_A_FEEBLE_MILITARY"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_LAW_A_FEEBLE_MILITARY",
        "Name": "TEXT_EVENTSTORY_LAW_A_FEEBLE_MILITARY_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_A_FEEBLE_MILITARY",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_LAW_VOLUNTEERS"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_GREAT_SOLDIER"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_LAW_POSITIVE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_A_FEEBLE_MILITARY_OPTION_0",
            "EVENTOPTION_LAW_A_FEEBLE_MILITARY_OPTION_1"
          ]
        },
        "iWeight": "3",
        "iRepeatTurns": "40",
        "aeLawInvalid": {
          "zValue": [
            "LAW_VOLUNTEERS",
            "LAW_PROFESSIONAL_ARMY"
          ]
        },
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_LAW_IDLE_HANDS",
            "EVENTSTORY_LAW_A_FEEBLE_MILITARY"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_LAW_CAPTIVES_OF_BELIEF",
        "Name": "TEXT_EVENTSTORY_LAW_CAPTIVES_OF_BELIEF_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_CAPTIVES_OF_BELIEF",
        "zBackgroundName": "Captured_Soldiers",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_BARBARIAN",
            "SUBJECT_LEADER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_FAMILY_CLERICS"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_CAPTIVES_OF_BELIEF_OPTION_0",
            "EVENTOPTION_LAW_CAPTIVES_OF_BELIEF_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40",
        "aeLawInvalid": {
          "zValue": [
            "LAW_TOLERANCE",
            "LAW_ORTHODOXY"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_LAW_HEAVENS_CHOSEN",
        "Name": "TEXT_EVENTSTORY_LAW_HEAVENS_CHOSEN_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_HEAVENS_CHOSEN",
        "zBackgroundName": "Escaped_Slave",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_0",
            "EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_1",
            "EVENTOPTION_LAW_HEAVENS_CHOSEN_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_GOAL_FINISHED",
        "TriggerData": "GOAL_REVELATION",
        "iWeight": "3",
        "iRepeatTurns": "40",
        "aeLawInvalid": {
          "zValue": [
            "LAW_DIVINE_RULE",
            "LAW_SECULARISM"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_LAW_FRIEND_OF_THE_FAITH",
        "Name": "TEXT_EVENTSTORY_LAW_FRIEND_OF_THE_FAITH_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_FRIEND_OF_THE_FAITH",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_FAMILY_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_FRIEND_OF_THE_FAITH_OPTION_0",
            "EVENTOPTION_LAW_FRIEND_OF_THE_FAITH_OPTION_1"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_LAW_ABUNDANCE_OF_RICHES",
        "Name": "TEXT_EVENTSTORY_LAW_ABUNDANCE_OF_RICHES_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_ABUNDANCE_OF_RICHES",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_LAW_ASCETICISM"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_LAW_POSITIVE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_ABUNDANCE_OF_RICHES_OPTION_0",
            "EVENTOPTION_LAW_ABUNDANCE_OF_RICHES_OPTION_1"
          ]
        },
        "iWeight": "3",
        "iRepeatTurns": "40",
        "aeLawInvalid": {
          "zValue": "LAW_ASCETICISM"
        }
      },
      {
        "zType": "EVENTSTORY_LAW_UNPAID_DEBTS",
        "Name": "TEXT_EVENTSTORY_LAW_UNPAID_DEBTS_TITLE",
        "Text": "TEXT_EVENTSTORY_LAW_UNPAID_DEBTS",
        "zAudioTrigger": "AUDIO_UI_EVENT_SCATTERING_DUST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LAW_MONETARY_REFORM"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_LAW_POSITIVE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_0",
            "EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_1",
            "EVENTOPTION_LAW_UNPAID_DEBTS_OPTION_2"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "40",
        "aeLawInvalid": {
          "zValue": [
            "LAW_COIN_DEBASEMENT",
            "LAW_MONETARY_REFORM"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_VIEW_FROM_THE_THRONE",
        "Name": "TEXT_EVENTSTORY_VIEW_FROM_THE_THRONE_TITLE",
        "Text": "TEXT_EVENTSTORY_VIEW_FROM_THE_THRONE",
        "zBackgroundName": "mysterious pillar",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_VIEW_FROM_THE_THRONE_OPTION_0",
            "EVENTOPTION_VIEW_FROM_THE_THRONE_OPTION_1",
            "EVENTOPTION_VIEW_FROM_THE_THRONE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_APADANA",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_WONDER_WARM_RELATIONS",
        "Name": "TEXT_EVENTSTORY_WONDER_WARM_RELATIONS_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_WARM_RELATIONS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WONDER_WARM_RELATIONS_OPTION_0",
            "EVENTOPTION_WONDER_WARM_RELATIONS_OPTION_1",
            "EVENTOPTION_WONDER_WARM_RELATIONS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_BATHS_3",
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_WONDER_ETERNAL_REST",
        "Name": "TEXT_EVENTSTORY_WONDER_ETERNAL_REST_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_ETERNAL_REST",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_CHILD_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "2",
            "Second": "SUBJECT_HEIR_US"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WONDER_ETERNAL_REST_OPTION_0",
            "EVENTOPTION_WONDER_ETERNAL_REST_OPTION_1",
            "EVENTOPTION_WONDER_ETERNAL_REST_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_MAUSOLEUM",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_WONDER_GODS_AND_MEN",
        "Name": "TEXT_EVENTSTORY_WONDER_GODS_AND_MEN_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_GODS_AND_MEN",
        "zBackgroundName": "Pantheon",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WONDER_GODS_AND_MEN_OPTION_0",
            "EVENTOPTION_WONDER_GODS_AND_MEN_OPTION_1",
            "EVENTOPTION_WONDER_GODS_AND_MEN_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_PANTHEON",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_WONDER_THE_CIRCUS",
        "Name": "TEXT_EVENTSTORY_WONDER_THE_CIRCUS_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_THE_CIRCUS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WONDER_THE_CIRCUS_OPTION_0",
            "EVENTOPTION_WONDER_THE_CIRCUS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_CIRCUS_MAXIMUS",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_WONDER_A_SPIRITUAL_CROSSROADS",
        "Name": "TEXT_EVENTSTORY_WONDER_A_SPIRITUAL_CROSSROADS_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_A_SPIRITUAL_CROSSROADS",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_RELIGION",
            "SUBJECT_RELIGION"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_RELIGION_CITY_NO",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_RELIGION_CITY_NO",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WONDER_A_SPIRITUAL_CROSSROADS_OPTION_0",
            "EVENTOPTION_WONDER_A_SPIRITUAL_CROSSROADS_OPTION_1",
            "EVENTOPTION_WONDER_A_SPIRITUAL_CROSSROADS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_HAGIA_SOPHIA",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_WONDER_BEACON_OF_KNOWLEDGE",
        "Name": "TEXT_EVENTSTORY_WONDER_BEACON_OF_KNOWLEDGE_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_BEACON_OF_KNOWLEDGE",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WONDER_BEACON_OF_KNOWLEDGE_OPTION_0",
            "EVENTOPTION_WONDER_BEACON_OF_KNOWLEDGE_OPTION_1",
            "EVENTOPTION_WONDER_BEACON_OF_KNOWLEDGE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_MUSAEUM",
        "iWeight": "1",
        "iProb": "25"
      },
      {
        "zType": "EVENTSTORY_WONDER_PUBLIC_SPECTACLE",
        "Name": "TEXT_EVENTSTORY_WONDER_PUBLIC_SPECTACLE_TITLE",
        "Text": "TEXT_EVENTSTORY_WONDER_PUBLIC_SPECTACLE",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_WONDER_PUBLIC_SPECTACLE_OPTION_0",
            "EVENTOPTION_WONDER_PUBLIC_SPECTACLE_OPTION_1",
            "EVENTOPTION_WONDER_PUBLIC_SPECTACLE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "TriggerData": "IMPROVEMENT_THEATER_3",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RELIGION_MOUNTAIN_LIGHTS",
        "Name": "TEXT_EVENTSTORY_RELIGION_MOUNTAIN_LIGHTS_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_MOUNTAIN_LIGHTS",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_ZOROASTRIANISM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "2",
            "Second": "SUBJECT_RELIGION_STATE_NO"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_MOUNTAIN_LIGHTS_OPTION_0",
            "EVENTOPTION_RELIGION_MOUNTAIN_LIGHTS_OPTION_1"
          ]
        },
        "iMinLeader": "2",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RELIGION_FIRE_IN_THE_MARKET",
        "Name": "TEXT_EVENTSTORY_RELIGION_FIRE_IN_THE_MARKET_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_FIRE_IN_THE_MARKET",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_ZOROASTRIANISM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "2",
            "Second": "SUBJECT_PLAYER_NO_STATE_RELIGION"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_0",
            "EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_1",
            "EVENTOPTION_RELIGION_FIRE_IN_THE_MARKET_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RELIGION_NOMADS",
        "Name": "TEXT_EVENTSTORY_RELIGION_NOMADS_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_NOMADS",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CAPITAL_US",
            "SUBJECT_JUDAISM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_RELIGION_STATE_NO"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_NOMADS_OPTION_0",
            "EVENTOPTION_RELIGION_NOMADS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iMinLeader": "2",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RELIGION_READING_THE_WORD",
        "Name": "TEXT_EVENTSTORY_RELIGION_READING_THE_WORD_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_READING_THE_WORD",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_JUDAISM",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_RELIGION_STATE_NO"
            },
            {
              "First": "2",
              "Second": "SUBJECT_GREAT_MINISTER"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_READING_THE_WORD_OPTION_0",
            "EVENTOPTION_RELIGION_READING_THE_WORD_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iMinLeader": "2",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RELIGION_THE_APOSTLES",
        "Name": "TEXT_EVENTSTORY_RELIGION_THE_APOSTLES_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_THE_APOSTLES",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_CHRISTIANITY",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_RELIGION_STATE_NO"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_0",
            "EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_1",
            "EVENTOPTION_RELIGION_THE_APOSTLES_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iMinLeader": "3",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RELIGION_KINGDOM_OF_GOD",
        "Name": "TEXT_EVENTSTORY_RELIGION_KINGDOM_OF_GOD_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_KINGDOM_OF_GOD",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_CHRISTIANITY",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_RELIGION_STATE_NO"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_KINGDOM_OF_GOD_OPTION_0",
            "EVENTOPTION_RELIGION_KINGDOM_OF_GOD_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iMinLeader": "4",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RELIGION_YOUR_BLESSING",
        "Name": "TEXT_EVENTSTORY_RELIGION_YOUR_BLESSING_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_YOUR_BLESSING",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_MANICHAEISM"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_GREAT_MINISTER"
            },
            {
              "First": "3",
              "Second": "SUBJECT_RELIGION_STATE_NO"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_0",
            "EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_1",
            "EVENTOPTION_RELIGION_YOUR_BLESSING_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RELIGION_LIGHT_AND_DARK",
        "Name": "TEXT_EVENTSTORY_RELIGION_LIGHT_AND_DARK_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_LIGHT_AND_DARK",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_MANICHAEISM"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_NO_STATE_RELIGION"
            },
            {
              "First": "2",
              "Second": "SUBJECT_FAMILY_NO_STATE_RELIGION"
            },
            {
              "First": "4",
              "Second": "SUBJECT_RELIGION_STATE_NO"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_SAME",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_LIGHT_AND_DARK_OPTION_0",
            "EVENTOPTION_RELIGION_LIGHT_AND_DARK_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iMinLeader": "2",
        "iWeight": "4",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_CULTURE_GADFLY",
        "Name": "TEXT_EVENTSTORY_CULTURE_GADFLY_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_GADFLY",
        "zEventURL": "https://en.wikipedia.org/wiki/Social_gadfly",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "2",
              "Second": "SUBJECT_NON_GREAT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            },
            {
              "First": "2",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_SCHOLAR"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_GADFLY_OPTION_0",
            "EVENTOPTION_CULTURE_GADFLY_OPTION_1"
          ]
        },
        "iImageSubject": "2",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CULTURE_SHOOTING_STAR",
        "Name": "TEXT_EVENTSTORY_CULTURE_SHOOTING_STAR_TITLE",
        "Text": "TEXT_EVENTSTORY_CULTURE_SHOOTING_STAR",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_ONLOOKERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CULTURE_SHOOTING_STAR_OPTION_0",
            "EVENTOPTION_CULTURE_SHOOTING_STAR_OPTION_1",
            "EVENTOPTION_CULTURE_SHOOTING_STAR_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "iWeight": "1",
        "iRepeatTurns": "76"
      },
      {
        "zType": "EVENTSTORY_TRAIT_MY_CONDOLENCES",
        "Name": "TEXT_EVENTSTORY_TRAIT_MY_CONDOLENCES_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_MY_CONDOLENCES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_LEADER_THEM",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_MOURNING"
            },
            {
              "First": "2",
              "Second": "SUBJECT_AMBASSADOR"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTSTORY_TRAIT_MY_CONDOLENCES",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_MY_CONDOLENCES_OPTION_0",
            "EVENTOPTION_TRAIT_MY_CONDOLENCES_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_MOURNING",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_LOCAL_BRIGANDS",
        "Name": "TEXT_EVENTSTORY_LOCAL_BRIGANDS_TITLE",
        "Text": "TEXT_EVENTSTORY_LOCAL_BRIGANDS",
        "zBackgroundName": "MudFight",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_UNIT_MELEE"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LOCAL_BRIGANDS_OPTION_0",
            "EVENTOPTION_LOCAL_BRIGANDS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iMinLeader": "4",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_LOCAL_BRIGANDS_ENDING_A",
        "Name": "TEXT_EVENTSTORY_LOCAL_BRIGANDS_ENDING_A_TITLE",
        "Text": "TEXT_EVENTSTORY_LOCAL_BRIGANDS_ENDING_A",
        "zBackgroundName": "promotion_01",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_UNIT_MELEE"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_LOCAL_BRIGANDS_ENDING_A_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_LOCAL_BRIGANDS",
        "iWeight": "2"
      },
      {
        "zType": "EVENTSTORY_LOCAL_BRIGANDS_ENDING_B",
        "Name": "TEXT_EVENTSTORY_LOCAL_BRIGANDS_ENDING_B_TITLE",
        "Text": "TEXT_EVENTSTORY_LOCAL_BRIGANDS_ENDING_B",
        "zBackgroundName": "promotion_01",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_UNIT_MELEE"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_LOCAL_BRIGANDS_ENDING_B_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_LOCAL_BRIGANDS",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_LOCAL_BRIGANDS_ENDING_C",
        "Name": "TEXT_EVENTSTORY_LOCAL_BRIGANDS_ENDING_C_TITLE",
        "Text": "TEXT_EVENTSTORY_LOCAL_BRIGANDS_ENDING_C",
        "zEventAuthor": "Bob Thomas",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_UNIT_MELEE"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTSTORY_LOCAL_BRIGANDS_ENDING_C",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LOCAL_BRIGANDS_ENDING_C_OPTION_0",
            "EVENTOPTION_LOCAL_BRIGANDS_ENDING_C_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_LOCAL_BRIGANDS",
        "iWeight": "1",
        "aeEventStoryNoRepeat": {
          "zValue": [
            "EVENTSTORY_LOCAL_BRIGANDS_ENDING_A",
            "EVENTSTORY_LOCAL_BRIGANDS_ENDING_B"
          ]
        }
      },
      {
        "zType": "EVENTSTORY_AN_UNLIKELY_SCENARIO",
        "Name": "TEXT_EVENTSTORY_AN_UNLIKELY_SCENARIO_TITLE",
        "Text": "TEXT_EVENTSTORY_AN_UNLIKELY_SCENARIO",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_RELIGION_PLAYER"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_AN_UNLIKELY_SCENARIO_NO",
            "EVENTOPTION_AN_UNLIKELY_SCENARIO_YES"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_RELIGIOUS_FREEDOM",
        "Name": "TEXT_EVENTSTORY_RELIGIOUS_FREEDOM_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGIOUS_FREEDOM",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_RELIGION_STATE",
            "SUBJECT_RELIGION_PLAYER"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGIOUS_FREEDOM_ORTHODOXY",
            "EVENTOPTION_RELIGIOUS_FREEDOM_TOLERANCE",
            "EVENTOPTION_RELIGIOUS_FREEDOM_FEARFUL"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_AMBASSADOR_CANDIDATES",
        "Name": "TEXT_EVENTSTORY_AMBASSADOR_CANDIDATES_TITLE",
        "Text": "TEXT_EVENTSTORY_AMBASSADOR_CANDIDATES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_NO_JOB"
            },
            {
              "First": "1",
              "Second": "SUBJECT_NO_JOB"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_AMBASSADOR_CANDIDATES_FIRST",
            "EVENTOPTION_AMBASSADOR_CANDIDATES_SECOND",
            "EVENTOPTION_COUNCIL_CANDIDATES_NEITHER"
          ]
        },
        "CouncilInvalid": "COUNCIL_AMBASSADOR",
        "iWeight": "2",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_CHANCELLOR_CANDIDATES",
        "Name": "TEXT_EVENTSTORY_CHANCELLOR_CANDIDATES_TITLE",
        "Text": "TEXT_EVENTSTORY_CHANCELLOR_CANDIDATES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_NO_JOB"
            },
            {
              "First": "1",
              "Second": "SUBJECT_NO_JOB"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHANCELLOR_CANDIDATES_FIRST",
            "EVENTOPTION_CHANCELLOR_CANDIDATES_SECOND",
            "EVENTOPTION_COUNCIL_CANDIDATES_NEITHER"
          ]
        },
        "CouncilInvalid": "COUNCIL_CHANCELLOR",
        "iWeight": "2",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_SPYMASTER_CANDIDATES",
        "Name": "TEXT_EVENTSTORY_SPYMASTER_CANDIDATES_TITLE",
        "Text": "TEXT_EVENTSTORY_SPYMASTER_CANDIDATES",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_NO_JOB"
            },
            {
              "First": "1",
              "Second": "SUBJECT_NO_JOB"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SPYMASTER_CANDIDATES_FIRST",
            "EVENTOPTION_SPYMASTER_CANDIDATES_SECOND",
            "EVENTOPTION_COUNCIL_CANDIDATES_NEITHER"
          ]
        },
        "CouncilInvalid": "COUNCIL_SPYMASTER",
        "iWeight": "2",
        "iRepeatTurns": "20"
      },
      {
        "zType": "EVENTSTORY_TECH_VAULTING_SEWER_SYSTEM",
        "Name": "TEXT_EVENTSTORY_TECH_VAULTING_SEWER_SYSTEM_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_VAULTING_SEWER_SYSTEM",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_0",
            "EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_1",
            "EVENTOPTION_TECH_VAULTING_SEWER_SYSTEM_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_VAULTING",
        "iWeight": "2",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_TECH_VAULTING_HOUSES_OF_THE_HOLY",
        "Name": "TEXT_EVENTSTORY_TECH_VAULTING_HOUSES_OF_THE_HOLY_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_VAULTING_HOUSES_OF_THE_HOLY",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US",
            "SUBJECT_RELIGION"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_0",
            "EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_1",
            "EVENTOPTION_TECH_VAULTING_HOUSES_OF_THE_HOLY_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_VAULTING",
        "iWeight": "2",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_TECH_VAULTING_NEW_OBSESSION",
        "Name": "TEXT_EVENTSTORY_TECH_VAULTING_NEW_OBSESSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_VAULTING_NEW_OBSESSION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US",
            "SUBJECT_WAS_LEADER_DEAD_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_ADULT"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_0",
            "EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_1",
            "EVENTOPTION_TECH_VAULTING_NEW_OBSESSION_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_VAULTING",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_BODKIN_ACCOMPLICES",
        "Name": "TEXT_EVENTSTORY_TECH_BODKIN_ACCOMPLICES_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_BODKIN_ACCOMPLICES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_LEADER_THEM",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "2",
              "Second": "SUBJECT_FAMILY_NON_LEADER"
            },
            {
              "First": "2",
              "Second": "SUBJECT_FAMILY_MAX_UPSET"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTSTORY_TECH_BODKIN_ACCOMPLICES_CHARACTER_1",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_0",
            "EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_1",
            "EVENTOPTION_TECH_BODKIN_ACCOMPLICES_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_BODKIN_ARROW",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_BODKIN_THE_COURTS_MEN",
        "Name": "TEXT_EVENTSTORY_TECH_BODKIN_THE_COURTS_MEN_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_BODKIN_THE_COURTS_MEN",
        "zBackgroundName": "promotion_01",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_UNIT_RANGED"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_0",
            "EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_1",
            "EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_2",
            "EVENTOPTION_TECH_BODKIN_THE_COURTS_MEN_OPTION_3"
          ]
        },
        "TechPrereq": "TECH_BODKIN_ARROW",
        "iWeight": "2",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_TECH_LATEEN_MAIDEN_VOYAGE",
        "Name": "TEXT_EVENTSTORY_TECH_LATEEN_MAIDEN_VOYAGE_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_LATEEN_MAIDEN_VOYAGE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_LATEEN_MAIDEN_VOYAGE_OPTION_0",
            "EVENTOPTION_TECH_LATEEN_MAIDEN_VOYAGE_OPTION_1",
            "EVENTOPTION_TECH_LATEEN_MAIDEN_VOYAGE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_TECHNOLOGY",
        "TriggerData": "TECH_LATEEN_SAIL",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_LATEEN_ADRIFT",
        "Name": "TEXT_EVENTSTORY_TECH_LATEEN_ADRIFT_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_LATEEN_ADRIFT",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US",
            "SUBJECT_CITY_THEM",
            "SUBJECT_RELIGION"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_0",
            "EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_1",
            "EVENTOPTION_TECH_LATEEN_ADRIFT_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_LATEEN_SAIL",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_LATEEN_CAPSIZED_SPIES",
        "Name": "TEXT_EVENTSTORY_TECH_LATEEN_CAPSIZED_SPIES_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_LATEEN_CAPSIZED_SPIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "2",
            "Second": "SUBJECT_FAMILY_MAX_UPSET"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "2"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_0",
            "EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_1",
            "EVENTOPTION_TECH_LATEEN_CAPSIZED_SPIES_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_LATEEN_SAIL",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_HYDRAULICS_THE_AUTOMATON",
        "Name": "TEXT_EVENTSTORY_TECH_HYDRAULICS_THE_AUTOMATON_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_HYDRAULICS_THE_AUTOMATON",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_HYDRAULICS_THE_AUTOMATON_OPTION_0",
            "EVENTOPTION_TECH_HYDRAULICS_THE_AUTOMATON_OPTION_1",
            "EVENTOPTION_TECH_HYDRAULICS_THE_AUTOMATON_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_HYDRAULICS",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_BODKIN_THE_POINTY_END",
        "Name": "TEXT_EVENTSTORY_TECH_BODKIN_THE_POINTY_END_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_BODKIN_THE_POINTY_END",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_BODKIN_THE_POINTY_END_OPTION_0",
            "EVENTOPTION_TECH_BODKIN_THE_POINTY_END_OPTION_1",
            "EVENTOPTION_TECH_BODKIN_THE_POINTY_END_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_BODKIN_ARROW",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_HYDRAULICS_RUNNING_WATERS",
        "Name": "TEXT_EVENTSTORY_TECH_HYDRAULICS_RUNNING_WATERS_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_HYDRAULICS_RUNNING_WATERS",
        "zEventURL": "https://en.wikipedia.org/wiki/Turpan_water_system",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_HYDRAULICS_RUNNING_WATERS_OPTION_0",
            "EVENTOPTION_TECH_HYDRAULICS_RUNNING_WATERS_OPTION_1",
            "EVENTOPTION_TECH_HYDRAULICS_RUNNING_WATERS_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_HYDRAULICS",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_WINDLASS_EARLY_ADOPTERS",
        "Name": "TEXT_EVENTSTORY_TECH_WINDLASS_EARLY_ADOPTERS_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_WINDLASS_EARLY_ADOPTERS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_WINDLASS_EARLY_ADOPTERS_OPTION_0",
            "EVENTOPTION_TECH_WINDLASS_EARLY_ADOPTERS_OPTION_1",
            "EVENTOPTION_TECH_WINDLASS_EARLY_ADOPTERS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_TECHNOLOGY",
        "TriggerData": "TECH_WINDLASS",
        "iWeight": "2",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_WINDLASS_ROPE_AND_WINCH",
        "Name": "TEXT_EVENTSTORY_TECH_WINDLASS_ROPE_AND_WINCH_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_WINDLASS_ROPE_AND_WINCH",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_LOW_CHARISMA"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_0",
            "EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_1",
            "EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_2",
            "EVENTOPTION_TECH_WINDLASS_ROPE_AND_WINCH_OPTION_3"
          ]
        },
        "iImageSubject": "1",
        "TechPrereq": "TECH_WINDLASS",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_WINDLASS_ACCIDENTS_HAPPEN",
        "Name": "TEXT_EVENTSTORY_TECH_WINDLASS_ACCIDENTS_HAPPEN_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_WINDLASS_ACCIDENTS_HAPPEN",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_HAS_INCENSE"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_FAMILY_MAX_ANGRY"
            },
            {
              "First": "2",
              "Second": "SUBJECT_GREAT_SCIENTIST"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_0",
            "EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_1",
            "EVENTOPTION_TECH_WINDLASS_ACCIDENTS_HAPPEN_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_WINDLASS",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_SARISSA_COMPANION_CAVALRY",
        "Name": "TEXT_EVENTSTORY_TECH_SARISSA_COMPANION_CAVALRY_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_SARISSA_COMPANION_CAVALRY",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_SARISSA_COMPANION_CAVALRY_OPTION_0",
            "EVENTOPTION_TECH_SARISSA_COMPANION_CAVALRY_OPTION_1",
            "EVENTOPTION_TECH_SARISSA_COMPANION_CAVALRY_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_SARISSA",
        "TechInvalid": "TECH_PHALANX",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_SARISSA_FOOLISH_DISPLAY",
        "Name": "TEXT_EVENTSTORY_TECH_SARISSA_FOOLISH_DISPLAY_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_SARISSA_FOOLISH_DISPLAY",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_TEENAGER"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTSTORY_TECH_SARISSA_FOOLISH_DISPLAY_CHARACTER_1"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_0",
            "EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_1",
            "EVENTOPTION_TECH_SARISSA_FOOLISH_DISPLAY_OPTION_2"
          ]
        },
        "iImageSubject": "1",
        "TechPrereq": "TECH_SARISSA",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_BARDING_NOBLE_EXCESS",
        "Name": "TEXT_EVENTSTORY_TECH_BARDING_NOBLE_EXCESS_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_BARDING_NOBLE_EXCESS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "2",
              "Second": "SUBJECT_TEENAGER_OR_ADULT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_0",
            "EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_1",
            "EVENTOPTION_TECH_BARDING_NOBLE_EXCESS_OPTION_2"
          ]
        },
        "iImageSubject": "2",
        "TechPrereq": "TECH_BARDING",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_BARDING_A_FRIENDLY_REQUEST",
        "Name": "TEXT_EVENTSTORY_TECH_BARDING_A_FRIENDLY_REQUEST_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_BARDING_A_FRIENDLY_REQUEST",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_0",
            "EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_1",
            "EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_2",
            "EVENTOPTION_TECH_BARDING_A_FRIENDLY_REQUEST_OPTION_3"
          ]
        },
        "iImageSubject": "1",
        "TechPrereq": "TECH_BARDING",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_BARDING_CLEMENCY",
        "Name": "TEXT_EVENTSTORY_TECH_BARDING_CLEMENCY_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_BARDING_CLEMENCY",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CITY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_GOVERNOR"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CITY_WITH_GOVERNOR"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_CITY_SAME",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_0",
            "EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_1",
            "EVENTOPTION_TECH_BARDING_CLEMENCY_OPTION_2"
          ]
        },
        "iImageSubject": "1",
        "TechPrereq": "TECH_JURISPRUDENCE",
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TECH_BARDING_SURVIVORS",
        "Name": "TEXT_EVENTSTORY_TECH_BARDING_SURVIVORS_TITLE",
        "Text": "TEXT_EVENTSTORY_TECH_BARDING_SURVIVORS",
        "zBackgroundName": "promotion_01",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_UNIT_MOUNTED"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TECH_BARDING_SURVIVORS_OPTION_0",
            "EVENTOPTION_TECH_BARDING_SURVIVORS_OPTION_1",
            "EVENTOPTION_TECH_BARDING_SURVIVORS_OPTION_2"
          ]
        },
        "TechPrereq": "TECH_BARDING",
        "iWeight": "2",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_TREACHERY",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_TREACHERY_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_TREACHERY",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_PLOTTING_AGAINST_LEADER_US"
            },
            {
              "First": "0",
              "Second": "SUBJECT_GENERAL"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTSTORY_RELATIONSHIP_TREACHERY_CHARACTER_0",
            "NONE",
            "BONUS_EVENTSTORY_RELATIONSHIP_TREACHERY_CITY"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_2",
            "EVENTOPTION_RELATIONSHIP_TREACHERY_OPTION_3"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_ALLIED_INTELLIGENCE",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_ALLIED_INTELLIGENCE_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_ALLIED_INTELLIGENCE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ALLIED_WITH_LEADER_US"
            },
            {
              "First": "3",
              "Second": "SUBJECT_BARBARIAN_PEACE_OR_TRUCE"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTSTORY_RELATIONSHIP_ALLIED_INTELLIGENCE_CHARACTER_1",
            "BONUS_EVENTSTORY_RELATIONSHIP_ALLIED_INTELLIGENCE_PLAYER",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_ALLIED_INTELLIGENCE_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_ALLIED_INTELLIGENCE_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_ALLIED_INTELLIGENCE_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_GOOD_CHEER",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_GOOD_CHEER_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_GOOD_CHEER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OBLIGED_TO_LEADER_US"
            },
            {
              "First": "1",
              "Second": "SUBJECT_MOURNING"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTSTORY_RELATIONSHIP_GOOD_CHEER_CHARACTER_1"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_2",
            "EVENTOPTION_RELATIONSHIP_GOOD_CHEER_OPTION_3"
          ]
        },
        "Class": "EVENTCLASS_MOURNING",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_GIFT_OF_LAND",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_GIFT_OF_LAND_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_GIFT_OF_LAND",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ENDEARED_TO_LEADER_US"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTSTORY_RELATIONSHIP_GIFT_OF_LAND_CHARACTER_1"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_GIFT_OF_LAND_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_GIFT_OF_LAND_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_GIFT_OF_LAND_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_BATH_HOUSE_CONSPIRACY",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_BATH_HOUSE_CONSPIRACY",
        "zBackgroundName": "Funeral",
        "zEventURL": "https://en.wikipedia.org/wiki/Harem_conspiracy",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_HEIR_US",
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_PLOTTING_AGAINST_LEADER_US"
            },
            {
              "First": "2",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_BATH_HOUSE_CONSPIRACY_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_A_NEW_METHOD",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_A_NEW_METHOD_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_A_NEW_METHOD",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ENDEARED_TO_LEADER_US"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTSTORY_RELATIONSHIP_A_NEW_METHOD_CHARACTER_0",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_A_NEW_METHOD_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_A_NEW_METHOD_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_A_NEW_METHOD_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_PERSECUTION_IN_CITY",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_PERSECUTION_IN_CITY_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_PERSECUTION_IN_CITY",
        "zEventURL": "https://en.wikipedia.org/wiki/Diocletianic_Persecution",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_RELIGION",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_VENGEFUL_AGAINST_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "3",
            "Second": "SUBJECTRELATION_RELIGION_CITY",
            "Third": "2"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_PERSECUTION_IN_CITY_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_SEDITIOUS_MEETINGS",
        "Name": "TEXT_EVENTSTORY_SEDITIOUS_MEETINGS_TITLE",
        "Text": "TEXT_EVENTSTORY_SEDITIOUS_MEETINGS",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_VENGEFUL_AGAINST_LEADER_US"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CAPITAL_US"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CITY_DISCONTENT_MODERATE"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_0",
            "EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_1",
            "EVENTOPTION_SEDITIOUS_MEETINGS_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_THE_PROTEGE",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_THE_PROTEGE_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_THE_PROTEGE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_HAS_GEM",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ESTRANGED_FROM_LEADER_US"
            },
            {
              "First": "2",
              "Second": "SUBJECT_HEIR_US"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "1"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_2",
            "EVENTOPTION_RELATIONSHIP_THE_PROTEGE_OPTION_3"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_GRADUATION_STUDIES_COMPLETE_TACTICS",
        "Name": "TEXT_EVENTSTORY_GRADUATION_STUDIES_COMPLETE_TACTICS_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATION_STUDIES_COMPLETE_TACTICS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_TACTICS"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ARCHETYPE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_REMOVE_STUDY_TACTICS"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_TACTICS_OPTION_0",
            "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_TACTICS_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iWeight": "1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_GRADUATION_STUDIES_COMPLETE_RHETORIC",
        "Name": "TEXT_EVENTSTORY_GRADUATION_STUDIES_COMPLETE_RHETORIC_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATION_STUDIES_COMPLETE_RHETORIC",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_RHETORIC"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ARCHETYPE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_REMOVE_STUDY_RHETORIC"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_RHETORIC_OPTION_0",
            "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_RHETORIC_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iWeight": "1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_GRADUATION_STUDIES_COMPLETE_COMMERCE",
        "Name": "TEXT_EVENTSTORY_GRADUATION_STUDIES_COMPLETE_COMMERCE_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATION_STUDIES_COMPLETE_COMMERCE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_COMMERCE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ARCHETYPE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_REMOVE_STUDY_COMMERCE"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_COMMERCE_OPTION_0",
            "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_COMMERCE_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iWeight": "1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_GRADUATION_STUDIES_COMPLETE_PHILOSOPHY",
        "Name": "TEXT_EVENTSTORY_GRADUATION_STUDIES_COMPLETE_PHILOSOPHY_TITLE",
        "Text": "TEXT_EVENTSTORY_GRADUATION_STUDIES_COMPLETE_PHILOSOPHY",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": "SUBJECT_CHARACTER_US"
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_STUDY_PHILOSOPHY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ARCHETYPE"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "aeBonuses": {
          "zValue": "BONUS_REMOVE_STUDY_PHILOSOPHY"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_PHILOSOPHY_OPTION_0",
            "EVENTOPTION_GRADUATION_STUDIES_COMPLETE_PHILOSOPHY_OPTION_1"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "iWeight": "1",
        "bHidePrereqs": "1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_IN_YOUR_DEBT",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_IN_YOUR_DEBT_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_IN_YOUR_DEBT",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OBLIGED_TO_LEADER_US"
            },
            {
              "First": "4",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_FAMILY_NON_LEADER"
            },
            {
              "First": "4",
              "Second": "SUBJECT_CHARACTER_MAX_UPSET"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "1"
            },
            {
              "First": "4",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "2"
            },
            {
              "First": "5",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "2"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_IN_YOUR_DEBT_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_IN_YOUR_DEBT_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_IN_YOUR_DEBT_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_JEALOUS_RAGE",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_JEALOUS_RAGE_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_JEALOUS_RAGE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_JEALOUS_ABOUT_LEADER_US"
            },
            {
              "First": "2",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_GENDER_DIFF",
            "Third": "0"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTSTORY_RELATIONSHIP_JEALOUS_RAGE_CHARACTER_1",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_JEALOUS_RAGE_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_JEALOUS_RAGE_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_JEALOUS_RAGE_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_GOLDEN_OPPORTUNITY",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_GOLDEN_OPPORTUNITY_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_GOLDEN_OPPORTUNITY",
        "zEventURL": "https://en.wikipedia.org/wiki/Horreum",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_OBLIGED_TO_LEADER_US"
          }
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTSTORY_RELATIONSHIP_GOLDEN_OPPORTUNITY_CHARACTER_1",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_GOLDEN_OPPORTUNITY_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_BAD_BLOOD",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_BAD_BLOOD_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_BAD_BLOOD",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ESTRANGED_FROM_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_BAD_BLOOD_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_BEST_SERVED_COLD",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_BEST_SERVED_COLD_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_BEST_SERVED_COLD",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_JEALOUS_ABOUT_LEADER_US"
            },
            {
              "First": "2",
              "Second": "SUBJECT_LOVER_OF_LEADER_US"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "2",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_GENDER_DIFF",
              "Third": "1"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_GENDER_SAME",
              "Third": "0"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "NONE",
            "BONUS_EVENTSTORY_RELATIONSHIP_BEST_SERVED_COLD_CHARACTER_2"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_BEST_SERVED_COLD_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_JAILBREAK",
        "Name": "TEXT_EVENTSTORY_TRAIT_JAILBREAK_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_JAILBREAK",
        "zBackgroundName": "MudFight",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_IMPRISONED"
          }
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTSTORY_TRAIT_JAILBREAK_CHARACTER_0",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_JAILBREAK_OPTION_0",
            "EVENTOPTION_TRAIT_JAILBREAK_OPTION_1",
            "EVENTOPTION_TRAIT_JAILBREAK_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "25"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_LOVER_NO_MORE",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_LOVER_NO_MORE_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_LOVER_NO_MORE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_SPOUSE_OF_LEADER_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_LOVER_OF_LEADER_US"
            },
            {
              "First": "3",
              "Second": "SUBJECT_SPYMASTER"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_LOVER_NO_MORE_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_FAMILY_DEBTS",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_FAMILY_DEBTS_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_FAMILY_DEBTS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US",
            "SUBJECT_SPOUSE_OF_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_LOVER_OF_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_GENDER_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_2",
            "EVENTOPTION_RELATIONSHIP_FAMILY_DEBTS_OPTION_3"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_CITY_ON_THE_BRINK",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_CITY_ON_THE_BRINK_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_CITY_ON_THE_BRINK",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_LEADER_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "1",
            "Second": "SUBJECT_DISAPPOINTED_WITH_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "1"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "NONE",
            "BONUS_EVENTSTORY_RELATIONSHIP_CITY_ON_THE_BRINK_CHARACTER_0",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_CITY_ON_THE_BRINK_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_PLAYING_POLITICS",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_PLAYING_POLITICS_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_PLAYING_POLITICS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ALLIED_WITH_LEADER_US"
            },
            {
              "First": "2",
              "Second": "SUBJECT_FAMILY_NON_LEADER"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_FAMILY_DIFF",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_PLAYING_POLITICS_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_PLAYING_POLITICS_OPTION_1"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_FALSE_GOSSIP",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_FALSE_GOSSIP_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_FALSE_GOSSIP",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_SUSPICIOUS_OF_LEADER_US"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_FALSE_GOSSIP_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_RELIGION_CAVE_OF_PATRIARCHS",
        "Name": "TEXT_EVENTSTORY_RELIGION_CAVE_OF_PATRIARCHS_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_CAVE_OF_PATRIARCHS",
        "zEventURL": "https://en.wikipedia.org/wiki/Cave_of_the_Patriarchs",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_RELIGION",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_JUDAISM"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_CAVE_OF_PATRIARCHS_OPTION_0",
            "EVENTOPTION_RELIGION_CAVE_OF_PATRIARCHS_OPTION_1"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELIGION_ENSLAVED_BY_EGYPT",
        "Name": "TEXT_EVENTSTORY_RELIGION_ENSLAVED_BY_EGYPT_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_ENSLAVED_BY_EGYPT",
        "zBackgroundName": "Escaped_Slave",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_RELIGION_STATE",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_PEACE_OR_TRUCE"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "2",
              "Second": "SUBJECT_PLAYER_EGYPT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_JUDAISM"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_RELIGION_STATE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_0",
            "EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_1",
            "EVENTOPTION_RELIGION_ENSLAVED_BY_EGYPT_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELIGION_THEY_DO_NOT_BELONG",
        "Name": "TEXT_EVENTSTORY_RELIGION_THEY_DO_NOT_BELONG_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_THEY_DO_NOT_BELONG",
        "zBackgroundName": "decree2final",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_RELIGION",
            "SUBJECT_LEADER_US",
            "SUBJECT_RELIGION"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_0",
            "EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_1",
            "EVENTOPTION_RELIGION_THEY_DO_NOT_BELONG_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_RELIGION_BOW_BEFORE_US",
        "Name": "TEXT_EVENTSTORY_RELIGION_BOW_BEFORE_US_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_BOW_BEFORE_US",
        "zBackgroundName": "decree",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_RELIGION_STATE",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_CITY_THEM",
            "SUBJECT_RELIGION"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_RELIGION_STATE",
              "Third": "0"
            },
            {
              "First": "4",
              "Second": "SUBJECTRELATION_RELIGION_STATE",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_0",
            "EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_1",
            "EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_2",
            "EVENTOPTION_RELIGION_BOW_BEFORE_US_OPTION_3"
          ]
        },
        "iImageSubject": "2",
        "iWeight": "1",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_RELIGION_THE_CONVERTED",
        "Name": "TEXT_EVENTSTORY_RELIGION_THE_CONVERTED_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_THE_CONVERTED",
        "zBackgroundName": "decree2final",
        "zEventURL": "https://en.wikipedia.org/wiki/Augustine_of_Hippo",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_RELIGION_STATE_NO",
            "SUBJECT_LEADER_US",
            "SUBJECT_AUGUSTINE"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_CHRISTIANITY"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_0",
            "EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_1",
            "EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_2",
            "EVENTOPTION_RELIGION_THE_CONVERTED_OPTION_3"
          ]
        },
        "iImageSubject": "2",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELIGION_HOLY_WAR",
        "Name": "TEXT_EVENTSTORY_RELIGION_HOLY_WAR_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_HOLY_WAR",
        "zBackgroundName": "Military_Defeat",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_RELIGION_STATE",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_WAR",
            "SUBJECT_RELIGION_STATE",
            "SUBJECT_CITY_THEM"
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "3",
              "Second": "SUBJECTRELATION_RELIGION_STATE",
              "Third": "2"
            },
            {
              "First": "1",
              "Second": "SUBJECTRELATION_RELIGION_STATE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_HOLY_WAR_OPTION_0",
            "EVENTOPTION_RELIGION_HOLY_WAR_OPTION_1",
            "EVENTOPTION_RELIGION_HOLY_WAR_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CAPTURED",
        "iTriggerSubject": "4",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_RELIGION_AWAITING_EXECUTION",
        "Name": "TEXT_EVENTSTORY_RELIGION_AWAITING_EXECUTION_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_AWAITING_EXECUTION",
        "zEventURL": "https://en.wikipedia.org/wiki/Bahram_I",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_RELIGION",
            "SUBJECT_LEADER_US",
            "SUBJECT_PLAYER_THEM"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_0",
            "EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_1",
            "EVENTOPTION_RELIGION_AWAITING_EXECUTION_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_RELIGION_OUR_ALLEGIANCE",
        "Name": "TEXT_EVENTSTORY_RELIGION_OUR_ALLEGIANCE_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_OUR_ALLEGIANCE",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_RELIGION_STATE",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ZOROASTRIANISM"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_RELIGION_STATE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_0",
            "EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_1",
            "EVENTOPTION_RELIGION_OUR_ALLEGIANCE_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELIGION_LOST_WISDOM",
        "Name": "TEXT_EVENTSTORY_RELIGION_LOST_WISDOM_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_LOST_WISDOM",
        "zBackgroundName": "city approach",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_RELIGION",
            "SUBJECT_PLAYER_WAR"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "2",
            "Second": "SUBJECT_ZOROASTRIANISM"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_RELIGION_CITY",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_0",
            "EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_1",
            "EVENTOPTION_RELIGION_LOST_WISDOM_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_CITY_CAPTURED",
        "iTriggerSubject": "0",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELIGION_BLOOD_IN_THE_STREETS",
        "Name": "TEXT_EVENTSTORY_RELIGION_BLOOD_IN_THE_STREETS_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_BLOOD_IN_THE_STREETS",
        "zEventURL": "https://en.wikipedia.org/wiki/Persepolis",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_RELIGION",
            "SUBJECT_RELIGION",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_RELIGION_PLAYER_NO"
            },
            {
              "First": "1",
              "Second": "SUBJECT_RELIGION_PLAYER_NO"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "3",
              "Second": "SUBJECTRELATION_RELIGION_CITY",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_RELIGION_CITY",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_BLOOD_IN_THE_STREETS_OPTION_0",
            "EVENTOPTION_RELIGION_BLOOD_IN_THE_STREETS_OPTION_1",
            "EVENTOPTION_RELIGION_BLOOD_IN_THE_STREETS_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_RELIGION_THE_TWENTY_SAINTS",
        "Name": "TEXT_EVENTSTORY_RELIGION_THE_TWENTY_SAINTS_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_THE_TWENTY_SAINTS",
        "zBackgroundName": "MudFight",
        "zEventURL": "https://en.wikipedia.org/wiki/Forty_Martyrs_of_Sebaste",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_RELIGION",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US",
            "SUBJECT_CHARACTER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_CHRISTIANITY"
            },
            {
              "First": "3",
              "Second": "SUBJECT_NON_LEADER_US"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CITY_WITH_GOVERNOR"
            },
            {
              "First": "3",
              "Second": "SUBJECT_GOVERNOR"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "3",
              "Second": "SUBJECTRELATION_CITY_SAME",
              "Third": "2"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_CITY_SAME",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_0",
            "EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_1",
            "EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_2",
            "EVENTOPTION_RELIGION_THE_TWENTY_SAINTS_OPTION_3"
          ]
        },
        "iImageSubject": "3",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELIGION_BANNED",
        "Name": "TEXT_EVENTSTORY_RELIGION_BANNED_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_BANNED",
        "zBackgroundName": "decree2final",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_RELIGION_STATE",
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_MANICHAEISM"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_RELIGION_STATE",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_RELIGION_STATE_NO",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_BANNED_OPTION_0",
            "EVENTOPTION_RELIGION_BANNED_OPTION_1",
            "EVENTOPTION_RELIGION_BANNED_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "80"
      },
      {
        "zType": "EVENTSTORY_RELIGION_SPREAD",
        "Name": "TEXT_EVENTSTORY_RELIGION_SPREAD_TITLE",
        "Text": "TEXT_EVENTSTORY_RELIGION_SPREAD",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_CITY_US",
            "SUBJECT_RELIGION_STATE_NO"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_RELIGION_PLAYER_NO",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELIGION_SPREAD_YES",
            "EVENTOPTION_RELIGION_SPREAD_NO"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "40"
      },
      {
        "zType": "EVENTSTORY_ZOROASTRIANISM_TEMPLES",
        "Name": "TEXT_EVENTSTORY_ZOROASTRIANISM_TEMPLES_TITLE",
        "Text": "TEXT_EVENTSTORY_ZOROASTRIANISM_TEMPLES",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_ZOROASTRIANISM",
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_RELIGION_STATE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_ZOROASTRIANISM_TEMPLES_YES",
            "EVENTOPTION_ZOROASTRIANISM_TEMPLES_NO"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_JUDAISM_TEMPLES",
        "Name": "TEXT_EVENTSTORY_JUDAISM_TEMPLES_TITLE",
        "Text": "TEXT_EVENTSTORY_JUDAISM_TEMPLES",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_JUDAISM",
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_RELIGION_STATE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_JUDAISM_TEMPLES_YES",
            "EVENTOPTION_JUDAISM_TEMPLES_NO"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHRISTIAN_CATHEDRALS",
        "Name": "TEXT_EVENTSTORY_CHRISTIAN_CATHEDRALS_TITLE",
        "Text": "TEXT_EVENTSTORY_CHRISTIAN_CATHEDRALS",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHRISTIANITY",
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_RELIGION_STATE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHRISTIANITY_CATHEDRALS_YES",
            "EVENTOPTION_CHRISTIANITY_CATHEDRALS_NO"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_MANICHAEISM_CATHEDRALS",
        "Name": "TEXT_EVENTSTORY_MANICHAEISM_CATHEDRALS_TITLE",
        "Text": "TEXT_EVENTSTORY_MANICHAEISM_CATHEDRALS",
        "zAudioTrigger": "AUDIO_UI_EVENT_RITUAL_SPLENDOR",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_MANICHAEISM",
            "SUBJECT_PLAYER_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "2",
            "Second": "SUBJECTRELATION_RELIGION_STATE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_MANICHAEISM_CATHEDRALS_YES",
            "EVENTOPTION_MANICHAEISM_CATHEDRALS_NO"
          ]
        },
        "iWeight": "2",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_CREATURES_OF_THE_COAST",
        "Name": "TEXT_EVENTSTORY_CHARACTER_CREATURES_OF_THE_COAST_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_CREATURES_OF_THE_COAST",
        "zEventURL": "https://en.wikipedia.org/wiki/Himilco",
        "zAudioTrigger": "AUDIO_UI_EVENT_ANCIENT_TRIBE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_FAMILY_US",
            "SUBJECT_LEADER_FAMILY_US",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_EXPLORING"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_SAME",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_FAMILY_DIFF",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_0",
            "EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_1",
            "EVENTOPTION_CHARACTER_CREATURES_OF_THE_COAST_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_DREAMS_OF_HOME",
        "Name": "TEXT_EVENTSTORY_TRAIT_DREAMS_OF_HOME_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_DREAMS_OF_HOME",
        "zBackgroundName": "Explore_Jungle",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_EXPLORING"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CAPITAL_US"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_DREAMS_OF_HOME_OPTION_0",
            "EVENTOPTION_TRAIT_DREAMS_OF_HOME_OPTION_1"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "25"
      },
      {
        "zType": "EVENTSTORY_TRAIT_CITIZEN_OF_THE_WORLD",
        "Name": "TEXT_EVENTSTORY_TRAIT_CITIZEN_OF_THE_WORLD_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_CITIZEN_OF_THE_WORLD",
        "zBackgroundName": "Birth",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_CITY_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_EXPLORING"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CAPITAL_US"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_0",
            "EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_1",
            "EVENTOPTION_TRAIT_CITIZEN_OF_THE_WORLD_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-50"
      },
      {
        "zType": "EVENTSTORY_TRAIT_THE_LAND_OF_HAIRY_MEN",
        "Name": "TEXT_EVENTSTORY_TRAIT_THE_LAND_OF_HAIRY_MEN_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_THE_LAND_OF_HAIRY_MEN",
        "zEventURL": "https://en.wikipedia.org/wiki/Hanno_the_Navigator",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_EXPLORING"
            },
            {
              "First": "2",
              "Second": "SUBJECT_CAPITAL_US"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_0",
            "EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_1",
            "EVENTOPTION_TRAIT_THE_LAND_OF_HAIRY_MEN_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_TRAIT_MONSOON",
        "Name": "TEXT_EVENTSTORY_TRAIT_MONSOON_TITLE",
        "Text": "TEXT_EVENTSTORY_TRAIT_MONSOON",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_EXPLORING"
            },
            {
              "First": "1",
              "Second": "SUBJECT_CAPITAL_US"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TRAIT_MONSOON_OPTION_0",
            "EVENTOPTION_TRAIT_MONSOON_OPTION_1",
            "EVENTOPTION_TRAIT_MONSOON_OPTION_2"
          ]
        },
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_SHARED_INTERESTS",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_SHARED_INTERESTS_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_SHARED_INTERESTS",
        "zBackgroundName": "decree2final",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_LEADER_STYLE_INQUISITIVE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_LEADER_STYLE_INQUISITIVE"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_2",
            "EVENTOPTION_RELATIONSHIP_SHARED_INTERESTS_OPTION_3"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_AN_ADMIRER",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_AN_ADMIRER_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_AN_ADMIRER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_LEADER_STYLE_INQUISITIVE"
            },
            {
              "First": "1",
              "Second": "SUBJECT_LEADER_STYLE_INQUISITIVE"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_AN_ADMIRER_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_AN_ADMIRER_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_AN_ADMIRER_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_MORE_THAN_ALLIES",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_MORE_THAN_ALLIES_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_MORE_THAN_ALLIES",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_LEADER_STYLE_MARTIAL"
            },
            {
              "First": "1",
              "Second": "SUBJECT_LEADER_STYLE_MARTIAL"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_MORE_THAN_ALLIES_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_MAKING_PEACE",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_MAKING_PEACE_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_MAKING_PEACE",
        "zBackgroundName": "Escaped_Slave",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_PLOTTING_AGAINST_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_MAKING_PEACE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "EventLinkPrereq": "EVENTLINK_RELATIONSHIP_TREACHERY",
        "iWeight": "1",
        "iProb": "25",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_CHARACTER_RELEASED",
        "Name": "TEXT_EVENTSTORY_CHARACTER_RELEASED_TITLE",
        "Text": "TEXT_EVENTSTORY_CHARACTER_RELEASED",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_RELEASED"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_CHARACTER_RELEASED_OPTION_0"
        },
        "iWeight": "1",
        "iRepeatTurns": "25"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_IN_THE_BLOOD",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_IN_THE_BLOOD_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_IN_THE_BLOOD",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_LEADER_STYLE_MARTIAL"
            },
            {
              "First": "1",
              "Second": "SUBJECT_LEADER_STYLE_MARTIAL"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_IN_THE_BLOOD_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_PARANOID",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_PARANOID_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_PARANOID",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_THEM"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_LEADER_STYLE_PARANOID"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_2",
            "EVENTOPTION_RELATIONSHIP_PARANOID_OPTION_3"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_THE_RANT",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_THE_RANT_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_THE_RANT",
        "zBackgroundName": "decree",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_LEADER_STYLE_PARANOID"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_2",
            "EVENTOPTION_RELATIONSHIP_THE_RANT_OPTION_3"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_GUEST_OF_HONOR",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_GUEST_OF_HONOR_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_GUEST_OF_HONOR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ENDEARED_TO_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_GUEST_OF_HONOR_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_GUEST_OF_HONOR_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_VISITING_PRINCESS",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_VISITING_PRINCESS_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_VISITING_PRINCESS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_ENDEARED_TO_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_VISITING_PRINCESS_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_VISITING_PRINCESS_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_INNER_CIRCLE",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_INNER_CIRCLE_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_INNER_CIRCLE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_OBLIGED_TO_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_INNER_CIRCLE_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_INNER_CIRCLE_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_A_SPIRITUAL_CONNECTION",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_A_SPIRITUAL_CONNECTION_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_A_SPIRITUAL_CONNECTION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_RELIGION_STATE"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_OBLIGED_TO_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_RELIGION_STATE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_A_SPIRITUAL_CONNECTION_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_A_SPIRITUAL_CONNECTION_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_A_GENEROUS_DONATION",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_A_GENEROUS_DONATION_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_A_GENEROUS_DONATION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_OBLIGED_TO_LEADER_US"
            },
            {
              "First": "1",
              "Second": "SUBJECT_PLAYER_NEGATIVE_WOOD"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_A_GENEROUS_DONATION_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_A_GENEROUS_DONATION_OPTION_1"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "75"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_URGING_CAUTION",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_URGING_CAUTION_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_URGING_CAUTION",
        "zBackgroundName": "Military_Defeat",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_BARBARIAN"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_DISAPPOINTED_WITH_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_URGING_CAUTION_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_MORAL_DEGRADATION",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_MORAL_DEGRADATION_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_MORAL_DEGRADATION",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_FAMILY_US",
            "SUBJECT_LAW_SLAVERY"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_DISAPPOINTED_WITH_LEADER_US"
            },
            {
              "First": "2",
              "Second": "SUBJECT_FAMILY_NON_LEADER"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "0"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_LAW_POSITIVE",
              "Third": "2"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_MORAL_DEGRADATION_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "LawPrereq": "LAW_SLAVERY",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_GIVE_AN_INCH",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_GIVE_AN_INCH_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_GIVE_AN_INCH",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US",
            "SUBJECT_LAW_FREEDOM",
            "SUBJECT_FAMILY_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_DISAPPOINTED_WITH_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "3",
              "Second": "SUBJECTRELATION_LAW_POSITIVE",
              "Third": "2"
            },
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "0"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_GIVE_AN_INCH_OPTION_2"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "LawPrereq": "LAW_FREEDOM",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_RELATIONSHIP_PROOF_OF_FRIENDSHIP",
        "Name": "TEXT_EVENTSTORY_RELATIONSHIP_PROOF_OF_FRIENDSHIP_TITLE",
        "Text": "TEXT_EVENTSTORY_RELATIONSHIP_PROOF_OF_FRIENDSHIP",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": {
            "First": "0",
            "Second": "SUBJECT_DISAPPOINTED_WITH_LEADER_US"
          }
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
            "Third": "0"
          }
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_0",
            "EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_1",
            "EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_2",
            "EVENTOPTION_RELATIONSHIP_PROOF_OF_FRIENDSHIP_OPTION_3"
          ]
        },
        "Class": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iWeight": "1",
        "iRepeatTurns": "50"
      },
      {
        "zType": "EVENTSTORY_TWO_VISIONS",
        "Name": "TEXT_EVENTSTORY_TWO_VISIONS_TITLE",
        "Text": "TEXT_EVENTSTORY_TWO_VISIONS",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_THEM",
            "SUBJECT_PLAYER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_PLAYER_OPINION_ANGRY"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_40"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TWO_VISIONS_OPTION_0",
            "EVENTOPTION_TWO_VISIONS_OPTION_1",
            "EVENTOPTION_TWO_VISIONS_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_THE_RUNAWAY_PRINCE",
        "Name": "TEXT_EVENTSTORY_THE_RUNAWAY_PRINCE_TITLE",
        "Text": "TEXT_EVENTSTORY_THE_RUNAWAY_PRINCE",
        "zAudioTrigger": "AUDIO_UI_EVENT_SHATTERING_PRESENCE",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_THEM",
            "SUBJECT_LEADER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_30"
            },
            {
              "First": "0",
              "Second": "SUBJECT_HEIR_THEM"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_0",
            "EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_1",
            "EVENTOPTION_THE_RUNAWAY_PRINCE_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "iWeight": "1",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_HEIR_TO_HEIR",
        "Name": "TEXT_EVENTSTORY_HEIR_TO_HEIR_TITLE",
        "Text": "TEXT_EVENTSTORY_HEIR_TO_HEIR",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_HEIR_THEM",
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT_UNDER_30"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "1"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_HEIR_TO_HEIR_OPTION_0",
            "EVENTOPTION_HEIR_TO_HEIR_OPTION_1",
            "EVENTOPTION_HEIR_TO_HEIR_OPTION_2",
            "EVENTOPTION_HEIR_TO_HEIR_OPTION_3"
          ]
        },
        "Trigger": "EVENTTRIGGER_SUCCESSION_US",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_IN_ABSENTIA",
        "Name": "TEXT_EVENTSTORY_IN_ABSENTIA_TITLE",
        "Text": "TEXT_EVENTSTORY_IN_ABSENTIA",
        "zBackgroundName": "Funeral",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_US",
            "SUBJECT_HEIR_THEM",
            "SUBJECT_LEADER_THEM",
            "SUBJECT_LEADER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "1",
              "Second": "SUBJECT_ADULT_UNDER_40"
            },
            {
              "First": "2",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "1"
            },
            {
              "First": "3",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "2"
            }
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_IN_ABSENTIA_OPTION_0",
            "EVENTOPTION_IN_ABSENTIA_OPTION_1",
            "EVENTOPTION_IN_ABSENTIA_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_DEATH",
        "iImageSubject": "1",
        "iWeight": "1",
        "iProb": "50",
        "iRepeatTurns": "-1"
      },
      {
        "zType": "EVENTSTORY_STRANGER_AT_THE_DOOR",
        "Name": "TEXT_EVENTSTORY_STRANGER_AT_THE_DOOR_TITLE",
        "Text": "TEXT_EVENTSTORY_STRANGER_AT_THE_DOOR",
        "zAudioTrigger": "AUDIO_UI_EVENT_OMINOUS_ENCOUNTER",
        "zEventAuthor": "Andy Auseon",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_CHARACTER_THEM",
            "SUBJECT_LEADER_THEM",
            "SUBJECT_PLAYER_US"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_ON_THE_RUN"
            },
            {
              "First": "1",
              "Second": "SUBJECT_ADULT"
            },
            {
              "First": "0",
              "Second": "SUBJECT_HEIR_THEM"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": [
            {
              "First": "1",
              "Second": "SUBJECTRELATION_PLAYER_SAME",
              "Third": "0"
            },
            {
              "First": "2",
              "Second": "SUBJECTRELATION_PLAYER_PEACE_OR_TRUCE",
              "Third": "1"
            }
          ]
        },
        "aeBonuses": {
          "zValue": [
            "BONUS_EVENTSTORY_STRANGER_AT_THE_DOOR_CHARACTER_0",
            "NONE",
            "NONE"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_0",
            "EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_1",
            "EVENTOPTION_STRANGER_AT_THE_DOOR_OPTION_2"
          ]
        },
        "Trigger": "EVENTTRIGGER_NEW_TURN",
        "iTriggerSubject": "1",
        "iImageSubject": "1",
        "EventLinkPrereq": "EVENTLINK_HEIR_THE_RUNAWAY_PRINCE",
        "iWeight": "1",
        "iProb": "65",
        "iRepeatTurns": "-1"
      },
      {
        "beginGroup": "Tutorial",
        "zType": "EVENTSTORY_VICTORY_POINTS",
        "Name": "TEXT_EVENTSTORY_VICTORY_POINTS_TITLE",
        "Text": "TEXT_EVENTSTORY_VICTORY_POINTS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_VICTORY_OK",
            "EVENTOPTION_VICTORY_CONTINUE",
            "EVENTOPTION_VICTORY_MAIN_MENU"
          ]
        },
        "Trigger": "EVENTTRIGGER_WIN_GAME",
        "TriggerData": "VICTORY_POINTS",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_VICTORY_AMBITION",
        "Name": "TEXT_EVENTSTORY_VICTORY_AMBITION_TITLE",
        "Text": "TEXT_EVENTSTORY_VICTORY_AMBITION",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_VICTORY_OK",
            "EVENTOPTION_VICTORY_CONTINUE",
            "EVENTOPTION_VICTORY_MAIN_MENU"
          ]
        },
        "Trigger": "EVENTTRIGGER_WIN_GAME",
        "TriggerData": "VICTORY_AMBITION",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_VICTORY_TIME",
        "Name": "TEXT_EVENTSTORY_VICTORY_TIME_TITLE",
        "Text": "TEXT_EVENTSTORY_VICTORY_TIME",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_VICTORY_OK",
            "EVENTOPTION_VICTORY_CONTINUE",
            "EVENTOPTION_VICTORY_MAIN_MENU"
          ]
        },
        "Trigger": "EVENTTRIGGER_WIN_GAME",
        "TriggerData": "VICTORY_TIME",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_VICTORY_CONQUEST",
        "Name": "TEXT_EVENTSTORY_VICTORY_CONQUEST_TITLE",
        "Text": "TEXT_EVENTSTORY_VICTORY_CONQUEST",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_VICTORY_OK",
            "EVENTOPTION_VICTORY_CONTINUE",
            "EVENTOPTION_VICTORY_MAIN_MENU"
          ]
        },
        "Trigger": "EVENTTRIGGER_WIN_GAME",
        "TriggerData": "VICTORY_CONQUEST",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_GAME_LOSS",
        "Name": "TEXT_EVENTSTORY_GAME_LOSS_TITLE",
        "Text": "TEXT_EVENTSTORY_GAME_LOSS",
        "zEventAuthor": "Leyla Johnson",
        "aeSubjects": {
          "zValue": "SUBJECT_LEADER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_LOSS_OK",
            "EVENTOPTION_LOSS_MAIN_MENU"
          ]
        },
        "Trigger": "EVENTTRIGGER_LOSE_GAME",
        "TriggerData": "VICTORY_CONQUEST",
        "iWeight": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_INTRO",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_INTRO_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_INTRO",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_INTRO_OKAY"
        },
        "Trigger": "EVENTTRIGGER_START_GAME",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_SCOUT_SELECTED",
        "Name": "TEXT_EVENTSTORY_SCOUT_SELECTED_TITLE",
        "Text": "TEXT_EVENTSTORY_SCOUT_SELECTED",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_SCOUT_SELECTED_OK"
        },
        "Trigger": "EVENTTRIGGER_UNIT_SELECTED",
        "TriggerData": "UNIT_SCOUT",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_ORDERS",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_ORDERS_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_ORDERS",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_ORDERS_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_CITY_FOUNDED",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_SECOND_CITY",
        "Name": "TEXT_EVENTSTORY_SECOND_CITY_TITLE",
        "Text": "TEXT_EVENTSTORY_SECOND_CITY",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_SECOND_CITY_OK"
        },
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_SETTLER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_WORKER_SELECTED",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_WORKER_SELECTED_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_WORKER_SELECTED",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_WORKER_SELECTED_OPTION_0"
        },
        "Trigger": "EVENTTRIGGER_UNIT_SELECTED",
        "TriggerData": "UNIT_WORKER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_SLINGER_SELECTED",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_SLINGER_SELECTED_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_SLINGER_SELECTED",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_SLINGER_SELECTED_OKAY"
        },
        "Trigger": "EVENTTRIGGER_UNIT_SELECTED",
        "TriggerData": "UNIT_SLINGER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_WARRIOR_SELECTED",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_WARRIOR_SELECTED_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_WARRIOR_SELECTED",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_WARRIOR_SELECTED_OKAY"
        },
        "Trigger": "EVENTTRIGGER_UNIT_SELECTED",
        "TriggerData": "UNIT_WARRIOR",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_BARBARIAN_CAMP_CLEARED",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_BARBARIAN_CAMP_CLEARED_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_BARBARIAN_CAMP_CLEARED",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_BARBARIAN_CAMP_CLEARED_OKAY"
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CLEARED",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_CITY_CAPTURED",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_CITY_CAPTURED_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_CITY_CAPTURED",
        "zBackgroundName": "city approach",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_CITY_US"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_CITY_CAPTURED_OKAY"
        },
        "Trigger": "EVENTTRIGGER_CITY_CAPTURED",
        "iTriggerExtra": "1",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_CULTURE",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_CULTURE_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_CULTURE",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_CITY_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_CULTURE_OKAY"
        },
        "Trigger": "EVENTTRIGGER_CITY_CULTURE",
        "TriggerData": "CULTURE_DEVELOPING",
        "iTriggerExtra": "1",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_TRIBE_CONTACT",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_TRIBE_CONTACT_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_TRIBE_CONTACT",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_BARBARIAN",
            "SUBJECT_TILE"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_TRIBE_CONTACT_OKAY"
        },
        "Trigger": "EVENTTRIGGER_BARBARIAN_CONTACT",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_HARVEST_RESOURCE",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_HARVEST_RESOURCE_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_HARVEST_RESOURCE",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_TILE",
            "SUBJECT_RESOURCE"
          ]
        },
        "SubjectExtras": {
          "Pair": [
            {
              "First": "0",
              "Second": "SUBJECT_SCOUT"
            },
            {
              "First": "1",
              "Second": "SUBJECT_TILE_UNCLAIMED"
            }
          ]
        },
        "SubjectRelations": {
          "Triple": {
            "First": "1",
            "Second": "SUBJECTRELATION_TILE_RESOURCE",
            "Third": "2"
          }
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_HARVEST_RESOURCE_OKAY"
        },
        "Trigger": "EVENTTRIGGER_SET_TILE",
        "iTriggerExtra": "1",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_UNIT_ON_COOLDOWN",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_UNIT_ON_COOLDOWN_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_UNIT_ON_COOLDOWN",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_UNIT_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_UNIT_ON_COOLDOWN_OKAY"
        },
        "Trigger": "EVENTTRIGGER_UNIT_ON_COOLDOWN",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_UNIT_FATIGUED",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_UNIT_FATIGUED_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_UNIT_FATIGUED",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_UNIT_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_UNIT_FATIGUED_OKAY"
        },
        "Trigger": "EVENTTRIGGER_UNIT_IS_FATIGUED",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_OUT_OF_ORDERS",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_OUT_OF_ORDERS_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_OUT_OF_ORDERS",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_UNIT_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_OUT_OF_ORDERS_OKAY"
        },
        "Trigger": "EVENTTRIGGER_UNIT_NO_ORDERS",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_RELIGION",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_RELIGION_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_RELIGION",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_PLAYER_US",
            "SUBJECT_RELIGION"
          ]
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_RELIGION_OKAY"
        },
        "Trigger": "EVENTTRIGGER_RELIGION_SPREAD",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_CHARIOT_SELECTED",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_CHARIOT_SELECTED_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_CHARIOT_SELECTED",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_CHARIOT_SELECTED_OKAY"
        },
        "Trigger": "EVENTTRIGGER_UNIT_SELECTED",
        "TriggerData": "UNIT_CHARIOT",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_NATION_CONTACT",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_NATION_CONTACT_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_NATION_CONTACT",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_THEM"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_NATION_CONTACT_OKAY"
        },
        "Trigger": "EVENTTRIGGER_PLAYER_CONTACT",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_BARBARIANS",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_BARBARIANS_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_BARBARIANS",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_BARBARIANS_OKAY"
        },
        "Trigger": "EVENTTRIGGER_PRODUCTION_UNIT",
        "TriggerData": "UNIT_SETTLER",
        "iPriority": "4",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_AMBITION",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_AMBITION_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_AMBITION",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TUTORIAL_AMBITION_CITIES",
            "EVENTOPTION_TUTORIAL_AMBITION_UNITS"
          ]
        },
        "Trigger": "EVENTTRIGGER_CHOOSE_AMBITION",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_SUCCESSION",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_SUCCESSION_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_SUCCESSION",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_HEIR_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_SUCCESSION_OKAY"
        },
        "Trigger": "EVENTTRIGGER_BIRTH",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_LEGITIMACY",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_LEGITIMACY_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_LEGITIMACY",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_LEGITIMACY_OKAY"
        },
        "Trigger": "EVENTTRIGGER_COGNOMEN",
        "TriggerData": "COGNOMEN_EXPLORER",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_MARRIAGE",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_MARRIAGE_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_MARRIAGE",
        "zEventAuthor": "Michael Califf",
        "aeSubjects": {
          "zValue": "SUBJECT_PLAYER_US"
        },
        "aeOptions": {
          "zValue": "EVENTOPTION_TUTORIAL_MARRIAGE_OKAY"
        },
        "Trigger": "EVENTTRIGGER_MARRIAGE",
        "iPriority": "5",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      },
      {
        "zType": "EVENTSTORY_TUTORIAL_PROMOTION",
        "Name": "TEXT_EVENTSTORY_TUTORIAL_PROMOTION_TITLE",
        "Text": "TEXT_EVENTSTORY_TUTORIAL_PROMOTION",
        "zEventAuthor": "Soren Johnson",
        "aeSubjects": {
          "zValue": [
            "SUBJECT_UNIT_US",
            "SUBJECT_LEADER_US"
          ]
        },
        "aeOptions": {
          "zValue": [
            "EVENTOPTION_TUTORIAL_PROMOTION_YES",
            "EVENTOPTION_TUTORIAL_PROMOTION_NO"
          ]
        },
        "Trigger": "EVENTTRIGGER_UNIT_PROMOTION",
        "iWeight": "1",
        "iRepeatTurns": "-1",
        "bTutorial": "1"
      }
    ]
  }
}
    export default data
    