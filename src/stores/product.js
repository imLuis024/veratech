import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    // Catalog Products (from CatalogView mock)
    products: [
      { id: 1, name: 'MSI PS Series (20)', image: 'https://placehold.co/150x150/111/fff?text=Model+1', rating: 5, reviews: 4, onSale: false, price: 499.00 },
      { id: 2, name: 'MSI PS Series (20)', image: 'https://placehold.co/150x150/111/fff?text=Model+2', rating: 5, reviews: 4, onSale: false, price: 499.00 },
      { id: 3, name: 'MSI PS Series (20)', image: 'https://placehold.co/150x150/111/fff?text=Model+3', rating: 5, reviews: 4, onSale: true, price: 499.00, oldPrice: 599.00 },
      { id: 4, name: 'MSI PS Series (20)', image: 'https://placehold.co/150x150/111/fff?text=Model+4', rating: 5, reviews: 4, onSale: false, price: 499.00 },
      { id: 5, name: 'MSI PS Series (20)', image: 'https://placehold.co/150x150/111/fff?text=Model+5', rating: 5, reviews: 4, onSale: false, price: 499.00 },
      { id: 6, name: 'MSI PS Series (20)', image: 'https://placehold.co/150x150/111/fff?text=Model+6', rating: 5, reviews: 4, onSale: false, price: 499.00 },
      { id: 7, name: 'MSI PS Series (20)', image: 'https://placehold.co/150x150/111/fff?text=Model+7', rating: 5, reviews: 4, onSale: false, price: 499.00 },
      { id: 8, name: 'MSI PS Series (20)', image: 'https://placehold.co/150x150/111/fff?text=Model+8', rating: 5, reviews: 4, onSale: false, price: 499.00 },
      { id: 9, name: 'MSI PS Series (20)', image: 'https://placehold.co/150x150/111/fff?text=Model+9', rating: 5, reviews: 4, onSale: false, price: 499.00 },
      { id: 10, name: 'MSI PS Series (20)', image: 'https://placehold.co/150x150/111/fff?text=Model+10', rating: 5, reviews: 4, onSale: false, price: 499.00 },
    ],

    // New Products (from HomeCatalog)
    newProducts: [
      { id: 101, name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 Multitouch All-In-One', price: 499.00, rating: 2, image: 'https://placehold.co/150x150?text=Prod1', onSale: false },
      { id: 102, name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 Multitouch All-In-One', price: 499.00, rating: 4, image: 'https://placehold.co/150x150?text=Prod2', onSale: false },
      { id: 103, name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 Multitouch All-In-One', price: 499.00, rating: 5, image: 'https://placehold.co/150x150?text=Prod3', onSale: false },
      { id: 104, name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 Multitouch All-In-One', price: 499.00, rating: 3, image: 'https://placehold.co/150x150?text=Prod4', onSale: false },
      { id: 105, name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 Multitouch All-In-One', price: 499.00, rating: 4, image: 'https://placehold.co/150x150?text=Prod5', onSale: false },
      { id: 106, name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 Multitouch All-In-One', price: 499.00, rating: 4, image: 'https://placehold.co/150x150?text=Prod6', onSale: false },
    ],

    // Custom Builds (from HomeCatalog)
    customBuilds: [
      { id: 201, name: 'MSI Infinite X Plus 9SD-254AU Gaming Desktop', price: 4999.00, image: 'https://placehold.co/150x180/333/fff?text=Build1' },
      { id: 202, name: 'MSI Infinite X Plus 9SD-254AU Gaming Desktop', price: 4999.00, image: 'https://placehold.co/150x180/333/fff?text=Build2' },
      { id: 203, name: 'MSI Infinite X Plus 9SD-254AU Gaming Desktop', price: 4999.00, image: 'https://placehold.co/150x180/333/fff?text=Build3' },
      { id: 204, name: 'MSI Infinite X Plus 9SD-254AU Gaming Desktop', price: 4999.00, image: 'https://placehold.co/150x180/333/fff?text=Build4' },
    ],

    // Laptops (from HomeCatalog)
    laptops: [
      { id: 301, name: 'MSI GS66 Stealth 10SFS-032AU 15.6" 300Hz Gaming Laptop', price: 4999.00, image: 'https://placehold.co/150x120/111/fff?text=Laptop1', rating: 4 },
      { id: 302, name: 'MSI GS66 Stealth 10SFS-032AU 15.6" 300Hz Gaming Laptop', price: 4999.00, image: 'https://placehold.co/150x120/111/fff?text=Laptop2', rating: 3 },
      { id: 303, name: 'MSI GS66 Stealth 10SFS-032AU 15.6" 300Hz Gaming Laptop', price: 4999.00, image: 'https://placehold.co/150x120/111/fff?text=Laptop3', rating: 5 },
      { id: 304, name: 'MSI GS66 Stealth 10SFS-032AU 15.6" 300Hz Gaming Laptop', price: 4999.00, image: 'https://placehold.co/150x120/111/fff?text=Laptop4', rating: 4 },
      { id: 305, name: 'MSI GS66 Stealth 10SFS-032AU 15.6" 300Hz Gaming Laptop', price: 4999.00, image: 'https://placehold.co/150x120/111/fff?text=Laptop5', rating: 5 },
    ],

    // Product Detail Mock
    currentProduct: {
      id: 999,
      name: 'MSI MPG Trident 3',
      sku: '12345678',
      price: 3799.00,
      image: 'https://placehold.co/500x500/111/fff?text=MSI+MPG+Trident+3',
      description: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty',
      specs: [
        { label: 'CPU', value: 'i7 10th Gen' },
        { label: 'GPU', value: 'RTX 2060 SUPER' },
        { label: 'RAM', value: '16GB DDR4' },
        { label: 'Storage', value: '512GB SSD' }
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
