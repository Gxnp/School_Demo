import { HomeIcon, PencilIcon, GraduationCapIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import ApplicationForm from "./components/ApplicationForm.jsx";
import ApplyPage from "./pages/ApplyPage.jsx";
import Schedule from "./pages/Schedule.jsx";
import Checking from "./pages/Checking.jsx";
import Cost from "./pages/Cost.jsx";
import Howto from "./pages/Howto.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    page: <Index />,
  },
  {
    title: "Apply Now",
    to: "/apply",
    page: <ApplyPage />,
  },
  {
    title: "Application Form",
    to: "/apply/:schoolType",
    page: <ApplicationForm />,
  },
  {
    title: "Schedule",
    to: "/schedule",
    page: <Schedule />,
  },
  {
    title: "Check",
    to: "/check",
    page: <Checking/>,
  },
  {
    title: "Cost",
    to: "/cost",
    page: <Cost/>,
  },
  {
    title: "Howto",
    to: "/howto",
    page: <Howto/>,
  },
  
  
];