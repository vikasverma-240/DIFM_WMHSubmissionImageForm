function uploadImages() {
    // Get the file input element
    const inputElement = document.getElementById("img-input");

    // Get the image container and caption container elements
    const imgContainer = document.getElementById("img-container");

    // Clear previous images and captions
    imgContainer.innerHTML = "";

    // Loop through all the selected files
    for (let i = 0; i < inputElement.files.length; i++) {
        const file = inputElement.files[i];

        rowDiv = document.createElement("div");
        rowDiv.classList.add("row")

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("col-lg-6");


        // Create a new image element
        const img = document.createElement("img");
        img.classList.add("img-item");

        // Set the source of the image to the file object
        img.src = URL.createObjectURL(file);
        
        imgDiv.appendChild(img);
        // Add the image to the image container
        imgContainer.appendChild(rowDiv);

        rowDiv.appendChild(imgDiv);

        // Create a new caption element
        const caption = document.createElement("div");
        caption.classList.add("col-lg-6");

        // Set the caption text to the name of the file
        caption.innerHTML = `<h3 class="text-center mt-5">Caption</h3><div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Title</label>
<input type="email" class="form-control" id="exampleInputEmail1"
    aria-describedby="emailHelp">
</div>
<div class="mb-3">
<label for="exampleInputPassword2" class="form-label">Tag</label>
<input type="password" class="form-control" id="exampleInputPassword2">
</div>
<div class="mb-3">
<label for="exampleInputPassword3" class="form-label">Location</label>
<input type="password" class="form-control" id="exampleInputPassword3">
</div>
<div class="mb-3">
<label for="exampleInputPassword4" class="form-label">Challenges</label>
<input type="password" class="form-control" id="exampleInputPassword4">
</div>`;

        // Add the caption to the caption container
        rowDiv.appendChild(caption);
    }
}