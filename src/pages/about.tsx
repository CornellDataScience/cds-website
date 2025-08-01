import Layout from "@/components/Layout";
import React from "react";
import "../assets/css/about.css";
import img from "../assets/img/team4.jpg";

const About: React.FC = () => {
  return (
    <>
      <Layout name="About Us">
        <div>
          {/* image */}
          <div className="mb-10">
            <img
              src={img.src}
              alt="hero"
              className="w-full h-[13rem] sm:h-[30rem] md:h-[40rem] mt-16 object-cover"
            />{" "}
          </div>
          {/* content */}
          <div className="border-thin mt-5 pt-5">
            <div>
              <h1 className="text-5xl">Our Story</h1>
              <p className="text-xl text-light mt-5">
                Cornell Data Science (CDS) is a distinguished undergraduate
                project team dedicated to crafting data-driven solutions
                addressing a range of real-world challenges. Comprising 92
                students from diverse academic backgrounds, CDS offers a unique
                platform to engage with like-minded peers, enhance practical
                skills at the nexus of theory and application, and contribute
                significantly to community-wide initiatives.
              </p>
              <h1 className="text-5xl mt-5">Projects</h1>
              <p className="text-xl text-light mt-5">
                At CDS, our projects cover the entire spectrum of data science,
                including applied deep learning and user-centric visualizations.
                Our collaborative environment ensures that, regardless of the
                project, innovation is at the forefront. Beyond project work,
                CDS fosters a vibrant community through regular social
                gatherings, team dinners, intramural sports, and networking
                events with industry leaders. These activities not only enrich
                our team experience but also bridge the gap between passionate
                students and the professional world.
              </p>
              <h1 className="text-5xl mt-5">Subteams</h1>
              <p className="text-xl text-light mt-5">
                Structured into four specialized subteams—Data Science, Machine
                Learning Engineering, Data Engineering, and Quantitative
                Finance—our team addresses distinct domains, ensuring dedicated
                focus and expertise in each area.
              </p>
              <h1 className="text-5xl mt-5">Members & Community</h1>
              <p className="text-xl text-light mt-5">
                Our members, ranging from freshmen to graduate students, are the
                cornerstone of our team. They represent five colleges and
                numerous majors, all united by a shared passion for data
                science. We are committed to making data science accessible to
                the entire Cornell community, emphasizing education through
                various initiatives. These include a proprietary course, a
                regularly updated blog, engaging Data Talks, and in-depth Deep
                Dive sessions.
                <br></br> <br></br>
                We invite you to explore the world of data science with us,
                whether by meeting our diverse team, participating in our
                educational offerings, or joining us at one of our upcoming
                events.
              </p>
              <br></br>
              <h1 className="text-5xl mt-5">Equal Education and Employment</h1>
              <p className="text-xl text-light mt-5">
                With a founding principle of “... any person ... any study,”
                Cornell is an equal opportunity employer and educator.
                <br></br>
                Cornell Data Science is committed to providing{" "}
                <a href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment"
                  className="text-blue-500"
                >
                  equal education and employment
                </a>.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
