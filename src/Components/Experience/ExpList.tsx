import ExpListItem from "./ExpListItem";

export default function ExpList() {
  return (
    <>
      <ol className="relative border-l-2 border-purple-400 border-purple-800">
        <ExpListItem
          ExpTime="Jan 2024 - Apr 2024"
          ExpTitle="Software Engineer @Orienteed"
          ExpDescription="Gained hands-on experience in various projects, enhancing skills in JavaScript, React JS,
          bootstrap, Node JS, ASP.NET and SQL."
        />
        <ExpListItem
          ExpTime="May 2023 - Dec 2023"
          ExpTitle="Full Stack Developer - Freelancer"
          ExpDescription="created a responsive web application with React JS, integrating backend
          functionality for restaurants and bars."
        />
      </ol>
    </>
  );
}
