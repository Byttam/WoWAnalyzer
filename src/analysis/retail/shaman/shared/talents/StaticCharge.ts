import SPELLS from 'common/SPELLS';
import { TALENTS_SHAMAN } from 'common/TALENTS';
import Analyzer, { Options, SELECTED_PLAYER_PET } from 'parser/core/Analyzer';
import Events from 'parser/core/Events';
import SpellUsable from 'parser/shared/modules/SpellUsable';

// Static Charge can only reduce the cooldown down to 40 seconds
const minimumCooldown = 40000;
const stunReduction = 5000;

class StaticCharge extends Analyzer {
  static dependencies = {
    spellUsable: SpellUsable,
  };

  protected spellUsable!: SpellUsable;

  constructor(options: Options) {
    super(options);
    this.active = this.selectedCombatant.hasTalent(TALENTS_SHAMAN.STATIC_CHARGE_TALENT.id);

    if (!this.active) {
      return;
    }

    this.addEventListener(
      Events.applydebuff.by(SELECTED_PLAYER_PET).spell(SPELLS.STATIC_CHARGE_DEBUFF),
      this.stunApplication,
    );
  }

  stunApplication() {
    const cooldownRemaining = this.spellUsable.cooldownRemaining(
      TALENTS_SHAMAN.CAPACITOR_TOTEM_TALENT.id,
    );
    if (cooldownRemaining <= minimumCooldown) {
      return;
    }

    this.spellUsable.reduceCooldown(TALENTS_SHAMAN.CAPACITOR_TOTEM_TALENT.id, stunReduction);
  }
}

export default StaticCharge;
