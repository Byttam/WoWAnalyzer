import SPELLS from 'common/SPELLS/demonhunter';
import { CastEvent } from 'parser/core/Events';
import CoreGlobalCooldown from 'parser/shared/modules/GlobalCooldown';

/**
 * Eye Beam's cast event is actually a beginchannel event, so it shouldn't add the GCD as active time.
 */
class GlobalCooldown extends CoreGlobalCooldown {
  onCast(event: CastEvent) {
    if (event.ability.guid === SPELLS.EYE_BEAM.id) {
      // This GCD gets handled by the `beginchannel` event
      return;
    }
    super.onCast(event);
  }
}

export default GlobalCooldown;
