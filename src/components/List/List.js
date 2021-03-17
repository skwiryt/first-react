import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    imgUrl: PropTypes.string,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  }
  render() {
    return (
      <section className={styles.component}>
       <Hero imgUrl={this.props.imgUrl} titleText={this.props.title} />
       <div className={styles.description}>
         {this.props.children}
       </div>
       <div className={styles.columns}>
         <Column headerText='First' />
         <Column headerText='Second' />
         <Column headerText='Third' />

       </div>
        
      </section>
    )
  }
}

export default List;
