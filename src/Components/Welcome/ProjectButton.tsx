export default function ProjectButton() {
  const handleClick = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="w-1/2 sm:w-1/3 py-3 text-sm sm:text-md sm:px-2 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded shadow-md"
      >
        Some Projects
      </button>
    </>
  );
}
