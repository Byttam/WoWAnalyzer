import ActiveDruidForm from 'analysis/retail/druid/shared/core/ActiveDruidForm';
import CoreCombatLogParser from 'parser/core/CombatLogParser';
import ManaTracker from 'parser/core/healingEfficiency/ManaTracker';
import LowHealthHealing from 'parser/shared/modules/features/LowHealthHealing';
import ManaLevelChart from 'parser/shared/modules/resources/mana/ManaLevelChart';
import ManaUsageChart from 'parser/shared/modules/resources/mana/ManaUsageChart';

import Guide from './Guide';
import Abilities from './modules/Abilities';
import HotAttributor from './modules/core/hottracking/HotAttributor';
import HotTrackerRestoDruid from './modules/core/hottracking/HotTrackerRestoDruid';
import Mastery from './modules/core/Mastery';
import SpellManaCost from './modules/core/SpellManaCost';
import AlwaysBeCasting from './modules/features/AlwaysBeCasting';
import AverageHots from './modules/features/AverageHots';
import Checklist from './modules/features/Checklist/Module';
import CooldownThroughputTracker from './modules/features/CooldownThroughputTracker';
import Efflorescence from './modules/features/Efflorescence';
import HotCountGraph from './modules/features/HotCountGraph';
import Innervate from './modules/features/Innervate';
import Ironbark from './modules/features/Ironbark';
import Lifebloom from './modules/features/Lifebloom';
import LifebloomAndEffloUptime from './modules/features/LifebloomAndEffloUptime';
import RegrowthAndClearcasting from './modules/features/RegrowthAndClearcasting';
import Rejuvenation from './modules/features/Rejuvenation';
import RestoDruidHealingEfficiencyDetails from './modules/features/RestoDruidHealingEfficiencyDetails';
import HealingEfficiencyTracker from './modules/features/RestoDruidHealingEfficiencyTracker';
import Swiftmend from './modules/features/Swiftmend';
import Tranquility from './modules/features/Tranquility';
import WildGrowth from './modules/features/WildGrowth';
import FlashOfClarity from 'analysis/retail/druid/restoration/modules/spells/FlashOfClarity';
import AdaptiveSwarmResto from 'analysis/retail/druid/restoration/modules/spells/AdaptiveSwarmResto';
import ConvokeSpiritsResto from 'analysis/retail/druid/restoration/modules/spells/ConvokeSpiritsResto';
import Reforestation from 'analysis/retail/druid/restoration/modules/spells/Reforestation';
import PowerOfTheArchdruid from 'analysis/retail/druid/restoration/modules/spells/PowerOfTheArchdruid';
import VerdantInfusion from 'analysis/retail/druid/restoration/modules/spells/VerdantInfusion';
import UnendingGrowth from 'analysis/retail/druid/restoration/modules/spells/UnendingGrowth';
import Abundance from 'analysis/retail/druid/restoration/modules/spells/Abundance';
import CenarionWard from 'analysis/retail/druid/restoration/modules/spells/CenarionWard';
import Cultivation from 'analysis/retail/druid/restoration/modules/spells/Cultivation';
import Flourish from 'analysis/retail/druid/restoration/modules/spells/Flourish';
import Photosynthesis from 'analysis/retail/druid/restoration/modules/spells/Photosynthesis';
import SoulOfTheForest from 'analysis/retail/druid/restoration/modules/spells/SoulOfTheForest';
import SpringBlossoms from 'analysis/retail/druid/restoration/modules/spells/SpringBlossoms';
import TreeOfLife from 'analysis/retail/druid/restoration/modules/spells/TreeOfLife';
import CastLinkNormalizer from './normalizers/CastLinkNormalizer';
import ClearcastingNormalizer from './normalizers/ClearcastingNormalizer';
import HotApplicationNormalizer from './normalizers/HotApplicationNormalizer';
import SoulOfTheForestLinkNormalizer from './normalizers/SoulOfTheForestLinkNormalizer';
import SwiftmendNormalizer from './normalizers/SwiftmendNormalizer';
import TreeOfLifeNormalizer from './normalizers/TreeOfLifeNormalizer';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // Normalizers
    clearcastingNormalizer: ClearcastingNormalizer,
    hotApplicationNormalizer: HotApplicationNormalizer,
    hotCastLinkNormalizer: CastLinkNormalizer,
    soulOfTheForestLinkNormalizer: SoulOfTheForestLinkNormalizer,
    treeOfLifeNormalizer: TreeOfLifeNormalizer,
    swiftmendNormazlier: SwiftmendNormalizer,

    // Core
    mastery: Mastery,
    spellManaCost: SpellManaCost,
    activeDruidForm: ActiveDruidForm,

    // Generic healer things
    manaLevelChart: ManaLevelChart,
    manaUsageChart: ManaUsageChart,

    // Checklist
    checklist: Checklist,

    // Hot Tracking
    hotTracker: HotTrackerRestoDruid,
    hotAttributor: HotAttributor,

    // Spells TODO redo this organization
    lowHealthHealing: LowHealthHealing,
    alwaysBeCasting: AlwaysBeCasting,
    averageHots: AverageHots,
    cooldownThroughputTracker: CooldownThroughputTracker,
    abilities: Abilities,
    wildGrowth: WildGrowth,
    lifebloom: Lifebloom,
    efflorescence: Efflorescence,
    regrowthAndClearcasting: RegrowthAndClearcasting,
    innervate: Innervate,
    springBlossoms: SpringBlossoms,
    cultivation: Cultivation,
    ironbark: Ironbark,
    prematureRejuvenations: Rejuvenation,
    lifebloomAndEffloUptime: LifebloomAndEffloUptime,
    swiftmend: Swiftmend,
    hotCountGraph: HotCountGraph,
    tranquility: Tranquility,
    soulOfTheForest: SoulOfTheForest,
    treeOfLife: TreeOfLife,
    photosynthesis: Photosynthesis,
    flourish: Flourish,
    cenarionWard: CenarionWard,
    abundance: Abundance,
    convokeSpirits: ConvokeSpiritsResto,
    adaptiveSwarm: AdaptiveSwarmResto,
    flashOfClarity: FlashOfClarity,
    unendingGrowrth: UnendingGrowth,
    memoryoftheMotherTree: PowerOfTheArchdruid,
    verdantInfusion: VerdantInfusion,
    reforestation: Reforestation,

    // Mana Tab
    manaTracker: ManaTracker,
    hpmDetails: RestoDruidHealingEfficiencyDetails,
    hpmTracker: HealingEfficiencyTracker,
  };

  static guide = Guide;
}

export default CombatLogParser;
