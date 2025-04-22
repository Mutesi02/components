<template>
  <section class="home-wrapper">
    <!-- Hero Section -->
    <div class="hero">
      <h1>🛍 Welcome to FakeStore</h1>
      <p>Your favorite destination for unreal deals and pixel-perfect products.</p>
      <button class="shop-btn">Shop Now</button>
    </div>

    <!-- Featured Products -->
    <div class="featured">
      <h2>🔥 Featured Products</h2>
      <div class="product-grid">
        <div class="product-card" v-for="n in 4" :key="n">
          <!-- <img :src="https://via.placeholder.com/250x200?text=Item+${n}" :alt="Product ${n}" /> -->
          <h3>Product {{ n }}</h3>
          <p>$99.99</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta">
      <h2>Join the Hype</h2>
      <p>Sign up now and stay ahead of the trend. It's all fake, but it’s all fun!</p>
      <button class="signup-btn">Sign Up</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home-wrapper {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1f2937;
  padding: 2rem;
}

.hero {
  text-align: center;
  background: linear-gradient(135deg, #facc15, #fcd34d);
  padding: 4rem 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.shop-btn {
  background-color: #1f2937;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.shop-btn:hover {
  background-color: #374151;
}

.featured {
  margin-bottom: 3rem;
}

.featured h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.product-card {
  background: #fff;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.cta {
  text-align: center;
  background-color: #1f2937;
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
}

.cta h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.signup-btn {
  background-color: #facc15;
  color: #1f2937;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

.signup-btn:hover {
  background-color: #fde68a;
}
</style>