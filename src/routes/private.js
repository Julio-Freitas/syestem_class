import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Private = ({ component: Component, isClosed, ...rest }) => {
    const { isLoggedIn, token } = useSelector((state) => state.auth);
    if (isClosed && !isLoggedIn && !token) {
        return (
            <Redirect
                to={{
                    pathname: '/',
                    state: { prevPath: rest.location.pathname },
                }}
            />
        );
    }

    return <Route {...rest} component={Component} />;
};

Private.defaultProps = {
    isClosed: false,
};

Private.propTypes = {
    isClosed: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

export default Private;
