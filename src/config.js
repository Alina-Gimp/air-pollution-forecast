import ApplicationModes from './settings/ApplicationModes';

const mode = ApplicationModes.MOCK;

const isMock = () => mode === ApplicationModes.MOCK;
const isDev = () => mode === ApplicationModes.DEV;
const isProd = () => mode === ApplicationModes.PROD;

export {
  isProd,
  isDev,
  isMock,
};
