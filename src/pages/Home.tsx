import shakerAhamedImage from "@/assets/imgs/shaker-ahamed.jpeg";
function Home() {
  return (
    <div className="w-full h-full">
      <div className="h-[250px] w-full bg-blue950 rounded-ss-xl rounded-se-xl relative">
        <div className="text-white p-20">
          <h1 className="text-5xl font-semibold">Shaker Ahamed</h1>
          <p className="text-sm font-normal">Full Stack Web Developer </p>
        </div>
        <div className="w-44 h-48 bg-deepBlue border-[1px] border-white border-solid rounded-md shadow-lg absolute right-4 -bottom-12">
          <img src={shakerAhamedImage} alt="" className="w-full h-full p-1 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Home;
