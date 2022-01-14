import { v4 as uuidv4 } from 'uuid';

class Item{

  constructor(text){
    this.id = uuidv4();
    this.text = text;
    this.begin = false;
    this.done = false;
    this.blocked = false;
    this.color = "black";
  }
}

export default Item;