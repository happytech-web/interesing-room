import Image from "next/image";
import { Suspense } from "react";
import PostUser from "@/components/postUser/PostUser";

const SingleStory = ({ post }) => {
  return (
      <div className="flex bg-gray-800 h-full rounded-lg gap-8">
        {post.img && (
          <div className="flex-1 relative h-[900px] rounded-lg">
            <Image src={post.img} alt="" fill className="object-cover" />
          </div>
        )}
        <div className="flex-1 flex flex-col p-4 gap-5 overflow-auto">
          <div className="flex justify-between">
            <div className="tracking-widest font-black text-4xl text-gray-300 font-sans">
              {post.title}
            </div>
            <div className="flex h-16 p-2 gap-5">
              <Image
                src="/AnonymousUser.avif"
                alt=""
                width={50}
                height={50}
                className="object-cover rounded-full"
              />
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser />
              </Suspense>
              <div className="flex flex-col">
                <span className="font-sans text-gray-500 text-lg">
                  Published
                </span>
                <span className="font-sans text-gray-300 text-lg">
                  2024 01 01
                </span>
              </div>
            </div>
          </div>
          <hr className="border-gray-700" />
          <div className="tracking-normal text-lg font-normal text-gray-300 font-sans">
            {post.desc}
          </div>
        </div>
      </div>
  );
};

export default SingleStory;
