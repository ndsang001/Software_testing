module.exports = {
    testEnvironment: "node",
    collectCoverage: true,
    collectCoverageFrom: ["**/*.js", "!**/.internal/**"],
    coverageDirectory: "coverage",
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
};