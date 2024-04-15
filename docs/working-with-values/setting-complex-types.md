---
description: How to set or update complex types
sidebar_position: 3
---

# Setting complex types

In addition to simple types, KV Client also supports a number of other data
types and data structures. As all values submitted through the UI are
essentially raw strings which are parsed via a JSON5 parser, types which are not
natively supported by JSON5 parsing must be handled specially. Each has a
straightforward shorthand notation for primary KV values, however a longer
notation must be used when embedding within other data structures (e.g object,
Map, Array, etc.) in the format of
`{ type: <valueType>, value: <actualValue> }`. Examples shown are what you would
type into KV Client when setting or updating a KV value.

| KV Value Type | Example as KV value                       | Example setting value within a data structure (KV value type of object)    |
| ------------- | ----------------------------------------- | -------------------------------------------------------------------------- |
| bigint        | `123456n`                                 | `{ myBigInt: { type: "bigint", value: "1234213421352n" }}`                 |
| Array         | `[ 1, "hello", true ]`                    | `{ myArray: [ 1, "hello", true]}`                                          |
| Map           | `[["key1", "value1"],["key2", "value2"]]` | `{ myMap: { type: "Map", value: [["key1", "value1"],["key2", "value2"]]}}` |
| Set           | ["key1","key2"]                           | `{ mySet: { type: "Set", value: ["key1", "key2"] }}`                       |
| Date          | `628021800000`                            | `{ myDate: { type: "Date", value: 628021800000}}`                          |
|               | `1995-12-17T03:24:00.000Z`                | `{ myDate: { type: "Date", value: "1995-12-17T03:24:00.000Z" }}`           |
| object        | `{ key: "value" }`                        | `{ myObj: { anotherObj: "hello"}}`                                         |
| KvU64         | `12345678901234567890n`                   | `{ myKvU64: { type: "KvU64", value: "12345678901234567890" }}`             |
| RegExp        | `/^([1-9]\d*)$/`                          | `{ myRegExp: { type: "RegExp", value: "/^([1-9]\d*)$/"}}`                  |
| Uint8Array    | `[232, 0, 123]`                           | `{ myUnit8Array: { type: "Uint8Array", value: [232, 0, 123]}}`             |

### Using Type templates

When setting within data structures, you must use the long form for non-simple
types when storing these within the data structure. For example, if you set a
value to `{ x: [1,2,3]}`, is the type of 'x' an array of numbers? A set? Maybe a
Uint8Array? We need more type detail to be included. This is why long-form
values are needed. Example of these are shown in the right hand column of the
table above. However, using these can be tedious, which is where the 'Type
templates' comes into play. Let's say you want to have an array of Date objects.
When setting the value, ensure the 'Value Type' (of the KV entry) is Array. This
will enable the type templates. In the value box, enter the brackets for the
array, e.g. `[]`, place the cursor between the brackets and select 'Date' from
the 'Type templates' dropdown and finally click on 'Insert'. This will insert
into the value (at your cursor position) something like
`{ type: "Date", value: "2024-03-30T20:28:51.332Z" }`. You can now modify the
date as needed. Inserting two dates (don't forget the comma separator) would
yield:

```ts
[
  { type: "Date", value: "2024-01-01T00:00:00.000Z" },
  { type: "Date", value: "2024-03-31T23:59:59.999Z" },
];
```
