interface ISubmitButton {
  message: string;
}
export default function SubmitButton(props: ISubmitButton) {
  const message = props.message;
  const mailtoLink = `mailto:mohammadjury00@gmail.com?subject=Subject%20of%20the%20Email&body=${encodeURIComponent(
    message
  )}`;
  return (
    <>
      <a
        href={mailtoLink}
        type="submit"
        className="text-white py-2 px-6 rounded bg-purple-800 hover:bg-purple-700 "
      >
        Send Email
      </a>
    </>
  );
}
