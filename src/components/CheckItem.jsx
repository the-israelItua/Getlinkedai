import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { DangerIcon, LampIcon, TickCircleIcon } from "../assets/svgs";

const CheckItem = ({ title, status, icon }) => {
  const iconSet = {
    good: {
      percentage: 100,
      icon: <TickCircleIcon />,
    },
    fair: {
      percentage: 50,
      icon: <LampIcon />,
    },
    poor: {
      percentage: 50,
      icon: <DangerIcon />,
    },
  };

  return (
    <div className="relative w-[110px] h-[71px] bg-onion rounded-[10px] flex flex-col items-center justifiy-center text-center bg-onion p-2">
      <div
        className={`flex justify-center items-center absolute top-1 right-1 h-4 w-4 rounded-[50px] ${
          status === "poor" ? "bg-orange" : "bg-purple"
        }`}
      >
        {icon}
      </div>

      <CircularProgressbarWithChildren
        strokeWidth={3}
        styles={{
          root: {
            height: 37,
            padding: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          path: {
            stroke: status === "poor" ? "#FF5F56" : "#755AE2",
            strokeLinecap: "butt",
            transition: "stroke-dashoffset 0.5s ease 0s",
            width: 3,
          },
        }}
        value={iconSet[status]?.percentage}
      >
        <div
          className={`flex justify-center items-center w-[31px] h-[31px] rounded-[50%]  ${
            status === "poor" ? "bg-lightOrange" : "bg-violet"
          }`}
        >
          {iconSet[status]?.icon}
        </div>
      </CircularProgressbarWithChildren>

      <p className="text-[10px] text-lightGrey mt-2">{title}</p>
    </div>
  );
};

export default CheckItem;
