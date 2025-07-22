import { Department } from "../../company/models/department.interface";
import { District } from "../../company/models/district.interface";
import { Gender } from "../../company/models/gender.interface";
import { Province } from "../../company/models/province.interface";

export interface User {
    numDoc: string;
    docType: string;
    name: string;
    partenalLastName: string;
    maternalLastName: string;
    phoneNumber: string;
    address: string;
    district: string;
    department: string;
    province: string;
    gender: string;    
    birthdate: Date;
    email: string;

    
    representativeName: string;
    representativePartenalLastName: string;
    representativeMartenalLastName: string;
    representativeNumDoc: string;
    representativePhoneNumber: string;

    // objects
    districtObj: District;
    departmentObj: Department;
    provinceObj: Province;
    genderObj: Gender;

    tickets: number;
    userInitials: string;
}