import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from './Error'
import Layout from '../layouts/layout'
import CrewDetailsCard from '../components/CrewDetailsCard'

const Routeur = ({ text }) => {
    return (
        <Router>
            <div className='App'>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/crew/:id' element={<CrewDetailsCard />} />
                        <Route path='*' element={<Error text='404' />} />
                        <Route path='/404' element={<Error text='404' />} />
                    </Routes>
                </Layout>
            </div>
        </Router>
    )
}

export default Routeur
