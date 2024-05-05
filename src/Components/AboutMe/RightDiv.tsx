import downloadIcon from "../../../public/download-icon.png";
import Image from "next/image";
export default function RightDiv() {
  return (
    <>
      <div className="md:w-1/2 lg:w-2/3 flex flex-col ">
        <div className="px-5 text-center">
          My name is Mohammad Ayman Ahmad Jury, hailing from Nablus, Palestine.
          I hold a B.Sc. degree in Computer Engineering from An-Najah National
          University. My primary focus lies in web development, encompassing
          both frontend and backend aspects. I am deeply passionate about this
          field and possess a strong proficiency in HTML, CSS, JavaScript,
          TypeScript, Bootstrap, Tailwind, React.js, Next.js, Redux, ASP.NET,
          Node.js, and SQL. With the ability to initiate projects from inception
          to completion, I have cultivated a comprehensive skill set in web
          development. For further insight into my expertise and significant
          projects, please refer to the attached CV.
        </div>
        <div className="flex self-center mt-5">
          <button className=" flex gap-1 justify-center items-center py-3 text-lg px-10 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded shadow">
            <Image
              alt="Download CV"
              src={downloadIcon}
              width={20} // Provide the width of the image
            />
            CV
          </button>
        </div>
      </div>
    </>
  );
}
