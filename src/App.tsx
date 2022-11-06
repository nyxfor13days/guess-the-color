import { useRandomColor } from "./hooks/useRandomColor";
import { FC, useEffect, useState } from "react";

const App: FC = () => {
  const [color, setColor] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    setColor(useRandomColor());

    // TODO: Randomise the options and add the answer in it
    const createOptions = () => {
      const options = [];
      for (let i = 0; i < 3; i++) {
        options.push(useRandomColor());
      }
      return options;
    };

    setOptions(createOptions());
  }, []);

  console.log("color", color);
  console.log("options", options);

  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-6">
        <div
          className="h-96 w-96 rounded-2xl shadow-md"
          style={{ backgroundColor: color }}
        />

        {/* Button Group */}
        <div className="w-full flex justify-between gap-4">
          {options.map((option, index) => (
            <button key={index}>{option}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
