import background from "../assets/Images/hero 1.png";

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center flex-col uppercase">
        <h1 className="text-8xl font-bold mb-10">Dronoticz</h1>
        <p className="text-5xl mb-10"> The Area of drons</p>
        <hr className="bg-black w-32 h-2"></hr>
      </div>
    </div>
  );
};

export default Hero;
