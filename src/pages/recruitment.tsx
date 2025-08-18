import Layout from "@/components/Layout";
import React from "react";

import "../assets/css/recruitment.css";
import img from "../assets/img/team2.png";

const Recruitment: React.FC = () => {
  return (
    <>
      <Layout name="Recruitment">
        <div>
          {/* image */}
          <div className="mb-15">
            {/* <div className="max-w-auto h-[48rem] mt-16 bg-gray-500"></div> */}
            <img
              src={img.src}
              alt="team"
              className="w-full h-[20rem] sm:h-[30rem] md:h-[60rem] mt-10 object-cover"
            />
          </div>
          {/* content */}
          <div className="border-thin mt-10 pt-10">
            <div>
              <h1 className="text-5xl">About Recruitment</h1>
            </div>
            <div>
              <p className="mt-4 text-lg font-light">
                We&apos;re excited about your interest in joining us! At Cornell
                Data Science, we are always looking to expand our team with
                enthusiastic and talented individuals who are passionate about
                data science. Recruitment is an essential process for us, aiming
                to attract students from diverse backgrounds and disciplines who
                bring fresh perspectives and innovative ideas. We offer a
                dynamic environment where team members can develop their skills
                through real-world projects and collaboration with peers and
                industry professionals. Join us to enhance your understanding of
                data science, contribute to impactful projects, and grow both
                personally and professionally.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center mt-24">
              <h2 className="text-3xl font-semibold">Recruitment Process</h2>
            </div>
          </div>
          <div className="flex items-start space-x-12 mt-14">
            <div>
              <h1 className="text-4xl font-normal mb-4">
                Information Sessions
              </h1>
              <p className="text-light text-lg text-md">
                Cornell Data Science holds regular information sessions designed
                to provide prospective members with a comprehensive overview of
                our team and its activities. These sessions are an excellent
                opportunity for students to learn about the various subteams,
                ongoing projects, and the recruitment process. Attendees will
                also hear firsthand from current members about their experiences
                and the skills they&apos;ve developed. Whether you&apos;re just
                curious about data science or are considering joining, these
                sessions are an invaluable resource to understand how CDS
                operates and what it means to be a part of our community. Learn
                more about attending our information sessions{" "}
                <a
                  href="/information-sessions"
                  target="_blank"
                  rel="noref noopener"
                  className="text-purple-700"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-12 mt-14">
            <div>
              <h1 className="text-4xl font-normal mb-4">Coffee Chats</h1>
              <p className="text-light text-lg text-md">
                We host informal coffee chats that offer a casual environment
                for students to connect with current team members and learn more
                about our projects and culture. These gatherings are perfect for
                anyone interested in data science, providing a platform to ask
                questions, discuss interests, and explore potential fit with the
                team. Coffee chats are not only a great way to gather insights
                into the daily workings of CDS but also an opportunity to
                network and share experiences in a friendly, welcoming setting.
                Learn more about attending our coffee chats{" "}
                <a
                  href="/coffee-chats"
                  target="_blank"
                  rel="noref noopener"
                  className="text-purple-700"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-12 mt-14">
            <div>
              <h1 className="text-4xl font-normal mb-4">Application</h1>
              <div className="text-light text-lg text-md">
                This semester, Cornell Data Science is opening recruitment for
                all subteams!{" "}
                {/* <strong className="text-bold underline">
                  Our Data Science (DS) and Quantitative Finance (QF) subteams are{" "}
                  exclusively recruiting freshmen and sophomore transfers, while Machine
                  Learning Engineering (MLE) is open to both freshmen and upperclassmen.{" "}
                  Our Data Engineering (DE) subteam is not recruiting this semester.
                </strong> */}

                <ul className="list-disc pl-5">
                  <li>
                    Upperclassmen candidates should complete the{" "}
                    <a
                      className="text-blue-700 font-extrabold text-2xl"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfRZNsWirgG9GY3yNQn05llHIyNTv5UMs7xD5m9EBrCW4ZSag/viewform"
                      target="_blank"
                      style={{ textDecoration: "underline", }}
                    >
                      Application form
                    </a>
                    .
                  </li>
                  <li>
                    Freshmen candidates application will open in around two weeks, please stay tuned!
                  </li>
                  {/* <li>
                    Interested candidates should begin by completing the{" "}
                    <a
                      className="text-blue-500"
                      href="https://cornell.ca1.qualtrics.com/jfe/form/SV_cuXl2vYgb5sNPWS"
                      target="_blank"
                    >
                      General Project Team Application
                    </a>{" "}
                    through the College of Engineering.
                  </li>
                  <li>
                    Followed by the{" "}
                    <a
                      className="text-blue-500"
                      target="_blank"
                      href="https://www.engineering.cornell.edu/cornell-engineering-student-project-teams-join-a-team#team-specific-applications"
                    >
                      CDS Recruitment Application (FY/TSF)
                    </a>
                    .
                  </li> */}
                </ul>
                Post-application, selected candidates will be contacted for
                interviews.{" "}
                {/* For more details on the application process and to
                access the application forms, please click{" "}
                <a
                  href="https://www.engineering.cornell.edu/cornell-engineering-student-project-teams-join-a-team"
                  target="_blank"
                  rel="noref noopener"
                  className="text-purple-700"
                >
                  here
                </a>
                . */}
              </div>
              <div className="mt-5 space-y-3">
                <h1 className="text-3xl">Application Deadlines (Upperclassmen/Underclassmen)</h1>
                <ul className="list-disc pl-5 text-lg">
                  {/* <li>
                    The{" "}
                    <strong className="text-bold">first-year/transfer</strong>{" "}
                    student application deadline is{" "}
                    <strong className="text-bold text-xl">
                      Thursday, October 17th at 11:59 PM.{" "}
                    </strong>
                  </li> */}
                  <li>
                    <strong className="text-bold text-xl">
                      Thursday, September 4th, 2025 at 11:59 PM EST
                    </strong><strong className="text-bold"> - Written Applications Due</strong>
                  </li>
                  {/* <li>
                    <strong className="text-bold text-xl">
                      Wednesday, February 5th, 2025 at 11:59 PM EST
                    </strong><strong className="text-bold"> - Application Decisions Released</strong>
                  </li>
                  <li>
                    <strong className="text-bold text-xl">
                      Wednesday, February 12th, 2025 at 11:59 PM EST
                    </strong><strong className="text-bold"> - Interview Decisions Released</strong>
                  </li> */}
                  {/*<li>Check back later!</li>*/}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-12 mt-14">
            <div>
              <h1 className="text-4xl font-normal mb-4">Interviews</h1>
              <p className="text-light text-lg text-md">
                Our interview process is designed to assess a wide range of
                skills and is specific to each subteam, ensuring a tailored
                evaluation for all candidates. Typically, interviews consist of
                three distinct parts: a behavioral segment, a technical
                assessment, and a system-design/take-home challenge. The
                behavioral portion evaluates how well candidates align with the
                team&apos;s culture and values, focusing on communication skills
                and problem-solving approaches. This part of the interview also
                critically assesses cultural fit within the specific subteam to
                ensure that candidates can thrive in our collaborative
                environment. The technical segment tests specific skills
                relevant to the subteam, such as data analysis or machine
                learning topics. The system-design/take-home challenge allows
                candidates to demonstrate their ability to handle real-world
                problems and think critically about solutions.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-12 mt-14">
            <div>
              <h1 className="text-4xl font-normal mb-4">Offers</h1>
              <p className="text-light text-lg text-md">
                Following the interview process, final offers are extended to
                candidates who have demonstrated exceptional fit both
                technically and culturally within their respective subteams.
                Candidates receiving offers will be notified promptly, allowing
                them to join and immediately engage with their subteam&apos;s
                activities, as well as a comprehensive onboarding process. We
                encourage all candidates to accept their offers promptly to
                secure their position at their earliest convenience.
              </p>
            </div>
          </div>
        </div>
      </Layout >
    </>
  );
};

export default Recruitment;
