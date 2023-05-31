const Contact = () => {
    return (
        <div class="flex flex-col justify-center items-center min-h-screen">
            <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
            <div class="bg-white rounded-md p-6 shadow-md w-1/2">
                <div class="mb-4">
                    <label for="name" class="block font-semibold mb-1">Name</label>
                    <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
                </div>
                <div class="mb-4">
                    <label for="email" class="block font-semibold mb-1">Email</label>
                    <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                </div>
                <div class="mb-4">
                    <label for="message" class="block font-semibold mb-1">Message</label>
                    <textarea id="message" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Enter your message"></textarea>
                </div>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
            </div>
        </div>
    )

}
export default Contact;