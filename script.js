// Load JSON Data
async function loadData(file) {
    const response = await fetch(file);
    return await response.json();
}

async function initializePage() {
    // Load profile
    const profile = await loadData("profile.json");
    document.getElementById("name").textContent = profile.name;
    document.getElementById("description").textContent = profile.description;
    document.getElementById("avatar").src = profile.avatar;
    document.body.style.backgroundImage = `url(${profile.background})`;

    // Load kinks
    const kinksData = await loadData("kinks.json");
    const kinksDiv = document.getElementById("kinks");
    kinksDiv.innerHTML = `<h3>${kinksData.title}</h3><ul>${kinksData.list.map(k => `<li>${k}</li>`).join('')}</ul>`;

    // Load triggers
    const triggersData = await loadData("triggers.json");
    const triggersDiv = document.getElementById("triggers");
    triggersDiv.innerHTML = `<h3>${triggersData.title}</h3><ul>${triggersData.list.map(t => `<li>${t}</li>`).join('')}</ul>`;

    console.log("Elysia's Portfolio Loaded.");
}

// Initialize
document.addEventListener("DOMContentLoaded", initializePage);
