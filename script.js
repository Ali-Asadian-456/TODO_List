window.onload = function(){

let userList = document.querySelector('.name-list')
let listInput = document.querySelector('.list-input')
let btn = document.querySelector('.addListButton')

btn.addEventListener('click' , function(){
const newUser = document.createElement('li')
const name = document.createTextNode(listInput.value)



    // ایجاد دکمه برای حذف سطرها
    const deleteBtn = document.createElement('button'); 
    deleteBtn.textContent = '×'; // اضافه کردن علامت ضربدر به دکمه
    deleteBtn.classList.add('delete-btn'); // افزودن کلاس برای سبک‌دهی

newUser.appendChild(deleteBtn)
newUser.appendChild(name)
userList.appendChild(newUser)

listInput.value=''






})





// userList.addEventListener('click', function(e) {
//   if (e.target.tagName === 'LI') { // بررسی اینکه فقط روی <li> کلیک شده
//       e.target.remove(); // حذف عنصر کلیک شده
//   }

// });



userList.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON' && e.target.classList.contains('delete-btn') ) { // بررسی اینکه روی یک دکمه کلیک شده است
    const li = e.target.parentNode; // گرفتن عنصر والد دکمه (li)
    li.remove(); // حذف عنصر li
  }
});





}