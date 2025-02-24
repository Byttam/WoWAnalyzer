import SPELLS from 'common/SPELLS';
import CoreAbilities from 'parser/core/modules/Abilities';
import { SpellbookAbility } from 'parser/core/modules/Ability';
import SPELL_CATEGORY from 'parser/core/SPELL_CATEGORY';
import talents from 'common/TALENTS/monk';

class Abilities extends CoreAbilities {
  spellbook(): SpellbookAbility[] {
    const combatant = this.selectedCombatant;
    return [
      // Rotational Spells
      {
        spell: talents.KEG_SMASH_BREWMASTER_TALENT.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        cooldown: (haste) => 8 / (1 + haste),
        charges: combatant.hasLegendary(SPELLS.STORMSTOUTS_LAST_KEG) ? 2 : 1,
        damageSpellIds: [talents.KEG_SMASH_BREWMASTER_TALENT.id],
        castEfficiency: {
          suggestion: true,
        },
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.BLACKOUT_KICK_BRM.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        cooldown: 4,
        castEfficiency: {
          suggestion: true,
        },
        gcd: {
          static: 1000,
        },
      },
      {
        spell: talents.BREATH_OF_FIRE_BREWMASTER_TALENT.id,
        isDefensive: true,
        buffSpellId: SPELLS.BREATH_OF_FIRE_DEBUFF.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        cooldown: 15,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.TIGER_PALM.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: talents.RUSHING_JADE_WIND_BREWMASTER_TALENT.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        cooldown: (haste) => 6 / (1 + haste),
        enabled: combatant.hasTalent(talents.RUSHING_JADE_WIND_BREWMASTER_TALENT.id),
        buffSpellId: talents.RUSHING_JADE_WIND_BREWMASTER_TALENT.id,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: talents.CHI_BURST_TALENT.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        cooldown: 30,
        enabled: combatant.hasTalent(talents.CHI_BURST_TALENT.id),
        castEfficiency: {
          suggestion: true,
        },
        gcd: {
          static: 1000,
        },
      },
      {
        spell: talents.CHI_WAVE_TALENT.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        cooldown: 15,
        enabled: combatant.hasTalent(talents.CHI_WAVE_TALENT.id),
        castEfficiency: {
          suggestion: true,
        },
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.CRACKLING_JADE_LIGHTNING.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: {
          // This was tested in-game (in Legion): it does NOT have a static GCD but a base GCD of 1sec and scales with Haste
          base: 1500,
        },
      },
      {
        spell: SPELLS.SPINNING_CRANE_KICK_BRM.id,
        category: SPELL_CATEGORY.ROTATIONAL_AOE,
        gcd: {
          static: 1000,
        },
      },
      // Cooldowns
      {
        spell: talents.INVOKE_NIUZAO_THE_BLACK_OX_BREWMASTER_TALENT.id,
        category: SPELL_CATEGORY.COOLDOWNS,
        cooldown: 180,
        gcd: {
          base: 1000,
        },
      },
      {
        spell: talents.PURIFYING_BREW_BREWMASTER_TALENT.id,
        category: SPELL_CATEGORY.DEFENSIVE,
        cooldown: (haste) =>
          (combatant.hasTalent(talents.LIGHT_BREWING_BREWMASTER_TALENT) ? 16 : 20) / (1 + haste),
        charges: combatant.hasTalent(talents.PURIFYING_BREW_RANK_2_BREWMASTER_TALENT) ? 2 : 1,
        gcd: null,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.95,
        },
      },
      {
        spell: talents.CELESTIAL_BREW_BREWMASTER_TALENT.id,
        category: SPELL_CATEGORY.DEFENSIVE,
        cooldown: combatant.hasTalent(talents.CELESTIAL_BREW_BREWMASTER_TALENT) ? 48 : 60,
        gcd: {
          base: 1000,
        },
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.7,
        },
      },
      {
        spell: talents.BLACK_OX_BREW_BREWMASTER_TALENT.id,
        category: SPELL_CATEGORY.DEFENSIVE,
        cooldown: 120,
        castEfficiency: {
          suggestion: false,
          recommendedEfficiency: 0.7,
        },
        enabled: combatant.hasTalent(talents.BLACK_OX_BREW_BREWMASTER_TALENT.id),
        gcd: null,
      },
      {
        spell: talents.EXPEL_HARM_TALENT.id,
        category: SPELL_CATEGORY.DEFENSIVE,
        cooldown: 5,
        gcd: {
          static: 500,
        },
      },
      {
        spell: talents.FORTIFYING_BREW_TALENT.id,
        buffSpellId: SPELLS.FORTIFYING_BREW_BRM_BUFF.id,
        category: SPELL_CATEGORY.DEFENSIVE,
        cooldown: 420,
        gcd: null,
      },
      {
        spell: talents.HEALING_ELIXIR_BREWMASTER_TALENT.id,
        category: SPELL_CATEGORY.COOLDOWNS,
        cooldown: 30,
        enabled: combatant.hasTalent(talents.HEALING_ELIXIR_BREWMASTER_TALENT.id),
        gcd: null,
      },
      {
        spell: talents.DAMPEN_HARM_TALENT.id,
        buffSpellId: talents.DAMPEN_HARM_TALENT.id,
        category: SPELL_CATEGORY.DEFENSIVE,
        cooldown: 120,
        enabled: combatant.hasTalent(talents.DAMPEN_HARM_TALENT.id),
        gcd: null,
      },
      {
        spell: talents.ZEN_MEDITATION_BREWMASTER_TALENT.id,
        buffSpellId: talents.ZEN_MEDITATION_BREWMASTER_TALENT.id,
        category: SPELL_CATEGORY.DEFENSIVE,
        cooldown: combatant.hasTalent(talents.FUNDAMENTAL_OBSERVATION_BREWMASTER_TALENT)
          ? 225
          : 300,
        gcd: null,
      },
      // Utility
      {
        spell: talents.RING_OF_PEACE_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(talents.RING_OF_PEACE_TALENT.id),
        gcd: {
          // This was tested in-game (in Legion): it does NOT have a static GCD but a base GCD of 1sec and scales with Haste
          base: 1500,
        },
      },
      {
        spell: talents.CHI_TORPEDO_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(talents.CHI_TORPEDO_TALENT.id),
        cooldown: 20,
        charges: 1 + Number(combatant.hasTalent(talents.ROLL_TALENT)),
        // Both Roll and Chi Torpedo don't actually have a GCD but block all spells during its animation for about the same duration, so maybe time it in-game and mark it as channeling instead? The issue is you can follow up any ability on the GCD with chi torpedo/roll, so it can still cause overlap.
        gcd: null,
      },
      {
        spell: SPELLS.ROLL.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: !combatant.hasTalent(talents.CHI_TORPEDO_TALENT.id),
        cooldown: combatant.hasTalent(talents.CELERITY_TALENT.id) ? 15 : 20,
        charges:
          1 +
          Number(combatant.hasTalent(talents.CELERITY_TALENT.id)) +
          Number(combatant.hasTalent(talents.ROLL_TALENT)),
        // Both Roll and Chi Torpedo don't actually have a GCD but block all spells during its animation for about the same duration, so maybe time it in-game and mark it as channeling instead? The issue is you can follow up any ability on the GCD with chi torpedo/roll, so it can still cause overlap.
        gcd: null,
      },
      {
        spell: talents.TRANSCENDENCE_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.TRANSCENDENCE_TRANSFER.id,
        category: SPELL_CATEGORY.UTILITY,
        gcd: {
          // This was tested in-game (in Legion): it does NOT have a static GCD but a base GCD of 1sec and scales with Haste
          base: 1500,
        },
      },
      {
        spell: talents.SUMMON_BLACK_OX_STATUE_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(talents.SUMMON_BLACK_OX_STATUE_TALENT.id),
        gcd: {
          static: 1000,
        },
      },
      {
        spell: talents.PARALYSIS_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        cooldown: 45,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.LEG_SWEEP.id,
        category: SPELL_CATEGORY.UTILITY,
        cooldown: combatant.hasTalent(talents.TIGER_TAIL_SWEEP_TALENT.id) ? 50 : 60,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.PROVOKE.id,
        category: SPELL_CATEGORY.UTILITY,
        cooldown: 8,
        gcd: null,
      },
      {
        spell: talents.SPEAR_HAND_STRIKE_TALENT.id,
        cooldown: 15,
        category: SPELL_CATEGORY.UTILITY,
        gcd: null,
      },
      // Its unlikely that these spells will ever be cast but if they are they will show.
      {
        spell: SPELLS.DETOX_ENERGY.id,
        category: SPELL_CATEGORY.UTILITY,
        cooldown: 8,
        gcd: {
          // This was tested in-game (in Legion): it does NOT have a static GCD but a base GCD of 1sec and scales with Haste
          base: 1500,
        },
      },
      {
        spell: SPELLS.VIVIFY.id, // don't know if the vivify spell has been updated to the new ID yet
        category: SPELL_CATEGORY.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: talents.TIGERS_LUST_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(talents.TIGERS_LUST_TALENT.id),
        cooldown: 30,
        gcd: {
          static: 1000,
        },
      },
    ];
  }
}

export default Abilities;
