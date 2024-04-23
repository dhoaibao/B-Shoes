<template>
    <div class="container">
        <h4>Thông tin người dùng</h4>
        <div class="user-info">
            <p><strong>Tên:</strong> {{ user.name }}</p>
            <p><strong>SĐT:</strong> {{ user.phone }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Địa chỉ:</strong> {{ user.address }}</p>
        </div>
        <div>
            <button class="button" @click="logout">Đăng xuất</button>
            <button class="button" @click="changepass">Đổi mật khẩu</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user-account')) || {}
        }
    },
    methods: {
        changepass() {
            this.$router.push('/changepassword');
        },
        logout() {
            localStorage.removeItem('user-token');
            localStorage.removeItem('user-account');
            this.$router.push('/login');
            window.location.reload();
        },
        refreshPage() {
            this.$router.go();
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: 10px auto;
    margin-bottom: 180px;
}

.user-info {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 16px;
    margin-top: 16px;
}

.user-info p {
    margin-bottom: 8px;
}

.button {
    font-size: 16px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 5px;
    margin-top: 10px;
    margin-right: 10px;
}

.button:hover {
    background-color: #e74c3c;
    cursor: pointer;
}
</style>