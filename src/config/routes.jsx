import { SignUpPage, HomePage, ProfilePage,LogInPage } from "../pages";

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
  ];
};

export default routes;
