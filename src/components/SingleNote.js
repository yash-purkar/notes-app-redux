import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteNote, editNote } from '../actions'
import { toast } from 'react-toastify'

export const SingleNote = ({ data, setShowModal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(data?.id))
    toast.warning("Deleted")
  }

  const handleEdit = () => {
    dispatch(editNote(data?.id));
    setShowModal(true)
  }

  return (
    <div className="shadow-lg w-[250px] md:w-[350px]  overflow-auto  h-36 rounded-lg p-4 tracking-wider bg-[#1e293b] relative">
      <h3 className="font-bold text-xl text-[#1d9bf0] mb-2">{data?.title}</h3>
      <p className='text-gray-400'>{data?.note}</p>
      <div className='text-xl md:text-[1.5rem] flex gap-2 my-3 absolute top-0 right-3'>
        <button onClick={handleEdit} className='text-[#1d9bf0] hover:text-[#0094f8]'><BiEdit /></button>
        <button onClick={handleDelete} className='text-red-500 hover:text-red-600'><AiFillDelete /></button>
      </div>
    </div>
  )
}
