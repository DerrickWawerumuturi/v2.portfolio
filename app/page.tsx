import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
      <div className={"bg-black min-h-screen flex flex-col p-5 relative w-screen overflow-x-hidden "}>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          {/*<Resume />*/}
          <Contacts />
      </div>
  );
}
