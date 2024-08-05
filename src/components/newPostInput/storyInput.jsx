import { addStory } from "@/lib/action";
import { getUserByEmail } from "@/lib/data";

const StoryInput = async ({ interestId, userEmail }) => {
  const user = await getUserByEmail(userEmail);
  return (
    <div>
      <form action={addStory}>
        <div className="flex flex-col gap-3 bg-gray-700 rounded-xl items-center p-3 w-full">
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
            className="h-16 rounded-md w-5/6 p-2"
          />
          <input
            type="text"
            placeholder="image url"
            name="img"
            className="rounded-md w-5/6 p-2"
          />
          <input
            type="hidden"
            value={interestId}
            name="interestId"
            className="rounded-md w-5/6"
          />
          <input
            type="hidden"
            value={user._id}
            name="userId"
            className="rounded-md w-5/6"
          />
          <button class="bg-blue-600 text-white rounded-xl p-3 font-sans">Create my story!</button>
        </div>
      </form>
    </div>
  );
};

export default StoryInput;
