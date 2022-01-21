import axiosInstance from "../axios";

export const sendRequestForCV = async (name, phoneNumber, email, city, dateOfBirth, experience, education, languages)=>{
    
        const res = await axiosInstance.get('/pdf');
        
}