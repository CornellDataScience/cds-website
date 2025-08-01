import Layout from "@/components/Layout";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../assets/css/about.css";

import AbigailImg from "../assets/img/members/AbigailKim.jpg";
import DanielImg from "../assets/img/members/DanielWang.jpg";
import LeoImg from "../assets/img/members/LeoQian.jpg";
import MericelImg from "../assets/img/members/MericelTao.jpg";
import MichelleImg from "../assets/img/members/MichelleZhou.jpg";
import NoahImg from "../assets/img/members/NoahPlant.jpg";
import SabrinaImg from "../assets/img/members/SabrinaNing.jpg";
import SkaiImg from "../assets/img/members/SkaiNzeuton.jpg";

const eboardMembers = [
  {
    title: "President",
    name: "Abigail Kim",
    description: "Sample Text",
    img: AbigailImg.src,
    linkedin: null,
  },
  {
    title: "Vice President",
    name: "Skai Nzeuton",
    description: "Sample Text",
    img: SkaiImg.src,
    linkedin: null,
  },
  {
    title: "Ed Chair",
    name: "Mericel Tao",
    description: "Sample Text",
    img: MericelImg.src,
    linkedin: null,
  },
  {
    title: "Business Chair",
    name: "Sabrina Ning",
    description: "Sample Text",
    img: SabrinaImg.src,
    linkedin: null,
  },
  {
    title: "Onboarding Chair",
    name: "Noah Plant",
    description: "Sample Text",
    img: NoahImg.src,
    linkedin: null,
  },
  {
    title: "Social Chair",
    name: "Leo Qian",
    description: "Sample Text",
    img: LeoImg.src,
    linkedin: null,
  },
  {
    title: "Tech Chair",
    name: "Daniel Wang",
    description: "Sample Text",
    img: DanielImg.src,
    linkedin: 'https://www.linkedin.com/in/zhongxuanwang/',
  },
  {
    title: "Publicity Chair",
    name: "Michelle Zhou",
    description: "Sample Text",
    img: MichelleImg.src,
    linkedin: null,
  },
];

const Eboard: React.FC = () => {
  return (
    <>
      <Layout name="E-Board">
        <div>
          {/* content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-4xl text-light">
            {eboardMembers.map((member, index) => (
              <div key={index} className="p-4">
                <div className="text-sm mb-2 text-gray-400">{member.title}</div>
                {/* <div className="w-full h-60 bg-gray-500 mb-4"> */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full mb-4"
                ></img>
                {/* </div> */}
                <div className="text-3xl md:text-3xl text-light">
                  {member.name}
                </div>
                <div className="flex items-center mt-2">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                  ) : (
                    <span className="text-gray-400">
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </span>
                  )}
                </div>
                <div className="text-sm mt-2 text-gray-500">
                  {/* {member.description} */}
                  {/* Learn More */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-thin mt-10 pt-5 text-xl">
          The executive board at Cornell Data Science plays a pivotal role in
          guiding the team’s operations and educational initiatives. Beyond
          managing the day-to-day activities, the board is instrumental in
          fostering a strong, diverse data science community at the
          undergraduate level. This includes collaborating with university
          faculty, administration, and industry leaders to equip students with
          the skills needed for the digital future.
        </div>
      </Layout>
    </>
  );
};

export default Eboard;
