import {connect} from 'react-redux';
import Hamburger from './Hamburger';

// export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
const mapStateToProps = (state) => ({
  lists: state.lists,
});

/*
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});
*/
export default connect(mapStateToProps)(Hamburger);