class Conta {
    constructor(saldo, senha) { 
        this.saldo = saldo;
        this.senha = senha;
    } 

    deposito(valor) { 
        if(this.senha === 1234){
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
        } else {
            console.log('Senha incorreta.');
        }
    }

    retirada(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Retirada de R$ ${valor} realizada com sucesso.`);
        } else {
            console.log('Saldo insuficiente.');
        }
    }
}

const cadastro = new Conta(10, 1234);
cadastro.deposito(20);
console.log(`Saldo atual: R$ ${cadastro.saldo}`);

const novoDep = new Conta(30, 1234);
novoDep.deposito(15);
console.log(`Saldo atual: R$ ${novoDep.saldo}`);

const novoDep2 = new Conta(20, 1555);
novoDep2.deposito(10);
console.log(`Saldo atual: R$ ${novoDep2.saldo}`);

const ret1 = new Conta(25, 1234);
ret1.retirada(8);
console.log(`Saldo atual: R$ ${ret1.saldo}`);