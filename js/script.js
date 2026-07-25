// ==========================================
// JK Winners Investment
// Live WTI Oil Price
// ==========================================

const API_KEY = "5RJ9MFDS8C6YE3S0";

async function loadWTI() {

    const ticker = document.getElementById("commodityTicker");

    try {

        ticker.innerHTML = "Loading market data...";

        const response = await fetch(
            `https://www.alphavantage.co/query?function=WTI&interval=daily&apikey=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("Network response was not OK");
        }

        const data = await response.json();

        console.log(data);

        if (!data.data || data.data.length === 0) {
            ticker.innerHTML = "No market data available";
            return;
        }

        const latest = data.data[0];

        ticker.innerHTML = `
            <span>🛢️ WTI CRUDE OIL</span>
            <span>$${latest.value} / barrel</span>
            <span>${latest.date}</span>
        `;

    } catch (error) {

        console.error(error);

        ticker.innerHTML = "Unable to load market data";

    }

}

loadWTI();

setInterval(loadWTI, 3600000);