import { UserModel } from '../user/user.model';

export interface LoginDataModel {
    success: boolean;
    user: UserModel;
}
