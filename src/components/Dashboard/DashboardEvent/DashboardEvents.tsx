// /* eslint-disable react-hooks/exhaustive-deps */
// 'use client'
// import { useState, useEffect, useRef, useTransition, useCallback, useMemo, useContext } from 'react';
// import 'suneditor/dist/css/suneditor.min.css';
// import { ToastContainer, toast } from 'react-toastify';
// import { Event } from '@prisma/client';
// import { deleteEvent } from '@/lib/getEvents';
// import UpdateEvent from './UpdateEvent';
// import { GetEventContext } from '@/components/context/EventContext';
// import Link from 'next/link';

// const DashboardEvents = () => {
//     const { events, getAllEvents } = useContext(GetEventContext);

//     const [updateEvent, setUpdateEvent] = useState(false);
//     const eventUpdateRef = useRef<HTMLDivElement | null>(null);

//     const [startTransition, isPending] = useTransition();

//     const toggleUpdateEvent = useCallback(() => {
//         setUpdateEvent(prevState => !prevState);
//     }, []);

//     const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
//     const memoizedSelectedEvent = useMemo(() => selectedEvent, [selectedEvent]);

//     useEffect(() => {
//         getAllEvents()
//     }, []);

//     const handleDelete = useCallback(async (id: string) => {
//         const event = events.find(evt => evt.id === id);
//         setSelectedEvent(event!);
//         try {
//             await deleteEvent(event?.id!);
//             const notify = () => toast.success('Event successfully deleted!');
//             notify();
//         } catch (error) {
//             const notify = () =>
//                 toast.error('Something went wrong!', {
//                     position: 'top-right',
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: 'colored',
//                 });
//             notify();
//         }
//     }, [events]);

//     const handleUpdate = useCallback((id: string) => {
//         const event = events.find(evt => evt.id === id);
//         if (event?.title) {
//             setSelectedEvent(event);
//             toggleUpdateEvent();
//         }
//     }, [events, toggleUpdateEvent]);

//     return (
//         <div className="p-4 max-w-screen-xl mx-auto">
//             <ToastContainer />
//             <div className="relative mb-2 flex justify-end">
//                 <a href="/dashboard/events/addevent" className='p-3 rounded-lg bg-colorPrimary'> Add event</a>
//             </div>
//             {events.length === 0 && <div>No events!</div>}
//             <table className="w-full">
//                 <thead className="p-4 m-4 text-dark bg-slate-300 rounded-xl border">
//                     <tr>
//                         <th>Title</th>
//                         <th>Details</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {events.map(event => (

//                         <tr className="p-4 m-4" key={event.id}>
//                             {/* <UpdateEvent
//                                 isOpen={updateEvent}
//                                 onClose={toggleUpdateEvent}
//                                 //@ts-ignore
//                                 event={memoizedSelectedEvent}
//                                 //@ts-ignore
//                                 eventUpdateRoot={eventUpdateRef}
//                             /> */}
//                             <td>{event.title}</td>
//                             <td>
//                                 <div dangerouslySetInnerHTML={{ __html: event.details }} />
//                             </td>
//                             <td>
//                                 <div className="flex justify-end">
//                                     <Link className="btn_primary" href={`/dashboard/events/${event.id}`} legacyBehavior>
//                                         <a className="btn_primary font-bold">Open</a>
//                                     </Link>
//                                     <button
//                                         onClick={() => handleDelete(event.id!)}
//                                         className="text-red-500  px-4 py-2 mr-2 rounded-md"
//                                     >
//                                         Delete
//                                     </button>
//                                     <button
//                                         id={event.id}
//                                         onClick={() => handleUpdate(event.id!)}
//                                         className="text-blue-500 px-4 py-2 rounded-md"
//                                     >
//                                         Update
//                                     </button>
//                                 </div>
//                             </td>

//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default DashboardEvents;
