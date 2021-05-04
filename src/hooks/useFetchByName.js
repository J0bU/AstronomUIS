import { useEffect, useState } from 'react';
import { getElementByName } from '../selectors/getElementByName';

export const useFetchByName = term => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getElementByName(term).then(element => {
      setState({ data: element, loading: false });
    });
  }, [term]);

  return state;
};
