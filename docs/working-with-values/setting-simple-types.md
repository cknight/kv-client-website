---
description: How to set or update a simple type
sidebar_position: 2
---

# Setting simple types

Simple types work everywhere with no special handling required (simple in this
context is a type which works 'as is' everywhere). They work equally well as the
KV value or value of an object, Map, Array, etc. Examples shown are what you
would type for the value in KV Client when setting a value.

| Type    | Example as KV value    | Example setting value within a data structure |
| ------- | ---------------------- | --------------------------------------------- |
| boolean | `true`                   | `{ myBoolean: true }`                           |
| null    | `null`                   | `{ myNull: null }`                              |
| number  | `1234`                   | `{ myNumber: 1234 }`                            |
| string* | `hello world`            | `{ myString: "hello world" }`                   |
| JSON*   | `{ "myKey": "myValue" }` | `{myJSON: '{ "myKey": "myValue" }' }`           |

\* Note that strings and JSON are unquoted when used as primary KV value and
quoted when used within other data structures
