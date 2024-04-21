import ExpListItem from "./ExpListItem";

export default function ExpList() {
  return (
    <>
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
    </>
  );
}
