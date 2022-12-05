import { useCallback, useEffect, useState } from "react";
import Profile from "../components/page-components/Profile/Profile";
import { useAuth } from "../context/hooks/useAuth";
import { callAPI } from "../utils/utils";

const ProfilePage = () => {
  const { loggedUserID } = useAuth();
  const getUserFeedback = useCallback(async () => {
    const userFeedback = (
      (await (await callAPI(`/user_feedback/${loggedUserID}`)).json()) ?? []
    ).map((p) => ({ ...p, label: p.projectName }));

    setProps({ projects: userFeedback });
  }, [loggedUserID]);

  const [props, setProps] = useState({});

  useEffect(() => {
    getUserFeedback();
  }, [getUserFeedback]);

  return <Profile {...props} />;
};

export default ProfilePage;
