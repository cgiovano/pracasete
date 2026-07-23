/**
 * Gerenciamento de Visibilidade dos Cards de Investimento
 * Praça Sete
 */

document.addEventListener("DOMContentLoaded", () => {
    atualizarStatusCards();
});

function atualizarStatusCards() {
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth(); // 0 = Janeiro, 6 = Julho
    const ano = hoje.getFullYear();

    // Elementos dos Cards
    const cardPreVenda = document.getElementById("card-promocao-reserva");
    const cardPublicoGeral = document.getElementById("card-inscricao-publico-geral");
    const cardEstudante = document.getElementById("card-inscricao-publico-estudante");
    const tempoAvisoReserva = document.getElementById("tempo-aviso-reserva");
    const anoCopy = document.getElementById("ano-copy");
    anoCopy.textContent = ano.toString();

    // Se os elementos não existirem na página, interrompe para evitar erros
    if (!cardPreVenda || !cardPublicoGeral || !cardEstudante) return;

    // Verificação dos Períodos
    const isMesValido = (mes === 0 || mes === 6); // Janeiro (0) ou Julho (6)
    
    const isPeriodoPreVenda = isMesValido && (dia >= 1 && dia <= 20);
    const isPeriodoInscricao = isMesValido && (dia >= 21 && dia <= 30);

    // Controle do Card de Pré-venda
    if (isPeriodoPreVenda) {
        cardPreVenda.classList.remove("disabled");
        // Atualiza o aviso de tempo restante para a pré-venda
        const diasRestantes = 20 - dia;

        if(diasRestantes == 0) {
            tempoAvisoReserva.textContent = `A reserva termina hoje!`;
        } else {
            tempoAvisoReserva.textContent = `A reserva termina em ${diasRestantes} dia(s).`;
        }
    } else {
        cardPreVenda.classList.add("disabled");
        tempoAvisoReserva.textContent = `A promoção não está mais disponível.`; // Limpa o aviso se não estiver no período de pré-venda
    }

    // Controle dos Cards de Inscrição (Público Geral e Estudante)
    if (isPeriodoInscricao) {
        cardPublicoGeral.classList.remove("disabled");
        cardEstudante.classList.remove("disabled");
    } else {
        cardPublicoGeral.classList.add("disabled");
        cardEstudante.classList.add("disabled");
    }
}