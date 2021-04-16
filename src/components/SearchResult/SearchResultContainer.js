import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsForSearch} from '../../redux/cardsRedux';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => {
  let cards = getCardsForSearch(state, props.match.params.searchString);
  const cardInfos = cards.map(card => {
    const column = state.columns.find(column => column.id === card.columnId);
    const list = state.lists.find(list => list.id === column.listId);
    return {
      id: card.id,
      title: card.title,
      columnId: column.id,
      columnTitle: column.title,
      listId: list.id,
      listTitle: list.title,
    };
  });
  return { cardInfos };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateSearchString: () => dispatch(createAction_changeSearchString(props.match.params.searchString)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);