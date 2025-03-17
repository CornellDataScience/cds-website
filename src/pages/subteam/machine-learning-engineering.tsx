import React from "react";
import Layout from "@/components/Layout";

import Subteam from "@/components/Subteam";

import ArnavImg from "../../assets/img/members/ArnavAgrawal.jpg";
import EverettImg from "../../assets/img/members/EverettLee.jpg";
import AndyImg from "../../assets/img/members/AndyHe.jpg";
import NehaImg from "../../assets/img/members/NehaKulshreshtha.jpg";
import EdwardImg from "../../assets/img/members/default.jpg";
import MeiLinImg from "../../assets/img/members/MeiLinHu.jpg";
import VincentImg from "../../assets/img/members/default.jpg";
import AndreaImg from "../../assets/img/members/AndreaSiby.jpg";
import TakumaImg from "../../assets/img/members/TakumaOsaka.jpg";
import DanWeiImg from "../../assets/img/members/DanWeiZuo.jpg";
import AliceImg from "../../assets/img/members/AliceUm.jpg";
import TanishaImg from "../../assets/img/members/default.jpg";
import KennethImg from "../../assets/img/members/KennethChiem.jpg";
import YunooImg from "../../assets/img/members/YunooKim.jpg";
import PeterImg from "../../assets/img/members/PeterFavero.jpg";
import SamanthaImg from "../../assets/img/members/SamanthaVaca.jpg";
import TanishImg from "../../assets/img/members/TanishTyagi.jpg";
import MinhajImg from "../../assets/img/members/MinhajFahad.jpg";
import ProfDeSaImg from "../../assets/img/members/default.jpg";
import VishnuImg from "../../assets/img/members/default.jpg";
import JayImg from "../../assets/img/members/JayTalwar.jpg";
import AndrewParkImg from "../../assets/img/members/default.jpg";
import ArnavKaulImg from "../../assets/img/members/ArnavKaul.jpg";
import SrikarImg from "../../assets/img/members/default.jpg";
import KaitlynImg from "../../assets/img/members/default.jpg";
import RahiImg from "../../assets/img/members/RahiDasgupta.jpg";
import SucheerMaddury from "../../assets/img/members/SucheerMaddury.jpg";
import EricZhou from "../../assets/img/members/EricZhou.jpg";
import AdenZhao from "../../assets/img/members/default.jpg";

const members = [
  {
    title: "Subteam Lead",
    name: "Everett Lee",
    description: "Sample Text",
    img: EverettImg.src,
    linkedin: "https://www.linkedin.com/in/everett-lee-6540b41b3/", // LinkedIn URL from the data
  },
  {
    title: "Subteam Lead",
    name: "Yunoo Kim",
    description: "Sample Text",
    img: YunooImg.src,
    linkedin: "https://www.linkedin.com/in/yunoo-kim-2a6721280/",
  },
  {
    title: "Member",
    name: "Arnav Agrawal",
    description: "Sample Text",
    img: ArnavImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Andy He",
    description: "Sample Text",
    img: AndyImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Neha Kulshreshtha",
    description: "Sample Text",
    img: NehaImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Edward Gu",
    description: "Sample Text",
    img: EdwardImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Mei Lin Hu",
    description: "Sample Text",
    img: MeiLinImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Vincent Fong",
    description: "Sample Text",
    img: VincentImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Andrea Siby",
    description: "Sample Text",
    img: AndreaImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Takuma Osaka",
    description: "Sample Text",
    img: TakumaImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Dan Wei Zuo",
    description: "Sample Text",
    img: DanWeiImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Alice Um",
    description: "Sample Text",
    img: AliceImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Tanisha Kore",
    description: "Sample Text",
    img: TanishaImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Kenneth Chiem",
    description: "Sample Text",
    img: KennethImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Peter Favero",
    description: "Sample Text",
    img: PeterImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Samantha Vaca",
    description: "Sample Text",
    img: SamanthaImg.src,
    linkedin: "https://www.linkedin.com/in/samantha-vaca", // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Tanish Tyagi",
    description: "Sample Text",
    img: TanishImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Minhaj Fahad",
    description: "Sample Text",
    img: MinhajImg.src,
    linkedin: "https://www.linkedin.com/in/minhajfahad/",
  },
  {
    title: "Member",
    name: "Jay Talwar",
    description: "Sample Text",
    img: JayImg.src,
    linkedin: "https://www.linkedin.com/in/jayant-talwar-187155205/",
  },
  {
    title: "Member",
    name: "Andrew Park",
    description: "Sample Text",
    img: AndrewParkImg.src,
    linkedin: "https://www.linkedin.com/in/chahnwoo7275/",
  },
  {
    title: "Member",
    name: "Arnav Kaul",
    description: "Sample Text",
    img: ArnavKaulImg.src,
    linkedin: "https://www.linkedin.com/in/kaul-arnav",
  },
  {
    title: "Member",
    name: "Srikar Karra",
    description: "Sample Text",
    img: SrikarImg.src,
    linkedin: "https://www.linkedin.com/in/srikar-karra-5960ad23b/",
  },
  {
    title: "Member",
    name: "Kaitlyn Lu",
    description: "Sample Text",
    img: KaitlynImg.src,
    linkedin: "https://www.linkedin.com/in/kaitlynlu1/",
  },
  {
    title: "Member",
    name: "Rahi Dasgupta",
    description: "Sample Text",
    img: RahiImg.src,
    linkedin: "https://www.linkedin.com/in/rahi-dasgupta/",
  },
  {
    title: "Member",
    name: "Sucheer Maddury",
    description: "Sample Text",
    img: SucheerMaddury.src,
    linkedin: "https://www.linkedin.com/in/sucheer-m-5141b9235/",
  },
  {
    title: "Member",
    name: "Vishnu Nair",
    description: "Sample Text",
    img: VishnuImg.src,
    linkedin: "https://www.linkedin.com/in/vishnunair0/",
  },
  {
    title: "Member",
    name: "Aden Zhao",
    description: "Sample Text",
    img: AdenZhao.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Eric Zhou",
    description: "Sample Text",
    img: EricZhou.src,
    linkedin: "https://www.linkedin.com/in/ericzzhou/",
  },
  {
    title: "Advisor",
    name: "Prof. Christopher De Sa",
    description: "Sample Text",
    img: ProfDeSaImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
];

const MachineLearningEngineeringSubteam: React.FC = () => {
  return (
    <>
      <Layout name="Machine Learning Engineering">
        <Subteam members={members} />
      </Layout>
    </>
  );
};

export default MachineLearningEngineeringSubteam;
