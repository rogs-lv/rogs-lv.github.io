import { Component, OnInit } from '@angular/core';
import { Imagen, Module, Project, SubModule } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project>;

  constructor() {
    this.projects = new Array<Project>();
  }

  ngOnInit() {
    this.onCreateWMS();
    this.onCreatePedidosWeb();
    this.onCreateCRMWebEviciti();
    this.onCreateCRMWebCVMSales();
    this.onCreatePT();
    this.onCreateViaticos();
    this.onCreateAPIRestPedidos();
    this.onCreateSboPrice();
    this.onCreateAPIRestInfo();
    this.onCreateAutomata();
    this.onCreateCotizadorWeb();
  }

  onCreateWMS() {
    const pro1 = new Project();
    pro1.titl = 'WMS (Warehouse Managment System)';
    pro1.desc = 'WMS es una aplicación web accesible desde dispositivos Handheld/PDA u ordenadores para gestion de inventarios';
    
    const mod = new Module();
    mod.nameMod = 'Inventario';
    mod.addSubMod('Traspaso');
    mod.addSubMod('Calidad');
    mod.addSubMod('Recuento de Inventario');
    mod.addSubMod('Recibo de traspaso');
    mod.addSubMod('Traspaleo');
    const mod2 = new Module();
    mod2.nameMod = 'Ventas';
    mod2.addSubMod('Remision/Embarque');
    mod2.addSubMod('Validaciónde embarque (poka-yoke)');
    const mod3 = new Module();
    mod3.nameMod = 'Producción';
    mod3.addSubMod('Envio a producción');
    mod3.addSubMod('Validación de producción');
    mod3.addSubMod('Recibo de producción');
    mod3.addSubMod('Envío de Scrap');
    mod3.addSubMod('Emision y Recibo de Producción');

    pro1.addModule(mod);
    pro1.addModule(mod2);
    pro1.addModule(mod3);

    pro1.addImage(new Imagen('','assets/proyectos/WMS/Interiberica/WMSII0.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Interiberica/WMSII1.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Interiberica/WMSII2.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/La Josefina/WMSJF0.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/La Josefina/WMSJF1.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/La Josefina/WMSJF2.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/La Josefina/WMSJF3.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/La Josefina/WMSJF4.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/La Josefina/WMSJF5.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Mosaicos/WMSMs0.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Mosaicos/WMSMs1.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Mosaicos/WMSMs2.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Pintumex/WMSPt.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Pintumex/WMSPt1.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Pintumex/WMSPt2.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx0.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx1.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx2.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx3.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx4.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx5.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx6.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx6.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx7.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx8.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx9.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx10.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx11.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/WMS/Quirmex/WMSqx12.jpg'));
    this.projects.push(pro1);
  }
  onCreatePedidosWeb() {
    const pro1 = new Project();
    pro1.titl = 'Pedidos Web';
    pro1.desc = 'Es un aplicación web que permite al usuario crear pedidos para ser integrados como una orden de venta en SAP B1';
    const mod = new Module();
    mod.nameMod = 'Generación Pedidos';
    const mod2 = new Module();
    mod2.nameMod = 'Consulta Pedidos';
    const mod3 = new Module();
    mod3.nameMod = 'Reimpresion de Documentos';
    
    pro1.addModule(mod);
    pro1.addModule(mod2);
    pro1.addModule(mod3);
    
    pro1.addImage(new Imagen('','assets/proyectos/PedidosWeb/Pedidos0.png'));
    pro1.addImage(new Imagen('','assets/proyectos/PedidosWeb/Pedidos1.png'));
    pro1.addImage(new Imagen('','assets/proyectos/PedidosWeb/Pedidos3.png'));
    pro1.addImage(new Imagen('','assets/proyectos/PedidosWeb/Pedidos4.png'));
    pro1.addImage(new Imagen('','assets/proyectos/PedidosWeb/Pedidos5.png'));
    pro1.addImage(new Imagen('','assets/proyectos/PedidosWeb/Pedidos6.png'));
    pro1.addImage(new Imagen('','assets/proyectos/PedidosWeb/Pedidos7.png'));
    pro1.addImage(new Imagen('','assets/proyectos/PedidosWeb/Pedidos8.png'));
    this.projects.push(pro1);
  }
  onCreateCRMWebEviciti() {
    const pro1 = new Project();
    pro1.titl = 'CRM Web';
    pro1.desc = 'Es una aplicación web que permite gestionar y dar seguimiento a la relacion establecida con los clientes. Esta basado en el CRM de SAP B1';
    const mod = new Module();
    mod.nameMod = 'Oportunidades';
    const mod2 = new Module();
    mod2.nameMod = 'Actividades';
    const mod3 = new Module();
    mod3.nameMod = 'Cotizaciones';
    const mod4 = new Module();
    mod4.nameMod = 'Pedidos';
    
    pro1.addModule(mod);
    pro1.addModule(mod2);
    pro1.addModule(mod3);
    pro1.addModule(mod4);
    
    pro1.addImage(new Imagen('','assets/proyectos/CRM/Eviciti/CRM0.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/Eviciti/CRM1.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/Eviciti/CRM2.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/Eviciti/CRM3.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/Eviciti/CRM31.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/Eviciti/CRM32.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/Eviciti/CRM33.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/Eviciti/CRM34.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/Eviciti/CRM35.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/Eviciti/CRM4.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/Eviciti/CRM5.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/Eviciti/CRM6.png'));
    this.projects.push(pro1);
  }
  onCreateCRMWebCVMSales() {
    const pro1 = new Project();
    pro1.titl = 'CRM Web SalesCVM';
    pro1.desc = 'Es una aplicación web en una nueva versión con nueva funcionalidad y nuevos módulos que permite gestionar aun mejor los documentos proporcionando seguimiento a la relacion establecida con los clientes. Esta basado en el CRM de SAP B1';
    const mod1 = new Module();
    mod1.nameMod = 'Dashboard';
    const mod2 = new Module();
    mod2.nameMod = 'Socios de Negocios';
    const mod3 = new Module();
    mod3.nameMod = 'Artículos';
    const mod4 = new Module();
    mod4.nameMod = 'Cotizaciones';
    const mod5 = new Module();
    mod5.nameMod = 'Pedidos/Pedidos desde Cotizaciones';
    const mod6 = new Module();
    mod6.nameMod = 'CRM - Oportunidades/Actividades';
    const mod7 = new Module();
    mod7.nameMod = 'Reportes';

    pro1.addModule(mod1);
    pro1.addModule(mod2);
    pro1.addModule(mod3);
    pro1.addModule(mod4);
    pro1.addModule(mod5);
    pro1.addModule(mod6);
    pro1.addModule(mod7);
    
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM0.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM2.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM3.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM4.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM5.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM6.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM7.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM8.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM9.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM10.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM12.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM13.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM14.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM15.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM16.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM17.png'));
    pro1.addImage(new Imagen('','assets/proyectos/CRM/CVMSales/SalesCVM18.png'));
    this.projects.push(pro1);
  }
  onCreatePT() {
    const pro1 = new Project();
    pro1.titl = 'Liberación de PT';
    pro1.desc = 'Liberación de PT es una aplicación web clonando la funcionalidad de add-on en SAP que permite generar Emisiones y Recibos de Producción';
    const mod = new Module();
    mod.nameMod = 'Producto Terminado';
    
    pro1.addModule(mod);
    
    pro1.addImage(new Imagen('','assets/proyectos/LiberacionPT/Acceso.png'));
    pro1.addImage(new Imagen('','assets/proyectos/LiberacionPT/LiberacionPT01.png'));
    pro1.addImage(new Imagen('','assets/proyectos/LiberacionPT/LiberacionPT0.png'));
    pro1.addImage(new Imagen('','assets/proyectos/LiberacionPT/LiberacionPT1.png'));
    pro1.addImage(new Imagen('','assets/proyectos/LiberacionPT/LiberacionPT3.png'));
    pro1.addImage(new Imagen('','assets/proyectos/LiberacionPT/LiberacionPT4.png'));
    
    this.projects.push(pro1);
  }
  onCreateViaticos() {
    const pro1 = new Project();
    pro1.titl = 'Viaticos';
    pro1.desc = 'Es una aplicación web para smartphone que registra los gastos hechos por el usuario';
    const mod = new Module();
    mod.nameMod = 'Registro';
    const mod2 = new Module();
    mod2.nameMod = 'Comprobaciones';
    
    pro1.addModule(mod);
    pro1.addModule(mod2);
    
    pro1.addImage(new Imagen('','assets/proyectos/Viaticos/1.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/Viaticos/2.jpg'));
    
    this.projects.push(pro1);
  }
  onCreateAPIRestPedidos() {
    const pro1 = new Project();
    pro1.titl = 'API Rest para integración de pedidos';
    pro1.desc = 'Una API REST para generar documentos (ordenes de venta) en SAP B1';
    const mod = new Module();
    mod.nameMod = 'crearOrden';
        
    pro1.addModule(mod);
    
    pro1.addImage(new Imagen('','assets/proyectos/APIRest/Zarza/Zarza1.png'));    
    
    this.projects.push(pro1);
  }
  onCreateSboPrice() {
    const pro1 = new Project();
    pro1.titl = 'SboPrice';
    pro1.desc = 'Aplicación Web para creación de cotizaciones y consulta de precios para vendedores';
    const mod = new Module();
    mod.nameMod = 'Cotizaciones';
    const mod2 = new Module();
    mod2.nameMod = 'Precios';
        
    pro1.addModule(mod);
    pro1.addModule(mod2);
    
    pro1.addImage(new Imagen('','assets/proyectos/SboPrice/Sbo0.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/SboPrice/Sbo1.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/SboPrice/Sbo2.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/SboPrice/Sbo3.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/SboPrice/Sbo4.jpg'));
    
    this.projects.push(pro1);
  }
  onCreateAPIRestInfo() {
    const pro1 = new Project();
    pro1.titl = 'API Rest para gestion de información';
    pro1.desc = 'Una API REST para consulta, creacióm y actualización de información en SAP B1';
    
    const mod = new Module();
    const mod2 = new Module();
    const mod3 = new Module();
    const mod4 = new Module();
    const mod5 = new Module();
    const mod6 = new Module();
    const mod7 = new Module();
    const mod8 = new Module();
    const mod9 = new Module();
    const mod10 = new Module();
    const mod11 = new Module();
    const mod12 = new Module();
    mod.nameMod = 'conexionping';
    mod2.nameMod = 'getarticulo';
    mod3.nameMod = 'getcliente';
    mod4.nameMod = 'getcfdi';
    mod5.nameMod = 'getusocfdi';
    mod6.nameMod = 'getmetododepagosocio';
    mod7.nameMod = 'getmetododepagofactura';
    mod8.nameMod = 'getalmacen';
    mod9.nameMod = 'altacliente';
    mod10.nameMod = 'timbrarfactura';
    mod11.nameMod = 'actualizacliente';
    mod12.nameMod = 'cancelafactura';
    
    pro1.addModule(mod);
    pro1.addModule(mod2);
    pro1.addModule(mod3);
    pro1.addModule(mod4);
    pro1.addModule(mod5);
    pro1.addModule(mod6);
    pro1.addModule(mod7);
    pro1.addModule(mod8);
    pro1.addModule(mod9);
    pro1.addModule(mod10);
    pro1.addModule(mod11);
    pro1.addModule(mod12);

    pro1.addImage(new Imagen('','assets/proyectos/APIRest/Horkest/API01.png'));
    pro1.addImage(new Imagen('','assets/proyectos/APIRest/Horkest/API02.png'));
    pro1.addImage(new Imagen('','assets/proyectos/APIRest/Horkest/API03.png'));
    pro1.addImage(new Imagen('','assets/proyectos/APIRest/Horkest/API04.png'));

    this.projects.push(pro1);
  }
  onCreateAutomata() {
    const pro1 = new Project();
    pro1.titl = 'Automata';
    pro1.desc = 'Es una aplicación de escritorio para poder recolectar información en sitios como Twitter, Facebook, Google, Bing, Blogs, Portales de noticias, entre otros. Nota: Aportación realizada en el modulo de twitter';
    const mod = new Module();
    mod.nameMod = 'Twitter';
    const mod2 = new Module();
    mod2.nameMod = 'Facebook';
    const mod3 = new Module();
    mod3.nameMod = 'Google';
    const mod4 = new Module();
    mod4.nameMod = 'Bing';
    const mod5 = new Module();
    mod5.nameMod = 'Varios/Generico';
        
    pro1.addModule(mod);
    pro1.addModule(mod2);
    pro1.addModule(mod3);
    pro1.addModule(mod4);
    pro1.addModule(mod5);    
    
    pro1.addImage(new Imagen('','assets/proyectos/Automata/Automata1.png'));
    pro1.addImage(new Imagen('','assets/proyectos/Automata/Automata2.png'));
    pro1.addImage(new Imagen('','assets/proyectos/Automata/Automata3.png'));
    pro1.addImage(new Imagen('','assets/proyectos/Automata/Automata4.png'));
    
    this.projects.push(pro1);
  }
  onCreateCotizadorWeb(){
    const pro1 = new Project();
    pro1.titl = 'Cotizador Web';
    pro1.desc = ' Es una aplicación web que permite generar ordenes de fabricación, componenes (artículos) o sub componetes, asígnados a un proyecto, actividades y control de usuario y el acceso a cada pestaña basado en el perfil. ';
    const mod = new Module();
    mod.nameMod = 'Datos Generales';
    const mod2 = new Module();
    mod2.nameMod = 'Check Fabricación';
    const mod3 = new Module();
    mod3.nameMod = 'Actividades';
    const mod4 = new Module();
    mod4.nameMod = 'Usuarios';
        
    pro1.addModule(mod);
    pro1.addModule(mod2);
    pro1.addModule(mod3);
    pro1.addModule(mod4);  
    
    pro1.addImage(new Imagen('','assets/proyectos/CotizadorWeb/Cotizador0.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/CotizadorWeb/Cotizador1.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/CotizadorWeb/Cotizador2.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/CotizadorWeb/Cotizador3.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/CotizadorWeb/Cotizador4.jpg'));
    
    this.projects.push(pro1);
  }
}
