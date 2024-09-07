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

export interface MCQ {
    statement: string,
    optionA: string,
    optionB: string,
    optionC: string,
    optionD: string,
    correct: "A" | "B" | "C" | "D" | ""
}

export interface Test {
    title: string,
    author: string,
    category: string,
    mcqs: MCQ[]
}