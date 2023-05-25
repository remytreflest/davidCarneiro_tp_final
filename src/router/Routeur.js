import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from './Error'
import Layout from '../components/layouts/layout'
import History from '../pages/history'
import HistoryInfo from '../pages/historyInfo'

const Routeur = ({ text }) => {
    return (
        <Router>
            <div className='App'>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
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
