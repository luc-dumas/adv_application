//Imports: Components
import Title from './components/Title.js'
import Map from './components/Map.js'
import Nav from './components/Nav.js'
import Info from './components/Info.js'
const App = () => {
  return (
    <div className='body-text' class='flex font-Roboto'>
      <div class='w-full'>
        <Title />
        <div class='-z-10 max-h-full	'>
          {' '}
          <Map />
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default App

/// This below needs to be a popup when map is interacted with
// <div className={styles.info}>
// <Info />
// </div>
