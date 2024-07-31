import { Role } from "../domain/user";
import { SignInParams } from "./sign-in";

export type BearerToken = string;

type SignUpParams = {
    name: string;
    role: Role;
} & SignInParams;

export async function signUpUsecase(params: SignUpParams) { }
