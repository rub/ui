import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

export default class Loading extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    withOverlay: PropTypes.bool,
    small: PropTypes.bool,
  };

  static defaultProps = {
    active: true,
    withOverlay: true,
    small: false,
  };

  render() {
    const { active, className, withOverlay, small, ...other } = this.props;

    const loadingClasses = classNames('wfp--loading', className, {
      'wfp--loading--small': small,
      'wfp--loading--stop': !active,
    });

    const overlayClasses = classNames('wfp--loading-overlay', {
      'wfp--loading-overlay--stop': !active,
    });

    const loading = (
      <div {...other} className={loadingClasses}>
        <svg className="wfp--loading__svg" viewBox="-75 -75 150 150">
          <circle cx="0" cy="0" r="37.5" />
        </svg>
      </div>
    );

    return withOverlay ? (
      <div className={overlayClasses}>{loading}</div>
    ) : (
      loading
    );
  }
}
