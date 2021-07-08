/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, isClosed, ...rest }) => {
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

    //eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...rest} component={Component} />;
};

PrivateRoute.defaultProps = {
    isClosed: false,
};

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    isClosed: PropTypes.bool,
};

export default PrivateRoute;
