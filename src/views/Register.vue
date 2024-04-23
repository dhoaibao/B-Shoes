<template>
    <main>
        <div class="register-container">
            <h1 class="h1-login">Đăng ký</h1>
            <form class="form-login" @submit.prevent="addAccount">
                <div class="input-row">
                    <label for="name" class="label-login">Họ tên:</label>
                    <input class="input-register" type="text" id="name" v-model="account.name" required>
                </div>
                <!-- <div class="input-row">
                    <label for="address" class="label-login">Địa chỉ:</label>
                    <input class="input-register" type="text" id="address" v-model="account.address" required>
                </div> -->
                <div class="input-row">
                    <label for="phone" class="label-login">Số điện thoại:</label>
                    <input class="input-register" type="text" id="phone" v-model="account.phone" required>
                </div>
                <div class="input-row">
                    <label for="email" class="label-login">Email:</label>
                    <input class="input-register" type="email" id="email" v-model="account.email" required>
                </div>
                <div class="input-row">
                    <label for="password" class="label-login">Mật khẩu:</label>
                    <input class="input-register" type="password" id="password" v-model="account.password" required>
                </div>
                <div class="input-row">
                    <label for="cf-password" class="label-login">Nhập lại mật khẩu:</label>
                    <input class="input-register" type="password" id="cf-password" v-model="confirmPassword" required>
                </div>
                <button type="submit" class="button-login">Đăng ký</button>
            </form>
            <p class="p-login">Bạn đã có tài khoản? <router-link to="/login">Đăng nhập</router-link></p>
        </div>
    </main>
</template>

<script>
import AccountService from '/src/services/account.service';

export default {
    data() {
        return {
            account: {
                name: '',
                gender: '',
                phone: '',
                email: '',
                address: '',
                password: ''
            },
            confirmPassword: ''
        };
    },

    methods: {
        async addAccount() {
            if (this.account.password !== this.confirmPassword) {
                alert('Mật khẩu nhập lại không khớp!');
                return;
            }
            try {
                await AccountService.create(this.account);
                // Clear the form
                this.account = {
                    name: '',
                    gender: '',
                    phone: '',
                    email: '',
                    address: '',
                    password: ''
                };
                this.confirmPassword = '';
                alert('Đăng ký thành công!');
                this.$router.push('/login')
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>