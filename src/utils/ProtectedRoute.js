import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({component: Component, loggedIn, ...rest}) => (
    <Route {...rest} render={props => (
            loggedIn ? (<Component {...props} />)
           : (<Redirect to={{pathname: "/user/login"}} />) 
    )}/>
)

export const ProtectedRouteUser = ({component: Component, loggedIn, ...rest}) => (
    <Route {...rest} render={props => (
            loggedIn ? (<Redirect to={{pathname: "/"}} />)
           : (<Component {...props} />)
    )}/>
)

// export default {
//     ProtectedRoute,
//     ProtectedRouteUser
// };