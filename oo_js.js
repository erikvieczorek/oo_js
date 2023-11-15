// Classe abstrata
function Veiculo(tipo) {
    this.tipo = tipo;
    this.obterInformacoes = function() {
        console.log(`É um veículo do tipo ${this.tipo}: marca: ${this.marca}; modelo: ${this.modelo}; ano: ${this.ano} (${this.cilindradas}cc); combustível: ${this.combustivel} `);
    }
}

// Classe herdeira - Automóvel
function Carro(tipo, marca, modelo, ano, cilindradas, combustivel) {
    Veiculo.call(this, tipo);

    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cilindradas = cilindradas;
    this.combustivel = combustivel;
}

// Classe herdeira - Motocicleta
function Moto(tipo, marca, modelo, ano, cilindradas, combustivel) {
    Veiculo.call(this, tipo);

    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cilindradas = cilindradas;
    this.combustivel = combustivel;
}

// Classe herdeira - Camionete
function Camionete(tipo, marca, modelo, ano, cilindradas, combustivel) {
    Veiculo.call(this, tipo);

    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cilindradas = cilindradas;
    this.combustivel = combustivel;
}

// Instâncias de objetos
const carro1 = new Carro("Automóvel", "Toyota", "Corolla", 2022, 2000, "Híbrido");
const carro2 = new Carro("Automóvel", "Ford", "Focus", 2014, 1600, "Flex");
const moto1 = new Moto("Motocicleta", "Yamaha", "Fazer", 2018, 250, "Gasolina");
const moto2 = new Moto("Motocicleta", "Honda", "Bis", 2010, 125, "Gasolina");
const camionete1 = new Camionete("Utilitário", "Ford", "Ranger", 2019, 3200, "Diesel");
const camionete2 = new Camionete("Utilitário", "Toyota", "Hilux", 2020, 2800, "Diesel");


//Obter informações console.log
carro1.obterInformacoes();
carro2.obterInformacoes();
moto1.obterInformacoes();
moto2.obterInformacoes();
camionete1.obterInformacoes();
camionete2.obterInformacoes();