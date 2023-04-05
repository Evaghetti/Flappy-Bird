/**
 * Classe que representa o Flappy(o passarinho)
 */

class Flappy {



    /**
    *  Construtor da classe
    *  @param {number} x
    *  @param {number} y
    *  @param {number} altura
    *  @param {number} velocidadeVertical
    */
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

    /**
     * Controla a velocidade de queda do Flappy
     * @param {*} tecla 
     */
    handleInput(tecla) {
        if (tecla === " ")
            this.velocidadeVertical = -this.velocidadeQuedaMax;
    }

    /**
     *  Atualiza a velocidade vertical do flap
     * @param {number} deltaTime 
     */
    update(deltaTime) {
        this.y += this.velocidadeVertical * deltaTime;
        
        if (this.velocidadeVertical < this.velocidadeQuedaMax)
            this.velocidadeVertical += deltaTime * 350;
           
    }

    /**
     * Verifica se colidou com o cano
     * @param {*} cano 
     * @returns {boolean}
     */
    colidiuCom(cano) {
        let horizontal = this.x + this.largura >= cano.x && cano.x + cano.largura >= this.x;
        let vertical   = this.y + this.altura  >= cano.y && cano.y + cano.altura  >= this.y;
        return horizontal && vertical;
    }

    /**
     *  Desenha o a imagem do Flappy no canvas
     * @param {*} context 
     */
    draw(context) {
        context.drawImage(this.img, this.x, this.y, this.largura, this.altura);
    }
}