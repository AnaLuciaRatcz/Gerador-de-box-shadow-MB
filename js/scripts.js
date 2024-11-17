class BoxShadowGenerator{
    constructor( //criar propriedades do objeto??
        horizontal, //argumentos que a gente recebe de cada instância
        horizontalRef,
        vertical,
        verticalRef, 
        blur,
        blurRef,
        spread, 
        spreadRef,
        previewBox,
        rule,
        webkitRule,
        mozRule
    ){
        this.horizontal =  horizontal; // o que a gente vai fazer com eles
        this.horizontalRef = horizontalRef;
        this.vertical = vertical;
        this.verticalRef = verticalRef; 
        this.blur = blur;
        this.blurRef = blurRef;
        this.spread = spread;
        this.spreadRef = spreadRef;
        this.previewBox = previewBox;
        this.rule = rule;
        this.webkitRule = webkitRule;
        this.mozRule = mozRule;
    }

    initialize(){ //preenche os valores da barra no quadrado ao lado
        this.horizontalRef.value = this.horizontal.value;
        this.verticalRef.value = this.vertical.value;
        this.spreadRef.value = this.spread.value;
        this.blurRef.value = this.blur.value;

        this.applyRule();
        this.showRule();
    }

    applyRule(){ //método para aplicar a regra acima
        this.previewBox.style.boxShadow = `${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px #000000`
        this.currentRule = this.previewBox.style.boxShadow;   //exibir a regra no quadro de baixo
    }

    showRule(){ //exibir a regra no quadro de baixo
        this.rule.innerText = this.currentRule;
        this.webkitRule.innerText = this.currentRule;
        this.mozRule.innerText = this.currentRule;  
    }

    updateValue(type, value){ //aplicou a alteração no quadrado amarelo
        switch(type){
            case "horizontal":
                this.horizontalRef.value = value;
                break;
            case "vertical":
                this.verticalRef.value = value;
                break;
            case "spread":
                this.spreadRef.value = value;
                break;
            case "blur":
                this.blurRef.value = value;
                break;
        }

        this.applyRule(); //aplica a alteração no quadrado amarelo
        this.showRule(); //aplica a alteração no quadro abaixo
    }
}

//Seleção de elementos
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

const boxShadow = new BoxShadowGenerator(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef, 
    blur,
    blurRef,
    spread, 
    spreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule
);

boxShadow.initialize();

//Eventos
horizontal.addEventListener("input", (e) =>{
    const value = e.target.value;

    boxShadow.updateValue("horizontal", value);
})

vertical.addEventListener("input", (e) =>{
    const value = e.target.value;

    boxShadow.updateValue("vertical", value);
})

spread.addEventListener("input", (e) =>{
    const value = e.target.value;

    boxShadow.updateValue("spread", value);
})

blur.addEventListener("input", (e) =>{
    const value = e.target.value;

    boxShadow.updateValue("blur", value);
})