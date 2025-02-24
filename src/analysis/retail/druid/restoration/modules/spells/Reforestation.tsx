import { formatNumber, formatPercentage } from 'common/format';
import Analyzer from 'parser/core/Analyzer';
import { Options } from 'parser/core/Module';
import BoringSpellValueText from 'parser/ui/BoringSpellValueText';
import ItemPercentHealingDone from 'parser/ui/ItemPercentHealingDone';
import { SpellLink } from 'interface';
import Statistic from 'parser/ui/Statistic';
import STATISTIC_CATEGORY from 'parser/ui/STATISTIC_CATEGORY';
import STATISTIC_ORDER from 'parser/ui/STATISTIC_ORDER';

import TreeOfLife from 'analysis/retail/druid/restoration/modules/spells/TreeOfLife';
import { TALENTS_DRUID } from 'common/TALENTS';

/**
 * **Reforestation**
 * Spec Talent Tier 10
 *
 * Every 3 casts of Swiftmend grants you Incarnation: Tree of Life for 9 sec.
 */
class Reforestation extends Analyzer {
  static dependencies = {
    treeOfLife: TreeOfLife,
  };

  protected treeOfLife!: TreeOfLife;

  constructor(options: Options) {
    super(options);
    this.active = this.selectedCombatant.hasTalent(TALENTS_DRUID.REFORESTATION_RESTORATION_TALENT);
  }

  statistic() {
    return (
      <Statistic
        position={STATISTIC_ORDER.OPTIONAL(40)}
        category={STATISTIC_CATEGORY.ITEMS}
        size="flexible"
        tooltip={
          <>
            This is the healing caused by the Tree of Life procs from{' '}
            <SpellLink id={TALENTS_DRUID.REFORESTATION_RESTORATION_TALENT.id} />. The healing amount
            is the sum of all benefits from gaining Tree of Life form, which are listed below
            <ul>
              <li>
                Overall Increased Healing:{' '}
                <strong>
                  {formatPercentage(
                    this.owner.getPercentageOfTotalHealingDone(
                      this.treeOfLife.reforestation.allBoostHealing,
                    ),
                  )}
                  %
                </strong>
              </li>
              <li>
                Rejuv Increased Healing:{' '}
                <strong>
                  {formatPercentage(
                    this.owner.getPercentageOfTotalHealingDone(
                      this.treeOfLife.reforestation.rejuvBoostHealing,
                    ),
                  )}
                  %
                </strong>
              </li>
              <li>
                Rejuv Mana Saved:{' '}
                <strong>
                  {formatNumber(this.treeOfLife._getManaSaved(this.treeOfLife.reforestation))}
                </strong>{' '}
                (assuming mana used to fill with Rejuvs:{' '}
                <strong>
                  ≈
                  {formatPercentage(
                    this.owner.getPercentageOfTotalHealingDone(
                      this.treeOfLife._getManaSavedHealing(this.treeOfLife.reforestation),
                    ),
                  )}
                  %
                </strong>{' '}
                healing)
              </li>
              <li>
                Increased Wild Growths:{' '}
                <strong>
                  {formatPercentage(
                    this.owner.getPercentageOfTotalHealingDone(
                      this.treeOfLife.reforestation.extraWgsAttribution.healing,
                    ),
                  )}
                  %
                </strong>
              </li>
            </ul>
          </>
        }
      >
        <BoringSpellValueText spellId={TALENTS_DRUID.REFORESTATION_RESTORATION_TALENT.id}>
          <ItemPercentHealingDone
            amount={this.treeOfLife._getTotalHealing(this.treeOfLife.reforestation)}
          />
          <br />
        </BoringSpellValueText>
      </Statistic>
    );
  }
}

export default Reforestation;
