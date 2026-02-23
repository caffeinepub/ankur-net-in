import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactFormData {
    id: bigint;
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    createForm(name: string, email: string, message: string): Promise<void>;
    delete_(id: bigint): Promise<void>;
    getAllForms(): Promise<Array<ContactFormData>>;
    getAllFormsByEmail(): Promise<Array<ContactFormData>>;
}
