import Image from "next/image";
import MonitorIcon from "~/components/icons/MonitorIcon";
import CheckIndicator from "./CheckIndicator";
import WifiIcon from "~/components/icons/WifiIcon";
import LightIcon from "~/components/icons/LightIcon";

const Main = () => {
  return (
    <main className="pt-7 pb-20 px-7 md:px-[12%]">
      <div className="bg-white w-full rounded-2xl p-10">
        <h1 className="text-xl font-medium">System check</h1>

        <p className="mt-2 text-[#4a4a68] text-sm leading-[22px]">
          We utilize your camera image to ensure fairness for all participants,
          and we also employ both your camera and microphone for a video
          questions where you will be prompted to record a response using your
          camera or webcam, so it&lsquo;s essential to verify that your camera
          and microphone are functioning correctly and that you have a stable
          internet connection. To do this, please position yourself in front of
          your camera, ensuring that your entire face is clearly visible on the
          screen. This includes your forehead, eyes, ears, nose, and lips. You
          can initiate a 5-second recording of yourself by clicking the button
          below.
        </p>

        <div className="mt-5 flex flex-col md:flex-row gap-4">
          <div className="bg-gray-100 w-96 aspect-[16/9] border border-[#755ae2] rounded-xl"></div>
          <div className="flex flex-col gap-3">
            <CheckIndicator icon={MonitorIcon} title="Webcam" />

            <CheckIndicator icon={MonitorIcon} title="Webcam" />
          </div>

          <div className="flex flex-col gap-4">
            <CheckIndicator icon={WifiIcon} title="Speed" />

            <CheckIndicator icon={LightIcon} title="Lighting" />
          </div>
        </div>

        <button className="p-3 bg-[#755ae2] text-white rounded-xl mt-7">
          Take picture and continue
        </button>
      </div>
    </main>
  );
};

export default Main;
