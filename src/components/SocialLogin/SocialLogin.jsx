import { FcGoogle } from "react-icons/fc";

const SocialLogin = ({ onClick, disabled = false }) => {
  return (
    <>
      <div className="divider">OR</div>

      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        className="btn btn-sm md:btn-md btn-block bg-white text-neutral dark:bg-neutral dark:border-neutral dark:shadow-white/20 dark:hover:shadow-md transition-shadow duration-300 dark:shadow dark:text-white border-[#e5e5e5]"
      >
        <FcGoogle size={22} />
        Login with Google
      </button>
    </>
  );
};

export default SocialLogin;
