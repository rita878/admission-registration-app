
const BackgroundDesign = () => {
  return (
    <>
      {/* Left Background Design */}
      <div className="absolute top-0 left-0 w-1/3 h-full gap-5 flex flex-col">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-100 rounded-br-full"></div>
        <div className="w-28 h-28 rounded-full border-8 border-gray-100 bg-transparent self-start mt-auto mb-5"></div>
      </div>

      {/* Right Background Design */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute top-0 right-0 w-1/2 h-[30%] bg-gray-100 rounded-bl-full"></div>
      </div>
    </>
  );
};

export default BackgroundDesign;
