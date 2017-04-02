![spb logo](https://raw.githubusercontent.com/syntactician/spb/fb8a5cbda1689d45366f289940251044bd110c73/assets/favicon_128.png)

## spb or "sleuthpaste"

...or how I learned to stop worrying about pasting sensitive information publicly and love the Web.

`spb` a.k.a. "sleuthpaste" is the only totally secure, auditable, entirely open-source pastebin.

![spb demo]

## How to run

The server is started with `spb [port]`. If port is unspecified, defaults to 80.

## Inspiration

Quint was working on a project that needed short-term self-deleting symmetrically encrypted storage for small blobs of text, but no open-source pastebin lets users encrypt their pastes with a passphrase, and the [only](https://www.protectedtext.com/) pastebin with any sort of encryption is closed source and comes with several security caveats that can downgrade end users' security unexpectedly. We both use a popular pastebin called `pb` (hosted at [ptpb.pw](https://ptpb.pw)) and felt its API was well-designed enough to extend to symmetric encryption.

## What it does

`spb` is a fork of `pb` that encrypts text entirely client-side in the browser. Because of the way its design integrates with `pb`, it inherits many of `pb`'s benefits, including:

  - deleting pastes
  - setting per-paste automatic deletion
  - vanity URLs to double as a URL-shortener of sorts
  - extensible API
  - integration with existing tools

An instance is hosted at [sptpb.pw](http://sptpb.pw/).

## How we built it

Ed wrote a node.js backend server and a wrapper around crypto.js, an in-browser Javascript crypto library, for both the browser (as a script loaded by the paste submission form) and the command-line (as a composable unix utility), both running the same auditable (hashable, signable, ...) code.

Quint forked [pbwww](https://github.com/sudokode/pbwww) (running instance [here](https://ptpb.pw/f)) to add symmetric encryption to the submission form, removing features that were incompatible with the level of encryption provided; this provided the front-end.

## Challenges we ran into / What we learned

- javascript is crucially *not* a well-specified language with well-specified behavior
- browser javascript is crucially *not* server javascript
- severe sleep deprivation
- turns out W&M's DNS servers cache for a very long time
- node can act as a very flexible Flask replacement, but only if you like callbacks
- Flask can act as a very flexible node replacement, but only if you like decorators
- competition with a systems programming assignment

## Accomplishments that we're proud of

We're the only open-source encrypted pastebin on the internet. It filled a very concrete need for a real project that I will be using as early as this week.

## What's next for spb

Even tighter integration with `pb` and support for arbitrary binary blobs (a much harder task because of the inability to use HTTP to send large files through an encrypting stream).
