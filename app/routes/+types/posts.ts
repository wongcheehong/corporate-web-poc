import type { MetaArgs as BaseMetaArgs } from "react-router";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export namespace Route {
  export type MetaArgs = BaseMetaArgs;
  export interface ClientLoaderArgs {
    params: Record<string, string>;
    request: Request;
  }
  export interface ComponentProps {
    loaderData: Post[];
  }
}
