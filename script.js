async function loadData(file) {
    const response = await fetch(file);
    return await response.json();
}

async function initializePage() {
    const profile = await loadData("profile.json");
    document.getElementById("name").textContent = profile.name;
    document.getElementById("description").textContent = profile.description;
    document.getElementById("avatar").src = profile.avatar;
    document.body.style.backgroundImage = `url(${profile.background})`;

    const kinksData = await loadData("kinks.json");
    const kinksDiv = document.getElementById("kinks");
    kinksDiv.innerHTML = `<h3>${kinksData.title}</h3><ul>${kinksData.list.map(k => `<li>${k}</li>`).join('')}</ul>`;

    const triggersData = await loadData("triggers.json");
    const triggersDiv = document.getElementById("triggers");
    triggersDiv.innerHTML = `<h3>${triggersData.title}</h3><ul>${triggersData.list.map(t => `<li>${t}</li>`).join('')}</ul>`;

}

document.addEventListener("DOMContentLoaded", initializePage);
