import React from 'react';
import styles from './SearchResult.scss';
import PropTypes, { object } from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';


class SearchResult extends React.Component {
  static propTypes = {  
    cardInfos: PropTypes.array,
    match: object,
    updateSearchString: PropTypes.func,
  };
  
  componentDidMount(){
    this.props.updateSearchString();
  }
  
  render = () => {
    const {cardInfos} = this.props;
    // updateSearchString();
    return (   
      <Container> 
        <section className={styles.component}>      
          <div>
            {cardInfos.map(({id, title, listId, columnTitle, listTitle}) => (
              <Link key={id} to={`/list/${listId}`}>
                <div className={styles.item}>
                  <div className={styles.card}>
                    <Card key={id} title={title} />
                  </div>
                  
                  <div className={styles.description}>
                    <p>In {columnTitle}  of:</p>
                    <p>{listTitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Container> 
    );
  }
  
}




export default SearchResult;