export interface userDTO{
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    status:"active" | "locked",
    dateOfBirth:Date
}

