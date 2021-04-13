import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';


class App extends React.Component {
  /*
  state = {
    lists: listData.lists || [],
  }
  */
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }
  /*
  addList = (title) => {
    this.setState(state => {
      const description = prompt('Please, give the description of the list');
      const image = prompt('Please, give url of the image');
      return {      
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            description,
            image,
            columns: [],
          },
        ],
      };
    });
  }
  */
  render() {
    const {title, subtitle, lists, addList} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {/*
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={this.addList} />
        </div>
        
        <div className={styles.lists}>
          {this.state.lists.map(({key, ...listProps}) => (
            <List key={key} {...listProps} />
          ))}
        </div>
          */}
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={addList} />
        </div>
        <div className={styles.lists}>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </div>
      </main>
    );
  }
}
export default App;
