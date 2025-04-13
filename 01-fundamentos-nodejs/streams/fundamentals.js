import { Readable } from 'node:stream'

//stream de leitura
class OneToHundredStream extends Readable {
//  contar a partir de um
index = 1
//metodo obrigatorio de stream de leitura Readable
  _read() {
// ++ é o index mais outro numero ate 100
    const i = this.index++
setTimeout(()=> {

  if (i > 100) {
    this.push(null)
  } else {
    const buf = Buffer.from(String(i))

    this.push(buf)
  }
  //tempo de espera 1000 milissegundos
}, 1000)
  }
}
//tudo que for gerado nessa stream ler no terminal
new OneToHundredStream().pipe(process.stdout)