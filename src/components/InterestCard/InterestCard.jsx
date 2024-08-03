import Image from "next/image";
import Link from "next/link";

const InterestCard = () => {
  return (
    <div
      className="bg-neutral-900 flex flex-col gap-3 items-center p-3 mb-5 rounded-lg shadow-xl h-2/3 min-h-96" 
    >
      <div className="flex-4 relative w-full h-full max-w-sm">
        <Image
          src="https://images.pexels.com/photos/21739955/pexels-photo-21739955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="example"
          fill
          className="object-fill rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 items-center">
        <h1 className="text-gray-300 tracking-widest font-black text-l">
          Title
        </h1>
        <p className="text-gray-400 tracking-normal font-normal">description</p>
        <Link className="underline font-normal font-sans text-gray-500" href="/interests/stories" >
        DETAIL
        </Link>
      </div>
    </div>
  );
};

export default InterestCard;
