import { useEffect, useState } from 'react';
import { getNasaImages } from '../selectors/getNasaImages';

export const useFetchNasa = () => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  // // Only run a time: useEffect hook.
  useEffect(() => {
    getNasaImages().then(imgs => {
      setState({
        data: imgs,
        loading: false
      });
    });
  }, []);

  return state; // {data:[], loading:true}
};
