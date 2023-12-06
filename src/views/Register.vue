<template>
    <main>
        <div class="register-container">
            <h1 class="h1-login">Đăng ký</h1>
            <form class="form-login">
                <div class="input-row">
                    <label for="name" class="label-login">Họ tên:</label>
                    <input class="input-register" type="text" id="name" name="name" required>
                </div>
                <div class="input-row">
                    <label for="address" class="label-login">Địa chỉ:</label>
                    <input class="input-register" type="text" id="address" name="address" required>
                </div>
                <div class="input-row">
                    <label for="phone" class="label-login">Số điện thoại:</label>
                    <input class="input-register" type="text" id="phone" name="phone" required>
                </div>
                <div class="input-row">
                    <label for="email" class="label-login">Email:</label>
                    <input class="input-register" type="email" id="email" name="email" required>
                </div>
                <div class="input-row">
                    <label for="username" class="label-login">Tên đăng nhập:</label>
                    <input class="input-register" type="text" id="username" name="username" required>
                </div>
                <div class="input-row">
                    <label for="password" class="label-login">Mật khẩu:</label>
                    <input class="input-register" type="password" id="password" name="password" required>
                </div>
                <div class="input-row">
                    <label for="cf-password" class="label-login">Nhập lại mật khẩu:</label>
                    <input class="input-register" type="password" id="cf-password" name="cf-password" required>
                </div>
                <button type="submit" class="button-login">Đăng ký</button>
            </form>
            <p class="p-login">Đã có tài khoản? <router-link to="/login">Đăng nhập</router-link></p>
        </div>
    </main>
</template>