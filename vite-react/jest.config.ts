import type { Config } from "@jest/types"
import { compilerOptions } from "./tsconfig.json"
import { pathsToModuleNameMapper } from "ts-jest/utils"
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: "<rootDir>/"
})

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "node_modules/react/.+\\.(j|t)sx?$": "ts-jest"
  },
  transformIgnorePatterns: ["node_modules/(?!react/.*)"],
  moduleNameMapper: {
    ".+\\.(css|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
    ...paths
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
}

export default config
