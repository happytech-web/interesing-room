import Image from "next/image"

const AboutPage = () => {
    return (
    <div className="flex flex-row gap-20 items-center h-150 w-100 p-40">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="tracking-widest font-black text-7xl text-white">About us</h1>
        <p className="tracking-normal text-2xl font-normal text-white">Share your hobbies, interests, moments.</p>
        <div className="flex gap-5 items-start justify-start">
          <button className="font-sans flex-1 bg-blue-700 p-5 cursor-pointer min-w-5 max-w-40 text-white rounded-lg">Learn More</button>
          <button className="font-sans flex-1 bg-gray-700 p-5 cursor-pointer min-w-5 max-w-40 text-white rounded-lg">Contact</button>
        </div>
      </div>
      <div className="flex-1 relative h-96">
        <Image
          src="/About.jpg"
          alt=""
          fill
          className="object-cover rounded-sm"
        />
      </div>
    </div>
    )
}

export default AboutPage