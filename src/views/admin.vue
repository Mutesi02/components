<template>
    <div class="container mt-5">
      <h2 class="mb-3">Product Management</h2>
  
      <button class="btn btn-primary mb-3" @click="toggleForm">
        {{ showForm ? 'Cancel' : 'Add Product' }}
      </button>
  
      <!-- Product Form -->
      <div v-if="showForm" class="card p-4 mb-4">
        <h4>{{ isEditing ? 'Edit Product' : 'Add New Product' }}</h4>
        <form @submit.prevent="submitProduct">
          <div class="mb-2">
            <input v-model="productForm.title" placeholder="Title" class="form-control" required />
          </div>
          <div class="mb-2">
            <input v-model.number="productForm.price" type="number" placeholder="Price" class="form-control" required />
          </div>
          <div class="mb-2">
            <input v-model="productForm.category" placeholder="Category" class="form-control" required />
          </div>
          <div class="mb-2">
            <input v-model="productForm.image" placeholder="Image URL" class="form-control" />
          </div>
          <div class="mb-2">
            <textarea v-model="productForm.description" placeholder="Description" class="form-control" required></textarea>
          </div>
          <button class="btn btn-success">{{ isEditing ? 'Update' : 'Add' }}</button>
        </form>
      </div>
  
      <!-- Products Table -->
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.title }}</td>
            <td>${{ product.price }}</td>
            <td>{{ product.description.slice(0, 50) }}...</td>
            <td>{{ product.category }}</td>
            <td>
              <button class="btn btn-outline-info btn-sm me-2" @click="viewProduct(product)" data-bs-toggle="modal" data-bs-target="#productModal">
                👁️
              </button>
              <button class="btn btn-outline-warning btn-sm" @click="editProduct(product)">
                ✏️
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Product Details Modal -->
      <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="productModalLabel">{{ viewingProduct?.title }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" v-if="viewingProduct">
              <img :src="viewingProduct.image" class="img-fluid mb-3" />
              <p><strong>Price:</strong> ${{ viewingProduct.price }}</p>
              <p><strong>Description:</strong> {{ viewingProduct.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'Products',
    data() {
      return {
        products: [],
        productForm: {
          id: null,
          title: '',
          price: 0,
          description: '',
          category: '',
          image: ''
        },
        viewingProduct: null,
        showForm: false,
        isEditing: false
      }
    },
    methods: {
      async fetchProducts() {
        const res = await axios.get('https://fakestoreapi.com/products')
        this.products = res.data
      },
      toggleForm() {
        this.showForm = !this.showForm
        if (!this.showForm) this.resetForm()
      },
      viewProduct(product) {
        this.viewingProduct = product
      },
      editProduct(product) {
        this.productForm = { ...product }
        this.isEditing = true
        this.showForm = true
      },
      async submitProduct() {
        let res
        if (this.isEditing) {
          res = await axios.put(`https://fakestoreapi.com/products/${this.productForm.id}`, this.productForm)
          const index = this.products.findIndex(p => p.id === this.productForm.id)
          this.products[index] = res.data
        } else {
          res = await axios.post('https://fakestoreapi.com/products', this.productForm)
          this.products.push(res.data)
        }
        this.resetForm()
        this.showForm = false
      },
      resetForm() {
        this.productForm = {
          id: null,
          title: '',
          price: 0,
          description: '',
          category: '',
          image: ''
        }
        this.isEditing = false
      }
    },
    mounted() {
      this.fetchProducts()
    }
  }
  </script>
  
  <style scoped>
  table th,
  table td {
    vertical-align: middle;
  }
  .modal-body img {
    max-height: 300px;
    object-fit: contain;
  }
  </style>
  