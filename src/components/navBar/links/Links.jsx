import NavItem from "./navItem/NavItem";

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

const Links = () => {
  // temp
  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className="flex gap-20 h-10">
        {links.map((link) => {
          return <NavItem item={link} key={link.title}/>;
        })}

        {session ? (
          <>
            {isAdmin && <NavItem item={{ title: "Admin", path: "/admin" }} />}
            <button className="flex items-center text-gray-300 font-sans text-lg bg-blue-700 p-3 rounded-3xl font-bold">Logout</button>
          </>
        ) : (
          <NavItem item={{ title: "Login", path: "/login" }} />
        )}
      </div>
    </div>
  );
};

export default Links;
