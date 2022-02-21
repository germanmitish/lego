declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module 'random-words';


declare module '*.gltf' {
  const path: string;
  export default path;
}

declare module '*.glb' {
  const path: string;
  export default path;
}
