---
description: How sessions are managed in KV Client
sidebar_position: 1
---

# Session

All users are given sessions controlled by a session-based cookie. You start as
an anonymous user, but can upgrade your session by connecting to your Deno
Deploy account with a Deploy access token. The user menu in the top right allows
you to `Clear data` (for anonymous users) or `Log out` (for users connected to
Deploy). Both will remove user data from memory, delete Deploy access tokens,
close KV connections and clear any cached data, in addition to removing the old
session cookie.
