import classes from "./Layout.module.css"
import NavigationHeader from "./mainNavigation"

function Layout(props) {
    return <div>
        <NavigationHeader />

        <main className={classes.main}>
            {props.children}
        </main>
    </div>
}

export default Layout