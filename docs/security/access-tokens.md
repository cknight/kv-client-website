---
description: How KV Client manages access tokens
sidebar_position: 2
---

# Access tokens

Connecting to Deploy or self-hosted KV databases requires an access token. These
tokens effectively give root/admin access to the database therefore it is very
important to protect these tokens from exposure. To prevent you having to
re-enter your token on every operation, KV Client stores access tokens in a
database which is reused on subsequent KV operations.

## Deno Deploy tokens

Deno Deploy tokens are stored against the session of the user, meaning only the
user who added that token (which was stored against their unique session cookie)
can access Deploy using that token.

## Self-hosted tokens

In contrast, self-hosted tokens are stored against the connection and used by
anyone with access to KV Client.

## Token encryption

All tokens are encrypted at rest in the database and never directly accessible
to a user. KV Client protects against token leakage in a multi-user environment
by using a mutex when establishing the connection. Tokens are encrypted using
either an in-memory encryption key (generated on process start) or via a
user-supplied value. In-memory keys are lost on process termination requiring
Deploy connectivity to be reestablished and self-hosted connections to be
re-entered. It is recommended for the user to supply an encryption key (aka
password) via the `KV_CLIENT_ENCRYPTION_KEY` environment variable. There are no
restrictions on the encryption key/password in length or complexity.
