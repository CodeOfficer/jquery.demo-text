jquery.demo-text.js
===================

Lots of sites put example text into input fields.

For instance, a name field might say 'John Smith' by default.  When you click on it, that text clears.  If you type your own name, it stays.  But if you leave the field without typing anything, it goes back to saying 'John Smith.'

Installation
------------

    <script type="text/javascript" src="jquery.demo-text.js"></script>
    <link rel="stylesheet" type="text/css" href="jquery.demo-text.css" />

Usage
-----

Add `data-demo-text` to any input element, eg:

    <input name="first-name" type="text" data-demo-text="Bob, Jane, ..." />
    <input name="last-name" type="text" data-demo-text="eg. Smith" />

		$('*[data-demo-text]').demoText();

===================

*began as fork of http://github.com/devfu/jquery.demo-text