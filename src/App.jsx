import React from "react";
import User from "./assets/Me.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import BlurFade from "@/components/ui/blur-fade";

function App() {
  return (
    <>
      <main className="bg-slate-100">
        <BlurFade delay={0.5} inView>
          <section className="pt-5 max-w-3xl mx-auto">
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
          {/* <section className="mt-12 max-w-3xl mx-auto">
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
        </section> */}
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
                <p className="text-sm">(Asst.System Engineer) | Oct,2021 - Present</p>
              </div>
            </p>
            <p className="ml-4 mt-6 text-lg text-blue-950 font-semibold">
              {" "}
              ◾{" "}
              <span className="underline leading-6">
                BT - British Telecom Project from Dec-2021
              </span>
            </p>
            <p className="mt-4 text-neutral-700 text-justify">
              I have worked as Worked as an Ethernet Fiber Network Planner, responsible for
              designing and optimizing fiber network infrastructure to ensure seamless connectivity
              and high-performance data transmission.
            </p>{" "}
            <p className="ml-4 mt-6 text-lg text-blue-950 font-semibold">
              {" "}
              ◾{" "}
              <span className="underline leading-6">
                Frontend Development (Self-Initiated Learning)
              </span>
            </p>
            <p className="mt-4 text-neutral-700 text-justify">
              Developed responsive web applications using HTML, CSS, JavaScript, and React.js,
              focusing on intuitive UI/UX and modern design principles. Built multiple Responsive
              projects, including landing pages, and interactive web apps, to reinforce hands-on
              experience
            </p>
          </section>
          <section className="mt-12 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold">Projects</h1>
            <div className="mt-5 max-w-2xl mx-auto">
              <ul className="list-disc">
                <li className="leading-7">
                  <a
                    className="text-lg text-blue-900 hover:text-green-700"
                    href="https://hackathon-2-zeta.vercel.app/"
                    target="blank"
                  >
                    ShadCN MainPage Clone using HTML and Tailwind CSS
                  </a>
                </li>
                <li className="leading-7">
                  <a
                    className="text-lg text-blue-900 hover:text-green-700"
                    href="https://netflix-clone-using-css.vercel.app/"
                    target="blank"
                  >
                    Netflix MainPage Clone using HTML and CSS
                  </a>
                </li>
                <li className="leading-7">
                  <a
                    className="text-lg text-blue-900 hover:text-green-700"
                    href="https://products-api-seven.vercel.app/"
                    target="blank"
                  >
                    Products-webpage using API, useEffect
                  </a>
                </li>
                <li className="leading-7">
                  <a
                    className="text-lg text-blue-900 hover:text-green-700"
                    href="https://movie-api-blond.vercel.app/"
                    target="blank"
                  >
                    Movie Search Webpage API, React JS
                  </a>
                </li>
                <li className="leading-7">
                  <a
                    className="text-lg text-blue-900 hover:text-green-700 "
                    href="https://simple-react-todolist-woad.vercel.app/"
                    target="blank"
                  >
                    TodoList using React JS, Firebase
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <div className="">
              <div className="mt-5 px-5 flex justify-center gap-28">
                <div className="w-1/3">
                  <a href="https://golf-website-clone-phi.vercel.app/" target="blank">
                    <img
                      className="w-fit rounded-2xl backdrop-blur-sm object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddFzzfckgPZ4a9Ycg1yh51HmF1UF4aXnzDv4kxu1j6C_ox6fUZs-FdWz_JWq5RAS3uFE&usqp=CAU"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/3">
                  <a href="https://two-good-website-clone-xi.vercel.app/" target="blank">
                    <img
                      className="w-fit rounded-2xl backdrop-blur-sm object-cover"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="text-center text-xl mb-5 font-bold mt-3">
                Animated Website Clones using HTML, CSS, JS(Gsap CDN)
              </div>
            </div>
            <br />
            <hr />
          </section>
          <section className="mt-10 pb-16 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold">Get in Touch</h1>
            <p className="mt-2 text-neutral-600">
              Wanna know more about my work and experinece, please feel free to reach out to me via
              the email -{" "}
              <span className="text-lg font-medium text-gray-800 underline">
                fathimarayeesa276@gmail.com
              </span>
              {/* <p className="">
              <div className="relative">
                <ConfettiButton className="mt-2 px-7 rounded-full font-normal">
                  Just E-mail
                </ConfettiButton>
              </div>
            </p> */}
            </p>
          </section>
        </BlurFade>
      </main>
    </>
  );
}

export default App;
