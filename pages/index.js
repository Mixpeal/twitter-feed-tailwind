import LeftSide from "../components/home/LeftSide";
import MiddleSide from "../components/home/MiddleSide";
import RightSide from "../components/home/RightSide";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full lg:w-[70%]">
          <div className="lg:flex">
            <div className="lg:w-1/4">
              <LeftSide />
            </div>
            <div className="lg:w-2/4">
              <MiddleSide />
            </div>
            <div className="lg:w-1/3">
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
