import { formatNumber } from 'common/format';
import SPELLS from 'common/SPELLS';
import Analyzer, { Options, SELECTED_PLAYER } from 'parser/core/Analyzer';
import { calculateEffectiveHealing } from 'parser/core/EventCalculateLib';
import Events, { CastEvent, HealEvent } from 'parser/core/Events';
import Combatants from 'parser/shared/modules/Combatants';
import BoringSpellValueText from 'parser/ui/BoringSpellValueText';
import Statistic from 'parser/ui/Statistic';
import STATISTIC_CATEGORY from 'parser/ui/STATISTIC_CATEGORY';
import STATISTIC_ORDER from 'parser/ui/STATISTIC_ORDER';

const UNAFFECTED_SPELLS: number[] = [SPELLS.ENVELOPING_MIST.id];

class EnvelopingMists extends Analyzer {
  static dependencies = {
    combatants: Combatants,
  };
  healingIncrease: number = 0;
  evmHealingIncrease: number = 0;
  gustsHealing: number = 0;
  lastCastTarget: number = -1;
  numberToCount: number = 0;
  gustProc: number = 0;
  protected combatants!: Combatants;

  constructor(options: Options) {
    super(options);
    this.evmHealingIncrease = this.selectedCombatant.hasTalent(SPELLS.MIST_WRAP_TALENT.id)
      ? 0.4
      : 0.3;
    this.addEventListener(
      Events.cast.by(SELECTED_PLAYER).spell(SPELLS.ENVELOPING_MIST),
      this.castEnvelopingMist,
    );
    this.addEventListener(Events.heal.by(SELECTED_PLAYER), this.handleEnvelopingMist);

    this.addEventListener(
      Events.heal.by(SELECTED_PLAYER).spell(SPELLS.GUSTS_OF_MISTS),
      this.masteryEnvelopingMist,
    );
  }

  castEnvelopingMist(event: CastEvent) {
    this.numberToCount += 1;
    this.lastCastTarget = event.targetID || -1;
  }

  masteryEnvelopingMist(event: HealEvent) {
    const targetId = event.targetID;

    if (this.lastCastTarget === targetId && this.numberToCount > 0) {
      this.gustProc += 1;
      this.gustsHealing += (event.amount || 0) + (event.absorbed || 0);
      this.numberToCount -= 1;
    }
  }

  handleEnvelopingMist(event: HealEvent) {
    const targetId = event.targetID;
    const spellId = event.ability.guid;
    const sourceId = event.sourceID;

    if (UNAFFECTED_SPELLS.includes(spellId)) {
      return;
    }

    if (this.combatants.players[targetId]) {
      if (
        this.combatants.players[targetId].hasBuff(
          SPELLS.ENVELOPING_MIST.id,
          event.timestamp,
          0,
          0,
          sourceId,
        )
      ) {
        this.healingIncrease += calculateEffectiveHealing(event, this.evmHealingIncrease);
      }
    }
  }

  statistic() {
    return (
      <Statistic
        size="flexible"
        position={STATISTIC_ORDER.OPTIONAL(0)}
        category={STATISTIC_CATEGORY.THEORYCRAFT}
        tooltip={<>This is the effective healing contributed by the Enveloping Mist buff.</>}
      >
        <BoringSpellValueText spellId={SPELLS.ENVELOPING_MIST.id}>
          <>
            {formatNumber(this.healingIncrease)} <small>healing contributed by the buff</small>
          </>
        </BoringSpellValueText>
      </Statistic>
    );
  }
}

export default EnvelopingMists;
