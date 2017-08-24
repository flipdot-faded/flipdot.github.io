---
---
Hello!

This is a jekyll site made for testing github-md-editor. This is not our main
website, for that go to [flipdot.org][]!

# ToDo

* Create a (responsive!) layout + design that mimics the look of [flipdot.org][]
  * Mark the section of the site you are on in the navigation
* Include the editor. Duh. Seems to be possible with submodules:
  <https://help.github.com/articles/using-submodules-with-pages/>

# Unresolved questions

* Comments!?
  * Potential solution: <https://posativ.org/isso/>
* Search
  * Embedded: <https://github.com/christian-fei/Simple-Jekyll-Search>
  * Or external: `<form action="https://duckduckgo.com/">`
* Add a geotag to the sites metadata?
  * Most important question of them all.
* What to do with "Wiki Lotto"?
  * Reimplement in Liquid, generating new entries every time the site is
    regenerated (see <https://stackoverflow.com/a/28323813/1592377> for random
    numbers)
  * Remove the feature
* How do we handle special characters in post / page titles?
  * `%`: <https://flipdot.org/blog/archives/385-34,4-%25-OEffnungsquote-da-ist-noch-Luft.html>
  * `&`: <https://flipdot.org/blog/archives/384-Leiterplatten-geaetzt-gefraest.html>
  * `?`: <https://flipdot.org/blog/archives/383-Sicher-Aber-sicher!.html>
  * `:`: <https://flipdot.org/blog/archives/381-Material-zum-Workshop-Einfuehrung-in-die-Shell.html>

[flipdot.org]: https://flipdot.org/
