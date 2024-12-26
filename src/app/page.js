import { useSession } from "next-auth/react";


export default function Home() {
  
  const {data: session, status} = useSession()

  return (
    <div>
      <div>Name: <span>{session?.user?.name}</span></div>
      <div>Email: <span>{session?.user?.email}</span></div>
    </div>
  );
}
