import * as React from "react"
import { storiesOf } from "@storybook/react"
import ItemDetail from './ItemDetail'
import '../../../styles/main.scss'

import { itemDetailProps, priceProps } from "../../../type";


const auxPrice:priceProps = {
  currency: 'CLP',
  amount: 19999,
  decimals: 0,
}
const aux:itemDetailProps = {
  id: 'MLA903945107',
  title: 'iPhone 11 64 Gb (product)red',
  price: auxPrice,
  picture: 'https://http2.mlstatic.com/D_751765-MLA43654417389_102020-O.jpg',
  condition: 'new',
  free_shipping: true,
  sold_quantity: 177,
  description: 'Fotos amplias y perfectas de día y de noche Su cámara ultra gran angular abarca un campo visual hasta cuatro veces más grande para que nada ni nadie se quede afuera de la toma. Y con el modo Noche la poca luz no es problema. Ya sea de fiesta con amigos o en un cumpleaños familiar, guardá los mejores momentos sin necesidad de usar flash. ¡La función se activa automáticamente! Retratos más reales El modo HDR Inteligente de última generación reconoce a las personas de la imagen, mejora la iluminación del rostro y da un aspecto natural a los tonos de piel. Pero eso no es todo: brinda más detalle a las sombras y conserva la calidad de imagen del fondo. ¿Qué más se puede pedir de una foto? Grabá y editá videos a nivel profesional Todas las cámaras del iPhone 11 graban videos en 4K con una nitidez increíble. Su cámara ultra gran angular permite capturar paisajes imperdibles y escenas en movimiento, como a un amigo andando en bicicleta en el parque. ¿Un recital de música? Hacé zoom en la imagen y el sonido también se acercará. Un iPhone que te ofrece todo La pantalla LCD Liquid Retina hace que todo se vea más real y su tecnología True Tone ajusta el balance de blancos a la luz del entorno de manera automática. El sistema de autentificación Face ID reconoce tu rostro para brindarte mayor seguridad que la tecnología Touch ID. Como si esto fuera poco, con su chip A13 Bionic y la batería de carga rápida, navegá a máxima velocidad y sin interrupciones.',
}

storiesOf("Search", module)
  .add("Item detail", () => <div className="container"><div className="resultBox"><ItemDetail {...aux} /></div></div>)
