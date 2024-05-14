import myImage from "../../../public/image.png";

export default function PersonalPhoto() {
  return (
    <>
      <div className="pt-0 md:pt-0">
        <img
          className="w-[200px] md:w-[400px] "
          src={myImage.src}
          alt="My Image"
        ></img>
      </div>
    </>
  );
}
