<script>
    /*let selectedFile;

    function handleFileChange(event) {
        selectedFile = event.target.files[0];
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Perform file upload logic here
        console.log("File uploaded:", selectedFile);
    }*/
</script>

<main>
    <h1>Upload File</h1>
    <form method="post" enctype="multipart/form-data">
        <input type="file" accept=".mp3,.ogg" id="file" name="fileToUpload"  />
        <button type="submit">Upload</button>
    </form>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    h1 {
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input[type="file"] {
        margin-bottom: 1rem;
    }
</style>
