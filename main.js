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
    console.log('Comment box được hiển thị');
}

//bình luận
document.querySelectorAll('.comment-form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        //.forEach(form => { ... }): NodeList có phương thức forEach, 
       // cho phép bạn lặp qua từng phần tử trong danh sách. Trong trường hợp này, nó lặp qua từng biểu mẫu (form) với lớp .comment-form.
        
        const commentInput = this.querySelector('.comment-input');
        const commentText = commentInput.value.trim();

        if (commentText !== '') {
            const commentContainer = this.nextElementSibling;

            // Tạo một phần tử bình luận mới
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.textContent = commentText;

            // Thêm bình luận mới vào container bình luận
            commentContainer.appendChild(commentElement);

            // Xóa nội dung của input sau khi gửi bình luận
            commentInput.value = '';
        }
    });
});

// Hàm để hiển thị bình luận
function showCommentBox(commentIcon) {
    const commentSection = commentIcon.closest('.dangtinmoi-moi').querySelector('.comment-section');
    commentSection.style.display = 'block';
}

//video phát tự động
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    });

    observer.observe(video);
});