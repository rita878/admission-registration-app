import BackgroundDesign from "../components/BackgroundDesign";
import img1 from "../assets/mita.jpg";
import img2 from "../assets/nita.jpg";
import img3 from "../assets/rita.jpg";

const Support = () => {
  return (
    <div>
      {/* Background Design */}
      <div>
        <BackgroundDesign />
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Supported By
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src={img1}
              alt="Rakhi"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <h2 className="text-lg font-semibold mt-2">Rakhi</h2>
            <p className="text-gray-600">
              A passionate advocate for education and support.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src={img2}
              alt="Tahmina"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <h2 className="text-lg font-semibold mt-2">Tahmina</h2>
            <p className="text-gray-600">
              Dedicated to helping students achieve their goals.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src={img3}
              alt="Rita"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <h2 className="text-lg font-semibold mt-2">Rita</h2>
            <p className="text-gray-600">
              Committed to providing resources for learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
