import { PropagateLoader } from "react-spinners";

const Loader = ({ className = "min-h-[30dvh]" }) => {
  return (
    <div className={`w-full ${className} grid place-items-center`}>
      <PropagateLoader color={"#007e6e"} />
    </div>
  );
};

export default Loader;
