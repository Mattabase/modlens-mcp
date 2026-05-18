
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Mod
 * 
 */
export type Mod = $Result.DefaultSelection<Prisma.$ModPayload>
/**
 * Model ModClass
 * 
 */
export type ModClass = $Result.DefaultSelection<Prisma.$ModClassPayload>
/**
 * Model McVersion
 * 
 */
export type McVersion = $Result.DefaultSelection<Prisma.$McVersionPayload>
/**
 * Model McVersionDiff
 * 
 */
export type McVersionDiff = $Result.DefaultSelection<Prisma.$McVersionDiffPayload>
/**
 * Model ModVersionDiff
 * 
 */
export type ModVersionDiff = $Result.DefaultSelection<Prisma.$ModVersionDiffPayload>
/**
 * Model ModTag
 * 
 */
export type ModTag = $Result.DefaultSelection<Prisma.$ModTagPayload>
/**
 * Model McSourceFile
 * 
 */
export type McSourceFile = $Result.DefaultSelection<Prisma.$McSourceFilePayload>
/**
 * Model ModSourceFile
 * 
 */
export type ModSourceFile = $Result.DefaultSelection<Prisma.$ModSourceFilePayload>
/**
 * Model DocEntry
 * 
 */
export type DocEntry = $Result.DefaultSelection<Prisma.$DocEntryPayload>
/**
 * Model Primer
 * 
 */
export type Primer = $Result.DefaultSelection<Prisma.$PrimerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mods
 * const mods = await prisma.mod.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Mods
   * const mods = await prisma.mod.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.mod`: Exposes CRUD operations for the **Mod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mods
    * const mods = await prisma.mod.findMany()
    * ```
    */
  get mod(): Prisma.ModDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modClass`: Exposes CRUD operations for the **ModClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModClasses
    * const modClasses = await prisma.modClass.findMany()
    * ```
    */
  get modClass(): Prisma.ModClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mcVersion`: Exposes CRUD operations for the **McVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more McVersions
    * const mcVersions = await prisma.mcVersion.findMany()
    * ```
    */
  get mcVersion(): Prisma.McVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mcVersionDiff`: Exposes CRUD operations for the **McVersionDiff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more McVersionDiffs
    * const mcVersionDiffs = await prisma.mcVersionDiff.findMany()
    * ```
    */
  get mcVersionDiff(): Prisma.McVersionDiffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modVersionDiff`: Exposes CRUD operations for the **ModVersionDiff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModVersionDiffs
    * const modVersionDiffs = await prisma.modVersionDiff.findMany()
    * ```
    */
  get modVersionDiff(): Prisma.ModVersionDiffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modTag`: Exposes CRUD operations for the **ModTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModTags
    * const modTags = await prisma.modTag.findMany()
    * ```
    */
  get modTag(): Prisma.ModTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mcSourceFile`: Exposes CRUD operations for the **McSourceFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more McSourceFiles
    * const mcSourceFiles = await prisma.mcSourceFile.findMany()
    * ```
    */
  get mcSourceFile(): Prisma.McSourceFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modSourceFile`: Exposes CRUD operations for the **ModSourceFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModSourceFiles
    * const modSourceFiles = await prisma.modSourceFile.findMany()
    * ```
    */
  get modSourceFile(): Prisma.ModSourceFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.docEntry`: Exposes CRUD operations for the **DocEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocEntries
    * const docEntries = await prisma.docEntry.findMany()
    * ```
    */
  get docEntry(): Prisma.DocEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.primer`: Exposes CRUD operations for the **Primer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Primers
    * const primers = await prisma.primer.findMany()
    * ```
    */
  get primer(): Prisma.PrimerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Mod: 'Mod',
    ModClass: 'ModClass',
    McVersion: 'McVersion',
    McVersionDiff: 'McVersionDiff',
    ModVersionDiff: 'ModVersionDiff',
    ModTag: 'ModTag',
    McSourceFile: 'McSourceFile',
    ModSourceFile: 'ModSourceFile',
    DocEntry: 'DocEntry',
    Primer: 'Primer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "mod" | "modClass" | "mcVersion" | "mcVersionDiff" | "modVersionDiff" | "modTag" | "mcSourceFile" | "modSourceFile" | "docEntry" | "primer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Mod: {
        payload: Prisma.$ModPayload<ExtArgs>
        fields: Prisma.ModFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>
          }
          findFirst: {
            args: Prisma.ModFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>
          }
          findMany: {
            args: Prisma.ModFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>[]
          }
          create: {
            args: Prisma.ModCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>
          }
          createMany: {
            args: Prisma.ModCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>[]
          }
          delete: {
            args: Prisma.ModDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>
          }
          update: {
            args: Prisma.ModUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>
          }
          deleteMany: {
            args: Prisma.ModDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>[]
          }
          upsert: {
            args: Prisma.ModUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>
          }
          aggregate: {
            args: Prisma.ModAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMod>
          }
          groupBy: {
            args: Prisma.ModGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModCountArgs<ExtArgs>
            result: $Utils.Optional<ModCountAggregateOutputType> | number
          }
        }
      }
      ModClass: {
        payload: Prisma.$ModClassPayload<ExtArgs>
        fields: Prisma.ModClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModClassPayload>
          }
          findFirst: {
            args: Prisma.ModClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModClassPayload>
          }
          findMany: {
            args: Prisma.ModClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModClassPayload>[]
          }
          create: {
            args: Prisma.ModClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModClassPayload>
          }
          createMany: {
            args: Prisma.ModClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModClassPayload>[]
          }
          delete: {
            args: Prisma.ModClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModClassPayload>
          }
          update: {
            args: Prisma.ModClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModClassPayload>
          }
          deleteMany: {
            args: Prisma.ModClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModClassPayload>[]
          }
          upsert: {
            args: Prisma.ModClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModClassPayload>
          }
          aggregate: {
            args: Prisma.ModClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModClass>
          }
          groupBy: {
            args: Prisma.ModClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModClassCountArgs<ExtArgs>
            result: $Utils.Optional<ModClassCountAggregateOutputType> | number
          }
        }
      }
      McVersion: {
        payload: Prisma.$McVersionPayload<ExtArgs>
        fields: Prisma.McVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.McVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.McVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionPayload>
          }
          findFirst: {
            args: Prisma.McVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.McVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionPayload>
          }
          findMany: {
            args: Prisma.McVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionPayload>[]
          }
          create: {
            args: Prisma.McVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionPayload>
          }
          createMany: {
            args: Prisma.McVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.McVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionPayload>[]
          }
          delete: {
            args: Prisma.McVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionPayload>
          }
          update: {
            args: Prisma.McVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionPayload>
          }
          deleteMany: {
            args: Prisma.McVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.McVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.McVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionPayload>[]
          }
          upsert: {
            args: Prisma.McVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionPayload>
          }
          aggregate: {
            args: Prisma.McVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMcVersion>
          }
          groupBy: {
            args: Prisma.McVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<McVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.McVersionCountArgs<ExtArgs>
            result: $Utils.Optional<McVersionCountAggregateOutputType> | number
          }
        }
      }
      McVersionDiff: {
        payload: Prisma.$McVersionDiffPayload<ExtArgs>
        fields: Prisma.McVersionDiffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.McVersionDiffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionDiffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.McVersionDiffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionDiffPayload>
          }
          findFirst: {
            args: Prisma.McVersionDiffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionDiffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.McVersionDiffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionDiffPayload>
          }
          findMany: {
            args: Prisma.McVersionDiffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionDiffPayload>[]
          }
          create: {
            args: Prisma.McVersionDiffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionDiffPayload>
          }
          createMany: {
            args: Prisma.McVersionDiffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.McVersionDiffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionDiffPayload>[]
          }
          delete: {
            args: Prisma.McVersionDiffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionDiffPayload>
          }
          update: {
            args: Prisma.McVersionDiffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionDiffPayload>
          }
          deleteMany: {
            args: Prisma.McVersionDiffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.McVersionDiffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.McVersionDiffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionDiffPayload>[]
          }
          upsert: {
            args: Prisma.McVersionDiffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McVersionDiffPayload>
          }
          aggregate: {
            args: Prisma.McVersionDiffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMcVersionDiff>
          }
          groupBy: {
            args: Prisma.McVersionDiffGroupByArgs<ExtArgs>
            result: $Utils.Optional<McVersionDiffGroupByOutputType>[]
          }
          count: {
            args: Prisma.McVersionDiffCountArgs<ExtArgs>
            result: $Utils.Optional<McVersionDiffCountAggregateOutputType> | number
          }
        }
      }
      ModVersionDiff: {
        payload: Prisma.$ModVersionDiffPayload<ExtArgs>
        fields: Prisma.ModVersionDiffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModVersionDiffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModVersionDiffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModVersionDiffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModVersionDiffPayload>
          }
          findFirst: {
            args: Prisma.ModVersionDiffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModVersionDiffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModVersionDiffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModVersionDiffPayload>
          }
          findMany: {
            args: Prisma.ModVersionDiffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModVersionDiffPayload>[]
          }
          create: {
            args: Prisma.ModVersionDiffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModVersionDiffPayload>
          }
          createMany: {
            args: Prisma.ModVersionDiffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModVersionDiffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModVersionDiffPayload>[]
          }
          delete: {
            args: Prisma.ModVersionDiffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModVersionDiffPayload>
          }
          update: {
            args: Prisma.ModVersionDiffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModVersionDiffPayload>
          }
          deleteMany: {
            args: Prisma.ModVersionDiffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModVersionDiffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModVersionDiffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModVersionDiffPayload>[]
          }
          upsert: {
            args: Prisma.ModVersionDiffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModVersionDiffPayload>
          }
          aggregate: {
            args: Prisma.ModVersionDiffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModVersionDiff>
          }
          groupBy: {
            args: Prisma.ModVersionDiffGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModVersionDiffGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModVersionDiffCountArgs<ExtArgs>
            result: $Utils.Optional<ModVersionDiffCountAggregateOutputType> | number
          }
        }
      }
      ModTag: {
        payload: Prisma.$ModTagPayload<ExtArgs>
        fields: Prisma.ModTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModTagPayload>
          }
          findFirst: {
            args: Prisma.ModTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModTagPayload>
          }
          findMany: {
            args: Prisma.ModTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModTagPayload>[]
          }
          create: {
            args: Prisma.ModTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModTagPayload>
          }
          createMany: {
            args: Prisma.ModTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModTagPayload>[]
          }
          delete: {
            args: Prisma.ModTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModTagPayload>
          }
          update: {
            args: Prisma.ModTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModTagPayload>
          }
          deleteMany: {
            args: Prisma.ModTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModTagPayload>[]
          }
          upsert: {
            args: Prisma.ModTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModTagPayload>
          }
          aggregate: {
            args: Prisma.ModTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModTag>
          }
          groupBy: {
            args: Prisma.ModTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModTagCountArgs<ExtArgs>
            result: $Utils.Optional<ModTagCountAggregateOutputType> | number
          }
        }
      }
      McSourceFile: {
        payload: Prisma.$McSourceFilePayload<ExtArgs>
        fields: Prisma.McSourceFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.McSourceFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McSourceFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.McSourceFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McSourceFilePayload>
          }
          findFirst: {
            args: Prisma.McSourceFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McSourceFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.McSourceFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McSourceFilePayload>
          }
          findMany: {
            args: Prisma.McSourceFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McSourceFilePayload>[]
          }
          create: {
            args: Prisma.McSourceFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McSourceFilePayload>
          }
          createMany: {
            args: Prisma.McSourceFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.McSourceFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McSourceFilePayload>[]
          }
          delete: {
            args: Prisma.McSourceFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McSourceFilePayload>
          }
          update: {
            args: Prisma.McSourceFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McSourceFilePayload>
          }
          deleteMany: {
            args: Prisma.McSourceFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.McSourceFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.McSourceFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McSourceFilePayload>[]
          }
          upsert: {
            args: Prisma.McSourceFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McSourceFilePayload>
          }
          aggregate: {
            args: Prisma.McSourceFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMcSourceFile>
          }
          groupBy: {
            args: Prisma.McSourceFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<McSourceFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.McSourceFileCountArgs<ExtArgs>
            result: $Utils.Optional<McSourceFileCountAggregateOutputType> | number
          }
        }
      }
      ModSourceFile: {
        payload: Prisma.$ModSourceFilePayload<ExtArgs>
        fields: Prisma.ModSourceFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModSourceFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModSourceFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModSourceFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModSourceFilePayload>
          }
          findFirst: {
            args: Prisma.ModSourceFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModSourceFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModSourceFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModSourceFilePayload>
          }
          findMany: {
            args: Prisma.ModSourceFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModSourceFilePayload>[]
          }
          create: {
            args: Prisma.ModSourceFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModSourceFilePayload>
          }
          createMany: {
            args: Prisma.ModSourceFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModSourceFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModSourceFilePayload>[]
          }
          delete: {
            args: Prisma.ModSourceFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModSourceFilePayload>
          }
          update: {
            args: Prisma.ModSourceFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModSourceFilePayload>
          }
          deleteMany: {
            args: Prisma.ModSourceFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModSourceFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModSourceFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModSourceFilePayload>[]
          }
          upsert: {
            args: Prisma.ModSourceFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModSourceFilePayload>
          }
          aggregate: {
            args: Prisma.ModSourceFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModSourceFile>
          }
          groupBy: {
            args: Prisma.ModSourceFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModSourceFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModSourceFileCountArgs<ExtArgs>
            result: $Utils.Optional<ModSourceFileCountAggregateOutputType> | number
          }
        }
      }
      DocEntry: {
        payload: Prisma.$DocEntryPayload<ExtArgs>
        fields: Prisma.DocEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocEntryPayload>
          }
          findFirst: {
            args: Prisma.DocEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocEntryPayload>
          }
          findMany: {
            args: Prisma.DocEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocEntryPayload>[]
          }
          create: {
            args: Prisma.DocEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocEntryPayload>
          }
          createMany: {
            args: Prisma.DocEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocEntryPayload>[]
          }
          delete: {
            args: Prisma.DocEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocEntryPayload>
          }
          update: {
            args: Prisma.DocEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocEntryPayload>
          }
          deleteMany: {
            args: Prisma.DocEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocEntryPayload>[]
          }
          upsert: {
            args: Prisma.DocEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocEntryPayload>
          }
          aggregate: {
            args: Prisma.DocEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocEntry>
          }
          groupBy: {
            args: Prisma.DocEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocEntryCountArgs<ExtArgs>
            result: $Utils.Optional<DocEntryCountAggregateOutputType> | number
          }
        }
      }
      Primer: {
        payload: Prisma.$PrimerPayload<ExtArgs>
        fields: Prisma.PrimerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrimerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrimerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrimerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrimerPayload>
          }
          findFirst: {
            args: Prisma.PrimerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrimerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrimerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrimerPayload>
          }
          findMany: {
            args: Prisma.PrimerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrimerPayload>[]
          }
          create: {
            args: Prisma.PrimerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrimerPayload>
          }
          createMany: {
            args: Prisma.PrimerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrimerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrimerPayload>[]
          }
          delete: {
            args: Prisma.PrimerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrimerPayload>
          }
          update: {
            args: Prisma.PrimerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrimerPayload>
          }
          deleteMany: {
            args: Prisma.PrimerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrimerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrimerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrimerPayload>[]
          }
          upsert: {
            args: Prisma.PrimerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrimerPayload>
          }
          aggregate: {
            args: Prisma.PrimerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrimer>
          }
          groupBy: {
            args: Prisma.PrimerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrimerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrimerCountArgs<ExtArgs>
            result: $Utils.Optional<PrimerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    mod?: ModOmit
    modClass?: ModClassOmit
    mcVersion?: McVersionOmit
    mcVersionDiff?: McVersionDiffOmit
    modVersionDiff?: ModVersionDiffOmit
    modTag?: ModTagOmit
    mcSourceFile?: McSourceFileOmit
    modSourceFile?: ModSourceFileOmit
    docEntry?: DocEntryOmit
    primer?: PrimerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ModCountOutputType
   */

  export type ModCountOutputType = {
    classes: number
    modTags: number
    sourceFiles: number
  }

  export type ModCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | ModCountOutputTypeCountClassesArgs
    modTags?: boolean | ModCountOutputTypeCountModTagsArgs
    sourceFiles?: boolean | ModCountOutputTypeCountSourceFilesArgs
  }

  // Custom InputTypes
  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModCountOutputType
     */
    select?: ModCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModClassWhereInput
  }

  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeCountModTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModTagWhereInput
  }

  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeCountSourceFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModSourceFileWhereInput
  }


  /**
   * Count Type McVersionCountOutputType
   */

  export type McVersionCountOutputType = {
    sourceFiles: number
  }

  export type McVersionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceFiles?: boolean | McVersionCountOutputTypeCountSourceFilesArgs
  }

  // Custom InputTypes
  /**
   * McVersionCountOutputType without action
   */
  export type McVersionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionCountOutputType
     */
    select?: McVersionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * McVersionCountOutputType without action
   */
  export type McVersionCountOutputTypeCountSourceFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: McSourceFileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Mod
   */

  export type AggregateMod = {
    _count: ModCountAggregateOutputType | null
    _avg: ModAvgAggregateOutputType | null
    _sum: ModSumAggregateOutputType | null
    _min: ModMinAggregateOutputType | null
    _max: ModMaxAggregateOutputType | null
  }

  export type ModAvgAggregateOutputType = {
    id: number | null
    curseforgeId: number | null
  }

  export type ModSumAggregateOutputType = {
    id: number | null
    curseforgeId: number | null
  }

  export type ModMinAggregateOutputType = {
    id: number | null
    modId: string | null
    displayName: string | null
    version: string | null
    mcVersion: string | null
    loader: string | null
    jarPath: string | null
    sha256: string | null
    murmur2: string | null
    sha512: string | null
    sourcePath: string | null
    decompPath: string | null
    decompiled: boolean | null
    modrinthId: string | null
    curseforgeId: number | null
    hasMixins: boolean | null
    hasAt: boolean | null
    hasAw: boolean | null
    mixinConfigs: string | null
    mixinTargets: string | null
    atEntries: string | null
    awEntries: string | null
    dependencies: string | null
    metadata: string | null
    tags: string | null
    ingestedAt: Date | null
    updatedAt: Date | null
  }

  export type ModMaxAggregateOutputType = {
    id: number | null
    modId: string | null
    displayName: string | null
    version: string | null
    mcVersion: string | null
    loader: string | null
    jarPath: string | null
    sha256: string | null
    murmur2: string | null
    sha512: string | null
    sourcePath: string | null
    decompPath: string | null
    decompiled: boolean | null
    modrinthId: string | null
    curseforgeId: number | null
    hasMixins: boolean | null
    hasAt: boolean | null
    hasAw: boolean | null
    mixinConfigs: string | null
    mixinTargets: string | null
    atEntries: string | null
    awEntries: string | null
    dependencies: string | null
    metadata: string | null
    tags: string | null
    ingestedAt: Date | null
    updatedAt: Date | null
  }

  export type ModCountAggregateOutputType = {
    id: number
    modId: number
    displayName: number
    version: number
    mcVersion: number
    loader: number
    jarPath: number
    sha256: number
    murmur2: number
    sha512: number
    sourcePath: number
    decompPath: number
    decompiled: number
    modrinthId: number
    curseforgeId: number
    hasMixins: number
    hasAt: number
    hasAw: number
    mixinConfigs: number
    mixinTargets: number
    atEntries: number
    awEntries: number
    dependencies: number
    metadata: number
    tags: number
    ingestedAt: number
    updatedAt: number
    _all: number
  }


  export type ModAvgAggregateInputType = {
    id?: true
    curseforgeId?: true
  }

  export type ModSumAggregateInputType = {
    id?: true
    curseforgeId?: true
  }

  export type ModMinAggregateInputType = {
    id?: true
    modId?: true
    displayName?: true
    version?: true
    mcVersion?: true
    loader?: true
    jarPath?: true
    sha256?: true
    murmur2?: true
    sha512?: true
    sourcePath?: true
    decompPath?: true
    decompiled?: true
    modrinthId?: true
    curseforgeId?: true
    hasMixins?: true
    hasAt?: true
    hasAw?: true
    mixinConfigs?: true
    mixinTargets?: true
    atEntries?: true
    awEntries?: true
    dependencies?: true
    metadata?: true
    tags?: true
    ingestedAt?: true
    updatedAt?: true
  }

  export type ModMaxAggregateInputType = {
    id?: true
    modId?: true
    displayName?: true
    version?: true
    mcVersion?: true
    loader?: true
    jarPath?: true
    sha256?: true
    murmur2?: true
    sha512?: true
    sourcePath?: true
    decompPath?: true
    decompiled?: true
    modrinthId?: true
    curseforgeId?: true
    hasMixins?: true
    hasAt?: true
    hasAw?: true
    mixinConfigs?: true
    mixinTargets?: true
    atEntries?: true
    awEntries?: true
    dependencies?: true
    metadata?: true
    tags?: true
    ingestedAt?: true
    updatedAt?: true
  }

  export type ModCountAggregateInputType = {
    id?: true
    modId?: true
    displayName?: true
    version?: true
    mcVersion?: true
    loader?: true
    jarPath?: true
    sha256?: true
    murmur2?: true
    sha512?: true
    sourcePath?: true
    decompPath?: true
    decompiled?: true
    modrinthId?: true
    curseforgeId?: true
    hasMixins?: true
    hasAt?: true
    hasAw?: true
    mixinConfigs?: true
    mixinTargets?: true
    atEntries?: true
    awEntries?: true
    dependencies?: true
    metadata?: true
    tags?: true
    ingestedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mod to aggregate.
     */
    where?: ModWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods to fetch.
     */
    orderBy?: ModOrderByWithRelationInput | ModOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mods
    **/
    _count?: true | ModCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModMaxAggregateInputType
  }

  export type GetModAggregateType<T extends ModAggregateArgs> = {
        [P in keyof T & keyof AggregateMod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMod[P]>
      : GetScalarType<T[P], AggregateMod[P]>
  }




  export type ModGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModWhereInput
    orderBy?: ModOrderByWithAggregationInput | ModOrderByWithAggregationInput[]
    by: ModScalarFieldEnum[] | ModScalarFieldEnum
    having?: ModScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModCountAggregateInputType | true
    _avg?: ModAvgAggregateInputType
    _sum?: ModSumAggregateInputType
    _min?: ModMinAggregateInputType
    _max?: ModMaxAggregateInputType
  }

  export type ModGroupByOutputType = {
    id: number
    modId: string
    displayName: string
    version: string
    mcVersion: string
    loader: string
    jarPath: string
    sha256: string | null
    murmur2: string | null
    sha512: string | null
    sourcePath: string | null
    decompPath: string | null
    decompiled: boolean
    modrinthId: string | null
    curseforgeId: number | null
    hasMixins: boolean
    hasAt: boolean
    hasAw: boolean
    mixinConfigs: string
    mixinTargets: string
    atEntries: string
    awEntries: string
    dependencies: string
    metadata: string
    tags: string
    ingestedAt: Date
    updatedAt: Date
    _count: ModCountAggregateOutputType | null
    _avg: ModAvgAggregateOutputType | null
    _sum: ModSumAggregateOutputType | null
    _min: ModMinAggregateOutputType | null
    _max: ModMaxAggregateOutputType | null
  }

  type GetModGroupByPayload<T extends ModGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModGroupByOutputType[P]>
            : GetScalarType<T[P], ModGroupByOutputType[P]>
        }
      >
    >


  export type ModSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modId?: boolean
    displayName?: boolean
    version?: boolean
    mcVersion?: boolean
    loader?: boolean
    jarPath?: boolean
    sha256?: boolean
    murmur2?: boolean
    sha512?: boolean
    sourcePath?: boolean
    decompPath?: boolean
    decompiled?: boolean
    modrinthId?: boolean
    curseforgeId?: boolean
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: boolean
    mixinTargets?: boolean
    atEntries?: boolean
    awEntries?: boolean
    dependencies?: boolean
    metadata?: boolean
    tags?: boolean
    ingestedAt?: boolean
    updatedAt?: boolean
    classes?: boolean | Mod$classesArgs<ExtArgs>
    modTags?: boolean | Mod$modTagsArgs<ExtArgs>
    sourceFiles?: boolean | Mod$sourceFilesArgs<ExtArgs>
    _count?: boolean | ModCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mod"]>

  export type ModSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modId?: boolean
    displayName?: boolean
    version?: boolean
    mcVersion?: boolean
    loader?: boolean
    jarPath?: boolean
    sha256?: boolean
    murmur2?: boolean
    sha512?: boolean
    sourcePath?: boolean
    decompPath?: boolean
    decompiled?: boolean
    modrinthId?: boolean
    curseforgeId?: boolean
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: boolean
    mixinTargets?: boolean
    atEntries?: boolean
    awEntries?: boolean
    dependencies?: boolean
    metadata?: boolean
    tags?: boolean
    ingestedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mod"]>

  export type ModSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modId?: boolean
    displayName?: boolean
    version?: boolean
    mcVersion?: boolean
    loader?: boolean
    jarPath?: boolean
    sha256?: boolean
    murmur2?: boolean
    sha512?: boolean
    sourcePath?: boolean
    decompPath?: boolean
    decompiled?: boolean
    modrinthId?: boolean
    curseforgeId?: boolean
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: boolean
    mixinTargets?: boolean
    atEntries?: boolean
    awEntries?: boolean
    dependencies?: boolean
    metadata?: boolean
    tags?: boolean
    ingestedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mod"]>

  export type ModSelectScalar = {
    id?: boolean
    modId?: boolean
    displayName?: boolean
    version?: boolean
    mcVersion?: boolean
    loader?: boolean
    jarPath?: boolean
    sha256?: boolean
    murmur2?: boolean
    sha512?: boolean
    sourcePath?: boolean
    decompPath?: boolean
    decompiled?: boolean
    modrinthId?: boolean
    curseforgeId?: boolean
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: boolean
    mixinTargets?: boolean
    atEntries?: boolean
    awEntries?: boolean
    dependencies?: boolean
    metadata?: boolean
    tags?: boolean
    ingestedAt?: boolean
    updatedAt?: boolean
  }

  export type ModOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modId" | "displayName" | "version" | "mcVersion" | "loader" | "jarPath" | "sha256" | "murmur2" | "sha512" | "sourcePath" | "decompPath" | "decompiled" | "modrinthId" | "curseforgeId" | "hasMixins" | "hasAt" | "hasAw" | "mixinConfigs" | "mixinTargets" | "atEntries" | "awEntries" | "dependencies" | "metadata" | "tags" | "ingestedAt" | "updatedAt", ExtArgs["result"]["mod"]>
  export type ModInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Mod$classesArgs<ExtArgs>
    modTags?: boolean | Mod$modTagsArgs<ExtArgs>
    sourceFiles?: boolean | Mod$sourceFilesArgs<ExtArgs>
    _count?: boolean | ModCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mod"
    objects: {
      classes: Prisma.$ModClassPayload<ExtArgs>[]
      modTags: Prisma.$ModTagPayload<ExtArgs>[]
      sourceFiles: Prisma.$ModSourceFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modId: string
      displayName: string
      version: string
      mcVersion: string
      loader: string
      jarPath: string
      sha256: string | null
      murmur2: string | null
      sha512: string | null
      sourcePath: string | null
      decompPath: string | null
      decompiled: boolean
      modrinthId: string | null
      curseforgeId: number | null
      hasMixins: boolean
      hasAt: boolean
      hasAw: boolean
      mixinConfigs: string
      mixinTargets: string
      atEntries: string
      awEntries: string
      dependencies: string
      metadata: string
      tags: string
      ingestedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mod"]>
    composites: {}
  }

  type ModGetPayload<S extends boolean | null | undefined | ModDefaultArgs> = $Result.GetResult<Prisma.$ModPayload, S>

  type ModCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModCountAggregateInputType | true
    }

  export interface ModDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mod'], meta: { name: 'Mod' } }
    /**
     * Find zero or one Mod that matches the filter.
     * @param {ModFindUniqueArgs} args - Arguments to find a Mod
     * @example
     * // Get one Mod
     * const mod = await prisma.mod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModFindUniqueArgs>(args: SelectSubset<T, ModFindUniqueArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModFindUniqueOrThrowArgs} args - Arguments to find a Mod
     * @example
     * // Get one Mod
     * const mod = await prisma.mod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModFindUniqueOrThrowArgs>(args: SelectSubset<T, ModFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModFindFirstArgs} args - Arguments to find a Mod
     * @example
     * // Get one Mod
     * const mod = await prisma.mod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModFindFirstArgs>(args?: SelectSubset<T, ModFindFirstArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModFindFirstOrThrowArgs} args - Arguments to find a Mod
     * @example
     * // Get one Mod
     * const mod = await prisma.mod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModFindFirstOrThrowArgs>(args?: SelectSubset<T, ModFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mods
     * const mods = await prisma.mod.findMany()
     * 
     * // Get first 10 Mods
     * const mods = await prisma.mod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modWithIdOnly = await prisma.mod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModFindManyArgs>(args?: SelectSubset<T, ModFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mod.
     * @param {ModCreateArgs} args - Arguments to create a Mod.
     * @example
     * // Create one Mod
     * const Mod = await prisma.mod.create({
     *   data: {
     *     // ... data to create a Mod
     *   }
     * })
     * 
     */
    create<T extends ModCreateArgs>(args: SelectSubset<T, ModCreateArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mods.
     * @param {ModCreateManyArgs} args - Arguments to create many Mods.
     * @example
     * // Create many Mods
     * const mod = await prisma.mod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModCreateManyArgs>(args?: SelectSubset<T, ModCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mods and returns the data saved in the database.
     * @param {ModCreateManyAndReturnArgs} args - Arguments to create many Mods.
     * @example
     * // Create many Mods
     * const mod = await prisma.mod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mods and only return the `id`
     * const modWithIdOnly = await prisma.mod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModCreateManyAndReturnArgs>(args?: SelectSubset<T, ModCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mod.
     * @param {ModDeleteArgs} args - Arguments to delete one Mod.
     * @example
     * // Delete one Mod
     * const Mod = await prisma.mod.delete({
     *   where: {
     *     // ... filter to delete one Mod
     *   }
     * })
     * 
     */
    delete<T extends ModDeleteArgs>(args: SelectSubset<T, ModDeleteArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mod.
     * @param {ModUpdateArgs} args - Arguments to update one Mod.
     * @example
     * // Update one Mod
     * const mod = await prisma.mod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModUpdateArgs>(args: SelectSubset<T, ModUpdateArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mods.
     * @param {ModDeleteManyArgs} args - Arguments to filter Mods to delete.
     * @example
     * // Delete a few Mods
     * const { count } = await prisma.mod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModDeleteManyArgs>(args?: SelectSubset<T, ModDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mods
     * const mod = await prisma.mod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModUpdateManyArgs>(args: SelectSubset<T, ModUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mods and returns the data updated in the database.
     * @param {ModUpdateManyAndReturnArgs} args - Arguments to update many Mods.
     * @example
     * // Update many Mods
     * const mod = await prisma.mod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mods and only return the `id`
     * const modWithIdOnly = await prisma.mod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModUpdateManyAndReturnArgs>(args: SelectSubset<T, ModUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mod.
     * @param {ModUpsertArgs} args - Arguments to update or create a Mod.
     * @example
     * // Update or create a Mod
     * const mod = await prisma.mod.upsert({
     *   create: {
     *     // ... data to create a Mod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mod we want to update
     *   }
     * })
     */
    upsert<T extends ModUpsertArgs>(args: SelectSubset<T, ModUpsertArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModCountArgs} args - Arguments to filter Mods to count.
     * @example
     * // Count the number of Mods
     * const count = await prisma.mod.count({
     *   where: {
     *     // ... the filter for the Mods we want to count
     *   }
     * })
    **/
    count<T extends ModCountArgs>(
      args?: Subset<T, ModCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModAggregateArgs>(args: Subset<T, ModAggregateArgs>): Prisma.PrismaPromise<GetModAggregateType<T>>

    /**
     * Group by Mod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModGroupByArgs['orderBy'] }
        : { orderBy?: ModGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mod model
   */
  readonly fields: ModFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Mod$classesArgs<ExtArgs> = {}>(args?: Subset<T, Mod$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    modTags<T extends Mod$modTagsArgs<ExtArgs> = {}>(args?: Subset<T, Mod$modTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sourceFiles<T extends Mod$sourceFilesArgs<ExtArgs> = {}>(args?: Subset<T, Mod$sourceFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModSourceFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mod model
   */
  interface ModFieldRefs {
    readonly id: FieldRef<"Mod", 'Int'>
    readonly modId: FieldRef<"Mod", 'String'>
    readonly displayName: FieldRef<"Mod", 'String'>
    readonly version: FieldRef<"Mod", 'String'>
    readonly mcVersion: FieldRef<"Mod", 'String'>
    readonly loader: FieldRef<"Mod", 'String'>
    readonly jarPath: FieldRef<"Mod", 'String'>
    readonly sha256: FieldRef<"Mod", 'String'>
    readonly murmur2: FieldRef<"Mod", 'String'>
    readonly sha512: FieldRef<"Mod", 'String'>
    readonly sourcePath: FieldRef<"Mod", 'String'>
    readonly decompPath: FieldRef<"Mod", 'String'>
    readonly decompiled: FieldRef<"Mod", 'Boolean'>
    readonly modrinthId: FieldRef<"Mod", 'String'>
    readonly curseforgeId: FieldRef<"Mod", 'Int'>
    readonly hasMixins: FieldRef<"Mod", 'Boolean'>
    readonly hasAt: FieldRef<"Mod", 'Boolean'>
    readonly hasAw: FieldRef<"Mod", 'Boolean'>
    readonly mixinConfigs: FieldRef<"Mod", 'String'>
    readonly mixinTargets: FieldRef<"Mod", 'String'>
    readonly atEntries: FieldRef<"Mod", 'String'>
    readonly awEntries: FieldRef<"Mod", 'String'>
    readonly dependencies: FieldRef<"Mod", 'String'>
    readonly metadata: FieldRef<"Mod", 'String'>
    readonly tags: FieldRef<"Mod", 'String'>
    readonly ingestedAt: FieldRef<"Mod", 'DateTime'>
    readonly updatedAt: FieldRef<"Mod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mod findUnique
   */
  export type ModFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * Filter, which Mod to fetch.
     */
    where: ModWhereUniqueInput
  }

  /**
   * Mod findUniqueOrThrow
   */
  export type ModFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * Filter, which Mod to fetch.
     */
    where: ModWhereUniqueInput
  }

  /**
   * Mod findFirst
   */
  export type ModFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * Filter, which Mod to fetch.
     */
    where?: ModWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods to fetch.
     */
    orderBy?: ModOrderByWithRelationInput | ModOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mods.
     */
    cursor?: ModWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mods.
     */
    distinct?: ModScalarFieldEnum | ModScalarFieldEnum[]
  }

  /**
   * Mod findFirstOrThrow
   */
  export type ModFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * Filter, which Mod to fetch.
     */
    where?: ModWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods to fetch.
     */
    orderBy?: ModOrderByWithRelationInput | ModOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mods.
     */
    cursor?: ModWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mods.
     */
    distinct?: ModScalarFieldEnum | ModScalarFieldEnum[]
  }

  /**
   * Mod findMany
   */
  export type ModFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * Filter, which Mods to fetch.
     */
    where?: ModWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods to fetch.
     */
    orderBy?: ModOrderByWithRelationInput | ModOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mods.
     */
    cursor?: ModWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods.
     */
    skip?: number
    distinct?: ModScalarFieldEnum | ModScalarFieldEnum[]
  }

  /**
   * Mod create
   */
  export type ModCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * The data needed to create a Mod.
     */
    data: XOR<ModCreateInput, ModUncheckedCreateInput>
  }

  /**
   * Mod createMany
   */
  export type ModCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mods.
     */
    data: ModCreateManyInput | ModCreateManyInput[]
  }

  /**
   * Mod createManyAndReturn
   */
  export type ModCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * The data used to create many Mods.
     */
    data: ModCreateManyInput | ModCreateManyInput[]
  }

  /**
   * Mod update
   */
  export type ModUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * The data needed to update a Mod.
     */
    data: XOR<ModUpdateInput, ModUncheckedUpdateInput>
    /**
     * Choose, which Mod to update.
     */
    where: ModWhereUniqueInput
  }

  /**
   * Mod updateMany
   */
  export type ModUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mods.
     */
    data: XOR<ModUpdateManyMutationInput, ModUncheckedUpdateManyInput>
    /**
     * Filter which Mods to update
     */
    where?: ModWhereInput
    /**
     * Limit how many Mods to update.
     */
    limit?: number
  }

  /**
   * Mod updateManyAndReturn
   */
  export type ModUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * The data used to update Mods.
     */
    data: XOR<ModUpdateManyMutationInput, ModUncheckedUpdateManyInput>
    /**
     * Filter which Mods to update
     */
    where?: ModWhereInput
    /**
     * Limit how many Mods to update.
     */
    limit?: number
  }

  /**
   * Mod upsert
   */
  export type ModUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * The filter to search for the Mod to update in case it exists.
     */
    where: ModWhereUniqueInput
    /**
     * In case the Mod found by the `where` argument doesn't exist, create a new Mod with this data.
     */
    create: XOR<ModCreateInput, ModUncheckedCreateInput>
    /**
     * In case the Mod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModUpdateInput, ModUncheckedUpdateInput>
  }

  /**
   * Mod delete
   */
  export type ModDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * Filter which Mod to delete.
     */
    where: ModWhereUniqueInput
  }

  /**
   * Mod deleteMany
   */
  export type ModDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mods to delete
     */
    where?: ModWhereInput
    /**
     * Limit how many Mods to delete.
     */
    limit?: number
  }

  /**
   * Mod.classes
   */
  export type Mod$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassInclude<ExtArgs> | null
    where?: ModClassWhereInput
    orderBy?: ModClassOrderByWithRelationInput | ModClassOrderByWithRelationInput[]
    cursor?: ModClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModClassScalarFieldEnum | ModClassScalarFieldEnum[]
  }

  /**
   * Mod.modTags
   */
  export type Mod$modTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagInclude<ExtArgs> | null
    where?: ModTagWhereInput
    orderBy?: ModTagOrderByWithRelationInput | ModTagOrderByWithRelationInput[]
    cursor?: ModTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModTagScalarFieldEnum | ModTagScalarFieldEnum[]
  }

  /**
   * Mod.sourceFiles
   */
  export type Mod$sourceFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileInclude<ExtArgs> | null
    where?: ModSourceFileWhereInput
    orderBy?: ModSourceFileOrderByWithRelationInput | ModSourceFileOrderByWithRelationInput[]
    cursor?: ModSourceFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModSourceFileScalarFieldEnum | ModSourceFileScalarFieldEnum[]
  }

  /**
   * Mod without action
   */
  export type ModDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
  }


  /**
   * Model ModClass
   */

  export type AggregateModClass = {
    _count: ModClassCountAggregateOutputType | null
    _avg: ModClassAvgAggregateOutputType | null
    _sum: ModClassSumAggregateOutputType | null
    _min: ModClassMinAggregateOutputType | null
    _max: ModClassMaxAggregateOutputType | null
  }

  export type ModClassAvgAggregateOutputType = {
    id: number | null
    modId: number | null
    accessFlags: number | null
  }

  export type ModClassSumAggregateOutputType = {
    id: number | null
    modId: number | null
    accessFlags: number | null
  }

  export type ModClassMinAggregateOutputType = {
    id: number | null
    modId: number | null
    className: string | null
    superClass: string | null
    interfaces: string | null
    accessFlags: number | null
  }

  export type ModClassMaxAggregateOutputType = {
    id: number | null
    modId: number | null
    className: string | null
    superClass: string | null
    interfaces: string | null
    accessFlags: number | null
  }

  export type ModClassCountAggregateOutputType = {
    id: number
    modId: number
    className: number
    superClass: number
    interfaces: number
    accessFlags: number
    _all: number
  }


  export type ModClassAvgAggregateInputType = {
    id?: true
    modId?: true
    accessFlags?: true
  }

  export type ModClassSumAggregateInputType = {
    id?: true
    modId?: true
    accessFlags?: true
  }

  export type ModClassMinAggregateInputType = {
    id?: true
    modId?: true
    className?: true
    superClass?: true
    interfaces?: true
    accessFlags?: true
  }

  export type ModClassMaxAggregateInputType = {
    id?: true
    modId?: true
    className?: true
    superClass?: true
    interfaces?: true
    accessFlags?: true
  }

  export type ModClassCountAggregateInputType = {
    id?: true
    modId?: true
    className?: true
    superClass?: true
    interfaces?: true
    accessFlags?: true
    _all?: true
  }

  export type ModClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModClass to aggregate.
     */
    where?: ModClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModClasses to fetch.
     */
    orderBy?: ModClassOrderByWithRelationInput | ModClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModClasses
    **/
    _count?: true | ModClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModClassMaxAggregateInputType
  }

  export type GetModClassAggregateType<T extends ModClassAggregateArgs> = {
        [P in keyof T & keyof AggregateModClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModClass[P]>
      : GetScalarType<T[P], AggregateModClass[P]>
  }




  export type ModClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModClassWhereInput
    orderBy?: ModClassOrderByWithAggregationInput | ModClassOrderByWithAggregationInput[]
    by: ModClassScalarFieldEnum[] | ModClassScalarFieldEnum
    having?: ModClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModClassCountAggregateInputType | true
    _avg?: ModClassAvgAggregateInputType
    _sum?: ModClassSumAggregateInputType
    _min?: ModClassMinAggregateInputType
    _max?: ModClassMaxAggregateInputType
  }

  export type ModClassGroupByOutputType = {
    id: number
    modId: number
    className: string
    superClass: string | null
    interfaces: string
    accessFlags: number
    _count: ModClassCountAggregateOutputType | null
    _avg: ModClassAvgAggregateOutputType | null
    _sum: ModClassSumAggregateOutputType | null
    _min: ModClassMinAggregateOutputType | null
    _max: ModClassMaxAggregateOutputType | null
  }

  type GetModClassGroupByPayload<T extends ModClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModClassGroupByOutputType[P]>
            : GetScalarType<T[P], ModClassGroupByOutputType[P]>
        }
      >
    >


  export type ModClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modId?: boolean
    className?: boolean
    superClass?: boolean
    interfaces?: boolean
    accessFlags?: boolean
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modClass"]>

  export type ModClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modId?: boolean
    className?: boolean
    superClass?: boolean
    interfaces?: boolean
    accessFlags?: boolean
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modClass"]>

  export type ModClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modId?: boolean
    className?: boolean
    superClass?: boolean
    interfaces?: boolean
    accessFlags?: boolean
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modClass"]>

  export type ModClassSelectScalar = {
    id?: boolean
    modId?: boolean
    className?: boolean
    superClass?: boolean
    interfaces?: boolean
    accessFlags?: boolean
  }

  export type ModClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modId" | "className" | "superClass" | "interfaces" | "accessFlags", ExtArgs["result"]["modClass"]>
  export type ModClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }
  export type ModClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }
  export type ModClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }

  export type $ModClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModClass"
    objects: {
      mod: Prisma.$ModPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modId: number
      className: string
      superClass: string | null
      interfaces: string
      accessFlags: number
    }, ExtArgs["result"]["modClass"]>
    composites: {}
  }

  type ModClassGetPayload<S extends boolean | null | undefined | ModClassDefaultArgs> = $Result.GetResult<Prisma.$ModClassPayload, S>

  type ModClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModClassCountAggregateInputType | true
    }

  export interface ModClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModClass'], meta: { name: 'ModClass' } }
    /**
     * Find zero or one ModClass that matches the filter.
     * @param {ModClassFindUniqueArgs} args - Arguments to find a ModClass
     * @example
     * // Get one ModClass
     * const modClass = await prisma.modClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModClassFindUniqueArgs>(args: SelectSubset<T, ModClassFindUniqueArgs<ExtArgs>>): Prisma__ModClassClient<$Result.GetResult<Prisma.$ModClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModClassFindUniqueOrThrowArgs} args - Arguments to find a ModClass
     * @example
     * // Get one ModClass
     * const modClass = await prisma.modClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ModClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModClassClient<$Result.GetResult<Prisma.$ModClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModClassFindFirstArgs} args - Arguments to find a ModClass
     * @example
     * // Get one ModClass
     * const modClass = await prisma.modClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModClassFindFirstArgs>(args?: SelectSubset<T, ModClassFindFirstArgs<ExtArgs>>): Prisma__ModClassClient<$Result.GetResult<Prisma.$ModClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModClassFindFirstOrThrowArgs} args - Arguments to find a ModClass
     * @example
     * // Get one ModClass
     * const modClass = await prisma.modClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ModClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModClassClient<$Result.GetResult<Prisma.$ModClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModClasses
     * const modClasses = await prisma.modClass.findMany()
     * 
     * // Get first 10 ModClasses
     * const modClasses = await prisma.modClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modClassWithIdOnly = await prisma.modClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModClassFindManyArgs>(args?: SelectSubset<T, ModClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModClass.
     * @param {ModClassCreateArgs} args - Arguments to create a ModClass.
     * @example
     * // Create one ModClass
     * const ModClass = await prisma.modClass.create({
     *   data: {
     *     // ... data to create a ModClass
     *   }
     * })
     * 
     */
    create<T extends ModClassCreateArgs>(args: SelectSubset<T, ModClassCreateArgs<ExtArgs>>): Prisma__ModClassClient<$Result.GetResult<Prisma.$ModClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModClasses.
     * @param {ModClassCreateManyArgs} args - Arguments to create many ModClasses.
     * @example
     * // Create many ModClasses
     * const modClass = await prisma.modClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModClassCreateManyArgs>(args?: SelectSubset<T, ModClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModClasses and returns the data saved in the database.
     * @param {ModClassCreateManyAndReturnArgs} args - Arguments to create many ModClasses.
     * @example
     * // Create many ModClasses
     * const modClass = await prisma.modClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModClasses and only return the `id`
     * const modClassWithIdOnly = await prisma.modClass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ModClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModClass.
     * @param {ModClassDeleteArgs} args - Arguments to delete one ModClass.
     * @example
     * // Delete one ModClass
     * const ModClass = await prisma.modClass.delete({
     *   where: {
     *     // ... filter to delete one ModClass
     *   }
     * })
     * 
     */
    delete<T extends ModClassDeleteArgs>(args: SelectSubset<T, ModClassDeleteArgs<ExtArgs>>): Prisma__ModClassClient<$Result.GetResult<Prisma.$ModClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModClass.
     * @param {ModClassUpdateArgs} args - Arguments to update one ModClass.
     * @example
     * // Update one ModClass
     * const modClass = await prisma.modClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModClassUpdateArgs>(args: SelectSubset<T, ModClassUpdateArgs<ExtArgs>>): Prisma__ModClassClient<$Result.GetResult<Prisma.$ModClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModClasses.
     * @param {ModClassDeleteManyArgs} args - Arguments to filter ModClasses to delete.
     * @example
     * // Delete a few ModClasses
     * const { count } = await prisma.modClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModClassDeleteManyArgs>(args?: SelectSubset<T, ModClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModClasses
     * const modClass = await prisma.modClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModClassUpdateManyArgs>(args: SelectSubset<T, ModClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModClasses and returns the data updated in the database.
     * @param {ModClassUpdateManyAndReturnArgs} args - Arguments to update many ModClasses.
     * @example
     * // Update many ModClasses
     * const modClass = await prisma.modClass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModClasses and only return the `id`
     * const modClassWithIdOnly = await prisma.modClass.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ModClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModClass.
     * @param {ModClassUpsertArgs} args - Arguments to update or create a ModClass.
     * @example
     * // Update or create a ModClass
     * const modClass = await prisma.modClass.upsert({
     *   create: {
     *     // ... data to create a ModClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModClass we want to update
     *   }
     * })
     */
    upsert<T extends ModClassUpsertArgs>(args: SelectSubset<T, ModClassUpsertArgs<ExtArgs>>): Prisma__ModClassClient<$Result.GetResult<Prisma.$ModClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModClassCountArgs} args - Arguments to filter ModClasses to count.
     * @example
     * // Count the number of ModClasses
     * const count = await prisma.modClass.count({
     *   where: {
     *     // ... the filter for the ModClasses we want to count
     *   }
     * })
    **/
    count<T extends ModClassCountArgs>(
      args?: Subset<T, ModClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModClassAggregateArgs>(args: Subset<T, ModClassAggregateArgs>): Prisma.PrismaPromise<GetModClassAggregateType<T>>

    /**
     * Group by ModClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModClassGroupByArgs['orderBy'] }
        : { orderBy?: ModClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModClass model
   */
  readonly fields: ModClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mod<T extends ModDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModDefaultArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModClass model
   */
  interface ModClassFieldRefs {
    readonly id: FieldRef<"ModClass", 'Int'>
    readonly modId: FieldRef<"ModClass", 'Int'>
    readonly className: FieldRef<"ModClass", 'String'>
    readonly superClass: FieldRef<"ModClass", 'String'>
    readonly interfaces: FieldRef<"ModClass", 'String'>
    readonly accessFlags: FieldRef<"ModClass", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ModClass findUnique
   */
  export type ModClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassInclude<ExtArgs> | null
    /**
     * Filter, which ModClass to fetch.
     */
    where: ModClassWhereUniqueInput
  }

  /**
   * ModClass findUniqueOrThrow
   */
  export type ModClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassInclude<ExtArgs> | null
    /**
     * Filter, which ModClass to fetch.
     */
    where: ModClassWhereUniqueInput
  }

  /**
   * ModClass findFirst
   */
  export type ModClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassInclude<ExtArgs> | null
    /**
     * Filter, which ModClass to fetch.
     */
    where?: ModClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModClasses to fetch.
     */
    orderBy?: ModClassOrderByWithRelationInput | ModClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModClasses.
     */
    cursor?: ModClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModClasses.
     */
    distinct?: ModClassScalarFieldEnum | ModClassScalarFieldEnum[]
  }

  /**
   * ModClass findFirstOrThrow
   */
  export type ModClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassInclude<ExtArgs> | null
    /**
     * Filter, which ModClass to fetch.
     */
    where?: ModClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModClasses to fetch.
     */
    orderBy?: ModClassOrderByWithRelationInput | ModClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModClasses.
     */
    cursor?: ModClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModClasses.
     */
    distinct?: ModClassScalarFieldEnum | ModClassScalarFieldEnum[]
  }

  /**
   * ModClass findMany
   */
  export type ModClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassInclude<ExtArgs> | null
    /**
     * Filter, which ModClasses to fetch.
     */
    where?: ModClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModClasses to fetch.
     */
    orderBy?: ModClassOrderByWithRelationInput | ModClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModClasses.
     */
    cursor?: ModClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModClasses.
     */
    skip?: number
    distinct?: ModClassScalarFieldEnum | ModClassScalarFieldEnum[]
  }

  /**
   * ModClass create
   */
  export type ModClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassInclude<ExtArgs> | null
    /**
     * The data needed to create a ModClass.
     */
    data: XOR<ModClassCreateInput, ModClassUncheckedCreateInput>
  }

  /**
   * ModClass createMany
   */
  export type ModClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModClasses.
     */
    data: ModClassCreateManyInput | ModClassCreateManyInput[]
  }

  /**
   * ModClass createManyAndReturn
   */
  export type ModClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * The data used to create many ModClasses.
     */
    data: ModClassCreateManyInput | ModClassCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModClass update
   */
  export type ModClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassInclude<ExtArgs> | null
    /**
     * The data needed to update a ModClass.
     */
    data: XOR<ModClassUpdateInput, ModClassUncheckedUpdateInput>
    /**
     * Choose, which ModClass to update.
     */
    where: ModClassWhereUniqueInput
  }

  /**
   * ModClass updateMany
   */
  export type ModClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModClasses.
     */
    data: XOR<ModClassUpdateManyMutationInput, ModClassUncheckedUpdateManyInput>
    /**
     * Filter which ModClasses to update
     */
    where?: ModClassWhereInput
    /**
     * Limit how many ModClasses to update.
     */
    limit?: number
  }

  /**
   * ModClass updateManyAndReturn
   */
  export type ModClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * The data used to update ModClasses.
     */
    data: XOR<ModClassUpdateManyMutationInput, ModClassUncheckedUpdateManyInput>
    /**
     * Filter which ModClasses to update
     */
    where?: ModClassWhereInput
    /**
     * Limit how many ModClasses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModClass upsert
   */
  export type ModClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassInclude<ExtArgs> | null
    /**
     * The filter to search for the ModClass to update in case it exists.
     */
    where: ModClassWhereUniqueInput
    /**
     * In case the ModClass found by the `where` argument doesn't exist, create a new ModClass with this data.
     */
    create: XOR<ModClassCreateInput, ModClassUncheckedCreateInput>
    /**
     * In case the ModClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModClassUpdateInput, ModClassUncheckedUpdateInput>
  }

  /**
   * ModClass delete
   */
  export type ModClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassInclude<ExtArgs> | null
    /**
     * Filter which ModClass to delete.
     */
    where: ModClassWhereUniqueInput
  }

  /**
   * ModClass deleteMany
   */
  export type ModClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModClasses to delete
     */
    where?: ModClassWhereInput
    /**
     * Limit how many ModClasses to delete.
     */
    limit?: number
  }

  /**
   * ModClass without action
   */
  export type ModClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModClass
     */
    select?: ModClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModClass
     */
    omit?: ModClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModClassInclude<ExtArgs> | null
  }


  /**
   * Model McVersion
   */

  export type AggregateMcVersion = {
    _count: McVersionCountAggregateOutputType | null
    _avg: McVersionAvgAggregateOutputType | null
    _sum: McVersionSumAggregateOutputType | null
    _min: McVersionMinAggregateOutputType | null
    _max: McVersionMaxAggregateOutputType | null
  }

  export type McVersionAvgAggregateOutputType = {
    id: number | null
  }

  export type McVersionSumAggregateOutputType = {
    id: number | null
  }

  export type McVersionMinAggregateOutputType = {
    id: number | null
    versionId: string | null
    type: string | null
    jarPath: string | null
    decompPath: string | null
    decompiled: boolean | null
    indexed: boolean | null
    releaseTime: Date | null
    createdAt: Date | null
  }

  export type McVersionMaxAggregateOutputType = {
    id: number | null
    versionId: string | null
    type: string | null
    jarPath: string | null
    decompPath: string | null
    decompiled: boolean | null
    indexed: boolean | null
    releaseTime: Date | null
    createdAt: Date | null
  }

  export type McVersionCountAggregateOutputType = {
    id: number
    versionId: number
    type: number
    jarPath: number
    decompPath: number
    decompiled: number
    indexed: number
    releaseTime: number
    createdAt: number
    _all: number
  }


  export type McVersionAvgAggregateInputType = {
    id?: true
  }

  export type McVersionSumAggregateInputType = {
    id?: true
  }

  export type McVersionMinAggregateInputType = {
    id?: true
    versionId?: true
    type?: true
    jarPath?: true
    decompPath?: true
    decompiled?: true
    indexed?: true
    releaseTime?: true
    createdAt?: true
  }

  export type McVersionMaxAggregateInputType = {
    id?: true
    versionId?: true
    type?: true
    jarPath?: true
    decompPath?: true
    decompiled?: true
    indexed?: true
    releaseTime?: true
    createdAt?: true
  }

  export type McVersionCountAggregateInputType = {
    id?: true
    versionId?: true
    type?: true
    jarPath?: true
    decompPath?: true
    decompiled?: true
    indexed?: true
    releaseTime?: true
    createdAt?: true
    _all?: true
  }

  export type McVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which McVersion to aggregate.
     */
    where?: McVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McVersions to fetch.
     */
    orderBy?: McVersionOrderByWithRelationInput | McVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: McVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned McVersions
    **/
    _count?: true | McVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: McVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: McVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: McVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: McVersionMaxAggregateInputType
  }

  export type GetMcVersionAggregateType<T extends McVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateMcVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMcVersion[P]>
      : GetScalarType<T[P], AggregateMcVersion[P]>
  }




  export type McVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: McVersionWhereInput
    orderBy?: McVersionOrderByWithAggregationInput | McVersionOrderByWithAggregationInput[]
    by: McVersionScalarFieldEnum[] | McVersionScalarFieldEnum
    having?: McVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: McVersionCountAggregateInputType | true
    _avg?: McVersionAvgAggregateInputType
    _sum?: McVersionSumAggregateInputType
    _min?: McVersionMinAggregateInputType
    _max?: McVersionMaxAggregateInputType
  }

  export type McVersionGroupByOutputType = {
    id: number
    versionId: string
    type: string
    jarPath: string | null
    decompPath: string | null
    decompiled: boolean
    indexed: boolean
    releaseTime: Date
    createdAt: Date
    _count: McVersionCountAggregateOutputType | null
    _avg: McVersionAvgAggregateOutputType | null
    _sum: McVersionSumAggregateOutputType | null
    _min: McVersionMinAggregateOutputType | null
    _max: McVersionMaxAggregateOutputType | null
  }

  type GetMcVersionGroupByPayload<T extends McVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<McVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof McVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], McVersionGroupByOutputType[P]>
            : GetScalarType<T[P], McVersionGroupByOutputType[P]>
        }
      >
    >


  export type McVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    versionId?: boolean
    type?: boolean
    jarPath?: boolean
    decompPath?: boolean
    decompiled?: boolean
    indexed?: boolean
    releaseTime?: boolean
    createdAt?: boolean
    sourceFiles?: boolean | McVersion$sourceFilesArgs<ExtArgs>
    _count?: boolean | McVersionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mcVersion"]>

  export type McVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    versionId?: boolean
    type?: boolean
    jarPath?: boolean
    decompPath?: boolean
    decompiled?: boolean
    indexed?: boolean
    releaseTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mcVersion"]>

  export type McVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    versionId?: boolean
    type?: boolean
    jarPath?: boolean
    decompPath?: boolean
    decompiled?: boolean
    indexed?: boolean
    releaseTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mcVersion"]>

  export type McVersionSelectScalar = {
    id?: boolean
    versionId?: boolean
    type?: boolean
    jarPath?: boolean
    decompPath?: boolean
    decompiled?: boolean
    indexed?: boolean
    releaseTime?: boolean
    createdAt?: boolean
  }

  export type McVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "versionId" | "type" | "jarPath" | "decompPath" | "decompiled" | "indexed" | "releaseTime" | "createdAt", ExtArgs["result"]["mcVersion"]>
  export type McVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceFiles?: boolean | McVersion$sourceFilesArgs<ExtArgs>
    _count?: boolean | McVersionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type McVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type McVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $McVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "McVersion"
    objects: {
      sourceFiles: Prisma.$McSourceFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      versionId: string
      type: string
      jarPath: string | null
      decompPath: string | null
      decompiled: boolean
      indexed: boolean
      releaseTime: Date
      createdAt: Date
    }, ExtArgs["result"]["mcVersion"]>
    composites: {}
  }

  type McVersionGetPayload<S extends boolean | null | undefined | McVersionDefaultArgs> = $Result.GetResult<Prisma.$McVersionPayload, S>

  type McVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<McVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: McVersionCountAggregateInputType | true
    }

  export interface McVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['McVersion'], meta: { name: 'McVersion' } }
    /**
     * Find zero or one McVersion that matches the filter.
     * @param {McVersionFindUniqueArgs} args - Arguments to find a McVersion
     * @example
     * // Get one McVersion
     * const mcVersion = await prisma.mcVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends McVersionFindUniqueArgs>(args: SelectSubset<T, McVersionFindUniqueArgs<ExtArgs>>): Prisma__McVersionClient<$Result.GetResult<Prisma.$McVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one McVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {McVersionFindUniqueOrThrowArgs} args - Arguments to find a McVersion
     * @example
     * // Get one McVersion
     * const mcVersion = await prisma.mcVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends McVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, McVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__McVersionClient<$Result.GetResult<Prisma.$McVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first McVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionFindFirstArgs} args - Arguments to find a McVersion
     * @example
     * // Get one McVersion
     * const mcVersion = await prisma.mcVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends McVersionFindFirstArgs>(args?: SelectSubset<T, McVersionFindFirstArgs<ExtArgs>>): Prisma__McVersionClient<$Result.GetResult<Prisma.$McVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first McVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionFindFirstOrThrowArgs} args - Arguments to find a McVersion
     * @example
     * // Get one McVersion
     * const mcVersion = await prisma.mcVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends McVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, McVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__McVersionClient<$Result.GetResult<Prisma.$McVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more McVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all McVersions
     * const mcVersions = await prisma.mcVersion.findMany()
     * 
     * // Get first 10 McVersions
     * const mcVersions = await prisma.mcVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mcVersionWithIdOnly = await prisma.mcVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends McVersionFindManyArgs>(args?: SelectSubset<T, McVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a McVersion.
     * @param {McVersionCreateArgs} args - Arguments to create a McVersion.
     * @example
     * // Create one McVersion
     * const McVersion = await prisma.mcVersion.create({
     *   data: {
     *     // ... data to create a McVersion
     *   }
     * })
     * 
     */
    create<T extends McVersionCreateArgs>(args: SelectSubset<T, McVersionCreateArgs<ExtArgs>>): Prisma__McVersionClient<$Result.GetResult<Prisma.$McVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many McVersions.
     * @param {McVersionCreateManyArgs} args - Arguments to create many McVersions.
     * @example
     * // Create many McVersions
     * const mcVersion = await prisma.mcVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends McVersionCreateManyArgs>(args?: SelectSubset<T, McVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many McVersions and returns the data saved in the database.
     * @param {McVersionCreateManyAndReturnArgs} args - Arguments to create many McVersions.
     * @example
     * // Create many McVersions
     * const mcVersion = await prisma.mcVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many McVersions and only return the `id`
     * const mcVersionWithIdOnly = await prisma.mcVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends McVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, McVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a McVersion.
     * @param {McVersionDeleteArgs} args - Arguments to delete one McVersion.
     * @example
     * // Delete one McVersion
     * const McVersion = await prisma.mcVersion.delete({
     *   where: {
     *     // ... filter to delete one McVersion
     *   }
     * })
     * 
     */
    delete<T extends McVersionDeleteArgs>(args: SelectSubset<T, McVersionDeleteArgs<ExtArgs>>): Prisma__McVersionClient<$Result.GetResult<Prisma.$McVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one McVersion.
     * @param {McVersionUpdateArgs} args - Arguments to update one McVersion.
     * @example
     * // Update one McVersion
     * const mcVersion = await prisma.mcVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends McVersionUpdateArgs>(args: SelectSubset<T, McVersionUpdateArgs<ExtArgs>>): Prisma__McVersionClient<$Result.GetResult<Prisma.$McVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more McVersions.
     * @param {McVersionDeleteManyArgs} args - Arguments to filter McVersions to delete.
     * @example
     * // Delete a few McVersions
     * const { count } = await prisma.mcVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends McVersionDeleteManyArgs>(args?: SelectSubset<T, McVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more McVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many McVersions
     * const mcVersion = await prisma.mcVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends McVersionUpdateManyArgs>(args: SelectSubset<T, McVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more McVersions and returns the data updated in the database.
     * @param {McVersionUpdateManyAndReturnArgs} args - Arguments to update many McVersions.
     * @example
     * // Update many McVersions
     * const mcVersion = await prisma.mcVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more McVersions and only return the `id`
     * const mcVersionWithIdOnly = await prisma.mcVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends McVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, McVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one McVersion.
     * @param {McVersionUpsertArgs} args - Arguments to update or create a McVersion.
     * @example
     * // Update or create a McVersion
     * const mcVersion = await prisma.mcVersion.upsert({
     *   create: {
     *     // ... data to create a McVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the McVersion we want to update
     *   }
     * })
     */
    upsert<T extends McVersionUpsertArgs>(args: SelectSubset<T, McVersionUpsertArgs<ExtArgs>>): Prisma__McVersionClient<$Result.GetResult<Prisma.$McVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of McVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionCountArgs} args - Arguments to filter McVersions to count.
     * @example
     * // Count the number of McVersions
     * const count = await prisma.mcVersion.count({
     *   where: {
     *     // ... the filter for the McVersions we want to count
     *   }
     * })
    **/
    count<T extends McVersionCountArgs>(
      args?: Subset<T, McVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], McVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a McVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends McVersionAggregateArgs>(args: Subset<T, McVersionAggregateArgs>): Prisma.PrismaPromise<GetMcVersionAggregateType<T>>

    /**
     * Group by McVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends McVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: McVersionGroupByArgs['orderBy'] }
        : { orderBy?: McVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, McVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMcVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the McVersion model
   */
  readonly fields: McVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for McVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__McVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceFiles<T extends McVersion$sourceFilesArgs<ExtArgs> = {}>(args?: Subset<T, McVersion$sourceFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McSourceFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the McVersion model
   */
  interface McVersionFieldRefs {
    readonly id: FieldRef<"McVersion", 'Int'>
    readonly versionId: FieldRef<"McVersion", 'String'>
    readonly type: FieldRef<"McVersion", 'String'>
    readonly jarPath: FieldRef<"McVersion", 'String'>
    readonly decompPath: FieldRef<"McVersion", 'String'>
    readonly decompiled: FieldRef<"McVersion", 'Boolean'>
    readonly indexed: FieldRef<"McVersion", 'Boolean'>
    readonly releaseTime: FieldRef<"McVersion", 'DateTime'>
    readonly createdAt: FieldRef<"McVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * McVersion findUnique
   */
  export type McVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersion
     */
    select?: McVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersion
     */
    omit?: McVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McVersionInclude<ExtArgs> | null
    /**
     * Filter, which McVersion to fetch.
     */
    where: McVersionWhereUniqueInput
  }

  /**
   * McVersion findUniqueOrThrow
   */
  export type McVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersion
     */
    select?: McVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersion
     */
    omit?: McVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McVersionInclude<ExtArgs> | null
    /**
     * Filter, which McVersion to fetch.
     */
    where: McVersionWhereUniqueInput
  }

  /**
   * McVersion findFirst
   */
  export type McVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersion
     */
    select?: McVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersion
     */
    omit?: McVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McVersionInclude<ExtArgs> | null
    /**
     * Filter, which McVersion to fetch.
     */
    where?: McVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McVersions to fetch.
     */
    orderBy?: McVersionOrderByWithRelationInput | McVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for McVersions.
     */
    cursor?: McVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of McVersions.
     */
    distinct?: McVersionScalarFieldEnum | McVersionScalarFieldEnum[]
  }

  /**
   * McVersion findFirstOrThrow
   */
  export type McVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersion
     */
    select?: McVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersion
     */
    omit?: McVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McVersionInclude<ExtArgs> | null
    /**
     * Filter, which McVersion to fetch.
     */
    where?: McVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McVersions to fetch.
     */
    orderBy?: McVersionOrderByWithRelationInput | McVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for McVersions.
     */
    cursor?: McVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of McVersions.
     */
    distinct?: McVersionScalarFieldEnum | McVersionScalarFieldEnum[]
  }

  /**
   * McVersion findMany
   */
  export type McVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersion
     */
    select?: McVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersion
     */
    omit?: McVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McVersionInclude<ExtArgs> | null
    /**
     * Filter, which McVersions to fetch.
     */
    where?: McVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McVersions to fetch.
     */
    orderBy?: McVersionOrderByWithRelationInput | McVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing McVersions.
     */
    cursor?: McVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McVersions.
     */
    skip?: number
    distinct?: McVersionScalarFieldEnum | McVersionScalarFieldEnum[]
  }

  /**
   * McVersion create
   */
  export type McVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersion
     */
    select?: McVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersion
     */
    omit?: McVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a McVersion.
     */
    data: XOR<McVersionCreateInput, McVersionUncheckedCreateInput>
  }

  /**
   * McVersion createMany
   */
  export type McVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many McVersions.
     */
    data: McVersionCreateManyInput | McVersionCreateManyInput[]
  }

  /**
   * McVersion createManyAndReturn
   */
  export type McVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersion
     */
    select?: McVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the McVersion
     */
    omit?: McVersionOmit<ExtArgs> | null
    /**
     * The data used to create many McVersions.
     */
    data: McVersionCreateManyInput | McVersionCreateManyInput[]
  }

  /**
   * McVersion update
   */
  export type McVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersion
     */
    select?: McVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersion
     */
    omit?: McVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a McVersion.
     */
    data: XOR<McVersionUpdateInput, McVersionUncheckedUpdateInput>
    /**
     * Choose, which McVersion to update.
     */
    where: McVersionWhereUniqueInput
  }

  /**
   * McVersion updateMany
   */
  export type McVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update McVersions.
     */
    data: XOR<McVersionUpdateManyMutationInput, McVersionUncheckedUpdateManyInput>
    /**
     * Filter which McVersions to update
     */
    where?: McVersionWhereInput
    /**
     * Limit how many McVersions to update.
     */
    limit?: number
  }

  /**
   * McVersion updateManyAndReturn
   */
  export type McVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersion
     */
    select?: McVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the McVersion
     */
    omit?: McVersionOmit<ExtArgs> | null
    /**
     * The data used to update McVersions.
     */
    data: XOR<McVersionUpdateManyMutationInput, McVersionUncheckedUpdateManyInput>
    /**
     * Filter which McVersions to update
     */
    where?: McVersionWhereInput
    /**
     * Limit how many McVersions to update.
     */
    limit?: number
  }

  /**
   * McVersion upsert
   */
  export type McVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersion
     */
    select?: McVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersion
     */
    omit?: McVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the McVersion to update in case it exists.
     */
    where: McVersionWhereUniqueInput
    /**
     * In case the McVersion found by the `where` argument doesn't exist, create a new McVersion with this data.
     */
    create: XOR<McVersionCreateInput, McVersionUncheckedCreateInput>
    /**
     * In case the McVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<McVersionUpdateInput, McVersionUncheckedUpdateInput>
  }

  /**
   * McVersion delete
   */
  export type McVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersion
     */
    select?: McVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersion
     */
    omit?: McVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McVersionInclude<ExtArgs> | null
    /**
     * Filter which McVersion to delete.
     */
    where: McVersionWhereUniqueInput
  }

  /**
   * McVersion deleteMany
   */
  export type McVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which McVersions to delete
     */
    where?: McVersionWhereInput
    /**
     * Limit how many McVersions to delete.
     */
    limit?: number
  }

  /**
   * McVersion.sourceFiles
   */
  export type McVersion$sourceFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileInclude<ExtArgs> | null
    where?: McSourceFileWhereInput
    orderBy?: McSourceFileOrderByWithRelationInput | McSourceFileOrderByWithRelationInput[]
    cursor?: McSourceFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: McSourceFileScalarFieldEnum | McSourceFileScalarFieldEnum[]
  }

  /**
   * McVersion without action
   */
  export type McVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersion
     */
    select?: McVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersion
     */
    omit?: McVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McVersionInclude<ExtArgs> | null
  }


  /**
   * Model McVersionDiff
   */

  export type AggregateMcVersionDiff = {
    _count: McVersionDiffCountAggregateOutputType | null
    _avg: McVersionDiffAvgAggregateOutputType | null
    _sum: McVersionDiffSumAggregateOutputType | null
    _min: McVersionDiffMinAggregateOutputType | null
    _max: McVersionDiffMaxAggregateOutputType | null
  }

  export type McVersionDiffAvgAggregateOutputType = {
    id: number | null
  }

  export type McVersionDiffSumAggregateOutputType = {
    id: number | null
  }

  export type McVersionDiffMinAggregateOutputType = {
    id: number | null
    versionA: string | null
    versionB: string | null
    packagesHash: string | null
    result: string | null
    createdAt: Date | null
  }

  export type McVersionDiffMaxAggregateOutputType = {
    id: number | null
    versionA: string | null
    versionB: string | null
    packagesHash: string | null
    result: string | null
    createdAt: Date | null
  }

  export type McVersionDiffCountAggregateOutputType = {
    id: number
    versionA: number
    versionB: number
    packagesHash: number
    result: number
    createdAt: number
    _all: number
  }


  export type McVersionDiffAvgAggregateInputType = {
    id?: true
  }

  export type McVersionDiffSumAggregateInputType = {
    id?: true
  }

  export type McVersionDiffMinAggregateInputType = {
    id?: true
    versionA?: true
    versionB?: true
    packagesHash?: true
    result?: true
    createdAt?: true
  }

  export type McVersionDiffMaxAggregateInputType = {
    id?: true
    versionA?: true
    versionB?: true
    packagesHash?: true
    result?: true
    createdAt?: true
  }

  export type McVersionDiffCountAggregateInputType = {
    id?: true
    versionA?: true
    versionB?: true
    packagesHash?: true
    result?: true
    createdAt?: true
    _all?: true
  }

  export type McVersionDiffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which McVersionDiff to aggregate.
     */
    where?: McVersionDiffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McVersionDiffs to fetch.
     */
    orderBy?: McVersionDiffOrderByWithRelationInput | McVersionDiffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: McVersionDiffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McVersionDiffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McVersionDiffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned McVersionDiffs
    **/
    _count?: true | McVersionDiffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: McVersionDiffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: McVersionDiffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: McVersionDiffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: McVersionDiffMaxAggregateInputType
  }

  export type GetMcVersionDiffAggregateType<T extends McVersionDiffAggregateArgs> = {
        [P in keyof T & keyof AggregateMcVersionDiff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMcVersionDiff[P]>
      : GetScalarType<T[P], AggregateMcVersionDiff[P]>
  }




  export type McVersionDiffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: McVersionDiffWhereInput
    orderBy?: McVersionDiffOrderByWithAggregationInput | McVersionDiffOrderByWithAggregationInput[]
    by: McVersionDiffScalarFieldEnum[] | McVersionDiffScalarFieldEnum
    having?: McVersionDiffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: McVersionDiffCountAggregateInputType | true
    _avg?: McVersionDiffAvgAggregateInputType
    _sum?: McVersionDiffSumAggregateInputType
    _min?: McVersionDiffMinAggregateInputType
    _max?: McVersionDiffMaxAggregateInputType
  }

  export type McVersionDiffGroupByOutputType = {
    id: number
    versionA: string
    versionB: string
    packagesHash: string
    result: string
    createdAt: Date
    _count: McVersionDiffCountAggregateOutputType | null
    _avg: McVersionDiffAvgAggregateOutputType | null
    _sum: McVersionDiffSumAggregateOutputType | null
    _min: McVersionDiffMinAggregateOutputType | null
    _max: McVersionDiffMaxAggregateOutputType | null
  }

  type GetMcVersionDiffGroupByPayload<T extends McVersionDiffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<McVersionDiffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof McVersionDiffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], McVersionDiffGroupByOutputType[P]>
            : GetScalarType<T[P], McVersionDiffGroupByOutputType[P]>
        }
      >
    >


  export type McVersionDiffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    versionA?: boolean
    versionB?: boolean
    packagesHash?: boolean
    result?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mcVersionDiff"]>

  export type McVersionDiffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    versionA?: boolean
    versionB?: boolean
    packagesHash?: boolean
    result?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mcVersionDiff"]>

  export type McVersionDiffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    versionA?: boolean
    versionB?: boolean
    packagesHash?: boolean
    result?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mcVersionDiff"]>

  export type McVersionDiffSelectScalar = {
    id?: boolean
    versionA?: boolean
    versionB?: boolean
    packagesHash?: boolean
    result?: boolean
    createdAt?: boolean
  }

  export type McVersionDiffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "versionA" | "versionB" | "packagesHash" | "result" | "createdAt", ExtArgs["result"]["mcVersionDiff"]>

  export type $McVersionDiffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "McVersionDiff"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      versionA: string
      versionB: string
      packagesHash: string
      result: string
      createdAt: Date
    }, ExtArgs["result"]["mcVersionDiff"]>
    composites: {}
  }

  type McVersionDiffGetPayload<S extends boolean | null | undefined | McVersionDiffDefaultArgs> = $Result.GetResult<Prisma.$McVersionDiffPayload, S>

  type McVersionDiffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<McVersionDiffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: McVersionDiffCountAggregateInputType | true
    }

  export interface McVersionDiffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['McVersionDiff'], meta: { name: 'McVersionDiff' } }
    /**
     * Find zero or one McVersionDiff that matches the filter.
     * @param {McVersionDiffFindUniqueArgs} args - Arguments to find a McVersionDiff
     * @example
     * // Get one McVersionDiff
     * const mcVersionDiff = await prisma.mcVersionDiff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends McVersionDiffFindUniqueArgs>(args: SelectSubset<T, McVersionDiffFindUniqueArgs<ExtArgs>>): Prisma__McVersionDiffClient<$Result.GetResult<Prisma.$McVersionDiffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one McVersionDiff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {McVersionDiffFindUniqueOrThrowArgs} args - Arguments to find a McVersionDiff
     * @example
     * // Get one McVersionDiff
     * const mcVersionDiff = await prisma.mcVersionDiff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends McVersionDiffFindUniqueOrThrowArgs>(args: SelectSubset<T, McVersionDiffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__McVersionDiffClient<$Result.GetResult<Prisma.$McVersionDiffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first McVersionDiff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionDiffFindFirstArgs} args - Arguments to find a McVersionDiff
     * @example
     * // Get one McVersionDiff
     * const mcVersionDiff = await prisma.mcVersionDiff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends McVersionDiffFindFirstArgs>(args?: SelectSubset<T, McVersionDiffFindFirstArgs<ExtArgs>>): Prisma__McVersionDiffClient<$Result.GetResult<Prisma.$McVersionDiffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first McVersionDiff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionDiffFindFirstOrThrowArgs} args - Arguments to find a McVersionDiff
     * @example
     * // Get one McVersionDiff
     * const mcVersionDiff = await prisma.mcVersionDiff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends McVersionDiffFindFirstOrThrowArgs>(args?: SelectSubset<T, McVersionDiffFindFirstOrThrowArgs<ExtArgs>>): Prisma__McVersionDiffClient<$Result.GetResult<Prisma.$McVersionDiffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more McVersionDiffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionDiffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all McVersionDiffs
     * const mcVersionDiffs = await prisma.mcVersionDiff.findMany()
     * 
     * // Get first 10 McVersionDiffs
     * const mcVersionDiffs = await prisma.mcVersionDiff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mcVersionDiffWithIdOnly = await prisma.mcVersionDiff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends McVersionDiffFindManyArgs>(args?: SelectSubset<T, McVersionDiffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McVersionDiffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a McVersionDiff.
     * @param {McVersionDiffCreateArgs} args - Arguments to create a McVersionDiff.
     * @example
     * // Create one McVersionDiff
     * const McVersionDiff = await prisma.mcVersionDiff.create({
     *   data: {
     *     // ... data to create a McVersionDiff
     *   }
     * })
     * 
     */
    create<T extends McVersionDiffCreateArgs>(args: SelectSubset<T, McVersionDiffCreateArgs<ExtArgs>>): Prisma__McVersionDiffClient<$Result.GetResult<Prisma.$McVersionDiffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many McVersionDiffs.
     * @param {McVersionDiffCreateManyArgs} args - Arguments to create many McVersionDiffs.
     * @example
     * // Create many McVersionDiffs
     * const mcVersionDiff = await prisma.mcVersionDiff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends McVersionDiffCreateManyArgs>(args?: SelectSubset<T, McVersionDiffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many McVersionDiffs and returns the data saved in the database.
     * @param {McVersionDiffCreateManyAndReturnArgs} args - Arguments to create many McVersionDiffs.
     * @example
     * // Create many McVersionDiffs
     * const mcVersionDiff = await prisma.mcVersionDiff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many McVersionDiffs and only return the `id`
     * const mcVersionDiffWithIdOnly = await prisma.mcVersionDiff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends McVersionDiffCreateManyAndReturnArgs>(args?: SelectSubset<T, McVersionDiffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McVersionDiffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a McVersionDiff.
     * @param {McVersionDiffDeleteArgs} args - Arguments to delete one McVersionDiff.
     * @example
     * // Delete one McVersionDiff
     * const McVersionDiff = await prisma.mcVersionDiff.delete({
     *   where: {
     *     // ... filter to delete one McVersionDiff
     *   }
     * })
     * 
     */
    delete<T extends McVersionDiffDeleteArgs>(args: SelectSubset<T, McVersionDiffDeleteArgs<ExtArgs>>): Prisma__McVersionDiffClient<$Result.GetResult<Prisma.$McVersionDiffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one McVersionDiff.
     * @param {McVersionDiffUpdateArgs} args - Arguments to update one McVersionDiff.
     * @example
     * // Update one McVersionDiff
     * const mcVersionDiff = await prisma.mcVersionDiff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends McVersionDiffUpdateArgs>(args: SelectSubset<T, McVersionDiffUpdateArgs<ExtArgs>>): Prisma__McVersionDiffClient<$Result.GetResult<Prisma.$McVersionDiffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more McVersionDiffs.
     * @param {McVersionDiffDeleteManyArgs} args - Arguments to filter McVersionDiffs to delete.
     * @example
     * // Delete a few McVersionDiffs
     * const { count } = await prisma.mcVersionDiff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends McVersionDiffDeleteManyArgs>(args?: SelectSubset<T, McVersionDiffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more McVersionDiffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionDiffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many McVersionDiffs
     * const mcVersionDiff = await prisma.mcVersionDiff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends McVersionDiffUpdateManyArgs>(args: SelectSubset<T, McVersionDiffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more McVersionDiffs and returns the data updated in the database.
     * @param {McVersionDiffUpdateManyAndReturnArgs} args - Arguments to update many McVersionDiffs.
     * @example
     * // Update many McVersionDiffs
     * const mcVersionDiff = await prisma.mcVersionDiff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more McVersionDiffs and only return the `id`
     * const mcVersionDiffWithIdOnly = await prisma.mcVersionDiff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends McVersionDiffUpdateManyAndReturnArgs>(args: SelectSubset<T, McVersionDiffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McVersionDiffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one McVersionDiff.
     * @param {McVersionDiffUpsertArgs} args - Arguments to update or create a McVersionDiff.
     * @example
     * // Update or create a McVersionDiff
     * const mcVersionDiff = await prisma.mcVersionDiff.upsert({
     *   create: {
     *     // ... data to create a McVersionDiff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the McVersionDiff we want to update
     *   }
     * })
     */
    upsert<T extends McVersionDiffUpsertArgs>(args: SelectSubset<T, McVersionDiffUpsertArgs<ExtArgs>>): Prisma__McVersionDiffClient<$Result.GetResult<Prisma.$McVersionDiffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of McVersionDiffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionDiffCountArgs} args - Arguments to filter McVersionDiffs to count.
     * @example
     * // Count the number of McVersionDiffs
     * const count = await prisma.mcVersionDiff.count({
     *   where: {
     *     // ... the filter for the McVersionDiffs we want to count
     *   }
     * })
    **/
    count<T extends McVersionDiffCountArgs>(
      args?: Subset<T, McVersionDiffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], McVersionDiffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a McVersionDiff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionDiffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends McVersionDiffAggregateArgs>(args: Subset<T, McVersionDiffAggregateArgs>): Prisma.PrismaPromise<GetMcVersionDiffAggregateType<T>>

    /**
     * Group by McVersionDiff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McVersionDiffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends McVersionDiffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: McVersionDiffGroupByArgs['orderBy'] }
        : { orderBy?: McVersionDiffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, McVersionDiffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMcVersionDiffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the McVersionDiff model
   */
  readonly fields: McVersionDiffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for McVersionDiff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__McVersionDiffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the McVersionDiff model
   */
  interface McVersionDiffFieldRefs {
    readonly id: FieldRef<"McVersionDiff", 'Int'>
    readonly versionA: FieldRef<"McVersionDiff", 'String'>
    readonly versionB: FieldRef<"McVersionDiff", 'String'>
    readonly packagesHash: FieldRef<"McVersionDiff", 'String'>
    readonly result: FieldRef<"McVersionDiff", 'String'>
    readonly createdAt: FieldRef<"McVersionDiff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * McVersionDiff findUnique
   */
  export type McVersionDiffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionDiff
     */
    select?: McVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersionDiff
     */
    omit?: McVersionDiffOmit<ExtArgs> | null
    /**
     * Filter, which McVersionDiff to fetch.
     */
    where: McVersionDiffWhereUniqueInput
  }

  /**
   * McVersionDiff findUniqueOrThrow
   */
  export type McVersionDiffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionDiff
     */
    select?: McVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersionDiff
     */
    omit?: McVersionDiffOmit<ExtArgs> | null
    /**
     * Filter, which McVersionDiff to fetch.
     */
    where: McVersionDiffWhereUniqueInput
  }

  /**
   * McVersionDiff findFirst
   */
  export type McVersionDiffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionDiff
     */
    select?: McVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersionDiff
     */
    omit?: McVersionDiffOmit<ExtArgs> | null
    /**
     * Filter, which McVersionDiff to fetch.
     */
    where?: McVersionDiffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McVersionDiffs to fetch.
     */
    orderBy?: McVersionDiffOrderByWithRelationInput | McVersionDiffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for McVersionDiffs.
     */
    cursor?: McVersionDiffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McVersionDiffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McVersionDiffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of McVersionDiffs.
     */
    distinct?: McVersionDiffScalarFieldEnum | McVersionDiffScalarFieldEnum[]
  }

  /**
   * McVersionDiff findFirstOrThrow
   */
  export type McVersionDiffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionDiff
     */
    select?: McVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersionDiff
     */
    omit?: McVersionDiffOmit<ExtArgs> | null
    /**
     * Filter, which McVersionDiff to fetch.
     */
    where?: McVersionDiffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McVersionDiffs to fetch.
     */
    orderBy?: McVersionDiffOrderByWithRelationInput | McVersionDiffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for McVersionDiffs.
     */
    cursor?: McVersionDiffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McVersionDiffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McVersionDiffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of McVersionDiffs.
     */
    distinct?: McVersionDiffScalarFieldEnum | McVersionDiffScalarFieldEnum[]
  }

  /**
   * McVersionDiff findMany
   */
  export type McVersionDiffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionDiff
     */
    select?: McVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersionDiff
     */
    omit?: McVersionDiffOmit<ExtArgs> | null
    /**
     * Filter, which McVersionDiffs to fetch.
     */
    where?: McVersionDiffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McVersionDiffs to fetch.
     */
    orderBy?: McVersionDiffOrderByWithRelationInput | McVersionDiffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing McVersionDiffs.
     */
    cursor?: McVersionDiffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McVersionDiffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McVersionDiffs.
     */
    skip?: number
    distinct?: McVersionDiffScalarFieldEnum | McVersionDiffScalarFieldEnum[]
  }

  /**
   * McVersionDiff create
   */
  export type McVersionDiffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionDiff
     */
    select?: McVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersionDiff
     */
    omit?: McVersionDiffOmit<ExtArgs> | null
    /**
     * The data needed to create a McVersionDiff.
     */
    data: XOR<McVersionDiffCreateInput, McVersionDiffUncheckedCreateInput>
  }

  /**
   * McVersionDiff createMany
   */
  export type McVersionDiffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many McVersionDiffs.
     */
    data: McVersionDiffCreateManyInput | McVersionDiffCreateManyInput[]
  }

  /**
   * McVersionDiff createManyAndReturn
   */
  export type McVersionDiffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionDiff
     */
    select?: McVersionDiffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the McVersionDiff
     */
    omit?: McVersionDiffOmit<ExtArgs> | null
    /**
     * The data used to create many McVersionDiffs.
     */
    data: McVersionDiffCreateManyInput | McVersionDiffCreateManyInput[]
  }

  /**
   * McVersionDiff update
   */
  export type McVersionDiffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionDiff
     */
    select?: McVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersionDiff
     */
    omit?: McVersionDiffOmit<ExtArgs> | null
    /**
     * The data needed to update a McVersionDiff.
     */
    data: XOR<McVersionDiffUpdateInput, McVersionDiffUncheckedUpdateInput>
    /**
     * Choose, which McVersionDiff to update.
     */
    where: McVersionDiffWhereUniqueInput
  }

  /**
   * McVersionDiff updateMany
   */
  export type McVersionDiffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update McVersionDiffs.
     */
    data: XOR<McVersionDiffUpdateManyMutationInput, McVersionDiffUncheckedUpdateManyInput>
    /**
     * Filter which McVersionDiffs to update
     */
    where?: McVersionDiffWhereInput
    /**
     * Limit how many McVersionDiffs to update.
     */
    limit?: number
  }

  /**
   * McVersionDiff updateManyAndReturn
   */
  export type McVersionDiffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionDiff
     */
    select?: McVersionDiffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the McVersionDiff
     */
    omit?: McVersionDiffOmit<ExtArgs> | null
    /**
     * The data used to update McVersionDiffs.
     */
    data: XOR<McVersionDiffUpdateManyMutationInput, McVersionDiffUncheckedUpdateManyInput>
    /**
     * Filter which McVersionDiffs to update
     */
    where?: McVersionDiffWhereInput
    /**
     * Limit how many McVersionDiffs to update.
     */
    limit?: number
  }

  /**
   * McVersionDiff upsert
   */
  export type McVersionDiffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionDiff
     */
    select?: McVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersionDiff
     */
    omit?: McVersionDiffOmit<ExtArgs> | null
    /**
     * The filter to search for the McVersionDiff to update in case it exists.
     */
    where: McVersionDiffWhereUniqueInput
    /**
     * In case the McVersionDiff found by the `where` argument doesn't exist, create a new McVersionDiff with this data.
     */
    create: XOR<McVersionDiffCreateInput, McVersionDiffUncheckedCreateInput>
    /**
     * In case the McVersionDiff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<McVersionDiffUpdateInput, McVersionDiffUncheckedUpdateInput>
  }

  /**
   * McVersionDiff delete
   */
  export type McVersionDiffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionDiff
     */
    select?: McVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersionDiff
     */
    omit?: McVersionDiffOmit<ExtArgs> | null
    /**
     * Filter which McVersionDiff to delete.
     */
    where: McVersionDiffWhereUniqueInput
  }

  /**
   * McVersionDiff deleteMany
   */
  export type McVersionDiffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which McVersionDiffs to delete
     */
    where?: McVersionDiffWhereInput
    /**
     * Limit how many McVersionDiffs to delete.
     */
    limit?: number
  }

  /**
   * McVersionDiff without action
   */
  export type McVersionDiffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McVersionDiff
     */
    select?: McVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McVersionDiff
     */
    omit?: McVersionDiffOmit<ExtArgs> | null
  }


  /**
   * Model ModVersionDiff
   */

  export type AggregateModVersionDiff = {
    _count: ModVersionDiffCountAggregateOutputType | null
    _avg: ModVersionDiffAvgAggregateOutputType | null
    _sum: ModVersionDiffSumAggregateOutputType | null
    _min: ModVersionDiffMinAggregateOutputType | null
    _max: ModVersionDiffMaxAggregateOutputType | null
  }

  export type ModVersionDiffAvgAggregateOutputType = {
    id: number | null
    modDbIdA: number | null
    modDbIdB: number | null
  }

  export type ModVersionDiffSumAggregateOutputType = {
    id: number | null
    modDbIdA: number | null
    modDbIdB: number | null
  }

  export type ModVersionDiffMinAggregateOutputType = {
    id: number | null
    modDbIdA: number | null
    modDbIdB: number | null
    packagesHash: string | null
    result: string | null
    createdAt: Date | null
  }

  export type ModVersionDiffMaxAggregateOutputType = {
    id: number | null
    modDbIdA: number | null
    modDbIdB: number | null
    packagesHash: string | null
    result: string | null
    createdAt: Date | null
  }

  export type ModVersionDiffCountAggregateOutputType = {
    id: number
    modDbIdA: number
    modDbIdB: number
    packagesHash: number
    result: number
    createdAt: number
    _all: number
  }


  export type ModVersionDiffAvgAggregateInputType = {
    id?: true
    modDbIdA?: true
    modDbIdB?: true
  }

  export type ModVersionDiffSumAggregateInputType = {
    id?: true
    modDbIdA?: true
    modDbIdB?: true
  }

  export type ModVersionDiffMinAggregateInputType = {
    id?: true
    modDbIdA?: true
    modDbIdB?: true
    packagesHash?: true
    result?: true
    createdAt?: true
  }

  export type ModVersionDiffMaxAggregateInputType = {
    id?: true
    modDbIdA?: true
    modDbIdB?: true
    packagesHash?: true
    result?: true
    createdAt?: true
  }

  export type ModVersionDiffCountAggregateInputType = {
    id?: true
    modDbIdA?: true
    modDbIdB?: true
    packagesHash?: true
    result?: true
    createdAt?: true
    _all?: true
  }

  export type ModVersionDiffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModVersionDiff to aggregate.
     */
    where?: ModVersionDiffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModVersionDiffs to fetch.
     */
    orderBy?: ModVersionDiffOrderByWithRelationInput | ModVersionDiffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModVersionDiffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModVersionDiffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModVersionDiffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModVersionDiffs
    **/
    _count?: true | ModVersionDiffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModVersionDiffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModVersionDiffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModVersionDiffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModVersionDiffMaxAggregateInputType
  }

  export type GetModVersionDiffAggregateType<T extends ModVersionDiffAggregateArgs> = {
        [P in keyof T & keyof AggregateModVersionDiff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModVersionDiff[P]>
      : GetScalarType<T[P], AggregateModVersionDiff[P]>
  }




  export type ModVersionDiffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModVersionDiffWhereInput
    orderBy?: ModVersionDiffOrderByWithAggregationInput | ModVersionDiffOrderByWithAggregationInput[]
    by: ModVersionDiffScalarFieldEnum[] | ModVersionDiffScalarFieldEnum
    having?: ModVersionDiffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModVersionDiffCountAggregateInputType | true
    _avg?: ModVersionDiffAvgAggregateInputType
    _sum?: ModVersionDiffSumAggregateInputType
    _min?: ModVersionDiffMinAggregateInputType
    _max?: ModVersionDiffMaxAggregateInputType
  }

  export type ModVersionDiffGroupByOutputType = {
    id: number
    modDbIdA: number
    modDbIdB: number
    packagesHash: string
    result: string
    createdAt: Date
    _count: ModVersionDiffCountAggregateOutputType | null
    _avg: ModVersionDiffAvgAggregateOutputType | null
    _sum: ModVersionDiffSumAggregateOutputType | null
    _min: ModVersionDiffMinAggregateOutputType | null
    _max: ModVersionDiffMaxAggregateOutputType | null
  }

  type GetModVersionDiffGroupByPayload<T extends ModVersionDiffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModVersionDiffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModVersionDiffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModVersionDiffGroupByOutputType[P]>
            : GetScalarType<T[P], ModVersionDiffGroupByOutputType[P]>
        }
      >
    >


  export type ModVersionDiffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modDbIdA?: boolean
    modDbIdB?: boolean
    packagesHash?: boolean
    result?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["modVersionDiff"]>

  export type ModVersionDiffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modDbIdA?: boolean
    modDbIdB?: boolean
    packagesHash?: boolean
    result?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["modVersionDiff"]>

  export type ModVersionDiffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modDbIdA?: boolean
    modDbIdB?: boolean
    packagesHash?: boolean
    result?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["modVersionDiff"]>

  export type ModVersionDiffSelectScalar = {
    id?: boolean
    modDbIdA?: boolean
    modDbIdB?: boolean
    packagesHash?: boolean
    result?: boolean
    createdAt?: boolean
  }

  export type ModVersionDiffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modDbIdA" | "modDbIdB" | "packagesHash" | "result" | "createdAt", ExtArgs["result"]["modVersionDiff"]>

  export type $ModVersionDiffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModVersionDiff"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modDbIdA: number
      modDbIdB: number
      packagesHash: string
      result: string
      createdAt: Date
    }, ExtArgs["result"]["modVersionDiff"]>
    composites: {}
  }

  type ModVersionDiffGetPayload<S extends boolean | null | undefined | ModVersionDiffDefaultArgs> = $Result.GetResult<Prisma.$ModVersionDiffPayload, S>

  type ModVersionDiffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModVersionDiffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModVersionDiffCountAggregateInputType | true
    }

  export interface ModVersionDiffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModVersionDiff'], meta: { name: 'ModVersionDiff' } }
    /**
     * Find zero or one ModVersionDiff that matches the filter.
     * @param {ModVersionDiffFindUniqueArgs} args - Arguments to find a ModVersionDiff
     * @example
     * // Get one ModVersionDiff
     * const modVersionDiff = await prisma.modVersionDiff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModVersionDiffFindUniqueArgs>(args: SelectSubset<T, ModVersionDiffFindUniqueArgs<ExtArgs>>): Prisma__ModVersionDiffClient<$Result.GetResult<Prisma.$ModVersionDiffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModVersionDiff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModVersionDiffFindUniqueOrThrowArgs} args - Arguments to find a ModVersionDiff
     * @example
     * // Get one ModVersionDiff
     * const modVersionDiff = await prisma.modVersionDiff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModVersionDiffFindUniqueOrThrowArgs>(args: SelectSubset<T, ModVersionDiffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModVersionDiffClient<$Result.GetResult<Prisma.$ModVersionDiffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModVersionDiff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionDiffFindFirstArgs} args - Arguments to find a ModVersionDiff
     * @example
     * // Get one ModVersionDiff
     * const modVersionDiff = await prisma.modVersionDiff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModVersionDiffFindFirstArgs>(args?: SelectSubset<T, ModVersionDiffFindFirstArgs<ExtArgs>>): Prisma__ModVersionDiffClient<$Result.GetResult<Prisma.$ModVersionDiffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModVersionDiff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionDiffFindFirstOrThrowArgs} args - Arguments to find a ModVersionDiff
     * @example
     * // Get one ModVersionDiff
     * const modVersionDiff = await prisma.modVersionDiff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModVersionDiffFindFirstOrThrowArgs>(args?: SelectSubset<T, ModVersionDiffFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModVersionDiffClient<$Result.GetResult<Prisma.$ModVersionDiffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModVersionDiffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionDiffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModVersionDiffs
     * const modVersionDiffs = await prisma.modVersionDiff.findMany()
     * 
     * // Get first 10 ModVersionDiffs
     * const modVersionDiffs = await prisma.modVersionDiff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modVersionDiffWithIdOnly = await prisma.modVersionDiff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModVersionDiffFindManyArgs>(args?: SelectSubset<T, ModVersionDiffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModVersionDiffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModVersionDiff.
     * @param {ModVersionDiffCreateArgs} args - Arguments to create a ModVersionDiff.
     * @example
     * // Create one ModVersionDiff
     * const ModVersionDiff = await prisma.modVersionDiff.create({
     *   data: {
     *     // ... data to create a ModVersionDiff
     *   }
     * })
     * 
     */
    create<T extends ModVersionDiffCreateArgs>(args: SelectSubset<T, ModVersionDiffCreateArgs<ExtArgs>>): Prisma__ModVersionDiffClient<$Result.GetResult<Prisma.$ModVersionDiffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModVersionDiffs.
     * @param {ModVersionDiffCreateManyArgs} args - Arguments to create many ModVersionDiffs.
     * @example
     * // Create many ModVersionDiffs
     * const modVersionDiff = await prisma.modVersionDiff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModVersionDiffCreateManyArgs>(args?: SelectSubset<T, ModVersionDiffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModVersionDiffs and returns the data saved in the database.
     * @param {ModVersionDiffCreateManyAndReturnArgs} args - Arguments to create many ModVersionDiffs.
     * @example
     * // Create many ModVersionDiffs
     * const modVersionDiff = await prisma.modVersionDiff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModVersionDiffs and only return the `id`
     * const modVersionDiffWithIdOnly = await prisma.modVersionDiff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModVersionDiffCreateManyAndReturnArgs>(args?: SelectSubset<T, ModVersionDiffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModVersionDiffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModVersionDiff.
     * @param {ModVersionDiffDeleteArgs} args - Arguments to delete one ModVersionDiff.
     * @example
     * // Delete one ModVersionDiff
     * const ModVersionDiff = await prisma.modVersionDiff.delete({
     *   where: {
     *     // ... filter to delete one ModVersionDiff
     *   }
     * })
     * 
     */
    delete<T extends ModVersionDiffDeleteArgs>(args: SelectSubset<T, ModVersionDiffDeleteArgs<ExtArgs>>): Prisma__ModVersionDiffClient<$Result.GetResult<Prisma.$ModVersionDiffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModVersionDiff.
     * @param {ModVersionDiffUpdateArgs} args - Arguments to update one ModVersionDiff.
     * @example
     * // Update one ModVersionDiff
     * const modVersionDiff = await prisma.modVersionDiff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModVersionDiffUpdateArgs>(args: SelectSubset<T, ModVersionDiffUpdateArgs<ExtArgs>>): Prisma__ModVersionDiffClient<$Result.GetResult<Prisma.$ModVersionDiffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModVersionDiffs.
     * @param {ModVersionDiffDeleteManyArgs} args - Arguments to filter ModVersionDiffs to delete.
     * @example
     * // Delete a few ModVersionDiffs
     * const { count } = await prisma.modVersionDiff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModVersionDiffDeleteManyArgs>(args?: SelectSubset<T, ModVersionDiffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModVersionDiffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionDiffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModVersionDiffs
     * const modVersionDiff = await prisma.modVersionDiff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModVersionDiffUpdateManyArgs>(args: SelectSubset<T, ModVersionDiffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModVersionDiffs and returns the data updated in the database.
     * @param {ModVersionDiffUpdateManyAndReturnArgs} args - Arguments to update many ModVersionDiffs.
     * @example
     * // Update many ModVersionDiffs
     * const modVersionDiff = await prisma.modVersionDiff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModVersionDiffs and only return the `id`
     * const modVersionDiffWithIdOnly = await prisma.modVersionDiff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModVersionDiffUpdateManyAndReturnArgs>(args: SelectSubset<T, ModVersionDiffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModVersionDiffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModVersionDiff.
     * @param {ModVersionDiffUpsertArgs} args - Arguments to update or create a ModVersionDiff.
     * @example
     * // Update or create a ModVersionDiff
     * const modVersionDiff = await prisma.modVersionDiff.upsert({
     *   create: {
     *     // ... data to create a ModVersionDiff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModVersionDiff we want to update
     *   }
     * })
     */
    upsert<T extends ModVersionDiffUpsertArgs>(args: SelectSubset<T, ModVersionDiffUpsertArgs<ExtArgs>>): Prisma__ModVersionDiffClient<$Result.GetResult<Prisma.$ModVersionDiffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModVersionDiffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionDiffCountArgs} args - Arguments to filter ModVersionDiffs to count.
     * @example
     * // Count the number of ModVersionDiffs
     * const count = await prisma.modVersionDiff.count({
     *   where: {
     *     // ... the filter for the ModVersionDiffs we want to count
     *   }
     * })
    **/
    count<T extends ModVersionDiffCountArgs>(
      args?: Subset<T, ModVersionDiffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModVersionDiffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModVersionDiff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionDiffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModVersionDiffAggregateArgs>(args: Subset<T, ModVersionDiffAggregateArgs>): Prisma.PrismaPromise<GetModVersionDiffAggregateType<T>>

    /**
     * Group by ModVersionDiff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionDiffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModVersionDiffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModVersionDiffGroupByArgs['orderBy'] }
        : { orderBy?: ModVersionDiffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModVersionDiffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModVersionDiffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModVersionDiff model
   */
  readonly fields: ModVersionDiffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModVersionDiff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModVersionDiffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModVersionDiff model
   */
  interface ModVersionDiffFieldRefs {
    readonly id: FieldRef<"ModVersionDiff", 'Int'>
    readonly modDbIdA: FieldRef<"ModVersionDiff", 'Int'>
    readonly modDbIdB: FieldRef<"ModVersionDiff", 'Int'>
    readonly packagesHash: FieldRef<"ModVersionDiff", 'String'>
    readonly result: FieldRef<"ModVersionDiff", 'String'>
    readonly createdAt: FieldRef<"ModVersionDiff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModVersionDiff findUnique
   */
  export type ModVersionDiffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModVersionDiff
     */
    select?: ModVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModVersionDiff
     */
    omit?: ModVersionDiffOmit<ExtArgs> | null
    /**
     * Filter, which ModVersionDiff to fetch.
     */
    where: ModVersionDiffWhereUniqueInput
  }

  /**
   * ModVersionDiff findUniqueOrThrow
   */
  export type ModVersionDiffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModVersionDiff
     */
    select?: ModVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModVersionDiff
     */
    omit?: ModVersionDiffOmit<ExtArgs> | null
    /**
     * Filter, which ModVersionDiff to fetch.
     */
    where: ModVersionDiffWhereUniqueInput
  }

  /**
   * ModVersionDiff findFirst
   */
  export type ModVersionDiffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModVersionDiff
     */
    select?: ModVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModVersionDiff
     */
    omit?: ModVersionDiffOmit<ExtArgs> | null
    /**
     * Filter, which ModVersionDiff to fetch.
     */
    where?: ModVersionDiffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModVersionDiffs to fetch.
     */
    orderBy?: ModVersionDiffOrderByWithRelationInput | ModVersionDiffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModVersionDiffs.
     */
    cursor?: ModVersionDiffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModVersionDiffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModVersionDiffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModVersionDiffs.
     */
    distinct?: ModVersionDiffScalarFieldEnum | ModVersionDiffScalarFieldEnum[]
  }

  /**
   * ModVersionDiff findFirstOrThrow
   */
  export type ModVersionDiffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModVersionDiff
     */
    select?: ModVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModVersionDiff
     */
    omit?: ModVersionDiffOmit<ExtArgs> | null
    /**
     * Filter, which ModVersionDiff to fetch.
     */
    where?: ModVersionDiffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModVersionDiffs to fetch.
     */
    orderBy?: ModVersionDiffOrderByWithRelationInput | ModVersionDiffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModVersionDiffs.
     */
    cursor?: ModVersionDiffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModVersionDiffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModVersionDiffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModVersionDiffs.
     */
    distinct?: ModVersionDiffScalarFieldEnum | ModVersionDiffScalarFieldEnum[]
  }

  /**
   * ModVersionDiff findMany
   */
  export type ModVersionDiffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModVersionDiff
     */
    select?: ModVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModVersionDiff
     */
    omit?: ModVersionDiffOmit<ExtArgs> | null
    /**
     * Filter, which ModVersionDiffs to fetch.
     */
    where?: ModVersionDiffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModVersionDiffs to fetch.
     */
    orderBy?: ModVersionDiffOrderByWithRelationInput | ModVersionDiffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModVersionDiffs.
     */
    cursor?: ModVersionDiffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModVersionDiffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModVersionDiffs.
     */
    skip?: number
    distinct?: ModVersionDiffScalarFieldEnum | ModVersionDiffScalarFieldEnum[]
  }

  /**
   * ModVersionDiff create
   */
  export type ModVersionDiffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModVersionDiff
     */
    select?: ModVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModVersionDiff
     */
    omit?: ModVersionDiffOmit<ExtArgs> | null
    /**
     * The data needed to create a ModVersionDiff.
     */
    data: XOR<ModVersionDiffCreateInput, ModVersionDiffUncheckedCreateInput>
  }

  /**
   * ModVersionDiff createMany
   */
  export type ModVersionDiffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModVersionDiffs.
     */
    data: ModVersionDiffCreateManyInput | ModVersionDiffCreateManyInput[]
  }

  /**
   * ModVersionDiff createManyAndReturn
   */
  export type ModVersionDiffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModVersionDiff
     */
    select?: ModVersionDiffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModVersionDiff
     */
    omit?: ModVersionDiffOmit<ExtArgs> | null
    /**
     * The data used to create many ModVersionDiffs.
     */
    data: ModVersionDiffCreateManyInput | ModVersionDiffCreateManyInput[]
  }

  /**
   * ModVersionDiff update
   */
  export type ModVersionDiffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModVersionDiff
     */
    select?: ModVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModVersionDiff
     */
    omit?: ModVersionDiffOmit<ExtArgs> | null
    /**
     * The data needed to update a ModVersionDiff.
     */
    data: XOR<ModVersionDiffUpdateInput, ModVersionDiffUncheckedUpdateInput>
    /**
     * Choose, which ModVersionDiff to update.
     */
    where: ModVersionDiffWhereUniqueInput
  }

  /**
   * ModVersionDiff updateMany
   */
  export type ModVersionDiffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModVersionDiffs.
     */
    data: XOR<ModVersionDiffUpdateManyMutationInput, ModVersionDiffUncheckedUpdateManyInput>
    /**
     * Filter which ModVersionDiffs to update
     */
    where?: ModVersionDiffWhereInput
    /**
     * Limit how many ModVersionDiffs to update.
     */
    limit?: number
  }

  /**
   * ModVersionDiff updateManyAndReturn
   */
  export type ModVersionDiffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModVersionDiff
     */
    select?: ModVersionDiffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModVersionDiff
     */
    omit?: ModVersionDiffOmit<ExtArgs> | null
    /**
     * The data used to update ModVersionDiffs.
     */
    data: XOR<ModVersionDiffUpdateManyMutationInput, ModVersionDiffUncheckedUpdateManyInput>
    /**
     * Filter which ModVersionDiffs to update
     */
    where?: ModVersionDiffWhereInput
    /**
     * Limit how many ModVersionDiffs to update.
     */
    limit?: number
  }

  /**
   * ModVersionDiff upsert
   */
  export type ModVersionDiffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModVersionDiff
     */
    select?: ModVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModVersionDiff
     */
    omit?: ModVersionDiffOmit<ExtArgs> | null
    /**
     * The filter to search for the ModVersionDiff to update in case it exists.
     */
    where: ModVersionDiffWhereUniqueInput
    /**
     * In case the ModVersionDiff found by the `where` argument doesn't exist, create a new ModVersionDiff with this data.
     */
    create: XOR<ModVersionDiffCreateInput, ModVersionDiffUncheckedCreateInput>
    /**
     * In case the ModVersionDiff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModVersionDiffUpdateInput, ModVersionDiffUncheckedUpdateInput>
  }

  /**
   * ModVersionDiff delete
   */
  export type ModVersionDiffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModVersionDiff
     */
    select?: ModVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModVersionDiff
     */
    omit?: ModVersionDiffOmit<ExtArgs> | null
    /**
     * Filter which ModVersionDiff to delete.
     */
    where: ModVersionDiffWhereUniqueInput
  }

  /**
   * ModVersionDiff deleteMany
   */
  export type ModVersionDiffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModVersionDiffs to delete
     */
    where?: ModVersionDiffWhereInput
    /**
     * Limit how many ModVersionDiffs to delete.
     */
    limit?: number
  }

  /**
   * ModVersionDiff without action
   */
  export type ModVersionDiffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModVersionDiff
     */
    select?: ModVersionDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModVersionDiff
     */
    omit?: ModVersionDiffOmit<ExtArgs> | null
  }


  /**
   * Model ModTag
   */

  export type AggregateModTag = {
    _count: ModTagCountAggregateOutputType | null
    _avg: ModTagAvgAggregateOutputType | null
    _sum: ModTagSumAggregateOutputType | null
    _min: ModTagMinAggregateOutputType | null
    _max: ModTagMaxAggregateOutputType | null
  }

  export type ModTagAvgAggregateOutputType = {
    id: number | null
    modId: number | null
  }

  export type ModTagSumAggregateOutputType = {
    id: number | null
    modId: number | null
  }

  export type ModTagMinAggregateOutputType = {
    id: number | null
    modId: number | null
    registry: string | null
    tagPath: string | null
    namespace: string | null
    entries: string | null
    replace: boolean | null
  }

  export type ModTagMaxAggregateOutputType = {
    id: number | null
    modId: number | null
    registry: string | null
    tagPath: string | null
    namespace: string | null
    entries: string | null
    replace: boolean | null
  }

  export type ModTagCountAggregateOutputType = {
    id: number
    modId: number
    registry: number
    tagPath: number
    namespace: number
    entries: number
    replace: number
    _all: number
  }


  export type ModTagAvgAggregateInputType = {
    id?: true
    modId?: true
  }

  export type ModTagSumAggregateInputType = {
    id?: true
    modId?: true
  }

  export type ModTagMinAggregateInputType = {
    id?: true
    modId?: true
    registry?: true
    tagPath?: true
    namespace?: true
    entries?: true
    replace?: true
  }

  export type ModTagMaxAggregateInputType = {
    id?: true
    modId?: true
    registry?: true
    tagPath?: true
    namespace?: true
    entries?: true
    replace?: true
  }

  export type ModTagCountAggregateInputType = {
    id?: true
    modId?: true
    registry?: true
    tagPath?: true
    namespace?: true
    entries?: true
    replace?: true
    _all?: true
  }

  export type ModTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModTag to aggregate.
     */
    where?: ModTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModTags to fetch.
     */
    orderBy?: ModTagOrderByWithRelationInput | ModTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModTags
    **/
    _count?: true | ModTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModTagMaxAggregateInputType
  }

  export type GetModTagAggregateType<T extends ModTagAggregateArgs> = {
        [P in keyof T & keyof AggregateModTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModTag[P]>
      : GetScalarType<T[P], AggregateModTag[P]>
  }




  export type ModTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModTagWhereInput
    orderBy?: ModTagOrderByWithAggregationInput | ModTagOrderByWithAggregationInput[]
    by: ModTagScalarFieldEnum[] | ModTagScalarFieldEnum
    having?: ModTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModTagCountAggregateInputType | true
    _avg?: ModTagAvgAggregateInputType
    _sum?: ModTagSumAggregateInputType
    _min?: ModTagMinAggregateInputType
    _max?: ModTagMaxAggregateInputType
  }

  export type ModTagGroupByOutputType = {
    id: number
    modId: number
    registry: string
    tagPath: string
    namespace: string
    entries: string
    replace: boolean
    _count: ModTagCountAggregateOutputType | null
    _avg: ModTagAvgAggregateOutputType | null
    _sum: ModTagSumAggregateOutputType | null
    _min: ModTagMinAggregateOutputType | null
    _max: ModTagMaxAggregateOutputType | null
  }

  type GetModTagGroupByPayload<T extends ModTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModTagGroupByOutputType[P]>
            : GetScalarType<T[P], ModTagGroupByOutputType[P]>
        }
      >
    >


  export type ModTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modId?: boolean
    registry?: boolean
    tagPath?: boolean
    namespace?: boolean
    entries?: boolean
    replace?: boolean
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modTag"]>

  export type ModTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modId?: boolean
    registry?: boolean
    tagPath?: boolean
    namespace?: boolean
    entries?: boolean
    replace?: boolean
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modTag"]>

  export type ModTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modId?: boolean
    registry?: boolean
    tagPath?: boolean
    namespace?: boolean
    entries?: boolean
    replace?: boolean
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modTag"]>

  export type ModTagSelectScalar = {
    id?: boolean
    modId?: boolean
    registry?: boolean
    tagPath?: boolean
    namespace?: boolean
    entries?: boolean
    replace?: boolean
  }

  export type ModTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modId" | "registry" | "tagPath" | "namespace" | "entries" | "replace", ExtArgs["result"]["modTag"]>
  export type ModTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }
  export type ModTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }
  export type ModTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }

  export type $ModTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModTag"
    objects: {
      mod: Prisma.$ModPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modId: number
      registry: string
      tagPath: string
      namespace: string
      entries: string
      replace: boolean
    }, ExtArgs["result"]["modTag"]>
    composites: {}
  }

  type ModTagGetPayload<S extends boolean | null | undefined | ModTagDefaultArgs> = $Result.GetResult<Prisma.$ModTagPayload, S>

  type ModTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModTagCountAggregateInputType | true
    }

  export interface ModTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModTag'], meta: { name: 'ModTag' } }
    /**
     * Find zero or one ModTag that matches the filter.
     * @param {ModTagFindUniqueArgs} args - Arguments to find a ModTag
     * @example
     * // Get one ModTag
     * const modTag = await prisma.modTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModTagFindUniqueArgs>(args: SelectSubset<T, ModTagFindUniqueArgs<ExtArgs>>): Prisma__ModTagClient<$Result.GetResult<Prisma.$ModTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModTagFindUniqueOrThrowArgs} args - Arguments to find a ModTag
     * @example
     * // Get one ModTag
     * const modTag = await prisma.modTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ModTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModTagClient<$Result.GetResult<Prisma.$ModTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagFindFirstArgs} args - Arguments to find a ModTag
     * @example
     * // Get one ModTag
     * const modTag = await prisma.modTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModTagFindFirstArgs>(args?: SelectSubset<T, ModTagFindFirstArgs<ExtArgs>>): Prisma__ModTagClient<$Result.GetResult<Prisma.$ModTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagFindFirstOrThrowArgs} args - Arguments to find a ModTag
     * @example
     * // Get one ModTag
     * const modTag = await prisma.modTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ModTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModTagClient<$Result.GetResult<Prisma.$ModTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModTags
     * const modTags = await prisma.modTag.findMany()
     * 
     * // Get first 10 ModTags
     * const modTags = await prisma.modTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modTagWithIdOnly = await prisma.modTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModTagFindManyArgs>(args?: SelectSubset<T, ModTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModTag.
     * @param {ModTagCreateArgs} args - Arguments to create a ModTag.
     * @example
     * // Create one ModTag
     * const ModTag = await prisma.modTag.create({
     *   data: {
     *     // ... data to create a ModTag
     *   }
     * })
     * 
     */
    create<T extends ModTagCreateArgs>(args: SelectSubset<T, ModTagCreateArgs<ExtArgs>>): Prisma__ModTagClient<$Result.GetResult<Prisma.$ModTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModTags.
     * @param {ModTagCreateManyArgs} args - Arguments to create many ModTags.
     * @example
     * // Create many ModTags
     * const modTag = await prisma.modTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModTagCreateManyArgs>(args?: SelectSubset<T, ModTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModTags and returns the data saved in the database.
     * @param {ModTagCreateManyAndReturnArgs} args - Arguments to create many ModTags.
     * @example
     * // Create many ModTags
     * const modTag = await prisma.modTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModTags and only return the `id`
     * const modTagWithIdOnly = await prisma.modTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ModTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModTag.
     * @param {ModTagDeleteArgs} args - Arguments to delete one ModTag.
     * @example
     * // Delete one ModTag
     * const ModTag = await prisma.modTag.delete({
     *   where: {
     *     // ... filter to delete one ModTag
     *   }
     * })
     * 
     */
    delete<T extends ModTagDeleteArgs>(args: SelectSubset<T, ModTagDeleteArgs<ExtArgs>>): Prisma__ModTagClient<$Result.GetResult<Prisma.$ModTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModTag.
     * @param {ModTagUpdateArgs} args - Arguments to update one ModTag.
     * @example
     * // Update one ModTag
     * const modTag = await prisma.modTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModTagUpdateArgs>(args: SelectSubset<T, ModTagUpdateArgs<ExtArgs>>): Prisma__ModTagClient<$Result.GetResult<Prisma.$ModTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModTags.
     * @param {ModTagDeleteManyArgs} args - Arguments to filter ModTags to delete.
     * @example
     * // Delete a few ModTags
     * const { count } = await prisma.modTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModTagDeleteManyArgs>(args?: SelectSubset<T, ModTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModTags
     * const modTag = await prisma.modTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModTagUpdateManyArgs>(args: SelectSubset<T, ModTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModTags and returns the data updated in the database.
     * @param {ModTagUpdateManyAndReturnArgs} args - Arguments to update many ModTags.
     * @example
     * // Update many ModTags
     * const modTag = await prisma.modTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModTags and only return the `id`
     * const modTagWithIdOnly = await prisma.modTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ModTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModTag.
     * @param {ModTagUpsertArgs} args - Arguments to update or create a ModTag.
     * @example
     * // Update or create a ModTag
     * const modTag = await prisma.modTag.upsert({
     *   create: {
     *     // ... data to create a ModTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModTag we want to update
     *   }
     * })
     */
    upsert<T extends ModTagUpsertArgs>(args: SelectSubset<T, ModTagUpsertArgs<ExtArgs>>): Prisma__ModTagClient<$Result.GetResult<Prisma.$ModTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagCountArgs} args - Arguments to filter ModTags to count.
     * @example
     * // Count the number of ModTags
     * const count = await prisma.modTag.count({
     *   where: {
     *     // ... the filter for the ModTags we want to count
     *   }
     * })
    **/
    count<T extends ModTagCountArgs>(
      args?: Subset<T, ModTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModTagAggregateArgs>(args: Subset<T, ModTagAggregateArgs>): Prisma.PrismaPromise<GetModTagAggregateType<T>>

    /**
     * Group by ModTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModTagGroupByArgs['orderBy'] }
        : { orderBy?: ModTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModTag model
   */
  readonly fields: ModTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mod<T extends ModDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModDefaultArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModTag model
   */
  interface ModTagFieldRefs {
    readonly id: FieldRef<"ModTag", 'Int'>
    readonly modId: FieldRef<"ModTag", 'Int'>
    readonly registry: FieldRef<"ModTag", 'String'>
    readonly tagPath: FieldRef<"ModTag", 'String'>
    readonly namespace: FieldRef<"ModTag", 'String'>
    readonly entries: FieldRef<"ModTag", 'String'>
    readonly replace: FieldRef<"ModTag", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ModTag findUnique
   */
  export type ModTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagInclude<ExtArgs> | null
    /**
     * Filter, which ModTag to fetch.
     */
    where: ModTagWhereUniqueInput
  }

  /**
   * ModTag findUniqueOrThrow
   */
  export type ModTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagInclude<ExtArgs> | null
    /**
     * Filter, which ModTag to fetch.
     */
    where: ModTagWhereUniqueInput
  }

  /**
   * ModTag findFirst
   */
  export type ModTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagInclude<ExtArgs> | null
    /**
     * Filter, which ModTag to fetch.
     */
    where?: ModTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModTags to fetch.
     */
    orderBy?: ModTagOrderByWithRelationInput | ModTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModTags.
     */
    cursor?: ModTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModTags.
     */
    distinct?: ModTagScalarFieldEnum | ModTagScalarFieldEnum[]
  }

  /**
   * ModTag findFirstOrThrow
   */
  export type ModTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagInclude<ExtArgs> | null
    /**
     * Filter, which ModTag to fetch.
     */
    where?: ModTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModTags to fetch.
     */
    orderBy?: ModTagOrderByWithRelationInput | ModTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModTags.
     */
    cursor?: ModTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModTags.
     */
    distinct?: ModTagScalarFieldEnum | ModTagScalarFieldEnum[]
  }

  /**
   * ModTag findMany
   */
  export type ModTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagInclude<ExtArgs> | null
    /**
     * Filter, which ModTags to fetch.
     */
    where?: ModTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModTags to fetch.
     */
    orderBy?: ModTagOrderByWithRelationInput | ModTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModTags.
     */
    cursor?: ModTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModTags.
     */
    skip?: number
    distinct?: ModTagScalarFieldEnum | ModTagScalarFieldEnum[]
  }

  /**
   * ModTag create
   */
  export type ModTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ModTag.
     */
    data: XOR<ModTagCreateInput, ModTagUncheckedCreateInput>
  }

  /**
   * ModTag createMany
   */
  export type ModTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModTags.
     */
    data: ModTagCreateManyInput | ModTagCreateManyInput[]
  }

  /**
   * ModTag createManyAndReturn
   */
  export type ModTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * The data used to create many ModTags.
     */
    data: ModTagCreateManyInput | ModTagCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModTag update
   */
  export type ModTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ModTag.
     */
    data: XOR<ModTagUpdateInput, ModTagUncheckedUpdateInput>
    /**
     * Choose, which ModTag to update.
     */
    where: ModTagWhereUniqueInput
  }

  /**
   * ModTag updateMany
   */
  export type ModTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModTags.
     */
    data: XOR<ModTagUpdateManyMutationInput, ModTagUncheckedUpdateManyInput>
    /**
     * Filter which ModTags to update
     */
    where?: ModTagWhereInput
    /**
     * Limit how many ModTags to update.
     */
    limit?: number
  }

  /**
   * ModTag updateManyAndReturn
   */
  export type ModTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * The data used to update ModTags.
     */
    data: XOR<ModTagUpdateManyMutationInput, ModTagUncheckedUpdateManyInput>
    /**
     * Filter which ModTags to update
     */
    where?: ModTagWhereInput
    /**
     * Limit how many ModTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModTag upsert
   */
  export type ModTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ModTag to update in case it exists.
     */
    where: ModTagWhereUniqueInput
    /**
     * In case the ModTag found by the `where` argument doesn't exist, create a new ModTag with this data.
     */
    create: XOR<ModTagCreateInput, ModTagUncheckedCreateInput>
    /**
     * In case the ModTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModTagUpdateInput, ModTagUncheckedUpdateInput>
  }

  /**
   * ModTag delete
   */
  export type ModTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagInclude<ExtArgs> | null
    /**
     * Filter which ModTag to delete.
     */
    where: ModTagWhereUniqueInput
  }

  /**
   * ModTag deleteMany
   */
  export type ModTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModTags to delete
     */
    where?: ModTagWhereInput
    /**
     * Limit how many ModTags to delete.
     */
    limit?: number
  }

  /**
   * ModTag without action
   */
  export type ModTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModTag
     */
    select?: ModTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModTag
     */
    omit?: ModTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModTagInclude<ExtArgs> | null
  }


  /**
   * Model McSourceFile
   */

  export type AggregateMcSourceFile = {
    _count: McSourceFileCountAggregateOutputType | null
    _avg: McSourceFileAvgAggregateOutputType | null
    _sum: McSourceFileSumAggregateOutputType | null
    _min: McSourceFileMinAggregateOutputType | null
    _max: McSourceFileMaxAggregateOutputType | null
  }

  export type McSourceFileAvgAggregateOutputType = {
    id: number | null
    mcVersionId: number | null
  }

  export type McSourceFileSumAggregateOutputType = {
    id: number | null
    mcVersionId: number | null
  }

  export type McSourceFileMinAggregateOutputType = {
    id: number | null
    mcVersionId: number | null
    className: string | null
    content: string | null
    embedding: Bytes | null
  }

  export type McSourceFileMaxAggregateOutputType = {
    id: number | null
    mcVersionId: number | null
    className: string | null
    content: string | null
    embedding: Bytes | null
  }

  export type McSourceFileCountAggregateOutputType = {
    id: number
    mcVersionId: number
    className: number
    content: number
    embedding: number
    _all: number
  }


  export type McSourceFileAvgAggregateInputType = {
    id?: true
    mcVersionId?: true
  }

  export type McSourceFileSumAggregateInputType = {
    id?: true
    mcVersionId?: true
  }

  export type McSourceFileMinAggregateInputType = {
    id?: true
    mcVersionId?: true
    className?: true
    content?: true
    embedding?: true
  }

  export type McSourceFileMaxAggregateInputType = {
    id?: true
    mcVersionId?: true
    className?: true
    content?: true
    embedding?: true
  }

  export type McSourceFileCountAggregateInputType = {
    id?: true
    mcVersionId?: true
    className?: true
    content?: true
    embedding?: true
    _all?: true
  }

  export type McSourceFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which McSourceFile to aggregate.
     */
    where?: McSourceFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McSourceFiles to fetch.
     */
    orderBy?: McSourceFileOrderByWithRelationInput | McSourceFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: McSourceFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McSourceFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McSourceFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned McSourceFiles
    **/
    _count?: true | McSourceFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: McSourceFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: McSourceFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: McSourceFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: McSourceFileMaxAggregateInputType
  }

  export type GetMcSourceFileAggregateType<T extends McSourceFileAggregateArgs> = {
        [P in keyof T & keyof AggregateMcSourceFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMcSourceFile[P]>
      : GetScalarType<T[P], AggregateMcSourceFile[P]>
  }




  export type McSourceFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: McSourceFileWhereInput
    orderBy?: McSourceFileOrderByWithAggregationInput | McSourceFileOrderByWithAggregationInput[]
    by: McSourceFileScalarFieldEnum[] | McSourceFileScalarFieldEnum
    having?: McSourceFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: McSourceFileCountAggregateInputType | true
    _avg?: McSourceFileAvgAggregateInputType
    _sum?: McSourceFileSumAggregateInputType
    _min?: McSourceFileMinAggregateInputType
    _max?: McSourceFileMaxAggregateInputType
  }

  export type McSourceFileGroupByOutputType = {
    id: number
    mcVersionId: number
    className: string
    content: string
    embedding: Bytes | null
    _count: McSourceFileCountAggregateOutputType | null
    _avg: McSourceFileAvgAggregateOutputType | null
    _sum: McSourceFileSumAggregateOutputType | null
    _min: McSourceFileMinAggregateOutputType | null
    _max: McSourceFileMaxAggregateOutputType | null
  }

  type GetMcSourceFileGroupByPayload<T extends McSourceFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<McSourceFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof McSourceFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], McSourceFileGroupByOutputType[P]>
            : GetScalarType<T[P], McSourceFileGroupByOutputType[P]>
        }
      >
    >


  export type McSourceFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mcVersionId?: boolean
    className?: boolean
    content?: boolean
    embedding?: boolean
    mcVersion?: boolean | McVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mcSourceFile"]>

  export type McSourceFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mcVersionId?: boolean
    className?: boolean
    content?: boolean
    embedding?: boolean
    mcVersion?: boolean | McVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mcSourceFile"]>

  export type McSourceFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mcVersionId?: boolean
    className?: boolean
    content?: boolean
    embedding?: boolean
    mcVersion?: boolean | McVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mcSourceFile"]>

  export type McSourceFileSelectScalar = {
    id?: boolean
    mcVersionId?: boolean
    className?: boolean
    content?: boolean
    embedding?: boolean
  }

  export type McSourceFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mcVersionId" | "className" | "content" | "embedding", ExtArgs["result"]["mcSourceFile"]>
  export type McSourceFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mcVersion?: boolean | McVersionDefaultArgs<ExtArgs>
  }
  export type McSourceFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mcVersion?: boolean | McVersionDefaultArgs<ExtArgs>
  }
  export type McSourceFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mcVersion?: boolean | McVersionDefaultArgs<ExtArgs>
  }

  export type $McSourceFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "McSourceFile"
    objects: {
      mcVersion: Prisma.$McVersionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mcVersionId: number
      className: string
      content: string
      embedding: Prisma.Bytes | null
    }, ExtArgs["result"]["mcSourceFile"]>
    composites: {}
  }

  type McSourceFileGetPayload<S extends boolean | null | undefined | McSourceFileDefaultArgs> = $Result.GetResult<Prisma.$McSourceFilePayload, S>

  type McSourceFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<McSourceFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: McSourceFileCountAggregateInputType | true
    }

  export interface McSourceFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['McSourceFile'], meta: { name: 'McSourceFile' } }
    /**
     * Find zero or one McSourceFile that matches the filter.
     * @param {McSourceFileFindUniqueArgs} args - Arguments to find a McSourceFile
     * @example
     * // Get one McSourceFile
     * const mcSourceFile = await prisma.mcSourceFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends McSourceFileFindUniqueArgs>(args: SelectSubset<T, McSourceFileFindUniqueArgs<ExtArgs>>): Prisma__McSourceFileClient<$Result.GetResult<Prisma.$McSourceFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one McSourceFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {McSourceFileFindUniqueOrThrowArgs} args - Arguments to find a McSourceFile
     * @example
     * // Get one McSourceFile
     * const mcSourceFile = await prisma.mcSourceFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends McSourceFileFindUniqueOrThrowArgs>(args: SelectSubset<T, McSourceFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__McSourceFileClient<$Result.GetResult<Prisma.$McSourceFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first McSourceFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McSourceFileFindFirstArgs} args - Arguments to find a McSourceFile
     * @example
     * // Get one McSourceFile
     * const mcSourceFile = await prisma.mcSourceFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends McSourceFileFindFirstArgs>(args?: SelectSubset<T, McSourceFileFindFirstArgs<ExtArgs>>): Prisma__McSourceFileClient<$Result.GetResult<Prisma.$McSourceFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first McSourceFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McSourceFileFindFirstOrThrowArgs} args - Arguments to find a McSourceFile
     * @example
     * // Get one McSourceFile
     * const mcSourceFile = await prisma.mcSourceFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends McSourceFileFindFirstOrThrowArgs>(args?: SelectSubset<T, McSourceFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__McSourceFileClient<$Result.GetResult<Prisma.$McSourceFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more McSourceFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McSourceFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all McSourceFiles
     * const mcSourceFiles = await prisma.mcSourceFile.findMany()
     * 
     * // Get first 10 McSourceFiles
     * const mcSourceFiles = await prisma.mcSourceFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mcSourceFileWithIdOnly = await prisma.mcSourceFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends McSourceFileFindManyArgs>(args?: SelectSubset<T, McSourceFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McSourceFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a McSourceFile.
     * @param {McSourceFileCreateArgs} args - Arguments to create a McSourceFile.
     * @example
     * // Create one McSourceFile
     * const McSourceFile = await prisma.mcSourceFile.create({
     *   data: {
     *     // ... data to create a McSourceFile
     *   }
     * })
     * 
     */
    create<T extends McSourceFileCreateArgs>(args: SelectSubset<T, McSourceFileCreateArgs<ExtArgs>>): Prisma__McSourceFileClient<$Result.GetResult<Prisma.$McSourceFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many McSourceFiles.
     * @param {McSourceFileCreateManyArgs} args - Arguments to create many McSourceFiles.
     * @example
     * // Create many McSourceFiles
     * const mcSourceFile = await prisma.mcSourceFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends McSourceFileCreateManyArgs>(args?: SelectSubset<T, McSourceFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many McSourceFiles and returns the data saved in the database.
     * @param {McSourceFileCreateManyAndReturnArgs} args - Arguments to create many McSourceFiles.
     * @example
     * // Create many McSourceFiles
     * const mcSourceFile = await prisma.mcSourceFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many McSourceFiles and only return the `id`
     * const mcSourceFileWithIdOnly = await prisma.mcSourceFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends McSourceFileCreateManyAndReturnArgs>(args?: SelectSubset<T, McSourceFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McSourceFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a McSourceFile.
     * @param {McSourceFileDeleteArgs} args - Arguments to delete one McSourceFile.
     * @example
     * // Delete one McSourceFile
     * const McSourceFile = await prisma.mcSourceFile.delete({
     *   where: {
     *     // ... filter to delete one McSourceFile
     *   }
     * })
     * 
     */
    delete<T extends McSourceFileDeleteArgs>(args: SelectSubset<T, McSourceFileDeleteArgs<ExtArgs>>): Prisma__McSourceFileClient<$Result.GetResult<Prisma.$McSourceFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one McSourceFile.
     * @param {McSourceFileUpdateArgs} args - Arguments to update one McSourceFile.
     * @example
     * // Update one McSourceFile
     * const mcSourceFile = await prisma.mcSourceFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends McSourceFileUpdateArgs>(args: SelectSubset<T, McSourceFileUpdateArgs<ExtArgs>>): Prisma__McSourceFileClient<$Result.GetResult<Prisma.$McSourceFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more McSourceFiles.
     * @param {McSourceFileDeleteManyArgs} args - Arguments to filter McSourceFiles to delete.
     * @example
     * // Delete a few McSourceFiles
     * const { count } = await prisma.mcSourceFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends McSourceFileDeleteManyArgs>(args?: SelectSubset<T, McSourceFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more McSourceFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McSourceFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many McSourceFiles
     * const mcSourceFile = await prisma.mcSourceFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends McSourceFileUpdateManyArgs>(args: SelectSubset<T, McSourceFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more McSourceFiles and returns the data updated in the database.
     * @param {McSourceFileUpdateManyAndReturnArgs} args - Arguments to update many McSourceFiles.
     * @example
     * // Update many McSourceFiles
     * const mcSourceFile = await prisma.mcSourceFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more McSourceFiles and only return the `id`
     * const mcSourceFileWithIdOnly = await prisma.mcSourceFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends McSourceFileUpdateManyAndReturnArgs>(args: SelectSubset<T, McSourceFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McSourceFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one McSourceFile.
     * @param {McSourceFileUpsertArgs} args - Arguments to update or create a McSourceFile.
     * @example
     * // Update or create a McSourceFile
     * const mcSourceFile = await prisma.mcSourceFile.upsert({
     *   create: {
     *     // ... data to create a McSourceFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the McSourceFile we want to update
     *   }
     * })
     */
    upsert<T extends McSourceFileUpsertArgs>(args: SelectSubset<T, McSourceFileUpsertArgs<ExtArgs>>): Prisma__McSourceFileClient<$Result.GetResult<Prisma.$McSourceFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of McSourceFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McSourceFileCountArgs} args - Arguments to filter McSourceFiles to count.
     * @example
     * // Count the number of McSourceFiles
     * const count = await prisma.mcSourceFile.count({
     *   where: {
     *     // ... the filter for the McSourceFiles we want to count
     *   }
     * })
    **/
    count<T extends McSourceFileCountArgs>(
      args?: Subset<T, McSourceFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], McSourceFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a McSourceFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McSourceFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends McSourceFileAggregateArgs>(args: Subset<T, McSourceFileAggregateArgs>): Prisma.PrismaPromise<GetMcSourceFileAggregateType<T>>

    /**
     * Group by McSourceFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McSourceFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends McSourceFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: McSourceFileGroupByArgs['orderBy'] }
        : { orderBy?: McSourceFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, McSourceFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMcSourceFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the McSourceFile model
   */
  readonly fields: McSourceFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for McSourceFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__McSourceFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mcVersion<T extends McVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, McVersionDefaultArgs<ExtArgs>>): Prisma__McVersionClient<$Result.GetResult<Prisma.$McVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the McSourceFile model
   */
  interface McSourceFileFieldRefs {
    readonly id: FieldRef<"McSourceFile", 'Int'>
    readonly mcVersionId: FieldRef<"McSourceFile", 'Int'>
    readonly className: FieldRef<"McSourceFile", 'String'>
    readonly content: FieldRef<"McSourceFile", 'String'>
    readonly embedding: FieldRef<"McSourceFile", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * McSourceFile findUnique
   */
  export type McSourceFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileInclude<ExtArgs> | null
    /**
     * Filter, which McSourceFile to fetch.
     */
    where: McSourceFileWhereUniqueInput
  }

  /**
   * McSourceFile findUniqueOrThrow
   */
  export type McSourceFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileInclude<ExtArgs> | null
    /**
     * Filter, which McSourceFile to fetch.
     */
    where: McSourceFileWhereUniqueInput
  }

  /**
   * McSourceFile findFirst
   */
  export type McSourceFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileInclude<ExtArgs> | null
    /**
     * Filter, which McSourceFile to fetch.
     */
    where?: McSourceFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McSourceFiles to fetch.
     */
    orderBy?: McSourceFileOrderByWithRelationInput | McSourceFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for McSourceFiles.
     */
    cursor?: McSourceFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McSourceFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McSourceFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of McSourceFiles.
     */
    distinct?: McSourceFileScalarFieldEnum | McSourceFileScalarFieldEnum[]
  }

  /**
   * McSourceFile findFirstOrThrow
   */
  export type McSourceFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileInclude<ExtArgs> | null
    /**
     * Filter, which McSourceFile to fetch.
     */
    where?: McSourceFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McSourceFiles to fetch.
     */
    orderBy?: McSourceFileOrderByWithRelationInput | McSourceFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for McSourceFiles.
     */
    cursor?: McSourceFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McSourceFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McSourceFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of McSourceFiles.
     */
    distinct?: McSourceFileScalarFieldEnum | McSourceFileScalarFieldEnum[]
  }

  /**
   * McSourceFile findMany
   */
  export type McSourceFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileInclude<ExtArgs> | null
    /**
     * Filter, which McSourceFiles to fetch.
     */
    where?: McSourceFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McSourceFiles to fetch.
     */
    orderBy?: McSourceFileOrderByWithRelationInput | McSourceFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing McSourceFiles.
     */
    cursor?: McSourceFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McSourceFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McSourceFiles.
     */
    skip?: number
    distinct?: McSourceFileScalarFieldEnum | McSourceFileScalarFieldEnum[]
  }

  /**
   * McSourceFile create
   */
  export type McSourceFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileInclude<ExtArgs> | null
    /**
     * The data needed to create a McSourceFile.
     */
    data: XOR<McSourceFileCreateInput, McSourceFileUncheckedCreateInput>
  }

  /**
   * McSourceFile createMany
   */
  export type McSourceFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many McSourceFiles.
     */
    data: McSourceFileCreateManyInput | McSourceFileCreateManyInput[]
  }

  /**
   * McSourceFile createManyAndReturn
   */
  export type McSourceFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * The data used to create many McSourceFiles.
     */
    data: McSourceFileCreateManyInput | McSourceFileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * McSourceFile update
   */
  export type McSourceFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileInclude<ExtArgs> | null
    /**
     * The data needed to update a McSourceFile.
     */
    data: XOR<McSourceFileUpdateInput, McSourceFileUncheckedUpdateInput>
    /**
     * Choose, which McSourceFile to update.
     */
    where: McSourceFileWhereUniqueInput
  }

  /**
   * McSourceFile updateMany
   */
  export type McSourceFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update McSourceFiles.
     */
    data: XOR<McSourceFileUpdateManyMutationInput, McSourceFileUncheckedUpdateManyInput>
    /**
     * Filter which McSourceFiles to update
     */
    where?: McSourceFileWhereInput
    /**
     * Limit how many McSourceFiles to update.
     */
    limit?: number
  }

  /**
   * McSourceFile updateManyAndReturn
   */
  export type McSourceFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * The data used to update McSourceFiles.
     */
    data: XOR<McSourceFileUpdateManyMutationInput, McSourceFileUncheckedUpdateManyInput>
    /**
     * Filter which McSourceFiles to update
     */
    where?: McSourceFileWhereInput
    /**
     * Limit how many McSourceFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * McSourceFile upsert
   */
  export type McSourceFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileInclude<ExtArgs> | null
    /**
     * The filter to search for the McSourceFile to update in case it exists.
     */
    where: McSourceFileWhereUniqueInput
    /**
     * In case the McSourceFile found by the `where` argument doesn't exist, create a new McSourceFile with this data.
     */
    create: XOR<McSourceFileCreateInput, McSourceFileUncheckedCreateInput>
    /**
     * In case the McSourceFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<McSourceFileUpdateInput, McSourceFileUncheckedUpdateInput>
  }

  /**
   * McSourceFile delete
   */
  export type McSourceFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileInclude<ExtArgs> | null
    /**
     * Filter which McSourceFile to delete.
     */
    where: McSourceFileWhereUniqueInput
  }

  /**
   * McSourceFile deleteMany
   */
  export type McSourceFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which McSourceFiles to delete
     */
    where?: McSourceFileWhereInput
    /**
     * Limit how many McSourceFiles to delete.
     */
    limit?: number
  }

  /**
   * McSourceFile without action
   */
  export type McSourceFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McSourceFile
     */
    select?: McSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McSourceFile
     */
    omit?: McSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McSourceFileInclude<ExtArgs> | null
  }


  /**
   * Model ModSourceFile
   */

  export type AggregateModSourceFile = {
    _count: ModSourceFileCountAggregateOutputType | null
    _avg: ModSourceFileAvgAggregateOutputType | null
    _sum: ModSourceFileSumAggregateOutputType | null
    _min: ModSourceFileMinAggregateOutputType | null
    _max: ModSourceFileMaxAggregateOutputType | null
  }

  export type ModSourceFileAvgAggregateOutputType = {
    id: number | null
    modId: number | null
  }

  export type ModSourceFileSumAggregateOutputType = {
    id: number | null
    modId: number | null
  }

  export type ModSourceFileMinAggregateOutputType = {
    id: number | null
    modId: number | null
    className: string | null
    content: string | null
    embedding: Bytes | null
  }

  export type ModSourceFileMaxAggregateOutputType = {
    id: number | null
    modId: number | null
    className: string | null
    content: string | null
    embedding: Bytes | null
  }

  export type ModSourceFileCountAggregateOutputType = {
    id: number
    modId: number
    className: number
    content: number
    embedding: number
    _all: number
  }


  export type ModSourceFileAvgAggregateInputType = {
    id?: true
    modId?: true
  }

  export type ModSourceFileSumAggregateInputType = {
    id?: true
    modId?: true
  }

  export type ModSourceFileMinAggregateInputType = {
    id?: true
    modId?: true
    className?: true
    content?: true
    embedding?: true
  }

  export type ModSourceFileMaxAggregateInputType = {
    id?: true
    modId?: true
    className?: true
    content?: true
    embedding?: true
  }

  export type ModSourceFileCountAggregateInputType = {
    id?: true
    modId?: true
    className?: true
    content?: true
    embedding?: true
    _all?: true
  }

  export type ModSourceFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModSourceFile to aggregate.
     */
    where?: ModSourceFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModSourceFiles to fetch.
     */
    orderBy?: ModSourceFileOrderByWithRelationInput | ModSourceFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModSourceFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModSourceFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModSourceFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModSourceFiles
    **/
    _count?: true | ModSourceFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModSourceFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModSourceFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModSourceFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModSourceFileMaxAggregateInputType
  }

  export type GetModSourceFileAggregateType<T extends ModSourceFileAggregateArgs> = {
        [P in keyof T & keyof AggregateModSourceFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModSourceFile[P]>
      : GetScalarType<T[P], AggregateModSourceFile[P]>
  }




  export type ModSourceFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModSourceFileWhereInput
    orderBy?: ModSourceFileOrderByWithAggregationInput | ModSourceFileOrderByWithAggregationInput[]
    by: ModSourceFileScalarFieldEnum[] | ModSourceFileScalarFieldEnum
    having?: ModSourceFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModSourceFileCountAggregateInputType | true
    _avg?: ModSourceFileAvgAggregateInputType
    _sum?: ModSourceFileSumAggregateInputType
    _min?: ModSourceFileMinAggregateInputType
    _max?: ModSourceFileMaxAggregateInputType
  }

  export type ModSourceFileGroupByOutputType = {
    id: number
    modId: number
    className: string
    content: string
    embedding: Bytes | null
    _count: ModSourceFileCountAggregateOutputType | null
    _avg: ModSourceFileAvgAggregateOutputType | null
    _sum: ModSourceFileSumAggregateOutputType | null
    _min: ModSourceFileMinAggregateOutputType | null
    _max: ModSourceFileMaxAggregateOutputType | null
  }

  type GetModSourceFileGroupByPayload<T extends ModSourceFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModSourceFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModSourceFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModSourceFileGroupByOutputType[P]>
            : GetScalarType<T[P], ModSourceFileGroupByOutputType[P]>
        }
      >
    >


  export type ModSourceFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modId?: boolean
    className?: boolean
    content?: boolean
    embedding?: boolean
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modSourceFile"]>

  export type ModSourceFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modId?: boolean
    className?: boolean
    content?: boolean
    embedding?: boolean
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modSourceFile"]>

  export type ModSourceFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modId?: boolean
    className?: boolean
    content?: boolean
    embedding?: boolean
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modSourceFile"]>

  export type ModSourceFileSelectScalar = {
    id?: boolean
    modId?: boolean
    className?: boolean
    content?: boolean
    embedding?: boolean
  }

  export type ModSourceFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modId" | "className" | "content" | "embedding", ExtArgs["result"]["modSourceFile"]>
  export type ModSourceFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }
  export type ModSourceFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }
  export type ModSourceFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }

  export type $ModSourceFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModSourceFile"
    objects: {
      mod: Prisma.$ModPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modId: number
      className: string
      content: string
      embedding: Prisma.Bytes | null
    }, ExtArgs["result"]["modSourceFile"]>
    composites: {}
  }

  type ModSourceFileGetPayload<S extends boolean | null | undefined | ModSourceFileDefaultArgs> = $Result.GetResult<Prisma.$ModSourceFilePayload, S>

  type ModSourceFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModSourceFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModSourceFileCountAggregateInputType | true
    }

  export interface ModSourceFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModSourceFile'], meta: { name: 'ModSourceFile' } }
    /**
     * Find zero or one ModSourceFile that matches the filter.
     * @param {ModSourceFileFindUniqueArgs} args - Arguments to find a ModSourceFile
     * @example
     * // Get one ModSourceFile
     * const modSourceFile = await prisma.modSourceFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModSourceFileFindUniqueArgs>(args: SelectSubset<T, ModSourceFileFindUniqueArgs<ExtArgs>>): Prisma__ModSourceFileClient<$Result.GetResult<Prisma.$ModSourceFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModSourceFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModSourceFileFindUniqueOrThrowArgs} args - Arguments to find a ModSourceFile
     * @example
     * // Get one ModSourceFile
     * const modSourceFile = await prisma.modSourceFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModSourceFileFindUniqueOrThrowArgs>(args: SelectSubset<T, ModSourceFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModSourceFileClient<$Result.GetResult<Prisma.$ModSourceFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModSourceFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSourceFileFindFirstArgs} args - Arguments to find a ModSourceFile
     * @example
     * // Get one ModSourceFile
     * const modSourceFile = await prisma.modSourceFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModSourceFileFindFirstArgs>(args?: SelectSubset<T, ModSourceFileFindFirstArgs<ExtArgs>>): Prisma__ModSourceFileClient<$Result.GetResult<Prisma.$ModSourceFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModSourceFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSourceFileFindFirstOrThrowArgs} args - Arguments to find a ModSourceFile
     * @example
     * // Get one ModSourceFile
     * const modSourceFile = await prisma.modSourceFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModSourceFileFindFirstOrThrowArgs>(args?: SelectSubset<T, ModSourceFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModSourceFileClient<$Result.GetResult<Prisma.$ModSourceFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModSourceFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSourceFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModSourceFiles
     * const modSourceFiles = await prisma.modSourceFile.findMany()
     * 
     * // Get first 10 ModSourceFiles
     * const modSourceFiles = await prisma.modSourceFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modSourceFileWithIdOnly = await prisma.modSourceFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModSourceFileFindManyArgs>(args?: SelectSubset<T, ModSourceFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModSourceFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModSourceFile.
     * @param {ModSourceFileCreateArgs} args - Arguments to create a ModSourceFile.
     * @example
     * // Create one ModSourceFile
     * const ModSourceFile = await prisma.modSourceFile.create({
     *   data: {
     *     // ... data to create a ModSourceFile
     *   }
     * })
     * 
     */
    create<T extends ModSourceFileCreateArgs>(args: SelectSubset<T, ModSourceFileCreateArgs<ExtArgs>>): Prisma__ModSourceFileClient<$Result.GetResult<Prisma.$ModSourceFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModSourceFiles.
     * @param {ModSourceFileCreateManyArgs} args - Arguments to create many ModSourceFiles.
     * @example
     * // Create many ModSourceFiles
     * const modSourceFile = await prisma.modSourceFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModSourceFileCreateManyArgs>(args?: SelectSubset<T, ModSourceFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModSourceFiles and returns the data saved in the database.
     * @param {ModSourceFileCreateManyAndReturnArgs} args - Arguments to create many ModSourceFiles.
     * @example
     * // Create many ModSourceFiles
     * const modSourceFile = await prisma.modSourceFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModSourceFiles and only return the `id`
     * const modSourceFileWithIdOnly = await prisma.modSourceFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModSourceFileCreateManyAndReturnArgs>(args?: SelectSubset<T, ModSourceFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModSourceFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModSourceFile.
     * @param {ModSourceFileDeleteArgs} args - Arguments to delete one ModSourceFile.
     * @example
     * // Delete one ModSourceFile
     * const ModSourceFile = await prisma.modSourceFile.delete({
     *   where: {
     *     // ... filter to delete one ModSourceFile
     *   }
     * })
     * 
     */
    delete<T extends ModSourceFileDeleteArgs>(args: SelectSubset<T, ModSourceFileDeleteArgs<ExtArgs>>): Prisma__ModSourceFileClient<$Result.GetResult<Prisma.$ModSourceFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModSourceFile.
     * @param {ModSourceFileUpdateArgs} args - Arguments to update one ModSourceFile.
     * @example
     * // Update one ModSourceFile
     * const modSourceFile = await prisma.modSourceFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModSourceFileUpdateArgs>(args: SelectSubset<T, ModSourceFileUpdateArgs<ExtArgs>>): Prisma__ModSourceFileClient<$Result.GetResult<Prisma.$ModSourceFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModSourceFiles.
     * @param {ModSourceFileDeleteManyArgs} args - Arguments to filter ModSourceFiles to delete.
     * @example
     * // Delete a few ModSourceFiles
     * const { count } = await prisma.modSourceFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModSourceFileDeleteManyArgs>(args?: SelectSubset<T, ModSourceFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModSourceFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSourceFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModSourceFiles
     * const modSourceFile = await prisma.modSourceFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModSourceFileUpdateManyArgs>(args: SelectSubset<T, ModSourceFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModSourceFiles and returns the data updated in the database.
     * @param {ModSourceFileUpdateManyAndReturnArgs} args - Arguments to update many ModSourceFiles.
     * @example
     * // Update many ModSourceFiles
     * const modSourceFile = await prisma.modSourceFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModSourceFiles and only return the `id`
     * const modSourceFileWithIdOnly = await prisma.modSourceFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModSourceFileUpdateManyAndReturnArgs>(args: SelectSubset<T, ModSourceFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModSourceFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModSourceFile.
     * @param {ModSourceFileUpsertArgs} args - Arguments to update or create a ModSourceFile.
     * @example
     * // Update or create a ModSourceFile
     * const modSourceFile = await prisma.modSourceFile.upsert({
     *   create: {
     *     // ... data to create a ModSourceFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModSourceFile we want to update
     *   }
     * })
     */
    upsert<T extends ModSourceFileUpsertArgs>(args: SelectSubset<T, ModSourceFileUpsertArgs<ExtArgs>>): Prisma__ModSourceFileClient<$Result.GetResult<Prisma.$ModSourceFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModSourceFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSourceFileCountArgs} args - Arguments to filter ModSourceFiles to count.
     * @example
     * // Count the number of ModSourceFiles
     * const count = await prisma.modSourceFile.count({
     *   where: {
     *     // ... the filter for the ModSourceFiles we want to count
     *   }
     * })
    **/
    count<T extends ModSourceFileCountArgs>(
      args?: Subset<T, ModSourceFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModSourceFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModSourceFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSourceFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModSourceFileAggregateArgs>(args: Subset<T, ModSourceFileAggregateArgs>): Prisma.PrismaPromise<GetModSourceFileAggregateType<T>>

    /**
     * Group by ModSourceFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSourceFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModSourceFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModSourceFileGroupByArgs['orderBy'] }
        : { orderBy?: ModSourceFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModSourceFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModSourceFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModSourceFile model
   */
  readonly fields: ModSourceFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModSourceFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModSourceFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mod<T extends ModDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModDefaultArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModSourceFile model
   */
  interface ModSourceFileFieldRefs {
    readonly id: FieldRef<"ModSourceFile", 'Int'>
    readonly modId: FieldRef<"ModSourceFile", 'Int'>
    readonly className: FieldRef<"ModSourceFile", 'String'>
    readonly content: FieldRef<"ModSourceFile", 'String'>
    readonly embedding: FieldRef<"ModSourceFile", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * ModSourceFile findUnique
   */
  export type ModSourceFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileInclude<ExtArgs> | null
    /**
     * Filter, which ModSourceFile to fetch.
     */
    where: ModSourceFileWhereUniqueInput
  }

  /**
   * ModSourceFile findUniqueOrThrow
   */
  export type ModSourceFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileInclude<ExtArgs> | null
    /**
     * Filter, which ModSourceFile to fetch.
     */
    where: ModSourceFileWhereUniqueInput
  }

  /**
   * ModSourceFile findFirst
   */
  export type ModSourceFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileInclude<ExtArgs> | null
    /**
     * Filter, which ModSourceFile to fetch.
     */
    where?: ModSourceFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModSourceFiles to fetch.
     */
    orderBy?: ModSourceFileOrderByWithRelationInput | ModSourceFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModSourceFiles.
     */
    cursor?: ModSourceFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModSourceFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModSourceFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModSourceFiles.
     */
    distinct?: ModSourceFileScalarFieldEnum | ModSourceFileScalarFieldEnum[]
  }

  /**
   * ModSourceFile findFirstOrThrow
   */
  export type ModSourceFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileInclude<ExtArgs> | null
    /**
     * Filter, which ModSourceFile to fetch.
     */
    where?: ModSourceFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModSourceFiles to fetch.
     */
    orderBy?: ModSourceFileOrderByWithRelationInput | ModSourceFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModSourceFiles.
     */
    cursor?: ModSourceFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModSourceFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModSourceFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModSourceFiles.
     */
    distinct?: ModSourceFileScalarFieldEnum | ModSourceFileScalarFieldEnum[]
  }

  /**
   * ModSourceFile findMany
   */
  export type ModSourceFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileInclude<ExtArgs> | null
    /**
     * Filter, which ModSourceFiles to fetch.
     */
    where?: ModSourceFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModSourceFiles to fetch.
     */
    orderBy?: ModSourceFileOrderByWithRelationInput | ModSourceFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModSourceFiles.
     */
    cursor?: ModSourceFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModSourceFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModSourceFiles.
     */
    skip?: number
    distinct?: ModSourceFileScalarFieldEnum | ModSourceFileScalarFieldEnum[]
  }

  /**
   * ModSourceFile create
   */
  export type ModSourceFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileInclude<ExtArgs> | null
    /**
     * The data needed to create a ModSourceFile.
     */
    data: XOR<ModSourceFileCreateInput, ModSourceFileUncheckedCreateInput>
  }

  /**
   * ModSourceFile createMany
   */
  export type ModSourceFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModSourceFiles.
     */
    data: ModSourceFileCreateManyInput | ModSourceFileCreateManyInput[]
  }

  /**
   * ModSourceFile createManyAndReturn
   */
  export type ModSourceFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * The data used to create many ModSourceFiles.
     */
    data: ModSourceFileCreateManyInput | ModSourceFileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModSourceFile update
   */
  export type ModSourceFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileInclude<ExtArgs> | null
    /**
     * The data needed to update a ModSourceFile.
     */
    data: XOR<ModSourceFileUpdateInput, ModSourceFileUncheckedUpdateInput>
    /**
     * Choose, which ModSourceFile to update.
     */
    where: ModSourceFileWhereUniqueInput
  }

  /**
   * ModSourceFile updateMany
   */
  export type ModSourceFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModSourceFiles.
     */
    data: XOR<ModSourceFileUpdateManyMutationInput, ModSourceFileUncheckedUpdateManyInput>
    /**
     * Filter which ModSourceFiles to update
     */
    where?: ModSourceFileWhereInput
    /**
     * Limit how many ModSourceFiles to update.
     */
    limit?: number
  }

  /**
   * ModSourceFile updateManyAndReturn
   */
  export type ModSourceFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * The data used to update ModSourceFiles.
     */
    data: XOR<ModSourceFileUpdateManyMutationInput, ModSourceFileUncheckedUpdateManyInput>
    /**
     * Filter which ModSourceFiles to update
     */
    where?: ModSourceFileWhereInput
    /**
     * Limit how many ModSourceFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModSourceFile upsert
   */
  export type ModSourceFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileInclude<ExtArgs> | null
    /**
     * The filter to search for the ModSourceFile to update in case it exists.
     */
    where: ModSourceFileWhereUniqueInput
    /**
     * In case the ModSourceFile found by the `where` argument doesn't exist, create a new ModSourceFile with this data.
     */
    create: XOR<ModSourceFileCreateInput, ModSourceFileUncheckedCreateInput>
    /**
     * In case the ModSourceFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModSourceFileUpdateInput, ModSourceFileUncheckedUpdateInput>
  }

  /**
   * ModSourceFile delete
   */
  export type ModSourceFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileInclude<ExtArgs> | null
    /**
     * Filter which ModSourceFile to delete.
     */
    where: ModSourceFileWhereUniqueInput
  }

  /**
   * ModSourceFile deleteMany
   */
  export type ModSourceFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModSourceFiles to delete
     */
    where?: ModSourceFileWhereInput
    /**
     * Limit how many ModSourceFiles to delete.
     */
    limit?: number
  }

  /**
   * ModSourceFile without action
   */
  export type ModSourceFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModSourceFile
     */
    select?: ModSourceFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModSourceFile
     */
    omit?: ModSourceFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModSourceFileInclude<ExtArgs> | null
  }


  /**
   * Model DocEntry
   */

  export type AggregateDocEntry = {
    _count: DocEntryCountAggregateOutputType | null
    _avg: DocEntryAvgAggregateOutputType | null
    _sum: DocEntrySumAggregateOutputType | null
    _min: DocEntryMinAggregateOutputType | null
    _max: DocEntryMaxAggregateOutputType | null
  }

  export type DocEntryAvgAggregateOutputType = {
    id: number | null
  }

  export type DocEntrySumAggregateOutputType = {
    id: number | null
  }

  export type DocEntryMinAggregateOutputType = {
    id: number | null
    className: string | null
    title: string | null
    summary: string | null
    url: string | null
    category: string | null
    tags: string | null
    namespace: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
    embedding: Bytes | null
  }

  export type DocEntryMaxAggregateOutputType = {
    id: number | null
    className: string | null
    title: string | null
    summary: string | null
    url: string | null
    category: string | null
    tags: string | null
    namespace: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
    embedding: Bytes | null
  }

  export type DocEntryCountAggregateOutputType = {
    id: number
    className: number
    title: number
    summary: number
    url: number
    category: number
    tags: number
    namespace: number
    source: number
    createdAt: number
    updatedAt: number
    embedding: number
    _all: number
  }


  export type DocEntryAvgAggregateInputType = {
    id?: true
  }

  export type DocEntrySumAggregateInputType = {
    id?: true
  }

  export type DocEntryMinAggregateInputType = {
    id?: true
    className?: true
    title?: true
    summary?: true
    url?: true
    category?: true
    tags?: true
    namespace?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    embedding?: true
  }

  export type DocEntryMaxAggregateInputType = {
    id?: true
    className?: true
    title?: true
    summary?: true
    url?: true
    category?: true
    tags?: true
    namespace?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    embedding?: true
  }

  export type DocEntryCountAggregateInputType = {
    id?: true
    className?: true
    title?: true
    summary?: true
    url?: true
    category?: true
    tags?: true
    namespace?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    embedding?: true
    _all?: true
  }

  export type DocEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocEntry to aggregate.
     */
    where?: DocEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocEntries to fetch.
     */
    orderBy?: DocEntryOrderByWithRelationInput | DocEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocEntries
    **/
    _count?: true | DocEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocEntryMaxAggregateInputType
  }

  export type GetDocEntryAggregateType<T extends DocEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateDocEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocEntry[P]>
      : GetScalarType<T[P], AggregateDocEntry[P]>
  }




  export type DocEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocEntryWhereInput
    orderBy?: DocEntryOrderByWithAggregationInput | DocEntryOrderByWithAggregationInput[]
    by: DocEntryScalarFieldEnum[] | DocEntryScalarFieldEnum
    having?: DocEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocEntryCountAggregateInputType | true
    _avg?: DocEntryAvgAggregateInputType
    _sum?: DocEntrySumAggregateInputType
    _min?: DocEntryMinAggregateInputType
    _max?: DocEntryMaxAggregateInputType
  }

  export type DocEntryGroupByOutputType = {
    id: number
    className: string | null
    title: string
    summary: string | null
    url: string
    category: string
    tags: string
    namespace: string
    source: string
    createdAt: Date
    updatedAt: Date
    embedding: Bytes | null
    _count: DocEntryCountAggregateOutputType | null
    _avg: DocEntryAvgAggregateOutputType | null
    _sum: DocEntrySumAggregateOutputType | null
    _min: DocEntryMinAggregateOutputType | null
    _max: DocEntryMaxAggregateOutputType | null
  }

  type GetDocEntryGroupByPayload<T extends DocEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocEntryGroupByOutputType[P]>
            : GetScalarType<T[P], DocEntryGroupByOutputType[P]>
        }
      >
    >


  export type DocEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    title?: boolean
    summary?: boolean
    url?: boolean
    category?: boolean
    tags?: boolean
    namespace?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embedding?: boolean
  }, ExtArgs["result"]["docEntry"]>

  export type DocEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    title?: boolean
    summary?: boolean
    url?: boolean
    category?: boolean
    tags?: boolean
    namespace?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embedding?: boolean
  }, ExtArgs["result"]["docEntry"]>

  export type DocEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    title?: boolean
    summary?: boolean
    url?: boolean
    category?: boolean
    tags?: boolean
    namespace?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embedding?: boolean
  }, ExtArgs["result"]["docEntry"]>

  export type DocEntrySelectScalar = {
    id?: boolean
    className?: boolean
    title?: boolean
    summary?: boolean
    url?: boolean
    category?: boolean
    tags?: boolean
    namespace?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embedding?: boolean
  }

  export type DocEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "className" | "title" | "summary" | "url" | "category" | "tags" | "namespace" | "source" | "createdAt" | "updatedAt" | "embedding", ExtArgs["result"]["docEntry"]>

  export type $DocEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      className: string | null
      title: string
      summary: string | null
      url: string
      category: string
      tags: string
      namespace: string
      source: string
      createdAt: Date
      updatedAt: Date
      embedding: Prisma.Bytes | null
    }, ExtArgs["result"]["docEntry"]>
    composites: {}
  }

  type DocEntryGetPayload<S extends boolean | null | undefined | DocEntryDefaultArgs> = $Result.GetResult<Prisma.$DocEntryPayload, S>

  type DocEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocEntryCountAggregateInputType | true
    }

  export interface DocEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocEntry'], meta: { name: 'DocEntry' } }
    /**
     * Find zero or one DocEntry that matches the filter.
     * @param {DocEntryFindUniqueArgs} args - Arguments to find a DocEntry
     * @example
     * // Get one DocEntry
     * const docEntry = await prisma.docEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocEntryFindUniqueArgs>(args: SelectSubset<T, DocEntryFindUniqueArgs<ExtArgs>>): Prisma__DocEntryClient<$Result.GetResult<Prisma.$DocEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocEntryFindUniqueOrThrowArgs} args - Arguments to find a DocEntry
     * @example
     * // Get one DocEntry
     * const docEntry = await prisma.docEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, DocEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocEntryClient<$Result.GetResult<Prisma.$DocEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocEntryFindFirstArgs} args - Arguments to find a DocEntry
     * @example
     * // Get one DocEntry
     * const docEntry = await prisma.docEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocEntryFindFirstArgs>(args?: SelectSubset<T, DocEntryFindFirstArgs<ExtArgs>>): Prisma__DocEntryClient<$Result.GetResult<Prisma.$DocEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocEntryFindFirstOrThrowArgs} args - Arguments to find a DocEntry
     * @example
     * // Get one DocEntry
     * const docEntry = await prisma.docEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, DocEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocEntryClient<$Result.GetResult<Prisma.$DocEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocEntries
     * const docEntries = await prisma.docEntry.findMany()
     * 
     * // Get first 10 DocEntries
     * const docEntries = await prisma.docEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const docEntryWithIdOnly = await prisma.docEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocEntryFindManyArgs>(args?: SelectSubset<T, DocEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocEntry.
     * @param {DocEntryCreateArgs} args - Arguments to create a DocEntry.
     * @example
     * // Create one DocEntry
     * const DocEntry = await prisma.docEntry.create({
     *   data: {
     *     // ... data to create a DocEntry
     *   }
     * })
     * 
     */
    create<T extends DocEntryCreateArgs>(args: SelectSubset<T, DocEntryCreateArgs<ExtArgs>>): Prisma__DocEntryClient<$Result.GetResult<Prisma.$DocEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocEntries.
     * @param {DocEntryCreateManyArgs} args - Arguments to create many DocEntries.
     * @example
     * // Create many DocEntries
     * const docEntry = await prisma.docEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocEntryCreateManyArgs>(args?: SelectSubset<T, DocEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocEntries and returns the data saved in the database.
     * @param {DocEntryCreateManyAndReturnArgs} args - Arguments to create many DocEntries.
     * @example
     * // Create many DocEntries
     * const docEntry = await prisma.docEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocEntries and only return the `id`
     * const docEntryWithIdOnly = await prisma.docEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, DocEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocEntry.
     * @param {DocEntryDeleteArgs} args - Arguments to delete one DocEntry.
     * @example
     * // Delete one DocEntry
     * const DocEntry = await prisma.docEntry.delete({
     *   where: {
     *     // ... filter to delete one DocEntry
     *   }
     * })
     * 
     */
    delete<T extends DocEntryDeleteArgs>(args: SelectSubset<T, DocEntryDeleteArgs<ExtArgs>>): Prisma__DocEntryClient<$Result.GetResult<Prisma.$DocEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocEntry.
     * @param {DocEntryUpdateArgs} args - Arguments to update one DocEntry.
     * @example
     * // Update one DocEntry
     * const docEntry = await prisma.docEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocEntryUpdateArgs>(args: SelectSubset<T, DocEntryUpdateArgs<ExtArgs>>): Prisma__DocEntryClient<$Result.GetResult<Prisma.$DocEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocEntries.
     * @param {DocEntryDeleteManyArgs} args - Arguments to filter DocEntries to delete.
     * @example
     * // Delete a few DocEntries
     * const { count } = await prisma.docEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocEntryDeleteManyArgs>(args?: SelectSubset<T, DocEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocEntries
     * const docEntry = await prisma.docEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocEntryUpdateManyArgs>(args: SelectSubset<T, DocEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocEntries and returns the data updated in the database.
     * @param {DocEntryUpdateManyAndReturnArgs} args - Arguments to update many DocEntries.
     * @example
     * // Update many DocEntries
     * const docEntry = await prisma.docEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocEntries and only return the `id`
     * const docEntryWithIdOnly = await prisma.docEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, DocEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocEntry.
     * @param {DocEntryUpsertArgs} args - Arguments to update or create a DocEntry.
     * @example
     * // Update or create a DocEntry
     * const docEntry = await prisma.docEntry.upsert({
     *   create: {
     *     // ... data to create a DocEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocEntry we want to update
     *   }
     * })
     */
    upsert<T extends DocEntryUpsertArgs>(args: SelectSubset<T, DocEntryUpsertArgs<ExtArgs>>): Prisma__DocEntryClient<$Result.GetResult<Prisma.$DocEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocEntryCountArgs} args - Arguments to filter DocEntries to count.
     * @example
     * // Count the number of DocEntries
     * const count = await prisma.docEntry.count({
     *   where: {
     *     // ... the filter for the DocEntries we want to count
     *   }
     * })
    **/
    count<T extends DocEntryCountArgs>(
      args?: Subset<T, DocEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocEntryAggregateArgs>(args: Subset<T, DocEntryAggregateArgs>): Prisma.PrismaPromise<GetDocEntryAggregateType<T>>

    /**
     * Group by DocEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocEntryGroupByArgs['orderBy'] }
        : { orderBy?: DocEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocEntry model
   */
  readonly fields: DocEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocEntry model
   */
  interface DocEntryFieldRefs {
    readonly id: FieldRef<"DocEntry", 'Int'>
    readonly className: FieldRef<"DocEntry", 'String'>
    readonly title: FieldRef<"DocEntry", 'String'>
    readonly summary: FieldRef<"DocEntry", 'String'>
    readonly url: FieldRef<"DocEntry", 'String'>
    readonly category: FieldRef<"DocEntry", 'String'>
    readonly tags: FieldRef<"DocEntry", 'String'>
    readonly namespace: FieldRef<"DocEntry", 'String'>
    readonly source: FieldRef<"DocEntry", 'String'>
    readonly createdAt: FieldRef<"DocEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"DocEntry", 'DateTime'>
    readonly embedding: FieldRef<"DocEntry", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * DocEntry findUnique
   */
  export type DocEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocEntry
     */
    select?: DocEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocEntry
     */
    omit?: DocEntryOmit<ExtArgs> | null
    /**
     * Filter, which DocEntry to fetch.
     */
    where: DocEntryWhereUniqueInput
  }

  /**
   * DocEntry findUniqueOrThrow
   */
  export type DocEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocEntry
     */
    select?: DocEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocEntry
     */
    omit?: DocEntryOmit<ExtArgs> | null
    /**
     * Filter, which DocEntry to fetch.
     */
    where: DocEntryWhereUniqueInput
  }

  /**
   * DocEntry findFirst
   */
  export type DocEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocEntry
     */
    select?: DocEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocEntry
     */
    omit?: DocEntryOmit<ExtArgs> | null
    /**
     * Filter, which DocEntry to fetch.
     */
    where?: DocEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocEntries to fetch.
     */
    orderBy?: DocEntryOrderByWithRelationInput | DocEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocEntries.
     */
    cursor?: DocEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocEntries.
     */
    distinct?: DocEntryScalarFieldEnum | DocEntryScalarFieldEnum[]
  }

  /**
   * DocEntry findFirstOrThrow
   */
  export type DocEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocEntry
     */
    select?: DocEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocEntry
     */
    omit?: DocEntryOmit<ExtArgs> | null
    /**
     * Filter, which DocEntry to fetch.
     */
    where?: DocEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocEntries to fetch.
     */
    orderBy?: DocEntryOrderByWithRelationInput | DocEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocEntries.
     */
    cursor?: DocEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocEntries.
     */
    distinct?: DocEntryScalarFieldEnum | DocEntryScalarFieldEnum[]
  }

  /**
   * DocEntry findMany
   */
  export type DocEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocEntry
     */
    select?: DocEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocEntry
     */
    omit?: DocEntryOmit<ExtArgs> | null
    /**
     * Filter, which DocEntries to fetch.
     */
    where?: DocEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocEntries to fetch.
     */
    orderBy?: DocEntryOrderByWithRelationInput | DocEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocEntries.
     */
    cursor?: DocEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocEntries.
     */
    skip?: number
    distinct?: DocEntryScalarFieldEnum | DocEntryScalarFieldEnum[]
  }

  /**
   * DocEntry create
   */
  export type DocEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocEntry
     */
    select?: DocEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocEntry
     */
    omit?: DocEntryOmit<ExtArgs> | null
    /**
     * The data needed to create a DocEntry.
     */
    data: XOR<DocEntryCreateInput, DocEntryUncheckedCreateInput>
  }

  /**
   * DocEntry createMany
   */
  export type DocEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocEntries.
     */
    data: DocEntryCreateManyInput | DocEntryCreateManyInput[]
  }

  /**
   * DocEntry createManyAndReturn
   */
  export type DocEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocEntry
     */
    select?: DocEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocEntry
     */
    omit?: DocEntryOmit<ExtArgs> | null
    /**
     * The data used to create many DocEntries.
     */
    data: DocEntryCreateManyInput | DocEntryCreateManyInput[]
  }

  /**
   * DocEntry update
   */
  export type DocEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocEntry
     */
    select?: DocEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocEntry
     */
    omit?: DocEntryOmit<ExtArgs> | null
    /**
     * The data needed to update a DocEntry.
     */
    data: XOR<DocEntryUpdateInput, DocEntryUncheckedUpdateInput>
    /**
     * Choose, which DocEntry to update.
     */
    where: DocEntryWhereUniqueInput
  }

  /**
   * DocEntry updateMany
   */
  export type DocEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocEntries.
     */
    data: XOR<DocEntryUpdateManyMutationInput, DocEntryUncheckedUpdateManyInput>
    /**
     * Filter which DocEntries to update
     */
    where?: DocEntryWhereInput
    /**
     * Limit how many DocEntries to update.
     */
    limit?: number
  }

  /**
   * DocEntry updateManyAndReturn
   */
  export type DocEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocEntry
     */
    select?: DocEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocEntry
     */
    omit?: DocEntryOmit<ExtArgs> | null
    /**
     * The data used to update DocEntries.
     */
    data: XOR<DocEntryUpdateManyMutationInput, DocEntryUncheckedUpdateManyInput>
    /**
     * Filter which DocEntries to update
     */
    where?: DocEntryWhereInput
    /**
     * Limit how many DocEntries to update.
     */
    limit?: number
  }

  /**
   * DocEntry upsert
   */
  export type DocEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocEntry
     */
    select?: DocEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocEntry
     */
    omit?: DocEntryOmit<ExtArgs> | null
    /**
     * The filter to search for the DocEntry to update in case it exists.
     */
    where: DocEntryWhereUniqueInput
    /**
     * In case the DocEntry found by the `where` argument doesn't exist, create a new DocEntry with this data.
     */
    create: XOR<DocEntryCreateInput, DocEntryUncheckedCreateInput>
    /**
     * In case the DocEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocEntryUpdateInput, DocEntryUncheckedUpdateInput>
  }

  /**
   * DocEntry delete
   */
  export type DocEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocEntry
     */
    select?: DocEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocEntry
     */
    omit?: DocEntryOmit<ExtArgs> | null
    /**
     * Filter which DocEntry to delete.
     */
    where: DocEntryWhereUniqueInput
  }

  /**
   * DocEntry deleteMany
   */
  export type DocEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocEntries to delete
     */
    where?: DocEntryWhereInput
    /**
     * Limit how many DocEntries to delete.
     */
    limit?: number
  }

  /**
   * DocEntry without action
   */
  export type DocEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocEntry
     */
    select?: DocEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocEntry
     */
    omit?: DocEntryOmit<ExtArgs> | null
  }


  /**
   * Model Primer
   */

  export type AggregatePrimer = {
    _count: PrimerCountAggregateOutputType | null
    _avg: PrimerAvgAggregateOutputType | null
    _sum: PrimerSumAggregateOutputType | null
    _min: PrimerMinAggregateOutputType | null
    _max: PrimerMaxAggregateOutputType | null
  }

  export type PrimerAvgAggregateOutputType = {
    id: number | null
    fromDataVersion: number | null
    toDataVersion: number | null
  }

  export type PrimerSumAggregateOutputType = {
    id: number | null
    fromDataVersion: number | null
    toDataVersion: number | null
  }

  export type PrimerMinAggregateOutputType = {
    id: number | null
    fromVersion: string | null
    toVersion: string | null
    fromDataVersion: number | null
    toDataVersion: number | null
    modloader: string | null
    title: string | null
    summary: string | null
    url: string | null
    content: string | null
    tags: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
    embedding: Bytes | null
  }

  export type PrimerMaxAggregateOutputType = {
    id: number | null
    fromVersion: string | null
    toVersion: string | null
    fromDataVersion: number | null
    toDataVersion: number | null
    modloader: string | null
    title: string | null
    summary: string | null
    url: string | null
    content: string | null
    tags: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
    embedding: Bytes | null
  }

  export type PrimerCountAggregateOutputType = {
    id: number
    fromVersion: number
    toVersion: number
    fromDataVersion: number
    toDataVersion: number
    modloader: number
    title: number
    summary: number
    url: number
    content: number
    tags: number
    source: number
    createdAt: number
    updatedAt: number
    embedding: number
    _all: number
  }


  export type PrimerAvgAggregateInputType = {
    id?: true
    fromDataVersion?: true
    toDataVersion?: true
  }

  export type PrimerSumAggregateInputType = {
    id?: true
    fromDataVersion?: true
    toDataVersion?: true
  }

  export type PrimerMinAggregateInputType = {
    id?: true
    fromVersion?: true
    toVersion?: true
    fromDataVersion?: true
    toDataVersion?: true
    modloader?: true
    title?: true
    summary?: true
    url?: true
    content?: true
    tags?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    embedding?: true
  }

  export type PrimerMaxAggregateInputType = {
    id?: true
    fromVersion?: true
    toVersion?: true
    fromDataVersion?: true
    toDataVersion?: true
    modloader?: true
    title?: true
    summary?: true
    url?: true
    content?: true
    tags?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    embedding?: true
  }

  export type PrimerCountAggregateInputType = {
    id?: true
    fromVersion?: true
    toVersion?: true
    fromDataVersion?: true
    toDataVersion?: true
    modloader?: true
    title?: true
    summary?: true
    url?: true
    content?: true
    tags?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    embedding?: true
    _all?: true
  }

  export type PrimerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Primer to aggregate.
     */
    where?: PrimerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Primers to fetch.
     */
    orderBy?: PrimerOrderByWithRelationInput | PrimerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrimerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Primers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Primers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Primers
    **/
    _count?: true | PrimerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrimerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrimerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrimerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrimerMaxAggregateInputType
  }

  export type GetPrimerAggregateType<T extends PrimerAggregateArgs> = {
        [P in keyof T & keyof AggregatePrimer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrimer[P]>
      : GetScalarType<T[P], AggregatePrimer[P]>
  }




  export type PrimerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrimerWhereInput
    orderBy?: PrimerOrderByWithAggregationInput | PrimerOrderByWithAggregationInput[]
    by: PrimerScalarFieldEnum[] | PrimerScalarFieldEnum
    having?: PrimerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrimerCountAggregateInputType | true
    _avg?: PrimerAvgAggregateInputType
    _sum?: PrimerSumAggregateInputType
    _min?: PrimerMinAggregateInputType
    _max?: PrimerMaxAggregateInputType
  }

  export type PrimerGroupByOutputType = {
    id: number
    fromVersion: string
    toVersion: string
    fromDataVersion: number | null
    toDataVersion: number | null
    modloader: string
    title: string
    summary: string | null
    url: string
    content: string | null
    tags: string
    source: string
    createdAt: Date
    updatedAt: Date
    embedding: Bytes | null
    _count: PrimerCountAggregateOutputType | null
    _avg: PrimerAvgAggregateOutputType | null
    _sum: PrimerSumAggregateOutputType | null
    _min: PrimerMinAggregateOutputType | null
    _max: PrimerMaxAggregateOutputType | null
  }

  type GetPrimerGroupByPayload<T extends PrimerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrimerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrimerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrimerGroupByOutputType[P]>
            : GetScalarType<T[P], PrimerGroupByOutputType[P]>
        }
      >
    >


  export type PrimerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromVersion?: boolean
    toVersion?: boolean
    fromDataVersion?: boolean
    toDataVersion?: boolean
    modloader?: boolean
    title?: boolean
    summary?: boolean
    url?: boolean
    content?: boolean
    tags?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embedding?: boolean
  }, ExtArgs["result"]["primer"]>

  export type PrimerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromVersion?: boolean
    toVersion?: boolean
    fromDataVersion?: boolean
    toDataVersion?: boolean
    modloader?: boolean
    title?: boolean
    summary?: boolean
    url?: boolean
    content?: boolean
    tags?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embedding?: boolean
  }, ExtArgs["result"]["primer"]>

  export type PrimerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromVersion?: boolean
    toVersion?: boolean
    fromDataVersion?: boolean
    toDataVersion?: boolean
    modloader?: boolean
    title?: boolean
    summary?: boolean
    url?: boolean
    content?: boolean
    tags?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embedding?: boolean
  }, ExtArgs["result"]["primer"]>

  export type PrimerSelectScalar = {
    id?: boolean
    fromVersion?: boolean
    toVersion?: boolean
    fromDataVersion?: boolean
    toDataVersion?: boolean
    modloader?: boolean
    title?: boolean
    summary?: boolean
    url?: boolean
    content?: boolean
    tags?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embedding?: boolean
  }

  export type PrimerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromVersion" | "toVersion" | "fromDataVersion" | "toDataVersion" | "modloader" | "title" | "summary" | "url" | "content" | "tags" | "source" | "createdAt" | "updatedAt" | "embedding", ExtArgs["result"]["primer"]>

  export type $PrimerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Primer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fromVersion: string
      toVersion: string
      fromDataVersion: number | null
      toDataVersion: number | null
      modloader: string
      title: string
      summary: string | null
      url: string
      content: string | null
      tags: string
      source: string
      createdAt: Date
      updatedAt: Date
      embedding: Prisma.Bytes | null
    }, ExtArgs["result"]["primer"]>
    composites: {}
  }

  type PrimerGetPayload<S extends boolean | null | undefined | PrimerDefaultArgs> = $Result.GetResult<Prisma.$PrimerPayload, S>

  type PrimerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrimerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrimerCountAggregateInputType | true
    }

  export interface PrimerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Primer'], meta: { name: 'Primer' } }
    /**
     * Find zero or one Primer that matches the filter.
     * @param {PrimerFindUniqueArgs} args - Arguments to find a Primer
     * @example
     * // Get one Primer
     * const primer = await prisma.primer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrimerFindUniqueArgs>(args: SelectSubset<T, PrimerFindUniqueArgs<ExtArgs>>): Prisma__PrimerClient<$Result.GetResult<Prisma.$PrimerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Primer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrimerFindUniqueOrThrowArgs} args - Arguments to find a Primer
     * @example
     * // Get one Primer
     * const primer = await prisma.primer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrimerFindUniqueOrThrowArgs>(args: SelectSubset<T, PrimerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrimerClient<$Result.GetResult<Prisma.$PrimerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Primer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrimerFindFirstArgs} args - Arguments to find a Primer
     * @example
     * // Get one Primer
     * const primer = await prisma.primer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrimerFindFirstArgs>(args?: SelectSubset<T, PrimerFindFirstArgs<ExtArgs>>): Prisma__PrimerClient<$Result.GetResult<Prisma.$PrimerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Primer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrimerFindFirstOrThrowArgs} args - Arguments to find a Primer
     * @example
     * // Get one Primer
     * const primer = await prisma.primer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrimerFindFirstOrThrowArgs>(args?: SelectSubset<T, PrimerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrimerClient<$Result.GetResult<Prisma.$PrimerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Primers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrimerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Primers
     * const primers = await prisma.primer.findMany()
     * 
     * // Get first 10 Primers
     * const primers = await prisma.primer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const primerWithIdOnly = await prisma.primer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrimerFindManyArgs>(args?: SelectSubset<T, PrimerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrimerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Primer.
     * @param {PrimerCreateArgs} args - Arguments to create a Primer.
     * @example
     * // Create one Primer
     * const Primer = await prisma.primer.create({
     *   data: {
     *     // ... data to create a Primer
     *   }
     * })
     * 
     */
    create<T extends PrimerCreateArgs>(args: SelectSubset<T, PrimerCreateArgs<ExtArgs>>): Prisma__PrimerClient<$Result.GetResult<Prisma.$PrimerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Primers.
     * @param {PrimerCreateManyArgs} args - Arguments to create many Primers.
     * @example
     * // Create many Primers
     * const primer = await prisma.primer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrimerCreateManyArgs>(args?: SelectSubset<T, PrimerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Primers and returns the data saved in the database.
     * @param {PrimerCreateManyAndReturnArgs} args - Arguments to create many Primers.
     * @example
     * // Create many Primers
     * const primer = await prisma.primer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Primers and only return the `id`
     * const primerWithIdOnly = await prisma.primer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrimerCreateManyAndReturnArgs>(args?: SelectSubset<T, PrimerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrimerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Primer.
     * @param {PrimerDeleteArgs} args - Arguments to delete one Primer.
     * @example
     * // Delete one Primer
     * const Primer = await prisma.primer.delete({
     *   where: {
     *     // ... filter to delete one Primer
     *   }
     * })
     * 
     */
    delete<T extends PrimerDeleteArgs>(args: SelectSubset<T, PrimerDeleteArgs<ExtArgs>>): Prisma__PrimerClient<$Result.GetResult<Prisma.$PrimerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Primer.
     * @param {PrimerUpdateArgs} args - Arguments to update one Primer.
     * @example
     * // Update one Primer
     * const primer = await prisma.primer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrimerUpdateArgs>(args: SelectSubset<T, PrimerUpdateArgs<ExtArgs>>): Prisma__PrimerClient<$Result.GetResult<Prisma.$PrimerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Primers.
     * @param {PrimerDeleteManyArgs} args - Arguments to filter Primers to delete.
     * @example
     * // Delete a few Primers
     * const { count } = await prisma.primer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrimerDeleteManyArgs>(args?: SelectSubset<T, PrimerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Primers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrimerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Primers
     * const primer = await prisma.primer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrimerUpdateManyArgs>(args: SelectSubset<T, PrimerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Primers and returns the data updated in the database.
     * @param {PrimerUpdateManyAndReturnArgs} args - Arguments to update many Primers.
     * @example
     * // Update many Primers
     * const primer = await prisma.primer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Primers and only return the `id`
     * const primerWithIdOnly = await prisma.primer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrimerUpdateManyAndReturnArgs>(args: SelectSubset<T, PrimerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrimerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Primer.
     * @param {PrimerUpsertArgs} args - Arguments to update or create a Primer.
     * @example
     * // Update or create a Primer
     * const primer = await prisma.primer.upsert({
     *   create: {
     *     // ... data to create a Primer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Primer we want to update
     *   }
     * })
     */
    upsert<T extends PrimerUpsertArgs>(args: SelectSubset<T, PrimerUpsertArgs<ExtArgs>>): Prisma__PrimerClient<$Result.GetResult<Prisma.$PrimerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Primers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrimerCountArgs} args - Arguments to filter Primers to count.
     * @example
     * // Count the number of Primers
     * const count = await prisma.primer.count({
     *   where: {
     *     // ... the filter for the Primers we want to count
     *   }
     * })
    **/
    count<T extends PrimerCountArgs>(
      args?: Subset<T, PrimerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrimerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Primer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrimerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrimerAggregateArgs>(args: Subset<T, PrimerAggregateArgs>): Prisma.PrismaPromise<GetPrimerAggregateType<T>>

    /**
     * Group by Primer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrimerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrimerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrimerGroupByArgs['orderBy'] }
        : { orderBy?: PrimerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrimerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrimerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Primer model
   */
  readonly fields: PrimerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Primer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrimerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Primer model
   */
  interface PrimerFieldRefs {
    readonly id: FieldRef<"Primer", 'Int'>
    readonly fromVersion: FieldRef<"Primer", 'String'>
    readonly toVersion: FieldRef<"Primer", 'String'>
    readonly fromDataVersion: FieldRef<"Primer", 'Int'>
    readonly toDataVersion: FieldRef<"Primer", 'Int'>
    readonly modloader: FieldRef<"Primer", 'String'>
    readonly title: FieldRef<"Primer", 'String'>
    readonly summary: FieldRef<"Primer", 'String'>
    readonly url: FieldRef<"Primer", 'String'>
    readonly content: FieldRef<"Primer", 'String'>
    readonly tags: FieldRef<"Primer", 'String'>
    readonly source: FieldRef<"Primer", 'String'>
    readonly createdAt: FieldRef<"Primer", 'DateTime'>
    readonly updatedAt: FieldRef<"Primer", 'DateTime'>
    readonly embedding: FieldRef<"Primer", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * Primer findUnique
   */
  export type PrimerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Primer
     */
    select?: PrimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Primer
     */
    omit?: PrimerOmit<ExtArgs> | null
    /**
     * Filter, which Primer to fetch.
     */
    where: PrimerWhereUniqueInput
  }

  /**
   * Primer findUniqueOrThrow
   */
  export type PrimerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Primer
     */
    select?: PrimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Primer
     */
    omit?: PrimerOmit<ExtArgs> | null
    /**
     * Filter, which Primer to fetch.
     */
    where: PrimerWhereUniqueInput
  }

  /**
   * Primer findFirst
   */
  export type PrimerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Primer
     */
    select?: PrimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Primer
     */
    omit?: PrimerOmit<ExtArgs> | null
    /**
     * Filter, which Primer to fetch.
     */
    where?: PrimerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Primers to fetch.
     */
    orderBy?: PrimerOrderByWithRelationInput | PrimerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Primers.
     */
    cursor?: PrimerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Primers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Primers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Primers.
     */
    distinct?: PrimerScalarFieldEnum | PrimerScalarFieldEnum[]
  }

  /**
   * Primer findFirstOrThrow
   */
  export type PrimerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Primer
     */
    select?: PrimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Primer
     */
    omit?: PrimerOmit<ExtArgs> | null
    /**
     * Filter, which Primer to fetch.
     */
    where?: PrimerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Primers to fetch.
     */
    orderBy?: PrimerOrderByWithRelationInput | PrimerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Primers.
     */
    cursor?: PrimerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Primers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Primers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Primers.
     */
    distinct?: PrimerScalarFieldEnum | PrimerScalarFieldEnum[]
  }

  /**
   * Primer findMany
   */
  export type PrimerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Primer
     */
    select?: PrimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Primer
     */
    omit?: PrimerOmit<ExtArgs> | null
    /**
     * Filter, which Primers to fetch.
     */
    where?: PrimerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Primers to fetch.
     */
    orderBy?: PrimerOrderByWithRelationInput | PrimerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Primers.
     */
    cursor?: PrimerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Primers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Primers.
     */
    skip?: number
    distinct?: PrimerScalarFieldEnum | PrimerScalarFieldEnum[]
  }

  /**
   * Primer create
   */
  export type PrimerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Primer
     */
    select?: PrimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Primer
     */
    omit?: PrimerOmit<ExtArgs> | null
    /**
     * The data needed to create a Primer.
     */
    data: XOR<PrimerCreateInput, PrimerUncheckedCreateInput>
  }

  /**
   * Primer createMany
   */
  export type PrimerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Primers.
     */
    data: PrimerCreateManyInput | PrimerCreateManyInput[]
  }

  /**
   * Primer createManyAndReturn
   */
  export type PrimerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Primer
     */
    select?: PrimerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Primer
     */
    omit?: PrimerOmit<ExtArgs> | null
    /**
     * The data used to create many Primers.
     */
    data: PrimerCreateManyInput | PrimerCreateManyInput[]
  }

  /**
   * Primer update
   */
  export type PrimerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Primer
     */
    select?: PrimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Primer
     */
    omit?: PrimerOmit<ExtArgs> | null
    /**
     * The data needed to update a Primer.
     */
    data: XOR<PrimerUpdateInput, PrimerUncheckedUpdateInput>
    /**
     * Choose, which Primer to update.
     */
    where: PrimerWhereUniqueInput
  }

  /**
   * Primer updateMany
   */
  export type PrimerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Primers.
     */
    data: XOR<PrimerUpdateManyMutationInput, PrimerUncheckedUpdateManyInput>
    /**
     * Filter which Primers to update
     */
    where?: PrimerWhereInput
    /**
     * Limit how many Primers to update.
     */
    limit?: number
  }

  /**
   * Primer updateManyAndReturn
   */
  export type PrimerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Primer
     */
    select?: PrimerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Primer
     */
    omit?: PrimerOmit<ExtArgs> | null
    /**
     * The data used to update Primers.
     */
    data: XOR<PrimerUpdateManyMutationInput, PrimerUncheckedUpdateManyInput>
    /**
     * Filter which Primers to update
     */
    where?: PrimerWhereInput
    /**
     * Limit how many Primers to update.
     */
    limit?: number
  }

  /**
   * Primer upsert
   */
  export type PrimerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Primer
     */
    select?: PrimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Primer
     */
    omit?: PrimerOmit<ExtArgs> | null
    /**
     * The filter to search for the Primer to update in case it exists.
     */
    where: PrimerWhereUniqueInput
    /**
     * In case the Primer found by the `where` argument doesn't exist, create a new Primer with this data.
     */
    create: XOR<PrimerCreateInput, PrimerUncheckedCreateInput>
    /**
     * In case the Primer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrimerUpdateInput, PrimerUncheckedUpdateInput>
  }

  /**
   * Primer delete
   */
  export type PrimerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Primer
     */
    select?: PrimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Primer
     */
    omit?: PrimerOmit<ExtArgs> | null
    /**
     * Filter which Primer to delete.
     */
    where: PrimerWhereUniqueInput
  }

  /**
   * Primer deleteMany
   */
  export type PrimerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Primers to delete
     */
    where?: PrimerWhereInput
    /**
     * Limit how many Primers to delete.
     */
    limit?: number
  }

  /**
   * Primer without action
   */
  export type PrimerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Primer
     */
    select?: PrimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Primer
     */
    omit?: PrimerOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ModScalarFieldEnum: {
    id: 'id',
    modId: 'modId',
    displayName: 'displayName',
    version: 'version',
    mcVersion: 'mcVersion',
    loader: 'loader',
    jarPath: 'jarPath',
    sha256: 'sha256',
    murmur2: 'murmur2',
    sha512: 'sha512',
    sourcePath: 'sourcePath',
    decompPath: 'decompPath',
    decompiled: 'decompiled',
    modrinthId: 'modrinthId',
    curseforgeId: 'curseforgeId',
    hasMixins: 'hasMixins',
    hasAt: 'hasAt',
    hasAw: 'hasAw',
    mixinConfigs: 'mixinConfigs',
    mixinTargets: 'mixinTargets',
    atEntries: 'atEntries',
    awEntries: 'awEntries',
    dependencies: 'dependencies',
    metadata: 'metadata',
    tags: 'tags',
    ingestedAt: 'ingestedAt',
    updatedAt: 'updatedAt'
  };

  export type ModScalarFieldEnum = (typeof ModScalarFieldEnum)[keyof typeof ModScalarFieldEnum]


  export const ModClassScalarFieldEnum: {
    id: 'id',
    modId: 'modId',
    className: 'className',
    superClass: 'superClass',
    interfaces: 'interfaces',
    accessFlags: 'accessFlags'
  };

  export type ModClassScalarFieldEnum = (typeof ModClassScalarFieldEnum)[keyof typeof ModClassScalarFieldEnum]


  export const McVersionScalarFieldEnum: {
    id: 'id',
    versionId: 'versionId',
    type: 'type',
    jarPath: 'jarPath',
    decompPath: 'decompPath',
    decompiled: 'decompiled',
    indexed: 'indexed',
    releaseTime: 'releaseTime',
    createdAt: 'createdAt'
  };

  export type McVersionScalarFieldEnum = (typeof McVersionScalarFieldEnum)[keyof typeof McVersionScalarFieldEnum]


  export const McVersionDiffScalarFieldEnum: {
    id: 'id',
    versionA: 'versionA',
    versionB: 'versionB',
    packagesHash: 'packagesHash',
    result: 'result',
    createdAt: 'createdAt'
  };

  export type McVersionDiffScalarFieldEnum = (typeof McVersionDiffScalarFieldEnum)[keyof typeof McVersionDiffScalarFieldEnum]


  export const ModVersionDiffScalarFieldEnum: {
    id: 'id',
    modDbIdA: 'modDbIdA',
    modDbIdB: 'modDbIdB',
    packagesHash: 'packagesHash',
    result: 'result',
    createdAt: 'createdAt'
  };

  export type ModVersionDiffScalarFieldEnum = (typeof ModVersionDiffScalarFieldEnum)[keyof typeof ModVersionDiffScalarFieldEnum]


  export const ModTagScalarFieldEnum: {
    id: 'id',
    modId: 'modId',
    registry: 'registry',
    tagPath: 'tagPath',
    namespace: 'namespace',
    entries: 'entries',
    replace: 'replace'
  };

  export type ModTagScalarFieldEnum = (typeof ModTagScalarFieldEnum)[keyof typeof ModTagScalarFieldEnum]


  export const McSourceFileScalarFieldEnum: {
    id: 'id',
    mcVersionId: 'mcVersionId',
    className: 'className',
    content: 'content',
    embedding: 'embedding'
  };

  export type McSourceFileScalarFieldEnum = (typeof McSourceFileScalarFieldEnum)[keyof typeof McSourceFileScalarFieldEnum]


  export const ModSourceFileScalarFieldEnum: {
    id: 'id',
    modId: 'modId',
    className: 'className',
    content: 'content',
    embedding: 'embedding'
  };

  export type ModSourceFileScalarFieldEnum = (typeof ModSourceFileScalarFieldEnum)[keyof typeof ModSourceFileScalarFieldEnum]


  export const DocEntryScalarFieldEnum: {
    id: 'id',
    className: 'className',
    title: 'title',
    summary: 'summary',
    url: 'url',
    category: 'category',
    tags: 'tags',
    namespace: 'namespace',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    embedding: 'embedding'
  };

  export type DocEntryScalarFieldEnum = (typeof DocEntryScalarFieldEnum)[keyof typeof DocEntryScalarFieldEnum]


  export const PrimerScalarFieldEnum: {
    id: 'id',
    fromVersion: 'fromVersion',
    toVersion: 'toVersion',
    fromDataVersion: 'fromDataVersion',
    toDataVersion: 'toDataVersion',
    modloader: 'modloader',
    title: 'title',
    summary: 'summary',
    url: 'url',
    content: 'content',
    tags: 'tags',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    embedding: 'embedding'
  };

  export type PrimerScalarFieldEnum = (typeof PrimerScalarFieldEnum)[keyof typeof PrimerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ModWhereInput = {
    AND?: ModWhereInput | ModWhereInput[]
    OR?: ModWhereInput[]
    NOT?: ModWhereInput | ModWhereInput[]
    id?: IntFilter<"Mod"> | number
    modId?: StringFilter<"Mod"> | string
    displayName?: StringFilter<"Mod"> | string
    version?: StringFilter<"Mod"> | string
    mcVersion?: StringFilter<"Mod"> | string
    loader?: StringFilter<"Mod"> | string
    jarPath?: StringFilter<"Mod"> | string
    sha256?: StringNullableFilter<"Mod"> | string | null
    murmur2?: StringNullableFilter<"Mod"> | string | null
    sha512?: StringNullableFilter<"Mod"> | string | null
    sourcePath?: StringNullableFilter<"Mod"> | string | null
    decompPath?: StringNullableFilter<"Mod"> | string | null
    decompiled?: BoolFilter<"Mod"> | boolean
    modrinthId?: StringNullableFilter<"Mod"> | string | null
    curseforgeId?: IntNullableFilter<"Mod"> | number | null
    hasMixins?: BoolFilter<"Mod"> | boolean
    hasAt?: BoolFilter<"Mod"> | boolean
    hasAw?: BoolFilter<"Mod"> | boolean
    mixinConfigs?: StringFilter<"Mod"> | string
    mixinTargets?: StringFilter<"Mod"> | string
    atEntries?: StringFilter<"Mod"> | string
    awEntries?: StringFilter<"Mod"> | string
    dependencies?: StringFilter<"Mod"> | string
    metadata?: StringFilter<"Mod"> | string
    tags?: StringFilter<"Mod"> | string
    ingestedAt?: DateTimeFilter<"Mod"> | Date | string
    updatedAt?: DateTimeFilter<"Mod"> | Date | string
    classes?: ModClassListRelationFilter
    modTags?: ModTagListRelationFilter
    sourceFiles?: ModSourceFileListRelationFilter
  }

  export type ModOrderByWithRelationInput = {
    id?: SortOrder
    modId?: SortOrder
    displayName?: SortOrder
    version?: SortOrder
    mcVersion?: SortOrder
    loader?: SortOrder
    jarPath?: SortOrder
    sha256?: SortOrderInput | SortOrder
    murmur2?: SortOrderInput | SortOrder
    sha512?: SortOrderInput | SortOrder
    sourcePath?: SortOrderInput | SortOrder
    decompPath?: SortOrderInput | SortOrder
    decompiled?: SortOrder
    modrinthId?: SortOrderInput | SortOrder
    curseforgeId?: SortOrderInput | SortOrder
    hasMixins?: SortOrder
    hasAt?: SortOrder
    hasAw?: SortOrder
    mixinConfigs?: SortOrder
    mixinTargets?: SortOrder
    atEntries?: SortOrder
    awEntries?: SortOrder
    dependencies?: SortOrder
    metadata?: SortOrder
    tags?: SortOrder
    ingestedAt?: SortOrder
    updatedAt?: SortOrder
    classes?: ModClassOrderByRelationAggregateInput
    modTags?: ModTagOrderByRelationAggregateInput
    sourceFiles?: ModSourceFileOrderByRelationAggregateInput
  }

  export type ModWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    jarPath?: string
    modId_version_mcVersion_loader?: ModModIdVersionMcVersionLoaderCompoundUniqueInput
    AND?: ModWhereInput | ModWhereInput[]
    OR?: ModWhereInput[]
    NOT?: ModWhereInput | ModWhereInput[]
    modId?: StringFilter<"Mod"> | string
    displayName?: StringFilter<"Mod"> | string
    version?: StringFilter<"Mod"> | string
    mcVersion?: StringFilter<"Mod"> | string
    loader?: StringFilter<"Mod"> | string
    sha256?: StringNullableFilter<"Mod"> | string | null
    murmur2?: StringNullableFilter<"Mod"> | string | null
    sha512?: StringNullableFilter<"Mod"> | string | null
    sourcePath?: StringNullableFilter<"Mod"> | string | null
    decompPath?: StringNullableFilter<"Mod"> | string | null
    decompiled?: BoolFilter<"Mod"> | boolean
    modrinthId?: StringNullableFilter<"Mod"> | string | null
    curseforgeId?: IntNullableFilter<"Mod"> | number | null
    hasMixins?: BoolFilter<"Mod"> | boolean
    hasAt?: BoolFilter<"Mod"> | boolean
    hasAw?: BoolFilter<"Mod"> | boolean
    mixinConfigs?: StringFilter<"Mod"> | string
    mixinTargets?: StringFilter<"Mod"> | string
    atEntries?: StringFilter<"Mod"> | string
    awEntries?: StringFilter<"Mod"> | string
    dependencies?: StringFilter<"Mod"> | string
    metadata?: StringFilter<"Mod"> | string
    tags?: StringFilter<"Mod"> | string
    ingestedAt?: DateTimeFilter<"Mod"> | Date | string
    updatedAt?: DateTimeFilter<"Mod"> | Date | string
    classes?: ModClassListRelationFilter
    modTags?: ModTagListRelationFilter
    sourceFiles?: ModSourceFileListRelationFilter
  }, "id" | "jarPath" | "modId_version_mcVersion_loader">

  export type ModOrderByWithAggregationInput = {
    id?: SortOrder
    modId?: SortOrder
    displayName?: SortOrder
    version?: SortOrder
    mcVersion?: SortOrder
    loader?: SortOrder
    jarPath?: SortOrder
    sha256?: SortOrderInput | SortOrder
    murmur2?: SortOrderInput | SortOrder
    sha512?: SortOrderInput | SortOrder
    sourcePath?: SortOrderInput | SortOrder
    decompPath?: SortOrderInput | SortOrder
    decompiled?: SortOrder
    modrinthId?: SortOrderInput | SortOrder
    curseforgeId?: SortOrderInput | SortOrder
    hasMixins?: SortOrder
    hasAt?: SortOrder
    hasAw?: SortOrder
    mixinConfigs?: SortOrder
    mixinTargets?: SortOrder
    atEntries?: SortOrder
    awEntries?: SortOrder
    dependencies?: SortOrder
    metadata?: SortOrder
    tags?: SortOrder
    ingestedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModCountOrderByAggregateInput
    _avg?: ModAvgOrderByAggregateInput
    _max?: ModMaxOrderByAggregateInput
    _min?: ModMinOrderByAggregateInput
    _sum?: ModSumOrderByAggregateInput
  }

  export type ModScalarWhereWithAggregatesInput = {
    AND?: ModScalarWhereWithAggregatesInput | ModScalarWhereWithAggregatesInput[]
    OR?: ModScalarWhereWithAggregatesInput[]
    NOT?: ModScalarWhereWithAggregatesInput | ModScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mod"> | number
    modId?: StringWithAggregatesFilter<"Mod"> | string
    displayName?: StringWithAggregatesFilter<"Mod"> | string
    version?: StringWithAggregatesFilter<"Mod"> | string
    mcVersion?: StringWithAggregatesFilter<"Mod"> | string
    loader?: StringWithAggregatesFilter<"Mod"> | string
    jarPath?: StringWithAggregatesFilter<"Mod"> | string
    sha256?: StringNullableWithAggregatesFilter<"Mod"> | string | null
    murmur2?: StringNullableWithAggregatesFilter<"Mod"> | string | null
    sha512?: StringNullableWithAggregatesFilter<"Mod"> | string | null
    sourcePath?: StringNullableWithAggregatesFilter<"Mod"> | string | null
    decompPath?: StringNullableWithAggregatesFilter<"Mod"> | string | null
    decompiled?: BoolWithAggregatesFilter<"Mod"> | boolean
    modrinthId?: StringNullableWithAggregatesFilter<"Mod"> | string | null
    curseforgeId?: IntNullableWithAggregatesFilter<"Mod"> | number | null
    hasMixins?: BoolWithAggregatesFilter<"Mod"> | boolean
    hasAt?: BoolWithAggregatesFilter<"Mod"> | boolean
    hasAw?: BoolWithAggregatesFilter<"Mod"> | boolean
    mixinConfigs?: StringWithAggregatesFilter<"Mod"> | string
    mixinTargets?: StringWithAggregatesFilter<"Mod"> | string
    atEntries?: StringWithAggregatesFilter<"Mod"> | string
    awEntries?: StringWithAggregatesFilter<"Mod"> | string
    dependencies?: StringWithAggregatesFilter<"Mod"> | string
    metadata?: StringWithAggregatesFilter<"Mod"> | string
    tags?: StringWithAggregatesFilter<"Mod"> | string
    ingestedAt?: DateTimeWithAggregatesFilter<"Mod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mod"> | Date | string
  }

  export type ModClassWhereInput = {
    AND?: ModClassWhereInput | ModClassWhereInput[]
    OR?: ModClassWhereInput[]
    NOT?: ModClassWhereInput | ModClassWhereInput[]
    id?: IntFilter<"ModClass"> | number
    modId?: IntFilter<"ModClass"> | number
    className?: StringFilter<"ModClass"> | string
    superClass?: StringNullableFilter<"ModClass"> | string | null
    interfaces?: StringFilter<"ModClass"> | string
    accessFlags?: IntFilter<"ModClass"> | number
    mod?: XOR<ModScalarRelationFilter, ModWhereInput>
  }

  export type ModClassOrderByWithRelationInput = {
    id?: SortOrder
    modId?: SortOrder
    className?: SortOrder
    superClass?: SortOrderInput | SortOrder
    interfaces?: SortOrder
    accessFlags?: SortOrder
    mod?: ModOrderByWithRelationInput
  }

  export type ModClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    modId_className?: ModClassModIdClassNameCompoundUniqueInput
    AND?: ModClassWhereInput | ModClassWhereInput[]
    OR?: ModClassWhereInput[]
    NOT?: ModClassWhereInput | ModClassWhereInput[]
    modId?: IntFilter<"ModClass"> | number
    className?: StringFilter<"ModClass"> | string
    superClass?: StringNullableFilter<"ModClass"> | string | null
    interfaces?: StringFilter<"ModClass"> | string
    accessFlags?: IntFilter<"ModClass"> | number
    mod?: XOR<ModScalarRelationFilter, ModWhereInput>
  }, "id" | "modId_className">

  export type ModClassOrderByWithAggregationInput = {
    id?: SortOrder
    modId?: SortOrder
    className?: SortOrder
    superClass?: SortOrderInput | SortOrder
    interfaces?: SortOrder
    accessFlags?: SortOrder
    _count?: ModClassCountOrderByAggregateInput
    _avg?: ModClassAvgOrderByAggregateInput
    _max?: ModClassMaxOrderByAggregateInput
    _min?: ModClassMinOrderByAggregateInput
    _sum?: ModClassSumOrderByAggregateInput
  }

  export type ModClassScalarWhereWithAggregatesInput = {
    AND?: ModClassScalarWhereWithAggregatesInput | ModClassScalarWhereWithAggregatesInput[]
    OR?: ModClassScalarWhereWithAggregatesInput[]
    NOT?: ModClassScalarWhereWithAggregatesInput | ModClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModClass"> | number
    modId?: IntWithAggregatesFilter<"ModClass"> | number
    className?: StringWithAggregatesFilter<"ModClass"> | string
    superClass?: StringNullableWithAggregatesFilter<"ModClass"> | string | null
    interfaces?: StringWithAggregatesFilter<"ModClass"> | string
    accessFlags?: IntWithAggregatesFilter<"ModClass"> | number
  }

  export type McVersionWhereInput = {
    AND?: McVersionWhereInput | McVersionWhereInput[]
    OR?: McVersionWhereInput[]
    NOT?: McVersionWhereInput | McVersionWhereInput[]
    id?: IntFilter<"McVersion"> | number
    versionId?: StringFilter<"McVersion"> | string
    type?: StringFilter<"McVersion"> | string
    jarPath?: StringNullableFilter<"McVersion"> | string | null
    decompPath?: StringNullableFilter<"McVersion"> | string | null
    decompiled?: BoolFilter<"McVersion"> | boolean
    indexed?: BoolFilter<"McVersion"> | boolean
    releaseTime?: DateTimeFilter<"McVersion"> | Date | string
    createdAt?: DateTimeFilter<"McVersion"> | Date | string
    sourceFiles?: McSourceFileListRelationFilter
  }

  export type McVersionOrderByWithRelationInput = {
    id?: SortOrder
    versionId?: SortOrder
    type?: SortOrder
    jarPath?: SortOrderInput | SortOrder
    decompPath?: SortOrderInput | SortOrder
    decompiled?: SortOrder
    indexed?: SortOrder
    releaseTime?: SortOrder
    createdAt?: SortOrder
    sourceFiles?: McSourceFileOrderByRelationAggregateInput
  }

  export type McVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    versionId?: string
    AND?: McVersionWhereInput | McVersionWhereInput[]
    OR?: McVersionWhereInput[]
    NOT?: McVersionWhereInput | McVersionWhereInput[]
    type?: StringFilter<"McVersion"> | string
    jarPath?: StringNullableFilter<"McVersion"> | string | null
    decompPath?: StringNullableFilter<"McVersion"> | string | null
    decompiled?: BoolFilter<"McVersion"> | boolean
    indexed?: BoolFilter<"McVersion"> | boolean
    releaseTime?: DateTimeFilter<"McVersion"> | Date | string
    createdAt?: DateTimeFilter<"McVersion"> | Date | string
    sourceFiles?: McSourceFileListRelationFilter
  }, "id" | "versionId">

  export type McVersionOrderByWithAggregationInput = {
    id?: SortOrder
    versionId?: SortOrder
    type?: SortOrder
    jarPath?: SortOrderInput | SortOrder
    decompPath?: SortOrderInput | SortOrder
    decompiled?: SortOrder
    indexed?: SortOrder
    releaseTime?: SortOrder
    createdAt?: SortOrder
    _count?: McVersionCountOrderByAggregateInput
    _avg?: McVersionAvgOrderByAggregateInput
    _max?: McVersionMaxOrderByAggregateInput
    _min?: McVersionMinOrderByAggregateInput
    _sum?: McVersionSumOrderByAggregateInput
  }

  export type McVersionScalarWhereWithAggregatesInput = {
    AND?: McVersionScalarWhereWithAggregatesInput | McVersionScalarWhereWithAggregatesInput[]
    OR?: McVersionScalarWhereWithAggregatesInput[]
    NOT?: McVersionScalarWhereWithAggregatesInput | McVersionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"McVersion"> | number
    versionId?: StringWithAggregatesFilter<"McVersion"> | string
    type?: StringWithAggregatesFilter<"McVersion"> | string
    jarPath?: StringNullableWithAggregatesFilter<"McVersion"> | string | null
    decompPath?: StringNullableWithAggregatesFilter<"McVersion"> | string | null
    decompiled?: BoolWithAggregatesFilter<"McVersion"> | boolean
    indexed?: BoolWithAggregatesFilter<"McVersion"> | boolean
    releaseTime?: DateTimeWithAggregatesFilter<"McVersion"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"McVersion"> | Date | string
  }

  export type McVersionDiffWhereInput = {
    AND?: McVersionDiffWhereInput | McVersionDiffWhereInput[]
    OR?: McVersionDiffWhereInput[]
    NOT?: McVersionDiffWhereInput | McVersionDiffWhereInput[]
    id?: IntFilter<"McVersionDiff"> | number
    versionA?: StringFilter<"McVersionDiff"> | string
    versionB?: StringFilter<"McVersionDiff"> | string
    packagesHash?: StringFilter<"McVersionDiff"> | string
    result?: StringFilter<"McVersionDiff"> | string
    createdAt?: DateTimeFilter<"McVersionDiff"> | Date | string
  }

  export type McVersionDiffOrderByWithRelationInput = {
    id?: SortOrder
    versionA?: SortOrder
    versionB?: SortOrder
    packagesHash?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type McVersionDiffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    versionA_versionB_packagesHash?: McVersionDiffVersionAVersionBPackagesHashCompoundUniqueInput
    AND?: McVersionDiffWhereInput | McVersionDiffWhereInput[]
    OR?: McVersionDiffWhereInput[]
    NOT?: McVersionDiffWhereInput | McVersionDiffWhereInput[]
    versionA?: StringFilter<"McVersionDiff"> | string
    versionB?: StringFilter<"McVersionDiff"> | string
    packagesHash?: StringFilter<"McVersionDiff"> | string
    result?: StringFilter<"McVersionDiff"> | string
    createdAt?: DateTimeFilter<"McVersionDiff"> | Date | string
  }, "id" | "versionA_versionB_packagesHash">

  export type McVersionDiffOrderByWithAggregationInput = {
    id?: SortOrder
    versionA?: SortOrder
    versionB?: SortOrder
    packagesHash?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    _count?: McVersionDiffCountOrderByAggregateInput
    _avg?: McVersionDiffAvgOrderByAggregateInput
    _max?: McVersionDiffMaxOrderByAggregateInput
    _min?: McVersionDiffMinOrderByAggregateInput
    _sum?: McVersionDiffSumOrderByAggregateInput
  }

  export type McVersionDiffScalarWhereWithAggregatesInput = {
    AND?: McVersionDiffScalarWhereWithAggregatesInput | McVersionDiffScalarWhereWithAggregatesInput[]
    OR?: McVersionDiffScalarWhereWithAggregatesInput[]
    NOT?: McVersionDiffScalarWhereWithAggregatesInput | McVersionDiffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"McVersionDiff"> | number
    versionA?: StringWithAggregatesFilter<"McVersionDiff"> | string
    versionB?: StringWithAggregatesFilter<"McVersionDiff"> | string
    packagesHash?: StringWithAggregatesFilter<"McVersionDiff"> | string
    result?: StringWithAggregatesFilter<"McVersionDiff"> | string
    createdAt?: DateTimeWithAggregatesFilter<"McVersionDiff"> | Date | string
  }

  export type ModVersionDiffWhereInput = {
    AND?: ModVersionDiffWhereInput | ModVersionDiffWhereInput[]
    OR?: ModVersionDiffWhereInput[]
    NOT?: ModVersionDiffWhereInput | ModVersionDiffWhereInput[]
    id?: IntFilter<"ModVersionDiff"> | number
    modDbIdA?: IntFilter<"ModVersionDiff"> | number
    modDbIdB?: IntFilter<"ModVersionDiff"> | number
    packagesHash?: StringFilter<"ModVersionDiff"> | string
    result?: StringFilter<"ModVersionDiff"> | string
    createdAt?: DateTimeFilter<"ModVersionDiff"> | Date | string
  }

  export type ModVersionDiffOrderByWithRelationInput = {
    id?: SortOrder
    modDbIdA?: SortOrder
    modDbIdB?: SortOrder
    packagesHash?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type ModVersionDiffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    modDbIdA_modDbIdB_packagesHash?: ModVersionDiffModDbIdAModDbIdBPackagesHashCompoundUniqueInput
    AND?: ModVersionDiffWhereInput | ModVersionDiffWhereInput[]
    OR?: ModVersionDiffWhereInput[]
    NOT?: ModVersionDiffWhereInput | ModVersionDiffWhereInput[]
    modDbIdA?: IntFilter<"ModVersionDiff"> | number
    modDbIdB?: IntFilter<"ModVersionDiff"> | number
    packagesHash?: StringFilter<"ModVersionDiff"> | string
    result?: StringFilter<"ModVersionDiff"> | string
    createdAt?: DateTimeFilter<"ModVersionDiff"> | Date | string
  }, "id" | "modDbIdA_modDbIdB_packagesHash">

  export type ModVersionDiffOrderByWithAggregationInput = {
    id?: SortOrder
    modDbIdA?: SortOrder
    modDbIdB?: SortOrder
    packagesHash?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    _count?: ModVersionDiffCountOrderByAggregateInput
    _avg?: ModVersionDiffAvgOrderByAggregateInput
    _max?: ModVersionDiffMaxOrderByAggregateInput
    _min?: ModVersionDiffMinOrderByAggregateInput
    _sum?: ModVersionDiffSumOrderByAggregateInput
  }

  export type ModVersionDiffScalarWhereWithAggregatesInput = {
    AND?: ModVersionDiffScalarWhereWithAggregatesInput | ModVersionDiffScalarWhereWithAggregatesInput[]
    OR?: ModVersionDiffScalarWhereWithAggregatesInput[]
    NOT?: ModVersionDiffScalarWhereWithAggregatesInput | ModVersionDiffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModVersionDiff"> | number
    modDbIdA?: IntWithAggregatesFilter<"ModVersionDiff"> | number
    modDbIdB?: IntWithAggregatesFilter<"ModVersionDiff"> | number
    packagesHash?: StringWithAggregatesFilter<"ModVersionDiff"> | string
    result?: StringWithAggregatesFilter<"ModVersionDiff"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ModVersionDiff"> | Date | string
  }

  export type ModTagWhereInput = {
    AND?: ModTagWhereInput | ModTagWhereInput[]
    OR?: ModTagWhereInput[]
    NOT?: ModTagWhereInput | ModTagWhereInput[]
    id?: IntFilter<"ModTag"> | number
    modId?: IntFilter<"ModTag"> | number
    registry?: StringFilter<"ModTag"> | string
    tagPath?: StringFilter<"ModTag"> | string
    namespace?: StringFilter<"ModTag"> | string
    entries?: StringFilter<"ModTag"> | string
    replace?: BoolFilter<"ModTag"> | boolean
    mod?: XOR<ModScalarRelationFilter, ModWhereInput>
  }

  export type ModTagOrderByWithRelationInput = {
    id?: SortOrder
    modId?: SortOrder
    registry?: SortOrder
    tagPath?: SortOrder
    namespace?: SortOrder
    entries?: SortOrder
    replace?: SortOrder
    mod?: ModOrderByWithRelationInput
  }

  export type ModTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModTagWhereInput | ModTagWhereInput[]
    OR?: ModTagWhereInput[]
    NOT?: ModTagWhereInput | ModTagWhereInput[]
    modId?: IntFilter<"ModTag"> | number
    registry?: StringFilter<"ModTag"> | string
    tagPath?: StringFilter<"ModTag"> | string
    namespace?: StringFilter<"ModTag"> | string
    entries?: StringFilter<"ModTag"> | string
    replace?: BoolFilter<"ModTag"> | boolean
    mod?: XOR<ModScalarRelationFilter, ModWhereInput>
  }, "id">

  export type ModTagOrderByWithAggregationInput = {
    id?: SortOrder
    modId?: SortOrder
    registry?: SortOrder
    tagPath?: SortOrder
    namespace?: SortOrder
    entries?: SortOrder
    replace?: SortOrder
    _count?: ModTagCountOrderByAggregateInput
    _avg?: ModTagAvgOrderByAggregateInput
    _max?: ModTagMaxOrderByAggregateInput
    _min?: ModTagMinOrderByAggregateInput
    _sum?: ModTagSumOrderByAggregateInput
  }

  export type ModTagScalarWhereWithAggregatesInput = {
    AND?: ModTagScalarWhereWithAggregatesInput | ModTagScalarWhereWithAggregatesInput[]
    OR?: ModTagScalarWhereWithAggregatesInput[]
    NOT?: ModTagScalarWhereWithAggregatesInput | ModTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModTag"> | number
    modId?: IntWithAggregatesFilter<"ModTag"> | number
    registry?: StringWithAggregatesFilter<"ModTag"> | string
    tagPath?: StringWithAggregatesFilter<"ModTag"> | string
    namespace?: StringWithAggregatesFilter<"ModTag"> | string
    entries?: StringWithAggregatesFilter<"ModTag"> | string
    replace?: BoolWithAggregatesFilter<"ModTag"> | boolean
  }

  export type McSourceFileWhereInput = {
    AND?: McSourceFileWhereInput | McSourceFileWhereInput[]
    OR?: McSourceFileWhereInput[]
    NOT?: McSourceFileWhereInput | McSourceFileWhereInput[]
    id?: IntFilter<"McSourceFile"> | number
    mcVersionId?: IntFilter<"McSourceFile"> | number
    className?: StringFilter<"McSourceFile"> | string
    content?: StringFilter<"McSourceFile"> | string
    embedding?: BytesNullableFilter<"McSourceFile"> | Bytes | null
    mcVersion?: XOR<McVersionScalarRelationFilter, McVersionWhereInput>
  }

  export type McSourceFileOrderByWithRelationInput = {
    id?: SortOrder
    mcVersionId?: SortOrder
    className?: SortOrder
    content?: SortOrder
    embedding?: SortOrderInput | SortOrder
    mcVersion?: McVersionOrderByWithRelationInput
  }

  export type McSourceFileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mcVersionId_className?: McSourceFileMcVersionIdClassNameCompoundUniqueInput
    AND?: McSourceFileWhereInput | McSourceFileWhereInput[]
    OR?: McSourceFileWhereInput[]
    NOT?: McSourceFileWhereInput | McSourceFileWhereInput[]
    mcVersionId?: IntFilter<"McSourceFile"> | number
    className?: StringFilter<"McSourceFile"> | string
    content?: StringFilter<"McSourceFile"> | string
    embedding?: BytesNullableFilter<"McSourceFile"> | Bytes | null
    mcVersion?: XOR<McVersionScalarRelationFilter, McVersionWhereInput>
  }, "id" | "mcVersionId_className">

  export type McSourceFileOrderByWithAggregationInput = {
    id?: SortOrder
    mcVersionId?: SortOrder
    className?: SortOrder
    content?: SortOrder
    embedding?: SortOrderInput | SortOrder
    _count?: McSourceFileCountOrderByAggregateInput
    _avg?: McSourceFileAvgOrderByAggregateInput
    _max?: McSourceFileMaxOrderByAggregateInput
    _min?: McSourceFileMinOrderByAggregateInput
    _sum?: McSourceFileSumOrderByAggregateInput
  }

  export type McSourceFileScalarWhereWithAggregatesInput = {
    AND?: McSourceFileScalarWhereWithAggregatesInput | McSourceFileScalarWhereWithAggregatesInput[]
    OR?: McSourceFileScalarWhereWithAggregatesInput[]
    NOT?: McSourceFileScalarWhereWithAggregatesInput | McSourceFileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"McSourceFile"> | number
    mcVersionId?: IntWithAggregatesFilter<"McSourceFile"> | number
    className?: StringWithAggregatesFilter<"McSourceFile"> | string
    content?: StringWithAggregatesFilter<"McSourceFile"> | string
    embedding?: BytesNullableWithAggregatesFilter<"McSourceFile"> | Bytes | null
  }

  export type ModSourceFileWhereInput = {
    AND?: ModSourceFileWhereInput | ModSourceFileWhereInput[]
    OR?: ModSourceFileWhereInput[]
    NOT?: ModSourceFileWhereInput | ModSourceFileWhereInput[]
    id?: IntFilter<"ModSourceFile"> | number
    modId?: IntFilter<"ModSourceFile"> | number
    className?: StringFilter<"ModSourceFile"> | string
    content?: StringFilter<"ModSourceFile"> | string
    embedding?: BytesNullableFilter<"ModSourceFile"> | Bytes | null
    mod?: XOR<ModScalarRelationFilter, ModWhereInput>
  }

  export type ModSourceFileOrderByWithRelationInput = {
    id?: SortOrder
    modId?: SortOrder
    className?: SortOrder
    content?: SortOrder
    embedding?: SortOrderInput | SortOrder
    mod?: ModOrderByWithRelationInput
  }

  export type ModSourceFileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    modId_className?: ModSourceFileModIdClassNameCompoundUniqueInput
    AND?: ModSourceFileWhereInput | ModSourceFileWhereInput[]
    OR?: ModSourceFileWhereInput[]
    NOT?: ModSourceFileWhereInput | ModSourceFileWhereInput[]
    modId?: IntFilter<"ModSourceFile"> | number
    className?: StringFilter<"ModSourceFile"> | string
    content?: StringFilter<"ModSourceFile"> | string
    embedding?: BytesNullableFilter<"ModSourceFile"> | Bytes | null
    mod?: XOR<ModScalarRelationFilter, ModWhereInput>
  }, "id" | "modId_className">

  export type ModSourceFileOrderByWithAggregationInput = {
    id?: SortOrder
    modId?: SortOrder
    className?: SortOrder
    content?: SortOrder
    embedding?: SortOrderInput | SortOrder
    _count?: ModSourceFileCountOrderByAggregateInput
    _avg?: ModSourceFileAvgOrderByAggregateInput
    _max?: ModSourceFileMaxOrderByAggregateInput
    _min?: ModSourceFileMinOrderByAggregateInput
    _sum?: ModSourceFileSumOrderByAggregateInput
  }

  export type ModSourceFileScalarWhereWithAggregatesInput = {
    AND?: ModSourceFileScalarWhereWithAggregatesInput | ModSourceFileScalarWhereWithAggregatesInput[]
    OR?: ModSourceFileScalarWhereWithAggregatesInput[]
    NOT?: ModSourceFileScalarWhereWithAggregatesInput | ModSourceFileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModSourceFile"> | number
    modId?: IntWithAggregatesFilter<"ModSourceFile"> | number
    className?: StringWithAggregatesFilter<"ModSourceFile"> | string
    content?: StringWithAggregatesFilter<"ModSourceFile"> | string
    embedding?: BytesNullableWithAggregatesFilter<"ModSourceFile"> | Bytes | null
  }

  export type DocEntryWhereInput = {
    AND?: DocEntryWhereInput | DocEntryWhereInput[]
    OR?: DocEntryWhereInput[]
    NOT?: DocEntryWhereInput | DocEntryWhereInput[]
    id?: IntFilter<"DocEntry"> | number
    className?: StringNullableFilter<"DocEntry"> | string | null
    title?: StringFilter<"DocEntry"> | string
    summary?: StringNullableFilter<"DocEntry"> | string | null
    url?: StringFilter<"DocEntry"> | string
    category?: StringFilter<"DocEntry"> | string
    tags?: StringFilter<"DocEntry"> | string
    namespace?: StringFilter<"DocEntry"> | string
    source?: StringFilter<"DocEntry"> | string
    createdAt?: DateTimeFilter<"DocEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DocEntry"> | Date | string
    embedding?: BytesNullableFilter<"DocEntry"> | Bytes | null
  }

  export type DocEntryOrderByWithRelationInput = {
    id?: SortOrder
    className?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    namespace?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embedding?: SortOrderInput | SortOrder
  }

  export type DocEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocEntryWhereInput | DocEntryWhereInput[]
    OR?: DocEntryWhereInput[]
    NOT?: DocEntryWhereInput | DocEntryWhereInput[]
    className?: StringNullableFilter<"DocEntry"> | string | null
    title?: StringFilter<"DocEntry"> | string
    summary?: StringNullableFilter<"DocEntry"> | string | null
    url?: StringFilter<"DocEntry"> | string
    category?: StringFilter<"DocEntry"> | string
    tags?: StringFilter<"DocEntry"> | string
    namespace?: StringFilter<"DocEntry"> | string
    source?: StringFilter<"DocEntry"> | string
    createdAt?: DateTimeFilter<"DocEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DocEntry"> | Date | string
    embedding?: BytesNullableFilter<"DocEntry"> | Bytes | null
  }, "id">

  export type DocEntryOrderByWithAggregationInput = {
    id?: SortOrder
    className?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    namespace?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embedding?: SortOrderInput | SortOrder
    _count?: DocEntryCountOrderByAggregateInput
    _avg?: DocEntryAvgOrderByAggregateInput
    _max?: DocEntryMaxOrderByAggregateInput
    _min?: DocEntryMinOrderByAggregateInput
    _sum?: DocEntrySumOrderByAggregateInput
  }

  export type DocEntryScalarWhereWithAggregatesInput = {
    AND?: DocEntryScalarWhereWithAggregatesInput | DocEntryScalarWhereWithAggregatesInput[]
    OR?: DocEntryScalarWhereWithAggregatesInput[]
    NOT?: DocEntryScalarWhereWithAggregatesInput | DocEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DocEntry"> | number
    className?: StringNullableWithAggregatesFilter<"DocEntry"> | string | null
    title?: StringWithAggregatesFilter<"DocEntry"> | string
    summary?: StringNullableWithAggregatesFilter<"DocEntry"> | string | null
    url?: StringWithAggregatesFilter<"DocEntry"> | string
    category?: StringWithAggregatesFilter<"DocEntry"> | string
    tags?: StringWithAggregatesFilter<"DocEntry"> | string
    namespace?: StringWithAggregatesFilter<"DocEntry"> | string
    source?: StringWithAggregatesFilter<"DocEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DocEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DocEntry"> | Date | string
    embedding?: BytesNullableWithAggregatesFilter<"DocEntry"> | Bytes | null
  }

  export type PrimerWhereInput = {
    AND?: PrimerWhereInput | PrimerWhereInput[]
    OR?: PrimerWhereInput[]
    NOT?: PrimerWhereInput | PrimerWhereInput[]
    id?: IntFilter<"Primer"> | number
    fromVersion?: StringFilter<"Primer"> | string
    toVersion?: StringFilter<"Primer"> | string
    fromDataVersion?: IntNullableFilter<"Primer"> | number | null
    toDataVersion?: IntNullableFilter<"Primer"> | number | null
    modloader?: StringFilter<"Primer"> | string
    title?: StringFilter<"Primer"> | string
    summary?: StringNullableFilter<"Primer"> | string | null
    url?: StringFilter<"Primer"> | string
    content?: StringNullableFilter<"Primer"> | string | null
    tags?: StringFilter<"Primer"> | string
    source?: StringFilter<"Primer"> | string
    createdAt?: DateTimeFilter<"Primer"> | Date | string
    updatedAt?: DateTimeFilter<"Primer"> | Date | string
    embedding?: BytesNullableFilter<"Primer"> | Bytes | null
  }

  export type PrimerOrderByWithRelationInput = {
    id?: SortOrder
    fromVersion?: SortOrder
    toVersion?: SortOrder
    fromDataVersion?: SortOrderInput | SortOrder
    toDataVersion?: SortOrderInput | SortOrder
    modloader?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    url?: SortOrder
    content?: SortOrderInput | SortOrder
    tags?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embedding?: SortOrderInput | SortOrder
  }

  export type PrimerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: PrimerWhereInput | PrimerWhereInput[]
    OR?: PrimerWhereInput[]
    NOT?: PrimerWhereInput | PrimerWhereInput[]
    fromVersion?: StringFilter<"Primer"> | string
    toVersion?: StringFilter<"Primer"> | string
    fromDataVersion?: IntNullableFilter<"Primer"> | number | null
    toDataVersion?: IntNullableFilter<"Primer"> | number | null
    modloader?: StringFilter<"Primer"> | string
    title?: StringFilter<"Primer"> | string
    summary?: StringNullableFilter<"Primer"> | string | null
    content?: StringNullableFilter<"Primer"> | string | null
    tags?: StringFilter<"Primer"> | string
    source?: StringFilter<"Primer"> | string
    createdAt?: DateTimeFilter<"Primer"> | Date | string
    updatedAt?: DateTimeFilter<"Primer"> | Date | string
    embedding?: BytesNullableFilter<"Primer"> | Bytes | null
  }, "id" | "url">

  export type PrimerOrderByWithAggregationInput = {
    id?: SortOrder
    fromVersion?: SortOrder
    toVersion?: SortOrder
    fromDataVersion?: SortOrderInput | SortOrder
    toDataVersion?: SortOrderInput | SortOrder
    modloader?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    url?: SortOrder
    content?: SortOrderInput | SortOrder
    tags?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embedding?: SortOrderInput | SortOrder
    _count?: PrimerCountOrderByAggregateInput
    _avg?: PrimerAvgOrderByAggregateInput
    _max?: PrimerMaxOrderByAggregateInput
    _min?: PrimerMinOrderByAggregateInput
    _sum?: PrimerSumOrderByAggregateInput
  }

  export type PrimerScalarWhereWithAggregatesInput = {
    AND?: PrimerScalarWhereWithAggregatesInput | PrimerScalarWhereWithAggregatesInput[]
    OR?: PrimerScalarWhereWithAggregatesInput[]
    NOT?: PrimerScalarWhereWithAggregatesInput | PrimerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Primer"> | number
    fromVersion?: StringWithAggregatesFilter<"Primer"> | string
    toVersion?: StringWithAggregatesFilter<"Primer"> | string
    fromDataVersion?: IntNullableWithAggregatesFilter<"Primer"> | number | null
    toDataVersion?: IntNullableWithAggregatesFilter<"Primer"> | number | null
    modloader?: StringWithAggregatesFilter<"Primer"> | string
    title?: StringWithAggregatesFilter<"Primer"> | string
    summary?: StringNullableWithAggregatesFilter<"Primer"> | string | null
    url?: StringWithAggregatesFilter<"Primer"> | string
    content?: StringNullableWithAggregatesFilter<"Primer"> | string | null
    tags?: StringWithAggregatesFilter<"Primer"> | string
    source?: StringWithAggregatesFilter<"Primer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Primer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Primer"> | Date | string
    embedding?: BytesNullableWithAggregatesFilter<"Primer"> | Bytes | null
  }

  export type ModCreateInput = {
    modId: string
    displayName: string
    version: string
    mcVersion: string
    loader: string
    jarPath: string
    sha256?: string | null
    murmur2?: string | null
    sha512?: string | null
    sourcePath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    modrinthId?: string | null
    curseforgeId?: number | null
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: string
    mixinTargets?: string
    atEntries?: string
    awEntries?: string
    dependencies?: string
    metadata?: string
    tags?: string
    ingestedAt?: Date | string
    updatedAt?: Date | string
    classes?: ModClassCreateNestedManyWithoutModInput
    modTags?: ModTagCreateNestedManyWithoutModInput
    sourceFiles?: ModSourceFileCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateInput = {
    id?: number
    modId: string
    displayName: string
    version: string
    mcVersion: string
    loader: string
    jarPath: string
    sha256?: string | null
    murmur2?: string | null
    sha512?: string | null
    sourcePath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    modrinthId?: string | null
    curseforgeId?: number | null
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: string
    mixinTargets?: string
    atEntries?: string
    awEntries?: string
    dependencies?: string
    metadata?: string
    tags?: string
    ingestedAt?: Date | string
    updatedAt?: Date | string
    classes?: ModClassUncheckedCreateNestedManyWithoutModInput
    modTags?: ModTagUncheckedCreateNestedManyWithoutModInput
    sourceFiles?: ModSourceFileUncheckedCreateNestedManyWithoutModInput
  }

  export type ModUpdateInput = {
    modId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    mcVersion?: StringFieldUpdateOperationsInput | string
    loader?: StringFieldUpdateOperationsInput | string
    jarPath?: StringFieldUpdateOperationsInput | string
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    murmur2?: NullableStringFieldUpdateOperationsInput | string | null
    sha512?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    modrinthId?: NullableStringFieldUpdateOperationsInput | string | null
    curseforgeId?: NullableIntFieldUpdateOperationsInput | number | null
    hasMixins?: BoolFieldUpdateOperationsInput | boolean
    hasAt?: BoolFieldUpdateOperationsInput | boolean
    hasAw?: BoolFieldUpdateOperationsInput | boolean
    mixinConfigs?: StringFieldUpdateOperationsInput | string
    mixinTargets?: StringFieldUpdateOperationsInput | string
    atEntries?: StringFieldUpdateOperationsInput | string
    awEntries?: StringFieldUpdateOperationsInput | string
    dependencies?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ModClassUpdateManyWithoutModNestedInput
    modTags?: ModTagUpdateManyWithoutModNestedInput
    sourceFiles?: ModSourceFileUpdateManyWithoutModNestedInput
  }

  export type ModUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    mcVersion?: StringFieldUpdateOperationsInput | string
    loader?: StringFieldUpdateOperationsInput | string
    jarPath?: StringFieldUpdateOperationsInput | string
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    murmur2?: NullableStringFieldUpdateOperationsInput | string | null
    sha512?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    modrinthId?: NullableStringFieldUpdateOperationsInput | string | null
    curseforgeId?: NullableIntFieldUpdateOperationsInput | number | null
    hasMixins?: BoolFieldUpdateOperationsInput | boolean
    hasAt?: BoolFieldUpdateOperationsInput | boolean
    hasAw?: BoolFieldUpdateOperationsInput | boolean
    mixinConfigs?: StringFieldUpdateOperationsInput | string
    mixinTargets?: StringFieldUpdateOperationsInput | string
    atEntries?: StringFieldUpdateOperationsInput | string
    awEntries?: StringFieldUpdateOperationsInput | string
    dependencies?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ModClassUncheckedUpdateManyWithoutModNestedInput
    modTags?: ModTagUncheckedUpdateManyWithoutModNestedInput
    sourceFiles?: ModSourceFileUncheckedUpdateManyWithoutModNestedInput
  }

  export type ModCreateManyInput = {
    id?: number
    modId: string
    displayName: string
    version: string
    mcVersion: string
    loader: string
    jarPath: string
    sha256?: string | null
    murmur2?: string | null
    sha512?: string | null
    sourcePath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    modrinthId?: string | null
    curseforgeId?: number | null
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: string
    mixinTargets?: string
    atEntries?: string
    awEntries?: string
    dependencies?: string
    metadata?: string
    tags?: string
    ingestedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModUpdateManyMutationInput = {
    modId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    mcVersion?: StringFieldUpdateOperationsInput | string
    loader?: StringFieldUpdateOperationsInput | string
    jarPath?: StringFieldUpdateOperationsInput | string
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    murmur2?: NullableStringFieldUpdateOperationsInput | string | null
    sha512?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    modrinthId?: NullableStringFieldUpdateOperationsInput | string | null
    curseforgeId?: NullableIntFieldUpdateOperationsInput | number | null
    hasMixins?: BoolFieldUpdateOperationsInput | boolean
    hasAt?: BoolFieldUpdateOperationsInput | boolean
    hasAw?: BoolFieldUpdateOperationsInput | boolean
    mixinConfigs?: StringFieldUpdateOperationsInput | string
    mixinTargets?: StringFieldUpdateOperationsInput | string
    atEntries?: StringFieldUpdateOperationsInput | string
    awEntries?: StringFieldUpdateOperationsInput | string
    dependencies?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    mcVersion?: StringFieldUpdateOperationsInput | string
    loader?: StringFieldUpdateOperationsInput | string
    jarPath?: StringFieldUpdateOperationsInput | string
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    murmur2?: NullableStringFieldUpdateOperationsInput | string | null
    sha512?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    modrinthId?: NullableStringFieldUpdateOperationsInput | string | null
    curseforgeId?: NullableIntFieldUpdateOperationsInput | number | null
    hasMixins?: BoolFieldUpdateOperationsInput | boolean
    hasAt?: BoolFieldUpdateOperationsInput | boolean
    hasAw?: BoolFieldUpdateOperationsInput | boolean
    mixinConfigs?: StringFieldUpdateOperationsInput | string
    mixinTargets?: StringFieldUpdateOperationsInput | string
    atEntries?: StringFieldUpdateOperationsInput | string
    awEntries?: StringFieldUpdateOperationsInput | string
    dependencies?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModClassCreateInput = {
    className: string
    superClass?: string | null
    interfaces?: string
    accessFlags?: number
    mod: ModCreateNestedOneWithoutClassesInput
  }

  export type ModClassUncheckedCreateInput = {
    id?: number
    modId: number
    className: string
    superClass?: string | null
    interfaces?: string
    accessFlags?: number
  }

  export type ModClassUpdateInput = {
    className?: StringFieldUpdateOperationsInput | string
    superClass?: NullableStringFieldUpdateOperationsInput | string | null
    interfaces?: StringFieldUpdateOperationsInput | string
    accessFlags?: IntFieldUpdateOperationsInput | number
    mod?: ModUpdateOneRequiredWithoutClassesNestedInput
  }

  export type ModClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modId?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    superClass?: NullableStringFieldUpdateOperationsInput | string | null
    interfaces?: StringFieldUpdateOperationsInput | string
    accessFlags?: IntFieldUpdateOperationsInput | number
  }

  export type ModClassCreateManyInput = {
    id?: number
    modId: number
    className: string
    superClass?: string | null
    interfaces?: string
    accessFlags?: number
  }

  export type ModClassUpdateManyMutationInput = {
    className?: StringFieldUpdateOperationsInput | string
    superClass?: NullableStringFieldUpdateOperationsInput | string | null
    interfaces?: StringFieldUpdateOperationsInput | string
    accessFlags?: IntFieldUpdateOperationsInput | number
  }

  export type ModClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modId?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    superClass?: NullableStringFieldUpdateOperationsInput | string | null
    interfaces?: StringFieldUpdateOperationsInput | string
    accessFlags?: IntFieldUpdateOperationsInput | number
  }

  export type McVersionCreateInput = {
    versionId: string
    type?: string
    jarPath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    indexed?: boolean
    releaseTime: Date | string
    createdAt?: Date | string
    sourceFiles?: McSourceFileCreateNestedManyWithoutMcVersionInput
  }

  export type McVersionUncheckedCreateInput = {
    id?: number
    versionId: string
    type?: string
    jarPath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    indexed?: boolean
    releaseTime: Date | string
    createdAt?: Date | string
    sourceFiles?: McSourceFileUncheckedCreateNestedManyWithoutMcVersionInput
  }

  export type McVersionUpdateInput = {
    versionId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    jarPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    indexed?: BoolFieldUpdateOperationsInput | boolean
    releaseTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceFiles?: McSourceFileUpdateManyWithoutMcVersionNestedInput
  }

  export type McVersionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    versionId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    jarPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    indexed?: BoolFieldUpdateOperationsInput | boolean
    releaseTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceFiles?: McSourceFileUncheckedUpdateManyWithoutMcVersionNestedInput
  }

  export type McVersionCreateManyInput = {
    id?: number
    versionId: string
    type?: string
    jarPath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    indexed?: boolean
    releaseTime: Date | string
    createdAt?: Date | string
  }

  export type McVersionUpdateManyMutationInput = {
    versionId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    jarPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    indexed?: BoolFieldUpdateOperationsInput | boolean
    releaseTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McVersionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    versionId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    jarPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    indexed?: BoolFieldUpdateOperationsInput | boolean
    releaseTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McVersionDiffCreateInput = {
    versionA: string
    versionB: string
    packagesHash?: string
    result: string
    createdAt?: Date | string
  }

  export type McVersionDiffUncheckedCreateInput = {
    id?: number
    versionA: string
    versionB: string
    packagesHash?: string
    result: string
    createdAt?: Date | string
  }

  export type McVersionDiffUpdateInput = {
    versionA?: StringFieldUpdateOperationsInput | string
    versionB?: StringFieldUpdateOperationsInput | string
    packagesHash?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McVersionDiffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    versionA?: StringFieldUpdateOperationsInput | string
    versionB?: StringFieldUpdateOperationsInput | string
    packagesHash?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McVersionDiffCreateManyInput = {
    id?: number
    versionA: string
    versionB: string
    packagesHash?: string
    result: string
    createdAt?: Date | string
  }

  export type McVersionDiffUpdateManyMutationInput = {
    versionA?: StringFieldUpdateOperationsInput | string
    versionB?: StringFieldUpdateOperationsInput | string
    packagesHash?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McVersionDiffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    versionA?: StringFieldUpdateOperationsInput | string
    versionB?: StringFieldUpdateOperationsInput | string
    packagesHash?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModVersionDiffCreateInput = {
    modDbIdA: number
    modDbIdB: number
    packagesHash?: string
    result: string
    createdAt?: Date | string
  }

  export type ModVersionDiffUncheckedCreateInput = {
    id?: number
    modDbIdA: number
    modDbIdB: number
    packagesHash?: string
    result: string
    createdAt?: Date | string
  }

  export type ModVersionDiffUpdateInput = {
    modDbIdA?: IntFieldUpdateOperationsInput | number
    modDbIdB?: IntFieldUpdateOperationsInput | number
    packagesHash?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModVersionDiffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modDbIdA?: IntFieldUpdateOperationsInput | number
    modDbIdB?: IntFieldUpdateOperationsInput | number
    packagesHash?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModVersionDiffCreateManyInput = {
    id?: number
    modDbIdA: number
    modDbIdB: number
    packagesHash?: string
    result: string
    createdAt?: Date | string
  }

  export type ModVersionDiffUpdateManyMutationInput = {
    modDbIdA?: IntFieldUpdateOperationsInput | number
    modDbIdB?: IntFieldUpdateOperationsInput | number
    packagesHash?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModVersionDiffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modDbIdA?: IntFieldUpdateOperationsInput | number
    modDbIdB?: IntFieldUpdateOperationsInput | number
    packagesHash?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModTagCreateInput = {
    registry: string
    tagPath: string
    namespace: string
    entries?: string
    replace?: boolean
    mod: ModCreateNestedOneWithoutModTagsInput
  }

  export type ModTagUncheckedCreateInput = {
    id?: number
    modId: number
    registry: string
    tagPath: string
    namespace: string
    entries?: string
    replace?: boolean
  }

  export type ModTagUpdateInput = {
    registry?: StringFieldUpdateOperationsInput | string
    tagPath?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
    replace?: BoolFieldUpdateOperationsInput | boolean
    mod?: ModUpdateOneRequiredWithoutModTagsNestedInput
  }

  export type ModTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modId?: IntFieldUpdateOperationsInput | number
    registry?: StringFieldUpdateOperationsInput | string
    tagPath?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
    replace?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModTagCreateManyInput = {
    id?: number
    modId: number
    registry: string
    tagPath: string
    namespace: string
    entries?: string
    replace?: boolean
  }

  export type ModTagUpdateManyMutationInput = {
    registry?: StringFieldUpdateOperationsInput | string
    tagPath?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
    replace?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modId?: IntFieldUpdateOperationsInput | number
    registry?: StringFieldUpdateOperationsInput | string
    tagPath?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
    replace?: BoolFieldUpdateOperationsInput | boolean
  }

  export type McSourceFileCreateInput = {
    className: string
    content: string
    embedding?: Bytes | null
    mcVersion: McVersionCreateNestedOneWithoutSourceFilesInput
  }

  export type McSourceFileUncheckedCreateInput = {
    id?: number
    mcVersionId: number
    className: string
    content: string
    embedding?: Bytes | null
  }

  export type McSourceFileUpdateInput = {
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    mcVersion?: McVersionUpdateOneRequiredWithoutSourceFilesNestedInput
  }

  export type McSourceFileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mcVersionId?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type McSourceFileCreateManyInput = {
    id?: number
    mcVersionId: number
    className: string
    content: string
    embedding?: Bytes | null
  }

  export type McSourceFileUpdateManyMutationInput = {
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type McSourceFileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mcVersionId?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type ModSourceFileCreateInput = {
    className: string
    content: string
    embedding?: Bytes | null
    mod: ModCreateNestedOneWithoutSourceFilesInput
  }

  export type ModSourceFileUncheckedCreateInput = {
    id?: number
    modId: number
    className: string
    content: string
    embedding?: Bytes | null
  }

  export type ModSourceFileUpdateInput = {
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    mod?: ModUpdateOneRequiredWithoutSourceFilesNestedInput
  }

  export type ModSourceFileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modId?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type ModSourceFileCreateManyInput = {
    id?: number
    modId: number
    className: string
    content: string
    embedding?: Bytes | null
  }

  export type ModSourceFileUpdateManyMutationInput = {
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type ModSourceFileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modId?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type DocEntryCreateInput = {
    className?: string | null
    title: string
    summary?: string | null
    url: string
    category?: string
    tags?: string
    namespace?: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embedding?: Bytes | null
  }

  export type DocEntryUncheckedCreateInput = {
    id?: number
    className?: string | null
    title: string
    summary?: string | null
    url: string
    category?: string
    tags?: string
    namespace?: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embedding?: Bytes | null
  }

  export type DocEntryUpdateInput = {
    className?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type DocEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type DocEntryCreateManyInput = {
    id?: number
    className?: string | null
    title: string
    summary?: string | null
    url: string
    category?: string
    tags?: string
    namespace?: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embedding?: Bytes | null
  }

  export type DocEntryUpdateManyMutationInput = {
    className?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type DocEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type PrimerCreateInput = {
    fromVersion: string
    toVersion: string
    fromDataVersion?: number | null
    toDataVersion?: number | null
    modloader?: string
    title: string
    summary?: string | null
    url: string
    content?: string | null
    tags?: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embedding?: Bytes | null
  }

  export type PrimerUncheckedCreateInput = {
    id?: number
    fromVersion: string
    toVersion: string
    fromDataVersion?: number | null
    toDataVersion?: number | null
    modloader?: string
    title: string
    summary?: string | null
    url: string
    content?: string | null
    tags?: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embedding?: Bytes | null
  }

  export type PrimerUpdateInput = {
    fromVersion?: StringFieldUpdateOperationsInput | string
    toVersion?: StringFieldUpdateOperationsInput | string
    fromDataVersion?: NullableIntFieldUpdateOperationsInput | number | null
    toDataVersion?: NullableIntFieldUpdateOperationsInput | number | null
    modloader?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type PrimerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromVersion?: StringFieldUpdateOperationsInput | string
    toVersion?: StringFieldUpdateOperationsInput | string
    fromDataVersion?: NullableIntFieldUpdateOperationsInput | number | null
    toDataVersion?: NullableIntFieldUpdateOperationsInput | number | null
    modloader?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type PrimerCreateManyInput = {
    id?: number
    fromVersion: string
    toVersion: string
    fromDataVersion?: number | null
    toDataVersion?: number | null
    modloader?: string
    title: string
    summary?: string | null
    url: string
    content?: string | null
    tags?: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    embedding?: Bytes | null
  }

  export type PrimerUpdateManyMutationInput = {
    fromVersion?: StringFieldUpdateOperationsInput | string
    toVersion?: StringFieldUpdateOperationsInput | string
    fromDataVersion?: NullableIntFieldUpdateOperationsInput | number | null
    toDataVersion?: NullableIntFieldUpdateOperationsInput | number | null
    modloader?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type PrimerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromVersion?: StringFieldUpdateOperationsInput | string
    toVersion?: StringFieldUpdateOperationsInput | string
    fromDataVersion?: NullableIntFieldUpdateOperationsInput | number | null
    toDataVersion?: NullableIntFieldUpdateOperationsInput | number | null
    modloader?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ModClassListRelationFilter = {
    every?: ModClassWhereInput
    some?: ModClassWhereInput
    none?: ModClassWhereInput
  }

  export type ModTagListRelationFilter = {
    every?: ModTagWhereInput
    some?: ModTagWhereInput
    none?: ModTagWhereInput
  }

  export type ModSourceFileListRelationFilter = {
    every?: ModSourceFileWhereInput
    some?: ModSourceFileWhereInput
    none?: ModSourceFileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ModClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModSourceFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModModIdVersionMcVersionLoaderCompoundUniqueInput = {
    modId: string
    version: string
    mcVersion: string
    loader: string
  }

  export type ModCountOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    displayName?: SortOrder
    version?: SortOrder
    mcVersion?: SortOrder
    loader?: SortOrder
    jarPath?: SortOrder
    sha256?: SortOrder
    murmur2?: SortOrder
    sha512?: SortOrder
    sourcePath?: SortOrder
    decompPath?: SortOrder
    decompiled?: SortOrder
    modrinthId?: SortOrder
    curseforgeId?: SortOrder
    hasMixins?: SortOrder
    hasAt?: SortOrder
    hasAw?: SortOrder
    mixinConfigs?: SortOrder
    mixinTargets?: SortOrder
    atEntries?: SortOrder
    awEntries?: SortOrder
    dependencies?: SortOrder
    metadata?: SortOrder
    tags?: SortOrder
    ingestedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModAvgOrderByAggregateInput = {
    id?: SortOrder
    curseforgeId?: SortOrder
  }

  export type ModMaxOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    displayName?: SortOrder
    version?: SortOrder
    mcVersion?: SortOrder
    loader?: SortOrder
    jarPath?: SortOrder
    sha256?: SortOrder
    murmur2?: SortOrder
    sha512?: SortOrder
    sourcePath?: SortOrder
    decompPath?: SortOrder
    decompiled?: SortOrder
    modrinthId?: SortOrder
    curseforgeId?: SortOrder
    hasMixins?: SortOrder
    hasAt?: SortOrder
    hasAw?: SortOrder
    mixinConfigs?: SortOrder
    mixinTargets?: SortOrder
    atEntries?: SortOrder
    awEntries?: SortOrder
    dependencies?: SortOrder
    metadata?: SortOrder
    tags?: SortOrder
    ingestedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModMinOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    displayName?: SortOrder
    version?: SortOrder
    mcVersion?: SortOrder
    loader?: SortOrder
    jarPath?: SortOrder
    sha256?: SortOrder
    murmur2?: SortOrder
    sha512?: SortOrder
    sourcePath?: SortOrder
    decompPath?: SortOrder
    decompiled?: SortOrder
    modrinthId?: SortOrder
    curseforgeId?: SortOrder
    hasMixins?: SortOrder
    hasAt?: SortOrder
    hasAw?: SortOrder
    mixinConfigs?: SortOrder
    mixinTargets?: SortOrder
    atEntries?: SortOrder
    awEntries?: SortOrder
    dependencies?: SortOrder
    metadata?: SortOrder
    tags?: SortOrder
    ingestedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModSumOrderByAggregateInput = {
    id?: SortOrder
    curseforgeId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ModScalarRelationFilter = {
    is?: ModWhereInput
    isNot?: ModWhereInput
  }

  export type ModClassModIdClassNameCompoundUniqueInput = {
    modId: number
    className: string
  }

  export type ModClassCountOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    className?: SortOrder
    superClass?: SortOrder
    interfaces?: SortOrder
    accessFlags?: SortOrder
  }

  export type ModClassAvgOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    accessFlags?: SortOrder
  }

  export type ModClassMaxOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    className?: SortOrder
    superClass?: SortOrder
    interfaces?: SortOrder
    accessFlags?: SortOrder
  }

  export type ModClassMinOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    className?: SortOrder
    superClass?: SortOrder
    interfaces?: SortOrder
    accessFlags?: SortOrder
  }

  export type ModClassSumOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    accessFlags?: SortOrder
  }

  export type McSourceFileListRelationFilter = {
    every?: McSourceFileWhereInput
    some?: McSourceFileWhereInput
    none?: McSourceFileWhereInput
  }

  export type McSourceFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type McVersionCountOrderByAggregateInput = {
    id?: SortOrder
    versionId?: SortOrder
    type?: SortOrder
    jarPath?: SortOrder
    decompPath?: SortOrder
    decompiled?: SortOrder
    indexed?: SortOrder
    releaseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type McVersionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type McVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    versionId?: SortOrder
    type?: SortOrder
    jarPath?: SortOrder
    decompPath?: SortOrder
    decompiled?: SortOrder
    indexed?: SortOrder
    releaseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type McVersionMinOrderByAggregateInput = {
    id?: SortOrder
    versionId?: SortOrder
    type?: SortOrder
    jarPath?: SortOrder
    decompPath?: SortOrder
    decompiled?: SortOrder
    indexed?: SortOrder
    releaseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type McVersionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type McVersionDiffVersionAVersionBPackagesHashCompoundUniqueInput = {
    versionA: string
    versionB: string
    packagesHash: string
  }

  export type McVersionDiffCountOrderByAggregateInput = {
    id?: SortOrder
    versionA?: SortOrder
    versionB?: SortOrder
    packagesHash?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type McVersionDiffAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type McVersionDiffMaxOrderByAggregateInput = {
    id?: SortOrder
    versionA?: SortOrder
    versionB?: SortOrder
    packagesHash?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type McVersionDiffMinOrderByAggregateInput = {
    id?: SortOrder
    versionA?: SortOrder
    versionB?: SortOrder
    packagesHash?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type McVersionDiffSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModVersionDiffModDbIdAModDbIdBPackagesHashCompoundUniqueInput = {
    modDbIdA: number
    modDbIdB: number
    packagesHash: string
  }

  export type ModVersionDiffCountOrderByAggregateInput = {
    id?: SortOrder
    modDbIdA?: SortOrder
    modDbIdB?: SortOrder
    packagesHash?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type ModVersionDiffAvgOrderByAggregateInput = {
    id?: SortOrder
    modDbIdA?: SortOrder
    modDbIdB?: SortOrder
  }

  export type ModVersionDiffMaxOrderByAggregateInput = {
    id?: SortOrder
    modDbIdA?: SortOrder
    modDbIdB?: SortOrder
    packagesHash?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type ModVersionDiffMinOrderByAggregateInput = {
    id?: SortOrder
    modDbIdA?: SortOrder
    modDbIdB?: SortOrder
    packagesHash?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type ModVersionDiffSumOrderByAggregateInput = {
    id?: SortOrder
    modDbIdA?: SortOrder
    modDbIdB?: SortOrder
  }

  export type ModTagCountOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    registry?: SortOrder
    tagPath?: SortOrder
    namespace?: SortOrder
    entries?: SortOrder
    replace?: SortOrder
  }

  export type ModTagAvgOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
  }

  export type ModTagMaxOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    registry?: SortOrder
    tagPath?: SortOrder
    namespace?: SortOrder
    entries?: SortOrder
    replace?: SortOrder
  }

  export type ModTagMinOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    registry?: SortOrder
    tagPath?: SortOrder
    namespace?: SortOrder
    entries?: SortOrder
    replace?: SortOrder
  }

  export type ModTagSumOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type McVersionScalarRelationFilter = {
    is?: McVersionWhereInput
    isNot?: McVersionWhereInput
  }

  export type McSourceFileMcVersionIdClassNameCompoundUniqueInput = {
    mcVersionId: number
    className: string
  }

  export type McSourceFileCountOrderByAggregateInput = {
    id?: SortOrder
    mcVersionId?: SortOrder
    className?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
  }

  export type McSourceFileAvgOrderByAggregateInput = {
    id?: SortOrder
    mcVersionId?: SortOrder
  }

  export type McSourceFileMaxOrderByAggregateInput = {
    id?: SortOrder
    mcVersionId?: SortOrder
    className?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
  }

  export type McSourceFileMinOrderByAggregateInput = {
    id?: SortOrder
    mcVersionId?: SortOrder
    className?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
  }

  export type McSourceFileSumOrderByAggregateInput = {
    id?: SortOrder
    mcVersionId?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type ModSourceFileModIdClassNameCompoundUniqueInput = {
    modId: number
    className: string
  }

  export type ModSourceFileCountOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    className?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
  }

  export type ModSourceFileAvgOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
  }

  export type ModSourceFileMaxOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    className?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
  }

  export type ModSourceFileMinOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    className?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
  }

  export type ModSourceFileSumOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
  }

  export type DocEntryCountOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    namespace?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embedding?: SortOrder
  }

  export type DocEntryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    namespace?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embedding?: SortOrder
  }

  export type DocEntryMinOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    url?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    namespace?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embedding?: SortOrder
  }

  export type DocEntrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PrimerCountOrderByAggregateInput = {
    id?: SortOrder
    fromVersion?: SortOrder
    toVersion?: SortOrder
    fromDataVersion?: SortOrder
    toDataVersion?: SortOrder
    modloader?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    url?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embedding?: SortOrder
  }

  export type PrimerAvgOrderByAggregateInput = {
    id?: SortOrder
    fromDataVersion?: SortOrder
    toDataVersion?: SortOrder
  }

  export type PrimerMaxOrderByAggregateInput = {
    id?: SortOrder
    fromVersion?: SortOrder
    toVersion?: SortOrder
    fromDataVersion?: SortOrder
    toDataVersion?: SortOrder
    modloader?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    url?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embedding?: SortOrder
  }

  export type PrimerMinOrderByAggregateInput = {
    id?: SortOrder
    fromVersion?: SortOrder
    toVersion?: SortOrder
    fromDataVersion?: SortOrder
    toDataVersion?: SortOrder
    modloader?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    url?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embedding?: SortOrder
  }

  export type PrimerSumOrderByAggregateInput = {
    id?: SortOrder
    fromDataVersion?: SortOrder
    toDataVersion?: SortOrder
  }

  export type ModClassCreateNestedManyWithoutModInput = {
    create?: XOR<ModClassCreateWithoutModInput, ModClassUncheckedCreateWithoutModInput> | ModClassCreateWithoutModInput[] | ModClassUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModClassCreateOrConnectWithoutModInput | ModClassCreateOrConnectWithoutModInput[]
    createMany?: ModClassCreateManyModInputEnvelope
    connect?: ModClassWhereUniqueInput | ModClassWhereUniqueInput[]
  }

  export type ModTagCreateNestedManyWithoutModInput = {
    create?: XOR<ModTagCreateWithoutModInput, ModTagUncheckedCreateWithoutModInput> | ModTagCreateWithoutModInput[] | ModTagUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModTagCreateOrConnectWithoutModInput | ModTagCreateOrConnectWithoutModInput[]
    createMany?: ModTagCreateManyModInputEnvelope
    connect?: ModTagWhereUniqueInput | ModTagWhereUniqueInput[]
  }

  export type ModSourceFileCreateNestedManyWithoutModInput = {
    create?: XOR<ModSourceFileCreateWithoutModInput, ModSourceFileUncheckedCreateWithoutModInput> | ModSourceFileCreateWithoutModInput[] | ModSourceFileUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModSourceFileCreateOrConnectWithoutModInput | ModSourceFileCreateOrConnectWithoutModInput[]
    createMany?: ModSourceFileCreateManyModInputEnvelope
    connect?: ModSourceFileWhereUniqueInput | ModSourceFileWhereUniqueInput[]
  }

  export type ModClassUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<ModClassCreateWithoutModInput, ModClassUncheckedCreateWithoutModInput> | ModClassCreateWithoutModInput[] | ModClassUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModClassCreateOrConnectWithoutModInput | ModClassCreateOrConnectWithoutModInput[]
    createMany?: ModClassCreateManyModInputEnvelope
    connect?: ModClassWhereUniqueInput | ModClassWhereUniqueInput[]
  }

  export type ModTagUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<ModTagCreateWithoutModInput, ModTagUncheckedCreateWithoutModInput> | ModTagCreateWithoutModInput[] | ModTagUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModTagCreateOrConnectWithoutModInput | ModTagCreateOrConnectWithoutModInput[]
    createMany?: ModTagCreateManyModInputEnvelope
    connect?: ModTagWhereUniqueInput | ModTagWhereUniqueInput[]
  }

  export type ModSourceFileUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<ModSourceFileCreateWithoutModInput, ModSourceFileUncheckedCreateWithoutModInput> | ModSourceFileCreateWithoutModInput[] | ModSourceFileUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModSourceFileCreateOrConnectWithoutModInput | ModSourceFileCreateOrConnectWithoutModInput[]
    createMany?: ModSourceFileCreateManyModInputEnvelope
    connect?: ModSourceFileWhereUniqueInput | ModSourceFileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ModClassUpdateManyWithoutModNestedInput = {
    create?: XOR<ModClassCreateWithoutModInput, ModClassUncheckedCreateWithoutModInput> | ModClassCreateWithoutModInput[] | ModClassUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModClassCreateOrConnectWithoutModInput | ModClassCreateOrConnectWithoutModInput[]
    upsert?: ModClassUpsertWithWhereUniqueWithoutModInput | ModClassUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ModClassCreateManyModInputEnvelope
    set?: ModClassWhereUniqueInput | ModClassWhereUniqueInput[]
    disconnect?: ModClassWhereUniqueInput | ModClassWhereUniqueInput[]
    delete?: ModClassWhereUniqueInput | ModClassWhereUniqueInput[]
    connect?: ModClassWhereUniqueInput | ModClassWhereUniqueInput[]
    update?: ModClassUpdateWithWhereUniqueWithoutModInput | ModClassUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ModClassUpdateManyWithWhereWithoutModInput | ModClassUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ModClassScalarWhereInput | ModClassScalarWhereInput[]
  }

  export type ModTagUpdateManyWithoutModNestedInput = {
    create?: XOR<ModTagCreateWithoutModInput, ModTagUncheckedCreateWithoutModInput> | ModTagCreateWithoutModInput[] | ModTagUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModTagCreateOrConnectWithoutModInput | ModTagCreateOrConnectWithoutModInput[]
    upsert?: ModTagUpsertWithWhereUniqueWithoutModInput | ModTagUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ModTagCreateManyModInputEnvelope
    set?: ModTagWhereUniqueInput | ModTagWhereUniqueInput[]
    disconnect?: ModTagWhereUniqueInput | ModTagWhereUniqueInput[]
    delete?: ModTagWhereUniqueInput | ModTagWhereUniqueInput[]
    connect?: ModTagWhereUniqueInput | ModTagWhereUniqueInput[]
    update?: ModTagUpdateWithWhereUniqueWithoutModInput | ModTagUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ModTagUpdateManyWithWhereWithoutModInput | ModTagUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ModTagScalarWhereInput | ModTagScalarWhereInput[]
  }

  export type ModSourceFileUpdateManyWithoutModNestedInput = {
    create?: XOR<ModSourceFileCreateWithoutModInput, ModSourceFileUncheckedCreateWithoutModInput> | ModSourceFileCreateWithoutModInput[] | ModSourceFileUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModSourceFileCreateOrConnectWithoutModInput | ModSourceFileCreateOrConnectWithoutModInput[]
    upsert?: ModSourceFileUpsertWithWhereUniqueWithoutModInput | ModSourceFileUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ModSourceFileCreateManyModInputEnvelope
    set?: ModSourceFileWhereUniqueInput | ModSourceFileWhereUniqueInput[]
    disconnect?: ModSourceFileWhereUniqueInput | ModSourceFileWhereUniqueInput[]
    delete?: ModSourceFileWhereUniqueInput | ModSourceFileWhereUniqueInput[]
    connect?: ModSourceFileWhereUniqueInput | ModSourceFileWhereUniqueInput[]
    update?: ModSourceFileUpdateWithWhereUniqueWithoutModInput | ModSourceFileUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ModSourceFileUpdateManyWithWhereWithoutModInput | ModSourceFileUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ModSourceFileScalarWhereInput | ModSourceFileScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ModClassUncheckedUpdateManyWithoutModNestedInput = {
    create?: XOR<ModClassCreateWithoutModInput, ModClassUncheckedCreateWithoutModInput> | ModClassCreateWithoutModInput[] | ModClassUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModClassCreateOrConnectWithoutModInput | ModClassCreateOrConnectWithoutModInput[]
    upsert?: ModClassUpsertWithWhereUniqueWithoutModInput | ModClassUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ModClassCreateManyModInputEnvelope
    set?: ModClassWhereUniqueInput | ModClassWhereUniqueInput[]
    disconnect?: ModClassWhereUniqueInput | ModClassWhereUniqueInput[]
    delete?: ModClassWhereUniqueInput | ModClassWhereUniqueInput[]
    connect?: ModClassWhereUniqueInput | ModClassWhereUniqueInput[]
    update?: ModClassUpdateWithWhereUniqueWithoutModInput | ModClassUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ModClassUpdateManyWithWhereWithoutModInput | ModClassUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ModClassScalarWhereInput | ModClassScalarWhereInput[]
  }

  export type ModTagUncheckedUpdateManyWithoutModNestedInput = {
    create?: XOR<ModTagCreateWithoutModInput, ModTagUncheckedCreateWithoutModInput> | ModTagCreateWithoutModInput[] | ModTagUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModTagCreateOrConnectWithoutModInput | ModTagCreateOrConnectWithoutModInput[]
    upsert?: ModTagUpsertWithWhereUniqueWithoutModInput | ModTagUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ModTagCreateManyModInputEnvelope
    set?: ModTagWhereUniqueInput | ModTagWhereUniqueInput[]
    disconnect?: ModTagWhereUniqueInput | ModTagWhereUniqueInput[]
    delete?: ModTagWhereUniqueInput | ModTagWhereUniqueInput[]
    connect?: ModTagWhereUniqueInput | ModTagWhereUniqueInput[]
    update?: ModTagUpdateWithWhereUniqueWithoutModInput | ModTagUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ModTagUpdateManyWithWhereWithoutModInput | ModTagUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ModTagScalarWhereInput | ModTagScalarWhereInput[]
  }

  export type ModSourceFileUncheckedUpdateManyWithoutModNestedInput = {
    create?: XOR<ModSourceFileCreateWithoutModInput, ModSourceFileUncheckedCreateWithoutModInput> | ModSourceFileCreateWithoutModInput[] | ModSourceFileUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModSourceFileCreateOrConnectWithoutModInput | ModSourceFileCreateOrConnectWithoutModInput[]
    upsert?: ModSourceFileUpsertWithWhereUniqueWithoutModInput | ModSourceFileUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ModSourceFileCreateManyModInputEnvelope
    set?: ModSourceFileWhereUniqueInput | ModSourceFileWhereUniqueInput[]
    disconnect?: ModSourceFileWhereUniqueInput | ModSourceFileWhereUniqueInput[]
    delete?: ModSourceFileWhereUniqueInput | ModSourceFileWhereUniqueInput[]
    connect?: ModSourceFileWhereUniqueInput | ModSourceFileWhereUniqueInput[]
    update?: ModSourceFileUpdateWithWhereUniqueWithoutModInput | ModSourceFileUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ModSourceFileUpdateManyWithWhereWithoutModInput | ModSourceFileUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ModSourceFileScalarWhereInput | ModSourceFileScalarWhereInput[]
  }

  export type ModCreateNestedOneWithoutClassesInput = {
    create?: XOR<ModCreateWithoutClassesInput, ModUncheckedCreateWithoutClassesInput>
    connectOrCreate?: ModCreateOrConnectWithoutClassesInput
    connect?: ModWhereUniqueInput
  }

  export type ModUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<ModCreateWithoutClassesInput, ModUncheckedCreateWithoutClassesInput>
    connectOrCreate?: ModCreateOrConnectWithoutClassesInput
    upsert?: ModUpsertWithoutClassesInput
    connect?: ModWhereUniqueInput
    update?: XOR<XOR<ModUpdateToOneWithWhereWithoutClassesInput, ModUpdateWithoutClassesInput>, ModUncheckedUpdateWithoutClassesInput>
  }

  export type McSourceFileCreateNestedManyWithoutMcVersionInput = {
    create?: XOR<McSourceFileCreateWithoutMcVersionInput, McSourceFileUncheckedCreateWithoutMcVersionInput> | McSourceFileCreateWithoutMcVersionInput[] | McSourceFileUncheckedCreateWithoutMcVersionInput[]
    connectOrCreate?: McSourceFileCreateOrConnectWithoutMcVersionInput | McSourceFileCreateOrConnectWithoutMcVersionInput[]
    createMany?: McSourceFileCreateManyMcVersionInputEnvelope
    connect?: McSourceFileWhereUniqueInput | McSourceFileWhereUniqueInput[]
  }

  export type McSourceFileUncheckedCreateNestedManyWithoutMcVersionInput = {
    create?: XOR<McSourceFileCreateWithoutMcVersionInput, McSourceFileUncheckedCreateWithoutMcVersionInput> | McSourceFileCreateWithoutMcVersionInput[] | McSourceFileUncheckedCreateWithoutMcVersionInput[]
    connectOrCreate?: McSourceFileCreateOrConnectWithoutMcVersionInput | McSourceFileCreateOrConnectWithoutMcVersionInput[]
    createMany?: McSourceFileCreateManyMcVersionInputEnvelope
    connect?: McSourceFileWhereUniqueInput | McSourceFileWhereUniqueInput[]
  }

  export type McSourceFileUpdateManyWithoutMcVersionNestedInput = {
    create?: XOR<McSourceFileCreateWithoutMcVersionInput, McSourceFileUncheckedCreateWithoutMcVersionInput> | McSourceFileCreateWithoutMcVersionInput[] | McSourceFileUncheckedCreateWithoutMcVersionInput[]
    connectOrCreate?: McSourceFileCreateOrConnectWithoutMcVersionInput | McSourceFileCreateOrConnectWithoutMcVersionInput[]
    upsert?: McSourceFileUpsertWithWhereUniqueWithoutMcVersionInput | McSourceFileUpsertWithWhereUniqueWithoutMcVersionInput[]
    createMany?: McSourceFileCreateManyMcVersionInputEnvelope
    set?: McSourceFileWhereUniqueInput | McSourceFileWhereUniqueInput[]
    disconnect?: McSourceFileWhereUniqueInput | McSourceFileWhereUniqueInput[]
    delete?: McSourceFileWhereUniqueInput | McSourceFileWhereUniqueInput[]
    connect?: McSourceFileWhereUniqueInput | McSourceFileWhereUniqueInput[]
    update?: McSourceFileUpdateWithWhereUniqueWithoutMcVersionInput | McSourceFileUpdateWithWhereUniqueWithoutMcVersionInput[]
    updateMany?: McSourceFileUpdateManyWithWhereWithoutMcVersionInput | McSourceFileUpdateManyWithWhereWithoutMcVersionInput[]
    deleteMany?: McSourceFileScalarWhereInput | McSourceFileScalarWhereInput[]
  }

  export type McSourceFileUncheckedUpdateManyWithoutMcVersionNestedInput = {
    create?: XOR<McSourceFileCreateWithoutMcVersionInput, McSourceFileUncheckedCreateWithoutMcVersionInput> | McSourceFileCreateWithoutMcVersionInput[] | McSourceFileUncheckedCreateWithoutMcVersionInput[]
    connectOrCreate?: McSourceFileCreateOrConnectWithoutMcVersionInput | McSourceFileCreateOrConnectWithoutMcVersionInput[]
    upsert?: McSourceFileUpsertWithWhereUniqueWithoutMcVersionInput | McSourceFileUpsertWithWhereUniqueWithoutMcVersionInput[]
    createMany?: McSourceFileCreateManyMcVersionInputEnvelope
    set?: McSourceFileWhereUniqueInput | McSourceFileWhereUniqueInput[]
    disconnect?: McSourceFileWhereUniqueInput | McSourceFileWhereUniqueInput[]
    delete?: McSourceFileWhereUniqueInput | McSourceFileWhereUniqueInput[]
    connect?: McSourceFileWhereUniqueInput | McSourceFileWhereUniqueInput[]
    update?: McSourceFileUpdateWithWhereUniqueWithoutMcVersionInput | McSourceFileUpdateWithWhereUniqueWithoutMcVersionInput[]
    updateMany?: McSourceFileUpdateManyWithWhereWithoutMcVersionInput | McSourceFileUpdateManyWithWhereWithoutMcVersionInput[]
    deleteMany?: McSourceFileScalarWhereInput | McSourceFileScalarWhereInput[]
  }

  export type ModCreateNestedOneWithoutModTagsInput = {
    create?: XOR<ModCreateWithoutModTagsInput, ModUncheckedCreateWithoutModTagsInput>
    connectOrCreate?: ModCreateOrConnectWithoutModTagsInput
    connect?: ModWhereUniqueInput
  }

  export type ModUpdateOneRequiredWithoutModTagsNestedInput = {
    create?: XOR<ModCreateWithoutModTagsInput, ModUncheckedCreateWithoutModTagsInput>
    connectOrCreate?: ModCreateOrConnectWithoutModTagsInput
    upsert?: ModUpsertWithoutModTagsInput
    connect?: ModWhereUniqueInput
    update?: XOR<XOR<ModUpdateToOneWithWhereWithoutModTagsInput, ModUpdateWithoutModTagsInput>, ModUncheckedUpdateWithoutModTagsInput>
  }

  export type McVersionCreateNestedOneWithoutSourceFilesInput = {
    create?: XOR<McVersionCreateWithoutSourceFilesInput, McVersionUncheckedCreateWithoutSourceFilesInput>
    connectOrCreate?: McVersionCreateOrConnectWithoutSourceFilesInput
    connect?: McVersionWhereUniqueInput
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Bytes | null
  }

  export type McVersionUpdateOneRequiredWithoutSourceFilesNestedInput = {
    create?: XOR<McVersionCreateWithoutSourceFilesInput, McVersionUncheckedCreateWithoutSourceFilesInput>
    connectOrCreate?: McVersionCreateOrConnectWithoutSourceFilesInput
    upsert?: McVersionUpsertWithoutSourceFilesInput
    connect?: McVersionWhereUniqueInput
    update?: XOR<XOR<McVersionUpdateToOneWithWhereWithoutSourceFilesInput, McVersionUpdateWithoutSourceFilesInput>, McVersionUncheckedUpdateWithoutSourceFilesInput>
  }

  export type ModCreateNestedOneWithoutSourceFilesInput = {
    create?: XOR<ModCreateWithoutSourceFilesInput, ModUncheckedCreateWithoutSourceFilesInput>
    connectOrCreate?: ModCreateOrConnectWithoutSourceFilesInput
    connect?: ModWhereUniqueInput
  }

  export type ModUpdateOneRequiredWithoutSourceFilesNestedInput = {
    create?: XOR<ModCreateWithoutSourceFilesInput, ModUncheckedCreateWithoutSourceFilesInput>
    connectOrCreate?: ModCreateOrConnectWithoutSourceFilesInput
    upsert?: ModUpsertWithoutSourceFilesInput
    connect?: ModWhereUniqueInput
    update?: XOR<XOR<ModUpdateToOneWithWhereWithoutSourceFilesInput, ModUpdateWithoutSourceFilesInput>, ModUncheckedUpdateWithoutSourceFilesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type ModClassCreateWithoutModInput = {
    className: string
    superClass?: string | null
    interfaces?: string
    accessFlags?: number
  }

  export type ModClassUncheckedCreateWithoutModInput = {
    id?: number
    className: string
    superClass?: string | null
    interfaces?: string
    accessFlags?: number
  }

  export type ModClassCreateOrConnectWithoutModInput = {
    where: ModClassWhereUniqueInput
    create: XOR<ModClassCreateWithoutModInput, ModClassUncheckedCreateWithoutModInput>
  }

  export type ModClassCreateManyModInputEnvelope = {
    data: ModClassCreateManyModInput | ModClassCreateManyModInput[]
  }

  export type ModTagCreateWithoutModInput = {
    registry: string
    tagPath: string
    namespace: string
    entries?: string
    replace?: boolean
  }

  export type ModTagUncheckedCreateWithoutModInput = {
    id?: number
    registry: string
    tagPath: string
    namespace: string
    entries?: string
    replace?: boolean
  }

  export type ModTagCreateOrConnectWithoutModInput = {
    where: ModTagWhereUniqueInput
    create: XOR<ModTagCreateWithoutModInput, ModTagUncheckedCreateWithoutModInput>
  }

  export type ModTagCreateManyModInputEnvelope = {
    data: ModTagCreateManyModInput | ModTagCreateManyModInput[]
  }

  export type ModSourceFileCreateWithoutModInput = {
    className: string
    content: string
    embedding?: Bytes | null
  }

  export type ModSourceFileUncheckedCreateWithoutModInput = {
    id?: number
    className: string
    content: string
    embedding?: Bytes | null
  }

  export type ModSourceFileCreateOrConnectWithoutModInput = {
    where: ModSourceFileWhereUniqueInput
    create: XOR<ModSourceFileCreateWithoutModInput, ModSourceFileUncheckedCreateWithoutModInput>
  }

  export type ModSourceFileCreateManyModInputEnvelope = {
    data: ModSourceFileCreateManyModInput | ModSourceFileCreateManyModInput[]
  }

  export type ModClassUpsertWithWhereUniqueWithoutModInput = {
    where: ModClassWhereUniqueInput
    update: XOR<ModClassUpdateWithoutModInput, ModClassUncheckedUpdateWithoutModInput>
    create: XOR<ModClassCreateWithoutModInput, ModClassUncheckedCreateWithoutModInput>
  }

  export type ModClassUpdateWithWhereUniqueWithoutModInput = {
    where: ModClassWhereUniqueInput
    data: XOR<ModClassUpdateWithoutModInput, ModClassUncheckedUpdateWithoutModInput>
  }

  export type ModClassUpdateManyWithWhereWithoutModInput = {
    where: ModClassScalarWhereInput
    data: XOR<ModClassUpdateManyMutationInput, ModClassUncheckedUpdateManyWithoutModInput>
  }

  export type ModClassScalarWhereInput = {
    AND?: ModClassScalarWhereInput | ModClassScalarWhereInput[]
    OR?: ModClassScalarWhereInput[]
    NOT?: ModClassScalarWhereInput | ModClassScalarWhereInput[]
    id?: IntFilter<"ModClass"> | number
    modId?: IntFilter<"ModClass"> | number
    className?: StringFilter<"ModClass"> | string
    superClass?: StringNullableFilter<"ModClass"> | string | null
    interfaces?: StringFilter<"ModClass"> | string
    accessFlags?: IntFilter<"ModClass"> | number
  }

  export type ModTagUpsertWithWhereUniqueWithoutModInput = {
    where: ModTagWhereUniqueInput
    update: XOR<ModTagUpdateWithoutModInput, ModTagUncheckedUpdateWithoutModInput>
    create: XOR<ModTagCreateWithoutModInput, ModTagUncheckedCreateWithoutModInput>
  }

  export type ModTagUpdateWithWhereUniqueWithoutModInput = {
    where: ModTagWhereUniqueInput
    data: XOR<ModTagUpdateWithoutModInput, ModTagUncheckedUpdateWithoutModInput>
  }

  export type ModTagUpdateManyWithWhereWithoutModInput = {
    where: ModTagScalarWhereInput
    data: XOR<ModTagUpdateManyMutationInput, ModTagUncheckedUpdateManyWithoutModInput>
  }

  export type ModTagScalarWhereInput = {
    AND?: ModTagScalarWhereInput | ModTagScalarWhereInput[]
    OR?: ModTagScalarWhereInput[]
    NOT?: ModTagScalarWhereInput | ModTagScalarWhereInput[]
    id?: IntFilter<"ModTag"> | number
    modId?: IntFilter<"ModTag"> | number
    registry?: StringFilter<"ModTag"> | string
    tagPath?: StringFilter<"ModTag"> | string
    namespace?: StringFilter<"ModTag"> | string
    entries?: StringFilter<"ModTag"> | string
    replace?: BoolFilter<"ModTag"> | boolean
  }

  export type ModSourceFileUpsertWithWhereUniqueWithoutModInput = {
    where: ModSourceFileWhereUniqueInput
    update: XOR<ModSourceFileUpdateWithoutModInput, ModSourceFileUncheckedUpdateWithoutModInput>
    create: XOR<ModSourceFileCreateWithoutModInput, ModSourceFileUncheckedCreateWithoutModInput>
  }

  export type ModSourceFileUpdateWithWhereUniqueWithoutModInput = {
    where: ModSourceFileWhereUniqueInput
    data: XOR<ModSourceFileUpdateWithoutModInput, ModSourceFileUncheckedUpdateWithoutModInput>
  }

  export type ModSourceFileUpdateManyWithWhereWithoutModInput = {
    where: ModSourceFileScalarWhereInput
    data: XOR<ModSourceFileUpdateManyMutationInput, ModSourceFileUncheckedUpdateManyWithoutModInput>
  }

  export type ModSourceFileScalarWhereInput = {
    AND?: ModSourceFileScalarWhereInput | ModSourceFileScalarWhereInput[]
    OR?: ModSourceFileScalarWhereInput[]
    NOT?: ModSourceFileScalarWhereInput | ModSourceFileScalarWhereInput[]
    id?: IntFilter<"ModSourceFile"> | number
    modId?: IntFilter<"ModSourceFile"> | number
    className?: StringFilter<"ModSourceFile"> | string
    content?: StringFilter<"ModSourceFile"> | string
    embedding?: BytesNullableFilter<"ModSourceFile"> | Bytes | null
  }

  export type ModCreateWithoutClassesInput = {
    modId: string
    displayName: string
    version: string
    mcVersion: string
    loader: string
    jarPath: string
    sha256?: string | null
    murmur2?: string | null
    sha512?: string | null
    sourcePath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    modrinthId?: string | null
    curseforgeId?: number | null
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: string
    mixinTargets?: string
    atEntries?: string
    awEntries?: string
    dependencies?: string
    metadata?: string
    tags?: string
    ingestedAt?: Date | string
    updatedAt?: Date | string
    modTags?: ModTagCreateNestedManyWithoutModInput
    sourceFiles?: ModSourceFileCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutClassesInput = {
    id?: number
    modId: string
    displayName: string
    version: string
    mcVersion: string
    loader: string
    jarPath: string
    sha256?: string | null
    murmur2?: string | null
    sha512?: string | null
    sourcePath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    modrinthId?: string | null
    curseforgeId?: number | null
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: string
    mixinTargets?: string
    atEntries?: string
    awEntries?: string
    dependencies?: string
    metadata?: string
    tags?: string
    ingestedAt?: Date | string
    updatedAt?: Date | string
    modTags?: ModTagUncheckedCreateNestedManyWithoutModInput
    sourceFiles?: ModSourceFileUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutClassesInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutClassesInput, ModUncheckedCreateWithoutClassesInput>
  }

  export type ModUpsertWithoutClassesInput = {
    update: XOR<ModUpdateWithoutClassesInput, ModUncheckedUpdateWithoutClassesInput>
    create: XOR<ModCreateWithoutClassesInput, ModUncheckedCreateWithoutClassesInput>
    where?: ModWhereInput
  }

  export type ModUpdateToOneWithWhereWithoutClassesInput = {
    where?: ModWhereInput
    data: XOR<ModUpdateWithoutClassesInput, ModUncheckedUpdateWithoutClassesInput>
  }

  export type ModUpdateWithoutClassesInput = {
    modId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    mcVersion?: StringFieldUpdateOperationsInput | string
    loader?: StringFieldUpdateOperationsInput | string
    jarPath?: StringFieldUpdateOperationsInput | string
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    murmur2?: NullableStringFieldUpdateOperationsInput | string | null
    sha512?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    modrinthId?: NullableStringFieldUpdateOperationsInput | string | null
    curseforgeId?: NullableIntFieldUpdateOperationsInput | number | null
    hasMixins?: BoolFieldUpdateOperationsInput | boolean
    hasAt?: BoolFieldUpdateOperationsInput | boolean
    hasAw?: BoolFieldUpdateOperationsInput | boolean
    mixinConfigs?: StringFieldUpdateOperationsInput | string
    mixinTargets?: StringFieldUpdateOperationsInput | string
    atEntries?: StringFieldUpdateOperationsInput | string
    awEntries?: StringFieldUpdateOperationsInput | string
    dependencies?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modTags?: ModTagUpdateManyWithoutModNestedInput
    sourceFiles?: ModSourceFileUpdateManyWithoutModNestedInput
  }

  export type ModUncheckedUpdateWithoutClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    modId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    mcVersion?: StringFieldUpdateOperationsInput | string
    loader?: StringFieldUpdateOperationsInput | string
    jarPath?: StringFieldUpdateOperationsInput | string
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    murmur2?: NullableStringFieldUpdateOperationsInput | string | null
    sha512?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    modrinthId?: NullableStringFieldUpdateOperationsInput | string | null
    curseforgeId?: NullableIntFieldUpdateOperationsInput | number | null
    hasMixins?: BoolFieldUpdateOperationsInput | boolean
    hasAt?: BoolFieldUpdateOperationsInput | boolean
    hasAw?: BoolFieldUpdateOperationsInput | boolean
    mixinConfigs?: StringFieldUpdateOperationsInput | string
    mixinTargets?: StringFieldUpdateOperationsInput | string
    atEntries?: StringFieldUpdateOperationsInput | string
    awEntries?: StringFieldUpdateOperationsInput | string
    dependencies?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modTags?: ModTagUncheckedUpdateManyWithoutModNestedInput
    sourceFiles?: ModSourceFileUncheckedUpdateManyWithoutModNestedInput
  }

  export type McSourceFileCreateWithoutMcVersionInput = {
    className: string
    content: string
    embedding?: Bytes | null
  }

  export type McSourceFileUncheckedCreateWithoutMcVersionInput = {
    id?: number
    className: string
    content: string
    embedding?: Bytes | null
  }

  export type McSourceFileCreateOrConnectWithoutMcVersionInput = {
    where: McSourceFileWhereUniqueInput
    create: XOR<McSourceFileCreateWithoutMcVersionInput, McSourceFileUncheckedCreateWithoutMcVersionInput>
  }

  export type McSourceFileCreateManyMcVersionInputEnvelope = {
    data: McSourceFileCreateManyMcVersionInput | McSourceFileCreateManyMcVersionInput[]
  }

  export type McSourceFileUpsertWithWhereUniqueWithoutMcVersionInput = {
    where: McSourceFileWhereUniqueInput
    update: XOR<McSourceFileUpdateWithoutMcVersionInput, McSourceFileUncheckedUpdateWithoutMcVersionInput>
    create: XOR<McSourceFileCreateWithoutMcVersionInput, McSourceFileUncheckedCreateWithoutMcVersionInput>
  }

  export type McSourceFileUpdateWithWhereUniqueWithoutMcVersionInput = {
    where: McSourceFileWhereUniqueInput
    data: XOR<McSourceFileUpdateWithoutMcVersionInput, McSourceFileUncheckedUpdateWithoutMcVersionInput>
  }

  export type McSourceFileUpdateManyWithWhereWithoutMcVersionInput = {
    where: McSourceFileScalarWhereInput
    data: XOR<McSourceFileUpdateManyMutationInput, McSourceFileUncheckedUpdateManyWithoutMcVersionInput>
  }

  export type McSourceFileScalarWhereInput = {
    AND?: McSourceFileScalarWhereInput | McSourceFileScalarWhereInput[]
    OR?: McSourceFileScalarWhereInput[]
    NOT?: McSourceFileScalarWhereInput | McSourceFileScalarWhereInput[]
    id?: IntFilter<"McSourceFile"> | number
    mcVersionId?: IntFilter<"McSourceFile"> | number
    className?: StringFilter<"McSourceFile"> | string
    content?: StringFilter<"McSourceFile"> | string
    embedding?: BytesNullableFilter<"McSourceFile"> | Bytes | null
  }

  export type ModCreateWithoutModTagsInput = {
    modId: string
    displayName: string
    version: string
    mcVersion: string
    loader: string
    jarPath: string
    sha256?: string | null
    murmur2?: string | null
    sha512?: string | null
    sourcePath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    modrinthId?: string | null
    curseforgeId?: number | null
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: string
    mixinTargets?: string
    atEntries?: string
    awEntries?: string
    dependencies?: string
    metadata?: string
    tags?: string
    ingestedAt?: Date | string
    updatedAt?: Date | string
    classes?: ModClassCreateNestedManyWithoutModInput
    sourceFiles?: ModSourceFileCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutModTagsInput = {
    id?: number
    modId: string
    displayName: string
    version: string
    mcVersion: string
    loader: string
    jarPath: string
    sha256?: string | null
    murmur2?: string | null
    sha512?: string | null
    sourcePath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    modrinthId?: string | null
    curseforgeId?: number | null
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: string
    mixinTargets?: string
    atEntries?: string
    awEntries?: string
    dependencies?: string
    metadata?: string
    tags?: string
    ingestedAt?: Date | string
    updatedAt?: Date | string
    classes?: ModClassUncheckedCreateNestedManyWithoutModInput
    sourceFiles?: ModSourceFileUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutModTagsInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutModTagsInput, ModUncheckedCreateWithoutModTagsInput>
  }

  export type ModUpsertWithoutModTagsInput = {
    update: XOR<ModUpdateWithoutModTagsInput, ModUncheckedUpdateWithoutModTagsInput>
    create: XOR<ModCreateWithoutModTagsInput, ModUncheckedCreateWithoutModTagsInput>
    where?: ModWhereInput
  }

  export type ModUpdateToOneWithWhereWithoutModTagsInput = {
    where?: ModWhereInput
    data: XOR<ModUpdateWithoutModTagsInput, ModUncheckedUpdateWithoutModTagsInput>
  }

  export type ModUpdateWithoutModTagsInput = {
    modId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    mcVersion?: StringFieldUpdateOperationsInput | string
    loader?: StringFieldUpdateOperationsInput | string
    jarPath?: StringFieldUpdateOperationsInput | string
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    murmur2?: NullableStringFieldUpdateOperationsInput | string | null
    sha512?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    modrinthId?: NullableStringFieldUpdateOperationsInput | string | null
    curseforgeId?: NullableIntFieldUpdateOperationsInput | number | null
    hasMixins?: BoolFieldUpdateOperationsInput | boolean
    hasAt?: BoolFieldUpdateOperationsInput | boolean
    hasAw?: BoolFieldUpdateOperationsInput | boolean
    mixinConfigs?: StringFieldUpdateOperationsInput | string
    mixinTargets?: StringFieldUpdateOperationsInput | string
    atEntries?: StringFieldUpdateOperationsInput | string
    awEntries?: StringFieldUpdateOperationsInput | string
    dependencies?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ModClassUpdateManyWithoutModNestedInput
    sourceFiles?: ModSourceFileUpdateManyWithoutModNestedInput
  }

  export type ModUncheckedUpdateWithoutModTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    modId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    mcVersion?: StringFieldUpdateOperationsInput | string
    loader?: StringFieldUpdateOperationsInput | string
    jarPath?: StringFieldUpdateOperationsInput | string
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    murmur2?: NullableStringFieldUpdateOperationsInput | string | null
    sha512?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    modrinthId?: NullableStringFieldUpdateOperationsInput | string | null
    curseforgeId?: NullableIntFieldUpdateOperationsInput | number | null
    hasMixins?: BoolFieldUpdateOperationsInput | boolean
    hasAt?: BoolFieldUpdateOperationsInput | boolean
    hasAw?: BoolFieldUpdateOperationsInput | boolean
    mixinConfigs?: StringFieldUpdateOperationsInput | string
    mixinTargets?: StringFieldUpdateOperationsInput | string
    atEntries?: StringFieldUpdateOperationsInput | string
    awEntries?: StringFieldUpdateOperationsInput | string
    dependencies?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ModClassUncheckedUpdateManyWithoutModNestedInput
    sourceFiles?: ModSourceFileUncheckedUpdateManyWithoutModNestedInput
  }

  export type McVersionCreateWithoutSourceFilesInput = {
    versionId: string
    type?: string
    jarPath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    indexed?: boolean
    releaseTime: Date | string
    createdAt?: Date | string
  }

  export type McVersionUncheckedCreateWithoutSourceFilesInput = {
    id?: number
    versionId: string
    type?: string
    jarPath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    indexed?: boolean
    releaseTime: Date | string
    createdAt?: Date | string
  }

  export type McVersionCreateOrConnectWithoutSourceFilesInput = {
    where: McVersionWhereUniqueInput
    create: XOR<McVersionCreateWithoutSourceFilesInput, McVersionUncheckedCreateWithoutSourceFilesInput>
  }

  export type McVersionUpsertWithoutSourceFilesInput = {
    update: XOR<McVersionUpdateWithoutSourceFilesInput, McVersionUncheckedUpdateWithoutSourceFilesInput>
    create: XOR<McVersionCreateWithoutSourceFilesInput, McVersionUncheckedCreateWithoutSourceFilesInput>
    where?: McVersionWhereInput
  }

  export type McVersionUpdateToOneWithWhereWithoutSourceFilesInput = {
    where?: McVersionWhereInput
    data: XOR<McVersionUpdateWithoutSourceFilesInput, McVersionUncheckedUpdateWithoutSourceFilesInput>
  }

  export type McVersionUpdateWithoutSourceFilesInput = {
    versionId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    jarPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    indexed?: BoolFieldUpdateOperationsInput | boolean
    releaseTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McVersionUncheckedUpdateWithoutSourceFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    versionId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    jarPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    indexed?: BoolFieldUpdateOperationsInput | boolean
    releaseTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModCreateWithoutSourceFilesInput = {
    modId: string
    displayName: string
    version: string
    mcVersion: string
    loader: string
    jarPath: string
    sha256?: string | null
    murmur2?: string | null
    sha512?: string | null
    sourcePath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    modrinthId?: string | null
    curseforgeId?: number | null
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: string
    mixinTargets?: string
    atEntries?: string
    awEntries?: string
    dependencies?: string
    metadata?: string
    tags?: string
    ingestedAt?: Date | string
    updatedAt?: Date | string
    classes?: ModClassCreateNestedManyWithoutModInput
    modTags?: ModTagCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutSourceFilesInput = {
    id?: number
    modId: string
    displayName: string
    version: string
    mcVersion: string
    loader: string
    jarPath: string
    sha256?: string | null
    murmur2?: string | null
    sha512?: string | null
    sourcePath?: string | null
    decompPath?: string | null
    decompiled?: boolean
    modrinthId?: string | null
    curseforgeId?: number | null
    hasMixins?: boolean
    hasAt?: boolean
    hasAw?: boolean
    mixinConfigs?: string
    mixinTargets?: string
    atEntries?: string
    awEntries?: string
    dependencies?: string
    metadata?: string
    tags?: string
    ingestedAt?: Date | string
    updatedAt?: Date | string
    classes?: ModClassUncheckedCreateNestedManyWithoutModInput
    modTags?: ModTagUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutSourceFilesInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutSourceFilesInput, ModUncheckedCreateWithoutSourceFilesInput>
  }

  export type ModUpsertWithoutSourceFilesInput = {
    update: XOR<ModUpdateWithoutSourceFilesInput, ModUncheckedUpdateWithoutSourceFilesInput>
    create: XOR<ModCreateWithoutSourceFilesInput, ModUncheckedCreateWithoutSourceFilesInput>
    where?: ModWhereInput
  }

  export type ModUpdateToOneWithWhereWithoutSourceFilesInput = {
    where?: ModWhereInput
    data: XOR<ModUpdateWithoutSourceFilesInput, ModUncheckedUpdateWithoutSourceFilesInput>
  }

  export type ModUpdateWithoutSourceFilesInput = {
    modId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    mcVersion?: StringFieldUpdateOperationsInput | string
    loader?: StringFieldUpdateOperationsInput | string
    jarPath?: StringFieldUpdateOperationsInput | string
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    murmur2?: NullableStringFieldUpdateOperationsInput | string | null
    sha512?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    modrinthId?: NullableStringFieldUpdateOperationsInput | string | null
    curseforgeId?: NullableIntFieldUpdateOperationsInput | number | null
    hasMixins?: BoolFieldUpdateOperationsInput | boolean
    hasAt?: BoolFieldUpdateOperationsInput | boolean
    hasAw?: BoolFieldUpdateOperationsInput | boolean
    mixinConfigs?: StringFieldUpdateOperationsInput | string
    mixinTargets?: StringFieldUpdateOperationsInput | string
    atEntries?: StringFieldUpdateOperationsInput | string
    awEntries?: StringFieldUpdateOperationsInput | string
    dependencies?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ModClassUpdateManyWithoutModNestedInput
    modTags?: ModTagUpdateManyWithoutModNestedInput
  }

  export type ModUncheckedUpdateWithoutSourceFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    modId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    mcVersion?: StringFieldUpdateOperationsInput | string
    loader?: StringFieldUpdateOperationsInput | string
    jarPath?: StringFieldUpdateOperationsInput | string
    sha256?: NullableStringFieldUpdateOperationsInput | string | null
    murmur2?: NullableStringFieldUpdateOperationsInput | string | null
    sha512?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePath?: NullableStringFieldUpdateOperationsInput | string | null
    decompPath?: NullableStringFieldUpdateOperationsInput | string | null
    decompiled?: BoolFieldUpdateOperationsInput | boolean
    modrinthId?: NullableStringFieldUpdateOperationsInput | string | null
    curseforgeId?: NullableIntFieldUpdateOperationsInput | number | null
    hasMixins?: BoolFieldUpdateOperationsInput | boolean
    hasAt?: BoolFieldUpdateOperationsInput | boolean
    hasAw?: BoolFieldUpdateOperationsInput | boolean
    mixinConfigs?: StringFieldUpdateOperationsInput | string
    mixinTargets?: StringFieldUpdateOperationsInput | string
    atEntries?: StringFieldUpdateOperationsInput | string
    awEntries?: StringFieldUpdateOperationsInput | string
    dependencies?: StringFieldUpdateOperationsInput | string
    metadata?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ModClassUncheckedUpdateManyWithoutModNestedInput
    modTags?: ModTagUncheckedUpdateManyWithoutModNestedInput
  }

  export type ModClassCreateManyModInput = {
    id?: number
    className: string
    superClass?: string | null
    interfaces?: string
    accessFlags?: number
  }

  export type ModTagCreateManyModInput = {
    id?: number
    registry: string
    tagPath: string
    namespace: string
    entries?: string
    replace?: boolean
  }

  export type ModSourceFileCreateManyModInput = {
    id?: number
    className: string
    content: string
    embedding?: Bytes | null
  }

  export type ModClassUpdateWithoutModInput = {
    className?: StringFieldUpdateOperationsInput | string
    superClass?: NullableStringFieldUpdateOperationsInput | string | null
    interfaces?: StringFieldUpdateOperationsInput | string
    accessFlags?: IntFieldUpdateOperationsInput | number
  }

  export type ModClassUncheckedUpdateWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    superClass?: NullableStringFieldUpdateOperationsInput | string | null
    interfaces?: StringFieldUpdateOperationsInput | string
    accessFlags?: IntFieldUpdateOperationsInput | number
  }

  export type ModClassUncheckedUpdateManyWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    superClass?: NullableStringFieldUpdateOperationsInput | string | null
    interfaces?: StringFieldUpdateOperationsInput | string
    accessFlags?: IntFieldUpdateOperationsInput | number
  }

  export type ModTagUpdateWithoutModInput = {
    registry?: StringFieldUpdateOperationsInput | string
    tagPath?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
    replace?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModTagUncheckedUpdateWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    registry?: StringFieldUpdateOperationsInput | string
    tagPath?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
    replace?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModTagUncheckedUpdateManyWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    registry?: StringFieldUpdateOperationsInput | string
    tagPath?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    entries?: StringFieldUpdateOperationsInput | string
    replace?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModSourceFileUpdateWithoutModInput = {
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type ModSourceFileUncheckedUpdateWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type ModSourceFileUncheckedUpdateManyWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type McSourceFileCreateManyMcVersionInput = {
    id?: number
    className: string
    content: string
    embedding?: Bytes | null
  }

  export type McSourceFileUpdateWithoutMcVersionInput = {
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type McSourceFileUncheckedUpdateWithoutMcVersionInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type McSourceFileUncheckedUpdateManyWithoutMcVersionInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}