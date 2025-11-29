import Heading from "@/components/Heading/Heading";
import LoginForm from "@/components/LoginForm/LoginForm";
import MyContainer from "@/components/MyContainer/MyContainer";

export const metadata = {
  title: "Login Now - CHRONOS",
  description: "Login with CHRONOS",
};

const LoginPage = () => {
  return (
    <section className="py-6 my-7">
      <MyContainer className="grid place-items-center min-h-[70dvh]  space-y-7">
        <Heading title="Login Now" />

        <div className="max-w-lg w-full bg-primary/10 p-6 rounded-xl shadow-xl">
          <LoginForm />
        </div>
      </MyContainer>
    </section>
  );
};

export default LoginPage;
