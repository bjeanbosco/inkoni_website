import router from "next/router"
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';



const NewResult = ()=>{
 
const handleNewResultClick = () => {
    router.push("/screens/NewResult");
  };

   
  
    return (
        <div>
            <Sidebar/>
             <div className="flex-1 bg-maincolor h-screen p-3 ml-60  custom-scroll">
      <button
          onClick={handleNewResultClick}
          className="absolute mt-4 right-4 bg-orange text-white font-bold px-4 py-2 rounded"
        >
           {/* <GrAdd className="text-white mr-3 text-sm" /> */}
           <FontAwesomeIcon icon={faPlus} className="pr-2 text-2xl"/>
           UPLOAD RESULTS
         
        </button>
        </div>
        </div>
    )
}

export default NewResult