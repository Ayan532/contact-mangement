import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteContact } from '../redux/Slices/contactSlice';
import { Contact } from '../types';
import React from 'react'

interface ContactCardProps {
  contact: Contact;
}
const ContactCard: React.FC<ContactCardProps>= ({contact}) => {
    const dispatch=useDispatch()
    const {firstName,lastName,mobileNumber,status,id}=contact 
   const avatarUrl = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random&rounded=true`;
    
   const handleDelete=()=>{
    dispatch(deleteContact(id))
   }
  return (
    
<div className="w-full  z-0 max-w-sm bg-white border border-gray-200 rounded-lg md:shadow-md">
    <div className="flex justify-end px-4 pt-4">
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={avatarUrl} alt={firstName}/>
        <div className="flex w-full justify-center items-center ">
        <h5 className="mb-1  ml-16 text-xl font-medium text-gray-900 ">{firstName} {lastName} </h5> 
        <span
          className={`px-2 ml-2 rounded ${
            status === 'active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {status === 'active' ? 'Active' : 'Inactive'}
        </span>
        </div>
        <span className="text-sm text-gray-500 ">{mobileNumber}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <Link to={`/contact/${id}`} ><button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 ">View</button></Link>
            <Link to={`/create-form?id=${id}`} ><button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600">Edit</button></Link>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500 border border-red-300 rounded-lg hover:bg-red-300  focus:ring-4 focus:outline-none focus:ring-red-200" onClick={handleDelete}>Delete</button>
        </div>
    </div>
</div>

  )
}

export default ContactCard