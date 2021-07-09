import { Switch } from 'react-router-dom';
import { Login } from '../pages/login';
import { NotFound } from '../pages/notFound';
import { Register } from '../pages/register';
import { Student } from '../pages/student';
import { StudentList } from '../pages/studentList';
import Private from './private';

export default function Routes() {
    return (
        <Switch>
            <Private exact path="/" component={Login} isClosed={false} />
            <Private
                exact
                path="/aluno/edit/:id"
                component={Student}
                isClosed={false}
            />
            <Private exact path="/alunos" component={StudentList} isClosed />
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
