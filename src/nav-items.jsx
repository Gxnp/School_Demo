import { HomeIcon, PencilIcon, GraduationCapIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import ApplicationForm from "./components/ApplicationForm.jsx";
import ApplyPage from "./pages/ApplyPage.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Apply Now",
    to: "/apply",
    icon: <GraduationCapIcon className="h-4 w-4" />,
    page: <ApplyPage />,
  },
  {
    title: "Application Form",
    to: "/apply/:schoolType",
    icon: <PencilIcon className="h-4 w-4" />,
    page: <ApplicationForm />,
  },
];
