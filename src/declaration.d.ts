declare module '*.ttf';
declare module '*.otf';
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
