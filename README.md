# [flipdot.github.io](https://flipdot.github.io/)

This is a jekyll site made for testing github-md-editor. This is not our main
website, for that go to [flipdot.org][]!

[flipdot.org]: https://flipdot.org/

## Building

Install ruby and [bundler][]. Then run

    bundle install

Then run

    bundle exec jekyll serve

and you will have a web server on `localhost:4000` that serves the site.

[bundler]: http://bundler.io/http://bundler.io/http://bundler.io/

## Deploying

The build step above puts the page contents into a directory called `_site`. You
can also just build the page, without running jekyll's default webserver:

    bundle exec jekyll build

Once the page generation is done, just upload the contents of the `_site`
directory to a webserver.

### Extensionless page links

Wikis look much nicer with page paths like `/my/page` instead of `/my/page.html`
or `/my/page/`. To set this up in nginx, use the following directive:

    try_files $uri $uri/ =404;

In apache, the following should work (but I did not test it):

    DirectorySlash Off