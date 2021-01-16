import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { itemsProps, searchProps } from "../../../type";
import useFetch from "../../../_services/fetch";
import useRequestData from '../../../_services/request';
import Loader from '../../common/loader';
import { normalizeUrl, toCurrency } from '../../../_helpers/formatting';
import Breadcrumb from '../../common/breadcrumb';

const SearchList = (props:searchProps) => {
  const { querySearch } = useRequestData();
  const { response, loading, error, loadData } = useFetch();
  const [ categories, setCategories ] = useState<string[]>( [] );
  const [ products, setProducts ] = useState<itemsProps[]>( [] );

  
  useEffect(() => {
    if( querySearch && querySearch !== '' ){
      loadData({
        method: 'GET',
        path: `/api/items?q=${normalizeUrl(querySearch)}`,
      });
    }
  }, [querySearch]);

  useEffect(() => {
    if( response ){
      setProducts( response.data.items );
      setCategories( response.data.categories );
    }
  }, [response]);


  return (
    <React.Fragment>
      { querySearch !== '' ?
          <React.Fragment>
            <Helmet>
              <title>Resultados obtenidos en la búsqueda: {querySearch} </title>
              <meta name="description" content={'Resultados obtenidos en la búsqueda: ' + querySearch} />
            </Helmet>
            { error ?
                'Hubo un error al obtener la información'
              :
                (loading ?
                  <Loader />
                :
                  <div className="container">
                    { categories &&
                        <Breadcrumb categories={categories} />
                    }
                    <div className="resultBox">
                      { products && products.length !== 0 ?
                          products.map((item:itemsProps, index:number) => {
                            return (
                              <div key={index} className="searchResults">
                                <div className="itemSearchResult row">
                                  <div className="col-xs-12 col-sm-3 col-md-2">
                                    <Link to={ `items/${item.id}`} className="itemSearchResultImage">
                                      <img src={item.picture} alt={item.title} title="Ver producto" />
                                    </Link>
                                  </div>
                                  <div className="col-xs-12 col-sm-9 col-md-10">
                                    <div className="itemSearchResultPrice">
                                      <Link to={ `items/${item.id}`}>
                                      $ {toCurrency({
                                        amount: item.price.amount,
                                        currency: item.price.currency
                                      })}
                                      </Link>
                                    </div>
                                    <div className="itemSearchResultTitle">
                                      <Link to={ `items/${item.id}`}>
                                        {item.title}
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        :
                          <div className="noResults">Lo sentimos, no hay productos que coincidan con tu búsqueda</div>
                      }
                    </div>
                  </div>
                ) 
            }
          </React.Fragment>
        :
          ''
      }
    </React.Fragment>
  )
}

export default SearchList