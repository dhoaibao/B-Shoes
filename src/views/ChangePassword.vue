<template>
    <main>
    
        <div class="login-container">
            <h1 class="h1-login">Đổi mật khẩu</h1>
            <form class="form-login" @submit.prevent="changePassword">
                <label for="phone" class="label-login">Nhập mật khẩu cũ:</label>
                <input class="input-login" type="text" id="oldpass" v-model="oldpass" required>
                <label for="password" class="label-login">Nhập mật khẩu mới:</label>
                <input class="input-login" type="password" id="newpass" v-model="newpass" required>
                <label for="password" class="label-login">Nhập lại mật khẩu mới:</label>
                <input class="input-login" type="password" id="renewpass" v-model="renewpass" required>
                <button type="submit" class="button-login">Đổi mật khẩu</button>
            </form>
        </div>
    </main>
</template>

<script>
import AccountService from '/src/services/account.service';

export default {
    data() {
        return {
            oldpass: '',
            newpass: '',
            renewpass: '',
            user: JSON.parse(localStorage.getItem('user-account')) || {}
        }
    },
    methods: {
        async changePassword() {
            if (this.newpass !== this.renewpass) {
                alert('Mật khẩu mới không khớp');
                return;
            }

            const account = await AccountService.get(this.user._id);
            if (this.oldpass !== account.password) {
                alert('Mật khẩu cũ không đúng');
                return;
            }

            account.password = this.newpass;
            await AccountService.update(this.user._id, account);

            // Convert the account object to a string
            const accountString = JSON.stringify(account);

            // Save the string in localStorage
            localStorage.setItem('user-account', accountString);

            alert('Đổi mật khẩu thành công');
        }
    }
}
</script>