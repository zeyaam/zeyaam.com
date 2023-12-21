import './App.scss'
import './animation.scss'
import { Routes, Route } from 'react-router-dom'

function App () {
  document.title = 'Zeyaam Shahid'

  const bodyFiller = [...Array(10).keys()].map(e => (
    <div className='filler-element'>Some element</div>
  ))

  const defElement = (
    <div className='app-main'>
      <div>
        <header className='app-header'>Coming soon</header>
        <div className='app-body'>
        <div>(This website is under development ;) )</div>

        </div>
      </div>
    </div>
  )

  return (
    <div className='gradient-bg'>
      <div className='gradients-container'>
        <div className='gradient-1'></div>
        <div className='gradient-2'></div>
        <div className='gradient-3'></div>
        <div className='gradient-4'></div>
        {/* <div className="gradient-5"></div> */}
      </div>
      <Routes>
        <Route path='/' element={defElement} />
      </Routes>
    </div>
  )
}

export default App
