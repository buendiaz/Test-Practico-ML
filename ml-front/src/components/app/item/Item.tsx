import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { itemDetailProps } from '../../../type';
import { getDecimals, normalizeUrl, toCurrency } from '../../../_helpers/formatting';
import useFetch from '../../../_services/fetch';
import Breadcrumb from '../../common/breadcrumb';
import Button from '../../common/forms/button';
import Loader from '../../common/loader';

interface parameterProps {
  id: string,
}

const Item = () => {
  const { response, loading, error, loadData, loadDataExtra, setLoading} = useFetch();
  const [ product, setProduct ] = useState<itemDetailProps>(  );
  const [ categories, setCategories ] = useState<string[]>( [] );
  let params:parameterProps = useParams();

  
  useEffect(() => {
    if( params && params.id ){
      loadData({
        method: 'GET',
        path: `/api/items/${params.id}`,
      });
    }
  }, [params]);

  useEffect(() => {
    if( response ){
      const prodTitle:string = response.data.item.title;
      setProduct( response.data.item );

      loadDataExtra({
        method: 'GET',
        path: `/api/items?q=${normalizeUrl(response.data.item.title)}`,
      }).then(response => {
        if( response?.data.categories[0] ){
          setCategories( [response?.data.categories[0], prodTitle] );
        }
        setLoading(false);
      })
    }
  }, [response]);
  
  return (
    <React.Fragment>
      
      { product &&
          <Helmet>
            <title>{product.title} - Mercado Libre Challenge</title>
            <meta name="description" content={ product.description+' - Mercado Libre Challenge' } />
          </Helmet>
      }
      
      { error ?
          'Hubo un error al obtener la información'
        :
          (loading ?
            <Loader />
          :
            <div className="container">
              <Breadcrumb categories={categories} />
              <div className="resultBox">
                {  product ?
                    <div className="itemContent">
                      <div className="row">
                        <div className="itemImage col-xs-12 col-md-8">
                          <img src={product.picture} alt={product.title} />
                          <h2 className="itemHeaders">Descripción del producto</h2>
                          <div className="itemDescription">
                            {product.description}
                          </div>
                        </div>
                        <div className="itemDetail col-xs-12 col-md-4">
                          <div className="itemInfo">
                            <span>{product.condition}</span> - {product.sold_quantity} vendidos
                          </div>
                          <h1>
                            {product.title}
                          </h1>
                          <div className="itemPrice">
                            $ {toCurrency({
                              amount: product.price.amount,
                            })}
                            <small>{getDecimals(product.price.amount)}</small>
                          </div>
                          <Button className="itemBuy">
                            Comprar
                          </Button>
                        </div>
                      </div>
                    </div>
                  :
                    <div className="noResults">Lo sentimos, no hay productos que coincidan con tu búsqueda</div>
                }
              </div>
            </div>
          ) 
      }
    </React.Fragment>
  )
}

export default Item;