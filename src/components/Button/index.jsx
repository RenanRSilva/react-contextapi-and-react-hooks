import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

export const Button = () => {
  const [state, actions] = useCounterContext();

  return (
    <button style={{ fontSize: '60px' }} onClick={actions.increase}>
      Increase
    </button>
  );
};
