import Image from "next/image";
import Link from "next/link";

const InterestCard = ({title, img, desc, slug}) => {
  return (
    <div className="bg-neutral-900 flex flex-col gap-3 items-center p-3 mb-5 rounded-lg shadow-xl h-2/3 min-h-96">
      <div className="flex-4 relative w-full h-full max-w-sm">
        <Image
          src={img}
          alt="example"
          fill
          className="object-fill rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 items-center">
        <h1 className="text-gray-300 tracking-widest font-black text-l">
          {title}
        </h1>
        <p className="text-gray-400 tracking-normal font-normal">
          {desc}
        </p>
        <Link
          className="underline font-normal font-sans text-gray-500"
          href={`/interests/${slug}`}
        >
          DETAIL
        </Link>
      </div>
    </div>
  );
};

export default InterestCard;
