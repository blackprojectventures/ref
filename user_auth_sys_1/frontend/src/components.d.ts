/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface PDashboard {}
  interface PLogin {}
  interface PRegister {}
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLPDashboardElement extends Components.PDashboard, HTMLStencilElement {}
  var HTMLPDashboardElement: {
    prototype: HTMLPDashboardElement;
    new (): HTMLPDashboardElement;
  };

  interface HTMLPLoginElement extends Components.PLogin, HTMLStencilElement {}
  var HTMLPLoginElement: {
    prototype: HTMLPLoginElement;
    new (): HTMLPLoginElement;
  };

  interface HTMLPRegisterElement extends Components.PRegister, HTMLStencilElement {}
  var HTMLPRegisterElement: {
    prototype: HTMLPRegisterElement;
    new (): HTMLPRegisterElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'p-dashboard': HTMLPDashboardElement;
    'p-login': HTMLPLoginElement;
    'p-register': HTMLPRegisterElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface PDashboard {}
  interface PLogin {}
  interface PRegister {}

  interface IntrinsicElements {
    'app-root': AppRoot;
    'p-dashboard': PDashboard;
    'p-login': PLogin;
    'p-register': PRegister;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'p-dashboard': LocalJSX.PDashboard & JSXBase.HTMLAttributes<HTMLPDashboardElement>;
      'p-login': LocalJSX.PLogin & JSXBase.HTMLAttributes<HTMLPLoginElement>;
      'p-register': LocalJSX.PRegister & JSXBase.HTMLAttributes<HTMLPRegisterElement>;
    }
  }
}


