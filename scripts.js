async function shortenUrl() {
    console.log('From frontEnd');
    
    const urlInput = document.getElementById('url-input').value;
    if (!urlInput) {
        alert("Please enter a valid URL!");
        return;
    }

    // Simulating the URL shortening process (normally you would send a request to your back-end API)
    console.log('Before ', urlInput);
    let shortUrl;
    try {
        // shortUrl = await fetch("http://localhost:3000/", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ urlInput }), // Send data in JSON format
        //   });
        shortUrl = await axios.post('http://localhost:3000/', { url: urlInput });
    } catch (error) {
        console.log('error: ', error);
        
    }
    shortUrl = JSON.stringify(shortUrl.data);
    // const shortUrl = await axios.post('http://localhost:3000/', { url: urlInput });
    console.log('after: ', shortUrl);
    
    
    // Display the shortened URL
    const shortUrlContainer = document.getElementById('short-url-container');
    const shortUrlLink = document.getElementById('short-url');
    shortUrlLink.href = shortUrl;
    shortUrlLink.textContent = shortUrl;
    shortUrlContainer.style.display = 'block';

    // Enable the copy button
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.style.display = 'inline-block';
}

function copyUrl() {
    const shortUrl = document.getElementById('short-url').textContent;
    if (!shortUrl) {
        alert("No URL to copy!");
        return;
    }

    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = shortUrl;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    alert("Short URL copied to clipboard!");
}

window.shortenUrl = shortenUrl;
window.copyUrl = copyUrl;
