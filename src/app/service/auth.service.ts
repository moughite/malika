import { resolve } from 'url';

export class AuthService{
    isAuth=false;

    signOut(){
        this.isAuth=false;
    }

    signIn(){
        return new Promise(
            (resolve,reject)=>{
                setTimeout(() => {
                    this.isAuth=true;
                    resolve(true);

                }, 1000);
            }
        );

    }

}