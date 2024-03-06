<template lang="html">
  <header class="lg:block sticky top-0 z-10 bg-white">
    <nav class="flex items-center justify-between py-5 px-10 shadow-lg">
      <router-link to="/" class="text-3xl font-bold text-gray-500">
        Net<span class="text-green-500">Shop</span>
      </router-link>

      <div class="flex gap-8">
        <!-- Navigation menu -->
        <router-link
          to="/"
          class="font-[600] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >Home</router-link
        >
        <!-- Navigation menu -->
        <router-link
          to="/product"
          class="font-[600] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >Products</router-link
        >

        <router-link
          to="/about"
          class="font-[600] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >About</router-link
        >
        <router-link
          to="/contact"
          class="font-[600] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >Contact</router-link
        >
      </div>
      <div class="relative flex items-center">
        <form @submit.prevent="searchProducts">
          <label for="searchInput" class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 pr-8">
              <font-awesome-icon
                icon="fa-solid fa-search"
                class="text-gray-400"
              />
            </span>
            <input
              v-model="search"
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for recipes..."
              type="text"
              name="search"
              id="searchInput"
            />
          </label>
        </form>

        <!-- Icon for user account with dropdown -->
        <div class="ml-4 relative">
          <router-link to="">
            <font-awesome-icon
              icon="fa-solid fa-user"
              class="text-gray-400"
              @click="toggleDropdown"
            />
          </router-link>
          <!-- Dropdown content -->
          <div
            v-if="showDropdown"
            class="absolute top-10 right-0 bg-white border border-gray-200 rounded shadow-md py-2 mt-2 h-32 w-24"
          >
            <router-link
              to="/register"
              class="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
            >
              <font-awesome-icon
                icon="fa-solid fa-user"
                class="text-gray-400"
              />
              Signup
            </router-link>
            <router-link
              to="/login"
              class="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
            >
              <font-awesome-icon
                icon="fa-solid fa-sign-in"
                class="text-gray-400"
              />
              Login
            </router-link>
            <router-link
              to="/login"
              class="block px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
            >
              <font-awesome-icon
                icon="fa-solid fa-sign-out"
                class="text-gray-400"
              />
              Logout
            </router-link>
          </div>
        </div>

        <!-- Icon for adding to cart -->
        <span class="ml-4">
          <router-link
            to="/cart"
            class="block mx-2 text-sm font-[400] text-gray-800 hover:bg-gray-100"
          >
            <font-awesome-icon
              icon="fa-solid fa-shopping-cart"
              class="text-gray-400"
            />
            cart({{ countCartItems }})
          </router-link>
        </span>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "HeaderVue",
  components: {},
  data() {
    return {
      showDropdown: false,
      search: "", // Define the search property
    };
  },
  computed: {
    ...mapState(["products"]), // Map the 'products' state
    ...mapGetters(["countCartItems"]),
  },
  methods: {
    ...mapActions(["liveSearch"]),
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    searchProducts() {
      this.liveSearch({ search: this.search });
      console.log(`SEARCH TERM : ${this.search}`);
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
