async function fetchData() {
    try {
        const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
        
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const record = await res.json();
        
        // Assuming the data array has at least one entry
        document.getElementById("date").innerHTML = record.data[0].date;
        document.getElementById("areaName").innerHTML = record.data[0].areaName;
        document.getElementById("latestBy").innerHTML = record.data[0].latestBy;
        document.getElementById("deathNew").innerHTML = record.data[0].deathNew;
    } catch (error) {
        console.error("An error occurred:", error);
        // Handle the error appropriately, such as displaying an error message on the page
    }
}

fetchData();
