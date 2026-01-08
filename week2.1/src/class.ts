// creating a class

class rectangle{

   constructor(public width : number , public height : number , public color : string){}
   area():number{
    return this.width * this.height
   }
   paint() {
    return `painting with color ${this.color}`
   }

}

const ract = new rectangle(4,5,'red')

console.log(ract.color)

console.log(ract)