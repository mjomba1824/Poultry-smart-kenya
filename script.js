
/* ==========================================
   POULTRY SMART KENYA
   MAIN JAVASCRIPT FILE
========================================== */


/* 1. AUTOMATIC CURRENT YEAR */

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* 2. POULTRY PROFIT CALCULATOR */

const profitForm = document.getElementById("profitForm");

if (profitForm) {

    profitForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get input values
        const chickCost = Number(
            document.getElementById("chickCost").value
        );

        const feedCost = Number(
            document.getElementById("feedCost").value
        );

        const otherCosts = Number(
            document.getElementById("otherCosts").value
        );

        const sales = Number(
            document.getElementById("sales").value
        );

        // Validate inputs
        const values = [
            chickCost,
            feedCost,
            otherCosts,
            sales
        ];

        if (!values.every(value =>
            Number.isFinite(value) && value >= 0
        )) {
            alert("Please enter valid positive amounts.");
            return;
        }

        // Calculate expenses
        const totalExpenses =
            chickCost + feedCost + otherCosts;

        // Calculate profit or loss
        const profit = sales - totalExpenses;

        // Display results
        const result =
            document.getElementById("calculatorResult");

        if (result) {

            result.innerHTML = `
                <h3>POULTRY BUSINESS RESULTS</h3>

                <p>Total Expenses:
                    KSh ${totalExpenses.toLocaleString("en-KE")}
                </p>

                <p>Total Sales:
                    KSh ${sales.toLocaleString("en-KE")}
                </p>

                <h3>
                    ${profit >= 0 ? "Estimated Profit" : "Estimated Loss"}:
                    KSh ${Math.abs(profit).toLocaleString("en-KE")}
                </h3>

                <p>
                    ${profit >= 0
                        ? "Your sales are higher than your recorded expenses."
                        : "Your recorded expenses are higher than your sales."
                    }
                </p>
            `;

            result.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }

    });

}


/* 3. POULTRY MANAGEMENT CHECKLIST */

// Add a checklist to the calculator area
const calculatorSection =
    document.getElementById("calculator");

if (calculatorSection) {

    const checklist = document.createElement("div");

    checklist.className = "card";

    checklist.innerHTML = `
        <h2>Daily Poultry Management Checklist</h2>

        <p>Tick each task after completing it.</p>

        <div class="checklist-items">

            <label>
                <input type="checkbox">
                Check availability of clean drinking water
            </label>

            <label>
                <input type="checkbox">
                Check poultry feed
            </label>

            <label>
                <input type="checkbox">
                Clean feeders and drinkers
            </label>

            <label>
                <input type="checkbox">
                Check ventilation and cleanliness
            </label>

            <label>
                <input type="checkbox">
                Observe chickens for unusual behaviour
            </label>

            <label>
                <input type="checkbox">
                Record eggs, deaths and other farm activities
            </label>

        </div>

        <p id="checklistProgress">
            Completed: 0 of 6 tasks
        </p>

        <button type="button" id="resetChecklist" class="btn">
            Reset Checklist
        </button>
    `;

    calculatorSection.appendChild(checklist);

    const checkboxes = checklist.querySelectorAll(
        '.checklist-items input[type="checkbox"]'
    );

    const progress = document.getElementById(
        "checklistProgress"
    );

    function updateProgress() {

        const completed = Array.from(checkboxes)
            .filter(box => box.checked).length;

        progress.textContent =
            `Completed: ${completed} of ${checkboxes.length} tasks`;
    }

    checkboxes.forEach(box => {
        box.addEventListener("change", updateProgress);
    });

    document.getElementById("resetChecklist")
        .addEventListener("click", function() {

            checkboxes.forEach(box => {
                box.checked = false;
            });

            updateProgress();
        });

}


/* 4. PRODUCT SEARCH FUNCTIONALITY */

// Add a search box to the products section
const productsSection =
    document.getElementById("products");

if (productsSection) {

    const searchBox = document.createElement("input");

    searchBox.type = "search";
    searchBox.id = "productSearch";
    searchBox.placeholder =
        "Search products e.g. eggs, chicks, chickens...";

    searchBox.setAttribute(
        "aria-label",
        "Search poultry products"
    );

    searchBox.style.width = "100%";
    searchBox.style.padding = "12px";
    searchBox.style.margin = "20px 0";
    searchBox.style.border = "1px solid #ccc";
    searchBox.style.borderRadius = "6px";

    const heading = productsSection.querySelector("h2");

    heading.insertAdjacentElement("afterend", searchBox);

    const productCards =
        productsSection.querySelectorAll(".card");

    searchBox.addEventListener("input", function() {

        const searchText =
            searchBox.value.toLowerCase().trim();

        productCards.forEach(card => {

            const productName =
                card.textContent.toLowerCase();

            card.style.display =
                productName.includes(searchText)
                    ? ""
                    : "none";

        });

    });

}


/* 5. WHATSAPP PRODUCT ORDERING */

// Add WhatsApp ordering buttons to product cards
const productCards =
    document.querySelectorAll("#products .card");

const whatsappNumber = "254715178092";

productCards.forEach(card => {

    const productName =
        card.querySelector("h3")?.textContent || "Poultry product";

    const button = document.createElement("button");

    button.type = "button";
    button.textContent = "Order via WhatsApp";
    button.className = "btn";

    button.addEventListener("click", function() {

        const message =
            `Hello Poultry Smart Kenya, I am interested in ${productName}. Please share the current price and availability.`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

    card.appendChild(button);

});


/* 6. CONTACT FORM VALIDATION */

const contactSection =
    document.getElementById("contact");

if (contactSection) {

    console.log(
        "Poultry Smart Kenya contact section is ready."
    );

}


/* 7. WEBSITE WELCOME MESSAGE */

console.log(
    "Welcome to Poultry Smart Kenya!"
);

console.log(
    "Learn Smart. Farm Better. Grow Together."
);
