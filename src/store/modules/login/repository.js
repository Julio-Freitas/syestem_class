/* eslint-disable no-return-await */
import Api from '../../../services/api';

export const auth = async ({ email, password }) =>
    await new Promise((resolve, reject) => {
        Api.post('/token', { email, password }).then(resolve).catch(reject);
    });
