// FOR GITUI TESTING

import React from "react";

import Button from "../components/buttons/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFileDownload,
//   faFileUpload,
// } from "@fortawesome/free-solid-svg-icons";
import {
  faLinux,
  faFedora,
  faUbuntu,
  faDocker,
  faGithub,
  faRust,
} from "@fortawesome/free-brands-svg-icons";

const faBrandIcons = [faLinux, faFedora, faUbuntu, faDocker, faRust, faGithub];

const HomePage = () => {
  return (
    <div className="bg-pink-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-black opacity-95 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome to PodFiles!
                </h1>
                <p>Your Superb File-Server</p>
                <Button variant="primary">Get started</Button>
              </div>
              <div>
                {/* <FontAwesomeIcon icon={faFileUpload} size="3x" /> */}
                {/* <FontAwesomeIcon icon={faFileDownload} size="3x" /> */}
                {/* <FontAwesomeIcon */}
                {/*   icon={[faDocker, faGithub, faRust]} */}
                {/*   size="3x" */}
                {/*   // style={{ color: "#74C0FC" }} */}
                {/* /> */}
                <div className="mt-4">
                  {faBrandIcons.map((icon, index) => (
                    <FontAwesomeIcon
                      className="mx-2"
                      key={index}
                      icon={icon}
                      size="3x"
                      style={{ color: "#FCE7F3" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
