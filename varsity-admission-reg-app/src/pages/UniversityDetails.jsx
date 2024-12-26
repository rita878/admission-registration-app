import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BackgroundDesign from "../components/BackgroundDesign";

const UniversityDetails = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch university details from the API using the dynamic ID
    const fetchUniversityDetails = async () => {
      try {
        const response = await fetch(
          `https://admission-form-server-seven.vercel.app/api/universities/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch university details");
        }
        const data = await response.json();
        setUniversity(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUniversityDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        An error occurred: {error}
      </p>
    );
  }

  if (!university) {
    return (
      <p className="text-center text-gray-600">
        No details found for this university.
      </p>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 min-h-screen">
      {/* Background design */}
      <div className="absolute inset-0 opacity-10">
        <BackgroundDesign />
      </div>

      {/* University Details Section */}
      <div className="relative z-10 flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-lg">
          {/* University Logo */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-300  p-6">
            <img
              src={university.logo}
              alt={university.name}
              className="w-32 h-32 mx-auto object-contain transform transition hover:scale-110 duration-300"
            />
          </div>

          <div className="p-8 text-center">
            {/* University Name */}
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
              {university.name}
            </h1>

            {/* Apply Dates */}
            <div className="text-gray-600 text-lg mb-6">
              <p className="mb-2">
                <span className="font-semibold text-indigo-600">
                  Apply Start:
                </span>{" "}
                {university.admissionForm.applyStart || "N/A"}
              </p>
              <p>
                <span className="font-semibold text-purple-600">
                  Apply End:
                </span>{" "}
                {university.admissionForm.applyEnd || "N/A"}
              </p>
            </div>

            {/* Apply Button */}
            {university.admissionForm.link ? (
              <a
                href={university.admissionForm.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Apply Now
              </a>
            ) : (
              <p className="text-gray-500 italic">
                Application link is not available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails;
