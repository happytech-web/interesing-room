import Image from "next/image";

const ThemeDesc = ({ theme }) => {
  return (
    <div className="flex bg-gray-800 h-full rounded-lg gap-8">
      <div className="flex-1 relative h-full rounded-lg">
        <Image
          src={theme.img}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col p-4 gap-5 overflow-auto">
        <div className="tracking-widest font-black text-4xl text-gray-300 font-sans">{theme.title}</div>
        <hr className="border-gray-700"/>
        <div className="tracking-normal text-lg font-normal text-gray-300 font-sans">{theme.desc}</div>
      </div>
    </div>
  );
};
export default ThemeDesc;
