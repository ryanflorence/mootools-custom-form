/*
---

name: Radio

license: MIT-style license.

copyright: Copyright (c) 2011 [Ryan Florence](http://ryanflorence.com/).

author: Ryan Florence

requires:
  - /CustomInput

provides: [Radio]

...
*/

;(function (){

	var _instances = {};

	function _pushInstance (instance){
		var group = instance.element.get('name');
		if (!_instances[group]) _instances[group] = [];
		_instances[group].push(instance);
		return _instances[group];
	}

	CustomInput.Radio = new Class({

		Extends: CustomInput,

		options: {
			className: 'custom_radio'
		},

		initialize: function (element, options){
			this.parent(element, options);
			this.group = _pushInstance(this);
		},

		click: function (){
			this.mask[(this.element.value === 'on' ? 'add' : 'remove') + 'Class']('on');
			this.group.each(function(instance){
				if (instance !== this) instance.deselect();
			}, this);
		},

		deselect: function (){
			this.mask.removeClass('on');
		}

	});

}).call(this)
