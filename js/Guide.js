function Guide(x, y, r, scale, alpha, color, context) {
    // Properties
    "use strict";
    this.x = x;
    this.y = y;
    this.r = r;
    this.scale = scale;
    this.alpha = alpha;
    this.color = color;
    this.context = context;
    
    //Methods
    this.display = function () {
        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.scale(this.scale * 4, this.scale);
        this.context.globalAlpha = this.alpha;
        this.context.beginPath();
        this.context.arc(0, 0, this.r, 0, 2 * Math.PI, false);
        this.context.restore();
        this.context.fillStyle = this.color;
        this.context.fill();
    };
}