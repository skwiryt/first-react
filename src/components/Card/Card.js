import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

/*
class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  }
  render() {
    const {title} = this.props;
    return (
      <div className={styles.component}>
        <p>{title}</p>
      </div>
    );
  }
}
*/

const Card = props => {
  const {title} = props;
  return (
    <div className={styles.component}>
      <p>{title}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.node,
};

export default Card;
