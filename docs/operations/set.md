---
description: Create or update an entry in KV
sidebar_position: 3
---

# Set

'Set' allows you to insert or overwrite an entry in KV. This is equivalent to
`kv.set(["my key"], { hello: "world"})`. When setting values it will error out
by default if the key already exists. You can override this behavior by
unticking the 'Do not overwrite' checkbox.
