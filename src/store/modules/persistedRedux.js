import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (redurcers) => {
    const persistReducers = persistReducer(
        {
            key: 'API_ALUNOS',
            storage,
            whitelist: ['auth', 'studientList'],
        },
        redurcers
    );

    return persistReducers;
};
