---
description: Get a specific entry from KV
sidebar_position: 1
---

# Get

If you know the exact key you wish to work with, this is the ideal operation to
use. Enter the key, and choose `Get` to fetch the KV entry. This is equivalent
to using, e.g. `await kv.get(["some key"])`. If found, the value will be shown below
alongside the type of the value. You can then edit, copy (to another connection)
or delete the entry. No caching is used with `Get` and entries are always
fetched directly from KV.
