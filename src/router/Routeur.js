import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Rockets from '../pages/Rockets'
import Error from './Error'
import History from '../pages/history'
import HistoryInfo from '../pages/historyInfo'
import Layout from '../layouts/layout'
import CrewDetailsCard from '../components/crews/CrewDetailsCard'
import RocketDetailsCard from '../components/rockets/RocketDetailsCard'

const Routeur = ({ text }) => {
    return (
        <Router>
            <div className='App'>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/crew/:id' element={<CrewDetailsCard />} />
                        <Route path='/rockets' element={<Rockets />} />
                        <Route path='/rockets/:id' element={<RocketDetailsCard />} />
                        <Route path='*' element={<Error text='404' />} />
                        <Route path='/404' element={<Error text='404' />} />
                        <Route path='/history/' element={<History/>} />
                        <Route path='/history/:id' element={<HistoryInfo/>} />
                    </Routes>
                </Layout>
            </div>
        </Router>
    )
}

export default Routeur
