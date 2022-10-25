import { AuthPage, HomePage } from "../pages";

const routes = (props) => {
  return [
          {
        path: "/", //homepage
        element: <HomePage/>,
      }, 

    {
      path: "/signup",
      element: <AuthPage {...props} />, //login
    },
    /*       {
        path: "/login",
        element: <AuthPage {...props} /> //login
      }, */
  ];
};

export default routes;
