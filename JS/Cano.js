class Cano {
    constructor(imagem, x, y, largura, altura, velocidadeHorizontal) {
        this.x = x;
        this.y = y;

        this.largura = largura;
        this.altura  = altura;

        this.img = new Image();
        this.img.src = imagem;

        this.velocidadeHorizontal = velocidadeHorizontal;
    }

    update(deltaTime) {
        this.x -= this.velocidadeHorizontal * deltaTime;
    }

    draw(context) {
        context.drawImage(this.img, this.x, this.y, this.largura, this.altura);
    }
}