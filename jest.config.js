export default {
  projects: [
    {
      displayName: 'client',
      testMatch: ['<rootDir>/client/**/*.{test,spec}.{ts,tsx}'],
      testEnvironment: 'jsdom',
      preset: 'ts-jest/presets/default-esm',
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/client/src/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },
      transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            useESM: true,
            tsconfig: {
              module: 'ESNext',
              jsx: 'react-jsx',
            },
          },
        ],
      },
      extensionsToTreatAsEsm: ['.ts', '.tsx'],
      setupFilesAfterEnv: ['<rootDir>/client/src/setupTests.ts'],
    },
  ],
  collectCoverageFrom: [
    'client/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!client/src/main.tsx',
    '!client/src/App.tsx',
  ],
};
