class computador{
    constructor(id, marca = "hp", modelo, disponibilidade = true, precoPorHora = 20) {
      this.id = id
      this.marca = marca
      this.modelo = modelo
      this.disponibilidade = disponibilidade
      this.precoPorHora = precoPorHora
    }

    verDisponibilidade() {
      if(this.disponibilidade){
       return "Disponivel"
      }else {
        return "Indisponivel"
      }
    }

    alugar(tempohoras){
        if(this.disponibilidade){
            let valor = this.precoPorHora * tempohoras
            lanHouse.atualizarreceita(valor)
            this.disponibilidade = false
            return valor
        }else{
            return "O computador não esta disponivel"
        }
        
    }

    liberar(){
        this.disponibilidade = true
        return "computador liberado"
    }
}
class lanHouse{
  constructor(){
    this.lista = []
  }

  adicionarComputador(computador){
    for(let k = 0; k < this.lista.length; k++){
      if(this.lista[k].id === computador.id){
        return "Você não pode adicionar um novo computador, pois esse computador ja esta na lista"
      }
    }
    this.lista.push(computador)
    return "computador adicionado"
  }

  listarComputadores(){
      return this.lista
}

 static totalreceita = 0
 static atualizarreceita(valor){
    this.totalreceita += valor
  }

  static verreceita(){
    return `o total de receita é: ${this.totalreceita}`
  }
  

  alugarComputador(id, tempohoras){
    for(let i = 0; i < this.lista.length; i++){
      if(this.lista[i].id === id && this.lista[i].disponibilidade && tempohoras > 0){
        return `o computador foi alugado por: ${this.lista[i].alugar(tempohoras)}`
      }else{
      }
    }
    return "voce nao pode alugar este computador"
  }

  liberarComputador(id){
    for(let j = 0; j < this.lista.length; j++){
      if(this.lista[j].id === id){
       return this.lista[j].liberar()
      }
    }
    return "computador liberado"
  }
  
  resumo(){
    let computadoresDisponiveis = 0
    for (let i = 0; i < this.lista.length; i++){
        if(this.lista[i].disponibilidade){
            computadoresDisponiveis++
        }
    }
    console.log(`Total de computadores: ${this.lista.length}`)
    console.log(`Quantidade de computadores disponíveis: ${computadoresDisponiveis}`)
    console.log(`Receita total acumulada: ${lanHouse.totalreceita}`)
  }
}


function testeLanHouse(){
  let computador1 = new computador(1, "Acer", "Nitro")
  let computador2 = new computador(2, "Dell", "Inspiron")
  let lanHouse1 = new lanHouse()

  console.log(lanHouse1.adicionarComputador(computador1))
  console.log(lanHouse1.adicionarComputador(computador2))

  console.log(lanHouse1.listarComputadores())

  console.log(lanHouse1.alugarComputador(1, 5))
  console.log(lanHouse1.alugarComputador(2, 3))
  console.log(lanHouse1.liberarComputador(1))

  console.log(lanHouse1.alugarComputador(2, 2))

  console.log(lanHouse1.listarComputadores())

  console.log(lanHouse.verreceita())

  lanHouse1.resumo()
}

testeLanHouse()

