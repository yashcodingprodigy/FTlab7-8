function submitForm() {
    const customerData = {
        customerName: {
            firstName: document.getElementById('firstName').value,
            middleName: document.getElementById('middleName').value,
            lastName: document.getElementById('lastName').value
        },
        dateOfBirth: document.getElementById('dateOfBirth').value,
        customerContactInformations: [
            {
                contactType: document.getElementById('contactType').value,
                contactValue: document.getElementById('contactValue').value
            }
        ],
        customerIdentifications: [
            {
                idType: document.getElementById('idType').value,
                idNumber: document.getElementById('idNumber').value,
                issuedDate: document.getElementById('issuedDate').value,
                expiryDate: document.getElementById('expiryDate').value
            }
        ],
        customerProofOfIds: [
            {
                documentType: document.getElementById('documentType').value,
                documentNumber: document.getElementById('documentNumber').value,
                issuedDate: document.getElementById('docIssuedDate').value,
                expiryDate: document.getElementById('docExpiryDate').value
            }
        ]
    };

    console.log("Form Data Submitted:", JSON.stringify(customerData, null, 2));

    fetch("http://localhost:8080/api/customer-details", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customerData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response from Server:", data);
        alert("Data successfully submitted!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error submitting data!");
    });
    setTimeout(() => {
        window.location.href = "navigate.html";
    }, 2000);
}
