/*
---

name: Checkbox

license: MIT-style license.

copyright: Copyright (c) 2011 [Ryan Florence](http://ryanflorence.com/).

author: Ryan Florence

requires:
  - /CustomInput

provides: [Checkbox]

...
*/

CustomInput.Checkbox = new Class({

	Extends: CustomInput,

	options: {
		className: 'custom_checkbox'
	},

	click: function (){
		this.mask[(this.element.get('checked') ? 'add' : 'remove') + 'Class']('on');
	}

});
