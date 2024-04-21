import EmailField from "./EmailField";
import MessageTextArea from "./MessageTextArea";
import SubmitButton from "./SubmitButton";
export default function ContactForm() {
  return (
    <>
      <form className=" ">
        <EmailField />
        <MessageTextArea />
        <SubmitButton />
      </form>
    </>
  );
}
