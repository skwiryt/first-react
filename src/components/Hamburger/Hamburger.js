import React from 'react';
import styles from './Hamburger.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import ReactHtmlParser from 'react-html-parser';

class Hamburger extends React.Component {
  static propTypes = {
    lists: PropTypes.array,
    
  }

  static defaultProps = {
    lists: [],
  }

  state = {
    visibleMenu: false,
  }

  toggleMenu() {
    this.setState({
      visibleMenu: !this.state.visibleMenu,
    });
  }


  
  render() {
    const {lists} = this.props;
    const {visibleMenu} = this.state;
    const {icon} = settings.hamburger;
    return (
      <div className={styles.component}>
        <div className={styles.button}>
          <Button onClick={() => this.toggleMenu()}><Icon name={icon} /></Button>
        </div>
        <div className={styles.menu  + (visibleMenu ? ' ' + styles.menuShown : '')}>
          {lists.map(list => (
            <div className={styles.menuItem} key={list.id}>
              <div >{ReactHtmlParser(list.title)}</div>
              <div >{ReactHtmlParser(list.description)}</div>
            </div>           
          ))}
        </div>
        
      </div>
    );
  }
}

export default Hamburger;
