import React, { useEffect, useState } from 'react'
import SearchList from './components/Search'
import { getSearch } from './API'
import { searchProps } from './type'

const App = () => {
  const [todos, setTodos] = useState<searchProps[]>([])

  console.log('***');

  useEffect(() => {
    fetchSearch()
  }, [])

  const fetchSearch = (): void => {
    getSearch()
    .then(({ data: { todos } }: searchProps[] | any) => setTodos(todos))
    .catch((err: Error) => console.log(err))
  }

  return <div>hola</div>
}

export default App