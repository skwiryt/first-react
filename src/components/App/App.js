import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData, settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';


class App extends React.Component {
  state = {
    lists: listData.lists || [],
  }

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
            columns: []
          }
        ]
      }
    });
  }
  
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={this.addList} />
        </div>
        <div className={styles.lists}>
          {this.state.lists.map(({key, ...listProps}) => (
            <List key={key} {...listProps} />
          ))}
        </div>
        
      </main>
    )
  }
}
export default App;
