export interface urlParamsProps {
  param: string,
  value: string,
}

const useUrl = () => {
  // Obtenemos los parámetros de la URL  
  const getQueryParams = () => {
    let queryParams:urlParamsProps[] = [];
    let auxParams:string[] = window.location.search.substring(1).split('&');
    let paramsLength:number = auxParams.length;
  
    for( let i=0; i<paramsLength; i++ ){
      let auxValues = auxParams[i].split('=');
      if( auxValues[0] !== '' ){
        queryParams.push({
          param: auxValues[0],
          value: auxValues[1],
        });
      }
    }
  
    return queryParams;
  }
  
  // Obtenemos un parámetro específico de la URL
  const getParam = ( param:string ) => {
    let params = getQueryParams();
    let value:null|string = null;
    
    let paramsLength = params.length;
    for(let i=0; i<paramsLength; i++ ){
      if( param === params[i].param ){
        // Encuentra el parametro
        value = params[i].value;
      }
    }
  
    return value;
  }

  return {getQueryParams, getParam}
}

export default useUrl;