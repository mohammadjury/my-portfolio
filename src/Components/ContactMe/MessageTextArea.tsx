export default function MessageTextArea() {
  return (
    <>
      <div className="relative z-0 w-full mb-5 group ">
        <textarea
          name="floating_message"
          id="floating_message"
          className="h-[180px] block py-5 px-0 w-full text-sm text-violet-900 bg-transparent border-0 border-b-2 border-purple-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-700 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_message"
          className="peer-focus:font-medium absolute text-sm text-purple-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Message
        </label>
      </div>
    </>
  );
}
