import {AiOutlineCloseCircle} from 'react-icons/ai'

const ContactNotFound = () => {
  return (
    <section className="bg-white shadow-md rounded-lg mt-10 flex justify-around gap-5 items-center  p-10">
     <div>
        <AiOutlineCloseCircle  className="text-6xl bg-black text-white rounded-full"/>
     </div>
   <div className='flex flex-col justify-center items-center'>
      <h1 className='text-xl font-semibold text-gray-800'>No Contacts Found</h1>
      <p className='text-lg font-semibold text-gray-500'>Please Add Contact </p>
      <p className='text-lg font-semibold text-gray-500'> From Create Button</p>
   </div>
</section>
  )
}

export default ContactNotFound