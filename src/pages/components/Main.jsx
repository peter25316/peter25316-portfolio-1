import Section from "./Section";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";

const Main = () => {
  return (
    <main className="bg-white mx-auto px-10 md:max-w-4xl">
      <Section className="min-h-screen">
        <Nav></Nav>
        <Hero></Hero>
      </Section>
      <Section>
        <About></About>
      </Section>
      <Section>
        <Portfolio></Portfolio>
      </Section>
    </main>
  );
};

export default Main;
