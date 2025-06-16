document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("./text/App_text.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.getElementById("tmpBox_c").innerHTML = data;
    } catch (error) {
        console.error("There was a problm with the fetch operation:", error);
    }
});