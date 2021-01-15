import { Response, Request, NextFunction } from "express"
import { searchProps } from "../../types/all"
import axios from 'axios';

const getSearch = async (req: Request, res: Response, next:NextFunction): Promise<void> => {

  try{
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
            .then(response => {
              const MLResponse = response.data;

              let categories:string[] = [];
              categories = MLResponse.available_filters
                              .filter((result:any) => result.id === 'category' ).shift()
                              .values.sort((a:any, b:any) => a.results > b.results ? -1 : 1)
                              .map((item:any) => {
                return item.name
              })

              const searchValues:searchProps = {
                author: {
                  name: 'Maximiliano',
                  lastname: 'Díaz',
                },
                categories: categories,
                items: MLResponse.results.slice(0, 4).map((item:any) => {
                  return {
                    id: item.id,
                    title: item.title,
                    price: {
                      currency: item.currency_id,
                      amount: item.price,
                      decimals: 0,
                    },
                    picture: item.thumbnail,
                    condition: item.condition,
                    free_shipping: item.shipping.free_shipping,
                  }
                }),
              };

              res.status(200).send(searchValues)
           })
           .catch(err => res.send(err));
  }
  catch(err){
      console.error("GG", err);
  }

}

export { getSearch }