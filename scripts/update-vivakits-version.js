const fs = require("fs").promises;
const path = require("path");

const packageName = "@vivakits/react-components";
const registryUrl = `https://registry.npmjs.org/${packageName}`;
async function updateVivakitsVersion() {
  try {
    const response = await fetch(registryUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch version for package: ${packageName}`);
    }

    const data = await response.json();
    const version = data["dist-tags"].latest;
    console.log(`Current Version of ${packageName} is ${version}`);
    const args = process.argv.slice(2);
    if (!args.length) {
      const dirPath = "../";
      const files = await fs.readdir(dirPath);
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = await fs.stat(filePath);
        if (stats.isDirectory() && file !== ".git" && file !== "scripts" && file !== ".husky") {
          const data = await fs
            .readFile(path.join(dirPath, filePath, `package.json`), "utf-8")
            .catch((error) => {
              throw error;
            });
          const packageJson = JSON.parse(data);
          const dependencies = packageJson.dependencies || {};
          if (dependencies[packageName]) {
            dependencies[packageName] = `^${version}`;
          } else {
            console.log(`${packageName} not found in the dependency`);
          }

          packageJson.dependencies = dependencies;
          await fs
            .writeFile(
              path.join(dirPath, filePath, "package.json"),
              JSON.stringify(packageJson, null, 2),
              "utf-8"
            )
            .catch((error) => {
              throw error;
            });
          console.log(
            `Updated package.json for directory: ${path.join(
              dirPath,
              filePath
            )}`
          );
        }
      }
    }
  } catch (error) {}
}
updateVivakitsVersion()
  .then((r) => console.log(`${packageName} updated successfully`))
  .catch((error) => console.error(error));
