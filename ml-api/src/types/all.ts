interface authorProps {
  name: string,
  lastname: string,
}

interface priceProps {
  currency: string,
  amount: number,
  decimals: number,
}

interface itemsProps {
  id: string,
  title: string,
  price: priceProps,
  picture: string,
  condition: string,
  free_shipping: boolean,
}

export interface searchProps {
  author: authorProps,
  categories: string[],
  items: itemsProps[],
}

interface itemDetailProps {
  id: string,
  title: string,
  price: priceProps,
  picture: string,
  condition: string,
  free_shipping: boolean,
  sold_quantity: number,
  description: string,
}

export interface itemProps {
  author: authorProps,
  item: itemDetailProps,
}