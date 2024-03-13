export interface ICreateUser {
    fullName: string;
    email: string;
    password: string;
    profileImageURL?: string;
    role?: string;
}