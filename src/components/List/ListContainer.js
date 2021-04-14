import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList} from '../../redux/columnsRedux';
import {createActionAddColumn} from '../../redux/columnsRedux';

// export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => {
  const listId = props.match.params.id;
  const theList = state.lists.find(list => list.id == listId);
  const listParams = theList || {};
  return { 
    ...listParams,
    columns: getColumnsForList(state, listId),
    
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    title,
    listId: props.match.params.id,    
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);