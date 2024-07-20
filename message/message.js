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
    totalItems: Lấy tổng số các mục trong danh sách tin.
    visibleItems: Tính số mục sẽ hiển thị dựa trên itemsPerPage và tổng số mục.
    storyItems.forEach(item => item.style.display = 'none'): Ẩn tất cả các mục trong danh sách tin.
    Vòng lặp for: Hiển thị các mục trong khoảng từ currentIndex đến currentIndex + visibleItems.
    offset: Tính khoảng cách dịch chuyển dựa trên chiều rộng của các mục.
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
});

window.addEventListener('resize', updateStoryList);

updateStoryList();

document.addEventListener("DOMContentLoaded", function() {
    const userLinks = document.querySelectorAll('.user-link ul li');

    userLinks.forEach((userLink) => {
        userLink.addEventListener('click', function() {
            const username = userLink.querySelector('.username').textContent.trim();
            const userImageSrc = userLink.querySelector('img').src;

            // Hiển thị tên người dùng và hình ảnh người dùng trong header chat
            const chatHeaderUserInfo = document.querySelector('.chat-header .user-info');
            chatHeaderUserInfo.querySelector('img').src = userImageSrc;
            chatHeaderUserInfo.querySelector('.username').textContent = username;

            // Hiển thị các tin nhắn ví dụ trong phần chat messages (cần thay đổi dữ liệu thực tế)
            const chatMessages = document.querySelector('.chat-messages');
            chatMessages.innerHTML = `
                <div class="message received">
                    <div class="message-content">Hello, how are you?</div>
                </div>
                <div class="message sent">
                    <div class="message-content">I'm good, thank you! How about you?</div>
                </div>
            `;

            // Thêm lớp .chat-active để hiển thị phần chat
            const chatApp = document.getElementById('chat-app');
            chatApp.classList.add('chat-active');
        });
    });

    // Xử lý khi nhấn nút gửi tin nhắn
    const sendMessageBtn = document.getElementById('send-message-btn');
    const messageInput = document.getElementById('message-input');

    sendMessageBtn.addEventListener('click', function() {
        const messageContent = messageInput.value.trim();

        if (messageContent !== '') {
            // Tạo tin nhắn gửi đi và thêm vào phần chat-messages
            const chatMessages = document.querySelector('.chat-messages');
            const sentMessageHTML = `
                <div class="message sent">
                    <div class="message-content">${messageContent}</div>
                </div>
            `;
            chatMessages.insertAdjacentHTML('beforeend', sentMessageHTML);

            // Xóa nội dung trong input sau khi gửi
            messageInput.value = '';
        }
    });

    // Xử lý khi nhấn Enter trong input để gửi tin nhắn
    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessageBtn.click(); // Kích hoạt sự kiện click trên nút gửi tin nhắn
        }
    });
    /*
    document.addEventListener("DOMContentLoaded", function() {...}): Đảm bảo mã chỉ chạy khi DOM đã được tải hoàn toàn.
    userLinks.forEach((userLink) => {...}): Lặp qua các liên kết người dùng và thêm sự kiện nhấp.
    userLink.addEventListener('click', function() {...}): Khi nhấp vào một liên kết người dùng:
    Lấy tên và hình ảnh người dùng.
    Cập nhật thông tin người dùng trong header chat.
    Hiển thị các tin nhắn ví dụ trong phần chat messages.
    Thêm lớp .chat-active để hiển thị phần chat.
    sendMessageBtn.addEventListener('click', function() {...}): Khi nhấn nút gửi tin nhắn:
    Lấy nội dung tin nhắn.
    Tạo và thêm tin nhắn gửi đi vào phần chat messages.
    Xóa nội dung trong input sau khi gửi.
    messageInput.addEventListener('keypress', function(event) {...}): Khi nhấn Enter trong input để gửi tin nhắn:
    Kích hoạt sự kiện click trên nút gửi tin nhắn.
    */
});
document.addEventListener("DOMContentLoaded", function() {
    const userLinks = document.querySelectorAll('.user-link ul li');
    const chatApp = document.getElementById('chat-app');
    const slideBar2 = document.querySelector('.slide-bar-2');
    const chatsApp = document.querySelector('.chats-app');
    const returnIcon = document.querySelector('.return-icon');

    userLinks.forEach((userLink) => {
        userLink.addEventListener('click', function() {
            const username = userLink.querySelector('.username').textContent.trim();
            const userImageSrc = userLink.querySelector('img').src;

            // Display user info in the chat header
            const chatHeaderUserInfo = document.querySelector('.chat-header .user-info');
            chatHeaderUserInfo.querySelector('img').src = userImageSrc;
            chatHeaderUserInfo.querySelector('.username').textContent = username;

            // Display example messages in the chat messages section (replace with actual data as needed)
            const chatMessages = document.querySelector('.chat-messages');
            chatMessages.innerHTML = `
                <div class="message received">
                    <div class="message-content">Hello, how are you?</div>
                </div>
                <div class="message sent">
                    <div class="message-content">I'm good, thank you! How about you?</div>
                </div>
            `;

            // Display the chat-app element
            chatApp.style.display = 'block';

            // Hide slide-bar-2 and show chats-app on mobile
            if (window.innerWidth <= 768) {
                slideBar2.classList.add('hidden');
                chatsApp.classList.add('show');
            }
        });
    });

    // Handle return icon click to show user-link and hide chats-app
    returnIcon.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            slideBar2.classList.remove('hidden');
            chatsApp.classList.remove('show');
        }
    });

    // Handle send message button click
    const sendMessageBtn = document.getElementById('send-message-btn');
    const messageInput = document.getElementById('message-input');

    sendMessageBtn.addEventListener('click', function() {
        const messageContent = messageInput.value.trim();

        if (messageContent !== '') {
            // Create and append sent message
            const chatMessages = document.querySelector('.chat-messages');
            const sentMessageHTML = `
                <div class="message sent">
                    <div class="message-content">${messageContent}</div>
                </div>
            `;
            chatMessages.insertAdjacentHTML('beforeend', sentMessageHTML);

            // Clear input after sending
            messageInput.value = '';
        }
    });

    // Handle Enter key press in message input
    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessageBtn.click(); // Trigger send message button click
        }
    });

    // Handle story item clicks
    const storyItems = document.querySelectorAll('.story-item');

    storyItems.forEach((storyItem) => {
        storyItem.addEventListener('click', function() {
            const storyCaption = storyItem.querySelector('.story-caption').textContent;
            const chatMessages = document.querySelector('.chat-messages');
            chatMessages.innerHTML = `
                <div class="message received">
                    <div class="message-content">${storyCaption}</div>
                </div>
            `;

            // Display the chat-app element
            chatApp.style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const slideBar1 = document.getElementById('slide-bar-1');
    const closeSidebar = document.getElementById('close-sidebar');

    menuIcon.addEventListener('click', function () {
        slideBar1.classList.toggle('active');
        closeSidebar.classList.toggle('active');
    });

    closeSidebar.addEventListener('click', function () {
        slideBar1.classList.remove('active');
        closeSidebar.classList.remove('active');
    });
    /*
    menuIcon.addEventListener('click', function () {...}): Khi người dùng nhấp vào biểu tượng menu (menuIcon), 
    thực hiện đoạn mã bên trong hàm.
    slideBar1.classList.toggle('active'): Thêm hoặc xóa lớp active cho slideBar1. 
    Lớp active thường được dùng để hiển thị hoặc ẩn thanh bên (sidebar) bằng CSS.
    closeSidebar.classList.toggle('active'): Thêm hoặc xóa lớp active cho closeSidebar
    Lớp active thường được dùng để hiển thị hoặc ẩn nút đóng sidebar bằng CSS
    */
});