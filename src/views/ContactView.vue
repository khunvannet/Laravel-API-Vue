<template>
    <div class="contact">
                    <div class="flex items-center justify-center mt-10">
                    <h1 class="text-3xl font-bold text-gray-500">Contact<span class="text-green-500">Us</span></h1>
                       </div>
        <div class="container mx-auto max-w-6xl flex justify-between">

            <!-- Contact form -->
            <div class="w-1/2 mt-10">
                <form class="mt-8">
                    <div>
                        <label for="name" class="block text-gray-700">Name</label>
                        <input type="text" id="name" name="name"
                            class="form-input mt-1 block w-full rounded-md border-gray-300" />
                    </div>
                    <div class="mt-4">
                        <label for="email" class="block text-gray-700">Email</label>
                        <input type="email" id="email" name="email"
                            class="form-input mt-1 block w-full rounded-md border-gray-300" />
                    </div>
                    <div class="mt-4">
                        <label for="message" class="block text-gray-700">Message</label>
                        <textarea id="message" name="message" rows="4"
                            class="form-textarea mt-1 block w-full rounded-md border-gray-300"></textarea>
                    </div>
                    <div class="mt-4">
                        <button type="submit"
                            class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md">Submit</button>
                    </div>
                </form>
            </div>
            <!-- Embedded map -->
            <div class="w-1/2 mx-28 mb-20">
                <div class="mt-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125087.04515497276!2d104.9034752!3d11.5539968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1708069584989!5m2!1sen!2skh"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactView',
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>

<style>
.form-input,
.form-textarea {
    background-color: #f3f4f6;
    /* Light gray background for inputs */
}

.form-input:focus,
.form-textarea:focus {
    outline: none;
    /* Remove the default focus outline */
    border-color: #4f46e5;
    /* Change border color on focus */
}</style>
