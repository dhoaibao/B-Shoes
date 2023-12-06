<template>
    <footer>
        <div class="footer-container">
            <div class="profile-pic">
                <!-- <img src="src/assets/img/profile_picture.jpg" alt="Profile Picture" /> -->
            </div>
            <div class="about-me">
                <h4>Dương Hoài Bảo - B2103488</h4>
                <p>Bài tập lớn Phát triển ứng dụng Web - CT449</p>
            </div>
            <div class="contact-info">
                <h5>Liên hệ với tôi:</h5>
                <a href="https://www.facebook.com/dhbao2505" target="_blank">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://github.com/dhbao2505" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/dhbao2505/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
        <div class="copy">
            <p>Copyright &copy;
                <span v-text="new Date().getFullYear()">
                </span> Duong Hoai Bao
            </p>
        </div>
    </footer>
</template>