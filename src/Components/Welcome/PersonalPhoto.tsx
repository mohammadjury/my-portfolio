import myImage from "../../../public/favicon.ico";

export default function PersonalPhoto() {
  return (
    <>
      <div className="pt-0 md:pt-0">
        <img
          className="w-[200px] md:w-[400px] border rounded-full"
          src={myImage.src}
          alt="My Image"
        ></img>
      </div>
    </>
  );
}
