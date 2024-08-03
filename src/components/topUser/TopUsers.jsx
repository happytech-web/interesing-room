import SingleUser from "./singleUser/SingleUser";

const TopUsers = () => {
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
          <SingleUser
            user={{
              name: "Neil",
              img: "/AnonymousUser.avif",
              email: "neil@gmail.com",
              activity: "8",
            }}
          />
          <SingleUser
            user={{
              name: "Neil",
              img: "/AnonymousUser.avif",
              email: "neil@gmail.com",
              activity: "8",
            }}
          />
          <SingleUser
            user={{
              name: "Neil",
              img: "/AnonymousUser.avif",
              email: "neil@gmail.com",
              activity: "8",
            }}
          />
          <SingleUser
            user={{
              name: "Neil",
              img: "/AnonymousUser.avif",
              email: "neil@gmail.com",
              activity: "8",
            }}
          />
          <SingleUser
            user={{
              name: "Neil",
              img: "/AnonymousUser.avif",
              email: "neil@gmail.com",
              activity: "8",
            }}
          />
          <SingleUser
            user={{
              name: "Neil",
              img: "/AnonymousUser.avif",
              email: "neil@gmail.com",
              activity: "8",
            }}
          />
          <SingleUser
            user={{
              name: "Neil",
              img: "/AnonymousUser.avif",
              email: "neil@gmail.com",
              activity: "8",
            }}
          />
        </ul>
      </div>
    </div>
  );
};

export default TopUsers;