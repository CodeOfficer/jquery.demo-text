jquery.demo-text.js
===================

Lots of sites put example text into input fields.

For instance, a name field might say 'John Smith' by default.  When you click on it, that text clears.  If you type your own name, it stays.  But if you leave the field without typing anything, it goes back to saying 'John Smith.'

![Screenshot showing an example of this plugin in action](http://github.com/devfu/jquery.demo-text/raw/master/screenshot.png)

Installation
------------

Download [jquery.demo-text.js][js] ([raw][js_raw]) and [jquery.demo-text.css][css] ([raw][css_raw]) and put them into your project.

    <script type="text/javascript" src="jquery.demo-text.js"></script>
    <link rel="stylesheet" type="text/css" href="jquery.demo-text.css" />

Usage
-----

Add `data-demo-text` to any input element, eg:

    <input name="first-name" type="text" data-demo-text="Bob, Jane, ..." />
    <input name="last-name" type="text" data-demo-text="eg. Smith" />

Take a look at [example.html][example]


[js]:      http://github.com/devfu/jquery.demo-text/blob/master/jquery.demo-text.js
[css]:     http://github.com/devfu/jquery.demo-text/blob/master/jquery.demo-text.css
[js_raw]:  http://github.com/devfu/jquery.demo-text/raw/master/jquery.demo-text.js
[css_raw]: http://github.com/devfu/jquery.demo-text/raw/master/jquery.demo-text.css
[example]: http://github.com/devfu/jquery.demo-text/blob/master/example.html
