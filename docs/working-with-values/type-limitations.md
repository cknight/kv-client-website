---
description: Known limitations working with types
sidebar_position: 4
---

# Type limitations

Ultimately, every KV key and value must be converted into strings of text for
display in a browser. This inevitably leads to limitations on converting values
back and forth. The following specific scenarios are known limitations:

- **undefined** - support for undefined values is limited. It is not possible to
  set a value as undefined. If an existing KV value (or value within a data
  structure) is undefined, this will display correctly on viewing. If however
  the undefined value is, e.g., a property of an object and you modify the
  object (leaving the undefined property alone), the undefined property is
  removed from the object. E.g. given `{a: 5, b: undefined}` and you set it via
  the UI to `{a:6, b: undefined}` this will save to KV as `{a:6}`.
- **Strings** which are solely a number ending with 'n' are auto-converted to
  BigInt
- Outside of the specific types covered in setting
  [simple](./setting-simple-types.md) and [complex](./setting-complex-types.md)
  types, you can only view and not set these. E.g. `Int16Array`, `Uint16Array`,
  etc. Any types without direct support are rendered to a string via
  `JSON5.stringify(kvValue)`. Type names are derived from the type itself, or in
  the case of an object, from the constructor name.
