import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    // Catalog Products (MSI Business/Productivity Series)
    products: [
      { 
        id: 1, 
        name: 'MSI Modern 14 Ryzen 5 7430U', 
        image: 'https://m.media-amazon.com/images/I/61wVYFtzQXL._AC_UL320_.jpg', 
        rating: 5, 
        reviews: 12, 
        onSale: true, 
        oldPrice: 15999.00,
        price: 12998.52,
        description: 'Laptop Thin & Light Modern 14 con procesador AMD Ryzen 5 7430U, gráficos Radeon, 8GB RAM y 512GB SSD. Pantalla de 14" FHD 60Hz. Ideal para productividad en movimiento.',
        specs: [{ label: 'CPU', value: 'Ryzen 5 7430U' }, { label: 'RAM', value: '8GB' }, { label: 'SSD', value: '512GB' }]
      },
      { 
        id: 2, 
        name: 'MSI Modern 15 B13M Intel i7', 
        image: 'https://m.media-amazon.com/images/I/71OUk-KvNOL._AC_UL320_.jpg', 
        rating: 4, 
        reviews: 8, 
        onSale: false,
        price: 16209.00,
        description: 'Potencia tu día a día con la MSI Modern 15 B13M. Equipada con Intel Core i7-1355U, 8GB RAM y 512GB SSD. Pantalla 15.6" FHD y Windows 11 Pro para profesionales.',
        specs: [{ label: 'CPU', value: 'i7-1355U' }, { label: 'RAM', value: '8GB' }, { label: 'SSD', value: '512GB' }]
      },
      { 
        id: 3, 
        name: 'MSI Modern 14 Ryzen 7 7730U', 
        image: 'https://m.media-amazon.com/images/I/61wVYFtzQXL._AC_UL320_.jpg', 
        rating: 5, 
        reviews: 24, 
        onSale: false, 
        price: 14999.00,
        description: 'Rendimiento superior con Ryzen 7 7730U. Esta MSI Modern 14 ofrece 16GB de RAM y 512GB SSD en un chasis ultraligero. Perfecta para multitarea intensiva.',
        specs: [{ label: 'CPU', value: 'Ryzen 7 7730U' }, { label: 'RAM', value: '16GB' }, { label: 'SSD', value: '512GB' }]
      },
      { 
        id: 4, 
        name: 'MSI Modern 15 F1MG Intel Ultra 7', 
        image: 'https://m.media-amazon.com/images/I/71I95gq-GmL._AC_UL320_.jpg', 
        rating: 5, 
        reviews: 5, 
        onSale: true, 
        oldPrice: 18999.00,
        price: 15922.00,
        description: 'La nueva era de la IA con Intel Core Ultra 7 150U. 16GB RAM, 512GB SSD y Windows 11 Pro. Incluye mouse de regalo. Diseño elegante y rendimiento avanzado.',
        specs: [{ label: 'CPU', value: 'Ultra 7 150U' }, { label: 'RAM', value: '16GB' }, { label: 'SSD', value: '512GB' }]
      },
    ],

    // New Products (Peripherals & Components)
    newProducts: [
      { id: 101, name: 'Monitor MSI MAG 346CQ Curvo', price: 6371.00, rating: 5, image: 'https://m.media-amazon.com/images/I/71ZEG6kmJgL._AC_UL320_.jpg', onSale: false, specs: [{label: 'Refresco', value: '180Hz'}, {label: 'Tamaño', value: '34" UWQHD'}] },
      { id: 102, name: 'Monitor MSI MAG 32C6X FHD', price: 4499.00, rating: 5, image: 'https://m.media-amazon.com/images/I/51x4QccGoZL._AC_UL320_.jpg', onSale: true, oldPrice: 5200.00, specs: [{label: 'Refresco', value: '250Hz'}, {label: 'Tamaño', value: '31.5"'}] },
      { id: 103, name: 'Kit Teclado y Mouse MSI Forge GK110', price: 1147.00, rating: 4, image: 'https://m.media-amazon.com/images/I/71NxxnpwwhL._AC_UL320_.jpg', onSale: false, specs: [{label: 'Tipo', value: 'Combo RGB'}, {label: 'Sensor', value: '12800 DPI'}] },
      { id: 104, name: 'Kit Inalámbrico MSI Forge K210 W', price: 653.00, rating: 4, image: 'https://m.media-amazon.com/images/I/71+5ybin9QL._AC_UL320_.jpg', onSale: false, specs: [{label: 'Conexión', value: '2.4 GHz'}, {label: 'Batería', value: 'Recargable'}] },
      { id: 105, name: 'MSI GeForce RTX 3080 Gaming Z', price: 21999.00, rating: 5, image: 'https://asset.msi.com/resize/image/global/product/product_16233075677c3857e3240742187f549079555c1753.png/1024.png', onSale: false, specs: [{label: 'VRAM', value: '10GB'}, {label: 'Vent.', value: 'Tri Frozr'}] },
      { id: 106, name: 'MSI MAG CoreLiquid 360R V2', price: 3499.00, rating: 5, image: 'https://asset.msi.com/resize/image/global/product/product_1629858349071077755100067a84000302b1c20677.png/1024.png', onSale: false, specs: [{label: 'Tamaño', value: '360mm'}, {label: 'RGB', value: 'ARGB'}] },
    ],

    // Custom Builds (Desktops)
    customBuilds: [
      { id: 201, name: 'MSI MEG Aegis Ti5 11TE-087', price: 94999.00, image: 'https://asset.msi.com/resize/image/global/product/product_16328965638531ecb3db8154699505704192b429d5.png/1024.png', specs: [{label: 'CPU', value: 'i9-11900K'}, {label: 'GPU', value: 'RTX 3080'}] },
      { id: 202, name: 'MSI MEG Trident X 11TE-1632', price: 74599.00, image: 'https://asset.msi.com/resize/image/global/product/product_1620717208d2b903e1c667634f10738d82136e4312.png/1024.png', specs: [{label: 'CPU', value: 'i7-11700K'}, {label: 'GPU', value: 'RTX 3080'}] },
      { id: 203, name: 'MSI Infinite RS 11th', price: 45999.00, image: 'https://asset.msi.com/resize/image/global/product/product_16196726913c7a23363412574e4026367756f1dc7d.png/1024.png', specs: [{label: 'CPU', value: 'i7-11700KF'}, {label: 'GPU', value: 'RTX 3070'}] },
      { id: 204, name: 'MSI MPG Trident AS 11TC-063', price: 32490.00, image: 'https://asset.msi.com/resize/image/global/product/product_162607598835f15bd676356616016149265f6c8d76.png/1024.png', specs: [{label: 'CPU', value: 'i7-11700F'}, {label: 'GPU', value: 'RTX 3060'}] },
      { id: 205, name: 'MSI Codex R 11TC-053US', price: 24899.00, image: 'https://asset.msi.com/resize/image/global/product/product_162684812693899532e8c2ec68677c7c345330a846.png/1024.png', specs: [{label: 'CPU', value: 'i5-11400F'}, {label: 'GPU', value: 'RTX 3060'}] },
      { id: 206, name: 'MSI MAG Infinite S3 11th', price: 21990.00, image: 'https://asset.msi.com/resize/image/global/product/product_1629858349071077755100067a84000302b1c20677.png/1024.png', specs: [{label: 'CPU', value: 'i5-11400'}, {label: 'GPU', value: 'GTX 1660S'}] },
      { id: 207, name: 'MSI Creator P100X 11TD-652', price: 48999.00, image: 'https://asset.msi.com/resize/image/global/product/product_1623136465437877299a91090019277c0717478056.png/1024.png', specs: [{label: 'Uso', value: 'Productividad'}, {label: 'CPU', value: 'i7-11700K'}] },
      { id: 208, name: 'MSI PRO DP21 11MA-095US', price: 12499.00, image: 'https://asset.msi.com/resize/image/global/product/product_1638327989938096fa476228394626154562095815.png/1024.png', specs: [{label: 'Tipo', value: 'Mini PC'}, {label: 'CPU', value: 'i5-11400'}] },
      { id: 209, name: 'MSI Cubi 5 10M-066US', price: 8990.00, image: 'https://asset.msi.com/resize/image/global/product/product_1574235887259f9720760418c32504997621932338.png/1024.png', specs: [{label: 'Tamaño', value: '0.66L'}, {label: 'CPU', value: 'i3-10110U'}] },
      { id: 210, name: 'MSI MEG Aegis Ti5 12th Gen', price: 109999.00, image: 'https://asset.msi.com/resize/image/global/product/product_1642491515594034267425121b6452145325515320.png/1024.png', specs: [{label: 'Nuevo', value: '12ª Gen'}, {label: 'GPU', value: 'RTX 3090'}] },
    ],

    // Gaming Laptops
    laptops: [
      { id: 301, name: 'MSI Katana GF66 12UC-247MX', price: 31985.25, image: 'https://m.media-amazon.com/images/I/71yxQ9XaIwL._AC_UL320_.jpg', rating: 5, specs: [{label: 'CPU', value: 'i5-12500H'}, {label: 'GPU', value: 'RTX 3050'}] },
      { id: 302, name: 'MSI Katana GF66 12UD-243MX', price: 31986.51, image: 'https://m.media-amazon.com/images/I/71IkajkijtL._AC_UL320_.jpg', rating: 5, specs: [{label: 'CPU', value: 'i5-12500H'}, {label: 'GPU', value: 'RTX 3050 Ti'}] },
      { id: 303, name: 'MSI Katana GF66 11UD-408MX', price: 29113.84, image: 'https://m.media-amazon.com/images/I/71js+FUlJRL._AC_UL320_.jpg', rating: 4, specs: [{label: 'Estado', value: 'Reacond.'}, {label: 'GPU', value: 'RTX 3050 Ti'}] },
      { id: 304, name: 'MSI Katana GF76 11UG-248MX', price: 46434.37, image: 'https://m.media-amazon.com/images/I/712sVd-12MS._AC_UL320_.jpg', rating: 4, specs: [{label: 'Estado', value: 'Reacond.'}, {label: 'GPU', value: 'RTX 3070'}] },
      { id: 305, name: 'MSI Titan GT77 12UHS', price: 114400.00, image: 'https://asset.msi.com/resize/image/global/product/product_1654068347e3831b8a825e6e88573033580536c4b9.png/1024.png', rating: 5, specs: [{label: 'CPU', value: 'i9-12900HX'}, {label: 'GPU', value: 'RTX 3080 Ti'}] },
      { id: 306, name: 'MSI Raider GE76 12UHS', price: 64917.00, image: 'https://asset.msi.com/resize/image/global/product/product_1642578502846995393d3b76a0c5fc345229302639.png/1024.png', rating: 5, specs: [{label: 'CPU', value: 'i7-12700H'}, {label: 'GPU', value: 'RTX 3080'}] },
      { id: 307, name: 'MSI Vector GP76 12UHSO', price: 64388.00, image: 'https://asset.msi.com/resize/image/global/product/product_1642580194098939c086ac06832269550b12bc1476.png/1024.png', rating: 4, specs: [{label: 'CPU', value: 'i7-12700H'}, {label: 'GPU', value: 'RTX 3080'}] },
      { id: 308, name: 'MSI Crosshair 15 R6E', price: 34999.00, image: 'https://asset.msi.com/resize/image/global/product/product_1642581458e0be217983699965a25032509170e515.png/1024.png', rating: 4, specs: [{label: 'Tema', value: 'Rainbow 6'}, {label: 'GPU', value: 'RTX 3070'}] },
    ],

    // Product Detail Mock (Proxying a real Gaming Laptop for PDP)
    currentProduct: {
      id: 999,
      name: 'MSI Katana GF66 12UC-247MX',
      sku: 'KATANA-GF66-12UC',
      price: 31985.25,
      image: 'https://m.media-amazon.com/images/I/71yxQ9XaIwL._AC_UL320_.jpg',
      description: 'Afila tu juego con la Katana GF66. Equipada con procesador Intel Core i5-12500H de 12ª generación y gráficos NVIDIA GeForce RTX 3050, esta laptop está diseñada para desatar un verdadero rendimiento durante el juego. Incluye pantalla de 144Hz para una claridad visual sin igual.',
      specs: [
        { label: 'CPU', value: 'i5-12500H' },
        { label: 'GPU', value: 'RTX 3050' },
        { label: 'RAM', value: '8GB DDR4' },
        { label: 'SSD', value: '512GB NVMe' }
      ]
    }
  }),
  getters: {
    getAllProducts: (state) => state.products,
    getFeatured: (state) => state.newProducts
  },
  actions: {
    getProductById(id) {
      // Search all lists for ID
      let found = this.products.find(p => p.id === id) ||
                  this.newProducts.find(p => p.id === id) ||
                  this.customBuilds.find(p => p.id === id) ||
                  this.laptops.find(p => p.id === id)
      
      if (!found && id === 999) return this.currentProduct
      return found
    }
  }
})
