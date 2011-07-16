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

	initialize: function (){
		this.parent.apply(this, arguments);
		if (this.element.get('checked')) this.mask.addClass('on');
	},

	click: function (){
		this.mask[(this.element.get('checked') ? 'add' : 'remove') + 'Class']('on');
	},

	change: function (){
		this.mask[(this.element.get('checked') ? 'add' : 'remove') + 'Class']('on');
	}

});

(function (){
	var noop = function (){},
		fakeEvent = { stop: noop, preventDefault: noop, stopPropagation: noop};

	Element.Properties.checked = { 
		set: function (value){
			this.checked = value;
			var instance = this.retrieve('custom_input');
			if (!instance) return;
			instance.mask[(value ? 'add' : 'remove') + 'Class']('on');
		}, 

		get: function (){ 
			return this.checked;
		} 
	};
}());
