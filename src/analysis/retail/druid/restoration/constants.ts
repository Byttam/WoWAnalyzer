import SPELLS from 'common/SPELLS';
import { TALENTS_DRUID as TALENTS } from 'common/TALENTS';
import Spell from 'common/SPELLS/Spell';

export const REJUVENATION_BUFFS: Spell[] = [SPELLS.REJUVENATION, SPELLS.REJUVENATION_GERMINATION];

export const LIFEBLOOM_BUFFS: Spell[] = [
  SPELLS.LIFEBLOOM_HOT_HEAL,
  SPELLS.LIFEBLOOM_UNDERGROWTH_HOT_HEAL,
];

// TODO double check the entries on this list for Dragonflight

export const ABILITIES_AFFECTED_BY_HEALING_INCREASES = [
  SPELLS.REJUVENATION.id,
  SPELLS.REGROWTH.id,
  SPELLS.WILD_GROWTH.id,
  SPELLS.REJUVENATION_GERMINATION.id,
  SPELLS.CULTIVATION.id,
  SPELLS.TRANQUILITY_HEAL.id,
  SPELLS.EFFLORESCENCE_HEAL.id,
  SPELLS.CENARION_WARD_HEAL.id,
  SPELLS.LIFEBLOOM_HOT_HEAL.id,
  SPELLS.LIFEBLOOM_UNDERGROWTH_HOT_HEAL.id,
  SPELLS.LIFEBLOOM_BLOOM_HEAL.id,
  SPELLS.SWIFTMEND.id,
  TALENTS.RENEWAL_TALENT.id,
  SPELLS.SPRING_BLOSSOMS.id,
  // The following spells don't double dip in healing increases.
  SPELLS.LEECH.id,
  //TODO - blazyb double check if any non resto druid spells scales with healing increases.
];

export const ABILITIES_AFFECTED_BY_HEALING_INCREASES_SPELL_OBJECTS = [
  SPELLS.REJUVENATION,
  SPELLS.REGROWTH,
  SPELLS.WILD_GROWTH,
  SPELLS.REJUVENATION_GERMINATION,
  SPELLS.CULTIVATION,
  SPELLS.TRANQUILITY_HEAL,
  SPELLS.EFFLORESCENCE_HEAL,
  SPELLS.CENARION_WARD_HEAL,
  SPELLS.LIFEBLOOM_HOT_HEAL,
  SPELLS.LIFEBLOOM_UNDERGROWTH_HOT_HEAL,
  SPELLS.LIFEBLOOM_BLOOM_HEAL,
  SPELLS.SWIFTMEND,
  TALENTS.RENEWAL_TALENT,
  SPELLS.SPRING_BLOSSOMS,
  SPELLS.RENEWING_BLOOM,
  // The following spells don't double dip in healing increases.
  SPELLS.LEECH,
  //TODO - blazyb double check if any non resto druid spells scales with healing increases.
];

// HoTs that get rate increased by Flourish
export const FLOURISH_INCREASED_RATE = [
  SPELLS.REJUVENATION,
  SPELLS.REJUVENATION_GERMINATION,
  SPELLS.REGROWTH,
  SPELLS.WILD_GROWTH,
  SPELLS.CULTIVATION,
  SPELLS.CENARION_WARD_HEAL,
  SPELLS.LIFEBLOOM_HOT_HEAL,
  SPELLS.LIFEBLOOM_UNDERGROWTH_HOT_HEAL,
  SPELLS.TRANQUILITY_HEAL,
  SPELLS.ADAPTIVE_SWARM_HEAL,
  SPELLS.RENEWING_BLOOM,
];

// HoTs that get rate increased by Photosynthesis, which is different from the Flourish one because Blizzard
export const PHOTO_INCREASED_RATE = [
  ...FLOURISH_INCREASED_RATE,
  SPELLS.SPRING_BLOSSOMS,
  SPELLS.EFFLORESCENCE_HEAL,
];
