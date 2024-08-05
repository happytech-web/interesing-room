import { handleLogout } from "@/lib/action";
import NavItem from "./navItem/NavItem";
import { auth } from "@/lib/auth";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Interests",
    path: "/interests",
  },
];

const Links = async () => {
  // temp
  const session = await auth();
  const isAdmin = true;

  return (
    <div>
      <div className="flex gap-20 h-10">
        {links.map((link) => {
          return <NavItem item={link} key={link.title}/>;
        })}

        {session ? (
          <>
            {session.user?.isAdmin && <NavItem item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className="flex items-center text-gray-300 font-sans text-lg bg-blue-700 p-3 rounded-3xl font-bold">Logout</button>
            </form>
          </>
        ) : (
          <NavItem item={{ title: "Login", path: "/login" }} />
        )}
      </div>
    </div>
  );
};

export default Links;
