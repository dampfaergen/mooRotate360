mooRotate360
=============

mooRotate360 is a simple mooTools plugin for showing 360° images.

It is based on the [`Rotate360`](https://github.com/oliveta/Rotate360) plugin made by [Oliveta](https://github.com/oliveta).

The plugin was modified for use on our e-commerce platform [Købstaden](http://kobstaden.dk) and we decided to release the code on github.


Basic usage example
-------------

First you need to include mooTools, mooTools-more and mooRotate360 in the `<head>` section of your document.

    # HTML
    <script src="http://ajax.googleapis.com/ajax/libs/mootools/1.4.0/mootools-yui-compressed.js" type="text/javascript"></script>
    <script src="script/mootools-more-1.3.2.1.js" type="text/javascript"></script>
    <script src="script/mooRotate360.js" type="text/javascript"></script>

Then you can create a 360 image rotator by using the following code.

	# JS
	new mooRotate360(['/images/img01.jpg','/images/img02.jpg'], $("wrapper"),{
		tickAmount:12,
		autoPlay:false,
		frameTime:100
	});


Class: mooRotate360
-----------------

### Syntax

	#JS
	var rotate = new mooRotate360([files, element, options]);

### Arguments

1. files: (*element*, *array*) Images files which should be used in the rotator
2. element: (*element*, *string*, *array*) The element(s) to attach the rotator to
3. options: (*object*, optional) The options object

### Options:

All the options of the mooRotate360 class:

- autoPlay: (*boolean*, defaults to `false`) Sets whether the image should rotate by itself.
- tickAmount: (*number*, defaults to `12`) How far you have to drag before it moves.
- frameTime: (*number*, defaults to `100`) How long a frame is displayed. Currently unused.
- firstFrame: (*number*, defaults to `0`) Which frame to show first.

To do
-----

- Add touchevents, so the plugin can work on mobile devices
- Add loader function, including a spinner
- Create overlay interface

Contributing
------------

Feel free to contribute to this plugin. If you find bugs or features we have missed, let us know by submitting an issue or by opening a pull request.

How to contribute directly:

1. Fork it.
2. Create a branch.
3. Commit your changes.
4. Push to the branch.
5. Open a [Pull Request][1]

[1]: http://github.com/kobstaden/mooRotate360/pulls

License
-------

Distributed under the [MIT license](http://www.opensource.org/licenses/mit-license.php)