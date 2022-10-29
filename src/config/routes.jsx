import { SignUpPage, HomePage, ProfilePage,LogInPage, ReligiousPage, SendSolanaPage , SuccessPage} from "../pages";

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
    {
      path: "/sendSolana",
      element: <SendSolanaPage {...props} />,
    }

    ,
    {
      path: "/success",
      element: <SuccessPage {...props} />,
    }
  ];
};

export default routes;
