function Ball(x, y, v, image, rad, radSpeed, scale, distance, context) {
    // Properties
    "use strict";
    this.x = x;
    this.y = y;
    this.v = v;
    this.image = image;
    this.rad = rad;
    this.radSpeed = radSpeed;
    this.scale = scale;
    this.distance = distance;
    this.context = context;
    
    //Methods
    this.display = function () {
        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.rotate(this.rad);
        this.context.scale(this.scale, this.scale);
        this.context.drawImage(this.image, -this.image.width / 2, -this.image.height / 2);
        this.context.restore();
    };
}