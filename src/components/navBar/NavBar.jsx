import Links from "./links/Links"

const NavBar= () => {
    return (
        <div className="flex items-center justify-between h-23 p-5">
            <div className="text-2xl font-sans text-gray-300 font-bold">
                Happy Tech
            </div>
            <Links />
        </div>
    )
}

export default NavBar