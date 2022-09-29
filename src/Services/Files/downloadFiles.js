function saveFile(fileType, fileLocation, fileName) {
  const fileTypeSource = getFileTypeSource(fileType);
  const linkSource = fileTypeSource + fileLocation;
  const downloadLink = document.createElement("a");
  const fileExtension = getFileExtension(fileType);
  const name = `${fileName}.${fileExtension}`;
  downloadLink.href = linkSource;
  downloadLink.download = name;
  downloadLink.click();
}

function getFileTypeSource(fileType) {
  switch (fileType) {
    case "image":
      return "data:image/";
    case "pdf":
      return "data:application/pdf;base64,";
    default:
      return "data:image/";
  }
}

function getFileExtension(fileType) {
  switch (fileType) {
    case "image":
      return "png";
    case "pdf":
      return "pdf";
    default:
      return "png";
  }
}

export { saveFile };
