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
          {/* Recruitment Timeline Section */}
          <div className="border-thin mt-10 pt-10">
            <div>
              <h1 className="text-5xl mb-8">Recruitment Timeline</h1>
            </div>
            <div className="space-y-6">
              {/* Application Deadlines */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h2 className="text-2xl font-semibold text-purple-800 mb-4 text-center">🚀 Ready to Join CDS?</h2>
                <p className="text-gray-700 mb-6 text-center text-lg">Take the first step towards an exciting journey in data science!</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-blue-700 text-center">Upperclassmen Applications</h3>
                    <p className="text-gray-700 text-center"><span className="font-medium">Opens:</span> Monday, August 18th (morning)</p>
                    <p className="text-gray-700 text-center"><span className="font-medium">Due:</span> Thursday, September 4th at 11:59 PM</p>
                    <div className="text-center">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfRZNsWirgG9GY3yNQn05llHIyNTv5UMs7xD5m9EBrCW4ZSag/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-green-700 text-center">Freshmen/Transfer Applications</h3>
                    <p className="text-gray-700 text-center"><span className="font-medium">Opens:</span> Monday, September 1st (morning)</p>
                    <p className="text-gray-700 text-center"><span className="font-medium">Due:</span> Thursday, October 16th at 11:59 PM</p>
                    <div className="text-center">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdNjmA308YBUyIviuV-W7IGSfp0ebQyImvjVRwzF17FuwZTUQ/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-purple-700 font-medium mb-3">Don't miss out on this incredible opportunity!</p>
                </div>
              </div>

              {/* Information Sessions */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">🎯 Information Sessions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-blue-700">Upperclassmen Info Session</h3>
                    <p className="text-gray-700"><span className="font-medium">Date:</span> Tuesday, September 2nd</p>
                    <p className="text-gray-700"><span className="font-medium">Time:</span> 5:00 - 6:00 PM</p>
                    <p className="text-gray-700"><span className="font-medium">Location:</span> Tang 203</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-green-700">Freshmen/Transfers Info Session #1</h3>
                    <p className="text-gray-700"><span className="font-medium">Date:</span> Thursday, September 25th</p>
                    <p className="text-gray-700"><span className="font-medium">Time:</span> 5:00 - 6:00 PM</p>
                    <p className="text-gray-700"><span className="font-medium">Location:</span> Gates G01</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-green-700">Freshmen/Transfers Info Session #2</h3>
                    <p className="text-gray-700"><span className="font-medium">Date:</span> Monday, October 6th</p>
                    <p className="text-gray-700"><span className="font-medium">Time:</span> 5:00 - 6:00 PM</p>
                    <p className="text-gray-700"><span className="font-medium">Location:</span> Hollister B14</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-purple-700">CDS x AppDev Info Session</h3>
                    <p className="text-gray-700"><span className="font-medium">Date:</span> Saturday, September 27th</p>
                    <p className="text-gray-700"><span className="font-medium">Time:</span> 5:00 - 6:00 PM</p>
                    <p className="text-gray-700"><span className="font-medium">Location:</span> RPCC or Morrison (TBD)</p>
                  </div>
                </div>
              </div>

              {/* Special Events */}
              <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg border-l-4 border-green-500">
                <h2 className="text-2xl font-semibold text-green-800 mb-4">🎉 Special Events</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-green-700">Project Team Fest</h3>
                    <p className="text-gray-700"><span className="font-medium">Date:</span> Thursday, September 4th</p>
                    <p className="text-gray-700"><span className="font-medium">Time:</span> 4:00 - 6:00 PM</p>
                    <p className="text-gray-700"><span className="font-medium">Location:</span> Duff</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-yellow-700">Club Fest</h3>
                    <p className="text-gray-700"><span className="font-medium">Date:</span> Saturday, September 13th</p>
                    <p className="text-gray-700"><span className="font-medium">Time:</span> Noon (More details TBA)</p>
                    <p className="text-gray-700"><span className="font-medium">Location:</span> TBA</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* Google Calendar Section */}
          <div className="border-thin mt-10 pt-10">
            {/* <div>
              <h1 className="text-5xl mb-8">Upcoming Events</h1>
            </div> */}
            {/* <div className="w-full">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=M2Y3MzgzYWFhZDJhNDllMmU4NDFhY2NlNTc3OTUxMmY1ZWY4NzA4YTVhNGQ4NjE0NDU5MjZlNGE3YWQ5ZWZkMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&ctz=America%2FNew_York"
                style={{ border: 0 }}
                width="100%"
                height="600"
                title="Cornell Data Science Calendar"
              ></iframe>
            </div> */}
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
                our team and its activities. These sessions are an invaluable resource to understand how CDS
                operates and what it means to be a part of our community.
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
                all subteams! The application form link and related info is displayed above!{" "}
                {/* <strong className="text-bold underline">
                  Our Data Science (DS) and Quantitative Finance (QF) subteams are{" "}
                  exclusively recruiting freshmen and sophomore transfers, while Machine
                  Learning Engineering (MLE) is open to both freshmen and upperclassmen.{" "}
                  Our Data Engineering (DE) subteam is not recruiting this semester.
                </strong> */}

                {/* <ul className="list-disc pl-5">
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
                </ul> */}
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
