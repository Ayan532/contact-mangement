import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact, getContactById } from '../redux/Slices/contactSlice';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router-dom';
const CreateForm= () => {
    //States
    const dispatch=useDispatch()
    const navigation=useNavigate()
    const {contact}=useSelector(state=>state.contacts)
    const {search}=useLocation()
    const id=search.split("=")[1]
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [status, setStatus] = useState('active');


    
    useEffect(()=>{
      dispatch(getContactById(id))
      

    },[dispatch,id])

    useEffect(()=>{
      if(contact && id){
        setFirstName(contact[0]?.firstName)
        setLastName(contact[0]?.lastName)
        setMobileNumber(contact[0]?.mobileNumber)
        setStatus(contact[0]?.status)
      }
      

    },[contact,id])
    const handleSubmit = async(e:React.FormEvent) => {
      e.preventDefault();
       if(id){
         handleEdit()
       }
      else{       
        const id=uuidv4()
        console.log(id);
        
        await dispatch(addContact({id,firstName,lastName,mobileNumber,status}))
        setFirstName('');
        setLastName('');
        setMobileNumber('');
        setStatus('active');}
      };

      const handleEdit=()=>{
        dispatch(editContact({id,firstName,lastName,mobileNumber,status}))
        navigation("/")
      }
   
  return (
        <div className="w-full h-screen flex justify-center items-center ">

<div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Create Contact</h2>
      <form onSubmit={handleSubmit}  className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">First Name</label>
            <input
              type="text"
              
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md shadow-sm"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium">Mobile Number</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="mt-1 p-3 w-full border rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 p-3 w-full border rounded-md shadow-sm"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
         
          name={id?"Edit_Contact":"Save_Contact"}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
         
        > 
          {id?"Edit Contact":"Save Contact"}
        </button>
      </form>
    </div>
            </div>
  )
}

export default CreateForm