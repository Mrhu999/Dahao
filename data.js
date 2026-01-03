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
window.onload = function() {
  const modal = document.getElementById("modal"); // 获取 modal 元素

  // 打开弹窗
  function openModal() {
    modal.style.display = "flex";
  }

  // 关闭弹窗
  function closeModal() {
    modal.style.display = "none";
  }

  // 渲染过滤器
  renderFilters();
  renderGallery();
};
function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    console.log('选择的文件:', file.name);
    // 这里可以进一步添加上传文件的代码
  }
}
function submitForm() {
  const title = document.getElementById('title').value;  // 获取标题
  const tags = document.getElementById('tags').value;    // 获取标签
  const description = document.getElementById('description').value; // 获取描述
  const file = document.getElementById('fileInput').files[0];  // 获取文件

  // 这里可以进一步处理上传文件和发布操作
  console.log('提交数据:', title, tags, description, file);

  // 在这里，你可以通过 Ajax 或者其他方法发送请求到后端
}
function handleFileUpload() {
  const formData = new FormData();
  const file = document.getElementById('fileInput').files[0];

  if (file) {
    formData.append('file', file);

    fetch('上传API接口', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('上传成功:', data);
    })
    .catch(error => {
      console.error('上传失败:', error);
    });
  }
}
const file = document.getElementById('fileInput').files[0]; // 获取文件
function handleFileSelect(event) {
  const file = event.target.files[0];  // 获取文件
  if (file) {
    console.log('选择的文件:', file.name);  // 打印文件名
  }
}
