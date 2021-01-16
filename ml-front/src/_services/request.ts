import axios from 'axios';
import { useEffect, useState } from 'react';
import useUrl from './url';
export const axiosNoIntercept = axios.create();

export const baseApiURL = process.env.REACT_APP_API_URL;

const useRequestData = () => {
  const {getQueryParams, getParam} = useUrl();
  const [querySearch, setQuerySearch] = useState<string|null>( '' );

  useEffect(() => {
    if( getParam('search') ){
      setQuerySearch( getParam('search') );
    } else {
      setQuerySearch( '' );
    }
  }, [getQueryParams, getParam]);

  return { querySearch };
};

export default useRequestData;


