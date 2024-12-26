import bgImg from "../assets/Studying-bro.svg";
import BackgroundDesign from "../components/BackgroundDesign";

const Profile = () => {
  // Static user information
  const user = {
    userId: "AFD123456",
    fullName: "John Doe",
    collegeName: "Springfield University",
    email: "johndoe@example.com",
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      {/* Background design */}
      <div className="absolute inset-0 opacity-10">
        <BackgroundDesign />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center py-10">
        {/* User Profile Section */}
        <div className="md:w-[70%] lg:w-[60%] bg-white text-gray-800 shadow-lg rounded-lg p-8 mx-auto md:mx-0 md:ml-10">
          <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
            User Profile
          </h1>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-bold text-blue-600">User ID:</span>{" "}
              <span className="text-gray-900">{user.userId}</span>
            </p>
            <p className="text-lg">
              <span className="font-bold text-green-600">Name:</span>{" "}
              <span className="text-gray-900">{user.fullName}</span>
            </p>
            <p className="text-lg">
              <span className="font-bold text-indigo-600">College Name:</span>{" "}
              <span className="text-gray-900">{user.collegeName}</span>
            </p>
            <p className="text-lg">
              <span className="font-bold text-red-600">Email:</span>{" "}
              <span className="text-gray-900">{user.email}</span>
            </p>
          </div>
        </div>

        {/* Decorative Image */}
        <div className="md:w-[30%] mt-8 md:mt-0">
          <img
            className="w-[90%] md:w-full mx-auto rounded-lg "
            src={bgImg}
            alt="Decorative Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
