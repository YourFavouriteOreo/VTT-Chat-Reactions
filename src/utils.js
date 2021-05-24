import DirectoryPicker from "./lib/DirectoryPicker.js";
import logger from "./logger.js";

const existingFiles = new Set();

const utils = {
  fileExistsUpdate: (fileList) => {
    const targetFiles = fileList.filter((f) => !existingFiles.has(f));
    for (const file of targetFiles) {
      existingFiles.add(file);
    }
  },

  generateCurrentFiles: async (directoryPath) => {
    logger.debug(`Checking for files in ${directoryPath}...`);
    const dir = DirectoryPicker.parse(directoryPath);
    const fileList = await DirectoryPicker.browse(dir.activeSource, dir.current, { bucket: dir.bucket });
    utils.fileExistsUpdate(fileList.files);
    
  },
  getFileUrl: async (directoryPath, filename) => {
    let uri;
    try {
      let dir = DirectoryPicker.parse(directoryPath);
      if (dir.activeSource == "data") {
        // Local on-server file system
        uri = dir.current + "/" + filename;
      } else if (dir.activeSource == "forgevtt") {
        const status = ForgeAPI.lastStatus || await ForgeAPI.status();
        const userId = status.user;
        uri = "https://assets.forge-vtt.com/" + userId + "/" + dir.current + "/" + filename;
      } else {
        // S3 Bucket
        uri =
          game.data.files.s3.endpoint.protocol +
          "//" +
          dir.bucket +
          "." +
          game.data.files.s3.endpoint.hostname +
          "/" +
          dir.current +
          "/" +
          filename;
      }
    } catch (exception) {
      throw new Error(
        'Unable to determine file URL for directoryPath"' + directoryPath + '" and filename"' + filename + '"'
      );
    }
    return uri;
  },
};

export default utils;