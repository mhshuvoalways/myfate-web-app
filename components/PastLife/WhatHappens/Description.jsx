import { useEffect, useState } from "react";

const Description = () => {
  const [years, setYears] = useState([]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    let currentYear = new Date().getFullYear();
    const temp = [...years];
    for (let i = 1930; i <= currentYear; i++) {
      temp.push(i);
    }
    setYears(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const temp = [...days];
    for (let i = 1; i <= 31; i++) {
      temp.push(i);
    }
    setDays(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full mobile:max-w-[340px] mx-auto space-y-5">
      <div>
        <p className="text-white text-2xl font-semibold">
          Birthday of this life
        </p>
        <div className="mt-5 flex gap-3 justify-between items-center">
          <select className="bg-gray-900 p-3 w-full text-white border border-gray-600 rounded font-semibold text-start outline-0">
            {years.map((year) => (
              <option
                className="text-white font-semibold text-start outline-0"
                key={year}
              >
                {year}
              </option>
            ))}
          </select>
          <select className="bg-gray-900 p-3 w-full text-white border border-gray-600 rounded font-semibold text-start outline-0">
            <option className="text-white font-semibold text-start outline-0">
              January
            </option>
            <option className="text-white font-semibold text-start outline-0">
              February
            </option>
            <option className="text-white font-semibold text-start outline-0">
              March
            </option>
            <option className="text-white font-semibold text-start outline-0">
              April
            </option>
            <option className="text-white font-semibold text-start outline-0">
              May
            </option>
            <option className="text-white font-semibold text-start outline-0">
              June
            </option>
            <option className="text-white font-semibold text-start outline-0">
              July
            </option>
            <option className="text-white font-semibold text-start outline-0">
              September
            </option>
            <option className="text-white font-semibold text-start outline-0">
              October
            </option>
            <option className="text-white font-semibold text-start outline-0">
              November
            </option>
            <option className="text-white font-semibold text-start outline-0">
              December
            </option>
          </select>
          <select className="bg-gray-900 p-3 w-full text-white border border-gray-600 rounded font-semibold text-start outline-0">
            {days.map((day) => (
              <option
                className="text-white font-semibold text-start outline-0"
                key={day}
              >
                {day} {day === 1 ? "day" : "days"}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="pt-5">
        <p className="text-white text-2xl font-semibold">Gender</p>
        <div className="mt-5 flex gap-3 justify-between items-center">
          <p className="bg-gray-900 p-3 w-full text-white border border-gray-600 rounded font-semibold text-center cursor-pointer">
            Other
          </p>
          <p className="bg-gray-900 p-3 w-full text-white border border-gray-600 rounded font-semibold text-center cursor-pointer">
            Female
          </p>
          <p className="bg-gray-900 p-3 w-full text-white border border-gray-600 rounded font-semibold text-center cursor-pointer">
            Not applicable
          </p>
        </div>
      </div>
      <div className="pt-5">
        <p className="text-white text-2xl font-semibold">What happened today</p>
        <select className="bg-gray-900 p-3 w-full text-white border border-gray-600 rounded font-semibold text-start outline-0 mt-5">
          <option className="text-white font-semibold text-start outline-0">
            I have concerns about human relationships.
          </option>
          <option className="text-white font-semibold text-start outline-0">
            {`It's financially difficult`}
          </option>
          <option className="text-white font-semibold text-start outline-0">
            My career is not going well
          </option>
          <option className="text-white font-semibold text-start outline-0">
            {`I don't have good relationship with my lover`}
          </option>
          <option className="text-white font-semibold text-start outline-0">
            {`I am not feeling well`}
          </option>
          <option className="text-white font-semibold text-start outline-0">
            {`Direct input`}
          </option>
        </select>
      </div>
    </div>
  );
};

export default Description;
