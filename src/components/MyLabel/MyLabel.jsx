const MyLabel = ({ htmlFor = "", className = "", label = "" }) => {
  return (
    <>
      <label htmlFor={htmlFor} className={`label ${className}`}>
        {label}
      </label>
    </>
  );
};

export default MyLabel;
