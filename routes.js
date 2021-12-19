// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "",
    icon: DashboardIcon,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Admin",
    rtlName: "",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/generator",
        name: "Generator",
        rtlName: "",
        mini: "G",
        rtlMini: "",

        layout: "/admin",
      },
      {
        path: "/colors",
        name: "Colors",
        rtlName: "",
        mini: "C",
        rtlMini: "",

        layout: "/admin",
      },
      {
        path: "/register-page",
        name: "Register Page",
        rtlName: "",
        mini: "R",
        rtlMini: "",

        layout: "/auth",
      },
    ],
  },
  {
    path: "/widgets",
    name: "Widgets",
    rtlName: "",
    icon: WidgetsIcon,

    layout: "/admin",
  },
  {
    path: "/charts",
    name: "Charts",
    rtlName: "",
    icon: Timeline,

    layout: "/admin",
  },
];
export default dashRoutes;
