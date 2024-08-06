import {getSession} from "next-auth/react"
import SingleStory from "@/components/card/singleStory/SingleStory";
import StoryInput from "@/components/newPostInput/storyInput";
import ThemeDesc from "@/components/themeDesc/ThemeDesc";
import TopUsers from "@/components/topUser/TopUsers";
import { getInterest, getStories } from "@/lib/data";
import { auth } from "@/lib/auth";

const stories = [
  {
    title: "Test",
    desc: "desc, I'm gonna say moreI'm gonna say moreI'm gonna say moreI'm gonna say moreI'm gonna say more",
    img: "/About.jpg",
  },
  {
    title: "Test",
    desc: "desc",
    img: "/About.jpg",
  },
  {
    title: "Test",
    desc: "desc",
    img: "/About.jpg",
  },
  {
    title: "Test",
    desc: "desc",
  },
];

const SingleInterest = async ({ params }) => {
  const info = await auth();
  const user = info.user;
  const { interestId } = params;
  const stories = await getStories(interestId);
  const curInterest = await getInterest(interestId);
  return (
    <div className="flex flex-col gap-10 rounded-xl">
      <div className="flex h-96 gap-10">
        <div className="flex-1 w-1/2 max-h-128 h-auto">
          <ThemeDesc
            theme={{
              title: curInterest.title,
              desc: curInterest.desc,
              img: curInterest.img,
            }}
          />
        </div>
        <div className="flex-1 w-1/2 max-h-96 h-96">
          <TopUsers users={curInterest.users} />
        </div>
      </div>
      <hr className="border-gray-700" />
      <StoryInput interestId={interestId}  userEmail={user.email} />
      <hr className="border-gray-700" />
      <div className="flex flex-col gap-5">
        {stories.map((story, key) => {
          return (
            <SingleStory
              post={{
                title: story.title,
                desc: story.desc,
                img: story.img,
                userId: story.userId,
                storyId: story._id,
                interestId: interestId,
              }}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SingleInterest;
