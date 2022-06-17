import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} />
            )}
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} />
            )}
            <Route
                path="*"
                element={<Navigate to="/" replace/>}
            />
            {/*<Route*/}
            {/*    path="*"*/}
            {/*    element={<Navigate to="/error" replace/>}*/}
            {/*/>*/}
            {/*<Route path="/error" element={<Error/>}/>*/}
        </Routes>
    );
};

export default AppRouter;