import { articles } from "./data.js";
const toggleBtn = document.querySelector('.toggle-btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', function() {
    toggleBtn.classList.toggle('slide');
    document.documentElement.classList.toggle("dark-theme")
    document.querySelectorAll(".row span").classList.toggle("dark-span")
  });

const item = articles.map((article)=>{
    const { title, date, length, snippet } = article;
    const formattedDate = moment(date).format("YYYY-MM-DD")
   return`
   <div class="col-12">
    <div class="article-item">
    <h2>${title}</h2>
<span>${formattedDate}</span>      
<span>${length} min read</span>
<p class="my-2">
${snippet}
</p>
    </div>
</div>
   `
})
document.querySelector(".row").innerHTML = item