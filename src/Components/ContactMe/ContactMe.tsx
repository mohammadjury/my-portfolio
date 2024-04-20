export default function ContactMe() {
  return (
    <>
      <div className="container-fullscreen p-2 justify-center items-center flex flex-col">
        <h1
          id="contactme"
          className="text-3xl font-semibold py-10 flex justify-center"
        >
          Contact Me
        </h1>

        <div className=" container flex gap-5 justify-center">
          <div className="lg:w-1/3 flex flex-col items-center space-y-3 font-bold text-lg">
            <p>Let's Connect</p>
            <p>
              I'm currently open to taking on new projects, so feel free to
              reach out to me anytime with anything you'd like to discuss. My
              inbox is always open, 24/7.
            </p>
          </div>
          <div className="lg:w-2/3 flex flex-col">
            {" "}
            <p>Let's Connect</p>
            <p>
              I'm currently open to taking on new projects, so feel free to
              reach out to me anytime with anything you'd like to discuss. My
              inbox is always open, 24/7.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
