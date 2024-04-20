interface IExpListItem {
  ExpTime: string;
  ExpTitle: string;
  ExpDescription: string;
}

export default function ExpListItem(props: IExpListItem) {
  return (
    <>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-purple-800 rounded-full mt-1.5 -start-1.5 "></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
          {props.ExpTime}
        </time>
        <h3 className="text-lg font-semibold text-purple-800">
          {props.ExpTitle}
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {props.ExpDescription}
        </p>
      </li>
    </>
  );
}
