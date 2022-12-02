import { StarIcon } from "@heroicons/react/20/solid";
import { generateNumbers } from "../../../utils/utils";
import InfoNote from "../InfoNote/InfoNote";

const StarRating = ({ rating = 1, setRating, label, maxRating = 5, infoMessage, disabled }) => {
  return (
    <div className='flex flex-col my-2'>
      <div className='flex gap-2 items-center'>
        <div className='text-sm'>{label}</div>
        {infoMessage && <InfoNote message={infoMessage} />}
      </div>
      <div className='flex gap-2'>
        {generateNumbers(maxRating).map((num, i) => (
          <StarIcon
            key={num.codename}
            className={`w-6 h-6 fill-mustard ${!disabled && "cursor-pointer hover:scale-125"} 
            ${rating < i + 1 ? "opacity-25" : "opacity-100"}${" "}

            `}
            onClick={() => !disabled && setRating(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
