<script setup>
import Breadcrumbs from './Breadcrumbs.vue'
import ServiceIcons from './ServiceIcons.vue'

const breadcrumbs = ['Contact Us']
</script>

<template>
  <div class="contact-view">
    <div class="container">
      <Breadcrumbs :items="breadcrumbs" />
      
      <div class="page-header">
        <h1>Contact Us</h1>
        <p>We love hearing from you, our Shop customers.<br>Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
      </div>

      <div class="contact-layout">
        <!-- Contact Form -->
        <div class="contact-form-wrapper">
          <form class="contact-form" @submit.prevent>
            <div class="form-row">
              <div class="form-group">
                <label>Your Name <span>*</span></label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div class="form-group">
                <label>Your Email <span>*</span></label>
                <input type="email" placeholder="Your Name" />
              </div>
            </div>
            
            <div class="form-group">
              <label>Your Phone Number</label>
              <input type="tel" placeholder="Your Phone" />
            </div>
            
            <div class="form-group">
              <label>What's on your mind? <span>*</span></label>
              <textarea placeholder="Jot us a note and we'll get back to you as quickly as possible" rows="6"></textarea>
            </div>
            
            <button class="btn btn-primary submit-btn">Submit</button>
          </form>
        </div>

        <!-- Contact Info Sidebar -->
        <div class="contact-info-card">
           <div class="info-item">
              <div class="icon">📍</div>
              <div class="details">
                 <h4>Address:</h4>
                 <p>1234 Street Address City Address, 1234</p>
              </div>
           </div>
           
           <div class="info-item">
              <div class="icon">📞</div>
              <div class="details">
                 <h4>Phone:</h4>
                 <p>(00) 1234 5678</p>
              </div>
           </div>
           
           <div class="info-item">
              <div class="icon">🕒</div>
              <div class="details">
                 <h4>We are open:</h4>
                 <p>Monday - Thursday: 9:00 AM - 5:30 PM</p>
                 <p>Friday 9:00 AM - 6:00 PM</p>
                 <p>Saturday: 11:00 AM - 5:00 PM</p>
              </div>
           </div>
           
           <div class="info-item">
              <div class="icon">✉️</div>
              <div class="details">
                 <h4>E-mail:</h4>
                 <a href="mailto:shop@email.com">shop@email.com</a>
              </div>
           </div>
        </div>
      </div>
    </div>
    
    <ServiceIcons />
  </div>
</template>

<style scoped>
.contact-view {
  background: white;
  padding-bottom: 2rem;
}

.page-header {
  margin: 1rem 0 3rem;
}

.page-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-header p {
  color: #666;
  line-height: 1.6;
}

.contact-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  font-size: 0.9rem;
}

.form-group label span {
  color: #dc2626;
}

.form-group input, 
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-family: inherit;
  outline: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--color-primary);
}

.submit-btn {
  align-self: flex-start;
  padding: 0.75rem 3rem;
  border-radius: 50px;
}

/* Info Card */
.contact-info-card {
  background: #f3f4f6;
  padding: 2rem;
  border-radius: 4px; /* Slight radius or none per design */
  height: fit-content;
}

.info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.icon {
  font-size: 1.25rem;
}

.details h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.details p, .details a {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
  text-decoration: none;
}

.details a {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
