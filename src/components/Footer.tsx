import { useState } from "react"
import { Copy, Done, GitHub, Gmail, LinkedIn, Map, Phone } from "../assets/Icons"

function Footer() {
  const [copySuccess, setCopySuccess] = useState(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('anghy.ruz@gmail.com');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1000);
    } catch (err) {
      setCopySuccess(false);
      console.error('Failed to copy text: ', err);
    }
  }

  return (
    <footer className="min-h-32 py-4 border-t-2 border-teal-700 flex justify-center items-center gap-40 text-xl">
      <div>
        <ul className="flex flex-col gap-4 items-start">
          <li className="flex justify-center items-center gap-3">
            <span><Gmail></Gmail></span>
            <span className="text-white text-shadow-[0px_0px_8px] text-shadow-white">anghy.ruz@gmail.com</span>
            {
              copySuccess ? <span><Done></Done></span> : <span className="cursor-pointer" onClick={() => copyEmail()}><Copy></Copy></span>
            }
          </li>
          <li className="flex justify-center items-center gap-3">
            <span><Phone></Phone></span>
            <span className="text-white text-shadow-[0px_0px_8px] text-shadow-white">+56 9 6614 6211</span>
          </li>
          <li className="flex justify-center items-center gap-3">
            <span><Map></Map></span>
            <span className="text-white text-shadow-[0px_0px_8px] text-shadow-white">Los Ángeles, Chile</span>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-4 items-start">
          <li className="flex justify-center items-center gap-3">
            <span>
              <GitHub></GitHub>
            </span>
            <a className="text-white text-shadow-[0px_0px_8px] text-shadow-white border-b-2 border-teal-700 hover:border-teal-400" href="https://github.com/Anghy73" target="_blank">GitHub</a>
          </li>
          <li className="flex justify-center items-center gap-3">
            <span><LinkedIn></LinkedIn></span>
            <a className="text-white text-shadow-[0px_0px_8px] text-shadow-white border-b-2 border-teal-700 hover:border-teal-400" href="https://www.linkedin.com/in/andy-alberto-ruz-varela-1a17a52a4/" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer