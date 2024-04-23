<template>
    <main>
        
        <div class="login-container">
            <h1 class="h1-login">Đăng nhập</h1>
            <form class="form-login" @submit.prevent="login">
                <label for="phone" class="label-login">Số điện thoại:</label>
                <input class="input-login" type="text" id="phone" v-model="phone" required>
                <label for="password" class="label-login">Mật khẩu:</label>
                <input class="input-login" type="password" id="password" v-model="password" required>
                <button type="submit" class="button-login">Đăng nhập</button>
            </form>
            <a href="#" class="a-login">Quên mật khẩu?</a>
            <p class="p-login">Chưa có tài khoản? <router-link to="/register">Đăng ký</router-link></p>
        </div>
    </main>
</template>

<script>
import AccountService from '/src/services/account.service';

export default {
    data() {
        return {
            phone: '',
            password: ''
        }
    },
    mounted() {
        // this.refreshPage();
    },
    methods: {
        refreshPage() {
            this.$router.go();
        },
        async login() {
            // Fetch the account data when the user submits the form
            const account = await AccountService.getByPhone(this.phone);

            if (this.password === account[0].password) {
                // Simulate a successful login response
                const mockResponse = {
                    data: {
                        success: true,
                        token: 'mock-token'
                    }
                };

                const Response = {
                    data: {
                        user: account[0],
                        token: 'user-token'
                    }
                };

                // Convert the account object to a string
                const accountString = JSON.stringify(Response.data.user);

                // Save the string in localStorage
                localStorage.setItem('user-account', accountString);

                // Save the user's token and redirect to the home page
                localStorage.setItem('user-token', mockResponse.data.token);
                this.$router.push('/');
            } else {
                // Simulate a failed login response
                alert('Số điện thoại hoặc mật khẩu không hợp lệ!');
            }
        }
    }
}
</script>