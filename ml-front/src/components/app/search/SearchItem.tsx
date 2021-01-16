import React from "react";
import { Link } from "react-router-dom";
import { itemsProps } from "../../../type";
import { toCurrency } from "../../../_helpers/formatting";

const SearchItem = (props:itemsProps) => {
  return (
    <div className="searchResults">
      <div className="itemSearchResult row">
        <div className="col-xs-12 col-sm-3 col-md-2">
          <Link to={ `items/${props.id}`} className="itemSearchResultImage">
            <img src={props.picture} alt={props.title} title="Ver producto" />
          </Link>
        </div>
        <div className="col-xs-12 col-sm-9 col-md-10">
          <div className="itemSearchResultPrice">
            <Link to={ `items/${props.id}`}>
            $ {toCurrency({
              amount: props.price.amount,
              currency: props.price.currency
            })}
            </Link>
          </div>
          <div className="itemSearchResultTitle">
            <Link to={ `items/${props.id}`}>
              {props.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchItem;