import React, { useState } from "react";
import FileList from "../components/file-server/FileList";
import FileUpload from "../components/file-server/FileUpload";

const FileServerPage: React.FC = () => {
  const [files, setFiles] = useState<string[]>([]);

  const handleFileUpload = (file: File) => {
    // Simulating a file upload and adding it to the list of files
    setFiles((prevFiles) => [...prevFiles, file.name]);
  };

  // TODO: GIT STASH the changes and create a file-server func branch

  return (
    <div className="file-sever-page bg-primary text-fg-primary p-6">
      <h1 className="text-3xl font-bold mb-6">File Server</h1>
      <FileUpload onUpload={handleFileUpload} />
      <FileList files={files} />
    </div>
  );
};

export default FileServerPage;
