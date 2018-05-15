![spb logo](https://raw.githubusercontent.com/syntactician/spb/master/images/sptpb-128.png)

## spb or "sleuthpaste"

the only totally secure, fully auditable, entirely open-source pastebin, by [@syntactician](https://github.com/syntactician) and [@qguv](https://github.com/qguv)

spb is a fork of [pbwww](https://github.com/sudokode/pbwww) that encrypts text entirely client-side in the browser and posts the encrypted text to [ptpb.pw](https://ptpb.pw). It also decrypts those encrypted pastes. Because of the way its design integrates with pb, it inherits many of pb's benefits, including:

  - deleting pastes
  - setting per-paste automatic deletion timers, called "expiration" or "sunsets"
  - decrypt text from arbitrary URLs, as long as our method was used to encrypt
  - integration with existing tools

An instance is hosted at [sptpb.pw](https://sptpb.pw/) or [paste.guvernator.net](https://paste.guvernator.net). They are mirrors; things pasted to one will show up in the other.

## example

1. Go to [this example encrypted paste](https://sptpb.pw/?wcqg)
2. Once the page is loaded but before you type a password, disable internet access.
3. Enter the password&mdash;which is **truth**&mdash;and see that the text is decrypted.

## run

It's a static site. You can host it as-is on any static host.

Alternatively, run `make` to compile the form as a single-page site (`static.html`). You need python (2 or 3) and lxml to generate `static.html`. You'll still need to host or link the favicons at `image/sptpb-*.png` and the about page at `about.html`.

## why

[@qguv](https://github.com/qguv) was working on a project that needed short-term self-deleting symmetrically encrypted storage for small blobs of text, but no open-source pastebin lets users encrypt their pastes with a passphrase, and the [only](https://www.protectedtext.com/) pastebin with any sort of encryption is closed source and comes with several security caveats that can downgrade end users' security unexpectedly. We both use a popular pastebin called `pb` (hosted at [ptpb.pw](https://ptpb.pw)) and felt its API was well-designed enough to extend to symmetric encryption.

## todo

- [X] reformat as patchset atop pbwww
- [X] https for ptpb.pw and paste.guvernator.net
- [ ] automatic ssl cert renewal
- [ ] allow user to request a 4-character URL
- [ ] allow reading from any text on the web
- [ ] allow posting to any instance of pb (not just ptpb.pw)
- [ ] allow posting to other pastebin providers
