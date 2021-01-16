interface currencyProps {
  amount: number,
  currency?: string,
}

const toCurrency = (props:currencyProps) => {
  /*return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    //currency: props.currency ? props.currency : 'CLP',
    currency: 'CLP',
  }).format( props.amount );
  */
 return Math.round(props.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const normalizeUrl = (value:string) => {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const getDecimals = (value:number) => {
  return ( Math.round((value - Math.round(value))*100) )
}

export {toCurrency, normalizeUrl, getDecimals};