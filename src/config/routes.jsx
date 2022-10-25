import { AuthPage, HomePage, ProfilePage } from "../pages";

const routes = (props) => {
  return [
    {
      path: "/", 
      element: <HomePage />,
    },
    {
      path: "/signup",
      element: <AuthPage {...props} />, 
    },
 
    {
      path: "/profile",
      element: <ProfilePage {...props} />,
    },
  ];
};

export default routes;
