
let postposition = ['Сантехнік', 'Стоматолог', 'Священник', 'КоДЄР))0)']
class Employee {
    constructor(firstName, lastName, phoneNum, position, StartWorkInTheCompany, EndWorkInTheCompany) {
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNum = phoneNum
        this.position = position
        this.StartWorkInTheCompany = StartWorkInTheCompany
        this.EndWorkInTheCompany = EndWorkInTheCompany
        this.postposition = ['Сантехнік', 'Стоматолог', 'Священник', 'КоДЄР))0)']
        this.position = this.look(postposition, this.position)
    }
    look (arr, temp) {
        console.log(arr.lenght)
        for(let i = 0; i<=arr.lenght-1; i++){
            console.log(arr.lenght)
            if(this.position === arr[i]){
                return arr[i]
                break;
            }else{
                return 'Нема'
            }
        }
    }

}

let employee = new Employee('Alex', 'Antonow', 7823064236 , 'Стоматолог', 2002 , 2022)
employee.position = 'Стоматолог'
console.log(employee)








/*
class Employee1 extends Employee {
    constructor(firstName, lastName, phoneNum, position, workInTheCompany){
        super(firstName, lastName, phoneNum, position, workInTheCompany);

    }
}



 look (arr, temp) {
        console.log(arr.lenght)
        for(let i = 0; i<=arr.lenght-1; i++){
            console.log(arr.lenght)
            if(this.position === arr[i]){
                return arr[i]
            }else{
                return 'Нема'
            }
        }
    }



     for(let i = 0; i<=this.postposition -1; i++){
                console.log([i])
                if(value === this.postposition[i]){
                    this._position = this.postposition[i]
                }else{
                    this._position = -1
                }
            }
        }





            set position(value){
        let postposition = ['Сантехнік', 'Стоматолог', 'Священник', 'КоДЄР))0)']
            for(const i of postposition){
                console.log(i)
                console.log(value)
                console.log('fff')
                if(value === i){
                    this._position = i
                    break;
                }else{
                    this._position = -1
                }
            }
        }
    
    get position(){
        return this._position
    }

}
*/

