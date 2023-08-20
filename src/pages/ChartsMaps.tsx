import LineGraph from "../components/LineGraph"
import Map from "../components/Map"


const ChartsMaps = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center gap-5 p-10 md:p-5 overflow-y-scroll ">
        <div className="flex flex-col gap-3 justify-center items-center  bg-white shadow-lg w-11/12 p-3">
         <h1 className="text-center font-semibold text-lg">Corono Virus Cases</h1>
         <LineGraph/>
        </div>
        <div className="flex flex-col  bg-white shadow-lg w-11/12 p-4">
         <h1 className="text-center font-semibold text-lg">Corono Virus Cases Maps</h1>
         <Map/>
        </div>
    </div>
  )
}

export default ChartsMaps