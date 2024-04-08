---
sidebar_position: 3
---

# Working with keys

At the heart of Deno KV are the
[keys](https://docs.deno.com/deploy/kv/manual/key_space) by which the data is
indexed. A `Deno.KvKey` is an array of `Deno.KvKeyPart`. And each
`Deno.KvKeyPart` is one of: `Uint8Array`, `string`, `number`, `bigint` or
`boolean`. A key may be made up of one part, or many parts, and the parts may be
of different types. In KV Client you also enter keys as an array of parts. KV
Client infers the types from the format of the key part and the array brackets
are provided for you. Here are examples of entering keys into one of the KV
Client key fields:

| Deno.KvKey                                         | Input this into KV Client        |
| -------------------------------------------------- | -------------------------------- |
| ["Hello world"]                                    | "Hello world"                    |
| [105834]                                           | 105834                           |
| [18014398509481982n]                               | 18014398509481982n               |
| [true]                                             | true                             |
| [new Uint8Array([255,0,62])]                       | [255,0,62]                       |
| ["orders", 1001, "shipping"]                       | "orders", 1001, "shipping"       |
| ["abc", 123, 456n, false, new Unit8Array([0,1,2])] | "abc", 123, 456n, false, [0,1,2] |

Underneath key inputs, KV Client will show you the types inferred from your
input. e.g. `Types: [string, number]`. If the type(s) entered are invalid, then
you will see `Types: <invalid>` instead.
