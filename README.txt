************************************************************************
mooRotate360

A mooTools plugin for 360 image rotation.

Based on oliveta / Rotate360
Link: https://github.com/oliveta/Rotate360

************************************************************************

v.0.1 - by Oliveta & ricky.co.uk (2010)
v.0.2 - by Købstaden

--------
Contents
--------

- index.html
HTML page with example usage.

- script/Rotate360.js
JavaScript class for rotating images.

- script/mootools-more-1.3.2.1.js
Mootools classes Assets and Spinner.

- images/
Directory of supporting image material. Note: spinner.gif is used by Spinner class when loading images.

- Readme.txt
This file.

--------
Use
--------
 
Rotate360() - applied to class^=imgholder elements, using default values {tickAmount:10, firstFrame:0, autoPlay:false}
	  
Rotate360(array of ids, options) - options: 
(string) class_el, - if ids missing applied to class=class_el elements
(int) tickAmount, - how much do u have to drag for a move
(int) firstFrame, - Frame to show first 
(bool) autoPlay, - if set to 1, the image starts rotating imadiately after loading 
										 

									 