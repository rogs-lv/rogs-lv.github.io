export class Project {
    private title: string = '';
    private descript: string = '';
    private modulos: Array<Module>;
    private images: Array<Imagen>;
    
    get titl(): string {
        return this.title;
    }
    set titl(value: string) {
        this.title = value;
    }

    get desc(): string {
        return this.descript;
    }
    set desc(value: string) {
        this.descript = value;
    }

    constructor() {
        this.modulos = [];
        this.images = [];
    }
    addModule(value: Module): void {
        this.modulos.push(value);
    }

    getModulos() : Array<Module> {
        return this.modulos;
    }
    
    addImage(value: Imagen) : void {
        this.images.push(value);
    }
    getImages() : Array<Imagen> {
        return this.images;
    }
};

export class Module {
    private NameModule: string = '';
    private SubModule: Array<SubModule>;
    
    get nameMod(): string {
        return this.NameModule;
    }
    set nameMod(value: string) {
        this.NameModule = value;
    }

    constructor() {
        this.SubModule = [];
    }

    addSubMod(value: string) : void {
        this.SubModule.push({ NameSubModule: value });
    }

    getSubModule() : Array<SubModule> {
        return this.SubModule;
    }
}

export class SubModule {
    NameSubModule: string = '';
}

export class Imagen {
    private _width: string;
    private _src: string;
    get width(): string {
        return this._width;
    }
    set width(value: string) {
        this._width = value;
    }
    get src(): string {
        return this._src;
    }
    set src(value: string) {
        this._src = value;
    }
    constructor(wth: string, sr: string) {
        this._src = sr;
        this._width = wth;
    }
}