const fs = require('fs');
const path = require('path');

// Function to split camelCase or PascalCase into words and convert to lowercase with hyphens
const formatFilename = (filename) => {
  return filename
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Split camelCase or PascalCase into words
    .replace(/\s+/g, '-') // Replace spaces with hyphens (if any)
    .toLowerCase(); // Convert to lowercase
};

// Function to rename files in a directory
const renameFiles = (directory) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const fileStats = fs.statSync(filePath);

      // Skip directories
      if (fileStats.isDirectory()) {
        return;
      }

      // Split filename and extension
      const fileExt = path.extname(file);
      const fileNameWithoutExt = path.basename(file, fileExt);

      // Format the filename
      const newFileName = `${formatFilename(fileNameWithoutExt)}${fileExt}`;
      const newFilePath = path.join(directory, newFileName);

      // Rename the file
      fs.rename(filePath, newFilePath, (err) => {
        if (err) {
          console.error(`Error renaming file ${file}: ${err}`);
        } else {
          console.log(`Renamed: ${file} -> ${newFileName}`);
        }
      });
    });
  });
};

// Specify the directory containing your files
const targetDirectory = './lib'; // Replace with your directory path

// Run the script
renameFiles(targetDirectory);