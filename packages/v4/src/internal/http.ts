import { Effect, Schema } from "effect";
import { HttpClientResponse } from "effect/unstable/http";

export const decodeJson =
  <A, I, RD, RE>(schema: Schema.Codec<A, I, RD, RE>) =>
  (response: HttpClientResponse.HttpClientResponse) =>
    HttpClientResponse.schemaJson(Schema.Struct({ body: schema }))(response).pipe(
      Effect.map((decoded) => decoded.body),
    );
