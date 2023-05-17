import Image from "next/image";
import React from "react";
import profile_1 from '../Images/avatar1.jpg'
import Team from "../OurTeam.tsx/Team";
const about = () => {
  return <main>

    <div className="container">
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-10  sm:grid-cols-1 text-2xl p-2   md:grid-cols-2">
          <div className="mb-48">
               <h1 className="text-4xl font-semibold  ">Our Mission</h1>
              <p className="mt-10 text-1xl"> Quasi expedita autem atque vero.Sunt tenetur quibusdam esse praesentium laudantium eos quaerat repudiandae at accusamus sapiente! ipsum dolor sit amet consectetur adipisicing elit. Numquam aut quas culpa nobis cupiditate optio, cum sapiente qui dolore repudiandae nostrum modi sit consequuntur corporis provident aperiam repellendus illum expedita doloribus ipsa suscipit enim! Aliquid ipsum modi officiis voluptas, incidunt, pariatur voluptatum id saepe illo dolorum perspiciatis quas ad. Necessitatibus.</p>
          </div>
         
             <img className="w-full"  src="./assets/hero_image.svg" alt="hero image" />
        </div>

        <div className="grid grid-cols-2 gap-10 mt-20  sm:grid-cols-1 row-span-full text-2xl p-2   md:grid-cols-2">
           <img className="w-full sm:row-start-2 "  src="./assets/hero_image.svg"alt="image-About" />
          <div>
            <h1 className="text-4xl font-semibold">Our Vision</h1>
          <p  className="mt-10 text-2xl"> Quasi expedita autem atque vero.Sunt tenetur quibusdam esse praesentium laudantium eos quaerat repudiandae at accusamus sapiente! ipsum dolor sit amet consectetur adipisicing elit. Numquam aut quas culpa nobis cupiditate optio, cum sapiente qui dolore repudiandae nostrum modi sit consequuntur corporis provident aperiam repellendus illum expedita doloribus ipsa suscipit enim! Aliquid ipsum modi officiis voluptas, incidunt, pariatur voluptatum id saepe illo dolorum perspiciatis quas ad. Necessitatibus.</p>
          </div>
           
        </div>

      </div>
                    {/* Our Team
         <div className="p-10 w-96 shadow-xl dark:shadow-white relative ">

              <h2 className="text-3xl mb-2 font-semibold">Founder</h2>
            <p className="mb-4 text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              indknown printer </p>

          <div className="flex items-center gap-4 flex-nowrap">
              <Image src={ profile_1} alt="profile" width={70} height={80} className="rounded-xl
              "/>
              <div className="flex flex-col ">
                <p className="font-bold text-xl">Lorem Ipsum</p>
                <p className="text-sm">CEO Organization</p>
              </div>
          </div>
    </div> */}
    
    <Team/>
      
    </div>
  </main>;
};

export default about;
