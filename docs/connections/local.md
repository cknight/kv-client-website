---
description: Managing local connections
sidebar_position: 1
---

# Local

Local connections are for Deno KV databases located on the same machine as KV
Client is running on. When adding a local connection, KV Client will
automatically attempt to discover all databases automatically created by Deno
(through `Deno.openKv()` where a specific location hasn't been used). For each
auto-discovered KV database, a selection of key/value pairs is displayed to help
identify the database. Databases which haven't been auto-discovered may still be
used by supplying the exact file location of the database. 

:::note
Local connections setup are shared across all users.
:::
