import Title from "../../../atoms/Title/Title";
import PickDate from "../../../atoms/PickDate/PickDate";
import { client } from "./Client.module.scss";

const Client = ({ logo, name, startDate, endDate, project }) => {
  return (
    <div className={client}>
      <img alt={name} src={logo} />
      <div>
        <Title>{name}</Title>
        <div>
          start:
          <PickDate value={startDate} disabled />
          end:
          <PickDate value={endDate} disabled />
        </div>
        {project}
      </div>
    </div>
  );
};

export default Client;
