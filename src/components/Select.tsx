/** @format */
//@ts-nocheck
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { RadioGroup, Radio } from "@nextui-org/react";

function shuffleArray(originalArray) {
  const array = [...originalArray];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Select({ question: { options } }) {
  const [opts, setOpts] = useState([]);
  const [opt, setOpt] = useState("");

  useEffect(() => {
    if (options) {
      const shuffledOptions = shuffleArray(options);
      setOpts(shuffledOptions);
      setOpt(shuffledOptions[0]);
    }
  }, [options]);

  return (
    <Box
      p={4}
      className="col-span-3 flex flex-col h-full mr-8 ml-4 space-y-4 items-center justify-center"
    >
      <div className="w-full px-4 py-16">
        <div className="mx-auto w-full max-w-md">
          <RadioGroup value={opt} onChange={setOpt}>
            <RadioGroup.Label className="sr-only">
              Server size
            </RadioGroup.Label>
            <div className="space-y-2">
              {opts.map((opt) => (
                <RadioGroup.Option
                  key={opt}
                  value={opt}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                        : ""
                    }
                  ${
                    checked
                      ? "bg-sky-900/75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {opt}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked
                                  ? "text-sky-100"
                                  : "text-gray-500"
                              }`}
                            ></RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </Box>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
