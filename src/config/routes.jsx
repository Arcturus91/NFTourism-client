import { SignUpPage, HomePage, ProfilePage,LogInPage, ReligiousPage } from "../pages";

const routes = (props) => {
  return [
    {
      path: "/", 
      element: <HomePage />,
    },
    {
      path: "/signup",
      element: <SignUpPage {...props} />, 
    },
    {
      path: "/login",
      element: <LogInPage {...props} />, 
    },
 
    {
      path: "/profile",
      element: <ProfilePage {...props} />,
    },
    {
      path: "/amazonianroute",
      element: <ReligiousPage {...props} />,
    },
    {
      path: "/religiousroute",
      element: <ReligiousPage {...props} />,
    },
    {
      path: "/incaroute",
      element: <ReligiousPage {...props} />,
    },
  ];
};

export default routes;
