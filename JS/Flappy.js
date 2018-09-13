class Flappy {
    constructor(x, y, largura, altura, velocidadeVertical) {
        this.x = x;
        this.y = y;

        this.largura = largura;
        this.altura = altura;

        this.velocidadeVertical = velocidadeVertical;
        this.velocidadeQuedaMax = velocidadeVertical;
        
        this.img = new Image();
        this.img.src = "Imagens/flappy.png";

        this.vivo = true;
    }

    handleInput(tecla) {
        if (tecla === " ")
            this.velocidadeVertical = -this.velocidadeQuedaMax;
    }

    update(deltaTime) {
        this.y += this.velocidadeVertical * deltaTime;

        if (this.velocidadeVertical < this.velocidadeQuedaMax)
            this.velocidadeVertical += deltaTime * 350;
    }

    colidiuCom(cano) {
        let horizontal = this.x + this.largura >= cano.x && cano.x + cano.largura >= this.x;
        let vertical   = this.y + this.altura  >= cano.y && cano.y + cano.altura  >= this.y;

        return horizontal && vertical;
    }

    draw(context) {
        context.drawImage(this.img, this.x, this.y, this.largura, this.altura);
    }
}