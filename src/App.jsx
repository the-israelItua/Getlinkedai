import Header from "./components/Header";
import ObjectDetection from "./components/ObjectDetection";

function App() {
  return (
    <section className="bg-whiteSmoke font-sans min-h-[100vh]">
      <Header />

      <div className="flex justify-center items-center pt-[24px] pb-[80px]">
        <div className="bg-white rounded-[20px] px-4 py-[48px] md:p-[48px] w-full max-w-[832px] ">
          <h5 className="text-black text-xl leading^[25px] font-medium mb-2">
            System check
          </h5>
          <p className="text-lightGrey font-400 text-sm leading-[22px] mb-[24px]">
            We utilize your camera image to ensure fairness for all
            participants, and we also employ both your camera and microphone for
            a video questions where you will be prompted to record a response
            using your camera or webcam, so it's essential to verify that your
            camera and microphone are functioning correctly and that you have a
            stable internet connection. To do this, please position yourself in
            front of your camera, ensuring that your entire face is clearly
            visible on the screen. This includes your forehead, eyes, ears,
            nose, and lips. You can initiate a 5-second recording of yourself by
            clicking the button below.
          </p>

          <ObjectDetection />
        </div>
      </div>

      <div className="flex items-center  px-4 lg:px-[105px] pt-[40px] pb-[80px] gap-2">
        <p className="text-grey text-sm leading-[18px]">POWERED BY </p>
        <p className="text-dark font-medium text-lg leading-[24px]">
          Getlinked.AI
        </p>
      </div>
    </section>
  );
}

export default App;
