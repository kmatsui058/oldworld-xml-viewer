
    const data: XmlTextYield.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "en-US": {
          
        }
      },
      {
        "zType": "TEXT_YIELD_GROWTH",
        "en-US": "Growth~icon(YIELD_GROWTH)Growth"
      },
      {
        "zType": "TEXT_YIELD_GROWTH_HELP",
        "en-US": "When a City's {YIELD_GROWTH}Growth bar fills up, a new link(CONCEPT_CITIZEN) becomes available. {YIELD_GROWTH}Growth also determines how fast a City can produce Civilian Units, such as link(UNIT_SETTLER,2) and link(UNIT_WORKER,2). While a City produces a Civilian Unit, its {YIELD_GROWTH}Growth bar no longer fills. Ways to improve a City's {YIELD_GROWTH}Growth rate include building link(IMPROVEMENT_FARM,2) on crop resources, link(IMPROVEMENT_NETS,2) on link(RESOURCE_FISH,1) or link(RESOURCE_CRAB,1), and link(IMPROVEMENT_GRANARY,2), as well as training link(SPECIALIST_FARMER,2) and link(SPECIALIST_FISHER,2)."
      },
      {
        "zType": "TEXT_YIELD_CIVICS",
        "en-US": "Civics~icon(YIELD_CIVICS)Civics"
      },
      {
        "zType": "TEXT_YIELD_CIVICS_HELP",
        "en-US": "Cities produce link(CONCEPT_SPECIALIST,2) and link(CONCEPT_PROJECT,2) with their {YIELD_CIVICS}Civics. Unused {YIELD_CIVICS}Civics go into the Global stockpile, which can be used to enact Laws, establish link(CONCEPT_THEOLOGY,2), construct link(CONCEPT_WONDER,2), link(CONCEPT_HURRY), perform Missions like link(MISSION_INFLUENCE), and other uses. You can stockpile a maximum of int(MAX_CIVICS) {YIELD_CIVICS}Civics, with excess converted into {YIELD_SCIENCE}link(YIELD_SCIENCE). Increase {YIELD_CIVICS}Civics by training link(SPECIALIST_STONECUTTER,2) and establishing link(PROJECT_FORUM_1,2). Members of your link(CONCEPT_COURT) with high link(RATING_CHARISMA) also contribute to the global {YIELD_CIVICS}Civics stockpile."
      },
      {
        "zType": "TEXT_YIELD_CIVICS_ENCYCLOPEDIA",
        "en-US": "A link(IMPROVEMENT_QUARRY) built on link(RESOURCE_MARBLE) will also provide {YIELD_CIVICS}Civics. In the mid-game, link(IMPROVEMENT_COURTHOUSE_1,2) and their link(SPECIALISTCLASS_SCRIBE,1) provide additional {YIELD_CIVICS}Civics.\n\nFamilies that are link(FAMILYCLASS_STATESMEN), link(FAMILYCLASS_PATRONS), or link(FAMILYCLASS_SAGES) are better at generating {YIELD_CIVICS}Civics in their cities.\n\nWonders such as link(IMPROVEMENT_COLOSSUS) or link(IMPROVEMENT_ACROPOLIS), or the link(THEOLOGY_GNOSTICISM) link(CONCEPT_THEOLOGY) are other ways of boosting {YIELD_CIVICS}Civics."
      },
      {
        "zType": "TEXT_YIELD_TRAINING",
        "en-US": "Training~icon(YIELD_TRAINING)Training"
      },
      {
        "zType": "TEXT_YIELD_TRAINING_HELP",
        "en-US": "Cities produce Military Units with their {YIELD_TRAINING}Training. Unused {YIELD_TRAINING}Training goes into the Global stockpile, which can be used to buy {YIELD_ORDERS}link(YIELD_ORDERS), conduct a link(CONCEPT_MARCH), assign link(CONCEPT_GENERAL,2), and for Unit link(CONCEPT_PROMOTION,2) and link(CONCEPT_UPGRADE,2). You can stockpile a maximum of int(MAX_TRAINING) {YIELD_TRAINING}Training, with excess converted into {YIELD_ORDERS}link(YIELD_ORDERS). Increase {YIELD_TRAINING}Training by training link(SPECIALIST_MINER,2) and building link(IMPROVEMENT_BARRACKS,2) or link(IMPROVEMENT_RANGE,2). Members of your link(CONCEPT_COURT) with high link(RATING_COURAGE) also contribute to the global {YIELD_TRAINING}Training stockpile."
      },
      {
        "zType": "TEXT_YIELD_TRAINING_ENCYCLOPEDIA",
        "en-US": "link(IMPROVEMENT_MINE,2) provide {YIELD_TRAINING}Training if built over link(RESOURCE_ORE). Once available, link(IMPROVEMENT_BARRACKS,2) and link(IMPROVEMENT_RANGE,2) can train link(SPECIALISTCLASS_OFFICER) Specialists, which can provide a lot of {YIELD_TRAINING}Training. The link(MISSION_RALLY_TROOPS) mission is another way to generate {YIELD_TRAINING}Training.\n\nFamilies that are link(FAMILYCLASS_CHAMPIONS), link(FAMILYCLASS_RIDERS), or link(FAMILYCLASS_HUNTERS) are better at generating {YIELD_TRAINING}Training in their Cities."
      },
      {
        "zType": "TEXT_YIELD_CULTURE",
        "en-US": "Culture~icon(YIELD_CULTURE)Culture"
      },
      {
        "zType": "TEXT_YIELD_CULTURE_HELP",
        "en-US": "When a City's {YIELD_CULTURE}Culture bar fills up, a positive Event occurs, and the City's overall {YIELD_CULTURE}Culture Level increases. The four {YIELD_CULTURE}Culture Levels are link(CULTURE_WEAK), link(CULTURE_DEVELOPING), link(CULTURE_STRONG), and link(CULTURE_LEGENDARY). {YIELD_CULTURE}Culture Level affects which link(CONCEPT_IMPROVEMENT,2) and link(CONCEPT_WONDER,2) can be built in a City's territory and whether the City can link(CONCEPT_HURRY), which requires at least link(CULTURE_DEVELOPING) {YIELD_CULTURE}Culture. Cities with higher {YIELD_CULTURE}Culture levels also cost additional link(YIELD_FOOD,1), link(YIELD_IRON,1), link(YIELD_STONE,1), and link(YIELD_WOOD,1) per link(CONCEPT_POPULATION). Ways to increase a City's {YIELD_CULTURE}Culture yield include building link(IMPROVEMENTCLASS_SHRINE,2) and link(IMPROVEMENTCLASS_ODEON,2), training certain link(CONCEPT_SPECIALIST,2), spreading a link(CONCEPT_RELIGION) to a City, and adopting certain Laws, such as link(LAW_EPICS)."
      },
      {
        "zType": "TEXT_YIELD_DISCONTENT",
        "en-US": "Discontent~icon(YIELD_DISCONTENT)Discontent"
      },
      {
        "zType": "TEXT_YIELD_DISCONTENT_HELP",
        "en-US": "Cities slowly gain {YIELD_DISCONTENT}Discontent over time. When a City's {YIELD_DISCONTENT}Discontent bar fills up, its overall {YIELD_DISCONTENT}Discontent Level goes up by one, which reduces link(YIELD_GROWTH,1) and link(YIELD_SCIENCE,1) and also increases link(YIELD_MAINTENANCE,1). Higher {YIELD_DISCONTENT}Discontent Levels also reduce the link(CONCEPT_OPINION_FAMILY,3) of the City's ruling link(CONCEPT_FAMILY). Some ways to slow {YIELD_DISCONTENT}Discontent include connecting your City with the link(CONCEPT_TRADE_NETWORK), holding a link(PROJECT_FESTIVAL), adopting Laws such as link(LAW_TOLERANCE), keeping a City's link(CONCEPT_RELIGION,2) happy, and building link(IMPROVEMENTCLASS_BATHS,2)."
      },
      {
        "zType": "TEXT_YIELD_SCIENCE",
        "en-US": "Science~icon(YIELD_SCIENCE)Science"
      },
      {
        "zType": "TEXT_YIELD_SCIENCE_HELP",
        "en-US": "{YIELD_SCIENCE}Science increases the rate at which your link(CONCEPT_NATION) discovers new Technologies. {YIELD_SCIENCE}Science yields can be increased by adopting the link(LAW_FREEDOM) Law, by producing link(PROJECT_ARCHIVE_1,2), and by training link(CONCEPT_SPECIALIST,2) in your Cities. Members of your link(CONCEPT_COURT) with high link(RATING_WISDOM) also contribute to {YIELD_SCIENCE}Science yields."
      },
      {
        "zType": "TEXT_YIELD_MONEY",
        "en-US": "Money~icon(YIELD_MONEY)Money"
      },
      {
        "zType": "TEXT_YIELD_MONEY_HELP",
        "en-US": "{YIELD_MONEY}Money can be earned and spent by respectively selling and buying link(YIELD_FOOD,1), link(YIELD_IRON,1), link(YIELD_STONE,1), and link(YIELD_WOOD,1). {YIELD_MONEY}Money yields can be increased by building link(IMPROVEMENT_HAMLET,2) and link(IMPROVEMENTCLASS_MARKET,2), producing link(EFFECTCITY_PROJECT_TREASURY,2) in your Cities, and adopting Laws such as link(LAW_TYRANNY). Members of your link(CONCEPT_COURT) with high link(RATING_DISCIPLINE) also contribute to {YIELD_MONEY}Money yields."
      },
      {
        "zType": "TEXT_YIELD_MAINTENANCE",
        "en-US": "Maintenance~icon(YIELD_MAINTENANCE)Maintenance"
      },
      {
        "zType": "TEXT_YIELD_MAINTENANCE_HELP",
        "en-US": "{YIELD_MAINTENANCE}Maintenance decreases the amount of link(YIELD_MONEY,1) a City generates. A City's {YIELD_MAINTENANCE}Maintenance is increased by a higher link(CONCEPT_POPULATION), the City's distance from your link(CONCEPT_CAPITAL), and each link(CONCEPT_IMPROVEMENT) within the City's borders. City {YIELD_MAINTENANCE}Maintenance can be reduced by connecting the City to your link(CONCEPT_TRADE_NETWORK) and improving the link(CONCEPT_OPINION_FAMILY,3) of the City's ruling link(CONCEPT_FAMILY)."
      },
      {
        "zType": "TEXT_YIELD_ORDERS",
        "en-US": "Orders~icon(YIELD_ORDERS)Orders~Order~icon(YIELD_ORDERS)Order"
      },
      {
        "zType": "TEXT_YIELD_ORDERS_HELP",
        "en-US": "{YIELD_ORDERS}Orders are needed for various Unit actions such as moving, attacking, and building link(CONCEPT_IMPROVEMENT,2). They are also needed for such actions as assigning link(CONCEPT_GOVERNOR,2) and sending link(CONCEPT_COUNCILOR,2) on Missions. Unused {YIELD_ORDERS}Orders are sold for link(YIELD_MONEY,1) at the end of the Turn. Your {YIELD_ORDERS}Orders rate can be increased by improving your link(CONCEPT_LEGITIMACY) and building link(IMPROVEMENTCLASS_GARRISON,2)."
      },
      {
        "zType": "TEXT_YIELD_FOOD",
        "en-US": "Food~icon(YIELD_FOOD)Food"
      },
      {
        "zType": "TEXT_YIELD_FOOD_HELP",
        "en-US": "The best source of {YIELD_FOOD}Food is usually link(IMPROVEMENT_FARM,2), which are most fruitful next to link(CONCEPT_FRESH_WATER) and on link(TERRAIN_LUSH) Terrain. {YIELD_FOOD}Food can also be acquired by building link(IMPROVEMENT_NETS) and link(IMPROVEMENT_PASTURE,2), and by training link(SPECIALIST_FARMER,2), link(SPECIALIST_FISHER,2), and link(SPECIALIST_RANCHER,2). {YIELD_FOOD}Food is needed to feed your link(CONCEPT_POPULATION) and to produce new link(UNIT_SETTLER,2)."
      },
      {
        "zType": "TEXT_YIELD_IRON",
        "en-US": "Iron~icon(YIELD_IRON)Iron"
      },
      {
        "zType": "TEXT_YIELD_IRON_HELP",
        "en-US": "The primary source of {YIELD_IRON}Iron is link(IMPROVEMENT_MINE,2), which are most productive on link(RESOURCE_ORE) and on link(HEIGHT_HILL,2). {YIELD_IRON}Iron is needed to build many types of Military Units, including link(UNIT_WARRIOR,2) and link(UNIT_AXEMAN,2), which also require some {YIELD_IRON}Iron each turn as upkeep."
      },
      {
        "zType": "TEXT_YIELD_STONE",
        "en-US": "Stone~icon(YIELD_STONE)Stone"
      },
      {
        "zType": "TEXT_YIELD_STONE_HELP",
        "en-US": "The primary source of {YIELD_STONE}Stone is link(IMPROVEMENT_QUARRY,2), which are most productive on link(RESOURCE_MARBLE), on link(TERRAIN_ARID) Terrain, and adjacent to link(HEIGHT_MOUNTAIN,2). {YIELD_STONE}Stone is needed primarily to build link(CONCEPT_IMPROVEMENT,2), such as link(IMPROVEMENTCLASS_SHRINE,2), and link(CONCEPT_PROJECT,2), such as link(PROJECT_WALLS)."
      },
      {
        "zType": "TEXT_YIELD_WOOD",
        "en-US": "Wood~icon(YIELD_WOOD)Wood"
      },
      {
        "zType": "TEXT_YIELD_WOOD_HELP",
        "en-US": "{YIELD_WOOD}Wood can be gathered either by chopping down link(VEGETATION_TREES) or by building link(IMPROVEMENT_LUMBERMILL,2) once link(TECH_FORESTRY) has been researched. {YIELD_WOOD}Wood is necessary for building some City link(CONCEPT_IMPROVEMENT,2), such as link(IMPROVEMENT_RANGE,2), Military Units, such as link(UNIT_ARCHER,2), and link(UNITTRAIT_SHIP) Units, such as link(UNIT_BIREME,2). These units also require some {YIELD_WOOD}Wood each turn as upkeep."
      }
    ]
  }
}
    export default data
    