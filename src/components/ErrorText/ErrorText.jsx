const ErrorText = ({ label }) => {
  return (
    <>
      <p role="alert" className="text-red-400">
        {label}
      </p>
    </>
  );
};

export default ErrorText;
