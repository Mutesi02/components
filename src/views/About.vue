<template>
  <section class="about-wrapper">
    <!-- Intro Section -->
    <div class="intro-section">
      <h1>About FakeStore</h1>
      <p class="tagline">Turning imagination into retail magic — one fake product at a time.</p>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <div class="text-column">
        <h2>Who We Are</h2>
        <p>
          FakeStore was founded with a simple yet delightful mission: to create the most enjoyable fake shopping experience
          on the internet. We offer a curated selection of products that don’t exist — and we do it with style.
        </p>

        <h2>Why Fake?</h2>
        <p>
          Because real is overrated. We believe in the power of creativity, humor, and beautifully crafted user experiences. Whether
          you're window-shopping or building your own fake store, we're here to inspire.
        </p>

        <h2>Our Vision</h2>
        <p>
          To be the number one destination for fictional commerce. We dream big and fake bigger.
        </p>
      </div>

      <div class="image-column">
        <img src="https://via.placeholder.com/450x350?text=Team+FakeStore" alt="Team FakeStore" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about-wrapper {
  padding: 4rem 2rem;
  background: linear-gradient(to bottom right, #ffffff, #f3f4f6);
  color: #1f2937;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

.intro-section {
  text-align: center;
  margin-bottom: 3rem;
}

.intro-section h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #111827;
}

.tagline {
  font-size: 1.25rem;
  color: #6b7280;
}

.content-section {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: flex-start;
}

.text-column {
  flex: 1 1 320px;
}

.text-column h2 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.text-column p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #374151;
}

.image-column {
  flex: 1 1 320px;
  text-align: center;
}

.image-column img {
  width: 100%;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease;
}

.image-column img:hover {
  transform: scale(1.03);
}
</style>