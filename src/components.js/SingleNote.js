import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

export const SingleNote = ({data}) => {
  return (
    <div className="shadow-lg w-[250px] md:w-[350px]  overflow-auto  h-36 rounded-lg p-4 tracking-wider bg-[#1e293b] relative">
      <h3 className="font-bold text-xl text-[#1d9bf0] mb-2">{data?.title}</h3>
      <p className='text-gray-400'>{data?.note}</p>
      <div className='text-xl md:text-[1.5rem] flex gap-2 my-3 absolute top-0 right-3'>
        <button className='text-gray-400 hover:text-green-700'><BiEdit /></button>
        <button className='text-gray-400 hover:text-red-600'><AiFillDelete /></button>
      </div>
    </div>
  )
}
