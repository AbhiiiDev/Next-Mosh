import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {

const session= await getServerSession(authOptions)
  return (
 <div>
  YO man,   
  <span className="font-bold">

  {
    session && session.user?.name
  }
  </span>
 </div>
  );
}
