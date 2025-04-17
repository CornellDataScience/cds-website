import React from "react";
import Layout from "@/components/Layout";

import Subteam from "@/components/Subteam";

import SrishaImg from "../../assets/img/members/SrishaGaur.jpg";
import BryantImg from "../../assets/img/members/BryantPark.jpg";
import DavidImg from "../../assets/img/members/DavidHan.jpg";
import MasonImg from "../../assets/img/members/MasonBulling.jpg";
import JamesImg from "../../assets/img/members/JamesZhang.jpg";
import RyanLeeImg from "../../assets/img/members/RyanLee.jpg";
import LisaImg from "../../assets/img/members/LisaLi.jpg";
import ChrisImg from "../../assets/img/members/ChrisXu.jpg";
import PunImg from "../../assets/img/members/default.jpg";
import RyanHoImg from "../../assets/img/members/default.jpg";
import AbigailImg from "../../assets/img/members/AbigailKim.jpg";
import MaxImg from "../../assets/img/members/MaxWang.jpg";
import BensonImg from "../../assets/img/members/BensonZhang.jpg";
import SkaiImg from "../../assets/img/members/SkaiNzeuton.jpg";
import CindyImg from "../../assets/img/members/CindyLi.jpg";
import EllaImg from "../../assets/img/members/EllaSchneyer.jpg";
import DanielImg from "../../assets/img/members/DanielWang.jpg";
import TanviImg from "../../assets/img/members/default.jpg";
import NathanImg from "../../assets/img/members/NathanChu.jpg";
import ClaudiuIlloiImg from "../../assets/img/members/ClaudiuIllioi.jpg";
import SabrinaImg from "../../assets/img/members/SabrinaNing.jpg";
import LeonImg from "../../assets/img/members/default.jpg";
import ProfTrummerImg from "../../assets/img/members/default.jpg";
import KojiImg from "../../assets/img/members/KojiKimura.jpg";
import RohitVakkalagadda from "../../assets/img/members/Rohit.jpg";
import MukundGaur from "../../assets/img/members/default.jpg";
import AndrewImg from "../../assets/img/members/default.jpg";
import MichaelImg from "../../assets/img/members/MichaelNgo.jpg";

const members = [
  {
    title: "Subteam Lead",
    name: "Bryant Park",
    description: "Sample Text",
    img: BryantImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Subteam Lead",
    name: "Lisa Li",
    description: "Sample Text",
    img: LisaImg.src,
    linkedin: "https://www.linkedin.com/in/lisarli/",
  },
  {
    title: "Member",
    name: "Srisha Gaur",
    description: "Sample Text",
    img: SrishaImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "David Han",
    description: "Sample Text",
    img: DavidImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Mason Bulling",
    description: "Sample Text",
    img: MasonImg.src,
    linkedin: "https://www.linkedin.com/in/mason-bulling-167164228",
  },
  {
    title: "Member",
    name: "Koji Kimura",
    description: "Sample Text",
    img: KojiImg.src,
    linkedin: "https://www.linkedin.com/in/koji-kimura-30471a233/",
  },
  {
    title: "Member",
    name: "James Zhang",
    description: "Sample Text",
    img: JamesImg.src,
    linkedin: "https://www.linkedin.com/in/yuogu-james-zhang/",
  },
  {
    title: "Member",
    name: "Ryan Lee",
    description: "Sample Text",
    img: RyanLeeImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Chris Xu",
    description: "Sample Text",
    img: ChrisImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Pun Chaixanien",
    description: "Sample Text",
    img: PunImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Andrew Chang",
    description: "Sample Text",
    img: AndrewImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Ryan Ho",
    description: "Sample Text",
    img: RyanHoImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Abigail Kim",
    description: "Sample Text",
    img: AbigailImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Max Wang",
    description: "Sample Text",
    img: MaxImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Benson Zhang",
    description: "Sample Text",
    img: BensonImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Michael Ngo",
    description: "Sample Text",
    img: MichaelImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Skai Nzeuton",
    description: "Sample Text",
    img: SkaiImg.src,
    linkedin: "https://www.linkedin.com/in/skainzeuton/", // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Cindy Li",
    description: "Sample Text",
    img: CindyImg.src,
    linkedin: "https://www.linkedin.com/in/cindy-li-569a30187/", // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Ella Schneyer",
    description: "Sample Text",
    img: EllaImg.src,
    linkedin: "https://www.linkedin.com/in/ella-schneyer-06728227a/", // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Daniel Wang",
    description: "Sample Text",
    img: DanielImg.src,
    linkedin: 'https://www.linkedin.com/in/zhongxuanwang/',
  },
  {
    title: "Member",
    name: "Tanvi Bhave",
    description: "Sample Text",
    img: TanviImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Nathan Chu",
    description: "Sample Text",
    img: NathanImg.src,
    linkedin: "https://www.linkedin.com/in/nchu05/",
  },
  {
    title: "Member",
    name: "Claudiu Illoi",
    description: "Sample Text",
    img: ClaudiuIlloiImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Sabrina Ning",
    description: "Sample Text",
    img: SabrinaImg.src,
    linkedin: "https://www.linkedin.com/in/sabrinaning/",
  },
  {
    title: "Member",
    name: "Leon Jiao",
    description: "Sample Text",
    img: LeonImg.src,
    linkedin: null
  },

  {
    title: "Member",
    name: "Rohit Vakkalagadda",
    description: "Sample Text",
    img: RohitVakkalagadda.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Mukund Gaur",
    description: "Sample Text",
    img: MukundGaur.src,
    linkedin: null,
  },
];

const DataEngineeringSubteam: React.FC = () => {
  return (
    <>
      <Layout name="Data Engineering">
        <Subteam members={members} />
      </Layout>
    </>
  );
};

export default DataEngineeringSubteam;
