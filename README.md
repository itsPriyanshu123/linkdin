<div class="flex justify-center items-center h-screen">
  <!-- Parent Div -->
  <div class="bg-gray-200 p-4 rounded-lg">
    <!-- First Child Div -->
    <div class="flex items-center justify-between">
      <div>
        <!-- First Logo (left) -->
        <img src="left-logo.png" alt="Left Logo" class="w-8 h-8" />
      </div>
      <div>
        <!-- Second Logo (right) -->
        <img src="right-logo.png" alt="Right Logo" class="w-8 h-8" />
      </div>
    </div>
    <!-- Second Child Div -->
    <div class="text-center py-4">
      Some Text Goes Here
    </div>
    <!-- Third Child Div with Comment Input -->
    <div class="text-center">
      <label for="comment" class="block mb-1">Comment</label>
      <input
        type="text"
        id="comment"
        placeholder="Enter your comment"
        class="border-b border-gray-400 p-2 rounded-t-md"
      />
    </div>
    <!-- Fourth Child Div with Three Paragraphs and Checkboxes -->
    <div class="text-center py-4">
      <div class="flex items-center mb-2">
        <input type="checkbox" id="checkbox1" class="mr-2" />
        <p>Paragraph 1</p>
      </div>
      <div class="flex items-center mb-2">
        <input type="checkbox" id="checkbox2" class="mr-2" />
        <p>Paragraph 2</p>
      </div>
      <div class="flex items-center">
        <input type="checkbox" id="checkbox3" class="mr-2" />
        <p>Paragraph 3</p>
      </div>
    </div>
    <!-- Fifth Child Div with Proceed Button -->
    <div class="text-center">
      <button class="bg-blue-500 text-white py-2 px-4 rounded-md">Proceed</button>
    </div>
  </div>
</div>
