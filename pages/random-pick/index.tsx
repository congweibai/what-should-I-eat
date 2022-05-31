import type { AppProps } from "next/app";
import { useState } from "react";
import UserInputForm from "../components/shared-compoents/UserInputForm";
import { TrashIcon as TrashIconSolid } from "@heroicons/react/solid";

function getRandomArbitrary(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function RandomPick({ Component, pageProps }: AppProps) {
  const [options, setOptions] = useState<string[]>([]);
  const [hightIndex, setHightIndex] = useState<number>(-1);

  const addNewOption = (option: string) => {
    const newOptions = [...options, option];
    console.log(option);
    setOptions(newOptions);
  };

  const deleteOption = (index: number) => {
    const optionArray = [...options];
    optionArray.splice(index, 1);
    console.log("Deleting...", index);
    setHightIndex(-1);
    setOptions(optionArray);
  };

  const [isPicking, setIsPicking] = useState<boolean>(false);
  const pickOneFromOptions = async () => {
    const choicesLength = options.length;
    setIsPicking(true);
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    let hasFinished = false;
    while (!hasFinished) {
      for (let i = 0; i < 6 * choicesLength; i++) {
        setHightIndex(getRandomArbitrary(0, choicesLength));
        if (i < (6 * choicesLength) / 2) {
          await delay(120);
        } else if (i < ((6 * choicesLength) / 2) * 6) {
          await delay(220);
        } else {
          await delay(300);
        }
      }
      hasFinished = true;
    }
    setIsPicking(false);
  };

  return (
    <div className='px-2'>
      Let's get pick by the computer!
      <UserInputForm
        className='my-2'
        addNewOption={addNewOption}
      ></UserInputForm>
      <div className='mt-2 flex justify-end'>
        <button
          disabled={options.length < 2 || isPicking}
          onClick={() => pickOneFromOptions()}
          type='button'
          className='ml-3 inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-75 disabled:cursor-not-allowed'
        >
          Pick One!
        </button>
      </div>
      Current options:
      <ul className='flex-1 pb-4 space-y-1'>
        {options.map((option, index) => (
          <li
            key={index + option}
            className={`group flex justify-between items-center px-2 py-2 text-sm font-medium rounded-md text-indigo-100 ${
              index === hightIndex
                ? "bg-indigo-800 text-white"
                : "bg-indigo-400"
            }`}
          >
            <span>
              {index + 1}: {option}{" "}
            </span>
            <button
              onClick={() => deleteOption(index)}
              type='button'
              className='ml-3 inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <TrashIconSolid className='h-5 w-5' aria-hidden='true' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RandomPick;
