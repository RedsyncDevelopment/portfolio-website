import { TEHNOLOGIES_LIST } from "../../../utils/webTehnologies";

const WebDevelopment = () => {
  return (
    <ul className="pt-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {TEHNOLOGIES_LIST.map((tehnology) => (
        <li
          key={tehnology.name}
          className="flex flex-col items-center gap-4 border-2 p-4"
        >
          <h5 className="text-primary-blue-400 justify-self-center">
            {tehnology.name}
          </h5>
          <div>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8 justify-self-center self-start ">
              {tehnology.skills.map((tehnology) => (
                <li key={tehnology.name} className="flex gap-3 items-center">
                  <div>{tehnology.icon}</div>
                  <h6>{tehnology.name}</h6>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WebDevelopment;
