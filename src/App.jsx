import React from "react";
import User from "./assets/Me.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import BlurFade from "@/components/ui/blur-fade";
import { ConfettiButton } from "@/components/ui/confetti";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

function App() {
  return (
    <>
      <BlurFade delay={0.5} inView>
        <div className="z-10 flex min-h-24 items-center justify-center">
          <AnimatedGradientText>
            {/* <img src="https://cdn-icons-png.flaticon.com/128/5687/5687798.png" className="h-4" />{" "}
            <hr className="text-center mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "} */}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              My Portfolio...
            </span>
          </AnimatedGradientText>
        </div>
        <section className="mt-5 max-w-3xl mx-auto">
          <div className="flex gap-5 items-center">
            <div className="w-4/5">
              <h1 className=" flex items-center gap-3 text-2xl font-bold font-poppins">
                Hey, I am Rayees Fathima!{" "}
                <span>
                  <img
                    className="w-6"
                    src="https://cdn-icons-png.flaticon.com/128/7334/7334281.png"
                    alt=""
                  />
                </span>
              </h1>
              <p className="font-light text-md mt-2">
                Developed my interest into the Frontend Domain just recently (Loving it so far..)
                and hoping to take up my future role as{" "}
                <span className="font-medium text-[17px]">Frontend Developer</span>
                ...
              </p>
              <div className="flex mt-6 gap-3">
                <a
                  href="https://www.linkedin.com/in/khaja-rayees-fathima-9b4431331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className=" text-blue-500 text-2xl"
                  target="blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://in.pinterest.com/krayeesfathima/?actingBusinessId=683914030821273009"
                  className="text-blue-500 text-2xl"
                  target="blank"
                >
                  <FaPinterest />
                </a>
                <a
                  href="https://www.behance.net/rayeesfathima"
                  target="blank"
                  className="text-blue-500 text-2xl"
                >
                  <FaBehanceSquare />
                </a>
              </div>
            </div>
            <div className="w-1/4">
              <img src={User} className="inline-flex h-44 w-44 object-cover rounded-full" />
            </div>
          </div>
        </section>
        <section className="mt-12 max-w-3xl mx-auto">
          <div className="">
            <h1 className="text-2xl font-bold">About Me</h1>
            <p className="mt-2 text-justify">
              I have completed my{" "}
              <span className="font-medium text-[17px]"> Graduation in B.Sc.</span>(with Core -
              Electronics, Maths & Computer Science) in 2021. I have started working in{" "}
              <span className="font-medium text-[17px]">
                TCS from 3 years as Asst. System Engineer.
              </span>{" "}
              Recently, enhanced my interest in the{" "}
              <span className="font-medium text-[17px]">Frontend and Design domain</span>, so I am
              enthusiastic about exploring my skills into the Frontend and looking forward to
              experience it.......
            </p>
          </div>
        </section>
        <section className="mt-12 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">Work Experience</h1>
          <p className="mt-5 mb-4 flex items-center gap-2 text-xl text-neutral-700 font-semibold">
            <span className="text-[8px]">
              <img
                src="https://logodix.com/logo/733786.png"
                className="h-14 rounded-full object-cover"
              />
            </span>
            <div>
              <p>TCS - Tata Consultancy Services </p>
              <p className="text-sm">(Asst.System Engineer) - Oct 2021</p>
            </div>
          </p>
          <p className="ml-4 mt-6 text-lg text-blue-950 font-semibold">
            {" "}
            ◾{" "}
            <span className="underline leading-6">BT - British Telecom Project from Dec-2021</span>
          </p>
          <p className="mt-4 text-neutral-700 text-justify">
            I have started my working journey in TCS right after my Graduation and it's been three
            years now. I have worked as{" "}
            <span className="font-medium">Ethernet Triage Planner in BT(British Telecom)</span> on
            behalf of Openreach, where I have explored my skills in{" "}
            <span className="font-medium">Network Planning of the Ethernet Fibre</span> from the
            Customer Location to the Telephone Exchange using{" "}
            <span className="font-medium">NGWFMT, VMJ, Piper, GeoHUB & other Planning tools</span>.
            It has helped experience much about the Teamwork, Critical-Thinking, Customer
            Satisfaction and Interpretation skills.{" "}
          </p>
        </section>
        <section className="mt-12 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">Projects</h1>
          <div className="mt-5 max-w-2xl mx-auto">
            <ul className="list-disc">
              <li className="leading-7">
                <a
                  className="text-lg text-teal-600 "
                  href="https://hackathon-2-zeta.vercel.app/"
                  target="blank"
                >
                  ShadCN MainPage Clone using Tailwind CSS
                </a>
              </li>
              <li className="leading-7">
                <a
                  className="text-lg text-teal-600 "
                  href="https://netflix-clone-using-css.vercel.app/"
                  target="blank"
                >
                  Netflix MainPage Clone using HTML & CSS
                </a>
              </li>
              <li className="leading-7">
                <a
                  className="text-lg text-teal-600 "
                  href="https://products-api-seven.vercel.app/"
                  target="blank"
                >
                  Products-webpage using API, useEffect
                </a>
              </li>
              <li className="leading-7">
                <a
                  className="text-lg text-teal-600 "
                  href="https://movie-api-blond.vercel.app/"
                  target="blank"
                >
                  Movie Search Webpage API, React JS
                </a>
              </li>
              <li className="leading-7">
                <a
                  className="text-lg text-teal-600 "
                  href="https://simple-react-todolist-woad.vercel.app/"
                  target="blank"
                >
                  TodoList using React JS, Firebase
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="mt-16 mb-16 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">Get in Touch</h1>
          <p className="mt-2 text-neutral-600">
            Wanna know more about my work and experinece, please feel free to reach out to me via
            the email -{" "}
            <span className="text-lg font-medium text-blue-800 underline">
              fathimarayeesa276@gmail.com
            </span>
            <p className="">
              <div className="relative">
                <ConfettiButton className="mt-2 px-7 rounded-full font-normal">
                  Just E-mail
                </ConfettiButton>
              </div>
            </p>
          </p>
        </section>
      </BlurFade>
    </>
  );
}

export default App;
