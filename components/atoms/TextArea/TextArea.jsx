const TextArea = ({ label, name, setValue, value, onChange = () => {}, rows = 8 }) => {
  return (
    <div className='flex flex-col gap-2 my-2'>
      {label && <div className='text-sm'>{label}</div>}
      <textarea
        className={`w-full shadow-md border p-4 rounded-xl outline-none focus:outline-4 
          text-sm overflow-auto`}
        name={name}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setValue(name, `${value}\r\n`);
          }
        }}
        onChange={(e) => {
          setValue(name, e.target.value);
          onChange();
        }}
        value={value}
        rows={rows}
      />
    </div>
  );
};

export default TextArea;
