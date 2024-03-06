import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cartItems: [],
    search: "",
    productId: "",
    productDetail: null,
  },
  getters: {
    countCartItems(state) {
      return state.cartItems.length;
    },
  },
  mutations: {},
  actions: {
    addToCart({ state }, item) {
      let index = state.cartItems.findIndex(
        (product) => product.id === item.id
      );
      if (index !== -1) {
        state.cartItems[index].quantity += 1;
      } else {
        item.quantity = 1;
        state.cartItems.push(item);
      }
    },
    liveSearch({ state }, search) {
      console.log(`STATE: ${search.search}`);
      axios
        .get(
          `http://127.0.0.1:8000/api/products/search/?search=${search.search}`
        )
        .then((response) => {
          state.products = response.data; // Update products with search results
          console.log(`STATE SEARCH: ${state.search}`);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    },

    getProduct({ state }) {
      axios
        .get("http://127.0.0.1:8000/api/products")
        .then((response) => {
          state.products = response.data; // Assign products data
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    getProductDetail({ state }, productId) {
      axios
        .get(`http://127.0.0.1:8000/api/products/${productId.productId}`)
        .then((response) => {
          state.productDetail = response.data; // Update productDetail directly in the state
        })
        .catch((error) => {
          console.error("Error fetching product detail:", error);
        });
    },
  },
  modules: {},
});
