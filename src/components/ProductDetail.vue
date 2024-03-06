<template>
  <div class="bg-gray-100 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="product" class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
            <img
              class="w-full h-full object-cover"
              :src="this.image"
              :alt="product.name"
            />
          </div>
          <div class="flex -mx-2 mb-4">
            <div class="w-1/2 px-2">
              <button
                @click="showID()"
                class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            {{ product.name }}
          </h2>

          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">Price:</span>
              <span class="text-gray-600">{{ product.price }}</span>
            </div>
            <div>
              <span class="font-bold text-gray-700">Availability:</span>
              <span class="text-gray-600">In Stock</span>
            </div>
          </div>
          <div class="mb-4">
            <span class="font-bold text-gray-700">Product Description:</span>
            <p class="text-gray-600 text-sm mt-2">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductDetail",
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      image: require("@/assets/images/logo.png"),
      product: [],
    };
  },
  methods: {
    ...mapActions(["addToCart"]),
    showID() {
      console.log(this.$route.params);
    },
  },
  mounted() {},
};
</script>
