//import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import './styles/main.scss';
import { appInitProps } from './type';
import Search from './components/common/header';


const AppContainer = (props:appInitProps) => {
  /*const [todos, setTodos] = useState<searchProps[]>([])

  console.log('***');

  /*
  useEffect(() => {
    fetchSearch()
  }, [])

  const fetchSearch = (): void => {
    getSearch()
    .then(({ data: { todos } }: searchProps[] | any) => setTodos(todos))
    .catch((err: Error) => console.log(err))
  }
  */

  

  return (
    <div className="content">
      <Helmet>
        <html lang="es" />
        <title>Mercado Libre Challenge</title>
        <meta name="description" content="Mercado Libre Challenge" />
      </Helmet>
      <Search />
      {props.children}
    </div>
  )
}

export default AppContainer