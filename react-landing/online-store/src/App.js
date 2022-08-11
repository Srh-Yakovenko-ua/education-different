import { Route, Routes } from 'react-router-dom'
import './App.css'
import { BestSellers } from './BestSellers'
import { Header } from './Header'
import { Product } from './Product'

function App() {
    return (
        <div className='appContainer'>
            <Header />
            <Routes>
                <Route path='/products' element={<BestSellers />} />
                <Route path='/products/:id' element={<Product />} />
            </Routes>
        </div>
    )
}

export default App
