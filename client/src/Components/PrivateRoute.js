import { Fragment, useContext } from "react";
import { AuthContext } from "./Auth.js";
import LandingPage from "./LandingPage";
import UserPage from "./UserPage.js";
import Navi from "./Navi.js";

const PrivateRoute = () => {
  const { currUser } = useContext(AuthContext);
  return (
    currUser ? (
      <Fragment>
        <Navi />
        <UserPage name={currUser.displayPage} />
      </Fragment>
    ) : (
        <Fragment>
          {/* <Navi /> */}
          <LandingPage />
        </Fragment>
      )
  );
};
export default PrivateRoute;