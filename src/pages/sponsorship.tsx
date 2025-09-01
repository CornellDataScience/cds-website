import Layout from "@/components/Layout";
import React from "react";

import "../assets/css/sponsorship.css";
import team from "../assets/img/team3.jpg";

const Sponsorship: React.FC = () => {
  return (
    <>
      <Layout name="Sponsorship">
        {/* image */}
        <div className="mb-10">
          <img
            src={team.src}
            alt="Sponsorship"
            className="w-full h-[12rem] sm:h-[30rem] md:h-[40rem] mt-10 filter brightness-120 object-cover"
          />
        </div>
        {/* content */}
        <div className="border-thin mt-5 pt-5">
          <div>
            <h1 className="text-5xl">Interested in Sponsorship?</h1>
            <p className="text-lg text-light mt-5">
              Partner with Cornell Data Science (CDS) to collaborate with
              passionate students dedicated to advancing the frontiers of data
              science and machine learning. By sponsoring CDS, you will engage
              with top-tier talent working on innovative projects that span
              across various industries and applications. Enjoy a wide range of
              benefits including direct access to our project showcases,
              recruitment opportunities, and the chance to shape the future of
              data science education and research at Cornell. Join us in our
              mission to promote and enhance the field of data science and
              machine learning, and play a pivotal role in nurturing the next
              generation of data scientists and engineers. For more information,
              on our sponsorship opportunities, please refer to our sponsorship
              packet below.
              <br></br>
              <br></br>
              For sponsorship inquiries, please contact our E-Board at{" "}
              <a
                className="text-bold text-blue-500"
                href="mailto:cornelldatascience@gmail.com"
                target="_blank"
              >
                cornelldatascience@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
        <div className="border-thin mt-14 pt-5">
          <div>
            <h1 className="text-5xl">Sponsorship Packet</h1>
            <iframe
              src="https://drive.google.com/file/d/1j9RyKdc4UxxCxqhMqMIjw6-UeMcRI-VX/preview"
              className="w-full h-[800px] mt-10"
              allow="autoplay"
            ></iframe>
            <a
              href="https://drive.google.com/file/d/1j9RyKdc4UxxCxqhMqMIjw6-UeMcRI-VX"
              download="sponsorship-packet-fa25.pdf"
              className="mt-5 inline-block border border-black bg-transparent text-black py-2 px-4"
            >
              Download Sponsorship Packet
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Sponsorship;
