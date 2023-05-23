import dynamic from "next/dynamic";

import 'suneditor/dist/css/suneditor.min.css';
const DashboardPost = () => {
    const SunEditor = dynamic(() => import("suneditor-react"), {
        ssr: false,
    });
    return (
<<<<<<< HEAD
<<<<<<< HEAD
        <div className=''>
            <SunEditor placeholder="Please type here..." />
        </div>
=======
        <div className=''>DashboardPost</div>
>>>>>>> b905e9e (Dev (#8))
=======
        <div className=''>DashboardPost</div>
>>>>>>> 8a6b4a1 (add search bars)
    )
}

export default DashboardPost