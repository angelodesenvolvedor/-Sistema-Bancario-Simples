const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let saldoConta = 2000.00;
const nomeTitular = "Mariane";

function verificarSaldo() {
  console.log(`Saldo da conta de ${nomeTitular}: R$${saldoConta.toFixed(2)}`);
}

function realizarDeposito(valor) {
  saldoConta += valor;
  console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso. Saldo total: R$${saldoConta.toFixed(2)}`);
}

function realizarSaque(valor) {
  if (valor <= saldoConta) {
    saldoConta -= valor;
    console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso. Saldo total: R$${saldoConta.toFixed(2)}`);
  } else {
    console.log("Saldo insuficiente. Saque não realizado.");
  }
}

function interagirComUsuario() {
  rl.question('Escolha uma opção (1 para verificar saldo, 2 para depósito, 3 para saque): ', (opcao) => {
    opcao = parseInt(opcao);

    if (opcao >= 1 && opcao <= 3) {
      if (opcao === 1) {
        verificarSaldo();
        rl.close();
      } else {
        rl.question('Digite o valor: ', (valor) => {
          valor = parseFloat(valor);

          if (!isNaN(valor)) {
            if (opcao === 2) {
              realizarDeposito(valor);
            } else {
              realizarSaque(valor);
            }
          } else {
            console.log("Valor inválido. Tente novamente.");
          }

          rl.close();
        });
      }
    } else {
      console.log("Opção inválida. Tente novamente.");
      rl.close();
    }
  });
}

// Iniciar interação com o usuário
interagirComUsuario();
