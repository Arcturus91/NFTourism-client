import {api} from  './api';
import {successStatus,internalServerError} from '../utils/format-response'


export const registerReceipt = (data)=> api.post("/user/my-profile/uploadReceipt",data)
.then(successStatus)
.catch(internalServerError)

export const getProfileWs = ()=> api.get("/user/my-profile")


