import SingleStory from "@/components/card/singleStory/SingleStory";
import ThemeDesc from "@/components/themeDesc/ThemeDesc";
import TopUsers from "@/components/topUser/TopUsers";

const stories = [
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
    img: "/About.jpg",
  },
  {
    title: "Test",
    desc: "desc",
  },
];

const SingleInterest = () => {
  return (
    <div className="flex flex-col gap-10 rounded-xl">
      <div className="flex h-96 gap-10">
        <div className="flex-1 w-1/2 max-h-128 h-auto">
          <ThemeDesc
            theme={{ title: "Title", desc: "desc", img: "/About.jpg" }}
          />
        </div>
        <div className="flex-1 w-1/2 max-h-96 h-96">
          <TopUsers />
        </div>
      </div>
      <hr className="border-gray-700" />
      <div className="flex flex-col gap-5">
        {stories.map((story) => {
          return (
            <SingleStory
              post={{ title: story.title, desc: story.desc, img: story.img }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SingleInterest;
