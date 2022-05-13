import { createStore, createLogger } from 'vuex';
import siteElements from './modules/siteElements';

const debug = false;

export default createStore({
  modules: {
    siteElements
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
