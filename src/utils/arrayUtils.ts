import clone from 'rfdc'


export const arrayUtils={
    IndexOfId: function<T extends {id:number|string},> (data: T[],  value:any): number{ //        
        for(let i=0; i<data.length; i++){
            if(data[i].id === value){
                return i
            }
        }
        return -1
    },
    arrayClone: function <T>(items:T):T{
        return clone()(items)
    } 
}