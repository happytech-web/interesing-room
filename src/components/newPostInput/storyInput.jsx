import { addStory } from "@/lib/action";
import { getUserByEmail } from "@/lib/data";

const StoryInput = async ({interestId, userEmail}) => {
  const user = await getUserByEmail(userEmail);
  return (
    <div>
      <form action={addStory}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="image url" name="img" />
        <input type="hidden" value={interestId} name="interestId" />
        <input type="hidden" value={user._id} name="userId" />
        <button>Create</button>
      </form>
    </div>
  );
};

export default StoryInput