const Heading = ({ title = "", subTitle = "" }) => {
  return (
    <>
      <div className="text-center max-w-2xl mx-auto space-y-3.5">
        {title && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {title}
          </h2>
        )}

        {subTitle && <p className="text-base md:text-lg">{subTitle}</p>}
      </div>
    </>
  );
};

export default Heading;
