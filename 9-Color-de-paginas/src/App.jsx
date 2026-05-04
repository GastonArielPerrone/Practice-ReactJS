import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { LayoutGreen } from './components/LayoutGreen/LayoutGreen'
import { LayoutRed } from './components/LayoutRed/LayoutRed'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='pagina_roja' element={<LayoutRed />} />
        <Route path='pagina_verde' element={<LayoutGreen />} />
      </Route>
    </Routes>
  )
}

export default App
