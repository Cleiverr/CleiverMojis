document.addEventListener('DOMContentLoaded', () => {
    const emojiContainer = document.getElementById('emoji-container');

    // Array de emojis (puedes agregar más)
    const emojis = [
        { src: 'like.png', alt: 'Like Emoji', name: 'Like' },
        { src: 'dislike.png', alt: 'Dislike', name: 'Dislike' },
        { src: 'user.png', alt: 'Miembro', name: 'Miembro' },
        { src: 'hr.png', alt: 'Staff', name: 'Staff' },
        { src: 'mod.png', alt: 'Mod Emoji', name: 'Mod' },
        { src: 'moneda.png', alt: 'Moneda Emoji', name: 'Moneda' },
        { src: 'Alerta_Pink2.png', alt: 'Alerta Emoji', name: 'Advertencia' },
        { src: 'Alerta_Yellow.png', alt: 'Alerta Emoji', name: 'Advertencia 02' },
        { src: 'HBrillante.png', alt: 'Hear Emoji', name: 'Corazon B' },
        { src: 'V.png', alt: 'Check Emoji', name: 'Check' },
        { src: 'X.png', alt: 'X Emoji', name: 'X' },
        { src: 'Play.png', alt: 'Play Emoji', name: 'Play' },
        { src: 'Stop.png', alt: 'Stop Emoji', name: 'Stop' },
        { src: 'Skip.png', alt: 'Skip Emoji', name: 'Skip' },

        { src: 'CorazonCute.png', alt: 'Hear Emoji', name: 'Corazon' },
        { src: 'mod2.png', alt: 'Mod2 Emoji', name: 'Mod 02' },
        { src: 'corazon.png', alt: 'Corazon Emoji', name: 'Corazon 02' },
        { src: 'heart.png', alt: 'CorazonS Emoji', name: 'Corazon S' },
        { src: 'C4.png', alt: 'Check2 Emoji', name: 'Check 02' },
        // Puedes agregar más emojis aquí CorazonCute.png
    ]; 

    // Función para agregar emojis al contenedor
    function addEmojis() {
        emojis.forEach(emoji => {
            const emojiDiv = document.createElement('div');
            emojiDiv.classList.add('emoji');
            emojiDiv.innerHTML = `
                <img src="${emoji.src}" alt="${emoji.alt}">
                <span>${emoji.name}</span>
            `;
            emojiContainer.appendChild(emojiDiv);
        });
    }

    // Agregar emojis al cargar la página
    addEmojis();
});
