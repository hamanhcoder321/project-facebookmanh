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
    /*
    Giả sử currentIndex là 2, storyItems[0].clientWidth là 100 pixel, và khoảng cách giữa các ptu là 10 pixel.
    offset = 2 * (100 + 10) = 2 * 110 = 220 pixel.
    */
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
    /*
    storyList: Đại diện cho phần tử chứa danh sách các câu chuyện.
    storyItems: Tất cả các phần tử câu chuyện trong danh sách.
    leftArrow và rightArrow: Các nút điều hướng (mũi tên trái và phải) để di chuyển qua danh sách câu chuyện.
    currentIndex: Chỉ số của câu chuyện hiện tại đang được hiển thị.
    itemsPerPage: Số lượng câu chuyện hiển thị trên một trang.
    updateStoryList(): Hàm này cập nhật danh sách câu chuyện để chỉ hiển thị một số lượng câu chuyện nhất định dựa trên chỉ số hiện tại và số lượng câu chuyện trên mỗi trang. 
    Nó cũng điều chỉnh vị trí của danh sách để câu chuyện hiện tại nằm trong khung nhìn.
    leftArrow.addEventListener('click', ...): Khi nhấp vào mũi tên trái, giảm currentIndex và cập nhật danh sách câu chuyện.
    rightArrow.addEventListener('click', ...): Khi nhấp vào mũi tên phải, tăng currentIndex và cập nhật danh sách câu chuyện.
    window.addEventListener('resize', updateStoryList): Khi kích thước cửa sổ thay đổi, cập nhật danh sách câu chuyện để phù hợp với kích thước mới.
    updateStoryList(): Gọi hàm để đảm bảo danh sách câu chuyện được cập nhật khi trang được tải lần đầu.
    */
});

window.addEventListener('resize', updateStoryList); updateStoryList();


document.getElementById('profile-icon').addEventListener('click', function() {
    const dropdownMenu = document.querySelector('.profile-dropdown');
    dropdownMenu.classList.toggle('profile-dropdown-visible');
    dropdownMenu.classList.toggle('dropdown-menu-hidden');

    /*
    document.getElementById('profile-icon'): Lấy phần tử có ID là profile-icon, thường là biểu tượng hồ sơ trên giao diện người dùng.
    .addEventListener('click', function() {...}): Thêm sự kiện nhấp chuột cho biểu tượng hồ sơ. Khi nhấp vào biểu tượng hồ sơ, hàm bên trong sẽ được gọi.
    const dropdownMenu = document.querySelector('.profile-dropdown'): Lấy phần tử menu thả xuống có lớp profile-dropdown.
    dropdownMenu.classList.toggle('profile-dropdown-visible'): Chuyển đổi (bật hoặc tắt) lớp profile-dropdown-visible trên menu thả xuống. 
    Lớp này thường dùng để hiển thị hoặc làm menu thả xuống trở nên hiển thị.
    dropdownMenu.classList.toggle('dropdown-menu-hidden'): Chuyển đổi (bật hoặc tắt) lớp dropdown-menu-hidden trên menu thả xuống. 
    Lớp này thường dùng để ẩn menu thả xuống.
    */
});

window.addEventListener('click', function(event) {
    const profileIconContainer = document.getElementById('profile-icon-container');
    const dropdownMenu = document.querySelector('.profile-dropdown');
    if (!profileIconContainer.contains(event.target)) {
        dropdownMenu.classList.add('dropdown-menu-hidden');
        dropdownMenu.classList.remove('profile-dropdown-visible');
    }
    
    /*
    window.addEventListener('click', function(event) {...}): Thêm sự kiện nhấp chuột cho toàn bộ cửa sổ. Khi người dùng nhấp ở bất kỳ đâu trên trang, hàm bên trong sẽ được gọi.
    const profileIconContainer = document.getElementById('profile-icon-container'): Lấy phần tử chứa biểu tượng hồ sơ, có ID là profile-icon-container. Đây là phần tử bao quanh biểu tượng hồ sơ và menu thả xuống.
    const dropdownMenu = document.querySelector('.profile-dropdown'): Lấy phần tử menu thả xuống có lớp profile-dropdown.
    if (!profileIconContainer.contains(event.target)): Kiểm tra nếu phần tử mà người dùng nhấp vào (event.target) không nằm trong phần tử chứa biểu tượng hồ sơ (profileIconContainer). Nếu đúng, có nghĩa là người dùng đã nhấp ra ngoài biểu tượng hồ sơ và menu thả xuống.
    dropdownMenu.classList.add('dropdown-menu-hidden'): Thêm lớp dropdown-menu-hidden vào menu thả xuống để ẩn nó
    */
});


//nút like và comment
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
    /*
    IntersectionObserver: Quan sát sự xuất hiện của video trong khung nhìn (viewport).
    observer.observe(video): Quan sát video để phát hoặc tạm dừng tùy thuộc vào việc video có xuất hiện trong khung nhìn hay không
    */
});
// JS cho phần thong báo
document.addEventListener('DOMContentLoaded', function () {
    const bellIcon = document.getElementById('bell-icon');
    const thongbaoLink = document.querySelector('.thongbao-link');

    bellIcon.addEventListener('click', function () {
        thongbaoLink.classList.toggle('dropdown-menu-hidden');
        thongbaoLink.classList.toggle('dropdown-menu-visible');
    });

    document.addEventListener('click', function (event) {
        if (!bellIcon.contains(event.target) && !thongbaoLink.contains(event.target)) {
            thongbaoLink.classList.add('dropdown-menu-hidden');
            thongbaoLink.classList.remove('dropdown-menu-visible');
        }
    });
});
