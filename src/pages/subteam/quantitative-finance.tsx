import Layout from "@/components/Layout";
import Subteam from "@/components/Subteam";
import React from "react";

import AndrewDaImg from "../../assets/img/members/AndrewDa.jpg";
import AydanGerberImg from "../../assets/img/members/AydanGerber.jpg";
import ChenkaiImg from "../../assets/img/members/ChenkaiShen.jpg";
import CoreyWangImg from "../../assets/img/members/CoreyWang.jpg";
import { default as AaravKhannaImg, default as AarshaJoshiImg, default as AdonaAntenehImg, default as AlkiviadesBoukasImg, default as AlyssaSerebrenikImg, default as AndrewChenImg, default as AryaPatelImg, default as CodyTorogovnikImg, default as EileenWuImg, default as JohnsonLinImg, default as PeterZhengImg, default as ProfHaymHirshImg, default as TanviKapoorImg } from "../../assets/img/members/default.jpg";
import EdwinImg from "../../assets/img/members/EdwinLin.jpg";
import ElizabethSongImg from "../../assets/img/members/ElizabethSong.jpg";
import EvanImg from "../../assets/img/members/EvanYang.jpeg";
import IramLiuImg from "../../assets/img/members/IramLiu.jpg";
import JacobMayourianImg from "../../assets/img/members/JacobMayourian.jpg";
import JerryChenImg from "../../assets/img/members/JerryChen.jpg";
import KatelynImg from "../../assets/img/members/KatelynFu.jpg";
import LucasImg from "../../assets/img/members/LucasHe.jpg";
import NancyChenImg from "../../assets/img/members/NancyChen.jpg";
import NoahPlantImg from "../../assets/img/members/NoahPlant.jpg";
import PeterHaImg from "../../assets/img/members/PeterHa.jpg";
import RohanShahImg from "../../assets/img/members/RohanShah.jpg";
import RonaldFeng from "../../assets/img/members/RonaldFeng.jpg";
import SamaraSilvermanImg from "../../assets/img/members/SamaraSilverman.jpg";
import SantiagoPalaciosImg from "../../assets/img/members/SantiagoPalacios.jpg";
import BryanChungImg from "../../assets/img/members/BryanChung.jpg";
import ConnieLuImg from "../../assets/img/members/ConnieLu.jpg";
import WeiyunHsuImg from "../../assets/img/members/WeiyunHsu.jpg";
import HenriqueAkabaneImg from "../../assets/img/members/HenriqueAkabane.jpg";
import AustinZhangImg from "../../assets/img/members/AustinZhang.jpg";
import SophiaLuImg from "../../assets/img/members/SophiaLu.jpg";

const members = [
  {
    title: "Subteam Lead",
    name: "Ronald Feng",
    description: "Sample Text",
    img: RonaldFeng.src,
    linkedin: 'https://www.linkedin.com/in/ronald-feng-821770253/',
  },
  {
    title: "Subteam Lead",
    name: "Lucas He",
    description: "Sample Text",
    img: LucasImg.src,
    linkedin: "https://www.linkedin.com/in/lucashe309/",
  },
  {
    title: "Member",
    name: "Elizabeth Song",
    description: "Sample Text",
    img: ElizabethSongImg.src,
    linkedin: "https://www.linkedin.com/in/elizabethyurisong/",
  },
  {
    title: "Member",
    name: "Peter Ha",
    description: "Sample Text",
    img: PeterHaImg.src,
    linkedin: "https://www.linkedin.com/in/peter-soojong-ha/",
  },
  {
    title: "Member",
    name: "Noah Plant",
    description: "Sample Text",
    img: NoahPlantImg.src,
    linkedin: "https://www.linkedin.com/in/noah-plant-804168289/",
  },
  {
    title: "Member",
    name: "Tanvi Kapoor",
    description: "Sample Text",
    img: TanviKapoorImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Jerry Chen",
    description: "Sample Text",
    img: JerryChenImg.src,
    linkedin: null,
  },
  
  {
    title: "Alumni",
    name: "Iram Liu",
    description: "Sample Text",
    img: IramLiuImg.src,
    linkedin: "https://www.linkedin.com/in/iram-liu/", // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Corey Wang",
    description: "Sample Text",
    img: CoreyWangImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Andrew Da",
    description: "Sample Text",
    img: AndrewDaImg.src,
    linkedin: "https://www.linkedin.com/in/andrew-da/",
  },
  {
    title: "Member",
    name: "Edwin Lin",
    description: "Sample Text",
    img: EdwinImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Chenkai Shen",
    description: "Sample Text",
    img: ChenkaiImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Nancy Chen",
    description: "Sample Text",
    img: NancyChenImg.src,
    linkedin: 'https://www.linkedin.com/in/nachency/',
  },
  {
    title: "Member",
    name: "Santiago Palacios",
    description: "Sample Text",
    img: SantiagoPalaciosImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Peter Zheng",
    description: "Sample Text",
    img: PeterZhengImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Eileen Wu",
    description: "Sample Text",
    img: EileenWuImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Aarsha Joshi",
    description: "Sample Text",
    img: AarshaJoshiImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  
  {
    title: "Member",
    name: "Katelyn Fu",
    description: "Sample Text",
    img: KatelynImg.src,
    linkedin: "www.linkedin.com/in/katelynfu",
  },
  {
    title: "Member",
    name: "Evan Yang",
    description: "Sample Text",
    img: EvanImg.src,
    linkedin: "https://www.linkedin.com/in/evan-yang-8ab12b335/",
  },
  {
    title: "Member",
    name: "Aydan Gerber",
    description: "Sample Text",
    img: AydanGerberImg.src,
    linkedin: "https://www.linkedin.com/in/aydan-gerber/",
  },
  {
    title: "Member",
    name: "Bryan Chung",
    description: "Sample Text",
    img: BryanChungImg.src,
    linkedin: "https://www.linkedin.com/in/bc1201/",
  },
  {
    title: "Member",
    name: "Henry Ji",
    description: "Sample Text",
    img: null,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Derek Xu",
    description: "Sample Text",
    img: null,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Haochen Wang",
    description: "Sample Text",
    img: null,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Connie Lu",
    description: "Sample Text",
    img: ConnieLuImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Weiyun Hsu",
    description: "Sample Text",
    img: WeiyunHsuImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Henrique Akabane",
    description: "Sample Text",
    img: HenriqueAkabaneImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Austin Zhang",
    description: "Sample Text",
    img: AustinZhangImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Sophia Lu",
    description: "Sample Text",
    img: SophiaLuImg.src,
    linkedin: null,
  },

  {
    title: "Member",
    name: "Rohan Shah",
    description: "Sample Text",
    img: RohanShahImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Jacob Mayourian",
    description: "Sample Text",
    img: JacobMayourianImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Alkiviades Boukas",
    description: "Sample Text",
    img: AlkiviadesBoukasImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Adona Anteneh",
    description: "Sample Text",
    img: AdonaAntenehImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Samara Silverman",
    description: "Sample Text",
    img: SamaraSilvermanImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Alyssa Serebrenik",
    description: "Sample Text",
    img: AlyssaSerebrenikImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Andrew Chen",
    description: "Sample Text",
    img: AndrewChenImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Arya Patel",
    description: "Sample Text",
    img: AryaPatelImg.src,
    linkedin: 'https://www.linkedin.com/in/arya-c-patel/', // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Cody Torogovnik",
    description: "Sample Text",
    img: CodyTorogovnikImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Aarav Khanna",
    description: "Sample Text",
    img: AaravKhannaImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Johnson Lin",
    description: "Sample Text",
    img: JohnsonLinImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Advisor",
    name: "Prof. Haym Hirsh",
    description: "Sample Text",
    img: ProfHaymHirshImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
];

const QuantitativeFinanceSubteam: React.FC = () => {
  return (
    <>
      <Layout name="Quantitative Finance">
        <Subteam members={members} />
      </Layout>
    </>
  );
};

export default QuantitativeFinanceSubteam;
