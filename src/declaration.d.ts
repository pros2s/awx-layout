declare module '*.ttf';
declare module '*.otf';

declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';

  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
