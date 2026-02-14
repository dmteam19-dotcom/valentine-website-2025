// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Rose",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Joyeuse saint Valentin! Voudrez tu être ma valentine officieuse en distanciel? ",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Est ce que tu veux retrouver l'épanouissement ?",                                    // First interaction
            yesBtn: "Oui",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "jamais, y'a personne qui m'épanoui mieux que toi et tu manque !"           // Secret hover message
        },
        second: {
            text: "Est ce que ma Brune dame folle d'une beauté extracadabrante accepterai de diner se soir en distanciel avec moi ? ",                          // For the love meter
            startText: "Tellement que oui !! ",                                   // Text before the percentage
            nextBtn: "Je préfère te voir enfin envrai j'en ai marre de te ressentir seulement dans mes pensé "                                         // Text for the next button
        },
        third: {
            texte: "Miss Rose (Poort-bientôt si cupidon le veux) voudrais t'elle voir lol 2 et puis par hasard épistolaire m'accompagner dans des une nuit sur un même lit pour pouvoir juste se regarder et se sentir mêlant les souvenir d'un passer à risque mais de tension a un futur excitant" , // The big question!
            yesBtn: "ENFIN",                                             // Text for "Yes" button
            noBtn: "Tu peux me matter toute la nuit avec un accord signé "                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW t'est aller aussi loins c'est qu'on est fait pour être ensemble ",  // Shows when they go past 5000%
        high: "Bravo t'a fini le test on se revoit se revoit se soir chérie faut que tu prenne de de la farine au magasin avant de rentrer",              // Shows when they go past 1000%
        normal: "on se connaît ?"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "J'en ai marre de courir dans tes pensées laisse moi une pause stp je sois essoufflé (jamais autre part) ",
        message: "Même si on se voit pas la rose éternel que j'ai l'habitude de te passer sera en ligne cette fois, par ma promesse que c'était éternel" ,
        emojis: "Est ce que c'est un erreur c'est con et complètement inapproprié et faut que j'aille me faire foutre ? Potentiellement mais la risque ou l'erreur de te/se voir voudra toujours tout le mal de ce monde"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
