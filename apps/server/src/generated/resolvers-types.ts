import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Construction = {
  __typename?: 'Construction';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: Scalars['String'];
  parts?: Maybe<Array<Maybe<ConstructionPart>>>;
};

export type ConstructionInput = {
  name?: InputMaybe<Scalars['String']>;
  owner: Scalars['String'];
};

export type ConstructionPart = {
  __typename?: 'ConstructionPart';
  construction?: Maybe<Construction>;
  constructionId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  part?: Maybe<Part>;
  partId?: Maybe<Scalars['ID']>;
};

export type ConstructionPartInput = {
  constructionId: Scalars['ID'];
  partId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createConstruction: Construction;
  createConstructionPart: ConstructionPart;
  createPart: Part;
  deleteConstruction: Construction;
  deleteConstructionPart: ConstructionPart;
  deletePart: Part;
  updateConstruction: Construction;
  updateConstructionPart: ConstructionPart;
  updatePart: Part;
};


export type MutationCreateConstructionArgs = {
  input?: InputMaybe<ConstructionInput>;
};


export type MutationCreateConstructionPartArgs = {
  input?: InputMaybe<ConstructionPartInput>;
};


export type MutationCreatePartArgs = {
  input?: InputMaybe<PartInput>;
};


export type MutationDeleteConstructionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteConstructionPartArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePartArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateConstructionArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ConstructionInput>;
};


export type MutationUpdateConstructionPartArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ConstructionPartInput>;
};


export type MutationUpdatePartArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<PartInput>;
};

export type Part = {
  __typename?: 'Part';
  constructionParts?: Maybe<Array<Maybe<ConstructionPart>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  volume: Scalars['Int'];
};

export type PartInput = {
  name: Scalars['String'];
  volume: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  constructionByOwner: Array<Construction>;
  constructionByPk: Construction;
  constructionPartByPk: ConstructionPart;
  partByPk: Part;
  parts: Array<Part>;
};


export type QueryConstructionByOwnerArgs = {
  owner: Scalars['ID'];
};


export type QueryConstructionByPkArgs = {
  id: Scalars['ID'];
};


export type QueryConstructionPartByPkArgs = {
  id: Scalars['ID'];
};


export type QueryPartByPkArgs = {
  id: Scalars['ID'];
};


export type QueryPartsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Construction: ResolverTypeWrapper<Construction>;
  ConstructionInput: ConstructionInput;
  ConstructionPart: ResolverTypeWrapper<ConstructionPart>;
  ConstructionPartInput: ConstructionPartInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Part: ResolverTypeWrapper<Part>;
  PartInput: PartInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Construction: Construction;
  ConstructionInput: ConstructionInput;
  ConstructionPart: ConstructionPart;
  ConstructionPartInput: ConstructionPartInput;
  DateTime: Scalars['DateTime'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Part: Part;
  PartInput: PartInput;
  Query: {};
  String: Scalars['String'];
};

export type ConstructionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Construction'] = ResolversParentTypes['Construction']> = {
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstructionPart']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConstructionPartResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConstructionPart'] = ResolversParentTypes['ConstructionPart']> = {
  construction?: Resolver<Maybe<ResolversTypes['Construction']>, ParentType, ContextType>;
  constructionId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  part?: Resolver<Maybe<ResolversTypes['Part']>, ParentType, ContextType>;
  partId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createConstruction?: Resolver<ResolversTypes['Construction'], ParentType, ContextType, Partial<MutationCreateConstructionArgs>>;
  createConstructionPart?: Resolver<ResolversTypes['ConstructionPart'], ParentType, ContextType, Partial<MutationCreateConstructionPartArgs>>;
  createPart?: Resolver<ResolversTypes['Part'], ParentType, ContextType, Partial<MutationCreatePartArgs>>;
  deleteConstruction?: Resolver<ResolversTypes['Construction'], ParentType, ContextType, RequireFields<MutationDeleteConstructionArgs, 'id'>>;
  deleteConstructionPart?: Resolver<ResolversTypes['ConstructionPart'], ParentType, ContextType, RequireFields<MutationDeleteConstructionPartArgs, 'id'>>;
  deletePart?: Resolver<ResolversTypes['Part'], ParentType, ContextType, RequireFields<MutationDeletePartArgs, 'id'>>;
  updateConstruction?: Resolver<ResolversTypes['Construction'], ParentType, ContextType, RequireFields<MutationUpdateConstructionArgs, 'id'>>;
  updateConstructionPart?: Resolver<ResolversTypes['ConstructionPart'], ParentType, ContextType, RequireFields<MutationUpdateConstructionPartArgs, 'id'>>;
  updatePart?: Resolver<ResolversTypes['Part'], ParentType, ContextType, RequireFields<MutationUpdatePartArgs, 'id'>>;
};

export type PartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Part'] = ResolversParentTypes['Part']> = {
  constructionParts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstructionPart']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  constructionByOwner?: Resolver<Array<ResolversTypes['Construction']>, ParentType, ContextType, RequireFields<QueryConstructionByOwnerArgs, 'owner'>>;
  constructionByPk?: Resolver<ResolversTypes['Construction'], ParentType, ContextType, RequireFields<QueryConstructionByPkArgs, 'id'>>;
  constructionPartByPk?: Resolver<ResolversTypes['ConstructionPart'], ParentType, ContextType, RequireFields<QueryConstructionPartByPkArgs, 'id'>>;
  partByPk?: Resolver<ResolversTypes['Part'], ParentType, ContextType, RequireFields<QueryPartByPkArgs, 'id'>>;
  parts?: Resolver<Array<ResolversTypes['Part']>, ParentType, ContextType, Partial<QueryPartsArgs>>;
};

export type Resolvers<ContextType = any> = {
  Construction?: ConstructionResolvers<ContextType>;
  ConstructionPart?: ConstructionPartResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Part?: PartResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

