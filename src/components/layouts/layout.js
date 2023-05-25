const Layout = ({ children }) => {
    return (
        <>
            <header></header>

            <main className="row text-left">{children}</main>

            <footer></footer>
        </>
    )
}

export default Layout
