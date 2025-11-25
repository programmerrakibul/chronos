import MyButton from "@/components/MyButton/MyButton";
import MyContainer from "@/components/MyContainer/MyContainer";
import MyInput from "@/components/MyInput/MyInput";
import MyLabel from "@/components/MyLabel/MyLabel";
import React from "react";

const RegisterPage = () => {
  return (
    <section className="py-6 my-7">
      <MyContainer className="grid place-items-center min-h-[70dvh]">
        <div className="max-w-lg w-full">
          <form>
            <fieldset className="fieldset gap-3.5">
              <div className="space-y-1.5">
                <MyLabel htmlFor="name" label="Name" />
                <MyInput id="name" type="email" placeholder="E.g. John Doe" />
              </div>

              <div className="space-y-1.5">
                <MyLabel htmlFor="image" label="Upload Image" />
                <input
                  id="image"
                  type="file"
                  className="file-input block w-full"
                />
              </div>

              <div className="space-y-1.5">
                <MyLabel htmlFor="email" label="Email" />
                <MyInput
                  id="email"
                  type="email"
                  placeholder="E.g. example@gmail.com"
                />
              </div>

              <div className="space-y-1.5">
                <MyLabel htmlFor="password" label="Password" />
                <MyInput id="password" type="password" placeholder="•••••••" />
              </div>

              <MyButton className="btn btn-neutral mt-4">Register</MyButton>
            </fieldset>
          </form>
        </div>
      </MyContainer>
    </section>
  );
};

export default RegisterPage;
