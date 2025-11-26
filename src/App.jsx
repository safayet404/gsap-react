import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return <div className="text-red-600 text-3xl flex-center">App</div>;
};

export default App;
