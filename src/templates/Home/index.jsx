import { useEffect, useState } from 'react';
import { Button } from '../../components/Button/index';
import { Heading } from '../..Components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  return (
    <div>
      <Heading />

      <div>
        <Button />
      </div>
    </div>
  );
};
