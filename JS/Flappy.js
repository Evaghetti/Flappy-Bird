class Flappy {
    constructor(x, y, largura, altura, velocidadeVertical, alturaCanvas) {
        this.x = x;
        this.y = y;

        this.largura = largura;
        this.altura = altura;

        this.velocidadeVertical = velocidadeVertical;
        this.velocidadeQuedaMax = velocidadeVertical;
        
        this.img = new Image();
        this.img.src = "Imagens/flappy.png";
        this.alturaCanvas = alturaCanvas;

        this.vivo = true;
    }

    handleInput(tecla) {
        
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
        let cima = this.y <=0;
        let baixo = this.y + this.altura >= this.alturaCanvas;
        return (horizontal && vertical)  || (cima) || (baixo);
    }

    draw(context) {
        context.drawImage(this.img, this.x, this.y, this.largura, this.altura);
    }
}