export interface AuthRegisterBody {
    username: string,
    fullname: string,
    password: string,
    role: 'student' | 'teacher' | 'admin'
};

export interface AuthLoginBody {
    username: string,
    password: string
}

export interface AuthUser {
    username: string,
    fullname: string,
    role: 'student' | 'teacher' | 'admin',
    verified: boolean
};
