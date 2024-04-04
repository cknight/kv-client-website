---
description: How to view KV values
sidebar_position: 1
---

# Viewing key/value entries

Not all types can be set via KV Client. Types whose values can be modified or
set are shown above including how the value would be shown in KV Client.
Anything outside the above is rendered to a string via
`JSON5.stringify(kvValue)`. Types are derived from the type itself, or in the
case of an object, from the constructor name.
