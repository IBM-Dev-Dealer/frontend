import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTES } from "../../../utils/utils";
import Title from "../../atoms/Title/Title";

const RequestFeedback = () => {
  const router = useRouter();
  return (
    <div>
      <Title>
        Request Feedback{" "}
        <Link
          href={ROUTES.GIVE_FEEDBACK}
          className='cursor-pointer border-b hover:border-black border-transparent active:opacity-20'
        >
          Want to give feedback instead?
        </Link>
      </Title>
    </div>
  );
};

export default RequestFeedback;
