import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { apprentice } from "../assets/Badges/apprentice.jsx";
import { junior } from "../assets/Badges/junior.jsx";
import { journeyman } from "../assets/Badges/journeyman.jsx";
import { master } from "../assets/Badges/master.jsx";
import Cee from "../assets/Cee.png";
import { senior } from "../assets/Badges/senior.jsx";
import github from "../assets/Icons/github.svg";
import gmail from "../assets/Icons/mail.svg";
import Xlogo from "../assets/Icons/Xlogo.svg";
import linkedin from "../assets/Icons/linkedin.svg";
import phone from "../assets/Icons/phone.svg";

const socialLinks = [
  {
    fullLinks: [
      {
        icon: gmail,
        ref: "mailto: covenantjoshade@gmail.com.com",
        account: "email",
        text: "covenantjoshade@gmail.com",
      },
      {
        icon: phone,
        ref: "https://wa.me/2349069189724",
        account: "phone",
        text: "+234 90 691 8 9724",
      },
    ],

    iconLinks: [
      {
        icon: linkedin,
        ref: "https://www.linkedin.com/in/covenant-joshua-5080aa228",
        account: "linkedin",
      },
      { icon: github, ref: "https://github.com/Ceejay-777", account: "github" },
      { icon: Xlogo, ref: "https://twitter.com/Cee_Jay_777", account: "X" },
    ],
  },
];

const primaryColor = "bg-yellow-400";
const wrong = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="red"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

const correct = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="green"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);

const down = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="black"
    className="size-6 rotate-90"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
    />
  </svg>
);

const Info = () => {
  const [infoDisplay, setInfoDisplay] = useState("play");

  return (
    <div className="p-4">
      <BackButton />
      <div className="dark:text-white gap-2 flex font-semibold flex-col w-fit ml-auto text-right md:flex-row md:gap-6 md:text-lg">
        <p
          className={`hover:underline ${infoDisplay === "play" && "underline"}`}
          onClick={() => {
            setInfoDisplay("play");
          }}
        >
          How to play
        </p>

        <p
          className={`hover:underline ${infoDisplay === "rank" && "underline"}`}
          onClick={() => {
            setInfoDisplay("rank");
          }}
        >
          Ranking info
        </p>

        <p
          className={`hover:underline ${
            infoDisplay === "about" && "underline"
          }`}
          onClick={() => {
            setInfoDisplay("about");
          }}
        >
          About
        </p>
      </div>

      {infoDisplay === "play" && <HowToPlay />}
      {infoDisplay === "rank" && <RankingInfo />}
      {infoDisplay === "about" && <About />}
    </div>
  );
};

const HowToPlay = () => {
  return (
    <div className="mt-12 dark:text-white">
      <div className="flex gap-1 mb-4 max-w-[500px] mx-auto">
        <div
          className={`${primaryColor} border-[1px] border-slate-500 w-[5%] rounded-lg relative`}
        ></div>
        <div className="w-16 absolute slideArrow">{down}</div>
        <div className={`grid grid-cols-3 mx-auto gap-1 w-full`}>
          <div
            className={`aspect-square ${primaryColor} rounded-2xl border border-slate-500`}
          >
            {correct}
          </div>
          <div
            className={`aspect-square bg-green-600 rounded-2xl border border-slate-500`}
          >
            {wrong}
          </div>
          <div
            className={`aspect-square ${primaryColor} rounded-2xl border border-slate-500`}
          >
            {correct}
          </div>
          <div
            className={`aspect-square bg-teal-600 rounded-2xl border border-slate-500`}
          >
            {wrong}
          </div>
          <div
            className={`aspect-square bg-pink-600 rounded-2xl border border-slate-500`}
          >
            {wrong}
          </div>
          <div
            className={`aspect-square bg-gray-600 rounded-2xl border border-slate-500`}
          >
            {wrong}
          </div>
          <div
            className={`aspect-square bg-purple-600 rounded-2xl border border-slate-500`}
          >
            {wrong}
          </div>
          <div
            className={`aspect-square bg-blue-600 rounded-2xl border border-slate-500`}
          >
            {wrong}
          </div>
          <div
            className={`aspect-square ${primaryColor} rounded-2xl border border-slate-500`}
          >
            {correct}
          </div>
        </div>
        <div
          className={`${primaryColor} border-[1px] border-slate-500 w-[5%] rounded-lg`}
        ></div>
      </div>

      <p className="text-balance max-w-[640px] mx-auto">
        Click on all the tiles in the grid that match the color shown on the
        sidebars before it scrolls past the screen. As the grids scroll, quickly
        identify and click on the tiles that match the color indicated by the
        sidebars. The goal is to click all matching tiles before they disappear
        from view. The grid will keep scrolling, and the colors may change, so
        stay focused and be quick to ensure you don't miss any matching tiles.
      </p>
    </div>
  );
};

const RankingInfo = () => {
  return (
    <div className="mt-6 dark:text-white max-w-[768px] mx-auto md:mt-16">
      <div>
        <p>
          <b className="text-green-600">Composure</b> = Ratio of total correct
          clicks to total possible clicks.
        </p>
        <p>
          <b className="text-yellow-400">Aura</b> = Ratio of total correct
          clicks made to total clicks made.
        </p>
        <p>
          <b className="text-orange-500">Rank</b> = 70% of composure + 30% of
          aura
        </p>
      </div>

      <div className="mt-8">
        <p className="font-bold text-lg mb-4">Ranking system</p>

        <div className="flex items-center justify-between text-center w-[90%] mx-auto text-sm mb-4">
          <div className="w-fit">
            <div className="w-[80px] md:w-[120px] rotate mx-auto">{junior}</div>
            <div>Grid Junior</div>
          </div>
          <div>Rank is less than 20%</div>
        </div>
        <hr />

        <div className="flex items-center justify-between text-center w-[90%] mx-auto text-sm mb-4">
          <div className="w-fit">
            <div className="w-[80px] md:w-[120px] rotate mx-auto">
              {apprentice}
            </div>
            <div>Grid apprentice</div>
          </div>
          <div>Rank is between 21% and 40%</div>
        </div>
        <hr />

        <div className="flex items-center justify-between text-center w-[90%] mx-auto text-sm mb-4">
          <div className="w-fit">
            <div className="w-[80px] md:w-[120px] rotate mx-auto">
              {journeyman}
            </div>
            <div>Grid Journeyman</div>
          </div>
          <div>Rank is between 41% and 60%</div>
        </div>
        <hr />

        <div className="flex items-center justify-between text-center w-[90%] mx-auto text-sm mb-4">
          <div className="w-fit">
            <div className="w-[80px] md:w-[120px] rotate mx-auto">{senior}</div>
            <div>Grid Senior</div>
          </div>
          <div>Rank is between 61% and 80%</div>
        </div>
        <hr />

        <div className="flex items-center justify-between text-center w-[90%] mx-auto text-sm mb-8">
          <div className="w-fit">
            <div className="w-[80px] md:w-[120px] rotate mx-auto">{master}</div>
            <div>Grid Master</div>
          </div>
          <div>Rank is more than 80%</div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="mt-8 dark:text-white max-w-[768px] mx-auto">
      <img
        src={Cee}
        alt="CeeJay Logo"
        className="w-3/5 mx-auto max-w-[240px] mb-4 rounded-xl dark:border-2 border-white"
      />
      <p>
        Welcome to my grid game! I'm Adeosun Covenant, a frontend developer with
        a passion for creating engaging and interactive web experiences. This
        game is one of my latest projectsthat allowed me to explore new frontend
        technologies and improve my skills in delivering a smooth user
        experience.
      </p>
      <br />
      <p>
        My main interest lies in building efficient, responsive, and
        user-friendly interfaces that make web applications accessible and
        enjoyable for everyone. While game design isn't my primary focus, I
        enjoyed the challenge of developing this game as a fun way to showcase
        my frontend skills.
      </p>
      <br />
      <p>
        If you're interested in seeing more of my work, discussing potential
        collaborations, or maybe you just wish to give some feedback on gridale,
        feel free to connect with me via my socials:
      </p>
      <Socials />
      <br />
      <p>You can also visit my portfolio <span className="text-green-600 hover:underline"><a href="https://resume-ceejay777.vercel.app" target="_blank">here</a></span></p>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="gap-4 mt-8 max-w-[480px] w-fit items-center">
      {socialLinks.map((linkTypes, index) => {
        const { fullLinks, iconLinks } = linkTypes;

        return (
          <div key={index}>
            <div className="mb-2">
              {fullLinks.map((socialLink, index) => {
                const { icon, ref, account, text } = socialLink;
                return (
                  <div className="flex gap-6 items-center mb-2" key={index}>
                    <div
                      key={index}
                      className="p-2 dark:bg-white bg-gray-200 rounded-full hover:scale-110 w-fit"
                    >
                      <a href={ref} target="_blank">
                        <img
                          src={icon}
                          alt={`${account} icon`}
                          className="w-6 mb:w-8"
                        />
                      </a>
                    </div>
                    <a
                      href={ref}
                      target="_blank"
                      className="hover:underline"
                    >
                      {text}
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-6">
              {iconLinks.map((socialLink, index) => {
                const { icon, ref, account } = socialLink;
                return (
                  <div
                    key={index}
                    className="p-2 dark:bg-white bg-gray-200 rounded-full hover:scale-110 w-fit"
                  >
                    <a href={ref} target="_blank">
                      <img
                        src={icon}
                        alt={`${account} icon`}
                        className="w-6 mb:w-8"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
