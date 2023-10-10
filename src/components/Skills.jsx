export default function Skills(){
    return(
        <>
        <div className=" bg-[#2699fb] p-4">
        <div className=" text-white max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
            <div className="m-2">
            <h1 className="text-[20px]md:text-[40px font-bold text-white]"> Want to learn latest I.T skills?</h1>
            <span className="text-white">Sign Up our newslater and stay up to date</span>
            </div>
       
           <div className="m-2">
            <input type="text" className="p-3 mb-2 rounded w-[60%] sm:w-full mr-2 text-slate-600" placeholder="Email" />
           
            <button className="  bg-black text-white p-3 rounded sm:w-full " >Notify Me</button>
           
            <br/>
            <span className="text text-sm text-white p-2">We care about the protaction of your data.Read our<p className="text-black">Privacy Policy</p> </span>
           

        </div>
       
            </div>
        </div>
        
        </>
    )
}