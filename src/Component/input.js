import { useEffect, useState } from "react"


export default function Input({label,type='text',...props}){

     
     const [inputType,setType] = useState(type)

    

     return(
        <label className='block relative flex bg-zinc-50 border  rounded-sm focus-within:border-gray-400 '>
        <input  required={true} type={inputType} className='w-full h-[38px] px-2 text-sm outline-none  valid:pt-[10px] peer  ' {...props} />
        <small className='absolute top-1/2 left-[9px] text-xs text-gray-500 cursor-text pointer-event-none -translate-y-1/2 transition-all  peer-valid:text-[10px] peer-valid:top-2.5  '>{label}</small>
          
      </label>
     )
}