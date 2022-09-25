import { getDatabaseConnection } from "@libs/database-manager";
import { Student } from "src/entities/student.entity";

const create=async(student:Student):Promise<Student>=>{

    const studentRepository= await ( await getDatabaseConnection()).getRepository(Student);
    const newStudent:Student=await studentRepository.save(student).catch((e)=>{console.error('Failed to Create Student. Please try Again...',e);
   throw new Error(e);
});
    return newStudent;
}

const fetch=async(studentId:string):Promise<Student>=>{

    const studentRepository= await ( await getDatabaseConnection()).getRepository(Student);
    const newStudent:Student=await studentRepository.findOneBy({id:studentId}).catch((e)=>{console.error('Failed to Find Student. Please Enter Valid Student ID...',e);
   throw new Error(e);
});
    return newStudent;
}

const fetchAll=async():Promise<Student[]>=>{

    const studentRepository= await ( await getDatabaseConnection()).getRepository(Student);
    const students:Student[]=await studentRepository.find().catch((e)=>{console.error('Failed to Find Students. Database is Empty...',e);
   throw new Error(e);
});
    return students;
}

export{create,fetch,fetchAll};