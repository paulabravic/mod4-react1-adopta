import { Header } from './components/Header'
import { MyCard } from './components/MyCard';
import { Footer } from './components/Footer';

export default function App() {

  const titulo = 'Adopta un perrito';

  return (
    <>
      <Header titulo={titulo} />

      <div className='cards'>
        <MyCard
          nombre={'Benito'}
          url={'https://images.pexels.com/photos/1954515/pexels-photo-1954515.jpeg'}
          descripcion={'Lleno de energía y listo para jugar. Le gusta correr mucho y saltar. ¡Dale a Benito el hogar amoroso que se merece!'}
          badge_nombre={'Huski'}
          badge_color={'success'}
        />
        <MyCard
          nombre={'Bruno'}
          url={'https://images.pexels.com/photos/3299908/pexels-photo-3299908.jpeg'}
          descripcion={'Es juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Bruno parte de tu familia hoy mismo!'}
          badge_nombre={'Bobtail'}
          badge_color={'primary'}
        />
        <MyCard
          nombre={'Chica'}
          url={'https://images.pexels.com/photos/17407385/pexels-photo-17407385.jpeg'}
          descripcion={'Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Chica y experimenta un amor incondicional!'}
          badge_nombre={'Shar Pei'}
          badge_color={'danger'}
        />
        <MyCard
          nombre={'Chola'}
          url={'https://images.pexels.com/photos/4203281/pexels-photo-4203281.jpeg'}
          descripcion={'Es una compañera leal y cariñosa que adora los mimos y abrazos. ¡Ayuda a Chola a encontrar su final feliz!'}
          badge_nombre={'Beagle'}
          badge_color={'warning'}
        />
      </div>
      
      <Footer />
    </>
  )
}

