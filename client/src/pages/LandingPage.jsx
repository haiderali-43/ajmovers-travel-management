import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="">
      <div className="bg-cover bg-center bg-hero bg-no-repeat text-slate-200 overflow-hidden">
        <Navbar btnone={"Login"} btntwo={"Register"} />
        <HeroSection />
      </div>
    </div>
  );
};

export default LandingPage;
