declare module "*.module.css";
declare module "*.css";

declare module '*.less' {
  const resource: {[key: string]: string};
  export = resource;
}