import API from '../../../services/api';

export const getStudentById = async (id) =>
    new Promise((resolve, reject) => {
        API.get(`/alunos/${id}`).then(resolve).catch(reject);
    });

export const updateStudent = async ({ id, values }) =>
    new Promise((resolve, reject) => {
        API.put(`alunos/${id}`, { ...values })
            .then(resolve)
            .catch(reject);
    });

export const updateImageSudent = async (formData) =>
    new Promise((resolve, reject) => {
        API.post('/fotos', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(resolve)
            .catch(reject);
    });
