<template>
  <table class="min-w-full bg-white border border-gray-200 mt-10 mb-20">
    <thead class="bg-gray-50">
      <tr>
        <th
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          No
        </th>
        <th
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Images
        </th>
        <th
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Name
        </th>
        <th
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          QTY
        </th>
        <th
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Price
        </th>
        <th
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          SubTotal
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr v-for="(item, index) in sortedCartItems" :key="item.id">
        <td class="px-6 py-4 whitespace-nowrap">{{ index + 1 }}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <img :src="this.image" width="60" height="60" alt="" srcset="" />
        </td>
        <td class="px-6 py-4 whitespace-nowrap">{{ item.name }}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <button
            @click="decreaseQuantity(item)"
            class="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md mr-2"
          >
            -
          </button>
          <span>{{ item.quantity }}</span>
          <button
            @click="increaseQuantity(item)"
            class="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md ml-2"
          >
            +
          </button>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">${{ item.price }}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          ${{ calculateSubtotal(item) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "CartView",
  components: {},
  data() {
    return {
      image: require("@/assets/images/logo.png"),
    };
  },
  computed: {
    ...mapState(["cartItems"]),
    ...mapGetters(["countCartItems"]),
    // map the 'countCartItems' getter
    sortedCartItems() {
      return this.cartItems.slice().sort((a, b) => a.id - b.id);
    },
  },
  methods: {
    calculateSubtotal(item) {
      console.log("Price:", item.price, typeof item.price);
      console.log("Quantity:", item.quantity, typeof item.quantity);

      return item.price * item.quantity;
    },

    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
      // Update subtotal
      this.$forceUpdate();
    },
    increaseQuantity(item) {
      item.quantity++;
      // Update subtotal
      this.$forceUpdate();
    },
  },
};
</script>

<style>
/* Add your table styling here */
/* You can leave this empty if you are using Tailwind classes directly */
</style>
