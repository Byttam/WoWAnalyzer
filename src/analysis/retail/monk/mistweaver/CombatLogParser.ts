import {
  FaelineStomp,
  FallenOrder,
  FortifyingIngredients,
  GroundingBreath,
  HarmDenial,
  ImbuedReflections,
  InvokersDelight,
  MysticTouch,
  SinisterTeachings,
  TouchOfDeath,
  DampenHarm,
} from 'analysis/retail/monk/shared';
import CoreCombatLogParser from 'parser/core/CombatLogParser';
import ManaTracker from 'parser/core/healingEfficiency/ManaTracker';
import LowHealthHealing from 'parser/shared/modules/features/LowHealthHealing';
import ManaLevelChart from 'parser/shared/modules/resources/mana/ManaLevelChart';
import ManaUsageChart from 'parser/shared/modules/resources/mana/ManaUsageChart';
import CoreChanneling from 'parser/shared/normalizers/Channeling';

import GlobalCooldown from './modules/core/GlobalCooldown';
import HotTrackerMW from './modules/core/HotTrackerMW';
import Abilities from './modules/features/Abilities';
import AlwaysBeCasting from './modules/features/AlwaysBeCasting';
import Buffs from './modules/features/Buffs';
import Checklist from './modules/features/Checklist/Module';
import CooldownThroughputTracker from './modules/features/CooldownThroughputTracker';
import EssenceFontHealingBreakdown from './modules/features/EssenceFontHealingBreakdown';
import EvmVivCastRatio from './modules/features/EvmVivCastRatio';
import MasteryStats from './modules/features/MasteryStats';
import MistweaverHealingEfficiencyDetails from './modules/features/MistweaverHealingEfficiencyDetails';
import HealingEfficiencyTracker from './modules/features/MistweaverHealingEfficiencyTracker';
import REMGraph from './modules/features/REMGraph';
import JadeBond from './modules/shadowlands/conduits/JadeBond';
import NourishingChi from './modules/shadowlands/conduits/NourishingChi';
import RisingSunRevival from './modules/shadowlands/conduits/RisingSunRevival';
import BonedustBrewAverageTargets from './modules/shadowlands/covenant/BonedustBrewAverageTargets';
import FaelineStompHealing from './modules/shadowlands/covenant/FaelineStompHealing';
import FallenOrderAverageHPOfTargetOnCast from './modules/shadowlands/covenant/FallenOrderAverageHPOfTargetOnCast';
import FallenOrderCraneAverage from './modules/shadowlands/covenant/FallenOrderCraneAverage';
import AncientTeachingsoftheMonastery from './modules/shadowlands/legendaries/AncientTeachingsoftheMonastery';
import CloudedFocus from './modules/shadowlands/legendaries/CloudedFocus';
import T28FourSet from './modules/shadowlands/tier/T28FourSet';
import EnvelopingBreath from './modules/spells/EnvelopingBreath';
import EnvelopingMists from './modules/spells/EnvelopingMists';
import EssenceFont from './modules/spells/EssenceFont';
import EssenceFontCancelled from './modules/spells/EssenceFontCancelled';
import EssenceFontTargetsHit from './modules/spells/EssenceFontTargetsHit';
import EssenceFontUniqueTargets from './modules/spells/EssenceFontUniqueTargets';
import ExpelHarm from './modules/spells/ExpelHarm';
import InvokeYulon from './modules/spells/InvokeYulon';
import LifeCocoon from './modules/spells/LifeCocoon';
import RenewingMist from './modules/spells/RenewingMist';
import Revival from './modules/spells/Revival';
import RisingSunKick from './modules/spells/RisingSunKick';
import SoothingMist from './modules/spells/SoothingMist';
import SpinningCraneKick from './modules/spells/SpinningCraneKick';
import ThunderFocusTea from './modules/spells/ThunderFocusTea';
import Vivify from './modules/spells/Vivify';
import AverageTimeBetweenRSKSs from './modules/talents/AverageTimeBetweenRSKs';
import ChiBurst from './modules/talents/ChiBurst';
import InvokeChiJi from './modules/talents/InvokeChiJi';
import JadeSerpentStatue from './modules/talents/JadeSerpentStatue';
import Lifecycles from './modules/talents/Lifecycles';
import ManaTea from './modules/talents/ManaTea';
import MistWrapEnvelopingBreath from './modules/talents/MistWrapEnvelopingBreath';
import RefreshingJadeWind from './modules/talents/RefreshingJadeWind';
import RenewingMistDuringManaTea from './modules/talents/RenewingMistDuringManaTea';
import RisingMist from './modules/talents/RisingMist';
import SpiritOfTheCrane from './modules/talents/SpiritOfTheCrane';
import Upwelling from './modules/talents/Upwelling';
import FallenOrderCraneCloneNormalizer from './normalizers/FallenOrderCraneCloneNormalizer';
import HotApplicationNormalizer from './normalizers/HotApplicationNormalizer';
import HotRemovalNormalizer from './normalizers/HotRemovalNormalizer';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // Normalizer
    hotApplicationNormalizer: HotApplicationNormalizer,
    hotRemovalNormalizer: HotRemovalNormalizer,
    fallenOrderCraneCloneNormalizer: FallenOrderCraneCloneNormalizer,

    // Core
    lowHealthHealing: LowHealthHealing,
    channeling: CoreChanneling,
    globalCooldown: GlobalCooldown,
    hotTrackerMW: HotTrackerMW,
    mysticTouch: MysticTouch,

    // Generic healer things
    manaLevelChart: ManaLevelChart,
    manaUsageChart: ManaUsageChart,

    // Features
    alwaysBeCasting: AlwaysBeCasting,
    abilities: Abilities,
    cooldownThroughputTracker: CooldownThroughputTracker,
    checklist: Checklist,
    evmVivCastRatio: EvmVivCastRatio,
    masteryStats: MasteryStats,
    buffs: Buffs,
    essenceFontHealingBreakDown: EssenceFontHealingBreakdown,
    averageTimeBetweenRSKSs: AverageTimeBetweenRSKSs,
    remGraph: REMGraph,

    // Spells
    essenceFont: EssenceFont,
    thunderFocusTea: ThunderFocusTea,
    envelopingMists: EnvelopingMists,
    soothingMist: SoothingMist, // Removed as this needs to be reworked with updated Soothing Mist Spell in BfA
    spinningCraneKick: SpinningCraneKick,
    vivify: Vivify,
    renewingMist: RenewingMist,
    lifeCocoon: LifeCocoon,
    touchOfDeath: TouchOfDeath,
    invokeYulon: InvokeYulon,
    expelHarm: ExpelHarm,
    envelopingBreath: EnvelopingBreath,
    revival: Revival,
    risingSunKick: RisingSunKick,

    essenceFontUniqueTargets: EssenceFontUniqueTargets,
    essenceFontTargetsHit: EssenceFontTargetsHit,
    EssenceFontCancelled: EssenceFontCancelled,

    // Talents
    chiBurst: ChiBurst,
    manaTea: ManaTea,
    refreshingJadeWind: RefreshingJadeWind,
    lifecycles: Lifecycles,
    spiritOfTheCrane: SpiritOfTheCrane,
    risingMist: RisingMist,
    jadeSerpentStatue: JadeSerpentStatue,
    renewingMistDuringManaTea: RenewingMistDuringManaTea,
    upwelling: Upwelling,
    invokeChiJi: InvokeChiJi,
    mistWrapEnvelopingBreath: MistWrapEnvelopingBreath,
    dampenHarm: DampenHarm,

    // Mana Tab
    manaTracker: ManaTracker,
    hpmDetails: MistweaverHealingEfficiencyDetails,
    hpmTracker: HealingEfficiencyTracker,

    // Covenants
    fallenOrder: FallenOrder,
    fallenOrderCraneAverage: FallenOrderCraneAverage,
    fallenOrderAverageHPOfTargetOnCast: FallenOrderAverageHPOfTargetOnCast,
    faelineStomp: FaelineStomp,
    faelineStompHealing: FaelineStompHealing,
    bonedustBrewAverageTargets: BonedustBrewAverageTargets,

    // Conduits
    // Endurance
    groundingBreath: GroundingBreath,
    harmDenial: HarmDenial,
    fortifyingIngredients: FortifyingIngredients,

    // Potency
    jadeBond: JadeBond,
    nourishingChi: NourishingChi,
    risingSunRevival: RisingSunRevival,
    imbuedReflections: ImbuedReflections,

    // Legendaries
    ancientTeachingsoftheMonastery: AncientTeachingsoftheMonastery,
    cloudedFocus: CloudedFocus,
    invokersDelight: InvokersDelight,
    sinisterTeachings: SinisterTeachings,

    // Tier set
    t28FourSet: T28FourSet,
  };
}

export default CombatLogParser;
