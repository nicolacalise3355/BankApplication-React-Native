module.exports = {
    preset: 'react-native',
    verbose: true,
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
    }
};