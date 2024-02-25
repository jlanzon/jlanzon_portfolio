import "./App.css";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/moving-border";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";

function App() {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            rotate={40}
            className="sticky rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <g transform="translate(481.33161118933765 334.8539983612887)">
              <path
                d="M107.9 -131.6C132.4 -83.4 139.7 -41.7 153.9 14.1C168 70 189 140 164.5 158.8C140 177.5 70 145 -0.4 145.4C-70.7 145.7 -141.4 178.9 -185.6 160.2C-229.8 141.4 -247.4 70.7 -234.1 13.3C-220.7 -44.1 -176.5 -88.2 -132.3 -136.3C-88.2 -184.5 -44.1 -236.7 -1.2 -235.6C41.7 -234.4 83.4 -179.8 107.9 -131.6"
                fill="red"
              ></path>
            </g>
          </svg>
          {/* <svg
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            className="sticky"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <g transform="translate(471.31792261952955 297.926995151902)">
              <path
                d="M200 -162.4C246.8 -100.8 263.8 -18.4 240.5 43.4C217.3 105.2 153.8 146.3 81.7 188.2C9.5 230 -71.2 272.7 -147.1 255.4C-223.1 238 -294.4 160.7 -293.5 88.7C-292.6 16.7 -219.6 -50.1 -158.7 -114.9C-97.7 -179.6 -48.9 -242.3 13.9 -253.4C76.6 -264.4 153.2 -223.9 200 -162.4"
                fill="black"
              ></path>
            </g>
          </svg> */}
          <div>
            <p>My name is</p>
            <TextGenerateEffect words="Joseph M Lanzon" />
            <p className="py-6">I am a lead full stack web developer</p>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Get in Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
