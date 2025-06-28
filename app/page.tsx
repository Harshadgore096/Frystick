import Image from "next/image";
import BettingDashboard from './Landing/page'
import Login from "./login/page";

export default function Home() {
  return (
  <div>
    <Login/>
    <BettingDashboard/>
    </div>
  );
}
