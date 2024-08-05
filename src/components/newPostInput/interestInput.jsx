import { addInterest, addStory } from "@/lib/action";

const InterestInput = () => {
  return (
    <div>
      <form action={addInterest}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="image url" name="img" />
        <button>Create</button>
      </form>
    </div>
  );
};

export default InterestInput;
