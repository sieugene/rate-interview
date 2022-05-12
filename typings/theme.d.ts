import {CustomizeOptions} from '@app/index';

// Theme global declaration
declare module '@emotion/react' {
  interface Theme extends CustomizeOptions {}
}
