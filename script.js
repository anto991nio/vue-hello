const app = new Vue(
    {
        el: '#root',
        data:{
            titolo: "Questa è la Vue-Hello",
            immagine: "",
            testoButton:"Clicca qui per visualizzare l'immagine"
        
        }
        ,methods:{
            miaFunzione:function(){
                
                if(!this.immagine){
                    this.immagine="1_nq9cdMxtdhQ0ZGL8OuSCUQ.jpg";
                    this.testoButton="Clicca qui per nascondere l'immagine";

                }else{
                    this.immagine="";
                    this.testoButton="Clicca qui per visualizzare l'immagine";
                }

                console.log("hai cliccato")
            }
        
    }
    })