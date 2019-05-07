const React = require('react');
const ReactDOM = require('react-dom');
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AxiosTest from './common/AxiosTest';

function Index() {
    return <h2>Home</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/AxiosTest/">AxiosTest</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Index} />
                <Route path="/AxiosTest/" component={AxiosTest} />
                <Route path="/users/" component={Users} />
            </div>
        </Router>
    );
}

export default AppRouter;

//const title = 'My Minimal React Webpack Babel work goo';

ReactDOM.render(
    //<div>{title}</div>,
    <Router>
        <AppRouter />
    </Router>,
    document.getElementById('app')
);
