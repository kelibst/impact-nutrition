import React from 'react'
import Image from "next/image";
import { ourTeam } from '@/components/data';
// import profile_1 from '../Images/avatar1.jpg'


const Team = () => {
  return <main>
 
 <h1 className='text-center text-3xl font-semibold mb-8'>OUR TEAM</h1>
 <div className='grid grid-cols-3  gap-6  sm:grid-cols-1   md:grid-cols-2'>
    {ourTeam.map((Team)=>{
           const { id,name,position,des,role,image } = Team;
           return(
            <div key={id} className='p-8 w-6/6 shadow-xl dark:shadow-white relative ' >
               <h2 className="text-3xl mb-2 font-semibold">{position}</h2>

              <p className="mb-4 ">{des}</p>


               <div className="flex items-center gap-4 flex-nowrap">
              <Image src={ image} alt="profile" width={70} height={80} className="rounded-xl
              "/>
              <div className="flex flex-col ">
                <p className="font-bold text-xl">{name}</p>
                <p className="text-sm">{role}</p>
              </div>
          </div>
            </div>

            
           )
        })}
    {/* <div className="p-10 w-96 shadow-xl dark:shadow-white relative ">

      <h2 className="text-3xl mb-2 font-semibold">Founder</h2>
      <p className="mb-4 text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
       indknown printer </p>

        <div className="flex items-center gap-4 flex-nowrap">
              <Image src={} alt="profile" width={70} height={80} className="rounded-xl
              "/>
              <div className="flex flex-col ">
                <p className="font-bold text-xl">Lorem Ipsum</p>
                <p className="text-sm">CEO Organization</p>
              </div>
        </div>
    </div> */}
    </div>
  </main>;
};



export default Team
