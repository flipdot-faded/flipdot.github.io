# [flipdot.github.io](https://flipdot.github.io/)

This is a jekyll site made for testing github-md-editor. This is not our main
website, for that go to [flipdot.org][]!

[flipdot.org]: https://flipdot.org/

## Deploying

Wikis look much nicer with page paths like `/my/page` instead of `/my/page.html`
or `/my/page/`. To set this up in nginx, use the following directive:

    try_files $uri $uri/ =404;

In apache, the following should work (but I did not test it):

    DirectorySlash Off