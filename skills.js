

    // // Navigation simulation (keep multi-page placeholder consistency)
    // const home = document.getElementById('homeNav');
    // const portfolio = document.getElementById('portfolioNav');
    // const about = document.getElementById('aboutNav');
    // const contact = document.getElementById('contactNav');

    // function alertPage(page) {
    //   alert(`📄 "${page}" page — coming soon. Meanwhile, explore my Skills or reach out!\n\nContact: hello@Brinard.dev`);
    // }

    if(home) home.addEventListener('click', (e) => { e.preventDefault(); alertPage('Home'); });
    if(portfolio) portfolio.addEventListener('click', (e) => { e.preventDefault(); alertPage('Portfolio'); });
    if(about) about.addEventListener('click', (e) => { e.preventDefault(); alertPage('About'); });
    if(contact) contact.addEventListener('click', (e) => { e.preventDefault(); alert("📬 Get in touch: hello@ibrahim.dev | WhatsApp +234 812 345 6789. I usually respond within a few hours."); });
