import projectImg1 from "../../../public/cool-background.png";
export default function ProjectCard() {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex justify-center items-center">
          <img className="rounded-t-lg" src={projectImg1.src} alt="" />
        </div>
        <div className="card-body flex flex-col items-center text-center justify-center p-5">
          <div>
            <h5 className="mb-2 text-2xl font-semibold text-purple-700 ">
              Jurly E-commerce Clothes Store
            </h5>
          </div>
          <p className="mb-3 text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button className="px-3 py-2 text-sm text-white bg-purple-800 rounded hover:bg-purple-700">
            Read more
          </button>
        </div>
      </div>
    </>
  );
}
