module.exports = {
  testPathIgnorePatters: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
    '!src/components/index.ts',
    '!src/components/Graphic/styles.ts',
    '!src/components/Graphic/index.tsx',
    '!src/components/WrapperPreview/index.tsx',
    '!src/components/WrapperPreview/styles.ts',
    '!src/pages/index.tsx',
    '!src/styles/global.ts',
    '!src/API/index.ts',
    '!src/types/WheaterApiResponse.ts',
    '!src/SEO.tsx',
    '!src/contexts/weather.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePath: ['<rootDir>/src/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
