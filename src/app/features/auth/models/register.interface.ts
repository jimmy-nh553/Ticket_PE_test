export interface Register {
    name: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    numDoc: string,
    birthDate: Date | undefined,
    email: string,
    password: string,
}