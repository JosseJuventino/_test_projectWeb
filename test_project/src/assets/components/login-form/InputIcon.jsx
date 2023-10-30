function InputIcon({ icon, placeholder, type }) {
  return (
    <>
      <div>
        <label htmlFor={placeholder}>
          <i className={icon}></i>
        </label>
        <input
          id={placeholder}
          className="mb-3 bg-transparent border-b-2 p-2 focus:outline-none"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default InputIcon;
