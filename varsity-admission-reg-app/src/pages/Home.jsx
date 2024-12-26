import { Link } from "react-router-dom";
import heroImg from "../assets/college admission-amico.svg";
import BackgroundDesign from "../components/BackgroundDesign";

const Home = () => {
  return (
    <div>
      {/* Background Elements */}
      <BackgroundDesign />

      <div className="relative z-10">
        {/* Hero Section */}
        <main className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                RightStepAdmission
              </h1>
              <h2 className="text-2xl md:text-4xl text-gray-500 font-light">
                Navigate Admissions
                <br />
                with Confidence
              </h2>
              <button>
                <Link
                  to="/register"
                  className="px-8 py-4 bg-[#6366F1] text-white rounded-full text-lg font-semibold hover:bg-[#5457E5] transition-colors"
                >
                  Register Now!
                </Link>
              </button>
            </div>

            <div className="relative h-[400px] md:h-[500px]">
              <img
                src={heroImg}
                alt="Admission illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
