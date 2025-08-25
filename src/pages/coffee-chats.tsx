import Layout from "@/components/Layout";
import React from "react";
import "../assets/css/coffeechat.css";
import gates from "../assets/img/gates.jpg";

const CoffeeChat: React.FC = () => {
  return (
    <>
      <Layout name="Coffee Chats">
        {/* image */}
        <div className="mb-10">
          <img
            src={gates.src}
            alt="Coffee Chats"
            className="w-full h-[25rem] sm:h-[30rem] md:h-[42rem] mt-10 object-cover"
          />
        </div>
        {/* content */}
        <div className="border-thin mt-5 pt-5">
          <div>
            <h1 className="text-5xl">About Coffee Chats</h1>
            <p className="text-xl text-light mt-5">
              Coffee chats provide a casual and inviting atmosphere where
              students can engage with current team members to learn more about
              our initiatives and culture. These informal gatherings are ideal
              for individuals interested in the field of data science to discuss
              their interests, ask questions, and gain insights into the daily
              workings of the team. Coffee chats are not just
              informative—they&apos;re also an excellent opportunity for
              networking, making them a valuable resource for anyone considering
              joining the team or simply looking to expand their understanding
              of data science in a real-world context.
            </p>
          </div>
        </div>
        <div className="border-thin mt-14 pt-5">
          <div>
            <h1 className="text-5xl">CDS Coffee-Chat Signups</h1>
            <iframe
              className="w-full h-[50rem] mt-5 border border-black"
              src="https://docs.google.com/spreadsheets/d/1bOfRHpqzPIq9Q1Psg66sYLNmJW85OZxsNcw9JRKwBwI/edit?gid=0#gid=0"
            ></iframe>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CoffeeChat;
