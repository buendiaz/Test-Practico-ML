import { Response, Request, NextFunction } from "express"
import { itemProps } from "../../types/all"
import axios from 'axios';

const getItemData = async (req: Request, res: Response, next:NextFunction): Promise<void> => {

  if( req.params.id.trim() && req.params.id !== ' ' ){
    let auxId = req.params.id;

    try{
      axios.get(`https://api.mercadolibre.com/items/${auxId}`)
        .then(response => {
          const MLResponse = response.data;
  
          // Si encuentra "id", existen los valores
          if( MLResponse.id ){
            let searchValues:itemProps = {
              author: {
                name: 'Maximiliano',
                lastname: 'Díaz',
              },
              item: {
                id: MLResponse.id,
                title: MLResponse.title,
                price: {
                  currency: MLResponse.currency_id,
                  amount: MLResponse.price,
                  decimals: 0,
                },
                picture: '',
                condition: MLResponse.condition,
                free_shipping: MLResponse.shipping.free_shipping,
                sold_quantity: MLResponse.sold_quantity,
                description: '',
              },
            };

            // Set image
            if( MLResponse.pictures[0] ){
              searchValues.item.picture = MLResponse.pictures[0].url;
            } else {
              searchValues.item.picture = MLResponse.thumbnail;
            }

            // Set description
            axios.get(`https://api.mercadolibre.com/items/${auxId}/description`)
            .then(response => {
              const MLResponseDescription = response.data;

              if( MLResponseDescription.plain_text ){
                searchValues.item.description = MLResponseDescription.plain_text;
              }

              res.status(200).send(searchValues);

            }).catch(err => {
              // Envia data sin description
              res.status(200).send(searchValues);
            } );
            
            
          } else {
            res.status(404).send('Algo ha fallado al recibir los valores del item');
          }

          
        })
        .catch(err => res.status(404).send(err));
      }
      catch(err){
          console.error("GG", err);
      }


  } else {
    res.status(500).send('Algo ha fallado al recibir el parámetro!');
  }
}

export { getItemData }