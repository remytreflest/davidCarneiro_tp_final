import Navigation from '../components/Navigation'

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />

            <main className='row'>{children}</main>

            <footer></footer>
        </>
    )
}

export default Layout
