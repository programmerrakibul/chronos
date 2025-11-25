const MyInput = ({
  id = "",
  type = "text",
  placeholder,
  className = "",
  disabled = false,
  ...rest
}) => {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`input ${className}`}
        disabled={disabled}
        {...rest}
      />
    </>
  );
};

export default MyInput;
