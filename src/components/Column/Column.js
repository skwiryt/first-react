import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
// import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';


class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    icon: PropTypes.string,
    cards: PropTypes.array,
  }
  /*
  state = {
    cards: this.props.cards || [],
  };

  addCard = (title) => {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          },
        ],
      }
    ));
  };
  */
  render() {
    const {title, icon, cards} = this.props;
    return (      
      <section className={styles.component}>
        <h3 className={styles.title}>          
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        {/*
        <div>
          {this.state.cards.map(({key, title}) => (
            <Card key={key} title={title} />
          ))}
        </div>
        <div >
          <Creator text={settings.cardCreatorText} action={this.addCard}/>
        </div>
          */}
        <div>
          {cards.map(({id, title}) => (
            <Card key={id} title={title} />
          ))}
        </div>
      </section>
    );
  }
}

export default Column;
