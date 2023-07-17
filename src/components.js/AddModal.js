import React from 'react'

export const AddModal = ({ setShowModal }) => {

  const handleCancel = () => {
    setShowModal(false)
  }

  return (
    <form action="" className="bg-[#1e293b] p-5  flex flex-col gap-8 w-[60%] md:w-[30%] m-auto rounded-lg">

      <h1 className="font-bold text-2xl text-center text-[#1d9bf0] ">Add New Note</h1>
      <input type="text" name="" id="" className="bg-[#0b2239] p-2 tracking-wider rounded-xl text-gray-400  focus:outline-none border-none"
        placeholder="Title" />

      <textarea name="" id="" className="bg-[#0b2239] text-gray-400 p-2 tracking-wider focus:outline-none border-none rounded-xl resize-none" placeholder="Discription"></textarea>

      <div className="self-center flex gap-2">
        <button className="bg-[#1d9bf0] py-1 px-3 rounded-lg hover:bg-[#0094f8]">Save</button>
        <button onClick={handleCancel} className="bg-red-500 py-1 px-3 rounded-lg hover:bg-red-600">Cancel</button>
      </div>
    </form>
  )
}
