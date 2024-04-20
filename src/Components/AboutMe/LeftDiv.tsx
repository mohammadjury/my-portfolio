import AuttoTyping from "../Welcome/AuttoTyping";
import ProjectButton from "../Welcome/ProjectButton";

export default function LeftDiv() {
  return (
    <>
      <div className="md:w-1/2 lg:w-1/3 flex flex-col items-center space-y-3 font-bold text-lg">
        <p className="">Nice To Meet You</p>
        <p className="text-3xl">Mohammad Jury</p>
        <div className="flex ">
          <p>Computer Engineer & </p>
          <p className="text-purple-600">
            <AuttoTyping />
          </p>
        </div>
        <ProjectButton />
      </div>
    </>
  );
}
