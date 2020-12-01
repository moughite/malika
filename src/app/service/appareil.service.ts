export class AppareilService{
    appareils=[
        {
          id:1,
          name:'television',
          status:'eteint'
        },
        {
          id:2,
          name:'ordinateur',
          status:'allumer'
        },
        {
          id:3,
          name:'machine alaver',
          status:'eteint'
        }
      ];

      getAppareilById(index:number){
          const appareil=this.appareils.find(
         (appareilObject)=>{
        return appareilObject.id===index;}
          );
          return appareil;
      }
   

      swithcOnAll(){
          for(let appareil of this.appareils)
          {
              appareil.status='allumer';
          }
      }

      switchOffAll(){
          for(let appareil of this.appareils){
              appareil.status='eteint';
          }
      }

      switchOnOne(index:number){
          this.appareils[index].status='allumer';
      }

      switchOnOff(index:number){
          this.appareils[index].status='eteint';
      }

    
}