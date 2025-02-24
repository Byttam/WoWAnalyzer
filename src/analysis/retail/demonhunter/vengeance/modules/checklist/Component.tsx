import SPELLS from 'common/SPELLS/demonhunter';
import { TALENTS_DEMON_HUNTER } from 'common/TALENTS/demonhunter';
import COVENANTS from 'game/shadowlands/COVENANTS';
import { SpellLink } from 'interface';
import PreparationRule from 'parser/shadowlands/modules/features/Checklist/PreparationRule';
import Checklist from 'parser/shared/modules/features/Checklist';
import {
  AbilityRequirementProps,
  ChecklistProps,
} from 'parser/shared/modules/features/Checklist/ChecklistTypes';
import GenericCastEfficiencyRequirement from 'parser/shared/modules/features/Checklist/GenericCastEfficiencyRequirement';
import Requirement from 'parser/shared/modules/features/Checklist/Requirement';
import Rule from 'parser/shared/modules/features/Checklist/Rule';

const VengeanceDemonHunterChecklist = (props: ChecklistProps) => {
  const { combatant, castEfficiency, thresholds } = props;
  const AbilityRequirement = (props: AbilityRequirementProps) => (
    <GenericCastEfficiencyRequirement
      castEfficiency={castEfficiency.getCastEfficiencyForSpellId(props.spell)}
      {...props}
    />
  );

  return (
    <Checklist>
      <Rule
        name="Use your short cooldowns"
        description={
          <>
            These should generally always be on recharge to maximize DPS, HPS and efficiency.
            <br />
            <a
              href="https://www.wowhead.com/vengeance-demon-hunter-rotation-guide#rotation-priority-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              More info.
            </a>
          </>
        }
      >
        <AbilityRequirement spell={SPELLS.IMMOLATION_AURA.id} />
        {!(
          combatant.hasCovenant(COVENANTS.KYRIAN.id) &&
          combatant.hasLegendary(SPELLS.RAZELIKHS_DEFILEMENT)
        ) && <AbilityRequirement spell={SPELLS.SIGIL_OF_FLAME_CONCENTRATED.id} />}
        <AbilityRequirement spell={SPELLS.FEL_DEVASTATION.id} />
        {combatant.hasTalent(TALENTS_DEMON_HUNTER.FRACTURE_VENGEANCE_TALENT.id) && (
          <AbilityRequirement spell={TALENTS_DEMON_HUNTER.FRACTURE_VENGEANCE_TALENT.id} />
        )}
        {combatant.hasTalent(TALENTS_DEMON_HUNTER.FELBLADE_TALENT.id) && (
          <AbilityRequirement spell={TALENTS_DEMON_HUNTER.FELBLADE_TALENT.id} />
        )}
        {combatant.hasTalent(TALENTS_DEMON_HUNTER.ELYSIAN_DECREE_VENGEANCE_TALENT.id) && (
          <AbilityRequirement spell={SPELLS.ELYSIAN_DECREE.id} />
        )}
        {/*{combatant.hasTalent(TALENTS_DEMON_HUNTER.FODDER_TO_THE_FLAME_VENGEANCE_TALENT.id) && (*/}
        {/*  <AbilityRequirement spell={SPELLS.FODDER_TO_THE_FLAME.id} />*/}
        {/*)}*/}
        {combatant.hasTalent(TALENTS_DEMON_HUNTER.THE_HUNT_TALENT.id) && (
          <AbilityRequirement spell={SPELLS.THE_HUNT.id} />
        )}
      </Rule>

      <Rule
        name="Use your rotational defensive/healing abilities"
        description={
          <>
            Use these to block damage spikes and keep damage smooth to reduce external healing
            required.
            <br />
            <a
              href="https://www.wowhead.com/vengeance-demon-hunter-rotation-guide#rotation-priority-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              More info.
            </a>
          </>
        }
      >
        <Requirement
          name={
            <>
              <SpellLink id={SPELLS.DEMON_SPIKES.id} />
            </>
          }
          thresholds={thresholds.demonSpikes}
        />
        {combatant.hasTalent(TALENTS_DEMON_HUNTER.SPIRIT_BOMB_VENGEANCE_TALENT.id) &&
          !combatant.hasTalent(TALENTS_DEMON_HUNTER.FEED_THE_DEMON_VENGEANCE_TALENT.id) && (
            <Requirement
              name={
                <>
                  <SpellLink id={TALENTS_DEMON_HUNTER.SPIRIT_BOMB_VENGEANCE_TALENT.id} /> casted at
                  4+ souls
                </>
              }
              thresholds={thresholds.spiritBombSoulsConsume}
            />
          )}
        {!combatant.hasTalent(TALENTS_DEMON_HUNTER.FEED_THE_DEMON_VENGEANCE_TALENT.id) &&
          combatant.hasTalent(TALENTS_DEMON_HUNTER.SPIRIT_BOMB_VENGEANCE_TALENT.id) && (
            <Requirement
              name={
                <>
                  <SpellLink id={SPELLS.SOUL_CLEAVE.id} /> minimizing souls consumed
                </>
              }
              thresholds={thresholds.soulCleaveSoulsConsumed}
            />
          )}
        {combatant.hasTalent(TALENTS_DEMON_HUNTER.SOUL_BARRIER_VENGEANCE_TALENT.id) && (
          <AbilityRequirement spell={TALENTS_DEMON_HUNTER.SOUL_BARRIER_VENGEANCE_TALENT.id} />
        )}
      </Rule>

      <Rule
        name="Use your long defensive/healing cooldowns"
        description={
          <>
            Use these to mitigate large damage spikes or in emergency situations.
            <br />
            <a
              href="https://www.wowhead.com/vengeance-demon-hunter-rotation-guide#rotation-priority-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              More info.
            </a>
          </>
        }
      >
        <AbilityRequirement spell={SPELLS.METAMORPHOSIS_TANK.id} />
        <AbilityRequirement spell={SPELLS.FIERY_BRAND.id} />
      </Rule>

      {(combatant.hasTalent(TALENTS_DEMON_HUNTER.SPIRIT_BOMB_VENGEANCE_TALENT.id) ||
        combatant.hasTalent(TALENTS_DEMON_HUNTER.VOID_REAVER_VENGEANCE_TALENT.id)) && (
        <Rule
          name="Maintain your buffs and debuffs"
          description={
            <>
              It is important to maintain these as they contribute a large amount to your DPS and
              HPS.
              <br />
              <a
                href="https://www.wowhead.com/vengeance-demon-hunter-rotation-guide#rotation-priority-list"
                target="_blank"
                rel="noopener noreferrer"
              >
                More info.
              </a>
            </>
          }
        >
          {combatant.hasTalent(TALENTS_DEMON_HUNTER.SPIRIT_BOMB_VENGEANCE_TALENT.id) && (
            <Requirement
              name={
                <>
                  <SpellLink id={SPELLS.FRAILTY_SPIRIT_BOMB_DEBUFF.id} /> debuff uptime
                </>
              }
              thresholds={thresholds.spiritBombFrailtyDebuff}
            />
          )}
          {combatant.hasTalent(TALENTS_DEMON_HUNTER.VOID_REAVER_VENGEANCE_TALENT.id) && (
            <Requirement
              name={
                <>
                  <SpellLink id={TALENTS_DEMON_HUNTER.VOID_REAVER_VENGEANCE_TALENT.id} /> debuff
                  uptime
                </>
              }
              thresholds={thresholds.voidReaverDebuff}
            />
          )}
        </Rule>
      )}

      <Rule
        name="Manage your resources properly"
        description={<>You should always avoid capping your Fury/Souls and spend them regularly.</>}
      >
        <Requirement name="Total Fury Waste" thresholds={thresholds.furyDetails} />
        {combatant.hasTalent(SPELLS.IMMOLATION_AURA.id) && (
          <Requirement
            name={
              <>
                <SpellLink id={SPELLS.IMMOLATION_AURA.id} /> Fury wasted
              </>
            }
            thresholds={thresholds.immolationAuraEfficiency}
          />
        )}

        {!combatant.hasTalent(TALENTS_DEMON_HUNTER.FRACTURE_VENGEANCE_TALENT.id) && (
          <Requirement
            name={
              <>
                <SpellLink id={SPELLS.SHEAR.id} /> bad casts
              </>
            }
            thresholds={thresholds.shearFracture}
          />
        )}

        {combatant.hasTalent(TALENTS_DEMON_HUNTER.FRACTURE_VENGEANCE_TALENT.id) && (
          <Requirement
            name={
              <>
                <SpellLink id={TALENTS_DEMON_HUNTER.FRACTURE_VENGEANCE_TALENT.id} /> bad casts
              </>
            }
            thresholds={thresholds.shearFracture}
          />
        )}
      </Rule>

      <PreparationRule thresholds={thresholds} />
    </Checklist>
  );
};

export default VengeanceDemonHunterChecklist;
