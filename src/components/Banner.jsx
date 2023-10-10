import Typed from 'react-typed'
export default function Banner(){
    return(
        <>
        <div className="bg-[#2699fb] w-full py-[100px]">
            <div className="max-w-[1240px]my-[100px] mx-auto text-center font-bold mt-4">
            <div className="text-xl md:text-4xl md:p-[24px] ">Learn With us</div>
            <h2 className="text-white font-bold text-3xl md:text-[60px] mt-4" >Grow with us.</h2>
            <div className="text-[20px]md:text-[30px] text-white font-bold md:p-[24px]">
                Learn <Typed className='p1-3'
                strings={[
                    'Web development',
                    'Digital Marketing',
                    'Ethikal hacking']}
                    typeSpeed={20}
                    loop={true}
                   />
                
            </div>
            <button className="bg-black text-white p-3 rounded" >Get Started</button>
            </div>
        </div>
        
        
        </>
    )
}