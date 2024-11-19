import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbBrandBlogger } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
export const dashboardLinks = [
    {
        id: 1,
        title: "Dashboard",
        path: 'dashboard/my-dashboard',
        icon: <MdOutlineDashboardCustomize className="text-lg" />,
        
    },
    {
        id: 2,
        title: "Blogs",
        path: 'dashboard/my-blogs',
        icon: <TbBrandBlogger className="text-lg" />,
        
    },
    {
        id: 3,
        title: "Add Blog",
        path: 'dashboard/add-blog',
        icon: <IoAddCircleOutline className="text-lg" />,
        
    },
    { 
        id: 3,
        title: "Profile",
        path: 'dashboard/my-profile',
        icon: <CgProfile className="text-lg" />,
        
    },
    {
        id: 4,
        title: "Setting",
        path: 'dashboard/setting',
        icon: <IoSettingsOutline className="text-lg" />,
        
    }
]