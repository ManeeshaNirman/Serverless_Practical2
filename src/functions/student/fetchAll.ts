import { successResponse } from "@libs/response";
import { Student } from "src/entities/student.entity"
import { fetch, fetchAll } from "./student-service"


const fetchAllStudent=async(event)=>{


const students:Student[]=await fetchAll();
return successResponse({students});

}
export const main=fetchAllStudent;