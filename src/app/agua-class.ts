export class AguaClass {


            private id : number;
            private recurso : string;
            private consumoEnLitros: string;
            private tipo : string;
        
            constructor()
            {
                this._id = -1;
                this._recurso = "";
                this._consumoEnLitros = "";
                this._tipo = "1";
            }
        
        
            get id() : number
            {
                return this._id;
            }
        
            get recurso() : string
            {
                return this._recurso;
            }
        
            get consumoEnLitros() : string
            {
                return this._consumoEnLitros;
            }
        
            get tipo() : string
            {
                return this._tipo;
            }
        
            set id(nuevoID: number)
            {
                this._id;
            }
        
            set recurso(nuevorecurso: string)
            {
                this._recurso;
            }
        
            set consumoEnLitros(nuevoconsumoEnLitros : string)
            {
                this._consumoEnLitros;
            }
        
            set tipo(nuevoTIpo: string)
            {
                this._tipo;
            }
        
        
}
