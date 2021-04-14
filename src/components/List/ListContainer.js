import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList} from '../../redux/columnsRedux';
import {createActionAddColumn} from '../../redux/columnsRedux';

// export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
const mapStateToProps = (state, props) => ({
  // columns: state.columns,
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    title,
    listId: props.id,    
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);