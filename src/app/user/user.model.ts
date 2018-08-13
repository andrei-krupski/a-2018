export interface UserModel {
    id: number;
    fakeToken: string;
    name: {
        first: string,
        last: string
    };
    login: string;
    password: string;
}

export interface AuthorModel {
    id: number;
    firstName: string;
    lastName: string;
}
