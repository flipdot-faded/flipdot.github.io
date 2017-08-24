---
title: 'New Site: ToDo'
---

* Create a (responsive!) layout + design that mimics the look of [flipdot.org][]
  * Mark the section of the site you are on in the navigation
* Include the editor. Duh. Seems to be possible with submodules:
  <https://help.github.com/articles/using-submodules-with-pages/>
* Add comments
  * Potentially with <https://posativ.org/isso/>
* Add a search
  * Embedded: <https://github.com/christian-fei/Simple-Jekyll-Search>
  * Or external: `<form action="https://duckduckgo.com/">`
* Add a geotag to the sites metadata?
  * Most important question of them all.
* Decide what to do with "Wiki Lotto"
  * Either reimplement in Liquid, generating new entries every time the site is
    regenerated (see <https://stackoverflow.com/a/28323813/1592377> for random
    numbers)
  * ... or just remove it
* Decide how to handle special characters in post / page titles, e.g.
  * `%`: <https://flipdot.org/blog/archives/385-34,4-%25-OEffnungsquote-da-ist-noch-Luft.html>
  * `&`: <https://flipdot.org/blog/archives/384-Leiterplatten-geaetzt-gefraest.html>
  * `?`: <https://flipdot.org/blog/archives/383-Sicher-Aber-sicher!.html>
  * `:`: <https://flipdot.org/blog/archives/381-Material-zum-Workshop-Einfuehrung-in-die-Shell.html>
