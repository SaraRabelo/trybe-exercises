let peça = "Bispo";

if (peça == "Rei") {
    console.log("O Rei pode se mover em qualquer direção, uma casa por vez.");
}
else if (peça== "Dama"){
    console.log("A Dama Pode mover-se em qualquer direção e quantas casas quiser, desde que estejam livres");
}
else if (peça == "Torre"){
    console.log("A Torre pode mover-se em linha reta, tanto na vertical quanto na horizntal, quantas casas quiser ");
}
else if (peça == "Bispo"){
    console.log("Bispo move-se ao longo da diagonal, não pode pular outras peças.");
}
else if (peça == "Cavalo"){
    console.log("Cavalo é a única peça que pode pular as outras, seu movimento é em L");
}
else if (peça == "Torre"){
    console.log("A Torre  movimenta-se pela vertical ou horizontal, mas não pode pulas outras peças");
}

