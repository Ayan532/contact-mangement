import { useDispatch, useSelector } from "react-redux"
import { deleteContact, getContactById } from "../redux/Slices/contactSlice"
import {  Link,  useNavigate, useParams } from "react-router-dom"
import {useEffect} from 'react'

const ViewContact = () => {
    const dispatch=useDispatch()
    const navigation=useNavigate()
    const params=useParams()

    
    const {contact}=useSelector(state=>state.contacts)
    useEffect(() => {
        if(params.id){

            dispatch(getContactById(params.id))
        }
    }, [dispatch,params.id])


    const handleDelete=async()=>{
        await dispatch(deleteContact(params.id))
        navigation('/')
        
       }



     
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-white w-[70%] md:w-[50%] h-1/2 p-4 shadow-lg rounded-lg flex md:flex-row flex-col justify-around items-center ">

          <div className="flex-1 flex justify-center items-center">
          <img className="w-44 h-44 mb-3 rounded-lg " src={`https://ui-avatars.com/api/?name=${contact[0]?.firstName}+${contact[0]?.lastName}&background=random&rounded=true`} alt="name"/>  
          </div> 


          <div className="flex-1 flex flex-col gap-4">
            <div className="flex gap-5 p-2">
              <h1 className="text-xl font-bold">First Name:</h1>
              <h1 className="text-xl font-semibold text-gray-700">{contact[0]?.firstName}</h1>
             </div>
            <div className="flex gap-5 p-2">
              <h1 className="text-xl font-bold">Last Name:</h1>
              <h1 className="text-xl font-semibold text-gray-700">{contact[0]?.lastName}</h1>
             </div>
            <div className="flex gap-5 p-2">
              <h1 className="text-xl font-bold">Mobile:</h1>
              <h1 className="text-xl font-semibold text-gray-700">{contact[0]?.mobileNumber}</h1>
             </div>
            <div className="flex gap-5 p-2">
              <h1 className="text-xl font-bold ">Status</h1>
              <span
          className={`px-2 ml-2 rounded ${
            contact[0]?.status === 'active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {contact[0]?.status === 'active' ? 'Active' : 'Inactive'}
        </span>
             </div>
            
             <div className="flex mt-2  justify-center gap-8 items-center">
            
            <Link to={`/create-form?id=${params.id}`} ><button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600">Edit</button></Link>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500 border border-red-300 rounded-lg hover:bg-red-300  focus:ring-4 focus:outline-none focus:ring-red-200" onClick={handleDelete}>Delete</button>
        </div>
          </div>   
  
       
        </div>


    </div>
  )
}

export default ViewContact