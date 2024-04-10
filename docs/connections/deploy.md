---
description: Managing Deno Deploy connections
sidebar_position: 2
---

# Deploy

Deploy connections are for all projects hosted in Deno Deploy. To establish
these connections you will need an access token from the Deploy dashboard. You
can [create a new access token](https://dash.deno.com/account#access-tokens) in
the `Settings` tab in Deploy under `Access Tokens`. Once you have an access
token, you can connect KV Client to Deploy KV databases, which auto-populate the
connections.  KV Client supports up to 1,000 Deploy connections.

:::note Deploy connections are user specific and are not shared with any other
user. :::
