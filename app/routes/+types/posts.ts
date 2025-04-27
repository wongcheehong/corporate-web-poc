import type { MetaArgs as BaseMetaArgs } from 'react-router';
import type { Post } from '~/types/post';

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
