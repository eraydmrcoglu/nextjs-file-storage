import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <div className="h-24 bg-gray-100 mt-24 flex flex-col justify-center items-center">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-3">
          <a
            href="https://github.com/eraydmrcoglu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-900 hover:text-gray-700" size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/eraydemircioglu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-gray-900 hover:text-gray-700"
              size={24}
            />
          </a>
        </div>
      </div>
      <div className="mt-2 text-gray-500 text-xs">
        © {new Date().getFullYear()} FileDrive. All Rights Reserved.
      </div>
    </div>
  );
}
