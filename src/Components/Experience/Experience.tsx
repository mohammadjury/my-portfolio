import ExpListItem from "./ExpListItem";

export default function Experience() {
  return (
    <>
      <div className="container-fullscreen p-2 justify-center items-center flex flex-col">
        <h1 className="text-3xl font-semibold py-10 flex justify-center">
          Experience
        </h1>

        <ol className="relative border-l-2 border-purple-400 border-purple-800">
          <ExpListItem
            ExpTime="January 2024"
            ExpTitle="Application UI code in Tailwind CSS"
            ExpDescription="Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages."
          />
          <ExpListItem
            ExpTime="January 2024"
            ExpTitle="Application UI code in Tailwind CSS"
            ExpDescription="Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages."
          />
          <ExpListItem
            ExpTime="January 2024"
            ExpTitle="Application UI code in Tailwind CSS"
            ExpDescription="Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages."
          />
        </ol>
      </div>
    </>
  );
}
