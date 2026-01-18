function calcular() {
// 1. Criamos as referências para os "BALDES" (Elementos HTML)
    // Precisamos deles para poder usar .disabled e .value no final
    //aqui recebe os valores inseridos
    const elPallet = document.getElementById("pallet");
    const elBobina = document.getElementById("bobina");
    const elRomaneio = document.getElementById("palletromaneio");
    const elPalletNF = document.getElementById("palletnf");
    const elResultado = document.getElementById("resultado");

  // 2. Extraímos a "ÁGUA" (Valores numéricos) para o cálculo
    const brutopallet = Number(document.getElementById("pallet").value)
    const brutobobina = Number(document.getElementById("bobina").value)
    const qntpalletromaneio = Number(document.getElementById("palletromaneio").value)
    const palletreal = Number(document.getElementById("palletnf").value)

   

if(brutopallet > brutobobina) {
    // DESBLOQUEIA os inputs usando o ELEMENTO (balde)
    qntpalletromaneio.disabled = false;
    palletreal.disabled = false;

        elRomaneio.style.backgroundColor = "#ffffff"

    // calculo1
    const undpallet= (brutopallet - brutobobina) / qntpalletromaneio;
    // calculo2
    const total= (undpallet * palletreal) + brutobobina;
    
    //exibe na tela
    document.getElementById("resultado").value = total.toFixed(2);





    
    
    
}
else {
   qntpalletromaneio.disabled = true;
    palletreal.disabled = true;

    
    alert("Bruto pallet menor ou igual que bruto bobina");
    
    
   // LIMPA os campos usando o ELEMENTO (balde)
        elBobina.value = "";
        elRomaneio.value = "";
        elPalletNF.value = "";
        elResultado.value = "";
    document.getElementById("resultado").value = " ";
    

}
}
