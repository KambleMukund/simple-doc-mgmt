import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement, reset } from '../actions';

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
