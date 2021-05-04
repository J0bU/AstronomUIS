import { useEffect, useState } from 'react';
import { getElementByType } from '../selectors/getElementByType';

export const useFetchByType = element_type => {
  const [state, setData] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getElementByType(element_type).then(element => {
      setData({ data: element, loading: false });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return state;
};
