import React from 'react';

import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';
import Analyzer from 'Parser/Core/Analyzer';
import ItemDamageDone from 'Interface/Others/ItemDamageDone';

/**
 * Terminus Signaling Beacon -
 * Use: Call a Legion ship to bombard the target's location for 9 sec, dealing 353311 Fire damage to all targets within 12 yds, including the ship. (1 Min, 30 Sec Cooldown)
 */
class TerminusSignalingBeacon extends Analyzer {
  damage = 0;

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasTrinket(ITEMS.TERMINUS_SIGNALING_BEACON.id);
  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    if (spellId === SPELLS.LEGION_BOMBARDMENT.id) {
      this.damage += event.amount + (event.absorbed || 0);
    }
  }

  item() {
    return {
      item: ITEMS.TERMINUS_SIGNALING_BEACON,
      result: <ItemDamageDone amount={this.damage} />,
    };
  }
}

export default TerminusSignalingBeacon;
