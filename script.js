document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  // Cria as 14 redações automaticamente
  for (let i = 1; i <= 14; i++) {
    const section = document.createElement("section");
    section.id = `redacao${i}`;
    section.innerHTML = `
      <h2>Redação ${i}</h2>
      <img src="imagens/redacao${i}.jpg" alt="Imagem da Redação ${i}">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Pellentesque vel sem id ipsum sagittis dapibus. Nulla facilisi. 
      Integer blandit enim sit amet risus tincidunt, a tempus magna pretium. 
      Mauris vehicula ante sed nisi convallis, nec placerat felis suscipit.</p>
    `;
    main.appendChild(section);
  }

  // Cria página de agradecimentos
  const agradecimentos = document.createElement("section");
  agradecimentos.id = "agradecimentos";
  agradecimentos.innerHTML = `
    <h2>💖 Agradecimentos</h2>
    <img src="imagens/agradecimentos.jpg" alt="Agradecimentos">
    <p>Gostaria de agradecer a todos que me apoiaram durante essa jornada: 
    professores, colegas, familiares e amigos. Cada palavra escrita é fruto de aprendizado e inspiração. Muito obrigada!</p>
  `;
  main.appendChild(agradecimentos);
});

function showPage(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top: 0, behavior: "smooth"});
}
