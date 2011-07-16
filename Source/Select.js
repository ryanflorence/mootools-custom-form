/*
---

name: Select

license: MIT-style license.

copyright: Copyright (c) 2011 [Ryan Florence](http://ryanflorence.com/).

author: Ryan Florence

requires:
  - /CustomInput

provides: [Select]

...
*/

CustomInput.Select = new Class({

	Extends: CustomInput,

	options: {
		className: 'custom_select'
	},

	initialize: function (){
		this.parent.apply(this, arguments);
		this.resizeMask().createLabel().updateLabel();
		this.element.addEvent('change', this.updateLabel.bind(this));
	},

	resizeMask: function (){
		this.mask.setStyle('width', this.element.getSize().x);
		return this;
	},

	createLabel: function (){
		this.label = new Element('span').inject(this.mask, 'top');
		return this;
	},

	updateLabel: function (){
		this.label.set('text', this.element.getElement(':selected').get('text'));
		return this;
	}

});
