import {BsFillPersonPlusFill} from 'react-icons/bs'
import ContactCard from '../components/ContactCard'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Contact } from '../types';
import ContactNotFound from '../components/ContactNotFound';
import { RootState } from '../redux/store';
const Contacts = () => {
    const {contacts}=useSelector((state:RootState)=>state.contacts)
  return (
    <div className="flex justify-center items-center flex-col -z-10">
      <div>
         
           <Link to='/create-form'><button className="rounded-lg p-4 mt-10 bg-blue-500 text-white hover:bg-blue-600 ransition-colors duration-300 ease-in-out flex justify-center items-center gap-3">
           <BsFillPersonPlusFill className="text-2xl"/>
           <span>Create Contact</span>
           </button></Link>
      </div>

     {contacts.length>0?<div className='mt-10 flex flex-wrap gap-5 w-full p-4 justify-center items-center z-10'>
        {contacts && contacts?.map((contact:Contact)=><ContactCard key={contact.id} contact={contact}/>)}
      </div>:<ContactNotFound/>}
    </div>
  )
}

export default Contacts