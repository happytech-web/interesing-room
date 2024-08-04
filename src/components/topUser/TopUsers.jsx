import SingleUser from "./singleUser/SingleUser";
import { getUser } from "@/lib/data";

const TopUsers = async ({ users }) => {
  const usersList = [];
  for (const userId of users) {
    const user = await getUser(userId);
    usersList.push(user);
  }
  return (
    <div class="bg-slate-600 p-3 rounded-lg shadow-md h-96">
      <div class="flex items-center justify-between mb-4 bg-blue-950 p-4 rounded-xl shadow-xl">
        <h5 class="text-xl font-bold leading-none text-gray-300 dark:text-white">
          Active Roomer
        </h5>
        <a
          href="#"
          class="text-sm font-medium text-blue-500 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      <div class="flow-root overflow-auto flex-grow max-h-72">
        <ul role="list" class="">
          {usersList.map((user) => {
            return (
              <SingleUser
                user={{
                  name: user.username,
                  img: user.img,
                  email: user.email,
                  activity: 8,
                }}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TopUsers;
