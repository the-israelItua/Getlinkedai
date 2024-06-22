import { useEffect, useState } from "react";
import { EyeIcon, Logo, TimerIcon } from "../assets/svgs";

const Header = () => {
  const [showTimer, setShowTimer] = useState(true);
  const [time, setTime] = useState(1800);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);

  return (
    <div className="bg-white md:flex justify-between items-center px-4 lg:px-[105px] py-[24px]">
      <div className="flex items-center gap-4 mb-6 md:mb-0">
        <Logo />
        <div>
          <h5 className="font-medium text-xl leading-[26px]">
            Frontend developer
          </h5>
          <p className="text-grey text-sm leading-[18px]">
            Skill assessment test
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {showTimer && (
          <div className="flex items-center gap-[12px] bg-lightPurple px-4 rounded-[8px] h-[44px]">
            <TimerIcon />
            <p className="text-lg font-bold text-purple">
              {`${Math.floor(time / 60)}`.padStart(2, 0)}:
              {`${time % 60}`.padStart(2, 0)}
              <span className="text-sm font-medium"> time left</span>
            </p>
          </div>
        )}

        <button
          onClick={() => setShowTimer(!showTimer)}
          className="h-[30px] w-[30px] bg-lightPurple rounded-[50px] flex items-center justify-center"
        >
          <EyeIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
