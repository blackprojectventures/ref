/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PsPricing {
    'tier': string;
  }
}

declare global {


  interface HTMLPsPricingElement extends Components.PsPricing, HTMLStencilElement {}
  var HTMLPsPricingElement: {
    prototype: HTMLPsPricingElement;
    new (): HTMLPsPricingElement;
  };
  interface HTMLElementTagNameMap {
    'ps-pricing': HTMLPsPricingElement;
  }
}

declare namespace LocalJSX {
  interface PsPricing {
    'tier'?: string;
  }

  interface IntrinsicElements {
    'ps-pricing': PsPricing;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ps-pricing': LocalJSX.PsPricing & JSXBase.HTMLAttributes<HTMLPsPricingElement>;
    }
  }
}


