import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { Provider } from 'react-redux'
import Store from './Store/Store'

const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App