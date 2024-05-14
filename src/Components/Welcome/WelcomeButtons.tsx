import ProjectButton from "./ProjectButton";
export default function WelcomeButtons() {
  const handleClick = () => {
    const element = document.getElementById("contactme");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="my-3 sm:my-10 flex gap-10">
        <ProjectButton />

        <button
          className="w-1/2 sm:w-1/3 py-3 text-sm sm:text-md sm:px-2  bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded shadow-md"
          onClick={handleClick}
        >
          Contact Me
        </button>
      </div>
    </>
  );
}
