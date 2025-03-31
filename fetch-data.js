function fetchData(endpoint) {
    fetch(`http://localhost:8080/api/${endpoint}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("responseContainer").innerHTML = 
                `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("responseContainer").innerHTML = 
                `<p style="color:red;">Error fetching data</p>`;
        });
}
