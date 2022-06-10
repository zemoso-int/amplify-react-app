import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PostMetaData = {
  readOnlyFields;
}

export declare class Post {
  readonly id: string;
  readonly name?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}