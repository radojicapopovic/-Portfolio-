/* eslint-disable @next/next/no-img-element */
import type {
  GetStaticProps,
} from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Link from "next/link";
import { Experience, Project, Skill} from "../typings";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

type Props = {
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
};

const query = groq`
*[_type == "experience"]{
    ...,
    technologies[]->
}
`;

const query2 = groq`
*[_type == "project"]{
    ...,
    technologies[]->
}
`;
const query3 = groq`
*[_type == "skill"]
`;


const Home = ({ experiences, projects, skills }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              alt=""
              src="https://e7.pngegg.com/pngimages/312/408/png-clipart-web-development-responsive-web-design-computer-icons-random-icons-angle-web-design.png"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await sanityClient.fetch(query);
  const experience: Experience[] = res;
  const res2 = await sanityClient.fetch(query2);
  const projects: Project[] = res2;
  const res3 = await sanityClient.fetch(query3);
  const skills: Skill[] = res3;
  return {
    props: {
      experience,
      projects,
      skills,
    },
    revalidate: 10,
  };
}
