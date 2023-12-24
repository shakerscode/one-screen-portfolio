import shakerAhamedImage from "@/assets/imgs/shaker-ahamed.jpeg";
function Home() {
  return (
    <div className="w-full h-full">
      <div className="h-[250px] w-full bg-blue950 rounded-ss-xl rounded-se-xl relative">
        <div className="text-white p-20">
          <h1 className="text-5xl font-semibold">Shaker Ahamed</h1>
          <p className="text-sm font-normal">Full Stack Web Developer </p>
        </div>
        <div
          className="w-[200px] h-[200px] bg-white border-[1px] border-white border-solid rounded-md shadow-lg absolute right-[50%] left-[50%] -bottom-40 bg-contain bg-center bg-no-repeat"
          style={{
            transform: "translate(-50%, -50%)",
            backgroundImage: `url(${shakerAhamedImage}) `,
          }}
        ></div>
      </div>

      <div className="mt-[70px] flex-col">
        <div>
          <h2
            className="text-5xl text-center text-deepBlue font-semibold drop-shadow-xl"
            style={{
              textShadow: "0 0 100px #6592fd",
            }}
          >
            Shaker Ahamed
          </h2>
          <p className="text-center text-xs font-semibold my-1"><span className="bg-purple py-1 text-white rounded-full px-2">React</span> <span className="bg-secondary p-1 text-white rounded-full px-2">Next js</span> <span className="bg-bgSuccess p-1 text-white rounded-full px-2">Node</span> <span className="bg-primary p-1 text-white rounded-full px-2">SQL</span></p>
          <p className="text-center left-0 text-sm mt-2">Be the game changer! 😎</p>
        </div>
        <div className="flex gap-10 mt-4 p-4">
          <div className="w-full h-auto bg-secondary text-white rounded-md p-4">
            <h4 className="text-start pb-2 font-semibold text-xl border-b-[1px] border-solid border-white">
              About
            </h4>
            <div className="flex gap-5 mt-3">
              <div>
                <p>Status</p>
                <p>Educational Status</p>
                <p>Education</p>
                <p>Institute</p>
                <p>Address</p>
              </div>
              <div>
                <p>:Part Time Remote Job</p>
                <p>:Studying</p>
                <p>:Bachelor of Science (BS)</p>
                <p>:National University, Bangladesh</p>
                <p>:Noakhali, Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="w-full h-auto bg-secondary text-white rounded-md p-4">
          <h4 className="text-start pb-2 font-semibold text-xl border-b-[1px] border-solid border-white">
              Experiences
            </h4>
            <div className="mt-3">
              <h3 className="font-semibold text-lg">Software Developer</h3>
              <p>Layerhub Srl · Contract</p>
              <p>Sep 2022 - Present · 1 yr 4 mos</p>
              <p>Lima, Peru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
