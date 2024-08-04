import { getUser } from "@/lib/data"

const PostUser = async ({userId}) => {
    const user = await getUser(userId)
    return (
        <div className="flex flex-col">
            <span className="font-sans text-gray-500 text-lg">
                Author
            </span>
            <span className="font-sans text-gray-400 text-lg">
                {user.username}
            </span>
        </div>
    )
}

export default PostUser