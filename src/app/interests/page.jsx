import InterestCard from "@/components/InterestCard/InterestCard"
import { getInterests } from "@/lib/data"

const Interests = async () => {
    const interests = await getInterests()
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 mx-5 h-screen">
            {interests.map((interest) => {
                return (
                    <InterestCard title={interest.title} desc={interest.desc} img={interest.img} slug={interest._id}/>
                )
            })}
        </div>
    )
}

export default Interests