import drone5 from "../assets/Images/drone5.png";

const About = () => {
  return (
    <div className="grid grid-cols-2 h-screen mt-20">
      <img src={drone5} alt="" />
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl uppercase mb-4">About Us</h1>
        <hr className="w-16 h-1 bg-black"></hr>
        <p className="flex self-center my-10 mx-16">
          Welcome to our dronoticz, where innovation and technology converge to
          shape the future. We revolutionize industries and improve lives
          worldwide through our passion for pushing the boundaries of what
          robots can do. With expertise in AI, computer vision, mechanical
          engineering, and automation, we lead the way in the robotics
          revolution. Our brilliant team creates intelligent machines that
          seamlessly integrate into daily life, enhancing productivity, safety,
          and efficiency. Join us on this exciting journey as we unlock new
          frontiers, solve complex challenges, and shape a future where
          intelligent machines work hand-in-hand with humans. Discover the power
          of robotics and be part of the revolution.
        </p>
      </div>
    </div>
  );
};

export default About;
