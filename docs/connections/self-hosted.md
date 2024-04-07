---
description: Managing self-hosted connections
sidebar_position: 3
---

# Self-hosted

Self-hosted KV databases are non-local KV databases which you host yourself, and
which are accessed over an HTTP connection. When creating a connection for a
self-hosted database, you will need both the URL used to access the database as
well as the access token specific for the self-hosted database (this is
different from the access token in Deploy).

:::note Self-hosted connections are shared across all users. :::

:::info Entering an incorrect self-hosted URL or access token could cause KV
Client to hang due to a bug in Deno. If this occurs, simply restart KV Client
and remove the connection before trying again. :::
