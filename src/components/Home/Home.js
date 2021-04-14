import React from 'react';
import styles from './Home.scss';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import Hamburger from '../Hamburger/HamburgerContainer';
import Container from '../Container/Container';


class Home extends React.Component {
 
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }
  
  prepareAddList = (title) => {
    console.log('prepareAddColumn is called');
    const description = prompt('Please, give the description of the list');
    const image = prompt('Please, give url of the image');
    const partPayload = {
      description,
      image,
      title,
    };
    this.props.addList(partPayload);
  };

  render() {
    const {title, subtitle, lists} = this.props;    
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Container>
          <div className={styles.navigation}>
            <Search />
            {/*<div className={styles.creator}>*/}
            <Creator text={settings.listCreatorText} action={this.prepareAddList} />
            {/*</div>*/}
            <Hamburger />
          </div>
        </Container>
        
        
        <div className={styles.lists}>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </div>
      </main>
    );
  }
}
export default Home;
