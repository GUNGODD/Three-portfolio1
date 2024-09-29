import Footer from "./components/Footer";
import IntroText from "./components/intro-text";
import Navbar from "./components/Navbar";
import WorkText from "./components/Work";
import { TextHeading } from "./ui/Velocity-marquee-text";

import { useThree } from "@react-three/fiber";
export default function Home() {
  return (
    <>
      <Navbar />
      <TextHeading />

      <IntroText />
      {/*TODO:  skill component is missing will be adding soon*/}
      <WorkText />
      <Footer />
    </>
  );
}
