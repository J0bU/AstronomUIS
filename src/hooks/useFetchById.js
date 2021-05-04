import { useEffect, useState } from 'react';
import { getElementById } from '../selectors/getElementById';

export const useFetchById = id => {
  const [state, setData] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getElementById(id).then(element => {
      setData({
        data: element,
        loading: false
      });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return state;
};
