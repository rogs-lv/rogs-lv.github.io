import { Component } from '@angular/core';
import { Imagen, Module, Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
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
    //this.onCreateAutomata();
    this.onCreateCotizadorWeb();
  }

  onCreateWMS() {
    const pro1 = new Project();
    pro1.titl = 'WMS (Warehouse Managment System)';
    pro1.desc = 'WMS is a web application accessible from Handheld/PDA devices or computers for inventory management.';
    
    const mod = new Module();
    mod.nameMod = 'Inventory';
    mod.addSubMod('Transfer');
    mod.addSubMod('Quality');
    mod.addSubMod('Inventory Count');
    mod.addSubMod('Transfer receipt');
    mod.addSubMod('Pallet transfer');
    const mod2 = new Module();
    mod2.nameMod = 'Sales';
    mod2.addSubMod('Shipments');
    mod2.addSubMod('Shipment validation (poka-yoke)');
    const mod3 = new Module();
    mod3.nameMod = 'Production';
    mod3.addSubMod('Shipment to production');
    mod3.addSubMod('Production validation');
    mod3.addSubMod('Production receipt');
    mod3.addSubMod('Waste shipment');
    mod3.addSubMod('Emission and Production Receipt');

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
    pro1.titl = 'Web Ordering';
    pro1.desc = 'It is a web application that allows the user to create orders to be integrated as a sales order in SAP B1.';
    const mod = new Module();
    mod.nameMod = 'Order Generation';
    const mod2 = new Module();
    mod2.nameMod = 'Consult orders';
    const mod3 = new Module();
    mod3.nameMod = 'Reprinting of documents';
    
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
    pro1.titl = 'Web CRM';
    pro1.desc = 'It is a web application that allows you to manage and track the relationship established with customers. It is based on SAP CRM B1';
    const mod = new Module();
    mod.nameMod = 'Opportunities';
    const mod2 = new Module();
    mod2.nameMod = 'Activities';
    const mod3 = new Module();
    mod3.nameMod = 'Quotations';
    const mod4 = new Module();
    mod4.nameMod = 'Orders';
    
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
    pro1.titl = 'CRM SalesCVM';
    pro1.desc = 'It is a web application in a new version with new functionality and new modules that allows to manage even better the documents providing follow-up to the relationship established with customers. It is based on SAP CRM B1';
    const mod1 = new Module();
    mod1.nameMod = 'Dashboard';
    const mod2 = new Module();
    mod2.nameMod = 'Business Partners';
    const mod3 = new Module();
    mod3.nameMod = 'Items';
    const mod4 = new Module();
    mod4.nameMod = 'Quotations';
    const mod5 = new Module();
    mod5.nameMod = 'Orders/Orders from Quotations';
    const mod6 = new Module();
    mod6.nameMod = 'CRM - Opportunities/Activities';
    const mod7 = new Module();
    mod7.nameMod = 'Reports';

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
    pro1.titl = 'PT Release';
    pro1.desc = 'PT Release is a web application cloning the add-on functionality in SAP that allows to generate Production Issues and Receipts.';
    const mod = new Module();
    mod.nameMod = 'Finished Product';
    
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
    pro1.titl = 'Travel Expenses';
    pro1.desc = 'It is a web application for smartphones that records the expenses made by the user.';
    const mod = new Module();
    mod.nameMod = 'Register';
    const mod2 = new Module();
    mod2.nameMod = 'Validations';
    
    pro1.addModule(mod);
    pro1.addModule(mod2);
    
    pro1.addImage(new Imagen('','assets/proyectos/Viaticos/1.jpg'));
    pro1.addImage(new Imagen('','assets/proyectos/Viaticos/2.jpg'));
    
    this.projects.push(pro1);
  }
  onCreateAPIRestPedidos() {
    const pro1 = new Project();
    pro1.titl = 'API Rest for order integration';
    pro1.desc = 'A REST API to generate documents (sales orders) in SAP B1';
    const mod = new Module();
    mod.nameMod = 'createOrder';
        
    pro1.addModule(mod);
    
    pro1.addImage(new Imagen('','assets/proyectos/APIRest/Zarza/Zarza1.png'));    
    
    this.projects.push(pro1);
  }
  onCreateSboPrice() {
    const pro1 = new Project();
    pro1.titl = 'SboPrice';
    pro1.desc = 'Web application for quote creation and price inquiry for sellers';
    const mod = new Module();
    mod.nameMod = 'Quotations';
    const mod2 = new Module();
    mod2.nameMod = 'Prices';
        
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
    pro1.titl = 'API Rest for information management';
    pro1.desc = 'A REST API for querying, creating and updating information in SAP B1';
    
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
    pro1.titl = 'Web Quotation';
    pro1.desc = 'It is a web application that allows to generate manufacturing orders, components (items) or sub-components, assigned to a project, activities and user control and access to each tab based on the profile.';
    const mod = new Module();
    mod.nameMod = 'General Information';
    const mod2 = new Module();
    mod2.nameMod = 'Check Manufacturing';
    const mod3 = new Module();
    mod3.nameMod = 'Activities';
    const mod4 = new Module();
    mod4.nameMod = 'Users';
        
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
