import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      //   <div className="">
      //     Hello,<span className="font-bold"> {session.user.name}</span>
      //     {"  "}
      //     <button className="btn btn-primary" onClick={() => signOut()}>
      //       Sign out
      //     </button>
      //   </div>

      <div className="flex items-center">
        hello, <span className="font-bold">{session.user.name}</span>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={session.user.image} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                href={
                  session.user.email === "kheloindiaproject@gmail.com"
                    ? "/admin"
                    : "/user/" + session.user.email
                }
                className="justify-between"
              >
                Profile
              </Link>
            </li>
            <li>
              <a onClick={() => signOut()}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="btn btn-primary">
      <button onClick={() => signIn("google")}>Sign in</button>
    </div>
  );
}
