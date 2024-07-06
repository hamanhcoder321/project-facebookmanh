var storyList = document.querySelector('.story-list');
var storyItems = document.querySelectorAll('.story-item');
var leftArrow = document.querySelector('.left-arrow');
var rightArrow = document.querySelector('.right-arrow');

var currentIndex = 0;
var itemsPerPage = 4; 

function updateStoryList() {
    var totalItems = storyItems.length;
    var visibleItems = Math.min(itemsPerPage, totalItems);
    storyItems.forEach(item => item.style.display = 'none');
    for (var i = currentIndex; i < currentIndex + visibleItems; i++) {
        if (i < totalItems) {
            storyItems[i].style.display = 'block';
        }
    }
    var offset = currentIndex * (storyItems[0].clientWidth + 10); 
    storyList.style.transform = `translateX(-${offset}px)`;
}

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateStoryList();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < storyItems.length - itemsPerPage) {
        currentIndex++;
        updateStoryList();
    }
});

window.addEventListener('resize', updateStoryList);

updateStoryList();

document.getElementById('profile-icon').addEventListener('click', function() {
    const dropdownMenu = document.querySelector('.profile-dropdown');
    dropdownMenu.classList.toggle('profile-dropdown-visible');
    dropdownMenu.classList.toggle('dropdown-menu-hidden');
});

window.addEventListener('click', function(event) {
    const profileIconContainer = document.getElementById('profile-icon-container');
    const dropdownMenu = document.querySelector('.profile-dropdown');
    if (!profileIconContainer.contains(event.target)) {
        dropdownMenu.classList.add('dropdown-menu-hidden');
        dropdownMenu.classList.remove('profile-dropdown-visible');
    }
});

//nút like và comment
// Xử lý sự kiện khi click vào nút Like
document.addEventListener('DOMContentLoaded', function() {
    // Xử lý sự kiện khi click vào biểu tượng Like
    var likeBtns = document.querySelectorAll('.far.fa-thumbs-up');

    likeBtns.forEach(function(likeBtn) {
        likeBtn.addEventListener('click', function() {
            this.classList.toggle('active'); // Thêm hoặc xóa class 'active' để thay đổi màu sắc
        });
    });
});

// Hàm hiển thị comment box khi click vào biểu tượng Comment
function showCommentBox() {
    // Đoạn code để hiển thị comment box, bạn có thể thay thế bằng các thao tác cụ thể khi cần
    console.log('Comment box được hiển thị');
}

