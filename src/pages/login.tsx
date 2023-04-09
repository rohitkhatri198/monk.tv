import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
// import useAuth from "../../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

function Login() {
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(
    "Please enter your Password"
  );
  const{signIn, signUp}= useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
   
    if (login) {
      await signIn(email, password)
    } else {
      await signUp(email, password)
    }
    if (password.length < 4) {
      setPasswordError("Password must be at least 4 characters long");
    } else {
      setPasswordError("Please enter a correct Password");
    }
  };
  const onchange = () => {
    setPassword("");
  };

  return (
    <div className="h-screen flex bg-black md:items-center md:justify-center md:bg-transparent w-screen flex-col relative overflow-hidden">
      <Head>
        <title>Monk-tv</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="  md:!flex items-center">
        <div className="left  -z-10  opacity-60  ">
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186830/xumns-12_gitljf.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669185797/xumns_13_tbovqb.png"
            alt="Picture of the author"
            width={504}
            height={310}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186829/xumns-5_cqbj81.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186830/xumns-12_gitljf.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
           <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186830/xumns-12_gitljf.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186829/xumns-5_cqbj81.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669185797/xumns_13_tbovqb.png"
            alt="Picture of the author"
            width={504}
            height={310}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186829/xumns-5_cqbj81.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
        </div>
        <div className="middle -z-10  opacity-60  ">
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186829/xumns-5_cqbj81.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186829/xumns-14_owjddb.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />

          {/* <Image
            src="/images/xumns-6.png"
            alt="Picture of the author"
            width={504}
            height={419}
            objectFit="contain"
          /> */}
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186830/xumns-12_gitljf.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186830/xumns-12_gitljf.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />

          {/* <Image
            src="/images/her2.jpg"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          /> */}
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186829/xumns-5_cqbj81.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186829/xumns-14_owjddb.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
        </div>
        <div className="left -z-10  opacity-60 ">
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186830/xumns-12_gitljf.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669185797/xumns_13_tbovqb.png"
            alt="Picture of the author"
            width={504}
            height={310}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186829/xumns-5_cqbj81.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186830/xumns-12_gitljf.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669185797/xumns_13_tbovqb.png"
            alt="Picture of the author"
            width={504}
            height={310}
            objectFit="contain"
          />
        <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186830/xumns-12_gitljf.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186829/xumns-5_cqbj81.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
          <Image
            src="https://res.cloudinary.com/dduru0fz4/image/upload/v1669186829/xumns-5_cqbj81.png"
            alt="Picture of the author"
            width={504}
            height={504}
            objectFit="contain"
          />
        </div>
      </div>
      <Link href={"/"}>
        <img
          src="/images/logo.png"
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={150}
          height={150}
        />
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute rounded-[9px] space-y-8 flex  flex-col mx-5 bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 mt-24"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <input
            type="text"
            className="input"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && (
            <span className="p-1 text-13 text-red-600 ">
              Please enter a valid email
            </span>
          )}
          <input
            type="password"
            className="input"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password && (
            <span className="p-1 text-13 text-red-600 ">{passwordError}</span>
          )}
        </div>
        <button
          className="w-full rounded bg-[#3df23d] py-3 font-semibold"
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Monke.Tv?{`   `}
          <button
            type="submit"
            className="text-white hover:underline"
            onClick={() => setLogin(false)}
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
