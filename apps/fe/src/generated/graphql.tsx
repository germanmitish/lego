import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  citext: any;
  timestamptz: any;
  uuid: any;
};

export type Construction = {
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

export type Part = {
  constructionParts?: Maybe<Array<Maybe<ConstructionPart>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  volume: Scalars['Int'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "auth.accounts" */
export type Auth_Accounts = {
  email?: Maybe<Scalars['citext']>;
  /** An object relationship */
  user: Users;
};

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type Auth_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Auth_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Accounts_Bool_Exp>>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.accounts". */
export type Auth_Accounts_Order_By = {
  email?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** select columns of table "auth.accounts" */
export enum Auth_Accounts_Select_Column {
  /** column name */
  Email = 'email'
}

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** mutation root */
export type Mutation_Root = {
  createConstruction: Construction;
  createConstructionPart: ConstructionPart;
  deleteConstruction: Construction;
  deleteConstructionPart: ConstructionPart;
  updateConstruction: Construction;
  updateConstructionPart: ConstructionPart;
};


/** mutation root */
export type Mutation_RootCreateConstructionArgs = {
  input?: InputMaybe<ConstructionInput>;
};


/** mutation root */
export type Mutation_RootCreateConstructionPartArgs = {
  input?: InputMaybe<ConstructionPartInput>;
};


/** mutation root */
export type Mutation_RootDeleteConstructionArgs = {
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootDeleteConstructionPartArgs = {
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootUpdateConstructionArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ConstructionInput>;
};


/** mutation root */
export type Mutation_RootUpdateConstructionPartArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ConstructionPartInput>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  constructionByOwner: Array<Construction>;
  constructionByPk: Construction;
  constructionPartByPk: ConstructionPart;
  partByPk: Part;
  parts: Array<Part>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAuth_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootConstructionByOwnerArgs = {
  owner: Scalars['ID'];
};


export type Query_RootConstructionByPkArgs = {
  id: Scalars['ID'];
};


export type Query_RootConstructionPartByPkArgs = {
  id: Scalars['ID'];
};


export type Query_RootPartByPkArgs = {
  id: Scalars['ID'];
};


export type Query_RootPartsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootAuth_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
  where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  /** An object relationship */
  account?: Maybe<Auth_Accounts>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  last_name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  account?: InputMaybe<Auth_Accounts_Bool_Exp>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  account?: InputMaybe<Auth_Accounts_Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type UserQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type UserQuery = { users_by_pk?: { id: any, avatar_url?: string | null, created_at: any, display_name?: string | null, first_name?: string | null, last_name?: string | null, account?: { email?: any | null } | null } | null };

export type ConstructionQueryVariables = Exact<{
  owner: Scalars['ID'];
}>;


export type ConstructionQuery = { constructionByOwner: Array<{ id: string, name: string, parts?: Array<{ partId?: string | null } | null> | null }> };

export type AddConstructionMutationVariables = Exact<{
  owner?: InputMaybe<Scalars['String']>;
}>;


export type AddConstructionMutation = { createConstruction: { name: string, id: string, created_at: any } };

export type PartsQueryVariables = Exact<{ [key: string]: never; }>;


export type PartsQuery = { parts: Array<{ id: string, name: string, volume: number }> };


export const UserDocument = gql`
    query User($user_id: uuid!) {
  users_by_pk(id: $user_id) {
    account {
      email
    }
    id
    avatar_url
    created_at
    display_name
    first_name
    last_name
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const ConstructionDocument = gql`
    query Construction($owner: ID!) {
  constructionByOwner(owner: $owner) {
    id
    name
    parts {
      partId
    }
  }
}
    `;

/**
 * __useConstructionQuery__
 *
 * To run a query within a React component, call `useConstructionQuery` and pass it any options that fit your needs.
 * When your component renders, `useConstructionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConstructionQuery({
 *   variables: {
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useConstructionQuery(baseOptions: Apollo.QueryHookOptions<ConstructionQuery, ConstructionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConstructionQuery, ConstructionQueryVariables>(ConstructionDocument, options);
      }
export function useConstructionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConstructionQuery, ConstructionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConstructionQuery, ConstructionQueryVariables>(ConstructionDocument, options);
        }
export type ConstructionQueryHookResult = ReturnType<typeof useConstructionQuery>;
export type ConstructionLazyQueryHookResult = ReturnType<typeof useConstructionLazyQuery>;
export type ConstructionQueryResult = Apollo.QueryResult<ConstructionQuery, ConstructionQueryVariables>;
export const AddConstructionDocument = gql`
    mutation AddConstruction($owner: String = "") {
  createConstruction(input: {owner: $owner}) {
    name
    id
    created_at
  }
}
    `;
export type AddConstructionMutationFn = Apollo.MutationFunction<AddConstructionMutation, AddConstructionMutationVariables>;

/**
 * __useAddConstructionMutation__
 *
 * To run a mutation, you first call `useAddConstructionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddConstructionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addConstructionMutation, { data, loading, error }] = useAddConstructionMutation({
 *   variables: {
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useAddConstructionMutation(baseOptions?: Apollo.MutationHookOptions<AddConstructionMutation, AddConstructionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddConstructionMutation, AddConstructionMutationVariables>(AddConstructionDocument, options);
      }
export type AddConstructionMutationHookResult = ReturnType<typeof useAddConstructionMutation>;
export type AddConstructionMutationResult = Apollo.MutationResult<AddConstructionMutation>;
export type AddConstructionMutationOptions = Apollo.BaseMutationOptions<AddConstructionMutation, AddConstructionMutationVariables>;
export const PartsDocument = gql`
    query Parts {
  parts {
    id
    name
    volume
  }
}
    `;

/**
 * __usePartsQuery__
 *
 * To run a query within a React component, call `usePartsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePartsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePartsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePartsQuery(baseOptions?: Apollo.QueryHookOptions<PartsQuery, PartsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PartsQuery, PartsQueryVariables>(PartsDocument, options);
      }
export function usePartsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PartsQuery, PartsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PartsQuery, PartsQueryVariables>(PartsDocument, options);
        }
export type PartsQueryHookResult = ReturnType<typeof usePartsQuery>;
export type PartsLazyQueryHookResult = ReturnType<typeof usePartsLazyQuery>;
export type PartsQueryResult = Apollo.QueryResult<PartsQuery, PartsQueryVariables>;
export type ConstructionKeySpecifier = ('created_at' | 'id' | 'name' | 'owner' | 'parts' | ConstructionKeySpecifier)[];
export type ConstructionFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	parts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConstructionPartKeySpecifier = ('construction' | 'constructionId' | 'id' | 'part' | 'partId' | ConstructionPartKeySpecifier)[];
export type ConstructionPartFieldPolicy = {
	construction?: FieldPolicy<any> | FieldReadFunction<any>,
	constructionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	part?: FieldPolicy<any> | FieldReadFunction<any>,
	partId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartKeySpecifier = ('constructionParts' | 'id' | 'name' | 'volume' | PartKeySpecifier)[];
export type PartFieldPolicy = {
	constructionParts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	volume?: FieldPolicy<any> | FieldReadFunction<any>
};
export type auth_accountsKeySpecifier = ('email' | 'user' | auth_accountsKeySpecifier)[];
export type auth_accountsFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mutation_rootKeySpecifier = ('createConstruction' | 'createConstructionPart' | 'deleteConstruction' | 'deleteConstructionPart' | 'updateConstruction' | 'updateConstructionPart' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	createConstruction?: FieldPolicy<any> | FieldReadFunction<any>,
	createConstructionPart?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteConstruction?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteConstructionPart?: FieldPolicy<any> | FieldReadFunction<any>,
	updateConstruction?: FieldPolicy<any> | FieldReadFunction<any>,
	updateConstructionPart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('auth_accounts' | 'constructionByOwner' | 'constructionByPk' | 'constructionPartByPk' | 'partByPk' | 'parts' | 'users' | 'users_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	auth_accounts?: FieldPolicy<any> | FieldReadFunction<any>,
	constructionByOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	constructionByPk?: FieldPolicy<any> | FieldReadFunction<any>,
	constructionPartByPk?: FieldPolicy<any> | FieldReadFunction<any>,
	partByPk?: FieldPolicy<any> | FieldReadFunction<any>,
	parts?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('auth_accounts' | 'users' | 'users_by_pk' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	auth_accounts?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type usersKeySpecifier = ('account' | 'avatar_url' | 'created_at' | 'display_name' | 'first_name' | 'id' | 'last_name' | 'updated_at' | usersKeySpecifier)[];
export type usersFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar_url?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	display_name?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Construction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConstructionKeySpecifier | (() => undefined | ConstructionKeySpecifier),
		fields?: ConstructionFieldPolicy,
	},
	ConstructionPart?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConstructionPartKeySpecifier | (() => undefined | ConstructionPartKeySpecifier),
		fields?: ConstructionPartFieldPolicy,
	},
	Part?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartKeySpecifier | (() => undefined | PartKeySpecifier),
		fields?: PartFieldPolicy,
	},
	auth_accounts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | auth_accountsKeySpecifier | (() => undefined | auth_accountsKeySpecifier),
		fields?: auth_accountsFieldPolicy,
	},
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	},
	users?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | usersKeySpecifier | (() => undefined | usersKeySpecifier),
		fields?: usersFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    