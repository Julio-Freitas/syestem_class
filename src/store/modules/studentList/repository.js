import api from '../../../services/api';

export const getStudents = () => {
    return new Promise((resolve, reject) => {
        api.get('/alunos').then(resolve).catch(reject);
    });
};
