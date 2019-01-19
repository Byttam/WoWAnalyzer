import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Tooltip from 'common/Tooltip';
import InfoIcon from 'interface/icons/Info';
import DrilldownIcon from 'interface/icons/Link';
import STATISTIC_CATEGORY from 'interface/others/STATISTIC_CATEGORY';

import './Statistic.scss';

class Statistic extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    tooltip: PropTypes.node,
    wide: PropTypes.bool,
    ultrawide: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    category: PropTypes.oneOf(Object.values(STATISTIC_CATEGORY)),
    // eslint-disable-next-line react/no-unused-prop-types
    position: PropTypes.number,
    size: PropTypes.oneOf(['standard', 'small', 'medium', 'large', 'flexible']),
    creator: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    drilldown: PropTypes.string,
  };
  static defaultProps = {
    size: 'standard',
    wide: false,
    ultrawide: false,
  };

  render() {
    const { children, wide, ultrawide, tooltip, size, drilldown, ...others } = this.props;

    // TODO: Determine if drilldown is a relative or absolute URL. Absolute: has protocol. Relative: has no protocol.
    // TODO: Render drilldown link. Maybe on mouseover a small box expand below the statistic with a link?

    return (
      <div className={ultrawide ? 'col-md-12' : (wide ? 'col-md-6 col-sm-12 col-xs-12' : 'col-lg-3 col-md-4 col-sm-6 col-xs-12')}>
        <div className={`panel statistic ${size}`} {...others}>
          <div className="panel-body">
            {children}
          </div>
          {tooltip && (
            <Tooltip content={tooltip}>
              <div
                className="detail-corner"
                data-place="top"
              >
                <InfoIcon />
              </div>
            </Tooltip>
          )}
          {drilldown && (
            <div className="drilldown">
              <Tooltip content="View drilldown">
                <Link to={drilldown}>
                  <DrilldownIcon />
                </Link>
              </Tooltip>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Statistic;
