import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

/*
class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  render() {
    const {title, icon, cards, addCard} = this.props;
    return (      
      <section className={styles.component}>
        <h3 className={styles.title}>          
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        <div>
          {cards.map(({id, title}) => (
            <Card key={id} title={title} />
          ))}
        </div>
        <div >
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}
*/

const Column = props => {
  const {title, icon, cards, addCard} = props;
  return (      
    <section className={styles.component}>
      <h3 className={styles.title}>          
        <span className={styles.icon}>
          <Icon name={icon} />
        </span>
        {title}
      </h3>
      <div>
        {cards.map(({id, title}) => (
          <Card key={id} title={title} />
        ))}
      </div>
      <div >
        <Creator text={settings.cardCreatorText} action={addCard}/>
      </div>
    </section>
  );
};

Column.propTypes = {
  title: PropTypes.node,
  icon: PropTypes.string,
  cards: PropTypes.array,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
