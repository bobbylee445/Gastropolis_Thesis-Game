//v0.00004 (...lol yup)

// Overwrite
Window_Status.prototype.drawBlock2 = function(y) {
    this.drawActorFace(this._actor, 12, y);
    this.drawBasicInfo(204, y);
	
	//this.drawExpInfo(456, y); // <=== This line is removed/commented out
};

// Overwrite
Window_Status.prototype.drawBasicInfo = function(x, y) {
    var lineHeight = this.lineHeight(); 
    this.drawActorIcons(this._actor, x, y + lineHeight * 1);
    this.drawActorHp(this._actor, x, y + lineHeight * 2);
    this.drawActorMp(this._actor, x, y + lineHeight * 3);
	
	//this.drawActorLevel(this._actor, x, y + lineHeight * 0); // <=== This line is removed/commented out
};

if (Imported.YEP_StatusMenuCore){
	// Overwrite
	Window_SkillStatus.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
		var lineHeight = this.lineHeight();
		var x2 = x + 180;
		var width2 = Math.min(200, width - 180 - this.textPadding());
		this.drawActorName(actor, x, y);
		
		//this.drawActorLevel(actor, x, y + lineHeight * 1); // <=== This line is removed/commented out
		
		this.drawActorIcons(actor, x, y + lineHeight * 2);
		this.drawActorClass(actor, x2, y);
		this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
		this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
	};
	
	// Overwrite	
	Window_StatusInfo.prototype.drawGeneral = function() {
			var dx = this.standardPadding() / 2;
			var dy = this.lineHeight() / 2;
			var dw = (this.contents.width - this.standardPadding()) / 2;
			var dh = this.lineHeight();
			var text;
			this.changeTextColor(this.systemColor());
			this.drawText(Yanfly.Param.StatusParamText, dx, dy, dw, 'center');
			dx += this.contents.width / 2;
//			this.drawText(Yanfly.Param.StatusExpText, dx, dy, dw, 'center');
			this.drawGeneralParam(dx, dy, dw, dh);
//			this.drawGeneralExp(dx, dy, dw, dh);
	};
	
	// Overwrite
	Window_StatusInfo.prototype.drawGeneralParam = function() {
		var rect = new Rectangle();
		rect.width = (this.contents.width - this.standardPadding()) / 2;
		rect.y = this.lineHeight(); // <=== changed from "this.lineHeight() * 2;"
		rect.height = this.lineHeight();
		var dx = rect.x + this.textPadding();
		var dw = rect.width - this.textPadding() * 2;

		// *** Below Lines Removed/Commented Out ***
		//this.drawDarkRect(rect.x, rect.y, rect.width, rect.height);
		//this.changeTextColor(this.systemColor());
		//this.drawText(TextManager.level, dx, rect.y, dw, 'left');
		//this.changeTextColor(this.normalColor());
		//text = Yanfly.Util.toGroup(this._actor.level);
		//this.drawText(text, dx, rect.y, dw, 'right');
		
		for (var i = 0; i < 6; ++i) {
		  if (i === 0) {
			rect.y += this.lineHeight();
			rect.width /= 2;
			dw = rect.width - this.textPadding() * 2;
		  } else if (i % 2 === 0) {
			rect.x = 0;
			dx = rect.x + this.textPadding();
			rect.y += this.lineHeight();
		  } else {
			rect.x += rect.width;
			dx += rect.width;
		  }
		  this.drawDarkRect(rect.x, rect.y, rect.width, rect.height);
		  this.changeTextColor(this.systemColor());
			this.drawText(TextManager.param(i), dx, rect.y, dw, 'left');
			this.changeTextColor(this.normalColor());
			text = Yanfly.Util.toGroup(this._actor.param(i));
			this.drawText(text, dx, rect.y, dw, 'right');
		}
		
	};

}
