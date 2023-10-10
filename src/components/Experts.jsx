import laptop from "../assets/laptop.jpg"
export default function Experts(){
    return(
        <div className="max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-3 ">
                <div className=" border border-[blue]  col-span-1 md:w-[80%] text-center">
                        <img src={laptop} alt="" className="inline"/>

                </div>
                <div className=" col-span-2 flex flex-col justify-center">
                    <h1 className="text-[#00df9a] font-bold my-2">Learn from expert</h1>
                    <p className="my-2 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ad doloribus cupiditate voluptas voluptatem eius delectus aut eveniet repellendus expedita inventore aperiam hic consectetur, beatae dolorum architecto saepe distinctio harum?</p>
                <button className=" w-[30%] bg-black text-white p-3 rounded mt-2" >Get Started</button>
                </div>
        </div>
    )
}
