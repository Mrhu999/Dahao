const works = [
  {
    title: "户外保温杯 · 电商主视觉",
    img: "https://picsum.photos/800/600?random=1",
    tags: ["电商", "产品", "场景"]
  },
  {
    title: "礼盒组合 · 商业渲染",
    img: "https://picsum.photos/800/600?random=2",
    tags: ["礼盒", "品牌", "电商"]
  }
];

const gallery = document.getElementById("gallery");
const filters = document.getElementById("filters");

const allTags = ["全部", ...new Set(works.flatMap(w => w.tags))];

let current = "全部";

function renderFilters() {
  filters.innerHTML = "";
  allTags.forEach(tag => {
    const btn = document.createElement("button");
    btn.textContent = tag;
    btn.className = tag === current ? "active" : "";
    btn.onclick = () => {
      current = tag;
      renderFilters();
      renderGallery();
    };
    filters.appendChild(btn);
  });
}

function renderGallery() {
  gallery.innerHTML = "";
  works
    .filter(w => current === "全部" || w.tags.includes(current))
    .forEach(w => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${w.img}">
        <div class="info">
          <div>${w.title}</div>
          <div class="tags">#${w.tags.join(" #")}</div>
        </div>
      `;
      gallery.appendChild(card);
    });
}

renderFilters();
renderGallery();
