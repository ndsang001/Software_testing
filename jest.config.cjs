const { execSync } = require("child_process");

// Function to get files that are triggered (changed, added, or tested)
const getTriggeredFiles = () => {
    try {
        // Get the list of files changed in the branch compared to main
        const output = execSync("git diff --name-only origin/main").toString();

        // Filter files to include only relevant .js files
        return output
            .split("\n")
            .filter(file =>
                file.endsWith(".js") &&
                file.startsWith("src/") &&
                !file.startsWith("src/.internal/")
            );
    } catch (error) {
        console.error("Error detecting triggered files:", error.message);
        return [];
    }
};

module.exports = {
    testEnvironment: "node",
    collectCoverage: true,
    collectCoverageFrom: getTriggeredFiles(),
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "src/.internal/"
    ],
    transform: {
        "^.+\\.js$": "babel-jest",
    },
};