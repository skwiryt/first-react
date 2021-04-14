import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

const Container = props => {
  const {children} = props;
  return (
    <div className={styles.component}>
      {children}
    </div> );
};
Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;

