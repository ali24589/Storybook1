import type {Config} from '@jest/types'

const config:Config.InitialOptions={
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  verbose: true

}

export default config