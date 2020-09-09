class User{
    constructor(){}
    fn="sai";
    ln="ias";
    getFN(){
        return this.fn+this.ln;
    }
}
User user=new User();
console.log(user.getFN());