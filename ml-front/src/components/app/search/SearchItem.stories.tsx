import * as React from "react"
import { storiesOf } from "@storybook/react"
import SearchItem from './SearchItem'
import '../../../styles/main.scss'

import { itemsProps, priceProps } from "../../../type";


const auxPrice:priceProps = {
  currency: 'CLP',
  amount: 19999,
  decimals: 0,
}
const aux:itemsProps = {
  id: 'MLA903945107',
  title: 'iPhone 11 64 Gb (product)red',
  price: auxPrice,
  picture: 'https://http2.mlstatic.com/D_751765-MLA43654417389_102020-I.jpg',
  condition: 'new',
  free_shipping: true,
}

storiesOf("Search", module)
  .add("Item result", () => <div className="container"><div className="resultBox"><SearchItem {...aux} /></div></div>)
