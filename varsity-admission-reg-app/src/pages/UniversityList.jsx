import { useState } from "react";
import { Link } from "react-router-dom";
import BackgroundDesign from "../components/BackgroundDesign";
import bgImg from "../assets/Designer girl-rafiki.png";

const UniversityList = () => {
  const [activeList, setActiveList] = useState(null);
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUniversities = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://admission-form-server-seven.vercel.app/api/universities`
      );
      const data = await response.json();
      setUniversities(data.universities[category]);
      setActiveList(category);
    } catch (err) {
      setError("Failed to fetch university data.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      {/* Background Design */}
      <div>
        <BackgroundDesign />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center md:items-start justify-between p-6">
        {/* Text Content */}
        <div className="w-full md:w-7/12 mb-6 md:mb-0 md:mr-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-4 text-gray-800">
            University List 
          </h1>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <button
              onClick={() => fetchUniversities("public")}
              className={`px-6 py-3 rounded-md font-medium focus:outline-none transition ${
                activeList === "public"
                  ? "bg-[#6366F1] text-white"
                  : "bg-[#6366F1]/20 text-[#6366F1] hover:bg-[#6366F1]/30"
              }`}
            >
              List of Public Universities
            </button>
            <button
              onClick={() => fetchUniversities("private")}
              className={`px-6 py-3 rounded-md font-medium focus:outline-none transition ${
                activeList === "private"
                  ? "bg-[#6366F1] text-white"
                  : "bg-[#6366F1]/20 text-[#6366F1] hover:bg-[#6366F1]/30"
              }`}
            >
              List of Private Universities
            </button>
          </div>

          {/* University List */}
          <div className="bg-white p-6 rounded-md shadow-md">
            {loading && <p className="text-gray-600 text-center">Loading...</p>}
            {error && <p className="text-red-600 text-center">{error}</p>}
            {activeList && universities.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2 text-[#6366F1]">
                  {activeList === "public"
                    ? "Public Universities"
                    : "Private Universities"}
                  :
                </h2>
                <ul className="list-disc pl-6 text-gray-800">
                  {universities.map((university) => (
                    <li key={university.id}>
                      <Link
                        to={`/universities/${university.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {university.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!activeList && !loading && (
              <p className="text-gray-600 text-center">
                Select a category to view the list of universities.
              </p>
            )}
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-5/12 flex justify-center items-center">
          <img
            src={bgImg}
            alt="Designer girl"
            className="w-full max-w-sm md:max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default UniversityList;
