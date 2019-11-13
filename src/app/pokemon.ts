export class Pokemon {
  id:number;
  url:string;
  next:string;
  previous:string;
  name:string;
  sprites:{
    front_default:string,
    front_shiny:string,
  }
  height: number;
  weight:number;
  stats:Array<Stats>;
}

export class Stats{
  base_stat:number;
  stat:{
    name:string,
  }
}