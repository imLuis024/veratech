<script setup>
import Breadcrumbs from './Breadcrumbs.vue'
import ServiceIcons from './ServiceIcons.vue'

const breadcrumbs = ['Terms & Conditions']

const sections = [
  { id: 'definitions', title: 'Definitions & Interpretation' },
  { id: 'general', title: 'General' },
  { id: 'quotations', title: 'Quotations' },
  { id: 'prices', title: 'Prices / Taxes' },
  { id: 'payment', title: 'Terms of Payment' },
  { id: 'credit', title: 'Credit Accounts' },
  { id: 'ownership', title: 'Change of Ownership' },
  { id: 'info', title: 'Information on the Products Suppled' },
  { id: 'delivery', title: 'Delivery' }
]

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="terms-view">
    <div class="container">
      <Breadcrumbs :items="breadcrumbs" />
      <h1 class="page-title">Shop Terms & Conditions</h1>
      
      <h2 class="subtitle">GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES</h2>

      <div class="terms-layout">
         <!-- Content Column -->
         <div class="terms-content">
            <section id="definitions">
               <h3>Definitions & Interpretation</h3>
               <p>In the following Terms and Conditions of Sale, unless the context requires otherwise:</p>
               <ul class="definitions-list">
                  <li>(a) "Shop" means Shop Pty Ltd (ABN 12 345 678 901);</li>
                  <li>(b) "Customer" means the person or corporation placing an order for the purchase of goods or services from Shop;</li>
                  <li>(c) "Products" means any goods, materials, equipment or services provided to the Customer by Shop;</li>
                  <li>(d) If the Customer comprises more than one person, each of those person's liability is joint and several;</li>
                  <li>(e) References to a party or a person includes any form of entity and their respective successors, assigns and representatives;</li>
                  <li>(f) For all periods and times specified in clauses 5 and 6, time is of the essence; and</li>
                  <li>(g) All references to currency are references to Australian dollars.</li>
               </ul>
            </section>

            <section id="general">
               <h3>General</h3>
               <p>By ordering the Products and/or accepting delivery of the Products from Shop, the Customer agrees that it is bound by these Terms and Conditions of Sale. Customer orders, including orders placed via the internet, are subject to acceptance by Shop. The acceptance of the Customer's order by Shop is expressly made conditional upon the Customer's assent to these Terms and Conditions which will prevail notwithstanding anything that may be stated to the contrary on the Customer's order. Shop reserves the right to vary any of these terms at any time and any subsequent orders placed by the Customer will constitute an acceptance of the terms as varied. Once a Customer order has been placed and accepted by Shop, the Customer agrees that the Customer has no right to cancel or vary the order at any time, unless agreed upon in writing by both parties.</p>
            </section>

            <section id="quotations">
               <h3>Quotations</h3>
               <p>Any quotation by Shop to the Customer will be open for acceptance by the Customer within the period stated in the quotation or, where no period is stated, within seven (7) days from the date of the quotation. Thereafter, prices stated in the quotation may be varied by Shop without notice to the Customer.</p>
            </section>

            <section id="prices">
               <h3>Prices / Taxes</h3>
               <p>The prices charged by and payable to Shop will be the ruling prices applicable at the time of order placement, provided that the Products are accepted for delivery within a reasonable time. Prices are subject to change without notice. Recommended retail prices are provided for indicative purposes only and there is no obligation to comply with that recommendation. It is agreed that should the Customer for any reason acquire the quantity of Products less than ordered, pricing adjustments may apply. Prices quoted include GST, but do not include any other tax or duty, which is in addition to the price and is to be paid by the Customer at the time of payment for the Products.</p>
            </section>

            <section id="payment">
               <h3>Terms of Payment</h3>
               <p>Credit card payments may attract a surcharge, and Shop will inform the Customer if this is to be the case before processing the transaction.</p>
               <p>Unless otherwise agreed in writing by Shop, where Shop has not agreed in writing to provide commercial credit to the Customer, the total purchase price for Products supplied will be due for payment in cash prior to delivery.</p>
               <p>Where Shop has agreed in writing to provide commercial credit to the Customer, the Customer must make payments in accordance with the payment terms provided by Shop.</p>
               <p>Where Shop has approved the provision of a commercial credit arrangement with the Customer but has not provided notice of the payment terms to the Customer, the Customer must pay the total purchase price for Products supplied within seven days of the statement date.</p>
               <p>Credit Card Payment at an invoice or transaction level may also be offered to the Customer as a stand-alone payment method, or in conjunction with Credit Card Direct Debit Authorisation.</p>
            </section>
            
            <section id="credit">
               <h3>Credit Accounts</h3>
               <p>Any commercial credit arrangements that are provided to the Customer by Shop will continue until terminated by Shop at its sole discretion. In the event that Shop terminates the Customer's commercial credit arrangement, the Customer will be notified in writing and termination will take effect upon receipt of that notification by the Customer.</p>
            </section>

            <section id="ownership">
               <h3>Change of Ownership</h3>
               <p>Trading accounts are approved by Shop based on the information supplied and the representations made by the Customer. In the event that there is a change in ownership of the Customer, whether total or partial, the Customer must immediately provide written notice to Shop informing Shop of these changes. Until Shop receives written notice from the Customer of a change in ownership, the Customer (including where it is a company or trustee, each of the Directors thereof) holds Shop indemnified against any and all losses, unpaid accounts, interest damages, costs, charges, fees and expenses incurred or suffered by Shop in trading with any person, company (including the same company but with a different shareholder or shareholders) or other entity (including a trust) which may have purchased the Customer's business or any interest in the Customer's business or any of the shares in the Customer and used the Customer's previously approved account for trading.</p>
            </section>

            <section id="info">
               <h3>Information on the Products Suppled</h3>
               <p>All descriptive specifications, illustrations, drawings, data, dimensions and weights furnished by Shop or otherwise contained in catalogues or other advertising material are approximate only and represent general descriptions of the goods, are not incorporated within this agreement, and do not form part of the description of the goods sold under this or any other agreement, unless otherwise agreed to in writing by Shop in which case such information will be subject to recognised trade tolerances.</p>
            </section>

            <section id="delivery">
               <h3>Delivery</h3>
               <p>The means of delivering the Products to the Customer will be at Shop's discretion. Shop reserves the right to deliver Products in part deliveries. In the event that Shop incurs additional costs for meeting special (i.e. Tasmania / Northern Territory Deliveries) or urgent delivery arrangements, these additional costs may be charged to the Customer and may include the cost of airfreight where it is not the normal method of delivery. The Customer agrees to accept delivery of the Products sold at any time during normal business hours.</p>
               <p>Shop will not be liable for any loss or damage resulting from any late delivery of the Products and late delivery will not entitle the Customer to rescind or repudiate the Customer's order for the Products.</p>
            </section>
         </div>

         <!-- Sidebar Column -->
         <aside class="terms-sidebar">
            <div class="sidebar-sticky">
               <ul>
                  <li v-for="section in sections" :key="section.id">
                     <a href="#" @click.prevent="scrollToSection(section.id)">{{ section.title }}</a>
                  </li>
               </ul>
            </div>
         </aside>
      </div>
    </div>
    
    <ServiceIcons />
  </div>
</template>

<style scoped>
.terms-view {
  width: 100%;
  background: white;
  padding-bottom: 2rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0 1rem;
}

.subtitle {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.terms-layout {
  display: flex;
  gap: 4rem;
  position: relative;
  margin-bottom: 4rem;
}

.terms-content {
  flex: 1;
}

.terms-sidebar {
  width: 250px;
  flex-shrink: 0;
}

.sidebar-sticky {
  position: sticky;
  top: 100px; /* Adjust based on header height */
  background: #f5f7fa;
  padding: 1.5rem;
  border-radius: 4px;
}

.sidebar-sticky ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-sticky li {
  margin-bottom: 0.75rem;
}

.sidebar-sticky a {
  text-decoration: none;
  font-size: 0.85rem;
  color: #666;
  display: block;
}

.sidebar-sticky a:hover {
  text-decoration: underline;
  color: #000;
}

/* Content Styling */
section {
  margin-bottom: 2.5rem;
  scroll-margin-top: 120px; /* Offset for sticky header */
}

h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
}

.definitions-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.definitions-list li {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
}

@media (max-width: 900px) {
  .terms-layout {
    flex-direction: column-reverse;
  }
  
  .terms-sidebar {
    width: 100%;
    margin-bottom: 2rem;
  }
  
  .sidebar-sticky {
    position: static;
  }
}
</style>
