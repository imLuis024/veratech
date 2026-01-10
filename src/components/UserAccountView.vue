<script setup>
import AccountSidebar from './AccountSidebar.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import ServiceIcons from './ServiceIcons.vue'

const breadcrumbs = ['My Dashboard']
</script>

<template>
  <div class="account-view">
    <div class="container">
      <Breadcrumbs :items="breadcrumbs" />
      
      <h1 class="page-title">My Dashboard</h1>
      
      <div class="account-layout">
        <AccountSidebar />
        
        <div class="dashboard-content">
           <h2 class="section-heading">Account Information</h2>
           
           <div class="info-grid">
              <!-- Contact Information -->
              <div class="info-card">
                 <h3>Contact Information</h3>
                 <div class="card-body">
                    <p class="name">Alex Driver</p>
                    <p class="email">ExampeAdress@gmail.com</p>
                    <div class="card-actions">
                       <a href="#">Edit</a>
                       <a href="#">Change Password</a>
                    </div>
                 </div>
              </div>
              
              <!-- Newsletters -->
              <div class="info-card">
                 <h3>Newsletters</h3>
                 <div class="card-body">
                    <p>You don't subscribe to our newsletter.</p>
                    <div class="card-actions">
                       <a href="#">Edit</a>
                    </div>
                 </div>
              </div>
           </div>
           
           <div class="address-book-section">
              <div class="book-header">
                 <h3 class="section-sub-heading">Address Book</h3>
                 <a href="#" class="manage-link">Manage Addresses</a>
              </div>
              
              <div class="info-grid">
                 <!-- Default Billing Address -->
                 <div class="info-card">
                    <h3>Default Billing Address</h3>
                    <div class="card-body">
                       <p>You have not set a default billing address.</p>
                       <div class="card-actions">
                          <a href="#">Edit Address</a>
                       </div>
                    </div>
                 </div>
                 
                 <!-- Default Shipping Address -->
                 <div class="info-card">
                    <h3>Default Shipping Address</h3>
                    <div class="card-body">
                       <p>You have not set a default shipping address.</p>
                       <div class="card-actions">
                          <a href="#">Edit Address</a>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
    
    <ServiceIcons />
  </div>
</template>

<style scoped>
.account-view {
  background: white;
  padding-bottom: 2rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0 2rem;
}

.account-layout {
  display: flex; /* Sidebar + Content */
  gap: 3rem;
  margin-bottom: 4rem;
}

.dashboard-content {
  flex: 1;
}

.section-heading {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.section-sub-heading {
  font-size: 1.1rem;
  font-weight: 700;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem; /* Space between cards */
  margin-bottom: 3rem;
}

.info-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.card-body p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.card-actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
}

.card-actions a {
  color: #0066cc;
  text-decoration: underline;
  font-size: 0.85rem;
}

.book-header {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.manage-link {
  color: #0066cc;
  font-size: 0.85rem;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .account-layout {
    flex-direction: column;
  }
  
  .account-sidebar {
    width: 100%;
    min-height: auto;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
