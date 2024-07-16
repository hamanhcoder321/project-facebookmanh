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
});
document.addEventListener("DOMContentLoaded", function() {
    const userLinks = document.querySelectorAll('.user-link ul li');

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
            const chatApp = document.getElementById('chat-app');
            chatApp.style.display = 'block';
        });
    });

    // Handle click events on slide-bar-2 items to hide slide-bar-2 and show chats-app on mobile
    const slideBar2Items = document.querySelectorAll('.slide-bar-2 .chats-icon, .slide-bar-2 .search-input,.slide-bar-2 .user-link');

    slideBar2Items.forEach((item) => {
        item.addEventListener('click', function() {
            const slideBar2 = document.querySelector('.slide-bar-2');
            const chatsApp = document.querySelector('.chats-app');

            slideBar2.classList.add('hidden');
            chatsApp.classList.add('show');
        });
    });

    // Handle click events on story items to display corresponding content
    const storyItems = document.querySelectorAll('.story-item');

    storyItems.forEach((storyItem) => {
        storyItem.addEventListener('click', function() {
            const storyCaption = storyItem.querySelector('.story-caption').textContent;

            // Example action: replace chat-messages content with the clicked story item's caption
            const chatMessages = document.querySelector('.chat-messages');
            chatMessages.innerHTML = `
                <div class="message received">
                    <div class="message-content">${storyCaption}</div>
                </div>
            `;
            
            // Display the chat-app element
            const chatApp = document.getElementById('chat-app');
            chatApp.style.display = 'block';
        });
    });
});