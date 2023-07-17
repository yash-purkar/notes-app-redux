import { useState } from "react"
import { AddModal } from "./AddModal"
import { SingleNote } from "./SingleNote"
import { useSelector } from "react-redux";

export const Notes = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const notesData = useSelector(state => state?.todoReducer?.notesData);
  console.log(notesData)

  const handleAddClick = () => {
    setShowModal(true);
  }

  return (
    <div className="flex flex-col items-center m-1 tracking-wider mt-[3%]">
      <h1 className="font-bold text-3xl text-[#1d9bf0] mb-5">QuickNote</h1>
      <div className="mb-7">
        <input type="search" name="" id="" className="bg-[#1e293b] p-2 tracking-wider w-60 rounded-xl text-gray-400  focus:outline-none border-none"
          placeholder="Search Note By Name" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
      </div>

      <div className="mb-7">
        <button onClick={handleAddClick} className="bg-[#1d9bf0] hover:bg-[#0094f8] py-1 px-3 rounded-lg">Add New Note</button>
      </div>

      <div className="flex justify-center gap-5 flex-wrap mt-10">
        {
          notesData?.map(data => <SingleNote data={data} />)
        }
      </div>
      {
       notesData?.length === 0 && <h1 className="font-bold text-2xl text-gray-500">Empty</h1>
      }
      {
        showModal && <div className="bg-[#000000a6] w-full h-screen p-5 absolute top-0">
          <AddModal setShowModal={setShowModal} />
        </div>
      }
    </div>
  )
}