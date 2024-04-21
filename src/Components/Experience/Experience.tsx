import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import ExpList from "./ExpList";

export default function Experience() {
  return (
    <>
      <ScrollAnimation>
        <div
          id="experience"
          className="container-fullscreen p-2 justify-center items-center flex flex-col"
        >
          <h1 className="text-4xl font-semibold py-10 flex justify-center">
            Experience
          </h1>

          <ExpList />
        </div>
      </ScrollAnimation>
    </>
  );
}
