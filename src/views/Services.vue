<template>
  <section class="services-wrapper">
    <!-- Header -->
    <div class="services-header">
      <h1>💼 Our Services</h1>
      <p>We offer creative, fictional, and fun services for your fake shopping needs.</p>
    </div>

    <!-- Service Cards -->
    <div class="services-grid">
      <div class="service-card" v-for="(service, index) in services" :key="index">
        <div class="icon">{{ service.icon }}</div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          icon: '🚚',
          title: 'Ultra-Fast Imaginary Delivery',
          description: 'We deliver your fake goods faster than reality — in your dreams, instantly.',
        },
        {
          icon: '🛒',
          title: 'Seamless Fake Checkout',
          description: 'Our checkout experience is smoother than butter, and just as fake.',
        },
        {
          icon: '🤖',
          title: 'AI-Powered Suggestions',
          description: 'Let our algorithm guess your fake desires better than your real friends.',
        },
        {
          icon: '📦',
          title: 'Fictional Returns',
          description: 'Changed your mind? Return your imaginary products with zero hassle.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.services-wrapper {
  padding: 3rem 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f9fafb;
  color: #1f2937;
}

.services-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.services-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.services-header p {
  font-size: 1.1rem;
  color: #6b7280;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.service-card p {
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.5;
}
</style>