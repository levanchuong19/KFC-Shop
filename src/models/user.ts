export interface User{
    id: number;
    fullName: string;
    email:string;
    phone: string;
    role:"ADMIN" | "MANAGER" |"STAFF" | "CUSTOMER" ;

}