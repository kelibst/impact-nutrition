import { Event } from "@prisma/client";
import { BiUserVoice } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineAccessAlarms, MdOutlineLocationOn } from "react-icons/md";

interface UpcomingEventCardProp  {
  event: Event
}

export function UpcomingEventCard ({ event}: UpcomingEventCardProp) {
  console.log('event running updcomgin',)
  const eventDate = new Date(event.eventDate);
  const year = eventDate.getFullYear();
  const month = eventDate.toLocaleString('default', { month: 'short' });
  const day = eventDate.getDate();
  const time = eventDate.toLocaleTimeString();


  return (
    <div className="bg-white dark:bg-white/10 shadow p-2  gap-4 flex rounded w-fit">
      <div className="h-4 w-4 rounded-full bg-purple-600"></div>
      <div className="">
        <p className="text-sm">{`${day} ${month} ${year}`}</p>
        <h2 className="font-bold my-2 text-black dark:text-white">
          {event.title}
        </h2>
        <div className="grid grid-cols-2 text-sm gap-2">
          <div>
            <div className="text-xs flex opacity-60">
              <MdOutlineAccessAlarms size={16} />
              Time
            </div>{" "}
            <p>{time}</p>
          </div>

          <div>
            <div className="text-xs flex opacity-60">
              <MdOutlineLocationOn size={16} />
              Venue
            </div>{" "}
            <p>{event.location}</p>
          </div>

          <div className=" flex gap-2 items-center ">
            <BiUserVoice size={20} />
            {/* <PiUsersThreeLight size={20} /> */}
            <p>
              {" "}
              <strong className="text-black dark:text-white text-lg">
                456
              </strong>{" "}
              Attendees
            </p>
          </div>
          <div className=" flex gap-2 items-center ">
            <FaMoneyBillWave />
            {/* <LiaMoneyBillWaveSolid size={20} /> */}
            <p>
              {" "}
              <strong className="text-green-700 dark:text-green-400 text-lg">
                453
              </strong>{" "}
              Paid
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
