# Product Management Onboarding (Guía de Gestión de Productos)

Currently, the application uses a **Local Database** powered by `Pinia` (a Javascript state management library). This means all your products are stored in a single file in your code, rather than a remote server.

## 📍 Where to Edit (Dónde Moverle)

**File Path:** [`src/stores/product.js`](../src/stores/product.js)

To add, edit, or remove products, you simply need to modify the lists inside this file.

---

## 🛠 How to Add a Product

Open `src/stores/product.js` and look for the `state` object. You will see several lists (arrays):

1.  **`products`**: The main list used for the **Catalog Page** (MSI PS Series).
2.  **`newProducts`**: The products shown in the **New Products** grid on the Home page.
3.  **`customBuilds`**: The products in the **Custom Builds** section.
4.  **`laptops`**: The products in the **MSI Laptops** section.

### Step 1: Copy a Template

Copy the code block below to create a new product object.

```javascript
{
  id: UNIQUE_NUMBER,       // Must be unique (e.g., 20)
  name: 'Product Name',    // The title of the product
  price: 999.00,           // Number (no quotes)
  image: 'https://...',    // URL to image (or placeholder)
  rating: 5,               // 1-5 Number
  reviews: 0,              // Number of reviews
  onSale: false            // true or false
},
```

### Step 2: Paste into the List

Find the list you want to add to (e.g., `products: [ ... ]`) and paste your new object at the end, **making sure to add a comma `,` after the previous item**.

#### Example: Adding to Catalog

```javascript
    products: [
      { id: 1, name: 'Existing Product', ... },
      // ... existing items ...
      { id: 10, name: 'Last Existing Product', ... }, // <--- Don't forget this comma!

      // ✅ YOUR NEW PRODUCT:
      {
        id: 11,
        name: 'My New Super Laptop',
        image: 'https://placehold.co/150x150?text=My+Laptop',
        rating: 5,
        reviews: 0,
        onSale: true,
        price: 1299.00
      }
    ],
```

---

## 🖼 Images

Currently, the app uses **Placehold.co** for images.

- To use real images, put your `.jpg` or `.png` files in the `public/images` folder (you may need to create it).
- Then change the `image` field to: `image: '/images/my-laptop.jpg'`

## 📝 Product Detail Page (PDP)

The "Product Detail" view currently loads data dynamically based on the ID clicked in the catalog.

- If you add a product with `id: 50` in the Catalog, clicking it will try to load product #50.
- Ensure your global `getProductById` action (already written) can find it. It searches all lists automatically.

## ⚠️ Important Rules

1.  **Unique IDs**: Never use the same `id` twice, even across different lists, to avoid confusion.
2.  **Syntax**: Watch out for commas `,` between items. Missing commas will break the app (White Screen).
3.  **Hot Reload**: As soon as you save `product.js`, the browser will update automatically!
