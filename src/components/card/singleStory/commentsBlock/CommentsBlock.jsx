import { getComments, getUserByEmail } from "@/lib/data";
import SingleComment from "./singleComment/SingleComment";
import { auth } from "@/lib/auth";
import { addComment } from "@/lib/action";

// const comments = [
//   { content: "I'm gonna say something here" },
//   { content: "I'm gonna say something here" },
//   { content: "I'm gonna say something here" },
//   { content: "I'm gonna say something here" },
//   { content: "I'm gonna say something here" },
// ];
const CommentsBlock = async ({ storyId, interestId }) => {
  const info = await auth();
  const user_info = info.user;
  const user = await getUserByEmail(user_info.email)
  const comments = await getComments(storyId);
  return (
    <div className="flex flex-col gap-4 bg-gray-900">
      <h1 className="font-sans text-white text-3xl font-bold tracking-wide h-8 p-3">
        Comments
      </h1>
      <ul className="rounded-xl flex flex-col gap-3 p-3 divide-y divide-gray-700">
        {comments.map((comment) => {
          return (
            <SingleComment
              comment={{ content: comment.content, userId: comment.userId }}
            />
          );
        })}
      </ul>
      <form action={addComment}>
        <input type="hidden" value={user._id} name="userId"/>
        <input type="text" placeholder="write your comment" name="content"/>
        <input type="hidden" value={storyId} name="storyId"/>
        <input type="hidden" value={interestId} name="interestId"/>
        <button>send</button>
      </form>
    </div>
  );
};

export default CommentsBlock;
