class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Linkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        let node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }
        else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    print(){
        if(this.isEmpty()){
            return "List is empty";
        }
        else{
            let arr=[];
            let temp=this.head;
            while(temp){
                arr.push(temp.value);
                temp=temp.next;
            }
            console.log(arr);
        }
        
    }
    append(value){
        let node=new Node(value);
        let temp=this.head;
        while(temp.next){
            temp=temp.next;

        }
        temp.next=node;
        this.size++;
        
    }
    pop(){
        let temp=this.head;
        while(temp.next.next){
            temp=temp.next;
        }
        temp.next=null;
        this.size--;
    }
    

}

const list=new Linkedlist();

list.prepend(1);
list.prepend(2);
list.prepend(3);
list.append(99);
list.print();
list.pop();
list.print()