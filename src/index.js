import { useState } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import App from "./App"

function Overlay() {
  const [ready, set] = useState(false)
  return (
    <>
      <App />
      <div className="dot" />
      <div className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}>
        <div className="stack" style={{ fontFamily: "MyFont" }}>
          <button onClick={() => set(true)}>Start</button>
        </div>
        {/* <Foo wilter date="26. July" year="2023" /> */}
        <h1 class="absolute top-10 text-9xl font-extrabold text-gray-900 " style={{ fontFamily: "MyFont" }}>
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-[#a89e9d] from-[#5df54a]">Meinkraft - Alpha</span>
        </h1>
        <footer class=" rounded-lg shadow  absolute bottom-0 w-full" style={{ fontFamily: "MyFont" }}>
          <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
              <a href="https://jayeshbhushan.me/" class="flex items-center mb-4 sm:mb-0">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jayesh Bhushan</span>
              </a>
              <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="https://github.com/jayPreak" class="mr-4 hover:underline md:mr-6 ">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jayPreak" class="mr-4 hover:underline md:mr-6">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jayesh-bhushan-587616200/" class="mr-4 hover:underline md:mr-6 ">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:jayesh.preak2003@gmail.com" class="hover:underline">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://jayeshbhushanme/" class="hover:underline">
                JayeshBhushan™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  )
}

createRoot(document.getElementById("root")).render(<Overlay />)
