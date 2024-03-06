<template>
  <h1 class="text-3xl text-blue-400 float-end mr-64 mb-5 mt-5">
    Feature Products
  </h1>

  <div class="container mx-auto flex mt-10">
    <!-- Sidebar -->
    <div class="w-1/6 bg-gray-100 p-4">
      <!-- Sidebar content goes here -->
      <h2 class="text-xl font-semibold mb-4">Categories</h2>
      <!-- List of categories -->
      <ul>
        <li v-for="category in categories" :key="category.id" class="mb-2">
          <router-link
            :to="`/${category.name.toLowerCase()}`"
            class="text-blue-500 hover:underline"
            >{{ category.name }}</router-link
          >
        </li>
      </ul>
    </div>

    <!-- Product List -->

    <div class="w-3/4 p-4">
      <!-- Product grid -->

      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a
          v-for="product in displayedProducts"
          :key="product.id"
          :href="product.href"
          class="group"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
          >
            <router-link
              :to="{ name: 'productpages', params: { id: product.id } }"
            >
              <img
                :src="this.image"
                :alt="product.imageAlt"
                class="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </router-link>
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            ${{ product.price }}
          </p>
          <button
            @click="addToCart(product)"
            class="mt-2 bg-green-500 hover:bg-fuchsia-300 text-white font-bold py-2 px-4 rounded"
          >
            <font-awesome-icon
              icon="fa-solid fa-shopping-cart"
              class="text-black"
            />
            Add to Cart
          </button>
        </a>
      </div>

      <!-- Pagination -->
      <nav class="flex items-center justify-center mt-10 mb-5">
        <ul class="flex space-x-4">
          <li>
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="bg-gray-200 text-gray-600 px-3 py-1 rounded"
            >
              Previous
            </button>
          </li>
          <li v-for="page in totalPages" :key="page">
            <button
              @click="goToPage(page)"
              :class="{
                'bg-blue-500 text-white': currentPage === page,
                'bg-gray-200 text-gray-600': currentPage !== page,
              }"
              class="px-3 py-1 rounded"
            >
              {{ page }}
            </button>
          </li>
          <li>
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="bg-gray-200 text-gray-600 px-3 py-1 rounded"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "ProductList",
  data() {
    return {
      image: require("@/assets/images/logo.png"),
      categories: [
        { id: 1, name: "Men" },
        { id: 2, name: "Women" },
        { id: 3, name: "Kids" },
      ],
      itemsPerPage: 8,
      currentPage: 1,
    };
  },
  computed: {
    ...mapState(["products", "searchTerm"]),
    ...mapGetters(["countCartItems"]),
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.products.slice(startIndex, endIndex);
    },
  },
  methods: {
    ...mapActions(["addToCart", "getProduct", "liveSearch"]),
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<style scoped>
/* You can add scoped styles here if needed */
</style>
