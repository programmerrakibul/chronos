const MyButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
  outline = false,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`btn btn-sm md:btn-md ${
          outline
            ? "btn-outline btn-primary"
            : "primary_linear primary_linear_hover border-none text-white"
        }  shadow-none  ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default MyButton;
