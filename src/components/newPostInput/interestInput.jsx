import { addInterest, addStory } from "@/lib/action";

const InterestInput = () => {
  return (
    <div>
      <form action={addInterest} className="flex items-center">
        <div class="flex flex-col gap-3 bg-gray-700 rounded-xl items-center p-3 w-full">
          <input
            type="text"
            placeholder="title"
            name="title"
            className="rounded-md w-5/6 p-2"
          />
          <input
            type="text"
            placeholder="desc"
            name="desc"
            className="rounded-md w-5/6 h-20 text-start p-2"
          />
          <input
            type="text"
            placeholder="image url"
            name="img"
            className="rounded-md w-5/6 p-2"
          />
          <button class="bg-blue-600 text-white rounded-xl p-3">Create new Interest Room</button>
        </div>
      </form>
    </div>
  );
};

export default InterestInput;
