import Layout from "@/components/Layout";
import Subteam from "@/components/Subteam";
import React from "react";

import AmrithImg from "../../assets/img/members/AmrithKumaar.jpg";
import AnyaImg from "../../assets/img/members/AnyaYerramilli.jpg";
import AudreyImg from "../../assets/img/members/AudreyWang.jpg";
import BossImg from "../../assets/img/members/BossLerdamnrongwong.jpg";
import CadeImg from "../../assets/img/members/CadeJin.jpg";
import DarrenImg from "../../assets/img/members/DarrenKey.jpg";
import DenizImg from "../../assets/img/members/DenizBoloni-Turgut.jpg";
import EricDoImg from "../../assets/img/members/EricDo.jpg";
import EricGuoImg from "../../assets/img/members/EricGuo.jpg";
import ImaniImg from "../../assets/img/members/ImaniFinkley.jpg";
import JakobImg from "../../assets/img/members/JakobSilver.jpg";
import JasonImg from "../../assets/img/members/JasonZheng.jpg";
import JerryImg from "../../assets/img/members/JerryWang.jpg";
import KatieImg from "../../assets/img/members/KatieZelvin.jpg";
import KaylaImg from "../../assets/img/members/KaylaShan.jpg";
import LauraImg from "../../assets/img/members/LauraGong.jpg";
import LeoQian from "../../assets/img/members/LeoQian.jpg";
import LetitiaSoare from "../../assets/img/members/LetitiaSoare.jpg";
import MahithaImg from "../../assets/img/members/MahithaPenmetsa.jpg";
import MericelImg from "../../assets/img/members/MericelTao.jpg";
import MichelleZhou from "../../assets/img/members/MichelleZhou.jpg";
import MihirKulshreshtha from "../../assets/img/members/MihirKulshreshtha.jpg";
import SamuelImg from "../../assets/img/members/SamuelMeisner.jpg";
import SkylerImg from "../../assets/img/members/SkylerShapiro.jpg";
import SrivatsaImg from "../../assets/img/members/SrivatsaKundurthy.jpg";
import TamaraImg from "../../assets/img/members/TamaraKasikovic.jpg";
import TemiImg from "../../assets/img/members/Temi.jpeg";
import TheodoreImg from "../../assets/img/members/TheodoreJeliazkov.jpg";
import TravisImg from "../../assets/img/members/TravisZhang.jpg";
import { default as EmeraldImg, default as EricChenImg, default as JeromeHsu, default as JoyceImg, default as MinhImg, default as ProfWeinbergerImg, default as VarunImg, default as VivianImg } from "../../assets/img/members/default.jpg";

const members = [
  {
    title: "Subteam Lead",
    name: "Eric Do",
    description: "Sample Text",
    img: EricDoImg.src,
    linkedin: null,
  },
  {
    title: "Subteam Lead",
    name: "Letitia Soare",
    description: "Sample Text",
    img: LetitiaSoare.src,
    linkedin: "https://www.linkedin.com/in/letitiasoare"
  },
  {
    title: "Member",
    name: "Deniz Bölöni-Turgut",
    description: "Sample Text",
    img: DenizImg.src,
    linkedin: "https://www.linkedin.com/in/deniz-bt/",
  },
  {
    title: "Member",
    name: "Mericel Tao",
    description: "Sample Text",
    img: MericelImg.src,
    linkedin: "https://www.linkedin.com/in/mericel-tao/",
  },
  {
    title: "Member",
    name: "Skyler Shapiro",
    description: "Sample Text",
    img: SkylerImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Samuel Meisner",
    description: "Sample Text",
    img: SamuelImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Emerald Liu",
    description: "Sample Text",
    img: EmeraldImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Travis Zhang",
    description: "Sample Text",
    img: TravisImg.src,
    linkedin: "https://www.linkedin.com/in/travis-zhang/",
  },
  {
    title: "Member",
    name: "Varun Gande",
    description: "Sample Text",
    img: VarunImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Laura Gong",
    description: "Sample Text",
    img: LauraImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Imani Finkley",
    description: "Sample Text",
    img: ImaniImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Katie Zelvin",
    description: "Sample Text",
    img: KatieImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Eric Guo",
    description: "Sample Text",
    img: EricGuoImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Eric Chen",
    description: "Sample Text",
    img: EricChenImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Vivian Chen",
    description: "Sample Text",
    img: VivianImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Darren Key",
    description: "Sample Text",
    img: DarrenImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Mahitha Penmetsa",
    description: "Sample Text",
    img: MahithaImg.src,
    linkedin: "https://www.linkedin.com/in/mahitha-penmetsa/", // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Audrey Wang",
    description: "Sample Text",
    img: AudreyImg.src,
    linkedin: "www.linkedin.com/in/audreywang12",
  },
  {
    title: "Member",
    name: "Jason Zheng",
    description: "Sample Text",
    img: JasonImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Jakob Silver",
    description: "Sample Text",
    img: JakobImg.src,
    linkedin: 'https://www.linkedin.com/in/jakob-w-silver/',
  },
  {
    title: "Member",
    name: "Cade Jin",
    description: "Sample Text",
    img: CadeImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Anya Yerramilli",
    description: "Sample Text",
    img: AnyaImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Theodore Jeliazkov",
    description: "Sample Text",
    img: TheodoreImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Tamara Kasikovic",
    description: "Sample Text",
    img: TamaraImg.src,
    linkedin: "www.linkedin.com/in/tamara-kasikovic-7076921b8",
  },
  {
    title: "Member",
    name: "Boss Lerdamnrongwong",
    description: "Sample Text",
    img: BossImg.src,
    linkedin: "www.linkedin.com/in/riert",
  },
  {
    title: "Member",
    name: "Jerry Wang",
    description: "Sample Text",
    img: JerryImg.src,
    linkedin: "https://www.linkedin.com/in/jerry-wang2352/",
  },
  {
    title: "Member",
    name: "Amrith Kumaar",
    description: "Sample Text",
    img: AmrithImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Kayla Shan",
    description: "Sample Text",
    img: KaylaImg.src,
    linkedin: 'www.linkedin.com/in/kayla-shan',
  },
  {
    title: "Member",
    name: "Srivatsa Kundurthy",
    description: "Sample Text",
    img: SrivatsaImg.src,
    linkedin: null, // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Joyce Yang",
    description: "Sample Text",
    img: JoyceImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Temi Adebowale",
    description: "Sample Text",
    img: TemiImg.src,
    linkedin: 'https://www.linkedin.com/in/temi-adebowale/',
  },
  {
    title: "Member",
    name: "Minh Pham",
    description: "Sample Text",
    img: MinhImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Leo Qian",
    description: "Sample Text",
    img: LeoQian.src,
    linkedin: "https://www.linkedin.com/in/leojqian/"
  },
  {
    title: "Member",
    name: "Mihir Kulshreshtha",
    description: "Sample Text",
    img: MihirKulshreshtha.src,
    linkedin: "https://www.linkedin.com/in/mihirkulsh"
  },
  {
    title: "Member",
    name: "Michelle Zhou",
    description: "Sample Text",
    img: MichelleZhou.src,
    linkedin: "https://www.linkedin.com/in/michelle-zhou-ai/"
  },
  {
    title: "Member",
    name: "Jerome Hsu",
    description: "Sample Text",
    img: JeromeHsu.src,
    linkedin: null
  },
  {
    title: "Advisor",
    name: "Prof. Kilian Weinberger",
    description: "Sample Text",
    img: ProfWeinbergerImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
];

const DataScienceSubteam: React.FC = () => {
  return (
    <>
      <Layout name="Data Science">
        <Subteam members={members} />
      </Layout>
    </>
  );
};

export default DataScienceSubteam;
