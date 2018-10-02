function Basket(x, y, v, image, scale, canvas, context) {
    // Properties
    "use strict";
    this.x = x;
    this.y = y;
    this.v = v;
    this.image = image;
    this.scale = scale;
    this.context = context;
    
    //Methods
    this.left = function (t) {
        this.x -= this.v * t;
        this.limit();
    };

    this.right = function (t) {
        this.x += this.v * t;
        this.limit();
    };

    this.up = function (t) {
        this.y -= this.v * t;
        this.scale -= 0.015;
        this.limit();
    };
    
    this.down = function (t) {
        this.y += this.v * t;
        this.scale += 0.015;
        this.limit();
    };
    
    this.limit = function () {
        if (this.x < this.image.width * this.scale / 4) {
            this.x = this.image.width * this.scale / 4;
        }
        if (this.x > canvas.width - this.image.width * this.scale / 4) {
            this.x = canvas.width - this.image.width * this.scale / 4;
        }
        if (this.y < canvas.height / 2) {
            this.y = canvas.height / 2;
            this.scale = 0.6;
        }
        if (this.y > canvas.height + this.image.height * this.scale / 2.5) {
            this.y = canvas.height + this.image.height * this.scale / 2.5;
            this.scale = 1;
        }
    };

    this.display = function () {
        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.scale(this.scale, this.scale);
        this.context.drawImage(this.image, -this.image.width / 2, -this.image.height / 2);
        this.context.restore();
    };
}