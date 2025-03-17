import React from "react";
import Layout from "@/components/Layout";
import Subteam from "@/components/Subteam";

import JerryChenImg from "../../assets/img/members/JerryChen.jpg";
import ElizabethSongImg from "../../assets/img/members/ElizabethSong.jpg";
import TanviKapoorImg from "../../assets/img/members/default.jpg";
import RohanShahImg from "../../assets/img/members/RohanShah.jpg";
import JacobMayourianImg from "../../assets/img/members/JacobMayourian.jpg";
import NoahPlantImg from "../../assets/img/members/NoahPlant.jpg";
import AlkiviadesBoukasImg from "../../assets/img/members/default.jpg";
import AdonaAntenehImg from "../../assets/img/members/default.jpg";
import SamaraSilvermanImg from "../../assets/img/members/SamaraSilverman.jpg";
import AlyssaSerebrenikImg from "../../assets/img/members/default.jpg";
import AndrewChenImg from "../../assets/img/members/default.jpg";
import AryaPatelImg from "../../assets/img/members/default.jpg";
import CodyTorogovnikImg from "../../assets/img/members/default.jpg";
import JerryWangImg from "../../assets/img/members/JerryWang.jpg";
import IramLiuImg from "../../assets/img/members/IramLiu.jpg";
import CoreyWangImg from "../../assets/img/members/CoreyWang.jpg";
import PeterHaImg from "../../assets/img/members/PeterHa.jpg";
import NancyChenImg from "../../assets/img/members/NancyChen.jpg";
import SantiagoPalaciosImg from "../../assets/img/members/SantiagoPalacios.jpg";
import PeterZhengImg from "../../assets/img/members/default.jpg";
import EileenWuImg from "../../assets/img/members/default.jpg";
import AarshaJoshiImg from "../../assets/img/members/default.jpg";
import AaravKhannaImg from "../../assets/img/members/default.jpg";
import JohnsonLinImg from "../../assets/img/members/default.jpg";
import ProfHaymHirshImg from "../../assets/img/members/default.jpg";
import KatelynImg from "../../assets/img/members/KatelynFu.jpg";
import EvanImg from "../../assets/img/members/EvanYang.jpeg";
import AndrewDaImg from "../../assets/img/members/AndrewDa.jpg";
import LucasImg from "../../assets/img/members/LucasHe.jpg";
import EdwinImg from "../../assets/img/members/EdwinLin.jpg";
import ChenkaiImg from "../../assets/img/members/ChenkaiShen.jpg";
import RonaldFeng from "../../assets/img/members/RonaldFeng.jpg";

const members = [
  {
    title: "Subteam Lead",
    name: "Jerry Chen",
    description: "Sample Text",
    img: JerryChenImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Subteam Lead",
    name: "Elizabeth Song",
    description: "Sample Text",
    img: ElizabethSongImg.src,
    linkedin: "https://www.linkedin.com/in/elizabethyurisong/", // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Tanvi Kapoor",
    description: "Sample Text",
    img: TanviKapoorImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Rohan Shah",
    description: "Sample Text",
    img: RohanShahImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Jacob Mayourian",
    description: "Sample Text",
    img: JacobMayourianImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Noah Plant",
    description: "Sample Text",
    img: NoahPlantImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Alkiviades Boukas",
    description: "Sample Text",
    img: AlkiviadesBoukasImg.src,
    linkedin: null, // No LinkedIn URL found in the data
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
    name: "Jerry Wang",
    description: "Sample Text",
    img: JerryWangImg.src,
    linkedin: "https://www.linkedin.com/in/jerry-wang2352/", // LinkedIn URL from the data
  },
  {
    title: "Member",
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
    name: "Peter Ha",
    description: "Sample Text",
    img: PeterHaImg.src,
    linkedin: null,
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
    name: "Lucas He",
    description: "Sample Text",
    img: LucasImg.src,
    linkedin: "https://www.linkedin.com/in/lucashe309/",
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
    title: "Member",
    name: "Ronald Feng",
    description: "Sample Text",
    img: RonaldFeng.src,
    linkedin: 'https://www.linkedin.com/in/ronald-feng-821770253/',
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
