<template lang="html">
  <div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Carousel items -->
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="{
          hidden: currentIndex !== index,
          'duration-700 ease-in-out': currentIndex !== index,
        }"
        data-carousel-item
      >
        <img
          :src="item.image"
          class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          width="300"
          height="300"
          :alt="'Slide ' + (index + 1)"
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
    >
      <button
        v-for="(item, index) in items"
        :key="index"
        type="button"
        :class="{
          'w-3 h-3 rounded-full': true,
          'bg-gray-900': currentIndex === index,
          'bg-gray-400': currentIndex !== index,
        }"
        @click="setCurrentIndex(index)"
        aria-current="true"
        :aria-label="'Slide ' + (index + 1)"
        :data-carousel-slide-to="index"
      ></button>
      <img src="" alt="" />
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="prevSlide"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="nextSlide"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </span>
    </button>
  </div>

  <!--product-->

  <div
    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
  >
    <h1 class="text-3xl text-blue-400 mx-3 py-5">Products</h1>
    <div
      class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      <a
        v-for="product in products"
        :key="product.id"
        :href="product.href"
        class="group"
      >
        <div
          class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
        >
          <img
            :src="this.image"
            :alt="product.imageAlt"
            class="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
          {{ product.price }}
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
    <router-link
      to="/product"
      class="float-end py-10 text-gray-400 hover:text-blue-300"
      ><span>View ALl Products </span
      ><font-awesome-icon
        icon="fa-solid fa-angles-right"
        class="text-gray-400 hover:text-blue-300"
    /></router-link>
  </div>

  <!--image-->
  <h1 class="text-3xl text-blue-400 mx-32 py-5">Images</h1>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mx-32 my-9">
    <div class="grid gap-4">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "HomePageView",

  data() {
    return {
      currentIndex: 0,
      items: [
        { image: require("@/assets/images/logo.png") },
        { image: require("@/assets/images/jordan.png") },
      ],
      products: [],
      image: require("@/assets/images/logo.png"),
    };
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["countCartItems"]),
    // map the 'countCartItems' getter
  },
  methods: {
    ...mapActions(["addToCart", "liveSearch", "getProduct"]),
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    getProduct() {
      axios
        .get("http://127.0.0.1:8000/api/products")
        .then((response) => {
          // Assuming the response contains an array of products
          this.products = response.data; // Assign products data
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    async user() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            Authorization: `Bearer ${"21|144FI3dVvD0dG0HSJNYKfsUM3hrVH85eVmgWWs8e9feb45c3"}`, // Replace `yourAuthToken` with the actual token
          },
        });
        // Assuming your backend API returns user data
        console.log("User data:", response.data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    },
  },

  mounted() {
    this.getProduct();
    this.user(); // Call the user method to fetch user data after component mount
  },
};
</script>
