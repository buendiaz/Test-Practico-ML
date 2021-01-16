import React from "react"
import { itemDetailProps } from "../../../type"
import { getDecimals, toCurrency } from "../../../_helpers/formatting"
import Button from "../../common/forms/button"

const ItemDetail = (props:itemDetailProps) => {
  return (
    <div className="itemContent">
      <div className="row">
        <div className="itemImage col-xs-12 col-md-8">
          <img src={props.picture} alt={props.title} />
          <h2 className="itemHeaders">Descripción del producto</h2>
          <div className="itemDescription">
            {props.description}
          </div>
        </div>
        <div className="itemDetail col-xs-12 col-md-4">
          <div className="itemInfo">
            <span>{props.condition}</span> - {props.sold_quantity} vendidos
          </div>
          <h1>
            {props.title}
          </h1>
          <div className="itemPrice">
            $ {toCurrency({
              amount: props.price.amount,
            })}
            <small>{getDecimals(props.price.amount)}</small>
          </div>
          <Button className="itemBuy">
            Comprar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;