/*
---

name: CustomForm

license: MIT-style license.

copyright: Copyright (c) 2011 [Ryan Florence](http://ryanflorence.com/).

author: Ryan Florence

requires:
  - /Checkbox
  - /Radio
  - /Select

provides: [CustomForm]

...
*/

var CustomForm = new Class({

	Implements: Options,

	options: {
		checkbox: 'input[type=checkbox]',
		radio: 'input[type=radio]',
		select: 'select'
	},

	initialize: function (element, options){
		console.log('what?')
		this.setOptions(options);
		this.element = document.id(element);
		this.register = [];
		this.customize();
	},

	customize: function (){
		var form = this.element;
		this.factory(CustomInput.Checkbox, form.getElements(this.options.checkbox))
			.factory(CustomInput.Radio, form.getElements(this.options.radio))
			.factory(CustomInput.Select, form.getElements(this.options.select));
		return this;
	},

	factory: function (klass, elements){
		console.log('huh?')
		elements.each(function(element){
			if (this.register.contains(element) || (klass == CustomInput.Select && element.get('size'))) return;
			this.register.push(new klass(element));
		}, this);
		return this;
	}

});
