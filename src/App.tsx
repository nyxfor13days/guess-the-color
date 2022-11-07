import { useRandomColor } from "./hooks/useRandomColor";
import { FC, useEffect, useState } from "react";
import { useShuffle } from "./hooks/useShuffle";

const App: FC = () => {
  const [color, setColor] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setColor(useRandomColor());
  }, []);

  useEffect(() => {
    const createOptions = () => {
      const options = [];
      for (let i = 0; i < 2; i++) {
        options.push(useRandomColor());
      }
      return [...options, color];
    };

    setOptions(useShuffle(createOptions()));
  }, [color]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;

    if (value === color) {
      setScore(score + 1);
    } else {
      score > 0 && setScore(score - 1);
    }

    setColor(useRandomColor());
  };

  console.log(color, options);

  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-6">
        {/* Score */}
        <div className="flex items-center gap-2">
          <span
            className={`font-bold ${score > 0 ? "text-success" : "text-error"}`}
          >
            Score: {score}
          </span>
        </div>

        <div
          className="h-96 w-96 rounded-2xl shadow-md"
          style={{ backgroundColor: color }}
        />

        {/* Button Group */}
        <div className="w-full grid grid-cols-3 place-content-stretch gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={(event) => handleClick(event)}
              value={option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
