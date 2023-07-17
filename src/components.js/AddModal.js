import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewNote, updateData } from '../actions';

export const AddModal = ({ setShowModal }) => {

  const data = useSelector(state => state.noteReducer);

  const [noteDetails, setNoteDetails] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.editNoteId) {
      const noteToBeEdit = data?.notesData?.find(el => el?.id === data?.editNoteId);
      setNoteDetails(noteToBeEdit)
    }
    else {
      setNoteDetails({
        title: "",
        note: ""
      })
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteDetails(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteDetails?.title && noteDetails?.note) {
      if (data?.editNoteId) {
        const updatedData = data?.notesData?.map(el => el?.id === data?.editNoteId ? noteDetails : el)
        dispatch(updateData(updatedData))
      }
      else {
        dispatch(addNewNote(noteDetails));
      }
      setShowModal(false)
    }
    else {
      alert("Fill the data")
    }
  }

  const handleCancel = () => {
    setShowModal(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#1e293b] p-5  flex flex-col gap-8 w-[60%] md:w-[30%] m-auto rounded-lg">

      <h1 className="font-bold text-2xl text-center text-[#1d9bf0] ">Add New Note</h1>
      <input type="text" name="title" onChange={handleChange} value={noteDetails?.title} id="title" className="bg-[#0b2239] p-2 tracking-wider rounded-xl text-gray-400  focus:outline-none border-none"
        placeholder="Title..." />

      <textarea name="note" onChange={handleChange} value={noteDetails?.note} id="note" className="bg-[#0b2239] text-gray-400 p-2 tracking-wider focus:outline-none border-none rounded-xl resize-none" placeholder="Note..."></textarea>

      <div className="self-center flex gap-2">
        <button className="bg-[#1d9bf0] py-1 px-3 rounded-lg hover:bg-[#0094f8]">Save</button>
        <button onClick={handleCancel} className="bg-red-500 py-1 px-3 rounded-lg hover:bg-red-600">Cancel</button>
      </div>
    </form>
  )
}
