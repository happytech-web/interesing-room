import Image from "next/image";

const SingleUser = ({ user }) => {
  return (
    <li className="py-3 sm:py-4">
      <div class="flex items-center bg-sky-700 p-3 rounded-lg shadow-xl">
        <div class="flex-shrink-0">
          <Image
            class="rounded-full"
            src={user.img}
            alt="image"
            width={32}
            height={32}
          />
        </div>
        <div class="flex-1 min-w-0 ms-4">
          <p class="text-sm font-medium text-gray-300 truncate dark:text-white">
            {user.name}
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            {user.email}
          </p>
        </div>
        <div class="rounded-md p-3 bg-indigo-700 inline-flex items-center text-base font-semibold text-gray-300 dark:text-white">
          LV.{user.activity}
        </div>
      </div>
    </li>
  );
};
export default SingleUser;
