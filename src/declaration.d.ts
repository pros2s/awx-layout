declare module '*.ttf';
declare module '*.otf';

declare module '*.svg?react' {
  import { ReactElement, SVGProps } from 'react';

  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
