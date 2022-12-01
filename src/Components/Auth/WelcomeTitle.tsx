import { NICE_WORK } from "../../Assets/Constants/Constants";
import { getWelcomeTitle } from "../../Services/Login";

interface WelcomeTitleProps {
  username: string;
}
export default function WelcomeTitle({ username }: WelcomeTitleProps) {
  return (
    <div className="text-center">
      <span className="animate-charcter">{getWelcomeTitle()}</span>
      <br />
      <span className="animate-charcter">{username}</span>
      <br />
      <span className="animate-charcter">{NICE_WORK}</span>
    </div>
  );
}
