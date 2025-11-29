import Heading from "@/components/Heading/Heading";
import MyContainer from "@/components/MyContainer/MyContainer";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

export const metadata = {
  title: "Create Account - CHRONOS",
  description: "Register with CHRONOS",
};

const RegisterPage = () => {
  return (
    <section className="py-6 my-7">
      <MyContainer className="grid place-items-center min-h-[70dvh] space-y-7">
        <Heading title="Register Now" />
        <div className="max-w-lg w-full bg-primary/10 shadow-xl rounded-xl p-6">
          <RegisterForm />
        </div>
      </MyContainer>
    </section>
  );
};

export default RegisterPage;
