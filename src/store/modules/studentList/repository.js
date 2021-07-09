import Api from '../../../services/api';

export const getStudents = () =>
    new Promise((resolve, reject) => {
        Api.get('/alunos').then(resolve).catch(reject);
    });
