import { Link } from "react-router-dom"



const Sidebar = () => {
    return (
        <div className='p-5 bg-white hidden md:flex-[1] md:block h-screen md:top-0 md:sticky'>
            <div className='w-max p-3 rounded-md bg-slate-100'>
                <button className='font-medium px-8' >Dashboard</button>
            </div>
            <div className='mt-10 flex flex-col gap-10'>
                <Link to="/">
                    <button className='font-medium text-blue-900 p-3 focus:rounded-md focus:border-2 focus:border-black '>Contacts</button>
                </Link>
                <Link to='/charts-maps'>
                    <button className='font-medium  p-3 text-blue-900 focus:rounded-md focus:border-2 focus:border-black '>Charts and Maps</button>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar