import { AiOutlinePieChart } from "react-icons/ai";
import { FaRegComments, FaRegUserCircle } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { GrBug } from "react-icons/gr";
import { IoMdWifi } from "react-icons/io";
import { IoFolderOutline } from "react-icons/io5";
import { LuBookAudio, LuUserRound } from "react-icons/lu";
import { MdOutlineAccountBox } from "react-icons/md";
import { RiShoppingBag4Line, RiTeamLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const leftSidebarData = [
  {
    id: 1,
    title: "Dashboards",
    item: [
      {
        id:"item1",
        logo: <AiOutlinePieChart />,
        itemTitle: <NavLink to="/overview">
        Overview
      </NavLink>,
      },
      {
        id:"item2",
        logo: <RiShoppingBag4Line />,
        itemTitle: "eCommerce",
        subItem: [
          "eCommerce-1",
          "eCommerce-2",
          "eCommerce-3",
          "eCommerce-4",
          "eCommerce-5",
        ]
      },
      {
        id:"item3",
        logo: <IoFolderOutline />,
        itemTitle: "Projects",
        subItem: [
          "Projects-1",
          "Projects-2",
          "Projects-3",
          "Projects-4",
        ]
      },
    ],
  },
  {
    id: 2,
    title: "Pages",
    item: [
      {
        id:"item4",
        logo: <FaRegUserCircle />,
        itemTitle: "User Profile",
        subItem: [
          "Overview",
          "Projects",
          "Campaigns",
          "Documents",
          "Followers",
        ]
      },
      {
        id:"item5",
        logo: <MdOutlineAccountBox />,
        itemTitle: "Account",
        subItem: [
          "Account-profile",
          "Account-settings",
          "Account-privacy",
        ]
      },
      {
        id:"item6",
        logo: <RiTeamLine />,
        itemTitle: "Corporate",
        subItem: [
          "Team Work",
          "Projects",
          "Campaigns",
          "Documents",
        ]
      },
      {
        id:"item7",
        logo: <LuBookAudio />,
        itemTitle: "Blog",
        subItem: [
          "Blog-1",
          "Blog-2",
          "Blog-3",
          "Blog-4",
        ]
      },
      {
        id: "item8",
        logo: <FaRegComments />,
        itemTitle: "Social",
        subItem: [
          "Facebook",
          "LinkedIn",
          "Twitter",
          "Instagram",
        ]
      },

    ],
  },
]


export const rightSidebarData = {
  notifications: [
    { id: 1, logo: <GrBug size={16}/>, message: "You fixed a bug.", time: "Just now" },
    { id: 2, logo: <LuUserRound size={16}/>, message: "New user registered.", time: "59 minutes ago" },
    { id: 3, logo: <GrBug size={16}/>, message: "You fixed a bug.", time: "12 hours ago" },
    { id: 4, logo: <IoMdWifi size={16}/>, message: "Andi Lane subscribed to you.", time: "Today, 11:59 AM" },
  ],
  activities: [
    { id: 1, img: '/avatar-1.svg', message: "Changed the style.", time: "Just now" },
    { id: 2, img: '/avatar-2.svg', message: "Released a new version.", time: "59 minutes ago" },
    { id: 3, img: '/avatar-3.svg', message: "Submitted a bug.", time: "12 hours ago" },
    { id: 4, img: '/avatar-4.svg', message: "Modified a page in Project X.", time: "Today, 11:59 AM" },
    { id: 5, img: '/avatar-5.svg', message: "Deleted a page in Project X.", time: "Feb 2, 2024" },
  ],
  contacts: [
    { id: 1,img: '/avatar-6.svg', name: "Natal Craig" },
    { id: 2,img: '/avatar-7.svg', name: "Drew Cano" },
    { id: 3,img: '/avatar-8.svg', name: "Andi Lane" },
    { id: 4,img: '/avatar-9.svg', name: "Koray Okumus" },
    { id: 5,img: '/avatar-10.svg', name: "Kate Morrison" },
    { id: 6,img: '/avatar-11.svg', name: "Melody Macy" },
  ],
};


export const OverviewHeaderData = [
  {
    id: 1,
    header: "Views",
    users: "7265",
    percentage: "+11.01%",
    parameter: <FaArrowTrendUp />,
  },
  {
    id: 2,
    header: "Visits",
    users: "3671",
    percentage: "-0.03%",
    parameter: <FaArrowTrendDown />,
  },
  {
    id: 3,
    header: "New Users",
    users: "156",
    percentage: "+15.03%",
    parameter: <FaArrowTrendUp />,
  },
  {
    id: 4,
    header: "Active Users",
    users: "2318",
    percentage: "+11.01%",
    parameter: <FaArrowTrendUp />,
  },
]




