import { useState } from "react";
import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/react/solid";

function UserInputForm({
  addNewOption,
}: {
  addNewOption: (option: string) => void;
}) {
  const [option, setOption] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitting", option);
    addNewOption(option);
    setOption("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label
            htmlFor='option'
            className='block text-sm font-medium text-gray-700'
          >
            Add option
          </label>
          <div className='mt-1 flex'>
            <input
              id='option'
              name='option'
              type='text'
              required
              value={option}
              onChange={(e) => setOption(e.target.value)}
              placeholder='KFC?'
              className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            <button
              type='submit'
              className='ml-3 inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <PlusSmIconSolid className='h-5 w-5' aria-hidden='true' />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserInputForm;
