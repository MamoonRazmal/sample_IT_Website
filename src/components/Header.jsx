import { useState } from "react"
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
export default function Header(){
    const[toggle,Settoggle]=useState(false)
    return(
        <div className="bg-[#2699fb] p-4">
            <div className="max-w-[1240px] py-[17px] items-center border flex justify-between">

                <div className="text-3xl font-bold">
                    WsCube Tech
                </div>
             {  toggle ?
                <AiOutlineMenu onClick={()=> Settoggle(!toggle)} className="text-white text-2xl md:hidden block"/>:
                <AiOutlineClose onClick={()=> Settoggle(!toggle)} className="text-white text-2xl md:hidden block"/>
             }
                <ul className="hidden md:flex gap-10  text-white">
                    <li>
                       Home
                    </li>
                    <li>
                       company
                       </li>
                       <li>
                       Resource
                       </li>
                    

                       <li>About</li>
                       <li>contact</li>
                </ul>
{/* Responsive menu */}
                <ul className={`duration-300 md:hidden  text-white w-full h-screen fixed bg-black  top-[92px] ${toggle ? 'left-[0]':'left-[-100%]'}`} >
                    <li className="p-5">
                       Home
                    </li>
                    <li className="p-5">
                       company
                       </li>
                       <li className="p-5">
                       Resource
                       </li>
                    

                       <li className="p-5">About</li>
                       <li className="p-5">contact</li>
                </ul>


            </div>

        </div>
    )
}