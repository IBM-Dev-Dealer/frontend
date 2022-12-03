import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

const Modal = ({ button, dropdown, onBackdropClick = () => {} }) => {
  return (
    <div className='flex justify-center items-center'>
      <div
        className='fixed bg-transparent-gray-50 h-full w-full top-0 left-0 right-0 z-5'
        onClick={onBackdropClick}
        role='presentation'
      />
      <div className=' w-2/5 p-12 bg-white shadow-2xl rounded-2xl absolute z-6 top-1/3'>
        <Dropdown
          list={dropdown.list}
          placeholder={dropdown.placeholder}
          infoMessage={dropdown.infoMessage}
          select={dropdown.select}
          selected={dropdown.selected}
          infoMessagePosition={dropdown.infoMessagePosition}
        />
        <Button
          label={button.label}
          onClick={button.onClick}
          isLoading={button.isLoading}
          type={button.type}
        />
      </div>
    </div>
  );
};
export default Modal;
