import React from 'react'
import { LuCalendarHeart } from 'react-icons/lu'

function Blog({item}) {
  const {answer,question,date}=item
  return (
    <div className="bg-white space-y-4 py-8 px-8 rounded-3xl p m-8 gap-4 flex-col">
          <h4 className="text-xl font-extrabold">{question}</h4>
            <div className="border-b border-dashed"></div>
            <p className="text-[#18F197] font-thin">Answer:</p>
            <p>{answer}</p>
            <div className="border-b border-dashed"></div>
            <div className="text-black/50 font-bold flex items-center gap-2"><LuCalendarHeart size={20}/><p>Added at {date}</p></div>
        </div>
  )
}

export default Blog
