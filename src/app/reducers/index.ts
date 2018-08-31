import { authReducer } from './auth-reducer';
import { userReducer } from './user-reducer';
import { lessonsReducer } from './lessons-reducer';
import { authorsReducer } from './authors-reducer';

export default {
    auth: authReducer,
    user: userReducer,
    lessonsData: lessonsReducer,
    authors: authorsReducer
};
