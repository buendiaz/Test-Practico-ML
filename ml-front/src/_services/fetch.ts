import React from 'react';
import axios, { AxiosResponse } from "axios"
import { fetchingProps } from '../type';

//import jwt from 'jwt-decode';

export const baseApiURL = process.env.REACT_APP_API_URL;
  const useFetch = () => {
  const [response, setResponse] = React.useState<AxiosResponse>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const loadData = async (props:fetchingProps) => {
    
    if( baseApiURL && props.method === 'GET' ){
      setLoading( true );

      try {
        const dataResponse: AxiosResponse = await axios.get(
          baseApiURL + props.path
        )
        setLoading( false );
        setResponse( dataResponse );
        setError( null );
      } catch (error) {
        setLoading( false );
        setError( error );
      }

    } else {
      alert('Método no difinido');
    }
  }

  const loadDataExtra = async (props:fetchingProps) => {
    
    if( props.method === 'GET' ){
      setLoading( true );
      return axios.get(baseApiURL+props.path);
    }
  }

  return { response, loading, error, loadData, loadDataExtra, setLoading };

  
};

export default useFetch;