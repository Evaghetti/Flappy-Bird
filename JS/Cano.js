/**
 * Classe que representa os canos que vão ser desenhados
 */
class Cano {
    /**
     * 
     * @param {string} imagem 
     * @param {number} x 
     * @param {number} y 
     * @param {number} largura 
     * @param {number} altura 
     * @param {number} velocidadeHorizontal 
     */
    constructor(imagem, x, y, largura, altura, velocidadeHorizontal) {
        this.x = x;
        this.y = y;

        this.largura = largura;
        this.altura  = altura;

        this.img = new Image();
        this.img.src = imagem;

        this.velocidadeHorizontal = velocidadeHorizontal;
    }

    /**
     * Atualiza a posição horizontal do cano
     * @param {number} deltaTime 
     * @returns {number}
     */
    update(deltaTime) {
        this.x -= this.velocidadeHorizontal * deltaTime;
        return(this.x);
    }
    /**
     *  Desenha o a imagem do Flappy no canvas
     * @param {*} context 
     */
    draw(context) {
        context.drawImage(this.img, this.x, this.y, this.largura, this.altura);
    }
}