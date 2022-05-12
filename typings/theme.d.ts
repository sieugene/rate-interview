import {CustomizeOptions} from '../src/@app';

// Theme global declaration
declare module '@emotion/react' {
  interface Theme extends CustomizeOptions {}
}
