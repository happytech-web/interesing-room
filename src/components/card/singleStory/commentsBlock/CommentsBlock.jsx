import SingleComment from "./singleComment/SingleComment";

const comments = [
  { content: "I'm gonna say something here" },
  { content: "I'm gonna say something here" },
  { content: "I'm gonna say something here" },
  { content: "I'm gonna say something here" },
  { content: "I'm gonna say something here" },
];
const CommentsBlock = () => {
  return (
    <div className="flex flex-col gap-4 bg-gray-900">
        <h1 className="font-sans text-white text-3xl font-bold tracking-wide h-8 p-3">
            Comments
        </h1>
      <ul className="rounded-xl flex flex-col gap-3 p-3 divide-y divide-gray-700">
        {comments.map((comment) => {
          return <SingleComment comment={{ content: comment.content }} />;
        })}
      </ul>
    </div>
  );
};

export default CommentsBlock;
