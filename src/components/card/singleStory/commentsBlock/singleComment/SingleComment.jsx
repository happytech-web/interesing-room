import Image from "next/image";
import { Suspense } from "react";
import PostUser from "@/components/postUser/PostUser";
import { getUser } from "@/lib/data";

const SingleComment = async ({ comment }) => {
  const user = await getUser(comment.userId)
  return (
    <li className="flex justify-start">
      <div className="flex h-16 p-2 gap-5">
        <Image
          src={user.img}
          alt=""
          width={50}
          height={50}
          className="object-cover rounded-full"
        />
        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={comment.userId}/>
        </Suspense>
      </div>
      <div className="font-sans text-gray-300 text-lg p-3">{comment.content}</div>
    </li>
  );
};

export default SingleComment;
