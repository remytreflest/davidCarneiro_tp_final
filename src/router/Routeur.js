import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import RocketsPage from '../pages/RocketsPage'
import Error from './Error'
import Layout from '../layouts/layout'
import CrewDetailsPage from '../pages/CrewDetailsPage'
import RocketDetailsPage from '../pages/RocketDetailsPage'
import EntreprisePage from '../pages/entreprise'
import QuizzPage from '../pages/QuizzPage'
import QuizzListPage from '../pages/QuizzListPage'
import HistoryPage from '../pages/HistoryPage'
import HistoryInfoPage from '../pages/HistoryInfoPage'

const Routeur = ({ text }) => {
    return (
        <Router>
            <div className='App'>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<HomePage />} />
                        <Route path='/crew/:id' element={<CrewDetailsPage />} />
                        <Route path='/rockets' element={<RocketsPage />} />
                        <Route path='/rockets/:id' element={<RocketDetailsPage />} />
                        <Route path='/404' element={<Error text='404' />} />
                        <Route path='/history/' element={<HistoryPage />} />
                        <Route path='/history/:id' element={<HistoryInfoPage />} />
                        <Route path='/company/' element={<EntreprisePage />} />
                        <Route path='/quizz/' element={<QuizzListPage />} />
                        <Route path='/quizz/:id' element={<QuizzPage />} />
                        <Route path='*' element={<Error text='404' />} />
                    </Routes>
                </Layout>
            </div>
        </Router>
    )
}

export default Routeur
