import { HTMLAttributes } from "react";

interface authorProps {
  name: string,
  lastname: string,
}

interface priceProps {
  currency: string,
  amount: number,
  decimals: number,
}

export interface itemsProps {
  id: string,
  title: string,
  price: priceProps,
  picture: string,
  condition: string,
  free_shipping: boolean,
}

export interface itemDetailProps {
  id: string,
  title: string,
  price: priceProps,
  picture: string,
  condition: string,
  free_shipping: boolean,
  sold_quantity: number,
  description: string,
}

export interface searchProps {
  author: authorProps,
  categories: string[],
  items: itemsProps[],
}


export type ApiDataType = {
  message: string
  status: string
  results: searchProps[],
  result?: searchProps,
  //todos: ITodo[]
  //todo?: ITodo
}

export interface appInitProps {
  children: React.ReactChild;
}

export interface inputProps extends HTMLAttributes<HTMLInputElement>  {}

export interface buttonProps extends HTMLAttributes<HTMLButtonElement>  {}

export interface fetchingProps {
  method: string,
  path: string,
  extraPath?: string[],
  data?: any,
}

export interface breadcrumbProps {
  categories: string[],
}