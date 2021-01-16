import { Helmet } from "react-helmet";
import './styles/main.scss';
import { appInitProps } from './type';
import Search from './components/common/header';


const AppContainer = (props:appInitProps) => {  

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