

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Contacts from "./pages/Contacts";
import CreateForm from "./pages/CreateForm"
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import ViewContact from "./pages/ViewContact";
import ChartsMaps from "./pages/ChartsMaps";


function App() {

  return (

    <BrowserRouter>
      {/* Basic Layout for the App */}
      <div className="flex md:bg-slate-50 ">
        <Sidebar />
        <div className='flex-[7]'>
          <Topbar />
          <div className='w-full'>
            {/* All Routes of this App */}
            <Routes>
              {/* <Contacts/> */}
              <Route path="/" element={<Contacts />} />

               {/* <ViewContact/> */}
              <Route path="/contact/:id" element={<ViewContact/>} />

               {/* <CreateForm/> */}
              <Route path="/create-form" element={<CreateForm />} />

               {/* <ChartsMaps/> */}
              <Route path="/charts-maps" element={<ChartsMaps />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>


  )
}

export default App
