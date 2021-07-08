import { Switch } from 'react-router-dom';
import { Login } from '../pages/login';
import { NotFound } from '../pages/notFound';
import { Register } from '../pages/register';
import { Student } from '../pages/student';
import { StudentList } from '../pages/studentList';
import PrivateRoute from './privateRoutes';

export default function Routes() {
    return (
        <Switch>
            <PrivateRoute path="/" component={Login} isClosed={false} />
            <PrivateRoute
                exact
                path="/aluno"
                component={Student}
                isClosed={false}
            />
            <PrivateRoute
                exact
                path="/aluno/edit/:id"
                component={Student}
                isClosed={false}
            />
            <PrivateRoute
                exact
                path="/alunos"
                component={StudentList}
                isClosed={false}
            />
            <PrivateRoute
                exact
                path="/novo/alunos"
                component={Register}
                isClosed={false}
            />
            <PrivateRoute path="*" component={NotFound} isClosed={false} />
        </Switch>
    );
}
