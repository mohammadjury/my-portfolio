import RightDiv from "./RightDiv";
import LeftDiv from "./LeftDiv";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
export default function ContactMe() {
  return (
    <>
      <ScrollAnimation>
        <div className="container-fullscreen p-2 justify-center items-center flex flex-col">
          <h1
            id="contactme"
            className="text-4xl font-semibold py-10 flex justify-center"
          >
            Contact Me
          </h1>

          <div className=" container lg:flex gap-5 justify-center">
            <LeftDiv />
            <RightDiv />
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}
