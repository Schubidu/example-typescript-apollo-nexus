import * as ts from 'typescript'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      IS_NOW: boolean;
    }
  }
}
