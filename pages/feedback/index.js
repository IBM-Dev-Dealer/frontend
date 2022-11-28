import { useRouter } from "next/router";
import { useEffect } from "react";
import RequestFeedback from "../../components/page-components/RequestFeedback/RequestFeedback";
import GiveFeedback from "../../components/page-components/GiveFeedback/GiveFeedback";
import { ROUTES } from "../../utils/utils";

const FeedbackPage = (props) => {
  const { pathname, push } = useRouter();

  useEffect(() => {
    if (pathname === ROUTES.FEEDBACK) push(ROUTES.GIVE_FEEDBACK);
  }, [pathname, push]);
  switch (pathname) {
    case ROUTES.REQUEST_FEEDBACK:
      return <RequestFeedback {...props} />;
    case ROUTES.GIVE_FEEDBACK:
      return <GiveFeedback {...props} />;
  }
  return <></>;
};

export default FeedbackPage;
