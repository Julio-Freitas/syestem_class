import { useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import { Login } from '../pages/login';
import { NotFound } from '../pages/notFound';
import { Register } from '../pages/register';
import { Student } from '../pages/student';
import { StudentList } from '../pages/studentList';
import { isAuthenticade } from './isAuthenticade';
import Private from './private';

export default function Routes() {
    const { isLoggedIn, token } = useSelector((state) => state.auth);
    return (
        <Switch>
            <Private
                exact
                path="/"
                component={() =>
                    isAuthenticade(isLoggedIn, token) ? (
                        <Redirect to="/alunos" />
                    ) : (
                        <Login />
                    )
                }
                isClosed={false}
            />

            <Private exact path="/alunos" component={StudentList} isClosed />

            <Private
                exact
                path="/aluno/edit/"
                component={Student}
                isClosed={false}
            />

            <Private
                exact
                path="/novo/alunos"
                component={Register}
                isClosed={false}
            />
            <Private path="*" component={NotFound} isClosed={false} />
        </Switch>
    );
}
